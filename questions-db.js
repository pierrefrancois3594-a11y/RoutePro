// ═══════════════════════════════════════════════════════════════════
// ROUTEPRO — BANQUE DE QUESTIONS COMPLÈTE
// questions-db.js
// 
// Structure : { id, theme, programme, difficulte (1-3), enonce, 
//               reponses [{id,texte,correct}], explication, tags[] }
//
// Programmes : 'LEGER' | 'LOURD' | 'ADR'
// Thèmes CPC Léger  : cl-civil, cl-social, cl-fiscal, cl-gestion, cl-acces, cl-regl, cl-secu
// Thèmes CPC Lourd  : lo-social, lo-civil, lo-fiscal, lo-gestion, lo-acces, lo-regl, lo-secu, lo-intl
// Thèmes ADR        : adr-gen, adr-cls, adr-doc, adr-emb, adr-sig, adr-sec
// ═══════════════════════════════════════════════════════════════════

const QUESTIONS_BANK = [

// ╔══════════════════════════════════════════════════════╗
// ║         CPC LÉGER — DROIT CIVIL & COMMERCIAL        ║
// ╚══════════════════════════════════════════════════════╝
{id:1001,prog:'LEGER',theme:'cl-civil',d:1,
e:"Pour exercer le transport routier public de marchandises pour compte d'autrui avec un véhicule ≤3,5t, il faut obligatoirement :",
r:[{t:"Uniquement un permis B en cours de validité"},{t:"Une capacité professionnelle transport <3,5t et une inscription au registre",ok:true},{t:"Un permis C et une attestation FIMO"},{t:"Uniquement un numéro SIRET actif"}],
x:"Pour exercer le transport public de marchandises pour compte d'autrui avec des VUL ≤3,5t, l'exploitant doit détenir la capacité professionnelle transport léger et être inscrit au registre des transporteurs tenu par la DREAL."},

{id:1002,prog:'LEGER',theme:'cl-civil',d:1,
e:"La lettre de voiture dans le transport léger doit comporter au minimum :",
r:[{t:"Le nom de l'expéditeur et la nature de la marchandise",ok:true},{t:"Uniquement le numéro d'immatriculation du véhicule"},{t:"La photo du conducteur"},{t:"Le numéro de TVA du destinataire uniquement"}],
x:"La lettre de voiture doit mentionner au minimum : nom et adresse de l'expéditeur, du destinataire, lieu de chargement/livraison, désignation et quantité de la marchandise, nom du transporteur."},

{id:1003,prog:'LEGER',theme:'cl-civil',d:2,
e:"En cas de perte ou d'avarie de la marchandise, le délai maximal pour formuler des réserves écrites au transporteur est de :",
r:[{t:"24 heures"},{t:"3 jours ouvrés",ok:true},{t:"7 jours calendaires"},{t:"14 jours"}],
x:"Selon le droit du transport, le destinataire dispose de 3 jours ouvrés (hors jours fériés) pour formuler des réserves écrites motivées au transporteur en cas de dommage apparent."},

{id:1004,prog:'LEGER',theme:'cl-civil',d:2,
e:"La prescription de l'action en responsabilité contre le transporteur routier est de :",
r:[{t:"6 mois"},{t:"1 an",ok:true},{t:"2 ans"},{t:"5 ans"}],
x:"L'action en responsabilité contre le transporteur routier se prescrit par 1 an à compter de la livraison ou de la date prévue de livraison (art. L.133-6 du Code de commerce)."},

{id:1005,prog:'LEGER',theme:'cl-civil',d:2,
e:"Dans un contrat de transport, la force majeure :",
r:[{t:"N'exonère jamais le transporteur"},{t:"Exonère totalement le transporteur de sa responsabilité",ok:true},{t:"Réduit de moitié la responsabilité du transporteur"},{t:"S'applique uniquement pour les marchandises fragiles"}],
x:"La force majeure (événement imprévisible, irrésistible et extérieur) exonère totalement le transporteur de sa responsabilité contractuelle pour les dommages causés à la marchandise."},

{id:1006,prog:'LEGER',theme:'cl-civil',d:3,
e:"La clause de réserve de propriété dans un contrat de vente avec transport signifie que :",
r:[{t:"Le transporteur est propriétaire de la marchandise pendant le transport"},{t:"La propriété est transférée à l'acheteur dès l'expédition"},{t:"La propriété reste au vendeur jusqu'au complet paiement",ok:true},{t:"L'acheteur peut refuser la livraison sans motif"}],
x:"La clause de réserve de propriété permet au vendeur de rester propriétaire de la marchandise jusqu'au complet paiement du prix, même si la livraison a eu lieu (art. 2367 du Code civil)."},

{id:1007,prog:'LEGER',theme:'cl-civil',d:1,
e:"Un sous-traitant en transport est responsable vis-à-vis de :",
r:[{t:"Uniquement du donneur d'ordre (l'expéditeur final)"},{t:"Uniquement du client direct (le commissionnaire ou transporteur principal)",ok:true},{t:"De tous les acteurs de la chaîne de transport"},{t:"Il n'a aucune responsabilité juridique"}],
x:"Le sous-traitant est responsable contractuellement vis-à-vis de son donneur d'ordre direct (le transporteur principal ou le commissionnaire), pas directement vis-à-vis du chargeur initial."},

{id:1008,prog:'LEGER',theme:'cl-civil',d:2,
e:"Le devis de transport établi par un transporteur VUL est :",
r:[{t:"Obligatoirement gratuit par la loi"},{t:"Une offre ferme valable 30 jours sauf mention contraire",ok:true},{t:"Sans valeur juridique"},{t:"Obligatoirement signé par un notaire"}],
x:"Un devis constitue une offre ferme engageant son auteur. Sauf mention contraire de durée de validité, il est généralement considéré comme valable 30 jours en pratique commerciale."},

{id:1009,prog:'LEGER',theme:'cl-civil',d:3,
e:"En transport léger, la limite d'indemnisation en cas de perte de marchandise sans déclaration de valeur est calculée sur la base :",
r:[{t:"Du prix d'achat de la marchandise"},{t:"D'un forfait réglementé au kg de marchandise perdue",ok:true},{t:"De la valeur assurée par l'expéditeur"},{t:"Du prix de revente estimé par le destinataire"}],
x:"En l'absence de déclaration de valeur, l'indemnisation est calculée sur la base d'un barème forfaitaire au kg (selon le contrat type transport). La déclaration de valeur permet d'obtenir une indemnisation à hauteur de la valeur réelle."},

{id:1010,prog:'LEGER',theme:'cl-civil',d:2,
e:"Un transporteur VUL peut-il refuser un transport pour des raisons de sécurité ?",
r:[{t:"Non, il doit toujours assurer le transport si rémunéré"},{t:"Oui, il peut refuser si les conditions de sécurité ne sont pas réunies",ok:true},{t:"Oui, mais uniquement avec l'accord de la DREAL"},{t:"Non, le refus de transport est une infraction pénale"}],
x:"Le transporteur a le droit de refuser un transport s'il estime que les conditions de sécurité ne sont pas réunies (surcharge, mauvais conditionnement, risque pour autrui…). C'est même une obligation légale dans certains cas."},

// ╔══════════════════════════════════════════════════════╗
// ║         CPC LÉGER — DROIT SOCIAL                    ║
// ╚══════════════════════════════════════════════════════╝
{id:1101,prog:'LEGER',theme:'cl-social',d:1,
e:"Un conducteur de VUL salarié est soumis à la durée légale du travail de :",
r:[{t:"35 heures par semaine",ok:true},{t:"39 heures par semaine"},{t:"40 heures par semaine"},{t:"48 heures par semaine"}],
x:"La durée légale du travail est de 35 heures hebdomadaires pour tous les salariés (loi Aubry). Les heures au-delà sont des heures supplémentaires majorées."},

{id:1102,prog:'LEGER',theme:'cl-social',d:2,
e:"La durée maximale absolue du travail effectif pour un conducteur VUL salarié est de :",
r:[{t:"44 heures / semaine"},{t:"48 heures / semaine",ok:true},{t:"52 heures / semaine"},{t:"60 heures / semaine"}],
x:"La durée maximale absolue de travail est de 48 heures par semaine (ou 44 heures en moyenne sur 12 semaines). Au-delà, il y a infraction au Code du travail."},

{id:1103,prog:'LEGER',theme:'cl-social',d:1,
e:"Le SMIC horaire brut en France (2024) est d'environ :",
r:[{t:"10,00 €"},{t:"11,65 €",ok:true},{t:"13,00 €"},{t:"9,50 €"}],
x:"Le SMIC horaire brut est revalorisé chaque année au 1er janvier (et parfois en cours d'année). En 2024, il est de 11,65 € brut/heure. Ce chiffre est susceptible d'évoluer : vérifiez toujours la valeur officielle en vigueur."},

{id:1104,prog:'LEGER',theme:'cl-social',d:2,
e:"Un artisan sans salarié qui conduit lui-même son VUL pour compte d'autrui est soumis :",
r:[{t:"Au Code du travail comme tout salarié"},{t:"Au règlement 561/2006 sur les temps de conduite"},{t:"Aux règles du code du travail en tant que travailleur indépendant (TNS)",ok:true},{t:"À aucune règle de temps de conduite"}],
x:"Un artisan transporteur indépendant (TNS) n'est pas soumis au Code du travail (réservé aux salariés) mais reste soumis aux règles du code de la route. Le règlement 561/2006 ne s'applique pas aux véhicules ≤3,5t."},

{id:1105,prog:'LEGER',theme:'cl-social',d:2,
e:"Pour l'embauche d'un premier salarié, l'employeur doit effectuer en priorité :",
r:[{t:"Une déclaration à la Chambre des Métiers uniquement"},{t:"Une Déclaration Préalable à l'Embauche (DPAE) auprès de l'URSSAF",ok:true},{t:"Un enregistrement au tribunal de commerce"},{t:"Une demande d'autorisation à la DREAL"}],
x:"La Déclaration Préalable à l'Embauche (DPAE) doit être envoyée à l'URSSAF dans les 8 jours précédant l'embauche. C'est obligatoire pour tout premier salarié."},

{id:1106,prog:'LEGER',theme:'cl-social',d:3,
e:"La rupture conventionnelle homologuée permet :",
r:[{t:"À l'employeur de licencier sans indemnités"},{t:"Au salarié et à l'employeur de rompre le contrat d'un commun accord avec indemnités",ok:true},{t:"Au salarié de démissionner avec les droits au chômage sans accord employeur"},{t:"Uniquement de changer les conditions du contrat"}],
x:"La rupture conventionnelle (art. L.1237-11 du Code du travail) est une rupture d'un commun accord entre employeur et salarié. Elle ouvre droit aux allocations chômage pour le salarié et implique le versement d'une indemnité spécifique."},

{id:1107,prog:'LEGER',theme:'cl-social',d:2,
e:"Les congés payés légaux annuels en France sont de :",
r:[{t:"4 semaines (20 jours ouvrables)"},{t:"5 semaines (25 jours ouvrables ou 30 jours ouvrés)",ok:true},{t:"6 semaines (30 jours ouvrables)"},{t:"3 semaines (15 jours ouvrables)"}],
x:"Tout salarié a droit à 2,5 jours ouvrables de congés payés par mois de travail effectif, soit 30 jours ouvrables (5 semaines) par an."},

{id:1108,prog:'LEGER',theme:'cl-social',d:1,
e:"Le bulletin de paie doit obligatoirement être remis au salarié :",
r:[{t:"Trimestriellement"},{t:"Lors de chaque versement de salaire",ok:true},{t:"Annuellement avec la déclaration d'impôts"},{t:"Uniquement à la demande du salarié"}],
x:"L'employeur est tenu de remettre un bulletin de paie à chaque versement du salaire (généralement mensuel). Il peut être dématérialisé avec accord du salarié."},

{id:1109,prog:'LEGER',theme:'cl-social',d:3,
e:"La période d'essai pour un CDI d'un ouvrier est de :",
r:[{t:"1 mois renouvelable une fois (2 mois max)",ok:true},{t:"3 mois renouvelables (6 mois max)"},{t:"6 mois non renouvelables"},{t:"Elle n'est pas encadrée par la loi"}],
x:"Pour les ouvriers, la période d'essai est de 2 mois maximum (1 mois initial + 1 mois de renouvellement). Pour les techniciens : 3 mois. Pour les cadres : 4 mois. Ces durées sont fixées par le Code du travail."},

{id:1110,prog:'LEGER',theme:'cl-social',d:2,
e:"L'auto-entrepreneur (micro-entreprise) cotise :",
r:[{t:"Aux mêmes caisses qu'un salarié"},{t:"Au régime des indépendants (SSI/URSSAF) sur son chiffre d'affaires",ok:true},{t:"Au régime agricole (MSA)"},{t:"À aucune caisse de retraite"}],
x:"L'auto-entrepreneur cotise au régime des travailleurs non salariés (SSI, géré par l'URSSAF) via un taux forfaitaire appliqué à son chiffre d'affaires. Ces cotisations couvrent retraite, maladie et prévoyance."},

// ╔══════════════════════════════════════════════════════╗
// ║         CPC LÉGER — DROIT FISCAL                    ║
// ╚══════════════════════════════════════════════════════╝
{id:1201,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"Le taux de TVA applicable aux prestations de transport de marchandises en France est de :",
r:[{t:"5,5 %"},{t:"10 %"},{t:"20 %",ok:true},{t:"0 % (exonéré)"}],
x:"Les prestations de transport de marchandises en France sont soumises au taux normal de TVA de 20 %."},

{id:1202,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"Un auto-entrepreneur dont le CA dépasse le seuil de franchise en base de TVA doit :",
r:[{t:"Fermer son auto-entreprise"},{t:"Facturer la TVA à ses clients et la reverser à l'État",ok:true},{t:"Passer automatiquement au régime réel simplifié d'imposition"},{t:"Demander une dérogation à l'administration fiscale"}],
x:"Lorsque le CA dépasse le seuil de franchise en base de TVA (36 800 € pour les prestations de services en 2024), l'auto-entrepreneur perd le bénéfice de la franchise et doit collecter et reverser la TVA."},

{id:1203,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"La cotisation foncière des entreprises (CFE) est due par :",
r:[{t:"Uniquement les sociétés (SA, SARL, SAS…)"},{t:"Toute personne exerçant une activité professionnelle non salariée à titre habituel",ok:true},{t:"Uniquement les entreprises employant des salariés"},{t:"Les entreprises ayant un CA supérieur à 500 000 €"}],
x:"La CFE (ancienne taxe professionnelle) est due par toute personne physique ou morale exerçant à titre habituel une activité professionnelle non salariée, quelle que soit la forme juridique."},

{id:1204,prog:'LEGER',theme:'cl-fiscal',d:3,
e:"L'amortissement d'un véhicule utilitaire léger correspond à :",
r:[{t:"La dépréciation constatée du véhicule inscrite en charge sur plusieurs années",ok:true},{t:"La prime d'assurance annuelle du véhicule"},{t:"Les frais de carburant annuels"},{t:"Le loyer mensuel en cas de leasing"}],
x:"L'amortissement est une technique comptable qui répartit le coût d'un bien sur sa durée d'utilisation. Pour un VUL, la durée d'amortissement est généralement de 4 à 5 ans en linéaire."},

{id:1205,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"Le taux de cotisation social de l'auto-entrepreneur pour une activité de prestation de services BIC (transport) est d'environ :",
r:[{t:"6,4 %"},{t:"12,3 %",ok:true},{t:"22 %"},{t:"33 %"}],
x:"Pour les activités de prestation de services BIC (dont le transport), le taux de cotisations sociales de l'auto-entrepreneur est d'environ 21,2 % du CA (taux 2024 — vérifier les dernières mises à jour officielles)."},

{id:1206,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"La déclaration de TVA mensuelle (régime normal) doit être déposée :",
r:[{t:"Le 31 décembre de chaque année"},{t:"Chaque mois, avant la date limite fixée par l'administration fiscale",ok:true},{t:"Chaque trimestre uniquement"},{t:"Uniquement si la TVA collectée dépasse 1 000 €"}],
x:"Au régime normal de TVA, la déclaration CA3 est déposée chaque mois (en ligne) avec paiement correspondant. Le régime simplifié permet des acomptes semestriels et une déclaration annuelle."},

{id:1207,prog:'LEGER',theme:'cl-fiscal',d:3,
e:"La TVA sur les carburants des VUL est récupérable à hauteur de :",
r:[{t:"0 % (non récupérable pour les VUL)"},{t:"80 % pour le gazole",ok:true},{t:"100 % pour tous les carburants"},{t:"50 % quel que soit le carburant"}],
x:"Pour les VUL utilisés à des fins professionnelles, la TVA sur le gazole est récupérable à 80 %. Pour l'essence, elle est non récupérable (0 %). Pour les véhicules électriques professionnels, la TVA sur l'électricité est récupérable à 100 %."},

// ╔══════════════════════════════════════════════════════╗
// ║         CPC LÉGER — GESTION FINANCIÈRE TPE          ║
// ╚══════════════════════════════════════════════════════╝
{id:1301,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le besoin en fonds de roulement (BFR) représente :",
r:[{t:"Le capital social de l'entreprise"},{t:"Le besoin de financement lié au cycle d'exploitation (stocks + créances - dettes fournisseurs)",ok:true},{t:"Les dettes à long terme de l'entreprise"},{t:"Le bénéfice net après impôts"}],
x:"Le BFR = Stocks + Créances clients - Dettes fournisseurs. C'est le besoin de financement à court terme généré par le cycle d'exploitation. Un BFR négatif est favorable (encaissement avant décaissement)."},

{id:1302,prog:'LEGER',theme:'cl-gestion',d:1,
e:"Le compte de résultat d'une entreprise permet de connaître :",
r:[{t:"La valeur du patrimoine de l'entreprise à un instant T"},{t:"Le bénéfice ou la perte réalisé sur l'exercice",ok:true},{t:"Les flux de trésorerie de l'entreprise"},{t:"La liste des actionnaires"}],
x:"Le compte de résultat recense toutes les charges et tous les produits de l'exercice. La différence donne le résultat net : bénéfice (produits > charges) ou perte (charges > produits)."},

{id:1303,prog:'LEGER',theme:'cl-gestion',d:2,
e:"La marge sur coûts variables (MCV) est calculée ainsi :",
r:[{t:"Chiffre d'affaires - Charges fixes"},{t:"Chiffre d'affaires - Charges variables",ok:true},{t:"Résultat net + Amortissements"},{t:"Prix de vente - Prix d'achat HT"}],
x:"MCV = Chiffre d'affaires - Charges variables. Elle mesure ce qui reste après couverture des coûts variables pour couvrir les charges fixes. Le taux de MCV = MCV / CA × 100."},

{id:1304,prog:'LEGER',theme:'cl-gestion',d:3,
e:"Le délai de rotation des créances clients mesure :",
r:[{t:"Le délai de livraison moyen aux clients"},{t:"Le nombre de jours moyen avant encaissement des factures clients",ok:true},{t:"La durée de conservation des marchandises en stock"},{t:"Le délai de paiement accordé aux fournisseurs"}],
x:"Délai de rotation créances = (Créances clients / CA TTC) × 360. Il mesure le nombre de jours moyen avant d'encaisser les paiements clients. Plus il est court, meilleure est la trésorerie."},

{id:1305,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Pour un transporteur VUL, le coût kilométrique comprend notamment :",
r:[{t:"Uniquement le carburant et les pneus"},{t:"Carburant, entretien, pneus, assurance, amortissement, charges de structure",ok:true},{t:"Uniquement les charges variables"},{t:"Uniquement le salaire du conducteur"}],
x:"Le coût de revient kilométrique complet intègre : charges variables (carburant, pneus, entretien courant) + charges fixes (assurance, amortissement, loyer véhicule, charges de structure) divisés par le kilométrage annuel."},

{id:1306,prog:'LEGER',theme:'cl-gestion',d:1,
e:"La valeur ajoutée d'une entreprise est :",
r:[{t:"Le bénéfice net après impôts"},{t:"La production de l'exercice moins les consommations intermédiaires",ok:true},{t:"Le chiffre d'affaires total"},{t:"Les capitaux propres de l'entreprise"}],
x:"Valeur ajoutée = Production (ou CA) - Consommations intermédiaires (achats de marchandises, matières, services externes). Elle mesure la richesse créée par l'entreprise elle-même."},

{id:1307,prog:'LEGER',theme:'cl-gestion',d:3,
e:"Le tableau de bord de gestion d'un transporteur VUL doit inclure en priorité :",
r:[{t:"Uniquement le chiffre d'affaires mensuel"},{t:"CA, taux de remplissage, coût par km, résultat net, trésorerie",ok:true},{t:"Uniquement le nombre de livraisons effectuées"},{t:"Le score de satisfaction client uniquement"}],
x:"Un tableau de bord de gestion complet pour un transporteur doit couvrir : aspect commercial (CA, clients), opérationnel (km parcourus, taux de remplissage, coût/km) et financier (résultat, trésorerie, DSO)."},

{id:1308,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le seuil de rentabilité (SR) exprimé en chiffre d'affaires est :",
r:[{t:"SR = Charges fixes / Taux de marge sur coûts variables",ok:true},{t:"SR = Charges variables / Taux de marge sur coûts fixes"},{t:"SR = Résultat net / Taux de TVA"},{t:"SR = CA × Taux d'amortissement"}],
x:"SR = Charges fixes / Taux de MCV. Exemple : si les charges fixes sont 30 000 € et le taux de MCV est 40 %, le SR est de 75 000 €. C'est le CA minimum à réaliser pour ne pas perdre d'argent."},

// ╔══════════════════════════════════════════════════════╗
// ║         CPC LÉGER — ACCÈS À LA PROFESSION           ║
// ╚══════════════════════════════════════════════════════╝
{id:1401,prog:'LEGER',theme:'cl-acces',d:1,
e:"L'examen de capacité professionnelle de transport routier de marchandises (<3,5t) est organisé par :",
r:[{t:"La Préfecture du département"},{t:"La DREAL (Direction Régionale de l'Environnement)"},{t:"La Chambre de Commerce et d'Industrie (CCI)",ok:true},{t:"Le Ministère des Transports directement"}],
x:"L'examen de capacité professionnelle transport léger (<3,5t) est organisé par les CCI (Chambres de Commerce et d'Industrie), contrairement au CPC Lourd qui est également géré par les CCI mais avec un programme distinct."},

{id:1402,prog:'LEGER',theme:'cl-acces',d:2,
e:"Pour créer une entreprise de transport léger (<3,5t) pour compte d'autrui, les 3 conditions cumulatives sont :",
r:[{t:"Permis B + assurance + local"},{t:"Honorabilité professionnelle + capacité financière + capacité professionnelle",ok:true},{t:"Diplôme Bac+2 + expérience 5 ans + assurance"},{t:"Permis C + FIMO + carte conducteur"}],
x:"Les 3 conditions d'accès à la profession de transporteur public de marchandises (quel que soit le tonnage) sont : l'honorabilité professionnelle, la capacité financière (fonds propres suffisants) et la capacité professionnelle (détention de l'examen ou équivalence)."},

{id:1403,prog:'LEGER',theme:'cl-acces',d:2,
e:"La capacité financière minimale requise pour un transporteur léger (<3,5t) est de :",
r:[{t:"1 800 € par véhicule"},{t:"900 € par véhicule supplémentaire au-delà du premier",ok:true},{t:"50 000 € forfaitaires"},{t:"10 % du CA prévisionnel"}],
x:"Pour le transport léger, la capacité financière requise est de 1 800 € pour le 1er véhicule et 900 € pour chaque véhicule supplémentaire (règlement européen 1071/2009 adapté au transport léger)."},

{id:1404,prog:'LEGER',theme:'cl-acces',d:1,
e:"Le registre électronique national des entreprises de transport routier (RENT) est géré par :",
r:[{t:"Les Chambres de Commerce et d'Industrie"},{t:"La DREAL (ou DRIEAT en Île-de-France)",ok:true},{t:"Le Ministère de l'Économie"},{t:"L'INSEE"}],
x:"Le registre électronique national des transporteurs routiers (RENT) est géré par les DREAL (Directions Régionales de l'Environnement, de l'Aménagement et du Logement) ou la DRIEAT en Île-de-France."},

{id:1405,prog:'LEGER',theme:'cl-acces',d:3,
e:"Un ressortissant d'un État membre de l'UE titulaire d'une capacité professionnelle transport obtenue dans son pays :",
r:[{t:"Doit repasser l'examen français obligatoirement"},{t:"Peut exercer en France sous condition de reconnaissance de qualification",ok:true},{t:"Ne peut pas exercer en France"},{t:"Bénéficie automatiquement et sans démarche de la même capacité en France"}],
x:"La directive 2005/36/CE sur la reconnaissance des qualifications professionnelles permet aux ressortissants de l'UE de faire reconnaître leur qualification dans un autre État membre, sous réserve de procédure de reconnaissance auprès de l'autorité compétente."},

// ╔══════════════════════════════════════════════════════╗
// ║     CPC LÉGER — RÉGLEMENTATION VUL                  ║
// ╚══════════════════════════════════════════════════════╝
{id:1501,prog:'LEGER',theme:'cl-regl',d:1,
e:"Un véhicule utilitaire léger (VUL) se définit comme un véhicule dont le PTAC est :",
r:[{t:"Inférieur ou égal à 2,5 tonnes"},{t:"Inférieur ou égal à 3,5 tonnes",ok:true},{t:"Inférieur ou égal à 5 tonnes"},{t:"Inférieur ou égal à 7,5 tonnes"}],
x:"Par définition réglementaire, un VUL est un véhicule dont le Poids Total Autorisé en Charge (PTAC) est inférieur ou égal à 3,5 tonnes. Au-delà, on entre dans la catégorie des poids lourds."},

{id:1502,prog:'LEGER',theme:'cl-regl',d:2,
e:"Le contrôle technique des véhicules utilitaires légers utilisés à titre professionnel doit être effectué :",
r:[{t:"Tous les ans",ok:true},{t:"Tous les 2 ans"},{t:"Tous les 3 ans"},{t:"Uniquement à la revente"}],
x:"Les VUL utilitaires (PTAC >3,5t est PL mais pour les utilitaires professionnels <3,5t), la périodicité du contrôle technique est tous les 2 ans pour les véhicules particuliers. Attention : certaines catégories de VUL professionnels sont soumis à un contrôle annuel selon leur usage."},

{id:1503,prog:'LEGER',theme:'cl-regl',d:1,
e:"Un conducteur de VUL (<3,5t) doit posséder au minimum :",
r:[{t:"Le permis B",ok:true},{t:"Le permis B + attestation FIMO"},{t:"Le permis C"},{t:"Le permis B + formation ADR obligatoire"}],
x:"Pour conduire un VUL de moins de 3,5 tonnes, le permis B est suffisant. Le permis C n'est requis que pour les véhicules de plus de 3,5 tonnes (PL)."},

{id:1504,prog:'LEGER',theme:'cl-regl',d:2,
e:"La vitesse maximale d'un VUL (<3,5t) sur autoroute est de :",
r:[{t:"110 km/h"},{t:"130 km/h",ok:true},{t:"90 km/h"},{t:"110 km/h si chargé, 130 km/h si vide"}],
x:"Les VUL de moins de 3,5 tonnes sont soumis aux mêmes limitations de vitesse que les véhicules particuliers : 130 km/h sur autoroute (110 km/h par temps de pluie), 80 km/h sur route à double sens sans séparateur central."},

{id:1505,prog:'LEGER',theme:'cl-regl',d:2,
e:"Le transport de marchandises sous température dirigée (froid) nécessite :",
r:[{t:"Uniquement un thermomètre dans le véhicule"},{t:"Un agrément sanitaire et un véhicule ATP si produits alimentaires périssables",ok:true},{t:"Uniquement une autorisation préfectorale"},{t:"Aucune réglementation spécifique pour les VUL"}],
x:"Le transport de denrées alimentaires périssables sous température dirigée requiert un véhicule homologué ATP (Accord Transport Périssables) et, selon les produits, un agrément sanitaire. Les contrôles peuvent être effectués par la DDPP."},

{id:1506,prog:'LEGER',theme:'cl-regl',d:3,
e:"Un VUL transportant des colis de messagerie en zone urbaine dense est soumis à :",
r:[{t:"Uniquement le code de la route"},{t:"Le code de la route + réglementation livraisons zones urbaines (horaires, ZFE, LAPI…)",ok:true},{t:"La réglementation PL uniquement"},{t:"Aucune réglementation spécifique à la messagerie"}],
x:"En zone urbaine, les transporteurs VUL sont soumis au code de la route, aux restrictions horaires de livraison fixées par les communes, aux Zones à Faibles Émissions (ZFE-m) imposant des vignettes Crit'Air, et aux Plans de Livraison Urbaine."},

// ╔══════════════════════════════════════════════════════╗
// ║         CPC LÉGER — SÉCURITÉ ROUTIÈRE               ║
// ╚══════════════════════════════════════════════════════╝
{id:1601,prog:'LEGER',theme:'cl-secu',d:1,
e:"Le port de la ceinture de sécurité est obligatoire pour le conducteur d'un VUL :",
r:[{t:"Uniquement sur autoroute"},{t:"Toujours, sauf dérogation médicale",ok:true},{t:"Uniquement si le VUL est chargé"},{t:"Uniquement si la vitesse dépasse 50 km/h"}],
x:"Le port de la ceinture est obligatoire pour tous les occupants d'un véhicule, y compris les conducteurs de VUL, en toutes circonstances. Des dérogations médicales existent mais sont rares."},

{id:1602,prog:'LEGER',theme:'cl-secu',d:2,
e:"En cas d'accident avec blessé(s), le conducteur doit en priorité :",
r:[{t:"Appeler son employeur avant les secours"},{t:"Protéger, alerter, secourir dans cet ordre",ok:true},{t:"Déplacer les blessés immédiatement"},{t:"Prendre des photos avant d'appeler les secours"}],
x:"En cas d'accident : 1. Protéger (baliser, éteindre le moteur) — 2. Alerter (15 SAMU, 18 pompiers, 17 police ou 112) — 3. Secourir (PLS si inconscient, compression si saignement). Ne jamais déplacer un blessé sauf danger immédiat."},

{id:1603,prog:'LEGER',theme:'cl-secu',d:1,
e:"La vignette Crit'Air classe 1 (verte) correspond aux véhicules :",
r:[{t:"Essence Euro 3 et avant"},{t:"Véhicules électriques et hydrogène"},{t:"Essence Euro 5 et 6 et hybrides",ok:true},{t:"Diesel Euro 6 uniquement"}],
x:"Crit'Air 1 (jaune) = essence Euro 5 et 6, hybrides essence. Crit'Air 0 (vert) = électrique et hydrogène. Crit'Air 2 = diesel Euro 5 et 6. Les vignettes sont obligatoires dans les ZFE-m."},

{id:1604,prog:'LEGER',theme:'cl-secu',d:2,
e:"La distance de sécurité minimale à respecter derrière un véhicule sur route (vitesse 80 km/h) est :",
r:[{t:"20 mètres"},{t:"Environ 40 mètres (2 secondes de temps)",ok:true},{t:"10 mètres"},{t:"100 mètres"}],
x:"La règle des 2 secondes : à 80 km/h, la distance de sécurité recommandée est d'environ 44 mètres (2 secondes). Le Code de la route impose une distance suffisante pour permettre l'arrêt en cas de freinage brusque."},

{id:1605,prog:'LEGER',theme:'cl-secu',d:2,
e:"Le transport de marchandises de plus de 4 mètres de longueur dépassant à l'arrière d'un VUL nécessite :",
r:[{t:"Aucune signalisation particulière"},{t:"Un signal de dépassement de charge rouge et un signalement si dépassement de 3 m",ok:true},{t:"Une autorisation de transport exceptionnel systématiquement"},{t:"Uniquement un feux de détresse allumé"}],
x:"Tout dépassement de gabarit à l'arrière doit être signalé par un dispositif réfléchissant rouge. Si le dépassement dépasse 3 mètres, une signalisation renforcée et potentiellement une autorisation de transport exceptionnel sont requises."},

// ╔══════════════════════════════════════════════════════╗
// ║         CPC LOURD — DROIT SOCIAL                    ║
// ╚══════════════════════════════════════════════════════╝
{id:2101,prog:'LOURD',theme:'lo-social',d:1,
e:"Selon le règlement (CE) 561/2006, la durée maximale de conduite hebdomadaire est de :",
r:[{t:"45 heures"},{t:"56 heures",ok:true},{t:"60 heures"},{t:"48 heures"}],
x:"La durée maximale de conduite hebdomadaire est de 56 heures selon le règlement 561/2006. Sur deux semaines consécutives, elle ne peut dépasser 90 heures au total."},

{id:2102,prog:'LOURD',theme:'lo-social',d:1,
e:"Après 4h30 de conduite continue, la pause obligatoire est de :",
r:[{t:"30 minutes"},{t:"45 minutes",ok:true},{t:"60 minutes"},{t:"20 minutes"}],
x:"Après 4h30 de conduite, une pause de 45 minutes est obligatoire. Elle peut être fractionnée : une pause de 15 minutes d'abord, puis une pause de 30 minutes. Les deux doivent être prises dans cet ordre."},

{id:2103,prog:'LOURD',theme:'lo-social',d:2,
e:"Le repos hebdomadaire normal d'un conducteur PL est de :",
r:[{t:"24 heures consécutives"},{t:"35 heures consécutives",ok:true},{t:"45 heures consécutives"},{t:"48 heures consécutives"}],
x:"Le repos hebdomadaire normal est de 45 heures consécutives minimum. Il peut être réduit à 24 heures (repos hebdomadaire réduit) dans certaines conditions, avec récupération obligatoire avant la fin de la 3ème semaine suivante."},

{id:2104,prog:'LOURD',theme:'lo-social',d:2,
e:"La durée de conservation des données du chronotachygraphe numérique par l'employeur est de :",
r:[{t:"1 an"},{t:"12 mois minimum",ok:true},{t:"6 mois"},{t:"5 ans"}],
x:"Les données du chronotachygraphe (disques et cartes) doivent être conservées par l'entreprise pendant au moins 12 mois. L'entreprise doit les présenter en cas de contrôle."},

{id:2105,prog:'LOURD',theme:'lo-social',d:3,
e:"Un conducteur PL peut cumuler au maximum combien de repos journaliers réduits (9h) entre deux repos hebdomadaires ?",
r:[{t:"1 fois"},{t:"2 fois"},{t:"3 fois",ok:true},{t:"Sans limite si accord employeur"}],
x:"Entre deux repos hebdomadaires, un conducteur peut prendre au maximum 3 repos journaliers réduits (minimum 9 heures au lieu de 11 heures). Les repos réduits ne doivent pas être compensés."},

{id:2106,prog:'LOURD',theme:'lo-social',d:2,
e:"Le temps de travail effectif maximum d'un conducteur grand routier ne doit pas dépasser en moyenne :",
r:[{t:"44 heures/semaine sur 4 mois"},{t:"48 heures/semaine sur une période de référence de 4 mois",ok:true},{t:"35 heures/semaine strictement"},{t:"56 heures/semaine"}],
x:"La directive européenne 2002/15/CE et le Code du travail français limitent le temps de travail effectif moyen à 48 heures par semaine calculé sur une période de référence de 4 mois (ou 6 mois par accord collectif)."},

{id:2107,prog:'LOURD',theme:'lo-social',d:1,
e:"L'attestation de conducteur (pour les conducteurs ressortissants de pays tiers) est délivrée par :",
r:[{t:"Le conducteur lui-même"},{t:"L'entreprise de transport qui emploie le conducteur",ok:true},{t:"La préfecture de police"},{t:"Le syndicat des transporteurs"}],
x:"L'attestation de conducteur est délivrée par l'entreprise de transport qui emploie un conducteur ressortissant d'un pays tiers à l'UE. Elle doit être présentée lors des contrôles routiers."},

{id:2108,prog:'LOURD',theme:'lo-social',d:2,
e:"En cas de dépassement de la durée maximale de conduite journalière de moins de 1 heure, la sanction pour le conducteur est :",
r:[{t:"Un simple avertissement sans amende"},{t:"Une contravention de 4ème classe (750 € max)",ok:true},{t:"Une suspension immédiate du permis de conduire"},{t:"Aucune sanction si c'est exceptionnel"}],
x:"Le dépassement du temps de conduite journalier est une infraction au règlement 561/2006. Selon le niveau de dépassement, les sanctions varient de la contravention (4ème classe = 750 € max) au délit (plus d'1 heure de dépassement = délit)."},

{id:2109,prog:'LOURD',theme:'lo-social',d:3,
e:"Quel est le délai légal de prévenance pour modifier les horaires d'un conducteur routier selon la convention collective ?",
r:[{t:"24 heures"},{t:"7 jours ouvrés",ok:true},{t:"48 heures"},{t:"3 jours calendaires"}],
x:"La convention collective nationale des transports routiers prévoit un délai de prévenance de 7 jours ouvrés pour toute modification d'horaires de travail, sauf accord entre les parties ou urgence dûment justifiée."},

{id:2110,prog:'LOURD',theme:'lo-social',d:2,
e:"La carte conducteur du tachygraphe numérique est valable :",
r:[{t:"1 an"},{t:"5 ans",ok:true},{t:"3 ans"},{t:"10 ans"}],
x:"La carte conducteur du tachygraphe numérique est valable 5 ans. Elle doit être renouvelée avant expiration. La carte enregistre les activités des conducteurs (conduite, repos, travail, disponibilité)."},

// ╔══════════════════════════════════════════════════════╗
// ║         CPC LOURD — GESTION FINANCIÈRE              ║
// ╚══════════════════════════════════════════════════════╝
{id:2301,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le prix de revient d'un transport est composé de :",
r:[{t:"Uniquement du carburant et des péages"},{t:"Charges fixes (amortissement, assurance) + charges variables (carburant, pneus) + charges de structure",ok:true},{t:"Uniquement du salaire du conducteur"},{t:"Du prix facturé moins la marge"}],
x:"Le prix de revient d'un transport intègre : charges directes fixes (amortissement véhicule, assurance), charges directes variables (carburant, pneus, entretien, péages) et une quote-part des charges de structure (loyer, personnel administratif, frais généraux)."},

{id:2302,prog:'LOURD',theme:'lo-gestion',d:3,
e:"L'EBITDA (ou EBE - Excédent Brut d'Exploitation) représente :",
r:[{t:"Le bénéfice net après impôts et intérêts"},{t:"Le résultat opérationnel avant déduction des amortissements et provisions",ok:true},{t:"Le chiffre d'affaires hors taxes"},{t:"Les capitaux propres de l'entreprise"}],
x:"L'EBE (ou EBITDA) = Résultat d'exploitation + Amortissements + Provisions. Il mesure la capacité de l'entreprise à générer des liquidités par son activité avant prise en compte des investissements et du financement."},

{id:2303,prog:'LOURD',theme:'lo-gestion',d:2,
e:"La capacité d'autofinancement (CAF) d'une entreprise de transport représente :",
r:[{t:"Les dividendes versés aux actionnaires"},{t:"Les ressources internes générées par l'activité disponibles pour investir ou rembourser",ok:true},{t:"Les emprunts en cours"},{t:"La trésorerie disponible en banque"}],
x:"CAF = Résultat net + Dotations aux amortissements et provisions - Reprises de provisions. Elle mesure les ressources générées par l'activité que l'entreprise peut utiliser pour financer ses investissements ou rembourser ses dettes sans recours externe."},

{id:2304,prog:'LOURD',theme:'lo-gestion',d:1,
e:"Le ratio de liquidité générale d'une entreprise est considéré comme satisfaisant lorsqu'il est :",
r:[{t:"Inférieur à 0,5"},{t:"Supérieur ou égal à 1",ok:true},{t:"Exactement égal à 0"},{t:"Supérieur à 5"}],
x:"Le ratio de liquidité générale = Actif circulant / Dettes à court terme. Un ratio ≥ 1 signifie que l'entreprise peut faire face à ses dettes à court terme avec ses actifs circulants. En dessous de 1, risque de problème de trésorerie."},

{id:2305,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le taux de rotation des immobilisations mesure :",
r:[{t:"La durée d'amortissement des véhicules"},{t:"L'efficacité avec laquelle l'entreprise utilise ses actifs pour générer du CA",ok:true},{t:"Le nombre de km parcourus par an"},{t:"Le taux d'usure des pneus"}],
x:"Taux de rotation des immobilisations = CA / Actif immobilisé net. Un taux élevé indique une bonne utilisation des actifs. Pour une entreprise de transport, il mesure notamment l'efficacité d'utilisation du parc de véhicules."},

// ╔══════════════════════════════════════════════════════╗
// ║         CPC LOURD — ACCÈS À LA PROFESSION           ║
// ╚══════════════════════════════════════════════════════╝
{id:2401,prog:'LOURD',theme:'lo-acces',d:1,
e:"Pour exercer le transport public routier de marchandises >3,5t, les 3 conditions d'accès sont :",
r:[{t:"Permis C + expérience 5 ans + assurance"},{t:"Honorabilité + capacité financière + capacité professionnelle",ok:true},{t:"Diplôme transport + siège social + salarié"},{t:"FIMO + FCOS + carte conducteur"}],
x:"L'accès à la profession de transporteur public routier est conditionné par 3 critères cumulatifs : honorabilité professionnelle, capacité financière (fonds propres) et capacité professionnelle (examen CPC ou équivalence)."},

{id:2402,prog:'LOURD',theme:'lo-acces',d:2,
e:"La capacité financière minimale pour un transporteur de marchandises >3,5t est de :",
r:[{t:"3 000 € par véhicule"},{t:"9 000 € pour le premier véhicule + 5 000 € par véhicule supplémentaire",ok:true},{t:"50 000 € forfaitaires"},{t:"1 % du CA annuel prévisionnel"}],
x:"Règlement (CE) 1071/2009 : capacité financière = 9 000 € pour le premier véhicule + 5 000 € par véhicule supplémentaire. Ces fonds propres doivent être démontrés par des comptes annuels certifiés ou une garantie bancaire."},

{id:2403,prog:'LOURD',theme:'lo-acces',d:2,
e:"La licence communautaire est obligatoire pour les transports internationaux au sein de l'UE pour les véhicules dont le PTAC dépasse :",
r:[{t:"2,5 tonnes"},{t:"3,5 tonnes",ok:true},{t:"7,5 tonnes"},{t:"12 tonnes"}],
x:"La licence communautaire (délivrée par l'autorité compétente de l'État membre) est obligatoire pour effectuer des transports routiers internationaux de marchandises pour compte d'autrui avec des véhicules d'un PTAC supérieur à 3,5 tonnes."},

{id:2404,prog:'LOURD',theme:'lo-acces',d:1,
e:"La licence de transport intérieur est délivrée par :",
r:[{t:"La CCI"},{t:"La DREAL ou la DRIEAT",ok:true},{t:"La Préfecture de police"},{t:"Le Ministère de l'Économie"}],
x:"La licence de transport intérieur (et la licence communautaire) sont délivrées par la DREAL (Direction Régionale de l'Environnement, de l'Aménagement et du Logement) ou la DRIEAT en Île-de-France."},

// ╔══════════════════════════════════════════════════════╗
// ║         CPC LOURD — RÉGLEMENTATION TRANSPORT        ║
// ╚══════════════════════════════════════════════════════╝
{id:2501,prog:'LOURD',theme:'lo-regl',d:2,
e:"Le cabotage routier consiste à :",
r:[{t:"Transporter des marchandises d'un pays à un autre"},{t:"Effectuer des transports nationaux dans un pays étranger après un transport international",ok:true},{t:"Transporter des marchandises en groupage"},{t:"Effectuer un transport avec plusieurs véhicules"}],
x:"Le cabotage est le fait pour un transporteur d'un État membre de l'UE d'effectuer des transports routiers nationaux dans un autre État membre, après avoir accompli un transport international entrant. Il est limité à 3 opérations en 7 jours par le règlement (CE) 1072/2009."},

{id:2502,prog:'LOURD',theme:'lo-regl',d:1,
e:"Le permis de conduire requis pour conduire un véhicule PL de plus de 7,5t est le :",
r:[{t:"Permis B"},{t:"Permis C",ok:true},{t:"Permis D"},{t:"Permis BE"}],
x:"Le permis C est obligatoire pour conduire un véhicule dont le PTAC dépasse 3,5 tonnes. Le permis CE est requis pour les ensembles (tracteur + semi-remorque ou porteur + remorque dépassant 3,5t)."},

{id:2503,prog:'LOURD',theme:'lo-regl',d:2,
e:"La FIMO (Formation Initiale Minimale Obligatoire) pour les conducteurs PL a une durée de :",
r:[{t:"105 heures (3 semaines)",ok:true},{t:"140 heures (4 semaines)"},{t:"35 heures (1 semaine)"},{t:"280 heures (8 semaines)"}],
x:"La FIMO (ou CQC Initial) est une formation de 280 heures pour les débutants (ou 140 heures avec équivalence). La FCOS (Formation Continue Obligatoire de Sécurité) est de 35 heures tous les 5 ans."},

{id:2504,prog:'LOURD',theme:'lo-regl',d:2,
e:"Le document de transport (lettre de voiture) doit accompagner la marchandise :",
r:[{t:"Uniquement sur autoroute"},{t:"Pendant tout le transport et être présenté lors des contrôles",ok:true},{t:"Uniquement pour les transports de plus de 100 km"},{t:"Uniquement si la marchandise dépasse 500 kg"}],
x:"Le document de transport (lettre de voiture / CMR pour international) doit accompagner la marchandise pendant tout le transport et être présenté à toute réquisition des agents de contrôle."},

{id:2505,prog:'LOURD',theme:'lo-regl',d:3,
e:"Le transport exceptionnel (convoi) de dimension hors gabarit nécessite :",
r:[{t:"Uniquement le feux de détresse allumés"},{t:"Une autorisation préfectorale de transport exceptionnel (APTE)",ok:true},{t:"Un simple accord verbal avec les forces de l'ordre"},{t:"Aucune autorisation si accompagné d'un véhicule pilote"}],
x:"Le transport exceptionnel (TEX) nécessite une Autorisation Préfectorale de Transport Exceptionnel (APTE). Selon les dimensions, 3 catégories existent. Un escorte ou accompagnement par véhicule(s) pilote(s) peut être requis."},

// ╔══════════════════════════════════════════════════════╗
// ║         CPC LOURD — TRANSPORT INTERNATIONAL         ║
// ╚══════════════════════════════════════════════════════╝
{id:2801,prog:'LOURD',theme:'lo-intl',d:2,
e:"La Convention CMR (contrat de transport international de marchandises par route) s'applique :",
r:[{t:"Uniquement aux transports au sein de l'UE"},{t:"Aux transports internationaux entre États signataires quand lieu de prise en charge et de livraison sont dans 2 pays différents",ok:true},{t:"Uniquement aux transports en dehors de l'Europe"},{t:"À tous les transports de plus de 500 km"}],
x:"La CMR s'applique à tout contrat de transport international de marchandises par route à titre onéreux lorsque le lieu de prise en charge de la marchandise et le lieu de livraison sont situés dans deux pays différents, dont l'un au moins est signataire."},

{id:2802,prog:'LOURD',theme:'lo-intl',d:1,
e:"En transport international sous CMR, la responsabilité du transporteur est limitée à :",
r:[{t:"8,33 DTS par kilogramme de poids brut de la marchandise",ok:true},{t:"La valeur déclarée sur la facture commerciale"},{t:"1 000 € par colis"},{t:"10 % de la valeur assurée"}],
x:"Selon la convention CMR (art. 23), la responsabilité du transporteur est limitée à 8,33 DTS (Droits de Tirage Spéciaux) par kg de poids brut manquant. Une déclaration de valeur ou d'intérêt spécial permet d'augmenter cette limite."},

{id:2803,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le document T1 dans le transport international représente :",
r:[{t:"La lettre de voiture internationale (CMR)"},{t:"Un régime douanier de transit permettant le transport sans acquittement des droits",ok:true},{t:"L'attestation de capacité professionnelle internationale"},{t:"Le certificat d'inspection technique du véhicule"}],
x:"Le document T1 est un régime de transit douanier communautaire (pour les marchandises en provenance de pays tiers). Il permet le transport de marchandises non communautaires à travers l'UE sans acquitter les droits et taxes à chaque frontière."},

// ╔══════════════════════════════════════════════════════╗
// ║         ADR — DISPOSITIONS GÉNÉRALES                ║
// ╚══════════════════════════════════════════════════════╝
{id:3001,prog:'ADR',theme:'adr-gen',d:1,
e:"L'ADR est un accord européen relatif au transport international des marchandises dangereuses. ADR signifie :",
r:[{t:"Accord de Droit Routier"},{t:"Accord européen relatif au transport international des marchandises Dangereuses par Route",ok:true},{t:"Autorisation de Déplacement Routier"},{t:"Acte de Déclaration de Risques"}],
x:"ADR = Accord européen relatif au transport international des marchandises Dangereuses par Route. Signé à Genève en 1957, il est révisé tous les 2 ans et s'applique aux transports internationaux ET nationaux dans les pays signataires."},

{id:3002,prog:'ADR',theme:'adr-gen',d:2,
e:"L'ADR est révisé et mis à jour tous les :",
r:[{t:"1 an"},{t:"2 ans",ok:true},{t:"3 ans"},{t:"5 ans"}],
x:"L'ADR est révisé tous les 2 ans (années impaires). Les nouvelles versions entrent en vigueur le 1er janvier de l'année paire suivante, avec une période transitoire de 6 mois."},

{id:3003,prog:'ADR',theme:'adr-gen',d:1,
e:"Les 9 classes de danger de l'ADR classifient les marchandises selon :",
r:[{t:"Leur poids et volume"},{t:"Leur pays d'origine"},{t:"La nature du risque principal qu'elles présentent",ok:true},{t:"Leur valeur marchande"}],
x:"Les 9 classes ADR classifient les matières et objets selon la nature du danger principal : Classe 1 (explosibles), 2 (gaz), 3 (liquides inflammables), 4.1/4.2/4.3, 5.1/5.2, 6.1/6.2, 7 (radioactives), 8 (corrosives), 9 (divers)."},

{id:3004,prog:'ADR',theme:'adr-gen',d:2,
e:"Les 5 catégories de tunnel ADR (A à E) définissent :",
r:[{t:"La longueur maximale des tunnels"},{t:"Le type de marchandises dont le transport est autorisé ou interdit dans chaque tunnel",ok:true},{t:"La vitesse maximale dans les tunnels"},{t:"Le nombre de véhicules pouvant circuler simultanément"}],
x:"Les catégories de tunnel ADR (A = pas de restriction spécifique à E = restrictions maximales) définissent quelles marchandises dangereuses peuvent y transiter. La catégorie est indiquée sur les panneaux de signalisation à l'entrée du tunnel."},

{id:3005,prog:'ADR',theme:'adr-gen',d:2,
e:"Le numéro de danger (code Kemler) inscrit en haut de la plaque orange signifie :",
r:[{t:"Le numéro d'identification du transporteur"},{t:"La nature du risque présenté par la matière (2 ou 3 chiffres)",ok:true},{t:"Le poids brut du chargement"},{t:"Le numéro de la citerne"}],
x:"Le numéro de danger (ou code Kemler) indique la nature du risque : le 1er chiffre = risque principal, les suivants = risques secondaires. Ex : 33 = liquide très inflammable, 268 = gaz toxique, corrosif, comburant. Un X devant = réaction dangereuse avec l'eau."},

{id:3006,prog:'ADR',theme:'adr-gen',d:1,
e:"Le numéro ONU (en bas de la plaque orange) identifie :",
r:[{t:"L'immatriculation du véhicule"},{t:"La matière dangereuse ou groupe de matières dangereuses",ok:true},{t:"Le pays d'origine de la matière"},{t:"La classe de danger uniquement"}],
x:"Le numéro ONU est un code à 4 chiffres assigné par l'ONU à chaque matière dangereuse ou groupe de matières similaires. Ex : ONU 1203 = Essence, ONU 1993 = Liquide inflammable n.a.s."},

{id:3007,prog:'ADR',theme:'adr-gen',d:3,
e:"La quantité maximale totale de marchandises dangereuses par unité de transport sans application de l'ADR (seuil d'exemption totale) est liée aux :",
r:[{t:"Points de transport calculés selon les catégories de transport",ok:true},{t:"Kilogrammes bruts de marchandises"},{t:"Nombre de colis transportés"},{t:"Volume en litres de la marchandise"}],
x:"Le système des points (1.1.3.6 de l'ADR) permet de calculer si une exemption totale s'applique. Chaque marchandise est affectée d'un facteur multiplicateur (50, 3, 1 ou 0) selon sa catégorie de transport. Si le total ≤ 1000 points, exemption totale."},

{id:3008,prog:'ADR',theme:'adr-gen',d:2,
e:"Le certificat de formation ADR du conducteur est valable :",
r:[{t:"1 an"},{t:"3 ans",ok:true},{t:"5 ans"},{t:"Indéfiniment si aucun accident"}],
x:"Le certificat ADR du conducteur est valable 5 ans. Pour le conserver, le conducteur doit suivre une formation de recyclage dans les 12 mois précédant l'expiration. S'il n'est pas renouvelé à temps, une nouvelle formation initiale complète est nécessaire."},

{id:3009,prog:'ADR',theme:'adr-gen',d:1,
e:"Le conseiller à la sécurité pour le transport de marchandises dangereuses (CSTMD) est obligatoire pour toute entreprise qui :",
r:[{t:"Transporte plus de 10 tonnes de MD par an"},{t:"Expédie, conditionne, charge, remplit ou transporte des marchandises dangereuses",ok:true},{t:"Possède plus de 5 véhicules"},{t:"Réalise uniquement du transport international"}],
x:"Toute entreprise dont l'activité comprend l'expédition, le chargement, le remplissage, le conditionnement, l'emballage ou le transport de marchandises dangereuses doit désigner un CSTMD. Ce conseiller peut être interne ou externe à l'entreprise."},

{id:3010,prog:'ADR',theme:'adr-gen',d:2,
e:"Les consignes écrites ADR (instructions en cas d'accident) doivent être rédigées dans :",
r:[{t:"Uniquement en français"},{t:"La ou les langues comprises par le conducteur + langues officielles des pays traversés",ok:true},{t:"En anglais uniquement (langue internationale)"},{t:"Uniquement dans la langue du pays de destination"}],
x:"Les consignes écrites ADR doivent être rédigées dans une langue comprise par chaque membre de l'équipage ET dans les langues officielles de chaque pays de chargement, de transit et de déchargement."},

// ╔══════════════════════════════════════════════════════╗
// ║         ADR — CLASSIFICATION & ÉTIQUETAGE           ║
// ╚══════════════════════════════════════════════════════╝
{id:3101,prog:'ADR',theme:'adr-cls',d:1,
e:"La Classe 2 de l'ADR concerne :",
r:[{t:"Les matières explosibles"},{t:"Les gaz (comprimés, liquéfiés, dissous)",ok:true},{t:"Les liquides inflammables"},{t:"Les matières solides inflammables"}],
x:"Classe 2 = les gaz. Elle se subdivise en : gaz comprimés (ex : azote), gaz liquéfiés (ex : propane), gaz liquéfiés réfrigérés (ex : oxygène liquide), gaz dissous (ex : acétylène). Risques : explosion, asphyxie, inflammabilité."},

{id:3102,prog:'ADR',theme:'adr-cls',d:1,
e:"La Classe 3 de l'ADR concerne :",
r:[{t:"Les gaz inflammables"},{t:"Les liquides inflammables",ok:true},{t:"Les solides inflammables"},{t:"Les matières corrosives"}],
x:"Classe 3 = les liquides inflammables. Ex : essence (ONU 1203), éthanol, peintures. Le risque principal est l'incendie. Pictogramme : flamme sur fond rouge."},

{id:3103,prog:'ADR',theme:'adr-cls',d:2,
e:"La Classe 6.1 de l'ADR concerne :",
r:[{t:"Les matières infectieuses"},{t:"Les matières toxiques",ok:true},{t:"Les matières radioactives"},{t:"Les matières corrosives"}],
x:"Classe 6.1 = matières toxiques (pouvant provoquer la mort ou des lésions graves par inhalation, ingestion ou contact cutané). Pictogramme : tête de mort sur fond blanc. Ex : pesticides, médicaments à forte concentration."},

{id:3104,prog:'ADR',theme:'adr-cls',d:2,
e:"La Classe 6.2 de l'ADR concerne :",
r:[{t:"Les matières radioactives"},{t:"Les matières toxiques"},{t:"Les matières infectieuses",ok:true},{t:"Les matières explosibles"}],
x:"Classe 6.2 = matières infectieuses susceptibles de causer des maladies chez l'homme ou l'animal (ex : cultures microbiennes, déchets médicaux, spécimens biologiques). Pictogramme : 3 croissants sur fond blanc."},

{id:3105,prog:'ADR',theme:'adr-cls',d:1,
e:"La Classe 8 de l'ADR concerne :",
r:[{t:"Les matières radioactives"},{t:"Les matières corrosives",ok:true},{t:"Les matières toxiques"},{t:"Les matières infectieuses"}],
x:"Classe 8 = matières corrosives. Ce sont des matières qui, par action chimique, peuvent causer des lésions graves aux tissus vivants ou endommager d'autres marchandises. Ex : acide sulfurique, soude caustique. Pictogramme : liquide corrosif sur deux surfaces."},

{id:3106,prog:'ADR',theme:'adr-cls',d:3,
e:"La Classe 9 de l'ADR est une classe résiduelle qui inclut notamment :",
r:[{t:"Les matières non dangereuses transportées volontairement"},{t:"Les matières et objets présentant un danger non couvert par les autres classes (ex : lithium, dry ice, véhicules…)",ok:true},{t:"Uniquement les matières radioactives de faible activité"},{t:"Les médicaments et produits pharmaceutiques"}],
x:"Classe 9 = matières et objets dangereux divers non couverts par les autres classes. Exemples : batteries au lithium (ONU 3480/3481), neige carbonique (ONU 1845), engins de sauvetage (airbags), véhicules électriques. Pictogramme : rayures verticales noires sur fond blanc."},

{id:3107,prog:'ADR',theme:'adr-cls',d:2,
e:"Le pictogramme représentant une flamme sur fond rouge correspond aux matières :",
r:[{t:"Explosibles (Classe 1)"},{t:"Inflammables (Classes 2, 3, 4.1, 4.2)",ok:true},{t:"Toxiques (Classe 6.1)"},{t:"Corrosives (Classe 8)"}],
x:"La flamme sur fond rouge est le pictogramme des matières inflammables (liquides inflammables Classe 3, gaz inflammables Classe 2, solides inflammables Classe 4.1, matières spontanément inflammables Classe 4.2)."},

{id:3108,prog:'ADR',theme:'adr-cls',d:1,
e:"Les matières de la Classe 7 (radioactives) sont caractérisées par leur :",
r:[{t:"Inflammabilité"},{t:"Radioactivité (émission de rayonnements ionisants)",ok:true},{t:"Toxicité par ingestion"},{t:"Caractère explosif"}],
x:"Classe 7 = matières radioactives émettant des rayonnements ionisants (alpha, bêta, gamma). Ex : radio-isotopes médicaux, déchets nucléaires. 3 catégories selon l'indice de transport : I-Blanc, II-Jaune, III-Jaune."},

// ╔══════════════════════════════════════════════════════╗
// ║         ADR — DOCUMENTS DE TRANSPORT                ║
// ╚══════════════════════════════════════════════════════╝
{id:3201,prog:'ADR',theme:'adr-doc',d:2,
e:"Le document de transport ADR doit obligatoirement indiquer :",
r:[{t:"Uniquement le numéro ONU"},{t:"N° ONU, désignation officielle, classe, groupe d'emballage, quantité, expéditeur, destinataire",ok:true},{t:"Uniquement la classe de danger et le nom du conducteur"},{t:"Le numéro de plaque d'immatriculation du véhicule uniquement"}],
x:"Le document de transport ADR doit contenir : le numéro ONU (UN XXXX), la désignation officielle de transport, la classe, le code de classification, le groupe d'emballage (si applicable), la quantité totale, le nom et adresse de l'expéditeur et du destinataire."},

{id:3202,prog:'ADR',theme:'adr-doc',d:1,
e:"Les consignes écrites ADR (EN CAS D'ACCIDENT) doivent se trouver :",
r:[{t:"Dans la boîte à gants ou à portée du conducteur",ok:true},{t:"Dans le bureau de l'entreprise"},{t:"Dans le chargement avec les marchandises"},{t:"Elles ne sont pas obligatoires en France"}],
x:"Les consignes écrites doivent être accessibles à portée du conducteur (souvent dans la cabine, boîte à gants ou sous le siège). Elles décrivent les mesures à prendre en cas d'accident, d'incendie ou de fuite selon chaque marchandise transportée."},

{id:3203,prog:'ADR',theme:'adr-doc',d:2,
e:"La déclaration de chargement du conteneur (DCG) est requise pour :",
r:[{t:"Tous les transports ADR sans exception"},{t:"Les transports ADR en conteneur ou véhicule bâché uniquement si plusieurs expéditeurs",ok:true},{t:"Les transports de gaz uniquement"},{t:"Les transports ADR de plus de 5 tonnes"}],
x:"La déclaration de chargement du conteneur (ou véhicule) est requise lorsque des marchandises dangereuses sont chargées dans un conteneur, pour attester que le chargement a été effectué correctement et que le conteneur est en bon état."},

{id:3204,prog:'ADR',theme:'adr-doc',d:1,
e:"Le certificat de formation ADR du conducteur doit-il se trouver dans le véhicule ?",
r:[{t:"Non, il est conservé uniquement en entreprise"},{t:"Oui, le conducteur doit le détenir et le présenter lors des contrôles",ok:true},{t:"Uniquement pour les transports internationaux"},{t:"Non, un simple justificatif de l'employeur suffit"}],
x:"Le conducteur doit détenir son certificat ADR valide dans le véhicule pendant tout transport de marchandises dangereuses et le présenter à tout contrôle. L'employeur doit également en conserver une copie."},

// ╔══════════════════════════════════════════════════════╗
// ║         ADR — EMBALLAGES & CONDITIONNEMENT          ║
// ╚══════════════════════════════════════════════════════╝
{id:3301,prog:'ADR',theme:'adr-emb',d:2,
e:"Les groupes d'emballage I, II et III de l'ADR correspondent respectivement à :",
r:[{t:"Petit, moyen et grand emballage"},{t:"Danger grand, moyen et faible",ok:true},{t:"Emballage plastique, métal et carton"},{t:"Transport national, régional et international"}],
x:"Les groupes d'emballage définissent le niveau de danger : GE I = grand danger (emballage le plus robuste), GE II = danger moyen, GE III = danger faible. Plus le groupe est élevé (I), plus les exigences d'emballage sont strictes."},

{id:3302,prog:'ADR',theme:'adr-emb',d:1,
e:"Le marquage ONU sur un emballage homologué ADR comporte :",
r:[{t:"La mention 'ONU' ou le symbole UN",ok:true},{t:"Uniquement le numéro ONU de la marchandise"},{t:"Le nom du fabricant de l'emballage"},{t:"Le prix de l'emballage"}],
x:"Le marquage UN (ou ONU) sur un emballage homologué signifie qu'il a été testé et approuvé selon les normes de l'ONU pour le transport de marchandises dangereuses. Il inclut : symbole UN, code d'emballage, GE, pression d'essai, année, code du pays, fabricant."},

{id:3303,prog:'ADR',theme:'adr-emb',d:3,
e:"Un grand récipient pour vrac (GRV ou IBC) est un emballage d'une capacité :",
r:[{t:"Inférieure à 60 litres"},{t:"Entre 60 et 450 litres"},{t:"Supérieure à 450 litres et jusqu'à 3 000 litres",ok:true},{t:"Supérieure à 3 000 litres"}],
x:"Les GRV (Grands Récipients pour Vrac) ou IBC (Intermediate Bulk Containers) sont des emballages rigides ou souples d'une capacité comprise entre 450 litres et 3 000 litres. Au-delà, on parle de citerne."},

// ╔══════════════════════════════════════════════════════╗
// ║         ADR — SIGNALISATION VÉHICULES               ║
// ╚══════════════════════════════════════════════════════╝
{id:3401,prog:'ADR',theme:'adr-sig',d:1,
e:"Les plaques oranges réfléchissantes signalant un transport ADR ont des dimensions de :",
r:[{t:"200 mm × 150 mm"},{t:"400 mm × 300 mm",ok:true},{t:"600 mm × 400 mm"},{t:"100 mm × 100 mm"}],
x:"Les plaques oranges réfléchissantes ADR mesurent 400 mm × 300 mm avec une bordure noire de 15 mm. Elles doivent être visibles, propres et plates (non endommagées)."},

{id:3402,prog:'ADR',theme:'adr-sig',d:2,
e:"Un véhicule transportant une seule marchandise dangereuse en citerne affiche :",
r:[{t:"Uniquement une plaque orange vierge à l'avant"},{t:"Une plaque avec numéro de danger (haut) + numéro ONU (bas) sur les côtés et à l'arrière",ok:true},{t:"Uniquement les étiquettes de danger"},{t:"Aucun marquage si le volume est inférieur à 1 000 litres"}],
x:"Pour un transport en citerne d'une seule matière, les plaques orange avec codes doivent être placées de chaque côté et à l'arrière de la citerne. À l'avant du véhicule, une plaque orange sans code suffit."},

{id:3403,prog:'ADR',theme:'adr-sig',d:2,
e:"Les étiquettes de danger ADR (losanges) doivent être apposées sur :",
r:[{t:"Uniquement le véhicule"},{t:"Les colis, les conteneurs et les véhicules selon les cas",ok:true},{t:"Uniquement le document de transport"},{t:"Uniquement les palettes"}],
x:"Les étiquettes de danger (losanges 100×100 mm minimum) sont apposées sur les colis. Des plaques-étiquettes (250×250 mm) sont requises sur les conteneurs et les véhicules pour certains transports."},

{id:3404,prog:'ADR',theme:'adr-sig',d:1,
e:"Que signifie la lettre X placée devant le numéro de danger sur la plaque orange ?",
r:[{t:"Danger extrême"},{t:"Réaction dangereuse avec l'eau",ok:true},{t:"Transport exceptionnel"},{t:"Marchandise explosive"}],
x:"La lettre X devant le code Kemler (ex : X268) signifie que la matière est dangereuse au contact de l'eau (risque de réaction violente, dégagement de gaz inflammables ou toxiques). Ces matières ne doivent jamais être éteintes avec de l'eau."},

// ╔══════════════════════════════════════════════════════╗
// ║         ADR — MESURES DE SÉCURITÉ                   ║
// ╚══════════════════════════════════════════════════════╝
{id:3501,prog:'ADR',theme:'adr-sec',d:1,
e:"Les équipements de protection individuelle à bord d'un véhicule ADR comprennent obligatoirement :",
r:[{t:"Uniquement un extincteur"},{t:"Cales de roue, gilet réfléchissant, lampe portable, lunettes/gants de protection, consignes écrites",ok:true},{t:"Un masque à gaz complet et une combinaison anti-feu"},{t:"Uniquement un triangle de signalisation"}],
x:"L'équipement ADR obligatoire à bord comprend : cales de roue, au moins 2 signaux d'avertissement autoporteurs, lampe portable (sans flamme), gilets réfléchissants pour chaque membre d'équipage, lunettes de protection et gants (selon les marchandises), consignes écrites."},

{id:3502,prog:'ADR',theme:'adr-sec',d:2,
e:"En cas de fuite de matière dangereuse, la première mesure à prendre est :",
r:[{t:"Éteindre immédiatement avec de l'eau"},{t:"Arrêter le véhicule en lieu sûr, sécuriser, alerter les secours, consulter les consignes écrites",ok:true},{t:"Continuer jusqu'au prochain arrêt prévu"},{t:"Contacter d'abord l'entreprise avant les secours"}],
x:"En cas de fuite : 1. Arrêter le véhicule en lieu sûr (loin des habitations, zones peuplées) — 2. Couper le moteur, ne pas fumer — 3. Baliser la zone — 4. Consulter les consignes écrites — 5. Alerter les secours (18/15/112) — 6. Ne jamais tenter de réparer seul."},

{id:3503,prog:'ADR',theme:'adr-sec',d:2,
e:"Les extincteurs à bord d'un véhicule ADR doivent être :",
r:[{t:"Uniquement à poudre ABC"},{t:"En bon état de fonctionnement, portant une date valide d'inspection et adaptés à la cargaison",ok:true},{t:"Uniquement à CO2 (gaz carbonique)"},{t:"Non obligatoires si la cargaison est faible quantité"}],
x:"Les extincteurs ADR doivent être : homologués, en bon état, vérifiés périodiquement (date de validité visible), adaptés au type de cargaison. Au minimum : 1 extincteur de 2 kg de poudre AB pour cabine + 1 ou 2 extincteurs selon le type de véhicule."},

{id:3504,prog:'ADR',theme:'adr-sec',d:3,
e:"L'interdiction de fumer s'applique à bord d'un véhicule ADR :",
r:[{t:"Uniquement pour les matières de Classe 1 (explosibles)"},{t:"Uniquement si la marchandise est inflammable"},{t:"Lors des opérations de chargement/déchargement et pendant tout le transport pour les MD de classes à risque incendie",ok:true},{t:"Uniquement dans les tunnels"}],
x:"L'interdiction de fumer s'applique lors des opérations de chargement, de transport et de déchargement pour toutes les marchandises dont le transport peut créer un risque d'incendie ou d'explosion. Elle est généralement étendue à tout transport ADR."},

{id:3505,prog:'ADR',theme:'adr-sec',d:2,
e:"Le stationnement d'un véhicule transportant des marchandises dangereuses est :",
r:[{t:"Libre, sans restriction particulière"},{t:"Soumis à des restrictions (lieux habités, tunnels, ponts) et nécessite surveillance selon la quantité",ok:true},{t:"Interdit la nuit en tout lieu"},{t:"Autorisé uniquement dans les dépôts agréés ADR"}],
x:"Le stationnement d'un véhicule ADR est soumis à des restrictions : éviter les zones habitées, les tunnels, les dessous de ponts. Une surveillance permanente peut être requise. En cas de stationnement prolongé, des mesures de sécurité supplémentaires s'appliquent."},

{id:3506,prog:'ADR',theme:'adr-sec',d:1,
e:"En cas d'accident avec des matières de Classe 6.2 (infectieuses), on doit :",
r:[{t:"Nettoyer soi-même le déversement avec de l'eau"},{t:"Alerter immédiatement les services de secours spécialisés et ne pas toucher la marchandise",ok:true},{t:"Ouvrir les fenêtres et attendre que la zone s'aère"},{t:"Utiliser l'extincteur à poudre"}],
x:"En cas de déversement de matières infectieuses (Classe 6.2), il ne faut jamais toucher la marchandise. Il faut immédiatement alerter les secours spécialisés (pompiers NRBC), évacuer et baliser la zone, consulter les consignes écrites."},

]; // FIN QUESTIONS_BANK

// ════════════════════════════════════════════════
// MOTEUR DE GESTION DES QUESTIONS
// ════════════════════════════════════════════════

class QuestionEngine {
  constructor(bank) {
    this.bank = bank;
    this.history = this._loadHistory();
  }

  // Charge l'historique depuis sessionStorage
  _loadHistory() {
    try {
      const h = sessionStorage.getItem('rp_history');
      return h ? JSON.parse(h) : {};
    } catch { return {}; }
  }

  // Sauvegarde l'historique
  _saveHistory() {
    try {
      sessionStorage.setItem('rp_history', JSON.stringify(this.history));
    } catch {}
  }

  // Récupère les questions pour un thème donné
  getByTheme(themeId) {
    // Mapping thèmes courts -> thèmes longs (compatibilité nouvelles questions)
    const THEME_MAP = {
      'cl-civil':   ['cl-civil',  'Droit civil & commercial'],
      'cl-social':  ['cl-social', 'Droit social'],
      'cl-fiscal':  ['cl-fiscal', 'Droit fiscal'],
      'cl-gestion': ['cl-gestion','Gestion financière'],
      'cl-acces':   ['cl-acces',  'Accès à la profession'],
      'cl-regl':    ['cl-regl',   'Réglementation VUL'],
      'cl-secu':    ['cl-secu',   'Sécurité routière'],
      'lo-social':  ['lo-social', 'Droit social','Droit social PL'],
      'lo-civil':   ['lo-civil',  'Droit civil & commercial PL'],
      'lo-fiscal':  ['lo-fiscal', 'Droit fiscal'],
      'lo-gestion': ['lo-gestion','Gestion financière PL'],
      'lo-acces':   ['lo-acces',  'Accès à la profession'],
      'lo-regl':    ['lo-regl',   'Réglementation transport PL'],
      'lo-secu':    ['lo-secu',   'Sécurité routière'],
      'lo-intl':    ['lo-intl',   'Transport international'],
      'adr-gen':    ['adr-gen',   'ADR — Général'],
      'adr-cls':    ['adr-cls',   'ADR — Classification'],
      'adr-doc':    ['adr-doc',   'ADR — Documents'],
      'adr-emb':    ['adr-emb',   'ADR — Emballages'],
      'adr-sig':    ['adr-sig',   'ADR — Signalisation'],
      'adr-sec':    ['adr-sec',   'ADR — Sécurité'],
    };
    const accepted = THEME_MAP[themeId] || [themeId];
    return this.bank.filter(q => accepted.includes(q.theme));
  }

  // Récupère les questions pour un programme donné
  getByProg(prog) {
    return this.bank.filter(q => q.prog === prog);
  }

  // Algorithme de sélection intelligent :
  // 1. Priorité aux questions non encore vues
  // 2. Ensuite aux questions ratées récemment
  // 3. Enfin rotation sur les questions bien maîtrisées
  getSmartSelection(themeId, count = 10) {
    const all = this.getByTheme(themeId);
    if (!all.length) return [];

    const now = Date.now();
    const scored = all.map(q => {
      const h = this.history[q.id] || { seen: 0, wrong: 0, last: 0 };
      let score = 0;
      if (h.seen === 0) score = 1000;                          // jamais vue → priorité max
      else if (h.wrong > 0) score = 500 + h.wrong * 100;      // ratée → haute priorité
      else score = Math.max(0, 300 - (now - h.last) / 60000); // vue correcte → priorité selon ancienneté
      return { q, score };
    });

    // Trier par score décroissant + légère randomisation
    scored.sort((a, b) => {
      const diff = b.score - a.score;
      if (Math.abs(diff) < 50) return Math.random() - 0.5;
      return diff;
    });

    return scored.slice(0, count).map(s => s.q);
  }

  // Enregistre le résultat d'une réponse
  recordAnswer(questionId, correct) {
    if (!this.history[questionId]) {
      this.history[questionId] = { seen: 0, wrong: 0, last: 0 };
    }
    this.history[questionId].seen++;
    this.history[questionId].last = Date.now();
    if (!correct) this.history[questionId].wrong++;
    else if (this.history[questionId].wrong > 0) this.history[questionId].wrong--;
    this._saveHistory();
  }

  // Stats pour un thème
  getThemeStats(themeId) {
    const all = this.getByTheme(themeId);
    const seen = all.filter(q => this.history[q.id]?.seen > 0);
    const correct = seen.filter(q => (this.history[q.id]?.wrong || 0) === 0);
    return {
      total: all.length,
      seen: seen.length,
      mastered: correct.length,
      pct: seen.length > 0 ? Math.round((correct.length / seen.length) * 100) : 0
    };
  }

  // Shuffle classique
  static shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Mélange les réponses d'une question
  static shuffleAnswers(q) {
    return { ...q, r: QuestionEngine.shuffle(q.r.map(r => ({ ...r }))) };
  }
}

// Export global
if (typeof module !== 'undefined') module.exports = { QUESTIONS_BANK, QuestionEngine };
else window.QUESTIONS_BANK = QUESTIONS_BANK, window.QuestionEngine = QuestionEngine;
