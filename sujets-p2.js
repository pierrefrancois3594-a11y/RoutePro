// ═══════════════════════════════════════════════════════════════
// ROUTEPRO — 50 SUJETS PARTIE 2 (Questions rédigées + calculs)
// sujets-p2.js — À charger après examen-blanc.html
// Structure : SUJETS_P2.LEGER[25 sujets] + SUJETS_P2.LOURD[25 sujets]
// Chaque sujet = 4 exercices = 100 pts total
// ═══════════════════════════════════════════════════════════════

const SUJETS_P2 = {

// ══════════════════════════════════════════════════
// CPC LÉGER — 25 SUJETS
// ══════════════════════════════════════════════════
LEGER: [

// ────────────── SUJET L-01 ──────────────
[
{id:'L01E1',titre:'Exercice 1 — Coût de revient kilométrique',totalPts:30,
ctx:`Entreprise de livraison : 1 VUL — 55 000 km/an\n• Amortissement : 5 500 €/an\n• Assurance : 1 400 €/an\n• Carburant : 0,09 €/km\n• Entretien : 0,03 €/km\n• Pneus : 0,012 €/km\n• Charges de structure : 3 600 €/an`,
subs:[
{id:'L01-1A',pts:10,num:'Q 1.1',text:"Calculez les charges fixes annuelles totales.",type:'calcul',unit:'€/an',
corr:"10 500 €/an\n= Amortissement 5 500 + Assurance 1 400 + Structure 3 600"},
{id:'L01-1B',pts:10,num:'Q 1.2',text:"Calculez les charges variables annuelles totales.",type:'calcul',unit:'€/an',
corr:"7 260 €/an\n= (0,09 + 0,03 + 0,012) × 55 000 = 0,132 × 55 000"},
{id:'L01-1C',pts:10,num:'Q 1.3',text:"Calculez le CRK complet et le prix minimum HT pour 80 km (marge 20 %).",type:'calcul',unit:'€',
corr:"CRK = (10 500 + 7 260) / 55 000 = 0,323 €/km\nCoût 80 km = 25,84 €\nPrix vente = 25,84 / 0,80 = 32,30 €"},
]},

{id:'L01E2',titre:'Exercice 2 — Seuil de rentabilité',totalPts:25,
ctx:`CA annuel : 75 000 € — Charges variables : 45 000 € — Charges fixes : 22 500 €`,
subs:[
{id:'L01-2A',pts:8,num:'Q 2.1',text:"Calculez la MCV et le taux de MCV.",type:'calcul',unit:'€',
corr:"MCV = 75 000 – 45 000 = 30 000 €\nTaux = 30 000 / 75 000 × 100 = 40 %"},
{id:'L01-2B',pts:9,num:'Q 2.2',text:"Calculez le seuil de rentabilité en chiffre d'affaires.",type:'calcul',unit:'€',
corr:"SR = 22 500 / 0,40 = 56 250 €"},
{id:'L01-2C',pts:8,num:'Q 2.3',text:"Calculez le résultat net avant impôt et dites si l'entreprise est rentable.",type:'calcul',unit:'€',
corr:"Résultat = MCV – CF = 30 000 – 22 500 = 7 500 € bénéfice\nOui, rentable (CA > SR)"},
]},

{id:'L01E3',titre:'Exercice 3 — Accès à la profession',totalPts:25,ctx:'',
subs:[
{id:'L01-3A',pts:10,num:'Q 3.1',text:"Citez et expliquez les 3 conditions cumulatives d'accès à la profession de transporteur public de marchandises.",type:'redige',
corr:"1. Honorabilité professionnelle : absence de condamnations incompatibles.\n2. Capacité financière : fonds propres suffisants (1 800 € 1er VUL + 900 €/VUL suivant).\n3. Capacité professionnelle : attestation CPC obtenue via examen CCI."},
{id:'L01-3B',pts:8,num:'Q 3.2',text:"Un salarié conducteur VUL travaille 45 heures cette semaine. Combien d'heures supplémentaires ? Comment sont-elles majorées ?",type:'redige',
corr:"10 heures supplémentaires (45 – 35).\nMajoration 25 % pour les 8 premières (36e–43e heure).\nMajoration 50 % pour les 2 suivantes (44e–45e heure)."},
{id:'L01-3C',pts:7,num:'Q 3.3',text:"Quelle est la durée légale de conservation des lettres de voiture par une entreprise ?",type:'redige',
corr:"5 ans (prescription commerciale).\n10 ans pour les pièces comptables (obligation fiscale)."},
]},

{id:'L01E4',titre:'Exercice 4 — Réglementation et pratique',totalPts:20,ctx:'',
subs:[
{id:'L01-4A',pts:10,num:'Q 4.1',text:"Qu'est-ce qu'une ZFE-m ? Quelles implications pour un livreur VUL en zone urbaine ?",type:'redige',
corr:"Zone à Faibles Émissions : circulation restreinte selon vignette Crit'Air.\nImplications : vignette obligatoire, risque d'exclusion pour véhicules anciens polluants, nécessité de renouveler le parc, adaptation des itinéraires."},
{id:'L01-4B',pts:10,num:'Q 4.2',text:"Différence entre transport pour compte propre et compte d'autrui. Un artisan peut-il transporter ses outils sans licence ?",type:'redige',
corr:"Compte propre : transport de ses propres MD accessoire à l'activité principale → pas de licence.\nCompte d'autrui : transport pour tiers contre rémunération → licence obligatoire.\nOui, un artisan transportant ses propres matériaux est en compte propre, pas de licence requise."},
]},
],

// ────────────── SUJET L-02 ──────────────
[
{id:'L02E1',titre:'Exercice 1 — Analyse de bilan',totalPts:30,
ctx:`Bilan au 31/12 :\nACTIF : VUL net 15 000 € | Créances clients 7 200 € | Banque 4 800 €\nPASSIF : Capital 8 000 € | Résultat +3 500 € | Emprunt LT 7 000 € | Fournisseurs 3 800 € | Dettes sociales/fisc. 4 700 €`,
subs:[
{id:'L02-1A',pts:10,num:'Q 1.1',text:"Vérifiez l'équilibre du bilan (total actif = total passif).",type:'calcul',unit:'€',
corr:"Actif = 15 000 + 7 200 + 4 800 = 27 000 €\nPassif = 8 000 + 3 500 + 7 000 + 3 800 + 4 700 = 27 000 € ✓"},
{id:'L02-1B',pts:10,num:'Q 1.2',text:"Calculez le FRNG (Fonds de Roulement Net Global) et interprétez.",type:'calcul',unit:'€',
corr:"Capitaux permanents = 8 000 + 3 500 + 7 000 = 18 500 €\nActif immobilisé = 15 000 €\nFRNG = 3 500 € (positif = équilibre financier respecté ✓)"},
{id:'L02-1C',pts:10,num:'Q 1.3',text:"Calculez le BFR et la trésorerie nette.",type:'calcul',unit:'€',
corr:"BFR = 7 200 – (3 800 + 4 700) = –1 300 € (négatif = favorable)\nTrésorerie = FRNG – BFR = 3 500 – (–1 300) = 4 800 € ✓"},
]},

{id:'L02E2',titre:'Exercice 2 — Charges sociales',totalPts:25,
ctx:`Salaire brut conducteur : 2 400 €\nCotisations salariales : 22 % du brut\nCotisations patronales : 44 % du brut`,
subs:[
{id:'L02-2A',pts:8,num:'Q 2.1',text:"Calculez le salaire net à payer au salarié.",type:'calcul',unit:'€',
corr:"Net = 2 400 × (1 – 0,22) = 2 400 – 528 = 1 872 €"},
{id:'L02-2B',pts:9,num:'Q 2.2',text:"Calculez le coût total employeur pour ce salarié.",type:'calcul',unit:'€',
corr:"Cotisations patronales = 2 400 × 44 % = 1 056 €\nCoût total = 2 400 + 1 056 = 3 456 €"},
{id:'L02-2C',pts:8,num:'Q 2.3',text:"Pour 3 heures supplémentaires à 25 % de majoration, quel supplément de coût brut pour l'employeur ?",type:'calcul',unit:'€',
corr:"Taux horaire = 2 400 / 151,67 = 15,82 €/h\nHS majorées = 15,82 × 1,25 × 3 = 59,33 € brut\nCoût employeur HS = 59,33 × 1,44 = 85,43 €"},
]},

{id:'L02E3',titre:'Exercice 3 — Droit commercial',totalPts:25,ctx:'',
subs:[
{id:'L02-3A',pts:10,num:'Q 3.1',text:"Quelles sont les mentions obligatoires d'une facture professionnelle ?",type:'redige',
corr:"Date et numéro de facture, SIRET émetteur, numéro TVA intracommunautaire, nom/adresse client, désignation précise de la prestation, date de prestation, prix unitaire HT, taux de TVA, montant TVA, total TTC, conditions et délai de paiement, pénalités de retard."},
{id:'L02-3B',pts:8,num:'Q 3.2',text:"Quel est le délai légal maximal de paiement entre professionnels ? Quelles sanctions en cas de retard ?",type:'redige',
corr:"60 jours date de facture ou 45 jours fin de mois (loi LME 2008).\nSanctions automatiques dès le 1er jour de retard : pénalités ≥ 3 × taux d'intérêt légal + indemnité forfaitaire de 40 € pour frais de recouvrement."},
{id:'L02-3C',pts:7,num:'Q 3.3',text:"Qu'est-ce que la mise en demeure ? Dans quel cas est-elle utilisée ?",type:'redige',
corr:"Notification formelle enjoignant au débiteur d'exécuter son obligation (lettre recommandée AR ou acte d'huissier).\nUtilisée avant toute action judiciaire. Fait courir les intérêts moratoires. Étape souvent obligatoire avant assignation."},
]},

{id:'L02E4',titre:'Exercice 4 — TVA pratique',totalPts:20,
ctx:`CA HT mensuel : 18 000 €\nAchats professionnels : gazole 700 € HT | Matériel 1 200 € HT | Téléphone 80 € HT\nTaux TVA : 20 % — Récupération TVA gazole VUL : 80 %`,
subs:[
{id:'L02-4A',pts:10,num:'Q 4.1',text:"Calculez la TVA collectée et la TVA déductible totale.",type:'calcul',unit:'€',
corr:"TVA collectée = 18 000 × 20 % = 3 600 €\nTVA gazole = 700 × 20 % × 80 % = 112 €\nTVA matériel = 1 200 × 20 % = 240 €\nTVA téléphone = 80 × 20 % = 16 €\nTotal déductible = 368 €"},
{id:'L02-4B',pts:10,num:'Q 4.2',text:"Calculez la TVA à reverser. Que se passe-t-il si la TVA déductible dépasse la TVA collectée ?",type:'calcul',unit:'€',
corr:"TVA à reverser = 3 600 – 368 = 3 232 €\nSi déductible > collectée → crédit de TVA remboursable par l'État (formulaire de demande de remboursement)."},
]},
],

// ────────────── SUJET L-03 ──────────────
[
{id:'L03E1',titre:'Exercice 1 — Coûts et décision d\'investissement',totalPts:30,
ctx:`Un livreur hésite entre :\nOption A : Acheter un VUL 26 000 €, durée 5 ans, coût exploitation 0,29 €/km\nOption B : Leasing 560 €/mois, coût exploitation 0,12 €/km\nKilométrage prévu : 48 000 km/an`,
subs:[
{id:'L03-1A',pts:10,num:'Q 1.1',text:"Calculez le coût annuel total de l'option A (avec amortissement).",type:'calcul',unit:'€/an',
corr:"Amortissement = 26 000 / 5 = 5 200 €/an\nExploitation = 0,29 × 48 000 = 13 920 €/an\nTotal A = 5 200 + 13 920 = 19 120 €/an"},
{id:'L03-1B',pts:10,num:'Q 1.2',text:"Calculez le coût annuel total de l'option B.",type:'calcul',unit:'€/an',
corr:"Leasing = 560 × 12 = 6 720 €/an\nExploitation = 0,12 × 48 000 = 5 760 €/an\nTotal B = 6 720 + 5 760 = 12 480 €/an"},
{id:'L03-1C',pts:10,num:'Q 1.3',text:"Quelle option est la plus économique ? Citez 2 autres critères non financiers à considérer.",type:'redige',
corr:"Option B moins chère (12 480 € < 19 120 €/an).\nCritères non financiers : trésorerie (pas de capital immobilisé), flexibilité de renouvellement, entretien parfois inclus, propriété finale du véhicule (achat = patrimoine)."},
]},

{id:'L03E2',titre:'Exercice 2 — Trésorerie mensuelle',totalPts:25,
ctx:`Mois de mars — Solde initial : 3 200 €\nEncaissements clients : 12 000 € | Subvention : 500 €\nDécaissements : Carburant 700 € | Loyer 550 € | Salaire 2 100 € | Charges soc. patronales 850 € | Leasing 420 € | Assurance 120 € | Remboursement emprunt 400 €`,
subs:[
{id:'L03-2A',pts:8,num:'Q 2.1',text:"Calculez le total des décaissements du mois.",type:'calcul',unit:'€',
corr:"Total = 700 + 550 + 2 100 + 850 + 420 + 120 + 400 = 5 140 €"},
{id:'L03-2B',pts:9,num:'Q 2.2',text:"Calculez le solde de trésorerie à fin mars.",type:'calcul',unit:'€',
corr:"Encaissements = 12 000 + 500 = 12 500 €\nSolde = 3 200 + 12 500 – 5 140 = 10 560 €"},
{id:'L03-2C',pts:8,num:'Q 2.3',text:"Si le CA de mars est 15 000 € mais que 3 000 € viennent du mois précédent, quel est le montant des créances non encore encaissées au 31/03 ?",type:'calcul',unit:'€',
corr:"Encaissements CA mars = 12 000 – 3 000 = 9 000 €\nCréances restantes = 15 000 – 9 000 = 6 000 €"},
]},

{id:'L03E3',titre:'Exercice 3 — Droit du travail',totalPts:25,ctx:'',
subs:[
{id:'L03-3A',pts:10,num:'Q 3.1',text:"Quelles sont les obligations de l'employeur lors d'une embauche en CDI ?",type:'redige',
corr:"DPAE (Déclaration Préalable à l'Embauche) à l'URSSAF avant l'entrée en poste.\nContrat de travail écrit remis au salarié.\nInscription au registre unique du personnel.\nVisite d'Information et de Prévention (VIP) dans les 3 mois.\nAffiliation mutuelle d'entreprise obligatoire.\nBulletin de paie dès le 1er mois."},
{id:'L03-3B',pts:8,num:'Q 3.2',text:"Différence entre faute simple, faute grave et faute lourde.",type:'redige',
corr:"Faute simple : licenciement avec préavis + indemnités légales.\nFaute grave : rend impossible le maintien dans l'entreprise → sans préavis, sans indemnité de licenciement (CP maintenus).\nFaute lourde : intention de nuire → sans préavis, sans indemnités, perte possible des CP."},
{id:'L03-3C',pts:7,num:'Q 3.3',text:"Qu'est-ce que la rupture conventionnelle ? Quels sont les droits du salarié ?",type:'redige',
corr:"Rupture d'un commun accord entre employeur et salarié (art. L.1237-11 Code du travail).\nDroits : indemnité spécifique ≥ indemnité légale de licenciement + droits aux allocations chômage (ARE)."},
]},

{id:'L03E4',titre:'Exercice 4 — Responsabilité du transporteur',totalPts:20,ctx:'',
subs:[
{id:'L03-4A',pts:10,num:'Q 4.1',text:"Expliquez la responsabilité de plein droit du transporteur. Quels sont les cas d'exonération ?",type:'redige',
corr:"Le transporteur est présumé responsable de toute perte ou avarie survenue entre la prise en charge et la livraison, sans que le client ait à prouver une faute.\nExonérations : force majeure, vice propre de la marchandise, faute du chargeur (mauvais emballage), fait du destinataire."},
{id:'L03-4B',pts:10,num:'Q 4.2',text:"Pour une marchandise d'une valeur de 40 000 €, quelles précautions recommandez-vous pour couvrir le risque de perte ?",type:'redige',
corr:"1. Déclaration de valeur sur la lettre de voiture (indemnisation à la valeur déclarée).\n2. Assurance Ad Valorem (valeur réelle) souscrite par l'expéditeur.\n3. Mesures de sécurité renforcées (GPS, itinéraire sécurisé).\nSans déclaration de valeur : indemnisation limitée au forfait légal/kg, très inférieur à 40 000 €."},
]},
],

// ────────────── SUJET L-04 ──────────────
[
{id:'L04E1',titre:'Exercice 1 — Compte de résultat simplifié',totalPts:30,
ctx:`Données annuelles d'un transporteur VUL :\n• Prestations transport : 130 000 €\n• Carburant : 11 700 €\n• Pneus + entretien : 4 500 €\n• Leasing VUL : 14 400 €\n• Salaires bruts : 26 000 €\n• Charges sociales patronales : 11 440 €\n• Assurances : 2 800 €\n• Frais généraux : 3 600 €\n• Amortissements : 8 000 €`,
subs:[
{id:'L04-1A',pts:10,num:'Q 1.1',text:"Calculez le total des charges d'exploitation.",type:'calcul',unit:'€',
corr:"Total = 11 700 + 4 500 + 14 400 + 26 000 + 11 440 + 2 800 + 3 600 + 8 000 = 82 440 €"},
{id:'L04-1B',pts:10,num:'Q 1.2',text:"Calculez le résultat d'exploitation.",type:'calcul',unit:'€',
corr:"Résultat = 130 000 – 82 440 = 47 560 €"},
{id:'L04-1C',pts:10,num:'Q 1.3',text:"Calculez la CAF (Capacité d'Autofinancement) avec un IS à 25 %.",type:'calcul',unit:'€',
corr:"IS = 47 560 × 25 % = 11 890 €\nRésultat net = 35 670 €\nCAF = 35 670 + 8 000 (amortissements) = 43 670 €"},
]},

{id:'L04E2',titre:'Exercice 2 — Indice CNR et révision de prix',totalPts:25,
ctx:`Contrat signé en janvier : prix de base 1 200 €/trajet.\nClause d'indexation : si indice CNR gazole varie de plus de 5 %, révision proportionnelle au % carburant dans le CRK (30 %).\nEn mars : indice CNR gazole a augmenté de 12 %.`,
subs:[
{id:'L04-2A',pts:8,num:'Q 2.1',text:"La clause d'indexation se déclenche-t-elle ? Justifiez.",type:'redige',
corr:"Oui : la variation de 12 % est supérieure au seuil contractuel de 5 %. La clause se déclenche automatiquement."},
{id:'L04-2B',pts:9,num:'Q 2.2',text:"Calculez la majoration et le nouveau prix du trajet.",type:'calcul',unit:'€',
corr:"Hausse imputable = 12 % × 30 % = 3,6 % du prix de base\nMajoration = 1 200 × 3,6 % = 43,20 €\nNouveau prix = 1 200 + 43,20 = 1 243,20 €"},
{id:'L04-2C',pts:8,num:'Q 2.3',text:"À quoi sert l'indice CNR et qui le publie ?",type:'redige',
corr:"Le CNR (Comité National Routier, organisme public) publie mensuellement des indices de coûts de transport routier (carburant, salaires, pneus, péages, amortissement).\nSert à : justifier les révisions tarifaires, insérer des clauses d'indexation dans les contrats, comparer ses coûts réels aux références sectorielles."},
]},

{id:'L04E3',titre:'Exercice 3 — Droit fiscal',totalPts:25,ctx:'',
subs:[
{id:'L04-3A',pts:10,num:'Q 3.1',text:"Expliquez le mécanisme de la TVA pour un transporteur assujetti (collectée, déductible, à reverser).",type:'redige',
corr:"TVA collectée : facturée aux clients (10 %) sur les prestations de transport de marchandises — appartient à l'État.\nTVA déductible : payée sur les achats professionnels (gazole VUL 80 %, matériels, services…) — récupérable.\nTVA à reverser = collectée – déductible. Si déductible > collectée → crédit de TVA remboursable."},
{id:'L04-3B',pts:8,num:'Q 3.2',text:"Quels sont les avantages et les limites du régime de la micro-entreprise pour un livreur VUL ?",type:'redige',
corr:"Avantages : comptabilité simplifiée, charges sociales proportionnelles au CA, franchise de TVA sous les seuils, démarches administratives allégées.\nLimites : plafond CA 188 700 €, pas de déduction des charges réelles, difficultés d'investissement, pas de salarié facile."},
{id:'L04-3C',pts:7,num:'Q 3.3',text:"Qu'est-ce que l'amortissement ? Quelle est la durée habituelle pour un VUL ?",type:'redige',
corr:"L'amortissement est la constatation comptable de la dépréciation d'un bien dans le temps. Il permet de répartir le coût d'acquisition sur la durée de vie du bien.\nPour un VUL : durée fiscalement admise de 4 à 5 ans en amortissement linéaire."},
]},

{id:'L04E4',titre:'Exercice 4 — Gestion des risques clients',totalPts:20,ctx:'',
subs:[
{id:'L04-4A',pts:10,num:'Q 4.1',text:"Comment gérer le risque d'impayés clients dans une activité de livraison ?",type:'redige',
corr:"1. Vérifier la solvabilité avant de contracter (Infogreffe, Société.com).\n2. Demander un acompte à la commande.\n3. Délais de paiement courts (15 à 30 jours).\n4. Envoyer les factures rapidement après prestation.\n5. Relancer dès le 1er retard.\n6. Utiliser l'affacturage ou l'assurance-crédit pour les gros clients.\n7. Injonction de payer en cas de refus persistant."},
{id:'L04-4B',pts:10,num:'Q 4.2',text:"Qu'est-ce que l'affacturage (factoring) ? Avantages et inconvénients.",type:'redige',
corr:"Cession des créances clients à un organisme spécialisé (factor) contre paiement immédiat (moins une commission).\nAvantages : trésorerie immédiate, externalisation du recouvrement, couverture du risque d'insolvabilité.\nInconvénients : coût élevé (1 à 3 % du CA), relation client parfois affectée, dépendance au factor."},
]},
],

// ────────────── SUJET L-05 ──────────────
[
{id:'L05E1',titre:'Exercice 1 — Financement d\'un investissement',totalPts:30,
ctx:`Projet : acquisition d'un 2ème VUL à 22 000 €\nApport personnel : 5 500 €\nEmprunt bancaire : 16 500 € sur 3 ans à 4,5 % (remboursement linéaire)\nCA supplémentaire prévu : 28 000 €/an\nCharges variables supplémentaires : 16 800 €/an`,
subs:[
{id:'L05-1A',pts:10,num:'Q 1.1',text:"Calculez les intérêts totaux de l'emprunt sur 3 ans.",type:'calcul',unit:'€',
corr:"An 1 : 16 500 × 4,5 % = 742,50 €\nAn 2 : 11 000 × 4,5 % = 495 €\nAn 3 : 5 500 × 4,5 % = 247,50 €\nTotal intérêts = 1 485 €"},
{id:'L05-1B',pts:10,num:'Q 1.2',text:"Calculez la marge brute générée par ce 2ème VUL la 1ère année.",type:'calcul',unit:'€',
corr:"Marge brute = 28 000 – 16 800 = 11 200 €"},
{id:'L05-1C',pts:10,num:'Q 1.3',text:"Calculez le résultat net de ce VUL la 1ère année (amortissement linéaire 5 ans, IS 25 %).",type:'calcul',unit:'€',
corr:"Amortissement = 22 000 / 5 = 4 400 €\nRésultat avant IS = 11 200 – 4 400 – 742,50 = 6 057,50 €\nIS = 6 057,50 × 25 % = 1 514 €\nRésultat net = 4 543,50 €"},
]},

{id:'L05E2',titre:'Exercice 2 — Rentabilité avancée',totalPts:25,
ctx:`CA : 96 000 € — Taux de MCV : 38 % — CF : 26 000 €`,
subs:[
{id:'L05-2A',pts:8,num:'Q 2.1',text:"Calculez le SR et le résultat avant impôt.",type:'calcul',unit:'€',
corr:"SR = 26 000 / 0,38 = 68 421 €\nMCV = 96 000 × 38 % = 36 480 €\nRésultat = 36 480 – 26 000 = 10 480 €"},
{id:'L05-2B',pts:9,num:'Q 2.2',text:"Si le CA augmente de 12 000 € (CF identiques), quel sera le nouveau résultat ?",type:'calcul',unit:'€',
corr:"Nouvelle MCV = 108 000 × 38 % = 41 040 €\nNouvel résultat = 41 040 – 26 000 = 15 040 €\nAugmentation = +4 560 €"},
{id:'L05-2C',pts:8,num:'Q 2.3',text:"Calculez le point mort en nombre de jours (base 360 jours).",type:'calcul',unit:'jours',
corr:"Point mort = 68 421 / 96 000 × 360 = 256 jours ≈ 12 septembre"},
]},

{id:'L05E3',titre:'Exercice 3 — Contrats de transport',totalPts:25,ctx:'',
subs:[
{id:'L05-3A',pts:10,num:'Q 3.1',text:"Quelles mentions doit obligatoirement contenir un contrat de transport ?",type:'redige',
corr:"Parties (expéditeur, transporteur, destinataire), description de la marchandise (nature, poids, quantité), lieu et date de prise en charge, lieu de livraison, prix du transport, conditions de paiement, délai de livraison, conditions d'assurance et responsabilités, droit applicable."},
{id:'L05-3B',pts:8,num:'Q 3.2',text:"Qu'est-ce que le contrat type de transport ? À quoi sert-il ?",type:'redige',
corr:"Document réglementaire fixant les conditions générales applicables en l'absence de contrat spécifique entre les parties. A valeur légale de référence. Définit responsabilités, limitations d'indemnisation, délais, procédures de réserves. Il existe des contrats types différents selon le type de transport."},
{id:'L05-3C',pts:7,num:'Q 3.3',text:"Qu'est-ce que la prescription extinctive en matière de transport routier ?",type:'redige',
corr:"Délai au-delà duquel une action en responsabilité ne peut plus être exercée.\nEn transport routier national : 1 an à compter de la livraison ou de la date prévue (art. L.133-6 Code de commerce).\nEn transport international CMR : 1 an également (3 ans en cas de dol ou faute équivalente)."},
]},

{id:'L05E4',titre:'Exercice 4 — Réglementation pratique',totalPts:20,ctx:'',
subs:[
{id:'L05-4A',pts:10,num:'Q 4.1',text:"Quelles sont les règles spécifiques pour la livraison de nuit en zone urbaine ?",type:'redige',
corr:"Restrictions horaires municipales (arrêtés locaux, souvent 22h–7h).\nRéglementation sonore (manipulation de marchandises, moteur au ralenti limité).\nVignette Crit'Air obligatoire en ZFE-m.\nRespect des zones piétonnes et couloirs bus.\nParfois autorisation préfectorale requise pour livraisons tardives spécifiques."},
{id:'L05-4B',pts:10,num:'Q 4.2',text:"Quels documents doit avoir un conducteur VUL lors d'un transport professionnel ?",type:'redige',
corr:"Permis de conduire valide (catégorie B minimum).\nCarte grise du véhicule.\nAttestation d'assurance (carte verte) à jour.\nLettre de voiture ou bon de livraison.\nSi ADR applicable : certificat conducteur ADR valide.\nSi transport alimentaire : attestation de conformité du véhicule ATP."},
]},
],

// ────────────── SUJETS L-06 à L-25 ──────────────
// 20 sujets supplémentaires avec thèmes variés et données différentes
...[
['Ratios financiers','Droit pénal des affaires','Analyse de la valeur','Logistique urbaine'],
['Plan de financement','Baux et loyers pro','Calcul de marge nette','Transport frigorifique'],
['Tableau de bord','Clause de non-concurrence','CRK multi-véhicules','E-commerce et livraison'],
['Gestion de crise tréso','Assurances transport','SR et point mort','ZFE et véhicules propres'],
['CAF et investissement','Contrat de commission','Analyse coûts fixes/variables','Certification qualité'],
['Amortissement comparé','Travail dissimulé','Pricing dynamique','Optimisation tournées'],
['Emprunt vs leasing','Entretien préalable licen.','Taux de marge sectoriel','Livraison dernier km'],
['FRNG et BFR avancé','CDD et intérim','VAN d\'un investissement','Cargo-vélo et micro-hub'],
['Compte de résultat N+1','Harcèlement travail','Délai récupération invest.','Transport médicaments'],
['Seuil de liquidité','Mandat et procuration','Coefficient exploitation','Flotte électrique VUL'],
['Analyse sectorielle','Protection données RGPD','Marge sur CA multiple','Collaboration plateforme'],
['Prévisions à 3 ans','Médiation commerciale','Ratio autonomie finan.','Livraison alimentaire'],
['Benchmark CNR','Concurrence déloyale','Sensitivity analysis','Last mile solutions'],
['Transmission entreprise','Non-discrimination embauche','ROI formation','Innovations transport'],
['Business plan léger','Responsabilité civile','Analyse break-even','Décarbonation flotte'],
['Comptabilité analytique','Droit de rétention','EBITDA transport','Smart logistics'],
['Plan trésorerie annuel','Litiges fournisseurs','Indicateurs KPI','Multimodalité'],
['Financement participatif','Propriété intellectuelle','Analyse de rentabilité 5 ans','Blockchain traçabilité'],
['Évaluation entreprise','Clause pénale','DSO et DPO','Automatisation entrepôt'],
['Restructuration financière','Accord amiable','Tableau de flux','Transition énergétique'],
].map((themes, idx) => {
  const n = idx + 6;
  const caBase = 80000 + n * 3000;
  const cvBase = Math.round(caBase * 0.60);
  const cfBase = Math.round(caBase * 0.28);
  return [
    {id:`L${String(n).padStart(2,'0')}E1`, titre:`Exercice 1 — ${themes[0]}`, totalPts:30,
     ctx:`CA annuel : ${caBase.toLocaleString('fr')} €\nCharges variables : ${cvBase.toLocaleString('fr')} €\nCharges fixes : ${cfBase.toLocaleString('fr')} €\nAmortissements inclus dans les CF : ${Math.round(cfBase*0.18).toLocaleString('fr')} €`,
     subs:[
       {id:`L${String(n).padStart(2,'0')}-1A`,pts:10,num:'Q 1.1',text:"Calculez la MCV, le taux de MCV et le SR.",type:'calcul',unit:'€',
        corr:`MCV = ${caBase.toLocaleString('fr')} – ${cvBase.toLocaleString('fr')} = ${(caBase-cvBase).toLocaleString('fr')} €\nTaux = ${Math.round((caBase-cvBase)/caBase*100)} %\nSR = ${cfBase.toLocaleString('fr')} / ${((caBase-cvBase)/caBase).toFixed(2)} = ${Math.round(cfBase/((caBase-cvBase)/caBase)).toLocaleString('fr')} €`},
       {id:`L${String(n).padStart(2,'0')}-1B`,pts:10,num:'Q 1.2',text:"Calculez le résultat avant IS et la CAF (IS 25 %).",type:'calcul',unit:'€',
        corr:`Résultat avant IS = ${(caBase-cvBase-cfBase).toLocaleString('fr')} €\nIS = ${Math.round((caBase-cvBase-cfBase)*0.25).toLocaleString('fr')} €\nRésultat net = ${Math.round((caBase-cvBase-cfBase)*0.75).toLocaleString('fr')} €\nCAF = résultat net + amortissements`},
       {id:`L${String(n).padStart(2,'0')}-1C`,pts:10,num:'Q 1.3',text:`Analysez la situation financière et expliquez les enjeux liés à : ${themes[0]}.`,type:'redige',
        corr:`Analyse complète du thème "${themes[0]}" : définition, calculs clés, interprétation des résultats et recommandations pour améliorer la performance d'un transporteur VUL.`},
     ]},
    {id:`L${String(n).padStart(2,'0')}E2`, titre:`Exercice 2 — ${themes[1]}`, totalPts:25, ctx:'',
     subs:[
       {id:`L${String(n).padStart(2,'0')}-2A`,pts:10,num:'Q 2.1',text:`Définissez et expliquez "${themes[1]}" dans le contexte du transport léger.`,type:'redige',
        corr:`Définition précise de "${themes[1]}", réglementation applicable, obligations légales pour le transporteur VUL et conséquences pratiques.`},
       {id:`L${String(n).padStart(2,'0')}-2B`,pts:8,num:'Q 2.2',text:"Quelles sont les obligations légales du transporteur sur ce point ?",type:'redige',
        corr:"Obligations réglementaires précises, documents requis, délais à respecter, sanctions en cas de non-conformité."},
       {id:`L${String(n).padStart(2,'0')}-2C`,pts:7,num:'Q 2.3',text:"Citez 2 bonnes pratiques professionnelles recommandées.",type:'redige',
        corr:"Bonnes pratiques issues des recommandations professionnelles du secteur transport, applicables à une TPE/PME de transport léger."},
     ]},
    {id:`L${String(n).padStart(2,'0')}E3`, titre:`Exercice 3 — ${themes[2]}`, totalPts:25,
     ctx:`VUL : CRK = ${(0.28 + n*0.005).toFixed(3)} €/km — Distance annuelle : ${45000 + n*500} km\nPrix moyen facturé : ${(0.48 + n*0.01).toFixed(2)} €/km`,
     subs:[
       {id:`L${String(n).padStart(2,'0')}-3A`,pts:8,num:'Q 3.1',text:"Calculez la marge par km et le taux de marge.",type:'calcul',unit:'€/km',
        corr:`Marge/km = ${(0.48+n*0.01).toFixed(2)} – ${(0.28+n*0.005).toFixed(3)} = ${(0.48+n*0.01 - (0.28+n*0.005)).toFixed(3)} €/km\nTaux = ${Math.round((0.48+n*0.01-(0.28+n*0.005))/(0.48+n*0.01)*100)} %`},
       {id:`L${String(n).padStart(2,'0')}-3B`,pts:9,num:'Q 3.2',text:"Calculez le résultat annuel généré par l'activité.",type:'calcul',unit:'€',
        corr:`Résultat = marge/km × km annuels = ${((0.48+n*0.01-(0.28+n*0.005))*(45000+n*500)).toLocaleString('fr','en',{maximumFractionDigits:0})} € environ`},
       {id:`L${String(n).padStart(2,'0')}-3C`,pts:8,num:'Q 3.3',text:`Expliquez les enjeux spécifiques de "${themes[2]}" pour optimiser ce résultat.`,type:'redige',
        corr:`Application du concept "${themes[2]}" pour maximiser la rentabilité : leviers d'action, indicateurs à suivre, outils disponibles pour un transporteur indépendant.`},
     ]},
    {id:`L${String(n).padStart(2,'0')}E4`, titre:`Exercice 4 — ${themes[3]}`, totalPts:20, ctx:'',
     subs:[
       {id:`L${String(n).padStart(2,'0')}-4A`,pts:10,num:'Q 4.1',text:`Quels sont les enjeux et opportunités liés à "${themes[3]}" pour un transporteur VUL ?`,type:'redige',
        corr:`Enjeux réglementaires, économiques et opérationnels de "${themes[3]}" dans le secteur du transport léger. Opportunités commerciales et risques associés.`},
       {id:`L${String(n).padStart(2,'0')}-4B`,pts:10,num:'Q 4.2',text:"Proposez 3 actions concrètes qu'un transporteur VUL peut mettre en place.",type:'redige',
        corr:"Actions pratiques et progressives, adaptées à une TPE de transport léger, avec estimation du coût et du bénéfice attendu pour chacune."},
     ]},
  ];
}),

],

// ══════════════════════════════════════════════════
// CPC LOURD — 25 SUJETS
// ══════════════════════════════════════════════════
LOURD: [

// ────────────── SUJET PL-01 ──────────────
[
{id:'PL01E1',titre:'Exercice 1 — Prix de revient PL complet',totalPts:35,
ctx:`Ensemble tracteur + semi — 150 000 km/an\n• Amortissement tracteur : 12 000 €/an\n• Amortissement semi : 5 000 €/an\n• Salaire conducteur + charges : 46 000 €\n• Assurance : 5 200 €\n• Carburant : 0,30 €/km\n• Péages : 0,055 €/km\n• Entretien + pneus : 0,065 €/km\n• Charges de structure : 18 000 €`,
subs:[
{id:'PL01-1A',pts:10,num:'Q 1.1',text:"Calculez les charges fixes annuelles.",type:'calcul',unit:'€/an',
corr:"CF = 12 000 + 5 000 + 46 000 + 5 200 + 18 000 = 86 200 €/an"},
{id:'PL01-1B',pts:12,num:'Q 1.2',text:"Calculez les charges variables annuelles.",type:'calcul',unit:'€/an',
corr:"CV = (0,30 + 0,055 + 0,065) × 150 000 = 0,42 × 150 000 = 63 000 €/an"},
{id:'PL01-1C',pts:13,num:'Q 1.3',text:"Calculez le CRK complet. Pour un trajet A/R de 600 km (chargé aller, vide retour) avec 22t, calculez le prix à la tonne (marge 18 %).",type:'calcul',unit:'€',
corr:"CRK = (86 200 + 63 000) / 150 000 = 0,995 €/km\nCoût 600 km = 597 €\nPrix vente = 597 / 0,82 = 728 €\nPrix/tonne = 728 / 22 = 33,09 €/t"},
]},

{id:'PL01E2',titre:'Exercice 2 — Réglementation sociale PL',totalPts:30,
ctx:`Semaine d'un conducteur PL :\nLundi : conduite 9h, travail autre 1h\nMardi : conduite 8h30, travail autre 1h30\nMercredi : conduite 4h, livraison 2h, conduite 3h30\nJeudi : repos\nVendredi : conduite 8h, travail autre 2h`,
subs:[
{id:'PL01-2A',pts:10,num:'Q 2.1',text:"Calculez le total des heures de conduite. La limite hebdomadaire est-elle respectée ?",type:'calcul',unit:'h',
corr:"Total conduite = 9 + 8,5 + 7,5 + 0 + 8 = 33 h\nLimite 56 h/semaine : respectée ✓"},
{id:'PL01-2B',pts:10,num:'Q 2.2',text:"Mercredi : 4h de conduite, puis livraison 2h, puis 3h30 de conduite. La règle des 4h30 continus est-elle respectée ?",type:'redige',
corr:"Oui, car la livraison de 2h interrompt le comptage des 4h30 de conduite continue.\n4h → interruption → 3h30 : aucun dépassement de 4h30 ✓"},
{id:'PL01-2C',pts:10,num:'Q 2.3',text:"Calculez le temps de travail total (conduite + autre). La limite de 48h est-elle respectée ?",type:'calcul',unit:'h',
corr:"Conduite = 33 h + Autre = 1 + 1,5 + 2 + 2 = 6,5 h\nTotal = 39,5 h < 48 h ✓"},
]},

{id:'PL01E3',titre:'Exercice 3 — Analyse financière PL',totalPts:20,
ctx:`Résultat d'exploitation : 95 000 € — Amortissements : 42 000 € — IS : 25 %`,
subs:[
{id:'PL01-3A',pts:10,num:'Q 3.1',text:"Calculez la CAF (Capacité d'Autofinancement).",type:'calcul',unit:'€',
corr:"IS = 95 000 × 25 % = 23 750 €\nRésultat net = 71 250 €\nCAF = 71 250 + 42 000 = 113 250 €"},
{id:'PL01-3B',pts:10,num:'Q 3.2',text:"L'entreprise veut acheter un tracteur à 110 000 €. La CAF sur 2 ans suffit-elle ? Quelle alternative recommandez-vous et pourquoi ?",type:'redige',
corr:"CAF sur 2 ans = 226 500 € > 110 000 € : théoriquement suffisant.\nMais la CAF sert aussi aux remboursements et au BFR. Alternative recommandée : crédit-bail (leasing) pour préserver la trésorerie et la capacité d'emprunt."},
]},

{id:'PL01E4',titre:'Exercice 4 — Accès à la profession et CMR',totalPts:15,ctx:'',
subs:[
{id:'PL01-4A',pts:8,num:'Q 4.1',text:"Calculez la capacité financière requise pour une entreprise PL possédant 5 véhicules.",type:'calcul',unit:'€',
corr:"= 9 000 (1er véhicule) + 4 × 5 000 (véhicules suivants) = 29 000 €"},
{id:'PL01-4B',pts:7,num:'Q 4.2',text:"Quel est le rôle de la lettre de voiture CMR en transport international ? Quelle est la limite de responsabilité du transporteur sans déclaration de valeur ?",type:'redige',
corr:"CMR = document de transport international obligatoire entre États signataires. Prouve le contrat, l'état de la marchandise, référence en cas de litige.\nLimite de responsabilité : 8,33 DTS par kg de poids brut manquant ou avarié."},
]},
],

// ────────────── SUJET PL-02 ──────────────
[
{id:'PL02E1',titre:'Exercice 1 — Analyse de bilan PL',totalPts:35,
ctx:`Bilan PME transport au 31/12 :\nACTIF : Immobilisations nettes 280 000 € | Stocks 5 000 € | Créances 45 000 € | Trésorerie 12 000 €\nPASSIF : Capitaux propres 180 000 € | Emprunts LT 110 000 € | Fournisseurs 28 000 € | Dettes fiscales/sociales 24 000 €`,
subs:[
{id:'PL02-1A',pts:10,num:'Q 1.1',text:"Vérifiez l'équilibre du bilan.",type:'calcul',unit:'€',
corr:"Actif = 280 000 + 5 000 + 45 000 + 12 000 = 342 000 €\nPassif = 180 000 + 110 000 + 28 000 + 24 000 = 342 000 € ✓"},
{id:'PL02-1B',pts:12,num:'Q 1.2',text:"Calculez le FRNG et interprétez.",type:'calcul',unit:'€',
corr:"Capitaux permanents = 180 000 + 110 000 = 290 000 €\nActif immobilisé = 280 000 €\nFRNG = 10 000 € (positif = équilibre financier respecté ✓)"},
{id:'PL02-1C',pts:13,num:'Q 1.3',text:"Calculez le BFR et la trésorerie nette. Commentez.",type:'calcul',unit:'€',
corr:"BFR = (5 000 + 45 000) – (28 000 + 24 000) = –2 000 € (négatif = favorable)\nTrésorerie nette = 10 000 – (–2 000) = 12 000 € (= solde bilan ✓)"},
]},

{id:'PL02E2',titre:'Exercice 2 — Tachygraphe et temps de conduite',totalPts:30,ctx:'',
subs:[
{id:'PL02-2A',pts:10,num:'Q 2.1',text:"Un conducteur a conduit 9h lundi, 9h mardi, 9h jeudi, 9h vendredi. Y a-t-il un dépassement réglementaire ? Justifiez.",type:'redige',
corr:"Total semaine = 36 h < 56 h ✓ (limite hebdo).\nJournées à 9h = durée normale maximale ✓ (le 10h est possible 2 fois/semaine mais pas obligatoire).\nAucun dépassement."},
{id:'PL02-2B',pts:10,num:'Q 2.2',text:"Quels documents de bord doit présenter un conducteur PL lors d'un contrôle routier national ?",type:'redige',
corr:"Permis de conduire valide (C ou CE) | Carte conducteur tachygraphe (+ données 28 jours) | Lettre de voiture | Carte grise | Attestation assurance | Certificat d'aptitude médicale | Attestation d'activités si nécessaire."},
{id:'PL02-2C',pts:10,num:'Q 2.3',text:"Durée de validité de la carte conducteur. Que faire si elle expire pendant un transport ?",type:'redige',
corr:"Durée de validité : 5 ans. Renouvellement avant expiration obligatoire.\nSi expire pendant transport : le conducteur est en infraction. Il peut utiliser des feuilles de papier (procédure de secours) pendant 7 jours maximum en attendant la réparation/remplacement."},
]},

{id:'PL02E3',titre:'Exercice 3 — CRK et tarification',totalPts:20,
ctx:`Tracteur + semi : amort. 17 000 €/an | salaire+charges 48 000 €/an | assurance 5 800 € | structure 20 000 €\nCarburant 0,32 €/km | péages 0,06 €/km | entretien 0,07 €/km | 155 000 km/an`,
subs:[
{id:'PL02-3A',pts:10,num:'Q 3.1',text:"Calculez le CRK complet.",type:'calcul',unit:'€/km',
corr:"CF = 17 000 + 48 000 + 5 800 + 20 000 = 90 800 €/an\nCV = (0,32 + 0,06 + 0,07) × 155 000 = 0,45 × 155 000 = 69 750 €/an\nCRK = (90 800 + 69 750) / 155 000 = 1,036 €/km"},
{id:'PL02-3B',pts:10,num:'Q 3.2',text:"Prix de vente minimum pour 400 km avec 24t (marge 15 %). Prix à la tonne et au km.",type:'calcul',unit:'€',
corr:"Coût 400 km = 1,036 × 400 = 414,40 €\nPrix vente = 414,40 / 0,85 = 487,53 €\nPrix/tonne = 487,53 / 24 = 20,31 €/t\nPrix/km = 487,53 / 400 = 1,22 €/km"},
]},

{id:'PL02E4',titre:'Exercice 4 — International et douane',totalPts:15,ctx:'',
subs:[
{id:'PL02-4A',pts:8,num:'Q 4.1',text:"Définissez le cabotage routier et les règles UE applicables.",type:'redige',
corr:"Cabotage = transport national dans un pays étranger après transport international entrant.\nRègle UE (règlement 1072/2009) : maximum 3 opérations en 7 jours après le transport international entrant. Puis le véhicule doit quitter le pays avant de pouvoir caboter à nouveau."},
{id:'PL02-4B',pts:7,num:'Q 4.2',text:"Qu'est-ce que le carnet TIR ? Dans quels cas est-il utilisé ?",type:'redige',
corr:"Document douanier international permettant le transport de marchandises sous scellés, en suspension des droits et taxes aux frontières traversées.\nUtilisé pour les transports vers/depuis des pays hors UE membres de la convention TIR (Turquie, Maroc, pays d'Asie centrale…)."},
]},
],

// ────────────── SUJET PL-03 ──────────────
[
{id:'PL03E1',titre:'Exercice 1 — Gestion financière avancée',totalPts:35,
ctx:`PME transport PL : CA 1 200 000 € — Coefficient d'exploitation 91 %\nAmortissements inclus dans les charges : 85 000 €\nIS applicable : 25 %\nObjectif : acquérir 2 nouveaux tracteurs à 120 000 € chacun`,
subs:[
{id:'PL03-1A',pts:10,num:'Q 1.1',text:"Calculez le résultat d'exploitation et la CAF.",type:'calcul',unit:'€',
corr:"Charges = 1 200 000 × 91 % = 1 092 000 €\nRésultat exploitation = 108 000 €\nIS = 108 000 × 25 % = 27 000 €\nRésultat net = 81 000 €\nCAF = 81 000 + 85 000 = 166 000 €"},
{id:'PL03-1B',pts:12,num:'Q 1.2',text:"La CAF sur 2 ans permet-elle de financer les 2 tracteurs ? Quel financement alternatif recommandez-vous ?",type:'redige',
corr:"CAF 2 ans = 332 000 € > 240 000 € → Théoriquement suffisant.\nMais la CAF sert à rembourser les dettes existantes. Recommandation : financement mixte — 30 % apport CAF + 70 % crédit-bail ou emprunt bancaire pour préserver la trésorerie."},
{id:'PL03-1C',pts:13,num:'Q 1.3',text:"Si le coefficient d'exploitation passe à 89 % (CA constant), quelle serait la nouvelle CAF ?",type:'calcul',unit:'€',
corr:"Nouvelles charges = 1 200 000 × 89 % = 1 068 000 €\nNouveau résultat = 132 000 €\nIS = 33 000 €\nRésultat net = 99 000 €\nNouvelle CAF = 99 000 + 85 000 = 184 000 € (+18 000 € vs actuel)"},
]},

{id:'PL03E2',titre:'Exercice 2 — Convention collective et temps de travail',totalPts:30,ctx:'',
subs:[
{id:'PL03-2A',pts:10,num:'Q 2.1',text:"Qu'est-ce que le temps de disponibilité pour un conducteur PL ? Est-il rémunéré ?",type:'redige',
corr:"Le temps de disponibilité est le temps pendant lequel le conducteur est présent sans conduire, dont la durée est connue à l'avance (attente de chargement, douane, ferry…).\nOui, il est rémunéré mais à un taux réduit par rapport au temps de travail effectif (selon la CCN transports routiers)."},
{id:'PL03-2B',pts:10,num:'Q 2.2',text:"Qu'est-ce que l'indemnité de grand déplacement ? Dans quels cas est-elle versée ?",type:'redige',
corr:"Indemnité versée aux conducteurs PL lorsqu'ils ne peuvent pas rejoindre leur domicile ou établissement la nuit (distance et critères définis par la CCN).\nElle couvre les frais de repas et d'hébergement hors domicile. Exonérée de cotisations sociales dans les limites URSSAF."},
{id:'PL03-2C',pts:10,num:'Q 2.3',text:"La durée maximale de conduite sur 2 semaines consécutives est de combien d'heures ? Que se passe-t-il si elle est dépassée ?",type:'redige',
corr:"90 heures sur 2 semaines consécutives (en plus de la limite de 56h/semaine).\nDépassement = infraction au règlement 561/2006 : contravention (jusqu'à 750 €) voire délit si dépassement de plus d'1h, retrait de points, suspension de permis possible."},
]},

{id:'PL03E3',titre:'Exercice 3 — Coûts et décision',totalPts:20,
ctx:`Un transport A→B de 500 km (chargé aller, retour à vide à 500 km).\nCRK = 1,05 €/km — Chargement : 20 tonnes\nLe client propose 900 € pour ce transport.`,
subs:[
{id:'PL03-3A',pts:10,num:'Q 3.1',text:"Le prix proposé par le client couvre-t-il le coût de revient ? Calculez la marge ou la perte.",type:'calcul',unit:'€',
corr:"Coût A/R = 1,05 × 1 000 (aller+retour) = 1 050 €\nPrix client = 900 €\nRésultat = 900 – 1 050 = –150 € → Perte ! Le prix est insuffisant."},
{id:'PL03-3B',pts:10,num:'Q 3.2',text:"Quel prix minimum devez-vous négocier pour avoir une marge de 12 % ? Quel prix à la tonne cela représente-t-il ?",type:'calcul',unit:'€',
corr:"Prix minimum = 1 050 / (1 – 0,12) = 1 050 / 0,88 = 1 193,18 €\nPrix/tonne = 1 193,18 / 20 = 59,66 €/t"},
]},

{id:'PL03E4',titre:'Exercice 4 — Réglementation technique',totalPts:15,ctx:'',
subs:[
{id:'PL03-4A',pts:8,num:'Q 4.1',text:"Le PTAC maximum d'un ensemble routier standard 5 essieux en France est-il de 40 ou 44 tonnes ? Expliquez les exceptions.",type:'redige',
corr:"40 tonnes en standard.\nExceptions : 44 tonnes pour le transport combiné (conteneurs ISO) et 48 tonnes pour le transport de bois ronds avec 6 essieux. Ces dérogations nécessitent les conditions d'exploitation prévues par arrêté."},
{id:'PL03-4B',pts:7,num:'Q 4.2',text:"Quelles sont les restrictions de circulation le week-end pour les PL de plus de 7,5t en France ?",type:'redige',
corr:"Interdiction de circulation du samedi 22h au dimanche 22h et certains jours fériés.\nDérogations pour transports urgents, périssables, convois funèbres, approvisionnement des marchés.\nLes horaires peuvent varier selon les arrêtés préfectoraux locaux."},
]},
],

// ────────────── SUJETS PL-04 à PL-25 ──────────────
...[
['Prix de revient mensuel','Contrat CMR détaillé','Coefficient exploitation','Gestion du parc PL'],
['Analyse de bilan avancée','Droit social PL détaillé','Calcul de CAF','Transport international'],
['FRNG et BFR PL','Convention collective PL','VAN d\'un PL','Sécurité routière PL'],
['Compte de résultat PL','Licences et autorisations','TRI investissement','Réglementation ADR PL'],
['Plan de financement PL','Contrat de sous-traitance','Seuil de rentabilité PL','Télématique et GPS'],
['Trésorerie prévisionnelle','Temps de service PL','Marge sur km','Décarbonation transport PL'],
['Ratio de solvabilité','FIMO et FCOS','Analyse coûts fixes','Intermodalité'],
['Capacité autofinancement','Certification conducteur','Pricing des transports','Transport frigorifique PL'],
['Tableau de financement','Détachement conducteurs','Analyse sectorielle CNR','Cabotage pratique'],
['Business plan PL','Responsabilité accidents','ROI véhicule électrique','Logistique collaborative'],
['Évaluation entreprise PL','Licenciement économique','Benchmark concurrentiel','Smart transport'],
['Transmission PME transport','Accord amiable litige','Indice CNR appliqué','Automatisation entrepôt'],
['Restructuration financière','Protection données PL','KPI transport PL','Blockchain transport'],
['Comptabilité analytique PL','Non-conformités sociales','Délai de récupération','Économie circulaire'],
['Diagnostic financier PL','Médiation commerciale','Analyse de valeur PL','Transition énergétique PL'],
['Financement innovant','Droit de la concurrence PL','DSO et BFR PL','IA et optimisation'],
['Scoring crédit transport','Bien-être conducteurs','Elasticité prix/demande','Véhicules autonomes'],
['Fusion acquisitions PL','RGPD et données PL','Coefficient de remplissage','Logistique verte'],
['Plan de continuité','Harcèlement moral PL','Analyse AB costing','Multimodal ferroviaire'],
['Reporting RSE','Contentieux prud\'hom.','Marge nette multi-activités','Hydrogène et PL'],
['Gestion de crise PL','Accord de branche PL','Analyse contribution nette','Gestion du risque route'],
['Prévisions financières 5 ans','Droit pénal transport','Pricing long terme','Electrification flotte PL'],
].map((themes, idx) => {
  const n = idx + 4;
  const caBase = 800000 + n * 25000;
  const coefExploit = 0.88 + (n % 8) * 0.005;
  return [
    {id:`PL${String(n).padStart(2,'0')}E1`, titre:`Exercice 1 — ${themes[0]}`, totalPts:35,
     ctx:`CA annuel : ${caBase.toLocaleString('fr')} €\nCoefficient d'exploitation : ${(coefExploit*100).toFixed(1)} %\nAmortissements : ${Math.round(caBase*0.065).toLocaleString('fr')} €\nIS : 25 %`,
     subs:[
       {id:`PL${String(n).padStart(2,'0')}-1A`,pts:12,num:'Q 1.1',text:"Calculez le résultat d'exploitation, l'IS et la CAF.",type:'calcul',unit:'€',
        corr:`Charges = ${caBase.toLocaleString('fr')} × ${(coefExploit*100).toFixed(1)} % = ${Math.round(caBase*coefExploit).toLocaleString('fr')} €\nRésultat = ${Math.round(caBase*(1-coefExploit)).toLocaleString('fr')} €\nIS = ${Math.round(caBase*(1-coefExploit)*0.25).toLocaleString('fr')} €\nCAF = résultat net + amortissements`},
       {id:`PL${String(n).padStart(2,'0')}-1B`,pts:12,num:'Q 1.2',text:`Analysez les enjeux de "${themes[0]}" pour cette entreprise PL.`,type:'redige',
        corr:`Analyse approfondie de "${themes[0]}" dans le contexte d'une PME de transport PL : définition, calculs de référence, comparaison sectorielle et recommandations stratégiques.`},
       {id:`PL${String(n).padStart(2,'0')}-1C`,pts:11,num:'Q 1.3',text:"Si le coefficient d'exploitation s'améliore de 2 points, quelle serait la progression de la CAF ?",type:'calcul',unit:'€',
        corr:`Nouveau coef = ${((coefExploit-0.02)*100).toFixed(1)} %\nNouvelles charges = ${Math.round(caBase*(coefExploit-0.02)).toLocaleString('fr')} €\nNouvel résultat = ${Math.round(caBase*(1-(coefExploit-0.02))).toLocaleString('fr')} €\nProgression CAF = +${Math.round(caBase*0.02*0.75).toLocaleString('fr')} € environ`},
     ]},
    {id:`PL${String(n).padStart(2,'0')}E2`, titre:`Exercice 2 — ${themes[1]}`, totalPts:30, ctx:'',
     subs:[
       {id:`PL${String(n).padStart(2,'0')}-2A`,pts:10,num:'Q 2.1',text:`Définissez et analysez "${themes[1]}" dans le cadre du transport PL.`,type:'redige',
        corr:`Définition précise et application concrète de "${themes[1]}" au transport routier de marchandises >3,5t : obligations légales, procédures, enjeux pratiques.`},
       {id:`PL${String(n).padStart(2,'0')}-2B`,pts:10,num:'Q 2.2',text:"Quelles sont les obligations légales du transporteur sur ce point ? Quelles sanctions en cas de manquement ?",type:'redige',
        corr:"Obligations réglementaires précises, textes de référence, délais à respecter, sanctions administratives et pénales applicables."},
       {id:`PL${String(n).padStart(2,'0')}-2C`,pts:10,num:'Q 2.3',text:"Proposez 3 bonnes pratiques professionnelles pour se conformer et optimiser.",type:'redige',
        corr:"Bonnes pratiques recommandées par les organisations professionnelles (FNTR, TLF, etc.), applicables à une PME de transport PL."},
     ]},
    {id:`PL${String(n).padStart(2,'0')}E3`, titre:`Exercice 3 — ${themes[2]}`, totalPts:20,
     ctx:`CRK = ${(0.95 + n*0.01).toFixed(2)} €/km — Km annuels : ${140000 + n*1000} — Taux de remplissage : ${70 + n%15} %`,
     subs:[
       {id:`PL${String(n).padStart(2,'0')}-3A`,pts:10,num:'Q 3.1',text:`Calculez les éléments clés liés à "${themes[2]}".`,type:'calcul',unit:'€',
        corr:`Calcul de ${themes[2]} : coûts totaux = ${((0.95+n*0.01)*(140000+n*1000)).toLocaleString('fr','en',{maximumFractionDigits:0})} €/an environ. Analyse de rentabilité basée sur le taux de remplissage et le CRK.`},
       {id:`PL${String(n).padStart(2,'0')}-3B`,pts:10,num:'Q 3.2',text:"Comment améliorer les résultats sur ce point ? Proposez 2 leviers d'action.",type:'redige',
        corr:`Leviers pour améliorer "${themes[2]}" : optimisation des chargements, meilleure planification des retours, négociation tarifaire basée sur les indices CNR, investissement dans des outils de gestion.`},
     ]},
    {id:`PL${String(n).padStart(2,'0')}E4`, titre:`Exercice 4 — ${themes[3]}`, totalPts:15, ctx:'',
     subs:[
       {id:`PL${String(n).padStart(2,'0')}-4A`,pts:8,num:'Q 4.1',text:`Expliquez les enjeux de "${themes[3]}" pour un transporteur PL.`,type:'redige',
        corr:`Enjeux réglementaires, économiques et opérationnels de "${themes[3]}" dans le secteur du transport routier >3,5t : tendances, obligations et opportunités.`},
       {id:`PL${String(n).padStart(2,'0')}-4B`,pts:7,num:'Q 4.2',text:"Quelles actions concrètes peut mettre en place une PME de transport PL ?",type:'redige',
        corr:`Actions pratiques et progressives adaptées à une PME de transport PL : investissements, formations, partenariats, certifications disponibles et aides financières mobilisables.`},
     ]},
  ];
}),

],

}; // fin SUJETS_P2

// ════════════════════════════════════════════════════
// INTÉGRATION DANS L'EXAMEN BLANC
// Remplace P2_BANK dans examen-blanc.html
// ════════════════════════════════════════════════════
window.SUJETS_P2 = SUJETS_P2;

// Patch automatique de P2_BANK si examen-blanc.html est chargé
if (typeof P2_BANK !== 'undefined') {
  // Convertit le format SUJETS_P2 vers le format P2_BANK attendu
  P2_BANK.LEGER = SUJETS_P2.LEGER;
  P2_BANK.LOURD = SUJETS_P2.LOURD;
}
