// ═══════════════════════════════════════════════════
// FORGETAROUTE — banque.js — 1007 questions
// CPC Léger (<3,5t) + CPC Lourd (>3,5t) + ADR
// ═══════════════════════════════════════════════════

var QUESTIONS_BANK = [
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
e:"Le SMIC horaire brut en France (2026) est d'environ :",
r:[{t:"10,00 €"},{t:"11,65 €"},{t:"12,02 €",ok:true},{t:"9,50 €"}],
x:"Le SMIC horaire brut est revalorisé chaque année au 1er janvier (décret n°2025-1228). Au 1er janvier 2026, il est de 12,02 € brut/heure, soit 1 823,03 € brut mensuel pour 35h. Il était de 11,88 € en 2025 et 11,65 € début 2024."},

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
x:"Lorsque le CA dépasse le seuil de franchise en base de TVA (37 500 € pour les prestations de services depuis 2026, 85 000 € pour les ventes), l'auto-entrepreneur doit collecter et reverser la TVA. Si le seuil de tolérance est dépassé (41 250 € services / 93 500 € ventes), l'assujettissement est immédiat."},

{id:1203,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"La cotisation foncière des entreprises (CFE) est due par :",
r:[{t:"Uniquement les sociétés (SA, SARL, SAS…)"},{t:"Toute personne exerçant une activité professionnelle non salariée à titre habituel",ok:true},{t:"Uniquement les entreprises employant des salariés"},{t:"Les entreprises ayant un CA supérieur à 500 000 €"}],
x:"La CFE (ancienne taxe professionnelle) est due par toute personne physique ou morale exerçant à titre habituel une activité professionnelle non salariée, quelle que soit la forme juridique."},

{id:1204,prog:'LEGER',theme:'cl-fiscal',d:3,
e:"L'amortissement d'un véhicule utilitaire léger correspond à :",
r:[{t:"La dépréciation constatée du véhicule inscrite en charge sur plusieurs années",ok:true},{t:"La prime d'assurance annuelle du véhicule"},{t:"Les frais de carburant annuels"},{t:"Le loyer mensuel en cas de leasing"}],
x:"L'amortissement est une technique comptable qui répartit le coût d'un bien sur sa durée d'utilisation. Pour un VUL, la durée d'amortissement est généralement de 4 à 5 ans en linéaire."},

{id:1205,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"Le taux de cotisations sociales de l'auto-entrepreneur pour une activité de prestation de services BIC (transport) est de :",
r:[{t:"6,4 %"},{t:"12,3 % (vente de marchandises)"},{t:"21,2 %",ok:true},{t:"33 %"}],
x:"Pour les prestations de services BIC (dont le transport pour compte d'autrui), le taux de cotisations sociales de l'auto-entrepreneur est de 21,2 % du CA (taux 2025-2026). Le taux de 12,3 % concerne uniquement les activités d'achat-revente (vente de marchandises). Ne pas confondre les deux."},

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
r:[{t:"105 heures (3 semaines)"},{t:"140 heures (4 semaines)",ok:true},{t:"35 heures (1 semaine)"},{t:"280 heures (8 semaines)"}],
x:"La FIMO est une formation accélérée de 140 heures (4 semaines) effectuée dans un centre agréé. Elle permet d'obtenir la carte CQC (Carte de Qualification de Conducteur). Il existe aussi une voie longue de 280 heures (titre professionnel : CAP, Bac Pro, Titre pro CTRMV) qui donne une équivalence FIMO. La FCOS (formation continue) est de 35 heures tous les 5 ans."},

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
r:[{t:"1 an"},{t:"3 ans"},{t:"5 ans",ok:true},{t:"Indéfiniment si aucun accident"}],
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
// ══════════════════════════════════════
// DROIT CIVIL & COMMERCIAL (60 questions)
// ══════════════════════════════════════
{id:5001,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"Quelle est la durée de la prescription de droit commun pour les actions entre commerçants ?",
r:[{t:"2 ans"},{t:"5 ans",ok:true},{t:"10 ans"},{t:"30 ans"}],
x:"Depuis la loi du 17 juin 2008, le délai de prescription de droit commun est de 5 ans (art. 2224 du Code civil). Entre commerçants, ce délai de 5 ans s'applique également pour les actes de commerce."},

{id:5002,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"Un contrat de transport est considéré comme formé dès :",
r:[{t:"La remise physique de la marchandise au transporteur"},{t:"L'accord des volontés entre l'expéditeur et le transporteur",ok:true},{t:"La signature de la lettre de voiture"},{t:"Le départ du véhicule du lieu de chargement"}],
x:"Le contrat de transport est un contrat consensuel : il se forme par le simple accord des volontés (offre + acceptation), sans formalité particulière. La lettre de voiture n'est qu'un instrument de preuve, pas une condition de validité du contrat."},

{id:5003,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"La clause de 'port dû' dans un contrat de transport signifie que :",
r:[{t:"Le transport est gratuit"},{t:"Les frais de transport sont à la charge du destinataire",ok:true},{t:"L'expéditeur paie avant le départ"},{t:"Le transporteur avance les frais"}],
x:"'Port dû' signifie que les frais de transport sont payables à la livraison par le destinataire. À l'inverse, 'port payé' ou 'franco' signifie que l'expéditeur prend en charge les frais de transport dans le prix de vente."},

{id:5004,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"Le bon de livraison est :",
r:[{t:"Un document obligatoire pour tous les transports"},{t:"Un document matérialisant la livraison effective de la marchandise",ok:true},{t:"Équivalent à une facture commerciale"},{t:"Un document douanier obligatoire"}],
x:"Le bon de livraison (ou récépissé) est le document remis au destinataire lors de la livraison, attestant qu'il a bien reçu la marchandise. Sa signature sans réserve crée une présomption de réception en bon état."},

{id:5005,prog:'LEGER',theme:'Droit civil & commercial',d:3,
e:"Le 'dol' dans la formation d'un contrat est :",
r:[{t:"Une erreur involontaire d'une partie"},{t:"Une manœuvre frauduleuse pour provoquer l'erreur du cocontractant",ok:true},{t:"Un avantage excessif obtenu par une partie"},{t:"L'impossibilité d'exécuter le contrat"}],
x:"Le dol est un vice du consentement (art. 1137 du Code civil). Il consiste en des manœuvres frauduleuses ou des mensonges délibérés destinés à tromper l'autre partie et à provoquer son consentement. Le dol entraîne la nullité relative du contrat."},

{id:5006,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"Un véhicule utilitaire acheté par une entreprise est un :",
r:[{t:"Actif circulant"},{t:"Passif non courant"},{t:"Actif immobilisé",ok:true},{t:"Charge d'exploitation"}],
x:"Un VUL acquis pour les besoins durables de l'entreprise est inscrit à l'actif immobilisé du bilan (immobilisations corporelles). Il sera amorti sur sa durée d'utilisation estimée (généralement 4 à 5 ans)."},

{id:5007,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"La vente commerciale entre professionnels se prouve par :",
r:[{t:"Uniquement un acte notarié"},{t:"Tout moyen, y compris par e-mail ou bon de commande",ok:true},{t:"Obligatoirement un contrat écrit signé"},{t:"Uniquement par facture acquittée"}],
x:"En droit commercial, la preuve est libre : elle peut être apportée par tout moyen (témoignages, e-mails, factures, bons de commande, enregistrements…). C'est l'un des caractères distinctifs du droit commercial par rapport au droit civil."},

{id:5008,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"La convention collective applicable à un transporteur de messagerie légère est :",
r:[{t:"La convention des transports routiers de marchandises",ok:true},{t:"La convention du commerce de détail"},{t:"La convention de la logistique"},{t:"Il n'y a pas de convention collective applicable"}],
x:"Les entreprises de transport routier de marchandises, quelle que soit la catégorie de véhicule, relèvent de la Convention Collective Nationale des Transports Routiers et Activités Auxiliaires du Transport (CCNTR)."},

{id:5009,prog:'LEGER',theme:'Droit civil & commercial',d:3,
e:"La subrogation dans un contrat d'assurance transport signifie que :",
r:[{t:"L'assuré renonce à toute indemnité"},{t:"L'assureur, après avoir indemnisé l'assuré, se substitue à lui pour exercer les recours contre le responsable",ok:true},{t:"Le transporteur est exonéré de toute responsabilité"},{t:"L'assurance couvre automatiquement tous les risques"}],
x:"La subrogation légale (art. L.121-12 du Code des assurances) permet à l'assureur qui a indemnisé son assuré (l'expéditeur ou le destinataire) d'exercer en son nom les actions en responsabilité contre le transporteur ou tout autre tiers responsable du sinistre."},

{id:5010,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"Le délai de paiement maximum entre professionnels en France est de :",
r:[{t:"30 jours date de facture"},{t:"45 jours fin de mois ou 60 jours date de facture",ok:true},{t:"90 jours date de facture"},{t:"6 mois à compter de la livraison"}],
x:"La loi LME (2008) fixe les délais de paiement entre professionnels à 60 jours date de facture ou 45 jours fin de mois. Au-delà, des pénalités de retard sont obligatoirement applicables. Des délais dérogatoires existent pour certains secteurs."},

{id:5011,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"La facture doit être émise au plus tard :",
r:[{t:"Le jour de la prestation"},{t:"Le 15e jour du mois suivant la livraison ou prestation",ok:true},{t:"30 jours après la livraison"},{t:"À la fin de l'exercice comptable"}],
x:"En vertu du Code de commerce, la facture doit être émise dès la réalisation de la vente ou de la prestation de service, ou au plus tard le 15 du mois suivant. Elle doit mentionner obligatoirement les mentions légales (numéro, date, SIRET, TVA…)."},

{id:5012,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"L'action directe du sous-traitant contre le donneur d'ordre initial (maître de l'ouvrage) :",
r:[{t:"N'existe pas dans le transport"},{t:"Existe uniquement en cas de construction"},{t:"Existe en transport si le sous-traitant a été agréé",ok:true},{t:"Permet toujours au sous-traitant d'être payé directement"}],
x:"La loi du 31 décembre 1975 sur la sous-traitance prévoit une action directe du sous-traitant contre le maître d'ouvrage, mais celle-ci est soumise à l'agrément préalable du sous-traitant. En transport, ce mécanisme s'applique avec des spécificités propres au secteur."},

{id:5013,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"Les pénalités de retard sur facture impayée sont dues :",
r:[{t:"Uniquement si elles sont prévues dans le contrat"},{t:"Automatiquement le lendemain de la date d'échéance, sans mise en demeure",ok:true},{t:"Uniquement après une mise en demeure formelle"},{t:"Uniquement pour les factures supérieures à 1 000 €"}],
x:"Depuis la loi LME, les pénalités de retard sont dues de plein droit dès le lendemain de la date d'échéance, sans qu'il soit nécessaire d'envoyer une mise en demeure. Le taux minimum légal est de 3 fois le taux d'intérêt légal (ou taux BCE + 10 points)."},

{id:5014,prog:'LEGER',theme:'Droit civil & commercial',d:3,
e:"L'indemnité forfaitaire pour frais de recouvrement due en cas de retard de paiement est de :",
r:[{t:"10 €"},{t:"40 €",ok:true},{t:"100 €"},{t:"Elle n'existe pas en France"}],
x:"Une indemnité forfaitaire de 40 € pour frais de recouvrement est obligatoirement due par le débiteur professionnel en cas de retard de paiement (art. D.441-5 du Code de commerce). Si les frais réels dépassent 40 €, une indemnité complémentaire justifiée peut être réclamée."},

{id:5015,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"La garantie légale de conformité pour les biens achetés à un professionnel par un consommateur est de :",
r:[{t:"6 mois"},{t:"1 an"},{t:"2 ans",ok:true},{t:"5 ans"}],
x:"La garantie légale de conformité (art. L.217-4 du Code de la consommation) est de 2 ans pour les biens achetés par un consommateur auprès d'un professionnel. Elle couvre les défauts de conformité existant au moment de la délivrance."},

{id:5016,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"Le KBIS est :",
r:[{t:"Le document fiscal annuel de l'entreprise"},{t:"L'extrait du registre du commerce attestant l'existence juridique d'une société",ok:true},{t:"Le relevé bancaire obligatoire pour les entreprises"},{t:"L'attestation d'immatriculation à l'URSSAF"}],
x:"Le KBIS est l'extrait du Registre du Commerce et des Sociétés (RCS). C'est la 'carte d'identité' officielle d'une entreprise commerciale, délivrée par le greffe du tribunal de commerce. Il atteste de l'existence légale de la société."},

{id:5017,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"La résolution d'un contrat pour inexécution entraîne :",
r:[{t:"La modification des obligations des parties"},{t:"L'anéantissement rétroactif du contrat avec restitutions réciproques",ok:true},{t:"Uniquement le versement de dommages et intérêts"},{t:"La suspension temporaire du contrat"}],
x:"La résolution (art. 1229 du Code civil) met fin au contrat et l'anéantit rétroactivement : les parties sont remises dans l'état où elles étaient avant la conclusion du contrat (restitutions mutuelles). Elle diffère de la résiliation qui ne vaut que pour l'avenir."},

{id:5018,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"Le taux légal de TVA applicable aux prestations de livraison à domicile de repas est :",
r:[{t:"5,5 %"},{t:"10 %",ok:true},{t:"20 %"},{t:"0 %"}],
x:"La livraison à domicile de repas préparés est soumise au taux réduit de TVA de 10 % (vente à emporter ou livraison de produits alimentaires préparés). Le transport de marchandises en général est soumis au taux normal de 20 %."},

{id:5019,prog:'LEGER',theme:'Droit civil & commercial',d:3,
e:"L'exception d'inexécution (exceptio non adimpleti contractus) permet à une partie :",
r:[{t:"D'obtenir des dommages et intérêts sans preuve"},{t:"De refuser d'exécuter sa propre obligation tant que l'autre n'exécute pas la sienne",ok:true},{t:"De résilier unilatéralement le contrat sans préavis"},{t:"D'obtenir la nullité du contrat"}],
x:"L'exception d'inexécution (art. 1219 du Code civil) est un mécanisme de défense : une partie peut légitimement refuser d'exécuter son obligation si l'autre partie n'exécute pas ou n'est pas prête à exécuter la sienne, et si l'inexécution est suffisamment grave."},

{id:5020,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"Qu'est-ce qu'un devis estimatif ?",
r:[{t:"Un contrat ferme et définitif"},{t:"Une estimation non engageante du coût d'une prestation, pouvant varier selon l'évolution réelle",ok:true},{t:"Un document fiscal obligatoire"},{t:"Un devis qui peut varier de 10 % maximum"}],
x:"Un devis estimatif (ou prévisionnel) n'est pas ferme : il peut varier selon l'évolution réelle des travaux ou prestations. Il n'existe aucune règle légale limitant la variation à 10 %. Un devis forfaitaire, en revanche, engage le prestataire sur un prix définitif. La nature du devis doit être clairement indiquée."},

{id:5021,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"Le registre des bénéficiaires effectifs (RBE) doit être déposé par :",
r:[{t:"Uniquement les sociétés cotées en bourse"},{t:"Toutes les sociétés immatriculées au RCS, sauf SCI",ok:true},{t:"Uniquement les entreprises de plus de 10 salariés"},{t:"Uniquement les SA et SAS"}],
x:"Le Registre des Bénéficiaires Effectifs (RBE) est obligatoire pour toutes les sociétés immatriculées au RCS (SARL, SAS, SA, etc.). Il identifie les personnes physiques détenant plus de 25 % du capital ou des droits de vote (loi Sapin II, 2016)."},

{id:5022,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"La mise en demeure est :",
r:[{t:"Un jugement rendu par un tribunal"},{t:"Une notification formelle enjoignant au débiteur d'exécuter son obligation",ok:true},{t:"Une saisie conservatoire sur les biens du débiteur"},{t:"Un acte notarié obligatoire"}],
x:"La mise en demeure (art. 1344 du Code civil) est une injonction formelle adressée au débiteur de remplir son obligation. Elle peut être faite par acte d'huissier ou lettre recommandée avec AR. Elle fait courir les intérêts moratoires et est souvent une étape préalable obligatoire avant toute action en justice."},

{id:5023,prog:'LEGER',theme:'Droit civil & commercial',d:3,
e:"Le contrat de commission est différent du mandat en ce que :",
r:[{t:"Le commissionnaire agit en son nom propre pour le compte du commettant",ok:true},{t:"Le mandataire agit en son nom propre"},{t:"Le commissionnaire n'a aucune responsabilité"},{t:"Le mandat est toujours rémunéré"}],
x:"Dans le contrat de commission (art. L.132-1 du Code de commerce), le commissionnaire agit EN SON NOM PROPRE mais POUR LE COMPTE du commettant. Dans le mandat, le mandataire agit AU NOM ET POUR LE COMPTE du mandant. Cette distinction a des conséquences importantes sur la responsabilité."},

{id:5024,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"La clause pénale dans un contrat :",
r:[{t:"Est toujours exécutoire sans contrôle du juge"},{t:"Fixe forfaitairement le montant des dommages et intérêts en cas d'inexécution",ok:true},{t:"Interdit tout recours judiciaire"},{t:"N'est valable que dans les contrats commerciaux"}],
x:"La clause pénale (art. 1231-5 du Code civil) fixe à l'avance le montant de l'indemnité due en cas d'inexécution ou de retard. Le juge peut la modérer ou l'augmenter si elle est manifestement excessive ou dérisoire — il dispose d'un pouvoir modérateur."},

{id:5025,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"Un entrepreneur individuel (hors EIRL) est responsable de ses dettes professionnelles sur :",
r:[{t:"Uniquement son patrimoine professionnel"},{t:"L'ensemble de son patrimoine personnel et professionnel",ok:true},{t:"Uniquement les biens acquis après la création de l'entreprise"},{t:"Jamais — il bénéficie d'une protection automatique"}],
x:"L'entrepreneur individuel classique engage la totalité de son patrimoine (personnel et professionnel) pour ses dettes professionnelles. Toutefois, la résidence principale est insaisissable de plein droit depuis 2015, et depuis 2022, le statut d'EI crée une séparation automatique du patrimoine."},

{id:5026,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"La garantie des vices cachés protège l'acheteur contre :",
r:[{t:"Tout défaut visible au moment de la vente"},{t:"Les défauts non apparents rendant la chose impropre à son usage ou diminuant fortement cet usage",ok:true},{t:"L'usure normale du bien"},{t:"Les défauts survenus après la vente"}],
x:"La garantie des vices cachés (art. 1641 du Code civil) oblige le vendeur à garantir l'acheteur contre les défauts cachés existant au moment de la vente, qui rendent la chose impropre à l'usage auquel on la destine ou qui diminuent tellement cet usage que l'acheteur n'aurait pas acquis ou aurait payé moins cher."},

{id:5027,prog:'LEGER',theme:'Droit civil & commercial',d:3,
e:"La cession de créance professionnelle (Loi Dailly) permet à une entreprise de :",
r:[{t:"Racheter les dettes d'un concurrent"},{t:"Céder ses créances professionnelles à sa banque pour obtenir un financement",ok:true},{t:"Transférer ses contrats de transport à un tiers"},{t:"Réduire son capital social"}],
x:"La cession Dailly (loi du 2 janvier 1981) permet à une entreprise de céder en bloc ses créances professionnelles à une banque (bordereau Dailly). En contrepartie, la banque avance les fonds. C'est un mode de financement à court terme qui améliore la trésorerie."},

{id:5028,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"En cas de faillite d'un client, le transporteur titulaire d'un privilège du transporteur peut :",
r:[{t:"Réclamer le paiement prioritaire sur la valeur des marchandises transportées",ok:true},{t:"Récupérer les marchandises à tout moment"},{t:"Annuler automatiquement toutes ses factures"},{t:"Poursuivre les dirigeants personnellement"}],
x:"Le transporteur bénéficie d'un privilège spécial sur les marchandises transportées (art. L.133-7 du Code de commerce) pour le paiement de sa créance. Ce privilège lui permet d'être payé prioritairement sur le prix des marchandises en cas de défaillance du client."},

{id:5029,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"La période de soldes légaux en France dure :",
r:[{t:"2 semaines"},{t:"4 semaines",ok:true},{t:"6 semaines"},{t:"8 semaines"}],
x:"Les soldes légaux en France durent 4 semaines par période (2 périodes par an : hiver et été). Cette durée a été réduite de 6 à 4 semaines par la loi PACTE de 2019. Les dates sont fixées par arrêté préfectoral."},

{id:5030,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"Le droit de rétention du transporteur lui permet de :",
r:[{t:"Détruire les marchandises si le fret n'est pas payé"},{t:"Conserver les marchandises jusqu'au paiement du prix de transport",ok:true},{t:"Revendre librement les marchandises sans délai"},{t:"Refuser tout transport futur du même client"}],
x:"Le droit de rétention (art. L.132-2 du Code de commerce) permet au transporteur de retenir les marchandises jusqu'au paiement de sa créance (fret, frais annexes). C'est une sûreté sur les marchandises qu'il détient légitimement."},

// ══════════════════════════════════════
// DROIT SOCIAL — 60 questions
// ══════════════════════════════════════
{id:5101,prog:'LEGER',theme:'Droit social',d:1,
e:"La durée légale du travail en France est de 35 heures par semaine. Comment se calcule-t-elle mensuellement ?",
r:[{t:"140 heures/mois"},{t:"151,67 heures/mois",ok:true},{t:"160 heures/mois"},{t:"175 heures/mois"}],
x:"La durée mensuelle de travail correspondant à 35 heures hebdomadaires est de 151,67 heures (35 × 52 semaines / 12 mois). C'est la base de calcul du salaire horaire à partir du salaire mensuel brut."},

{id:5102,prog:'LEGER',theme:'Droit social',d:2,
e:"Le travail de nuit est défini comme tout travail effectué entre :",
r:[{t:"20h et 6h"},{t:"21h et 6h",ok:true},{t:"22h et 5h"},{t:"23h et 5h"}],
x:"Est considéré comme travail de nuit tout travail effectué entre 21h et 6h (ou entre 22h et 5h selon la convention collective applicable). Le travailleur de nuit bénéficie de contreparties obligatoires (repos compensateur ou majoration salariale)."},

{id:5103,prog:'LEGER',theme:'Droit social',d:1,
e:"Le solde de tout compte remis au salarié lors de la rupture du contrat doit être signé :",
r:[{t:"Dans les 8 jours suivant la rupture"},{t:"Dans les 30 jours suivant la rupture"},{t:"Il n'y a pas de délai légal",ok:true},{t:"Avant le dernier jour de travail"}],
x:"Il n'y a pas de délai légal imposé pour la remise du solde de tout compte. Il doit cependant être remis lors de la rupture définitive du contrat (dernier jour ou peu après). Le salarié dispose de 6 mois pour le contester après signature."},

{id:5104,prog:'LEGER',theme:'Droit social',d:2,
e:"Le congé maternité pour un premier ou deuxième enfant est de :",
r:[{t:"14 semaines (6 avant + 8 après)"},{t:"16 semaines (6 avant + 10 après)",ok:true},{t:"26 semaines (8 avant + 18 après)"},{t:"8 semaines uniquement après la naissance"}],
x:"Pour un premier ou deuxième enfant, le congé maternité est de 16 semaines au total : 6 semaines avant et 10 semaines après l'accouchement. Pour un 3ème enfant et au-delà, il est de 26 semaines. Ces durées sont indemnisées par la CPAM sous conditions."},

{id:5105,prog:'LEGER',theme:'Droit social',d:2,
e:"La visite médicale d'embauche doit avoir lieu :",
r:[{t:"Avant la prise de poste pour tout salarié"},{t:"Dans les 3 mois suivant la prise de poste (visite d'information et de prévention)",ok:true},{t:"Dans les 6 mois suivant la prise de poste"},{t:"Uniquement pour les postes à risque"}],
x:"Depuis la réforme de 2017, la VIP (Visite d'Information et de Prévention) remplace la visite médicale d'embauche obligatoire. Elle doit avoir lieu dans les 3 mois suivant la prise de poste. Pour les postes à risque, la surveillance médicale renforcée s'applique avant l'embauche."},

{id:5106,prog:'LEGER',theme:'Droit social',d:1,
e:"Le taux de majoration légal pour les heures supplémentaires au-delà de la 43ème heure est de :",
r:[{t:"10 %"},{t:"25 %"},{t:"50 %",ok:true},{t:"75 %"}],
x:"Les 8 premières heures supplémentaires (36ème à 43ème heure) sont majorées à 25 %. Les heures suivantes (44ème heure et au-delà) sont majorées à 50 %. Un accord d'entreprise ou de branche peut prévoir des taux différents, avec un minimum de 10 %."},

{id:5107,prog:'LEGER',theme:'Droit social',d:2,
e:"Le forfait annuel en jours permet de :",
r:[{t:"Travailler sans limite de durée"},{t:"Rémunérer certains cadres sur la base d'un nombre de jours travaillés par an (max 218 jours)",ok:true},{t:"Supprimer les congés payés"},{t:"Travailler 7 jours sur 7 sans repos"}],
x:"Le forfait annuel en jours (art. L.3121-53 du Code du travail) est réservé aux cadres et salariés autonomes. Il fixe un nombre maximum de jours travaillés par an (218 jours par défaut). Les durées quotidienne et hebdomadaire ne s'appliquent pas, mais le droit au repos quotidien (11h) et hebdomadaire (35h) reste obligatoire."},

{id:5108,prog:'LEGER',theme:'Droit social',d:1,
e:"Le compte épargne-temps (CET) permet au salarié de :",
r:[{t:"Épargner uniquement de l'argent"},{t:"Accumuler des droits à congés ou à rémunération différée",ok:true},{t:"Bénéficier de réductions d'impôts"},{t:"Créer son entreprise en gardant ses droits"}],
x:"Le CET (art. L.3151-1 du Code du travail) permet au salarié d'accumuler des droits à congés rémunérés ou à épargne salariale, en y affectant des jours de repos, des heures supplémentaires ou des éléments de rémunération. Son alimentation et utilisation sont définies par accord collectif."},

{id:5109,prog:'LEGER',theme:'Droit social',d:2,
e:"Le Plan d'Épargne Entreprise (PEE) permet aux salariés de :",
r:[{t:"Recevoir des primes défiscalisées sans condition"},{t:"Constituer une épargne collective avec abondement possible de l'employeur",ok:true},{t:"Racheter les parts de l'entreprise à tout moment"},{t:"Bénéficier d'une retraite complémentaire garantie"}],
x:"Le PEE est un système d'épargne collectif permettant aux salariés de se constituer un portefeuille de valeurs mobilières. L'employeur peut compléter les versements par un abondement exonéré de charges sociales dans certaines limites. Les fonds sont bloqués 5 ans (sauf cas de déblocage anticipé)."},

{id:5110,prog:'LEGER',theme:'Droit social',d:3,
e:"La participation aux bénéfices est obligatoire dans les entreprises de :",
r:[{t:"Plus de 10 salariés"},{t:"Plus de 50 salariés",ok:true},{t:"Plus de 100 salariés"},{t:"Toutes les entreprises commerciales"}],
x:"La participation aux résultats (ou participation aux bénéfices) est obligatoire dans les entreprises employant habituellement au moins 50 salariés pendant 12 mois consécutifs ou non au cours des 3 derniers exercices, et ayant réalisé un bénéfice fiscal suffisant. La formule légale de calcul est fixée par le Code du travail."},

{id:5111,prog:'LEGER',theme:'Droit social',d:2,
e:"Le délai de prévenance pour le licenciement économique d'un salarié ayant plus de 2 ans d'ancienneté est de :",
r:[{t:"1 mois"},{t:"2 mois",ok:true},{t:"3 mois"},{t:"Il n'y a pas de délai légal"}],
x:"Le préavis en cas de licenciement économique est de : 1 mois pour les salariés ayant entre 6 mois et 2 ans d'ancienneté, 2 mois pour les salariés ayant au moins 2 ans d'ancienneté. La convention collective peut prévoir des durées plus longues."},

{id:5112,prog:'LEGER',theme:'Droit social',d:1,
e:"La mutuelle d'entreprise (complémentaire santé) est obligatoire depuis :",
r:[{t:"2012"},{t:"2016",ok:true},{t:"2014"},{t:"2018"}],
x:"La généralisation de la complémentaire santé d'entreprise est entrée en vigueur le 1er janvier 2016 pour toutes les entreprises du secteur privé, quelle que soit leur taille. L'employeur doit prendre en charge au moins 50 % de la cotisation."},

{id:5113,prog:'LEGER',theme:'Droit social',d:2,
e:"Le statut de VRP (Voyageur Représentant Placier) se caractérise par :",
r:[{t:"Un contrat de prestation de services uniquement"},{t:"Un contrat de travail salarié avec des règles spécifiques à la représentation commerciale",ok:true},{t:"Un statut d'indépendant avec protection sociale"},{t:"Un contrat à durée déterminée uniquement"}],
x:"Le VRP est un salarié qui prospecte une clientèle pour le compte d'un ou plusieurs employeurs. Son statut est régi par les articles L.7311-1 et suivants du Code du travail, avec des règles spécifiques : clause de non-concurrence, indemnité de clientèle, commission sur chiffre d'affaires."},

{id:5114,prog:'LEGER',theme:'Droit social',d:1,
e:"La durée totale du congé de paternité et d'accueil de l'enfant (congé naissance inclus) est de :",
r:[{t:"3 jours"},{t:"11 jours"},{t:"25 jours"},{t:"28 jours calendaires",ok:true}],
x:"Depuis le 1er juillet 2021, le congé total est de 28 jours : 3 jours de congé de naissance (payés par l'employeur) + 25 jours de congé paternité (indemnisés par la CPAM). Les 4 premiers jours du congé paternité sont obligatoires immédiatement après la naissance. En cas de naissance multiple : 32 jours au total."},

{id:5115,prog:'LEGER',theme:'Droit social',d:2,
e:"La clause de mobilité dans un contrat de travail permet à l'employeur de :",
r:[{t:"Muter le salarié dans n'importe quel pays"},{t:"Imposer un changement de lieu de travail dans une zone géographique définie",ok:true},{t:"Modifier unilatéralement le salaire"},{t:"Changer le poste du salarié sans son accord"}],
x:"La clause de mobilité (validée par la Cour de cassation) permet à l'employeur de muter le salarié dans un autre lieu de travail situé dans la zone géographique définie par la clause, sans que cela constitue une modification du contrat de travail. Elle doit être limitée dans son champ géographique et mise en œuvre de bonne foi."},

{id:5116,prog:'LEGER',theme:'Droit social',d:3,
e:"Le plafond de la Sécurité Sociale (PASS) sert à :",
r:[{t:"Définir le salaire maximum des dirigeants"},{t:"Calculer certaines cotisations sociales et le montant des prestations sociales",ok:true},{t:"Fixer le SMIC annuel"},{t:"Déterminer le seuil d'assujettissement à l'IS"}],
x:"Le PASS (Plafond Annuel de la Sécurité Sociale) est fixé à 48 060 € en 2026 (PMSS : 4 005 €/mois), soit une hausse de 2 % vs 2025. Il sert à calculer les cotisations plafonnées (retraite de base, chômage…) et certaines prestations (indemnités journalières, retraite…). Il est revalorisé chaque 1er janvier par arrêté ministériel."},

{id:5117,prog:'LEGER',theme:'Droit social',d:2,
e:"En cas d'accident du travail, la déclaration doit être faite par l'employeur à la CPAM dans un délai de :",
r:[{t:"24 heures"},{t:"48 heures"},{t:"48 heures (jours ouvrables)",ok:true},{t:"8 jours"}],
x:"L'employeur doit déclarer tout accident du travail à la CPAM dans les 48 heures (non compris les dimanches et jours fériés) suivant l'accident, par l'envoi d'une déclaration d'accident du travail (formulaire CERFA). Une feuille d'accident doit également être remise au salarié."},

{id:5118,prog:'LEGER',theme:'Droit social',d:1,
e:"La CSG (Contribution Sociale Généralisée) est prélevée sur :",
r:[{t:"Uniquement les salaires"},{t:"Les revenus d'activité, de remplacement et du patrimoine",ok:true},{t:"Uniquement les revenus du patrimoine"},{t:"Uniquement les revenus des non-salariés"}],
x:"La CSG est une contribution fiscale prélevée sur l'ensemble des revenus : salaires (taux 9,2 % dont 6,8 % déductible), revenus de remplacement (chômage, retraite), revenus du patrimoine et revenus du capital. C'est la principale recette de la Sécurité Sociale."},

{id:5119,prog:'LEGER',theme:'Droit social',d:2,
e:"Le registre unique du personnel doit être conservé par l'employeur pendant :",
r:[{t:"5 ans après le départ du salarié",ok:true},{t:"10 ans"},{t:"3 ans"},{t:"Indéfiniment"}],
x:"Le registre unique du personnel doit être tenu dans chaque établissement (art. L.1221-13 du Code du travail). Il doit être conservé pendant 5 ans après la date à laquelle le dernier salarié inscrit a quitté l'établissement. Les bulletins de paie, eux, doivent être conservés sans limite de durée depuis 2017."},

{id:5120,prog:'LEGER',theme:'Droit social',d:3,
e:"La garantie AGS (Association pour la Gestion des créances des Salariés) intervient :",
r:[{t:"En cas de grève des salariés"},{t:"En cas de procédure collective (redressement ou liquidation judiciaire) pour payer les salaires impayés",ok:true},{t:"En cas d'accident du travail grave"},{t:"En cas de faillite personnelle du dirigeant uniquement"}],
x:"L'AGS est un régime de garantie des salaires financé par les employeurs (cotisation patronale). Elle garantit le paiement des salaires, congés payés et indemnités de rupture lorsqu'une entreprise fait l'objet d'une procédure de sauvegarde, redressement ou liquidation judiciaire."},

{id:5121,prog:'LEGER',theme:'Droit social',d:1,
e:"La portabilité de la mutuelle permet au salarié qui perd son emploi de :",
r:[{t:"Conserver sa mutuelle d'entreprise gratuitement pendant 12 mois maximum",ok:true},{t:"Changer de mutuelle sans frais"},{t:"Bénéficier d'une mutuelle de l'État"},{t:"Maintenir sa couverture uniquement pendant son préavis"}],
x:"La portabilité (art. L.911-8 du Code de la sécurité sociale) permet aux anciens salariés dont le contrat a été rompu (sauf faute lourde) de maintenir les garanties santé et prévoyance de leur ancienne entreprise pendant la durée du chômage, dans la limite de 12 mois. La couverture est gratuite pour l'ancien salarié."},

{id:5122,prog:'LEGER',theme:'Droit social',d:2,
e:"Le CDD de remplacement doit obligatoirement mentionner :",
r:[{t:"Uniquement la durée du remplacement"},{t:"Le nom et la qualification de la personne remplacée",ok:true},{t:"Le motif du remplacement uniquement"},{t:"La durée prévisible d'absence de la personne remplacée"}],
x:"Le CDD de remplacement doit obligatoirement mentionner le nom et la qualification professionnelle de la personne remplacée (art. L.1242-12 du Code du travail). À défaut, le contrat peut être requalifié en CDI par les tribunaux."},

{id:5123,prog:'LEGER',theme:'Droit social',d:3,
e:"Le travail à temps partiel impose :",
r:[{t:"Un accord écrit entre employeur et salarié",ok:true},{t:"L'accord de l'inspection du travail"},{t:"Un avenant à la convention collective"},{t:"Uniquement une information des représentants du personnel"}],
x:"Le travail à temps partiel doit être formalisé par un contrat écrit (ou avenant) mentionnant la durée hebdomadaire ou mensuelle, la répartition des heures, les modalités de modification, la rémunération. La durée minimale légale est de 24 heures hebdomadaires, sauf exceptions."},

{id:5124,prog:'LEGER',theme:'Droit social',d:1,
e:"Le taux de prélèvement à la source de l'impôt sur le revenu est calculé par :",
r:[{t:"Le salarié lui-même"},{t:"L'administration fiscale (DGFiP) sur la base de la déclaration précédente",ok:true},{t:"L'employeur en fonction du salaire brut"},{t:"L'URSSAF"}],
x:"Le taux du prélèvement à la source est calculé et communiqué par la DGFiP à l'employeur. Il est basé sur la déclaration de revenus de l'année précédente. Le salarié peut opter pour un taux neutre (sur barème) ou pour un taux individualisé au sein du foyer fiscal."},

{id:5125,prog:'LEGER',theme:'Droit social',d:2,
e:"L'inaptitude médicale déclarée par le médecin du travail oblige l'employeur à :",
r:[{t:"Licencier immédiatement le salarié"},{t:"Rechercher un poste de reclassement ou, à défaut, licencier pour inaptitude",ok:true},{t:"Accorder un congé maladie indéfini"},{t:"Proposer une rupture conventionnelle obligatoire"}],
x:"En cas d'inaptitude déclarée par le médecin du travail, l'employeur doit rechercher un reclassement du salarié dans un emploi compatible avec ses restrictions. Si le reclassement est impossible ou refusé, l'employeur peut licencier pour inaptitude. Le salarié reçoit alors une indemnité spéciale de licenciement."},

// ══════════════════════════════════════
// DROIT FISCAL — 60 questions
// ══════════════════════════════════════
{id:5201,prog:'LEGER',theme:'Droit fiscal',d:1,
e:"La déclaration de revenus pour un auto-entrepreneur (micro-entreprise) est effectuée :",
r:[{t:"Mensuellement ou trimestriellement selon le choix",ok:true},{t:"Uniquement annuellement"},{t:"Uniquement trimestriellement"},{t:"Semestriellement"}],
x:"L'auto-entrepreneur peut choisir entre une déclaration mensuelle ou trimestrielle de son chiffre d'affaires. Le versement libératoire de l'impôt sur le revenu et les cotisations sociales sont calculés automatiquement sur le CA déclaré."},

{id:5202,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"Le régime de la franchise en base de TVA signifie que :",
r:[{t:"La TVA est remboursée immédiatement"},{t:"L'entreprise ne facture pas de TVA à ses clients et ne la récupère pas",ok:true},{t:"La TVA est réduite à 5,5 %"},{t:"L'entreprise est exonérée d'impôt sur les bénéfices"}],
x:"La franchise en base de TVA (art. 293 B du CGI) exonère les petites entreprises dont le CA est sous les seuils — depuis le 1er janvier 2026 : 37 500 € pour les services, 85 000 € pour les ventes de marchandises. En contrepartie, elles ne peuvent pas récupérer la TVA sur leurs achats."},

{id:5203,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"L'impôt sur les sociétés (IS) est calculé sur :",
r:[{t:"Le chiffre d'affaires hors taxes"},{t:"Le bénéfice fiscal (résultat comptable corrigé des réintégrations et déductions)",ok:true},{t:"Le capital social de la société"},{t:"La valeur ajoutée produite"}],
x:"L'IS est calculé sur le bénéfice fiscal (résultat imposable), qui s'obtient à partir du résultat comptable corrigé : réintégrations (charges non déductibles) et déductions fiscales (amortissements dérogatoires, provisions…). Le taux normal est de 25 % depuis 2022."},

{id:5204,prog:'LEGER',theme:'Droit fiscal',d:1,
e:"Le taux normal de l'IS (Impôt sur les Sociétés) en France depuis 2022 est de :",
r:[{t:"28 %"},{t:"33,33 %"},{t:"25 %",ok:true},{t:"20 %"}],
x:"Le taux normal de l'IS est de 25 % depuis le 1er janvier 2022 (après une baisse progressive depuis 33,33 % en 2017). Les PME bénéficient d'un taux réduit de 15 % sur les 42 500 premiers euros de bénéfice si leur CA est inférieur à 10 M€ et que leur capital est entièrement libéré et détenu à 75 % par des personnes physiques."},

{id:5205,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"La taxe sur les véhicules de sociétés (TVS) s'applique :",
r:[{t:"À tous les véhicules professionnels"},{t:"Aux véhicules de tourisme utilisés par les sociétés",ok:true},{t:"Uniquement aux véhicules de plus de 3,5 tonnes"},{t:"Aux VUL uniquement"}],
x:"La TVS (remplacée par une nouvelle taxe sur les émissions en 2022) s'applique aux véhicules de tourisme (catégorie M1) utilisés ou possédés par les sociétés. Les VUL et véhicules utilitaires professionnels ne sont pas concernés. Le montant dépend des émissions de CO2."},

{id:5206,prog:'LEGER',theme:'Droit fiscal',d:3,
e:"Le crédit d'impôt formation dirigeant permet :",
r:[{t:"De déduire 100 % des frais de formation"},{t:"Un crédit d'impôt égal au nombre d'heures de formation × taux horaire du SMIC",ok:true},{t:"Une réduction forfaitaire de 5 000 € par an"},{t:"D'exonérer les salariés formés d'impôt sur le revenu"}],
x:"Le crédit d'impôt pour la formation des dirigeants (art. 244 quater M du CGI) est calculé en multipliant le nombre d'heures de formation du chef d'entreprise par le taux horaire du SMIC. Il est plafonné à 40 heures par an et bénéficie aux TPE (micro-entreprises éligibles à double, depuis 2022)."},

{id:5207,prog:'LEGER',theme:'Droit fiscal',d:1,
e:"Le taux réduit de TVA applicable aux médicaments remboursés est de :",
r:[{t:"0 %"},{t:"2,1 %",ok:true},{t:"5,5 %"},{t:"10 %"}],
x:"En France, le taux super réduit de 2,1 % s'applique notamment aux médicaments remboursables par la Sécurité Sociale et aux journaux quotidiens. C'est le taux le plus bas prévu par la législation française."},

{id:5208,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"L'amortissement dégressif d'un véhicule utilitaire est :",
r:[{t:"Possible pour tout véhicule professionnel"},{t:"Possible uniquement pour certains biens avec un coefficient multiplicateur selon la durée de vie",ok:true},{t:"Interdit pour les véhicules de transport"},{t:"Identique à l'amortissement linéaire"}],
x:"L'amortissement dégressif est possible pour les biens d'équipement amortissables sur au moins 3 ans. Le taux est obtenu en multipliant le taux linéaire par un coefficient (1,25 pour 3-4 ans, 1,75 pour 5-6 ans, 2,25 pour plus de 6 ans). Il permet des charges plus élevées les premières années."},

{id:5209,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"La CVAE (Cotisation sur la Valeur Ajoutée des Entreprises) est due par :",
r:[{t:"Toutes les entreprises"},{t:"Les entreprises dont le CA dépasse 500 000 €",ok:true},{t:"Les entreprises dont le CA dépasse 2 millions €"},{t:"Les entreprises employant plus de 50 salariés"}],
x:"La CVAE est due par les entreprises dont le CA HT excède 500 000 € (et assujetties à la CFE). Son taux est progressif selon le CA. Elle est en cours de suppression progressive (2024-2027). Elle fait partie de la CET avec la CFE."},

{id:5210,prog:'LEGER',theme:'Droit fiscal',d:3,
e:"Le déficit fiscal d'une entreprise à l'IS peut être :",
r:[{t:"Reporté en avant sur les exercices bénéficiaires suivants (illimité)",ok:true},{t:"Remboursé par l'État immédiatement"},{t:"Reporté uniquement sur les 3 exercices précédents"},{t:"Perdu définitivement à la clôture de l'exercice"}],
x:"Le déficit fiscal à l'IS est reportable en avant (sur les exercices bénéficiaires suivants) sans limitation de durée, mais plafonné à 1 M€ + 50 % du bénéfice imposable excédant ce seuil (art. 209 I du CGI). Il peut aussi être reporté en arrière (carry-back) sur l'exercice précédent, dans la limite de 1 M€."},

{id:5211,prog:'LEGER',theme:'Droit fiscal',d:1,
e:"La TVA sur les frais de repas d'affaires est récupérable à :",
r:[{t:"0 % — non récupérable"},{t:"100 %"},{t:"80 %"},{t:"Elle est déductible à 80 % mais la TVA sur repas n'est pas récupérable",ok:true}],
x:"Les repas d'affaires (restaurants, traiteurs) ouvrent droit à récupération de la TVA si la dépense est professionnelle et justifiée. En pratique, la TVA sur les repas au restaurant est récupérable à 100 % si la dépense est strictement professionnelle et documentée (justificatif nominatif)."},

{id:5212,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"Le régime simplifié d'imposition (RSI) de TVA :",
r:[{t:"Dispense du paiement de la TVA"},{t:"Permet de payer des acomptes semestriels et de faire une déclaration annuelle",ok:true},{t:"S'applique automatiquement à toutes les entreprises"},{t:"Réduit le taux de TVA à 10 %"}],
x:"Le régime simplifié de TVA permet aux entreprises dont le CA est compris entre les seuils de franchise et 254 000 € (services) / 840 000 € (ventes) de payer des acomptes semestriels (juillet et décembre) et de déposer une seule déclaration annuelle CA12."},

{id:5213,prog:'LEGER',theme:'Droit fiscal',d:3,
e:"Les frais kilométriques d'un véhicule personnel utilisé à titre professionnel sont déductibles sur la base de :",
r:[{t:"100 % des frais réels"},{t:"Le barème kilométrique de l'administration fiscale",ok:true},{t:"50 % des frais réels"},{t:"Un forfait de 0,50 € par km quel que soit le véhicule"}],
x:"Les frais kilométriques pour l'utilisation d'un véhicule personnel à des fins professionnelles sont déductibles en utilisant le barème kilométrique publié annuellement par l'administration fiscale. Ce barème tient compte de la puissance fiscale du véhicule et du kilométrage parcouru."},

{id:5214,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"La taxe à l'essieu (TSRV) s'applique aux :",
r:[{t:"Tous les véhicules de transport"},{t:"Véhicules de transport de marchandises de plus de 12 tonnes",ok:true},{t:"VUL de plus de 3,5 tonnes"},{t:"Véhicules particuliers utilisés à titre professionnel"}],
x:"La taxe spéciale sur certains véhicules routiers (TSRV ou taxe à l'essieu) est due par les véhicules ou ensembles de véhicules dont le PTAC ou le PTRA dépasse 12 tonnes et qui transportent des marchandises. Elle est payée annuellement par le propriétaire du véhicule."},

{id:5215,prog:'LEGER',theme:'Droit fiscal',d:1,
e:"La contribution économique territoriale (CET) remplace depuis 2010 :",
r:[{t:"La TVA locale"},{t:"La taxe professionnelle",ok:true},{t:"L'impôt sur les sociétés local"},{t:"La taxe d'habitation pour les entreprises"}],
x:"La CET remplace la taxe professionnelle depuis le 1er janvier 2010. Elle se compose de la CFE (Cotisation Foncière des Entreprises) basée sur les valeurs locatives, et de la CVAE (Cotisation sur la Valeur Ajoutée des Entreprises) pour les plus grandes entreprises."},

{id:5216,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"Le droit à déduction de la TVA est ouvert dès :",
r:[{t:"Le paiement de la facture"},{t:"L'exigibilité de la TVA chez le fournisseur (souvent la livraison ou la facturation)",ok:true},{t:"La réception des marchandises uniquement"},{t:"La revente des marchandises"}],
x:"Le droit à déduction de la TVA prend naissance à la date à laquelle la taxe devient exigible chez le fournisseur. Pour les livraisons de biens : à la livraison. Pour les prestations de services : à l'encaissement (sauf option pour les débits). La facture est obligatoire pour exercer ce droit."},

{id:5217,prog:'LEGER',theme:'Droit fiscal',d:3,
e:"Le plafond de déduction des charges de véhicule de tourisme (amortissement) est limité à :",
r:[{t:"18 300 € ou 9 900 € selon les émissions CO2",ok:true},{t:"30 000 € pour tous les véhicules"},{t:"50 000 € pour les véhicules électriques"},{t:"Il n'y a pas de plafond de déduction"}],
x:"L'amortissement des véhicules de tourisme est plafonné fiscalement : 18 300 € pour les véhicules émettant entre 20 et 50 g CO2/km, 9 900 € pour les véhicules émettant plus de 165 g CO2/km (seuils 2021+). Les véhicules 100 % électriques bénéficient d'un plafond de 30 000 €."},

{id:5218,prog:'LEGER',theme:'Droit fiscal',d:1,
e:"La TVA intracommunautaire sur les achats dans un autre pays de l'UE :",
r:[{t:"Est perçue par le pays vendeur"},{t:"Est auto-liquidée par l'acheteur dans son pays",ok:true},{t:"N'est jamais due en Europe"},{t:"Est remboursée automatiquement à l'acheteur"}],
x:"Pour les achats entre professionnels assujettis à la TVA au sein de l'UE (acquisitions intracommunautaires), la TVA est auto-liquidée : c'est l'acheteur qui déclare et acquitte la TVA dans son propre pays, selon le taux en vigueur dans son pays. Le vendeur facture HT avec son numéro de TVA intracommunautaire."},

{id:5219,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"Les véhicules utilitaires légers (<3,5t) professionnels bénéficient de la récupération de TVA sur le carburant à :",
r:[{t:"100 % pour le gazole"},{t:"80 % pour le gazole et 0 % pour l'essence",ok:true},{t:"50 % pour tous les carburants"},{t:"0 % — aucune récupération possible"}],
x:"Pour les VUL à usage professionnel exclusif : TVA sur gazole récupérable à 80 % (en voie d'augmentation progressive jusqu'à 100 %), TVA sur l'essence non récupérable (0 %). Pour les véhicules électriques : TVA sur l'électricité récupérable à 100 %."},

{id:5220,prog:'LEGER',theme:'Droit fiscal',d:3,
e:"Le prélèvement forfaitaire unique (PFU ou 'flat tax') de 30 % s'applique aux :",
r:[{t:"Salaires et revenus d'activité"},{t:"Revenus du capital (dividendes, intérêts, plus-values mobilières)",ok:true},{t:"Revenus fonciers uniquement"},{t:"Bénéfices industriels et commerciaux"}],
x:"Le PFU (ou flat tax) de 30 % comprend 12,8 % d'impôt sur le revenu + 17,2 % de prélèvements sociaux. Il s'applique aux revenus du capital : dividendes, intérêts, plus-values de cession de valeurs mobilières. Le contribuable peut opter pour le barème progressif si cela est plus favorable."},

// ══════════════════════════════════════
// GESTION FINANCIÈRE TPE — 70 questions
// ══════════════════════════════════════
{id:5301,prog:'LEGER',theme:'Gestion financière',d:1,
e:"Le chiffre d'affaires est :",
r:[{t:"Le bénéfice net de l'entreprise"},{t:"La somme des ventes de biens et services réalisées hors taxes",ok:true},{t:"Le total des achats effectués"},{t:"La différence entre les produits et les charges"}],
x:"Le CA correspond au montant total des ventes réalisées par l'entreprise hors TVA. C'est le premier indicateur de l'activité d'une entreprise. Il ne préjuge pas de la rentabilité (une entreprise peut avoir un CA élevé mais être déficitaire si ses charges dépassent ses recettes)."},

{id:5302,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Le taux de marge brute se calcule ainsi :",
r:[{t:"(Prix de vente HT - Prix d'achat HT) / Prix de vente HT × 100",ok:true},{t:"Résultat net / CA × 100"},{t:"(CA - Charges fixes) / CA × 100"},{t:"Bénéfice / Charges variables × 100"}],
x:"Le taux de marge brute = [(PV HT - PA HT) / PV HT] × 100. Il mesure la part du prix de vente qui reste après déduction du coût d'achat des marchandises. Ne pas confondre avec le taux de marque (calculé sur le prix de vente) et le taux de markup (calculé sur le prix d'achat)."},

{id:5303,prog:'LEGER',theme:'Gestion financière',d:1,
e:"Qu'est-ce que la capacité d'autofinancement (CAF) ?",
r:[{t:"Le montant des emprunts disponibles"},{t:"La richesse générée par l'activité disponible pour investir ou rembourser des dettes",ok:true},{t:"Le montant des dividendes versés"},{t:"La trésorerie disponible en banque"}],
x:"La CAF représente l'ensemble des ressources internes générées par l'exploitation de l'entreprise. Elle se calcule ainsi : Résultat net + Dotations aux amortissements et provisions - Reprises. Elle sert à rembourser les emprunts, financer les investissements, distribuer des dividendes."},

{id:5304,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Un délai de rotation des stocks élevé signifie que :",
r:[{t:"L'entreprise écoule rapidement ses stocks"},{t:"Les stocks immobilisent longtemps la trésorerie avant d'être vendus",ok:true},{t:"L'entreprise a peu de stock"},{t:"La rotation est favorable à la trésorerie"}],
x:"Délai de rotation des stocks = (Stock moyen / Coût des ventes) × 360. Un délai élevé signifie que les marchandises restent longtemps en stock avant d'être vendues. Cela immobilise de la trésorerie et génère des frais de stockage. Un délai court est généralement plus favorable."},

{id:5305,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Le ratio de solvabilité générale mesure :",
r:[{t:"La capacité à rembourser les dettes à court terme"},{t:"La capacité à rembourser l'ensemble des dettes avec l'actif total",ok:true},{t:"Le niveau d'endettement à long terme"},{t:"La rentabilité de l'entreprise"}],
x:"Solvabilité générale = Total actif / Total dettes. Un ratio > 1 signifie que l'actif total dépasse les dettes : l'entreprise serait solvable même en cas de liquidation. Un ratio < 1 indique une situation d'insolvabilité (capitaux propres négatifs)."},

{id:5306,prog:'LEGER',theme:'Gestion financière',d:3,
e:"L'effet de levier financier est favorable lorsque :",
r:[{t:"Le taux de rentabilité économique est supérieur au coût de la dette",ok:true},{t:"L'entreprise n'a pas de dettes"},{t:"Le CA augmente chaque année"},{t:"Le taux d'intérêt est supérieur à la rentabilité économique"}],
x:"L'effet de levier est favorable quand le taux de rentabilité économique (ROA) est supérieur au taux d'intérêt de la dette : l'endettement améliore la rentabilité des capitaux propres (ROE). Il est défavorable (effet de massue) quand les intérêts dépassent la rentabilité économique."},

{id:5307,prog:'LEGER',theme:'Gestion financière',d:1,
e:"Le résultat exceptionnel dans le compte de résultat comprend :",
r:[{t:"Les opérations courantes de l'activité principale"},{t:"Les produits et charges non liés à l'exploitation normale (cessions d'actifs, sinistres…)",ok:true},{t:"Uniquement les pertes sur créances"},{t:"Les charges financières de l'emprunt"}],
x:"Le résultat exceptionnel regroupe les produits et charges non récurrents : cessions d'immobilisations (plus ou moins-values), indemnités d'assurance pour sinistre, subventions exceptionnelles, pénalités, rappels d'impôts. Il se distingue du résultat d'exploitation (activité normale) et du résultat financier."},

{id:5308,prog:'LEGER',theme:'Gestion financière',d:2,
e:"L'affacturage (factoring) consiste à :",
r:[{t:"Céder ses créances clients à un organisme spécialisé (factor) contre paiement immédiat",ok:true},{t:"Racheter les dettes d'un fournisseur"},{t:"Émettre des obligations sur le marché financier"},{t:"Négocier un découvert bancaire"}],
x:"L'affacturage permet à une entreprise de céder ses créances clients à un factor (société spécialisée). Le factor avance immédiatement les fonds (moins sa commission et des frais) et se charge du recouvrement. C'est une solution de financement à court terme qui améliore la trésorerie mais a un coût."},

{id:5309,prog:'LEGER',theme:'Gestion financière',d:1,
e:"Le bilan comptable présente :",
r:[{t:"Les recettes et dépenses de l'exercice"},{t:"La situation patrimoniale de l'entreprise à une date donnée (actif et passif)",ok:true},{t:"Uniquement les immobilisations de l'entreprise"},{t:"Le calcul du résultat fiscal"}],
x:"Le bilan est un document de synthèse comptable présentant, à une date précise (clôture de l'exercice), l'ensemble des ressources (passif) et des emplois (actif) de l'entreprise. C'est une photographie du patrimoine à un instant T, contrairement au compte de résultat qui couvre toute la période."},

{id:5310,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Les charges variables se caractérisent par :",
r:[{t:"Leur montant fixe indépendamment de l'activité"},{t:"Leur proportionnalité directe avec le volume d'activité (CA ou production)",ok:true},{t:"Leur nature fiscale"},{t:"Leur montant calculé en pourcentage du capital"}],
x:"Les charges variables évoluent proportionnellement avec le niveau d'activité : elles augmentent quand la production ou le CA augmente, et diminuent dans le cas contraire. Exemples : carburant (VUL), matières premières, commissions sur ventes. Les charges fixes restent stables quelle que soit l'activité."},

{id:5311,prog:'LEGER',theme:'Gestion financière',d:3,
e:"Le taux de rotation des capitaux propres (ROE) mesure :",
r:[{t:"Le rendement des actifs"},{t:"La rentabilité des capitaux investis par les actionnaires",ok:true},{t:"Le niveau d'endettement"},{t:"La solvabilité à court terme"}],
x:"ROE (Return On Equity) = Résultat net / Capitaux propres × 100. Il mesure la rentabilité des fonds propres investis par les actionnaires. C'est un indicateur clé pour les investisseurs. Un ROE de 15 % signifie que l'entreprise génère 15 € de bénéfice pour 100 € de capitaux propres investis."},

{id:5312,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Le point mort exprimé en nombre de jours correspond à :",
r:[{t:"Le nombre de jours avant que l'entreprise ne soit en faillite"},{t:"La date à laquelle le CA annuel atteint le seuil de rentabilité",ok:true},{t:"Le délai de récupération d'un investissement"},{t:"Le nombre de jours de stock moyen"}],
x:"Le point mort en jours = (SR / CA annuel) × 360. Il indique à quelle date dans l'année le CA cumulé atteint le seuil de rentabilité. Avant cette date, l'entreprise est en perte ; après, elle dégage un bénéfice. C'est un indicateur de risque : plus il est tardif dans l'année, plus l'entreprise est vulnérable."},

{id:5313,prog:'LEGER',theme:'Gestion financière',d:1,
e:"L'EBITDA est :",
r:[{t:"Le bénéfice net après impôts et intérêts"},{t:"Le résultat avant intérêts, impôts, dotations aux amortissements et provisions",ok:true},{t:"Le chiffre d'affaires hors taxes"},{t:"Le résultat d'exploitation après impôts"}],
x:"EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization) = Résultat net + IS + Intérêts financiers + Amortissements + Provisions. En français : EBE (Excédent Brut d'Exploitation). C'est le flux généré par l'exploitation avant les choix de financement et d'investissement."},

{id:5314,prog:'LEGER',theme:'Gestion financière',d:2,
e:"La couverture du besoin en fonds de roulement par le fonds de roulement net global signifie que :",
r:[{t:"L'entreprise est toujours bénéficiaire"},{t:"La trésorerie est positive",ok:true},{t:"L'entreprise n'a pas de dettes"},{t:"Le CA est suffisant"}],
x:"Trésorerie nette = FRNG - BFR. Si FRNG > BFR, la trésorerie est positive : l'entreprise dispose de liquidités disponibles. Si FRNG < BFR, la trésorerie est négative et l'entreprise dépend de financements à court terme (découvert, ligne de crédit)."},

{id:5315,prog:'LEGER',theme:'Gestion financière',d:3,
e:"Le tableau de flux de trésorerie (TFT) classe les flux en :",
r:[{t:"Charges et produits"},{t:"Flux opérationnels, d'investissement et de financement",ok:true},{t:"Actifs et passifs"},{t:"Flux entrants et sortants uniquement"}],
x:"Le TFT classe les mouvements de trésorerie en 3 catégories : flux d'exploitation (opérations courantes), flux d'investissement (acquisitions/cessions d'immobilisations), flux de financement (emprunts, remboursements, augmentations de capital, dividendes). C'est un outil essentiel pour analyser la génération de trésorerie."},

{id:5316,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Le délai de récupération d'un investissement (DRI ou payback) :",
r:[{t:"Mesure la rentabilité de l'investissement en %"},{t:"Indique le temps nécessaire pour récupérer le capital investi grâce aux flux de trésorerie générés",ok:true},{t:"Calcule la valeur future d'un investissement"},{t:"Determine la valeur de revente du bien"}],
x:"Le DRI = Capital investi / Flux de trésorerie annuel moyen généré. Un DRI de 3 ans signifie que l'investissement sera remboursé en 3 ans par les flux qu'il génère. C'est un critère simple de sélection : plus le DRI est court, plus l'investissement est rapidement rentabilisé."},

{id:5317,prog:'LEGER',theme:'Gestion financière',d:1,
e:"Le ratio d'autonomie financière mesure :",
r:[{t:"La dépendance envers les banques pour le financement"},{t:"La part des capitaux propres dans le total du bilan",ok:true},{t:"Le niveau de liquidité immédiate"},{t:"La rentabilité des capitaux investis"}],
x:"Autonomie financière = Capitaux propres / Total passif × 100. Il mesure l'indépendance financière de l'entreprise. Plus il est élevé, moins l'entreprise dépend des créanciers. Un ratio supérieur à 30-40 % est généralement considéré comme satisfaisant."},

{id:5318,prog:'LEGER',theme:'Gestion financière',d:2,
e:"La marge nette d'une entreprise de transport est de 8 %. Si le CA est de 200 000 €, quel est le bénéfice net ?",
r:[{t:"8 000 €"},{t:"16 000 €",ok:true},{t:"8 €"},{t:"80 000 €"}],
x:"Bénéfice net = CA × Taux de marge nette = 200 000 × 8 % = 16 000 €. La marge nette est le rapport entre le résultat net (bénéfice après toutes les charges et impôts) et le CA. Elle exprime la rentabilité finale de l'activité."},

{id:5319,prog:'LEGER',theme:'Gestion financière',d:3,
e:"La valeur actuelle nette (VAN) d'un investissement est positive lorsque :",
r:[{t:"Les flux de trésorerie futurs actualisés sont supérieurs au coût de l'investissement",ok:true},{t:"L'investissement est entièrement financé par emprunt"},{t:"Le délai de récupération est inférieur à 2 ans"},{t:"Le taux d'actualisation est nul"}],
x:"La VAN = Somme des flux de trésorerie futurs actualisés - Investissement initial. Une VAN positive signifie que l'investissement crée de la valeur (les gains actualisés dépassent le coût). Une VAN négative indique une destruction de valeur. C'est le principal critère de sélection des investissements."},

{id:5320,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Un escompte commercial de 2 % à 30 jours offert à un client signifie :",
r:[{t:"Une réduction de 2 % sur le prix de vente brut"},{t:"Une réduction de 2 % accordée si la facture est payée dans les 30 jours",ok:true},{t:"Une majoration de 2 % en cas de retard"},{t:"Une remise annuelle de 2 %"}],
x:"L'escompte commercial est une réduction financière accordée au client qui paie avant l'échéance normale. '2 % à 30 jours' signifie que si le client paie dans les 30 jours, il bénéficie d'une réduction de 2 % sur le montant HT de la facture. Le coût annualisé de ne pas prendre cet escompte peut être très élevé."},

// ══════════════════════════════════════
// ACCÈS À LA PROFESSION — 50 questions
// ══════════════════════════════════════
{id:5401,prog:'LEGER',theme:"Accès à la profession",d:1,
e:"Le registre national des entreprises de transport (RENT) est consultable :",
r:[{t:"Uniquement par les autorités de contrôle"},{t:"Par toute personne sur internet",ok:true},{t:"Uniquement par les autres transporteurs"},{t:"Uniquement par les clients des transporteurs"}],
x:"Le RENT (Registre électronique national des entreprises de transport) est consultable par toute personne sur internet, via le site du Ministère des Transports. Il recense tous les transporteurs routiers autorisés à exercer sur le territoire français."},

{id:5402,prog:'LEGER',theme:"Accès à la profession",d:2,
e:"L'honorabilité professionnelle est perdue définitivement en cas de :",
r:[{t:"Tout redressement fiscal"},{t:"Condamnation pour des infractions graves listées par la réglementation",ok:true},{t:"Simple retard de paiement d'une cotisation"},{t:"Tout déficit comptable"}],
x:"L'honorabilité professionnelle est perdue en cas de condamnation pénale pour des infractions graves spécifiées par le règlement (CE) 1071/2009 : crimes ou délits graves, infractions aux réglementations sociales et du transport, fraudes fiscales importantes. La perte d'honorabilité entraîne le retrait de l'autorisation d'exercer."},

{id:5403,prog:'LEGER',theme:"Accès à la profession",d:1,
e:"Le gestionnaire de transport peut gérer les opérations de transport d'une entreprise de transport léger :",
r:[{t:"Uniquement s'il est propriétaire de l'entreprise"},{t:"En tant que salarié ou dirigeant, avec un lien effectif et permanent avec l'entreprise",ok:true},{t:"Par procuration uniquement"},{t:"Uniquement s'il est présent physiquement chaque jour"}],
x:"Le gestionnaire de transport est la personne physique désignée par l'entreprise pour diriger effectivement et en permanence les activités de transport. Il doit avoir un lien réel et permanent avec l'entreprise (salarié, associé, ou dirigeant). Une même personne peut être gestionnaire pour au plus 4 entreprises représentant au total max 50 véhicules."},

{id:5404,prog:'LEGER',theme:"Accès à la profession",d:2,
e:"La capacité professionnelle peut être prouvée par :",
r:[{t:"Uniquement le diplôme de l'examen CPC"},{t:"L'examen CPC, une équivalence de diplôme ou une expérience professionnelle reconnue",ok:true},{t:"Uniquement l'expérience professionnelle de 5 ans"},{t:"Tout diplôme de l'enseignement supérieur"}],
x:"La capacité professionnelle peut être prouvée par : la réussite à l'examen CPC organisé par les CCI, un diplôme ou titre reconnu comme équivalent par arrêté ministériel, ou une attestation de capacité délivrée sur la base d'une expérience professionnelle antérieure à l'entrée en vigueur de la réglementation."},

{id:5405,prog:'LEGER',theme:"Accès à la profession",d:3,
e:"En cas de décès du gestionnaire de transport, l'entreprise peut continuer à exercer :",
r:[{t:"Indéfiniment sans désigner de remplaçant"},{t:"Pendant 18 mois maximum avec un gestionnaire par intérim",ok:true},{t:"Pendant 6 mois puis doit cesser toute activité"},{t:"Elle doit immédiatement cesser toute activité"}],
x:"En cas de décès, d'incapacité physique ou de départ du gestionnaire de transport, l'autorité compétente peut autoriser la poursuite de l'activité pendant une période ne dépassant pas 18 mois, sous réserve de la désignation d'un gestionnaire temporaire. Après ce délai, un nouveau gestionnaire qualifié doit être nommé."},

{id:5406,prog:'LEGER',theme:"Accès à la profession",d:2,
e:"La capacité financière pour le transport léger doit être prouvée par :",
r:[{t:"Une simple déclaration sur l'honneur"},{t:"Les comptes annuels certifiés ou une garantie bancaire",ok:true},{t:"Uniquement un extrait de compte bancaire"},{t:"Une attestation de l'expert-comptable"}],
x:"La capacité financière doit être attestée par les comptes annuels certifiés (bilan et compte de résultat) de la dernière année, ou à défaut pour les nouvelles entreprises, par une garantie bancaire ou une caution de même montant délivrée par un établissement de crédit."},

{id:5407,prog:'LEGER',theme:"Accès à la profession",d:1,
e:"Combien de temps une entreprise de transport peut-elle exercer avec une autorisation provisoire après la perte d'une condition d'accès ?",
r:[{t:"3 mois"},{t:"6 mois",ok:true},{t:"12 mois"},{t:"Elle ne peut pas exercer provisoirement"}],
x:"Si une entreprise ne satisfait temporairement plus l'une des conditions d'accès (honorabilité, capacité financière ou professionnelle), l'autorité compétente peut lui accorder un délai de mise en conformité de 6 mois maximum (12 mois en cas de décès ou d'incapacité physique du gestionnaire)."},

{id:5408,prog:'LEGER',theme:"Accès à la profession",d:2,
e:"L'inscription au registre des transporteurs est effectuée auprès de :",
r:[{t:"La Chambre de Commerce et d'Industrie"},{t:"La DREAL (ou DRIEAT en IDF)",ok:true},{t:"La Préfecture du département"},{t:"Le Ministère des Transports directement"}],
x:"L'inscription au registre des transporteurs (et la délivrance des licences de transport) relève de la DREAL (Direction Régionale de l'Environnement, de l'Aménagement et du Logement), sauf en Île-de-France où c'est la DRIEAT (Direction Régionale et Interdépartementale de l'Environnement, de l'Aménagement et des Transports)."},

{id:5409,prog:'LEGER',theme:"Accès à la profession",d:3,
e:"Le règlement européen 1071/2009 établissant les conditions d'accès à la profession de transporteur s'applique :",
r:[{t:"Uniquement aux transporteurs de plus de 3,5t"},{t:"Aux transporteurs de plus de 3,5t, et aux moins de 3,5t pour compte d'autrui depuis 2022",ok:true},{t:"À tous les véhicules professionnels"},{t:"Uniquement aux transports internationaux"}],
x:"Le règlement 1071/2009 s'applique historiquement aux transports de marchandises avec des véhicules de plus de 3,5t. Le règlement 2020/1055 a étendu certaines de ses dispositions aux transporteurs utilisant des véhicules de moins de 3,5t effectuant des transports internationaux, avec application progressive depuis 2022."},

{id:5410,prog:'LEGER',theme:"Accès à la profession",d:2,
e:"Un transporteur de marchandises pour compte propre (non professionnel) :",
r:[{t:"A besoin des mêmes autorisations qu'un transporteur public"},{t:"N'a pas besoin de licence mais doit respecter les règles de sécurité routière",ok:true},{t:"Est exempté de toutes les réglementations transport"},{t:"Doit s'inscrire au RENT"}],
x:"Le transport pour compte propre (une entreprise qui transporte ses propres marchandises avec ses propres véhicules, de façon accessoire à son activité principale) ne nécessite pas de licence de transport ni d'inscription au RENT. Toutefois, le conducteur et le véhicule doivent respecter toutes les règles du code de la route."},

// ══════════════════════════════════════
// RÉGLEMENTATION VUL — 60 questions
// ══════════════════════════════════════
{id:5501,prog:'LEGER',theme:'Réglementation VUL',d:1,
e:"Le tachygraphe est-il obligatoire pour les VUL de moins de 3,5t ?",
r:[{t:"Oui, toujours"},{t:"Non, le règlement 561/2006 ne s'applique pas aux VUL <3,5t",ok:true},{t:"Oui, uniquement pour les trajets de plus de 100 km"},{t:"Oui, uniquement pour les VUL transportant des marchandises dangereuses"}],
x:"Le règlement (CE) 561/2006 sur les temps de conduite et le tachygraphe s'applique aux véhicules de transport de marchandises de PTAC supérieur à 3,5 tonnes. Les VUL de moins de 3,5t ne sont donc pas soumis à l'obligation de chronotachygraphe, sauf exceptions spécifiques."},

{id:5502,prog:'LEGER',theme:'Réglementation VUL',d:2,
e:"La surcharge d'un VUL (dépassement du PTAC) est :",
r:[{t:"Permise jusqu'à 10 % du PTAC"},{t:"Strictement interdite et passible d'amende",ok:true},{t:"Permise avec accord préfectoral"},{t:"Permise pour les livraisons urbaines"}],
x:"Le dépassement du PTAC (Poids Total Autorisé en Charge) est formellement interdit pour tout véhicule. Les sanctions sont des contraventions qui varient selon le niveau de dépassement. Le conducteur ET le chargeur peuvent être mis en cause. De plus, en cas d'accident avec surcharge, l'assurance peut invoquer une déchéance de garantie."},

{id:5503,prog:'LEGER',theme:'Réglementation VUL',d:1,
e:"Le permis requis pour un VUL de 3 499 kg PTAC remorquant une remorque de 1 500 kg est :",
r:[{t:"Permis B"},{t:"Permis BE",ok:true},{t:"Permis C"},{t:"Permis B96"}],
x:"Le permis B autorise la conduite d'un ensemble de 3 500 kg PTAC maximum et de remorques jusqu'à 750 kg PTAC. Pour remorquer une remorque de 1 500 kg, le PTAC total atteint 4 999 kg : il faut le permis BE (ou B96 si l'ensemble ne dépasse pas 4 250 kg avec formation spécifique)."},

{id:5504,prog:'LEGER',theme:'Réglementation VUL',d:2,
e:"Le contrôle technique périodique d'un VUL utilitaire (usage professionnel) de moins de 3,5t a lieu tous les :",
r:[{t:"1 an"},{t:"2 ans",ok:true},{t:"3 ans"},{t:"4 ans"}],
x:"Les véhicules utilitaires légers (VUL) de PTAC inférieur ou égal à 3,5t sont soumis au contrôle technique tous les 2 ans (comme les véhicules particuliers). La première visite a lieu avant la 4ème année de mise en circulation. Un contrôle complémentaire peut être exigé après un accident."},

{id:5505,prog:'LEGER',theme:'Réglementation VUL',d:1,
e:"Un VUL peut circuler avec des marchandises dépassant sa carrosserie sur les côtés de :",
r:[{t:"0 cm — aucun dépassement autorisé"},{t:"Jusqu'à 20 cm de chaque côté sans signalisation"},{t:"Jusqu'à ce que la largeur totale atteigne 2,55 m maximum",ok:true},{t:"Jusqu'à 50 cm avec un signal réfléchissant"}],
x:"La largeur maximale d'un VUL avec son chargement est de 2,55 m. Un VUL de 2,10 m de large peut donc transporter un chargement dépassant de 22,5 cm de chaque côté. Au-delà de 2,55 m de largeur totale, des autorisations spéciales sont requises."},

{id:5506,prog:'LEGER',theme:'Réglementation VUL',d:2,
e:"La carte verte (attestation d'assurance) doit-elle se trouver à bord du véhicule ?",
r:[{t:"Non, elle peut être conservée au siège de l'entreprise"},{t:"Oui, l'attestation d'assurance doit être à bord",ok:true},{t:"Elle n'est obligatoire que pour les transports de plus de 100 km"},{t:"Elle est remplacée par le relevé d'information"}],
x:"L'attestation d'assurance (carte verte ou équivalent) doit obligatoirement se trouver à bord du véhicule et être présentée lors des contrôles. Le défaut de présentation est une infraction passible d'amende. L'assurance RC automobile est obligatoire pour tout véhicule à moteur."},

{id:5507,prog:'LEGER',theme:'Réglementation VUL',d:3,
e:"La réglementation CRD (Certificat Restreint Délivrance) concerne :",
r:[{t:"Les VUL transportant des denrées périssables"},{t:"Les chauffeurs ayant un permis probatoire"},{t:"Les VUL transformés en véhicules de transport de personnes",ok:true},{t:"Les VUL avec équipement de levage"}],
x:"Le CRD ou réception à titre isolé (RTI) concerne les transformations importantes de véhicules (réaménagement de l'habitacle, carrosserie modifiée significativement). Tout VUL transformé pour le transport de personnes doit obtenir une réception et une nouvelle immatriculation correspondant à la nouvelle catégorie du véhicule."},

{id:5508,prog:'LEGER',theme:'Réglementation VUL',d:2,
e:"La limitation de vitesse d'un VUL de moins de 3,5t sur route nationale à double sens de circulation (hors agglomération) est de :",
r:[{t:"80 km/h",ok:true},{t:"90 km/h"},{t:"110 km/h"},{t:"130 km/h"}],
x:"Depuis le 1er juillet 2018, la vitesse maximale sur les routes nationales et départementales à double sens sans séparateur central est de 80 km/h pour tous les véhicules légers. Les VUL de moins de 3,5t sont soumis aux mêmes limitations que les voitures particulières."},

{id:5509,prog:'LEGER',theme:'Réglementation VUL',d:1,
e:"Le transport de denrées alimentaires sous température dirigée nécessite obligatoirement :",
r:[{t:"Uniquement un thermomètre"},{t:"Un véhicule homologué ATP et une surveillance de la chaîne du froid",ok:true},{t:"Une autorisation préfectorale annuelle"},{t:"Un conducteur avec un diplôme d'hygiène alimentaire"}],
x:"L'accord ATP (Accord relatif aux Transports internationaux de denrées Périssables et aux engins spéciaux utilisés pour ces transports) impose des véhicules homologués (frigorifiques, isothermes…) pour le transport de produits frais, congelés ou surgelés. La chaîne du froid doit être documentée."},

{id:5510,prog:'LEGER',theme:'Réglementation VUL',d:2,
e:"Un VUL transportant des bouteilles de gaz propane en quantités inférieures aux seuils ADR :",
r:[{t:"Est totalement exempt de toute réglementation"},{t:"Doit respecter des règles de sécurité minimales (bonne fixation, ventilation) même hors ADR",ok:true},{t:"Doit disposer d'un certificat ADR conducteur"},{t:"Ne peut transporter que du propane professionnel"}],
x:"Même en dessous des seuils d'exemption ADR, le transport de gaz comprimés doit respecter des règles de base : bouteilles correctement arrimées et stockées à la verticale, ventilation du compartiment, extincteur, consignes de sécurité. Les bonnes pratiques professionnelles s'appliquent toujours."},

// ══════════════════════════════════════
// SÉCURITÉ ROUTIÈRE — 60 questions
// ══════════════════════════════════════
{id:5601,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"Le taux d'alcoolémie légal pour un conducteur professionnel (permis B avec plus de 2 ans) est de :",
r:[{t:"0,5 g/L de sang",ok:true},{t:"0,2 g/L de sang"},{t:"0,8 g/L de sang"},{t:"0 g/L — tolérance zéro"}],
x:"Pour les conducteurs ordinaires (permis depuis plus de 2 ans, hors transport en commun), le taux légal est de 0,5 g/L dans le sang (0,25 mg/L dans l'air expiré). Pour les conducteurs en période probatoire (2 premières années) et les conducteurs de transport en commun, le seuil est de 0,2 g/L."},

{id:5602,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"La distance de freinage d'un VUL à 90 km/h sur chaussée sèche est approximativement de :",
r:[{t:"30 mètres"},{t:"55 mètres",ok:true},{t:"100 mètres"},{t:"150 mètres"}],
x:"À 90 km/h, la distance de freinage d'urgence (hors temps de réaction) sur chaussée sèche est d'environ 55 mètres pour un véhicule en bon état. En ajoutant le temps de réaction (environ 1 seconde = 25 m à 90 km/h), la distance d'arrêt totale est d'environ 80 mètres. Sur sol mouillé, ces distances doublent."},

{id:5603,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"En cas de crevaison sur autoroute, il faut :",
r:[{t:"Freiner brusquement et s'arrêter sur la voie rapide"},{t:"Serrer progressivement le volant, ralentir doucement et rejoindre la bande d'arrêt d'urgence",ok:true},{t:"Accélérer pour atteindre la prochaine sortie"},{t:"Allumer les feux de détresse uniquement"}],
x:"En cas de crevaison : tenir fermement le volant (le véhicule tire d'un côté), ralentir très progressivement sans freiner brusquement, ne pas faire de mouvement brusque de direction, rejoindre la BAU le plus vite possible, puis allumer les feux de détresse, sortir du véhicule par la droite et placer les triangles de signalisation."},

{id:5604,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"L'angle mort d'un VUL se situe principalement :",
r:[{t:"À l'avant du véhicule"},{t:"Sur les côtés et à l'arrière, non visibles dans les rétroviseurs",ok:true},{t:"Uniquement à l'arrière"},{t:"Uniquement du côté passager"}],
x:"Les angles morts d'un VUL sont les zones non visibles dans les rétroviseurs, principalement sur les côtés (zones latérales arrière) et à l'arrière direct. Contrairement aux PL, les VUL ont des angles morts moins importants, mais restent significatifs, notamment du côté droit en milieu urbain. Des équipements comme les caméras de recul réduisent ce risque."},

{id:5605,prog:'LEGER',theme:'Sécurité routière',d:3,
e:"L'éco-conduite permet de réduire la consommation de carburant d'un VUL de :",
r:[{t:"2 à 5 %"},{t:"10 à 15 %",ok:true},{t:"20 à 30 %"},{t:"Plus de 50 %"}],
x:"L'éco-conduite bien pratiquée permet généralement de réduire la consommation de carburant de 10 à 15 % : anticipation des situations, maintien d'une vitesse régulière, montée rapide en régime pour atteindre le rapport supérieur, coupure du moteur à l'arrêt prolongé. Les bénéfices incluent aussi la réduction de l'usure des freins et des pneus."},

{id:5606,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"Le port du téléphone tenu en main au volant est interdit et passible d'une amende de :",
r:[{t:"35 €"},{t:"135 €",ok:true},{t:"450 €"},{t:"750 €"}],
x:"L'utilisation du téléphone tenu en main au volant est une contravention de 4ème classe : amende forfaitaire de 135 € (minorée à 90 €, majorée à 375 €) et retrait de 3 points du permis de conduire. Le kit mains-libres intégré au véhicule reste autorisé, mais toute manipulation d'un écran reste interdite."},

{id:5607,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"La conduite sous l'emprise de stupéfiants (même en traces résiduelles) est :",
r:[{t:"Sanctionnée uniquement si le conducteur a eu un accident"},{t:"Un délit passible de 2 ans d'emprisonnement et 4 500 € d'amende",ok:true},{t:"Une simple contravention"},{t:"Non sanctionnée si le conducteur est professionnel"}],
x:"La conduite sous l'emprise de stupéfiants est un délit pénal (art. L.235-1 du Code de la route) : 2 ans d'emprisonnement, 4 500 € d'amende, 6 points retirés. En cas de cumul avec l'alcool ou d'accident mortel, les peines sont aggravées. Un test salivaire positif, même en l'absence de signes d'imprégnation, suffit à caractériser l'infraction."},

{id:5608,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"La pression des pneus d'un VUL chargé doit être :",
r:[{t:"Identique à un VUL vide"},{t:"Ajustée selon les préconisations du constructeur, souvent augmentée en charge",ok:true},{t:"Toujours de 2,5 bars"},{t:"Vérifiée uniquement lors du contrôle technique"}],
x:"La pression des pneus doit être adaptée à la charge du véhicule selon les préconisations du constructeur (figurant souvent sur la plaque de custode ou dans le manuel). En charge maximale, la pression recommandée est généralement plus élevée qu'à vide pour éviter la surchauffe et l'éclatement du pneu."},

{id:5609,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"L'arrimage de la cargaison d'un VUL est :",
r:[{t:"Une recommandation sans obligation légale"},{t:"Obligatoire : le conducteur est responsable de la stabilité et de l'arrimage de son chargement",ok:true},{t:"À la charge de l'expéditeur uniquement"},{t:"Obligatoire uniquement pour les PL"}],
x:"L'article R.412-24 du Code de la route impose que le chargement soit arrimé de manière à ne pas présenter de danger pour la sécurité. Le conducteur est responsable de l'arrimage. En cas d'accident dû à un chargement mal arrimé, sa responsabilité pénale et civile peut être engagée."},

{id:5610,prog:'LEGER',theme:'Sécurité routière',d:3,
e:"Le syndrome du 'temps de réaction' en cas de freinage d'urgence correspond à :",
r:[{t:"La durée de l'opération de freinage complète"},{t:"Le temps entre la perception du danger et le début du freinage (environ 1 seconde)",ok:true},{t:"Le temps nécessaire pour s'arrêter complètement"},{t:"Le temps de réaction du système ABS"}],
x:"Le temps de réaction moyen est d'environ 1 seconde entre la perception du danger et l'appui effectif sur la pédale de frein. À 90 km/h, cette seconde représente 25 mètres parcourus AVANT même de commencer à freiner. La fatigue, la distraction ou l'alcool peuvent doubler ou tripler ce temps de réaction."},

{id:5611,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"La signalisation d'un chantier mobile sur autoroute impose :",
r:[{t:"Uniquement des cônes de signalisation"},{t:"Un véhicule précédant le chantier avec flèche lumineuse clignotante",ok:true},{t:"Uniquement les feux de détresse"},{t:"Aucune signalisation spécifique pour les petits travaux"}],
x:"Les chantiers mobiles sur autoroute nécessitent un véhicule précurseur équipé d'une flèche lumineuse clignotante (TPC — Tableau de Protection des Chantiers), des cônes de signalisation avancés et une signalisation réglementaire. Les distances de mise en place dépendent de la vitesse de circulation."},

{id:5612,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"Le coefficient de frottement entre les pneus et la chaussée est le plus faible sur :",
r:[{t:"Chaussée sèche"},{t:"Chaussée mouillée"},{t:"Chaussée verglacée",ok:true},{t:"Chaussée enneigée"}],
x:"Le coefficient d'adhérence est d'environ : 0,8 sur chaussée sèche, 0,4 sur chaussée mouillée, 0,1 à 0,2 sur neige, 0,05 à 0,1 sur verglas. Le verglas présente donc l'adhérence la plus faible, multipliant les distances de freinage par 8 à 16 par rapport à la chaussée sèche."},

// ══════════════════════════════════════
// SUITE QCM LÉGER — Droit civil (suite)
// ══════════════════════════════════════
{id:5700,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"Le droit de rétention du transporteur s'éteint lorsque :",
r:[{t:"La marchandise est livrée au destinataire",ok:true},{t:"L'expéditeur envoie une mise en demeure"},{t:"Le délai de transport est dépassé"},{t:"Le transporteur change de dépôt"}],
x:"Le droit de rétention cesse dès que le transporteur se dessaisit volontairement de la marchandise (livraison). Il ne peut pas reprendre les marchandises après les avoir délivrées sans réserve. C'est pourquoi le transporteur doit impérativement conserver les marchandises jusqu'au paiement intégral si celui-ci n'est pas assuré."},

{id:5701,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"Le RCS (Registre du Commerce et des Sociétés) est tenu par :",
r:[{t:"La Chambre de Commerce et d'Industrie"},{t:"Le greffe du tribunal de commerce",ok:true},{t:"La Préfecture du département"},{t:"L'URSSAF"}],
x:"Le RCS est tenu par le greffe du tribunal de commerce compétent pour le siège de l'entreprise. L'immatriculation au RCS est obligatoire pour les commerçants et les sociétés commerciales. Le numéro SIREN est attribué par l'INSEE lors de la création."},

{id:5702,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"La novation d'une dette commerciale consiste à :",
r:[{t:"Rembourser la dette par anticipation"},{t:"Substituer une obligation nouvelle à une obligation ancienne qui s'éteint",ok:true},{t:"Transférer la dette à un tiers"},{t:"Suspendre temporairement le paiement"}],
x:"La novation (art. 1329 du Code civil) est un mécanisme qui éteint une obligation existante pour la remplacer par une nouvelle. Elle peut porter sur l'objet de la dette (novation par changement d'objet) ou sur les parties (novation par changement de débiteur = délégation)."},

{id:5703,prog:'LEGER',theme:'Droit civil & commercial',d:3,
e:"La cession de fonds de commerce doit être publiée au :",
r:[{t:"Journal officiel uniquement"},{t:"Bulletin officiel des annonces civiles et commerciales (BODACC) et journal d'annonces légales",ok:true},{t:"Registre de la Chambre de métiers"},{t:"Site de l'administration fiscale"}],
x:"La cession de fonds de commerce doit être publiée dans un journal d'annonces légales dans les 15 jours de la cession, puis au BODACC. Cette publicité ouvre un délai de 10 jours pendant lequel les créanciers du cédant peuvent faire opposition au paiement du prix, pour protéger leurs droits."},

{id:5704,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"Un devis accepté par le client constitue :",
r:[{t:"Une simple proposition sans valeur juridique"},{t:"Un contrat liant les deux parties",ok:true},{t:"Un document informatif uniquement"},{t:"Une facture pro forma"}],
x:"Un devis signé par le client vaut acceptation de l'offre : il y a rencontre des volontés (offre du prestataire + acceptation du client) et donc formation d'un contrat. L'entreprise est alors engagée par les prix et conditions figurant dans le devis."},

{id:5705,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"La solidarité entre débiteurs signifie que :",
r:[{t:"Chaque débiteur ne doit que sa part"},{t:"Le créancier peut réclamer la totalité de la dette à n'importe lequel des débiteurs",ok:true},{t:"Les débiteurs doivent rembourser simultanément"},{t:"La dette est automatiquement annulée si un débiteur décède"}],
x:"La solidarité passive (entre débiteurs) permet au créancier de poursuivre n'importe lequel des codébiteurs pour la totalité de la dette, sans avoir à diviser ses poursuites. Le débiteur qui a payé intégralement dispose ensuite d'un recours contre les autres pour leur part."},

{id:5706,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"Les conditions générales de vente (CGV) d'un professionnel :",
r:[{t:"Ne sont jamais applicables sans signature manuscrite du client"},{t:"S'appliquent dès lors qu'elles ont été portées à la connaissance du client avant la commande",ok:true},{t:"Ne sont valables qu'entre entreprises de même secteur"},{t:"Doivent être approuvées par une autorité administrative"}],
x:"Les CGV sont opposables au client professionnel dès lors qu'elles lui ont été communiquées avant la passation de commande (même sans signature spécifique de sa part, si la communication est prouvée). Pour les consommateurs, des règles plus protectrices s'appliquent (information précontractuelle obligatoire)."},

{id:5707,prog:'LEGER',theme:'Droit civil & commercial',d:3,
e:"Le contrat de transport est qualifié de contrat :",
r:[{t:"Réel (formé par remise de la chose)"},{t:"Synallagmatique à titre onéreux",ok:true},{t:"Unilatéral et gratuit"},{t:"Aléatoire"}],
x:"Le contrat de transport est synallagmatique (obligations réciproques : le transporteur s'engage à acheminer, le chargeur à payer le prix) et à titre onéreux (contre rémunération). C'est aussi un contrat d'entreprise (le transporteur s'engage à un résultat : la livraison)."},

{id:5708,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"Qu'est-ce qu'une SARL unipersonnelle (EURL) ?",
r:[{t:"Une société anonyme simplifiée"},{t:"Une SARL constituée par un seul associé",ok:true},{t:"Une entreprise individuelle avec responsabilité limitée"},{t:"Un statut réservé aux professions libérales"}],
x:"L'EURL (Entreprise Unipersonnelle à Responsabilité Limitée) est une SARL avec un seul associé. Elle permet à un entrepreneur individuel de bénéficier de la responsabilité limitée au capital social, tout en gardant la flexibilité d'une structure simple. Elle peut être transformée en SARL pluripersonnelle à tout moment."},

{id:5709,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"La garantie à première demande (garantie autonome) se distingue du cautionnement car :",
r:[{t:"Elle est moins contraignante pour le garant"},{t:"Le garant doit payer sans pouvoir opposer les exceptions tirées du contrat principal",ok:true},{t:"Elle ne couvre que les dettes commerciales"},{t:"Elle nécessite l'accord du débiteur principal"}],
x:"La garantie autonome (ou garantie à première demande) est indépendante du contrat garanti : le garant paie sur simple demande du bénéficiaire, sans pouvoir opposer les exceptions que le débiteur principal pourrait invoquer. Contrairement au cautionnement, elle est totalement détachée de la dette principale."},

{id:5710,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"La force majeure en droit des contrats exonère le débiteur si :",
r:[{t:"L'événement est imprévisible, irrésistible et extérieur",ok:true},{t:"L'événement est simplement imprévisible"},{t:"La perte financière dépasse 50 % de la valeur du contrat"},{t:"Le débiteur prouve une faute légère uniquement"}],
x:"La force majeure (art. 1218 du Code civil) exige la réunion de 3 conditions cumulatives : l'événement doit être imprévisible lors de la conclusion du contrat, irrésistible dans ses effets (impossible d'exécuter même avec toutes les précautions), et extérieur à la partie qui l'invoque."},

// ══════════════════════════════════════
// DROIT SOCIAL LÉGER — suite (30 questions)
// ══════════════════════════════════════
{id:5720,prog:'LEGER',theme:'Droit social',d:2,
e:"Le contrat d'apprentissage est un contrat :",
r:[{t:"CDD de formation en alternance",ok:true},{t:"CDI avec formation intégrée"},{t:"Stage longue durée rémunéré"},{t:"Contrat de professionnalisation uniquement pour adultes"}],
x:"Le contrat d'apprentissage est un CDD (ou CDI depuis la réforme 2018) associant formation théorique en CFA et formation pratique en entreprise. Il permet d'obtenir un diplôme ou titre professionnel. La rémunération est un pourcentage du SMIC selon l'âge et l'année d'apprentissage."},

{id:5721,prog:'LEGER',theme:'Droit social',d:1,
e:"Le SMIC est revalorisé :",
r:[{t:"Uniquement lors des négociations sociales"},{t:"Automatiquement au 1er janvier + déclenchement possible si inflation > 2%",ok:true},{t:"Tous les 2 ans par décret"},{t:"Uniquement par accord de branche"}],
x:"Le SMIC est revalorisé automatiquement au 1er janvier de chaque année. Une revalorisation intermédiaire se déclenche automatiquement lorsque l'indice des prix à la consommation augmente d'au moins 2% depuis la dernière revalorisation. Le gouvernement peut aussi accorder un coup de pouce exceptionnel."},

{id:5722,prog:'LEGER',theme:'Droit social',d:2,
e:"La priorité de réembauche après licenciement économique dure :",
r:[{t:"3 mois"},{t:"1 an",ok:true},{t:"2 ans"},{t:"Elle est permanente"}],
x:"Le salarié licencié pour motif économique bénéficie d'une priorité de réembauche pendant 1 an à compter de la rupture du contrat. Pour en bénéficier, il doit en faire la demande dans ce délai. L'employeur doit l'informer de tout poste disponible correspondant à ses qualifications."},

{id:5723,prog:'LEGER',theme:'Droit social',d:3,
e:"Le télétravail régulier doit faire l'objet :",
r:[{t:"D'un simple accord oral suffit"},{t:"D'un accord d'entreprise ou à défaut d'une charte élaborée après avis du CSE, ou d'un accord individuel",ok:true},{t:"D'une autorisation préfectorale"},{t:"D'un avenant obligatoire pour tout télétravail, même occasionnel"}],
x:"Depuis l'ordonnance de 2017, le télétravail peut être mis en place par accord collectif ou charte unilatérale (après avis du CSE). En l'absence d'accord ou de charte, il peut être organisé par accord individuel entre l'employeur et le salarié (email suffisant). L'employeur prend en charge les frais liés au télétravail."},

{id:5724,prog:'LEGER',theme:'Droit social',d:1,
e:"Les congés payés s'acquièrent à raison de :",
r:[{t:"2,5 jours ouvrables par mois de travail effectif",ok:true},{t:"2 jours ouvrés par mois"},{t:"30 jours par an d'emblée dès l'embauche"},{t:"1 semaine par trimestre"}],
x:"Les congés payés s'acquièrent à raison de 2,5 jours ouvrables par mois de travail effectif, soit 30 jours ouvrables (5 semaines) par an pour une année complète. Certaines absences sont assimilées à du travail effectif pour le calcul des congés (maladie professionnelle, congé maternité, congé formation...)."},

{id:5725,prog:'LEGER',theme:'Droit social',d:2,
e:"Le CSE (Comité Social et Économique) est obligatoire dans les entreprises de :",
r:[{t:"Plus de 10 salariés",ok:true},{t:"Plus de 50 salariés"},{t:"Plus de 100 salariés"},{t:"Toutes les entreprises quelle que soit leur taille"}],
x:"Le CSE est obligatoire dans les entreprises d'au moins 11 salariés (depuis les ordonnances Macron de 2017, il a fusionné DP, CE et CHSCT). Dans les entreprises de 11 à 49 salariés, le CSE a des attributions plus limitées que dans celles de 50 salariés et plus."},

{id:5726,prog:'LEGER',theme:'Droit social',d:2,
e:"Le congé sans solde (congé sabbatique) est ouvert aux salariés ayant :",
r:[{t:"1 an d'ancienneté"},{t:"3 ans d'ancienneté dans l'entreprise et 6 ans d'activité professionnelle",ok:true},{t:"5 ans d'ancienneté"},{t:"10 ans d'ancienneté"}],
x:"Le congé sabbatique (art. L.3142-28 du Code du travail) est ouvert aux salariés justifiant d'au moins 36 mois d'ancienneté dans l'entreprise et de 6 années d'activité professionnelle. Sa durée est de 6 à 11 mois. L'employeur peut le refuser ou le reporter sous certaines conditions."},

{id:5727,prog:'LEGER',theme:'Droit social',d:1,
e:"Le bulletin de paie doit obligatoirement être conservé par :",
r:[{t:"L'employeur pendant 5 ans"},{t:"Le salarié sans limite de durée (valeur de preuve permanente)",ok:true},{t:"L'employeur pendant 10 ans"},{t:"Les deux parties pendant 3 ans"}],
x:"Le bulletin de paie doit être conservé sans limitation de durée par le salarié, car il constitue une preuve sociale (retraite, chômage, droits sociaux). L'employeur doit le conserver pendant 5 ans. Le bulletin de paie électronique a la même valeur juridique que le bulletin papier."},

{id:5728,prog:'LEGER',theme:'Droit social',d:3,
e:"Le prêt de main-d'œuvre à but lucratif entre entreprises est :",
r:[{t:"Légal si le salarié est d'accord"},{t:"Illégal — constitue du marchandage ou de la fourniture illicite de main-d'œuvre",ok:true},{t:"Légal entre entreprises d'un même groupe"},{t:"Légal avec accord de la DREETS"}],
x:"Le prêt de main-d'œuvre à but lucratif (art. L.8241-1 du Code du travail) est interdit : c'est du marchandage ou de la fourniture illicite de main-d'œuvre. Exception : le prêt à but non lucratif entre entreprises (seuls les salaires, charges et frais sont remboursés, avec accord du salarié et du CSE)."},

{id:5729,prog:'LEGER',theme:'Droit social',d:2,
e:"Le montant maximum de l'aide unique à l'embauche d'un apprenti pour une entreprise de moins de 250 salariés est de :",
r:[{t:"1 000 €"},{t:"5 000 € la 1ère année",ok:true},{t:"6 000 €"},{t:"Il n'y a pas d'aide spécifique"}],
x:"Depuis le 24 février 2025 (décret n°2025-174), l'aide unique à l'apprentissage est de 5 000 € maximum pour la 1ère année (entreprises < 250 salariés, diplômes jusqu'au bac — niveau 4). Elle est portée à 6 000 € si l'apprenti est en situation de handicap. Versée par l'ASP automatiquement chaque mois."},

// ══════════════════════════════════════
// FISCALITÉ LÉGER — suite (30 questions)
// ══════════════════════════════════════
{id:5740,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"Le régime des BIC (Bénéfices Industriels et Commerciaux) s'applique aux :",
r:[{t:"Professions libérales uniquement"},{t:"Transporteurs, commerçants, artisans et industriels",ok:true},{t:"Agriculteurs uniquement"},{t:"Toutes les entreprises sans distinction"}],
x:"Les BIC s'appliquent aux entreprises industrielles, commerciales et artisanales, dont font partie les transporteurs routiers. Les revenus sont déclarés à l'IR (pour les EI et les sociétés de personnes) ou sont soumis à l'IS (pour les SARL, SA, SAS). Les BNC s'appliquent aux professions libérales."},

{id:5741,prog:'LEGER',theme:'Droit fiscal',d:1,
e:"La TVA sur les véhicules de tourisme utilisés à des fins professionnelles est :",
r:[{t:"Récupérable à 100 %"},{t:"Non récupérable",ok:true},{t:"Récupérable à 50 %"},{t:"Récupérable à 80 %"}],
x:"La TVA sur les véhicules conçus pour le transport de personnes (voitures de tourisme, catégorie M1) n'est pas déductible, même utilisés professionnellement. Exception : les VUL (véhicules utilitaires légers N1) qui permettent la récupération de TVA car ils sont conçus pour le transport de marchandises."},

{id:5742,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"La taxe foncière sur les propriétés bâties est due par :",
r:[{t:"Le locataire du local commercial"},{t:"Le propriétaire des locaux au 1er janvier de l'année",ok:true},{t:"L'exploitant du fonds de commerce"},{t:"Les deux conjointement à parts égales"}],
x:"La taxe foncière est due par le propriétaire des biens immobiliers au 1er janvier de l'année d'imposition. Si le bien est loué, le propriétaire peut refacturer une partie au locataire si une clause du bail le prévoit, mais il reste le redevable légal vis-à-vis de l'administration fiscale."},

{id:5743,prog:'LEGER',theme:'Droit fiscal',d:3,
e:"Le régime de l'intégration fiscale permet à un groupe de sociétés de :",
r:[{t:"Ne pas payer d'IS du tout"},{t:"Consolider les résultats des sociétés du groupe pour calculer l'IS sur un résultat d'ensemble",ok:true},{t:"Transférer librement des bénéfices entre filiales"},{t:"Bénéficier d'un taux d'IS réduit à 15 %"}],
x:"L'intégration fiscale (art. 223 A du CGI) permet à une société mère (détenant 95 %+ des filiales) de constituer un groupe fiscal intégré. L'IS est calculé sur le résultat d'ensemble (bénéfices et déficits des filiales se compensent). C'est un avantage fiscal important pour les groupes de sociétés."},

{id:5744,prog:'LEGER',theme:'Droit fiscal',d:1,
e:"Le numéro de TVA intracommunautaire français est composé de :",
r:[{t:"Le code FR + 9 chiffres du SIREN"},{t:"Le code FR + 2 chiffres clé + 9 chiffres SIREN",ok:true},{t:"Le numéro de SIRET"},{t:"Un numéro attribué par la DGFiP uniquement"}],
x:"Le numéro de TVA intracommunautaire français est : FR + 2 chiffres (clé de contrôle calculée à partir du SIREN) + 9 chiffres (numéro SIREN). Exemple : FR12 123 456 789. Il est obligatoire sur les factures émises vers des clients assujettis d'autres États membres de l'UE."},

{id:5745,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"Le régime du réel simplifié s'applique aux entreprises dont le CA HT est compris entre :",
r:[{t:"0 et 37 500 €"},{t:"37 500 € et 254 000 € (services) ou 85 000 € et 840 000 € (ventes)",ok:true},{t:"254 000 € et 2 000 000 €"},{t:"Au-delà de 2 000 000 €"}],
x:"Le régime réel simplifié (RSI) s'applique aux entreprises entre les seuils de franchise en base et ceux du régime réel normal. Pour les prestataires de services (depuis 2026) : entre 37 500 € et 254 000 € de CA HT. Pour les activités de vente : entre 85 000 € et 840 000 €."},

{id:5746,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"La contribution foncière des entreprises (CFE) est calculée sur :",
r:[{t:"Le chiffre d'affaires de l'entreprise"},{t:"La valeur locative des biens immobiliers utilisés par l'entreprise",ok:true},{t:"Le nombre de salariés"},{t:"Le capital social de l'entreprise"}],
x:"La CFE est assise sur la valeur locative cadastrale des biens immobiliers dont l'entreprise a disposé pour l'exercice de son activité professionnelle au 1er janvier de l'année d'imposition. Les entreprises sans local (auto-entrepreneurs en domicile personnel) paient une CFE minimum."},

{id:5747,prog:'LEGER',theme:'Droit fiscal',d:3,
e:"Le report en avant illimité des déficits fiscaux à l'IS est plafonné à :",
r:[{t:"Il n'y a pas de plafond"},{t:"1 000 000 € + 50 % du bénéfice imposable excédant ce seuil",ok:true},{t:"500 000 € par exercice"},{t:"100 % du bénéfice imposable"}],
x:"Depuis 2011, le report en avant des déficits à l'IS est limité à 1 M€ + 50 % du bénéfice imposable excédant ce million. Exemple : si le bénéfice est de 3 M€, la déduction maximale est 1 M€ + 50 % × 2 M€ = 2 M€. Le solde de déficit non imputé reste reportable indéfiniment."},

{id:5748,prog:'LEGER',theme:'Droit fiscal',d:1,
e:"Les charges non déductibles fiscalement pour une entreprise à l'IS comprennent notamment :",
r:[{t:"Les salaires des dirigeants"},{t:"Les amendes et pénalités infligées par les autorités",ok:true},{t:"Les intérêts d'emprunt"},{t:"Les loyers de crédit-bail"}],
x:"Les amendes, pénalités et majorations infligées par l'État ou les collectivités ne sont pas déductibles fiscalement (art. 39.2 du CGI). Les amortissements excessifs au-delà des plafonds légaux, certains cadeaux clients dépassant les limites, ou les dépenses somptuaires (chasse, pêche, yachts) sont également non déductibles."},

{id:5749,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"L'exit tax s'applique lorsqu'un contribuable :",
r:[{t:"Vend son entreprise à un repreneur étranger"},{t:"Transfère son domicile fiscal hors de France en détenant des participations importantes",ok:true},{t:"Réalise une plus-value supérieure à 1 M€"},{t:"Cède des actions cotées en bourse"}],
x:"L'exit tax (art. 167 bis du CGI) s'applique aux personnes physiques qui transfèrent leur domicile fiscal hors de France, si elles ont été résidentes françaises pendant 6 des 10 dernières années et détiennent des participations ≥ 50 % ou d'une valeur > 800 000 €. Elle impose les plus-values latentes lors du départ."},

// ══════════════════════════════════════
// GESTION FINANCIÈRE LÉGER — suite (30 questions)
// ══════════════════════════════════════
{id:5760,prog:'LEGER',theme:'Gestion financière',d:1,
e:"Le résultat courant avant impôt (RCAI) correspond à :",
r:[{t:"Résultat d'exploitation + Résultat financier",ok:true},{t:"Résultat d'exploitation uniquement"},{t:"Résultat net après IS"},{t:"Résultat exceptionnel + Résultat d'exploitation"}],
x:"Le RCAI = Résultat d'exploitation + Résultat financier (produits financiers - charges financières). Il mesure la performance récurrente de l'entreprise avant les éléments exceptionnels et l'IS. C'est un indicateur clé car il reflète l'activité normale et le mode de financement."},

{id:5761,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Le taux de rotation des créances clients (DSO) se calcule ainsi :",
r:[{t:"CA / Créances clients × 360"},{t:"Créances clients / CA × 360",ok:true},{t:"CA / Total actif"},{t:"Résultat / Créances clients"}],
x:"DSO (Days Sales Outstanding) = Créances clients / CA × 360 jours. Il mesure le délai moyen d'encaissement. Un DSO de 45 jours signifie que les clients paient en moyenne 45 jours après la facturation. Plus le DSO est court, mieux c'est pour la trésorerie."},

{id:5762,prog:'LEGER',theme:'Gestion financière',d:2,
e:"La marge opérationnelle (taux de résultat d'exploitation) se calcule comme :",
r:[{t:"Résultat net / CA × 100"},{t:"Résultat d'exploitation / CA × 100",ok:true},{t:"EBE / CA × 100"},{t:"MCV / CA × 100"}],
x:"Taux de marge opérationnelle = Résultat d'exploitation / CA × 100. Il mesure la part du CA qui reste après toutes les charges d'exploitation (incluant amortissements). Il s'agit d'un indicateur standard de rentabilité opérationnelle, comparable entre entreprises du même secteur."},

{id:5763,prog:'LEGER',theme:'Gestion financière',d:3,
e:"Le coût moyen pondéré du capital (CMPC ou WACC) sert à :",
r:[{t:"Calculer le salaire moyen de l'entreprise"},{t:"Actualiser les flux de trésorerie futurs pour évaluer des investissements",ok:true},{t:"Fixer le taux d'intérêt des emprunts"},{t:"Calculer la valeur comptable des actifs"}],
x:"Le WACC (Weighted Average Cost of Capital) est le taux d'actualisation utilisé pour évaluer les investissements ou la valeur d'une entreprise. Il pondère le coût des fonds propres et le coût de la dette selon leur poids dans le financement. Un investissement est rentable si son TRI dépasse le WACC."},

{id:5764,prog:'LEGER',theme:'Gestion financière',d:1,
e:"Un flux de trésorerie négatif sur l'activité (Operating Cash Flow < 0) signifie :",
r:[{t:"L'entreprise est forcément en faillite"},{t:"L'exploitation consomme plus de trésorerie qu'elle n'en génère — situation préoccupante",ok:true},{t:"L'entreprise investit beaucoup"},{t:"L'entreprise a remboursé ses dettes"}],
x:"Un OCF négatif signifie que l'activité opérationnelle consomme de la trésorerie. C'est préoccupant car une entreprise doit normalement générer de la trésorerie via son exploitation. Cela peut indiquer un BFR trop élevé, une rentabilité insuffisante ou des délais de paiement défavorables. À distinguer des flux d'investissement et de financement."},

{id:5765,prog:'LEGER',theme:'Gestion financière',d:2,
e:"La duration d'un emprunt mesure :",
r:[{t:"La durée restante jusqu'à l'échéance finale"},{t:"La durée de vie moyenne actualisée des flux de remboursement",ok:true},{t:"Le taux d'intérêt annuel effectif"},{t:"Le montant total des intérêts à payer"}],
x:"La duration est la durée de vie moyenne pondérée par les flux actualisés d'un emprunt ou d'un portefeuille obligataire. Elle mesure la sensibilité de la valeur de la dette aux variations de taux d'intérêt. Plus la duration est longue, plus la valeur est sensible aux variations de taux."},

{id:5766,prog:'LEGER',theme:'Gestion financière',d:1,
e:"Une entreprise avec un BFR de 15 000 € et un FRNG de 10 000 € a une trésorerie nette de :",
r:[{t:"+25 000 €"},{t:"–5 000 €",ok:true},{t:"+5 000 €"},{t:"0 €"}],
x:"Trésorerie nette = FRNG – BFR = 10 000 – 15 000 = –5 000 €. La trésorerie est négative : le FRNG est insuffisant pour couvrir le BFR. L'entreprise doit recourir à des financements à court terme (découvert bancaire, facilité de caisse) pour couvrir ce déficit."},

{id:5767,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Le levier opérationnel mesure :",
r:[{t:"L'impact de l'endettement sur la rentabilité"},{t:"La sensibilité du résultat d'exploitation aux variations du CA",ok:true},{t:"Le niveau d'endettement de l'entreprise"},{t:"La rentabilité des capitaux propres"}],
x:"Levier opérationnel = MCV / Résultat d'exploitation. Il indique de combien augmente le résultat d'exploitation quand le CA augmente de 1 %. Plus les charges fixes sont importantes, plus le levier est élevé : une hausse du CA amplifie les bénéfices, mais une baisse les amplifie aussi en pertes."},

{id:5768,prog:'LEGER',theme:'Gestion financière',d:3,
e:"La méthode des flux de trésorerie actualisés (DCF) pour valoriser une entreprise utilise :",
r:[{t:"Le bénéfice net historique des 3 dernières années"},{t:"Les flux de trésorerie futurs prévisionnels actualisés au WACC",ok:true},{t:"La valeur comptable des actifs nets"},{t:"Le multiple de CA d'entreprises comparables"}],
x:"La méthode DCF (Discounted Cash Flows) valorise une entreprise en actualisant ses flux de trésorerie futurs prévisionnels (Free Cash Flows) au coût moyen pondéré du capital (WACC). C'est la méthode de référence en finance d'entreprise, bien que très sensible aux hypothèses retenues."},

{id:5769,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Le ratio de liquidité immédiate (ou acid-test) se calcule comme :",
r:[{t:"(Actif circulant – Stocks) / Dettes CT",ok:true},{t:"Actif circulant / Dettes CT"},{t:"Trésorerie / Total bilan"},{t:"Créances / Stocks"}],
x:"Liquidité immédiate = (Créances CT + Trésorerie) / Dettes CT = (Actif circulant – Stocks) / Dettes CT. Il mesure la capacité à faire face aux dettes à court terme sans avoir à vendre les stocks. Un ratio ≥ 1 est généralement satisfaisant. Il est plus exigeant que le ratio de liquidité générale."},

// ══════════════════════════════════════
// ACCÈS PROFESSION LÉGER — suite (20 questions)
// ══════════════════════════════════════
{id:5780,prog:'LEGER',theme:'Accès à la profession',d:2,
e:"Le gestionnaire de transport doit avoir un lien réel et permanent avec l'entreprise. Cela signifie qu'il :",
r:[{t:"Doit être présent tous les jours dans les locaux"},{t:"Doit avoir un lien contractuel (salarié, associé, dirigeant) et exercer effectivement ses fonctions",ok:true},{t:"Doit être propriétaire d'au moins 10 % du capital"},{t:"Doit être domicilié dans le même département"}],
x:"Le lien réel et permanent implique : un contrat de travail ou de direction (pas de prestation de services), l'exercice effectif et continu des fonctions de gestion des transports, et la possibilité pour l'autorité compétente de vérifier ce lien. Un gestionnaire 'fictif' (qui signe des documents sans exercer réellement) est un délit."},

{id:5781,prog:'LEGER',theme:'Accès à la profession',d:1,
e:"L'examen du CPC (Capacité Professionnelle en transport de marchandises <3,5t) est organisé par :",
r:[{t:"Le Ministère des Transports"},{t:"Les Chambres de Commerce et d'Industrie (CCI)",ok:true},{t:"La DREAL"},{t:"L'AFPA"}],
x:"L'examen du CPC pour le transport léger (<3,5t) est organisé et administré par les Chambres de Commerce et d'Industrie (CCI) sous l'autorité du Ministère chargé des Transports. L'examen comprend des épreuves écrites couvrant le droit civil et commercial, le droit social, la gestion financière et l'accès à la profession."},

{id:5782,prog:'LEGER',theme:'Accès à la profession',d:3,
e:"Le retrait de l'autorisation d'exercer peut être prononcé en cas de :",
r:[{t:"Tout redressement fiscal de l'entreprise"},{t:"Perte de l'une des 3 conditions d'accès non régularisée dans les délais",ok:true},{t:"Tout accident de la route impliquant un VUL de l'entreprise"},{t:"Retard de paiement d'une cotisation CCI"}],
x:"L'autorisation d'exercer peut être suspendue ou retirée si l'entreprise ne satisfait plus l'une des 3 conditions (honorabilité, capacité financière, capacité professionnelle) et ne régularise pas sa situation dans le délai accordé (généralement 6 mois). Le retrait est prononcé par l'autorité compétente (DREAL)."},

{id:5783,prog:'LEGER',theme:'Accès à la profession',d:2,
e:"La capacité financière minimale requise pour 3 VUL <3,5t est de :",
r:[{t:"5 400 €"},{t:"3 600 €",ok:true},{t:"9 000 €"},{t:"2 700 €"}],
x:"Pour le transport léger (<3,5t) : 1 800 € pour le 1er véhicule + 900 € par véhicule supplémentaire. Pour 3 VUL : 1 800 + (2 × 900) = 3 600 €. Cette capacité doit être justifiée par les fonds propres ou une garantie bancaire équivalente."},

{id:5784,prog:'LEGER',theme:'Accès à la profession',d:1,
e:"Le transporteur doit-il posséder les véhicules utilisés pour satisfaire à la condition d'établissement ?",
r:[{t:"Oui, obligatoirement en propriété"},{t:"Non, la possession légale suffit (location, leasing, crédit-bail)",ok:true},{t:"Il suffit d'avoir une promesse d'achat"},{t:"Oui, sauf pour les remorques"}],
x:"La condition d'établissement ne requiert pas la propriété des véhicules. Il suffit que l'entreprise ait la disposition légale des véhicules (propriété, crédit-bail, location longue durée, etc.) et qu'ils soient immatriculés dans l'État membre d'établissement. La mise à disposition informelle ne suffit pas."},

// ══════════════════════════════════════
// RÉGLEMENTATION VUL — suite (30 questions)
// ══════════════════════════════════════
{id:5790,prog:'LEGER',theme:'Réglementation VUL',d:2,
e:"Le transport de médicaments et produits pharmaceutiques par VUL nécessite :",
r:[{t:"Aucune réglementation spécifique"},{t:"Un agrément de l'ANSM et des conditions de transport adaptées (température, traçabilité)",ok:true},{t:"Uniquement un VUL fermé"},{t:"Le permis C obligatoirement"}],
x:"Le transport de médicaments est réglementé par les Bonnes Pratiques de Distribution (BPD) de l'ANSM. Il requiert : des véhicules adaptés aux conditions de conservation (température dirigée si nécessaire), une traçabilité rigoureuse, des procédures d'urgence en cas de dommage, et dans certains cas un agrément spécifique."},

{id:5791,prog:'LEGER',theme:'Réglementation VUL',d:1,
e:"La limitation de vitesse d'un VUL <3,5t sur autoroute est de :",
r:[{t:"110 km/h"},{t:"130 km/h",ok:true},{t:"120 km/h"},{t:"90 km/h"}],
x:"Les VUL de PTAC ≤ 3,5t sont soumis aux mêmes limitations de vitesse que les voitures particulières : 130 km/h sur autoroute (110 km/h par temps de pluie), 80 km/h sur routes nationales/départementales à double sens, 50 km/h en agglomération."},

{id:5792,prog:'LEGER',theme:'Réglementation VUL',d:2,
e:"Le transport de marchandises alimentaires sèches (épicerie) par VUL nécessite-t-il une réglementation sanitaire spécifique ?",
r:[{t:"Non, aucune réglementation spécifique"},{t:"Oui : respect du règlement (CE) 852/2004 sur l'hygiène alimentaire (nettoyage, séparation des produits…)",ok:true},{t:"Oui, uniquement si le CA dépasse 100 000 €"},{t:"Non si le transport est de moins de 50 km"}],
x:"Même les denrées sèches sont soumises au règlement CE 852/2004 sur l'hygiène des denrées alimentaires. Le transporteur doit : maintenir les véhicules propres et en bon état, éviter la contamination croisée, assurer la traçabilité, et former son personnel à l'hygiène. Un plan de nettoyage est recommandé."},

{id:5793,prog:'LEGER',theme:'Réglementation VUL',d:3,
e:"Le transport de fonds et de valeurs par VUL nécessite :",
r:[{t:"Uniquement une assurance renforcée"},{t:"Une autorisation préfectorale et le respect de la réglementation TFV (transport de fonds et valeurs)",ok:true},{t:"Aucune réglementation spécifique pour les petits montants"},{t:"Un véhicule blindé obligatoirement"}],
x:"Le transport de fonds et valeurs (TFV) est une activité réglementée par la loi du 12 juillet 1983. Il nécessite : une autorisation préfectorale, du personnel agréé et formé, des véhicules homologués, des procédures de sécurité strictes. Cette réglementation s'applique dès lors que le transport est rémunéré, indépendamment des montants."},

{id:5794,prog:'LEGER',theme:'Réglementation VUL',d:2,
e:"Le certificat d'immatriculation (carte grise) d'un VUL doit-il mentionner le PTAC ?",
r:[{t:"Non, seul le poids à vide est mentionné"},{t:"Oui, le PTAC est obligatoirement mentionné sur la carte grise",ok:true},{t:"Oui, uniquement pour les VUL de plus de 2,5t"},{t:"Non, c'est mentionné uniquement sur la plaque constructeur"}],
x:"La carte grise (certificat d'immatriculation) mentionne obligatoirement le PTAC (case F.2 ou F.3 selon le format). Cette information est déterminante pour vérifier si le permis B est suffisant, si le véhicule est soumis aux réglementations spécifiques (transport alimentaire, ADR, etc.), et pour calculer les taxes d'immatriculation."},

{id:5795,prog:'LEGER',theme:'Réglementation VUL',d:1,
e:"En cas de panne sur autoroute, le conducteur VUL doit en priorité :",
r:[{t:"Appeler son employeur avant tout"},{t:"Allumer les feux de détresse, s'arrêter sur la BAU, sortir du véhicule par la droite et mettre le gilet réfléchissant",ok:true},{t:"Poser immédiatement les triangles de signalisation"},{t:"Rester dans le véhicule et attendre les secours"}],
x:"La procédure d'urgence sur autoroute : 1) Feux de détresse, 2) S'arrêter sur la BAU, 3) Sortir IMMÉDIATEMENT du véhicule par la droite (côté opposé à la circulation), 4) Revêtir le gilet réfléchissant, 5) S'éloigner du véhicule vers la droite (au-delà de la glissière si possible), 6) Appeler le 15/17/18 ou les bornes d'appel d'urgence, 7) Poser les triangles à distance réglementaire (mais seulement si en sécurité)."},

{id:5796,prog:'LEGER',theme:'Réglementation VUL',d:2,
e:"Les temps de conduite hebdomadaires ne sont pas réglementés pour les VUL <3,5t, mais le droit du travail impose :",
r:[{t:"Aucune limite pour les conducteurs indépendants"},{t:"Une durée maximale de travail de 48h/semaine pour les salariés",ok:true},{t:"Une durée de conduite maximale de 8h/jour"},{t:"Un repos obligatoire de 12h entre deux services"}],
x:"Si le règlement 561/2006 ne s'applique pas aux VUL <3,5t (pas de chronotachygraphe obligatoire), le Code du travail s'applique aux conducteurs salariés : durée maximale de 48h/semaine (10h/jour), et la convention collective du transport routier peut prévoir des dispositions spécifiques."},

{id:5797,prog:'LEGER',theme:'Réglementation VUL',d:3,
e:"Le transport de déchets ménagers en régie municipale par des VUL est :",
r:[{t:"Soumis aux mêmes règles que le transport commercial"},{t:"Généralement exempté des réglementations de transport public car c'est un service public local",ok:true},{t:"Interdit aux VUL"},{t:"Soumis à une autorisation préfectorale spéciale"}],
x:"Les services de collecte de déchets ménagers en régie communale relèvent d'une activité de service public et non du transport public de marchandises pour compte d'autrui. Ils sont exemptés de l'obligation d'inscription au registre des transporteurs, mais doivent respecter les réglementations environnementales et de sécurité routière."},

{id:5798,prog:'LEGER',theme:'Réglementation VUL',d:1,
e:"La distance maximale de dépassement d'une charge sur l'arrière d'un VUL sans signalisation spéciale est de :",
r:[{t:"50 cm"},{t:"3 m du plan arrière du véhicule (signalisation obligatoire au-delà de 1 m)",ok:true},{t:"1 m maximum absolu"},{t:"2 m sans aucune restriction"}],
x:"Un dépassement arrière jusqu'à 1 m est toléré sans signalisation particulière. De 1 m à 3 m : la signalisation est obligatoire (dispositif rouge réfléchissant ou feu de couleur approprié). Au-delà de 3 m à l'arrière, un véhicule pilote est généralement requis (transport exceptionnel)."},

// ══════════════════════════════════════
// SÉCURITÉ ROUTIÈRE LÉGER — suite (30 questions)
// ══════════════════════════════════════
{id:5800,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"La distance de sécurité minimale sur autoroute entre deux véhicules à 130 km/h est d'environ :",
r:[{t:"50 m"},{t:"115 m (correspondant à 2 secondes de temps)",ok:true},{t:"200 m"},{t:"30 m"}],
x:"La distance de sécurité recommandée correspond à au moins 2 secondes de temps d'espacement (règle des 2 secondes). À 130 km/h, cela représente environ 72 m/s × 2 = soit environ 72 m minimum. La règle légale française (art. R.412-12) impose une distance au moins égale à la distance parcourue en 2 secondes, soit environ 72 m à 130 km/h."},

{id:5801,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"L'aquaplaning (hydroplanage) est un phénomène qui survient quand :",
r:[{t:"La pression des pneus est trop élevée"},{t:"Un film d'eau se crée entre le pneu et la chaussée, supprimant tout contact",ok:true},{t:"La vitesse est trop basse sur route mouillée"},{t:"Le VUL est trop chargé par temps de pluie"}],
x:"L'aquaplaning survient quand la vitesse est trop élevée sur route mouillée et que les pneus ne peuvent plus évacuer l'eau : un film d'eau s'interpose entre le pneu et la chaussée, supprimant toute adhérence. Le conducteur perd alors le contrôle de la direction et du freinage. Prévention : réduire la vitesse, vérifier la profondeur des sculptures (minimum légal 1,6 mm)."},

{id:5802,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"En cas de malaise au volant d'un collègue conducteur, la première action est :",
r:[{t:"Appeler le SAMU puis continuer à conduire"},{t:"S'arrêter en sécurité, mettre les feux de détresse, appeler le 15 (SAMU)",ok:true},{t:"Tenter de prendre le volant en marche"},{t:"Verser de l'eau sur le visage du conducteur"}],
x:"En cas de malaise : 1) Allumer les feux de détresse et s'arrêter IMMÉDIATEMENT en lieu sûr (BAU sur autoroute), 2) Couper le moteur et serrer le frein à main, 3) Appeler le 15 (SAMU) ou le 112, 4) Pratiquer les gestes de 1er secours si formé (libérer les voies aériennes, PLS si inconscient et respirant, RCP si arrêt cardiaque)."},

{id:5803,prog:'LEGER',theme:'Sécurité routière',d:3,
e:"La fatigue au volant est responsable d'environ quelle proportion des accidents mortels sur autoroute ?",
r:[{t:"5 %"},{t:"30 %",ok:true},{t:"50 %"},{t:"10 %"}],
x:"La somnolence au volant est impliquée dans environ 30 % des accidents mortels sur autoroute selon les statistiques de la Sécurité Routière. Les signes avant-coureurs incluent : bâillements répétés, yeux qui piquent, difficultés à maintenir sa file. Seul l'arrêt et le repos (sieste de 20 min + café) sont efficaces."},

{id:5804,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"Le gilet de sécurité haute visibilité dans un VUL :",
r:[{t:"Est uniquement recommandé"},{t:"Est obligatoire dans le véhicule et doit être revêtu avant de sortir sur la chaussée",ok:true},{t:"Est obligatoire uniquement sur autoroute"},{t:"N'est obligatoire que pour les conducteurs professionnels"}],
x:"Le gilet de sécurité haute visibilité est obligatoire dans tout véhicule à moteur (art. R.416-19 du Code de la route). Il doit être accessible (dans l'habitacle, pas dans le coffre) et revêtu avant de sortir du véhicule sur la chaussée ou ses abords. L'absence est une contravention de 2ème classe."},

{id:5805,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"La conduite sous l'effet de médicaments psychoactifs (somnifères, anxiolytiques) :",
r:[{t:"Est autorisée si la dose est médicale"},{t:"Peut être aussi dangereuse que l'alcool et doit être signalée par le médecin si contre-indiquée à la conduite",ok:true},{t:"Est sans danger si le conducteur se sent bien"},{t:"N'est sanctionnée que si accident avec blessé"}],
x:"Les médicaments de niveau 3 (pictogramme triangle rouge fond rouge) sont contre-indiqués à la conduite. Les niveaux 1 et 2 nécessitent une vigilance accrue. Le médecin prescripteur doit informer le patient des risques. La conduite sous l'effet de médicaments altérant les capacités est sanctionnable."},

{id:5806,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"L'angle mort lors d'un changement de file à droite est particulièrement dangereux car :",
r:[{t:"Il est toujours couvert par les rétroviseurs"},{t:"Il peut masquer un cycliste, une moto ou une voiture sur la voie de droite",ok:true},{t:"Il n'existe que pour les PL"},{t:"Il ne concerne que les manœuvres à reculons"}],
x:"L'angle mort côté droit est particulièrement dangereux en milieu urbain : il peut masquer des cyclistes, scooters, motos, ou voitures. La bonne pratique : regarder dans le rétroviseur droit, actionner le clignotant, tourner la tête pour vérifier physiquement l'angle mort, puis effectuer la manœuvre progressivement."},

{id:5807,prog:'LEGER',theme:'Sécurité routière',d:3,
e:"La règle des '2 secondes' pour la distance de sécurité est :",
r:[{t:"La distance de freinage à 50 km/h"},{t:"Le temps minimum entre le passage du véhicule devant et le passage du véhicule derrière devant un point fixe",ok:true},{t:"Le temps de réaction moyen d'un conducteur"},{t:"La durée légale de pause après 2h de conduite en VUL"}],
x:"La règle des 2 secondes : choisissez un repère fixe (panneau, arbre), quand le véhicule devant le dépasse, comptez 2 secondes. Si votre véhicule dépasse ce repère avant les 2 secondes, vous êtes trop près. Par mauvais temps ou la nuit, portez ce délai à 4 secondes. Pour les PL, 3-4 secondes sont recommandées."},

{id:5808,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"La limitation de vitesse en agglomération est de 50 km/h, mais elle peut être réduite à :",
r:[{t:"40 km/h dans les zones scolaires uniquement"},{t:"30 km/h dans les zones 30, zones résidentielles et zones de rencontre",ok:true},{t:"20 km/h uniquement dans les parcs"},{t:"Il n'y a pas de limitation inférieure à 50 km/h en agglomération"}],
x:"En agglomération, la limitation à 30 km/h s'applique dans les zones 30 (signalées par un panneau rond bleu/blanc), dans les zones résidentielles et zones de rencontre. La vitesse peut également être réduite par des arrêtés municipaux locaux. Depuis 2021, Paris a généralisé la zone 30 sur l'ensemble de la ville."},

{id:5809,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"Le système ESP (Electronic Stability Program) d'un VUL intervient en cas de :",
r:[{t:"Freinage d'urgence uniquement"},{t:"Perte de contrôle directionnelle (sous-virage ou survirage) en corrigeant automatiquement la trajectoire",ok:true},{t:"Démarrage sur sol glissant"},{t:"Changement de vitesse automatique"}],
x:"L'ESP détecte les situations de sous-virage (le véhicule part tout droit dans un virage) ou de survirage (l'arrière chasse) en comparant la trajectoire souhaitée (angle du volant) à la trajectoire réelle (capteurs gyroscopiques). Il corrige automatiquement en freinant sélectivement une ou plusieurs roues. Obligatoire sur tous les véhicules neufs depuis 2014."},


// ══════════════════════════════════════
// DROIT CIVIL — suite (20q)
// ══════════════════════════════════════
{id:5810,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"La force majeure en droit des contrats exonère le débiteur si l'événement est :",
r:[{t:"Simplement imprévisible"},{t:"Imprévisible, irrésistible et extérieur",ok:true},{t:"Dommageable pour l'une des parties"},{t:"Connu après la signature du contrat"}],
x:"La force majeure (art. 1218 du Code civil) exige 3 conditions cumulatives : l'événement doit être imprévisible lors de la conclusion du contrat, irrésistible (impossible d'exécuter même avec toutes les précautions), et extérieur à la partie qui l'invoque."},

{id:5811,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"La lettre de change est un titre par lequel :",
r:[{t:"La banque garantit un paiement"},{t:"Le tireur donne ordre au tiré de payer une somme à une échéance",ok:true},{t:"L'acheteur s'engage à payer dans 30 jours"},{t:"Le transporteur garantit la livraison"}],
x:"La lettre de change (traite) est un effet de commerce par lequel le tireur (créancier) ordonne au tiré (débiteur) de payer une somme déterminée à une date précise. Elle peut être endossée et escomptée auprès d'une banque pour obtenir des liquidités anticipées."},

{id:5812,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"Le bail commercial a une durée minimale de :",
r:[{t:"3 ans"},{t:"6 ans"},{t:"9 ans",ok:true},{t:"12 ans"}],
x:"Le bail commercial dit '3-6-9' a une durée minimale de 9 ans. Le locataire peut donner congé à chaque période triennale (3, 6 ans). En fin de bail, le locataire bénéficie d'un droit au renouvellement. Le propriétaire refusant doit verser une indemnité d'éviction."},

{id:5813,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"La saisie-attribution permet de :",
r:[{t:"Saisir les biens immobiliers du débiteur"},{t:"Bloquer et récupérer les sommes détenues par un tiers pour le débiteur (ex : banque)",ok:true},{t:"Vendre aux enchères les biens meubles"},{t:"Suspendre un contrat en cours"}],
x:"La saisie-attribution permet à un créancier muni d'un titre exécutoire de saisir les créances de son débiteur détenues par un tiers (notamment son compte bancaire). Les sommes sont attribuées immédiatement au créancier saisissant."},

{id:5814,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"La SAS (Société par Actions Simplifiée) se distingue par :",
r:[{t:"Un capital minimum de 37 000 €"},{t:"Une grande liberté statutaire et pas de capital minimum légal",ok:true},{t:"L'obligation d'un conseil d'administration"},{t:"Un minimum de 7 associés"}],
x:"La SAS est la forme sociale la plus flexible : pas de capital minimum légal (1 € suffit), grande liberté dans l'organisation de la gouvernance et des droits des associés. Elle est présidée par un président (personne physique ou morale) obligatoire."},

{id:5815,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"Un contrat électronique conclu entre professionnels est :",
r:[{t:"Nul car non signé manuellement"},{t:"Valide, avec la même force juridique qu'un contrat papier",ok:true},{t:"Valable uniquement pour les petits montants"},{t:"Soumis à validation notariale"}],
x:"Le contrat électronique a la même valeur juridique qu'un contrat papier (loi du 13 mars 2000) si la personne peut être identifiée et si l'intégrité du document est garantie. L'écrit électronique est admis comme preuve au même titre que l'écrit papier."},

{id:5816,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"La franchise commerciale est un contrat par lequel :",
r:[{t:"Le franchiseur vend des produits à prix réduit"},{t:"Le franchiseur concède à un franchisé l'utilisation de sa marque et savoir-faire contre redevance",ok:true},{t:"Deux entreprises s'associent en parts égales"},{t:"Un distributeur agit pour le compte d'un fabricant"}],
x:"La franchise est un accord par lequel le franchiseur (propriétaire d'une marque et d'un concept) accorde à des franchisés indépendants le droit d'exploiter son enseigne et son savoir-faire, en contrepartie d'un droit d'entrée et de redevances périodiques."},

{id:5817,prog:'LEGER',theme:'Droit civil & commercial',d:3,
e:"Le contrat de commission de transport engage le commissionnaire :",
r:[{t:"Uniquement comme intermédiaire sans responsabilité"},{t:"Personnellement sur l'exécution du transport, même s'il sous-traite",ok:true},{t:"Uniquement si le transporteur est défaillant"},{t:"Dans la limite du prix du transport"}],
x:"Le commissionnaire de transport (art. L.132-3 Code de commerce) s'engage personnellement sur l'exécution du transport vis-à-vis du donneur d'ordre, même s'il confie l'exécution à des sous-traitants. Il répond des fautes de ses substitués comme de ses propres fautes."},

{id:5818,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"L'enrichissement sans cause (enrichissement injustifié) permet à l'appauvri de :",
r:[{t:"Réclamer des dommages et intérêts"},{t:"Agir en restitution contre celui qui s'est enrichi à ses dépens sans justification",ok:true},{t:"Annuler tout contrat déséquilibré"},{t:"Récupérer uniquement les frais engagés"}],
x:"L'enrichissement injustifié (art. 1303 du Code civil) permet à une personne appauvrie de réclamer restitution à celui qui s'est enrichi à ses dépens sans cause légitime. L'indemnité est limitée à la moindre des deux valeurs : enrichissement ou appauvrissement."},

{id:5819,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"Le droit de rétraction de 14 jours s'applique aux :",
r:[{t:"Achats en magasin"},{t:"Achats à distance ou hors établissement entre professionnel et consommateur",ok:true},{t:"Contrats entre professionnels uniquement"},{t:"Achats de produits alimentaires en ligne"}],
x:"Le droit de rétractation de 14 jours (directive 2011/83/UE) s'applique aux contrats conclus à distance ou hors établissement entre un professionnel et un consommateur. Il court à compter de la réception du bien ou de la conclusion du contrat pour les services."},

{id:5820,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"L'action directe du sous-traitant contre le maître d'ouvrage n'est possible que si :",
r:[{t:"Le sous-traitant l'exige par écrit"},{t:"Le sous-traitant a été préalablement accepté et ses conditions de paiement agréées",ok:true},{t:"Le marché dépasse 50 000 €"},{t:"La sous-traitance est déclarée en préfecture"}],
x:"L'action directe du sous-traitant (loi 31/12/1975) est conditionnée à l'acceptation préalable du sous-traitant par le maître de l'ouvrage ET à l'agrément de ses conditions de paiement. Sans ces formalités, l'action directe est irrecevable."},

{id:5821,prog:'LEGER',theme:'Droit civil & commercial',d:3,
e:"La simulation contractuelle (acte apparent vs acte secret) produit les effets suivants :",
r:[{t:"Les deux actes sont nuls automatiquement"},{t:"L'acte secret prime entre les parties ; l'acte apparent est opposable aux tiers de bonne foi",ok:true},{t:"L'acte apparent prime toujours sur l'acte secret"},{t:"Aucun des deux actes n'est opposable"}],
x:"En cas de simulation (art. 1201 du Code civil), l'acte secret (contre-lettre) prime entre les parties contractantes. Mais les tiers de bonne foi peuvent se prévaloir de l'acte apparent. La simulation frauduleuse (pour tromper le fisc, les créanciers…) est sanctionnée pénalement."},

{id:5822,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"La clause de non-concurrence lors d'une cession de fonds de commerce est valide si :",
r:[{t:"Elle est illimitée géographiquement"},{t:"Elle est limitée dans le temps, géographiquement et à des activités similaires",ok:true},{t:"Elle porte sur toutes activités commerciales"},{t:"Elle est approuvée par le tribunal de commerce"}],
x:"La clause de non-concurrence dans une cession de fonds doit être : limitée dans le temps (2 à 5 ans généralement), géographiquement délimitée (zone de chalandise raisonnable), et limitée aux activités similaires au fonds cédé. Sans ces limitations cumulatives, elle serait nulle comme contraire à la liberté du commerce."},

{id:5823,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"La garantie des vices cachés permet à l'acheteur d'agir dans un délai de :",
r:[{t:"6 mois à compter de la découverte du vice"},{t:"2 ans à compter de la découverte du vice",ok:true},{t:"5 ans à compter de la vente"},{t:"1 an à compter de la livraison"}],
x:"L'action en garantie des vices cachés (art. 1648 du Code civil) doit être intentée dans les 2 ans à compter de la découverte du vice. Ce délai de 2 ans est un délai de forclusion (non susceptible de suspension). L'acheteur peut demander la résolution de la vente ou une réduction du prix (action estimatoire)."},

{id:5824,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"Le privilège du vendeur de fonds de commerce garantit :",
r:[{t:"Le paiement des dettes du vendeur"},{t:"Le recouvrement du prix de vente en cas de revente du fonds ou de liquidation",ok:true},{t:"La qualité des marchandises vendues"},{t:"Le respect de la clause de non-concurrence"}],
x:"Le vendeur d'un fonds de commerce bénéficie d'un privilège sur le fonds vendu pour garantir le paiement du prix si le paiement est différé. Ce privilège doit être inscrit au greffe du tribunal de commerce dans les 15 jours de l'acte de vente pour être opposable aux tiers."},

{id:5825,prog:'LEGER',theme:'Droit civil & commercial',d:3,
e:"L'arbitrage commercial international présente comme avantage clé par rapport aux tribunaux étatiques :",
r:[{t:"Sa gratuité totale"},{t:"L'exécution de la sentence dans 170+ États via la Convention de New York (1958)",ok:true},{t:"Sa rapidité systématique"},{t:"L'absence de frais d'avocat"}],
x:"La Convention de New York (1958) sur la reconnaissance et l'exécution des sentences arbitrales étrangères permet l'exécution des sentences dans 170+ États signataires. C'est l'avantage majeur de l'arbitrage international : une sentence peut être exécutée bien plus facilement qu'un jugement étatique à l'international."},

{id:5826,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"Le nantissement du fonds de commerce permet au commerçant de :",
r:[{t:"Vendre son fonds sans accord des créanciers"},{t:"Affecter son fonds en garantie d'un emprunt tout en continuant à l'exploiter",ok:true},{t:"Suspendre le paiement de ses dettes"},{t:"Transférer la propriété temporairement"}],
x:"Le nantissement de fonds de commerce (art. L.142-1 du Code de commerce) est une sûreté mobilière permettant d'affecter le fonds en garantie d'un crédit sans en perdre la possession. Le créancier bénéficie d'un droit de préférence sur le prix de vente du fonds en cas de défaillance du débiteur."},

{id:5827,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"La mise en demeure est nécessaire pour :",
r:[{t:"Annuler un contrat"},{t:"Faire courir les intérêts moratoires et préparer une action judiciaire",ok:true},{t:"Saisir les biens du débiteur directement"},{t:"Modifier les termes d'un contrat"}],
x:"La mise en demeure (LRAR ou acte d'huissier) est un préalable souvent obligatoire avant toute action judiciaire. Elle fait courir les intérêts de retard, interrompt la prescription, et constitue la preuve que le débiteur a été informé de son obligation et n'y a pas satisfait."},

{id:5828,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"L'indemnité forfaitaire de 40 € pour frais de recouvrement est due :",
r:[{t:"Uniquement sur demande du créancier"},{t:"Automatiquement dès le 1er jour de retard de paiement entre professionnels",ok:true},{t:"Uniquement pour les factures supérieures à 1 000 €"},{t:"Après une mise en demeure formelle"}],
x:"L'indemnité forfaitaire de 40 € (art. D.441-5 du Code de commerce) est due de plein droit dès le 1er jour de retard de paiement entre professionnels, sans qu'il soit nécessaire d'envoyer une mise en demeure. Si les frais réels dépassent 40 €, une indemnisation complémentaire peut être réclamée."},

{id:5829,prog:'LEGER',theme:'Droit civil & commercial',d:3,
e:"La cession Dailly (bordereau) est opposable à la banque cessionnaire :",
r:[{t:"Dès l'accord du débiteur cédé"},{t:"Dès la signature du bordereau par le cédant",ok:true},{t:"Après notification au débiteur cédé"},{t:"Après enregistrement au greffe"}],
x:"La cession Dailly (loi du 2 janvier 1981) est opposable à la banque cessionnaire dès la signature du bordereau par le cédant. Pour être opposable au débiteur cédé (l'entreprise qui doit payer la créance), une notification est nécessaire. Elle ne nécessite pas l'accord du débiteur, ce qui la distingue de la cession de droit commun."},

// ══════════════════════════════════════
// DROIT SOCIAL — 25 questions supplémentaires
// ══════════════════════════════════════
{id:5840,prog:'LEGER',theme:'Droit social',d:1,
e:"L'indemnité légale de licenciement pour 10 ans d'ancienneté est de :",
r:[{t:"2 mois de salaire"},{t:"2,5 mois de salaire",ok:true},{t:"5 mois de salaire"},{t:"10 mois de salaire"}],
x:"Indemnité légale = 1/4 de mois par année d'ancienneté pour les 10 premières années. Pour 10 ans : 10 × 1/4 = 2,5 mois de salaire de référence. À partir de la 11ème année, le taux passe à 1/3 de mois. La convention collective peut prévoir des montants plus favorables."},

{id:5841,prog:'LEGER',theme:'Droit social',d:2,
e:"Le CPF (Compte Personnel de Formation) est alimenté à hauteur de :",
r:[{t:"300 €/an"},{t:"500 €/an pour un salarié à temps plein (800 € pour les peu qualifiés)",ok:true},{t:"1 000 €/an systématiquement"},{t:"En fonction du salaire brut"}],
x:"Le CPF est alimenté à 500 €/an pour les salariés à temps plein ayant au moins un niveau bac (plafond 5 000 €), et à 800 €/an pour les salariés sans qualification (plafond 8 000 €). Les droits sont utilisables pour financer des formations certifiantes de son choix."},

{id:5842,prog:'LEGER',theme:'Droit social',d:2,
e:"Le contrat d'apprentissage est :",
r:[{t:"Un CDI avec formation intégrée"},{t:"Un CDD (ou CDI depuis 2018) associant formation en CFA et pratique en entreprise",ok:true},{t:"Un stage longue durée rémunéré"},{t:"Un contrat réservé aux moins de 18 ans"}],
x:"Le contrat d'apprentissage est un contrat de travail en alternance associant formation théorique dans un CFA et formation pratique en entreprise. Depuis la loi de 2018, il peut être un CDI. La rémunération est un pourcentage du SMIC selon l'âge et l'année de formation."},

{id:5843,prog:'LEGER',theme:'Droit social',d:3,
e:"La requalification d'un contrat de prestation de service en contrat de travail repose sur :",
r:[{t:"Le montant de la rémunération"},{t:"L'existence d'un lien de subordination juridique",ok:true},{t:"Le nombre d'heures travaillées"},{t:"La durée de la relation commerciale"}],
x:"Le lien de subordination juridique est le critère déterminant du contrat de travail : il existe quand une personne effectue un travail sous l'autorité d'un employeur qui lui donne des ordres, contrôle l'exécution et peut sanctionner les manquements. La dénomination du contrat ne suffit pas."},

{id:5844,prog:'LEGER',theme:'Droit social',d:2,
e:"La durée minimale légale du temps partiel est de :",
r:[{t:"20h par semaine"},{t:"24h par semaine (sauf exceptions légales ou accord de branche)",ok:true},{t:"Toute durée inférieure à 35h"},{t:"Il n'y a pas de minimum légal"}],
x:"La durée minimale du temps partiel est de 24 heures hebdomadaires (art. L.3123-7 du Code du travail). Des exceptions sont prévues : à la demande écrite du salarié, par accord de branche, pour les étudiants de moins de 26 ans. En dessous de 24h, le salarié peut refuser sans motif."},

{id:5845,prog:'LEGER',theme:'Droit social',d:1,
e:"Le DUER (Document Unique d'Évaluation des Risques) est obligatoire :",
r:[{t:"À partir de 10 salariés"},{t:"Dès l'embauche du 1er salarié",ok:true},{t:"À partir de 50 salariés"},{t:"Uniquement dans les secteurs dangereux"}],
x:"Le DUER est obligatoire pour toute entreprise dès qu'elle emploie au moins 1 salarié (art. R.4121-1 du Code du travail). Il recense tous les risques professionnels identifiés et les mesures de prévention. Il doit être mis à jour au moins annuellement et accessible aux salariés."},

{id:5846,prog:'LEGER',theme:'Droit social',d:2,
e:"Le licenciement d'une salariée enceinte est :",
r:[{t:"Autorisé pour faute grave"},{t:"Interdit pendant la grossesse et les 10 semaines suivant le congé maternité, sauf faute grave sans lien avec la grossesse",ok:true},{t:"Possible avec accord de l'inspecteur du travail"},{t:"Autorisé pour motif économique"}],
x:"La salariée enceinte bénéficie d'une protection absolue : licenciement interdit pendant la grossesse et 10 semaines après le congé maternité. Seule exception : faute grave non liée à la grossesse ou impossibilité de maintenir le contrat pour un motif étranger à la grossesse (ex : fermeture totale de l'entreprise)."},

{id:5847,prog:'LEGER',theme:'Droit social',d:3,
e:"Le principe de faveur en droit du travail signifie que :",
r:[{t:"La loi prime toujours sur la convention collective"},{t:"En cas de conflit entre deux normes, s'applique celle qui est la plus favorable au salarié",ok:true},{t:"Les accords d'entreprise priment toujours sur la loi"},{t:"Le salarié choisit librement la norme applicable"}],
x:"Le principe de faveur implique qu'en cas de conflit entre deux normes (loi vs convention collective, convention vs accord d'entreprise), c'est la règle la plus favorable au salarié qui s'applique. Les ordonnances de 2017 ont toutefois introduit des dérogations importantes permettant aux accords d'entreprise de primer sur la convention collective dans certains domaines."},

{id:5848,prog:'LEGER',theme:'Droit social',d:2,
e:"La protection contre le licenciement en cas d'arrêt maladie ordinaire permet :",
r:[{t:"Un licenciement interdit pendant toute la durée de l'arrêt"},{t:"Un licenciement possible pour cause réelle étrangère à la maladie, ou si l'absence perturbe l'entreprise et nécessite remplacement définitif",ok:true},{t:"Un licenciement interdit pendant 6 mois"},{t:"Aucune protection spécifique"}],
x:"Le salarié en arrêt maladie ordinaire bénéficie d'une protection relative : il peut être licencié pour motif étranger à la maladie (faute, motif économique) ou si son absence prolongée perturbe l'entreprise au point de nécessiter son remplacement définitif. L'employeur doit chercher des alternatives avant de licencier dans ce cas."},

{id:5849,prog:'LEGER',theme:'Droit social',d:1,
e:"Le CSE (Comité Social et Économique) est obligatoire dans les entreprises de :",
r:[{t:"Plus de 50 salariés"},{t:"11 salariés et plus",ok:true},{t:"Plus de 20 salariés"},{t:"Toutes les entreprises quelle que soit leur taille"}],
x:"Le CSE est obligatoire dans toutes les entreprises d'au moins 11 salariés. Il a fusionné en 2017 les anciens DP, CE et CHSCT. Ses attributions sont plus limitées pour les entreprises de 11 à 49 salariés que pour celles de 50 salariés et plus."},

{id:5850,prog:'LEGER',theme:'Droit social',d:2,
e:"La prime d'ancienneté dans la convention collective des transports routiers est versée à partir de :",
r:[{t:"1 an"},{t:"3 ans",ok:true},{t:"5 ans"},{t:"Il n'y a pas de prime d'ancienneté dans les transports"}],
x:"La CCNTR prévoit une prime d'ancienneté à partir de 3 ans de service continu dans la même entreprise. Son montant augmente progressivement selon les barèmes de la convention. Elle est calculée en pourcentage du salaire de base conventionnel."},

{id:5851,prog:'LEGER',theme:'Droit social',d:3,
e:"La clause de dédit-formation oblige le salarié à :",
r:[{t:"Rembourser intégralement les frais en cas d'écart de conduite"},{t:"Rembourser les frais de formation s'il quitte l'entreprise avant un délai convenu",ok:true},{t:"Suivre toutes les formations proposées"},{t:"Rester dans l'entreprise définitivement"}],
x:"La clause de dédit-formation (validée par la Cour de cassation) permet à l'employeur de récupérer les frais de formation si le salarié quitte l'entreprise avant un délai déterminé. Conditions de validité : rédigée avant la formation, délai raisonnable, montant dégressif dans le temps, non abusive."},

{id:5852,prog:'LEGER',theme:'Droit social',d:2,
e:"Le travailleur indépendant auto-entrepreneur cotise à la retraite via :",
r:[{t:"Le régime général des salariés"},{t:"La SSI (Sécurité Sociale des Indépendants), gérée par l'URSSAF",ok:true},{t:"Une caisse de retraite privée obligatoire"},{t:"Il n'y a pas de cotisation retraite obligatoire"}],
x:"Les auto-entrepreneurs cotisent au régime de la Sécurité Sociale des Indépendants (SSI), anciennement RSI, désormais géré par le réseau URSSAF. Leurs cotisations retraite (et autres cotisations sociales) sont calculées en pourcentage de leur chiffre d'affaires réel."},

{id:5853,prog:'LEGER',theme:'Droit social',d:1,
e:"La durée des congés payés annuels légaux pour un salarié à temps plein est de :",
r:[{t:"4 semaines (20 jours ouvrables)"},{t:"5 semaines (25 jours ouvrés ou 30 jours ouvrables)",ok:true},{t:"6 semaines"},{t:"4 semaines pour les ouvriers, 5 semaines pour les cadres"}],
x:"Les congés payés légaux sont de 2,5 jours ouvrables par mois de travail effectif, soit 30 jours ouvrables (5 semaines) par an. La prise de congés doit respecter les règles d'ordre fixées par l'employeur après consultation du CSE. Au moins 12 jours ouvrables consécutifs doivent être pris entre le 1er mai et le 31 octobre."},

{id:5854,prog:'LEGER',theme:'Droit social',d:2,
e:"La portabilité de la mutuelle d'entreprise permet à l'ancien salarié de :",
r:[{t:"Conserver sa mutuelle en payant lui-même les cotisations"},{t:"Maintenir sa couverture gratuitement pendant la durée du chômage (max 12 mois)",ok:true},{t:"Adhérer à la mutuelle de son futur employeur sans délai de carence"},{t:"Transférer ses droits à un membre de sa famille"}],
x:"La portabilité (art. L.911-8 du Code de la sécurité sociale) permet aux anciens salariés dont le contrat a été rompu (sauf faute lourde) de conserver les garanties santé et prévoyance de l'entreprise pendant le chômage, gratuitement, dans la limite de 12 mois. Les cotisations sont mutualisées entre actifs et anciens salariés."},

{id:5855,prog:'LEGER',theme:'Droit social',d:3,
e:"Le plan de sauvegarde de l'emploi (PSE) est obligatoire pour les entreprises de 50+ salariés qui licencient :",
r:[{t:"Plus de 5 salariés sur 30 jours"},{t:"Au moins 10 salariés sur 30 jours pour motif économique",ok:true},{t:"Plus de 20 salariés sur 3 mois"},{t:"Dès le 1er licenciement économique"}],
x:"Le PSE (plan de sauvegarde de l'emploi) est obligatoire pour les entreprises d'au moins 50 salariés qui envisagent de licencier au moins 10 salariés sur 30 jours pour motif économique. Il doit prévoir des mesures de reclassement interne et externe, des formations et des aides."},

{id:5856,prog:'LEGER',theme:'Droit social',d:2,
e:"L'astreinte dans le cadre du travail est :",
r:[{t:"Une période de repos complet"},{t:"Une période de disponibilité hors lieu de travail ouvrant droit à contrepartie",ok:true},{t:"Une sanction disciplinaire"},{t:"Une période de formation obligatoire"}],
x:"L'astreinte (art. L.3121-9 du Code du travail) est une période pendant laquelle le salarié doit être en mesure d'intervenir si nécessaire, sans être sur son lieu de travail. Elle n'est pas du temps de travail effectif (sauf pendant les interventions) mais ouvre droit à une contrepartie financière ou en repos définie par accord collectif ou l'employeur."},

{id:5857,prog:'LEGER',theme:'Droit social',d:1,
e:"Le congé de paternité et d'accueil de l'enfant est actuellement de :",
r:[{t:"11 jours calendaires"},{t:"25 jours calendaires (hors congé de naissance)"},{t:"28 jours calendaires au total",ok:true},{t:"7 jours ouvrés"}],
x:"Depuis le 1er juillet 2021, le congé total est de 28 jours : 3 jours de congé de naissance (payés par l'employeur) + 25 jours de congé paternité (indemnisés par la CPAM). Les 4 premiers jours du congé paternité sont obligatoires. En cas de naissance multiple : 32 jours au total (35 en comptant les 3 jours de naissance)."},

{id:5858,prog:'LEGER',theme:'Droit social',d:2,
e:"La mutuelle d'entreprise est obligatoire pour tous les salariés du secteur privé depuis :",
r:[{t:"2012"},{t:"2016",ok:true},{t:"2014"},{t:"2018"}],
x:"La généralisation de la complémentaire santé collective obligatoire est en vigueur depuis le 1er janvier 2016 (ANI 2013). L'employeur doit prendre en charge au minimum 50 % de la cotisation. Le salarié peut demander une dispense dans certains cas (déjà couvert par ailleurs, CDD court…)."},

{id:5859,prog:'LEGER',theme:'Droit social',d:3,
e:"La retraite complémentaire AGIRC-ARRCO (fusion 2019) est calculée en :",
r:[{t:"Annuités de cotisations"},{t:"Points acquis tout au long de la carrière, convertis en rente à la retraite",ok:true},{t:"Pourcentage du dernier salaire"},{t:"Durée de cotisation uniquement"}],
x:"L'AGIRC-ARRCO fonctionne depuis 2019 en un régime unique par points. Chaque euro cotisé achète des points (selon la valeur du point en vigueur). À la retraite, les points accumulés sont multipliés par la valeur de service du point pour calculer la pension annuelle. Ce régime unifié remplace les deux régimes distincts AGIRC (cadres) et ARRCO (non-cadres)."},

// ══════════════════════════════════════
// GESTION FINANCIÈRE — 25 questions supplémentaires
// ══════════════════════════════════════
{id:5860,prog:'LEGER',theme:'Gestion financière',d:1,
e:"Le résultat net comptable est calculé comme :",
r:[{t:"CA — charges variables"},{t:"(Résultat d'exploitation + Résultat financier + Résultat exceptionnel) — IS",ok:true},{t:"CA — charges fixes"},{t:"EBE — amortissements"}],
x:"Résultat net = Résultat d'exploitation + Résultat financier + Résultat exceptionnel — IS — Participation. C'est le résultat final après toutes les déductions. Il peut être distribué (dividendes), mis en réserve ou reporté à nouveau."},

{id:5861,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Le taux de rotation des stocks se calcule comme :",
r:[{t:"CA / Stock moyen"},{t:"Coût des ventes / Stock moyen",ok:true},{t:"Stock final / Stock initial"},{t:"Marge brute / Stock moyen"}],
x:"Taux de rotation = Coût des ventes / Stock moyen. Plus ce taux est élevé, plus les stocks se renouvellent fréquemment. Pour le délai en jours : Stock moyen / Coût des ventes × 360. Un taux faible indique des stocks qui stagnent et immobilisent de la trésorerie."},

{id:5862,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Le BFR augmente lorsque :",
r:[{t:"Les clients paient plus vite"},{t:"Les délais de paiement clients augmentent ou les délais fournisseurs diminuent",ok:true},{t:"L'entreprise réduit ses stocks"},{t:"L'entreprise reçoit une subvention"}],
x:"BFR = (Stocks + Créances clients) — Dettes fournisseurs et sociales. Le BFR augmente quand les créances clients s'allongent, quand les stocks grossissent, ou quand les fournisseurs sont payés plus rapidement. Une hausse du BFR consomme de la trésorerie."},

{id:5863,prog:'LEGER',theme:'Gestion financière',d:1,
e:"Un taux de marge sur coûts variables de 40 % avec un CA de 50 000 € génère une MCV de :",
r:[{t:"40 000 €"},{t:"20 000 €",ok:true},{t:"10 000 €"},{t:"30 000 €"}],
x:"MCV = CA × Taux MCV = 50 000 × 40 % = 20 000 €. La MCV représente la contribution au financement des charges fixes. Si les CF sont inférieures à 20 000 €, l'entreprise est bénéficiaire."},

{id:5864,prog:'LEGER',theme:'Gestion financière',d:3,
e:"La valeur actuelle nette (VAN) d'un investissement est positive quand :",
r:[{t:"L'investissement est financé par emprunt"},{t:"Les flux de trésorerie futurs actualisés dépassent le montant de l'investissement initial",ok:true},{t:"Le délai de récupération est inférieur à 2 ans"},{t:"Le taux d'actualisation est nul"}],
x:"La VAN = Σ (flux de trésorerie futurs actualisés) — investissement initial. Une VAN > 0 signifie que l'investissement crée de la valeur : les gains actualisés dépassent l'investissement. C'est le principal critère de sélection des investissements en finance d'entreprise."},

{id:5865,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Le ratio de liquidité générale de 0,8 signifie :",
r:[{t:"Situation financière saine"},{t:"L'actif circulant couvre 80 % des dettes CT — situation potentiellement préoccupante",ok:true},{t:"80 % des actifs sont liquides"},{t:"La marge brute est de 80 %"}],
x:"Liquidité générale = Actif circulant / Dettes CT. Un ratio < 1 signifie que les dettes à court terme dépassent l'actif circulant : l'entreprise ne peut pas couvrir ses dettes CT avec ses seuls actifs circulants. Situation préoccupante si elle se prolonge, mais gérable à court terme avec un FRNG positif."},

{id:5866,prog:'LEGER',theme:'Gestion financière',d:2,
e:"La marge opérationnelle (taux de résultat d'exploitation) d'une entreprise est de 7 %. Pour un CA de 180 000 €, le résultat d'exploitation est de :",
r:[{t:"7 000 €"},{t:"12 600 €",ok:true},{t:"25 714 €"},{t:"1 260 €"}],
x:"Résultat d'exploitation = CA × Taux = 180 000 × 7 % = 12 600 €. Ce résultat est avant la déduction des charges financières (intérêts d'emprunt), des résultats exceptionnels et de l'IS."},

{id:5867,prog:'LEGER',theme:'Gestion financière',d:1,
e:"L'EBITDA correspond en français à :",
r:[{t:"Le résultat net avant IS"},{t:"L'Excédent Brut d'Exploitation (EBE)",ok:true},{t:"Le chiffre d'affaires hors taxes"},{t:"La capacité d'autofinancement"}],
x:"L'EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization) est l'équivalent de l'EBE (Excédent Brut d'Exploitation) en normes françaises. Il mesure la performance opérationnelle brute avant les choix comptables (amortissements), financiers (intérêts) et fiscaux (IS)."},

{id:5868,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Un FRNG de 8 000 € et un BFR de 12 000 € donnent une trésorerie nette de :",
r:[{t:"+20 000 €"},{t:"–4 000 €",ok:true},{t:"+4 000 €"},{t:"0 €"}],
x:"Trésorerie nette = FRNG — BFR = 8 000 — 12 000 = —4 000 €. Trésorerie négative : l'entreprise dépend de financements bancaires à court terme (découvert). Elle doit soit augmenter son FRNG (nouveaux apports, emprunts LT) soit réduire son BFR (délais clients plus courts, délais fournisseurs plus longs)."},

{id:5869,prog:'LEGER',theme:'Gestion financière',d:3,
e:"Le goodwill (survaleur) inscrit au bilan lors d'une acquisition représente :",
r:[{t:"La valeur de la marque enregistrée"},{t:"L'écart entre le prix d'acquisition et la valeur nette des actifs identifiables",ok:true},{t:"La valeur des brevets déposés"},{t:"Les stocks de l'entreprise achetée"}],
x:"Le goodwill (ou fonds commercial) = Prix payé — Juste valeur des actifs nets identifiables. Il représente la réputation, les relations clients, les savoir-faire non comptabilisés. En normes françaises il s'amortit. En IFRS, il est soumis à un test de dépréciation annuel (impairment test)."},

{id:5870,prog:'LEGER',theme:'Gestion financière',d:2,
e:"La provision pour créances douteuses est constituée lorsque :",
r:[{t:"Un client paie avec plus de 30 jours de retard"},{t:"Il existe un risque sérieux et probable de non-recouvrement d'une créance",ok:true},{t:"Le CA baisse de plus de 10 %"},{t:"Un concurrent important apparaît sur le marché"}],
x:"Une provision pour créances douteuses est comptabilisée quand une créance présente un risque probable de non-recouvrement (client en difficulté, procédure collective, litige…). Elle réduit le résultat imposable. Si la créance est finalement recouvrée, la provision est reprise en résultat. Si elle est perdue, elle est passée en perte déductible."},

{id:5871,prog:'LEGER',theme:'Gestion financière',d:2,
e:"L'affacturage (factoring) est un mécanisme permettant de :",
r:[{t:"Acheter les dettes de ses fournisseurs"},{t:"Céder ses créances clients à un factor contre paiement immédiat",ok:true},{t:"Émettre des obligations sur le marché"},{t:"Bénéficier d'un crédit bancaire long terme"}],
x:"L'affacturage permet à une entreprise de céder ses créances clients à un factor qui avance les fonds immédiatement (moins sa commission). Le factor se charge ensuite du recouvrement. Avantages : trésorerie immédiate, externalisation du recouvrement. Inconvénients : coût élevé, perte de contact direct avec le client."},

{id:5872,prog:'LEGER',theme:'Gestion financière',d:3,
e:"Le coefficient d'exploitation d'une entreprise de transport VUL à 95 % signifie :",
r:[{t:"95 % des véhicules sont en activité"},{t:"95 % du CA est absorbé par les charges — marge de 5 % seulement",ok:true},{t:"L'entreprise est très rentable"},{t:"L'entreprise est en déficit"}],
x:"Coefficient d'exploitation = Charges totales / CA × 100. Un coefficient de 95 % laisse une marge de 5 %, ce qui est faible. Dans le transport VUL, les coefficients entre 88 % et 94 % sont considérés comme normaux. Au-delà de 95 %, la rentabilité est fragile. Au-delà de 100 %, l'entreprise est déficitaire."},

{id:5873,prog:'LEGER',theme:'Gestion financière',d:1,
e:"Le délai de récupération d'un investissement (payback) de 18 000 € générant 6 000 €/an est de :",
r:[{t:"1 an"},{t:"3 ans",ok:true},{t:"18 ans"},{t:"5 ans"}],
x:"DRI = Investissement / Flux annuel = 18 000 / 6 000 = 3 ans. Après 3 ans, l'investissement est intégralement remboursé par les flux générés. C'est un critère simple de sélection des investissements, même si il ne tient pas compte de la valeur temps de l'argent (contrairement à la VAN)."},

{id:5874,prog:'LEGER',theme:'Gestion financière',d:2,
e:"La valeur ajoutée d'une entreprise se répartit entre :",
r:[{t:"Actionnaires et banques uniquement"},{t:"Salariés (salaires), État (impôts), créanciers (intérêts) et actionnaires (dividendes + réserves)",ok:true},{t:"Uniquement les charges d'exploitation"},{t:"Le dirigeant et les seuls investisseurs"}],
x:"La valeur ajoutée = richesse créée par l'entreprise = CA — Consommations intermédiaires. Elle est répartie entre : salariés (rémunérations), État (impôts et taxes), créanciers (charges financières) et apporteurs de capitaux (dividendes + autofinancement). L'analyse de cette répartition reflète la politique sociale et financière."},

{id:5875,prog:'LEGER',theme:'Gestion financière',d:3,
e:"La structure de financement optimale d'une entreprise de transport cherche à :",
r:[{t:"Maximiser l'endettement pour profiter de l'effet de levier"},{t:"Équilibrer fonds propres et dettes pour optimiser le coût du capital tout en maîtrisant le risque financier",ok:true},{t:"Financer uniquement par fonds propres pour éviter tout endettement"},{t:"Minimiser les capitaux propres pour réduire les obligations vis-à-vis des actionnaires"}],
x:"La structure optimale de financement (théorie de Modigliani-Miller avec fiscalité) consiste à utiliser l'endettement pour profiter de la déductibilité des intérêts (économie fiscale), tout en évitant un endettement excessif qui augmenterait le risque de faillite. Dans la pratique, les entreprises de transport visent une autonomie financière de 30 à 40 %."},

// ══════════════════════════════════════
// RÉGLEMENTATION VUL — 25 questions supplémentaires
// ══════════════════════════════════════
{id:5880,prog:'LEGER',theme:'Réglementation VUL',d:1,
e:"La vignette Crit'Air est délivrée par :",
r:[{t:"La Préfecture"},{t:"Le Ministère de la Transition Écologique via certificat-air.gouv.fr",ok:true},{t:"La Chambre de Commerce"},{t:"L'assureur du véhicule"}],
x:"La vignette Crit'Air est un certificat officiel délivré par le Ministère de la Transition Écologique sur le site certificat-air.gouv.fr (1,84 € de frais d'envoi). Elle est attribuée selon les émissions du véhicule (motorisation, norme Euro) et est obligatoire pour circuler dans les ZFE-m."},

{id:5881,prog:'LEGER',theme:'Réglementation VUL',d:2,
e:"Un VUL frigorifique doit posséder une attestation de conformité ATP valide, dont la durée initiale est de :",
r:[{t:"1 an"},{t:"3 ans",ok:true},{t:"5 ans"},{t:"10 ans"}],
x:"L'attestation ATP (Accord ATP sur le transport des denrées périssables) est valable 3 ans pour les nouvelles caisses isothermes et réfrigérantes. Le renouvellement est possible tous les 3 ans après contrôle de l'efficacité thermique par un organisme agréé."},

{id:5882,prog:'LEGER',theme:'Réglementation VUL',d:2,
e:"Le transport d'animaux vivants par VUL est réglementé par :",
r:[{t:"Aucune réglementation spécifique"},{t:"Le règlement (CE) 1/2005 sur la protection des animaux pendant le transport",ok:true},{t:"Uniquement la convention CITES pour les espèces protégées"},{t:"Le code rural uniquement pour les bovins"}],
x:"Le règlement CE 1/2005 impose des conditions strictes pour le transport d'animaux vertébrés vivants : formation des conducteurs, agrément des transporteurs, espace suffisant, ventilation, eau, alimentation, durées de transport limitées selon les espèces. Les transporteurs commerciaux doivent être agréés par les autorités vétérinaires."},

{id:5883,prog:'LEGER',theme:'Réglementation VUL',d:1,
e:"La vitesse maximale d'un VUL <3,5t sur autoroute est de :",
r:[{t:"110 km/h"},{t:"130 km/h",ok:true},{t:"120 km/h"},{t:"90 km/h"}],
x:"Les VUL de PTAC ≤ 3,5t sont soumis aux mêmes limitations que les voitures particulières : 130 km/h sur autoroute (110 km/h par temps de pluie), 80 km/h sur routes nationales/départementales à double sens, 50 km/h en agglomération."},

{id:5884,prog:'LEGER',theme:'Réglementation VUL',d:2,
e:"Le contrôle technique d'un VUL professionnel doit avoir lieu tous les :",
r:[{t:"1 an"},{t:"2 ans",ok:true},{t:"3 ans"},{t:"4 ans"}],
x:"Les VUL de PTAC ≤ 3,5t sont soumis au contrôle technique tous les 2 ans (comme les véhicules particuliers). La première visite a lieu avant la 4ème année de mise en circulation. Un contrôle complémentaire peut être exigé après une réparation importante ou un accident."},

{id:5885,prog:'LEGER',theme:'Réglementation VUL',d:2,
e:"La révision des prix de transport selon les indices CNR est :",
r:[{t:"Obligatoire par décret"},{t:"Prévue par la loi mais mise en œuvre contractuellement par les parties",ok:true},{t:"Interdite par la réglementation anti-concurrentielle"},{t:"Obligatoire uniquement pour les transports de plus de 50 km"}],
x:"La loi permet la révision des prix de transport en fonction des indices CNR (carburant, salaires, matières premières). Cette révision doit être prévue dans le contrat par une clause d'indexation. Elle n'est pas automatique mais son intégration dans les contrats est fortement recommandée pour protéger le transporteur des hausses de coûts."},

{id:5886,prog:'LEGER',theme:'Réglementation VUL',d:3,
e:"Le VUL transporte des bouteilles de gaz propane pour un chantier sous les seuils ADR. Le conducteur doit :",
r:[{t:"Avoir un certificat ADR conducteur obligatoire"},{t:"Respecter les règles de base de sécurité même sans certificat ADR (arrimage, ventilation, extincteur)",ok:true},{t:"Refuser ce transport sans certificat"},{t:"Aucune précaution particulière n'est nécessaire"}],
x:"En dessous des seuils d'exemption ADR (quantités limitées), le certificat conducteur ADR n'est pas obligatoire. Mais des règles de sécurité s'appliquent toujours : bouteilles arrimées et à la verticale, compartiment ventilé, extincteur 2 kg poudre ABC, interdiction de fumer, pas de source de chaleur à proximité."},

{id:5887,prog:'LEGER',theme:'Réglementation VUL',d:2,
e:"Le dépassement du PTAC d'un VUL est :",
r:[{t:"Toléré jusqu'à 10 %"},{t:"Strictement interdit et passible d'amende",ok:true},{t:"Autorisé avec accord préfectoral"},{t:"Toléré pour les livraisons urgentes"}],
x:"Le dépassement du PTAC est formellement interdit (art. R.312-4 du Code de la route). Les sanctions varient selon le niveau de dépassement (de l'amende simple à la rétention du véhicule). Le conducteur ET le chargeur peuvent être mis en cause. En cas d'accident avec surcharge, l'assureur peut invoquer une déchéance de garantie."},

{id:5888,prog:'LEGER',theme:'Réglementation VUL',d:1,
e:"Le poids à vide (masse en ordre de marche) d'un VUL inclut :",
r:[{t:"Uniquement la carrosserie"},{t:"La carrosserie + carburant + équipements fixes, sans conducteur ni chargement",ok:true},{t:"Le châssis et le moteur uniquement"},{t:"La tare + conducteur + 75 kg"}],
x:"La masse en ordre de marche comprend le poids du véhicule avec carrosserie, le plein de carburant, les fluides (huile, liquide de refroidissement, frein) et les équipements fixes d'origine. Elle exclut le conducteur, les passagers et le chargement. Charge utile = PTAC — masse en ordre de marche."},

{id:5889,prog:'LEGER',theme:'Réglementation VUL',d:2,
e:"Le transport de médicaments par VUL nécessite :",
r:[{t:"Uniquement un VUL fermé"},{t:"Un agrément ANSM et des conditions de transport adaptées (température, traçabilité)",ok:true},{t:"Le permis C obligatoirement"},{t:"Aucune réglementation spécifique"}],
x:"Le transport de médicaments est réglementé par les Bonnes Pratiques de Distribution (BPD) de l'ANSM. Il requiert des véhicules adaptés aux conditions de conservation (température dirigée si nécessaire), une traçabilité rigoureuse, des procédures d'urgence en cas de dommage, et dans certains cas un agrément spécifique."},

{id:5890,prog:'LEGER',theme:'Réglementation VUL',d:3,
e:"Le permis B96 permet de conduire un ensemble dont le PTAC total est :",
r:[{t:"Jusqu'à 3 500 kg"},{t:"Jusqu'à 4 250 kg après formation obligatoire",ok:true},{t:"Jusqu'à 7 500 kg"},{t:"Jusqu'à 5 000 kg sans aucune formation"}],
x:"Le permis B96 (créé en 2013) permet de conduire un ensemble VUL + remorque dont le PTAC total est compris entre 3 500 kg et 4 250 kg, après une formation pratique obligatoire de 7 heures minimum (pas d'examen). Au-delà de 4 250 kg jusqu'à certaines limites, le permis BE est nécessaire."},

// ══════════════════════════════════════
// SÉCURITÉ ROUTIÈRE — 25 questions supplémentaires
// ══════════════════════════════════════
{id:5891,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"La profondeur minimale légale des sculptures des pneus est de :",
r:[{t:"1 mm"},{t:"1,6 mm",ok:true},{t:"2 mm"},{t:"3 mm"}],
x:"La profondeur minimale légale des sculptures est de 1,6 mm (art. R.314-1 du Code de la route). Les témoins d'usure intégrés dans les rainures principales des pneus correspondent à ce niveau. Pour les pneus hiver, la profondeur minimale recommandée est de 4 mm pour une efficacité correcte."},

{id:5892,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"Le risque routier professionnel représente quelle proportion des accidents mortels du travail en France ?",
r:[{t:"10 %"},{t:"Environ 40 %",ok:true},{t:"Plus de 60 %"},{t:"5 %"}],
x:"Le risque routier professionnel (accidents de mission + accidents de trajet) est la première cause de mortalité au travail en France, représentant environ 40 % des accidents mortels du travail. Il concerne tous les salariés se déplaçant pour leur travail. Les employeurs ont une obligation légale de prévention intégrée au DUER."},

{id:5893,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"La distance de sécurité minimale recommandée sur autoroute à 130 km/h est de :",
r:[{t:"50 m"},{t:"Au moins 72 m (règle des 2 secondes)",ok:true},{t:"200 m"},{t:"30 m"}],
x:"La règle des 2 secondes : à 130 km/h, le véhicule parcourt 36 m/s. En 2 secondes = 72 m minimum. La réglementation française impose une distance au moins égale à la distance parcourue en 2 secondes (art. R.412-12). Par mauvais temps, ce délai doit être porté à 4 secondes minimum."},

{id:5894,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"Le triangle de signalisation doit être placé à quelle distance minimum du véhicule en panne sur route normale ?",
r:[{t:"10 m"},{t:"30 m",ok:true},{t:"50 m"},{t:"100 m"}],
x:"Le triangle doit être placé à au moins 30 m du véhicule en panne sur route normale, et à au moins 100 m sur autoroute ou route à grande vitesse. Il est obligatoire dans tout véhicule à moteur. Son absence est une contravention de 4ème classe (135 €)."},

{id:5895,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"Le système ABS permet de :",
r:[{t:"Réduire la distance de freinage sur sol sec"},{t:"Éviter le blocage des roues et maintenir la directivité lors d'un freinage d'urgence",ok:true},{t:"Freiner automatiquement en urgence"},{t:"Compenser la surcharge du véhicule"}],
x:"L'ABS (Anti-lock Braking System) empêche le blocage des roues lors d'un freinage d'urgence en modulant la pression de freinage roue par roue. Cela permet de maintenir la directivité du véhicule pendant le freinage. L'ABS n'améliore pas la distance de freinage sur sol sec mais évite les sorties de route lors de freinages d'urgence."},

{id:5896,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"Le port de la ceinture de sécurité est obligatoire pour :",
r:[{t:"Uniquement le conducteur"},{t:"Tous les occupants du véhicule, sur toutes les places équipées",ok:true},{t:"Uniquement sur autoroute"},{t:"Seulement sur les places avant"}],
x:"Le port de la ceinture est obligatoire pour tous les occupants d'un véhicule, sur toutes les places équipées de ceinture (art. R.412-1 du Code de la route). L'amende est de 135 € et le retrait de 3 points. Le conducteur peut être verbalisé pour chaque passager non attaché."},

{id:5897,prog:'LEGER',theme:'Sécurité routière',d:3,
e:"Le délit de fuite après un accident avec blessé est puni de :",
r:[{t:"Une simple contravention"},{t:"3 ans d'emprisonnement et 75 000 € d'amende",ok:true},{t:"Suspension de permis de 6 mois"},{t:"1 an d'emprisonnement uniquement"}],
x:"Le délit de fuite (art. L.231-1 du Code de la route) après un accident impliquant des blessés est puni de 3 ans d'emprisonnement et 75 000 € d'amende, plus des peines complémentaires (suspension ou annulation du permis). En cas de fuite après un accident mortel, les peines sont aggravées (7 ans, 100 000 €)."},

{id:5898,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"La vitesse maximale pour un conducteur novice (permis de moins de 2 ans) sur autoroute est de :",
r:[{t:"130 km/h"},{t:"110 km/h",ok:true},{t:"90 km/h"},{t:"120 km/h"}],
x:"Les conducteurs en période probatoire (3 premières années : 2 ans en filière classique, 1 an en AAC) ont des limites réduites : 110 km/h sur autoroute, 100 km/h sur route à 2×2 voies séparées, 80 km/h ailleurs hors agglomération. Le taux d'alcool limite est de 0,2 g/L (vs 0,5 g/L pour les conducteurs confirmés)."},

{id:5899,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"L'aquaplaning survient lorsque :",
r:[{t:"La pression des pneus est trop élevée"},{t:"Un film d'eau s'interpose entre les pneus et la chaussée, supprimant tout contact",ok:true},{t:"La vitesse est trop basse sur sol mouillé"},{t:"Le VUL est surchargé par temps de pluie"}],
x:"L'aquaplaning survient à vitesse élevée sur route mouillée quand les pneus ne peuvent plus évacuer l'eau. Un film d'eau s'interpose et supprime l'adhérence. Le conducteur perd la direction et le freinage. Prévention : réduire la vitesse, vérifier les sculptures (min 1,6 mm légal, 3 mm recommandé sur sol mouillé)."},

{id:5900,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"La conduite sous stupéfiants (même en traces résiduelles) est :",
r:[{t:"Sanctionnée uniquement si accident"},{t:"Un délit pénal : 2 ans d'emprisonnement et 4 500 € d'amende",ok:true},{t:"Une simple contravention"},{t:"Non sanctionnée pour les conducteurs professionnels"}],
x:"La conduite sous l'emprise de stupéfiants est un délit pénal (art. L.235-1 du Code de la route) : 2 ans d'emprisonnement, 4 500 € d'amende, 6 points retirés, suspension possible du permis. Un test salivaire positif suffit à caractériser l'infraction, même sans signes visibles d'imprégnation. Cumulé avec l'alcool, les peines sont aggravées."},

{id:5901,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"La surcharge d'un VUL a pour principale conséquence sur la sécurité :",
r:[{t:"Amélioration de la traction"},{t:"Dégradation des distances de freinage, de la tenue de route et risque de rupture de pneu",ok:true},{t:"Amélioration de la stabilité par le poids"},{t:"Aucun impact sur la sécurité active"}],
x:"La surcharge dégrade considérablement la sécurité : allongement des distances de freinage (le système de freinage n'est pas dimensionné pour le poids supplémentaire), diminution de la maniabilité, surcharge des pneumatiques (risque d'éclatement), sollicitation excessive du châssis et des suspensions. La surcharge peut invalider l'assurance en cas d'accident."},

{id:5902,prog:'LEGER',theme:'Sécurité routière',d:3,
e:"Le chargement du VUL doit résister à une décélération d'urgence d'environ :",
r:[{t:"0,3 g (3 m/s²)"},{t:"0,8 g vers l'avant (norme EN 12195)",ok:true},{t:"1,5 g dans toutes les directions"},{t:"Aucune norme précise n'est imposée"}],
x:"Les normes d'arrimage EN 12195 recommandent que le chargement résiste à au moins 0,8 g vers l'avant (freinage d'urgence), 0,5 g vers l'arrière et 0,5 g latéralement. Ces valeurs correspondent à des forces de freinage réalistes. Un chargement non arrimé peut devenir un projectile mortellement dangereux lors d'un freinage brutal."},

{id:5903,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"L'éco-conduite permet de réduire la consommation de carburant d'un VUL de :",
r:[{t:"2 à 5 %"},{t:"10 à 15 %",ok:true},{t:"30 à 40 %"},{t:"Plus de 50 %"}],
x:"Une conduite économique bien maîtrisée permet de réduire la consommation de 10 à 15 % : anticipation des situations, montée en régime rapide pour passer au rapport supérieur, maintien d'une vitesse régulière, coupure du moteur à l'arrêt prolongé. Les bénéfices incluent aussi la réduction de l'usure des freins, des pneus et du moteur."},
{id:5910,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"Le taux de TVA applicable aux transports de voyageurs est de :",
r:[{t:"20 %"},{t:"10 %",ok:true},{t:"5,5 %"},{t:"0 %"}],
x:"Le transport de voyageurs est soumis au taux réduit de TVA de 10 % (art. 279 b du CGI). Le transport de marchandises est taxé au taux normal de 20 %. Cette distinction est importante pour les entreprises proposant à la fois du transport de personnes et de marchandises."},

{id:5911,prog:'LEGER',theme:'Droit fiscal',d:1,
e:"La déclaration mensuelle de TVA (CA3) est obligatoire si la TVA annuelle excède :",
r:[{t:"1 000 €"},{t:"4 000 €",ok:true},{t:"10 000 €"},{t:"15 000 €"}],
x:"Le régime réel normal impose des déclarations mensuelles dès lors que la TVA due annuellement dépasse 4 000 €. En dessous, une déclaration trimestrielle est possible. Le régime simplifié (CA12) autorise une déclaration annuelle avec deux acomptes semestriels."},

{id:5912,prog:'LEGER',theme:'Droit fiscal',d:3,
e:"Le régime mère-fille exonère les dividendes à hauteur de :",
r:[{t:"100 %"},{t:"95 % (quote-part de frais et charges de 5 % réintégrée)",ok:true},{t:"50 %"},{t:"Il n'y a pas d'exonération"}],
x:"Le régime mère-fille (art. 145 et 216 du CGI) exonère les dividendes reçus par une société mère (détenant ≥ 5 % depuis ≥ 2 ans) d'IS. Mais une quote-part de frais et charges de 5 % du dividende est réintégrée dans le résultat imposable. L'exonération effective est donc de 95 %."},

{id:5913,prog:'LEGER',theme:'Droit fiscal',d:1,
e:"Le versement libératoire pour les auto-entrepreneurs permet de :",
r:[{t:"Ne jamais payer d'IR"},{t:"Payer l'IR forfaitairement sur le CA déclaré, sans passer par la déclaration annuelle",ok:true},{t:"Bénéficier d'une exonération d'IR pendant 2 ans"},{t:"Réduire le taux d'IR à 5 %"}],
x:"Le versement libératoire (art. 151-0 du CGI) permet de payer l'IR en même temps que les cotisations sociales, à un taux forfaitaire sur le CA (1 % vente, 1,7 % services BIC, 2,2 % BNC). Réservé aux foyers sous un certain plafond de revenu fiscal de référence."},

{id:5914,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"Les droits d'enregistrement lors d'une cession de fonds de commerce sont :",
r:[{t:"Un taux fixe de 5 %"},{t:"Progressifs : 0 % jusqu'à 23 000 €, 3 % jusqu'à 200 000 €, 5 % au-delà",ok:true},{t:"De 2 % sur la valeur totale"},{t:"Inexistants pour les petits fonds"}],
x:"Les droits d'enregistrement lors d'une cession de fonds de commerce sont calculés par tranches : exonération jusqu'à 23 000 €, 3 % de 23 001 € à 200 000 €, 5 % au-delà de 200 000 €. Ils s'appliquent sur la valeur du fonds déclarée dans l'acte de cession."},

{id:5915,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"La TVA sur les repas d'affaires au restaurant est récupérable à :",
r:[{t:"0 %"},{t:"100 % si la dépense est strictement professionnelle et justifiée par une facture nominative",ok:true},{t:"80 %"},{t:"50 %"}],
x:"La TVA sur les repas au restaurant est récupérable à 100 % si la dépense est exclusivement professionnelle et justifiée par une facture nominative (avec le nom du client rencontré). Ce droit à déduction nécessite obligatoirement une facture (pas un simple ticket de caisse)."},

{id:5916,prog:'LEGER',theme:"Accès à la profession",d:1,
e:"Le RENT est consultable par :",
r:[{t:"Uniquement les contrôleurs DREAL"},{t:"Toute personne — il est public et accessible sur internet",ok:true},{t:"Uniquement les transporteurs"},{t:"Uniquement les administrations fiscales"}],
x:"Le RENT (Registre Électronique National des entreprises de Transport) est public et consultable sur internet par toute personne. Il permet de vérifier qu'un transporteur est bien autorisé à exercer, son statut, le nombre de véhicules autorisés et le nom du gestionnaire de transport."},

{id:5917,prog:'LEGER',theme:"Accès à la profession",d:2,
e:"Les licences de transport lors d'une cession d'entreprise :",
r:[{t:"Se transmettent automatiquement avec le fonds"},{t:"Ne sont pas cessibles — le repreneur doit obtenir ses propres autorisations auprès de la DREAL",ok:true},{t:"Se transfèrent avec accord préfectoral"},{t:"Restent valables 1 an après la cession"}],
x:"Les licences de transport (LTI et LC) sont des autorisations administratives nominatives. Elles ne se transmettent pas avec le fonds de commerce. Le repreneur doit constituer un dossier complet et obtenir ses propres autorisations auprès de la DREAL en justifiant les 3 conditions d'accès."},

{id:5918,prog:'LEGER',theme:"Accès à la profession",d:3,
e:"L'examen CPC Léger couvre les matières suivantes :",
r:[{t:"Uniquement la réglementation transport"},{t:"Droit civil et commercial, droit social, fiscalité, gestion financière, accès à la profession et règles techniques",ok:true},{t:"Uniquement la sécurité routière et la fiscalité"},{t:"Uniquement les mathématiques financières"}],
x:"L'examen CPC pour le transport léger (<3,5t) couvre 6 domaines selon le règlement européen 1071/2009 : droit civil et commercial, droit social, fiscalité, gestion financière et comptable, accès au marché, normes techniques. Organisé par les CCI, il comprend des épreuves écrites (QCM + questions rédigées)."},

{id:5919,prog:'LEGER',theme:'Gestion financière',d:1,
e:"Le DSO (Days Sales Outstanding) se calcule comme :",
r:[{t:"CA / Créances clients"},{t:"Créances clients TTC / CA TTC × 360",ok:true},{t:"Trésorerie / CA × 360"},{t:"Résultat / Créances × 360"}],
x:"DSO = (Créances clients TTC / CA TTC) × 360 jours. Il représente le nombre moyen de jours entre la facturation et l'encaissement. Un DSO de 45 jours signifie que les clients paient en moyenne 45 jours après la facture. Objectif : réduire ce délai pour améliorer la trésorerie."},

{id:5920,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Un transporteur VUL avec un CA de 120 000 € et un coefficient d'exploitation de 91 % dégage :",
r:[{t:"91 000 € de résultat"},{t:"10 800 € de résultat d'exploitation",ok:true},{t:"21 000 € de résultat"},{t:"1 080 € de résultat"}],
x:"Résultat = CA × (1 − coef. d'exploitation) = 120 000 × 0,09 = 10 800 €. Le coefficient de 91 % signifie que 91 % du CA couvre les charges, laissant 9 % de marge avant IS."},

{id:5921,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Le budget de trésorerie prévisionnel permet de :",
r:[{t:"Calculer l'IS prévisionnel"},{t:"Anticiper les besoins de financement à court terme et éviter les ruptures de trésorerie",ok:true},{t:"Établir le bilan prévisionnel"},{t:"Calculer le seuil de rentabilité"}],
x:"Le budget de trésorerie est un tableau prévisionnel mensuel des encaissements et décaissements. Il permet d'identifier à l'avance les périodes de tension de trésorerie pour anticiper les solutions (ligne de crédit, affacturage, relance clients) avant d'être en difficulté."},

{id:5922,prog:'LEGER',theme:'Gestion financière',d:3,
e:"La méthode des SIG (Soldes Intermédiaires de Gestion) permet de :",
r:[{t:"Calculer uniquement le résultat net"},{t:"Décomposer la formation du résultat à travers plusieurs indicateurs successifs : VA, EBE, RCAI…",ok:true},{t:"Établir le tableau de financement"},{t:"Calculer le BFR normatif"}],
x:"Les SIG décomposent le compte de résultat en indicateurs intermédiaires : Marge commerciale → Production → Valeur Ajoutée → EBE → Résultat d'exploitation → RCAI → Résultat net. Chaque solde mesure un niveau différent de performance et permet d'analyser précisément d'où vient (ou ne vient pas) la rentabilité."},

{id:5923,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Le levier d'exploitation (DOL) = MCV / Résultat d'exploitation. Un DOL de 4 signifie :",
r:[{t:"L'entreprise a 4 fois plus de charges fixes que variables"},{t:"Une hausse de 1 % du CA entraîne une hausse de 4 % du résultat",ok:true},{t:"Le taux de marge est de 25 %"},{t:"L'entreprise est 4 fois plus rentable que la moyenne"}],
x:"Le Degré de Levier Opérationnel (DOL) mesure l'amplification des variations du résultat par rapport aux variations du CA. DOL = 4 signifie qu'une hausse de 1 % du CA entraîne une hausse de 4 % du résultat d'exploitation. Effet symétrique : une baisse de 1 % du CA provoque une baisse de 4 % du résultat."},

{id:5924,prog:'LEGER',theme:'Gestion financière',d:1,
e:"Une entreprise avec un CA de 80 000 €, un taux de MCV de 42 % et des CF de 38 000 € est :",
r:[{t:"Bénéficiaire de 5 600 €"},{t:"Déficitaire de 4 400 €",ok:true},{t:"À l'équilibre"},{t:"Bénéficiaire de 33 600 €"}],
x:"MCV = 80 000 × 42 % = 33 600 €. Résultat = MCV − CF = 33 600 − 38 000 = −4 400 €. L'entreprise est déficitaire car son CA (80 000 €) est inférieur au SR (= 38 000 / 0,42 = 90 476 €)."},

{id:5925,prog:'LEGER',theme:'Réglementation VUL',d:2,
e:"Le Crit'Air 1 est attribué aux :",
r:[{t:"Véhicules 100 % électriques"},{t:"Véhicules essence Euro 5 et 6 et hybrides rechargeables",ok:true},{t:"Véhicules diesel Euro 6 uniquement"},{t:"Tous les véhicules récents"}],
x:"Crit'Air 0 = 100 % électrique et hydrogène. Crit'Air 1 = essence Euro 5 et 6, hybrides rechargeables. Crit'Air 2 = diesel Euro 5 et 6, essence Euro 4. Ces classifications déterminent l'accès aux ZFE-m selon les restrictions en vigueur dans chaque ville."},

{id:5926,prog:'LEGER',theme:'Réglementation VUL',d:2,
e:"La vérification annuelle du hayon élévateur d'un VUL est :",
r:[{t:"Facultative"},{t:"Obligatoire (arrêté du 1er mars 2004) avec carnet de maintenance et formation des utilisateurs",ok:true},{t:"Obligatoire uniquement pour les hayons > 1 tonne"},{t:"Réalisée lors du contrôle technique uniquement"}],
x:"Les hayons élévateurs sont des équipements de travail soumis à vérification périodique annuelle obligatoire par un organisme agréé (arrêté du 1er mars 2004). Le carnet de maintenance doit être tenu à jour et les utilisateurs formés. Ces obligations s'appliquent dès l'installation, quelle que soit la taille du VUL."},

{id:5927,prog:'LEGER',theme:'Réglementation VUL',d:1,
e:"Un VUL en crédit-bail (leasing) appartient à :",
r:[{t:"Au preneur dès le 1er loyer"},{t:"Au bailleur pendant le contrat, avec option d'achat pour le preneur à l'échéance",ok:true},{t:"Au preneur et bailleur à 50/50"},{t:"À la banque finançant le contrat"}],
x:"Dans un crédit-bail, le bailleur reste propriétaire du bien pendant toute la durée du contrat. Le preneur (locataire) paie des loyers déductibles fiscalement et dispose d'une option d'achat à l'échéance (valeur résiduelle). Comptablement, le bien ne figure pas à l'actif du preneur en normes françaises."},

{id:5928,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"En cas d'incendie dans un tunnel, la priorité absolue est de :",
r:[{t:"Éteindre l'incendie avec l'extincteur"},{t:"Sortir du tunnel à pied par les issues de secours, moteur coupé, clés sur le contact",ok:true},{t:"Rester dans le véhicule avec fenêtres fermées"},{t:"Faire demi-tour avec le véhicule"}],
x:"En cas d'incendie en tunnel : s'arrêter à droite, couper le moteur, laisser les clés sur le contact (portes déverrouillées pour les secours), sortir à pied par les issues de secours (flèches vertes), se réfugier dans les niches pressurisées, appeler les secours depuis les bornes d'appel d'urgence."},

{id:5929,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"La loi Badinter du 5 juillet 1985 garantit aux victimes d'accidents de la route :",
r:[{t:"Une indemnisation uniquement si l'autre conducteur est en tort"},{t:"Une indemnisation rapide des victimes non conductrices (piétons, cyclistes, passagers) quasi-automatique",ok:true},{t:"Une indemnisation uniquement pour les dommages corporels"},{t:"Une indemnisation plafonnée à 100 000 €"}],
x:"La loi Badinter instaure un régime spécifique d'indemnisation des victimes d'accidents de véhicules terrestres à moteur. Les victimes non conductrices bénéficient d'une indemnisation quasi-automatique sauf faute inexcusable exclusive. Pour les conducteurs, leur faute peut limiter ou exclure l'indemnisation."},

{id:5930,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"Un conducteur novice commence avec combien de points sur son permis ?",
r:[{t:"12 points"},{t:"6 points",ok:true},{t:"3 points"},{t:"0 point"}],
x:"Un conducteur novice (permis obtenu après le 1er juillet 1992) commence avec 6 points. Il acquiert +3 points par an sans infraction majeure jusqu'au maximum de 12 points. En filière AAC (conduite accompagnée), la progression est plus rapide : atteinte des 12 points en 2 ans au lieu de 3 ans."},

{id:5931,prog:'LEGER',theme:'Sécurité routière',d:3,
e:"La responsabilité pénale pour homicide involontaire par un conducteur est engagée dès lors que :",
r:[{t:"Le conducteur était en état d'ivresse uniquement"},{t:"Une imprudence ou négligence a causé le décès, même sans alcool ni drogue",ok:true},{t:"Le conducteur conduisait trop vite uniquement"},{t:"L'accident était involontaire — jamais de responsabilité pénale"}],
x:"L'homicide involontaire (art. 221-6 du Code pénal) est retenu dès qu'une faute de conduite (imprudence, inattention, négligence) a causé le décès. Les peines vont de 3 ans d'emprisonnement et 45 000 € à 7 ans et 100 000 € en cas de circonstances aggravantes (alcool, stupéfiants, excès de vitesse, délit de fuite)."},

{id:5932,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"Le FCW (Forward Collision Warning) dans un VUL :",
r:[{t:"Freine automatiquement en cas de danger"},{t:"Alerte le conducteur d'un risque de collision frontale imminent",ok:true},{t:"Maintient automatiquement la distance de sécurité"},{t:"Détecte les piétons uniquement"}],
x:"Le FCW (avertissement de collision avant) utilise des capteurs radar/caméra pour détecter les obstacles devant le véhicule et alerte le conducteur (signal sonore, vibration). Le système complémentaire AEB (Automatic Emergency Braking) freine effectivement si le conducteur ne réagit pas à temps. Obligatoire sur les VUL neufs depuis 2022."},

{id:5933,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"La limitation de vitesse sur les voies rapides en agglomération (2×2 voies avec séparateur) est de :",
r:[{t:"50 km/h"},{t:"70 km/h",ok:true},{t:"90 km/h"},{t:"110 km/h"}],
x:"Sur les voies rapides à 2×2 voies avec séparateur central en agglomération (boulevards périphériques, autoroutes urbaines), la limitation est de 70 km/h sauf indication contraire. La limitation générale en agglomération reste 50 km/h sur les autres routes."},

{id:5934,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"L'alcoolémie maximale pour un conducteur transportant des enfants en minibus est de :",
r:[{t:"0,5 g/L"},{t:"0,2 g/L",ok:true},{t:"0 g/L absolu"},{t:"0,8 g/L"}],
x:"Les conducteurs de véhicules de transport en commun (dont les minibus scolaires) sont soumis à un taux maximal d'alcoolémie de 0,2 g/L, identique aux conducteurs en période probatoire. Ce seuil est bien inférieur aux 0,5 g/L applicables aux conducteurs ordinaires."},

{id:5935,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"Le nantissement du fonds de commerce permet au commerçant de :",
r:[{t:"Vendre son fonds sans accord des créanciers"},{t:"Affecter son fonds en garantie d'un emprunt tout en continuant à l'exploiter",ok:true},{t:"Suspendre le paiement de ses dettes"},{t:"Transférer temporairement la propriété"}],
x:"Le nantissement de fonds de commerce (art. L.142-1 du Code de commerce) est une sûreté mobilière permettant d'affecter le fonds en garantie d'un crédit sans en perdre la possession. Le créancier bénéficie d'un droit de préférence sur le prix de vente du fonds en cas de défaillance du débiteur."},

{id:5936,prog:'LEGER',theme:'Droit civil & commercial',d:3,
e:"L'action paulienne permet à un créancier de :",
r:[{t:"Rembourser sa dette par priorité"},{t:"Attaquer les actes frauduleux accomplis par son débiteur au détriment de ses créanciers",ok:true},{t:"Annuler un contrat pour erreur"},{t:"Exiger un remboursement anticipé"}],
x:"L'action paulienne (art. 1341-2 du Code civil) permet d'obtenir l'inopposabilité d'un acte accompli par le débiteur en fraude de ses créanciers (ex : donation d'un bien pour le soustraire à la saisie). Il faut prouver : la créance antérieure à l'acte, le préjudice causé, et la connaissance de la fraude par le débiteur."},

{id:5937,prog:'LEGER',theme:'Droit social',d:2,
e:"Le congé sabbatique est ouvert aux salariés ayant :",
r:[{t:"1 an d'ancienneté"},{t:"3 ans dans l'entreprise et 6 ans d'activité professionnelle",ok:true},{t:"5 ans d'ancienneté"},{t:"10 ans d'ancienneté"}],
x:"Le congé sabbatique (art. L.3142-28 du Code du travail) est ouvert aux salariés justifiant d'au moins 36 mois d'ancienneté dans l'entreprise et de 6 années d'activité professionnelle. Sa durée est de 6 à 11 mois. L'employeur peut le refuser ou le reporter sous certaines conditions."},

{id:5938,prog:'LEGER',theme:'Droit social',d:3,
e:"Le prêt de main-d'œuvre à but lucratif entre entreprises est :",
r:[{t:"Légal si le salarié est d'accord"},{t:"Illégal — constitue du marchandage ou de la fourniture illicite de main-d'œuvre",ok:true},{t:"Légal entre entreprises d'un même groupe"},{t:"Légal avec accord de la DREETS"}],
x:"Le prêt de main-d'œuvre à but lucratif (art. L.8241-1 du Code du travail) est interdit : c'est du marchandage ou de la fourniture illicite de main-d'œuvre. Exception : le prêt à but non lucratif (seuls les salaires, charges et frais sont remboursés) avec accord du salarié et du CSE."},

{id:5939,prog:'LEGER',theme:'Droit social',d:2,
e:"Le plafond du CPF est de 5 000 € (8 000 € pour les peu qualifiés). L'alimentation annuelle est de :",
r:[{t:"300 €/an"},{t:"500 €/an (800 € pour les peu qualifiés) pour un salarié à temps plein",ok:true},{t:"1 000 €/an systématiquement"},{t:"En fonction du salaire brut uniquement"}],
x:"Le CPF est alimenté à 500 €/an pour les salariés à temps plein ayant au moins un niveau bac (plafond 5 000 €), et à 800 €/an pour les salariés sans qualification (plafond 8 000 €). Pour les temps partiels, l'alimentation est proportionnelle. Les droits sont utilisables pour financer des formations certifiantes."},
{id:5910,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"La prescription commerciale entre commerçants est de :",
r:[{t:"1 an"},{t:"5 ans",ok:true},{t:"10 ans"},{t:"30 ans"}],
x:"La prescription commerciale de droit commun est de 5 ans (art. L.110-4 du Code de commerce). Ce délai s'applique aux obligations nées à l'occasion de leur commerce entre commerçants ou entre commerçants et non-commerçants."},

{id:5911,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"La résolution d'un contrat pour inexécution entraîne :",
r:[{t:"La modification des obligations"},{t:"L'anéantissement rétroactif du contrat avec restitutions réciproques",ok:true},{t:"Uniquement des dommages et intérêts"},{t:"La suspension temporaire du contrat"}],
x:"La résolution (art. 1229 du Code civil) met fin au contrat et l'anéantit rétroactivement. Les parties sont remises dans l'état antérieur à la conclusion, avec restitutions mutuelles. Elle diffère de la résiliation qui ne vaut que pour l'avenir."},

{id:5912,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"Le dol comme vice du consentement se caractérise par :",
r:[{t:"Une erreur involontaire"},{t:"Des manœuvres frauduleuses destinées à tromper l'autre partie",ok:true},{t:"Un avantage excessif"},{t:"L'impossibilité d'exécuter"}],
x:"Le dol (art. 1137 Code civil) est constitué de manœuvres frauduleuses, mensonges ou dissimulations délibérés destinés à provoquer le consentement de l'autre partie. Le dol entraîne la nullité relative du contrat et peut ouvrir droit à des dommages et intérêts."},

{id:5913,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"Un contrat nul de nullité absolue peut être invoqué par :",
r:[{t:"Uniquement les parties"},{t:"Toute personne intéressée, car il viole l'ordre public",ok:true},{t:"Uniquement le juge"},{t:"Uniquement le Ministère public"}],
x:"La nullité absolue sanctionne les violations de l'intérêt général (objet illicite, violation de l'ordre public). Elle peut être invoquée par toute personne intéressée, y compris le ministère public, et ne peut pas être couverte par confirmation. La nullité relative protège uniquement l'intérêt d'une partie."},

{id:5914,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"Le cautionnement simple (vs solidaire) implique que :",
r:[{t:"La caution paie immédiatement à première demande"},{t:"La caution bénéficie du bénéfice de discussion (épuiser les recours contre le débiteur principal d'abord)",ok:true},{t:"La caution est illimitée dans son montant"},{t:"Il n'y a pas de différence pratique"}],
x:"Dans le cautionnement simple, la caution bénéficie du bénéfice de discussion : elle peut exiger que le créancier poursuive d'abord le débiteur principal avant de la solliciter. Dans le cautionnement solidaire (le plus fréquent en pratique), la caution renonce à ce bénéfice et peut être poursuivie directement."},

{id:5915,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"L'exception d'inexécution permet à une partie de :",
r:[{t:"Obtenir des dommages et intérêts"},{t:"Refuser d'exécuter sa propre obligation tant que l'autre n'exécute pas la sienne",ok:true},{t:"Résilier le contrat immédiatement"},{t:"Transférer ses obligations à un tiers"}],
x:"L'exception d'inexécution (art. 1219 Code civil) est un mécanisme de suspension légitime de ses propres obligations lorsque l'autre partie n'exécute pas les siennes et que l'inexécution est suffisamment grave. C'est une mesure provisoire qui ne rompt pas le contrat."},

{id:5916,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"Le bail commercial a une durée minimale obligatoire de :",
r:[{t:"3 ans"},{t:"9 ans",ok:true},{t:"6 ans"},{t:"12 ans"}],
x:"Le bail commercial 3-6-9 a une durée minimale de 9 ans. Le locataire peut donner congé à chaque période triennale. En fin de bail, le locataire bénéficie d'un droit au renouvellement ; le bailleur refusant doit payer une indemnité d'éviction sauf motif grave et légitime."},

{id:5917,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"La SAS se caractérise par :",
r:[{t:"Un capital minimum de 37 000 €"},{t:"Une grande liberté statutaire et pas de capital minimum légal",ok:true},{t:"Un conseil d'administration obligatoire"},{t:"Un minimum de 7 actionnaires"}],
x:"La SAS est la forme sociale la plus flexible du droit français. Pas de capital minimum légal (1 € symbolique possible), liberté totale dans l'organisation de la gouvernance via les statuts. Elle est présidée par un président obligatoire (personne physique ou morale)."},

{id:5918,prog:'LEGER',theme:'Droit civil & commercial',d:2,
e:"La cession de contrat nécessite obligatoirement :",
r:[{t:"L'accord du cédant uniquement"},{t:"L'accord du cocontractant cédé",ok:true},{t:"L'accord d'un tribunal"},{t:"Un acte notarié"}],
x:"La cession de contrat (art. 1216 Code civil) transfère la position contractuelle d'une partie à un cessionnaire. Elle nécessite l'accord du cocontractant cédé, qui peut avoir été donné par avance dans le contrat. Sans cet accord, la cession est inopposable au cédé."},

{id:5919,prog:'LEGER',theme:'Droit civil & commercial',d:1,
e:"Un bon de commande signé par le client vaut :",
r:[{t:"Une simple intention"},{t:"Un contrat formé liant les deux parties",ok:true},{t:"Un devis non engageant"},{t:"Une promesse unilatérale"}],
x:"Un bon de commande signé par le client constitue l'acceptation de l'offre du prestataire. Il y a rencontre des volontés et donc formation du contrat. Le prestataire est engagé par les prix et conditions acceptés."},

// — FISCAL 10q —
{id:5920,prog:'LEGER',theme:'Droit fiscal',d:1,
e:"Le taux normal de TVA en France est de :",
r:[{t:"10 %"},{t:"20 %",ok:true},{t:"25 %"},{t:"5,5 %"}],
x:"Le taux normal de TVA est de 20 % depuis janvier 2014. Il s'applique à la majorité des biens et services dont les transports de marchandises. Le taux réduit de 10 % s'applique à la restauration et travaux, le 5,5 % aux produits alimentaires de base."},

{id:5921,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"L'amortissement linéaire d'un VUL de 20 000 € sur 5 ans est de :",
r:[{t:"2 000 €/an"},{t:"4 000 €/an",ok:true},{t:"5 000 €/an"},{t:"10 000 €/an"}],
x:"Amortissement linéaire = Valeur / Durée = 20 000 / 5 = 4 000 €/an. Ce montant est déduit du résultat imposable chaque année. Après 5 ans, la VNC est nulle. L'amortissement constate la dépréciation comptable du bien dans le temps."},

{id:5922,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"Le résultat fiscal diffère du résultat comptable car :",
r:[{t:"Il inclut la TVA collectée"},{t:"Certaines charges ne sont pas déductibles (amendes, somptuaires…) et certains produits sont exonérés",ok:true},{t:"Il est calculé sur le CA brut"},{t:"Il est toujours supérieur au résultat comptable"}],
x:"Résultat fiscal = Résultat comptable + Réintégrations fiscales (charges non déductibles) - Déductions fiscales (provisions réglementées, certaines exonérations). L'IS est calculé sur le résultat fiscal, qui peut être supérieur ou inférieur au résultat comptable."},

{id:5923,prog:'LEGER',theme:'Droit fiscal',d:1,
e:"La TVA sur les péages d'autoroute pour un VUL professionnel est :",
r:[{t:"Non récupérable"},{t:"Récupérable à 100 % sur justificatif",ok:true},{t:"Récupérable à 50 %"},{t:"Il n'y a pas de TVA sur les péages"}],
x:"La TVA sur les péages autoroutiers est entièrement récupérable pour les véhicules affectés à une activité professionnelle assujettie à la TVA, sur présentation du justificatif (badge télépéage ou ticket). Cette récupération s'applique aux VUL et aux PL professionnels."},

{id:5924,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"Le crédit d'impôt formation dirigeant est calculé sur la base de :",
r:[{t:"100 % des frais de formation"},{t:"Nombre d'heures de formation × taux horaire du SMIC (max 40h/an)",ok:true},{t:"Un forfait de 5 000 € par an"},{t:"50 % des frais de formation"}],
x:"Crédit d'impôt formation dirigeant = heures suivies × taux horaire SMIC, plafonné à 40 heures/an. Doublé pour les micro-entreprises depuis 2022. Il s'impute sur l'IS ou l'IR. Si l'entreprise est déficitaire ou que le crédit excède l'impôt, il est remboursable."},

{id:5925,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"Les intérêts d'emprunt d'un VUL professionnel sont :",
r:[{t:"Non déductibles"},{t:"Déductibles comme charges financières du résultat imposable",ok:true},{t:"Déductibles à 50 % uniquement"},{t:"Déductibles uniquement pour les emprunts < 3 ans"}],
x:"Les intérêts d'emprunt liés à des dettes pour les besoins de l'activité professionnelle sont intégralement déductibles (charges financières). La déductibilité est plafonnée uniquement pour les grandes entreprises soumises à la règle de sous-capitalisation, pas pour les PME."},

{id:5926,prog:'LEGER',theme:'Droit fiscal',d:1,
e:"La déclaration de TVA au régime réel normal (CA3) est déposée :",
r:[{t:"Annuellement"},{t:"Mensuellement (ou trimestriellement si TVA < 4 000 €/an)",ok:true},{t:"Semestriellement"},{t:"En fin d'exercice uniquement"}],
x:"Au régime réel normal, la déclaration CA3 est mensuelle. Si la TVA annuelle due est inférieure à 4 000 €, des déclarations trimestrielles sont possibles. Le paiement est simultané au dépôt. Retard ou défaut entraîne des majorations et pénalités fiscales."},

{id:5927,prog:'LEGER',theme:'Droit fiscal',d:2,
e:"La franchise en base de TVA pour un prestataire de services s'applique si le CA est inférieur à :",
r:[{t:"10 000 €"},{t:"37 500 €",ok:true},{t:"85 000 €"},{t:"203 100 €"}],
x:"Depuis le 1er janvier 2026, la franchise en base de TVA pour les prestataires de services s'applique si le CA HT ne dépasse pas 37 500 € (seuil de tolérance : 41 250 €). Pour les ventes de marchandises, le seuil est de 85 000 € (tolérance : 93 500 €). Au-delà du seuil de base, la TVA s'applique au 1er janvier suivant sauf dépassement du seuil majoré qui déclenche l'assujettissement immédiatement."},

{id:5928,prog:'LEGER',theme:'Droit fiscal',d:3,
e:"Le report en avant des déficits à l'IS est plafonné chaque année à :",
r:[{t:"Il n'est pas plafonné"},{t:"1 000 000 € + 50 % du bénéfice imposable excédant ce seuil",ok:true},{t:"500 000 € par an"},{t:"100 % du bénéfice imposable"}],
x:"Depuis 2011, le report en avant des déficits est limité à 1 M€ + 50 % du bénéfice excédant 1 M€. Exemple : bénéfice 3 M€ → déduction max = 1 M€ + 50 % × 2 M€ = 2 M€. Le solde de déficit reste reportable sans limitation de durée."},

{id:5929,prog:'LEGER',theme:'Droit fiscal',d:1,
e:"La CFE (Cotisation Foncière des Entreprises) est calculée sur :",
r:[{t:"Le chiffre d'affaires"},{t:"La valeur locative des locaux professionnels",ok:true},{t:"Le nombre de salariés"},{t:"Le capital social"}],
x:"La CFE est assise sur la valeur locative cadastrale des biens immobiliers dont l'entreprise a disposé pour son activité au 1er janvier de l'année. Les entreprises sans local (ex : auto-entrepreneur à domicile) paient une CFE minimale définie par la commune. La CFE fait partie de la CET avec la CVAE."},

// — ACCÈS PROFESSION 10q —
{id:5930,prog:'LEGER',theme:'Accès à la profession',d:1,
e:"La capacité financière pour 2 VUL <3,5t est de :",
r:[{t:"1 800 €"},{t:"2 700 €",ok:true},{t:"3 600 €"},{t:"9 000 €"}],
x:"Capacité financière VUL : 1 800 € pour le 1er véhicule + 900 € par véhicule supplémentaire. Pour 2 VUL : 1 800 + 900 = 2 700 €. Prouvée par les fonds propres des comptes annuels ou une garantie bancaire équivalente."},

{id:5931,prog:'LEGER',theme:'Accès à la profession',d:2,
e:"La licence de transport intérieur est délivrée pour :",
r:[{t:"5 ans"},{t:"10 ans renouvelables",ok:true},{t:"Elle est permanente"},{t:"3 ans pour les nouvelles entreprises"}],
x:"La licence de transport intérieur (LTI) est délivrée pour 10 ans renouvelables. Le renouvellement est soumis à la vérification que l'entreprise satisfait toujours aux 3 conditions d'accès (honorabilité, capacité financière et professionnelle)."},

{id:5932,prog:'LEGER',theme:'Accès à la profession',d:2,
e:"Un transporteur VUL peut-il exercer sans local professionnel en France ?",
r:[{t:"Oui, son domicile personnel suffit"},{t:"Non, il doit disposer d'un établissement stable avec locaux et véhicules",ok:true},{t:"Oui, avec une simple boîte postale"},{t:"Oui, si son véhicule est stationné en France"}],
x:"La condition d'établissement impose un établissement réel et stable : locaux où sont conservés les documents principaux, matériel de gestion adapté et véhicules disponibles dans l'État d'établissement. Une boîte aux lettres ou domicile personnel ne suffisent pas."},

{id:5933,prog:'LEGER',theme:'Accès à la profession',d:1,
e:"L'examen CPC Marchandises léger est organisé par :",
r:[{t:"La DREAL"},{t:"Les Chambres de Commerce et d'Industrie (CCI)",ok:true},{t:"Le Ministère des Transports directement"},{t:"L'AFPA"}],
x:"L'examen du CPC Marchandises léger (<3,5t) est organisé et administré par les CCI sous l'autorité du Ministère chargé des Transports. Il comprend des épreuves écrites portant sur le droit civil et commercial, le droit social, la gestion financière et l'accès à la profession."},

{id:5934,prog:'LEGER',theme:'Accès à la profession',d:3,
e:"Le gestionnaire de transport peut gérer au maximum :",
r:[{t:"2 entreprises"},{t:"4 entreprises représentant un total de 50 véhicules maximum",ok:true},{t:"10 entreprises s'il est salarié"},{t:"Il n'y a pas de limite"}],
x:"Le règlement 1071/2009 limite le gestionnaire de transport à 4 entreprises différentes maximum, représentant un parc total de 50 véhicules au plus. Au-delà, une autorisation exceptionnelle de l'autorité compétente est requise."},

{id:5935,prog:'LEGER',theme:'Accès à la profession',d:2,
e:"Le donneur d'ordre qui sous-traite un transport doit vérifier que le sous-traitant :",
r:[{t:"A le même type de véhicule"},{t:"Possède une licence de transport valide",ok:true},{t:"Est assuré par la même compagnie"},{t:"Applique les mêmes tarifs"}],
x:"L'obligation de vigilance du donneur d'ordre l'oblige à s'assurer que son sous-traitant est régulièrement inscrit au registre des transporteurs et possède une licence valide. Recourir à un transporteur non autorisé engage la responsabilité du donneur d'ordre."},

{id:5936,prog:'LEGER',theme:'Accès à la profession',d:1,
e:"Le RENT (Registre Électronique National des entreprises de Transport) est :",
r:[{t:"Un registre privé payant"},{t:"Un registre public consultable sur internet listant tous les transporteurs autorisés",ok:true},{t:"Réservé aux autorités de contrôle"},{t:"Un registre de formation des conducteurs"}],
x:"Le RENT est consultable gratuitement sur internet. Il recense toutes les entreprises de transport routier autorisées à exercer sur le territoire français (dénomination, gestionnaire, nombre de véhicules, statut de la licence). Il est alimenté par les DREAL régionales."},

{id:5937,prog:'LEGER',theme:'Accès à la profession',d:2,
e:"La condition d'honorabilité est incompatible avec une condamnation pour :",
r:[{t:"Toute amende, même mineure"},{t:"Des infractions graves listées par le règlement 1071/2009 (fraude, criminalité organisée, infractions sociales graves…)",ok:true},{t:"Un redressement fiscal simple"},{t:"Un déficit comptable"}],
x:"L'honorabilité professionnelle est perdue suite à des condamnations pénales pour des infractions graves listées par le règlement UE 1071/2009 : crimes ou délits graves, infractions importantes à la réglementation sociale, fraudes fiscales significatives, conduite en état d'ivresse grave, etc. La perte d'honorabilité entraîne le retrait de l'autorisation d'exercer."},

{id:5938,prog:'LEGER',theme:'Accès à la profession',d:2,
e:"En cas de décès du gestionnaire de transport, l'entreprise peut continuer à exercer :",
r:[{t:"Indéfiniment sans désigner de remplaçant"},{t:"Pendant 18 mois maximum avec un gestionnaire temporaire",ok:true},{t:"6 mois puis doit cesser"},{t:"Elle doit immédiatement cesser toute activité"}],
x:"En cas de décès, d'incapacité physique ou de départ du gestionnaire, l'autorité compétente peut autoriser la poursuite de l'activité pendant 18 mois maximum sous réserve de la désignation d'un gestionnaire temporaire. Après ce délai, un nouveau gestionnaire qualifié doit être nommé."},

{id:5939,prog:'LEGER',theme:'Accès à la profession',d:1,
e:"L'inscription au registre des transporteurs est effectuée auprès de :",
r:[{t:"La Chambre de Commerce"},{t:"La DREAL (ou DRIEAT en Île-de-France)",ok:true},{t:"La Préfecture du département"},{t:"Le Ministère des Transports directement"}],
x:"L'inscription au registre des transporteurs et la délivrance des licences relèvent de la DREAL (Direction Régionale de l'Environnement, de l'Aménagement et du Logement), sauf en Île-de-France où c'est la DRIEAT (Direction Régionale et Interdépartementale de l'Environnement, de l'Aménagement et des Transports)."},

// — GESTION FINANCIÈRE 10q —
{id:5940,prog:'LEGER',theme:'Gestion financière',d:1,
e:"La marge sur coûts variables (MCV) d'une entreprise avec CA=80 000 € et CV=48 000 € est de :",
r:[{t:"48 000 €"},{t:"32 000 €",ok:true},{t:"16 000 €"},{t:"80 000 €"}],
x:"MCV = CA - CV = 80 000 - 48 000 = 32 000 €. Le taux de MCV = 32 000 / 80 000 × 100 = 40 %. Cette MCV doit couvrir les charges fixes pour dégager un bénéfice. Si les CF sont de 28 000 €, le résultat avant IS serait de 4 000 €."},

{id:5941,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Le délai de rotation des créances clients (DSO) = 45 jours avec un CA de 120 000 €. Les créances clients sont de :",
r:[{t:"120 000 €"},{t:"15 000 €",ok:true},{t:"45 000 €"},{t:"2 666 €"}],
x:"DSO = Créances / CA × 360 → Créances = DSO × CA / 360 = 45 × 120 000 / 360 = 15 000 €. Ce montant correspond à ce que doivent les clients à un instant T. Un DSO de 45 jours signifie que les clients paient en moyenne 45 jours après la facturation."},

{id:5942,prog:'LEGER',theme:'Gestion financière',d:1,
e:"La valeur nette comptable (VNC) d'un actif amorti sur 5 ans à hauteur de 4 000 €/an après 3 ans est de :",
r:[{t:"20 000 €"},{t:"8 000 €",ok:true},{t:"12 000 €"},{t:"0 €"}],
x:"VNC = Valeur d'achat - Amortissements cumulés = 20 000 - (4 000 × 3) = 20 000 - 12 000 = 8 000 €. La VNC figure à l'actif du bilan. Elle peut différer significativement de la valeur de marché (ex : un VUL de 3 ans vaut souvent moins que sa VNC comptable)."},

{id:5943,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Le seuil de rentabilité d'une entreprise avec CF=24 000 € et taux MCV=40 % est de :",
r:[{t:"60 000 €",ok:true},{t:"9 600 €"},{t:"40 000 €"},{t:"96 000 €"}],
x:"SR = CF / Taux MCV = 24 000 / 0,40 = 60 000 €. L'entreprise doit réaliser au minimum 60 000 € de CA pour couvrir toutes ses charges. En dessous, elle est déficitaire. Au-dessus, chaque euro supplémentaire de CA génère 0,40 € de résultat supplémentaire."},

{id:5944,prog:'LEGER',theme:'Gestion financière',d:2,
e:"L'affacturage permet principalement de :",
r:[{t:"Réduire les charges fixes"},{t:"Transformer les créances clients en liquidités immédiates",ok:true},{t:"Augmenter le capital social"},{t:"Différer les paiements fournisseurs"}],
x:"L'affacturage = cession des créances clients à un factor contre paiement immédiat (moins commission). Avantages : trésorerie immédiate, externalisation du recouvrement, assurance contre l'insolvabilité client. Inconvénients : coût élevé (1-3 % du CA), perte de contact direct avec le client."},

{id:5945,prog:'LEGER',theme:'Gestion financière',d:3,
e:"Le ratio dette nette / EBITDA mesure :",
r:[{t:"La rentabilité des actifs"},{t:"La capacité de l'entreprise à rembourser ses dettes par son résultat opérationnel brut",ok:true},{t:"Le niveau de liquidité immédiate"},{t:"L'autonomie financière"}],
x:"Ratio levier = Dette nette / EBITDA. Un ratio < 3-4 est considéré sain pour les entreprises industrielles/transport. Au-delà de 5-6, le risque financier est élevé et les banques peuvent refuser de nouveaux prêts. Ce ratio est l'un des covenants financiers les plus utilisés dans les contrats de crédit."},

{id:5946,prog:'LEGER',theme:'Gestion financière',d:2,
e:"Le coefficient d'exploitation d'une entreprise de transport est de 93 %. Cela signifie :",
r:[{t:"93 % des véhicules sont en activité"},{t:"93 % du CA est absorbé par les charges, laissant 7 % de marge",ok:true},{t:"L'entreprise perd de l'argent"},{t:"L'entreprise est très rentable"}],
x:"Coefficient d'exploitation = Charges totales / CA × 100. Un coefficient de 93 % laisse 7 % de marge bénéficiaire. Dans le transport VUL, les coefficients entre 88 % et 94 % sont normaux. Au-delà de 95 %, la rentabilité est fragile. Au-delà de 100 %, l'entreprise est déficitaire."},

{id:5947,prog:'LEGER',theme:'Gestion financière',d:1,
e:"Une entreprise avec FRNG=8 000 € et BFR=12 000 € a une trésorerie nette de :",
r:[{t:"+4 000 €"},{t:"–4 000 €",ok:true},{t:"+20 000 €"},{t:"0 €"}],
x:"Trésorerie nette = FRNG - BFR = 8 000 - 12 000 = -4 000 €. Trésorerie négative : l'entreprise dépend du découvert bancaire pour couvrir l'écart. Elle doit augmenter son FRNG (nouveaux apports, emprunts LT) ou réduire son BFR (délais clients plus courts, délais fournisseurs plus longs)."},

{id:5948,prog:'LEGER',theme:'Gestion financière',d:2,
e:"La CAF (Capacité d'Autofinancement) se calcule comme :",
r:[{t:"Résultat net uniquement"},{t:"Résultat net + Dotations aux amortissements et provisions - Reprises",ok:true},{t:"Résultat avant IS"},{t:"Chiffre d'affaires - Charges variables"}],
x:"CAF = Résultat net + Dotations aux amortissements et provisions - Reprises sur provisions. Elle représente le flux de trésorerie interne généré par l'activité. Les amortissements sont rajoutés car ils sont des charges calculées sans décaissement. La CAF sert à rembourser les emprunts, investir et distribuer des dividendes."},

{id:5949,prog:'LEGER',theme:'Gestion financière',d:2,
e:"L'escompte commercial de 2 % à 30 jours correspond à un taux annualisé de :",
r:[{t:"2 %"},{t:"Environ 24 % si l'échéance normale est à 60 jours",ok:true},{t:"12 %"},{t:"48 %"}],
x:"Taux annualisé = (Taux escompte / Durée gagnée) × 360. Si l'escompte est 2 % pour 30 jours gagnés (paiement à 30j vs échéance à 60j) : 2 / 30 × 360 = 24 % par an. Ce coût élevé incite le client à profiter de l'escompte (payer tôt) plutôt que d'utiliser un découvert bancaire coûteux."},

// — SÉCURITÉ ROUTIÈRE 10q —
{id:5950,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"L'utilisation du téléphone tenu en main au volant est sanctionnée par :",
r:[{t:"90 €"},{t:"135 € et 3 points retirés",ok:true},{t:"450 €"},{t:"Un simple avertissement"}],
x:"L'utilisation du téléphone tenu en main est une contravention de 4ème classe : 135 € (minorée à 90 €) et retrait de 3 points. En cas de récidive dans l'année : amende doublée, stage de sensibilisation possible. Le kit mains-libres intégré reste autorisé mais toute manipulation d'écran est interdite."},

{id:5951,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"La surcharge d'un VUL affecte principalement la sécurité par :",
r:[{t:"Une meilleure stabilité"},{t:"Un allongement des distances de freinage et une usure prématurée des pneus",ok:true},{t:"Une amélioration de la traction"},{t:"Aucun impact sur la sécurité active"}],
x:"La surcharge dégrade la sécurité : allongement des distances de freinage (le système n'est pas dimensionné pour ce poids), usure prématurée et risque d'éclatement des pneumatiques, surcharge du châssis et des suspensions, perte de maniabilité. Elle peut invalider l'assurance en cas d'accident."},

{id:5952,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"Le port de la ceinture de sécurité est obligatoire pour :",
r:[{t:"Le conducteur uniquement"},{t:"Tous les occupants, sur toutes les places équipées",ok:true},{t:"Uniquement sur autoroute"},{t:"Seulement les passagers à l'arrière"}],
x:"Le port de la ceinture est obligatoire pour tous les occupants d'un véhicule sur toutes les places équipées (art. R.412-1 du Code de la route). Amende 135 € et retrait de 3 points. Le conducteur est verbalisable pour chaque passager non attaché dans son véhicule."},

{id:5953,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"La distance de sécurité recommandée à 130 km/h sur autoroute est :",
r:[{t:"50 m"},{t:"Au moins 72 m (règle des 2 secondes)",ok:true},{t:"200 m"},{t:"30 m"}],
x:"Règle des 2 secondes : à 130 km/h, le véhicule parcourt 36 m/s. En 2 secondes = 72 m minimum. L'art. R.412-12 impose une distance au moins égale à la distance parcourue en 2 secondes. Par mauvais temps, ce délai doit être doublé (4 secondes = 144 m)."},

{id:5954,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"La profondeur minimale légale des sculptures des pneus est de :",
r:[{t:"1 mm"},{t:"1,6 mm",ok:true},{t:"2 mm"},{t:"3 mm"}],
x:"La profondeur minimale légale est de 1,6 mm (art. R.314-1 Code de la route). Les témoins d'usure intégrés dans les rainures principales correspondent à ce niveau. Pour les pneus hiver, 4 mm de profondeur est recommandé pour une efficacité correcte sur neige."},

{id:5955,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"Le risque routier professionnel représente environ quelle part des accidents mortels du travail en France ?",
r:[{t:"10 %"},{t:"40 %",ok:true},{t:"60 %"},{t:"5 %"}],
x:"Le risque routier professionnel (accidents de mission + trajet) est la 1ère cause de mortalité au travail en France, représentant environ 40 % des accidents mortels. Il concerne tous les salariés se déplaçant professionnellement. Les employeurs ont une obligation légale de prévention intégrée au DUER."},

{id:5956,prog:'LEGER',theme:'Sécurité routière',d:3,
e:"Le chargement d'un VUL doit résister à une décélération d'urgence d'environ :",
r:[{t:"0,3 g"},{t:"0,8 g vers l'avant (norme EN 12195)",ok:true},{t:"1,5 g"},{t:"Aucune norme précise"}],
x:"Les normes d'arrimage EN 12195 recommandent que le chargement résiste à 0,8 g vers l'avant (freinage), 0,5 g vers l'arrière et 0,5 g latéralement. Un chargement non arrimé peut devenir un projectile lors d'un freinage brutal, représentant un danger mortel pour les occupants et les autres usagers."},

{id:5957,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"La conduite sous stupéfiants est :",
r:[{t:"Sanctionnée uniquement en cas d'accident"},{t:"Un délit pénal : 2 ans d'emprisonnement et 4 500 € d'amende",ok:true},{t:"Une simple contravention"},{t:"Non sanctionnée pour les conducteurs professionnels"}],
x:"La conduite sous l'emprise de stupéfiants (art. L.235-1 Code de la route) est un délit pénal : 2 ans d'emprisonnement, 4 500 € d'amende, 6 points retirés, suspension possible du permis. Un test salivaire positif suffit à caractériser l'infraction, même sans signe visible d'imprégnation."},

{id:5958,prog:'LEGER',theme:'Sécurité routière',d:1,
e:"En cas de panne sur autoroute, la priorité absolue est de :",
r:[{t:"Appeler son employeur en premier"},{t:"Allumer les feux de détresse, s'arrêter sur la BAU et sortir du véhicule par la droite",ok:true},{t:"Poser immédiatement les triangles"},{t:"Rester dans le véhicule et attendre les secours"}],
x:"Procédure BAU autoroute : 1) Feux de détresse, 2) Rejoindre la BAU, 3) SORTIR IMMÉDIATEMENT par la droite (risque d'impact par l'arrière), 4) Revêtir le gilet réfléchissant, 5) S'éloigner du véhicule derrière la glissière si possible, 6) Appeler le 15, 17 ou 18, 7) Placer les triangles SEULEMENT si en sécurité."},

{id:5959,prog:'LEGER',theme:'Sécurité routière',d:2,
e:"L'éco-conduite bien pratiquée permet de réduire la consommation de carburant d'un VUL de :",
r:[{t:"2 à 5 %"},{t:"10 à 15 %",ok:true},{t:"30 à 40 %"},{t:"Plus de 50 %"}],
x:"L'éco-conduite bien maîtrisée réduit la consommation de 10 à 15 % : anticipation des situations, montée rapide en régime pour passer au rapport supérieur, maintien d'une vitesse régulière, coupure moteur à l'arrêt prolongé. Bénéfices : moins de carburant, moins d'usure des freins et pneus, moindre empreinte CO2."},
// ══════════════════════════════════════
// CPC LOURD — DROIT SOCIAL (80 questions)
// ══════════════════════════════════════
{id:6001,prog:'LOURD',theme:'Droit social',d:1,
e:"Le repos journalier minimal d'un conducteur PL en cabine (repos réduit) est de :",
r:[{t:"8 heures"},{t:"9 heures",ok:true},{t:"11 heures"},{t:"12 heures"}],
x:"Le repos journalier réduit est de 9 heures consécutives minimum (au lieu de 11 heures pour le repos normal). Il ne peut être pris que 3 fois entre deux repos hebdomadaires. Le repos réduit n'a pas à être compensé."},

{id:6002,prog:'LOURD',theme:'Droit social',d:2,
e:"Un conducteur peut prendre son repos hebdomadaire en cabine :",
r:[{t:"Toujours, c'est autorisé"},{t:"Jamais — le repos hebdomadaire normal doit être pris dans un hébergement adéquat hors du véhicule",ok:true},{t:"Uniquement pour le repos réduit (24h)"},{t:"Uniquement à l'étranger"}],
x:"Depuis l'arrêt de la CJUE (2020) et le règlement (UE) 2020/1054, le repos hebdomadaire normal (45h) ne peut pas être pris dans la cabine du véhicule. Il doit être pris dans un hébergement adéquat (hôtel, chambre d'hôte…) avec des installations sanitaires. Le repos hebdomadaire réduit (24h) peut être pris en cabine."},

{id:6003,prog:'LOURD',theme:'Droit social',d:1,
e:"La durée maximale de conduite sur 2 semaines consécutives est de :",
r:[{t:"90 heures",ok:true},{t:"112 heures"},{t:"80 heures"},{t:"100 heures"}],
x:"Le règlement 561/2006 limite la durée de conduite à 56 heures par semaine et à 90 heures sur deux semaines consécutives. Ces deux limites doivent être respectées simultanément."},

{id:6004,prog:'LOURD',theme:'Droit social',d:2,
e:"En cas de multi-présence (deux conducteurs), le repos journalier peut être réduit à :",
r:[{t:"6 heures"},{t:"8 heures",ok:true},{t:"9 heures"},{t:"10 heures"}],
x:"Lorsqu'un véhicule est conduit par deux conducteurs (équipage), chaque conducteur doit prendre un repos journalier d'au moins 9 heures dans une période de 30 heures (au lieu de 11h en solo). Pendant le trajet, le conducteur non actif peut prendre son repos sur le siège passager."},

{id:6005,prog:'LOURD',theme:'Droit social',d:3,
e:"L'attestation d'activités doit être remise par l'employeur au conducteur pour :",
r:[{t:"Les jours travaillés uniquement"},{t:"Les jours non travaillés (congés, maladie, repos…) depuis les 28 derniers jours",ok:true},{t:"Les jours de conduite internationale uniquement"},{t:"Les jours de formation"}],
x:"L'attestation d'activités (ou attestation de conduite) est un document que l'employeur doit fournir au conducteur pour justifier les périodes de 28 jours précédant le contrôle où le conducteur n'était pas au volant (congés, repos compensateurs, maladie, formation…). Elle complète les données du tachygraphe lors des contrôles."},

{id:6006,prog:'LOURD',theme:'Droit social',d:2,
e:"La durée minimale du repos hebdomadaire réduit (en cas de dérogation) est de :",
r:[{t:"24 heures",ok:true},{t:"32 heures"},{t:"35 heures"},{t:"45 heures"}],
x:"Le repos hebdomadaire réduit est de 24 heures consécutives minimum. La réduction par rapport aux 45 heures normales doit être compensée en bloc avant la fin de la 3ème semaine suivant la semaine en question. La compensation doit être accolée à un repos d'au moins 9 heures."},

{id:6007,prog:'LOURD',theme:'Droit social',d:1,
e:"Le tachygraphe numérique enregistre automatiquement :",
r:[{t:"Uniquement les heures de conduite"},{t:"La conduite, les repos, les autres travaux et les disponibilités",ok:true},{t:"Uniquement la vitesse et le kilométrage"},{t:"Uniquement les infractions"}],
x:"Le tachygraphe numérique enregistre en temps réel : les activités du conducteur (conduite, repos, travail, disponibilité), la vitesse, la distance, l'heure et les données d'identification. Le conducteur sélectionne son activité sur l'appareil."},

{id:6008,prog:'LOURD',theme:'Droit social',d:2,
e:"Le dépassement de la durée de conduite journalière de plus d'une heure constitue :",
r:[{t:"Une simple contravention"},{t:"Un délit pénal",ok:true},{t:"Une faute professionnelle sans sanction pénale"},{t:"Une infraction administrative"}],
x:"Le dépassement de plus d'une heure de la durée de conduite journalière est un délit pénal (pas une simple contravention), passible de poursuites pénales pour le conducteur et potentiellement pour l'employeur en cas de complicité ou de pression. En dessous d'une heure, c'est une contravention."},

{id:6009,prog:'LOURD',theme:'Droit social',d:1,
e:"La FCOS (Formation Continue Obligatoire de Sécurité) pour les conducteurs PL a une durée de :",
r:[{t:"35 heures tous les 5 ans",ok:true},{t:"105 heures tous les 5 ans"},{t:"35 heures par an"},{t:"140 heures au total"}],
x:"La FCOS (ou CQC Renouvellement) est de 35 heures sur 5 ans pour les conducteurs PL déjà titulaires du CQC initial (FIMO). Elle comprend des modules obligatoires liés à la sécurité routière, la réglementation sociale et l'éco-conduite."},

{id:6010,prog:'LOURD',theme:'Droit social',d:2,
e:"Le temps de service d'un conducteur PL comprend :",
r:[{t:"Uniquement les heures de conduite"},{t:"La conduite, les chargements/déchargements, l'entretien, les documents ET le temps de disponibilité",ok:true},{t:"La conduite et les pauses uniquement"},{t:"Uniquement le temps rémunéré"}],
x:"Le temps de service (ou temps de travail) d'un conducteur routier comprend : le temps de conduite, les chargements et déchargements, les nettoyages et entretiens techniques, les formalités administratives, et le temps de disponibilité (attente de chargement dont la durée est connue à l'avance). Les pauses et les repos ne comptent pas."},

{id:6011,prog:'LOURD',theme:'Droit social',d:3,
e:"Le contingent d'heures supplémentaires pour les conducteurs PL est fixé par :",
r:[{t:"La loi à 220 heures par an"},{t:"La convention collective des transports routiers, généralement à 195 heures",ok:true},{t:"Un accord d'entreprise uniquement"},{t:"Il n'y a pas de contingent pour les conducteurs"}],
x:"Le contingent annuel d'heures supplémentaires est fixé par la convention collective nationale des transports routiers à 195 heures (au lieu de 220 heures par défaut). Au-delà de ce contingent, chaque heure supplémentaire nécessite l'autorisation de l'inspection du travail et ouvre droit à un repos compensateur obligatoire."},

{id:6012,prog:'LOURD',theme:'Droit social',d:2,
e:"La carte conducteur du tachygraphe numérique appartient à :",
r:[{t:"L'employeur"},{t:"Le conducteur personnellement",ok:true},{t:"La DREAL"},{t:"L'entreprise de transport"}],
x:"La carte conducteur est personnelle et nominative : elle appartient au conducteur et le suit tout au long de sa carrière, même en changeant d'employeur. Elle contient ses données d'activité sur les 28 derniers jours. L'employeur ne peut pas la conserver ou la manipuler."},

{id:6013,prog:'LOURD',theme:'Droit social',d:1,
e:"La durée de conservation des disques de tachygraphe analogique par le conducteur pendant le trajet est de :",
r:[{t:"Les disques des 28 derniers jours + le disque du jour en cours",ok:true},{t:"Uniquement le disque du jour en cours"},{t:"Les disques des 7 derniers jours"},{t:"Les disques des 3 derniers mois"}],
x:"Lors d'un contrôle routier, le conducteur doit présenter les disques tachygraphes (ou les données de la carte conducteur pour le numérique) des 28 jours précédents, plus le disque/données du jour en cours. Ces documents doivent être à bord du véhicule pendant le transport."},

{id:6014,prog:'LOURD',theme:'Droit social',d:2,
e:"L'heure de nuit pour un conducteur PL (grand routier) ouvre droit à :",
r:[{t:"Aucune contrepartie spécifique"},{t:"Une majoration de salaire ou un repos compensateur selon la convention collective",ok:true},{t:"Automatiquement des heures supplémentaires"},{t:"Un taux de 200 % du salaire normal"}],
x:"Le travail de nuit (entre 21h et 6h pour les conducteurs routiers) ouvre droit à des contreparties définies par la convention collective des transports routiers : soit une majoration de salaire (généralement entre 10 et 25 %), soit un repos compensateur équivalent."},

{id:6015,prog:'LOURD',theme:'Droit social',d:3,
e:"En cas d'utilisation frauduleuse du tachygraphe (aimant, câble modifié…), les sanctions pour le conducteur sont :",
r:[{t:"Une simple contravention de 1ère classe"},{t:"Un délit pouvant aller jusqu'à 2 ans d'emprisonnement et 30 000 € d'amende",ok:true},{t:"Uniquement une suspension de permis"},{t:"Une amende forfaitaire de 500 €"}],
x:"La falsification du tachygraphe est un délit grave : elle peut entraîner jusqu'à 2 ans d'emprisonnement et 30 000 € d'amende pour le conducteur. L'employeur complice encourt des peines similaires. La carte conducteur peut être suspendue ou annulée."},

{id:6016,prog:'LOURD',theme:'Droit social',d:2,
e:"Le conducteur PL qui constate une défaillance de son tachygraphe doit :",
r:[{t:"Continuer à conduire normalement sans signalement"},{t:"Faire réparer le tachygraphe à la première occasion et tenir un enregistrement manuel en attendant",ok:true},{t:"Immobiliser le véhicule jusqu'à réparation"},{t:"Appeler la police"}],
x:"En cas de défaillance du tachygraphe, le conducteur doit : noter manuellement ses activités (sur feuille ou papier en l'absence de disques/carte) depuis le moment de la panne, faire réparer l'appareil dès que possible. Si le retour au dépôt est impossible dans les 7 jours, la réparation doit être effectuée pendant le trajet."},

{id:6017,prog:'LOURD',theme:'Droit social',d:1,
e:"Le temps de disponibilité d'un conducteur PL est défini comme :",
r:[{t:"Le temps de pause réglementaire de 45 min"},{t:"Le temps pendant lequel le conducteur attend sans conduire (chargement, douane…) dont la durée est connue à l'avance",ok:true},{t:"Le temps de repos journalier"},{t:"Les congés payés"}],
x:"Le temps de disponibilité (ou temps d'attente) est le temps où le conducteur est présent dans le véhicule ou à sa disposition sans conduire, et dont il connaît la durée à l'avance. Il ne compte pas comme temps de travail effectif mais est rémunéré (à taux réduit selon la CCN). Il ne peut pas être utilisé comme temps de repos."},

{id:6018,prog:'LOURD',theme:'Droit social',d:2,
e:"La 'semaine' au sens du règlement 561/2006 commence :",
r:[{t:"Le lundi à 00h00",ok:true},{t:"Le dimanche à minuit"},{t:"Au premier départ du conducteur"},{t:"Le 1er jour du mois"}],
x:"Selon le règlement 561/2006, la semaine commence le lundi à 00h00 et se termine le dimanche à 24h00. Cette définition est importante pour le calcul des durées maximales de conduite hebdomadaires (56h/semaine) et bihebdomadaires (90h/2 semaines)."},

{id:6019,prog:'LOURD',theme:'Droit social',d:3,
e:"Un conducteur effectue 10h de conduite le lundi. Le mardi, il peut au maximum conduire :",
r:[{t:"9 heures"},{t:"Uniquement 8 heures (pour ne pas dépasser 90h/2 semaines)"},{t:"9 heures s'il n'a pas encore utilisé ses 2 extensions à 10h de la semaine",ok:true},{t:"Aucune heure — il doit prendre un repos"}],
x:"La limite journalière est de 9 heures, sauf 2 fois par semaine où elle peut être portée à 10 heures. Si le conducteur a conduit 10h le lundi (1ère extension), il peut conduire jusqu'à 10h le mardi (2ème extension possible) ou jusqu'à 9h. Mais la limite hebdomadaire de 56h et bihebdomadaire de 90h s'appliquent."},

{id:6020,prog:'LOURD',theme:'Droit social',d:2,
e:"Le droit aux indemnités de grand déplacement pour un conducteur PL est conditionné par :",
r:[{t:"Tout déplacement hors de l'établissement"},{t:"Une distance minimale du domicile ou de l'établissement, selon la CCN",ok:true},{t:"Un déplacement à l'étranger uniquement"},{t:"L'accord du responsable hiérarchique"}],
x:"Les indemnités de grand déplacement (repas, couchées) sont versées aux conducteurs lorsque les conditions de déplacement les empêchent de regagner leur domicile ou l'établissement, selon des critères de distance et de durée fixés par la Convention Collective Nationale des Transports Routiers."},

// ══════════════════════════════════════
// CPC LOURD — GESTION FINANCIÈRE (70 questions)
// ══════════════════════════════════════
{id:6101,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"L'indice CNR (Comité National Routier) publie des références de coûts pour :",
r:[{t:"Les véhicules particuliers"},{t:"Le transport routier de marchandises (PL et messagerie)",ok:true},{t:"Le transport maritime"},{t:"L'aérien cargo"}],
x:"Le CNR est un organisme public (sous tutelle des ministères des Transports et des Finances) qui publie mensuellement des indices de coûts de transport routier : carburant, pneumatiques, péages, salaires conducteurs, entretien, amortissement. Ses indices servent de référence pour les révisions de prix dans les contrats de transport."},

{id:6102,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"Le prix du carburant représente environ quelle part du coût de revient d'un PL longue distance ?",
r:[{t:"5 à 10 %"},{t:"20 à 35 %",ok:true},{t:"50 %"},{t:"Plus de 60 %"}],
x:"Le carburant représente typiquement 25 à 35 % du coût de revient d'un poids lourd (selon la distance, le type de transport et les prix du gazole). C'est le premier poste de charges variables. La surcharge carburant est souvent répercutée sur le prix de vente via des clauses d'indexation."},

{id:6103,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"La surcharge carburant indexée dans un contrat de transport se déclenche généralement :",
r:[{t:"À chaque variation du prix du carburant"},{t:"Quand le prix du carburant dépasse un seuil de référence défini au contrat",ok:true},{t:"Uniquement en cas de hausse de plus de 50 %"},{t:"Elle n'existe pas dans les contrats de transport"}],
x:"La clause de révision carburant (ou surcharge carburant) est déclenchée quand le prix du gazole dépasse un seuil de référence défini dans le contrat (ex : prix CNR de référence). La variation est alors répercutée selon une formule convenue. Elle protège le transporteur des fluctuations des prix du carburant."},

{id:6104,prog:'LOURD',theme:'Gestion financière PL',d:3,
e:"La valeur résiduelle nette d'un tracteur acheté 120 000 € amorti sur 5 ans, après 3 ans, est de :",
r:[{t:"60 000 €"},{t:"48 000 €",ok:true},{t:"72 000 €"},{t:"0 €"}],
x:"Amortissement annuel linéaire = 120 000 / 5 = 24 000 €/an. Après 3 ans, amortissements cumulés = 3 × 24 000 = 72 000 €. Valeur nette comptable (VNC) = 120 000 - 72 000 = 48 000 €. La VNC représente la valeur résiduelle du bien au bilan."},

{id:6105,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"Le coefficient d'exploitation d'une entreprise PL est de 92 %. Cela signifie que :",
r:[{t:"L'entreprise perd de l'argent"},{t:"L'entreprise dégage une marge bénéficiaire de 8 % du CA",ok:true},{t:"92 % du CA est consacré aux charges fixes"},{t:"L'entreprise a un taux de remplissage de 92 %"}],
x:"Coefficient d'exploitation = Charges d'exploitation / CA × 100. Un coefficient de 92 % signifie que 92 % du CA sert à couvrir les charges. Il reste 8 % de marge bénéficiaire. Plus le coefficient est bas, plus l'entreprise est rentable. Un coefficient supérieur à 100 % signifie une perte."},

{id:6106,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"Le taux de remplissage (ou taux de chargement) d'un camion mesure :",
r:[{t:"Le pourcentage du temps où le camion est en mouvement"},{t:"Le rapport entre le tonnage transporté et la capacité maximale du véhicule",ok:true},{t:"Le nombre de livraisons par jour"},{t:"Le pourcentage d'heures de conduite sur le temps total"}],
x:"Le taux de remplissage = (Tonnage effectivement transporté / PTAC ou capacité utile) × 100. Un taux de remplissage élevé (proche de 100 %) signifie que le camion transporte au maximum de ses capacités, ce qui améliore la rentabilité par km. Les voyages à vide dégradent ce taux."},

{id:6107,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"La provision pour renouvellement du parc de véhicules est :",
r:[{t:"Une charge déductible fiscalement immédiatement"},{t:"Une dotation aux provisions pour charges futures, déductible fiscalement sous conditions",ok:true},{t:"Un investissement non déductible"},{t:"Un capital réservé aux dividendes"}],
x:"Une provision pour renouvellement de véhicules peut être constituée si elle répond aux critères de déductibilité fiscale : être nettement précisée (objet, nature et montant), résulter d'un événement survenu pendant l'exercice, et être probable. Elle réduit le résultat imposable de l'exercice."},

{id:6108,prog:'LOURD',theme:'Gestion financière PL',d:3,
e:"Pour un ensemble tracteur-semi, le coût du péage représente environ :",
r:[{t:"2 à 5 % du coût de revient"},{t:"5 à 10 % du coût de revient",ok:true},{t:"20 % du coût de revient"},{t:"Moins de 1 %"}],
x:"Les péages autoroutiers pour les poids lourds représentent typiquement 5 à 10 % du coût de revient total (variable selon le réseau utilisé et la distance). Ils constituent une charge variable significative. La carte de télépéage et les accords tarifaires avec les sociétés autoroutières permettent parfois des réductions."},

{id:6109,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"L'usure des pneumatiques d'un PL est comptabilisée en :",
r:[{t:"Charge fixe (indépendante du kilométrage)"},{t:"Charge variable (proportionnelle au kilométrage parcouru)",ok:true},{t:"Charge exceptionnelle"},{t:"Immobilisation amortissable"}],
x:"L'usure des pneumatiques est une charge variable directement proportionnelle au kilométrage parcouru. Elle est calculée en divisant le coût total d'un jeu de pneus (achat + rechapage éventuel) par la durée de vie estimée en kilomètres. C'est un coût au km."},

{id:6110,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"Pour calculer le prix de revient d'un transport, on doit inclure :",
r:[{t:"Uniquement les charges directes liées au trajet"},{t:"Toutes les charges (directes et indirectes) réparties sur le trajet",ok:true},{t:"Uniquement le carburant et les péages"},{t:"Uniquement le salaire du conducteur"}],
x:"Un prix de revient complet intègre : les charges directes variables (carburant, péages, pneumatiques, entretien courant) + les charges fixes directes (amortissement, assurance, salaire conducteur) + une quote-part des charges de structure (loyer, personnel administratif, frais généraux). Négliger les charges de structure conduit à une sous-tarification."},

{id:6111,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"La contribution au financement de la formation professionnelle (CFP) est :",
r:[{t:"Facultative"},{t:"Obligatoire pour toutes les entreprises employant au moins 1 salarié",ok:true},{t:"Obligatoire uniquement pour les entreprises de plus de 10 salariés"},{t:"Remplacée par le compte personnel de formation"}],
x:"La contribution formation professionnelle (CPF, ex-plan de formation) est obligatoire pour tout employeur. Son taux varie selon la taille de l'entreprise (de 0,55 % à 1 % de la masse salariale brute). Elle finance la formation continue, l'apprentissage et les dispositifs comme le CPF."},

{id:6112,prog:'LOURD',theme:'Gestion financière PL',d:3,
e:"Le ratio de couverture des frais fixes mesure :",
r:[{t:"Le nombre d'heures de conduite par jour"},{t:"La capacité de la marge sur coûts variables à couvrir les charges fixes",ok:true},{t:"Le niveau de trésorerie disponible"},{t:"Le taux d'endettement de l'entreprise"}],
x:"Ratio de couverture des frais fixes = MCV / Charges fixes × 100. Un ratio > 100 % signifie que la MCV couvre l'intégralité des charges fixes (l'entreprise est bénéficiaire). Un ratio < 100 % indique que les charges fixes ne sont pas entièrement couvertes."},

{id:6113,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"La durée d'amortissement standard d'un tracteur PL est généralement de :",
r:[{t:"3 ans"},{t:"5 ans",ok:true},{t:"8 ans"},{t:"10 ans"}],
x:"La durée normale d'amortissement d'un tracteur PL est généralement de 5 ans en comptabilité (durée fiscalement admise). Certaines entreprises amortissent sur 4 ans pour des véhicules très intensément utilisés. La semi-remorque est généralement amortie sur 7 à 10 ans."},

{id:6114,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"Le ratio kilométres à vide / kilométres totaux est un indicateur de :",
r:[{t:"La consommation de carburant"},{t:"L'efficacité commerciale et opérationnelle du transporteur",ok:true},{t:"L'usure des pneus"},{t:"La rentabilité par client"}],
x:"Le taux de km à vide mesure le pourcentage de km parcourus sans chargement. Un taux élevé (>20-25 %) signale un problème d'optimisation des retours. Réduire ce taux (trouver des frets de retour, utiliser des bourses de fret) améliore directement la rentabilité en étalant les charges fixes sur plus de km chargés."},

{id:6115,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"En transport PL, le terme 'full truck load' (FTL) désigne :",
r:[{t:"Un camion à pleine capacité de poids"},{t:"Un transport où le camion est entièrement affrété pour un seul client",ok:true},{t:"Un transport express en camion complet"},{t:"Un camion équipé d'un hayon élévateur"}],
x:"FTL (Full Truck Load) désigne un mode de transport où la totalité du véhicule est réservée pour un seul expéditeur/destinataire. À l'opposé, le LTL (Less than Truck Load) ou messagerie regroupe plusieurs expéditeurs dans le même véhicule. Le FTL est généralement moins coûteux par kg pour les grosses quantités."},

{id:6116,prog:'LOURD',theme:'Gestion financière PL',d:3,
e:"Le prix de revient au coup (trajet aller simple avec retour à vide) intègre :",
r:[{t:"Uniquement les charges de l'aller chargé"},{t:"Les charges aller ET retour (même à vide), car le coût du retour doit être couvert",ok:true},{t:"Les charges de 3 trajets similaires"},{t:"Uniquement les charges variables"}],
x:"Pour un transport A/B avec retour à vide, le prix de revient doit intégrer l'intégralité des charges (aller + retour), car le conducteur, le véhicule et tous les frais continuent de courir même à vide. Le prix facturé au client doit donc couvrir le coût total aller-retour pour assurer la rentabilité."},

{id:6117,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"La cession d'un véhicule PL avec une plus-value génère :",
r:[{t:"Toujours un avantage fiscal immédiat"},{t:"Un produit exceptionnel imposable, mais pouvant bénéficier d'un étalement ou d'une exonération sous conditions",ok:true},{t:"Une charge déductible"},{t:"Aucun impact fiscal"}],
x:"La plus-value réalisée sur la cession d'un PL (prix de vente > valeur nette comptable) constitue un produit exceptionnel imposable (IS ou IR). Pour les PME, des régimes de faveur existent : exonération sous condition de CA (art. 151 septies du CGI pour l'IR) ou remploi des plus-values."},

{id:6118,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"L'assurance marchandises transportées (AMT) couvre :",
r:[{t:"La responsabilité civile du transporteur"},{t:"La valeur des marchandises en cas de perte ou dommage pendant le transport",ok:true},{t:"Les dommages causés aux tiers"},{t:"Les accidents du travail du conducteur"}],
x:"L'assurance AMT (ou assurance 'ad valorem') couvre la valeur des marchandises transportées contre les risques de perte, vol ou dommage pendant le transport. Elle est souscrite par l'expéditeur ou le destinataire. Elle complète la responsabilité légale du transporteur qui est plafonnée."},

{id:6119,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"La Valeur Ajoutée (VA) d'une entreprise de transport se calcule ainsi :",
r:[{t:"CA - Charges de personnel"},{t:"CA (ou production) - Consommations intermédiaires (achats, sous-traitance, services extérieurs)",ok:true},{t:"Résultat net + Amortissements"},{t:"CA - Charges fixes"}],
x:"VA = Production de l'exercice - Consommations intermédiaires. Elle mesure la richesse créée par l'entreprise elle-même. Pour une entreprise de transport : VA = CA - (carburant, pneumatiques, péages, sous-traitance, loyers, services extérieurs). Elle se répartit ensuite entre salariés (salaires), État (impôts), banques (intérêts) et actionnaires (dividendes)."},

{id:6120,prog:'LOURD',theme:'Gestion financière PL',d:3,
e:"Le business model de la commission de transport se caractérise par :",
r:[{t:"Un transporteur qui possède sa flotte et facture le transport"},{t:"Un commissionnaire qui organise le transport pour son compte mais en confie l'exécution à des transporteurs",ok:true},{t:"Un groupage de marchandises par plusieurs expéditeurs"},{t:"Un contrat exclusif entre un transporteur et un client"}],
x:"Le commissionnaire de transport (art. L.132-3 du Code de commerce) organise le transport pour le compte de son client mais engage sa propre responsabilité. Il sous-traite l'exécution physique à des transporteurs. Son modèle économique est basé sur la différence entre le prix facturé au client et le coût de la sous-traitance (commission)."},

// ══════════════════════════════════════
// CPC LOURD — ACCÈS PROFESSION (40 questions)
// ══════════════════════════════════════
{id:6201,prog:'LOURD',theme:"Accès à la profession PL",d:2,
e:"La licence de transport intérieur est délivrée pour une durée de :",
r:[{t:"5 ans renouvelables"},{t:"10 ans renouvelables",ok:true},{t:"Elle est permanente"},{t:"3 ans pour les nouvelles entreprises"}],
x:"La licence de transport intérieur (LTI) et la licence communautaire (LC) sont délivrées pour une durée de 10 ans renouvelables. Le renouvellement est soumis à la vérification que l'entreprise continue de satisfaire aux 3 conditions d'accès (honorabilité, capacité financière et professionnelle)."},

{id:6202,prog:'LOURD',theme:"Accès à la profession PL",d:1,
e:"Le nombre maximum de véhicules qu'un gestionnaire de transport peut gérer pour plusieurs entreprises est de :",
r:[{t:"10 véhicules"},{t:"50 véhicules",ok:true},{t:"100 véhicules"},{t:"Il n'y a pas de limite"}],
x:"Un même gestionnaire de transport peut exercer ses fonctions pour au maximum 4 entreprises de transport différentes, représentant un parc total ne dépassant pas 50 véhicules. Au-delà de ces limites, une autorisation spéciale est requise."},

{id:6203,prog:'LOURD',theme:"Accès à la profession PL",d:2,
e:"La copie certifiée conforme de la licence communautaire doit se trouver :",
r:[{t:"Au siège de l'entreprise uniquement"},{t:"Dans chaque véhicule effectuant un transport international",ok:true},{t:"Uniquement dans les véhicules de plus de 7,5t"},{t:"Elle n'est pas obligatoire à bord du véhicule"}],
x:"Une copie certifiée conforme de la licence communautaire doit être présente dans chaque véhicule effectuant des transports internationaux de marchandises au sein de l'UE. L'original reste au siège de l'entreprise. En cas de contrôle, l'absence de cette copie est une infraction."},

{id:6204,prog:'LOURD',theme:"Accès à la profession PL",d:3,
e:"Le règlement 1071/2009 impose à chaque entreprise de transport de disposer d'un établissement stable disposant de :",
r:[{t:"Uniquement d'une boîte aux lettres"},{t:"Locaux, matériel de gestion, documents, et parc adapté dans l'État membre",ok:true},{t:"D'au moins 3 véhicules"},{t:"D'un capital social minimum de 9 000 €"}],
x:"Le règlement 1071/2009 impose que l'établissement soit réel et stable : des locaux où sont conservés les documents principaux (contrats de transport, documents comptables, fichier du personnel), un matériel de gestion adapté, et un parc de véhicules immatriculé dans l'État membre (ou utilisé sur la base d'un contrat de crédit-bail)."},

{id:6205,prog:'LOURD',theme:"Accès à la profession PL",d:2,
e:"En cas de non-respect grave et répété des règles de temps de conduite par une entreprise, l'autorité compétente peut :",
r:[{t:"Uniquement infliger une amende"},{t:"Retirer temporairement ou définitivement l'autorisation d'exercer",ok:true},{t:"Uniquement envoyer un avertissement"},{t:"Suspendre uniquement la carte conducteur"}],
x:"Les autorités compétentes (DREAL en France) peuvent, en cas d'infractions graves et répétées aux réglementations routières ou sociales, suspendre ou retirer l'autorisation d'exercer (licence de transport). C'est la sanction la plus sévère possible pour une entreprise de transport."},

// ══════════════════════════════════════
// CPC LOURD — RÉGLEMENTATION (60 questions)
// ══════════════════════════════════════
{id:6301,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"La FIMO (Formation Initiale Minimale Obligatoire) pour les nouveaux conducteurs PL dure :",
r:[{t:"105 heures (3 semaines)"},{t:"280 heures — voie longue (titre professionnel)"},{t:"35 heures"},{t:"140 heures (4 semaines)",ok:true}],
x:"La FIMO est une formation accélérée de 140 heures (4 semaines) dans un centre agréé. Il existe aussi une voie longue de 280 heures (CAP, Bac Pro, Titre professionnel CTRMV/CTRMP) donnant une équivalence FIMO. La FCOS de renouvellement est de 35 heures tous les 5 ans."},

{id:6302,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Le transport sous température dirigée de produits laitiers frais exige une température maximale de :",
r:[{t:"+2°C"},{t:"+4°C",ok:true},{t:"+8°C"},{t:"+10°C"}],
x:"Les produits laitiers frais (yaourts, fromages frais, crèmes…) doivent être transportés à une température maximale de +4°C selon la réglementation sanitaire française. Les laitages crus et produits carnés hachés nécessitent encore des températures plus basses."},

{id:6303,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"Le PTAC d'un ensemble routier standard (tracteur + semi 5 essieux) est limité en France à :",
r:[{t:"38 tonnes"},{t:"40 tonnes",ok:true},{t:"44 tonnes"},{t:"50 tonnes"}],
x:"Le PTAC maximum d'un ensemble routier à 5 essieux en France est de 40 tonnes en général. Des exceptions existent pour le transport combiné (44 tonnes avec conteneurs ISO) et pour des configurations spéciales (48 tonnes pour le bois avec 6 essieux). Les 44 tonnes sont également autorisées pour certains transports de denrées en conteneurs."},

{id:6304,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"La circulaire relative au transport exceptionnel (convoi) classe les autorisations en :",
r:[{t:"2 catégories"},{t:"3 catégories selon le gabarit et la masse",ok:true},{t:"5 catégories"},{t:"Une seule catégorie universelle"}],
x:"Les transports exceptionnels (TEX) sont classés en 3 catégories selon le gabarit (largeur, longueur, hauteur) et la masse : catégorie 1 (jusqu'à 3 m de large et 48t), catégorie 2 (jusqu'à 4 m de large et 72t), catégorie 3 (au-delà). Chaque catégorie impose des conditions de circulation et d'escorte différentes."},

{id:6305,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"Le plan de chargement d'un véhicule PL doit respecter :",
r:[{t:"Uniquement le PTAC total"},{t:"Le PTAC total ET la charge maximale par essieu",ok:true},{t:"Uniquement la charge par essieu arrière"},{t:"Uniquement les dimensions de la marchandise"}],
x:"Le chargement d'un PL doit respecter simultanément : le PTAC (Poids Total Autorisé en Charge) de l'ensemble, ET les charges maximales par essieu (essieu avant : 7,5t ; tandem arrière : 11,5t à 19t selon l'écartement). Un chargement mal réparti peut dépasser une charge essieu même si le PTAC est respecté."},

{id:6306,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Les plages horaires de circulation interdites aux PL de plus de 7,5t en France sont :",
r:[{t:"Samedi de 22h à lundi 6h"},{t:"Samedi de 22h à dimanche 22h et jours fériés",ok:true},{t:"Dimanche de 0h à 24h uniquement"},{t:"Il n'y a pas d'interdiction de circulation pour les PL"}],
x:"En France, les PL de plus de 7,5t sont soumis à des restrictions de circulation le week-end : interdiction du samedi 22h au dimanche 22h et certains jours fériés. Des dérogations existent pour les transports urgents, périssables ou certains secteurs. Ces horaires peuvent varier légèrement selon les arrêtés préfectoraux."},

{id:6307,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"Le permis CE est obligatoire pour conduire :",
r:[{t:"Tout PL de plus de 3,5t"},{t:"Un ensemble tracteur + semi-remorque ou porteur + remorque dépassant 3,5t",ok:true},{t:"Uniquement les ensembles de plus de 40 tonnes"},{t:"Les tracteurs agricoles"}],
x:"Le permis CE permet de conduire : des véhicules de catégorie C (PTAC > 3,5t) avec une remorque de PTAC > 750 kg, soit les ensembles tracteur + semi-remorque ou porteur + grande remorque. Le permis C seul ne permet de tracter qu'une remorque de moins de 750 kg."},

{id:6308,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"La lettre de voiture doit être établie en minimum :",
r:[{t:"1 exemplaire"},{t:"3 exemplaires",ok:true},{t:"5 exemplaires"},{t:"Elle est facultative si accord oral"}],
x:"La lettre de voiture doit être établie en au moins 3 exemplaires originaux : un pour l'expéditeur, un pour le destinataire, et un conservé par le transporteur. En cas de transport international (CMR), 3 exemplaires sont également requis, suivant le véhicule pendant tout le transport."},

{id:6309,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"Le tachygraphe intelligent (G2) est obligatoire pour les nouveaux véhicules depuis :",
r:[{t:"2014"},{t:"2019",ok:true},{t:"2022"},{t:"2025"}],
x:"Le tachygraphe intelligent (2ème génération, G2) est obligatoire sur les véhicules neufs immatriculés depuis le 21 août 2019. Il intègre un récepteur GNSS (GPS), une interface DSRC pour les contrôles à distance et une connexion ITS. Les véhicules plus anciens peuvent conserver leurs anciens tachygraphes."},

{id:6310,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Le transport de marchandises pour le compte de plusieurs clients dans le même camion s'appelle :",
r:[{t:"Transport à la demande"},{t:"Groupage ou messagerie",ok:true},{t:"Affrètement"},{t:"Transport intégré"}],
x:"Le groupage (ou messagerie) consiste à réunir dans un même véhicule des marchandises appartenant à plusieurs expéditeurs/destinataires différents. Chaque lot est tarifé individuellement. Le transporteur ou le commissionnaire de transport assure le regroupement et la distribution. C'est plus économique pour les petits volumes mais plus complexe à organiser."},

{id:6311,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"La signalisation 'LOURD' (panneau carré rouge) sur un itinéraire interdit aux PL :",
r:[{t:"S'applique aux PL de plus de 7,5t",ok:true},{t:"S'applique uniquement aux PL de plus de 19t"},{t:"S'applique à tous les véhicules motorisés"},{t:"Est une signalisation indicative uniquement"}],
x:"Le panneau 'LOURD' (ou une limitation de tonnage en rouge) interdit la circulation aux véhicules dont le poids total est supérieur à la valeur indiquée. S'il n'y a pas de valeur spécifique, la réglementation générale s'applique (souvent 7,5t ou 3,5t selon les zones). Les livraisons locales bénéficient souvent d'exceptions."},

{id:6312,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Les véhicules PL de plus de 26 tonnes doivent obligatoirement être équipés de :",
r:[{t:"Une caméra de recul"},{t:"Un système d'enregistrement de données (tachygraphe) + limiteur de vitesse",ok:true},{t:"Un système de navigation GPS"},{t:"Un système d'alerte de franchissement de ligne"}],
x:"Les PL de plus de 3,5t doivent être équipés d'un chronotachygraphe homologué. Les véhicules de plus de 3,5t destinés au transport de marchandises doivent également être équipés d'un limiteur de vitesse (90 km/h pour les PL). Pour les véhicules de plus de 12t : tachygraphe numérique obligatoire."},

// ══════════════════════════════════════
// CPC LOURD — TRANSPORT INTERNATIONAL (30 questions)
// ══════════════════════════════════════
{id:6401,prog:'LOURD',theme:'Transport international',d:2,
e:"Le formulaire T2L permet de prouver :",
r:[{t:"L'origine commerciale d'une marchandise"},{t:"Le statut communautaire d'une marchandise (déjà en libre pratique dans l'UE)",ok:true},{t:"La déclaration d'exportation d'une marchandise"},{t:"L'immatriculation d'un véhicule dans l'UE"}],
x:"Le formulaire T2L est un document douanier qui atteste du statut communautaire (Union) d'une marchandise, c'est-à-dire qu'elle a déjà été mise en libre pratique dans l'UE (droits de douane acquittés). Il permet de circuler dans l'UE sans nouveau dédouanement."},

{id:6402,prog:'LOURD',theme:'Transport international',d:1,
e:"L'Incoterm EXW (Ex Works) signifie que :",
r:[{t:"Le vendeur livre à la frontière"},{t:"Le vendeur met la marchandise à disposition dans ses locaux, l'acheteur se charge de tout le reste",ok:true},{t:"Le vendeur paie le transport jusqu'à destination"},{t:"Les risques se transfèrent au port d'embarquement"}],
x:"EXW (Ex Works) est l'Incoterm le moins favorable à l'acheteur : le vendeur met la marchandise à disposition dans son établissement (usine, entrepôt). L'acheteur prend en charge tous les frais et risques depuis ce point (chargement, transport, dédouanement à l'export et à l'import, livraison finale)."},

{id:6403,prog:'LOURD',theme:'Transport international',d:2,
e:"La déclaration en douane d'exportation est faite :",
r:[{t:"À la frontière du pays de sortie"},{t:"Dans le pays exportateur, avant la sortie de la marchandise",ok:true},{t:"Dans le pays importateur à l'arrivée"},{t:"Uniquement pour les marchandises soumises à droits d'exportation"}],
x:"En Europe, les formalités douanières d'exportation (déclaration EX, ex-EUR1 pour certains pays) sont effectuées dans le pays de l'UE d'où la marchandise est exportée, avant sa sortie du territoire douanier de l'UE. L'exportateur ou un transitaire agréé en douane effectue cette démarche."},

{id:6404,prog:'LOURD',theme:'Transport international',d:3,
e:"Les règles d'origine préférentielle permettent à un exportateur de bénéficier :",
r:[{t:"D'une exonération de TVA automatique"},{t:"De droits de douane réduits ou nuls dans un pays tiers avec lequel l'UE a un accord commercial",ok:true},{t:"D'un tarif de transport réduit"},{t:"D'une priorité aux frontières douanières"}],
x:"Les règles d'origine préférentielle définissent les critères qu'un produit doit respecter pour être considéré comme 'originaire' d'un pays et bénéficier des tarifs préférentiels prévus par les accords commerciaux (ex: CETA avec le Canada, EPA avec le Japon). L'exportateur doit pouvoir justifier l'origine par des preuves (EUR.1, déclaration d'origine)."},

{id:6405,prog:'LOURD',theme:'Transport international',d:2,
e:"Le transit douanier T1 est utilisé pour :",
r:[{t:"Les marchandises communautaires voyageant dans l'UE"},{t:"Les marchandises non communautaires en transit à travers l'UE",ok:true},{t:"Les véhicules en transit temporaire"},{t:"Les marchandises en retour vers le pays d'origine"}],
x:"Le document T1 est un régime de transit douanier (transit externe) qui suspend le paiement des droits et taxes pour des marchandises non communautaires (originaires de pays tiers) qui traversent le territoire douanier de l'UE pour rejoindre leur destination. Le T2 est réservé aux marchandises communautaires."},

// ══════════════════════════════════════
// ADR — TOUTES CLASSES (150 questions)
// ══════════════════════════════════════
{id:7001,prog:'ADR',theme:'ADR — Général',d:1,
e:"La liste officielle des marchandises dangereuses dans l'ADR est organisée :",
r:[{t:"Par ordre alphabétique"},{t:"Par numéro ONU croissant",ok:true},{t:"Par classe de danger"},{t:"Par pays d'origine"}],
x:"Le tableau A du chapitre 3.2 de l'ADR liste toutes les marchandises dangereuses par numéro ONU croissant (de 0004 à 3534+). Pour chaque numéro ONU, le tableau indique la classe, le groupe d'emballage, les dispositions spéciales applicables, les exemptions et les exigences d'emballage."},

{id:7002,prog:'ADR',theme:'ADR — Général',d:2,
e:"La notion de 'quantité limitée' dans l'ADR signifie :",
r:[{t:"Une exemption totale de l'ADR pour les petites quantités emballées",ok:true},{t:"Une limitation du nombre de colis par véhicule"},{t:"Une restriction sur la distance de transport"},{t:"Une limitation à certaines classes de danger uniquement"}],
x:"Les quantités limitées (LQ - Limited Quantities) permettent d'emballer certaines marchandises dangereuses en petites quantités par colis (de 25 ml à 5L selon la marchandise) avec un marquage simplifié (losange blanc/noir) et une exemption de nombreuses obligations ADR (plaques oranges, certificat conducteur, consignes écrites…)."},

{id:7003,prog:'ADR',theme:'ADR — Général',d:1,
e:"L'ADR a été signé pour la première fois à :",
r:[{t:"Paris en 1949"},{t:"Genève en 1957",ok:true},{t:"Bruxelles en 1968"},{t:"New York en 1950"}],
x:"L'Accord européen relatif au transport international des marchandises Dangereuses par Route a été signé à Genève le 30 septembre 1957, sous l'égide de la Commission économique pour l'Europe des Nations Unies (CEE-ONU). Il est entré en vigueur le 29 janvier 1968."},

{id:7004,prog:'ADR',theme:'ADR — Général',d:2,
e:"Les marchandises de la Classe 4.3 (dégagement de gaz inflammables au contact de l'eau) :",
r:[{t:"Peuvent être éteintes avec de l'eau en cas d'incendie"},{t:"Ne doivent jamais entrer en contact avec l'eau — le code X devant le Kemler indique ce danger",ok:true},{t:"Sont transportées dans des citernes réfrigérées"},{t:"Ne nécessitent pas de signalisation particulière"}],
x:"La Classe 4.3 regroupe les matières qui, au contact de l'eau, dégagent des gaz inflammables (ex : carbure de calcium, lithium métallique, sodium). Le transport de ces matières est signalé par le code 'X' devant le numéro Kemler (ex : X423). L'eau est absolument contre-indiquée pour l'extinction."},

{id:7005,prog:'ADR',theme:'ADR — Général',d:3,
e:"Le calcul des points pour les exemptions partielles (1.1.3.6) : un colis classé catégorie de transport 2 avec 5 litres de liquide inflammable représente combien de points ?",
r:[{t:"5 points"},{t:"15 points",ok:true},{t:"50 points"},{t:"25 points"}],
x:"Les facteurs multiplicateurs par catégorie de transport : catégorie 0 = facteur 0, catégorie 1 = facteur 50, catégorie 2 = facteur 3, catégorie 3 = facteur 1. Un colis de catégorie 2 contenant 5 litres = 5 × 3 = 15 points. Quand le total de tous les colis dépasse 1 000 points, l'exemption partielle ne s'applique plus."},

{id:7006,prog:'ADR',theme:'ADR — Général',d:2,
e:"Le rapport annuel du CSTMD doit être transmis à :",
r:[{t:"La DREAL uniquement"},{t:"L'autorité compétente si demandé, sinon conservé par l'entreprise",ok:true},{t:"La douane française"},{t:"L'ONU chaque année"}],
x:"Le rapport annuel du CSTMD (art. 1.8.3.3 ADR) doit être rédigé chaque année et adressé à la direction de l'entreprise. Il est conservé pendant au moins 5 ans. Il n'est pas envoyé automatiquement à l'autorité compétente, mais doit être communiqué en cas de demande lors d'un contrôle."},

{id:7007,prog:'ADR',theme:'ADR — Général',d:1,
e:"La classe ADR des matières radioactives est la :",
r:[{t:"Classe 6"},{t:"Classe 7",ok:true},{t:"Classe 8"},{t:"Classe 9"}],
x:"La Classe 7 de l'ADR regroupe les matières radioactives. Elle se distingue des autres classes par un système complexe de catégories (I-Blanc, II-Jaune, III-Jaune) basé sur l'indice de transport et la concentration d'activité. Des règles très strictes s'appliquent à leur transport."},

{id:7008,prog:'ADR',theme:'ADR — Général',d:2,
e:"Les 'matières de la Classe 3' qui ont un point d'éclair inférieur à -18°C sont dans le groupe d'emballage :",
r:[{t:"Groupe III"},{t:"Groupe II"},{t:"Groupe I",ok:true},{t:"Elles n'ont pas de groupe d'emballage"}],
x:"Pour la Classe 3 (liquides inflammables), les groupes d'emballage sont déterminés selon le point d'éclair et le point d'ébullition initial : GE I = éclair < -18°C et ébullition ≤ 35°C (très inflammable), GE II = éclair < 23°C, GE III = 23°C ≤ éclair ≤ 60°C (moins dangereux)."},

{id:7009,prog:'ADR',theme:'ADR — Général',d:3,
e:"Le numéro de danger '236' sur la plaque orange signifie :",
r:[{t:"Gaz, inflammable, corrosif",ok:true},{t:"Liquide inflammable, toxique, corrosif"},{t:"Solide inflammable, comburant, réactif à l'eau"},{t:"Gaz comprimé, explosif, toxique"}],
x:"En ADR, les chiffres du code Kemler (numéro de danger) : 2 = gaz, 3 = inflammabilité, 6 = toxicité. Le code 236 = matière gazeuse, inflammable ET corrosive. Les 3 risques sont présents. Le '6' peut aussi signifier 'toxique' selon la position. Ici : 2 (gaz) + 3 (inflammable) + 6 (corrosif)."},

{id:7010,prog:'ADR',theme:'ADR — Général',d:2,
e:"L'exemption totale de l'ADR s'applique lorsque le total des points calculés est :",
r:[{t:"Inférieur à 500"},{t:"Inférieur ou égal à 1 000",ok:true},{t:"Inférieur à 100"},{t:"Il n'y a pas d'exemption totale en ADR"}],
x:"Selon le 1.1.3.6 de l'ADR, lorsque la somme des points calculés (quantité × facteur multiplicateur par catégorie) pour l'ensemble du chargement est ≤ 1 000, une exemption totale des obligations ADR s'applique. Le conducteur n'a pas besoin de certificat ADR, pas de plaques oranges, etc."},

{id:7011,prog:'ADR',theme:'ADR — Classification',d:1,
e:"Les gaz liquéfiés réfrigérés (comme l'azote liquide) appartiennent à la :",
r:[{t:"Classe 2, division 3A (gaz asphyxiant réfrigéré)",ok:true},{t:"Classe 4.3"},{t:"Classe 6.1"},{t:"Classe 8"}],
x:"Les gaz liquéfiés réfrigérés (cryogéniques) appartiennent à la Classe 2. Leurs codes de classification contiennent le chiffre '3' (liquéfié réfrigéré) suivi d'une lettre indiquant les propriétés : A=asphyxiant (ex: azote liquide ONU 1977), F=inflammable, O=comburant, T=toxique, TC=toxique+corrosif, TF=toxique+inflammable."},

{id:7012,prog:'ADR',theme:'ADR — Classification',d:2,
e:"L'acide sulfurique concentré appartient à la classe ADR :",
r:[{t:"Classe 5.1"},{t:"Classe 6.1"},{t:"Classe 8",ok:true},{t:"Classe 3"}],
x:"L'acide sulfurique concentré (H2SO4) est une matière corrosive de Classe 8. Il est aussi une matière toxique mais son danger principal est la corrosivité (destruction des tissus vivants et des métaux). ONU 1830 (acide sulfurique concentré), groupe d'emballage II."},

{id:7013,prog:'ADR',theme:'ADR — Classification',d:3,
e:"Les batteries au lithium (pour véhicules électriques) transportées seules sont classées :",
r:[{t:"Classe 3 — inflammable"},{t:"Classe 9 — matières et objets dangereux divers",ok:true},{t:"Classe 4.3 — réactif à l'eau"},{t:"Classe 8 — corrosif"}],
x:"Les batteries au lithium ionique (Li-ion) et lithium métal sont classées Classe 9, ONU 3480 (batteries Li-ion seules), ONU 3481 (batteries Li-ion dans équipements), ONU 3090 (batteries Li métal seules), ONU 3091 (batteries Li métal dans équipements). Des règles très spécifiques s'appliquent (état de charge ≤ 30 %, emballage renforcé, etc.)."},

{id:7014,prog:'ADR',theme:'ADR — Signalisation',d:2,
e:"Les étiquettes de danger ADR sur les colis ont une taille minimale de :",
r:[{t:"50 mm × 50 mm"},{t:"100 mm × 100 mm",ok:true},{t:"200 mm × 200 mm"},{t:"La taille n'est pas réglementée"}],
x:"Les étiquettes de danger (losanges) doivent avoir une taille minimale de 100 mm × 100 mm, avec une ligne de bordure à 5 mm du bord. Pour les colis trop petits pour les étiquettes standard, des étiquettes réduites (50 × 50 mm ou moins avec un bord coloré) peuvent être utilisées avec l'indication de la réduction."},

{id:7015,prog:'ADR',theme:'ADR — Signalisation',d:1,
e:"Pour un transport en vrac de matières dangereuses, les plaques-étiquettes sur le véhicule mesurent :",
r:[{t:"100 mm × 100 mm"},{t:"250 mm × 250 mm",ok:true},{t:"400 mm × 300 mm"},{t:"500 mm × 500 mm"}],
x:"Les plaques-étiquettes de danger (grands losanges) apposées sur les véhicules, conteneurs et wagons-citernes mesurent 250 mm × 250 mm minimum, avec une ligne de bordure à 12,5 mm du bord. Elles reprennent les mêmes pictogrammes que les étiquettes de colis mais à plus grande échelle."},

{id:7016,prog:'ADR',theme:'ADR — Documents',d:2,
e:"La déclaration de chargement du conteneur (DCC) est requise lorsque :",
r:[{t:"Tous les transports ADR en conteneur"},{t:"Des marchandises dangereuses solides sont chargées en vrac dans un conteneur",ok:true},{t:"Uniquement pour les conteneurs de plus de 20 pieds"},{t:"Uniquement pour les transports maritimes"}],
x:"La DCC (ou certificat d'emballage du conteneur, Container Packing Certificate - CPC) est requise quand des marchandises dangereuses en vrac ou sous forme d'objets (pas en colis) sont chargées dans un conteneur ou engin de transport. Elle atteste que le chargement a été effectué correctement et que le conteneur est en bon état."},

{id:7017,prog:'ADR',theme:'ADR — Sécurité',d:2,
e:"En cas d'accident avec renversement d'un véhicule ADR, la première priorité est :",
r:[{t:"Identifier la marchandise pour appeler les bons secours"},{t:"Protéger la zone (baliser), alerter les secours et consulter les consignes écrites",ok:true},{t:"Tenter de redresser le véhicule"},{t:"Prendre des photos pour l'assurance"}],
x:"En cas d'accident ADR : 1. SÉCURISER (couper le moteur, ne pas fumer, baliser à distance) 2. ALERTER (112, pompiers NRBC si nécessaire) 3. Consulter les CONSIGNES ÉCRITES pour les mesures adaptées à la marchandise 4. Ne PAS tenter de réparer ou redresser seul — attendre les secours spécialisés."},

{id:7018,prog:'ADR',theme:'ADR — Sécurité',d:1,
e:"Le plan de sécurité obligatoire pour certaines marchandises dangereuses (notamment Classe 1 et matières à haut risque) doit comprendre :",
r:[{t:"Uniquement les numéros d'urgence"},{t:"Les mesures visant à prévenir le vol ou l'utilisation illicite de la marchandise",ok:true},{t:"Le plan de livraison du client"},{t:"L'itinéraire détaillé du transport"}],
x:"Pour les marchandises à 'haut risque' (explosifs, radioactifs, certains toxiques…), un plan de sûreté est requis (chapitre 1.10 de l'ADR). Il doit identifier les risques sécuritaires (vol, détournement), les mesures de prévention (contrôle des accès, traçabilité) et les procédures en cas d'incident de sûreté."},

{id:7019,prog:'ADR',theme:'ADR — Emballages',d:2,
e:"Un GRV (Grand Récipient pour Vrac) de type 11G est :",
r:[{t:"Un fût en acier"},{t:"Un GRV souple",ok:true},{t:"Un GRV rigide en plastique"},{t:"Un conteneur citerne"}],
x:"Dans le code des GRV, le premier chiffre indique le type : 11 = GRV souple. Les lettres indiquent le matériau : A = tissu sans revêtement, B = tissu avec revêtement intérieur, C = plastique, D = composite tissu/film, G = autres matières (papier multicouches…). 11G = GRV souple en autre matière (ex : papier renforcé)."},

{id:7020,prog:'ADR',theme:'ADR — Général',d:3,
e:"L'accord bilatéral ou multilatéral (ML) en ADR permet :",
r:[{t:"D'exporter des marchandises dangereuses sans formalité"},{t:"D'appliquer des règles dérogatoires entre États signataires pour un type de transport spécifique",ok:true},{t:"D'harmoniser les tarifs de transport entre pays"},{t:"D'exonérer de l'ADR pour les petits transporteurs"}],
x:"Les accords multilatéraux (ML) sont des dérogations temporaires aux règles ADR, conclus entre les autorités compétentes de plusieurs États parties. Ils autorisent des conditions particulières de transport non prévues par l'ADR standard. Ils sont publiés et ont une durée limitée."},

// ══════════════════════════════════════
// CPC LOURD — DROIT SOCIAL suite (60q)
// ══════════════════════════════════════
{id:6500,prog:'LOURD',theme:'Droit social',d:2,
e:"Le conducteur PL qui effectue un déplacement de plus de 50 km de son lieu de prise de service a droit à :",
r:[{t:"Rien de spécifique"},{t:"Des indemnités de repas et éventuellement de couchée selon la CCN transports routiers",ok:true},{t:"Des heures supplémentaires automatiques"},{t:"Un jour de repos compensateur"}],
x:"La Convention Collective Nationale des Transports Routiers (CCNTR) prévoit des indemnités de déplacement (repas et couchées) pour les conducteurs dont les conditions de déplacement les empêchent de regagner leur domicile dans des conditions normales. Les montants sont fixés par la CCN et réévalués régulièrement."},

{id:6501,prog:'LOURD',theme:'Droit social',d:1,
e:"La FIMO (Formation Initiale Minimale Obligatoire) pour conducteur PL doit être obtenue :",
r:[{t:"Avant de commencer à conduire pour un transporteur",ok:true},{t:"Dans les 6 mois suivant l'embauche"},{t:"Avant le permis C"},{t:"Uniquement pour les conducteurs de plus de 25 ans"}],
x:"La FIMO (ou CQC Initial) est obligatoire avant de commencer à exercer comme conducteur professionnel PL. Le certificat de qualification initiale (CQC) doit être obtenu avant la prise de fonctions. Il figure sur le permis de conduire (code 95) ou sur une carte de qualification conducteur."},

{id:6502,prog:'LOURD',theme:'Droit social',d:2,
e:"Le repos compensateur équivalent (RCE) pour les heures supplémentaires au-delà du contingent :",
r:[{t:"Remplace le paiement des heures supplémentaires"},{t:"S'ajoute aux majorations de salaire des heures supplémentaires hors contingent",ok:true},{t:"Est optionnel si accord de l'employeur"},{t:"N'existe pas dans le transport routier"}],
x:"Au-delà du contingent annuel d'heures supplémentaires (195h en transport routier selon la CCN), chaque heure supplémentaire ouvre droit à un repos compensateur équivalent de 100 % (soit 1h de repos pour 1h supplémentaire), en plus de la majoration salariale applicable. Ce repos doit être pris dans les 2 mois."},

{id:6503,prog:'LOURD',theme:'Droit social',d:3,
e:"Le conducteur PL peut prendre son repos journalier normal (11h) :",
r:[{t:"Uniquement à son domicile"},{t:"Dans le véhicule, dans un établissement hôtelier, ou dans tout lieu approprié",ok:true},{t:"Uniquement dans des établissements agréés"},{t:"Uniquement dans les dépôts de l'employeur"}],
x:"Le repos journalier normal (11 heures consécutives) peut être pris dans le véhicule (si le véhicule dispose d'un couchette appropriée et est à l'arrêt), dans un hébergement, ou dans tout lieu adapté. Contrairement au repos hebdomadaire normal, le repos journalier peut légalement être pris en cabine."},

{id:6504,prog:'LOURD',theme:'Droit social',d:2,
e:"Le bilan de compétences peut être demandé par :",
r:[{t:"Uniquement l'employeur"},{t:"Le salarié de sa propre initiative, via son CPF",ok:true},{t:"Uniquement Pôle Emploi"},{t:"Uniquement en cas de licenciement économique"}],
x:"Le bilan de compétences peut être à l'initiative du salarié (financement via CPF ou plan de développement des compétences) ou de l'employeur (avec accord du salarié obligatoire). Il est réalisé par un prestataire externe, dure maximum 24 heures réparties sur plusieurs semaines, et ses conclusions appartiennent au salarié."},

{id:6505,prog:'LOURD',theme:'Droit social',d:1,
e:"Le code 95 sur le permis de conduire d'un chauffeur PL signifie :",
r:[{t:"Il a le permis CE"},{t:"Il a la qualification initiale ou en cours de validité (CQC/FIMO/FCOS)",ok:true},{t:"Il est autorisé à conduire des citernes"},{t:"Il a passé une formation ADR"}],
x:"Le code 95 (suivi d'une date d'expiration) apposé sur le permis de conduire atteste que le titulaire a satisfait aux exigences de qualification initiale (FIMO) et de formation continue (FCOS) pour conduire des véhicules de transport de marchandises ou de voyageurs à titre professionnel."},

{id:6506,prog:'LOURD',theme:'Droit social',d:2,
e:"En cas de contrôle routier, le conducteur doit présenter les données du tachygraphe des :",
r:[{t:"7 derniers jours"},{t:"28 derniers jours",ok:true},{t:"3 derniers mois"},{t:"Jours de conduite uniquement"}],
x:"Le conducteur doit pouvoir présenter lors d'un contrôle : les données enregistrées par le tachygraphe numérique (ou les disques pour le tachygraphe analogique) couvrant les 28 jours précédant le contrôle, plus les données du jour en cours. En cas de passage à un autre véhicule, les données des deux appareils sont exigibles."},

{id:6507,prog:'LOURD',theme:'Droit social',d:3,
e:"La responsabilité de l'employeur en cas d'infraction aux règles de temps de conduite est engagée lorsque :",
r:[{t:"Seulement si le conducteur était en faute grave"},{t:"Dès lors que l'organisation du travail rendait les dépassements inévitables ou que l'employeur les a ordonnés",ok:true},{t:"Jamais — seul le conducteur est responsable"},{t:"Uniquement si l'infraction a causé un accident"}],
x:"L'employeur peut être poursuivi pour complicité ou participation aux infractions aux règles de conduite si : il a fixé des délais impossibles à respecter, il a ordonné ou toléré les dépassements, ou si l'organisation des tournées rendait le non-respect inévitable. La charge de la preuve incombe aux autorités de contrôle."},

{id:6508,prog:'LOURD',theme:'Droit social',d:2,
e:"La visite de reprise après un arrêt maladie de plus de 30 jours est :",
r:[{t:"Facultative si le salarié se sent bien"},{t:"Obligatoire dans les 8 jours suivant la reprise",ok:true},{t:"Obligatoire avant la reprise du travail"},{t:"Obligatoire uniquement pour les postes à risque"}],
x:"Depuis la réforme de 2017, la visite de reprise est obligatoire pour les arrêts de travail de plus de 30 jours. Elle doit avoir lieu dans les 8 jours ouvrables suivant la reprise. Pour les arrêts de moins de 30 jours, seule une visite de pré-reprise (facultative) peut être organisée à la demande du salarié ou du médecin."},

{id:6509,prog:'LOURD',theme:'Droit social',d:1,
e:"Le salarié en formation à l'initiative de l'employeur reçoit :",
r:[{t:"Uniquement les remboursements de frais"},{t:"Son salaire habituel maintenu intégralement",ok:true},{t:"Une prime de formation forfaitaire"},{t:"50 % de son salaire"}],
x:"Lorsqu'une formation est effectuée dans le cadre du plan de développement des compétences de l'entreprise (à l'initiative de l'employeur), le salarié bénéficie du maintien intégral de sa rémunération et du remboursement de ses frais de transport, repas et hébergement."},

{id:6510,prog:'LOURD',theme:'Droit social',d:2,
e:"Le calcul des heures supplémentaires pour un conducteur PL grand routier se fait sur la base de :",
r:[{t:"Les heures de conduite uniquement"},{t:"L'ensemble du temps de service (conduite + travaux annexes + disponibilités rémunérées)",ok:true},{t:"Un forfait hebdomadaire"},{t:"Uniquement les heures effectuées après 21h"}],
x:"Pour les conducteurs PL, les heures supplémentaires sont calculées sur l'ensemble du temps de service (temps de travail effectif), qui comprend : les heures de conduite, les temps de chargement/déchargement, les formalités administratives, l'entretien, et les temps de disponibilité rémunérés, mais pas les pauses ni les repos."},

{id:6511,prog:'LOURD',theme:'Droit social',d:3,
e:"Le fractionnement des repos journaliers (split rests) est autorisé pour les conducteurs en équipage :",
r:[{t:"Non, jamais autorisé en équipage"},{t:"Oui : le repos peut être fractionné en 2 périodes, la première d'au moins 3h et la seconde d'au moins 9h",ok:true},{t:"Oui, en autant de fractions que nécessaire"},{t:"Oui, mais uniquement pour les femmes enceintes"}],
x:"Pour les conducteurs seuls, le repos journalier ne peut être fractionné qu'en repos réduit (9h). Pour les conducteurs en équipage, l'art. 8 du règlement 561/2006 prévoit une disposition spécifique : le repos peut être scindé en 2 périodes (première ≥ 3h consécutives, deuxième ≥ 9h consécutives, total ≥ 12h)."},

{id:6512,prog:'LOURD',theme:'Droit social',d:2,
e:"L'examen du permis C pour la conduite de PL est accompagné obligatoirement :",
r:[{t:"Uniquement de la FIMO"},{t:"Du CQC initial (FIMO) avant exercice professionnel, et du CQC périodique (FCOS) tous les 5 ans",ok:true},{t:"D'un stage ADR"},{t:"D'un examen médical annuel"}],
x:"Pour conduire professionnellement un PL, il faut : le permis C ou CE + le CQC (Code 95 sur le permis). Le CQC Initial (280h ou 140h selon profil) est obtenu avant la prise de fonctions. Le CQC Périodique (35h tous les 5 ans) maintient les droits. Une visite médicale d'aptitude périodique est également obligatoire."},

{id:6513,prog:'LOURD',theme:'Droit social',d:1,
e:"La durée maximale de la journée de travail d'un conducteur PL est de :",
r:[{t:"8 heures"},{t:"10 heures",ok:true},{t:"12 heures"},{t:"Il n'y a pas de limite journalière"}],
x:"La durée maximale journalière de travail (temps de service) d'un conducteur PL est de 10 heures. Elle peut être portée à 12 heures deux fois par semaine maximum. Ces limites sont fixées par la directive 2002/15/CE relative au temps de travail dans les transports routiers."},

{id:6514,prog:'LOURD',theme:'Droit social',d:2,
e:"Le conducteur PL détaché à l'étranger dans l'UE doit respecter :",
r:[{t:"Uniquement les règles sociales de son pays d'origine"},{t:"Le droit du travail du pays d'accueil pour certaines règles (salaire minimum, durée de travail) selon le règlement 2020/1057",ok:true},{t:"Uniquement les règles ADR du pays traversé"},{t:"Aucune règle spécifique — libre circulation totale"}],
x:"Le règlement 2020/1057 sur le détachement des conducteurs prévoit que les conducteurs effectuant des transports internationaux doivent respecter les règles sociales du pays d'accueil pour les opérations de cabotage et de transport bilatéral chargé/déchargé. Les transports en transit sont exemptés."},

{id:6515,prog:'LOURD',theme:'Droit social',d:3,
e:"Le principe 'à travail égal, salaire égal' impose :",
r:[{t:"Un salaire identique pour tous les salariés d'une même entreprise"},{t:"Une rémunération identique pour des salariés effectuant le même travail ou un travail de valeur égale",ok:true},{t:"L'application stricte du SMIC pour tous"},{t:"L'interdiction de toute différence salariale"}],
x:"Le principe d'égalité de rémunération (art. L.3221-2 du Code du travail) interdit les différences de salaire entre salariés qui effectuent un même travail ou un travail de valeur égale, si ces différences ne sont pas justifiées par des critères objectifs (ancienneté, diplôme, résultats, responsabilités). Il s'applique notamment à l'égalité hommes/femmes."},

{id:6516,prog:'LOURD',theme:'Droit social',d:2,
e:"Le plan de sauvegarde de l'emploi (PSE) est obligatoire pour un licenciement économique collectif dans les entreprises de :",
r:[{t:"Plus de 10 salariés licenciant plus de 2 personnes"},{t:"Plus de 50 salariés procédant au licenciement d'au moins 10 salariés sur 30 jours",ok:true},{t:"Plus de 100 salariés uniquement"},{t:"Toutes les tailles dès 5 licenciements"}],
x:"Le PSE est obligatoire pour les entreprises d'au moins 50 salariés qui envisagent de licencier au moins 10 salariés sur une période de 30 jours pour motif économique. Il doit prévoir des mesures de reclassement interne et externe, des formations et des aides à la création d'entreprise."},

{id:6517,prog:'LOURD',theme:'Droit social',d:1,
e:"Le délai de carence entre deux CDD pour le même poste est de :",
r:[{t:"15 jours après un CDD de moins de 14 jours"},{t:"1/3 de la durée du contrat précédent si ≥ 14 jours, 1/2 si < 14 jours",ok:true},{t:"1 mois systématiquement"},{t:"Il n'y a pas de délai légal"}],
x:"Le délai de carence entre deux CDD sur le même poste est de : 1/3 de la durée totale du contrat précédent (renouvellement inclus) si celui-ci était d'au moins 14 jours, et 1/2 si le contrat précédent était inférieur à 14 jours. Ce délai peut être écarté dans certains cas (remplacement d'absent, saisonnier, etc.)."},

{id:6518,prog:'LOURD',theme:'Droit social',d:2,
e:"La procédure de licenciement d'un salarié protégé (représentant du personnel) nécessite :",
r:[{t:"La même procédure que pour tout salarié"},{t:"L'autorisation préalable de l'inspection du travail",ok:true},{t:"L'accord du CSE uniquement"},{t:"Un délai de préavis doublé"}],
x:"Le licenciement d'un salarié protégé (délégués syndicaux, membres du CSE, etc.) nécessite une procédure spécifique : entretien préalable, consultation du CSE, puis demande d'autorisation à l'inspection du travail (DREETS). L'inspecteur du travail vérifie que le licenciement n'est pas en lien avec les fonctions représentatives."},

{id:6519,prog:'LOURD',theme:'Droit social',d:3,
e:"L'accord de performance collective (APC) permet à une entreprise de :",
r:[{t:"Licencier sans motif économique"},{t:"Moduler la durée de travail, les rémunérations et les mobilités pour préserver l'emploi",ok:true},{t:"Supprimer les congés payés légaux"},{t:"Embaucher sans respecter les règles de droit commun"}],
x:"L'accord de performance collective (APC, ordonnances 2017) permet à une entreprise de définir par accord majoritaire les mesures d'organisation nécessaires (aménagement du temps de travail, mobilité, rémunération). Un salarié qui refuse l'application de l'accord peut être licencié pour cause réelle et sérieuse (pas pour motif économique)."},

{id:6520,prog:'LOURD',theme:'Droit social',d:2,
e:"Le taux de cotisation patronale à l'assurance chômage est actuellement de :",
r:[{t:"2,4 %"},{t:"4,05 %",ok:true},{t:"6,5 %"},{t:"1,5 %"}],
x:"La cotisation patronale d'assurance chômage est de 4,05 % du salaire brut plafonné à 4 fois le PASS. Depuis 2019, la cotisation salariale a été supprimée. L'employeur assume seul le financement de l'assurance chômage via cette cotisation patronale."},

// ══════════════════════════════════════
// CPC LOURD — RÉGLEMENTATION suite (50q)
// ══════════════════════════════════════
{id:6600,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Un ensemble routier transportant 36 tonnes de marchandises sur 5 essieux dépasse-t-il le PTAC légal ?",
r:[{t:"Oui, le maximum est 32 tonnes"},{t:"Non, la limite de 40 tonnes n'est pas atteinte",ok:true},{t:"Oui, le maximum est 34 tonnes"},{t:"Non si autorisation préfectorale"}],
x:"Un ensemble routier standard à 5 essieux est autorisé jusqu'à 40 tonnes de PTAC en France. 36 tonnes reste dans les limites légales. Il faut aussi vérifier que la charge par essieu respecte les limites (essieu avant ≤ 7,5t, tandem ≤ 19t selon l'écartement)."},

{id:6601,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"Le limiteur de vitesse d'un PL de transport de marchandises est réglé à :",
r:[{t:"80 km/h"},{t:"90 km/h",ok:true},{t:"100 km/h"},{t:"110 km/h"}],
x:"Les véhicules de transport de marchandises de plus de 3,5t doivent être équipés d'un limiteur de vitesse réglé à 90 km/h (directive 92/6/CEE). Cette limitation s'applique même sur les autoroutes dont la limitation générale est de 130 km/h."},

{id:6602,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Un conducteur PL effectuant un transport de produits frais congelés doit s'assurer que :",
r:[{t:"La température au chargement est notée"},{t:"La température du compartiment est maintenue à ≤ –18°C et enregistrée tout au long du transport",ok:true},{t:"Le véhicule est nettoyé avant le chargement uniquement"},{t:"La durée du transport ne dépasse pas 4 heures"}],
x:"Pour les produits surgelés, la chaîne du froid impose une température ≤ –18°C tout au long du transport (sauf courtes remontées lors du chargement/déchargement). Le thermographe ou enregistreur de température est obligatoire pour les transports soumis à l'accord ATP. Les relevés doivent être archivés."},

{id:6603,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"La procédure de réception à titre isolé (RTI) d'un véhicule transformé est gérée par :",
r:[{t:"L'assureur du véhicule"},{t:"La DREAL sur la base d'un dossier technique et d'essais de conformité",ok:true},{t:"Uniquement le constructeur d'origine"},{t:"La Préfecture du département"}],
x:"La RTI est délivrée par la DREAL pour des véhicules qui ne peuvent pas faire l'objet d'une réception par type (modifications importantes, véhicules importés hors UE, transformations spécifiques). Elle est accordée après examen d'un dossier technique et d'essais de conformité. Elle donne lieu à une nouvelle immatriculation."},

{id:6604,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Les bâches de camion (bâchage des remorques) doivent respecter :",
r:[{t:"Aucune norme spécifique"},{t:"Des normes de résistance et d'étanchéité selon le type de transport (XL Cert pour l'export par exemple)",ok:true},{t:"Uniquement une norme de couleur identifiable"},{t:"Une épaisseur minimale réglementée nationalement"}],
x:"Les bâches de véhicule utilitaire et de semi-remorque doivent être en bon état. Pour les transports TIR (sous scellé douanier), la bâche doit répondre aux exigences de l'annexe 2 de la convention TIR. La certification XL (eXtra Load) est utilisée pour les bâches des transports soumis à des exigences renforcées de sécurité et d'étanchéité."},

{id:6605,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"La visite périodique d'un PL de transport de marchandises a lieu tous les :",
r:[{t:"1 an",ok:true},{t:"2 ans"},{t:"6 mois"},{t:"18 mois"}],
x:"Les véhicules de transport de marchandises de plus de 3,5t sont soumis à un contrôle technique annuel (tous les ans), contrairement aux véhicules légers soumis au contrôle tous les 2 ans. La première visite a lieu avant la 1ère mise en circulation ou dans un délai réglementé selon le pays."},

{id:6606,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"La signalétique obligatoire à l'arrière d'un PL de plus de 12t comprend :",
r:[{t:"Uniquement le numéro de la remorque"},{t:"Des marquages rétroréfléchissants jaunes/rouges et le cas échéant des bandes de sécurité",ok:true},{t:"Uniquement des feux de gabarit"},{t:"Un panneau de vitesse maximale autorisée"}],
x:"Les PL de plus de 12t doivent être équipés de dispositifs rétroréfléchissants homologués sur les côtés et à l'arrière (règlement ECE/ONU R 70). Ces bandes jaunes et rouges améliorent la visibilité nocturne. Les semi-remorques doivent également en être équipées. Des plaques d'identification à l'arrière sont obligatoires."},

{id:6607,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"Le protocole de sécurité pour les opérations de chargement/déchargement doit être établi entre :",
r:[{t:"Le transporteur et son assureur"},{t:"L'entreprise d'accueil (chargeur/destinataire) et l'entreprise de transport",ok:true},{t:"Le conducteur et le chef de dépôt uniquement"},{t:"Le gouvernement et les syndicats"}],
x:"Selon l'arrêté du 26 avril 1996, lorsque des opérations de chargement ou déchargement sont effectuées dans des lieux de travail extérieurs à l'entreprise de transport, un protocole de sécurité doit être établi entre l'entreprise d'accueil et l'entreprise de transport. Il définit les mesures de prévention des risques lors des opérations."},

{id:6608,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Un hayon élévateur installé sur un camion est soumis à :",
r:[{t:"Aucune réglementation spécifique"},{t:"Une vérification annuelle obligatoire et le respect de la directive machines",ok:true},{t:"Un simple entretien constructeur"},{t:"Une déclaration à la DREAL uniquement"}],
x:"Les hayons élévateurs sont des équipements de travail soumis aux obligations de vérification périodique (arrêté du 1er mars 2004) : vérification annuelle par une personne qualifiée (organisme de contrôle agréé), tenue d'un carnet de maintenance, formation des utilisateurs. La directive machines 2006/42/CE s'applique à leur conception."},

{id:6609,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"Les marchandises transportées en vrac dans un camion benne doivent être :",
r:[{t:"Recouvertes d'une bâche si elles risquent d'être dispersées",ok:true},{t:"Limitées à 10 tonnes"},{t:"Déclarées à la douane pour tout transport national"},{t:"Accompagnées d'un certificat phytosanitaire"}],
x:"Les marchandises susceptibles d'être dispersées par le vent (sable, gravier, terre, déchets…) doivent être couvertes ou arrimées pour éviter leur dispersion sur la voie publique (art. R.412-24 du Code de la route). Le non-respect est une infraction et engage la responsabilité du conducteur et du chargeur."},

{id:6610,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"La réglementation sur le temps de service des conducteurs routiers est issue de :",
r:[{t:"Uniquement du Code du travail français"},{t:"La directive européenne 2002/15/CE transposée en droit français",ok:true},{t:"Du règlement 561/2006 uniquement"},{t:"D'accords bilatéraux entre syndicats"}],
x:"La directive 2002/15/CE fixe les conditions d'aménagement du temps de travail (temps de service) dans les transports routiers. Elle est distincte du règlement 561/2006 qui fixe les temps de conduite et de repos. La directive a été transposée en France par le décret n° 2003-1242 du 22 décembre 2003."},

// ══════════════════════════════════════
// CPC LOURD — TRANSPORT INTERNATIONAL suite (40q)
// ══════════════════════════════════════
{id:6700,prog:'LOURD',theme:'Transport international',d:2,
e:"L'Incoterm FCA (Free Carrier) signifie que :",
r:[{t:"Le vendeur livre à la frontière"},{t:"Le vendeur remet la marchandise au transporteur désigné par l'acheteur en son établissement ou en un point nommé",ok:true},{t:"Le vendeur paie le transport jusqu'au port de destination"},{t:"L'acheteur assume tous les risques dès la commande"}],
x:"FCA (Free Carrier) : le vendeur remet la marchandise au transporteur désigné par l'acheteur, au lieu convenu (généralement l'établissement du vendeur ou un terminal). Les risques se transfèrent à cet instant. C'est l'Incoterm recommandé pour les transports routiers (il remplace l'ancien EXW pour éviter les problèmes douaniers à l'export)."},

{id:6701,prog:'LOURD',theme:'Transport international',d:1,
e:"Le document T1 (transit externe) est utilisé pour :",
r:[{t:"Les marchandises communautaires circulant dans l'UE"},{t:"Les marchandises non communautaires en transit sur le territoire douanier de l'UE",ok:true},{t:"Les marchandises exportées définitivement"},{t:"Les véhicules en transit temporaire"}],
x:"Le document T1 est un document de transit douanier externe utilisé pour des marchandises de statut non communautaire qui transitent par l'UE. Il suspend les droits et taxes pendant le transit. Le T2 est utilisé pour des marchandises communautaires qui passent par un pays tiers."},

{id:6702,prog:'LOURD',theme:'Transport international',d:2,
e:"Le certificat EUR.1 est utilisé pour :",
r:[{t:"Immatriculer des véhicules dans l'UE"},{t:"Prouver l'origine préférentielle d'une marchandise pour bénéficier de droits de douane réduits",ok:true},{t:"Certifier la conformité sanitaire des aliments"},{t:"Déclarer la valeur d'un colis postal"}],
x:"Le certificat EUR.1 (ou la déclaration d'origine sur facture pour les petites valeurs) est un document douanier qui atteste de l'origine préférentielle d'une marchandise. Il permet au destinataire dans le pays importateur de bénéficier des tarifs préférentiels prévus dans les accords commerciaux entre l'UE et ce pays."},

{id:6703,prog:'LOURD',theme:'Transport international',d:3,
e:"Le transport routier international de marchandises dangereuses (ADR) entre la France et un pays non membre de l'UE :",
r:[{t:"N'est soumis à aucune réglementation particulière"},{t:"Doit respecter l'ADR si les deux pays sont signataires, sinon appliquer la réglementation la plus stricte",ok:true},{t:"Est interdit pour les liquides inflammables"},{t:"Nécessite uniquement un certificat national"}],
x:"L'ADR s'applique aux transports internationaux entre pays signataires. Si le pays de destination n'est pas signataire de l'ADR, la réglementation nationale de ce pays s'applique. Le transporteur doit se conformer aux exigences les plus strictes. Les pays signataires couvrent l'essentiel de l'Europe, l'Asie centrale et certains pays du Moyen-Orient."},

{id:6704,prog:'LOURD',theme:'Transport international',d:2,
e:"Le formulaire CERFA utilisé pour l'exportation de déchets dangereux dans le cadre du règlement (CE) 1013/2006 s'appelle :",
r:[{t:"Document de suivi douanier EX1"},{t:"Notification de transfert transfrontière de déchets",ok:true},{t:"Carnet TIR pour déchets"},{t:"Déclaration de valeur en douane"}],
x:"Le règlement CE 1013/2006 sur les transferts de déchets impose une procédure de notification préalable pour l'exportation de déchets dangereux (ou non dangereux vers des pays non membres de l'OCDE). La notification est adressée aux autorités compétentes des pays d'expédition, de transit et de destination."},

{id:6705,prog:'LOURD',theme:'Transport international',d:1,
e:"La convention CMR s'applique obligatoirement lorsque :",
r:[{t:"Le transport est effectué avec un PL de plus de 7,5t"},{t:"Le lieu de prise en charge et le lieu de livraison sont dans deux pays différents dont au moins l'un est signataire",ok:true},{t:"La valeur de la marchandise dépasse 10 000 €"},{t:"Le transport dure plus de 24 heures"}],
x:"La CMR (Convention relative au Contrat de transport international de Marchandises par Route) s'applique automatiquement à tout contrat de transport routier de marchandises à titre onéreux entre deux pays dont au moins l'un est signataire, quels que soient la nationalité des parties et le lieu du contrat."},

{id:6706,prog:'LOURD',theme:'Transport international',d:2,
e:"Le chauffeur PL effectuant du cabotage en Allemagne après un transport international entrant doit :",
r:[{t:"Respecter uniquement la réglementation française"},{t:"Respecter le droit allemand du travail (salaire minimum, congés) pour les opérations de cabotage",ok:true},{t:"Demander une autorisation spécifique à la DREAL"},{t:"Obtenir une licence de transport allemande temporaire"}],
x:"Lors des opérations de cabotage, le conducteur doit respecter les règles sociales du pays d'accueil (Allemagne) : salaire minimum allemand (MiLoG), enregistrement préalable de l'employeur auprès des autorités allemandes, documents justificatifs à bord. Le non-respect peut entraîner des amendes importantes."},

{id:6707,prog:'LOURD',theme:'Transport international',d:3,
e:"Le délai de prescription d'une action en responsabilité contre le transporteur selon la CMR est de :",
r:[{t:"6 mois"},{t:"1 an (3 ans en cas de dol ou faute équivalente)",ok:true},{t:"2 ans"},{t:"5 ans"}],
x:"L'art. 32 de la CMR fixe la prescription à 1 an à compter de la date de livraison (ou de la date prévue). En cas de dol ou de faute équivalente au dol (négligence grossière), le délai est porté à 3 ans. La prescription peut être suspendue ou interrompue par une réclamation écrite adressée au transporteur."},

{id:6708,prog:'LOURD',theme:'Transport international',d:2,
e:"Le carnet ATA permet de :",
r:[{t:"Exporter définitivement des marchandises"},{t:"Importer temporairement des marchandises (matériels d'exposition, outils professionnels) sans payer de droits de douane",ok:true},{t:"Transporter des marchandises alimentaires"},{t:"Circuler sans contrôle aux frontières de l'UE"}],
x:"Le carnet ATA (Admission Temporaire/Temporary Admission) est un document douanier international permettant l'importation temporaire de marchandises (matériels d'exposition, échantillons, équipements professionnels) sans payer de droits ni de TVA dans le pays d'accueil. La marchandise doit être réexportée dans le délai prévu."},

{id:6709,prog:'LOURD',theme:'Transport international',d:1,
e:"L'Incoterm DAP (Delivered At Place) implique que :",
r:[{t:"Le vendeur livre au port de départ"},{t:"Le vendeur livre jusqu'au lieu de destination convenu, risques inclus, mais sans déchargement",ok:true},{t:"L'acheteur paie tous les frais depuis l'usine"},{t:"Les droits de douane sont toujours inclus"}],
x:"DAP (Delivered At Place) : le vendeur assume tous les risques et frais jusqu'au lieu de destination convenu, véhicule prêt au déchargement. C'est l'acheteur qui prend en charge le déchargement et le dédouanement à l'importation. DAP est souvent utilisé pour les transports routiers en Europe."},

{id:6710,prog:'LOURD',theme:'Transport international',d:2,
e:"Le formulaire DA1 (anciennement E101) est utilisé pour :",
r:[{t:"Déclarer des marchandises à la douane"},{t:"Prouver qu'un travailleur détaché reste soumis à la sécurité sociale de son pays d'origine",ok:true},{t:"Justifier l'origine des marchandises"},{t:"Immatriculer un véhicule à l'étranger"}],
x:"Le formulaire A1 (anciennement E101) est délivré par l'organisme de sécurité sociale du pays d'origine d'un travailleur détaché. Il atteste que le travailleur reste soumis à la législation de sécurité sociale de son pays d'origine pendant la période de détachement, et qu'il n'est donc pas assujetti au régime du pays d'accueil."},

// ══════════════════════════════════════
// ADR — suite (100 questions)
// ══════════════════════════════════════
{id:7100,prog:'ADR',theme:'ADR — Général',d:2,
e:"Les 'quantités exceptées' (EQ) dans l'ADR permettent :",
r:[{t:"Le transport sans aucune restriction"},{t:"Une exemption totale des exigences ADR pour de très petites quantités emballées de façon spécifique",ok:true},{t:"Le transport en citerne de petites quantités"},{t:"L'exemption uniquement du certificat conducteur"}],
x:"Les quantités exceptées (EQ - Excepted Quantities) offrent une exemption totale de l'ADR pour des quantités encore plus petites que les LQ (Quantités Limitées). Les colis doivent porter uniquement un astérisque (*) ou le numéro de classe. La limite varie de 1 ml/g à 1 000 ml/g selon la matière."},

{id:7101,prog:'ADR',theme:'ADR — Général',d:1,
e:"Le certificat de formation ADR du conducteur est valable :",
r:[{t:"1 an"},{t:"5 ans",ok:true},{t:"10 ans"},{t:"Il est permanent une fois obtenu"}],
x:"Le certificat de formation ADR est valable 5 ans à compter de la date de délivrance. Pour le renouveler, le conducteur doit suivre une formation de recyclage dans l'année précédant l'expiration du certificat. À défaut de recyclage dans ce délai, il faut refaire la formation initiale complète."},

{id:7102,prog:'ADR',theme:'ADR — Général',d:2,
e:"Le transport de matières dangereuses en petites quantités (LQ) est signalé par :",
r:[{t:"Les plaques oranges habituelles"},{t:"Un losange blanc avec un carré noir en son centre (ou les côtés noirs uniquement)",ok:true},{t:"Un triangle rouge sur fond blanc"},{t:"Aucun marquage n'est requis pour les LQ"}],
x:"Le marquage LQ (Quantités Limitées) est un losange blanc avec une bordure noire (et un losange intérieur noir au centre pour le transport routier). Il est apposé sur les colis et sur le véhicule (min 100×100 mm sur le véhicule). Il remplace les étiquettes de danger et les plaques oranges standards."},

{id:7103,prog:'ADR',theme:'ADR — Classification',d:2,
e:"Les matières auto-échauffantes (Classe 4.2) incluent notamment :",
r:[{t:"L'essence et le kérosène"},{t:"Le charbon actif humide et l'huile de poisson",ok:true},{t:"Le chlore et le brome"},{t:"Le nitrate d'ammonium"}],
x:"La Classe 4.2 (matières sujettes à l'inflammation spontanée) comprend les matières qui s'échauffent spontanément au contact de l'air et peuvent s'enflammer : charbon actif humide, farines animales et végétales, huile de lin, coprah, graines oléagineuses. Elles nécessitent des précautions de stockage et de transport particulières."},

{id:7104,prog:'ADR',theme:'ADR — Classification',d:1,
e:"La Classe 6.2 de l'ADR concerne :",
r:[{t:"Les matières toxiques"},{t:"Les matières infectieuses",ok:true},{t:"Les matières radioactives"},{t:"Les matières corrosives"}],
x:"La Classe 6.2 est dédiée aux matières infectieuses : substances qui contiennent des agents pathogènes (bactéries, virus, parasites, champignons, prions) susceptibles de provoquer des maladies chez l'homme ou l'animal. Exemples : échantillons biologiques diagnostiques (UN 3373), déchets médicaux, cultures de pathogènes."},

{id:7105,prog:'ADR',theme:'ADR — Classification',d:2,
e:"L'ONU 1863 (carburant d'aviation) est classé :",
r:[{t:"Classe 1 — explosible"},{t:"Classe 3 — liquide inflammable",ok:true},{t:"Classe 5.1 — comburant"},{t:"Classe 9 — divers"}],
x:"Le carburant d'aviation (kérosène, jet fuel) est un liquide inflammable de Classe 3, ONU 1863. Son point d'éclair est généralement entre 38°C et 62°C (selon le type), ce qui le place en groupe d'emballage III. Il est transporté en citernes homologuées avec les plaques oranges et étiquettes Classe 3 (flamme rouge/noir)."},

{id:7106,prog:'ADR',theme:'ADR — Classification',d:3,
e:"Le code de classification 'F1' pour les solides inflammables de Classe 4.1 signifie :",
r:[{t:"Matière organique, facilement inflammable"},{t:"Solide inflammable non auto-réactif et non mouillé par un désensibilisateur",ok:true},{t:"Fusée d'artifice"},{t:"Matière solide toxique inflammable"}],
x:"Pour la Classe 4.1, les codes de classification définissent les sous-groupes : F = solide inflammable, F1 = solide inflammable inorganique (non auto-réactif), F2 = matière auto-réactive de type... D, E, F, G. Les solides inflammables sont des solides qui peuvent s'enflammer facilement par friction, absorption d'humidité ou par réaction chimique spontanée."},

{id:7107,prog:'ADR',theme:'ADR — Documents',d:2,
e:"Les consignes écrites ADR doivent être rédigées :",
r:[{t:"En français uniquement"},{t:"Dans les langues que le conducteur comprend et dans celles des pays traversés",ok:true},{t:"Uniquement en anglais (langue internationale)"},{t:"Dans la langue du pays expéditeur uniquement"}],
x:"Les consignes écrites (art. 5.4.3.4 ADR) doivent être rédigées dans les langues que le conducteur peut lire et comprendre, et dans celles des pays traversés. Le transporteur ou l'expéditeur est responsable de la fourniture de ces consignes. Elles doivent correspondre à la matière transportée."},

{id:7108,prog:'ADR',theme:'ADR — Documents',d:1,
e:"Que doit-on retrouver dans le document de transport ADR (déclaration d'expéditeur) ?",
r:[{t:"Uniquement le numéro ONU et la classe"},{t:"Le numéro ONU, le nom d'expédition, la classe, le groupe d'emballage, la quantité, le nom/adresse expéditeur et destinataire",ok:true},{t:"Uniquement les mesures d'urgence"},{t:"Le poids du véhicule chargé"}],
x:"La déclaration de l'expéditeur (document de transport) doit contenir, selon l'ADR 5.4.1.1 : 'UN XXXX Nom d'expédition officiel, Classe X, (GE X ou Code de Classification), Quantité, NOM et adresse de l'expéditeur, NOM et adresse du destinataire'. Des informations supplémentaires sont requises selon les cas (température, code tunnel…)."},

{id:7109,prog:'ADR',theme:'ADR — Documents',d:2,
e:"Le code de restriction de tunnel (code tunnel) E dans l'ADR signifie :",
r:[{t:"Le passage en tunnel est interdit"},{t:"Le passage est interdit dans les tunnels de catégorie E",ok:true},{t:"Le passage est autorisé partout"},{t:"Le passage n'est autorisé que de nuit"}],
x:"Les codes tunnel ADR (A à E) indiquent les restrictions de passage dans les tunnels selon leur catégorie (B, C, D, E selon le niveau de restriction). Code E : interdit dans les tunnels de catégorie E uniquement (les plus restrictifs). Code D : interdit en catégorie D et E. Code (-) : pas de restriction de tunnel."},

{id:7110,prog:'ADR',theme:'ADR — Sécurité',d:2,
e:"La procédure à suivre en cas de fuite de matières dangereuses liquides depuis un camion-citerne est :",
r:[{t:"Tenter de réparer la fuite immédiatement"},{t:"Stationner à l'écart, baliser, alerter les secours (18/112), ne pas s'approcher seul et consulter les consignes écrites",ok:true},{t:"Vider le contenu dans un caniveau pour sécuriser"},{t:"Couvrir la fuite avec de la terre ou du sable manuellement"}],
x:"En cas de fuite d'une citerne ADR : 1) S'arrêter loin des habitations et sources d'ignition, 2) Couper le moteur, 3) Allumer les feux de détresse, 4) Baliser à distance, 5) Appeler le 18 (pompiers) et le 15 (SAMU) si blessés, en précisant le numéro ONU, 6) Consulter les consignes écrites, 7) Ne jamais tenter de colmater seul une fuite importante."},

{id:7111,prog:'ADR',theme:'ADR — Emballages',d:2,
e:"Le groupe d'emballage I (GE I) en ADR est attribué aux matières :",
r:[{t:"Peu dangereuses"},{t:"Très dangereuses",ok:true},{t:"Moyennement dangereuses"},{t:"Non soumises à groupement"}],
x:"Les groupes d'emballage indiquent le niveau de danger : GE I = danger élevé (emballages les plus résistants requis), GE II = danger moyen, GE III = danger faible. Les matières de GE I sont les plus contraignantes en termes d'emballage, de quantités maximales et de restrictions de transport."},

{id:7112,prog:'ADR',theme:'ADR — Emballages',d:3,
e:"Un emballage combiné en ADR est :",
r:[{t:"Un emballage contenant plusieurs matières différentes"},{t:"Un emballage extérieur (caisse, fût) contenant un ou plusieurs emballages intérieurs",ok:true},{t:"Un emballage homologué pour 2 groupes d'emballage"},{t:"Un conteneur citerne"}],
x:"Un emballage combiné comprend un emballage extérieur (qui assure la résistance mécanique et la protection) et des emballages intérieurs (qui contiennent directement la matière dangereuse). L'emballage extérieur peut être une caisse en bois, en carton, en métal, etc. Les deux niveaux d'emballage doivent être homologués."},

{id:7113,prog:'ADR',theme:'ADR — Signalisation',d:1,
e:"L'étiquette de danger de la Classe 1 (explosibles) est de forme :",
r:[{t:"Carrée orange"},{t:"Losange orange avec une bombe exploseuse et un numéro de division",ok:true},{t:"Ronde rouge avec une flamme"},{t:"Triangulaire blanche avec un crâne"}],
x:"Les étiquettes de la Classe 1 sont des losanges (carré sur la pointe) de couleur orange avec le numéro de la sous-classe et de la lettre de groupe de compatibilité. Le pictogramme représente une bombe explosant. Chaque division de la Classe 1 a sa propre étiquette (1.1, 1.2, 1.3, 1.4, 1.5, 1.6)."},

{id:7114,prog:'ADR',theme:'ADR — Signalisation',d:2,
e:"Le numéro de danger '80' sur la plaque orange signifie :",
r:[{t:"Matière radioactive"},{t:"Matière corrosive",ok:true},{t:"Matière comburante liquide"},{t:"Gaz toxique"}],
x:"En ADR, le chiffre 8 indique la corrosivité. Le code 80 = matière corrosive simple. Le code 88 = matière très corrosive (redoublement indiquant l'intensification du risque). Le code 83 = matière corrosive et inflammable. Le code 86 = matière corrosive et toxique."},

{id:7115,prog:'ADR',theme:'ADR — Général',d:2,
e:"Le CSTMD doit rédiger un rapport d'accident lorsque :",
r:[{t:"Tout incident de transport, même mineur"},{t:"Un incident impliquant des pertes de matières dangereuses, des blessés ou des dommages importants",ok:true},{t:"Uniquement lors d'accidents mortels"},{t:"Uniquement pour les Classes 1 et 7"}],
x:"Le CSTMD doit établir un rapport d'accident (art. 1.8.3.6 ADR) après tout incident ou accident survenu pendant le transport qui implique des pertes de matières dangereuses ou qui a causé des dommages à des personnes, des biens ou à l'environnement. Ce rapport est distinct du rapport annuel et est adressé à la direction de l'entreprise."},

{id:7116,prog:'ADR',theme:'ADR — Général',d:1,
e:"Le principe de séparation des charges incompatibles en ADR interdit notamment :",
r:[{t:"Le transport de plusieurs types de GRV dans un même véhicule"},{t:"Le chargement en commun de certaines classes dangereuses incompatibles (explosifs + inflammables, etc.)",ok:true},{t:"Tout mélange de classes dans le même colis"},{t:"Le transport simultané de 3 classes différentes"}],
x:"Le tableau de séparation ADR (sous-section 7.5.2) définit quelles classes peuvent être chargées ensemble et lesquelles sont incompatibles. Par exemple : les explosibles (Cl.1) ne peuvent pas être transportés avec les liquides inflammables (Cl.3) ni les comburants (Cl.5.1). En cas de doute, la règle est de séparer."},

{id:7117,prog:'ADR',theme:'ADR — Classification',d:2,
e:"L'ONU 2794 (batteries au plomb, contenant de l'acide) est classé :",
r:[{t:"Classe 3 — inflammable"},{t:"Classe 8 — corrosif",ok:true},{t:"Classe 9 — divers"},{t:"Classe 6.1 — toxique"}],
x:"Les batteries au plomb mouillées (électrolyte acide) sont classées Classe 8 (matière corrosive), ONU 2794. Elles doivent être transportées dans une position spécifique (verticale), dans des emballages résistant aux acides, avec des étiquettes Classe 8. Des exemptions sont possibles pour les petites quantités selon des conditions strictes."},

{id:7118,prog:'ADR',theme:'ADR — Sécurité',d:3,
e:"La mise à la masse (mise à terre) d'une citerne ADR lors du chargement/déchargement de produits inflammables est obligatoire pour :",
r:[{t:"Toutes les citernes ADR"},{t:"Les citernes contenant des liquides inflammables, pour dissiper les charges électrostatiques",ok:true},{t:"Uniquement les citernes de la Classe 1"},{t:"Uniquement lors des opérations nocturnes"}],
x:"La mise à la masse (earthing/bonding) est obligatoire lors du chargement/déchargement de liquides inflammables en citerne pour prévenir les étincelles dues aux charges électrostatiques générées par l'écoulement du liquide. Une étincelle dans une atmosphère explosive peut provoquer l'inflammation des vapeurs de carburant."},

{id:7119,prog:'ADR',theme:'ADR — Documents',d:2,
e:"Les consignes écrites ADR doivent être conservées dans le véhicule :",
r:[{t:"Uniquement dans la cabine du conducteur"},{t:"Dans la cabine, accessibles au conducteur à tout moment pendant le transport",ok:true},{t:"Dans la boîte à outils du véhicule"},{t:"Transmises au destinataire avant livraison uniquement"}],
x:"Les consignes écrites ADR (art. 5.4.3.4) doivent être conservées dans la cabine du conducteur et accessibles à tout moment pendant le transport. Elles doivent correspondre exactement aux matières transportées et être dans les langues appropriées. En cas de contrôle, leur absence constitue une infraction."},

{id:7120,prog:'ADR',theme:'ADR — Général',d:1,
e:"Quel est le numéro ONU du propane ?",
r:[{t:"UN 1011"},{t:"UN 1978",ok:true},{t:"UN 1965"},{t:"UN 1075"}],
x:"Le propane pur est identifié par le numéro ONU 1978, Classe 2, code de classification 2F (gaz liquéfié inflammable). Le butane est UN 1011. L'UN 1965 est un mélange d'hydrocarbures (GPL - Gaz de Pétrole Liquéfié). L'UN 1075 est le gaz de pétrole liquéfié en général."},

{id:7121,prog:'ADR',theme:'ADR — Signalisation',d:2,
e:"Les plaques de signalisation ADR oranges doivent être :",
r:[{t:"Amovibles et rétroréfléchissantes",ok:true},{t:"Fixes et non réfléchissantes"},{t:"Peintes directement sur la carrosserie"},{t:"Apposées uniquement à l'avant du véhicule"}],
x:"Les plaques oranges ADR doivent être amovibles (pour permettre leur retrait ou couverture quand le véhicule est vide et non nettoyé) et rétroréfléchissantes (pour être visibles la nuit). Elles doivent rester en place pendant le transport et être effacées ou couvertes une fois le véhicule vide et propre."},

{id:7122,prog:'ADR',theme:'ADR — Emballages',d:3,
e:"Un GRV rigide de type 31H1 est :",
r:[{t:"Un fût en acier à fond non amovible"},{t:"Un GRV rigide en plastique à fond non amovible",ok:true},{t:"Un GRV composite avec récipient intérieur en plastique"},{t:"Un conteneur citerne de 1000L"}],
x:"Dans le code des GRV : 31 = GRV rigide fixe (pour liquides), H = plastique, 1 = fond non amovible. Donc 31H1 = GRV rigide en plastique à fond non amovible (remplissage et vidange par le haut). Le 31H2 est le même avec fond amovible. Ces GRV sont couramment utilisés pour les produits chimiques liquides."},

{id:7123,prog:'ADR',theme:'ADR — Général',d:2,
e:"Le nombre de CSTMD requis pour une entreprise de transport ADR dépend de :",
r:[{t:"Uniquement du tonnage transporté"},{t:"Du volume et de la nature des activités, apprécié par l'autorité compétente",ok:true},{t:"Du nombre de véhicules ADR certifiés"},{t:"Du chiffre d'affaires de l'entreprise"}],
x:"L'art. 1.8.3.2 de l'ADR exige qu'une entreprise dont les activités comprennent le transport de marchandises dangereuses désigne un ou plusieurs CSTMD. Le nombre de conseillers nécessaires est à apprécier selon le volume et la complexité des activités. Une même personne peut être CSTMD pour plusieurs entreprises."},

{id:7124,prog:'ADR',theme:'ADR — Classification',d:1,
e:"Les piles et batteries au lithium non rechargeables sont classées :",
r:[{t:"Classe 3 — inflammable"},{t:"Classe 9 — matières et objets dangereux divers",ok:true},{t:"Classe 8 — corrosif"},{t:"Classe 4.3 — réactif à l'eau"}],
x:"Les piles au lithium métal (non rechargeables) : ONU 3090 (piles seules), ONU 3091 (piles dans équipements). Les batteries lithium-ion (rechargeables) : ONU 3480 (batteries seules), ONU 3481 (batteries dans équipements). Toutes sont Classe 9. Des règles très strictes s'appliquent (état de charge ≤ 30 % pour les batteries Li-ion, emballage renforcé, marquages spéciaux)."},


// ══════════════════════════════════════
// CPC LOURD — DROIT CIVIL & COMMERCIAL (40q)
// ══════════════════════════════════════
{id:6800,prog:'LOURD',theme:'Droit civil & commercial PL',d:1,
e:"La lettre de voiture nationale pour un transport PL doit être établie en :",
r:[{t:"1 exemplaire"},{t:"Au moins 3 exemplaires (expéditeur, destinataire, transporteur)",ok:true},{t:"5 exemplaires"},{t:"Elle est facultative si contrat-cadre"}],
x:"La lettre de voiture (ou CMR pour l'international) doit être établie en au moins 3 exemplaires originaux : un pour l'expéditeur, un remis au destinataire avec les marchandises, et un conservé par le transporteur. Elle matérialise le contrat de transport et sert de preuve en cas de litige."},

{id:6801,prog:'LOURD',theme:'Droit civil & commercial PL',d:2,
e:"Le délai pour émettre des réserves motivées après livraison par le destinataire est de :",
r:[{t:"24 heures"},{t:"3 jours ouvrés suivant la livraison",ok:true},{t:"8 jours"},{t:"1 mois"}],
x:"Pour les dommages non apparents à la livraison, le destinataire doit émettre des réserves motivées par lettre recommandée dans les 3 jours ouvrés suivant la livraison (art. L.133-3 du Code de commerce). Sans réserves dans ce délai, toute action contre le transporteur est irrecevable pour les dommages non apparents."},

{id:6802,prog:'LOURD',theme:'Droit civil & commercial PL',d:2,
e:"La déclaration de valeur sur la lettre de voiture permet au chargeur de :",
r:[{t:"Réduire le prix du transport"},{t:"Porter le plafond d'indemnisation à la valeur déclarée en cas de perte ou avarie",ok:true},{t:"Assurer automatiquement la marchandise"},{t:"Exonérer le transporteur de responsabilité"}],
x:"La déclaration de valeur substitue la valeur déclarée au plafond légal d'indemnisation en cas de perte ou avarie. Le transporteur peut appliquer un supplément de prix (surtaxe) en contrepartie. Sans déclaration, le plafond légal s'applique (calculé au poids brut perdu ou avarié)."},

{id:6803,prog:'LOURD',theme:'Droit civil & commercial PL',d:1,
e:"Le destinataire devient partie au contrat de transport :",
r:[{t:"Dès la signature de la lettre de voiture par l'expéditeur"},{t:"Lors de la livraison des marchandises, s'il accepte",ok:true},{t:"Dès l'émission de la facture de transport"},{t:"Il n'est jamais partie au contrat de transport"}],
x:"Le destinataire est initialement un tiers au contrat de transport conclu entre l'expéditeur et le transporteur. Il devient partie à ce contrat (et peut exercer les droits et actions qui en découlent) lors de la livraison, en acceptant les marchandises. Avant la livraison, c'est l'expéditeur qui dispose du droit de disposer des marchandises."},

{id:6804,prog:'LOURD',theme:'Droit civil & commercial PL',d:3,
e:"L'indemnisation maximale par kg en transport national sans déclaration de valeur est fixée par :",
r:[{t:"La loi à un montant fixe par kg"},{t:"Les contrats types annexés aux décrets pour chaque type de transport",ok:true},{t:"La convention CMR pour tous les transports"},{t:"L'assureur du transporteur"}],
x:"En transport national, les limitations d'indemnisation sont fixées par les contrats types (décrets) applicables selon le type de transport. Ces contrats types prévoient des plafonds au kg (différents selon messagerie, lots, frigo, etc.). En transport international, la CMR fixe le plafond à 8,33 DTS par kg de poids brut perdu ou avarié."},

{id:6805,prog:'LOURD',theme:'Droit civil & commercial PL',d:2,
e:"La mise en demeure d'un client de payer une facture impayée est :",
r:[{t:"Obligatoire avant toute procédure judiciaire"},{t:"Souvent requise comme préalable, et elle fait courir les intérêts et interrompt la prescription",ok:true},{t:"Inutile si le retard dépasse 60 jours"},{t:"Obligatoire uniquement pour les montants > 1 000 €"}],
x:"La mise en demeure (LRAR ou acte d'huissier) est un préalable souvent obligatoire ou fortement conseillé avant toute action judiciaire. Elle : fait courir les intérêts moratoires dès la date de la mise en demeure, interrompt le délai de prescription, et constitue la preuve que le débiteur a été informé et n'a pas réglé."},

{id:6806,prog:'LOURD',theme:'Droit civil & commercial PL',d:1,
e:"La prescription de l'action en paiement du prix de transport est de :",
r:[{t:"1 an"},{t:"5 ans pour les actes de commerce",ok:true},{t:"2 ans"},{t:"10 ans"}],
x:"L'action en paiement du prix de transport entre commerçants se prescrit par 5 ans (prescription commerciale de droit commun, art. L.110-4 du Code de commerce). L'action en responsabilité contre le transporteur pour perte ou avarie est de 1 an. Ces deux délais distincts doivent être bien différenciés."},

{id:6807,prog:'LOURD',theme:'Droit civil & commercial PL',d:2,
e:"Le plan de sauvegarde dans une procédure de redressement judiciaire prévoit :",
r:[{t:"La liquidation immédiate de l'entreprise"},{t:"Un étalement des dettes et des mesures pour permettre la poursuite de l'activité",ok:true},{t:"La cession obligatoire de tous les actifs"},{t:"L'exonération totale des dettes fiscales"}],
x:"Le plan de sauvegarde ou de redressement fixe les modalités de règlement des créanciers (étalement sur 10 ans maximum, remises possible avec accord des créanciers) et les mesures de restructuration permettant à l'entreprise de poursuivre son activité. Il doit être adopté par le tribunal de commerce."},

{id:6808,prog:'LOURD',theme:'Droit civil & commercial PL',d:3,
e:"Le privilege général du transporteur sur les marchandises transportées :",
r:[{t:"N'existe pas en droit français"},{t:"Lui permet d'être payé prioritairement sur la valeur des marchandises pour sa créance de fret",ok:true},{t:"S'applique uniquement aux créances de plus de 1 000 €"},{t:"N'est valable qu'en cas de faillite du client"}],
x:"Le transporteur dispose d'un privilège spécial sur les marchandises transportées (art. L.133-7 du Code de commerce) pour sa créance de fret, accessoires et déboursés. Ce privilège lui permet d'être désintéressé prioritairement sur la valeur des marchandises en cas de défaillance du client. Il s'exerce tant que le transporteur est en possession des marchandises."},

{id:6809,prog:'LOURD',theme:'Droit civil & commercial PL',d:2,
e:"L'affrètement d'un véhicule PL se caractérise par :",
r:[{t:"La vente du véhicule au fréteur"},{t:"La mise à disposition d'un véhicule avec son conducteur par le fréteur à un affréteur",ok:true},{t:"La sous-traitance d'une prestation de transport"},{t:"La location d'un véhicule sans conducteur"}],
x:"L'affrètement (routier) est le contrat par lequel le fréteur (propriétaire ou exploitant du camion) met à disposition de l'affréteur un véhicule avec son conducteur pour l'exécution d'une prestation de transport. L'affréteur donne ses instructions au conducteur. C'est différent de la commission de transport."},

{id:6810,prog:'LOURD',theme:'Droit civil & commercial PL',d:1,
e:"Les CGV (Conditions Générales de Vente) d'un transporteur PL s'appliquent :",
r:[{t:"Uniquement avec signature manuscrite"},{t:"Dès lors qu'elles ont été portées à la connaissance du client avant la commande",ok:true},{t:"Uniquement pour les transports > 10 000 €"},{t:"Uniquement entre transporteurs"}],
x:"Les CGV sont opposables au client professionnel dès lors qu'elles lui ont été communiquées avant la commande (même sans signature spécifique si la communication est prouvée). Elles doivent notamment mentionner les prix, conditions de paiement, limitations de responsabilité et les pénalités de retard."},

{id:6811,prog:'LOURD',theme:'Droit civil & commercial PL',d:2,
e:"En cas de grève des conducteurs d'une PME de transport, l'employeur peut :",
r:[{t:"Licencier tous les grévistes immédiatement"},{t:"Faire appel à des intérimaires pour les remplacer, ou à de la sous-traitance",ok:true},{t:"Leur retenir l'intégralité du salaire du mois"},{t:"Fermer l'entreprise définitivement"}],
x:"L'employeur peut recourir à la sous-traitance ou à du travail temporaire (intérim) pour assurer les transports urgents en cas de grève, dans le respect de la légalité (pas de briseurs de grève illégaux). La retenue de salaire ne porte que sur les heures non travaillées (grève non rémunérée)."},

{id:6812,prog:'LOURD',theme:'Droit civil & commercial PL',d:3,
e:"La clause de hardship (imprévision) dans un contrat de transport longue durée :",
r:[{t:"Permet au transporteur de résilier sans préavis"},{t:"Oblige les parties à renégocier si les circonstances changent radicalement et rendent le contrat déséquilibré",ok:true},{t:"Exonère automatiquement en cas de force majeure"},{t:"N'est valable qu'en droit international"}],
x:"Depuis la réforme du droit des contrats de 2016 (art. 1195 du Code civil), l'imprévision est reconnue en droit français : si un changement de circonstances imprévisible rend l'exécution du contrat excessivement onéreuse, la partie qui n'avait pas accepté ce risque peut demander une renégociation. À défaut d'accord, le juge peut adapter ou résoudre le contrat."},

{id:6813,prog:'LOURD',theme:'Droit civil & commercial PL',d:2,
e:"L'assurance tous risques marchandises transportées (AMT) :",
r:[{t:"Est toujours incluse dans l'assurance RC du transporteur"},{t:"Est souscrite par l'expéditeur ou le destinataire pour couvrir la valeur réelle des marchandises",ok:true},{t:"Est obligatoire pour tous les transports PL"},{t:"Est souscrite par le transporteur pour son compte"}],
x:"L'assurance AMT (Ad Valorem ou tous risques marchandises) est souscrite par l'expéditeur ou le destinataire pour couvrir la valeur réelle des marchandises en cas de perte, vol ou dommage. Elle complète la responsabilité plafonnée du transporteur. Elle est distincte de l'assurance RC du transporteur."},

{id:6814,prog:'LOURD',theme:'Droit civil & commercial PL',d:1,
e:"Le contrat de groupage consiste à :",
r:[{t:"Regrouper plusieurs transporteurs pour un seul contrat"},{t:"Rassembler des marchandises de plusieurs expéditeurs dans un même véhicule pour réduire les coûts",ok:true},{t:"Grouper des factures sur une seule"},{t:"Faire des livraisons groupées uniquement en zone urbaine"}],
x:"Le groupage (ou LTL : Less than Truck Load) consiste à réunir dans un même véhicule des marchandises appartenant à différents expéditeurs pour optimiser le taux de remplissage et réduire le coût par unité transportée. C'est le principe de la messagerie et des services de groupage spécialisés."},

{id:6815,prog:'LOURD',theme:'Droit civil & commercial PL',d:2,
e:"La garantie de bonne fin dans un marché de transport longue durée :",
r:[{t:"Garantit le paiement systématique des factures"},{t:"Engage le transporteur à honorer toutes ses prestations sur la durée du contrat",ok:true},{t:"Remplace le contrat d'assurance"},{t:"N'existe pas dans le transport routier"}],
x:"La garantie de bonne exécution (ou bonne fin) engage le transporteur à exécuter l'intégralité de ses obligations contractuelles sur la durée du marché. Elle peut être garantie par une caution bancaire si le client l'exige. En cas de défaillance, la caution indemnise le client."},

{id:6816,prog:'LOURD',theme:'Droit civil & commercial PL',d:3,
e:"La sous-traitance dans le transport routier est réglementée par :",
r:[{t:"Le code civil uniquement"},{t:"La loi du 31/12/1975 sur la sous-traitance ET les règles spécifiques du transport routier",ok:true},{t:"Aucune réglementation spécifique"},{t:"Uniquement les conventions collectives"}],
x:"La sous-traitance dans le transport est encadrée à la fois par la loi générale du 31 décembre 1975 sur la sous-traitance (action directe du sous-traitant accepté, obligation de déclaration) et par les règles spécifiques du transport routier (le sous-traitant doit être titulaire de sa propre licence de transport et ne peut pas subir des prix manifestement abusifs)."},

{id:6817,prog:'LOURD',theme:'Droit civil & commercial PL',d:2,
e:"L'injonction de payer est une procédure :",
r:[{t:"Longue et coûteuse nécessitant un avocat"},{t:"Simplifiée permettant de recouvrer rapidement une créance certaine et exigible sans débat contradictoire préalable",ok:true},{t:"Réservée aux dettes > 10 000 €"},{t:"Uniquement pour les litiges commerciaux entre grandes entreprises"}],
x:"L'injonction de payer (art. 1405 du Code de procédure civile) est une procédure judiciaire simplifiée et rapide. Le créancier saisit le tribunal par requête. Si accordée, le débiteur est notifié. S'il ne s'y oppose pas dans le mois, l'ordonnance devient exécutoire et la saisie peut être mise en œuvre."},

{id:6818,prog:'LOURD',theme:'Droit civil & commercial PL',d:1,
e:"Le livre de police tenu par un récupérateur de véhicules ou un cimetière d'autos doit :",
r:[{t:"Être transmis annuellement à la Préfecture"},{t:"Enregistrer les acquisitions et cessions de véhicules et être présenté lors des contrôles",ok:true},{t:"Être visé par un commissaire de police mensuel"},{t:"Être disponible uniquement pour les douanes"}],
x:"Les professionnels de la récupération automobile doivent tenir un registre des véhicules acquis et cédés, présenté lors des contrôles de police. Cette réglementation vise à lutter contre le recel de véhicules volés et le trafic de pièces détachées d'origine douteuse."},

{id:6819,prog:'LOURD',theme:'Droit civil & commercial PL',d:2,
e:"Le contrat de transport routier est qualifié de :",
r:[{t:"Contrat réel"},{t:"Contrat d'entreprise à titre onéreux",ok:true},{t:"Contrat aléatoire"},{t:"Contrat unilatéral"}],
x:"Le contrat de transport est qualifié de contrat d'entreprise (locatio operis) à titre onéreux. Le transporteur s'engage à un résultat (la livraison) et non à une simple mise à disposition de moyens. Il est synallagmatique (obligations réciproques), consensuel (formé par accord des volontés) et commutatif (prestations équivalentes connues à l'avance)."},

// ══════════════════════════════════════
// CPC LOURD — GESTION FINANCIÈRE suite (50q)
// ══════════════════════════════════════
{id:6820,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"Le coût moyen pondéré du parc (CMPP) est calculé en :",
r:[{t:"Additionnant la valeur de tous les véhicules"},{t:"Pondérant les coûts de chaque véhicule par son utilisation ou son kilométrage dans la flotte",ok:true},{t:"Divisant le chiffre d'affaires par le nombre de véhicules"},{t:"Calculant l'amortissement annuel moyen"}],
x:"Le CMPP est une moyenne pondérée des coûts de chaque véhicule de la flotte, en tenant compte de l'utilisation de chacun. Il permet d'établir un tarif de transport cohérent qui reflète les coûts réels de l'ensemble du parc, incluant les véhicules plus récents et plus anciens."},

{id:6821,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"Le ratio de rentabilité des actifs (ROA) se calcule comme :",
r:[{t:"Résultat net / Capitaux propres"},{t:"Résultat net / Total actif × 100",ok:true},{t:"CA / Total actif"},{t:"EBIT / Chiffre d'affaires"}],
x:"ROA (Return On Assets) = Résultat net / Total actif × 100. Il mesure l'efficacité de l'entreprise à générer des bénéfices à partir de ses actifs totaux. Un ROA de 8 % signifie que l'entreprise génère 8 € de bénéfice pour 100 € d'actifs. C'est un indicateur d'efficience opérationnelle."},

{id:6822,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"Les frais de déplacement des conducteurs PL (indemnités de grand routier) sont comptabilisés en :",
r:[{t:"Charges exceptionnelles"},{t:"Charges de personnel (6413 ou 6415)",ok:true},{t:"Achats (601)"},{t:"Charges financières"}],
x:"Les indemnités de déplacement des conducteurs (repas, couchées, grand déplacement) sont comptabilisées dans les charges de personnel : compte 6413 (indemnités et avantages divers) ou 6415 (charges de sécurité sociale et de prévoyance). Elles sont exonérées de cotisations sociales dans les limites URSSAF."},

{id:6823,prog:'LOURD',theme:'Gestion financière PL',d:3,
e:"Le tableau de bord de gestion d'une entreprise PL doit comporter en priorité :",
r:[{t:"Uniquement le chiffre d'affaires mensuel"},{t:"Les indicateurs de rentabilité (CRK, coefficient d'exploitation), d'activité (km, taux de remplissage) et de sécurité",ok:true},{t:"Uniquement les indicateurs financiers"},{t:"Les statistiques d'accidents uniquement"}],
x:"Un tableau de bord de transport doit comporter : indicateurs financiers (CA, marge, coût revient), indicateurs d'activité (km parcourus, km à vide, taux de remplissage, nombre de livraisons), indicateurs sociaux (heures, heures sup, accidents de travail) et indicateurs de sécurité (infractions, accidents). Il doit être mis à jour au moins mensuellement."},

{id:6824,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"La taxe sur les salaires est due par les entreprises :",
r:[{t:"Toutes les entreprises sans exception"},{t:"Non assujetties à la TVA sur tout ou partie de leur activité",ok:true},{t:"Dont le CA dépasse 1 million d'euros"},{t:"Dont les salaires représentent plus de 50 % du CA"}],
x:"La taxe sur les salaires (art. 231 du CGI) est due par les employeurs qui ne sont pas assujettis à la TVA ou qui ne l'ont pas été sur au moins 90 % de leur CA l'année précédente. Les entreprises de transport (entièrement assujetties à la TVA) en sont généralement exonérées."},

{id:6825,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"Le taux de fret moyen d'un transporteur PL mesure :",
r:[{t:"La vitesse de rotation du capital"},{t:"Le prix moyen facturé par km ou par tonne-km",ok:true},{t:"Le taux d'utilisation du parc"},{t:"Le rapport entre fret payant et fret à vide"}],
x:"Le taux de fret (ou prix moyen) est le revenu moyen par unité de transport (€/km, €/tonne, €/palette). Il est calculé en divisant le CA par les km chargés ou les tonnes transportées. Son évolution permet de suivre la politique tarifaire et de la comparer aux indices CNR de référence."},

{id:6826,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"La valeur de remplacement d'un PL (vs valeur nette comptable) est importante pour :",
r:[{t:"Le calcul de l'IS"},{t:"La mise à jour du niveau d'amortissement nécessaire pour financer le renouvellement du parc",ok:true},{t:"L'évaluation des stocks"},{t:"Le calcul des cotisations sociales"}],
x:"La VNC (Valeur Nette Comptable) peut être très inférieure à la valeur de remplacement (coût d'achat d'un nouveau véhicule équivalent). Cet écart indique que les amortissements passés ne seront pas suffisants pour financer le renouvellement. L'entreprise doit provisionner ou emprunter pour remplacer ses véhicules."},

{id:6827,prog:'LOURD',theme:'Gestion financière PL',d:3,
e:"Le ratio de couverture de la dette nette par l'EBITDA (levier d'endettement) est considéré comme sain lorsqu'il est :",
r:[{t:"Supérieur à 10"},{t:"Inférieur à 3 à 4 (la dette nette représente moins de 3-4 années d'EBITDA)",ok:true},{t:"Exactement égal à 1"},{t:"Le plus élevé possible"}],
x:"Le ratio Dette nette / EBITDA mesure la capacité de l'entreprise à rembourser sa dette nette avec son résultat opérationnel brut. Un ratio < 3-4 est considéré comme sain pour une entreprise industrielle/transport. Au-delà de 5-6, le risque financier est élevé et les banques peuvent refuser de nouveaux prêts."},

{id:6828,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"L'annexe aux comptes annuels d'une PME de transport doit contenir :",
r:[{t:"Uniquement les informations comptables obligatoires"},{t:"Les règles et méthodes comptables, les informations complémentaires sur le bilan et le résultat",ok:true},{t:"Les contrats de travail des salariés"},{t:"Les contrats de transport en cours"}],
x:"L'annexe (3ème document des comptes annuels avec bilan et compte de résultat) complète et précise les informations du bilan et du résultat : méthodes d'évaluation et d'amortissement, engagements hors bilan, crédit-bail, effectifs, tableau des filiales et participations. Elle est obligatoire sauf pour les micro-entreprises (bilan simplifié possible)."},

{id:6829,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"La location longue durée (LLD) d'un PL par rapport à l'achat se caractérise par :",
r:[{t:"La propriété du véhicule à la fin du contrat"},{t:"Des loyers mensuels fixes tout compris, sans option d'achat à terme",ok:true},{t:"Un coût inférieur à l'achat comptant"},{t:"L'impossibilité de changer de véhicule en cours de contrat"}],
x:"La LLD (ou Location Longue Durée) diffère du leasing (crédit-bail) : la LLD n'inclut pas d'option d'achat finale. Le locataire utilise le véhicule pendant une durée déterminée (3-5 ans) avec un loyer mensuel qui peut inclure l'entretien, les pneus et parfois l'assurance. À l'échéance, le véhicule est restitué."},

{id:6830,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"L'analyse financière par ratios nécessite de comparer les ratios :",
r:[{t:"Uniquement aux périodes précédentes de la même entreprise"},{t:"Aux périodes précédentes ET aux références sectorielles (CNR, observatoires transport)",ok:true},{t:"Uniquement aux concurrents directs"},{t:"Exclusivement aux normes bancaires"}],
x:"Une analyse de ratios pertinente compare : 1) l'évolution dans le temps (ratios N vs N-1, N-2) pour détecter les tendances, et 2) les références sectorielles (données CNR, FNTR, TLF, observatoires des PME transport) pour évaluer le positionnement par rapport aux concurrents. Une seule comparaison sans l'autre est insuffisante."},

{id:6831,prog:'LOURD',theme:'Gestion financière PL',d:3,
e:"Le fonds de roulement normatif d'une entreprise PL est calculé en :",
r:[{t:"Ajoutant les actifs immobilisés aux stocks"},{t:"Exprimant les composantes du BFR en jours de CA pour établir un BFR de référence",ok:true},{t:"Divisant le CA par 12"},{t:"Multipliant les charges fixes par le taux d'imposition"}],
x:"Le FRNG normatif exprime le BFR prévisionnel 'normal' de l'entreprise en jours de CA (délai clients × CA, délai fournisseurs × achats, stocks × coût des ventes). Il permet de calculer le FRNG nécessaire pour financer ce BFR normal. C'est un outil de prévision et de pilotage financier."},

{id:6832,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"Le seuil de dangerosité financière d'une entreprise PL peut être évalué par le ratio :",
r:[{t:"CA / Actif total"},{t:"Dette nette / (CAF × facteur sectoriel), ou coefficient d'exploitation > 95-96 %",ok:true},{t:"Résultat net / CA"},{t:"Nombre de véhicules / Effectif"}],
x:"Les principaux signaux de danger financier pour une PME transport : coefficient d'exploitation dépassant régulièrement 95-96 %, trésorerie négative et dégradée sur plusieurs trimestres, CAF insuffisante pour couvrir les remboursements d'emprunts, délais clients qui s'allongent, et fonds propres négatifs (situation nette négative)."},

{id:6833,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"Le résultat financier d'une entreprise de transport comprend :",
r:[{t:"Les loyers de crédit-bail"},{t:"Les produits et charges liés au financement (intérêts d'emprunt, escomptes, revenus financiers)",ok:true},{t:"Les plus-values de cession de véhicules"},{t:"Les subventions d'exploitation"}],
x:"Le résultat financier = Produits financiers (intérêts reçus, revenus de participations, gains de change) - Charges financières (intérêts d'emprunt, agios, pertes de change, charges d'escompte). Il est généralement négatif pour les entreprises de transport endettées. Les loyers de crédit-bail sont des charges d'exploitation, pas financières."},

{id:6834,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"La participation aux bénéfices dans une PME de transport de 50+ salariés est calculée sur la base de :",
r:[{t:"Le résultat net comptable uniquement"},{t:"Une formule légale intégrant le bénéfice fiscal, les capitaux propres et la masse salariale",ok:true},{t:"Le bénéfice distribuable uniquement"},{t:"Un accord de branche obligatoire"}],
x:"La réserve de participation légale = 1/2 × (Bénéfice fiscal × 5 % des capitaux propres) × Masse salariale / Valeur ajoutée. Cette formule complexe est définie par le Code du travail. Elle vise à intéresser les salariés aux résultats de l'entreprise. La somme est bloquée 5 ans (sauf cas de déblocage anticipé)."},

{id:6835,prog:'LOURD',theme:'Gestion financière PL',d:3,
e:"Le diagnostic financier d'une reprise d'une PME de transport doit s'appuyer sur :",
r:[{t:"Uniquement les 3 derniers bilans"},{t:"3 derniers bilans + comptes de résultat + CAF + tableaux de flux + analyse hors bilan et engagements",ok:true},{t:"Uniquement le dernier bilan"},{t:"Les statistiques sectorielles CNR uniquement"}],
x:"Un diagnostic complet pour une reprise doit analyser : les 3 derniers exercices (bilans, CR, annexes), la CAF et son évolution, les flux de trésorerie, les engagements hors bilan (crédit-bail, cautions, litiges en cours), l'état du parc et son vieillissement, les contrats clients et leur pérennité, et la situation sociale (effectifs, contentieux prud'homaux)."},

// ══════════════════════════════════════
// CPC LOURD — RÉGLEMENTATION suite (50q)
// ══════════════════════════════════════
{id:6836,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Le transport de matières en vrac solides en benne (céréales, gravier) nécessite :",
r:[{t:"Une licence de transport spéciale"},{t:"Un véhicule adapté et un bâchage si la marchandise risque d'être dispersée",ok:true},{t:"Une autorisation préfectorale pour chaque transport"},{t:"Un conducteur titulaire du CQC Vrac"}],
x:"Le transport en vrac (matières non emballées) obéit aux règles générales du transport de marchandises (licence, tachygraphe…). La réglementation impose le bâchage des bennes si les matières transportées peuvent être dispersées par le vent (art. R.412-24 Code de la route). Des réglementations sectorielles spécifiques existent (céréales, déchets, etc.)."},

{id:6837,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"Un conducteur PL qui commet une infraction aux règles de temps de conduite risque notamment :",
r:[{t:"Uniquement une retenue sur salaire"},{t:"Une amende, un retrait de points et potentiellement une immobilisation du véhicule",ok:true},{t:"Une suspension automatique du permis"},{t:"Uniquement une mention au registre patronal"}],
x:"Les infractions aux règles de temps de conduite (règl. 561/2006) sont des contraventions ou délits selon leur gravité : amende de classe 4 (750 € max) pour la plupart, mais délit pénal pour les dépassements de plus d'une heure. L'immobilisation du véhicule est possible si le conducteur a atteint ses limites. Les points peuvent être retirés."},

{id:6838,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Le transit routier international est régi principalement par :",
r:[{t:"La convention ADR uniquement"},{t:"La convention CMR pour les marchandises, la convention TIR pour le transit douanier",ok:true},{t:"Uniquement les accords bilatéraux entre États"},{t:"Le seul règlement européen 1072/2009"}],
x:"Le transport international routier est régi par plusieurs conventions : la CMR (contrat de transport, responsabilité), l'accord TIR (transit douanier international), l'accord AETR (temps de conduite hors UE), l'accord ADR (matières dangereuses) et les accords bilatéraux pour les autorisations de circulation dans certains pays."},

{id:6839,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"Le transport exceptionnel de catégorie 3 (la plus contraignante) nécessite :",
r:[{t:"Uniquement une signalisation renforcée"},{t:"Une autorisation individuelle préfectorale, des escortes de police et une coordination avec les gestionnaires de voirie",ok:true},{t:"Uniquement l'accord de la DREAL"},{t:"Un véhicule spécialement immatriculé"}],
x:"Les transports exceptionnels de catégorie 3 (très grands gabarits ou très lourds) nécessitent une autorisation individuelle spécifique, une coordination avec tous les gestionnaires de voirie concernés, des escortes officielles (police nationale ou gendarmerie), et parfois des déplacements uniquement de nuit ou les week-ends pour minimiser la gêne au trafic."},

{id:6840,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Le protocolle de sécurité pour les opérations de chargement/déchargement en site industriel doit être établi :",
r:[{t:"Uniquement si le site a plus de 50 salariés"},{t:"Pour toute opération dans un lieu de travail extérieur à l'entreprise de transport",ok:true},{t:"Uniquement pour les matières dangereuses"},{t:"À la demande du client uniquement"}],
x:"L'arrêté du 26 avril 1996 (art. R.4515-1 du Code du travail) impose qu'un protocole de sécurité soit établi entre l'entreprise d'accueil (donneur d'ordre) et l'entreprise de transport pour toute opération de chargement ou déchargement réalisée dans un établissement soumis aux règles de prévention des risques professionnels."},

{id:6841,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"Le certificat d'immatriculation d'un semi-remorque doit mentionner :",
r:[{t:"Uniquement le PTAC de la semi-remorque"},{t:"Le PTAC, la masse à vide et le numéro de chassis",ok:true},{t:"Uniquement le numéro de chassis"},{t:"Le nom du transporteur propriétaire"}],
x:"La carte grise d'une semi-remorque mentionne obligatoirement : le PTAC (charge maximum autorisée en charge), la masse en ordre de marche, la charge maximale sur la sellette, le numéro de châssis (VIN), les dimensions, la marque et le modèle. Ces données sont essentielles pour le calcul du PTRA de l'ensemble."},

{id:6842,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Les restrictions de circulation le week-end pour les PL ne s'appliquent pas aux :",
r:[{t:"Transports de déménagement"},{t:"Transports de denrées périssables et transports urgents médicaux",ok:true},{t:"Transports de matériaux de construction"},{t:"Transports de machines agricoles"}],
x:"De nombreuses dérogations aux restrictions de circulation du week-end existent : denrées périssables, transports médicaux urgents, transports de carburant, animaux vivants, livraison de journaux, transports pour des événements sportifs ou culturels, approvisionnement des marchés… Ces dérogations sont listées dans l'arrêté du 2 mars 2015."},

{id:6843,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"Le calcul du PTRA (Poids Total Roulant Autorisé) d'un ensemble articul : tracteur (PTAC 18t) + semi (PTAC 34t) :",
r:[{t:"= 52 tonnes (sum des PTAC)"},{t:"= 40 tonnes car c'est la limite légale pour un ensemble 5 essieux",ok:true},{t:"= 18 tonnes (le plus faible des deux PTAC)"},{t:"= Variable selon le nombre d'essieux"}],
x:"Le PTRA n'est pas la somme des PTAC individuels mais la limite légale applicable à l'ensemble. Pour un ensemble tracteur + semi à 5 essieux, le PTRA légal en France est de 40 tonnes. Un tracteur 18t + semi 34t = PTAC cumulés 52t, mais le PTRA légal maximum est de 40t. Il faut choisir un chargement compatible avec le PTRA légal."},

{id:6844,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"La norme Euro (Euro 1 à Euro 7) pour les moteurs PL concerne :",
r:[{t:"La sécurité passive des véhicules"},{t:"Les émissions polluantes (NOx, CO, particules fines) des moteurs",ok:true},{t:"La consommation de carburant"},{t:"Le niveau sonore des véhicules"}],
x:"Les normes Euro fixent les valeurs limites d'émissions polluantes des moteurs thermiques (gaz et particules). Euro 6d (actuellement) : limites très strictes sur les NOx et les particules. Euro 7 est en cours d'introduction. Plus le chiffre est élevé, plus les émissions sont faibles. Ces normes déterminent la vignette Crit'Air et l'accès aux ZFE."},

{id:6845,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"Un conducteur PL peut-il transporter des passagers (auto-stoppeurs) dans son camion ?",
r:[{t:"Oui, illimité"},{t:"Non, sauf personnes expressément autorisées par l'employeur (contremaître, mécanicien…)",ok:true},{t:"Oui, jusqu'à 3 passagers"},{t:"Oui, si le trajet est court"}],
x:"Il est interdit de transporter des personnes non autorisées dans un PL (raisons de sécurité, couverture assurance, responsabilité). Seules les personnes expressément autorisées par l'employeur (technicien accompagnateur, stagiaire, etc.) peuvent monter à bord. Le transport de passagers non autorisés peut engager la responsabilité du conducteur et de l'employeur."},

{id:6846,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"La mise sur le marché de véhicules PL neufs en Europe nécessite :",
r:[{t:"Uniquement une immatriculation nationale"},{t:"Une réception par type CE délivrée par une autorité compétente de l'UE",ok:true},{t:"Un agrément DREAL spécifique"},{t:"L'accord de chaque pays où le véhicule circulera"}],
x:"La réception par type CE (ou UE) est le processus d'homologation européen par lequel un véhicule est reconnu conforme aux règlements techniques européens (sécurité, émissions, bruit…). Elle est délivrée par une autorité compétente d'un État membre (DREIA en France) et est valable dans toute l'UE."},

{id:6847,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"Le transport de matières inflammables en citerne (kérosène, gazole) nécessite le certificat ADR de type :",
r:[{t:"Certificat de base ADR uniquement"},{t:"Certificat ADR de base + module citerne",ok:true},{t:"Uniquement le certificat citerne"},{t:"Aucun certificat spécifique pour les carburants courants"}],
x:"Pour les transports en citerne de matières liquides inflammables (gazole, essence, kérosène…), le conducteur doit posséder : le certificat ADR de base (module de base) + le module complémentaire citerne. Ces formations sont délivrées par des organismes agréés. La possession du seul certificat de base est insuffisante pour les citernes."},

{id:6848,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"La limitation de vitesse d'un PL en agglomération est de :",
r:[{t:"60 km/h"},{t:"50 km/h, identique aux autres véhicules",ok:true},{t:"40 km/h"},{t:"30 km/h systématiquement"}],
x:"En agglomération, la limitation générale de vitesse de 50 km/h s'applique à tous les véhicules, y compris les PL. Des limitations inférieures (30 km/h, 20 km/h) peuvent être imposées localement. Le limiteur de vitesse des PL (90 km/h max) ne joue pas en agglomération, mais la réglementation générale s'applique."},

{id:6849,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"Le carnet de bord de conduite pour un conducteur PL sans tachygraphe numérique fonctionnel doit être rempli :",
r:[{t:"Uniquement si l'entreprise le demande"},{t:"Manuellement à la main pour reconstituer toutes les activités depuis la dernière utilisation normale",ok:true},{t:"Il n'existe pas de carnet de bord légal"},{t:"Uniquement pour les trajets de plus de 100 km"}],
x:"En cas de défaillance du tachygraphe ou d'absence de la carte conducteur, le conducteur doit noter manuellement toutes ses activités (conduite, autres travaux, disponibilité, repos) sur une feuille de papier ou carnet homologué, avec les données obligatoires (date, heure, nom du conducteur, lieux de départ et d'arrivée…)."},

{id:6850,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"L'immobilisation d'un véhicule PL par les forces de l'ordre peut être prononcée en cas de :",
r:[{t:"Tout retard de livraison"},{t:"Dépassement des temps de conduite, surcharge, défaut de documents, défaut grave de maintenance",ok:true},{t:"Uniquement en cas d'accident"},{t:"Seulement pour les infractions ADR"}],
x:"Les forces de l'ordre (Police, Gendarmerie, inspection du travail, DREAL) peuvent immobiliser un PL en cas de : dépassement des temps de conduite (conducteur ayant épuisé ses droits), surcharge dépassant les seuils, défaut de tachygraphe ou de carte conducteur valide, défect grave de sécurité mécanique, ou non-présentation de documents obligatoires."},

{id:6851,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"Le covoiturage de conducteurs PL (transport de conducteurs vers leur véhicule) est soumis à :",
r:[{t:"La réglementation du transport public de personnes"},{t:"Les règles du transport de personnes pour compte propre si organisé par l'entreprise",ok:true},{t:"Aucune réglementation particulière"},{t:"La licence de transport de voyageurs obligatoirement"}],
x:"Le transport de conducteurs par l'employeur (par exemple, pour récupérer leur véhicule dans un dépôt distant) est un transport pour compte propre d'entreprise. Il ne nécessite pas de licence de transport de voyageurs mais doit respecter les règles de sécurité (véhicule assuré, conducteur habilité, passagers avec ceintures)."},

// ══════════════════════════════════════
// CPC LOURD — INTERNATIONAL suite (20q)
// ══════════════════════════════════════
{id:6852,prog:'LOURD',theme:'Transport international',d:2,
e:"Le règlement (UE) 2020/1054 modifiant 561/2006 a notamment interdit :",
r:[{t:"Le cabotage dans l'UE"},{t:"La prise du repos hebdomadaire normal en cabine",ok:true},{t:"L'utilisation du tachygraphe analogique"},{t:"Le transport de certaines marchandises dangereuses"}],
x:"Le règlement 2020/1054 (paquet mobilité) a notamment codifié l'interdiction de prendre le repos hebdomadaire normal (45h) en cabine du véhicule. Cette interdiction, établie par la CJUE en 2020, a été transposée dans la réglementation. Le repos hebdomadaire normal doit être pris dans un hébergement adéquat avec installations sanitaires."},

{id:6853,prog:'LOURD',theme:'Transport international',d:1,
e:"L'accord AETR s'applique aux transports routiers :",
r:[{t:"Uniquement dans l'UE"},{t:"Dans les pays européens non membres de l'UE et pour les transports vers/depuis ces pays",ok:true},{t:"Uniquement pour les transports ADR"},{t:"Dans tous les pays du monde"}],
x:"L'accord AETR (Accord Européen relatif au Travail des équipages des véhicules effectuant des transports Routiers internationaux) s'applique aux transports effectués sur le territoire des pays signataires non membres de l'UE (Turquie, Ukraine, Russie, pays balkaniques, Kazakhstan…). Dans l'UE, le règlement 561/2006 s'applique."},

{id:6854,prog:'LOURD',theme:'Transport international',d:2,
e:"Les documents d'exportation pour un transport de marchandises vers le Maroc incluent :",
r:[{t:"Uniquement la lettre de voiture CMR"},{t:"CMR + déclaration export EX + certificat d'origine si nécessaire + carnet TIR si utilisé",ok:true},{t:"Uniquement le passeport du conducteur"},{t:"Un certificat phytosanitaire pour toutes les marchandises"}],
x:"Pour un transport France-Maroc : lettre de voiture CMR, déclaration d'exportation (EX1/DAE électronique), certificat d'origine si les marchandises peuvent bénéficier de tarifs préférentiels (accord d'association UE-Maroc), carnet TIR (très utilisé pour ce corridor), documents vétérinaires ou phytosanitaires selon la nature des marchandises."},

{id:6855,prog:'LOURD',theme:'Transport international',d:3,
e:"Le principe de réciprocité dans le transport routier international signifie :",
r:[{t:"Les transporteurs de deux pays se partagent les revenus"},{t:"Un pays accorde aux transporteurs de l'autre pays les mêmes droits que ceux accordés à ses propres transporteurs",ok:true},{t:"Les deux pays appliquent les mêmes tarifs"},{t:"Le transit est gratuit entre pays réciprocitaires"}],
x:"Le principe de réciprocité (accordé bilatéralement) permet à des transporteurs de deux pays de circuler sur le territoire de l'autre avec les mêmes droits que les nationaux. En l'absence d'accord ou de réciprocité, des autorisations spéciales (contingents de passages) sont nécessaires. Au sein de l'UE, la libre circulation est garantie par la licence communautaire."},

{id:6856,prog:'LOURD',theme:'Transport international',d:2,
e:"Le service T2F est utilisé pour :",
r:[{t:"Les marchandises communautaires à destination de territoires fiscaux spéciaux (Canaries, Monaco…)",ok:true},{t:"Toutes les marchandises exportées hors UE"},{t:"Les marchandises sous température dirigée"},{t:"Les envois postaux internationaux"}],
x:"Le formulaire T2F est un document douanier attestant du statut communautaire de marchandises destinées à des territoires fiscaux appartenant à l'UE douanière mais pas à l'UE fiscale (ex : îles Canaries, Ceuta et Melilla, Monaco, îles anglo-normandes…). Il permet d'éviter une perception de TVA à l'entrée de ces territoires."},

{id:6857,prog:'LOURD',theme:'Transport international',d:1,
e:"La responsabilité du transporteur CMR pour avarie partielle est calculée sur :",
r:[{t:"La valeur totale du chargement"},{t:"Le poids brut de la partie perdue ou avariée × 8,33 DTS/kg",ok:true},{t:"Un montant forfaitaire par colis"},{t:"La valeur déclarée sur la lettre de voiture CMR"}],
x:"L'art. 23 de la CMR fixe l'indemnisation à 8,33 DTS (Droits de Tirage Spéciaux) par kilogramme de poids brut de la marchandise perdue ou avariée. La valeur totale ne sert de référence que si la déclaration de valeur a été faite sur la lettre de voiture (art. 24 CMR), auquel cas cette valeur se substitue au plafond légal."},

{id:6858,prog:'LOURD',theme:'Transport international',d:2,
e:"Le poids d'or comme référence d'indemnisation dans la convention CMR a été remplacé par :",
r:[{t:"L'euro comme monnaie de référence"},{t:"Le DTS (Droit de Tirage Spécial du FMI)",ok:true},{t:"Le dollar américain"},{t:"Un panier de devises européennes"}],
x:"Initialement, la CMR utilisait le franc Poincaré (lié à l'or) comme référence. Depuis le protocole additionnel de 1978, l'indemnisation est exprimée en DTS (Droit de Tirage Spécial), unité de compte du FMI basée sur un panier de grandes devises mondiales. 1 DTS vaut actuellement environ 1,30 € (valeur fluctuante)."},

// ══════════════════════════════════════
// ADR — 120 questions supplémentaires
// ══════════════════════════════════════
{id:7200,prog:'ADR',theme:'ADR — Général',d:1,
e:"L'ADR (Accord Européen relatif au transport international des marchandises Dangereuses par Route) est révisé :",
r:[{t:"Tous les ans"},{t:"Tous les 2 ans (années impaires), avec entrée en vigueur le 1er janvier de l'année suivante",ok:true},{t:"Tous les 5 ans"},{t:"À la demande des États signataires"}],
x:"L'ADR est révisé tous les deux ans (en années impaires : 2023, 2025, etc.) par un groupe de travail de la Commission économique des Nations Unies pour l'Europe (CEE-ONU). La nouvelle édition entre en vigueur le 1er janvier de l'année paire suivante (2024, 2026), avec un délai de transition de 6 mois pour les entreprises."},

{id:7201,prog:'ADR',theme:'ADR — Général',d:2,
e:"Le chapitre 1.1.3 de l'ADR liste les exemptions. L'exemption 1.1.3.1 concerne :",
r:[{t:"Les transports médicaux d'urgence"},{t:"Les transports effectués pour les besoins propres de l'État (défense nationale, police)",ok:true},{t:"Les transports de quantités exceptées"},{t:"Les transports en petits conteneurs"}],
x:"L'art. 1.1.3.1 de l'ADR exempte les transports effectués par les autorités militaires ou sous leur responsabilité, les transports d'urgence pour sauvetage de vie, et les transports effectués par les autorités compétentes dans leurs activités réglementaires. Ces exemptions permettent à ces services d'intervenir sans les contraintes ADR normales."},

{id:7202,prog:'ADR',theme:'ADR — Général',d:3,
e:"La catégorie de transport d'une matière ADR détermine :",
r:[{t:"La vitesse maximale du véhicule"},{t:"Le facteur multiplicateur pour le calcul des points d'exemptions partielles (1.1.3.6)",ok:true},{t:"Le type de véhicule requis"},{t:"La durée de validité du certificat conducteur"}],
x:"La catégorie de transport (0, 1, 2 ou 3) détermine le facteur multiplicateur pour les calculs des points d'exemption partielle. Catégorie 0 = facteur 0 (toujours exempté quelle que soit la quantité), catégorie 1 = facteur 50 (très dangereux), catégorie 2 = facteur 3, catégorie 3 = facteur 1 (moins dangereux). Si le total des points ≤ 1000, exemption partielle applicable."},

{id:7203,prog:'ADR',theme:'ADR — Général',d:2,
e:"Les 'matières et objets explosibles affectés au groupe de compatibilité A' (Classe 1) sont :",
r:[{t:"Les poudres de mine"},{t:"Les matières explosives primaires (les plus sensibles, comme l'azoture de plomb)",ok:true},{t:"Les feux d'artifice"},{t:"Les explosifs industriels sécurisés"}],
x:"Le groupe de compatibilité A (initiateur) correspond aux matières explosives primaires, les plus sensibles à un choc, friction, chaleur ou décharge électrique. Exemples : azoture de plomb (UN 0129), styphnate de plomb (UN 0130), trinitrorsorcinate de plomb. Ces matières ne peuvent être transportées qu'isolément dans des conditions strictes."},

{id:7204,prog:'ADR',theme:'ADR — Général',d:1,
e:"Le numéro ONU d'identification des matières dangereuses est un nombre de :",
r:[{t:"2 chiffres"},{t:"4 chiffres",ok:true},{t:"6 chiffres"},{t:"8 chiffres"}],
x:"Le numéro ONU (ou numéro UN) est un numéro d'identification à 4 chiffres attribué par le Comité d'experts de l'ONU à chaque matière ou groupe de matières dangereuses. Il est identique dans tous les pays et sur tous les modes de transport (route, rail, air, mer). Il va de 0004 à 3534+ et est augmenté régulièrement."},

{id:7205,prog:'ADR',theme:'ADR — Général',d:2,
e:"Un véhicule ADR doit être équipé au minimum d'un extincteur dans la cabine de :",
r:[{t:"1 kg poudre"},{t:"2 kg poudre ou agent équivalent",ok:true},{t:"5 kg CO2"},{t:"6 kg poudre"}],
x:"Pour tout véhicule transportant des MD en colis (pas citerne), un extincteur de 2 kg de poudre polyvalente AB (ou équivalent) doit se trouver dans la cabine. Un extincteur supplémentaire pour le compartiment marchandises est requis selon les classes transportées. Ces extincteurs doivent être vérifiés annuellement."},

{id:7206,prog:'ADR',theme:'ADR — Classification',d:2,
e:"La Classe 5.1 (matières comburantes) comprend des matières qui :",
r:[{t:"Brûlent d'elles-mêmes"},{t:"Libèrent de l'oxygène ou favorisent la combustion d'autres matières sans être elles-mêmes inflammables",ok:true},{t:"S'enflamment au contact de l'eau"},{t:"Explosent sous l'effet de la chaleur"}],
x:"Les matières comburantes (Classe 5.1) ne sont pas forcément inflammables elles-mêmes, mais elles entretiennent ou favorisent la combustion d'autres matières en libérant de l'oxygène. Exemples : nitrate d'ammonium (engrais), peroxyde d'hydrogène concentré, permanganate de potassium, hypochlorite de sodium concentré."},

{id:7207,prog:'ADR',theme:'ADR — Classification',d:1,
e:"L'essence sans plomb (carburant automobile) est classée :",
r:[{t:"Classe 3, ONU 1203, Groupe d'emballage I"},{t:"Classe 3, ONU 1203, Groupe d'emballage II",ok:true},{t:"Classe 3, ONU 1202, Groupe d'emballage III"},{t:"Classe 9, ONU 3166"}],
x:"L'essence (gasoline) est classée Classe 3 (liquide inflammable), ONU 1203, nom d'expédition 'ESSENCE', Groupe d'emballage II (point d'éclair entre -21°C et 23°C environ). Code de danger Kemler : 33 (liquide très inflammable). Le gazole (diesel) est ONU 1202, Classe 3, GE III (moins dangereux car PE > 55°C)."},

{id:7208,prog:'ADR',theme:'ADR — Classification',d:2,
e:"Les matières toxiques à l'inhalation (TIH) de Classe 6.1 avec LC50 très basse sont affectées au :",
r:[{t:"Groupe d'emballage III"},{t:"Groupe d'emballage I ou zone de danger A, B ou C",ok:true},{t:"Groupe d'emballage II uniquement"},{t:"Elles n'ont pas de groupe d'emballage"}],
x:"Les matières très toxiques à l'inhalation (TIH) de Classe 6.1 utilisent un système de zones de danger (A, B, C) basé sur la LC50 (concentration létale médiane) et sur l'état de la matière (gaz, liquide). Les zones A et B correspondent aux matières les plus toxiques et nécessitent des procédures de protection d'urgence renforcées."},

{id:7209,prog:'ADR',theme:'ADR — Classification',d:3,
e:"Un solide qui libère un gaz toxique au contact de l'eau (ex : cyanure de potassium + acide) est classé :",
r:[{t:"Uniquement Classe 6.1"},{t:"Classe 4.3 si la réaction au contact de l'eau est le danger principal + éventuellement Classe 6.1 en risque subsidiaire",ok:true},{t:"Classe 8"},{t:"Classe 9"}],
x:"Un solide qui dégage un gaz inflammable ou toxique au contact de l'eau relève de la Classe 4.3 si ce danger est prédominant. Si le solide est lui-même toxique, un risque subsidiaire de Classe 6.1 peut s'ajouter. Le risque dominant détermine la classe principale. La classification ADR applique une hiérarchie des risques."},

{id:7210,prog:'ADR',theme:'ADR — Documents',d:1,
e:"La liste des matières transportées doit être à la disposition du conducteur :",
r:[{t:"Uniquement au dépôt"},{t:"Dans le véhicule pendant tout le transport (avec le document de transport)",ok:true},{t:"Envoyée par email avant le départ"},{t:"Affichée sur le côté du véhicule"}],
x:"Le document de transport (déclaration de l'expéditeur) mentionnant toutes les marchandises dangereuses transportées doit se trouver à bord du véhicule pendant tout le transport et être présenté lors des contrôles. Il peut être sous format papier ou électronique (si les autorités compétentes l'acceptent)."},

{id:7211,prog:'ADR',theme:'ADR — Documents',d:2,
e:"Le code tunnel indiqué dans la colonne 15 du tableau A pour une matière ADR correspond à :",
r:[{t:"La catégorie du véhicule requis"},{t:"La restriction d'accès aux tunnels selon leur classification (B à E)",ok:true},{t:"Le type d'emballage autorisé"},{t:"La vitesse maximale en tunnel"}],
x:"Les tunnels sont classés de A (pas de restriction) à E (interdits à toutes les matières dangereuses sauf exceptions). Le code tunnel indiqué pour chaque matière dans la colonne 15 du tableau A indique dans quels tunnels le transport est interdit. B = interdit en tunnel B et plus contraignant. D = interdit en tunnel D et E."},

{id:7212,prog:'ADR',theme:'ADR — Documents',d:3,
e:"En transport multimodal (route + ferry), les documents ADR doivent :",
r:[{t:"Être remplacés par des documents maritimes"},{t:"Rester valables, et des documents IMDG complémentaires peuvent être requis pour la traversée maritime",ok:true},{t:"Être refaits à chaque changement de mode"},{t:"Être validés par la douane portuaire"}],
x:"Pour un transport multimodal incluant un ferry, les documents ADR routiers restent valables. Cependant, pour la partie maritime, les exigences du Code IMDG (transport maritime) s'appliquent également. Des documents complémentaires peuvent être requis par la compagnie maritime (déclaration de marchandises dangereuses maritime). Les obligations ADR reprennent dès le débarquement."},

{id:7213,prog:'ADR',theme:'ADR — Sécurité',d:2,
e:"Le plan de sûreté ADR (chapitre 1.10) est obligatoire pour :",
r:[{t:"Tous les transports ADR sans exception"},{t:"Les transporteurs de marchandises à haut risque sécuritaire (explosifs, certains toxiques, radioactifs…)",ok:true},{t:"Uniquement les transports internationaux"},{t:"Les transports de plus de 1 tonne de matières dangereuses"}],
x:"Le plan de sûreté (chapitre 1.10 ADR) est requis pour les entreprises transportant des 'marchandises dangereuses à haut risque' (liste définie par l'ADR) : explosifs, certains gaz très toxiques, matières radioactives de haute activité, et autres matières pouvant être utilisées à des fins terroristes. Il doit identifier les menaces et définir les mesures de sécurité."},

{id:7214,prog:'ADR',theme:'ADR — Sécurité',d:1,
e:"En cas d'incendie impliquant une citerne de GPL, la première mesure de sécurité est :",
r:[{t:"Essayer d'éteindre l'incendie immédiatement avec les extincteurs du bord"},{t:"S'éloigner le plus possible, évacuer la zone, alerter les pompiers, ne pas s'approcher",ok:true},{t:"Fermer les vannes de la citerne"},{t:"Arroser la citerne avec de l'eau"}],
x:"En cas d'incendie autour d'une citerne GPL (ou autre gaz inflammable), le risque de BLEVE (Boiling Liquid Expanding Vapor Explosion) est extrême. La priorité absolue : s'éloigner immédiatement (au minimum 300 m), alerter les secours, évacuer les personnes alentour. Les pompiers spécialisés seuls peuvent intervenir sur une citerne en feu (refroidissement à grande distance avec eau)."},

{id:7215,prog:'ADR',theme:'ADR — Sécurité',d:2,
e:"La formation ADR du conducteur couvre notamment les modules :",
r:[{t:"Permis C et conduite de PL"},{t:"Module de base (toutes marchandises en colis) + modules complémentaires selon les classes et modes de transport (citerne, classe 1, classe 7)",ok:true},{t:"Uniquement les procédures d'urgence"},{t:"Uniquement la signalisation et les plaques"}],
x:"La formation ADR conducteur comprend : un module de base obligatoire pour tout conducteur ADR (transport en colis, réglémentation générale, prévention des risques, procédures d'urgence) + des modules complémentaires : citerne (obligatoire pour les citernes), classe 1 (explosifs), classe 7 (radioactifs). Chaque module sanctionné par un examen."},

{id:7216,prog:'ADR',theme:'ADR — Sécurité',d:3,
e:"La procédure de décontamination d'un conducteur exposé à une substance toxique (Classe 6.1) implique en premier :",
r:[{t:"Appeler le médecin du travail"},{t:"Retirer les vêtements contaminés et rincer abondamment à l'eau (min 15 min) avant soins médicaux",ok:true},{t:"Administrer l'antidote spécifique"},{t:"Couvrir le conducteur avec une couverture"}],
x:"En cas d'exposition cutanée à une matière toxique : 1) Retirer immédiatement les vêtements et chaussures contaminés, 2) Rincer abondamment la peau à l'eau claire pendant au moins 15 minutes, 3) Appeler le 15/112 et préciser la substance (numéro ONU), 4) Montrer les consignes écrites aux secours, 5) Ne jamais provoquer de vomissements en cas d'ingestion sans avis médical."},

{id:7217,prog:'ADR',theme:'ADR — Emballages',d:2,
e:"Le marquage 'ONU' (ou 'UN') sur un emballage ADR indique :",
r:[{t:"Que l'emballage est fabriqué par l'ONU"},{t:"Que l'emballage a été testé et approuvé selon les procédures de l'ONU/ADR",ok:true},{t:"Que l'emballage peut contenir toutes les classes ADR"},{t:"Que l'emballage est d'origine américaine (United Nations)"}],
x:"Le marquage 'UN' (ou pictogramme UN) sur un emballage atteste qu'il a subi les tests de performance prescrits par les Recommandations de l'ONU sur le transport des marchandises dangereuses (tests de chute, empilage, étanchéité, pression interne selon les cas). C'est le marquage homologué exigé par l'ADR."},

{id:7218,prog:'ADR',theme:'ADR — Emballages',d:1,
e:"Un fût en acier à fond non amovible (code 1A1) peut être utilisé pour :",
r:[{t:"Les solides uniquement"},{t:"Les liquides et matières visqueuses (son fond non amovible le rend adapté aux liquides)",ok:true},{t:"Uniquement les gaz comprimés"},{t:"Uniquement la Classe 8"}],
x:"Le fût en acier à fond non amovible (1A1) est particulièrement adapté au transport de liquides : il résiste bien à la pression interne et limite les risques de fuite. Les fûts à fond amovible (1A2) sont adaptés aux solides car ils permettent un remplissage/vidage par le dessus. Le choix dépend aussi des critères du groupe d'emballage."},

{id:7219,prog:'ADR',theme:'ADR — Emballages',d:3,
e:"Les exigences de marquage sur un Colis ADR comprennent obligatoirement :",
r:[{t:"Uniquement le numéro ONU"},{t:"Le nom d'expédition, le numéro ONU, les étiquettes de danger, le marquage d'orientation si liquide, et les marquages d'homologation",ok:true},{t:"Le nom et adresse de l'expéditeur uniquement"},{t:"La date de fabrication de l'emballage"}],
x:"Le marquage d'un colis ADR doit comporter : le numéro ONU (précédé de 'UN' ou 'ONU'), le nom d'expédition officiel, les étiquettes de danger (losanges), les flèches d'orientation si le colis contient des liquides (ne pas retourner), le marquage d'homologation de l'emballage (code UN). Les informations de l'expéditeur/destinataire sont également requises."},

{id:7220,prog:'ADR',theme:'ADR — Signalisation',d:2,
e:"Les plaques oranges doivent être retirées ou masquées :",
r:[{t:"À chaque arrêt de plus de 30 minutes"},{t:"Lorsque le véhicule est vide et nettoyé, ou ne transporte plus les matières signalisées",ok:true},{t:"Uniquement en cas de contrôle policier"},{t:"Jamais — elles doivent rester en permanence"}],
x:"Les plaques oranges (et les étiquettes de danger) doivent être retirées ou masquées lorsque le véhicule est vide et a été nettoyé/dégazé, ou lorsqu'il ne transporte plus les matières correspondantes. Un véhicule vide avec des plaques oranges crée une fausse alarme et induit les secours en erreur. En cours de transport, elles doivent être en place en permanence."},

{id:7221,prog:'ADR',theme:'ADR — Signalisation',d:1,
e:"L'étiquette de danger pour un liquide inflammable (Classe 3) représente :",
r:[{t:"Une croix noire sur fond blanc"},{t:"Une flamme noire ou blanche sur fond rouge",ok:true},{t:"Un crâne et des tibias croisés sur fond blanc"},{t:"Un cercle de flammes sur fond jaune"}],
x:"L'étiquette de la Classe 3 (liquides inflammables) est un losange rouge avec une flamme (noire ou blanche). La moitié inférieure du losange est rouge, la moitié supérieure est rouge également. Le chiffre '3' figure dans le coin inférieur. Ce symbole est immédiatement reconnaissable par les secours."},

{id:7222,prog:'ADR',theme:'ADR — Signalisation',d:2,
e:"La plaque-étiquette Classe 1.4S (explosifs de faible danger) est de couleur :",
r:[{t:"Orange vif"},{t:"Orange avec le chiffre 1 et la lettre S",ok:true},{t:"Rouge"},{t:"Verte"}],
x:"Les étiquettes/plaques-étiquettes de la Classe 1 sont orange pour toutes les divisions, avec le numéro de division (1.1, 1.2, 1.3, 1.4, 1.5, 1.6) et la lettre du groupe de compatibilité. La division 1.4S concerne les objets explosibles de faible danger (munitions de chasse ordinaires, feux d'artifice grands publics…). La couleur orange est spécifique à la Classe 1."},

{id:7223,prog:'ADR',theme:'ADR — Général',d:2,
e:"Le CSTMD (Conseiller à la Sécurité) est désigné pour les entreprises qui :",
r:[{t:"Transportent des MD en grandes quantités uniquement"},{t:"Effectuent des transports, chargements ou déchargements de marchandises dangereuses (toute quantité)",ok:true},{t:"Emploient plus de 50 conducteurs"},{t:"Ont plus de 10 véhicules ADR certifiés"}],
x:"L'obligation de désigner un CSTMD s'applique à toutes les entreprises qui interviennent dans le transport de marchandises dangereuses : transporteurs, chargeurs/expéditeurs, déchargeurs/destinataires, et emballeurs. La quantité transportée n'est pas le critère : c'est la nature de l'activité qui détermine l'obligation."},

{id:7224,prog:'ADR',theme:'ADR — Général',d:3,
e:"Les matières de la Classe 9 (divers) comprennent notamment :",
r:[{t:"Uniquement les matières radioactives"},{t:"Les matières présentant un risque pendant le transport mais ne relevant pas d'autres classes (batteries Li, PCB, neige carbonique, airbags…)",ok:true},{t:"Les matières non classifiées en attente"},{t:"Toutes les matières non dangereuses"}],
x:"La Classe 9 est une classe 'fourre-tout' pour les matières dangereuses pendant le transport qui ne correspondent pas aux critères des classes 1 à 8. Elle inclut : batteries au lithium (ONU 3480, 3481, 3090, 3091), PCB (polychlorobiphényles), CO2 solide (neige carbonique, ONU 1845), airbags et prétensionneurs (ONU 3268), matières dangeureuses pour l'environnement aquatique."},

{id:7225,prog:'ADR',theme:'ADR — Classification',d:2,
e:"Le peroxyde d'hydrogène à 60 % (eau oxygénée concentrée) appartient à :",
r:[{t:"Classe 5.1 — comburant",ok:true},{t:"Classe 8 — corrosif"},{t:"Classe 5.2 — peroxydes organiques"},{t:"Classe 3 — liquide inflammable"}],
x:"Le peroxyde d'hydrogène (H2O2) à des concentrations > 60 % est classé Classe 5.1 (matière comburante), ONU 2015. À des concentrations entre 8 et 60 %, c'est aussi la Classe 5.1 avec des exigences différentes (ONU 2014). En dessous de 8 %, il n'est pas soumis à l'ADR. Le H2O2 est également corrosif (risque subsidiaire Classe 8)."},

{id:7226,prog:'ADR',theme:'ADR — Classification',d:1,
e:"L'ammoniac anhydre liquéfié est classé :",
r:[{t:"Classe 3 — inflammable"},{t:"Classe 2 + toxique (code 2TC)",ok:true},{t:"Classe 8 — corrosif uniquement"},{t:"Classe 6.1 — toxique uniquement"}],
x:"L'ammoniac anhydre (ONU 1005) est un gaz liquéfié de la Classe 2 avec le code de classification 2TC : liquéfié (2) + toxique (T) + corrosif (C). C'est un gaz très toxique par inhalation (LC50 très basse) et corrosif pour les membranes muqueuses. Son transport nécessite des citernes spécialement conçues et une formation ADR renforcée."},

{id:7227,prog:'ADR',theme:'ADR — Sécurité',d:2,
e:"La durée de validité du certificat ADR conducteur est de 5 ans. Pour le renouveler, le conducteur doit :",
r:[{t:"Repasser l'intégralité de la formation initiale"},{t:"Suivre une formation de recyclage dans l'année précédant l'expiration et réussir l'examen de renouvellement",ok:true},{t:"Simplement présenter une demande à la préfecture"},{t:"Faire valider son expérience par son employeur"}],
x:"Pour renouveler le certificat ADR avant son expiration, le conducteur doit suivre une formation de recyclage (durée réduite par rapport à la formation initiale) chez un organisme agréé et réussir l'examen de renouvellement. Si le certificat est expiré depuis plus de 12 mois, la formation initiale complète doit être refaite."},

{id:7228,prog:'ADR',theme:'ADR — Emballages',d:3,
e:"Un suremballage (overpack) utilisé pour regrouper des colis ADR doit :",
r:[{t:"Avoir sa propre homologation UN"},{t:"Porter tous les marquages et étiquettes des colis qu'il contient, avec la mention 'SUREMBALLAGE'",ok:true},{t:"Avoir uniquement l'étiquette de la classe principale"},{t:"Ne nécessite aucun marquage spécifique"}],
x:"Un suremballage (art. 5.1.2.1 ADR) est un emballage extérieur regroupant plusieurs colis. Il doit être marqué avec tous les numéros ONU, noms d'expédition et étiquettes de danger de tous les colis contenus, et porter la mention 'OVERPACK' ou 'SUREMBALLAGE'. S'il contient des marchandises dangereuses de différentes classes, toutes les étiquettes doivent apparaître."},

{id:7229,prog:'ADR',theme:'ADR — Documents',d:2,
e:"Le rapport d'accident ADR doit être rédigé par le CSTMD dans quel délai ?",
r:[{t:"Dans les 24 heures"},{t:"Dès que possible après l'incident et conservé 5 ans",ok:true},{t:"Dans les 48 heures ouvrables"},{t:"Il n'y a pas de délai légal imposé"}],
x:"Le rapport d'accident du CSTMD (art. 1.8.3.6 ADR) doit être rédigé dès que possible après l'incident et adressé à la direction de l'entreprise. Il est conservé 5 ans (comme le rapport annuel). Contrairement au rapport annuel qui est systématique, le rapport d'accident n'est rédigé qu'en cas d'incident ou accident significatif."},

{id:7230,prog:'ADR',theme:'ADR — Général',d:1,
e:"Parmi ces matières, laquelle est EXCLUE du champ d'application de l'ADR ?",
r:[{t:"L'essence"},{t:"Le charbon végétal (non auto-échauffant)"},{t:"Les explosifs artisanaux"},{t:"Le propane en bouteille"}],
x:"Le charbon végétal ordinaire (non auto-échauffant) n'est pas soumis à l'ADR car il ne satisfait pas aux critères de classification des matières dangereuses. En revanche, le charbon actif humide ou finement divisé peut être auto-échauffant (Classe 4.2). Il convient de vérifier au cas par cas les propriétés du charbon avant transport."},

{id:7231,prog:'ADR',theme:'ADR — Signalisation',d:2,
e:"L'étiquette de la Classe 6.2 (matières infectieuses) représente :",
r:[{t:"Un crâne avec tibias croisés"},{t:"Trois cercles (symbole biologique) sur fond blanc/noir avec '6' dans le coin",ok:true},{t:"Une croix de Genève rouge"},{t:"Un triangle jaune avec point d'exclamation"}],
x:"L'étiquette de la Classe 6.2 (matières infectieuses) porte le symbole biologique international (trois cercles entrelacés formant un triangle) sur fond blanc, avec le chiffre 6 dans le coin inférieur. La couleur de fond est blanche ou la moitié blanche, distinguant cette sous-classe des matières toxiques (Classe 6.1, tête de mort sur fond blanc)."},

{id:7232,prog:'ADR',theme:'ADR — Général',d:2,
e:"Le principe de précaution en ADR implique que, en cas de doute sur la classification d'une matière, on doit :",
r:[{t:"Attribuer la classe la moins restrictive"},{t:"Appliquer les exigences les plus strictes jusqu'à obtenir une classification certaine",ok:true},{t:"Ne pas transporter la matière"},{t:"Demander l'avis d'un voisin transporteur"}],
x:"En cas d'incertitude sur la classification d'une matière, le principe ADR est d'appliquer les règles correspondant aux exigences les plus strictes (groupe d'emballage I si incertain entre I et II, classe la plus dangereuse si plusieurs sont possibles) jusqu'à ce qu'une classification certaine soit obtenue auprès d'un laboratoire ou d'une autorité compétente."},

{id:7233,prog:'ADR',theme:'ADR — Classification',d:3,
e:"Le chlore gazeux liquéfié (ONU 1017) est classé :",
r:[{t:"Classe 3 — inflammable"},{t:"Classe 2, code 2TOC (gaz liquéfié toxique, comburant, corrosif)",ok:true},{t:"Classe 8 — corrosif uniquement"},{t:"Classe 6.1 — toxique uniquement"}],
x:"Le chlore (UN 1017) est un gaz liquéfié de la Classe 2 avec code 2TOC : liquéfié (2) + Toxique (T) + comburant (O) + Corrosif (C). C'est un gaz de guerre historique, extrêmement dangereux par inhalation. Son transport est très réglementé et réservé aux opérateurs spécialisés disposant d'équipements adaptés."},

{id:7234,prog:'ADR',theme:'ADR — Emballages',d:2,
e:"Les emballages pour matières liquides doivent subir le test d'étanchéité. Ce test consiste à :",
r:[{t:"Peser l'emballage avant et après remplissage"},{t:"Soumettre l'emballage rempli à une surpression interne pour vérifier l'absence de fuite",ok:true},{t:"Plonger l'emballage dans l'eau et observer les bulles"},{t:"Chauffer l'emballage à 50°C pendant 24h"}],
x:"Le test d'étanchéité (selon les recommandations ONU/ADR) consiste à appliquer une surpression interne à l'emballage rempli d'eau (ou liquide équivalent) pendant un temps déterminé. Pour les emballages du GE I : 30 kPa de pression interne. Pour les GE II et III : 20 kPa. Absence de fuite = conformité au test."},

{id:7235,prog:'ADR',theme:'ADR — Sécurité',d:1,
e:"En cas de fuite d'un gaz toxique depuis un colis ADR, la distance d'isolement recommandée est :",
r:[{t:"10 m"},{t:"Variable selon la matière, consultée dans les consignes écrites ou guides d'intervention (ERG)",ok:true},{t:"Toujours 500 m"},{t:"1 km systématiquement"}],
x:"La distance d'isolement en cas de fuite de gaz toxique dépend de la matière (toxicité, quantité, conditions météo). Les consignes écrites ADR indiquent les mesures à prendre. Le guide ERG (Emergency Response Guidebook) recommande des distances initiales d'isolement de 30 à 150 m selon les matières, extensibles en aval du vent jusqu'à plusieurs km pour les plus toxiques."},

{id:7236,prog:'ADR',theme:'ADR — Général',d:2,
e:"La liste des équipements supplémentaires obligatoires à bord d'un véhicule ADR Classe 3 comprend :",
r:[{t:"Un kit de premiers secours uniquement"},{t:"Équipements de protection individuelle + matériel de collecte des fuites + extincteurs adaptés",ok:true},{t:"Uniquement un détecteur de gaz"},{t:"Une radio de communication spéciale"}],
x:"L'ADR chapitre 8.1.5 liste les équipements obligatoires : cales d'arrêt, deux feux d'avertissement autoportants, un gilet haute visibilité par personne à bord, et dans les consignes de formation, les EPI adaptés (gants, lunettes, combinaison de protection, appareil respiratoire si applicable). Pour les citernes de carburant : des matériaux absorbants."},

{id:7237,prog:'ADR',theme:'ADR — Classification',d:2,
e:"Les bouteilles de dioxyde de carbone (CO2) pour extincteurs sont classées :",
r:[{t:"Classe 5.1 — comburant"},{t:"Classe 2, code 2A (gaz comprimé asphyxiant)",ok:true},{t:"Classe 8 — corrosif"},{t:"Classe 9"}],
x:"Le dioxyde de carbone (CO2) est un gaz non inflammable, non toxique en quantité normale, asphyxiant par déplacement de l'oxygène. Il est classé Classe 2 (gaz), code 2A (gaz comprimé asphyxiant). ONU 1013 (CO2 gazeux), ONU 2187 (CO2 liquide réfrigéré). Les extincteurs à CO2 chargés sont des objets de la Classe 2."},

{id:7238,prog:'ADR',theme:'ADR — Documents',d:3,
e:"La déclaration de l'expéditeur doit mentionner le groupe d'emballage :",
r:[{t:"Toujours obligatoirement"},{t:"Seulement pour les matières affectées à un groupe d'emballage (I, II ou III)",ok:true},{t:"Uniquement pour les GE I"},{t:"Jamais — c'est une information interne"}],
x:"Le groupe d'emballage doit être mentionné dans le document de transport (déclaration de l'expéditeur) SEULEMENT si la matière est affectée à un groupe d'emballage. Certaines matières (gaz de Classe 2, matières de Classe 1 et 7, la plupart des matières infectieuses de Classe 6.2) n'ont pas de groupe d'emballage et cette information n'est donc pas requise."},

{id:7239,prog:'ADR',theme:'ADR — Sécurité',d:2,
e:"Les équipements de protection individuelle (EPI) pour un transport ADR en citerne de matières corrosives comprennent :",
r:[{t:"Uniquement des gants en caoutchouc"},{t:"Lunettes de protection, gants résistants aux produits chimiques, vêtement de protection, rinçage des yeux disponible",ok:true},{t:"Un masque chirurgical suffit"},{t:"Aucun EPI spécifique n'est requis"}],
x:"Pour les matières corrosives (Classe 8), les EPI minimaux requis par les consignes écrites ADR comprennent : lunettes de protection étanches aux liquides (ou écran facial), gants résistants aux produits chimiques, vêtement de protection couvrant le corps, et souvent un récipient d'eau de rinçage (min 1 L) pour les yeux en cas de projection accidentelle."},

{id:7240,prog:'ADR',theme:'ADR — Signalisation',d:3,
e:"La plaque-étiquette représentant un trèfle radioactif sur fond jaune et rouge correspond à la :",
r:[{t:"Catégorie I-Blanc (faible radioactivité)"},{t:"Catégorie III-Jaune (radioactivité plus élevée, nécessitant une distance de sécurité)",ok:true},{t:"Classe 7 générale (toutes catégories)"},{t:"Classe 7E (uranium appauvri)"}],
x:"La Classe 7 utilise trois étiquettes différentes selon la catégorie de radioactivité : I-Blanc (fond blanc, trèfle noir) pour les indices de transport < 0,05 ; II-Jaune (moitié supérieure jaune, moitié inférieure blanche, trèfle noir) pour IT entre 0,05 et 1 ; III-Jaune (fond jaune avec deux bandes rouges, trèfle noir) pour IT entre 1 et 10."},
// — DROIT SOCIAL PL (50q) —
{id:6860,prog:'LOURD',theme:'Droit social',d:1,
e:"Le repos journalier normal d'un conducteur PL est de :",
r:[{t:"8 heures"},{t:"11 heures consécutives",ok:true},{t:"9 heures"},{t:"12 heures"}],
x:"Le repos journalier normal est de 11 heures consécutives (art. 8 du règlement 561/2006). Il peut être réduit à 9 heures (repos réduit) mais pas plus de 3 fois entre deux repos hebdomadaires. Le repos réduit n'a pas à être compensé."},

{id:6861,prog:'LOURD',theme:'Droit social',d:1,
e:"La durée maximale de conduite par semaine pour un conducteur PL est de :",
r:[{t:"48 heures"},{t:"56 heures",ok:true},{t:"60 heures"},{t:"40 heures"}],
x:"Le règlement 561/2006 fixe la durée maximale de conduite hebdomadaire à 56 heures, avec une limite de 90 heures sur 2 semaines consécutives. Ces deux limites doivent être respectées simultanément."},

{id:6862,prog:'LOURD',theme:'Droit social',d:2,
e:"La pause obligatoire après 4h30 de conduite est de :",
r:[{t:"15 minutes"},{t:"45 minutes (ou 15 min + 30 min)",ok:true},{t:"30 minutes"},{t:"60 minutes"}],
x:"Après 4h30 de conduite, une interruption de 45 minutes doit être observée. Elle peut être remplacée par une interruption d'au moins 15 minutes suivie d'une interruption d'au moins 30 minutes. Ces pauses ne constituent pas du temps de repos journalier."},

{id:6863,prog:'LOURD',theme:'Droit social',d:2,
e:"Le repos hebdomadaire normal est de :",
r:[{t:"24 heures"},{t:"45 heures consécutives",ok:true},{t:"35 heures"},{t:"48 heures"}],
x:"Le repos hebdomadaire normal est de 45 heures consécutives minimum. Il peut être réduit à 24 heures (repos réduit), à condition que la réduction soit compensée en bloc avant la fin de la 3ème semaine suivante."},

{id:6864,prog:'LOURD',theme:'Droit social',d:1,
e:"La carte conducteur de tachygraphe numérique appartient à :",
r:[{t:"L'employeur"},{t:"Le conducteur personnellement",ok:true},{t:"La DREAL"},{t:"L'entreprise de transport"}],
x:"La carte conducteur est personnelle et nominative. Elle appartient au conducteur et le suit dans sa carrière, même en changeant d'employeur. Elle contient ses données d'activité sur les 28 derniers jours. L'employeur ne peut pas la conserver ou manipuler."},

{id:6865,prog:'LOURD',theme:'Droit social',d:2,
e:"La FCOS (Formation Continue Obligatoire de Sécurité) pour conducteurs PL dure :",
r:[{t:"35 heures tous les 5 ans",ok:true},{t:"105 heures tous les 5 ans"},{t:"35 heures par an"},{t:"140 heures au total"}],
x:"La FCOS (CQC Renouvellement) est de 35 heures sur 5 ans pour les conducteurs PL titulaires du CQC initial. Elle comprend des modules obligatoires sur la sécurité routière, la réglementation sociale et l'éco-conduite. Elle est sanctionnée par un examen."},

{id:6866,prog:'LOURD',theme:'Droit social',d:1,
e:"Le code 95 sur le permis de conduire d'un conducteur PL atteste de :",
r:[{t:"Il a le permis CE"},{t:"Sa qualification CQC initiale ou de renouvellement en cours de validité",ok:true},{t:"Il est autorisé à conduire des citernes"},{t:"Il a passé une formation ADR"}],
x:"Le code 95 (suivi d'une date d'expiration) sur le permis atteste que le conducteur a satisfait aux exigences de qualification initiale (FIMO) et que sa formation continue (FCOS) est en cours de validité. Sans ce code, le conducteur ne peut pas exercer professionnellement."},

{id:6867,prog:'LOURD',theme:'Droit social',d:2,
e:"Le temps de disponibilité d'un conducteur PL est :",
r:[{t:"Une période de repos"},{t:"Le temps d'attente connu à l'avance (chargement, douane) non assimilé à du temps de travail effectif",ok:true},{t:"Les heures supplémentaires"},{t:"Le temps de formation"}],
x:"La disponibilité (art. 3 de la directive 2002/15/CE) est le temps pendant lequel le conducteur attend sans conduire, dont il connaît la durée à l'avance (attente de chargement, frontière, ferry…). Ce n'est pas du travail effectif mais il est rémunéré (à taux réduit selon CCN) et ne peut pas servir de repos."},

{id:6868,prog:'LOURD',theme:'Droit social',d:3,
e:"La durée maximale du temps de service (temps de travail) d'un conducteur PL est de :",
r:[{t:"8 heures"},{t:"10 heures (12 heures deux fois par semaine)",ok:true},{t:"12 heures systématiquement"},{t:"Il n'y a pas de limite journalière"}],
x:"La directive 2002/15/CE fixe la durée maximale journalière du temps de travail à 10 heures. Elle peut être portée à 12 heures deux fois par semaine maximum. Ces limites s'ajoutent aux règles sur les temps de conduite du règlement 561/2006."},

{id:6869,prog:'LOURD',theme:'Droit social',d:2,
e:"L'attestation d'activités doit couvrir les jours où le conducteur :",
r:[{t:"N'a conduit que partiellement"},{t:"N'a pas conduit (congés, maladie, repos, formation) sur les 28 derniers jours",ok:true},{t:"A travaillé à l'étranger"},{t:"A conduit un autre véhicule non équipé du tachygraphe"}],
x:"L'attestation d'activités est un document fourni par l'employeur justifiant les journées non travaillées (congés, repos, maladie, formation, jours fériés…) sur les 28 jours précédant le contrôle. Elle complète les données du tachygraphe pour les contrôleurs routiers."},

{id:6870,prog:'LOURD',theme:'Droit social',d:1,
e:"Le tachygraphe doit être étalonné (vérification métrologique) tous les :",
r:[{t:"2 ans"},{t:"6 ans ou après toute modification du véhicule",ok:true},{t:"1 an"},{t:"10 ans"}],
x:"Le tachygraphe doit être étalonné (contrôle par un atelier agréé) lors de la mise en service, puis tous les 6 ans, et après toute modification pouvant affecter sa précision (modification de la transmission, changement de taille de pneus, réparation du capteur). L'étalonnage est mentionné sur une plaque apposée dans le véhicule."},

{id:6871,prog:'LOURD',theme:'Droit social',d:2,
e:"Le multi-emploi d'un conducteur PL chez deux transporteurs différents est :",
r:[{t:"Totalement interdit"},{t:"Possible mais les temps de conduite et repos doivent être partagés entre les deux employeurs",ok:true},{t:"Libre sans restriction"},{t:"Possible uniquement à temps partiel"}],
x:"Un conducteur PL peut travailler pour plusieurs employeurs, mais les durées de conduite et de repos s'appliquent globalement (pas de double quota). Les employeurs doivent coordonner les plannings pour respecter les règles 561/2006. Chaque employeur doit disposer de toutes les informations nécessaires."},

{id:6872,prog:'LOURD',theme:'Droit social',d:3,
e:"La durée de conservation des enregistrements tachygraphiques par l'entreprise est de :",
r:[{t:"1 an"},{t:"1 an pour les données numériques et les disques analogiques",ok:true},{t:"5 ans"},{t:"3 mois"}],
x:"L'employeur doit conserver les données du tachygraphe (disques analogiques ou fichiers numériques téléchargés) pendant au moins 12 mois (1 an) et les présenter lors des contrôles. Des délais plus longs peuvent s'appliquer en cas de contentieux. Les données doivent être téléchargées régulièrement (au moins tous les 90 jours pour les véhicules, 28 jours pour les cartes conducteur)."},

{id:6873,prog:'LOURD',theme:'Droit social',d:2,
e:"Le contingent d'heures supplémentaires pour les conducteurs grands routiers PL est fixé à :",
r:[{t:"220 heures/an"},{t:"195 heures/an par la CCN transports routiers",ok:true},{t:"300 heures/an"},{t:"100 heures/an"}],
x:"La convention collective nationale des transports routiers fixe le contingent annuel d'heures supplémentaires à 195 heures (inférieur au contingent légal de 220h). Au-delà, chaque heure supplémentaire nécessite l'accord de l'inspecteur du travail et ouvre droit à un repos compensateur obligatoire de 100 %."},

{id:6874,prog:'LOURD',theme:'Droit social',d:1,
e:"La visite médicale d'aptitude obligatoire pour un conducteur PL professionnel a lieu :",
r:[{t:"Tous les 5 ans"},{t:"Tous les 5 ans jusqu'à 60 ans, puis tous les 2 ans puis tous les ans",ok:true},{t:"Uniquement à l'embauche"},{t:"Tous les 2 ans systématiquement"}],
x:"La périodicité des visites médicales d'aptitude à la conduite professionnelle dépend de l'âge : tous les 5 ans jusqu'à 60 ans, puis tous les 2 ans entre 60 et 65 ans, puis chaque année après 65 ans. Le médecin agréé préfectoral délivre l'attestation d'aptitude médicale professionnelle."},

{id:6875,prog:'LOURD',theme:'Droit social',d:2,
e:"L'entreprise de transport PL doit télécharger les données du tachygraphe de chaque véhicule au moins :",
r:[{t:"Tous les 30 jours"},{t:"Tous les 90 jours",ok:true},{t:"Tous les 6 mois"},{t:"Annuellement"}],
x:"Les données tachygraphiques de chaque véhicule doivent être téléchargées et sauvegardées au moins toutes les 90 jours. Les données de la carte conducteur doivent être téléchargées au moins tous les 28 jours. Ces données doivent être conservées 12 mois et mises à disposition lors des contrôles."},

{id:6876,prog:'LOURD',theme:'Droit social',d:3,
e:"Un conducteur PL commet une fraude de tachygraphe (aimant, câble modifié). Les sanctions pénales sont :",
r:[{t:"Une simple contravention"},{t:"Un délit pouvant aller jusqu'à 2 ans d'emprisonnement et 30 000 € d'amende",ok:true},{t:"Uniquement une suspension de permis"},{t:"Une amende forfaitaire de 500 €"}],
x:"La falsification du tachygraphe est un délit grave : jusqu'à 2 ans d'emprisonnement et 30 000 € d'amende pour le conducteur. L'employeur complice encourt des peines similaires. La carte conducteur peut être suspendue ou annulée. Les inspecteurs du travail et DREAL disposent d'outils de détection sophistiqués."},

{id:6877,prog:'LOURD',theme:'Droit social',d:2,
e:"La nuit pour un conducteur PL (application CCN transports routiers) commence à :",
r:[{t:"20h"},{t:"21h",ok:true},{t:"22h"},{t:"23h"}],
x:"Selon la CCN transports routiers, le travail de nuit pour les conducteurs est la période comprise entre 21h et 6h. Le travailleur de nuit bénéficie de contreparties (majorations salariales ou repos compensateur) définies par la convention. Ces horaires peuvent différer selon la convention collective applicable."},

{id:6878,prog:'LOURD',theme:'Droit social',d:1,
e:"Le principe de faveur en droit du travail des PL signifie que :",
r:[{t:"La loi prime toujours"},{t:"La règle la plus favorable au salarié s'applique en cas de conflit entre deux normes",ok:true},{t:"Les accords d'entreprise priment"},{t:"Le salarié choisit la règle applicable"}],
x:"En cas de conflit entre la loi, la convention collective et l'accord d'entreprise, la règle la plus favorable au salarié s'applique. Les ordonnances de 2017 ont introduit des dérogations : les accords d'entreprise peuvent désormais primer sur la CCN dans certains domaines spécifiques."},

{id:6879,prog:'LOURD',theme:'Droit social',d:2,
e:"Les indemnités de grand déplacement (couchée) versées aux conducteurs PL sont :",
r:[{t:"Soumises aux mêmes cotisations que les salaires"},{t:"Exonérées de cotisations sociales dans les limites fixées par l'URSSAF",ok:true},{t:"Entièrement imposables"},{t:"Calculées sur la base du SMIC horaire"}],
x:"Les indemnités de repas et couchées des conducteurs PL sont exonérées de cotisations sociales dans les limites prévues par l'URSSAF (barème annuellement actualisé). Au-delà de ces limites, la part excédentaire est soumise à cotisations. Ces indemnités sont également déductibles du résultat imposable de l'entreprise."},

{id:6880,prog:'LOURD',theme:'Droit social',d:3,
e:"Le repos hebdomadaire réduit (24h) doit être compensé :",
r:[{t:"Dès la semaine suivante"},{t:"En bloc, accolé à un repos d'au moins 9h, avant la fin de la 3ème semaine suivante",ok:true},{t:"N'a pas besoin d'être compensé"},{t:"Peut être compensé financièrement à la place"}],
x:"La compensation du repos hebdomadaire réduit doit être prise en bloc (en une seule fois), accolée à un repos d'au moins 9 heures, avant la fin de la 3ème semaine suivant la semaine de réduction. Elle ne peut pas être compensée financièrement. Le non-respect de cette règle constitue une infraction."},

{id:6881,prog:'LOURD',theme:'Droit social',d:2,
e:"Le détachement d'un conducteur PL en Europe (règlement 2020/1057) implique que :",
r:[{t:"Les règles sociales du pays d'origine s'appliquent toujours"},{t:"Les règles sociales du pays d'accueil s'appliquent pour le cabotage et certains transports bilatéraux",ok:true},{t:"Seul l'ADR du pays d'accueil s'applique"},{t:"Le conducteur bénéficie d'un régime allégé"}],
x:"Le règlement 2020/1057 (paquet mobilité) impose que lors du cabotage et de certains transports bilatéraux, les règles sociales du pays d'accueil s'appliquent (salaire minimum, temps de travail). Pour les transports en transit, les règles du pays d'origine s'appliquent. L'employeur doit se déclarer dans le pays d'accueil."},

{id:6882,prog:'LOURD',theme:'Droit social',d:1,
e:"La FIMO (Formation Initiale Minimale Obligatoire) pour un nouveau conducteur PL dure :",
r:[{t:"35 heures"},{t:"280 heures (pour un débutant complet)",ok:true},{t:"105 heures"},{t:"140 heures"}],
x:"La FIMO complète est de 280 heures (8 semaines) pour les conducteurs n'ayant aucune expérience préalable. Elle peut être réduite à 140 heures pour les conducteurs justifiant d'une expérience antérieure reconnue. Elle est sanctionnée par un examen et donne accès au CQC Initial (code 95)."},

{id:6883,prog:'LOURD',theme:'Droit social',d:2,
e:"En cas de dépassement de la durée de conduite journalière de plus d'une heure :",
r:[{t:"Simple contravention"},{t:"Délit pénal",ok:true},{t:"Avertissement sans suite"},{t:"Amende forfaitaire de 300 €"}],
x:"Le dépassement de plus d'une heure de la durée maximale de conduite journalière est qualifié de délit pénal (pas une simple contravention). Il peut entraîner des poursuites pénales pour le conducteur et pour l'employeur s'il est complice. En dessous d'une heure, c'est une contravention."},

{id:6884,prog:'LOURD',theme:'Droit social',d:3,
e:"Le conducteur PL en équipage (deux conducteurs) peut prendre son repos journalier :",
r:[{t:"Uniquement dans un hébergement"},{t:"Dans la cabine du véhicule (si couchette adaptée) pendant que le véhicule roule",ok:true},{t:"Uniquement aux aires de repos"},{t:"Uniquement s'il ne conduit pas depuis 4 heures"}],
x:"En équipage (deux conducteurs), le conducteur non actif peut prendre son repos journalier dans la cabine du véhicule en mouvement, à condition que celle-ci soit équipée d'une couchette adaptée. Le repos journalier en équipage est d'au moins 9 heures dans une période de 30 heures (vs 11 heures en solo)."},

{id:6885,prog:'LOURD',theme:'Droit social',d:2,
e:"L'obligation de formation FCOS peut être respectée en suivant :",
r:[{t:"Une seule formation de 35h d'affilée"},{t:"Des modules répartis sur 5 ans, sans qu'un module soit inférieur à 7 heures",ok:true},{t:"Un nombre illimité de petits modules"},{t:"Uniquement en formation présentielle"}],
x:"La FCOS (35h sur 5 ans) peut être répartie en modules dont chaque module doit durer au moins 7 heures consécutives. Les modules peuvent être suivis sur plusieurs années dans la limite de 5 ans. Ils peuvent être en présentiel, e-learning ou mixte selon les organismes agréés."},

{id:6886,prog:'LOURD',theme:'Droit social',d:1,
e:"La durée légale de travail hebdomadaire pour les conducteurs PL en France est de :",
r:[{t:"39 heures"},{t:"35 heures, avec des spécificités liées au secteur transport",ok:true},{t:"48 heures"},{t:"40 heures"}],
x:"La durée légale du travail est de 35 heures hebdomadaires pour tous les salariés, y compris les conducteurs PL. Les spécificités du transport routier (temps de service, disponibilité) sont encadrées par la directive 2002/15/CE et la CCN transports routiers. Les heures au-delà de 35h sont des heures supplémentaires."},

{id:6887,prog:'LOURD',theme:'Droit social',d:2,
e:"Le principe de 'responsabilité en cascade' dans la chaîne logistique (règlement 561/2006) implique :",
r:[{t:"Seul le conducteur est responsable"},{t:"L'employeur, l'expéditeur et le commissionnaire de transport peuvent être co-responsables des infractions aux temps de conduite si leur organisation les a provoquées",ok:true},{t:"Seul le chargeur est responsable"},{t:"Aucune responsabilité partagée n'existe"}],
x:"Le règlement 561/2006 prévoit une responsabilité partagée dans la chaîne : transporteur, expéditeur et commissionnaire sont responsables si leur organisation (délais imposés, planning serré) a conduit le conducteur à violer les règles. Cette responsabilité en cascade permet aux inspecteurs d'aller au-delà du seul conducteur."},

{id:6888,prog:'LOURD',theme:'Droit social',d:3,
e:"La médecine du travail pour les conducteurs PL est gérée par :",
r:[{t:"Les CPAM"},{t:"Les services de santé au travail interentreprises (SSTIMT) ou internes",ok:true},{t:"La DREAL"},{t:"L'Assurance Maladie uniquement"}],
x:"Les conducteurs PL sont suivis par les services de santé au travail interentreprises (SSTIMT) ou les services internes de santé au travail pour les grandes entreprises. Le médecin du travail réalise les visites d'information et de prévention, les examens d'aptitude périodiques, et conseille l'employeur sur la prévention des risques professionnels."},

{id:6889,prog:'LOURD',theme:'Droit social',d:2,
e:"L'astreinte d'un conducteur PL (disponibilité téléphonique hors horaires habituels) doit :",
r:[{t:"Être considérée comme du temps de travail effectif"},{t:"Faire l'objet d'une contrepartie (financière ou repos) sans être du temps de travail effectif sauf intervention",ok:true},{t:"N'être pas rémunérée"},{t:"Être limitée à 10 heures par semaine"}],
x:"L'astreinte est une période de disponibilité hors lieu de travail, ouvrant droit à contrepartie mais n'étant pas du temps de travail effectif (sauf pendant les interventions effectives). Pour les conducteurs PL, les astreintes sont encadrées par la CCN transports routiers et ne peuvent pas empiéter sur les repos obligatoires."},

{id:6890,prog:'LOURD',theme:'Droit social',d:1,
e:"Le bulletin de paie d'un conducteur PL doit mentionner :",
r:[{t:"Uniquement le salaire brut et net"},{t:"Le salaire brut, les cotisations détaillées, le salaire net, le net imposable et le taux de prélèvement à la source",ok:true},{t:"Uniquement le salaire net"},{t:"Le détail des tournées effectuées"}],
x:"Le bulletin de paie doit obligatoirement mentionner : identité employeur et salarié, qualification, période de paie, salaire brut, ensemble des cotisations patronales et salariales détaillées par ligne, net imposable, prélèvement à la source, salaire net à payer. Sa conservation est recommandée sans limite de durée."},

{id:6891,prog:'LOURD',theme:'Droit social',d:2,
e:"Le droit à congés payés s'acquiert à raison de :",
r:[{t:"2 jours par mois"},{t:"2,5 jours ouvrables par mois de travail effectif",ok:true},{t:"30 jours par an dès l'embauche"},{t:"1 semaine par trimestre"}],
x:"Les congés payés s'acquièrent à 2,5 jours ouvrables par mois de travail effectif, soit 30 jours ouvrables (5 semaines) par an pour une année complète. Certaines absences sont assimilées à du travail effectif (maladie professionnelle, congé maternité, accidents du travail, congés de formation…)."},

{id:6892,prog:'LOURD',theme:'Droit social',d:3,
e:"La clause de mobilité dans le contrat d'un conducteur PL lui impose de :",
r:[{t:"Circuler dans toute l'Europe"},{t:"Changer de lieu de prise de service dans la zone géographique définie au contrat",ok:true},{t:"Accepter tout changement de poste"},{t:"Changer d'employeur si requis"}],
x:"La clause de mobilité permet à l'employeur d'imposer un changement de lieu de travail dans la zone géographique définie au contrat. Elle doit être précisée (zone délimitée) et mise en œuvre de bonne foi (délai de prévenance raisonnable). Elle ne permet pas une mutation illimitée géographiquement ni un changement de catégorie de véhicule."},

{id:6893,prog:'LOURD',theme:'Droit social',d:2,
e:"La protection du conducteur PL en cas d'accident du travail inclut :",
r:[{t:"Uniquement les soins médicaux"},{t:"Soins médicaux pris en charge à 100 %, IJ majorées, rente AT si IPP et protection renforcée contre le licenciement",ok:true},{t:"Uniquement la prise en charge du véhicule"},{t:"Aucune protection spécifique"}],
x:"En cas d'accident du travail (dont les accidents de la route en mission), le conducteur bénéficie : de la prise en charge à 100 % des soins, d'indemnités journalières majorées (60 % puis 80 % vs 50-66 % en maladie ordinaire), et d'une rente si incapacité permanente partielle (IPP). Le licenciement pendant l'arrêt AT est très encadré."},

{id:6894,prog:'LOURD',theme:'Droit social',d:1,
e:"Le salaire minimum conventionnel d'un conducteur PL (grande messagerie, coefficient 150M) est :",
r:[{t:"Identique au SMIC"},{t:"Fixé par la CCN transports routiers et supérieur au SMIC",ok:true},{t:"Librement fixé par l'employeur"},{t:"Identique au salaire médian du secteur"}],
x:"La CCN transports routiers fixe des salaires minimaux conventionnels par coefficient (catégorie de véhicule, type de transport). Ces minima sont supérieurs au SMIC pour certaines catégories et font l'objet de négociations de branche régulières. L'employeur doit appliquer au minimum le salaire conventionnel correspondant à la qualification du conducteur."},

{id:6895,prog:'LOURD',theme:'Droit social',d:2,
e:"La prime de 13ème mois dans le secteur des transports routiers est :",
r:[{t:"Obligatoire légalement pour tous les conducteurs PL"},{t:"Prévue dans certaines conventions d'entreprise ou accords collectifs, mais pas obligatoire légalement",ok:true},{t:"Remplacée par les indemnités de grand déplacement"},{t:"Interdite dans les entreprises de moins de 50 salariés"}],
x:"La prime de 13ème mois n'est pas une obligation légale universelle mais peut résulter d'une convention collective, d'un accord d'entreprise, d'un usage d'entreprise ou d'un engagement contractuel. Si elle est prévue conventionnellement, l'employeur est tenu de la verser. Elle peut être conditionnée à l'ancienneté ou à la présence."},

{id:6896,prog:'LOURD',theme:'Droit social',d:3,
e:"Le forfait jours n'est pas applicable aux conducteurs PL car :",
r:[{t:"Ils gagnent trop peu"},{t:"Ils ne disposent pas d'une autonomie dans l'organisation de leur temps de travail au sens légal",ok:true},{t:"Leur convention collective le refuse"},{t:"Ils travaillent toujours en équipe"}],
x:"Le forfait annuel en jours est réservé aux cadres disposant d'une réelle autonomie dans l'organisation de leur emploi du temps. Les conducteurs PL, dont les horaires sont essentiellement déterminés par les tournées et les réglementations 561/2006, ne disposent pas de cette autonomie organisationnelle requise par l'art. L.3121-53 du Code du travail."},

{id:6897,prog:'LOURD',theme:'Droit social',d:2,
e:"En cas de grève dans une entreprise de transport PL, le préavis est obligatoire :",
r:[{t:"Dans les services publics uniquement"},{t:"Dans les entreprises de transport de voyageurs gérant un service public, mais pas obligatoire dans le transport de marchandises privé",ok:true},{t:"Dans toutes les entreprises de transport"},{t:"Uniquement pour les grèves de plus de 48h"}],
x:"Le préavis de grève (5 jours) est obligatoire dans les entreprises gérant un service public (SNCF, RATP, cars scolaires sous délégation de service public…). Dans le transport privé de marchandises, il n'y a pas d'obligation légale de préavis. Cependant, les conventions collectives peuvent en prévoir."},

{id:6898,prog:'LOURD',theme:'Droit social',d:1,
e:"Le licenciement d'un conducteur PL pour faute grave implique :",
r:[{t:"Un préavis de 2 mois"},{t:"Une rupture sans préavis ni indemnité de licenciement (mais maintien des CP)",ok:true},{t:"Le remboursement du véhicule"},{t:"Une suspension automatique du permis"}],
x:"La faute grave rend impossible le maintien du salarié dans l'entreprise. Elle entraîne une rupture immédiate sans préavis et sans indemnité de licenciement. Le salarié conserve toutefois ses droits aux congés payés acquis et peut prétendre aux allocations chômage (contrairement à la faute lourde)."},

{id:6899,prog:'LOURD',theme:'Droit social',d:2,
e:"Les frais de formation d'un conducteur PL (CQC) payés par l'employeur peuvent être récupérés via :",
r:[{t:"Aucun dispositif de financement"},{t:"L'OPCO Mobilités (opérateur de compétences du secteur transport)",ok:true},{t:"La CPAM"},{t:"La DREAL"}],
x:"L'OPCO Mobilités (anciennement OPCA Transports) est l'opérateur de compétences du secteur des transports. Il collecte les contributions formation professionnelle des entreprises du secteur et finance les formations (CQC initial et renouvellement, permis C/CE, formations spécifiques…). Les entreprises peuvent solliciter des prises en charge auprès de cet opérateur."},

{id:6900,prog:'LOURD',theme:'Droit social',d:3,
e:"Le droit à la déconnexion pour un conducteur PL signifie que :",
r:[{t:"Il peut éteindre son tachygraphe pendant les pauses"},{t:"Il ne peut pas être contraint de répondre aux appels téléphoniques professionnels pendant ses temps de repos",ok:true},{t:"Il peut désactiver son GPS pendant la nuit"},{t:"Il n'a pas accès aux réseaux sociaux en service"}],
x:"Le droit à la déconnexion (art. L.2242-17 du Code du travail, négociation obligatoire en entreprise > 50 salariés) protège le salarié des sollicitations professionnelles hors temps de travail. Pour les conducteurs PL, cela signifie notamment qu'ils ne peuvent pas être tenus de répondre aux appels du dispatcher ou de l'employeur pendant leurs repos obligatoires."},

// — GESTION FINANCIÈRE PL suite (40q) —
{id:6901,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"Le coût du carburant représente approximativement quelle proportion du coût de revient d'un PL longue distance ?",
r:[{t:"5 à 10 %"},{t:"25 à 35 %",ok:true},{t:"50 %"},{t:"Plus de 60 %"}],
x:"Le carburant représente généralement 25 à 35 % du coût de revient d'un PL (variable selon les prix, la distance, le type de transport). C'est le premier poste de charges variables. La surcharge carburant est souvent répercutée sur les clients via des clauses d'indexation CNR."},

{id:6902,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"La durée d'amortissement standard d'un tracteur PL est de :",
r:[{t:"3 ans"},{t:"5 ans",ok:true},{t:"8 ans"},{t:"10 ans"}],
x:"La durée d'amortissement fiscalement admise pour un tracteur PL est généralement de 5 ans en amortissement linéaire (20 %/an). Certaines entreprises amortissent sur 4 ans pour des véhicules très intensément utilisés. La semi-remorque est généralement amortie sur 7 à 10 ans."},

{id:6903,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"Le taux de km à vide d'un transporteur PL mesure :",
r:[{t:"La vitesse moyenne des trajets"},{t:"Le pourcentage de km parcourus sans chargement",ok:true},{t:"L'usure des pneus"},{t:"La rentabilité par client"}],
x:"Le taux de km à vide = km à vide / km totaux × 100. Un taux élevé (> 20-25 %) signale un problème d'optimisation des retours. Réduire ce taux (bourses de fret, retours chargés) améliore directement la rentabilité en étalant les charges fixes sur plus de km chargés."},

{id:6904,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"Le FTL (Full Truck Load) désigne :",
r:[{t:"Un camion à pleine charge en poids"},{t:"Un transport où le camion est entièrement affrété pour un seul client",ok:true},{t:"Un transport express"},{t:"Un camion avec hayon élévateur"}],
x:"FTL (Full Truck Load) est un transport où la totalité du véhicule est réservée pour un seul expéditeur/destinataire. À l'opposé, le LTL (Less than Truck Load) ou messagerie regroupe plusieurs expéditeurs. Le FTL est généralement moins coûteux par kg pour les grosses quantités et permet un délai de livraison plus court."},

{id:6905,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"L'indice CNR (Comité National Routier) sert à :",
r:[{t:"Fixer les tarifs de transport réglementés"},{t:"Publier des références de coûts pour permettre les révisions tarifaires contractuelles",ok:true},{t:"Contrôler les entreprises de transport"},{t:"Former les conducteurs PL"}],
x:"Le CNR (organisme public sous tutelle des Ministères des Transports et des Finances) publie mensuellement des indices de coûts de transport routier : carburant, pneumatiques, péages, salaires conducteurs, entretien, amortissement. Ces indices servent de base aux clauses de révision de prix dans les contrats de transport."},

{id:6906,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"La provision pour renouvellement du parc de véhicules est déductible fiscalement :",
r:[{t:"Jamais"},{t:"Sous conditions : nettement précisée, résultant d'un événement survenu durant l'exercice, probable",ok:true},{t:"Toujours et intégralement"},{t:"Uniquement pour les véhicules > 10 ans"}],
x:"Une provision pour renouvellement peut être constituée si elle satisfait aux critères de déductibilité fiscale : être nettement précisée quant à son objet et son montant, résulter d'un événement survenu pendant l'exercice, et être probable (pas certaine). En pratique, l'administration fiscale est restrictive sur ces provisions pour les PME."},

{id:6907,prog:'LOURD',theme:'Gestion financière PL',d:3,
e:"Pour un transport A→B de 500 km avec retour à vide (500 km), CRK = 1,05 €/km. Le client propose 900 €. L'entreprise accepte-t-elle ?",
r:[{t:"Oui, c'est rentable"},{t:"Non, le coût A/R est 1 050 € — c'est une perte de 150 €",ok:true},{t:"Oui si le retour est rapide"},{t:"Oui si le carburant baisse"}],
x:"Coût total A/R = 1,05 × 1 000 km = 1 050 €. Le client propose 900 € < 1 050 €. C'est une perte de 150 €. L'entreprise doit refuser ou négocier un prix minimum = 1 050 / (1 - marge souhaitée). Même à court terme, accepter en dessous du coût de revient n'est pas viable."},

{id:6908,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"La LLD (Location Longue Durée) d'un PL se distingue du crédit-bail car :",
r:[{t:"Le locataire est propriétaire en fin de contrat"},{t:"La LLD n'inclut pas d'option d'achat finale — le véhicule est restitué",ok:true},{t:"La LLD est moins chère"},{t:"La LLD ne peut pas inclure l'entretien"}],
x:"En LLD, le locataire utilise le véhicule pendant une durée déterminée (3-5 ans) avec un loyer mensuel fixe (pouvant inclure entretien, pneus, assurance). À l'échéance, le véhicule est restitué. Contrairement au crédit-bail (leasing), il n'y a pas d'option d'achat. La LLD préserve les lignes de crédit et maîtrise les budgets."},

{id:6909,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"Le coefficient d'exploitation d'une PME de transport PL est de 91 %. Son CA est de 1 200 000 €. Son résultat d'exploitation est de :",
r:[{t:"91 000 €"},{t:"108 000 €",ok:true},{t:"1 092 000 €"},{t:"9 100 €"}],
x:"Résultat d'exploitation = CA × (1 - Coeff. exploitation) = 1 200 000 × (1 - 0,91) = 1 200 000 × 0,09 = 108 000 €. Les charges totales = 1 200 000 × 91 % = 1 092 000 €. Ce résultat est avant IS et résultats financiers/exceptionnels."},

{id:6910,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"Le DRI (Délai de Récupération d'un Investissement) d'un tracteur à 110 000 € générant 35 000 €/an de flux nets est de :",
r:[{t:"1 an"},{t:"Environ 3 ans et 2 mois",ok:true},{t:"5 ans"},{t:"10 ans"}],
x:"DRI = Investissement / Flux annuels = 110 000 / 35 000 = 3,14 ans ≈ 3 ans et 1-2 mois. C'est un critère simple : après environ 3 ans, l'investissement est remboursé par les flux générés. Il ne tient pas compte de la valeur temps de l'argent (contrairement à la VAN) mais reste un indicateur intuitif et rapide."},

{id:6911,prog:'LOURD',theme:'Gestion financière PL',d:3,
e:"La valeur ajoutée d'une PME de transport PL (CA 1M€, consommations intermédiaires 600 000 €) est de :",
r:[{t:"1 000 000 €"},{t:"400 000 €",ok:true},{t:"600 000 €"},{t:"200 000 €"}],
x:"VA = Production de l'exercice - Consommations intermédiaires = 1 000 000 - 600 000 = 400 000 €. Les consommations intermédiaires incluent : carburant, pneus, entretien, péages, sous-traitance, loyers, assurances, services extérieurs. La VA se répartit ensuite entre salariés, État, créanciers et actionnaires."},

{id:6912,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"L'assurance marchandises transportées (AMT) est souscrite par :",
r:[{t:"Le transporteur pour son compte"},{t:"L'expéditeur ou le destinataire pour couvrir la valeur réelle des marchandises",ok:true},{t:"Elle est incluse dans la RC du transporteur"},{t:"Elle est obligatoire pour le transporteur"}],
x:"L'AMT (ou assurance Ad Valorem) est souscrite par l'expéditeur ou le destinataire. Elle couvre la valeur réelle des marchandises contre perte, vol ou dommage. Elle est distincte et complémentaire de la responsabilité civile du transporteur (plafonnée par la loi). Sans AMT, en cas de sinistre, l'indemnisation est limitée au plafond légal/conventionnel."},

{id:6913,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"Le ROA (Return On Assets) = Résultat net / Total actif mesure :",
r:[{t:"La rentabilité des capitaux propres"},{t:"L'efficacité de l'entreprise à générer du bénéfice à partir de ses actifs totaux",ok:true},{t:"Le niveau d'endettement"},{t:"La solvabilité à court terme"}],
x:"ROA = Résultat net / Total actif × 100. Un ROA de 8 % signifie que l'entreprise génère 8 € de bénéfice pour 100 € d'actifs investis. C'est un indicateur d'efficience opérationnelle. Plus le ROA dépasse le coût de la dette, plus l'effet de levier financier est favorable."},

{id:6914,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"Le ratio de couverture des frais fixes = MCV / Charges fixes. Si ce ratio est de 1,3, l'entreprise :",
r:[{t:"Est déficitaire"},{t:"Couvre ses charges fixes et génère 30 % de marge bénéficiaire sur le CA",ok:true},{t:"Est à l'équilibre exact"},{t:"Dégage exactement 30 % de résultat net"}],
x:"Si MCV / CF = 1,3, la MCV couvre les CF à 130 %, ce qui signifie un bénéfice = MCV - CF = CF × 0,3. Exemple : CF = 100 000 € → MCV = 130 000 € → Résultat = 30 000 €. Ce ratio > 1 signifie que l'entreprise est bénéficiaire."},

{id:6915,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"Le plan de financement à 3 ans d'un investissement PL doit équilibrer :",
r:[{t:"Uniquement les recettes et dépenses"},{t:"Les emplois (investissements, remboursements) et ressources (CAF, emprunts, apports) chaque année",ok:true},{t:"Uniquement la CAF et les emprunts"},{t:"La trésorerie du dernier exercice uniquement"}],
x:"Le plan de financement pluriannuel présente sur 3-5 ans : les emplois (investissements, remboursements de dettes, BFR supplémentaire) et les ressources (CAF prévisionnelle, nouveaux emprunts, cessions, apports). Il doit être équilibré chaque année pour confirmer la faisabilité financière du projet d'investissement."},

{id:6916,prog:'LOURD',theme:'Gestion financière PL',d:3,
e:"La méthode ABC (Activity Based Costing) appliquée au transport PL permet de :",
r:[{t:"Calculer uniquement le coût du carburant"},{t:"Affecter les coûts indirects aux activités réelles (tournées, clients, types de transport) pour une tarification précise",ok:true},{t:"Automatiser la facturation"},{t:"Calculer les charges sociales"}],
x:"L'ABC costing répartit les charges indirectes (structure, administration, management) selon des inducteurs d'activité réels plutôt que par des clés de répartition arbitraires. Pour le transport PL, elle permet d'identifier les tournées ou clients réellement rentables vs ceux qui consomment trop de ressources administratives ou opérationnelles."},

{id:6917,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"La surcharge carburant dans un contrat de transport PL se déclenche :",
r:[{t:"À chaque variation du prix du gazole"},{t:"Quand le prix du carburant CNR dépasse le seuil défini dans la clause d'indexation",ok:true},{t:"Uniquement en cas de hausse de plus de 50 %"},{t:"Elle n'existe pas dans les contrats transport"}],
x:"La clause de révision carburant se déclenche quand le prix du gazole CNR dépasse un seuil de référence défini dans le contrat. La variation est répercutée selon une formule convenue (ex : si le carburant représente 30 % du CRK et que le CNR gazole monte de 10 %, la révision est de 3 % du prix de base)."},

{id:6918,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"L'EBE (Excédent Brut d'Exploitation) d'un transporteur PL se calcule comme :",
r:[{t:"Résultat net + amortissements"},{t:"VA - Charges de personnel - Impôts et taxes d'exploitation + Subventions d'exploitation",ok:true},{t:"CA - Charges variables"},{t:"Résultat d'exploitation + Résultat financier"}],
x:"EBE = Valeur Ajoutée - Charges de personnel (salaires bruts + charges patronales) - Impôts et taxes d'exploitation (taxe foncière, CFE…) + Subventions d'exploitation. L'EBE (= EBITDA) mesure la performance opérationnelle pure, avant l'impact des choix de financement (intérêts) et d'investissement (amortissements)."},

{id:6919,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"La cession d'un PL avec une plus-value génère :",
r:[{t:"Un avantage fiscal immédiat automatique"},{t:"Un produit exceptionnel imposable, avec possibilité d'étalement ou d'exonération sous conditions",ok:true},{t:"Une charge déductible"},{t:"Aucun impact fiscal"}],
x:"La plus-value réalisée sur la cession d'un PL (prix vente > VNC) est un produit exceptionnel imposable (IS ou IR). Des régimes de faveur existent : exonération pour les PME sous condition de CA et de durée de détention (art. 151 septies du CGI pour l'IR). Le remploi des plus-values dans un nouvel investissement peut permettre un étalement fiscal."},

{id:6920,prog:'LOURD',theme:'Gestion financière PL',d:3,
e:"Le diagnostic financier d'une reprise de PME transport PL doit nécessairement analyser :",
r:[{t:"Uniquement le dernier bilan"},{t:"Les 3 derniers bilans + CR + CAF + engagements hors bilan + état du parc + contrats clients",ok:true},{t:"Uniquement les statistiques sectorielles"},{t:"Uniquement les ressources humaines"}],
x:"Un diagnostic complet pour une reprise analyse : 3 derniers exercices (bilans, CR, annexes), CAF et son évolution, flux de trésorerie, engagements hors bilan (crédit-bail, cautions, litiges), état du parc (vieillissement, VNC vs valeur marché), contrats clients (pérennité, concentration du CA), situation sociale (effectifs, contentieux prud'homaux, sinistralité AT)."},

{id:6921,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"Un transporteur PL réalise 800 000 € de CA avec un coefficient d'exploitation de 88 %. Ses amortissements sont de 60 000 €. IS = 25 %. Sa CAF est de :",
r:[{t:"96 000 €"},{t:"132 000 €",ok:true},{t:"60 000 €"},{t:"72 000 €"}],
x:"Résultat exploitation = 800 000 × (1-0,88) = 96 000 €. IS = 96 000 × 25 % = 24 000 €. Résultat net = 72 000 €. CAF = Résultat net + Amortissements = 72 000 + 60 000 = 132 000 €. La CAF permet de rembourser les emprunts et financer de nouveaux investissements."},

{id:6922,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"L'autonomie financière d'une entreprise de transport PL est jugée satisfaisante quand :",
r:[{t:"Elle dépasse 50 %"},{t:"Les capitaux propres représentent au moins 30-40 % du total du bilan",ok:true},{t:"Elle dépasse 80 %"},{t:"Elle est inférieure à 10 %"}],
x:"Ratio autonomie financière = Capitaux propres / Total passif × 100. Un ratio ≥ 30-40 % est généralement considéré satisfaisant dans le transport routier. Il mesure l'indépendance financière vis-à-vis des créanciers. En dessous de 20 %, les banques peuvent considérer l'entreprise sous-capitalisée et refuser de nouveaux financements."},

{id:6923,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"La valeur de remplacement d'un PL est importante pour :",
r:[{t:"Le calcul de l'IS"},{t:"Évaluer si la CAF est suffisante pour financer le renouvellement du parc",ok:true},{t:"L'évaluation des stocks"},{t:"Le calcul des cotisations sociales"}],
x:"La VNC (valeur comptable) peut être très inférieure à la valeur de remplacement (coût d'un véhicule équivalent neuf). L'écart indique que les amortissements passés ne suffiront pas à financer le renouvellement. L'entreprise doit compléter par emprunt ou mobiliser une part de la CAF au-delà des remboursements en cours."},

// — TRANSPORT INTERNATIONAL PL (30q) —
{id:6924,prog:'LOURD',theme:'Transport international',d:1,
e:"La convention CMR s'applique aux transports routiers de marchandises :",
r:[{t:"Uniquement entre pays de l'UE"},{t:"Entre deux pays différents dont au moins l'un est signataire, pour les transports à titre onéreux",ok:true},{t:"Uniquement pour les PL de plus de 20t"},{t:"Uniquement pour les marchandises de valeur"}],
x:"La CMR (Convention relative au Contrat de transport international de Marchandises par Route) s'applique automatiquement à tout contrat de transport routier entre deux pays dont au moins l'un est signataire, quelle que soit la nationalité des parties, dès lors que le transport est effectué à titre onéreux. 56 pays sont signataires."},

{id:6925,prog:'LOURD',theme:'Transport international',d:2,
e:"L'Incoterm DAP (Delivered At Place) signifie que :",
r:[{t:"Le vendeur livre au port de départ"},{t:"Le vendeur livre jusqu'au lieu convenu, véhicule prêt à décharger, sans droits de douane import",ok:true},{t:"L'acheteur assume tous les risques"},{t:"Les droits de douane sont toujours inclus"}],
x:"DAP : le vendeur assume tous les risques et frais jusqu'au lieu de destination convenu, mais l'acheteur prend en charge le déchargement et le dédouanement à l'importation. C'est l'un des Incoterms les plus utilisés pour les transports routiers européens. DAP ne comprend pas les droits de douane d'importation (contrairement à DDP)."},

{id:6926,prog:'LOURD',theme:'Transport international',d:2,
e:"Le formulaire A1 (anciennement E101) sert à prouver qu'un conducteur détaché :",
r:[{t:"A payé ses droits de douane"},{t:"Reste soumis à la sécurité sociale de son pays d'origine pendant le détachement",ok:true},{t:"A le droit de travailler dans un pays étranger"},{t:"A obtenu son permis de conduire international"}],
x:"Le formulaire A1 est délivré par l'organisme de sécurité sociale du pays d'origine. Il atteste que le travailleur détaché reste affilié au régime de sécurité sociale de son pays d'origine pendant la durée du détachement. Il évite la double cotisation sociale. En cas de contrôle, il doit être présenté aux autorités du pays d'accueil."},

{id:6927,prog:'LOURD',theme:'Transport international',d:2,
e:"Le cabotage routier dans l'UE est limité à :",
r:[{t:"Illimité en UE"},{t:"3 opérations de transport en 7 jours après un transport international entrant",ok:true},{t:"1 seule opération par voyage"},{t:"5 opérations par mois"}],
x:"Le règlement (CE) 1072/2009 limite le cabotage à 3 opérations de transport intérieur dans le pays d'accueil, dans les 7 jours suivant le déchargement du transport international entrant. Après ce délai, le véhicule doit quitter le pays avant de pouvoir effectuer un nouveau cabotage. Cette règle vise à éviter la concurrence déloyale."},

{id:6928,prog:'LOURD',theme:'Transport international',d:3,
e:"La limite de responsabilité du transporteur CMR en cas de perte totale d'un chargement de 15 000 kg est :",
r:[{t:"15 000 €"},{t:"8,33 DTS × 15 000 = 124 950 DTS ≈ 160 000 €",ok:true},{t:"10 000 € forfaitaire"},{t:"La valeur déclarée uniquement"}],
x:"CMR art. 23 : plafond = 8,33 DTS par kg de poids brut perdu. Pour 15 000 kg : 8,33 × 15 000 = 124 950 DTS. Avec 1 DTS ≈ 1,27 € (taux indicatif) : environ 158 685 €. Ce plafond peut être supérieur à la valeur réelle des marchandises pour les produits lourds et peu coûteux, ou très inférieur pour les produits légers et de haute valeur."},

{id:6929,prog:'LOURD',theme:'Transport international',d:2,
e:"Le carnet TIR (Transports Internationaux Routiers) permet de :",
r:[{t:"Conduire sans visa dans les pays signataires"},{t:"Transporter des marchandises sous scellés, en suspension des droits de douane aux frontières traversées",ok:true},{t:"Exporter des marchandises dangereuses"},{t:"Bénéficier d'une réduction des péages"}],
x:"Le carnet TIR (convention TIR de 1975, 70+ pays signataires) est un régime de transit douanier international permettant le transport de marchandises sous scellés TIR, en suspension des droits et taxes aux frontières traversées. La garantie est assurée par l'IRU (Union Internationale des Transports Routiers) via les associations nationales."},

{id:6930,prog:'LOURD',theme:'Transport international',d:1,
e:"L'accord AETR s'applique aux transports routiers :",
r:[{t:"Dans tous les pays du monde"},{t:"Dans les pays européens non membres de l'UE (Turquie, Ukraine, etc.) et pour les transports vers ces pays",ok:true},{t:"Uniquement dans l'UE"},{t:"Uniquement pour les véhicules > 20t"}],
x:"L'accord AETR (Accord Européen relatif au Travail des équipages de véhicules effectuant des Transports Routiers internationaux) s'applique aux transports effectués sur le territoire des pays signataires non membres de l'UE. Dans l'UE, le règlement 561/2006 s'applique. L'AETR est harmonisé avec le 561/2006."},

{id:6931,prog:'LOURD',theme:'Transport international',d:2,
e:"L'Incoterm EXW (Ex Works) est le moins favorable à l'acheteur car :",
r:[{t:"L'acheteur paie le transport uniquement"},{t:"L'acheteur prend en charge tous les frais et risques depuis l'établissement du vendeur, y compris l'export",ok:true},{t:"Le vendeur livre jusqu'à la frontière"},{t:"L'acheteur paie les droits de douane d'import uniquement"}],
x:"EXW est l'Incoterm le moins favorable à l'acheteur : le vendeur met les marchandises à disposition dans ses locaux. L'acheteur assume tous les frais et risques depuis ce point : chargement, transport, dédouanement à l'export (difficile pour un acheteur étranger) et à l'import, livraison finale. FCA est souvent préféré à EXW pour les transports routiers."},

{id:6932,prog:'LOURD',theme:'Transport international',d:3,
e:"Le délai de prescription d'une action CMR en cas de dol (fraude) ou faute équivalente est de :",
r:[{t:"1 an"},{t:"3 ans",ok:true},{t:"5 ans"},{t:"10 ans"}],
x:"Selon l'art. 32 de la CMR, le délai normal de prescription est de 1 an (à partir de la livraison ou de la date prévue). En cas de dol ou faute équivalente au dol (faute lourde, négligence grossière), ce délai est porté à 3 ans. La prescription peut être suspendue ou interrompue par une réclamation écrite adressée au transporteur."},

{id:6933,prog:'LOURD',theme:'Transport international',d:2,
e:"La déclaration d'exportation (EX1 ou DAE électronique) est obligatoire pour :",
r:[{t:"Tout transport routier"},{t:"Les exportations de marchandises hors de l'UE",ok:true},{t:"Uniquement les marchandises > 1 000 €"},{t:"Uniquement les marchandises réglementées"}],
x:"La déclaration d'exportation (formulaire EX1 ou DAE - Document d'Accompagnement Export dans le système DELTA) est obligatoire pour toute exportation de marchandises hors du territoire douanier de l'UE. Elle est réalisée par l'exportateur ou son représentant en douane (transitaire agréé). Elle est dématérialisée depuis 2011 en France."},

{id:6934,prog:'LOURD',theme:'Transport international',d:1,
e:"Le T2 (transit communautaire interne) est utilisé pour :",
r:[{t:"Les marchandises non communautaires"},{t:"Les marchandises de statut communautaire qui passent par un pays tiers",ok:true},{t:"Tous les transports intra-UE"},{t:"Les transports de matières dangereuses uniquement"}],
x:"Le document T2 (transit externe de marchandises communautaires) est utilisé quand des marchandises communautaires (en libre pratique dans l'UE) doivent traverser un pays tiers (ex : Suisse, Serbie) pour rejoindre une autre partie de l'UE. Il garantit qu'aucune importation n'a eu lieu dans le pays de transit."},

{id:6935,prog:'LOURD',theme:'Transport international',d:2,
e:"Les 'réserves motivées' sur la lettre de voiture CMR doivent être émises par le destinataire dans les :",
r:[{t:"24 heures"},{t:"7 jours ouvrés suivant la livraison pour les avaries non apparentes",ok:true},{t:"3 jours ouvrables"},{t:"1 mois"}],
x:"Art. 30 CMR : pour les avaries apparentes, les réserves doivent être émises lors de la livraison. Pour les avaries non apparentes (dommages non visibles à la livraison), les réserves motivées doivent être adressées par écrit au transporteur dans les 7 jours suivant la livraison (dimanches et jours fériés exclus). Sans réserves dans ce délai, la livraison est réputée conforme."},

{id:6936,prog:'LOURD',theme:'Transport international',d:3,
e:"Le règlement 2020/1055 (paquet mobilité 1) impose notamment le retour du PL au pays d'établissement :",
r:[{t:"Tous les 3 mois"},{t:"Au moins toutes les 8 semaines",ok:true},{t:"Tous les 6 mois"},{t:"Il n'y a pas d'obligation de retour"}],
x:"Le règlement 2020/1055 (applicable depuis 2022) impose que les véhicules PL retournent dans l'État membre d'établissement au moins toutes les 8 semaines (afin d'éviter que les véhicules restent indéfiniment à l'étranger). Cette règle vise à lutter contre les 'boîtes aux lettres' et les bases de facto dans des pays à bas coût social."},

{id:6937,prog:'LOURD',theme:'Transport international',d:2,
e:"Le transport de marchandises entre deux pays tiers effectué par un transporteur d'un troisième pays (ex : transporteur français entre Espagne et Italie) s'appelle :",
r:[{t:"Cabotage"},{t:"Transport triangulaire ou transport pour compte de tiers entre États tiers",ok:true},{t:"Transit"},{t:"Covoiturage commercial"}],
x:"Le transport triangulaire (ou cross-trade) est le transport effectué par un transporteur d'un pays A entre un pays B et un pays C, sans passer par son pays d'établissement. Dans l'UE, ce type de transport est en principe libre pour les transporteurs titulaires d'une licence communautaire. Des restrictions s'appliquent hors UE."},

{id:6938,prog:'LOURD',theme:'Transport international',d:1,
e:"Le numéro EORI (Economic Operators Registration and Identification) est requis pour :",
r:[{t:"L'immatriculation de véhicules PL"},{t:"Tout opérateur économique effectuant des opérations douanières dans l'UE",ok:true},{t:"L'enregistrement des conducteurs détachés"},{t:"L'inscription au RENT"}],
x:"Le numéro EORI est un identifiant unique attribué par les douanes aux opérateurs économiques (importateurs, exportateurs, transitaires, transporteurs) effectuant des opérations douanières dans l'UE. Il est obligatoire pour déposer des déclarations en douane depuis 2009. En France, il est basé sur le SIRET de l'entreprise."},

{id:6939,prog:'LOURD',theme:'Transport international',d:2,
e:"L'Incoterm FCA (Free Carrier) est recommandé pour le transport routier car :",
r:[{t:"Il est le moins cher"},{t:"Le transfert des risques se fait chez le vendeur, ce qui permet à l'acheteur de contrôler le transport et les assurances",ok:true},{t:"Il inclut le dédouanement"},{t:"Il est obligatoire pour les transports dangereux"}],
x:"FCA est l'Incoterm recommandé pour les transports routiers (par opposition à EXW) car il permet à l'acheteur de désigner son propre transporteur tout en laissant au vendeur la responsabilité du dédouanement à l'export. Le risque se transfère dès la remise au transporteur désigné par l'acheteur. C'est plus pratique et juridiquement clair que EXW."},

{id:6940,prog:'LOURD',theme:'Transport international',d:3,
e:"Les exigences de sécurité pour un transport de marchandises à haut risque terroriste (ex : matières explosives) incluent :",
r:[{t:"Uniquement le certificat ADR du conducteur"},{t:"Plan de sûreté, formation spécifique, escorte possible, signalement des incidents à l'autorité compétente",ok:true},{t:"Un marquage spécial sur le véhicule uniquement"},{t:"Aucune exigence supplémentaire par rapport aux autres matières ADR"}],
x:"Pour les marchandises à haut risque sécuritaire (chapitre 1.10 ADR), des exigences renforcées s'appliquent : plan de sûreté de l'entreprise, formation sûreté pour le conducteur et le personnel, mesures de traçabilité, signalement des incidents suspects à l'autorité compétente. L'escorte peut être requise par les autorités pour certains transports."},

{id:6941,prog:'LOURD',theme:'Transport international',d:2,
e:"Le formulaire EUR.1 pour les exportations vers des pays tiers avec accords préférentiels :",
r:[{t:"Est remplacé par le DAE"},{t:"Atteste de l'origine préférentielle pour bénéficier de droits de douane réduits dans le pays importateur",ok:true},{t:"Remplace la déclaration d'exportation"},{t:"N'est utilisé qu'entre pays de l'UE"}],
x:"Le certificat EUR.1 (ou la déclaration sur facture pour les faibles valeurs) est établi par l'exportateur et visé par les douanes à l'export. Il atteste que la marchandise est d'origine préférentielle (UE ou pays bénéficiaire de l'accord) et permet au destinataire dans le pays tiers de bénéficier de droits de douane réduits ou nuls."},

{id:6942,prog:'LOURD',theme:'Transport international',d:1,
e:"Le registre européen ERRU (European Register of Road Transport Undertakings) permet :",
r:[{t:"D'immatriculer les véhicules PL dans toute l'Europe"},{t:"L'échange d'informations entre États membres sur les transporteurs et leurs éventuelles infractions",ok:true},{t:"De suivre les trajets des PL en temps réel"},{t:"D'harmoniser les tarifs de transport dans l'UE"}],
x:"L'ERRU est un système de registres électroniques nationaux interconnectés (créé par le règlement 1071/2009) permettant aux autorités compétentes des États membres de l'UE d'échanger des informations sur les entreprises de transport (infractions graves, pertes d'honorabilité, suspensions/retraits d'autorisations)."},

{id:6943,prog:'LOURD',theme:'Transport international',d:2,
e:"En cas de non-livraison (perte totale) constatée, la réclamation contre le transporteur CMR doit être faite dans un délai de :",
r:[{t:"30 jours"},{t:"21 jours à compter de la date de livraison prévue",ok:true},{t:"6 mois"},{t:"1 an directement"}],
x:"En cas de perte totale de la marchandise, le destinataire doit constater la non-livraison et adresser une réclamation écrite dans les meilleurs délais. Si aucune livraison n'est constatée après 30 jours (délai convenu) ou 60 jours (dépôt au lieu de livraison), la marchandise peut être considérée perdue. La prescription est d'1 an pour intenter une action."},

{id:6944,prog:'LOURD',theme:'Transport international',d:3,
e:"Le 'Proof of Delivery' (PoD) dans un transport international :",
r:[{t:"Remplace la lettre de voiture CMR"},{t:"Est un document ou confirmation attestant que la livraison a bien eu lieu, signé par le destinataire",ok:true},{t:"Est la déclaration d'importation douanière"},{t:"N'a aucune valeur juridique"}],
x:"Le Proof of Delivery (bon de livraison ou 3ème exemplaire CMR signé par le destinataire) est la preuve que la marchandise a bien été livrée dans l'état indiqué. Il est souvent exigé par les clients pour déclencher le paiement. En cas de litige sur la livraison, le PoD signé sans réserves crée une présomption de livraison conforme."},

{id:6945,prog:'LOURD',theme:'Transport international',d:2,
e:"Le transport routier de marchandises entre deux États membres de l'UE nécessite :",
r:[{t:"Une autorisation bilatérale spécifique"},{t:"Uniquement une licence communautaire valide et la copie certifiée à bord",ok:true},{t:"Un carnet TIR"},{t:"Une autorisation préfectorale française"}],
x:"Pour les transports de marchandises entre États membres de l'UE, seule la licence communautaire (délivrée pour 10 ans par l'autorité compétente du pays d'établissement) est nécessaire. La copie certifiée conforme doit être à bord du véhicule. Aucune autorisation bilatérale supplémentaire n'est requise au sein de l'UE (principe de libre circulation)."},

{id:6946,prog:'LOURD',theme:'Transport international',d:1,
e:"L'accord ATP (transport sous température dirigée) s'applique :",
r:[{t:"Uniquement aux transports nationaux"},{t:"Aux transports internationaux de denrées périssables entre pays signataires",ok:true},{t:"Uniquement aux transports > 100 km"},{t:"Uniquement aux produits congelés"}],
x:"L'accord ATP (Accord sur les Transports internationaux de denrées Périssables) fixe les conditions techniques (efficacité isotherme, température) pour le transport de denrées périssables entre pays signataires (principalement européens). Il impose des normes pour les équipements de transport (isothermes, réfrigérants, frigorifiques) et des températures maximales selon les produits."},

{id:6947,prog:'LOURD',theme:'Transport international',d:2,
e:"Le principe 'lex loci delicti' (lieu du délit) s'applique à la CMR pour :",
r:[{t:"Déterminer la juridiction compétente pour les litiges"},{t:"Choisir la loi applicable en dehors des cas couverts par la CMR",ok:true},{t:"Fixer les tarifs douaniers"},{t:"Déterminer la nationalité du conducteur"}],
x:"La CMR est la loi applicable aux transports internationaux qu'elle couvre. Pour les questions non réglementées par la CMR (elle s'applique à l'exclusion de la plupart des droits nationaux), c'est généralement le droit du pays où le transport a eu lieu ou où le dommage est survenu qui s'applique à titre subsidiaire."},

{id:6948,prog:'LOURD',theme:'Transport international',d:3,
e:"Le détachement d'un conducteur PL en France (par un transporteur étranger) impose que l'employeur :",
r:[{t:"N'a aucune obligation particulière"},{t:"Se déclare préalablement sur le portail SIPSI et désigne un représentant en France",ok:true},{t:"Ouvre un établissement stable en France"},{t:"Obtienne une autorisation de la DREAL"}],
x:"Depuis 2017, tout employeur étranger détachant des conducteurs en France pour du cabotage ou du transport bilatéral doit : effectuer une déclaration préalable sur le portail SIPSI (Service d'Information Préalable aux Salariés), désigner un représentant sur le territoire français joignable par les autorités, et mettre les documents sociaux à disposition (bulletin de salaire, contrat de travail)."},

{id:6949,prog:'LOURD',theme:'Transport international',d:2,
e:"Le transitaire douanier joue le rôle de :",
r:[{t:"Conducteur international spécialisé"},{t:"Représentant en douane qui effectue les formalités douanières au nom et pour le compte des importateurs/exportateurs",ok:true},{t:"Agent d'assurance pour les marchandises"},{t:"Commissionnaire de transport uniquement"}],
x:"Le transitaire (ou commissionnaire en douane agréé) est un professionnel mandaté par l'importateur ou l'exportateur pour accomplir les formalités douanières. Il peut agir en son nom propre (commissionnaire) ou au nom du client (représentant direct). Il est agréé par les douanes et engage sa responsabilité professionnelle sur les déclarations qu'il fait."},

{id:6950,prog:'LOURD',theme:'Transport international',d:1,
e:"La lettre de voiture CMR doit être établie en minimum :",
r:[{t:"1 exemplaire"},{t:"3 exemplaires originaux",ok:true},{t:"5 exemplaires"},{t:"Elle est facultative avec accord verbal"}],
x:"La CMR art. 5 impose que la lettre de voiture soit établie en 3 exemplaires originaux signés par l'expéditeur et le transporteur : 1 exemplaire pour l'expéditeur, 1 accompagne la marchandise jusqu'au destinataire, 1 est conservé par le transporteur. Des exemplaires supplémentaires peuvent être requis selon les formalités douanières."},
{id:7300,prog:'ADR',theme:'ADR — Général',d:1,
e:"L'ADR est révisé tous les :",
r:[{t:"Ans"},{t:"2 ans (années impaires), entrée en vigueur le 1er janvier suivant",ok:true},{t:"5 ans"},{t:"À la demande des États"}],
x:"L'ADR est révisé tous les deux ans (années impaires : 2023, 2025…). La nouvelle édition entre en vigueur le 1er janvier de l'année paire suivante avec un délai de transition de 6 mois pour permettre l'adaptation des entreprises."},

{id:7301,prog:'ADR',theme:'ADR — Général',d:2,
e:"Le CSTMD (Conseiller à la Sécurité) est requis pour les entreprises qui :",
r:[{t:"Transportent plus de 5 tonnes de MD"},{t:"Effectuent des transports, chargements ou déchargements de MD, quelle que soit la quantité",ok:true},{t:"Emploient plus de 50 conducteurs"},{t:"Ont plus de 10 véhicules ADR certifiés"}],
x:"L'obligation de CSTMD s'applique à toutes les entreprises intervenant dans le transport de MD (transporteurs, chargeurs/expéditeurs, déchargeurs, emballeurs). La quantité n'est pas le critère — c'est la nature de l'activité. Une même personne peut être CSTMD pour plusieurs entreprises."},

{id:7302,prog:'ADR',theme:'ADR — Général',d:1,
e:"Le numéro ONU est un nombre de :",
r:[{t:"2 chiffres"},{t:"4 chiffres",ok:true},{t:"6 chiffres"},{t:"Variable selon la classe"}],
x:"Le numéro ONU (ou numéro UN) est un numéro d'identification à 4 chiffres attribué à chaque matière ou groupe de matières dangereuses. Il est identique quel que soit le mode de transport (route, rail, air, mer) et partout dans le monde."},

{id:7303,prog:'ADR',theme:'ADR — Général',d:2,
e:"L'exemption totale ADR (1.1.3.6) s'applique quand la somme des points est :",
r:[{t:"Inférieure à 100"},{t:"Inférieure ou égale à 1 000",ok:true},{t:"Inférieure à 500"},{t:"Il n'y a pas d'exemption totale"}],
x:"Selon le 1.1.3.6 ADR, quand la somme des points (quantité × facteur par catégorie) pour l'ensemble du chargement est ≤ 1 000, l'exemption totale s'applique. Les facteurs sont : catégorie 0 = facteur 0, catégorie 1 = 50, catégorie 2 = 3, catégorie 3 = 1."},

{id:7304,prog:'ADR',theme:'ADR — Général',d:1,
e:"Le certificat ADR conducteur est valable :",
r:[{t:"1 an"},{t:"5 ans",ok:true},{t:"10 ans"},{t:"Il est permanent"}],
x:"Le certificat de formation ADR est valable 5 ans à compter de sa délivrance. Pour le renouveler, le conducteur doit suivre une formation de recyclage dans l'année précédant l'expiration. Si le certificat est expiré depuis plus de 12 mois, la formation initiale complète doit être refaite."},

{id:7305,prog:'ADR',theme:'ADR — Général',d:2,
e:"La formation ADR conducteur comprend :",
r:[{t:"Uniquement les procédures d'urgence"},{t:"Un module de base obligatoire + modules complémentaires (citerne, classe 1, classe 7)",ok:true},{t:"Uniquement le code de la route"},{t:"Uniquement les fiches de données de sécurité"}],
x:"La formation ADR conducteur comprend un module de base (obligatoire pour tout conducteur ADR : réglementation générale, prévention des risques, procédures d'urgence) et des modules complémentaires selon les types de transport : citerne (pour les transports en vrac liquide/gaz), classe 1 (explosifs), classe 7 (radioactifs)."},

{id:7306,prog:'ADR',theme:'ADR — Général',d:3,
e:"Le plan de sûreté ADR (ch. 1.10) est obligatoire pour les transporteurs de marchandises :",
r:[{t:"Tous les transporteurs ADR"},{t:"À haut risque sécuritaire (explosifs, certains toxiques, radioactifs actifs)",ok:true},{t:"Uniquement à l'international"},{t:"Transportant plus de 1 tonne de MD"}],
x:"Le plan de sûreté (ch. 1.10 ADR) est requis pour les entreprises transportant des marchandises à 'haut risque' sécuritaire (liste définie par l'ADR : certains explosifs, gaz très toxiques, radioactifs de haute activité…). Il doit identifier les menaces et définir les mesures de sécurité pour prévenir le vol ou le détournement."},

{id:7307,prog:'ADR',theme:'ADR — Général',d:2,
e:"Les consignes écrites ADR doivent être :",
r:[{t:"Envoyées par email avant le départ"},{t:"À bord du véhicule dans la cabine, dans les langues du conducteur et des pays traversés",ok:true},{t:"Affichées sur le côté du véhicule"},{t:"Conservées uniquement au dépôt"}],
x:"Les consignes écrites (art. 5.4.3.4 ADR) doivent être à bord du véhicule, dans la cabine du conducteur, accessibles à tout moment. Elles doivent être rédigées dans les langues que le conducteur peut lire et comprendre, et dans celles des pays traversés. Elles doivent correspondre exactement aux matières transportées."},

{id:7308,prog:'ADR',theme:'ADR — Général',d:1,
e:"Le rapport annuel du CSTMD est conservé pendant :",
r:[{t:"1 an"},{t:"5 ans",ok:true},{t:"10 ans"},{t:"Indéfiniment"}],
x:"Le rapport annuel du CSTMD doit être rédigé chaque année et conservé pendant au moins 5 ans. Il est adressé à la direction de l'entreprise et doit être présenté lors des contrôles si demandé. Il couvre les activités de transport de MD, les accidents/incidents, les recommandations et les formations dispensées."},

{id:7309,prog:'ADR',theme:'ADR — Classification',d:1,
e:"La classe des liquides inflammables en ADR est la :",
r:[{t:"Classe 2"},{t:"Classe 3",ok:true},{t:"Classe 4.1"},{t:"Classe 5.1"}],
x:"La Classe 3 de l'ADR regroupe les liquides inflammables : matières liquides dont le point d'éclair est ≤ 60°C (inclus). Exemples : essence (ONU 1203), éthanol (ONU 1170), acétone (ONU 1090), peintures (ONU 1263), kérosène (ONU 1223). Le point d'éclair est le critère de classification principal."},

{id:7310,prog:'ADR',theme:'ADR — Classification',d:2,
e:"Le gazole (diesel) est classé :",
r:[{t:"Classe 3, ONU 1203, GE II"},{t:"Classe 3, ONU 1202, GE III",ok:true},{t:"Classe 5.1, comburant"},{t:"Classe 9"}],
x:"Le gazole (fuel oil, diesel) est classé Classe 3, ONU 1202, Groupe d'emballage III (point d'éclair entre 55 et 75°C selon le type). Il est moins dangereux que l'essence (GE II) car son point d'éclair est plus élevé. Kemler : 30 (liquide inflammable)."},

{id:7311,prog:'ADR',theme:'ADR — Classification',d:2,
e:"Les batteries au lithium-ion (Li-ion) pour véhicules électriques sont classées :",
r:[{t:"Classe 3 — inflammable"},{t:"Classe 9, ONU 3480 (seules) ou ONU 3481 (dans équipements)",ok:true},{t:"Classe 8 — corrosif"},{t:"Classe 4.3"}],
x:"Les batteries Li-ion sont Classe 9. ONU 3480 = batteries Li-ion seules, ONU 3481 = batteries Li-ion dans équipements. Des règles très strictes s'appliquent : état de charge ≤ 30 % pour les batteries seules (sauf exceptions), emballage renforcé, inspection visuelle obligatoire, interdiction de dommages visibles."},

{id:7312,prog:'ADR',theme:'ADR — Classification',d:1,
e:"La classe des gaz comprimés, liquéfiés ou dissous en ADR est la :",
r:[{t:"Classe 1"},{t:"Classe 2",ok:true},{t:"Classe 4.2"},{t:"Classe 5.1"}],
x:"La Classe 2 de l'ADR regroupe tous les gaz : comprimés (azote, hélium, air comprimé), liquéfiés (propane, butane, chlore, ammoniac), liquéfiés réfrigérés (azote liquide, CO2 liquide réfrigéré) et dissous (acétylène). Chaque sous-groupe a des codes de classification spécifiques."},

{id:7313,prog:'ADR',theme:'ADR — Classification',d:2,
e:"L'acétylène dissous (bouteilles de soudure) est classé :",
r:[{t:"Classe 2, code 2F (gaz inflammable comprimé)"},{t:"Classe 2, code 2AF (gaz dissous inflammable)",ok:true},{t:"Classe 3"},{t:"Classe 4.1"}],
x:"L'acétylène (ONU 1001) est dissous dans l'acétone et stocké dans une masse poreuse dans la bouteille. Son code est 2AF (2 = gaz, A = asphyxiant, F = inflammable... mais en réalité le code ADR pour l'acétylène dissous est 2AF). Il est extrêmement inflammable et sensible aux chocs. Les bouteilles ne doivent pas être stockées allongées."},

{id:7314,prog:'ADR',theme:'ADR — Classification',d:3,
e:"Le nitrate d'ammonium (engrais agricole, concentration > 34,4 %) est classé :",
r:[{t:"Classe 3 — inflammable"},{t:"Classe 5.1 — comburant",ok:true},{t:"Classe 1 — explosif"},{t:"Classe 8 — corrosif"}],
x:"Le nitrate d'ammonium en engrais est classé Classe 5.1 (comburant), ONU 2067 (pour les engrais à base de nitrate d'ammonium). À des concentrations et dans des conditions particulières, il peut devenir explosif (Classe 1, ONU 0222). La classification précise dépend de la teneur en azote et des additifs. La tragédie de Beyrouth (2020) impliquait du nitrate d'ammonium."},

{id:7315,prog:'ADR',theme:'ADR — Signalisation',d:1,
e:"La plaque orange ADR doit être :",
r:[{t:"Peinte sur la carrosserie"},{t:"Amovible et rétroréfléchissante",ok:true},{t:"Fixe et non réfléchissante"},{t:"Appliquée uniquement à l'avant"}],
x:"Les plaques oranges ADR doivent être amovibles (pour permettre leur retrait/couverture quand le véhicule est vide) et rétroréfléchissantes (visibles de nuit). Elles doivent rester en place pendant tout le transport. Après déchargement et nettoyage/dégazage, elles doivent être retirées ou couvertes pour ne pas induire les secours en erreur."},

{id:7316,prog:'ADR',theme:'ADR — Signalisation',d:2,
e:"Les étiquettes de danger sur les colis ADR ont une taille minimale de :",
r:[{t:"50 × 50 mm"},{t:"100 × 100 mm",ok:true},{t:"200 × 200 mm"},{t:"La taille n'est pas réglementée"}],
x:"Les étiquettes de danger (losanges) doivent avoir une taille minimale de 100 mm × 100 mm avec une ligne de bordure à 5 mm du bord. Pour les très petits colis qui ne peuvent pas recevoir des étiquettes de taille réglementaire, des étiquettes réduites sont autorisées."},

{id:7317,prog:'ADR',theme:'ADR — Signalisation',d:2,
e:"Le numéro de danger '33' sur la plaque orange d'une citerne signifie :",
r:[{t:"Gaz inflammable"},{t:"Liquide très inflammable",ok:true},{t:"Comburant inflammable"},{t:"Liquide toxique et inflammable"}],
x:"En ADR, le chiffre 3 = inflammabilité. Le code 33 = matière liquide très inflammable (point d'éclair < 23°C, ex : essence, alcool). Le doublement d'un chiffre indique l'intensification du risque. Le code 30 = liquide inflammable ordinaire (point d'éclair ≥ 23°C, ex : gazole). Le code 336 = très inflammable + toxique."},

{id:7318,prog:'ADR',theme:'ADR — Signalisation',d:1,
e:"L'étiquette de danger de la Classe 8 (matières corrosives) représente :",
r:[{t:"Une flamme"},{t:"Deux éprouvettes déversant du liquide sur une main et un métal",ok:true},{t:"Un crâne avec tibias"},{t:"Un trèfle radioactif"}],
x:"L'étiquette de la Classe 8 est un losange mi-blanc (haut) mi-noir (bas) représentant deux éprouvettes ou cylindres déversant du liquide sur une main (tissu humain) et un métal (symbolisant l'attaque corrosive). Le chiffre 8 figure dans le coin inférieur."},

{id:7319,prog:'ADR',theme:'ADR — Signalisation',d:3,
e:"Les plaques-étiquettes sur les citernes mesurent :",
r:[{t:"100 × 100 mm"},{t:"250 × 250 mm minimum",ok:true},{t:"400 × 300 mm"},{t:"La même taille que les étiquettes de colis"}],
x:"Les plaques-étiquettes de danger apposées sur les véhicules-citernes, conteneurs et wagons-citernes mesurent 250 mm × 250 mm minimum avec une ligne de bordure à 12,5 mm du bord. Elles reprennent les mêmes pictogrammes que les étiquettes de colis mais à plus grande échelle pour être visibles à distance."},

{id:7320,prog:'ADR',theme:'ADR — Documents',d:1,
e:"Le document de transport ADR doit contenir :",
r:[{t:"Uniquement le numéro ONU"},{t:"ONU XXXX + Nom d'expédition + Classe + GE (si applicable) + Quantité + Expéditeur + Destinataire",ok:true},{t:"Uniquement les mesures d'urgence"},{t:"Uniquement le poids total"}],
x:"Le document de transport ADR (art. 5.4.1) doit mentionner : 'UN XXXX [Nom d'expédition officiel], [Classe], [(Code de classification)], [(GE X)], [Quantité]' + nom et adresse de l'expéditeur + nom et adresse du destinataire. Des informations supplémentaires peuvent être requises (température, code tunnel, quantité LQ…)."},

{id:7321,prog:'ADR',theme:'ADR — Documents',d:2,
e:"Le code tunnel 'D' pour une matière ADR signifie :",
r:[{t:"Pas de restriction"},{t:"Interdit dans les tunnels de catégorie D et E",ok:true},{t:"Interdit uniquement dans les tunnels E"},{t:"Passage uniquement de nuit"}],
x:"Les codes tunnel B à E indiquent les restrictions d'accès aux tunnels selon leur catégorie. Code D = interdit dans les tunnels D et E (les deux catégories les plus restrictives). Code E = interdit uniquement dans les tunnels de catégorie E. Le code (−) ou pas de code = aucune restriction."},

{id:7322,prog:'ADR',theme:'ADR — Documents',d:2,
e:"La DCC (Déclaration de Chargement du Conteneur) est requise quand :",
r:[{t:"Tous les transports en conteneur"},{t:"Des MD solides sont chargées en vrac dans un conteneur",ok:true},{t:"Uniquement pour les conteneurs > 20 pieds"},{t:"Uniquement pour les transports maritimes"}],
x:"La DCC (Container Packing Certificate) est requise quand des MD en vrac ou des objets (pas en colis) sont chargés dans un conteneur. Elle atteste que le chargement est correct, que le conteneur est en bon état et que les marquages/étiquetages sont conformes. Elle accompagne le document de transport."},

{id:7323,prog:'ADR',theme:'ADR — Sécurité',d:2,
e:"En cas d'incendie dans la cargaison ADR, la première action du conducteur est :",
r:[{t:"Tenter d'éteindre avec les extincteurs du bord"},{t:"S'éloigner du véhicule, baliser, alerter les secours (18/112), consulter les consignes écrites",ok:true},{t:"Débâcher le chargement pour aérer"},{t:"Appeler son employeur en premier"}],
x:"En cas d'incendie impliquant des MD : 1) S'éloigner immédiatement (risque d'explosion), 2) Allumer les feux de détresse si possible, 3) Baliser à grande distance, 4) Appeler le 18 (pompiers) et le 15 (SAMU) si blessés, en précisant le numéro ONU, 5) Consulter les consignes écrites et les transmettre aux secours. Ne jamais combattre seul un incendie impliquant des MD."},

{id:7324,prog:'ADR',theme:'ADR — Sécurité',d:1,
e:"L'extincteur requis dans la cabine d'un véhicule ADR doit contenir minimum :",
r:[{t:"1 kg de poudre"},{t:"2 kg de poudre ou équivalent",ok:true},{t:"5 kg de CO2"},{t:"6 kg de poudre"}],
x:"Pour tout transport de MD en colis (hors citerne), un extincteur de 2 kg de poudre polyvalente (ou agent équivalent) doit se trouver dans la cabine. Un extincteur supplémentaire dans le compartiment marchandises peut être requis selon les classes transportées. Ces extincteurs doivent être vérifiés périodiquement."},

{id:7325,prog:'ADR',theme:'ADR — Sécurité',d:2,
e:"La mise à la masse (mise à terre) d'une citerne de carburant lors du chargement est obligatoire pour :",
r:[{t:"Toutes les citernes"},{t:"Prévenir les étincelles dues aux charges électrostatiques lors du transfert de liquides inflammables",ok:true},{t:"Uniquement pour les citernes en plastique"},{t:"Uniquement la nuit"}],
x:"La mise à la masse est obligatoire lors du chargement/déchargement de liquides inflammables en citerne pour dissiper les charges électrostatiques générées par l'écoulement du liquide. Une étincelle dans une atmosphère explosive (vapeurs de carburant) peut provoquer l'inflammation. Un câble de mise à la masse doit être branché avant toute opération."},

{id:7326,prog:'ADR',theme:'ADR — Sécurité',d:3,
e:"Le phénomène BLEVE (Boiling Liquid Expanding Vapor Explosion) peut survenir lors de :",
r:[{t:"Tout transport de liquide"},{t:"L'exposition d'un récipient sous pression contenant un liquide inflammable à un incendie",ok:true},{t:"La chute d'un fût de liquide corrosif"},{t:"Le débordement d'une citerne de carburant"}],
x:"Le BLEVE est une explosion catastrophique qui survient quand un récipient sous pression (citerne GPL, bouteille de gaz) est exposé à un incendie. La chaleur fait monter la pression interne jusqu'à la rupture du récipient, libérant le liquide qui se vaporise instantanément et s'enflamme. Le risque BLEVE impose des distances de sécurité de 300-500 m minimum pour les secours."},

{id:7327,prog:'ADR',theme:'ADR — Emballages',d:1,
e:"Un fût en acier à fond non amovible (code 1A1) est principalement utilisé pour :",
r:[{t:"Les solides"},{t:"Les liquides (le fond fixe résiste à la pression interne)",ok:true},{t:"Les gaz comprimés"},{t:"Uniquement la Classe 8"}],
x:"Le fût en acier 1A1 (à fond non amovible) est adapté aux liquides car il résiste bien à la pression interne et limite les fuites. Les fûts 1A2 (à fond amovible) sont adaptés aux solides car ils permettent un remplissage/vidage par le dessus. Le choix dépend des propriétés physiques de la matière et des exigences du groupe d'emballage."},

{id:7328,prog:'ADR',theme:'ADR — Emballages',d:2,
e:"Le marquage 'UN' sur un emballage ADR signifie :",
r:[{t:"Fabriqué par l'ONU"},{t:"Approuvé et testé selon les procédures de l'ONU/ADR",ok:true},{t:"Peut contenir toutes les classes"},{t:"Origine américaine"}],
x:"Le marquage UN (ou ONU) sur un emballage atteste qu'il a subi avec succès les tests de performance prescrits par les Recommandations de l'ONU sur le transport des marchandises dangereuses (tests de chute, empilage, étanchéité, pression interne selon les cas). C'est le marquage d'homologation exigé par l'ADR."},

{id:7329,prog:'ADR',theme:'ADR — Emballages',d:2,
e:"Le groupe d'emballage I (GE I) correspond aux matières :",
r:[{t:"Peu dangereuses"},{t:"Très dangereuses",ok:true},{t:"Moyennement dangereuses"},{t:"Sans restriction d'emballage"}],
x:"Les groupes d'emballage classifient le niveau de danger : GE I = danger élevé (emballages les plus résistants, tests les plus sévères), GE II = danger moyen, GE III = danger faible. Les matières GE I sont soumises aux exigences les plus contraignantes (quantités maximales par colis, limitations de transport…)."},

{id:7330,prog:'ADR',theme:'ADR — Emballages',d:3,
e:"Un suremballage (overpack) regroupant des colis ADR doit :",
r:[{t:"Avoir sa propre homologation UN"},{t:"Porter les marquages/étiquettes de tous les colis contenus + mention SUREMBALLAGE",ok:true},{t:"N'avoir que l'étiquette de la classe principale"},{t:"Aucun marquage spécifique"}],
x:"Un suremballage (art. 5.1.2.1 ADR) regroupant plusieurs colis de MD doit porter : tous les numéros ONU des matières, tous les noms d'expédition, toutes les étiquettes de danger de tous les colis contenus, et la mention 'OVERPACK' ou 'SUREMBALLAGE'. Il ne nécessite pas de marquage homologué UN propre."},

{id:7331,prog:'ADR',theme:'ADR — Classification',d:2,
e:"Les matières de la Classe 4.2 (auto-échauffantes) comprennent notamment :",
r:[{t:"L'essence et le kérosène"},{t:"Le charbon actif humide et les farines animales",ok:true},{t:"Le chlore et le brome"},{t:"Le nitrate d'ammonium"}],
x:"La Classe 4.2 regroupe les matières sujettes à l'inflammation spontanée (auto-échauffantes au contact de l'air). Exemples : charbon actif humide (peut s'enflammer après absorption d'humidité), farines animales et végétales, huile de lin, coprah (noix de coco). Ces matières nécessitent des précautions de stockage (éviter l'air et l'humidité)."},

{id:7332,prog:'ADR',theme:'ADR — Classification',d:2,
e:"L'ammoniac anhydre (ONU 1005) est classé :",
r:[{t:"Classe 3"},{t:"Classe 2, code 2TC (gaz toxique et corrosif)",ok:true},{t:"Classe 8 uniquement"},{t:"Classe 6.1 uniquement"}],
x:"L'ammoniac anhydre est un gaz liquéfié de Classe 2, code 2TC (gaz liquéfié Toxique et Corrosif). C'est un gaz très toxique par inhalation (LC50 très basse) et corrosif pour les muqueuses. Son transport nécessite des citernes spécialement conçues et une formation ADR renforcée avec module citerne."},

{id:7333,prog:'ADR',theme:'ADR — Classification',d:1,
e:"L'acide sulfurique concentré (ONU 1830) appartient à la classe :",
r:[{t:"Classe 3"},{t:"Classe 8 — matières corrosives",ok:true},{t:"Classe 5.1"},{t:"Classe 6.1"}],
x:"L'acide sulfurique concentré (H2SO4) est une matière corrosive de Classe 8, groupe d'emballage II. Il détruit les tissus vivants et attaque la plupart des métaux. Il est également toxique par inhalation (vapeurs d'H2SO4). Sa manutention exige des EPI complets (combinaison, gants, lunettes de protection, appareil respiratoire)."},

{id:7334,prog:'ADR',theme:'ADR — Classification',d:3,
e:"La peroxydes organiques de la Classe 5.2 se distinguent de la Classe 5.1 car :",
r:[{t:"Ils sont moins dangereux"},{t:"Ils contiennent un groupement peroxyde -O-O- et peuvent être instables, se décomposant de façon explosive ou auto-accélérée",ok:true},{t:"Ils sont uniquement gazeux"},{t:"Ils sont plus fréquents dans le transport routier"}],
x:"La Classe 5.2 (peroxydes organiques) regroupe des matières dont la structure chimique contient le groupement -O-O-. Ils peuvent se décomposer de façon exothermique (libération de chaleur) et parfois explosive. Beaucoup nécessitent un contrôle de température pendant le transport (température critique de décomposition auto-accélérée - TDAA)."},

{id:7335,prog:'ADR',theme:'ADR — Général',d:2,
e:"L'accord multilatéral ADR (ML) permet :",
r:[{t:"D'exporter librement toutes MD"},{t:"D'appliquer des règles dérogatoires entre États signataires pour un transport spécifique",ok:true},{t:"D'harmoniser les tarifs de transport"},{t:"D'exonérer les petits transporteurs"}],
x:"Les accords multilatéraux (ML) sont des dérogations temporaires aux règles ADR standard, conclus entre autorités compétentes de plusieurs États parties. Ils autorisent des conditions particulières pour un type de transport non prévu par l'ADR ou plus flexibles. Ils sont publiés et ont une durée limitée."},

{id:7336,prog:'ADR',theme:'ADR — Signalisation',d:2,
e:"Le numéro de danger '80' sur la plaque orange signifie :",
r:[{t:"Matière radioactive"},{t:"Matière corrosive",ok:true},{t:"Matière comburante"},{t:"Gaz toxique"}],
x:"Le chiffre 8 en ADR = corrosivité. Code 80 = matière corrosive. Code 88 = matière très corrosive (redoublement = intensification). Code 83 = corrosive et inflammable. Code 86 = corrosive et toxique. Code X80 = corrosif réagissant dangereusement avec l'eau (ne pas utiliser l'eau pour l'extinction)."},

{id:7337,prog:'ADR',theme:'ADR — Signalisation',d:1,
e:"La Classe 7 (radioactifs) utilise quelle couleur pour ses étiquettes ?",
r:[{t:"Orange"},{t:"Jaune et blanc selon la catégorie",ok:true},{t:"Vert"},{t:"Bleu"}],
x:"Les étiquettes de la Classe 7 utilisent le jaune (moitié supérieure) et le blanc (moitié inférieure) pour les catégories II-Jaune et III-Jaune, ou uniquement le blanc pour la catégorie I-Blanc. Le symbole radioactif (trèfle à 3 pétales) est toujours noir. Les catégories dépendent de l'indice de transport (quantité de rayonnement mesurable à 1 m)."},

{id:7338,prog:'ADR',theme:'ADR — Général',d:2,
e:"Un véhicule ADR vide et non nettoyé (ex : citerne ayant contenu des inflammables) :",
r:[{t:"N'est plus soumis à l'ADR"},{t:"Reste soumis à l'ADR comme s'il était plein jusqu'au nettoyage et dégazage complets",ok:true},{t:"Peut être garé dans tout parking"},{t:"Peut être réparé normalement"}],
x:"Un véhicule ADR (notamment une citerne) ayant transporté des MD reste soumis aux obligations ADR (plaques oranges, consignes écrites, interdictions de stationnement…) jusqu'à ce qu'il soit nettoyé et dégazé. Les vapeurs résiduelles d'inflammables constituent un risque d'explosion même en l'absence de liquide visible."},

{id:7339,prog:'ADR',theme:'ADR — Sécurité',d:2,
e:"En cas de projection d'acide corrosif (Classe 8) sur la peau, il faut :",
r:[{t:"Appliquer du bicarbonate pour neutraliser"},{t:"Retirer les vêtements contaminés et rincer abondamment à l'eau (min 15 min)",ok:true},{t:"Couvrir la brûlure avec un pansement sec"},{t:"Frotter avec une serviette sèche"}],
x:"En cas de projection d'acide ou base corrosive : 1) Retirer immédiatement les vêtements contaminés, 2) Rincer ABONDAMMENT à l'eau claire pendant 15-20 minutes minimum (ne jamais neutraliser chimiquement car la réaction de neutralisation est exothermique et aggrave les brûlures), 3) Appeler le 15/112, 4) Montrer les consignes écrites aux secours."},

{id:7340,prog:'ADR',theme:'ADR — Général',d:3,
e:"Le principe de séparation des charges incompatibles interdit notamment de charger ensemble :",
r:[{t:"Deux emballages de même classe"},{t:"Les explosifs (Cl.1) et les liquides inflammables (Cl.3)",ok:true},{t:"Les corrosifs et les solides non dangereux"},{t:"Tout chargement de plus de 3 classes différentes"}],
x:"Le tableau de séparation ADR (sous-section 7.5.2) liste les incompatibilités entre classes. Les explosifs (Cl.1) ne peuvent pas être transportés avec les liquides inflammables (Cl.3), les matières comburantes (Cl.5.1), ou les peroxydes organiques (Cl.5.2). En cas de doute, la règle est de séparer les classes dans des compartiments différents."},

{id:7341,prog:'ADR',theme:'ADR — Classification',d:2,
e:"Le peroxyde d'hydrogène (eau oxygénée) à 50% est classé :",
r:[{t:"Classe 8"},{t:"Classe 5.1 — comburant (ONU 2014)",ok:true},{t:"Classe 3"},{t:"Classe 9"}],
x:"Le peroxyde d'hydrogène (H2O2) à des concentrations entre 8 % et 60 % est classé Classe 5.1 (comburant), ONU 2014. À plus de 60 %, c'est ONU 2015 (plus dangereux). C'est aussi un risque secondaire corrosif (Classe 8). En dessous de 8 %, non soumis à l'ADR."},

{id:7342,prog:'ADR',theme:'ADR — Classification',d:1,
e:"La neige carbonique (CO2 solide, ONU 1845) est classée :",
r:[{t:"Classe 2 — gaz"},{t:"Classe 9 — matières diverses",ok:true},{t:"Classe 5.1 — comburant"},{t:"Elle n'est pas soumise à l'ADR"}],
x:"La neige carbonique (CO2 solide) est classée Classe 9 (matières et objets dangereux divers), ONU 1845. Elle présente un danger d'asphyxie par dégagement de CO2 gazeux en espace confiné et un risque de brûlure cryogénique par contact. Des dispositions spéciales s'appliquent pour sa ventilation dans les compartiments de transport."},

{id:7343,prog:'ADR',theme:'ADR — Général',d:2,
e:"L'exemption de l'ADR pour les 'quantités limitées' (LQ) s'applique quand :",
r:[{t:"La quantité totale est < 1 tonne"},{t:"Chaque colis intérieur (unité primaire) ne dépasse pas la quantité limite définie pour la matière",ok:true},{t:"Le transport est local (< 50 km)"},{t:"Le conducteur n'a pas de certificat ADR"}],
x:"Les quantités limitées (LQ) permettent une exemption de nombreuses obligations ADR quand chaque colis intérieur contient au maximum la quantité définie par colonne 7a du tableau A (généralement de 25 ml à 5L selon la matière). Le colis extérieur est limité à 30 kg maximum. Le marquage LQ (losange noir et blanc) remplace les étiquettes ADR."},

{id:7344,prog:'ADR',theme:'ADR — Signalisation',d:2,
e:"Le marquage LQ (Quantités Limitées) sur les colis est un :",
r:[{t:"Rond rouge"},{t:"Losange (carré sur la pointe) blanc à bordure noire avec un carré noir intérieur",ok:true},{t:"Triangle vert"},{t:"Étiquette identique aux étiquettes de classe ordinaires"}],
x:"Le marquage LQ est un losange (carré sur la pointe) blanc avec une bordure noire et un losange intérieur noir. Sur les véhicules, une plaque de même forme (100 × 100 mm minimum) est apposée. Ce marquage indique que les marchandises bénéficient de l'exemption quantités limitées et remplace les plaques oranges et étiquettes de classe."},

{id:7345,prog:'ADR',theme:'ADR — Général',d:3,
e:"Les 'quantités exceptées' (EQ) offrent une exemption encore plus importante que les LQ car :",
r:[{t:"Elles permettent des quantités plus grandes"},{t:"Elles exemptent totalement l'ADR pour des quantités encore plus petites (quelques ml à quelques grammes par colis)",ok:true},{t:"Elles ne nécessitent aucun marquage"},{t:"Elles s'appliquent à toutes les classes sans restriction"}],
x:"Les quantités exceptées (EQ) offrent une exemption totale de toutes les exigences ADR pour des quantités très réduites par colis intérieur (de 1 ml/g à 500 ml/g selon la matière et le code EQ). Le marquage est un astérisque (*) ou le code EQ sur le colis. Elles conviennent pour les échantillons, laboratoires, petites quantités médicales."},

{id:7346,prog:'ADR',theme:'ADR — Sécurité',d:2,
e:"Les consignes écrites ADR pour un liquide très inflammable (Cl.3) doivent indiquer notamment :",
r:[{t:"Uniquement le numéro ONU"},{t:"Nature du danger, EPI requis, interdictions (feu, étincelles), mesures en cas de fuite ou incendie, premiers secours",ok:true},{t:"Uniquement les coordonnées du transporteur"},{t:"Le prix du transport uniquement"}],
x:"Les consignes écrites ADR (format standardisé depuis 2015) doivent indiquer pour chaque matière : nature du danger (symboles de risque), équipements de protection individuelle à utiliser, actions générales, actions spécifiques en cas d'incendie, en cas de déversement/fuite, en cas de blessé/contact. Elles doivent être dans les langues appropriées."},

{id:7347,prog:'ADR',theme:'ADR — Général',d:2,
e:"Le transport d'aérosols (bombes de peinture, déodorants, mousse expansive) est soumis à l'ADR sous :",
r:[{t:"La Classe 3 (inflammable)"},{t:"La Classe 2, ONU 1950 (AÉROSOLS)",ok:true},{t:"La Classe 5.1"},{t:"Il n'est pas soumis à l'ADR"}],
x:"Les aérosols (contenant du gaz propulseur sous pression) sont classés Classe 2, ONU 1950. Selon les propriétés du contenu, des risques subsidiaires peuvent s'ajouter (inflammable, corrosif, toxique…). Le transport de petites quantités d'aérosols bénéficie souvent des exemptions LQ ou de l'exemption spéciale 327 de l'ADR."},

{id:7348,prog:'ADR',theme:'ADR — Documents',d:3,
e:"En transport multimodal (route + ferry), les obligations ADR :",
r:[{t:"Cessent à la montée sur le ferry"},{t:"Restent applicables + des exigences IMDG complémentaires peuvent s'ajouter pour la partie maritime",ok:true},{t:"Sont remplacées par les règles IMDG"},{t:"Ne s'appliquent qu'à la partie routière finale"}],
x:"En transport multimodal, les obligations ADR s'appliquent à la partie routière avant et après la traversée maritime. Pour la partie maritime, le Code IMDG (transport maritime de MD) s'applique en plus. Des documents complémentaires (déclaration MD maritime) peuvent être requis par la compagnie maritime. À l'arrivée, les obligations ADR reprennent."},

{id:7349,prog:'ADR',theme:'ADR — Classification',d:2,
e:"L'ONU 2794 (batteries de plomb contenant de l'électrolyte acide liquide) est classé :",
r:[{t:"Classe 3"},{t:"Classe 8 — corrosif",ok:true},{t:"Classe 9"},{t:"Classe 6.1"}],
x:"Les batteries au plomb mouillées (avec acide sulfurique liquide) sont classées Classe 8 (matière corrosive), ONU 2794. Elles doivent être transportées à la verticale, dans des emballages résistants à l'acide, avec étiquettes Classe 8. Des exemptions existent pour les petites quantités de batteries nouvelles ou usagées respectant certaines conditions."},

{id:7350,prog:'ADR',theme:'ADR — Général',d:1,
e:"Le transport de gaz naturel liquéfié (GNL, ONU 1972) nécessite :",
r:[{t:"Un simple certificat ADR de base"},{t:"Un certificat ADR de base + module citerne + véhicule EX/II ou FL",ok:true},{t:"Uniquement un permis spécial préfectoral"},{t:"Aucun certificat particulier"}],
x:"Le GNL (méthane liquide réfrigéré à -162°C) est classé Classe 2 (gaz inflammable liquéfié réfrigéré). Son transport en citerne nécessite : certificat ADR de base + module citerne, véhicule FL (For Liquids inflammables) ou EX/II selon la citerne, équipements de sécurité spécifiques. C'est un transport exigeant en raison des températures cryogéniques."},

{id:7351,prog:'ADR',theme:'ADR — Sécurité',d:2,
e:"Le stationnement interdit à moins de 50 m des habitations pour les véhicules ADR chargés s'applique :",
r:[{t:"À tous les véhicules ADR"},{t:"Aux véhicules transportant des matières de certaines catégories de danger (explosifs, très toxiques, radioactifs actifs…)",ok:true},{t:"Uniquement aux citernes"},{t:"Uniquement la nuit"}],
x:"Les restrictions de stationnement ADR (ch. 8.4) s'appliquent principalement aux véhicules transportant des matières à haut risque (explosifs Cl.1, matières très toxiques, radioactifs). Les véhicules ne doivent pas stationner à moins de 50 m d'une habitation, d'un ERP ou d'une source d'ignition. Ces restrictions visent à protéger les populations en cas d'incident."},

{id:7352,prog:'ADR',theme:'ADR — Classification',d:3,
e:"Les matières plastiques expansées inflammables (polystyrène expansé en billes) sont classées :",
r:[{t:"Classe 3"},{t:"Classe 4.1 — solide inflammable (ONU 2211 ou 2212)",ok:true},{t:"Classe 9"},{t:"Non soumises à l'ADR"}],
x:"Les granulés ou billes de plastique expansé inflammable (polystyrène expansé, polyéthylène expansé) sont classés Classe 4.1 (matières solides inflammables). ONU 2211 pour les polymères expansibles, granulés (dégageant des vapeurs inflammables). Des exemptions existent pour les emballages finis contenant de la mousse de polystyrène."},

{id:7353,prog:'ADR',theme:'ADR — Général',d:2,
e:"Le rapport annuel du CSTMD doit être transmis à :",
r:[{t:"La DREAL automatiquement"},{t:"La direction de l'entreprise (et à l'autorité compétente si demandé lors d'un contrôle)",ok:true},{t:"La douane française"},{t:"L'ONU chaque année"}],
x:"Le rapport annuel du CSTMD est adressé à la direction de l'entreprise. Il n'est pas envoyé automatiquement à l'autorité compétente mais doit être présenté lors des contrôles sur demande. Il est conservé pendant au moins 5 ans. En cas d'incident grave, un rapport séparé est également rédigé."},

{id:7354,prog:'ADR',theme:'ADR — Signalisation',d:1,
e:"L'étiquette de danger pour un gaz inflammable (Classe 2.1) est :",
r:[{t:"Rouge avec une flamme",ok:true},{t:"Orange avec une flamme"},{t:"Verte avec une flamme"},{t:"Bleue avec une flamme"}],
x:"L'étiquette de la Classe 2.1 (gaz inflammables) est un losange rouge avec une flamme blanche ou noire. Le chiffre 2 figure dans le coin inférieur. À ne pas confondre avec la Classe 3 (liquides inflammables) qui est également rouge avec flamme — la différence est dans les détails du pictogramme et l'indication 'GAS' sur certaines étiquettes."},

{id:7355,prog:'ADR',theme:'ADR — Général',d:2,
e:"Le transport de gaz comburant (Classe 2.2 + O) en citerne nécessite de ne pas stationner à moins de :",
r:[{t:"5 m des sources d'ignition"},{t:"Selon les restrictions ADR ch. 8.4 et les consignes écrites (généralement 50 m des habitations pour les matières à haut risque)",ok:true},{t:"100 m systématiquement"},{t:"Aucune restriction de stationnement"}],
x:"Les restrictions de stationnement pour les citernes de gaz comburants (oxygène liquide, protoxyde d'azote…) dépendent de la catégorie de la matière et des prescriptions ADR ch. 8.4. Les matières comburantes peuvent alimenter un incendie ou une explosion en présence de matières combustibles, d'où les restrictions de proximité avec des sources d'ignition ou des habitations."},

{id:7356,prog:'ADR',theme:'ADR — Classification',d:2,
e:"L'oxygène liquide cryogénique (ONU 1073) est classé :",
r:[{t:"Classe 2.1 — gaz inflammable"},{t:"Classe 2.2 + risque subsidiaire 5.1 (gaz liquéfié réfrigéré + comburant)",ok:true},{t:"Classe 5.1 uniquement"},{t:"Classe 2.3 — gaz toxique"}],
x:"L'oxygène liquide cryogénique (LOX) est classé Classe 2 avec code 2O (gaz liquéfié réfrigéré + comburant). ONU 1073. Il est non inflammable lui-même mais entretient énergiquement la combustion des matières en contact. Il est transporté à très basse température (-183°C) dans des citernes cryogéniques spécialement isolées."},

{id:7357,prog:'ADR',theme:'ADR — Sécurité',d:3,
e:"Le risque d'asphyxie lors du transport de gaz inertes (azote, argon, hélium) en espace confiné est dû à :",
r:[{t:"La toxicité chimique du gaz"},{t:"La diminution de la concentration en oxygène par déplacement de l'air",ok:true},{t:"L'explosion des bouteilles"},{t:"La formation de gaz toxiques secondaires"}],
x:"Les gaz inertes (Classe 2, code A = asphyxiant) ne sont pas toxiques chimiquement mais peuvent provoquer l'asphyxie par déplacement de l'oxygène ambiant. Dans un espace confiné (soute, container, cave…), une fuite peut amener la concentration en O2 sous le seuil vital (< 16-17 %). Les secours doivent utiliser des ARI (Appareils Respiratoires Isolants) avant de pénétrer."},

{id:7358,prog:'ADR',theme:'ADR — Général',d:2,
e:"La catégorie de transport 3 en ADR (facteur multiplicateur 1) correspond aux matières :",
r:[{t:"Les plus dangereuses"},{t:"Les moins dangereuses dans la classification ADR",ok:true},{t:"Les matières sans danger"},{t:"Les matières réservées aux transports militaires"}],
x:"La catégorie de transport 3 (facteur multiplicateur 1) correspond aux matières les moins dangereuses dans le système de calcul des points ADR. Une matière de catégorie 3 peut être transportée en grande quantité avant de dépasser le seuil de 1 000 points (1 000 kg/L de cette matière serait nécessaire). À l'opposé, la catégorie 1 (facteur 50) exige des quantités très réduites."},

{id:7359,prog:'ADR',theme:'ADR — Documents',d:2,
e:"La désignation officielle de transport (nom d'expédition officiel) ADR doit être :",
r:[{t:"En anglais uniquement"},{t:"Dans la langue du pays expéditeur ET en anglais/français/allemand selon les pays traversés",ok:true},{t:"En français uniquement pour les transports en France"},{t:"Dans la langue du pays destinataire uniquement"}],
x:"Le nom d'expédition officiel (NEO) dans le document de transport doit être dans la langue officielle du pays d'origine et, si cette langue n'est pas l'anglais, le français ou l'allemand, dans l'une de ces trois langues également. Cette règle vise à assurer la compréhension par les autorités de contrôle des pays traversés."},
// — DROIT SOCIAL PL suite (35q) —
{id:6960,prog:'LOURD',theme:'Droit social',d:2,
e:"Le temps de conduite journalier maximum (régulier) est de :",
r:[{t:"8 heures"},{t:"9 heures",ok:true},{t:"10 heures"},{t:"12 heures"}],
x:"Le temps de conduite journalier normal est de 9 heures (art. 6 du règlement 561/2006). Il peut être étendu à 10 heures deux fois par semaine. Au-delà, l'infraction est caractérisée. Ces limites s'entendent hors pauses et temps de repos."},

{id:6961,prog:'LOURD',theme:'Droit social',d:1,
e:"La durée maximale de conduite sur 2 semaines consécutives est de :",
r:[{t:"100 heures"},{t:"90 heures",ok:true},{t:"80 heures"},{t:"112 heures"}],
x:"Le règlement 561/2006 art. 6 fixe la limite bihebdomadaire à 90 heures de conduite sur 2 semaines consécutives. Même si chaque semaine respecte la limite de 56h, la somme ne peut pas dépasser 90h. Ces deux limites s'appliquent simultanément."},

{id:6962,prog:'LOURD',theme:'Droit social',d:2,
e:"Le repos journalier peut-il être pris en plusieurs fois ?",
r:[{t:"Non, toujours en une seule fois"},{t:"Oui, en 2 fois : d'abord au moins 3h, puis au moins 9h (total : 12h minimum)",ok:true},{t:"Oui, en autant de fois que souhaité"},{t:"Non, jamais fractionné"}],
x:"Le repos journalier normal (11h) peut être fractionné : une 1ère partie d'au moins 3h consécutives, puis une 2ème partie d'au moins 9h consécutives, soit 12h minimum au total. Cette disposition permet au conducteur de s'arrêter brièvement en cours de route. Le fractionnement n'est pas possible pour le repos réduit (9h)."},

{id:6963,prog:'LOURD',theme:'Droit social',d:1,
e:"La durée de validité de la carte conducteur tachygraphe est de :",
r:[{t:"1 an"},{t:"5 ans",ok:true},{t:"10 ans"},{t:"Permanente"}],
x:"La carte conducteur (numérique personnelle) est valable 5 ans. Elle doit être renouvelée avant expiration. En cas de perte ou de vol, le conducteur doit déclarer la perte aux autorités et peut obtenir un duplicata. La conduite sans carte conducteur valide (en utilisant des disques papier de remplacement) est tolérée 15 jours maximum."},

{id:6964,prog:'LOURD',theme:'Droit social',d:2,
e:"Le tachygraphe intelligent de 2ème génération (G2) est obligatoire sur les véhicules neufs depuis :",
r:[{t:"2014"},{t:"2019",ok:true},{t:"2022"},{t:"2024"}],
x:"Le tachygraphe intelligent G2 (avec module GNSS intégré, interface DSRC pour contrôle à distance, enregistrement automatique des franchissements de frontières) est obligatoire sur les véhicules PL neufs depuis 2019 (règlement d'exécution 2016/799). Les G1 (2014) doivent être remplacés par des G2 selon un calendrier progressif."},

{id:6965,prog:'LOURD',theme:'Droit social',d:3,
e:"Un conducteur PL qui travaille pour deux employeurs différents dans la même semaine :",
r:[{t:"Bénéficie de deux quotas de conduite distincts"},{t:"Doit respecter les limites globales de conduite et de repos sur l'ensemble de son activité",ok:true},{t:"Ne peut pas avoir deux employeurs en même temps"},{t:"Doit avertir la DREAL"}],
x:"Les règles du 561/2006 s'appliquent globalement au conducteur, quelle que soit la multiplicitée des employeurs. Il doit respecter les limites totales de conduite et les minima de repos sur l'ensemble de son activité professionnelle. Chaque employeur doit informer le conducteur du temps de conduite déjà effectué pour permettre le respect des règles."},

{id:6966,prog:'LOURD',theme:'Droit social',d:2,
e:"L'employeur doit remettre au conducteur, en fin de semaine de travail, :",
r:[{t:"Sa feuille de temps individuelle"},{t:"Les données téléchargées de sa carte conducteur"},{t:"Une attestation d'activités signée pour les jours non travaillés",ok:true},{t:"Son planning de la semaine suivante"}],
x:"L'attestation d'activités (ou certificat d'activités) est établie et signée par l'employeur pour les jours où le conducteur n'a pas conduit de véhicule équipé d'un tachygraphe (jours de repos, de maladie, de congés, de formation…). Elle permet aux contrôleurs de reconstituer l'historique des 28 derniers jours lors d'un contrôle routier."},

{id:6967,prog:'LOURD',theme:'Droit social',d:1,
e:"La CCN transports routiers (CCNTR) s'applique aux entreprises dont l'activité principale est :",
r:[{t:"La location de véhicules"},{t:"Le transport routier de marchandises et activités auxiliaires",ok:true},{t:"La fabrication de véhicules"},{t:"Le transport de voyageurs uniquement"}],
x:"La CCNTR s'applique à toutes les entreprises dont l'activité principale relève du transport routier de marchandises (y compris commissionnaires, auxiliaires, coursiers, déménageurs…). Elle est étendue, ce qui la rend applicable même aux entreprises non adhérentes à une organisation patronale signataire."},

{id:6968,prog:'LOURD',theme:'Droit social',d:2,
e:"Le repos compensateur de remplacement pour les heures supplémentaires peut remplacer :",
r:[{t:"Uniquement les majorations de salaire"},{t:"Le paiement des HS par un repos équivalent, avec accord collectif",ok:true},{t:"Le repos hebdomadaire"},{t:"Le préavis de licenciement"}],
x:"Le repos compensateur de remplacement (RCR) permet, avec accord collectif ou individuel, de remplacer le paiement des heures supplémentaires (et leur majoration) par un repos d'une durée équivalente majorée. Exemple : une HS majorée à 25 % = 1h15 de RCR. Les modalités de prise du RCR sont fixées par l'accord."},

{id:6969,prog:'LOURD',theme:'Droit social',d:3,
e:"Le statut de 'salarié portage' pour un conducteur PL freelance est :",
r:[{t:"Impossible dans le transport"},{t:"Possible mais peu adapté : le portage salarial est autorisé pour des missions ponctuelles non permanentes",ok:true},{t:"Obligatoire pour les conducteurs occasionnels"},{t:"Identique au statut d'auto-entrepreneur"}],
x:"Le portage salarial (loi du 5 mars 2014) permet à un professionnel indépendant d'être rémunéré comme salarié via une entreprise de portage. Dans le transport, il peut être utilisé pour des missions ponctuelles (événementiel, remplacement). Mais l'activité principale de conducteur PL permanent n'est pas adaptée au portage, qui est conçu pour des missions à durée limitée."},

{id:6970,prog:'LOURD',theme:'Droit social',d:2,
e:"La médaille du travail dans les transports routiers est attribuée à partir de :",
r:[{t:"10 ans de service"},{t:"20 ans de service (médaille d'argent)",ok:true},{t:"30 ans de service"},{t:"5 ans de service"}],
x:"La médaille d'honneur du travail est accordée par le Ministère du Travail sur demande de l'employeur pour les salariés justifiant : 20 ans (Argent), 30 ans (Vermeil), 35 ans (Or), 40 ans (Grand-Or). Elle peut être remise lors d'une cérémonie et s'accompagne d'une gratification versée par l'employeur (soumise à conditions sociales/fiscales)."},

{id:6971,prog:'LOURD',theme:'Droit social',d:1,
e:"En cas de contrat de travail sans écrit, le contrat est présumé :",
r:[{t:"Nul"},{t:"À durée indéterminée (CDI) à temps plein",ok:true},{t:"CDD de 3 mois"},{t:"Contrat de mise à disposition"}],
x:"En droit du travail, l'absence de contrat écrit crée une présomption de CDI à temps plein (art. L.1221-2 du Code du travail). Pour les CDD et le temps partiel, l'écrit est obligatoire à peine de requalification en CDI/temps plein. La charge de la preuve appartient à l'employeur qui souhaite se prévaloir d'une autre qualification."},

{id:6972,prog:'LOURD',theme:'Droit social',d:2,
e:"Le système de points du permis CE d'un conducteur PL professionnel :",
r:[{t:"Est le même que pour un permis B"},{t:"Commence à 12 points (ou 6 en période probatoire) comme tout permis",ok:true},{t:"Dispose de 24 points spécifiques"},{t:"N'existe pas pour les professionnels"}],
x:"Le permis CE (comme tous les permis français) est au capital de 12 points (6 points pour les conducteurs en période probatoire). La perte de points suit les mêmes règles que pour le permis B. Pour un professionnel PL, la perte du permis CE signifie la perte de l'emploi — d'où l'importance de la conduite prudente et préventive."},

{id:6973,prog:'LOURD',theme:'Droit social',d:3,
e:"La convention collective nationale des transports routiers prévoit un coefficient minimal pour un conducteur PL longue distance de :",
r:[{t:"100"},{t:"150 M (coefficient référence grands routiers)",ok:true},{t:"200"},{t:"Pas de coefficient minimum légal"}],
x:"La CCNTR classe les conducteurs par coefficients selon le véhicule conduit et le type d'activité. Le coefficient 150 M ('M' pour Messagerie/Grands Routiers) est la référence pour les conducteurs de véhicules > 19t en longue distance. Ce coefficient détermine le salaire minimum conventionnel et les indemnités (repas, couchées)."},

{id:6974,prog:'LOURD',theme:'Droit social',d:2,
e:"L'embauche d'un conducteur PL nécessite de vérifier :",
r:[{t:"Uniquement son permis de conduire"},{t:"Permis CE valide + carte conducteur valide + aptitude médicale + titre de séjour si nécessaire",ok:true},{t:"Uniquement son casier judiciaire"},{t:"Uniquement son code 95"}],
x:"À l'embauche d'un conducteur PL, l'employeur doit vérifier : permis de conduire de catégorie CE valide, carte conducteur ADR valide (si transport ADR prévu), certificat médical d'aptitude valide délivré par un médecin agréé préfectoral, et code 95 valide (CQC). Pour les ressortissants hors UE, vérifier le titre de séjour avec autorisation de travail."},

{id:6975,prog:'LOURD',theme:'Droit social',d:1,
e:"La protection des représentants du personnel (délégués syndicaux, élus CSE) lors d'un licenciement nécessite :",
r:[{t:"Uniquement un avertissement préalable"},{t:"L'autorisation préalable de l'inspecteur du travail",ok:true},{t:"L'accord du CSE uniquement"},{t:"Une décision du tribunal de commerce"}],
x:"Le licenciement d'un salarié protégé (membre élu du CSE, délégué syndical, représentant de proximité…) nécessite l'autorisation préalable de l'inspecteur du travail (IT). Sans cette autorisation, le licenciement est nul. L'IT vérifie que le motif de licenciement n'est pas lié au mandat du salarié."},

{id:6976,prog:'LOURD',theme:'Droit social',d:2,
e:"La rupture conventionnelle homologuée ouvre droit aux allocations chômage :",
r:[{t:"Non, car le salarié part volontairement"},{t:"Oui, comme un licenciement — elle est assimilée à une démission différée pour le chômage",ok:true},{t:"Uniquement après 1 an d'indemnisation"},{t:"Uniquement pour les salariés de plus de 50 ans"}],
x:"La rupture conventionnelle (art. L.1237-11 du Code du travail) permet une séparation amiable : le salarié perçoit une indemnité spécifique (au moins égale à l'indemnité de licenciement légale) ET peut prétendre aux allocations chômage (ARE) comme s'il avait été licencié. Elle est homologuée par la DREETS."},

{id:6977,prog:'LOURD',theme:'Droit social',d:3,
e:"L'obligation d'emploi de travailleurs handicapés (OETH) pour les entreprises de 20+ salariés est de :",
r:[{t:"1 % de l'effectif"},{t:"6 % de l'effectif",ok:true},{t:"10 % de l'effectif"},{t:"2 % de l'effectif"}],
x:"L'OETH impose à tout employeur de 20 salariés et plus d'employer 6 % de travailleurs en situation de handicap (BOETH). En cas de non-respect, l'employeur verse une contribution à l'AGEFIPH (secteur privé) ou au FIPHFP (secteur public). Cette contribution peut être réduite par des actions de formation, travaux adaptés, etc."},

{id:6978,prog:'LOURD',theme:'Droit social',d:2,
e:"Le congé sabbatique dans les transports routiers peut être accordé aux salariés justifiant :",
r:[{t:"5 ans d'ancienneté"},{t:"36 mois d'ancienneté dans l'entreprise et 6 ans d'activité professionnelle totale",ok:true},{t:"10 ans d'ancienneté"},{t:"Tout salarié peut en bénéficier"}],
x:"Le congé sabbatique (art. L.3142-28 du Code du travail) est d'une durée de 6 à 11 mois, non rémunéré. Il est accessible aux salariés justifiant d'au moins 36 mois d'ancienneté dans l'entreprise ET 6 ans d'activité professionnelle totale. L'employeur peut le refuser ou le différer sous conditions."},

{id:6979,prog:'LOURD',theme:'Droit social',d:1,
e:"Le préavis de licenciement d'un conducteur PL avec 3 ans d'ancienneté est de :",
r:[{t:"1 mois"},{t:"2 mois",ok:true},{t:"3 mois"},{t:"6 mois"}],
x:"Selon la CCNTR, le préavis de licenciement varie selon l'ancienneté et la catégorie : pour les ouvriers (conducteurs PL), il est généralement de 1 mois pour moins de 2 ans, 2 mois entre 2 et 10 ans, et 3 mois au-delà. Des durées plus favorables peuvent être prévues contractuellement."},

{id:6980,prog:'LOURD',theme:'Droit social',d:2,
e:"Le droit à la formation professionnelle en cas de licenciement économique se traduit par :",
r:[{t:"Aucun droit supplémentaire par rapport au droit commun"},{t:"Le Congé de Reclassement (> 1 000 salariés) ou le Contrat de Sécurisation Professionnelle (< 1 000 salariés)",ok:true},{t:"Une prime de licenciement majorée"},{t:"Un an de salaire maintenu"}],
x:"En cas de licenciement économique, les salariés bénéficient : dans les entreprises ≥ 1 000 salariés du congé de reclassement (formation, bilan de compétences, maintien du salaire) ; dans les entreprises < 1 000 salariés du CSP (Contrat de Sécurisation Professionnelle, géré par France Travail). Ces dispositifs visent à favoriser le reclassement rapide."},

{id:6981,prog:'LOURD',theme:'Droit social',d:3,
e:"L'index d'égalité professionnelle femmes-hommes est obligatoire pour les entreprises de :",
r:[{t:"10 salariés"},{t:"50 salariés et plus",ok:true},{t:"250 salariés et plus"},{t:"Toutes les entreprises"}],
x:"L'index d'égalité professionnelle (créé par la loi Avenir Professionnel de 2018) est obligatoire pour les entreprises de 50 salariés et plus. Il calcule une note sur 100 basée sur 5 indicateurs (écarts de rémunération, d'augmentations, de promotions, retours de congé maternité, parité dans les 10 plus hautes rémunérations). Les entreprises < 75/100 doivent prendre des mesures correctives."},

{id:6982,prog:'LOURD',theme:'Droit social',d:2,
e:"La visite médicale de reprise après un arrêt de maladie de plus de 30 jours est :",
r:[{t:"Facultative"},{t:"Obligatoire avant ou au plus tard dans les 8 jours suivant le retour",ok:true},{t:"Obligatoire uniquement pour les arrêts > 60 jours"},{t:"À la charge du salarié uniquement"}],
x:"La visite médicale de reprise est obligatoire auprès du médecin du travail après tout arrêt de travail de plus de 30 jours (pour maladie ou accident non professionnel) ou de plus de 60 jours (pour accident du travail). Elle doit avoir lieu dans les 8 jours suivant la reprise. Elle vise à vérifier l'aptitude et à proposer des aménagements de poste si nécessaire."},

{id:6983,prog:'LOURD',theme:'Droit social',d:1,
e:"Le minimum conventionnel pour les heures supplémentaires des conducteurs PL (25ème à 43ème heure) est majoré de :",
r:[{t:"10 %"},{t:"25 %",ok:true},{t:"50 %"},{t:"100 %"}],
x:"Selon le Code du travail et la CCNTR, les 8 premières heures supplémentaires (36ème à 43ème heure) sont majorées à 25 % minimum. Les heures au-delà de la 43ème sont majorées à 50 %. Ces taux sont des minima légaux — les conventions collectives ou accords d'entreprise peuvent prévoir des taux plus favorables."},

{id:6984,prog:'LOURD',theme:'Droit social',d:2,
e:"Le congé pour accident du travail maintient le salaire à :",
r:[{t:"50 % du salaire"},{t:"60 % les 28 premiers jours puis 80 % (IJ CPAM) + complément employeur selon la CCN",ok:true},{t:"100 % systématiquement"},{t:"0 € (uniquement les IJ)"}],
x:"Pour un AT, la CPAM verse des IJ : 60 % du salaire journalier de référence les 28 premiers jours, puis 80 % à partir du 29ème jour. La CCN transports routiers et les accords d'entreprise peuvent prévoir un complément employeur pour maintenir le salaire à 100 % pendant une période définie. La règle du 3ème jour de carence ne s'applique pas pour les AT."},

{id:6985,prog:'LOURD',theme:'Droit social',d:3,
e:"Le fait pour un employeur d'obliger un conducteur PL à violer les temps de conduite constitue :",
r:[{t:"Une simple irrégularité administrative"},{t:"Une mise en danger de la vie d'autrui, passible de poursuites pénales",ok:true},{t:"Uniquement une sanction DREAL"},{t:"Un motif légitime en cas d'urgence"}],
x:"Contraindre un conducteur à dépasser les temps de conduite ou à ne pas respecter les repos constitue une mise en danger délibérée d'autrui (art. 223-1 du Code pénal) passible d'1 an d'emprisonnement et 15 000 € d'amende. L'employeur peut aussi être poursuivi pour complicité des infractions du conducteur. En cas d'accident, la responsabilité pénale de l'employeur est systématiquement recherchée."},

{id:6986,prog:'LOURD',theme:'Droit social',d:2,
e:"La portabilité prévoyance-santé pour un conducteur PL licencié dure :",
r:[{t:"6 mois"},{t:"Jusqu'à 12 mois (durée du chômage dans la limite de la durée d'affiliation)",ok:true},{t:"3 mois"},{t:"Indéfiniment"}],
x:"La portabilité de la prévoyance et mutuelle (art. L.911-8 CSS) permet à l'ancien salarié de conserver ses garanties gratuitement pendant le chômage, dans la limite de 12 mois et dans la limite de la durée de son affiliation au régime. La condition : rupture non fautive (licenciement, rupture conventionnelle, fin de CDD). Le financement est mutualisé entre actifs et anciens salariés."},

{id:6987,prog:'LOURD',theme:'Droit social',d:1,
e:"Le compte épargne-temps (CET) dans les transports peut être utilisé pour :",
r:[{t:"Uniquement financer sa retraite"},{t:"Financer un congé, compléter la retraite ou être monétisé selon l'accord instaurant le CET",ok:true},{t:"Acheter des jours de formation"},{t:"Uniquement pour les formations qualifiantes"}],
x:"Le CET (art. L.3151-1 du Code du travail) est alimenté par des jours de repos ou des éléments de rémunération. Il peut être utilisé : pour financer des congés (sabbatique, parental, création d'entreprise…), alimenter un PER (plan d'épargne retraite), ou être monétisé (converti en salaire) selon les modalités de l'accord d'entreprise qui l'a instauré."},

{id:6988,prog:'LOURD',theme:'Droit social',d:2,
e:"Le délai de réponse de l'employeur à une demande de formation CPF du salarié est de :",
r:[{t:"30 jours"},{t:"30 jours calendaires (accordé si pas de réponse dans ce délai)",ok:true},{t:"15 jours"},{t:"3 mois"}],
x:"L'employeur dispose de 30 jours calendaires pour répondre à une demande CPF du salarié. Si aucune réponse n'est donnée dans ce délai, l'accord est présumé (accord implicite). Ce délai peut être différent pour les formations longues ou celles nécessitant un accord de financement de l'OPCO."},

{id:6989,prog:'LOURD',theme:'Droit social',d:3,
e:"La convention de forfait heures (annuel ou mensuel) pour les cadres conducteurs :",
r:[{t:"S'applique automatiquement"},{t:"Doit être prévue par accord collectif et stipulée dans le contrat de travail",ok:true},{t:"Est interdite dans les transports"},{t:"S'applique à tous les conducteurs autonomes"}],
x:"Une convention de forfait (en heures ou en jours) doit être prévue par un accord collectif (convention ou accord de branche, accord d'entreprise) ET stipulée dans le contrat de travail ou par avenant signé. Pour les forfaits annuels en jours (cadres autonomes), des garanties obligatoires s'appliquent (entretiens annuels, suivi de charge de travail)."},

{id:6990,prog:'LOURD',theme:'Droit social',d:2,
e:"La subrogation de salaire en cas d'arrêt maladie permet à l'employeur de :",
r:[{t:"Ne pas verser de salaire"},{t:"Percevoir directement les IJ de la CPAM et maintenir le salaire complet au salarié",ok:true},{t:"Doubler les IJ du salarié"},{t:"Retarder le paiement du salaire de 30 jours"}],
x:"La subrogation (possible si accord collectif ou contrat) permet à l'employeur de percevoir directement les IJ versées par la CPAM en lieu et place du salarié, tout en maintenant le salaire complet au salarié. Simplifie les démarches du salarié et améliore sa trésorerie pendant l'arrêt. L'employeur reverse ensuite les IJ à la CPAM."},

{id:6991,prog:'LOURD',theme:'Droit social',d:1,
e:"Le repos compensateur obligatoire (RCO) est dû quand les heures supplémentaires dépassent :",
r:[{t:"35 heures/semaine"},{t:"Le contingent conventionnel ou légal d'heures supplémentaires",ok:true},{t:"10 heures supplémentaires dans la semaine"},{t:"5 heures supplémentaires par mois"}],
x:"Le repos compensateur obligatoire est dû pour toute heure supplémentaire accomplie au-delà du contingent conventionnel (195h en transport routier) ou légal (220h). Son taux est de 100 % pour les entreprises de + de 20 salariés et 50 % pour les entreprises de ≤ 20 salariés. Il s'ajoute aux majorations de salaire dues."},

{id:6992,prog:'LOURD',theme:'Droit social',d:2,
e:"L'obligation de reclassement préalable au licenciement économique impose à l'employeur de :",
r:[{t:"Proposer uniquement des postes en France"},{t:"Proposer des postes disponibles dans l'entreprise, y compris dans les filiales du groupe à l'étranger",ok:true},{t:"Rechercher des postes uniquement au même niveau"},{t:"Ne s'applique pas si 5 licenciements ou moins"}],
x:"Avant tout licenciement économique, l'employeur doit rechercher et proposer tous les postes disponibles dans l'entreprise ET dans les entreprises du groupe situées sur le territoire national. Depuis 2017, l'obligation ne s'étend plus aux filiales étrangères (sauf si le salarié a demandé à recevoir des offres à l'étranger). Le reclassement doit être sérieux et personnalisé."},

{id:6993,prog:'LOURD',theme:'Droit social',d:3,
e:"La grille conventionnelle des coefficients (CCNTR) classe les conducteurs PL de :",
r:[{t:"1 à 5 niveaux"},{t:"100M à 150V avec sous-groupes selon le véhicule et le type de transport",ok:true},{t:"A à E selon la taille de l'entreprise"},{t:"Conducteur junior à conducteur senior uniquement"}],
x:"La CCNTR classe les conducteurs PL selon des coefficients qui déterminent les salaires minimaux conventionnels : 100M (VL/messagerie légère), 110V (fourgon), 118V (porteur), 128V (porteur > 19t), 138M (tracteur routier), 150M (grande routier, international, longue distance). Ces coefficients sont distincts selon les activités (Transport Routier de Marchandises vs déménagement vs transport sanitaire…)."},

{id:6994,prog:'LOURD',theme:'Droit social',d:2,
e:"La sanction maximale d'un avertissement disciplinaire a pour effet :",
r:[{t:"La perte d'un mois de salaire"},{t:"Une mention dans le dossier professionnel et une base possible pour une sanction ultérieure plus grave",ok:true},{t:"La suspension immédiate du permis"},{t:"L'impossibilité de bénéficier d'augmentations pendant 1 an"}],
x:"L'avertissement est une sanction disciplinaire légère (la plus légère dans l'échelle disciplinaire). Il est mentionné dans le dossier du salarié. Si le même comportement se reproduit, l'employeur peut invoquer la persistance de la faute pour prononcer une sanction plus sévère (mise à pied, mutation, licenciement). L'avertissement n'a aucune incidence financière directe."},

{id:6995,prog:'LOURD',theme:'Droit social',d:1,
e:"Le principe de non-discrimination à l'embauche interdit de se fonder sur :",
r:[{t:"Les diplômes du candidat"},{t:"Le sexe, l'âge, l'origine, la religion, le handicap et 25 autres critères protégés par la loi",ok:true},{t:"L'expérience professionnelle"},{t:"Les préférences géographiques"}],
x:"L'art. L.1132-1 du Code du travail interdit toute discrimination basée sur 27 critères : origine, sexe, mœurs, orientation sexuelle, identité de genre, âge, état de santé, handicap, opinions politiques, activités syndicales, religion, grossesse, état civil, nom de famille, lieu de résidence, domiciliation bancaire, etc. La discrimination à l'embauche est un délit pénal."},

// — RÉGLEMENTATION PL suite (35q) —
{id:6996,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"La limitation de vitesse d'un PL de PTAC > 3,5t sur route à double voie hors agglomération est de :",
r:[{t:"90 km/h"},{t:"80 km/h",ok:true},{t:"70 km/h"},{t:"110 km/h"}],
x:"Les PL de PTAC > 3,5t sont limités à 80 km/h sur les routes à double voie sans séparateur central (routes nationales et départementales hors agglomération). Cette limitation est inférieure à celle des voitures particulières (80 km/h pour tous depuis 2018). Sur les autoroutes et voies express à 2×2 voies, les PL sont limités à 90 km/h."},

{id:6997,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"L'ecocombustion (convoi écologique) en France permet des ensembles jusqu'à :",
r:[{t:"44 tonnes"},{t:"44 tonnes (limite légale standard) — les 48t sont réservées aux transports bois ronds",ok:true},{t:"60 tonnes"},{t:"52 tonnes en zone rurale"}],
x:"La limite de poids totale en France pour un ensemble articulé standard est de 44 tonnes (pour les configurations 5 essieux) ou 40 tonnes (4 essieux). Des dérogations à 48 tonnes existent pour les transports de bois ronds. Les convois de 25,25 m (LHV) testés dans certains pays scandinaves ne sont pas autorisés en France."},

{id:6998,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Le limiteur de vitesse obligatoire sur les PL neufs est réglé à :",
r:[{t:"80 km/h"},{t:"90 km/h",ok:true},{t:"100 km/h"},{t:"110 km/h"}],
x:"La directive 92/6/CEE (modifiée par la directive 2002/85/CE) impose l'installation de limiteurs de vitesse sur les PL de PTAC > 3,5t. Les PL de PTAC > 12t sont limités à 90 km/h, les bus et autocars à 100 km/h. Ces limiteurs doivent être plombés et conformes à la norme ECE R89."},

{id:6999,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"La visite technique annuelle obligatoire d'un PL doit être réalisée :",
r:[{t:"Tous les 2 ans"},{t:"Chaque année",ok:true},{t:"Tous les 6 mois"},{t:"Tous les 3 ans"}],
x:"Les PL et remorques de PTAC > 3,5t sont soumis à une visite technique annuelle obligatoire dans un centre agréé. En cas de contre-visite (défaut détecté), le véhicule doit être remis en conformité dans un délai imparti. L'absence de CT valide peut entraîner l'immobilisation du véhicule par les forces de l'ordre."},

{id:7000,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"La vignette Crit'Air classe les PL de :",
r:[{t:"Crit'Air 1 à 3 uniquement"},{t:"Crit'Air 1 (Euro 6) à Crit'Air 5 (Euro 2) + non classé (avant Euro 1)",ok:true},{t:"Crit'Air 3 à 5 uniquement pour les PL"},{t:"Les PL ne sont pas concernés"}],
x:"Les PL sont classés de Crit'Air 1 (norme Euro 6, le moins polluant) à Crit'Air 5 (norme Euro 2) et non classé (avant Euro 1 ou normes antérieures). Les ZFE-m interdisent l'accès aux véhicules les plus polluants selon le calendrier local. Les PL Euro 5 = Crit'Air 2, Euro 4 = Crit'Air 3, Euro 3 = Crit'Air 4."},

{id:7001,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Les restrictions de circulation dominicale pour les PL s'appliquent généralement de :",
r:[{t:"0h à 24h le dimanche"},{t:"22h du samedi à 22h le dimanche (avec variations selon les saisons)",ok:true},{t:"8h à 20h le dimanche"},{t:"Il n'y a plus de restriction dominicale"}],
x:"Les restrictions de circulation pour les PL de PTAC > 7,5t s'appliquent le dimanche de 22h la veille à 22h le soir du dimanche (circulaire annuelle). Des restrictions supplémentaires s'appliquent les samedis de juillet-août et les jours fériés. De nombreuses dérogations existent (denrées périssables, carburant, journaux…)."},

{id:7002,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"Le protocole de sécurité pour les opérations de chargement/déchargement doit être établi entre :",
r:[{t:"Uniquement le conducteur et l'entrepôt"},{t:"L'entreprise d'accueil et l'entreprise de transport, avant toute opération",ok:true},{t:"Le conducteur et son employeur uniquement"},{t:"La DREAL et l'entreprise"}],
x:"L'arrêté du 26 avril 1996 et l'art. R.4515-1 du Code du travail imposent qu'un protocole de sécurité soit établi entre l'entreprise d'accueil (lieu de chargement/déchargement) et l'entreprise de transport avant toute opération. Il définit les zones d'évolution, les règles de sécurité, les procédures d'urgence et les EPI requis."},

{id:7003,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Le transport de déchets dangereux nécessite :",
r:[{t:"Uniquement un contrat de transport"},{t:"Un agrément spécifique pour le transport de déchets dangereux + documents de suivi (BSDD)",ok:true},{t:"Uniquement un véhicule fermé"},{t:"Aucune réglementation spécifique"}],
x:"Le transport de déchets dangereux est soumis à la réglementation ADR (si déchets classés matières dangereuses) ET à la réglementation sur les déchets (Code de l'environnement) : agrément préfectoral pour le transporteur de déchets dangereux, Bordereau de Suivi des Déchets Dangereux (BSDD) obligatoire pour tracer les déchets de leur producteur à leur élimination."},

{id:7004,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"Le délai de prescription des infractions routières pour les PL est de :",
r:[{t:"1 an"},{t:"3 ans (délai de prescription de droit commun des contraventions/délits)",ok:true},{t:"5 ans"},{t:"6 mois"}],
x:"Les infractions au Code de la route sont des contraventions (prescription de 1 an) ou des délits (prescription de 6 ans depuis 2017). Les infractions sociales (règlement 561/2006) peuvent faire l'objet de poursuites jusqu'à 3 ans. Pour les entreprises de transport, les infractions constatées lors des contrôles peuvent être relevées plusieurs mois après les faits via l'analyse des données tachygraphiques."},

{id:7005,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"La réglementation sur le lavage des citernes (dégazage) impose :",
r:[{t:"Uniquement le rinçage à l'eau"},{t:"Des procédures spécifiques selon les produits transportés, avec des ateliers agréés pour les produits dangereux",ok:true},{t:"Uniquement un séchage à l'air"},{t:"Aucune procédure réglementée"}],
x:"Le nettoyage et dégazage des citernes ayant transporté des matières dangereuses (carburants, produits chimiques…) doit être effectué dans des installations agréées. Un certificat de dégazage/nettoyage est délivré, attestant que la citerne peut être réutilisée ou réparée en toute sécurité. Ce certificat est requis par les garages pour les travaux sur citernes."},

{id:7006,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"Le contrôle technique renforcé (CTR) pour les PL de PTAC > 7,5t inclut :",
r:[{t:"Uniquement les freins et la direction"},{t:"Un contrôle complet incluant dynamique de freinage, émissions, électronique, structure, étanchéité",ok:true},{t:"Uniquement la vérification documentaire"},{t:"Uniquement le tachygraphe"}],
x:"Le contrôle technique des PL (PTAC > 3,5t) est plus complet que celui des VL. Il comprend : contrôle dynamique des freins (sur banc à rouleaux), vérification de l'électronique embarquée (OBD), contrôle des émissions (opacité des fumées), inspection de la structure (châssis, carrosserie), étanchéité des circuits de freinage et hydraulique, éclairage et signalisation, direction et pneumatiques."},

{id:7007,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"La licence communautaire de transport (LC) permet à un transporteur établi dans un pays UE de :",
r:[{t:"Circuler librement dans toute l'UE sans restriction"},{t:"Effectuer des transports internationaux entre États membres et du cabotage limité",ok:true},{t:"Circuler également hors UE"},{t:"Transporter des passagers"}],
x:"La licence communautaire (délivrée pour 10 ans par l'autorité compétente du pays d'établissement) autorise les transports internationaux de marchandises entre États membres de l'UE. Une copie certifiée conforme doit être à bord. Le cabotage (transports internes dans un autre État membre) est limité à 3 opérations en 7 jours après un transport international entrant."},

{id:7008,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"Le passage dans un tunnel routier d'un PL transportant des MD peut être restreint selon :",
r:[{t:"La couleur du camion"},{t:"Le code tunnel ADR associé à la matière (catégories A à E)",ok:true},{t:"La date de mise en circulation du PL"},{t:"La heure de passage"}],
x:"Les tunnels sont classés de A (aucune restriction) à E (très stricte). La colonne 15 du tableau A de l'ADR indique le code tunnel de chaque matière. Le gestionnaire du tunnel affiche les restrictions applicables. Le conducteur doit vérifier la compatibilité avant d'entrer dans un tunnel avec une cargaison dangereuse."},

{id:7009,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Le transport de matières vivantes (poissons en aquaculture) nécessite :",
r:[{t:"Aucune réglementation spécifique"},{t:"Agrément vétérinaire, conditions de transport adaptées (eau oxygénée, température) et documents sanitaires",ok:true},{t:"Uniquement un véhicule réfrigéré"},{t:"Un permis spécial préfectoral"}],
x:"Le transport de poissons vivants est réglementé par le règlement CE 1/2005 sur la protection des animaux. Le transporteur doit : être agréé par les services vétérinaires, disposer de véhicules équipés (systèmes d'oxygénation, filtration, contrôle de température), avoir des conducteurs formés, et disposer des documents d'accompagnement sanitaires requis."},

{id:7010,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"L'obligation de formation à la sécurité pour les conducteurs PL (habilitation électrique, CACES…) est :",
r:[{t:"Facultative"},{t:"À la charge de l'employeur selon les risques identifiés dans le DUER",ok:true},{t:"À la charge du conducteur"},{t:"Uniquement requise dans les grandes entreprises"}],
x:"L'employeur a l'obligation de former ses salariés à la sécurité en rapport avec les risques identifiés dans le DUER. Pour les conducteurs PL : habilitation électrique si manipulation de véhicules électriques/hybrides, CACES selon les engins manipulés (hayons, chariots embarqués), formation gestes et postures, formation au risque chimique si applicable."},

{id:7011,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Un PL équipé d'un hayon élévateur doit faire vérifier ce dernier :",
r:[{t:"Tous les 5 ans"},{t:"Au minimum annuellement par un technicien qualifié",ok:true},{t:"Uniquement lors de la visite technique"},{t:"Uniquement si une avarie est constatée"}],
x:"Les hayons élévateurs doivent faire l'objet d'une vérification annuelle (au minimum) par un technicien qualifié, conformément à l'arrêté du 1er mars 2004. Un registre de vérification doit être tenu. En cas de défaut, le hayon doit être condamné jusqu'à réparation. Les hayons sont des équipements présentant des risques importants d'accident (écrasement, chute de charge)."},

{id:7012,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"Le principe de responsabilité partagée dans la chaîne logistique ('donneur d'ordre') s'applique notamment pour :",
r:[{t:"La seule responsabilité civile"},{t:"La responsabilité pénale et civile des infractions sociales causées par les conditions imposées",ok:true},{t:"Uniquement les infractions ADR"},{t:"Uniquement les accidents corporels"}],
x:"Le règlement 561/2006 et la loi française (art. L.3315-4 du Code des transports) établissent la responsabilité des chargeurs, commissionnaires et autres acteurs qui ont ordonné ou provoqué des infractions aux règles de temps de conduite. Si un délai de livraison impossible a contraint le conducteur à dépasser ses temps, le donneur d'ordre peut être poursuivi."},

{id:7013,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Le SIPSI (Système d'Information sur les Prestations de Services Internationaux) est utilisé pour :",
r:[{t:"Immatriculer les véhicules étrangers"},{t:"Les déclarations de détachement de travailleurs en France par des employeurs étrangers",ok:true},{t:"Contrôler les temps de conduite à distance"},{t:"Vérifier les licences de transport"}],
x:"Le portail SIPSI (géré par le Ministère du Travail) est la plateforme de déclaration préalable de détachement de travailleurs. Tout employeur établi hors de France détachant un salarié en France (pour du cabotage, du transport bilatéral…) doit effectuer cette déclaration avant le début de la prestation. L'attestation de détachement doit être à bord du véhicule."},

{id:7014,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"Les normes Euro pour les moteurs PL (Euro 7 en cours) visent principalement à réduire :",
r:[{t:"La consommation de carburant"},{t:"Les émissions de NOx et de particules fines (PM10 et PM2,5)",ok:true},{t:"Le niveau sonore des véhicules"},{t:"La consommation d'huile moteur"}],
x:"Les normes Euro fixent des limites d'émissions polluantes pour les moteurs thermiques. Euro 7 (entrée en vigueur progressive 2026-2028) vise des réductions drastiques de NOx (oxydes d'azote, précurseurs de l'ozone et des particules secondaires) et de PM (particules fines, responsables de maladies respiratoires). Les normes Euro s'appliquent aux véhicules neufs lors de leur homologation."},

{id:7015,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Le poids total autorisé en charge (PTAC) d'un tracteur routier seul (sans semi-remorque) est généralement de :",
r:[{t:"18 tonnes"},{t:"19 tonnes",ok:true},{t:"26 tonnes"},{t:"40 tonnes"}],
x:"Un tracteur routier 3 essieux a un PTAC maximum de 26 tonnes. Mais en pratique, la limite réglementaire par configuration d'essieux fixe le PTAC dans la carte grise. Pour un tracteur 2 essieux courant, le PTAC est de 18-19 tonnes. Le PTAC du tracteur seul est distinct du PTRA (Poids Total Roulant Autorisé) de l'ensemble tracteur + semi-remorque."},

{id:7016,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"La lettre de voiture nationale (LVN) en France doit accompagner :",
r:[{t:"Uniquement les transports > 1 tonne"},{t:"Tout transport de marchandises effectué à titre onéreux",ok:true},{t:"Uniquement les transports > 100 km"},{t:"Uniquement les transports ADR"}],
x:"La lettre de voiture nationale (LVN) est obligatoire pour tout transport de marchandises effectué à titre onéreux sur le territoire national. Elle doit accompagner la marchandise et mentionner : les parties (expéditeur, transporteur, destinataire), la nature et la quantité des marchandises, le lieu de chargement et de livraison. En l'absence de LVN, le conducteur peut être verbalisé."},

{id:7017,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"La réglementation sur les temps de conduite s'applique à partir de quel PTAC ?",
r:[{t:"3,5 tonnes"},{t:"3,5 tonnes (règlement 561/2006 étendu aux véhicules > 2,5t pour certains transports depuis 2024)",ok:true},{t:"7,5 tonnes"},{t:"12 tonnes"}],
x:"Le règlement 561/2006 s'applique aux véhicules de PTAC > 3,5t utilisés pour le transport de marchandises. Le paquet mobilité 2020 a prévu une extension progressive à certains véhicules entre 2,5t et 3,5t effectuant des transports internationaux. Des règles spécifiques existent aussi pour les véhicules entre 3,5t et 7,5t dans certains États membres."},

{id:7018,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"L'immobilisation d'un PL lors d'un contrôle DREAL peut être décidée si :",
r:[{t:"Le conducteur a plus de 3 heures de conduite sans pause"},{t:"Le conducteur a épuisé ses droits à conduite journalière, ou en cas de défaut grave de sécurité",ok:true},{t:"Le véhicule a plus de 10 ans"},{t:"La carte grise n'est pas présentée"}],
x:"Un PL peut être immobilisé par les forces de l'ordre ou les agents de contrôle DREAL si : le conducteur a atteint sa limite de conduite journalière ou bihebdomadaire, le tachygraphe est défectueux ou absent, le véhicule présente un défaut grave de sécurité mécanique, la surcharge dépasse les seuils légaux, ou les documents obligatoires sont absents."},

{id:7019,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Le système de contrôle de la pression des pneus (TPMS) est :",
r:[{t:"Interdit sur les PL"},{t:"Obligatoire sur les PL neufs de PTAC > 3,5t depuis 2022 (règlement UE 2019/2144)",ok:true},{t:"Facultatif et non réglementé"},{t:"Obligatoire uniquement sur les citernes"}],
x:"Le règlement UE 2019/2144 (GSR II) rend obligatoires de nombreux systèmes de sécurité sur les véhicules neufs homologués après le 6 juillet 2022, dont le TPMS (Tire Pressure Monitoring System) pour détecter les sous-gonflages. La sous-pression des pneus est une cause fréquente d'accidents PL (éclatement, perte de contrôle)."},

{id:7020,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"La visite d'aptitude médicale pour conduire un PL professionnel est réalisée par :",
r:[{t:"Le médecin du travail"},{t:"Un médecin agréé par la Préfecture",ok:true},{t:"N'importe quel médecin généraliste"},{t:"Le médecin de la CPAM"}],
x:"L'aptitude médicale professionnelle à la conduite d'un PL est constatée par un médecin agréé par la Préfecture (liste des médecins agréés par département). Ce n'est pas le médecin du travail, ni le médecin traitant. La visite porte sur la vision, l'audition, les capacités cognitives et motrices, et l'absence de pathologies incompatibles."},

{id:7021,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Le taux d'alcool maximum légal pour un conducteur PL en France est de :",
r:[{t:"0,5 g/L"},{t:"0,5 g/L dans le sang (contravention) et 0,8 g/L (délit), identique aux conducteurs de VP",ok:true},{t:"0,2 g/L spécifique aux professionnels"},{t:"0 g/L (tolérance zéro)"}],
x:"Il n'existe pas en France de taux légal spécifique plus restrictif pour les conducteurs professionnels PL (contrairement à certains pays). Le taux légal est de 0,5 g/L dans le sang pour tous (contravention) et 0,8 g/L (délit). Cependant, certaines conventions collectives prévoient une clause de tolérance zéro pour les conducteurs en mission."},

{id:7022,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"Le pont-bascule pour contrôler le poids des PL peut être utilisé par :",
r:[{t:"Uniquement la police nationale"},{t:"La police, la gendarmerie, les agents des douanes et les agents de la DREAL",ok:true},{t:"Uniquement les agents de la DREAL"},{t:"Uniquement les douanes"}],
x:"Le contrôle du poids des PL peut être effectué par : la police nationale et la gendarmerie (contrôle routier général), les agents des douanes (contrôle des marchandises), et les agents assermentés de la DREAL (contrôle spécialisé du transport). Des scanners dynamiques de pesage permettent des contrôles sans arrêt des véhicules."},

{id:7023,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Le transport pour compte propre (TCP) se distingue du transport pour compte d'autrui (TCA) car :",
r:[{t:"Le TCP ne nécessite aucune réglementation"},{t:"Dans le TCP, le transporteur et le propriétaire de la marchandise sont la même entité économique",ok:true},{t:"Le TCP est exempté de la réglementation sociale"},{t:"Le TCP est réservé aux grandes entreprises"}],
x:"Le transport pour compte propre (TCP) est effectué par une entreprise pour ses propres besoins, avec ses propres véhicules et conducteurs salariés. Le TCP est exempté de l'obligation de licence de transport mais doit respecter les règles sociales (tachygraphe, temps de conduite), techniques et de sécurité. Il n'est pas autorisé à transporter des marchandises de tiers."},

{id:7024,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"La charge maximale par essieu sur les routes françaises pour un essieu simple est de :",
r:[{t:"8 tonnes"},{t:"13 tonnes",ok:true},{t:"18 tonnes"},{t:"20 tonnes"}],
x:"La charge maximale par essieu en France : essieu simple = 13 tonnes (ou 11,5t pour certains essieux directeurs), tandem (deux essieux) = 20t, tridem (3 essieux) = 24t. Ces limites visent à protéger le réseau routier de la dégradation prématurée. Le dépassement de ces charges est sanctionné et peut être interdit sur certains tronçons."},

{id:7025,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Le règlement européen 1071/2009 impose à l'entreprise de transport de disposer d'un :",
r:[{t:"Parking sécurisé uniquement"},{t:"Établissement stable avec locaux, gestion administrative adaptée et véhicules dans l'État d'établissement",ok:true},{t:"Capital social minimum de 50 000 €"},{t:"Comptable agréé exclusivement"}],
x:"Le règlement 1071/2009 fixe trois conditions d'accès à la profession : établissement stable dans un État membre (locaux, documents, véhicules disponibles), honorabilité professionnelle (gestionnaire sans condamnations incompatibles), et capacité financière (fonds propres ou garanties). Ces trois conditions doivent être satisfaites en permanence."},

{id:7026,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"Le plan de déplacement d'entreprise (PDE) dans une PME de transport vise à :",
r:[{t:"Planifier les tournées de livraison"},{t:"Réduire les déplacements en voiture individuelle des salariés domicile-travail en favorisant les alternatives",ok:true},{t:"Optimiser les itinéraires des PL"},{t:"Gérer les congés des conducteurs"}],
x:"Le PDE (ou PDMe pour les PME) est une démarche volontaire visant à optimiser les déplacements des salariés entre leur domicile et leur lieu de travail : covoiturage, transport en commun, vélo, télétravail. Il peut donner accès au Forfait Mobilités Durables (FMD). Pour une entreprise de transport, c'est distinct de l'optimisation des tournées de livraison."},

{id:7027,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"La responsabilité environnementale du transporteur en cas de déversement de produits dangereux :",
r:[{t:"Est limitée aux dommages corporels"},{t:"Peut engager sa responsabilité civile et pénale pour atteinte à l'environnement",ok:true},{t:"N'existe pas si la cause est un accident"},{t:"Est couverte automatiquement par l'assurance RC"}],
x:"En cas de déversement de matières dangereuses (hydrocarbures, produits chimiques…), le transporteur peut être tenu responsable des dommages environnementaux (pollution des eaux, des sols) en vertu du Code de l'environnement et du principe pollueur-payeur. L'assurance RC professionnelle couvre une partie des dommages mais peut avoir des exclusions. Une assurance environnementale spécifique est recommandée."},

{id:7028,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"Le disque de limitation de vitesse (80 km/h) était obligatoire pour certains PL. Depuis 2011 :",
r:[{t:"Il est toujours obligatoire"},{t:"Il est remplacé par le limiteur de vitesse électronique obligatoire",ok:true},{t:"Il est devenu facultatif"},{t:"Il est obligatoire uniquement hors agglomération"}],
x:"Le disque de limitation de vitesse (80 km/h, rond blanc avec chiffre) était autrefois obligatoire à l'arrière des PL sans limiteur électronique. Depuis l'obligation du limiteur de vitesse électronique (90 km/h) sur tous les PL en circulation, le disque manuel n'est plus nécessaire. La limitation de vitesse reste en vigueur mais est assurée par le limiteur."},

{id:7029,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Les bâches de protection (bâchage de benne) pour les PL transportant des matériaux en vrac sont obligatoires :",
r:[{t:"Uniquement pour les matières dangereuses"},{t:"Pour tout chargement susceptible d'être dispersé ou de tomber sur la voie publique",ok:true},{t:"Uniquement sur autoroute"},{t:"Uniquement si le chargement dépasse les ridelles"}],
x:"Le bâchage des chargements en vrac (graviers, sable, ordures, déchets de chantier…) est obligatoire pour éviter la chute ou la dispersion de matières sur la chaussée, qui constituerait un danger pour les autres usagers et un délit d'abandon de déchets. L'absence de bâchage est sanctionnée (amende) et engage la responsabilité civile et pénale du conducteur/employeur."},

{id:7030,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"Le transport de fonds et valeurs avec un PL blindé est soumis à :",
r:[{t:"Uniquement la réglementation du transport de marchandises"},{t:"La loi du 12 juillet 1983 sur le transport de fonds, valeurs et bijoux + réglementation TFV spécifique",ok:true},{t:"Uniquement la réglementation ADR"},{t:"Aucune réglementation spécifique au-delà des PL normaux"}],
x:"Le transport de fonds, billets de banque et valeurs est réglementé par la loi du 12 juillet 1983 : autorisation préfectorale de l'entreprise, agrément des agents de transport de fonds, véhicules homologués, protocoles de sécurité stricts. Cette réglementation TFV (Transport de Fonds et Valeurs) est très contraignante et nécessite une formation spécifique des salariés."},
// ── CPC LOURD ─────────────────────────────────────
{id:7031,prog:'LOURD',theme:'Droit civil & commercial PL',d:1,
e:"La lettre de voiture nationale (LVN) est obligatoire pour :",
r:[{t:"Uniquement les transports > 3,5t"},{t:"Tout transport de marchandises effectué à titre onéreux en France",ok:true},{t:"Uniquement les transports > 100 km"},{t:"Uniquement les transports ADR"}],
x:"La LVN est obligatoire pour tout transport de marchandises à titre onéreux sur le territoire national, quelle que soit la distance ou la nature de la marchandise. Elle matérialise le contrat de transport et permet de déterminer les responsabilités en cas de litige."},

{id:7032,prog:'LOURD',theme:'Droit civil & commercial PL',d:2,
e:"Le droit de rétention du transporteur s'exerce :",
r:[{t:"À tout moment, même après livraison"},{t:"Tant que la marchandise est en sa possession et que le fret n'est pas payé",ok:true},{t:"Uniquement en cas de faillite du client"},{t:"Uniquement pour les transports > 10 000 €"}],
x:"Le transporteur peut exercer son droit de rétention sur la marchandise tant qu'elle est en sa possession et que sa créance (fret, frais, accessoires) n'est pas réglée. Une fois la marchandise livrée, ce droit disparaît. C'est une sûreté efficace pour garantir le paiement."},

{id:7033,prog:'LOURD',theme:'Droit civil & commercial PL',d:2,
e:"Le contrat type 'lot' dans le transport PL s'applique aux :",
r:[{t:"Envois inférieurs à 3 tonnes"},{t:"Chargements complets d'au moins 3 tonnes ou 3 mètres linéaires",ok:true},{t:"Tous les transports PL"},{t:"Transports de matières dangereuses uniquement"}],
x:"Le contrat type applicable en transport de lot (arrêté du 15 mars 1993 modifié) s'applique aux envois de 3 tonnes et plus ou occupant au moins 3 mètres linéaires du plancher d'un véhicule. Il fixe les délais de livraison, les plafonds d'indemnisation et les règles de réserves."},

{id:7034,prog:'LOURD',theme:'Droit civil & commercial PL',d:3,
e:"La responsabilité de plein droit du transporteur PL (sans faute à prouver) couvre :",
r:[{t:"Tous les dommages survenus pendant le transport"},{t:"Les pertes et avaries survenues entre la prise en charge et la livraison, sauf causes exonératoires",ok:true},{t:"Uniquement les accidents corporels"},{t:"Uniquement les dommages au véhicule"}],
x:"Le transporteur est présumé responsable des pertes et avaries survenant entre la prise en charge et la livraison (responsabilité de plein droit, art. L.133-1 du Code de commerce). Il peut s'exonérer en prouvant une cause étrangère (force majeure, vice propre de la marchandise, faute de l'expéditeur). Cette responsabilité est limitée aux plafonds légaux."},

{id:7035,prog:'LOURD',theme:'Droit civil & commercial PL',d:2,
e:"L'action récursoire du commissionnaire de transport contre son sous-traitant :",
r:[{t:"N'est pas possible en droit français"},{t:"Permet au commissionnaire d'exercer contre le sous-traitant les droits qu'il a indemnisés au client",ok:true},{t:"Oblige le commissionnaire à rembourser le sous-traitant"},{t:"Est limitée à 50 % du montant indemnisé"}],
x:"Après avoir indemnisé son client, le commissionnaire peut se retourner contre le transporteur sous-traitant défaillant via l'action récursoire. Il exerce les droits de son client contre le sous-traitant, en subrogation. Cette action est soumise aux mêmes délais de prescription que l'action directe."},

{id:7036,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"Le taux de remplissage d'un PL FTL mesure :",
r:[{t:"Le taux d'occupation des sièges"},{t:"Le rapport entre la charge réelle transportée et la capacité maximale du véhicule (poids ou volume)",ok:true},{t:"La durée d'utilisation journalière"},{t:"Le rapport km chargés / km totaux"}],
x:"Taux de remplissage = Charge réelle / Capacité maximale × 100. Un PL de 25t chargé à 20t = 80 % de taux de remplissage. Améliorer ce taux (chargement optimisé, groupage) réduit le coût par tonne transportée et améliore la rentabilité. Un taux < 70 % signale une sous-optimisation des tournées."},

{id:7037,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"La CAF (Capacité d'Autofinancement) permet principalement de :",
r:[{t:"Calculer la TVA à payer"},{t:"Rembourser les emprunts et financer de nouveaux investissements sans recourir à des capitaux extérieurs",ok:true},{t:"Calculer les cotisations sociales"},{t:"Mesurer la liquidité immédiate"}],
x:"CAF = Résultat net + Dotations amortissements et provisions - Reprises. Elle représente le flux interne de trésorerie généré par l'activité. Une CAF suffisante permet de rembourser les annuités d'emprunt, de financer une partie des nouveaux investissements et de constituer des réserves. Elle est l'indicateur clé de la santé financière d'un transporteur PL."},

{id:7038,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"Le ratio d'autonomie financière = Capitaux propres / Total bilan. Un ratio de 35 % pour un transporteur PL est :",
r:[{t:"Insuffisant"},{t:"Satisfaisant — dans la norme sectorielle (30-40 %)",ok:true},{t:"Excellent"},{t:"Indique une sous-capitalisation grave"}],
x:"Un ratio d'autonomie financière de 35 % est dans la norme pour le secteur transport routier. Les banques considèrent qu'un ratio ≥ 30 % est satisfaisant. En dessous de 20 %, l'entreprise est sous-capitalisée et dépend trop de ses créanciers. Au-delà de 50 %, l'entreprise pourrait optimiser son levier financier."},

{id:7039,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"Un transporteur PL réalise 1 500 000 € de CA avec un coeff. d'exploitation de 90 %. Son résultat avant IS est de :",
r:[{t:"90 000 €"},{t:"150 000 €",ok:true},{t:"1 350 000 €"},{t:"15 000 €"}],
x:"Résultat = CA × (1 - Coeff.) = 1 500 000 × 10 % = 150 000 €. Les charges totales = 1 500 000 × 90 % = 1 350 000 €. IS = 150 000 × 25 % = 37 500 €. Résultat net = 112 500 €."},

{id:7040,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"Le crédit-bail (leasing) d'un PL est comptabilisé :",
r:[{t:"Comme une location simple (charges uniquement)"},{t:"Selon les normes françaises : loyers en charges ; en IFRS : actif + dette au bilan",ok:true},{t:"Uniquement comme une immobilisation"},{t:"Identiquement à un emprunt bancaire"}],
x:"En normes comptables françaises (PCG), les loyers de crédit-bail sont des charges d'exploitation (pas d'immobilisation au bilan tant que l'option d'achat n'est pas levée). En normes IFRS (IFRS 16 depuis 2019), le bien loué est inscrit à l'actif et une dette de loyer est comptabilisée au passif. Cette différence impacte les ratios financiers."},

{id:7041,prog:'LOURD',theme:'Gestion financière PL',d:3,
e:"La VAN d'un investissement de 200 000 € générant 60 000 €/an pendant 5 ans, au taux d'actualisation de 8 %, est :",
r:[{t:"Positive (≈ 39 000 €)",ok:true},{t:"Négative"},{t:"Nulle"},{t:"Égale à 100 000 €"}],
x:"VAN = -200 000 + 60 000 × (1-(1,08)^-5)/0,08 = -200 000 + 60 000 × 3,993 = -200 000 + 239 570 ≈ +39 570 €. VAN positive → l'investissement crée de la valeur (rendement > coût du capital de 8 %). Il faut réaliser cet investissement."},

{id:7042,prog:'LOURD',theme:'Accès à la profession',d:1,
e:"La capacité financière pour une entreprise PL disposant de 5 véhicules de PTAC > 3,5t est de :",
r:[{t:"25 000 €"},{t:"29 000 €",ok:true},{t:"45 000 €"},{t:"9 000 €"}],
x:"Capacité financière PL : 9 000 € pour le 1er véhicule + 5 000 € par véhicule supplémentaire. Pour 5 véhicules : 9 000 + (4 × 5 000) = 9 000 + 20 000 = 29 000 €. Cette somme doit être prouvée par les fonds propres des derniers comptes ou une garantie bancaire."},

{id:7043,prog:'LOURD',theme:'Accès à la profession',d:2,
e:"La licence communautaire est exigée pour les transports internationaux de marchandises :",
r:[{t:"Dans tous les pays du monde"},{t:"Entre États membres de l'UE (et certains pays tiers via accords)",ok:true},{t:"Uniquement pour les PL > 20t"},{t:"Uniquement pour les transports ADR"}],
x:"La licence communautaire (règl. 1072/2009) autorise les transports de marchandises entre États membres de l'UE. Une copie certifiée conforme doit être à bord du véhicule. Pour les pays tiers non couverts par des accords spécifiques, d'autres autorisations peuvent être requises (bilatérales, contingents de passages)."},

{id:7044,prog:'LOURD',theme:'Accès à la profession',d:2,
e:"En cas de décès du gestionnaire PL, l'activité peut se poursuivre :",
r:[{t:"Indéfiniment sans désigner de remplaçant"},{t:"18 mois maximum sous réserve de désignation d'un gestionnaire temporaire accepté par l'autorité",ok:true},{t:"6 mois seulement"},{t:"Elle doit cesser immédiatement"}],
x:"En cas de décès, d'incapacité ou de départ du gestionnaire, l'autorité compétente peut autoriser la poursuite de l'activité pendant 18 mois avec un gestionnaire temporaire acceptable. Ce délai permet de trouver un nouveau gestionnaire qualifié ou de passer le CPC. À l'expiration, un gestionnaire satisfaisant aux conditions doit être nommé."},

{id:7045,prog:'LOURD',theme:'Accès à la profession',d:3,
e:"Le registre électronique national des entreprises de transport (RENT) est interconnecté avec :",
r:[{t:"Le registre du commerce uniquement"},{t:"L'ERRU (registre européen) permettant l'échange d'informations entre États membres de l'UE",ok:true},{t:"Interpol"},{t:"La base de données OTAN"}],
x:"Le RENT est la partie française de l'ERRU (European Register of Road Transport Undertakings). Les 27 registres nationaux sont interconnectés, permettant aux autorités de chaque État membre de consulter les informations sur les transporteurs des autres pays (infractions graves, pertes d'honorabilité, suspensions). Cela empêche un transporteur sanctionné dans un pays de s'établir dans un autre."},

{id:7046,prog:'LOURD',theme:'Transport international',d:1,
e:"La convention CMR s'applique au transport routier international de marchandises :",
r:[{t:"Uniquement en UE"},{t:"Entre deux pays dont au moins l'un est signataire, pour transport à titre onéreux",ok:true},{t:"Uniquement pour les PL > 20t"},{t:"Uniquement si déclarée dans le contrat"}],
x:"La CMR s'applique automatiquement (sans nécessité de clause spécifique) à tout transport routier de marchandises à titre onéreux entre deux pays dont au moins l'un est signataire. Elle régit la responsabilité du transporteur, les documents à établir et les limites d'indemnisation."},

{id:7047,prog:'LOURD',theme:'Transport international',d:2,
e:"L'Incoterm DDP (Delivered Duty Paid) est le plus favorable à l'acheteur car :",
r:[{t:"Le prix est le plus bas"},{t:"Le vendeur supporte tous les coûts et risques jusqu'à destination, y compris droits de douane d'import",ok:true},{t:"L'acheteur choisit le transporteur"},{t:"Il n'inclut pas la TVA"}],
x:"DDP est l'Incoterm le plus favorable à l'acheteur : le vendeur assume tous les coûts et risques du transport jusqu'au lieu de destination convenu, y compris le dédouanement à l'export ET à l'import et les droits de douane d'importation. C'est l'opposé de EXW (le moins favorable à l'acheteur)."},

{id:7048,prog:'LOURD',theme:'Transport international',d:2,
e:"Le taux de change CMR pour les indemnisations (DTS) est :",
r:[{t:"Fixe à 1,27 €"},{t:"Variable, publié quotidiennement par le FMI (environ 1,27-1,35 € en 2024)",ok:true},{t:"Fixé annuellement par l'OCDE"},{t:"Équivalent à 1 €"}],
x:"Le DTS (Droit de Tirage Spécial) est une unité de compte du FMI basée sur un panier de grandes devises (USD, EUR, GBP, JPY, CNY). Sa valeur fluctue quotidiennement. Pour les indemnisations CMR (8,33 DTS/kg), on utilise la valeur du DTS à la date de l'indemnisation. En 2024, 1 DTS ≈ 1,27-1,35 €."},

{id:7049,prog:'LOURD',theme:'Transport international',d:3,
e:"Le cabotage routier en France depuis un transport international entrant est autorisé :",
r:[{t:"Illimité après déchargement"},{t:"3 opérations maximum dans les 7 jours suivant le déchargement du transport international entrant",ok:true},{t:"5 opérations en 30 jours"},{t:"1 seule opération par voyage international"}],
x:"Le règlement (CE) 1072/2009 limite le cabotage à 3 opérations de transport intérieur en France, dans les 7 jours suivant le déchargement du transport international. Après ces 7 jours, le véhicule doit quitter la France. Ce délai de carence vise à limiter la concurrence des transporteurs de pays à plus bas coûts salariaux."},

{id:7050,prog:'LOURD',theme:'Transport international',d:2,
e:"Le formulaire A1 pour un conducteur PL détaché est délivré par :",
r:[{t:"La DREAL du pays d'accueil"},{t:"L'organisme de sécurité sociale du pays d'origine du travailleur",ok:true},{t:"L'administration fiscale du pays d'accueil"},{t:"L'URSSAF pour les travailleurs français détachés à l'étranger"}],
x:"Le formulaire A1 est délivré par l'organisme de sécurité sociale (en France : URSSAF pour les salariés des régimes généraux) du pays d'établissement de l'employeur. Il atteste que le travailleur détaché reste affilié au régime de sécurité sociale de son pays d'origine, évitant ainsi la double cotisation."},

{id:7051,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"Le PTAC maximum d'un ensemble articulé 5 essieux en France est de :",
r:[{t:"38 tonnes"},{t:"40 tonnes",ok:true},{t:"44 tonnes"},{t:"52 tonnes"}],
x:"Le PTAC maximum pour un ensemble articulé (tracteur + semi-remorque) à 5 essieux est de 40 tonnes en France. Pour 4 essieux c'est 36 tonnes, pour 6 essieux jusqu'à 44 tonnes. Des dérogations existent pour les transports de bois ronds (48 tonnes) et certains transports spéciaux."},

{id:7052,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"La visite technique annuelle d'un PL est réalisée dans :",
r:[{t:"N'importe quel garage agréé"},{t:"Un centre de contrôle technique agréé PL (distinct des centres VL)",ok:true},{t:"La concession du constructeur"},{t:"Les services de la DREAL"}],
x:"Les contrôles techniques des PL (PTAC > 3,5t) sont réalisés dans des centres agréés spécifiquement équipés pour les véhicules lourds (bancs de freinage adaptés, fosse de visite…). Ces centres sont distincts des centres de contrôle technique VL. L'agrément est délivré par le Ministère des Transports."},

{id:7053,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"La licence de transport intérieur (LTI) pour les PL est délivrée par :",
r:[{t:"La CCI"},{t:"La DREAL (ou DRIEAT en Île-de-France)",ok:true},{t:"La Préfecture de département"},{t:"Le Ministère directement"}],
x:"La DREAL (Direction Régionale de l'Environnement, de l'Aménagement et du Logement) est l'autorité compétente pour délivrer les licences de transport intérieur (LTI) et communautaire (LC) pour les PL. En Île-de-France, c'est la DRIEAT. Elles instruisent les dossiers et tiennent le registre des transporteurs."},

{id:7054,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"Le tachygraphe numérique G2 (2ème génération) a la capacité d'enregistrer :",
r:[{t:"Uniquement les temps de conduite"},{t:"Positions GNSS, franchissements de frontières, activités, vitesse, données du conducteur et du véhicule",ok:true},{t:"Uniquement les données du conducteur"},{t:"Les communications radios du conducteur"}],
x:"Le tachygraphe G2 (règl. 2016/799) enregistre : positions GPS toutes les 3h en conduite et à chaque traversée de frontière, données complètes d'activité (conduite, autres travaux, disponibilité, repos), vitesse instantanée, données du véhicule (immatriculation, VIN) et de la carte conducteur. Il peut être interrogé à distance via DSRC lors des contrôles."},

{id:7055,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Un conducteur PL peut conduire avec un tachygraphe défectueux pendant :",
r:[{t:"Aucun délai — interdiction immédiate de rouler"},{t:"Jusqu'au retour au dépôt ou jusqu'au garage le plus proche pour réparation, en notant manuellement",ok:true},{t:"7 jours maximum"},{t:"30 jours avec notification à la DREAL"}],
x:"En cas de défaillance du tachygraphe, le conducteur peut continuer jusqu'au dépôt ou au garage le plus proche pour réparation, mais doit noter manuellement toutes ses activités sur papier. Le tachygraphe doit être réparé dès que possible. Si la panne survient loin du dépôt, l'appareil doit être réparé en route par un atelier agréé."},

{id:7056,prog:'LOURD',theme:'Réglementation transport PL',d:1,
e:"La limitation de vitesse sur autoroute pour un PL de PTAC > 3,5t est de :",
r:[{t:"110 km/h"},{t:"90 km/h",ok:true},{t:"130 km/h"},{t:"80 km/h"}],
x:"Les PL de PTAC > 3,5t sont limités à 90 km/h sur autoroute et voies express. Cette limitation est assurée par le limiteur de vitesse électronique obligatoire. Sur les routes nationales/départementales à double voie, la limite est de 80 km/h. En agglomération, la limite générale de 50 km/h s'applique."},

{id:7057,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Le transport de matières dangereuses en citerne nécessite que le conducteur possède :",
r:[{t:"Uniquement le permis CE"},{t:"Le certificat ADR de base + le module citerne",ok:true},{t:"Uniquement le module citerne"},{t:"Le CQC + permis CE uniquement"}],
x:"Pour conduire un véhicule-citerne transportant des MD, le conducteur doit posséder : le certificat ADR de base (module de base obligatoire) + le module complémentaire citerne (spécifique aux transports en vrac liquide et gazeux en citerne). Ces deux formations sont obligatoires et sanctionnées par des examens séparés."},

{id:7058,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"L'accident grave impliquant un PL avec matières dangereuses doit être signalé :",
r:[{t:"Uniquement à l'assurance"},{t:"Aux forces de l'ordre + secours + CSTMD de l'entreprise + éventuellement l'autorité compétente ADR",ok:true},{t:"Uniquement à la DREAL dans les 24h"},{t:"Uniquement si des blessés sont à déplorer"}],
x:"En cas d'accident grave avec MD : appeler immédiatement les secours (15/18/112) et les forces de l'ordre, transmettre les consignes écrites ADR aux secours, informer le CSTMD de l'entreprise, et selon la gravité, notifier l'autorité compétente ADR. Le CSTMD rédigera un rapport d'accident. Des obligations de déclaration aux autorités environnementales peuvent s'ajouter selon les produits impliqués."},

{id:7059,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"Le coût de revient kilométrique (CRK) d'un tracteur PL à 1,05 €/km : si les charges fixes sont 80 000 €/an pour 150 000 km annuels, le CRK fixe est de :",
r:[{t:"0,80 €/km"},{t:"0,53 €/km",ok:true},{t:"1,05 €/km"},{t:"0,25 €/km"}],
x:"CRK fixe = CF annuelles / km annuels = 80 000 / 150 000 = 0,533 €/km ≈ 0,53 €/km. Les charges variables (carburant, pneus, entretien…) constituent le solde : 1,05 - 0,53 = 0,52 €/km de charges variables. Cette décomposition est essentielle pour les décisions de sous-traitance (comparer CRK variable vs prix d'un sous-traitant)."},

{id:7060,prog:'LOURD',theme:'Droit social',d:2,
e:"Le conducteur en grand déplacement perçoit des indemnités de :",
r:[{t:"Uniquement la nuit"},{t:"Repas et/ou couchée selon l'éloignement et la durée, selon les barèmes CCN ou URSSAF",ok:true},{t:"Un montant forfaitaire unique quel que soit le déplacement"},{t:"Aucune indemnité si le camion a une cabine couchette"}],
x:"Les indemnités de grand déplacement des conducteurs PL couvrent les frais de repas et d'hébergement lors des déplacements professionnels. Leurs montants sont fixés par la CCN transports routiers et doivent respecter les barèmes URSSAF pour être exonérés de cotisations. Même avec cabine couchette, des indemnités peuvent être dues selon la CCN."},

{id:7061,prog:'LOURD',theme:'Droit social',d:1,
e:"La durée maximale d'un CDD sans renouvellement dans les transports routiers est de :",
r:[{t:"6 mois"},{t:"18 mois",ok:true},{t:"24 mois"},{t:"36 mois"}],
x:"Le CDD de droit commun est limité à 18 mois renouvellement inclus (24 mois maximum dans certains cas légaux). Dans le transport routier, les CDD de remplacement sont très courants (remplacement de conducteurs absents). Au-delà de la durée légale ou après 2 renouvellements non justifiés, le CDD peut être requalifié en CDI."},

{id:7062,prog:'LOURD',theme:'Droit social',d:2,
e:"L'intérim (travail temporaire) dans le transport PL oblige l'ETT à :",
r:[{t:"Former le conducteur intérimaire sur le poste de travail"},{t:"Vérifier que le conducteur possède les habilitations requises (permis CE, CQC, ADR si applicable)",ok:true},{t:"Fournir le véhicule à l'entreprise utilisatrice"},{t:"S'assurer que le conducteur connaît le tachygraphe"}],
x:"L'ETT (Entreprise de Travail Temporaire) doit vérifier que le conducteur intérimaire dispose de toutes les habilitations requises pour le poste : permis CE valide, code 95 (CQC) valide, certificat ADR si le poste l'exige, aptitude médicale valide. L'entreprise utilisatrice est responsable des conditions de travail et du respect des temps de conduite pendant la mission."},

{id:7063,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"La responsabilité de l'employeur pour les accidents de trajet de ses conducteurs est couverte par :",
r:[{t:"L'assurance RC du véhicule uniquement"},{t:"L'assurance accidents du travail/maladies professionnelles (AT/MP) obligatoire",ok:true},{t:"L'assurance personnelle du conducteur"},{t:"Il n'y a pas de responsabilité de l'employeur"}],
x:"Les accidents de trajet (domicile-travail) sont pris en charge par l'assurance AT/MP (gérée par la CPAM, financée par des cotisations patronales). L'employeur cotise obligatoirement à ce régime. Les accidents de mission (pendant le travail, y compris en voiture personnelle) sont également des AT. L'employeur peut aussi être poursuivi pour faute inexcusable si la sécurité était insuffisante."},

{id:7064,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"Un conducteur PL effectue 220 000 km/an. Le coût pneu est de 0,045 €/km. Le budget pneus annuel est de :",
r:[{t:"4 500 €"},{t:"9 900 €",ok:true},{t:"22 000 €"},{t:"2 200 €"}],
x:"Budget pneus = 0,045 × 220 000 = 9 900 €. Les pneus représentent généralement 3 à 5 % du coût de revient d'un PL longue distance. La surveillance de l'usure, la pression et l'équilibrage sont essentiels pour optimiser leur durée de vie et réduire ce poste de charges."},

{id:7065,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"L'éco-taxe poids lourds (Taxe à l'Essieu) est calculée sur la base de :",
r:[{t:"Le nombre de km parcourus uniquement"},{t:"Le PTAC, le nombre d'essieux et les km parcourus sur les routes taxées",ok:true},{t:"Le type de carburant uniquement"},{t:"La catégorie Euro du moteur uniquement"}],
x:"La taxe à l'essieu (art. 269 du CGI) est due par les transporteurs utilisant des véhicules > 12t. Son montant est calculé en fonction du PTAC, du nombre d'essieux et de la suspension (pneumatique = taux réduit). Elle est payée annuellement ou à l'utilisation selon les options. Des modulations existent pour les véhicules les moins polluants."},

{id:7066,prog:'LOURD',theme:'Droit civil & commercial PL',d:2,
e:"Les réserves sur la lettre de voiture lors du chargement doivent être émises par :",
r:[{t:"Le destinataire"},{t:"Le transporteur si l'emballage ou la marchandise présente des défauts visibles au chargement",ok:true},{t:"L'expéditeur"},{t:"Elles ne peuvent être émises qu'à la livraison"}],
x:"Au chargement, le transporteur doit émettre des réserves sur la lettre de voiture (LVN ou CMR) si l'emballage est endommagé, si la quantité ne correspond pas au document, ou si l'état de la marchandise est suspect. Ces réserves protègent le transporteur d'une mise en cause ultérieure pour des dommages antérieurs à sa prise en charge."},

{id:7067,prog:'LOURD',theme:'Accès à la profession',d:2,
e:"Le CPC (Certificat de Compétence Professionnelle) de transporteur PL est obtenu par :",
r:[{t:"Formation uniquement"},{t:"Examen devant une commission CCI, ou par validation d'expérience professionnelle (VAE)",ok:true},{t:"Dépôt d'un dossier administratif simple"},{t:"Formation en alternance uniquement"}],
x:"Le CPC Marchandises Lourd peut être obtenu : par examen devant une commission dans les CCI (épreuves écrites sur 4 matières), ou par la Validation des Acquis de l'Expérience (VAE) pour les professionnels justifiant d'une expérience significative dans la gestion d'une entreprise de transport. La VAE permet de dispenser certaines épreuves."},

{id:7068,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"Le DSO (Days Sales Outstanding) d'un transporteur PL est de 52 jours. Son CA mensuel est de 120 000 €. Ses créances clients sont de :",
r:[{t:"120 000 €"},{t:"208 000 €",ok:true},{t:"52 000 €"},{t:"624 000 €"}],
x:"DSO = Créances / CA × 360 → Créances = DSO × CA annuel / 360 = 52 × (120 000 × 12) / 360 = 52 × 1 440 000 / 360 = 52 × 4 000 = 208 000 €. Ce montant représente ce que doivent collectivement les clients. Réduire le DSO (relance, affacturage) libère de la trésorerie."},

{id:7069,prog:'LOURD',theme:'Transport international',d:2,
e:"Le chargé d'expédition (freight forwarder) est :",
r:[{t:"Un conducteur international spécialisé"},{t:"Un intermédiaire qui organise le transport pour le compte du client, en combinant plusieurs modes et prestataires",ok:true},{t:"Un douanier privé"},{t:"Un assureur maritime"}],
x:"Le freight forwarder (ou commissionnaire de transport) organise le transport de bout en bout pour ses clients, en combinant si nécessaire plusieurs modes (route, mer, air, rail) et plusieurs prestataires. Il agit en son nom propre et engage sa responsabilité vis-à-vis du client sur l'ensemble de la chaîne logistique."},

{id:7070,prog:'LOURD',theme:'Droit social',d:3,
e:"Le forfait social sur la participation et l'intéressement est de :",
r:[{t:"5 %"},{t:"20 % (réduit à 10 % pour l'intéressement dans les entreprises < 250 salariés)",ok:true},{t:"33 %"},{t:"Il n'y a pas de cotisation sur la participation"}],
x:"Le forfait social est une contribution patronale sur certains éléments de rémunération exclus de l'assiette des cotisations de Sécurité Sociale. Taux de 20 % sur la participation et l'abondement PEE/PERCO. Taux réduit à 10 % sur l'intéressement dans les entreprises de moins de 250 salariés. Les TPE < 11 salariés sont exonérées de forfait social sur l'intéressement et la participation."},

{id:7071,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Le hayon élévateur d'un PL est soumis à vérification annuelle selon :",
r:[{t:"La norme NF EN 1756-1"},{t:"L'arrêté du 1er mars 2004 sur la vérification des appareils de levage",ok:true},{t:"La réglementation du fabricant uniquement"},{t:"Uniquement lors de la visite technique PL"}],
x:"L'arrêté du 1er mars 2004 (modifiant celui de 1993) impose une vérification annuelle des hayons élévateurs par un organisme compétent. Un registre de vérification doit être tenu à disposition lors des contrôles. Le non-respect expose à des sanctions et engage la responsabilité de l'employeur en cas d'accident."},

{id:7072,prog:'LOURD',theme:'Gestion financière PL',d:1,
e:"Un transporteur PL avec CA = 2 M€ et coefficient exploitation = 92 % a un résultat avant IS de :",
r:[{t:"92 000 €"},{t:"160 000 €",ok:true},{t:"1 840 000 €"},{t:"40 000 €"}],
x:"Résultat = 2 000 000 × (1 - 0,92) = 2 000 000 × 8 % = 160 000 €. Avec IS à 25 % : IS = 40 000 €, Résultat net = 120 000 €. CAF = 120 000 + amortissements. Ce résultat permettrait de rembourser environ 160 000-200 000 € d'annuités d'emprunt (selon la CAF réelle)."},

{id:7073,prog:'LOURD',theme:'Droit social',d:2,
e:"Le taux de cotisation patronale d'assurance vieillesse (retraite de base) est d'environ :",
r:[{t:"5 %"},{t:"8,55 % sur le plafond SS + 1,90 % en déplafonnée (taux 2024 indicatifs)",ok:true},{t:"20 %"},{t:"3 %"}],
x:"Les cotisations retraite de base (régime général) comprennent une part plafonnée (jusqu'au plafond SS, environ 46 368 €/an en 2024) et une part déplafonnée (sur la totalité du salaire). Le taux patronal total est d'environ 8,55 % + 1,90 % = 10,45 %. Ces taux varient légèrement chaque année. S'y ajoutent les cotisations AGIRC-ARRCO pour la retraite complémentaire."},

{id:7074,prog:'LOURD',theme:'Réglementation transport PL',d:3,
e:"Le transport de matières corrosives en vrac (acide sulfurique) nécessite un véhicule de type :",
r:[{t:"EX/II ou EX/III"},{t:"AT (citerne spéciale avec revêtement résistant à la corrosion)",ok:true},{t:"FL"},{t:"N'importe quelle citerne"}],
x:"Le type de véhicule-citerne est défini par l'ADR selon la classe et les propriétés de la matière. Pour les matières corrosives liquides (Classe 8) : véhicule de type AT (citerne en acier inoxydable, polyester ou autre matériau résistant à la corrosion). Le type FL est pour les inflammables, EX pour les explosifs. La colonne 14 du tableau A ADR indique le code citerne requis."},

{id:7075,prog:'LOURD',theme:'Droit civil & commercial PL',d:2,
e:"En transport national, le contrat type 'messagerie' s'applique aux envois :",
r:[{t:"De toute taille"},{t:"Inférieurs à 3 tonnes ou 3 mètres linéaires de plancher",ok:true},{t:"Uniquement > 500 kg"},{t:"Uniquement pour les colis < 30 kg"}],
x:"Le contrat type applicable au transport de messagerie (arrêté du 15 mars 1993 modifié) s'applique aux envois de moins de 3 tonnes ou occupant moins de 3 mètres linéaires du plancher d'un PL. Il prévoit des délais de livraison J+1 (24h), des procédures de réserves et des plafonds d'indemnisation spécifiques."},

{id:7076,prog:'LOURD',theme:'Gestion financière PL',d:2,
e:"La méthode du coût marginal en transport permet de décider si :",
r:[{t:"Un investissement est rentable"},{t:"Accepter une commande supplémentaire à bas prix est préférable à refuser (si prix > coûts variables)",ok:true},{t:"Sous-traiter est plus rentable"},{t:"Embaucher un conducteur supplémentaire"}],
x:"Le coût marginal = coût de la dernière unité produite (ici : coût de la tournée supplémentaire = uniquement les charges variables directes). Si le prix proposé pour une commande supplémentaire > coût marginal, il est préférable de l'accepter car elle contribue aux charges fixes (déjà couvertes par l'activité normale). C'est la base de la tarification différenciée et de la gestion des surplus de capacité."},

{id:7077,prog:'LOURD',theme:'Transport international',d:1,
e:"En transport international sous CMR, les réserves pour avaries non apparentes sont valables si émises dans les :",
r:[{t:"24 heures"},{t:"7 jours suivant la livraison",ok:true},{t:"3 jours ouvrés"},{t:"1 mois"}],
x:"L'art. 30 de la CMR fixe le délai à 7 jours suivant la livraison pour les avaries non apparentes (non visibles à la réception). Les réserves doivent être adressées par écrit au transporteur. Pour les avaries apparentes (visibles à la livraison), les réserves doivent être émises immédiatement lors de la livraison."},

{id:7078,prog:'LOURD',theme:'Droit social',d:2,
e:"L'obligation de loyauté du salarié pendant son contrat de travail lui interdit :",
r:[{t:"De suivre des formations en dehors de ses heures"},{t:"D'exercer une activité concurrente à celle de son employeur",ok:true},{t:"D'adhérer à un syndicat concurrent"},{t:"De se faire élire au CSE"}],
x:"L'obligation de loyauté (découlant de l'art. L.1222-1 du Code du travail) interdit au salarié, pendant l'exécution de son contrat, d'exercer une activité concurrente au détriment de son employeur. Cette obligation existe même sans clause de non-concurrence spécifique. Elle cesse à la rupture du contrat (sauf clause de non-concurrence post-contractuelle)."},

{id:7079,prog:'LOURD',theme:'Réglementation transport PL',d:2,
e:"Le marquage CE des équipements de protection individuelle (EPI) des conducteurs PL atteste :",
r:[{t:"Que l'EPI est fabriqué en France"},{t:"Sa conformité aux exigences essentielles des directives européennes applicables (sécurité, résistance)",ok:true},{t:"Sa durée de vie garantie"},{t:"Son homologation par la DREAL"}],
x:"Le marquage CE sur les EPI (casques, gilets, gants, chaussures de sécurité…) atteste que le fabricant déclare la conformité de son produit aux exigences essentielles des directives et règlements européens applicables. C'est une exigence de mise sur le marché dans l'UE, pas un label de qualité supérieure."},

{id:7080,prog:'LOURD',theme:'Gestion financière PL',d:3,
e:"Dans le cadre d'une reprise d'une PME de transport PL, la due diligence financière consiste à :",
r:[{t:"Vérifier uniquement les comptes du dernier exercice"},{t:"Analyser en profondeur les 3-5 derniers bilans, CR, engagements hors-bilan, litiges, état du parc et contrats clients",ok:true},{t:"Vérifier uniquement le capital social"},{t:"S'assurer que les licences sont valides"}],
x:"La due diligence financière est un audit approfondi réalisé avant une acquisition. Elle comprend : analyse des comptes historiques (3-5 ans), vérification des engagements hors-bilan (crédit-bail, cautions, contentieux), état réel du parc de véhicules (inspection physique et documentation), analyse de la base clients (concentration, pérennité des contrats) et vérification de la conformité réglementaire (licences, infractions en cours)."},

// ── ADR FINAL ────────────────────────────────────
{id:7400,prog:'ADR',theme:'ADR — Général',d:1,
e:"Le code de classification '2TC' dans l'ADR signifie :",
r:[{t:"Gaz corrosif comprimé"},{t:"Gaz liquéfié toxique et corrosif",ok:true},{t:"Gaz inflammable et corrosif"},{t:"Gaz toxique comprimé"}],
x:"Dans le code de classification ADR pour les gaz (Classe 2) : 2 = gaz liquéfié, T = toxique, C = corrosif. Donc 2TC = gaz liquéfié à la fois toxique ET corrosif. Exemples : ammoniac (2TC), chlorure d'hydrogène. Le code complet précise les propriétés physiques (comprimé, liquéfié, réfrigéré) et chimiques (inflammable, toxique, corrosif, comburant)."},

{id:7401,prog:'ADR',theme:'ADR — Classification',d:2,
e:"La classe 4.3 de l'ADR regroupe les matières qui :",
r:[{t:"Brûlent spontanément au contact de l'air"},{t:"Dégagent des gaz inflammables au contact de l'eau",ok:true},{t:"Explosent sous l'effet de la chaleur"},{t:"Sont auto-échauffantes"}],
x:"La Classe 4.3 regroupe les matières qui, au contact de l'eau, dégagent des gaz inflammables (hydrogène, acétylène, phosphine…). Exemples : carbure de calcium (ONU 1402, dégage acétylène), sodium métallique (ONU 1428, dégage hydrogène), magnésium en poudre (ONU 2950). Ces matières sont incompatibles avec tout contact humide ou l'eau d'extinction."},

{id:7402,prog:'ADR',theme:'ADR — Sécurité',d:2,
e:"La distance minimale de stationnement d'un véhicule ADR chargé de matières explosives (Cl.1) par rapport aux habitations est de :",
r:[{t:"10 m"},{t:"50 m minimum",ok:true},{t:"100 m"},{t:"500 m"}],
x:"L'ADR chapitre 8.4 impose que les véhicules transportant des explosifs (Cl.1) ne stationnent pas à moins de 50 m des habitations, lieux rassemblant du public, ou sources d'ignition. Pour les matières les plus dangereuses (division 1.1), des distances supérieures peuvent être imposées par les autorités locales."},

{id:7403,prog:'ADR',theme:'ADR — Emballages',d:2,
e:"Le code emballage 4G désigne :",
r:[{t:"Un fût en acier"},{t:"Une caisse en fibres (carton ondulé ou non ondulé)",ok:true},{t:"Un sac en plastique"},{t:"Un bidon en plastique"}],
x:"Le code d'emballage ADR suit une nomenclature précise : le premier chiffre indique le type (1=fût, 2=tonnelet, 3=jerrican, 4=caisse, 5=sac, 6=emballage composite) et les lettres le matériau (A=acier, B=aluminium, C=bois naturel, D=contreplaqué, F=matière fibreuse/carton, G=carton, H=plastique, M=papier kraft). 4G = caisse en carton (fibres)."},

{id:7404,prog:'ADR',theme:'ADR — Documents',d:1,
e:"Le document de transport ADR doit être rédigé :",
r:[{t:"Uniquement en anglais"},{t:"Dans la langue de l'expéditeur, plus anglais/français/allemand si la langue d'origine n'est pas l'une d'elles",ok:true},{t:"En français uniquement pour les transports en France"},{t:"Dans la langue du conducteur"}],
x:"Le document de transport (déclaration de l'expéditeur) doit être rédigé dans la langue officielle du pays de l'expéditeur. S'il ne s'agit pas de l'anglais, du français ou de l'allemand, le document doit également être établi dans l'une de ces trois langues pour permettre la compréhension par les autorités de contrôle des pays traversés."},

{id:7405,prog:'ADR',theme:'ADR — Classification',d:2,
e:"L'hydrogène gazeux comprimé (ONU 1049) est classé :",
r:[{t:"Classe 2, code 1F (inflammable)",ok:true},{t:"Classe 3"},{t:"Classe 4.3"},{t:"Classe 9"}],
x:"L'hydrogène gazeux comprimé est classé Classe 2, code 1F (gaz comprimé inflammable). C'est le gaz le plus léger (14 fois plus léger que l'air), très inflammable (large plage d'inflammabilité : 4-75 %). Son transport nécessite des bouteilles haute pression ou des tubes. Il prend de l'importance avec le développement des véhicules à pile à combustible."},

{id:7406,prog:'ADR',theme:'ADR — Général',d:2,
e:"Le principe de prévention des risques en ADR impose à l'entreprise de :",
r:[{t:"Uniquement former les conducteurs"},{t:"Identifier, évaluer et réduire les risques liés au transport de MD par un plan d'actions",ok:true},{t:"Assurer tous ses véhicules en tous risques"},{t:"Uniquement apposer les plaques réglementaires"}],
x:"Le chapitre 1.10 ADR et les obligations générales imposent aux entreprises transportant des MD de mettre en place une démarche de prévention des risques : identification des dangers (classes de MD transportées), évaluation des risques (accidents, déversements, vol…), mesures de réduction (formation, EPI, procédures d'urgence, plan de sûreté si nécessaire)."},

{id:7407,prog:'ADR',theme:'ADR — Sécurité',d:3,
e:"La température de transport maximale pour un peroxyde organique de type F (risque d'explosion) est définie par :",
r:[{t:"La même règle pour tous les peroxydes"},{t:"La TDAA (Température de Décomposition Auto-Accélérée) propre à chaque produit",ok:true},{t:"La loi ADR à 0°C systématiquement"},{t:"La température du pays de destination"}],
x:"La TDAA (SADT en anglais : Self-Accelerating Decomposition Temperature) est la température minimale à partir de laquelle la décomposition exothermique d'un peroxyde organique ou d'une matière auto-réactive devient auto-accélérée (s'emballe). La température de transport critique (Tc) est fixée à TDAA - 10°C. Les véhicules doivent maintenir la température en dessous de Tc."},

{id:7408,prog:'ADR',theme:'ADR — Documents',d:2,
e:"La mention 'QUANTITÉS LIMITÉES' ou 'LQ' dans le document de transport ADR :",
r:[{t:"Est obligatoire pour tous les transports LQ"},{t:"N'est pas requise — seul le marquage sur les colis est obligatoire",ok:true},{t:"Remplace le numéro ONU dans le document"},{t:"Doit être accompagnée des consignes écrites"}],
x:"Pour les colis en quantités limitées (LQ), l'ADR (art. 3.4.7) n'exige pas de mention spécifique dans le document de transport. Le marquage LQ sur les colis (losange blanc et noir) suffit. Les consignes écrites ne sont pas requises pour les LQ. C'est l'un des avantages de l'exemption LQ : simplification documentaire significative."},

{id:7409,prog:'ADR',theme:'ADR — Classification',d:2,
e:"L'uranium appauvri (ONU 2909) utilisé comme lest dans certains appareils est classé :",
r:[{t:"Classe 6.1 — toxique"},{t:"Classe 7 — radioactif (mais exemption possible selon conditions)",ok:true},{t:"Classe 9"},{t:"Il n'est pas soumis à l'ADR"}],
x:"L'uranium appauvri (UF4 ou métal) est radioactif mais à très faible activité spécifique. Il appartient à la Classe 7 (radioactifs). Cependant, selon les quantités et la configuration, il peut bénéficier d'une exemption (matières radioactives à faible activité spécifique, art. 2.2.7.2.2.1 ADR). Les pièces manufacturées en uranium appauvri pour contrepoids ou blindage peuvent être exemptées."},

{id:7410,prog:'ADR',theme:'ADR — Général',d:1,
e:"Le numéro d'identification de danger (numéro Kemler) '268' signifie :",
r:[{t:"Gaz toxique inflammable"},{t:"Gaz toxique corrosif",ok:true},{t:"Matière corrosive explosive"},{t:"Liquide inflammable toxique"}],
x:"Le code Kemler 268 : 2 = propriété de gaz, 6 = toxicité, 8 = corrosivité. Donc 268 = gaz toxique et corrosif. Exemple classique : chlorure d'hydrogène (HCl), ONU 1050, code 268. Le code Kemler apparaît sur la partie supérieure de la plaque orange des citernes et véhicules ADR, le numéro ONU en dessous."},

{id:7411,prog:'ADR',theme:'ADR — Sécurité',d:2,
e:"En cas de fuite d'un gaz toxique depuis une citerne, les secours doivent se positionner :",
r:[{t:"Face au vent (vers la source)"},{t:"En position sous le vent à grande distance (depuis le côté opposé à la direction du vent)",ok:true},{t:"À 10 m maximum"},{t:"N'importe où — le vent ne change pas la dangerosité"}],
x:"En cas de fuite de gaz toxique, le nuage se disperse dans le sens du vent. Les secours doivent se positionner SOUS LE VENT (donc dos au vent, le nuage s'éloigne d'eux) et à grande distance. La zone d'exclusion est plus grande dans la direction du vent. La force et la direction du vent sont les premiers paramètres évalués lors d'une intervention sur un incident impliquant des gaz toxiques."},

{id:7412,prog:'ADR',theme:'ADR — Classification',d:1,
e:"Le propane en bouteille (camping-gaz, 0,5 kg) est soumis à l'ADR :",
r:[{t:"Toujours, même en petite quantité"},{t:"Potentiellement exempté si les quantités entrent dans les seuils LQ ou d'exemption totale",ok:true},{t:"Jamais — le propane est exempté par nature"},{t:"Uniquement pour les transports > 100 km"}],
x:"Le propane (ONU 1978, Classe 2, code 2F) est une matière dangereuse soumise à l'ADR. Cependant, les petites quantités (bouteilles de camping de 190g ou 500g) peuvent bénéficier des exemptions ADR (quantités limitées ou exemption totale selon la quantité totale). Les grandes quantités (bonbonnes de 10-47 kg) sont pleinement soumises à l'ADR."},

{id:7413,prog:'ADR',theme:'ADR — Documents',d:3,
e:"Le certificat d'agrément de véhicule pour le transport en citerne (certificat orange ADR) est valable :",
r:[{t:"5 ans"},{t:"1 an, renouvelable après inspection",ok:true},{t:"10 ans"},{t:"Permanent jusqu'à modification du véhicule"}],
x:"Le certificat d'agrément (certificat orange) délivré pour les véhicules-citernes ADR est valable 1 an, renouvelable chaque année après une inspection visuelle et fonctionnelle par un organisme agréé. Il atteste que le véhicule satisfait aux exigences techniques ADR applicables. Son absence interdit le transport."},

{id:7414,prog:'ADR',theme:'ADR — Général',d:2,
e:"Les marchandises dangereuses 'en quantités exceptées' (EQ) bénéficient d'une exemption totale ADR si :",
r:[{t:"Elles sont transportées < 50 km"},{t:"La quantité par emballage intérieur et par colis extérieur ne dépasse pas les limites du code EQ",ok:true},{t:"Le conducteur a une formation ADR"},{t:"Le destinataire a une autorisation spécifique"}],
x:"Les quantités exceptées (EQ) permettent une exemption totale ADR pour des quantités minimes (quelques ml à 500 ml selon le code EQ1 à EQ5). Les exigences d'emballage restent applicables mais les plaques ADR, consignes écrites, certificat conducteur sont exemptés. Un marquage astérisque sur le colis est requis."},

{id:7415,prog:'ADR',theme:'ADR — Sécurité',d:2,
e:"L'EPI minimal requis pour un conducteur de citerne transportant des produits corrosifs (Cl.8) comprend :",
r:[{t:"Uniquement des gants"},{t:"Lunettes de protection, gants résistants aux produits chimiques, vêtement de protection corps entier",ok:true},{t:"Uniquement un masque respiratoire"},{t:"Aucun EPI spécifique n'est requis"}],
x:"Pour les matières corrosives (Classe 8), les consignes écrites ADR et les fiches de données de sécurité indiquent les EPI minimaux : lunettes étanches aux liquides (ou écran facial), gants résistants au produit chimique spécifique, vêtement de protection (combinaison ou tablier selon le risque). Un récipient d'eau de rinçage pour les yeux (min 1L) doit être accessible dans la cabine."},

{id:7416,prog:'ADR',theme:'ADR — Emballages',d:2,
e:"Les grandes récipients pour vrac (GRV ou IBC) sont identifiés par leur code commençant par :",
r:[{t:"1A, 2A, 3A…"},{t:"11A, 11B, 31H1…",ok:true},{t:"GRV-01, GRV-02…"},{t:"L'emballeur les numérote librement"}],
x:"Le code des GRV (Grands Récipients pour Vrac, IBC = Intermediate Bulk Container) commence par le nombre indiquant le type (11 = rigide en acier, 21 = rigide en bois, 31 = rigide en plastique, 41 = souple…) suivi d'une ou deux lettres pour le matériau. Ex : 31H1 = GRV rigide en plastique avec paroi non amovible. Capacité typique : 500L à 3 000L."},

{id:7417,prog:'ADR',theme:'ADR — Général',d:1,
e:"Les matières de la Classe 9 comprennent notamment :",
r:[{t:"Les explosifs non classés"},{t:"Les batteries au lithium, la neige carbonique, les airbags non déclenchés",ok:true},{t:"Les matières radioactives faibles"},{t:"Les gaz non répertoriés"}],
x:"La Classe 9 (matières et objets dangereux divers) regroupe les matières dangereuses pendant le transport qui ne satisfont pas aux critères d'autres classes. Elle inclut : batteries au lithium-ion (ONU 3480, 3481), neige carbonique (ONU 1845), airbags et prétensionneurs (ONU 3268), PCB, matières polluantes pour l'environnement aquatique, matières transportées à chaud."},

{id:7418,prog:'ADR',theme:'ADR — Signalisation',d:2,
e:"Les plaques oranges sur une citerne transportant un seul produit dangereux indiquent :",
r:[{t:"Uniquement le numéro de danger"},{t:"Le numéro de danger (Kemler) en haut et le numéro ONU en bas",ok:true},{t:"Uniquement le numéro ONU"},{t:"Le nom de la matière"}],
x:"Les plaques oranges codifiées sur une citerne montrent en partie supérieure le numéro de danger (Kemler, 2 ou 3 chiffres, ex : 33 pour très inflammable) et en partie inférieure le numéro ONU à 4 chiffres (ex : 1203 pour l'essence). Sur les véhicules transportant des colis multiples, seules des plaques oranges vierges (sans code) sont apposées à l'avant et à l'arrière."},

{id:7419,prog:'ADR',theme:'ADR — Classification',d:3,
e:"Les piles et batteries contenant des cellules au lithium métal (Li métal) sont classées :",
r:[{t:"Comme les batteries Li-ion, ONU 3480"},{t:"ONU 3090 (piles seules) ou ONU 3091 (piles dans équipements)",ok:true},{t:"Classe 3 — inflammables"},{t:"Classe 8 — corrosifs car contiennent des électrolytes"}],
x:"Les piles/batteries au lithium métal (Li métal, contenant du lithium métal ou de l'alliage de lithium) sont distinctes des batteries Li-ion : ONU 3090 (piles Li métal seules) et ONU 3091 (piles Li métal dans équipements). Les batteries Li-ion utilisent le lithium ionisé (pas de lithium métal) et sont ONU 3480/3481. Les exigences de transport diffèrent selon le type."}
];

var THEME_ALIASES = {
  'cl-civil':   ['cl-civil',  'Droit civil & commercial'],
  'cl-social':  ['cl-social', 'Droit social'],
  'cl-fiscal':  ['cl-fiscal', 'Droit fiscal'],
  'cl-gestion': ['cl-gestion','Gestion financière'],
  'cl-acces':   ['cl-acces',  'Accès à la profession'],
  'cl-regl':    ['cl-regl',   'Réglementation VUL'],
  'cl-secu':    ['cl-secu',   'Sécurité routière'],
  'lo-social':  ['lo-social', 'Droit social', 'Droit social PL'],
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
if (typeof module !== 'undefined') {
  module.exports = { QUESTIONS_BANK, QuestionEngine };
} else {
  window.QUESTIONS_BANK = QUESTIONS_BANK;
  window.QuestionEngine = QuestionEngine;
}

QuestionEngine.prototype.getByTheme = function(themeId) {
  var accepted = THEME_ALIASES[themeId] || [themeId];
  return this.bank.filter(function(q) { return accepted.indexOf(q.theme) !== -1; });
};

window.QUESTIONS_BANK = QUESTIONS_BANK;
window.QuestionEngine = QuestionEngine;
