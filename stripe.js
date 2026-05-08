// ═══════════════════════════════════════════════════
// FORGETAROUTE — stripe.js
// Gestion des abonnements Stripe
// ═══════════════════════════════════════════════════

var PRICE_MENSUEL = 'price_1TUbK909pMGzPu5QtpTVZ8et';
var PRICE_ANNUEL  = 'price_1TUbKg09pMGzPu5QxWhifyR2';
var _SUPA_URL = 'https://eulkccufeddlhbltekxm.supabase.co';
var _SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1bGtjY3VmZWRkbGhibHRla3htIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwMjk3NTUsImV4cCI6MjA5MzYwNTc1NX0._2ozGx0-RRpKqxXlvZpYnmXqO_8IIg8y9cO5g4J9g2g';


// ── Récupérer le token Supabase ──
function getToken() {
  try {
    // Chercher dans toutes les clés possibles de Supabase
    var keys = ['sb_session', 'supabase.auth.token'];
    // Chercher aussi les clés dynamiques Supabase (sb-xxx-auth-token)
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key && (key.includes('auth-token') || key.includes('sb_session'))) {
        keys.push(key);
      }
    }
    for (var j = 0; j < keys.length; j++) {
      var raw = localStorage.getItem(keys[j]);
      if (!raw) continue;
      var s = JSON.parse(raw);
      // Format nouveau Supabase
      if (s.access_token) {
        if (s.expires_at && Date.now()/1000 > s.expires_at + 300) continue; // tolérance 5min
        return s.access_token;
      }
      // Format avec currentSession
      if (s.currentSession && s.currentSession.access_token) {
        return s.currentSession.access_token;
      }
    }
    return null;
  } catch(e) { return null; }
}

function getUser() {
  try {
    var keys = ['sb_session', 'supabase.auth.token'];
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key && (key.includes('auth-token') || key.includes('sb_session'))) {
        keys.push(key);
      }
    }
    for (var j = 0; j < keys.length; j++) {
      var raw = localStorage.getItem(keys[j]);
      if (!raw) continue;
      var s = JSON.parse(raw);
      if (s.user) return s.user;
      if (s.currentSession && s.currentSession.user) return s.currentSession.user;
    }
    return null;
  } catch(e) { return null; }
}

// ── Créer une session de paiement Stripe Checkout ──
async function lancerPaiement(type) {
  // Essayer de rafraîchir le token si nécessaire
  var token = getToken();
  var user = getUser();

  if (!token && window.sb) {
    var newToken = await window.sb.ensureToken();
    if (newToken) {
      token = newToken;
      user = window.sb._user();
    }
  }

  if (!token || !user) {
    window.location.href = 'auth.html?tab=login&next=abonnement';
    return;
  }

  var priceId = type === 'annuel' ? PRICE_ANNUEL : PRICE_MENSUEL;
  var btn = document.getElementById('btn-' + type);
  if (btn) { btn.textContent = 'Chargement...'; btn.disabled = true; }

  try {
    // Appel à Supabase Edge Function (ou fallback direct Stripe)
    var resp = await fetch(_SUPA_URL + '/functions/v1/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
        'apikey': _SUPA_KEY
      },
      body: JSON.stringify({
        priceId: priceId,
        email: user.email,
        userId: user.id,
        successUrl: 'https://pierrefrancois3594-a11y.github.io/RoutePro/dashboard.html?payment=success',
        cancelUrl: 'https://pierrefrancois3594-a11y.github.io/RoutePro/abonnement.html?payment=cancel'
      })
    });

    var data = await resp.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error(data.error || 'Erreur lors de la création de la session');
    }
  } catch(err) {
    console.error('Stripe error:', err);
    if (btn) { btn.textContent = type === 'annuel' ? 'Choisir l\'annuel' : 'S\'abonner maintenant'; btn.disabled = false; }
    alert('Erreur de paiement. Veuillez réessayer ou nous contacter à contact@forgetaroute.fr');
  }
}

// ── Vérifier le statut abonnement ──
async function verifierAbonnement() {
  var token = getToken();
  if (!token) return { actif: false, plan: null };

  try {
    var data = {};
    try {
      var raw = localStorage.getItem('sb_session');
      data = JSON.parse(raw) || {};
    } catch(e) {}

    // Vérifier dans les métadonnées utilisateur
    var user = data.user;
    if (user && user.user_metadata && user.user_metadata.abonnement === 'premium') {
      return { actif: true, plan: user.user_metadata.plan || 'mensuel' };
    }

    // Sinon vérifier dans la table profils Supabase
    var resp = await fetch(_SUPA_URL + '/rest/v1/profils?id=eq.' + (user ? user.id : ''), {
      headers: { 'apikey': _SUPA_KEY, 'Authorization': 'Bearer ' + token }
    });
    var profils = await resp.json();
    if (profils && profils[0] && profils[0].abonnement === 'premium') {
      return { actif: true, plan: profils[0].plan || 'mensuel' };
    }
  } catch(e) {}

  return { actif: false, plan: null };
}

// ── Gérer le retour après paiement ──
function gererRetourPaiement() {
  var params = new URLSearchParams(window.location.search);
  if (params.get('payment') === 'success') {
    // Afficher message de succès
    var msg = document.createElement('div');
    msg.style.cssText = 'position:fixed;top:80px;left:50%;transform:translateX(-50%);background:#27C93F;color:white;padding:16px 32px;border-radius:6px;font-family:Barlow Condensed,sans-serif;font-size:16px;font-weight:700;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,.3)';
    msg.textContent = '✓ Abonnement activé ! Bienvenue dans ForgeTaRoute Premium';
    document.body.appendChild(msg);
    setTimeout(function() { msg.remove(); }, 5000);
    // Nettoyer l'URL
    window.history.replaceState(null, '', window.location.pathname);
  }
  if (params.get('payment') === 'cancel') {
    var msg2 = document.createElement('div');
    msg2.style.cssText = 'position:fixed;top:80px;left:50%;transform:translateX(-50%);background:#F26522;color:white;padding:16px 32px;border-radius:6px;font-family:Barlow Condensed,sans-serif;font-size:16px;font-weight:700;z-index:9999';
    msg2.textContent = 'Paiement annulé. Vous pouvez réessayer à tout moment.';
    document.body.appendChild(msg2);
    setTimeout(function() { msg2.remove(); }, 4000);
    window.history.replaceState(null, '', window.location.pathname);
  }
}

// ── Appliquer les restrictions freemium ──
function appliquerFreemium(estPremium) {
  if (estPremium) return; // Pas de restriction

  // Limiter à 20 questions par jour
  var data = {};
  try { data = JSON.parse(localStorage.getItem('ftr_stats') || '{}'); } catch(e) {}
  var sessions = data.sessions || [];
  var today = new Date().toDateString();
  var qAujourdHui = sessions
    .filter(function(s) { return new Date(s.ts).toDateString() === today; })
    .reduce(function(a, s) { return a + s.total; }, 0);

  if (qAujourdHui >= 20) {
    // Afficher bannière upgrade
    var banner = document.getElementById('freemium-banner');
    if (banner) banner.style.display = 'flex';
  }
}

// Exposer globalement
window.lancerPaiement = lancerPaiement;
window.verifierAbonnement = verifierAbonnement;
window.gererRetourPaiement = gererRetourPaiement;
window.appliquerFreemium = appliquerFreemium;
