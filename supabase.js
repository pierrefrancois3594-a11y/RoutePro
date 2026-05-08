// ═══════════════════════════════════════════════════
// FORGETAROUTE — supabase.js
// Configuration et fonctions Supabase
// ═══════════════════════════════════════════════════

const SUPA_URL = 'https://eulkccufeddlhbltekxm.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1bGtjY3VmZWRkbGhibHRla3htIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwMjk3NTUsImV4cCI6MjA5MzYwNTc1NX0._2ozGx0-RRpKqxXlvZpYnmXqO_8IIg8y9cO5g4J9g2g';

// ── Client Supabase léger (sans librairie externe) ──
const sb = {

  // Headers communs
  _headers(token) {
    const h = {
      'Content-Type': 'application/json',
      'apikey': SUPA_KEY,
      'Authorization': 'Bearer ' + (token || SUPA_KEY)
    };
    return h;
  },

  // Récupérer le token de session stocké
  _findSession() {
    try {
      // Chercher dans toutes les clés localStorage possibles
      var keys = ['sb_session'];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && (k.includes('auth-token') || k.includes('sb-') && k.includes('auth'))) {
          keys.push(k);
        }
      }
      for (var j = 0; j < keys.length; j++) {
        var raw = localStorage.getItem(keys[j]);
        if (!raw) continue;
        var s = JSON.parse(raw);
        if (s.access_token) return s;
        if (s.currentSession) return s.currentSession;
      }
      return null;
    } catch(e) { return null; }
  },

  _token() {
    try {
      var s = this._findSession();
      if (!s) return null;
      // Tolérance de 5 minutes sur l'expiration
      if (s.expires_at && Date.now() / 1000 > s.expires_at + 300) return null;
      return s.access_token || null;
    } catch(e) { return null; }
  },

  // Récupérer l'utilisateur courant
  _user() {
    try {
      var s = this._findSession();
      if (!s) return null;
      return s.user || null;
    } catch(e) { return null; }
  },

  // ── AUTH ──


  // ── Rafraîchir le token si expiré ──
  async refreshToken() {
    try {
      var s = this._findSession();
      if (!s || !s.refresh_token) return false;
      
      var r = await fetch(SUPA_URL + '/auth/v1/token?grant_type=refresh_token', {
        method: 'POST',
        headers: this._headers(),
        body: JSON.stringify({ refresh_token: s.refresh_token })
      });
      var data = await r.json();
      if (data.access_token) {
        localStorage.setItem('sb_session', JSON.stringify(data));
        return true;
      }
      return false;
    } catch(e) { return false; }
  },

  // ── Vérifier et rafraîchir si nécessaire ──
  async ensureToken() {
    var s = this._findSession();
    if (!s) return null;
    // Si expire dans moins de 5 minutes, rafraîchir
    if (s.expires_at && Date.now()/1000 > s.expires_at - 300) {
      await this.refreshToken();
    }
    return this._token();
  },

  async inscription(email, password, prenom, nom) {
    const r = await fetch(SUPA_URL + '/auth/v1/signup', {
      method: 'POST',
      headers: this._headers(),
      body: JSON.stringify({
        email, password,
        data: { prenom, nom }
      })
    });
    const data = await r.json();
    if (data.access_token) {
      localStorage.setItem('sb_session', JSON.stringify(data));
    }
    return data;
  },

  async connexion(email, password) {
    const r = await fetch(SUPA_URL + '/auth/v1/token?grant_type=password', {
      method: 'POST',
      headers: this._headers(),
      body: JSON.stringify({ email, password })
    });
    const data = await r.json();
    if (data.access_token) {
      // Recalculer expires_at depuis maintenant
      data.expires_at = Math.floor(Date.now() / 1000) + (data.expires_in || 3600);
      localStorage.setItem('sb_session', JSON.stringify(data));
    }
    return data;
  },

  deconnexion() {
    localStorage.removeItem('sb_session');
    window.location.href = 'auth.html';
  },

  estConnecte() {
    return !!this._token();
  },

  utilisateur() {
    return this._user();
  },

  // ── BASE DE DONNÉES ──

  async inserer(table, data) {
    const token = this._token();
    if (!token) return { error: 'Non connecté' };
    const r = await fetch(SUPA_URL + '/rest/v1/' + table, {
      method: 'POST',
      headers: { ...this._headers(token), 'Prefer': 'return=representation' },
      body: JSON.stringify(data)
    });
    return r.json();
  },

  async lire(table, filtres) {
    const token = this._token();
    if (!token) return [];
    let url = SUPA_URL + '/rest/v1/' + table + '?';
    if (filtres) {
      Object.entries(filtres).forEach(([k, v]) => {
        url += k + '=eq.' + encodeURIComponent(v) + '&';
      });
    }
    url += 'order=created_at.desc';
    const r = await fetch(url, {
      headers: this._headers(token)
    });
    return r.json();
  },

  // ── FONCTIONS MÉTIER ──

  async sauvegarderSession(programme, theme, nbQ, nbCorr, nbWrong, dureeSec) {
    const user = this._user();
    if (!user) return null;
    return this.inserer('sessions', {
      user_id: user.id,
      programme, theme,
      nb_questions: nbQ,
      nb_correct: nbCorr,
      nb_wrong: nbWrong,
      duree_sec: dureeSec
    });
  },

  async sauvegarderReponse(sessionId, questionId, programme, theme, correct) {
    const user = this._user();
    if (!user) return null;
    return this.inserer('reponses', {
      user_id: user.id,
      session_id: sessionId,
      question_id: questionId,
      programme, theme, correct
    });
  },

  async sauvegarderExamen(programme, scoreP1, scoreP2, scoreTotal, admis, dureeSec, sujetId) {
    const user = this._user();
    if (!user) return null;
    return this.inserer('examens', {
      user_id: user.id,
      programme,
      score_p1: scoreP1,
      score_p2: scoreP2,
      score_total: scoreTotal,
      admis, duree_sec: dureeSec,
      sujet_id: sujetId
    });
  },

  async getStats() {
    const user = this._user();
    if (!user) return null;

    const [sessions, reponses, examens] = await Promise.all([
      this.lire('sessions', { user_id: user.id }),
      this.lire('reponses', { user_id: user.id }),
      this.lire('examens', { user_id: user.id })
    ]);

    if (!Array.isArray(reponses) || !Array.isArray(sessions) || !Array.isArray(examens)) {
      return null;
    }

    const totalQ = reponses.length;
    const totalCorr = reponses.filter(r => r.correct).length;
    const tauxGlobal = totalQ > 0 ? Math.round(totalCorr / totalQ * 100) : 0;

    // Stats par programme
    const parProg = {};
    ['LEGER','LOURD','ADR'].forEach(prog => {
      const rProg = reponses.filter(r => r.programme === prog);
      const corr = rProg.filter(r => r.correct).length;
      parProg[prog] = {
        total: rProg.length,
        correct: corr,
        taux: rProg.length > 0 ? Math.round(corr / rProg.length * 100) : 0
      };
    });

    // Stats par thème
    const parTheme = {};
    reponses.forEach(r => {
      if (!r.theme) return;
      if (!parTheme[r.theme]) parTheme[r.theme] = { total: 0, correct: 0 };
      parTheme[r.theme].total++;
      if (r.correct) parTheme[r.theme].correct++;
    });
    Object.keys(parTheme).forEach(t => {
      parTheme[t].taux = Math.round(parTheme[t].correct / parTheme[t].total * 100);
    });

    // Examens
    const examensList = Array.isArray(examens) ? examens : [];
    const meilleur = examensList.length > 0
      ? Math.max(...examensList.map(e => e.score_total || 0))
      : 0;
    const nbAdmis = examensList.filter(e => e.admis).length;

    return {
      totalQ, totalCorr, tauxGlobal,
      parProg, parTheme,
      sessions: sessions.length,
      examens: examensList,
      meilleurScore: meilleur,
      nbAdmis,
      user
    };
  }
};

// Exposer globalement
window.sb = sb;
