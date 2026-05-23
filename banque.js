// ═══════════════════════════════════════════════════
// FORGETAROUTE — banque.js — 1007 questions
// Niveau réel examen CPC (Certificat de Capacité Professionnelle) Marchandises 2020-2023
// CPC Léger (<3,5t) + CPC Lourd (>3,5t) + ADR (Accord Européen Relatif au Transport
// International des Marchandises Dangereuses par Route)
// ═══════════════════════════════════════════════════

var QUESTIONS_BANK = [
{id:1,prog:'LEGER',theme:'cl-civil',d:1,
e:"La lettre de change (traite) est un effet de commerce :",
r:[{t:"Rédigé par le tiré (débiteur) et adressé au tireur pour acceptation"},{t:"Rédigé par le tireur (créancier) et adressé au tiré pour acceptation",ok:true},{t:"Dont le paiement est garanti à la date d'échéance figurant sur ce document"},{t:"Qui est toujours à échéance indéterminée et escomptable"}],
x:"Bonne réponse : Rédigé par le tireur (créancier) et adressé au tiré pour acceptation. La lettre de change (ou traite) est un écrit par lequel le tireur (créancier) donne l'ordre au tiré (débiteur) de payer une certaine somme à une date déterminée. C'est le tireur qui rédige et adresse la traite au tiré pour acceptation."},

{id:2,prog:'LEGER',theme:'cl-civil',d:1,
e:"Dans une SARL (Société à Responsabilité Limitée), les associés répondent des dettes de la société :",
r:[{t:"Dans leur totalité, y compris sur leurs biens personnels"},{t:"Dans la limite de leurs apports",ok:true},{t:"Dans la limite de la moitié de leurs apports"},{t:"Sauf en cas de liquidation judiciaire"}],
x:"Bonne réponse : Dans la limite de leurs apports. Dans une SARL, la responsabilité des associés est limitée au montant de leurs apports (art. L.223-1 du Code de commerce). Ils ne peuvent pas être poursuivis sur leurs biens personnels, sauf faute de gestion."},

{id:3,prog:'LEGER',theme:'cl-civil',d:2,
e:"La cessation de paiement d'une société commerciale est :",
r:[{t:"La perte de la moitié de son capital social"},{t:"L'impossibilité de faire face au passif exigible avec son actif disponible",ok:true},{t:"Une infraction imputable automatiquement aux dirigeants"},{t:"La tenue d'une comptabilité irrégulière"}],
x:"Bonne réponse : L'impossibilité de faire face au passif exigible avec son actif disponible. La cessation de paiement est définie comme l'impossibilité pour une entreprise de faire face à son passif exigible (dettes arrivées à échéance) avec son actif disponible (liquidités). C'est le déclencheur d'une procédure collective."},

{id:4,prog:'LEGER',theme:'cl-civil',d:2,
e:"La prescription extinctive en matière commerciale est de :",
r:[{t:"1 an"},{t:"2 ans"},{t:"5 ans",ok:true},{t:"10 ans"}],
x:"Bonne réponse : 5 ans. En droit commercial, le délai de prescription de droit commun est de 5 ans (art. L.110-4 du Code de commerce), sauf prescriptions spéciales plus courtes comme la prescription d'un an en transport routier."},

{id:5,prog:'LEGER',theme:'cl-civil',d:2,
e:"Le président d'une SAS (Société par Actions Simplifiée) :",
r:[{t:"Est toujours une personne morale"},{t:"Est obligatoirement un associé de la SAS"},{t:"Peut être une personne physique ou morale",ok:true},{t:"Est toujours désigné par un conseil d'administration"}],
x:"Bonne réponse : Peut être une personne physique ou morale. Le président de la SAS peut être une personne physique ou une personne morale, associé ou non de la société. Les statuts fixent librement les modalités de sa désignation (art. L.227-6 du Code de commerce)."},

{id:6,prog:'LEGER',theme:'cl-civil',d:1,
e:"Dans une SARL (Société à Responsabilité Limitée), le gérant :",
r:[{t:"N'a pas obligatoirement la qualité de commerçant",ok:true},{t:"Doit obligatoirement être associé"},{t:"Ne peut être salarié qu'à condition d'être actionnaire majoritaire"},{t:"Devient automatiquement commerçant dès sa nomination"}],
x:"Bonne réponse : N'a pas obligatoirement la qualité de commerçant. Le gérant d'une SARL n'est pas commerçant. Il agit au nom de la société, qui seule a la qualité de commerçant. Le gérant peut être associé ou non, et peut même être salarié sous certaines conditions."},

{id:7,prog:'LEGER',theme:'cl-civil',d:3,
e:"En transport routier intérieur de marchandises, la prescription d'un an est interrompue par :",
r:[{t:"Une lettre de réclamation adressée au transporteur"},{t:"Une action en justice",ok:true},{t:"Une transmission du dossier à son assureur"},{t:"Une facturation du litige au transporteur"}],
x:"Bonne réponse : Une action en justice. La prescription en transport est interrompue par une action en justice (assignation). Une simple lettre de réclamation, même recommandée, n'interrompt pas la prescription en droit du transport (art. L.133-6 du Code de commerce)."},

{id:8,prog:'LEGER',theme:'cl-civil',d:2,
e:"L'injonction de payer en matière commerciale doit être présentée devant le tribunal du domicile du :",
r:[{t:"Requérant"},{t:"Transporteur obligatoirement"},{t:"Destinataire"},{t:"Débiteur ou de l'un des débiteurs s'ils sont plusieurs",ok:true}],
x:"Bonne réponse : Débiteur ou de l'un des débiteurs s'ils sont plusieurs. La procédure d'injonction de payer doit être introduite devant le tribunal compétent du lieu du domicile du débiteur (ou de l'un d'eux s'ils sont plusieurs). Le tribunal compétent en matière commerciale est le tribunal de commerce."},

{id:9,prog:'LEGER',theme:'cl-civil',d:2,
e:"La faillite personnelle est :",
r:[{t:"La mise en liquidation d'une entreprise personnelle"},{t:"Le dépôt de bilan de l'entreprise personnelle"},{t:"Une condamnation d'une personne physique",ok:true},{t:"L'impossibilité de rembourser les créanciers après liquidation"}],
x:"Bonne réponse : Une condamnation d'une personne physique. La faillite personnelle est une sanction personnelle prononcée par le tribunal à l'encontre d'un dirigeant ayant commis des fautes graves de gestion. Elle entraîne l'interdiction de diriger, gérer ou contrôler une entreprise."},

{id:10,prog:'LEGER',theme:'cl-civil',d:1,
e:"Les commissaires aux comptes ont pour mission :",
r:[{t:"De dresser la comptabilité de la société"},{t:"D'apprécier la gestion de la société"},{t:"D'informer les salariés sur la comptabilité"},{t:"De certifier la régularité et la sincérité des comptes",ok:true}],
x:"Bonne réponse : De certifier la régularité et la sincérité des comptes. Les commissaires aux comptes ont pour mission de certifier que les comptes annuels sont réguliers et sincères et donnent une image fidèle de la situation financière de la société. Ils ne tiennent pas la comptabilité."},

{id:11,prog:'LEGER',theme:'cl-civil',d:3,
e:"Un chèque certifié est un chèque :",
r:[{t:"Dont la provision est bloquée pendant le délai légal de présentation"},{t:"Visé par le banquier"},{t:"Pour lequel le porteur a obtenu de la banque un certificat de non-paiement"},{t:"Dont le banquier atteste que la provision, non bloquée, existe au moment de la certification",ok:true}],
x:"Bonne réponse : Dont le banquier atteste que la provision, non bloquée, existe au moment de la certification. Un chèque certifié est un chèque sur lequel le banquier du tireur atteste l'existence de la provision au moment de la certification. Cette provision n'est pas bloquée (contrairement au chèque de banque)."},

{id:12,prog:'LEGER',theme:'cl-civil',d:2,
e:"L'escompte d'une traite consiste à :",
r:[{t:"Indiquer au dos de l'effet un nouveau bénéficiaire"},{t:"Obtenir de sa banque une avance sur le montant de la traite",ok:true},{t:"Compter des frais d'agio en cas de non-paiement"},{t:"Obtenir la signature de sa banque pour confirmer la traite"}],
x:"Bonne réponse : Obtenir de sa banque une avance sur le montant de la traite. L'escompte consiste à remettre une traite à sa banque avant son échéance afin d'obtenir immédiatement les fonds, moyennant des agios (intérêts et frais). La banque avance le montant et récupère la créance à l'échéance."},

{id:13,prog:'LEGER',theme:'cl-civil',d:1,
e:"Parmi les 4 mentions suivantes, laquelle doit obligatoirement figurer dans les statuts d'une société :",
r:[{t:"Le régime fiscal adopté par la société"},{t:"Le nombre de salariés"},{t:"L'objet social de la société",ok:true},{t:"Le nom du ou des gérants de la société"}],
x:"Bonne réponse : L'objet social de la société. L'objet social (activité exercée par la société) est une mention obligatoire des statuts pour toutes les formes de sociétés. Le nom des gérants, lui, peut figurer dans un acte séparé."},

{id:14,prog:'LEGER',theme:'cl-civil',d:3,
e:"La responsabilité du transporteur routier peut être recherchée par son donneur d'ordre :",
r:[{t:"Toujours lorsqu'il y a mauvaise exécution du contrat, que ce soit du fait du transporteur ou d'un tiers"},{t:"Seulement pour les fautes lourdes de ses préposés"},{t:"En cas de mauvaise exécution du fait du transporteur ou de ses préposés, sauf cas d'exonération",ok:true},{t:"Seulement si les clauses exonératoires figurant dans les CGV le permettent"}],
x:"Bonne réponse : En cas de mauvaise exécution du fait du transporteur ou de ses préposés, sauf cas d'exonération. Le transporteur est responsable de plein droit en cas de perte, d'avarie ou de retard survenus entre la prise en charge et la livraison. Cette présomption de responsabilité peut être renversée par la preuve d'un cas d'exonération (force majeure, vice propre de la marchandise, faute du donneur d'ordre)."},

{id:15,prog:'LEGER',theme:'cl-civil',d:2,
e:"La société acquiert la personnalité morale à compter de :",
r:[{t:"La signature des statuts par les associés"},{t:"La publication au journal d'annonces légales"},{t:"Son immatriculation au registre national des entreprises (RNE)",ok:true},{t:"La réalisation de son premier acte de commerce"}],
x:"Bonne réponse : Son immatriculation au registre national des entreprises (RNE). La personnalité morale d'une société est acquise à partir de son immatriculation au Registre National des Entreprises (RNE), anciennement RCS, qui remplace depuis 2023 les différents registres d'entreprises."},

{id:16,prog:'LEGER',theme:'cl-civil',d:2,
e:"Le commerçant doit conserver ses documents comptables pendant :",
r:[{t:"3 ans"},{t:"5 ans"},{t:"8 ans"},{t:"10 ans",ok:true}],
x:"Bonne réponse : 10 ans. Les documents comptables (livres, journaux, grand livre, pièces justificatives) doivent être conservés pendant 10 ans en droit commercial (art. L.123-22 du Code de commerce). Les documents fiscaux doivent être conservés 6 ans."},

{id:17,prog:'LEGER',theme:'cl-civil',d:3,
e:"Dans une SAS (Société par Actions Simplifiée), les associés répondent des dettes de la société :",
r:[{t:"Dans leur totalité"},{t:"Dans la limite de leurs apports",ok:true},{t:"Dans la limite de la moitié de leurs apports uniquement"},{t:"Sauf en cas de liquidation judiciaire"}],
x:"Bonne réponse : Dans la limite de leurs apports. Comme dans la SARL, la responsabilité des associés de la SAS est limitée à leurs apports. Ils ne peuvent être poursuivis sur leurs biens personnels au-delà de ce montant."},

{id:18,prog:'LEGER',theme:'cl-civil',d:2,
e:"La procédure d'injonction de payer permet :",
r:[{t:"De retarder juridiquement le paiement des créanciers"},{t:"De demander par voie de justice le recouvrement d'une créance",ok:true},{t:"D'obtenir la liquidation judiciaire immédiate d'une entreprise"},{t:"De se faire payer sans passer par une voie judiciaire"}],
x:"Bonne réponse : De demander par voie de justice le recouvrement d'une créance. L'injonction de payer est une procédure judiciaire simplifiée permettant à un créancier de recouvrer rapidement une créance certaine, liquide et exigible, sans débat contradictoire initial."},

{id:19,prog:'LEGER',theme:'cl-civil',d:1,
e:"Le souscripteur d'un billet à ordre est :",
r:[{t:"Le vendeur (créancier)"},{t:"Le banquier du client"},{t:"L'acheteur (débiteur)",ok:true},{t:"Le banquier du vendeur"}],
x:"Bonne réponse : L'acheteur (débiteur). Dans un billet à ordre, le souscripteur est l'acheteur (débiteur) qui s'engage à payer une somme déterminée au bénéficiaire (vendeur/créancier) à une date fixée. C'est l'inverse de la lettre de change."},

{id:20,prog:'LEGER',theme:'cl-civil',d:3,
e:"Lors de la création d'une société de capitaux, les fonds constituant le capital social libéré :",
r:[{t:"Restent bloqués pendant toute la durée de vie de la société"},{t:"Restent bloqués uniquement pendant les formalités de création, puis sont disponibles pour la société",ok:true},{t:"Sont fictifs et ne sont jamais disponibles"},{t:"Restent bloqués pendant 2 ans"}],
x:"Bonne réponse : Restent bloqués uniquement pendant les formalités de création, puis sont disponibles pour la société. Les fonds constituant le capital social sont bloqués sur un compte spécial jusqu'à l'immatriculation de la société. Une fois immatriculée, ils sont débloqués et mis à la disposition de la société pour son activité."},

{id:21,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"Le mécanisme de la TVA (Taxe sur la Valeur Ajoutée) a une incidence sur :",
r:[{t:"Les résultats de l'entreprise"},{t:"Les coûts de revient de l'entreprise"},{t:"La trésorerie de l'entreprise",ok:true},{t:"Les produits d'exploitation de l'entreprise"}],
x:"Bonne réponse : La trésorerie de l'entreprise. La TVA n'affecte pas le résultat ni les coûts (elle est neutre pour les assujettis qui la récupèrent). En revanche, elle a un impact sur la trésorerie : l'entreprise collecte la TVA sur ses ventes avant de la reverser à l'État, ce qui génère des décalages de trésorerie."},

{id:22,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"Un auto-entrepreneur dont le chiffre d'affaires dépasse le seuil de franchise en base de TVA (Taxe sur la Valeur Ajoutée) doit :",
r:[{t:"Fermer son auto-entreprise"},{t:"Passer automatiquement au régime réel simplifié"},{t:"Facturer la TVA à ses clients et la reverser à l'État",ok:true},{t:"Demander une dérogation à l'administration fiscale"}],
x:"Bonne réponse : Facturer la TVA à ses clients et la reverser à l'État. Lorsqu'un auto-entrepreneur dépasse le seuil de franchise en base de TVA (37 500 € pour les prestations de services depuis 2026), il devient redevable de la TVA : il doit la facturer à ses clients et la reverser à l'État, mais peut aussi la déduire sur ses achats."},

{id:23,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"La franchise en base de TVA (Taxe sur la Valeur Ajoutée) signifie que :",
r:[{t:"La TVA est remboursée immédiatement à l'entreprise"},{t:"L'entreprise ne facture pas de TVA et ne peut pas la récupérer sur ses achats",ok:true},{t:"La TVA est réduite à 5,5 %"},{t:"L'entreprise est exonérée d'impôt sur les bénéfices"}],
x:"Bonne réponse : L'entreprise ne facture pas de TVA et ne peut pas la récupérer sur ses achats. Sous le régime de la franchise en base de TVA, l'entreprise ne facture pas de TVA à ses clients (facturation HT avec la mention 'TVA non applicable - article 293 B du CGI'). En contrepartie, elle ne peut pas récupérer la TVA sur ses achats."},

{id:24,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"Le taux normal de TVA (Taxe sur la Valeur Ajoutée) en France pour les prestations de transport est de :",
r:[{t:"5,5 %"},{t:"10 %"},{t:"20 %",ok:true},{t:"25 %"}],
x:"Bonne réponse : 20 %. Le taux normal de TVA en France est de 20 %. Les prestations de transport de marchandises sont soumises au taux normal de 20 %. Des taux réduits (10 % ou 5,5 %) s'appliquent à certains produits ou services spécifiques."},

{id:25,prog:'LEGER',theme:'cl-fiscal',d:3,
e:"L'impôt sur les sociétés (IS) concerne :",
r:[{t:"Toutes les entreprises sans exception"},{t:"Les sociétés de personnes exclusivement"},{t:"Les sociétés de capitaux (SA, SAS, SARL) de droit commun",ok:true},{t:"Uniquement les entreprises dont le chiffre d'affaires dépasse 500 000 €"}],
x:"Bonne réponse : Les sociétés de capitaux (SA, SAS, SARL) de droit commun. L'impôt sur les sociétés (IS) s'applique de droit aux sociétés de capitaux (SA, SAS, SARL…). Le taux normal est de 25 %. Un taux réduit de 15 % s'applique sur les 42 500 premiers euros de bénéfice pour les PME répondant à certains critères."},

{id:26,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"La taxe sur les véhicules de sociétés (TVS) s'applique aux :",
r:[{t:"Véhicules utilitaires légers (VUL) de toutes les entreprises"},{t:"Véhicules de tourisme utilisés ou possédés par les sociétés",ok:true},{t:"Camions de plus de 3,5 tonnes"},{t:"Tous les véhicules des sociétés sans exception"}],
x:"Bonne réponse : Véhicules de tourisme utilisés ou possédés par les sociétés. La TVS (remplacée par une taxe sur les émissions depuis 2022) concerne les véhicules de tourisme (catégorie M1) utilisés ou possédés par les sociétés soumises à l'IS ou à l'IR selon les BIC/BA. Les VUL et véhicules utilitaires professionnels ne sont pas concernés."},

{id:27,prog:'LEGER',theme:'cl-fiscal',d:3,
e:"Le taux de cotisations sociales de l'auto-entrepreneur pour une activité de prestation de services BIC (Bénéfices Industriels et Commerciaux, incluant le transport pour compte d'autrui) est de :",
r:[{t:"6,4 %"},{t:"12,3 % (vente de marchandises)"},{t:"21,2 %",ok:true},{t:"33 %"}],
x:"Bonne réponse : 21,2 %. Pour les prestations de services BIC (dont le transport pour compte d'autrui), le taux de cotisations sociales de l'auto-entrepreneur est de 21,2 % du chiffre d'affaires (2025-2026). Le taux de 12,3 % concerne uniquement l'achat-revente de marchandises."},

{id:28,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"La franchise en base de TVA (Taxe sur la Valeur Ajoutée) pour un prestataire de services s'applique si le chiffre d'affaires annuel est inférieur à :",
r:[{t:"10 000 €"},{t:"37 500 €",ok:true},{t:"85 000 €"},{t:"188 700 €"}],
x:"Bonne réponse : 37 500 €. Depuis le 1er janvier 2026, le seuil de franchise en base de TVA pour les prestataires de services est de 37 500 € (seuil majoré de tolérance : 41 250 €). Pour les ventes de marchandises, le seuil est de 85 000 €."},

{id:29,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"La récupération de TVA (Taxe sur la Valeur Ajoutée) sur le carburant gazole utilisé par les véhicules utilitaires légers (VUL) de moins de 3,5t est :",
r:[{t:"Totalement déductible à 100 %"},{t:"Partiellement déductible à 80 %",ok:true},{t:"Non déductible"},{t:"Déductible à 50 %"}],
x:"Bonne réponse : Partiellement déductible à 80 %. Pour les VUL (véhicules utilitaires légers de moins de 3,5t), la TVA sur le gazole est récupérable à hauteur de 80 %. Pour les camions (>3,5t), la TVA gazole est récupérable à 100 %."},

{id:30,prog:'LEGER',theme:'cl-fiscal',d:3,
e:"La contribution économique territoriale (CET) comprend :",
r:[{t:"La cotisation foncière des entreprises (CFE) uniquement"},{t:"La cotisation sur la valeur ajoutée (CVAE) uniquement"},{t:"La cotisation foncière des entreprises (CFE) et la cotisation sur la valeur ajoutée des entreprises (CVAE)",ok:true},{t:"L'impôt sur les sociétés et la taxe professionnelle"}],
x:"Bonne réponse : La cotisation foncière des entreprises (CFE) et la cotisation sur la valeur ajoutée des entreprises (CVAE). La contribution économique territoriale (CET) remplace l'ancienne taxe professionnelle depuis 2010. Elle comprend la CFE (Cotisation Foncière des Entreprises), assise sur la valeur locative des biens, et la CVAE (Cotisation sur la Valeur Ajoutée des Entreprises)."},

{id:31,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"La TICPE (Taxe Intérieure de Consommation sur les Produits Énergétiques) est :",
r:[{t:"Une taxe sur les bénéfices des entreprises pétrolières"},{t:"Une taxe versée par les entreprises utilisatrices de carburant à l'État",ok:true},{t:"Un remboursement automatique de taxe pour les transporteurs"},{t:"Une cotisation sociale sur les salaires des chauffeurs"}],
x:"Bonne réponse : Une taxe versée par les entreprises utilisatrices de carburant à l'État. La TICPE est une taxe indirecte incluse dans le prix du carburant, payée à l'État lors de l'achat. Les transporteurs routiers professionnels bénéficient d'un remboursement partiel forfaitaire de TICPE sur le gazole professionnel."},

{id:32,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"Le registre unique du personnel doit être conservé par l'employeur pendant :",
r:[{t:"3 ans après le départ du salarié"},{t:"5 ans après le départ du dernier salarié inscrit",ok:true},{t:"10 ans"},{t:"Indéfiniment"}],
x:"Bonne réponse : 5 ans après le départ du dernier salarié inscrit. Le registre unique du personnel doit être conservé pendant 5 ans après la date à laquelle le dernier salarié inscrit a quitté l'établissement (art. L.1221-13 du Code du travail)."},

{id:33,prog:'LEGER',theme:'cl-social',d:1,
e:"Un examen médical de reprise doit être organisé au bénéfice d'un salarié après un arrêt de travail pour maladie non professionnelle d'une durée d'au moins :",
r:[{t:"3 jours"},{t:"21 jours"},{t:"30 jours",ok:true},{t:"60 jours"}],
x:"Bonne réponse : 30 jours. Depuis 2017, la visite de reprise est obligatoire après un arrêt de travail pour maladie non professionnelle d'au moins 30 jours (ou pour maladie professionnelle quelle qu'en soit la durée, ou après une maternité)."},

{id:34,prog:'LEGER',theme:'cl-social',d:2,
e:"En cas de licenciement individuel pour motif économique, l'employeur doit informer l'administration du travail :",
r:[{t:"Avant l'entretien préalable"},{t:"Après l'entretien préalable"},{t:"Dans les 8 jours suivant l'envoi de la lettre de licenciement",ok:true},{t:"Avant la fin du délai-congé (préavis)"}],
x:"Bonne réponse : Dans les 8 jours suivant l'envoi de la lettre de licenciement. Pour un licenciement économique individuel, l'employeur doit notifier l'administration (DREETS) dans les 8 jours ouvrables qui suivent l'envoi de la lettre de licenciement (art. R.1233-2 du Code du travail)."},

{id:35,prog:'LEGER',theme:'cl-social',d:1,
e:"Un contrat de travail à durée déterminée (CDD) peut être conclu pour :",
r:[{t:"Remplacer un salarié dont le contrat est suspendu suite à un conflit collectif"},{t:"Embaucher un salarié en vue de vérifier ses aptitudes, dans l'attente d'une embauche définitive"},{t:"Remplacer un salarié temporairement absent pendant la durée de son absence",ok:true},{t:"Réembaucher un salarié licencié pour motif économique dans le mois précédent"}],
x:"Bonne réponse : Remplacer un salarié temporairement absent pendant la durée de son absence. Un CDD peut être conclu pour remplacer un salarié absent (maladie, congé maternité, etc.) pendant toute la durée de son absence. En revanche, il ne peut pas être conclu pour remplacer un salarié dont le contrat est suspendu suite à un conflit collectif."},

{id:36,prog:'LEGER',theme:'cl-social',d:2,
e:"Sauf danger immédiat pour la sécurité, une inaptitude définitive au poste de travail est reconnue :",
r:[{t:"Par le médecin traitant après un examen médical"},{t:"Par le médecin du travail après au moins un examen médical et une étude de poste",ok:true},{t:"Par le salarié lui-même"},{t:"Par l'employeur après avis du médecin du travail et du CSE (Comité Social et Économique)"}],
x:"Bonne réponse : Par le médecin du travail après au moins un examen médical et une étude de poste. L'inaptitude est reconnue par le médecin du travail (et non le médecin traitant) après au moins un examen médical et une étude du poste, sauf en cas de danger immédiat pour la santé ou la sécurité du salarié ou de tiers."},

{id:37,prog:'LEGER',theme:'cl-social',d:2,
e:"À l'occasion d'un licenciement notifié par lettre recommandée avec accusé de réception, le préavis débute :",
r:[{t:"Lors de la remise effective de la lettre par le facteur au salarié"},{t:"Lors de la présentation de la lettre au domicile du salarié, même si celui-ci est absent",ok:true},{t:"Lors du retrait de la lettre à la poste par le salarié absent"},{t:"À la date d'expédition de la lettre recommandée"}],
x:"Bonne réponse : Lors de la présentation de la lettre au domicile du salarié, même si celui-ci est absent. Le préavis commence à courir à la date de première présentation de la lettre recommandée au domicile du salarié, même si celui-ci est absent et ne l'a pas encore retirée."},

{id:38,prog:'LEGER',theme:'cl-social',d:1,
e:"Le congé de paternité et d'accueil de l'enfant est actuellement de :",
r:[{t:"11 jours calendaires"},{t:"25 jours calendaires (hors congé de naissance)"},{t:"28 jours calendaires au total",ok:true},{t:"7 jours ouvrés"}],
x:"Bonne réponse : 28 jours calendaires au total. Depuis le 1er juillet 2021, le congé total est de 28 jours : 3 jours de congé de naissance (payés par l'employeur) + 25 jours de congé paternité (indemnisés par la CPAM). Les 4 premiers jours du congé paternité sont obligatoires et doivent être pris immédiatement après la naissance."},

{id:39,prog:'LEGER',theme:'cl-social',d:2,
e:"Le congé maternité pour un premier ou deuxième enfant est de :",
r:[{t:"14 semaines (6 avant + 8 après)"},{t:"16 semaines (6 avant + 10 après)",ok:true},{t:"18 semaines (6 avant + 12 après)"},{t:"26 semaines (8 avant + 18 après)"}],
x:"Bonne réponse : 16 semaines (6 avant + 10 après). Pour un 1er ou 2ème enfant, le congé maternité est de 16 semaines : 6 semaines avant et 10 semaines après l'accouchement. Il est porté à 26 semaines pour une naissance à partir du 3ème enfant."},

{id:40,prog:'LEGER',theme:'cl-social',d:3,
e:"Le dépôt du règlement intérieur d'une entreprise doit être effectué :",
r:[{t:"Au secrétariat-greffe du conseil de prud'hommes et auprès de l'inspecteur du travail",ok:true},{t:"Au service des transports de la DREAL (Direction Régionale de l'Environnement, de l'Aménagement et du Logement)"},{t:"Au greffe du tribunal de commerce"},{t:"Au greffe du tribunal judiciaire"}],
x:"Bonne réponse : Au secrétariat-greffe du conseil de prud'hommes et auprès de l'inspecteur du travail. Le règlement intérieur doit être déposé au secrétariat-greffe du conseil de prud'hommes dans le ressort duquel l'entreprise est située, et notifié à l'inspecteur du travail (art. R.1321-4 du Code du travail)."},

{id:41,prog:'LEGER',theme:'cl-social',d:2,
e:"L'établissement d'un règlement intérieur est obligatoire dans les entreprises à partir de :",
r:[{t:"10 salariés"},{t:"11 salariés pendant 12 mois consécutifs",ok:true},{t:"20 salariés"},{t:"50 salariés"}],
x:"Bonne réponse : 11 salariés pendant 12 mois consécutifs. Depuis 2020, le règlement intérieur est obligatoire dans toute entreprise employant au moins 50 salariés. Attention : le CSE (Comité Social et Économique) est obligatoire à partir de 11 salariés pendant 12 mois consécutifs, ce qui est différent."},

{id:42,prog:'LEGER',theme:'cl-social',d:2,
e:"La rupture conventionnelle du contrat de travail :",
r:[{t:"Prive le salarié de ses droits à l'assurance chômage"},{t:"Est une démission déguisée"},{t:"Est un accord d'un commun accord entre employeur et salarié, avec droit aux allocations chômage",ok:true},{t:"N'ouvre droit à aucune indemnité pour le salarié"}],
x:"Bonne réponse : Est un accord d'un commun accord entre employeur et salarié, avec droit aux allocations chômage. La rupture conventionnelle (art. L.1237-11 du Code du travail) est une modalité de rupture d'un CDI d'un commun accord. Le salarié perçoit une indemnité spécifique (au moins égale à l'indemnité légale de licenciement) et peut percevoir les allocations chômage."},

{id:43,prog:'LEGER',theme:'cl-social',d:1,
e:"La durée maximale légale de travail hebdomadaire en France est de :",
r:[{t:"35 heures"},{t:"39 heures"},{t:"48 heures",ok:true},{t:"60 heures"}],
x:"Bonne réponse : 48 heures. La durée maximale absolue de travail est fixée à 48 heures par semaine (art. L.3121-20 du Code du travail). La durée légale de 35 heures est le seuil à partir duquel les heures supplémentaires sont déclenchées, mais ce n'est pas le maximum."},

{id:44,prog:'LEGER',theme:'cl-social',d:2,
e:"Selon la convention collective nationale des transports routiers (CCNTR), la période d'essai non renouvelable d'un conducteur embauché en CDI (Contrat à Durée Indéterminée) est de :",
r:[{t:"Une semaine"},{t:"Quinze jours"},{t:"Un mois"},{t:"Deux mois",ok:true}],
x:"Bonne réponse : Deux mois. Selon l'annexe 1 de la convention collective des transports routiers, la période d'essai d'un conducteur routier embauché en CDI est de 2 mois non renouvelables."},

{id:45,prog:'LEGER',theme:'cl-social',d:3,
e:"Le SMIC (Salaire Minimum Interprofessionnel de Croissance) horaire brut en France en 2026 est d'environ :",
r:[{t:"11,65 €"},{t:"11,88 €"},{t:"12,02 €",ok:true},{t:"12,50 €"}],
x:"Bonne réponse : 12,02 €. Le SMIC horaire brut est de 12,02 € depuis le 1er janvier 2026 (décret n°2025-1228), soit un SMIC mensuel brut de 1 823,03 € pour 35h/semaine. Il est revalorisé automatiquement, au moins chaque 1er janvier."},

{id:46,prog:'LEGER',theme:'cl-social',d:2,
e:"La garantie AGS (Association pour la Gestion des créances des Salariés) intervient :",
r:[{t:"En cas de grève prolongée dans l'entreprise"},{t:"Lorsque l'entreprise est en redressement ou liquidation judiciaire",ok:true},{t:"En cas de retard de paiement des salaires de plus de 30 jours"},{t:"Uniquement pour les entreprises de plus de 50 salariés"}],
x:"Bonne réponse : Lorsque l'entreprise est en redressement ou liquidation judiciaire. L'AGS garantit le paiement des créances salariales (salaires, préavis, indemnités de licenciement) en cas d'ouverture d'une procédure de redressement ou liquidation judiciaire. Elle est financée par une cotisation patronale."},

{id:47,prog:'LEGER',theme:'cl-social',d:1,
e:"Le CPF (Compte Personnel de Formation) est alimenté à hauteur de :",
r:[{t:"200 €/an pour tous les salariés sans distinction"},{t:"500 €/an pour les salariés sans qualification (plafond 5 000 €)"},{t:"500 €/an pour les salariés avec au moins un niveau bac (plafond 5 000 €)",ok:true},{t:"800 €/an pour tous les salariés (plafond 8 000 €)"}],
x:"Bonne réponse : 500 €/an pour les salariés avec au moins un niveau bac (plafond 5 000 €). Le CPF (Compte Personnel de Formation) est alimenté à 500 €/an pour les salariés à temps plein ayant au moins un niveau bac (plafond 5 000 €), et à 800 €/an pour les salariés sans qualification (plafond 8 000 €)."},

{id:48,prog:'LEGER',theme:'cl-gestion',d:1,
e:"Le seuil de rentabilité (ou point mort) est atteint lorsque :",
r:[{t:"L'entreprise dégage sa marge bénéficiaire prévisionnelle"},{t:"Le chiffre d'affaires permet de couvrir les charges fixes uniquement"},{t:"Le chiffre d'affaires permet de couvrir toutes les charges (fixes et variables)",ok:true},{t:"Le chiffre d'affaires permet de couvrir les charges sociales"}],
x:"Bonne réponse : Le chiffre d'affaires permet de couvrir toutes les charges (fixes et variables). Le seuil de rentabilité est le niveau de chiffre d'affaires à partir duquel l'entreprise couvre l'intégralité de ses charges (fixes + variables) et commence à dégager un bénéfice. En dessous, elle est en perte."},

{id:49,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Les disponibilités au bilan représentent :",
r:[{t:"Les sommes encaissées tout au long de l'exercice"},{t:"L'apport financier de l'entreprise ou des associés"},{t:"Les liquidités dont dispose l'entreprise à la date du bilan",ok:true},{t:"Le bénéfice net de l'entreprise"}],
x:"Bonne réponse : Les liquidités dont dispose l'entreprise à la date du bilan. Les disponibilités représentent les fonds immédiatement disponibles : soldes des comptes bancaires, solde caisse, valeurs mobilières de placement immédiatement réalisables. C'est la trésorerie active au sens strict."},

{id:50,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le fonds de roulement net global (FRNG) se calcule ainsi :",
r:[{t:"Capitaux propres − actif immobilisé"},{t:"(Capitaux propres + dettes à plus d'un an) − actif immobilisé",ok:true},{t:"Dettes à court terme − actif circulant"},{t:"Actif circulant − passif circulant"}],
x:"Bonne réponse : (Capitaux propres + dettes à plus d'un an) − actif immobilisé. Le FRNG (Fonds de Roulement Net Global) = Ressources stables (capitaux propres + emprunts LT) − Emplois stables (actif immobilisé net). Un FRNG positif signifie que les ressources stables financent non seulement les immobilisations mais aussi une partie de l'actif circulant."},

{id:51,prog:'LEGER',theme:'cl-gestion',d:3,
e:"Le DSO (Days Sales Outstanding, ou délai moyen de règlement clients) se calcule ainsi :",
r:[{t:"CA (Chiffre d'Affaires) / Créances clients × 360"},{t:"Créances clients TTC / CA TTC × 360",ok:true},{t:"CA / Total actif"},{t:"Résultat / Créances clients"}],
x:"Bonne réponse : Créances clients TTC / CA TTC × 360. DSO = Créances clients TTC / CA TTC × 360 jours. Il mesure le délai moyen d'encaissement des factures clients. Plus le DSO est court, mieux c'est pour la trésorerie. Un DSO de 45 jours signifie que les clients paient en moyenne 45 jours après la facturation."},

{id:52,prog:'LEGER',theme:'cl-gestion',d:2,
e:"La capacité d'autofinancement (CAF) correspond à :",
r:[{t:"Le bénéfice net après impôt uniquement"},{t:"Les ressources internes générées par l'activité, indépendantes des opérations en capital",ok:true},{t:"La différence entre actif circulant et passif circulant"},{t:"Le montant des amortissements de l'exercice"}],
x:"Bonne réponse : Les ressources internes générées par l'activité, indépendantes des opérations en capital. La CAF mesure la capacité de l'entreprise à générer des ressources par son activité. Formule simplifiée : CAF = Résultat net + Dotations aux amortissements et provisions − Reprises. Elle sert à rembourser les emprunts, investir, distribuer des dividendes."},

{id:53,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le crédit-bail (leasing) présente comme avantage principal pour un transporteur :",
r:[{t:"La propriété immédiate du véhicule dès le premier loyer"},{t:"L'absence de tout engagement contractuel sur la durée"},{t:"La préservation de la trésorerie et la déductibilité des loyers en charges",ok:true},{t:"Un coût global inférieur à l'achat comptant"}],
x:"Bonne réponse : La préservation de la trésorerie et la déductibilité des loyers en charges. Le crédit-bail préserve la trésorerie (pas d'immobilisation de capital), les loyers sont déductibles en charges d'exploitation, et le véhicule est récent. En contrepartie, le coût global est supérieur à l'achat comptant et l'entreprise n'est pas propriétaire pendant le contrat."},

{id:54,prog:'LEGER',theme:'cl-gestion',d:3,
e:"Le ratio d'indépendance financière se calcule ainsi :",
r:[{t:"Chiffre d'affaires / Dettes financières"},{t:"(Capitaux propres + provisions pour risques) / Dettes financières",ok:true},{t:"Actif immobilisé / Capitaux permanents"},{t:"Résultat net / Capitaux propres"}],
x:"Bonne réponse : (Capitaux propres + provisions pour risques) / Dettes financières. Le ratio d'indépendance financière = (Capitaux propres + provisions pour risques et charges) / Dettes financières. Plus ce ratio est élevé, plus l'entreprise est financièrement indépendante. Un ratio supérieur à 1 est généralement considéré comme sain."},

{id:55,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le besoin en fonds de roulement (BFR) représente :",
r:[{t:"Le montant des emprunts à long terme nécessaires à l'activité"},{t:"Le décalage de trésorerie lié au cycle d'exploitation",ok:true},{t:"La différence entre actif immobilisé et capitaux propres"},{t:"Le montant minimum de trésorerie à conserver"}],
x:"Bonne réponse : Le décalage de trésorerie lié au cycle d'exploitation. Le BFR représente le besoin de financement généré par le cycle d'exploitation : l'entreprise doit financer ses stocks et ses créances clients avant d'encaisser ses recettes, tout en ayant déjà réglé ses fournisseurs. BFR = (Stocks + Créances) − Dettes fournisseurs et fiscales/sociales."},

{id:56,prog:'LEGER',theme:'cl-gestion',d:1,
e:"Le plan de trésorerie prévisionnel permet à l'entreprise de :",
r:[{t:"Calculer son résultat fiscal pour l'exercice"},{t:"Prévoir les besoins et les excédents de trésorerie dans le temps",ok:true},{t:"Établir le bilan comptable prévisionnelle"},{t:"Planifier les effectifs de l'entreprise"}],
x:"Bonne réponse : Prévoir les besoins et les excédents de trésorerie dans le temps. Le plan de trésorerie est un tableau prévisionnel mensuel des encaissements et décaissements. Il permet d'anticiper les périodes de tension ou d'excédent de trésorerie et de prendre des décisions adaptées (ligne de crédit, placement…)."},

{id:57,prog:'LEGER',theme:'cl-gestion',d:3,
e:"La valeur ajoutée (VA) d'une entreprise se calcule ainsi :",
r:[{t:"Chiffre d'affaires − Achats de marchandises"},{t:"Production (ventes + variation de stocks) − Consommations intermédiaires",ok:true},{t:"Résultat d'exploitation − Dotations aux amortissements"},{t:"Excédent brut d'exploitation − Charges financières"}],
x:"Bonne réponse : Production (ventes + variation de stocks) − Consommations intermédiaires. La valeur ajoutée (VA) = Production (chiffre d'affaires ± variation stocks) − Consommations en provenance des tiers (achats de matières, sous-traitance, services externes). Elle mesure la richesse créée par l'entreprise."},

{id:58,prog:'LEGER',theme:'cl-gestion',d:2,
e:"L'amortissement comptable d'un véhicule représente :",
r:[{t:"La valeur de revente du véhicule"},{t:"La dépréciation annuelle du véhicule inscrite en charge",ok:true},{t:"Le montant total des réparations effectuées"},{t:"La différence entre prix d'achat et valeur assurée"}],
x:"Bonne réponse : La dépréciation annuelle du véhicule inscrite en charge. L'amortissement comptable représente la dépréciation progressive d'un bien liée à l'usure ou à l'obsolescence. Pour un VUL, on applique généralement un amortissement linéaire sur 4 à 5 ans. Il constitue une charge non décaissée qui réduit le résultat imposable."},

{id:59,prog:'LEGER',theme:'cl-gestion',d:3,
e:"Le plan de financement d'une nouvelle entreprise de transport permet de :",
r:[{t:"Calculer le seuil de rentabilité de la première année"},{t:"Vérifier l'équilibre entre les besoins (investissements, BFR) et les ressources disponibles",ok:true},{t:"Prévoir les recrutements nécessaires"},{t:"Établir le budget prévisionnel de publicité"}],
x:"Bonne réponse : Vérifier l'équilibre entre les besoins (investissements, BFR) et les ressources disponibles. Le plan de financement met en regard les besoins (immobilisations, BFR, remboursements d'emprunts) et les ressources (apports, emprunts, CAF) sur plusieurs années. Il permet de vérifier l'équilibre financier du projet et de prévoir les éventuels besoins de financement complémentaire."},

{id:60,prog:'LEGER',theme:'cl-regl',d:1,
e:"Pour exercer le transport public routier de marchandises pour compte d'autrui avec un VUL (Véhicule Utilitaire Léger) de moins de 3,5t, il faut :",
r:[{t:"Uniquement un permis B en cours de validité"},{t:"Une inscription au registre des transporteurs et une capacité professionnelle transport léger",ok:true},{t:"Un permis C et une attestation FIMO (Formation Initiale Minimale Obligatoire)"},{t:"Uniquement un numéro SIRET actif"}],
x:"Bonne réponse : Une inscription au registre des transporteurs et une capacité professionnelle transport léger. Pour exercer le transport public de marchandises avec des véhicules ≤3,5t, l'exploitant doit satisfaire les 3 conditions d'accès : honorabilité professionnelle, capacité financière et capacité professionnelle. L'entreprise doit être inscrite au registre des transporteurs tenu par la DREAL."},

{id:61,prog:'LEGER',theme:'cl-regl',d:2,
e:"Lors d'un contrôle routier, le conducteur d'un VUL (Véhicule Utilitaire Léger) effectuant du transport public de marchandises doit présenter :",
r:[{t:"Une copie certifiée conforme de la licence communautaire"},{t:"L'original de la licence de transport intérieur"},{t:"Une lettre de voiture et la copie certifiée conforme de la licence de transport intérieur",ok:true},{t:"Uniquement sa carte d'identité et le permis de conduire"}],
x:"Bonne réponse : Une lettre de voiture et la copie certifiée conforme de la licence de transport intérieur. Pour un transport public routier de marchandises avec un VUL, le conducteur doit avoir à bord : la lettre de voiture, la copie certifiée conforme de la licence de transport intérieur (LTI) pour les véhicules >3,5t ou le document attestant l'inscription au registre pour les <3,5t."},

{id:62,prog:'LEGER',theme:'cl-regl',d:2,
e:"La lettre de voiture en transport national :",
r:[{t:"Doit être rédigée obligatoirement en 4 exemplaires"},{t:"Est un document dont la forme et le fond sont libres",ok:true},{t:"Est utilisée uniquement pour les envois de plus de 3 tonnes"},{t:"Doit être enregistrée sur un répertoire chez le transporteur"}],
x:"Bonne réponse : Est un document dont la forme et le fond sont libres. La lettre de voiture nationale n'a pas de forme légalement imposée (contrairement à la CMR en international). Elle doit cependant mentionner certaines informations essentielles (expéditeur, destinataire, marchandise, transporteur) pour valoir preuve du contrat de transport."},

{id:63,prog:'LEGER',theme:'cl-regl',d:3,
e:"Selon le contrat type dit 'général' applicable aux transports publics de marchandises, pour les envois de 3 tonnes et plus, le chargement et l'arrimage sont à la charge de :",
r:[{t:"L'expéditeur",ok:true},{t:"Du transporteur"},{t:"Du destinataire"},{t:"Du conducteur exclusivement"}],
x:"Bonne réponse : L'expéditeur. Pour les envois ≥3 tonnes, le contrat type 'général' prévoit que le chargement, le calage et l'arrimage sont à la charge de l'expéditeur. Pour les envois <3 tonnes, ces opérations incombent au transporteur."},

{id:64,prog:'LEGER',theme:'cl-regl',d:2,
e:"La ZFE-m (Zone à Faibles Émissions mobilité) implique pour un transporteur VUL (Véhicule Utilitaire Léger) :",
r:[{t:"Une interdiction totale de circuler dans les agglomérations"},{t:"L'obligation d'apposer une vignette Crit'Air et des restrictions de circulation selon le niveau d'émissions",ok:true},{t:"Le remplacement obligatoire du parc de véhicules en 2025"},{t:"Uniquement des contraintes pour les poids lourds"}],
x:"Bonne réponse : L'obligation d'apposer une vignette Crit'Air et des restrictions de circulation selon le niveau d'émissions. Les ZFE-m restreignent la circulation selon la vignette Crit'Air (classement en 6 niveaux selon les émissions polluantes) du véhicule. Les VUL sont concernés au même titre que les voitures particulières et les poids lourds dans les agglomérations concernées."},

{id:65,prog:'LEGER',theme:'cl-regl',d:1,
e:"Les contrats types pour les transports routiers de marchandises s'appliquent :",
r:[{t:"Obligatoirement dans tous les cas"},{t:"Uniquement aux transports internationaux"},{t:"Quand les parties n'ont pas fixé les modalités dans une convention écrite",ok:true},{t:"Uniquement quand les parties se sont accordées expressément"}],
x:"Bonne réponse : Quand les parties n'ont pas fixé les modalités dans une convention écrite. Les contrats types (arrêté du 5 mai 1988) s'appliquent de plein droit quand les parties n'ont pas conclu de contrat écrit spécifique. Ils peuvent être écartés par une convention particulière plus favorable."},

{id:66,prog:'LEGER',theme:'cl-regl',d:3,
e:"Selon l'article L.3221-3 du Code des transports, la disposition encadrant les relations de sous-traitance dans le transport public routier de marchandises s'applique au contrat conclu entre :",
r:[{t:"Un transporteur public et un chargeur"},{t:"Un commissionnaire de transport et un chargeur"},{t:"Un transporteur public et un commissionnaire de transport",ok:true},{t:"Un loueur de véhicules sans conducteur et son locataire"}],
x:"Bonne réponse : Un transporteur public et un commissionnaire de transport. L'article L.3221-3 du Code des transports, qui impose notamment l'obligation de prix rémunérateur, s'applique aux contrats de sous-traitance entre transporteurs publics et entre commissionnaires de transport et transporteurs publics."},

{id:67,prog:'LEGER',theme:'cl-regl',d:2,
e:"La lettre de voiture doit être conservée par l'entreprise de transport pour être présentée à toute réquisition pendant :",
r:[{t:"1 an"},{t:"2 ans",ok:true},{t:"3 ans"},{t:"5 ans"}],
x:"Bonne réponse : 2 ans. Les documents de transport (lettres de voiture, documents de location) doivent être conservés pendant 2 ans par l'entreprise de transport, conformément à l'arrêté du 9 novembre 1999."},

{id:68,prog:'LEGER',theme:'cl-regl',d:2,
e:"Toute prestation annexe non prévue au contrat de transport initial :",
r:[{t:"Autorise le transporteur à renégocier son contrat"},{t:"N'ouvre aucun droit pour le transporteur à un complément de rémunération"},{t:"Ouvre droit pour le transporteur à un complément de rémunération",ok:true},{t:"Autorise le transporteur à mettre fin au contrat"}],
x:"Bonne réponse : Ouvre droit pour le transporteur à un complément de rémunération. Selon l'article L.3222-5 du Code des transports, toute prestation annexe non prévue au contrat de transport (attente anormale, déchargement non prévu, etc.) ouvre droit à un complément de rémunération pour le transporteur."},

{id:69,prog:'LEGER',theme:'cl-regl',d:3,
e:"En transport national, en cas de dommage constaté à la livraison, le destinataire doit confirmer ses réserves par écrit au transporteur dans un délai de :",
r:[{t:"24 heures"},{t:"3 jours non compris les jours fériés",ok:true},{t:"7 jours calendaires"},{t:"30 jours à compter de la livraison"}],
x:"Bonne réponse : 3 jours non compris les jours fériés. Si les réserves émises à la livraison ne sont pas acceptées par le transporteur, le destinataire doit les confirmer par écrit (protestation motivée) dans les 3 jours non fériés suivant la livraison (art. L.133-3 du Code de commerce)."},

{id:70,prog:'LEGER',theme:'cl-regl',d:2,
e:"Un transporteur qui n'est pas inscrit au registre des commissionnaires peut avoir recours à la sous-traitance sans dépasser, par rapport à son chiffre d'affaires transport annuel, une limite de :",
r:[{t:"10 %"},{t:"15 %"},{t:"20 %"},{t:"25 %",ok:true}],
x:"Bonne réponse : 25 %. Un transporteur non inscrit au registre des commissionnaires peut sous-traiter jusqu'à 25 % de son chiffre d'affaires transport annuel pour faire face à des surcharges temporaires d'activité. Au-delà, il doit s'inscrire comme commissionnaire."},

{id:71,prog:'LEGER',theme:'cl-regl',d:1,
e:"La responsabilité du transporteur routier public de marchandises pour les dommages aux marchandises est une responsabilité :",
r:[{t:"Basée sur la preuve d'une faute de sa part"},{t:"De plein droit (présomption de responsabilité)",ok:true},{t:"Limitée aux seuls dommages matériels visibles"},{t:"Partagée obligatoirement avec l'expéditeur"}],
x:"Bonne réponse : De plein droit (présomption de responsabilité). Le transporteur est présumé responsable de toute perte ou avarie survenue entre la prise en charge et la livraison de la marchandise, sans que le donneur d'ordre ait à prouver une faute. Cette présomption peut être renversée par la preuve d'un cas d'exonération."},

{id:72,prog:'LEGER',theme:'cl-acces',d:1,
e:"Les 3 conditions d'accès à la profession de transporteur public routier de marchandises sont :",
r:[{t:"Permis de conduire, assurance RC (Responsabilité Civile), capital minimum de 10 000 €"},{t:"Honorabilité professionnelle, capacité financière, capacité professionnelle",ok:true},{t:"Inscription au RCS (Registre du Commerce et des Sociétés), permis C, FIMO (Formation Initiale Minimale Obligatoire)"},{t:"Numéro SIRET, déclaration URSSAF, permis de conduire catégorie C"}],
x:"Bonne réponse : Honorabilité professionnelle, capacité financière, capacité professionnelle. Les 3 conditions cumulatives pour exercer la profession de transporteur public routier de marchandises sont : 1) Honorabilité professionnelle (absence de condamnations incompatibles), 2) Capacité financière (fonds propres suffisants), 3) Capacité professionnelle (attestation CPC)."},

{id:73,prog:'LEGER',theme:'cl-acces',d:2,
e:"La capacité financière minimale pour une entreprise de transport léger (<3,5t) est de :",
r:[{t:"1 800 € pour le premier véhicule et 900 € par véhicule supplémentaire",ok:true},{t:"9 000 € pour le premier véhicule et 5 000 € par véhicule supplémentaire"},{t:"50 000 € de capital social minimum"},{t:"100 000 € de fonds propres minimum"}],
x:"Bonne réponse : 1 800 € pour le premier véhicule et 900 € par véhicule supplémentaire. La capacité financière pour le transport léger (<3,5t) est de 1 800 € pour le 1er véhicule et 900 € par véhicule supplémentaire. Pour le transport lourd (>3,5t), elle est de 9 000 € pour le 1er et 5 000 € par véhicule supplémentaire."},

{id:74,prog:'LEGER',theme:'cl-acces',d:2,
e:"La FIMO (Formation Initiale Minimale Obligatoire) pour les conducteurs de véhicules de marchandises de plus de 3,5t dure :",
r:[{t:"35 heures (1 semaine)"},{t:"105 heures (3 semaines)"},{t:"140 heures (4 semaines)",ok:true},{t:"280 heures (8 semaines) — uniquement pour les titres professionnels"}],
x:"Bonne réponse : 140 heures (4 semaines). La FIMO est une formation accélérée de 140 heures (4 semaines) dans un centre agréé. Elle permet d'obtenir la CQC (Carte de Qualification du Conducteur). La voie longue de 280 heures correspond aux titres professionnels (CAP, Bac Pro, Titre pro conducteur) qui donnent une équivalence FIMO."},

{id:75,prog:'LEGER',theme:'cl-acces',d:1,
e:"La FCOS (Formation Continue Obligatoire de Sécurité) doit être effectuée tous les :",
r:[{t:"2 ans"},{t:"3 ans"},{t:"5 ans",ok:true},{t:"10 ans"}],
x:"Bonne réponse : 5 ans. La FCOS dure 35 heures (5 jours) et doit être effectuée dans les 5 ans suivant l'obtention de la CQC (initiale par FIMO) ou le renouvellement précédent. Elle est obligatoire pour maintenir la CQC en cours de validité."},

{id:76,prog:'LEGER',theme:'cl-acces',d:3,
e:"La commission territoriale des sanctions administratives émet :",
r:[{t:"Un avis préalablement à une décision préfectorale de sanctions pour infractions en matière de réglementation des transports et sociale",ok:true},{t:"Des décisions de sanctions administratives définitives"},{t:"Un avis préalablement à une décision d'autorisation d'exercer la profession"},{t:"Des avis de sanctions auprès du ministre des transports"}],
x:"Bonne réponse : Un avis préalablement à une décision préfectorale de sanctions pour infractions en matière de réglementation des transports et sociale. La commission territoriale des sanctions administratives (CTSA) émet un avis consultatif préalablement aux décisions préfectorales de sanctions administratives prises en matière d'infractions à la réglementation des transports et à la réglementation sociale applicable aux transporteurs routiers."},

{id:77,prog:'LEGER',theme:'cl-secu',d:1,
e:"Un véhicule isolé de moins de 3,5t de PTAC (Poids Total Autorisé en Charge) est limité sur autoroute à :",
r:[{t:"90 km/h"},{t:"110 km/h"},{t:"130 km/h",ok:true},{t:"150 km/h"}],
x:"Bonne réponse : 130 km/h. Un VUL (véhicule utilitaire léger) de moins de 3,5t de PTAC est soumis aux mêmes limitations de vitesse qu'une voiture particulière : 130 km/h sur autoroute, 110 km/h sur route à 2 chaussées séparées, 80 km/h sur route."},

{id:78,prog:'LEGER',theme:'cl-secu',d:2,
e:"La vignette Crit'Air est :",
r:[{t:"Un document fiscal remplaçant la vignette automobile supprimée"},{t:"Une certification attestant du niveau d'émissions polluantes du véhicule",ok:true},{t:"Un permis de circuler en agglomération délivré par la mairie"},{t:"Une assurance obligatoire pour la circulation en ZFE (Zone à Faibles Émissions)"}],
x:"Bonne réponse : Une certification attestant du niveau d'émissions polluantes du véhicule. La vignette Crit'Air est une pastille de couleur (6 niveaux + non classé) classifiant les véhicules selon leurs émissions polluantes. Elle est obligatoire pour circuler dans les ZFE-m et lors des pics de pollution. Elle est délivrée par le Ministère chargé de l'environnement."},

{id:79,prog:'LEGER',theme:'cl-secu',d:2,
e:"En règle générale, à l'obtention du permis de conduire, le conducteur dispose d'un capital de :",
r:[{t:"12 points dès l'obtention"},{t:"6 points puis 2 points supplémentaires par année sans infraction pendant 3 ans",ok:true},{t:"6 points définitivement et 3 autres chaque année pour atteindre 12 points"},{t:"6 points puis 6 autres au bout d'un an sans infraction"}],
x:"Bonne réponse : 6 points puis 2 points supplémentaires par année sans infraction pendant 3 ans. Un nouveau conducteur dispose de 6 points dès l'obtention du permis. Pendant la période probatoire de 3 ans, il gagne 2 points par année sans infraction (ou 3 points si aucune infraction sanctionnable), pour atteindre le capital maximum de 12 points."},

{id:80,prog:'LEGER',theme:'cl-secu',d:1,
e:"L'extincteur le plus adapté aux différents types de feux présents dans un véhicule de transport est un extincteur :",
r:[{t:"À eau"},{t:"À eau plus additif"},{t:"À gaz carbonique (CO2)"},{t:"À poudre A, B, C (polyvalent)",ok:true}],
x:"Bonne réponse : À poudre A, B, C (polyvalent). L'extincteur à poudre ABC (polyvalent) est le plus adapté aux incendies de véhicules car il permet de lutter contre les feux de matières solides (A), de liquides inflammables (B) et de gaz (C). L'extincteur CO2 est efficace sur les feux électriques mais moins polyvalent."},

{id:81,prog:'LEGER',theme:'cl-secu',d:3,
e:"Le document unique d'évaluation des risques professionnels (DUERP) doit être mis à jour :",
r:[{t:"Tous les 5 ans quelle que soit la taille de l'entreprise"},{t:"Chaque année uniquement pour les entreprises de plus de 50 salariés"},{t:"Chaque année pour les entreprises de plus de 11 salariés, sinon à chaque unité de travail",ok:true},{t:"Tous les 2 ans pour les entreprises de plus de 11 salariés"}],
x:"Bonne réponse : Chaque année pour les entreprises de plus de 11 salariés, sinon à chaque unité de travail. Le DUERP doit être mis à jour : chaque année dans les entreprises d'au moins 11 salariés, lors de toute décision d'aménagement modifiant les conditions de travail, et lors de tout accident du travail. Dans les entreprises de moins de 11 salariés, la mise à jour est faite lors de chaque nouvelle unité de travail."},

{id:82,prog:'LEGER',theme:'cl-civil',d:2,
e:"Quand une personne a pris en gérance libre une entreprise, cela signifie qu'elle est locataire au moins :",
r:[{t:"Du local commercial"},{t:"Du matériel"},{t:"Du fonds de commerce",ok:true},{t:"De l'ensemble fonds + local"}],
x:"Bonne réponse : Du fonds de commerce. La gérance libre (ou location-gérance) consiste à louer un fonds de commerce pour l'exploiter. Le gérant-locataire dispose du fonds mais n'en est pas propriétaire. Il paie une redevance au propriétaire et exploite l'activité à ses risques et périls."},

{id:83,prog:'LEGER',theme:'cl-civil',d:2,
e:"En cas de désaccord avec une décision du tribunal de commerce portant sur un montant de 7 500 €, vous pouvez saisir :",
r:[{t:"La Cour de Cassation"},{t:"La Cour d'Appel",ok:true},{t:"Le tribunal judiciaire"},{t:"La Cour d'Assises"}],
x:"Bonne réponse : La Cour d'Appel. Les décisions du tribunal de commerce peuvent être contestées devant la Cour d'Appel dans un délai d'1 mois à compter de la signification du jugement. La Cour de Cassation n'est saisie qu'en dernier recours pour contrôle de légalité."},

{id:84,prog:'LEGER',theme:'cl-civil',d:2,
e:"La dépréciation envisagée sur un stock se constate par :",
r:[{t:"Un amortissement"},{t:"Une provision",ok:true},{t:"Une perte exceptionnelle"},{t:"Une moins-value"}],
x:"Bonne réponse : Une provision. La dépréciation d'un stock se constate par une provision pour dépréciation de stock. Contrairement aux immobilisations (amortissements), les actifs circulants font l'objet de provisions pour dépréciation."},

{id:85,prog:'LEGER',theme:'cl-civil',d:1,
e:"La variation de stock calculée en fin d'exercice comptable sert à déterminer :",
r:[{t:"Le montant du stock final reporté au compte de résultat"},{t:"Le montant réel des consommations pendant l'exercice",ok:true},{t:"La partie des stocks égarée ou volée"},{t:"Les plus-values ou moins-values sur stocks"}],
x:"Bonne réponse : Le montant réel des consommations pendant l'exercice. La variation de stock (stock final - stock initial) permet de calculer les consommations réelles de l'exercice. Si le stock final est inférieur au stock initial, l'entreprise a consommé plus qu'elle n'a acheté."},

{id:86,prog:'LEGER',theme:'cl-civil',d:2,
e:"Lors d'un transport international entre la France et la Pologne, le document de transport obligatoire est :",
r:[{t:"La lettre de voiture nationale"},{t:"La lettre de voiture CMR (Convention relative au contrat de transport international de Marchandises par Route)",ok:true},{t:"Uniquement le bon de livraison"},{t:"Un document bilingue franco-polonais"}],
x:"Bonne réponse : La lettre de voiture CMR (Convention relative au contrat de transport international de Marchandises par Route). Pour tout transport international entre pays signataires de la CMR, la lettre de voiture CMR est obligatoire. Elle se compose de 3 exemplaires originaux : 1 pour l'expéditeur (rose), 1 accompagnant la marchandise (bleu), 1 conservé par le transporteur (vert)."},

{id:87,prog:'LEGER',theme:'cl-civil',d:3,
e:"Depuis le 1er janvier 2023, le RNE (Registre National des Entreprises) se substitue :",
r:[{t:"Au RCS (Registre du Commerce et des Sociétés) uniquement"},{t:"Au RM (Répertoire des Métiers) uniquement"},{t:"À l'ensemble des registres d'entreprises : RCS, RM et registre des actifs agricoles",ok:true},{t:"Uniquement au RCS des sociétés anonymes"}],
x:"Bonne réponse : À l'ensemble des registres d'entreprises : RCS, RM et registre des actifs agricoles. Depuis le 1er janvier 2023, le RNE (Registre National des Entreprises) remplace et unifie l'ensemble des registres d'entreprises : le RCS (Registre du Commerce et des Sociétés), le RM (Répertoire des Métiers) et le RAA (Registre des Actifs Agricoles)."},

{id:88,prog:'LEGER',theme:'cl-social',d:1,
e:"L'application d'une convention collective étendue est obligatoire pour :",
r:[{t:"Uniquement les employeurs ayant signé la convention"},{t:"Uniquement les employeurs qui ont demandé l'extension"},{t:"Tous les employeurs exerçant les activités entrant dans son champ d'application",ok:true},{t:"Les employeurs de la branche ayant plus de 10 salariés"}],
x:"Bonne réponse : Tous les employeurs exerçant les activités entrant dans son champ d'application. Une convention collective étendue s'applique obligatoirement à tous les employeurs de la branche concernée, qu'ils aient ou non adhéré à l'organisation patronale signataire. L'extension par arrêté ministériel la rend universellement applicable dans le secteur."},

{id:89,prog:'LEGER',theme:'cl-social',d:1,
e:"Le CSE (Comité Social et Économique) doit être constitué dans toute entreprise à partir de :",
r:[{t:"10 salariés"},{t:"11 salariés pendant 12 mois consécutifs",ok:true},{t:"20 salariés"},{t:"50 salariés"}],
x:"Bonne réponse : 11 salariés pendant 12 mois consécutifs. Le CSE (Comité Social et Économique) est obligatoire dans toute entreprise employant au moins 11 salariés pendant 12 mois consécutifs. Il remplace depuis 2020 les délégués du personnel, le comité d'entreprise et le CHSCT."},

{id:90,prog:'LEGER',theme:'cl-social',d:2,
e:"L'absence de contrat écrit à l'issue d'un CDD (Contrat à Durée Déterminée) si le salarié est maintenu dans l'entreprise entraîne :",
r:[{t:"La rupture du contrat"},{t:"Le renouvellement systématique pour la même durée"},{t:"La régularisation obligatoire par un écrit"},{t:"Un contrat réputé à durée indéterminée",ok:true}],
x:"Bonne réponse : Un contrat réputé à durée indéterminée. Si le salarié est maintenu dans l'entreprise après l'échéance de son CDD sans nouveau contrat, la relation de travail est automatiquement requalifiée en CDI (Contrat à Durée Indéterminée)."},

{id:91,prog:'LEGER',theme:'cl-social',d:2,
e:"Sauf cas particulier, la durée maximale d'un CDD (Contrat à Durée Déterminée) pour accroissement temporaire d'activité est de :",
r:[{t:"6 mois"},{t:"12 mois"},{t:"18 mois",ok:true},{t:"24 mois"}],
x:"Bonne réponse : 18 mois. Un CDD pour accroissement temporaire d'activité peut avoir une durée maximale de 18 mois, renouvellement inclus. Certains cas exceptionnels permettent 24 mois (mission à l'étranger ou attente d'une embauche en CDI)."},

{id:92,prog:'LEGER',theme:'cl-social',d:2,
e:"Suite à un accident du travail, un salarié déclaré inapte dont le reclassement est impossible doit être :",
r:[{t:"Licencié pour motif économique"},{t:"Invité à démissionner"},{t:"Licencié avec versement d'une indemnité spéciale de licenciement",ok:true},{t:"Licencié pour faute grave"}],
x:"Bonne réponse : Licencié avec versement d'une indemnité spéciale de licenciement. En cas d'inaptitude suite à un accident du travail ou maladie professionnelle, si le reclassement est impossible, l'employeur licencie le salarié et lui verse une indemnité spéciale de licenciement équivalente au double de l'indemnité légale normale."},

{id:93,prog:'LEGER',theme:'cl-gestion',d:1,
e:"L'aide unique à l'embauche d'un apprenti pour une entreprise de moins de 250 salariés (niveau bac) est de :",
r:[{t:"1 000 € la 1ère année"},{t:"5 000 € la 1ère année",ok:true},{t:"6 000 € la 1ère année"},{t:"Aucune aide spécifique"}],
x:"Bonne réponse : 5 000 € la 1ère année. L'aide à l'apprentissage 2026 (décret n°2026-168 du 6 mars 2026) est de 5 000 € maximum pour la 1ère année, pour les entreprises de moins de 250 salariés, pour les diplômes jusqu'au niveau bac. Elle est portée à 6 000 € si l'apprenti est en situation de handicap."},

{id:94,prog:'LEGER',theme:'cl-gestion',d:1,
e:"Le PASS (Plafond Annuel de la Sécurité Sociale) 2026 est fixé à :",
r:[{t:"43 992 €"},{t:"46 368 €"},{t:"48 060 €",ok:true},{t:"52 000 €"}],
x:"Bonne réponse : 48 060 €. Le PASS est fixé à 48 060 € en 2026 (soit 4 005 €/mois). Il sert de base de calcul pour les cotisations plafonnées et certaines prestations. Il est revalorisé chaque 1er janvier par arrêté ministériel."},

{id:95,prog:'LEGER',theme:'cl-regl',d:2,
e:"Selon le contrat type 'général', le délai de mise à disposition du véhicule sans rendez-vous, au-delà duquel des frais peuvent être facturés, est de :",
r:[{t:"1 heure"},{t:"2 heures",ok:true},{t:"3 heures"},{t:"4 heures"}],
x:"Bonne réponse : 2 heures. La franchise de mise à disposition au chargement est de 2 heures sans rendez-vous fixé. Au-delà, le transporteur peut facturer des frais d'immobilisation selon les barèmes prévus."},

{id:96,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"Le régime réel simplifié s'applique aux prestataires de services dont le CA (Chiffre d'Affaires) HT est compris entre :",
r:[{t:"0 et 37 500 €"},{t:"37 500 € et 254 000 €",ok:true},{t:"254 000 € et 840 000 €"},{t:"Au-delà de 840 000 €"}],
x:"Bonne réponse : 37 500 € et 254 000 €. Le régime réel simplifié s'applique aux prestataires de services dont le CA HT est compris entre 37 500 € (seuil franchise TVA) et 254 000 €. Au-delà, c'est le régime réel normal. Pour les activités de vente, les seuils sont 85 000 € à 840 000 €."},

{id:97,prog:'LEGER',theme:'cl-acces',d:2,
e:"Les véhicules pris en compte pour la capacité financière d'une entreprise de transport sont :",
r:[{t:"Ceux possédés en pleine propriété uniquement"},{t:"Ceux en propriété et en location avec conducteur"},{t:"Tous : propriété, location avec ou sans conducteur, crédit-bail",ok:true},{t:"Uniquement ceux immatriculés au nom de l'entreprise"}],
x:"Bonne réponse : Tous : propriété, location avec ou sans conducteur, crédit-bail. Pour le calcul de la capacité financière, tous les véhicules motorisés exploités sont pris en compte, quelle que soit la modalité de détention : propriété, location avec conducteur, location sans conducteur (LLD), ou crédit-bail."},

{id:98,prog:'LEGER',theme:'cl-secu',d:2,
e:"Par temps de neige dans les massifs montagneux entre le 1er novembre et le 31 mars, les poids lourds doivent être équipés de :",
r:[{t:"Pneus hiver uniquement"},{t:"Chaînes même avec des pneus hiver"},{t:"Pneus hiver OU dispositif antidérapant amovible (chaînes ou chaussettes)",ok:true},{t:"Pneus à clous uniquement"}],
x:"Bonne réponse : Pneus hiver OU dispositif antidérapant amovible (chaînes ou chaussettes). Depuis novembre 2021, dans les 48 départements de montagne, entre le 1er novembre et le 31 mars, les PL doivent être équipés de pneus hiver OU de dispositifs antidérapants amovibles (chaînes ou chaussettes à neige) sur les roues motrices."},

{id:99,prog:'LEGER',theme:'cl-civil',d:3,
e:"Dans une SARL, trois associés X, Y et Z créent une société. Z apporte 3 000 € et un véhicule à 9 000 €, soit 12 000 €. X apporte 4 500 €, Y apporte 10 000 €. Z est nommé gérant. Son statut est :",
r:[{t:"Gérant majoritaire car son apport est le plus élevé"},{t:"Gérant minoritaire car X et Y ensemble détiennent plus de 50 %",ok:true},{t:"Gérant égalitaire"},{t:"Gérant obligatoirement salarié"}],
x:"Bonne réponse : Gérant minoritaire car X et Y ensemble détiennent plus de 50 %. Parts sociales : X = 4 500/26 500 = 17 %, Y = 10 000/26 500 = 37,7 %, Z = 12 000/26 500 = 45,3 %. Z est minoritaire car il détient moins de 50 % des parts. X + Y ensemble = 54,7 % > Z. Z gérant minoritaire peut être salarié."},

{id:100,prog:'LEGER',theme:'cl-gestion',d:2,
e:"L'excédent brut d'exploitation (EBE) se calcule ainsi :",
r:[{t:"Chiffre d'affaires − Charges variables"},{t:"Valeur ajoutée + Subventions d'exploitation − Impôts et taxes − Charges de personnel",ok:true},{t:"Résultat net + Dotations aux amortissements"},{t:"Chiffre d'affaires − Charges totales"}],
x:"Bonne réponse : Valeur ajoutée + Subventions d'exploitation − Impôts et taxes − Charges de personnel. EBE = Valeur Ajoutée + Subventions d'exploitation − Impôts et taxes − Charges de personnel (salaires + charges sociales). L'EBE mesure la performance économique de l'entreprise indépendamment de sa politique de financement et d'amortissement."},

{id:101,prog:'LEGER',theme:'cl-regl',d:1,
e:"La carte entreprise du tachygraphe numérique permet principalement :",
r:[{t:"La conduite d'un véhicule équipé d'un tachygraphe numérique"},{t:"Le téléchargement des données enregistrées dans les tachygraphes numériques",ok:true},{t:"L'étalonnage du tachygraphe numérique"},{t:"La conduite et le téléchargement simultanément"}],
x:"Bonne réponse : Le téléchargement des données enregistrées dans les tachygraphes numériques. La carte entreprise permet uniquement le téléchargement (lecture) des données enregistrées dans les tachygraphes numériques de l'entreprise. La carte conducteur sert à la conduite. La carte atelier permet l'étalonnage et la programmation."},

{id:102,prog:'LEGER',theme:'cl-civil',d:2,
e:"L'action directe en paiement du transporteur routier peut être exercée contre :",
r:[{t:"Uniquement l'expéditeur"},{t:"Uniquement le destinataire"},{t:"L'expéditeur, le commissionnaire ou le destinataire",ok:true},{t:"Uniquement l'assureur de la marchandise"}],
x:"Bonne réponse : L'expéditeur, le commissionnaire ou le destinataire. Selon l'article L.132-8 du Code de commerce, le voiturier (transporteur) dispose d'une action directe en paiement contre l'expéditeur, le destinataire et le commissionnaire de transport s'il est intervenu dans la prestation."},

{id:103,prog:'LEGER',theme:'cl-civil',d:1,
e:"La prescription en transport routier national pour une perte totale de marchandise court à partir de :",
r:[{t:"La date de la prise en charge de la marchandise"},{t:"La date à laquelle la remise aurait dû être effectuée",ok:true},{t:"La date d'émission de la facture de transport"},{t:"La date des réserves du destinataire"}],
x:"Bonne réponse : La date à laquelle la remise aurait dû être effectuée. En cas de perte totale de la marchandise, la prescription d'un an court à compter du jour où la remise de la marchandise aurait dû être effectuée au destinataire (art. L.133-6 du Code de commerce)."},

{id:104,prog:'LEGER',theme:'cl-civil',d:3,
e:"Un contrat de vente avec clause 'EXW' (Ex Works - à l'usine) signifie que :",
r:[{t:"Le vendeur livre jusqu'au port de départ"},{t:"L'acheteur prend en charge la marchandise à l'usine du vendeur",ok:true},{t:"Le vendeur paie le transport jusqu'au destinataire"},{t:"Les risques sont transférés à la livraison finale"}],
x:"Bonne réponse : L'acheteur prend en charge la marchandise à l'usine du vendeur. La clause EXW (Ex Works / à l'usine) signifie que le vendeur met la marchandise à disposition dans ses locaux. L'acheteur prend en charge tous les frais et risques à partir du chargement chez le vendeur, y compris le transport principal."},

{id:105,prog:'LEGER',theme:'cl-civil',d:2,
e:"Le contrat d'assurance est un contrat :",
r:[{t:"Unilatéral"},{t:"Aléatoire",ok:true},{t:"Solennel"},{t:"Type"}],
x:"Bonne réponse : Aléatoire. Le contrat d'assurance est un contrat aléatoire car ses effets dépendent d'un événement incertain (la survenance du sinistre). L'assureur s'engage à indemniser en cas de réalisation du risque, sans savoir à l'avance si et quand cela se produira."},

{id:106,prog:'LEGER',theme:'cl-civil',d:2,
e:"Une entreprise est tenue de conserver les pièces justificatives comptables (factures, bons de commande) pendant au moins :",
r:[{t:"3 ans"},{t:"5 ans"},{t:"8 ans"},{t:"10 ans",ok:true}],
x:"Bonne réponse : 10 ans. Les documents comptables (livres, pièces justificatives) doivent être conservés pendant 10 ans (art. L.123-22 du Code de commerce). Cette obligation permet de justifier les opérations lors de contrôles fiscaux ou de litiges commerciaux."},

{id:107,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"La TVA (Taxe sur la Valeur Ajoutée) sur le carburant gazole des VUL (Véhicules Utilitaires Légers) de moins de 3,5t est récupérable à :",
r:[{t:"100 %"},{t:"80 %",ok:true},{t:"50 %"},{t:"0 % — non récupérable"}],
x:"Bonne réponse : 80 %. Pour les VUL (<3,5t), la TVA sur le gazole est récupérable à 80 %. Pour les véhicules lourds (>3,5t), elle est récupérable à 100 %. La TVA sur l'essence n'est récupérable que pour les véhicules exclusivement professionnels."},

{id:108,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"En France, les prestations de services de transport de marchandises sont soumises à un taux de TVA (Taxe sur la Valeur Ajoutée) de :",
r:[{t:"5,5 %"},{t:"10 %"},{t:"20 %",ok:true},{t:"25 %"}],
x:"Bonne réponse : 20 %. Les prestations de transport de marchandises en France sont soumises au taux normal de TVA de 20 %. Le taux réduit de 10 % s'applique notamment aux transports de voyageurs, et le taux de 5,5 % aux produits alimentaires."},

{id:109,prog:'LEGER',theme:'cl-fiscal',d:3,
e:"L'impôt sur les sociétés (IS) au taux réduit de 15 % s'applique sur les premiers :",
r:[{t:"10 000 € de bénéfice"},{t:"38 120 €"},{t:"42 500 € de bénéfice",ok:true},{t:"100 000 € de bénéfice"}],
x:"Bonne réponse : 42 500 € de bénéfice. Le taux réduit d'IS de 15 % s'applique sur les premiers 42 500 € de bénéfice imposable pour les PME dont le CA HT < 10 millions d'euros et dont le capital est détenu à 75 % minimum par des personnes physiques. Au-delà, le taux normal de 25 % s'applique."},

{id:110,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"Le remboursement partiel de la TICPE (Taxe Intérieure de Consommation sur les Produits Énergétiques) pour les transporteurs routiers professionnels :",
r:[{t:"S'applique à tous les carburants sans distinction"},{t:"S'applique uniquement au gazole professionnel",ok:true},{t:"Est versé automatiquement chaque mois"},{t:"Correspond à un remboursement total de la taxe"}],
x:"Bonne réponse : S'applique uniquement au gazole professionnel. Le remboursement partiel de TICPE s'applique uniquement au gazole (gazole professionnel) utilisé pour la traction des véhicules affectés au transport routier. Il est demandé trimestriellement ou mensuellement auprès de la DGDDI."},

{id:111,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"La TVA (Taxe sur la Valeur Ajoutée) collectée par un transporteur sur ses prestations appartient à :",
r:[{t:"Au transporteur jusqu'au versement mensuel"},{t:"À l'État dès la facturation",ok:true},{t:"Au client jusqu'au paiement de la facture"},{t:"À l'assurance du transporteur"}],
x:"Bonne réponse : À l'État dès la facturation. La TVA collectée par le transporteur sur ses prestations est une dette envers l'État dès son émission sur la facture. Le transporteur n'est qu'un intermédiaire collecteur : il doit la reverser à l'administration fiscale dans les délais légaux."},

{id:112,prog:'LEGER',theme:'cl-social',d:2,
e:"La période de référence pour le calcul des droits à congés payés dans les entreprises n'adhérant pas à une caisse de congés est :",
r:[{t:"Du 1er janvier au 31 décembre"},{t:"Du 1er avril au 31 mars suivant"},{t:"Du 1er juin au 31 mai suivant",ok:true},{t:"Du 1er octobre au 30 septembre suivant"}],
x:"Bonne réponse : Du 1er juin au 31 mai suivant. La période de référence légale pour l'acquisition des congés payés est du 1er juin au 31 mai de l'année suivante. Pour les entreprises adhérant à une caisse de congés payés du BTP, d'autres périodes peuvent s'appliquer."},

{id:113,prog:'LEGER',theme:'cl-social',d:1,
e:"Un salarié à temps plein présent toute l'année acquiert :",
r:[{t:"2 jours de congés payés par mois travaillé"},{t:"2,5 jours ouvrables de congés payés par mois travaillé",ok:true},{t:"3 jours ouvrés de congés payés par mois travaillé"},{t:"1,5 jours ouvrables par mois travaillé"}],
x:"Bonne réponse : 2,5 jours ouvrables de congés payés par mois travaillé. Un salarié à temps plein acquiert 2,5 jours ouvrables de congés payés par mois de travail effectif, soit 30 jours ouvrables (ou 25 jours ouvrés) sur une année complète."},

{id:114,prog:'LEGER',theme:'cl-social',d:2,
e:"Un salarié peut prendre la totalité de ses congés payés en une seule fois :",
r:[{t:"Toujours, c'est son droit"},{t:"Jamais, la loi impose un fractionnement"},{t:"Sauf si l'entreprise emploie moins de 21 salariés"},{t:"Non, la période de congé principal ne peut excéder 24 jours ouvrables consécutifs",ok:true}],
x:"Bonne réponse : Non, la période de congé principal ne peut excéder 24 jours ouvrables consécutifs. La loi limite le congé principal à 24 jours ouvrables consécutifs maximum (sur les 30 jours annuels). Les 6 jours restants (5e semaine) doivent être pris séparément. Des dérogations existent notamment pour les salariés ayant des contraintes familiales particulières."},

{id:115,prog:'LEGER',theme:'cl-social',d:3,
e:"L'employeur est tenu d'effectuer une DPAE (Déclaration Préalable À l'Embauche) :",
r:[{t:"Dans les 8 jours suivant l'embauche"},{t:"Au moment de la signature du contrat de travail"},{t:"Avant toute embauche, auprès de l'URSSAF",ok:true},{t:"Uniquement pour les CDI (Contrats à Durée Indéterminée)"}],
x:"Bonne réponse : Avant toute embauche, auprès de l'URSSAF. La DPAE (Déclaration Préalable à l'Embauche) doit être transmise à l'URSSAF avant toute embauche d'un nouveau salarié (y compris CDD). Elle peut être faite 8 jours avant l'embauche au plus tôt et au plus tard le jour de l'embauche."},

{id:116,prog:'LEGER',theme:'cl-social',d:2,
e:"L'engagement des poursuites disciplinaires par l'employeur doit être réalisé dans un délai maximum de :",
r:[{t:"5 jours francs"},{t:"2 semaines"},{t:"2 mois",ok:true},{t:"6 mois"}],
x:"Bonne réponse : 2 mois. L'employeur dispose d'un délai de 2 mois à compter de la connaissance des faits fautifs pour engager les poursuites disciplinaires (convocation à entretien préalable). Passé ce délai, les faits sont prescrits et ne peuvent plus fonder une sanction."},

{id:117,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Un devis de transport établi par un transporteur constitue :",
r:[{t:"Une simple indication de prix sans valeur contractuelle"},{t:"Une offre ferme engageant le transporteur pendant sa durée de validité",ok:true},{t:"Un document obligatoirement enregistré auprès de la CCI (Chambre de Commerce et d'Industrie)"},{t:"Un contrat définitif dès son établissement"}],
x:"Bonne réponse : Une offre ferme engageant le transporteur pendant sa durée de validité. Un devis constitue une offre ferme engageant son émetteur pendant la durée de validité indiquée. L'acceptation du devis par le client forme le contrat. Si aucune durée de validité n'est mentionnée, 30 jours est l'usage courant."},

{id:118,prog:'LEGER',theme:'cl-gestion',d:3,
e:"Le DSO (Days Sales Outstanding - délai moyen de règlement clients en jours) d'une entreprise de transport est de 45 jours. Cela signifie que :",
r:[{t:"Les clients paient en moyenne 45 jours avant la date d'échéance"},{t:"Les clients paient en moyenne 45 jours après la facturation",ok:true},{t:"Le délai légal maximum de paiement est de 45 jours"},{t:"L'entreprise a 45 jours de trésorerie disponible"}],
x:"Bonne réponse : Les clients paient en moyenne 45 jours après la facturation. Un DSO de 45 jours signifie que les créances clients sont encaissées en moyenne 45 jours après la facturation. Plus le DSO est élevé, plus le besoin en fonds de roulement (BFR) est important et la trésorerie sollicitée."},

{id:119,prog:'LEGER',theme:'cl-regl',d:2,
e:"Le transporteur qui arrive à l'heure convenue pour le chargement et dont le véhicule n'est pas chargé dans le délai de franchise peut :",
r:[{t:"Repartir immédiatement sans attendre"},{t:"Facturer des frais d'immobilisation pour la période dépassant la franchise",ok:true},{t:"Facturer une pénalité forfaitaire de 10 % du prix du transport"},{t:"Refuser le transport et facturer le déplacement"}],
x:"Bonne réponse : Facturer des frais d'immobilisation pour la période dépassant la franchise. Selon le contrat type 'général', au-delà du délai de franchise (2 heures sans rendez-vous), le transporteur peut facturer des frais d'immobilisation selon le barème prévu. Ces frais s'ajoutent au prix de transport et sont dus par le chargeur."},

{id:120,prog:'LEGER',theme:'cl-regl',d:1,
e:"Selon le contrat type 'général', le délai maximal accordé pour le déchargement d'un envoi de moins de 3 tonnes est de :",
r:[{t:"30 minutes"},{t:"1 heure"},{t:"2 heures",ok:true},{t:"4 heures"}],
x:"Bonne réponse : 2 heures. Selon le contrat type 'général', le délai de franchise pour les opérations de déchargement est de 2 heures pour les envois inférieurs à 3 tonnes et de 3 heures pour ceux égaux ou supérieurs à 3 tonnes (pour les ensembles >3,5t)."},

{id:121,prog:'LEGER',theme:'cl-secu',d:2,
e:"La vignette Crit'Air classe 1 (vert foncé) correspond aux véhicules :",
r:[{t:"Thermiques Euro 6 (essence récents)"},{t:"Électriques et à hydrogène uniquement"},{t:"Hybrides rechargeables et véhicules essence Euro 5 et 6",ok:true},{t:"Diesel Euro 6 uniquement"}],
x:"Bonne réponse : Hybrides rechargeables et véhicules essence Euro 5 et 6. La vignette Crit'Air classe 1 (vert) est attribuée aux véhicules hybrides rechargeables et aux véhicules à essence conformes aux normes Euro 5 et 6. La vignette de classe 0 (vert foncé) est réservée aux véhicules 100 % électriques et à hydrogène."},

{id:122,prog:'LEGER',theme:'cl-civil',d:2,
e:"Le registre du personnel unique doit comporter l'ordre des embauches et mentionne pour chaque salarié :",
r:[{t:"Uniquement le nom, prénom et la date d'entrée"},{t:"Le nom, nationalité, date de naissance, emploi, qualification, dates d'entrée et de sortie",ok:true},{t:"Le salaire et les congés pris chaque année"},{t:"Uniquement les salariés en CDI (Contrat à Durée Indéterminée)"}],
x:"Bonne réponse : Le nom, nationalité, date de naissance, emploi, qualification, dates d'entrée et de sortie. Le registre unique du personnel (art. L.1221-13 du Code du travail) doit mentionner pour chaque salarié : nom, prénom, nationalité, date de naissance, sexe, emploi, qualification, date d'entrée et de sortie, et type de contrat. Il doit être présenté à tout contrôle de l'inspection du travail."},

{id:123,prog:'LEGER',theme:'cl-acces',d:3,
e:"Le retrait par le préfet de région de l'autorisation d'exercer la profession de transporteur peut être contesté devant :",
r:[{t:"Le tribunal de commerce"},{t:"Le tribunal judiciaire"},{t:"Le tribunal administratif",ok:true},{t:"Le tribunal de police"}],
x:"Bonne réponse : Le tribunal administratif. Les décisions administratives du préfet de région (retrait d'autorisation, sanctions administratives) relevant du droit public, les recours doivent être portés devant les juridictions administratives (tribunal administratif, puis cour administrative d'appel, puis Conseil d'État)."},

{id:124,prog:'LEGER',theme:'cl-social',d:2,
e:"Lors d'un licenciement pour faute lourde, l'employeur doit remettre au salarié :",
r:[{t:"Une attestation France Travail (ex Pôle Emploi) et une indemnité compensatrice de congés payés",ok:true},{t:"Une indemnité de licenciement en plus de l'attestation France Travail"},{t:"Uniquement l'attestation France Travail sans aucune indemnité"},{t:"Un document d'information sur le CPF (Compte Personnel de Formation)"}],
x:"Bonne réponse : Une attestation France Travail (ex Pôle Emploi) et une indemnité compensatrice de congés payés. Lors d'un licenciement pour faute lourde, l'employeur doit remettre : l'attestation France Travail, le certificat de travail, et le solde de tout compte. Le salarié perd le droit à l'indemnité de licenciement et à l'indemnité compensatrice de préavis, mais conserve ses congés payés acquis."},

{id:125,prog:'LEGER',theme:'cl-civil',d:1,
e:"Dans une SARL à associé unique, hors faute de gestion, le gérant associé unique est responsable :",
r:[{t:"De la totalité des dettes sociales"},{t:"Des dettes sociales sur ses biens personnels"},{t:"Des dettes sociales à concurrence de ses apports",ok:true},{t:"Des dettes à concurrence de son CA (Chiffre d'Affaires) annuel"}],
x:"Bonne réponse : Des dettes sociales à concurrence de ses apports. Dans une SARL unipersonnelle (EURL), comme dans toute SARL, la responsabilité de l'associé unique est limitée à ses apports. Il ne peut pas être poursuivi sur ses biens personnels pour les dettes sociales, sauf en cas de faute de gestion avérée."},

{id:126,prog:'LEGER',theme:'cl-gestion',d:3,
e:"Le seuil de rentabilité exprimé en nombre de jours se calcule ainsi :",
r:[{t:"Charges fixes / Chiffre d'affaires × 365"},{t:"(Charges fixes / Marge sur coûts variables) × Chiffre d'affaires"},{t:"(Charges fixes / Taux de marge sur coûts variables) / Chiffre d'affaires × 365",ok:true},{t:"Résultat / Chiffre d'affaires × 365"}],
x:"Bonne réponse : (Charges fixes / Taux de marge sur coûts variables) / Chiffre d'affaires × 365. Le seuil de rentabilité en jours (point mort) = (Charges fixes / Taux de MCV) / CA × 365. Il indique à partir de quel jour de l'année l'entreprise commence à dégager un bénéfice. Plus le point mort arrive tôt dans l'année, plus l'entreprise est en sécurité."},

{id:127,prog:'LEGER',theme:'cl-regl',d:2,
e:"Si le donneur d'ordre paie le transporteur au-delà du délai légal de 30 jours, il :",
r:[{t:"Commet une contravention"},{t:"Doit au transporteur des pénalités de retard automatiques",ok:true},{t:"Doit modifier son contrat"},{t:"Commet un délit"}],
x:"Bonne réponse : Doit au transporteur des pénalités de retard automatiques. Des pénalités de retard sont dues automatiquement au transporteur en cas de dépassement du délai de paiement de 30 jours, sans qu'une mise en demeure soit nécessaire. Le taux légal de pénalités de retard est fixé à 3 fois le taux d'intérêt légal."},

{id:128,prog:'LEGER',theme:'cl-civil',d:2,
e:"La livraison de la marchandise intervient lorsque :",
r:[{t:"La marchandise est déchargée du véhicule"},{t:"La marchandise commence à être déchargée"},{t:"La marchandise est remise au destinataire qui l'accepte",ok:true},{t:"La lettre de voiture est signée par le conducteur"}],
x:"Bonne réponse : La marchandise est remise au destinataire qui l'accepte. La livraison est le moment où la marchandise est mise à la disposition du destinataire et acceptée par lui. C'est à partir de ce moment que le délai pour émettre des réserves commence à courir, et que la responsabilité du transporteur cesse en principe."},

{id:129,prog:'LEGER',theme:'cl-secu',d:1,
e:"Le DUERP (Document Unique d'Évaluation des Risques Professionnels) est obligatoire dès qu'une entreprise emploie :",
r:[{t:"Au moins 1 salarié",ok:true},{t:"Au moins 5 salariés"},{t:"Au moins 10 salariés"},{t:"Au moins 50 salariés"}],
x:"Bonne réponse : Au moins 1 salarié. Le DUERP est obligatoire dès l'embauche du 1er salarié (art. R.4121-1 du Code du travail). Il répertorie les risques professionnels identifiés dans l'entreprise et les mesures de prévention mises en place. Il doit être mis à jour régulièrement."},

{id:130,prog:'LEGER',theme:'cl-regl',d:3,
e:"Un contrat type 'longue distance' s'applique en transport national pour les envois de marchandises générales :",
r:[{t:"Dont la distance est supérieure à 150 km"},{t:"Dont le poids est supérieur à 3 tonnes"},{t:"Dont la distance est supérieure à 150 km ET le poids supérieur à 3 tonnes",ok:true},{t:"Uniquement pour les transports d'une région à une autre"}],
x:"Bonne réponse : Dont la distance est supérieure à 150 km ET le poids supérieur à 3 tonnes. Le contrat type 'longue distance' (arrêté du 5 mai 1988) s'applique aux transports de marchandises générales dépassant à la fois 3 tonnes ET 150 km. En dessous de ces seuils, le contrat type 'général' ou un contrat spécifique s'applique."},

{id:131,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"Le compte personnel de formation (CPF) est alimenté en euros depuis :",
r:[{t:"Janvier 2015"},{t:"Janvier 2019",ok:true},{t:"Janvier 2022"},{t:"Janvier 2024"}],
x:"Bonne réponse : Janvier 2019. Le CPF est alimenté en euros depuis le 1er janvier 2019 (auparavant en heures). Les droits acquis en heures avant cette date ont été convertis en euros (1 heure = 15 euros, plafonné à 5 000 €). Le CPF est géré par la Caisse des Dépôts sur Mon Compte Formation."},

{id:132,prog:'LEGER',theme:'cl-civil',d:2,
e:"Un chargeur envoie ses marchandises via un commissionnaire de transport. En cas de litige, le commissionnaire :",
r:[{t:"N'est pas responsable car il n'a fait que sous-traiter"},{t:"Est responsable comme s'il avait effectué lui-même le transport",ok:true},{t:"Est responsable uniquement s'il n'a pas informé le chargeur"},{t:"N'a aucune obligation contractuelle envers le chargeur"}],
x:"Bonne réponse : Est responsable comme s'il avait effectué lui-même le transport. Le commissionnaire de transport est responsable envers son client (donneur d'ordre) comme s'il avait effectué lui-même les opérations de transport. C'est sa responsabilité propre de commissionnaire, distincte de celle du transporteur sous-traitant."},

{id:133,prog:'LEGER',theme:'cl-social',d:3,
e:"Le certificat de travail remis à un salarié à la fin de son contrat doit mentionner obligatoirement :",
r:[{t:"Les dates d'entrée et de sortie, le motif de rupture et une appréciation"},{t:"Les dates d'entrée et de sortie seulement",ok:true},{t:"Le salaire et les congés restant à prendre"},{t:"La clause de non-concurrence et son montant"}],
x:"Bonne réponse : Les dates d'entrée et de sortie seulement. Le certificat de travail doit mentionner obligatoirement : les dates d'entrée et de sortie et la nature du ou des emplois occupés. Il ne doit pas comporter de mentions discriminatoires ni de motif de rupture. Il est différent de l'attestation France Travail."},

{id:134,prog:'LEGER',theme:'cl-regl',d:2,
e:"La convention collective de branche applicable dans une entreprise est mentionnée :",
r:[{t:"Dans un journal d'annonces légales"},{t:"Au conseil de prud'hommes"},{t:"Sur le bulletin de paie",ok:true},{t:"Au tribunal de commerce"}],
x:"Bonne réponse : Sur le bulletin de paie. La convention collective applicable dans l'entreprise doit être mentionnée sur le bulletin de paie du salarié (art. R.3243-1 du Code du travail). Elle doit également être affichée dans l'entreprise et tenue à la disposition des salariés qui souhaitent la consulter."},

{id:135,prog:'LEGER',theme:'cl-gestion',d:2,
e:"La définition du bilan est :",
r:[{t:"Un tableau récapitulatif des recettes et dépenses de l'année"},{t:"Une photographie à un instant T du patrimoine de l'entreprise (actif et passif)",ok:true},{t:"Un document prévisionnel des flux de trésorerie"},{t:"Un état des salaires versés aux employés"}],
x:"Bonne réponse : Une photographie à un instant T du patrimoine de l'entreprise (actif et passif). Le bilan comptable est un document de synthèse qui décrit à un instant précis (date de clôture de l'exercice) le patrimoine de l'entreprise : à gauche l'actif (emplois des ressources), à droite le passif (ressources = capitaux propres + dettes)."},

{id:136,prog:'LEGER',theme:'cl-gestion',d:1,
e:"Dans un compte de résultat, le chiffre d'affaires (CA) représente :",
r:[{t:"Le bénéfice de l'entreprise sur l'exercice"},{t:"Le montant total des ventes de biens ou prestations de services de l'exercice",ok:true},{t:"La différence entre recettes et dépenses"},{t:"La valeur du stock en fin d'exercice"}],
x:"Bonne réponse : Le montant total des ventes de biens ou prestations de services de l'exercice. Le chiffre d'affaires (CA) représente le montant total hors taxes des ventes de biens et des prestations de services réalisées par l'entreprise au cours de l'exercice comptable. C'est l'indicateur de l'activité commerciale de l'entreprise."},

{id:137,prog:'LEGER',theme:'cl-civil',d:2,
e:"Dans une SA (Société Anonyme), les actionnaires sont responsables des dettes :",
r:[{t:"Sur l'ensemble de leurs biens personnels"},{t:"Dans la limite de leurs apports uniquement",ok:true},{t:"À hauteur de la moitié de leurs apports"},{t:"Solidairement avec les dirigeants"}],
x:"Bonne réponse : Dans la limite de leurs apports uniquement. Dans une SA, comme dans les autres sociétés de capitaux (SARL, SAS), la responsabilité des actionnaires est limitée à leurs apports. En cas de dettes, ils ne peuvent perdre que le montant qu'ils ont investi dans la société."},

{id:138,prog:'LEGER',theme:'cl-acces',d:2,
e:"La DREAL (Direction Régionale de l'Environnement, de l'Aménagement et du Logement) est notamment compétente pour :",
r:[{t:"La collecte des cotisations sociales des transporteurs"},{t:"La délivrance des licences de transport et le contrôle des entreprises",ok:true},{t:"La fixation des prix du transport"},{t:"La gestion des permis de conduire des conducteurs"}],
x:"Bonne réponse : La délivrance des licences de transport et le contrôle des entreprises. La DREAL est le service de l'État chargé du contrôle et de la régulation du transport routier. Elle délivre les titres d'autorisation (licences), gère le RNET (registre des entreprises de transport), et effectue les contrôles en entreprise et sur route."},

{id:139,prog:'LEGER',theme:'cl-regl',d:3,
e:"Le contrat type 'denrées périssables' s'applique :",
r:[{t:"À tous les transports de produits alimentaires"},{t:"Uniquement aux transports réfrigérés"},{t:"Aux transports de denrées alimentaires périssables nécessitant une température dirigée",ok:true},{t:"Aux transports de fruits et légumes frais uniquement"}],
x:"Bonne réponse : Aux transports de denrées alimentaires périssables nécessitant une température dirigée. Le contrat type 'denrées périssables' s'applique aux transports de marchandises périssables nécessitant le respect d'une température dirigée (chaîne du froid). Il impose des obligations spécifiques au transporteur en matière de température et de contrôle."},

{id:140,prog:'LEGER',theme:'cl-civil',d:2,
e:"L'hypothèque est :",
r:[{t:"Un gage sur les biens mobiliers d'une entreprise"},{t:"Une garantie de paiement donnée par le dirigeant à un créancier"},{t:"Une garantie réelle portant sur un bien immobilier sans en perdre la possession",ok:true},{t:"Une caution personnelle solidaire"}],
x:"Bonne réponse : Une garantie réelle portant sur un bien immobilier sans en perdre la possession. L'hypothèque est une garantie réelle conventionnelle portant sur un bien immobilier. Le débiteur reste en possession de son bien mais le créancier peut le faire saisir et vendre en cas de non-paiement. C'est la garantie couramment demandée par les banques pour les prêts immobiliers."},

{id:141,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le plan de financement d'une nouvelle entreprise de transport met en évidence :",
r:[{t:"Uniquement le chiffre d'affaires prévisionnel"},{t:"L'équilibre entre les besoins de financement et les ressources disponibles",ok:true},{t:"Le montant des impôts à payer sur 3 ans"},{t:"Le nombre de véhicules nécessaires à l'activité"}],
x:"Bonne réponse : L'équilibre entre les besoins de financement et les ressources disponibles. Le plan de financement est un tableau prévisionnel sur plusieurs années (généralement 3 à 5 ans) mettant en regard les besoins (investissements, BFR, remboursements) et les ressources (apports en capital, emprunts, CAF). Il permet de vérifier l'équilibre financier du projet."},

{id:142,prog:'LEGER',theme:'cl-civil',d:2,
e:"La mise en liquidation judiciaire d'une entreprise intervient quand :",
r:[{t:"Le CA (Chiffre d'Affaires) baisse de plus de 50 %"},{t:"L'entreprise ne paie pas ses charges sociales 2 mois de suite"},{t:"L'entreprise est en cessation de paiement et le redressement est impossible",ok:true},{t:"Les capitaux propres sont inférieurs à la moitié du capital social"}],
x:"Bonne réponse : L'entreprise est en cessation de paiement et le redressement est impossible. La liquidation judiciaire est prononcée quand l'entreprise est en cessation de paiement ET que le redressement est manifestement impossible. Elle entraîne la dissolution et la vente des actifs pour rembourser les créanciers dans un ordre légal."},

{id:143,prog:'LEGER',theme:'cl-civil',d:1,
e:"Le tribunal de commerce est composé de :",
r:[{t:"Magistrats professionnels nommés par le garde des Sceaux"},{t:"Commerçants élus par leurs pairs",ok:true},{t:"Notaires spécialisés en droit commercial"},{t:"Avocats désignés par le barreau"}],
x:"Bonne réponse : Commerçants élus par leurs pairs. Le tribunal de commerce est composé de juges consulaires : des commerçants ou chefs d'entreprise élus par leurs pairs pour exercer bénévolement des fonctions judiciaires. Ils ne sont pas magistrats professionnels."},

{id:144,prog:'LEGER',theme:'cl-civil',d:2,
e:"Un chèque 'barré' est un chèque :",
r:[{t:"Qui ne peut pas être encaissé"},{t:"Qui ne peut être encaissé que par virement bancaire et non en espèces",ok:true},{t:"Dont la provision est bloquée"},{t:"Qui est signé par deux personnes"}],
x:"Bonne réponse : Qui ne peut être encaissé que par virement bancaire et non en espèces. Un chèque barré (deux barres parallèles dessinées) ne peut pas être encaissé directement au guichet en espèces. Il doit obligatoirement être remis à une banque pour être porté au crédit d'un compte bancaire."},

{id:145,prog:'LEGER',theme:'cl-civil',d:2,
e:"Le gérant associé majoritaire d'une SARL (Société à Responsabilité Limitée) :",
r:[{t:"Est obligatoirement salarié de la société"},{t:"Relève du régime des travailleurs non-salariés (TNS)",ok:true},{t:"Bénéficie du régime général de la sécurité sociale"},{t:"Ne peut pas percevoir de rémunération de la société"}],
x:"Bonne réponse : Relève du régime des travailleurs non-salariés (TNS). Le gérant associé majoritaire d'une SARL (détenant plus de 50 % des parts seul, ou plus de 50 % avec ses co-gérants) relève du régime des travailleurs non-salariés (TNS), anciennement RSI, maintenant intégré à l'URSSAF. Il n'est pas salarié."},

{id:146,prog:'LEGER',theme:'cl-civil',d:3,
e:"La solidarité entre débiteurs signifie que :",
r:[{t:"Chaque débiteur ne paye que sa part"},{t:"Le créancier peut exiger le paiement total de la dette à n'importe lequel des débiteurs",ok:true},{t:"Les débiteurs doivent payer ensemble"},{t:"Le paiement d'un débiteur libère tous les autres automatiquement"}],
x:"Bonne réponse : Le créancier peut exiger le paiement total de la dette à n'importe lequel des débiteurs. La solidarité passive (entre débiteurs) permet au créancier de réclamer le paiement de la totalité de la dette à n'importe lequel des codébiteurs solidaires. Le débiteur qui a tout payé dispose ensuite d'un recours contre les autres pour récupérer leurs parts."},

{id:147,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"La TVA (Taxe sur la Valeur Ajoutée) intracommunautaire sur un service de transport entre la France et l'Espagne, facturé à un client espagnol assujetti à la TVA, est régie par :",
r:[{t:"Le taux français de 20 %"},{t:"Le taux espagnol applicable"},{t:"Le principe d'autoliquidation par le client espagnol",ok:true},{t:"Une exonération totale de TVA"}],
x:"Bonne réponse : Le principe d'autoliquidation par le client espagnol. Pour les prestations de services B2B intracommunautaires, c'est le principe de territorialité : la TVA est due dans le pays du preneur (client). Le transporteur français facture HT et le client espagnol déclare et paie la TVA espagnole par autoliquidation (article 44 de la directive TVA)."},

{id:148,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"L'imposition des bénéfices d'une entreprise individuelle (EI) de transport est :",
r:[{t:"Soumise à l'IS (Impôt sur les Sociétés)"},{t:"Soumise à l'IR (Impôt sur le Revenu) dans la catégorie des BIC (Bénéfices Industriels et Commerciaux)",ok:true},{t:"Exonérée d'impôt la première année"},{t:"Calculée sur le chiffre d'affaires et non le bénéfice"}],
x:"Bonne réponse : Soumise à l'IR (Impôt sur le Revenu) dans la catégorie des BIC (Bénéfices Industriels et Commerciaux). Une entreprise individuelle (EI) de transport est soumise à l'IR (Impôt sur le Revenu) dans la catégorie des BIC (Bénéfices Industriels et Commerciaux). Le bénéfice s'intègre au revenu global du foyer fiscal du dirigeant."},

{id:149,prog:'LEGER',theme:'cl-social',d:2,
e:"Le contrat d'apprentissage est réservé aux personnes âgées de :",
r:[{t:"16 à 25 ans uniquement"},{t:"16 à 29 ans révolus, avec des exceptions permettant des dérogations au-delà",ok:true},{t:"18 à 30 ans"},{t:"15 à 25 ans"}],
x:"Bonne réponse : 16 à 29 ans révolus, avec des exceptions permettant des dérogations au-delà. Le contrat d'apprentissage est ouvert aux personnes de 16 à 29 ans révolus. Des dérogations permettent d'aller au-delà pour les personnes handicapées, celles souhaitant créer une entreprise, ou en cas de rupture du contrat pour cause indépendante de leur volonté."},

{id:150,prog:'LEGER',theme:'cl-social',d:3,
e:"Le taux minimal de majoration des heures supplémentaires pour les 8 premières (36ème à 43ème heure) est de :",
r:[{t:"10 %"},{t:"25 %",ok:true},{t:"50 %"},{t:"100 %"}],
x:"Bonne réponse : 25 %. Les 8 premières heures supplémentaires (de la 36ème à la 43ème heure) sont majorées d'au moins 25 %. À partir de la 44ème heure, le taux est d'au moins 50 %. Ces taux légaux peuvent être augmentés par accord de branche ou d'entreprise."},

{id:151,prog:'LEGER',theme:'cl-social',d:2,
e:"Le préavis d'un conducteur routier licencié ayant 3 ans d'ancienneté, selon la convention collective des transports routiers, est de :",
r:[{t:"1 semaine"},{t:"1 mois"},{t:"2 mois",ok:true},{t:"3 mois"}],
x:"Bonne réponse : 2 mois. Selon la convention collective des transports routiers, le préavis d'un conducteur licencié est de : 1 mois pour moins de 2 ans d'ancienneté, 2 mois entre 2 et 5 ans, et 3 mois au-delà de 5 ans. Ces durées peuvent être plus favorables si l'accord de branche le prévoit."},

{id:152,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Un transporteur calcule son seuil de rentabilité mensuel. Ses charges fixes sont de 8 000 €/mois et son taux de marge sur coûts variables est de 40 %. Son seuil de rentabilité est de :",
r:[{t:"3 200 €"},{t:"12 000 €"},{t:"20 000 €",ok:true},{t:"32 000 €"}],
x:"Bonne réponse : 20 000 €. SR = Charges fixes / Taux de MCV = 8 000 / 0,40 = 20 000 €. L'entreprise doit réaliser 20 000 € de CA mensuel pour couvrir toutes ses charges. En dessous, elle est en perte ; au-delà, elle génère du bénéfice."},

{id:153,prog:'LEGER',theme:'cl-gestion',d:3,
e:"Pour un transport de 500 km avec un ensemble dont le CRK (Coût de Revient Kilométrique) est 1,50 € et un taux de marge de 20 %, le prix de vente minimum est de :",
r:[{t:"600 €"},{t:"750 €",ok:true},{t:"900 €"},{t:"1 000 €"}],
x:"Bonne réponse : 750 €. Coût du trajet = 1,50 × 500 = 750 €. Pour une marge de 20 %, Prix de vente = Coût / (1 - 0,20) = 750 / 0,80 = 937,50 €. Alternative : si 20 % sur le coût (markup), PV = 750 × 1,20 = 900 €. En pratique le raisonnement 'marge sur prix de vente' donne 937,50 €."},

{id:154,prog:'LEGER',theme:'cl-gestion',d:1,
e:"Un emprunt bancaire présente comme principal avantage par rapport au crédit-bail :",
r:[{t:"La déductibilité des loyers en charges"},{t:"La propriété immédiate du bien financé et un coût total généralement inférieur",ok:true},{t:"L'absence de mise de fonds initiale"},{t:"La flexibilité en cas de résiliation anticipée"}],
x:"Bonne réponse : La propriété immédiate du bien financé et un coût total généralement inférieur. L'emprunt bancaire permet d'acquérir la propriété du bien immédiatement (l'entreprise l'inscrit à l'actif). Son coût total est généralement inférieur au crédit-bail. En revanche, il nécessite un apport, immobilise des ressources et figure en dettes dans le bilan."},

{id:155,prog:'LEGER',theme:'cl-regl',d:2,
e:"La lettre de voiture de déménagement est obligatoire pour tout déménagement :",
r:[{t:"Quel que soit le volume"},{t:"D'au moins 6 m³"},{t:"D'au moins 14 m³",ok:true},{t:"D'au moins 19 m³"}],
x:"Bonne réponse : D'au moins 14 m³. La lettre de voiture de déménagement est obligatoire pour tout déménagement d'un volume d'au moins 14 m³. En dessous de ce seuil, un document plus simple (devis accepté) peut suffire selon le contrat type déménagement."},

{id:156,prog:'LEGER',theme:'cl-regl',d:1,
e:"Le contrat type 'déménagement' s'applique aux opérations de déménagement :",
r:[{t:"Uniquement pour les particuliers"},{t:"Pour les particuliers et les professionnels",ok:true},{t:"Uniquement pour les entreprises"},{t:"Uniquement pour les transports internationaux de mobilier"}],
x:"Bonne réponse : Pour les particuliers et les professionnels. Le contrat type de déménagement s'applique aux opérations de déménagement effectuées par des déménageurs professionnels pour le compte de particuliers et de professionnels, incluant le transport et les opérations accessoires (emballage, manutention, stockage)."},

{id:157,prog:'LEGER',theme:'cl-civil',d:2,
e:"L'ouverture de la procédure de redressement judiciaire peut être demandée par :",
r:[{t:"Uniquement le chef d'entreprise"},{t:"Uniquement le chef d'entreprise et les créanciers"},{t:"Le chef d'entreprise, les créanciers ou le ministère public",ok:true},{t:"Uniquement le tribunal de commerce d'office"}],
x:"Bonne réponse : Le chef d'entreprise, les créanciers ou le ministère public. La procédure de redressement judiciaire peut être ouverte à la demande : du débiteur lui-même, des créanciers, ou du ministère public (parquet). Elle peut aussi être ouverte d'office par le tribunal dans certaines situations."},

{id:158,prog:'LEGER',theme:'cl-civil',d:2,
e:"La caution personnelle d'un dirigeant d'entreprise est :",
r:[{t:"Un gage sur les actifs de l'entreprise"},{t:"Un nantissement sur les créances clients"},{t:"Une garantie de paiement donnée par le dirigeant à un créancier sur ses biens personnels",ok:true},{t:"Une assurance souscrite au profit du créancier"}],
x:"Bonne réponse : Une garantie de paiement donnée par le dirigeant à un créancier sur ses biens personnels. La caution personnelle (ou garantie personnelle) est un engagement par lequel le dirigeant s'engage sur ses biens personnels à rembourser la dette de la société en cas de défaillance. C'est la garantie la plus couramment demandée par les banques lors d'un emprunt."},

{id:159,prog:'LEGER',theme:'cl-social',d:3,
e:"Selon la convention collective nationale des transports routiers, la durée hebdomadaire maximale de service d'un conducteur sur une semaine isolée est de :",
r:[{t:"48 heures"},{t:"52 heures"},{t:"56 heures"},{t:"60 heures",ok:true}],
x:"Bonne réponse : 60 heures. Selon la CCNTR, la durée maximale du temps de service (conduite + autres travaux + disponibilités) sur une semaine isolée est de 60 heures pour les conducteurs grand routier. En moyenne sur 4 mois, elle est de 48 heures hebdomadaires."},

{id:160,prog:'LEGER',theme:'cl-social',d:1,
e:"L'indemnité de fin de CDD (Contrat à Durée Déterminée) versée au salarié à l'échéance du contrat est de :",
r:[{t:"5 % de la rémunération totale brute"},{t:"10 % de la rémunération totale brute",ok:true},{t:"15 % de la rémunération totale brute"},{t:"1 mois de salaire forfaitaire"}],
x:"Bonne réponse : 10 % de la rémunération totale brute. À l'échéance d'un CDD (sauf cas particuliers : CDD de remplacement, CDD étudiant, rupture à la demande du salarié), l'employeur verse une indemnité de fin de contrat (précarité) égale à 10 % de la rémunération totale brute versée pendant le contrat."},

{id:161,prog:'LEGER',theme:'cl-civil',d:2,
e:"Le compte courant d'associé est :",
r:[{t:"Le compte bancaire professionnel de l'entreprise"},{t:"Les sommes mises à disposition de la société par un associé, remboursables sur demande",ok:true},{t:"Un compte bloqué pendant 5 ans minimum"},{t:"Une forme de capital social non rémunéré"}],
x:"Bonne réponse : Les sommes mises à disposition de la société par un associé, remboursables sur demande. Un compte courant d'associé est une créance de l'associé sur la société : il laisse des fonds à la disposition de l'entreprise (souvent sans intérêt ou à taux modeste). Ces sommes sont remboursables mais pas exigibles immédiatement comme un capital (sauf clause contraire)."},

{id:162,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le taux de marge sur coût variable (MCV) d'une entreprise dont le CA est de 100 000 € et les charges variables de 60 000 € est de :",
r:[{t:"40 % ★",ok:true},{t:"60 %"},{t:"150 %"},{t:"240 %"}],
x:"Bonne réponse : 40 % ★. Marge sur coûts variables = CA - Charges variables = 100 000 - 60 000 = 40 000 €. Taux de MCV = 40 000 / 100 000 = 40 %. Ce taux indique que pour chaque euro de CA, 0,40 € contribue à couvrir les charges fixes et à générer du bénéfice."},

{id:163,prog:'LEGER',theme:'cl-regl',d:3,
e:"Le contrat de location de véhicule industriel avec conducteur pour le compte d'un transporteur : la responsabilité des opérations de transport incombe :",
r:[{t:"Au loueur (propriétaire du véhicule et employeur du conducteur)"},{t:"Au locataire (transporteur donneur d'ordre)",ok:true},{t:"Au conducteur personnellement"},{t:"Partagée à 50 % entre loueur et locataire"}],
x:"Bonne réponse : Au locataire (transporteur donneur d'ordre). Selon le contrat type de location avec conducteur, c'est le locataire (le transporteur qui commande la prestation) qui assume la maîtrise et la responsabilité des opérations de transport. Le loueur reste employeur du conducteur mais n'est pas responsable du transport."},

{id:164,prog:'LEGER',theme:'cl-civil',d:1,
e:"Les statuts d'une société doivent obligatoirement mentionner la forme sociale. La SARL (Société à Responsabilité Limitée) doit indiquer cette mention :",
r:[{t:"Dans ses statuts uniquement"},{t:"Sur tous ses documents commerciaux",ok:true},{t:"Uniquement sur les factures"},{t:"Uniquement sur les contrats"}],
x:"Bonne réponse : Sur tous ses documents commerciaux. Toute société doit indiquer sur ses documents commerciaux (factures, devis, courriers, site internet) sa dénomination sociale, sa forme juridique (SARL, SAS, SA...), son numéro SIRET, son siège social et le cas échéant son capital social."},

{id:165,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"La TVA (Taxe sur la Valeur Ajoutée) due sur les acquisitions intracommunautaires de véhicules neufs est :",
r:[{t:"Exonérée au sein de l'UE (Union Européenne)"},{t:"Payée dans le pays d'achat"},{t:"Due en France par l'acquéreur français (autoliquidation)",ok:true},{t:"Répartie entre les deux pays concernés"}],
x:"Bonne réponse : Due en France par l'acquéreur français (autoliquidation). Pour les acquisitions intracommunautaires de moyens de transport neufs, la TVA est due dans le pays de l'acquéreur (France), quel que soit le statut de l'acheteur (assujetti ou non). L'acquéreur français déclare et paie la TVA française."},

{id:166,prog:'LEGER',theme:'cl-social',d:2,
e:"L'inspection du travail peut effectuer des visites nocturnes dans une entreprise de transport travaillant de nuit :",
r:[{t:"Avec un préavis de 15 jours"},{t:"Avec un préavis d'une semaine"},{t:"Avec un préavis de 3 jours"},{t:"Sans délai de prévenance",ok:true}],
x:"Bonne réponse : Sans délai de prévenance. L'inspecteur du travail peut, sans délai de prévenance ni autorisation préalable, effectuer des visites dans les entreprises à toute heure du jour et de la nuit lorsque du personnel y travaille (art. L.8113-1 du Code du travail). Ses prérogatives sont larges pour contrôler le respect du droit du travail."},

{id:167,prog:'LEGER',theme:'cl-gestion',d:3,
e:"Une entreprise de transport réalise un CA annuel de 200 000 €. Ses charges totales sont de 180 000 €. Son taux de rentabilité nette est de :",
r:[{t:"10 %",ok:true},{t:"12,5 %"},{t:"20 %"},{t:"90 %"}],
x:"Bonne réponse : 10 %. Résultat net = CA - Charges = 200 000 - 180 000 = 20 000 €. Taux de rentabilité nette = Résultat net / CA × 100 = 20 000 / 200 000 × 100 = 10 %."},

{id:168,prog:'LEGER',theme:'cl-civil',d:2,
e:"La procédure de sauvegarde judiciaire se distingue du redressement judiciaire car :",
r:[{t:"Elle est réservée aux grandes entreprises"},{t:"Elle peut être ouverte avant la cessation de paiement, à titre préventif",ok:true},{t:"Elle entraîne immédiatement la cession de l'entreprise"},{t:"Elle est réservée aux artisans"}],
x:"Bonne réponse : Elle peut être ouverte avant la cessation de paiement, à titre préventif. La procédure de sauvegarde est ouverte à la demande du débiteur qui, sans être en cessation de paiement, éprouve des difficultés qu'il ne peut surmonter seul. C'est un outil de prévention permettant de restructurer l'entreprise avant d'atteindre le stade de la cessation de paiement."},

{id:169,prog:'LEGER',theme:'cl-social',d:2,
e:"La durée légale de travail effectif en France est de :",
r:[{t:"35 heures par semaine",ok:true},{t:"39 heures par semaine"},{t:"40 heures par semaine"},{t:"48 heures par semaine"}],
x:"Bonne réponse : 35 heures par semaine. La durée légale du travail est fixée à 35 heures hebdomadaires (art. L.3121-27 du Code du travail). C'est le seuil de déclenchement des heures supplémentaires, non la durée maximale autorisée (qui est de 48h/semaine)."},

{id:170,prog:'LEGER',theme:'cl-regl',d:1,
e:"Un transporteur public de marchandises peut affranchir un envoi de la présentation de la lettre de voiture :",
r:[{t:"Jamais, la lettre de voiture est toujours obligatoire"},{t:"Pour les envois de moins de 100 kg"},{t:"Pour les envois express avec suivi électronique",ok:true},{t:"Pour les transports de moins de 50 km"}],
x:"Bonne réponse : Pour les envois express avec suivi électronique. Dans le cadre du transport express avec traçabilité électronique, un bon de transport électronique peut remplacer la lettre de voiture papier traditionelle. La réglementation française admet les documents dématérialisés sous certaines conditions."},

{id:171,prog:'LEGER',theme:'cl-acces',d:3,
e:"La condition d'honorabilité professionnelle est non remplie si le dirigeant a été condamné pour :",
r:[{t:"Une infraction routière mineure"},{t:"Un impayé de loyer"},{t:"Un délit routier grave (conduite en état d'ivresse ayant causé des blessures)",ok:true},{t:"Un retard de paiement des cotisations sociales"}],
x:"Bonne réponse : Un délit routier grave (conduite en état d'ivresse ayant causé des blessures). L'honorabilité professionnelle est réputée non satisfaite si la personne a fait l'objet d'une condamnation pénale définitive pour certains délits graves : vol, escroquerie, abus de confiance, corruption, travail clandestin, infractions routières graves ayant causé des blessures ou la mort, etc."},

{id:172,prog:'LEGER',theme:'cl-acces',d:2,
e:"La capacité financière pour le transport léger doit être prouvée par :",
r:[{t:"Une simple déclaration sur l'honneur"},{t:"Les comptes annuels certifiés ou une garantie bancaire",ok:true},{t:"Uniquement un extrait de compte bancaire"},{t:"Une attestation de l'expert-comptable"}],
x:"Bonne réponse : Les comptes annuels certifiés ou une garantie bancaire. La capacité financière doit être attestée par les comptes annuels certifiés (bilan et compte de résultat) de la dernière année, ou à défaut pour les nouvelles entreprises, par une garantie bancaire ou une caution de même montant délivrée par un établissement de crédit."},

{id:173,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le taux de marge brute se calcule ainsi :",
r:[{t:"(Prix de vente HT - Prix d'achat HT) / Prix de vente HT × 100",ok:true},{t:"Résultat net / CA × 100"},{t:"(CA - Charges fixes) / CA × 100"},{t:"Bénéfice / Charges variables × 100"}],
x:"Bonne réponse : (Prix de vente HT - Prix d'achat HT) / Prix de vente HT × 100. Le taux de marge brute = [(PV HT - PA HT) / PV HT] × 100. Il mesure la part du prix de vente qui reste après déduction du coût d'achat des marchandises. Ne pas confondre avec le taux de marque (calculé sur le prix de vente) et le taux de markup (calculé sur le prix d'achat)."},

{id:174,prog:'LEGER',theme:'cl-civil',d:3,
e:"La cession de créance professionnelle (Loi Dailly) permet à une entreprise de :",
r:[{t:"Racheter les dettes d'un concurrent"},{t:"Céder ses créances professionnelles à sa banque pour obtenir un financement",ok:true},{t:"Transférer ses contrats de transport à un tiers"},{t:"Réduire son capital social"}],
x:"Bonne réponse : Céder ses créances professionnelles à sa banque pour obtenir un financement. La cession Dailly (loi du 2 janvier 1981) permet à une entreprise de céder en bloc ses créances professionnelles à une banque (bordereau Dailly). En contrepartie, la banque avance les fonds. C'est un mode de financement à court terme qui améliore la trésorerie."},

{id:175,prog:'LEGER',theme:'cl-regl',d:2,
e:"La vitesse maximale d'un VUL (<3,5t) sur autoroute est de :",
r:[{t:"110 km/h"},{t:"130 km/h",ok:true},{t:"90 km/h"},{t:"110 km/h si chargé, 130 km/h si vide"}],
x:"Bonne réponse : 130 km/h. Les VUL de moins de 3,5 tonnes sont soumis aux mêmes limitations de vitesse que les véhicules particuliers : 130 km/h sur autoroute (110 km/h par temps de pluie), 80 km/h sur route à double sens sans séparateur central."},

{id:176,prog:'LEGER',theme:'cl-civil',d:2,
e:"L'indemnité forfaitaire de 40 € pour frais de recouvrement est due :",
r:[{t:"Uniquement sur demande du créancier"},{t:"Automatiquement dès le 1er jour de retard de paiement entre professionnels",ok:true},{t:"Uniquement pour les factures supérieures à 1 000 €"},{t:"Après une mise en demeure formelle"}],
x:"Bonne réponse : Automatiquement dès le 1er jour de retard de paiement entre professionnels. L'indemnité forfaitaire de 40 € (art. D.441-5 du Code de commerce) est due de plein droit dès le 1er jour de retard de paiement entre professionnels, sans qu'il soit nécessaire d'envoyer une mise en demeure. Si les frais réels dépassent 40 €, une indemnisation complémentaire peut être réclamée."},

{id:177,prog:'LEGER',theme:'cl-civil',d:2,
e:"Le taux légal de TVA applicable aux prestations de livraison à domicile de repas est :",
r:[{t:"5,5 %"},{t:"10 %",ok:true},{t:"20 %"},{t:"0 %"}],
x:"Bonne réponse : 10 %. La livraison à domicile de repas préparés est soumise au taux réduit de TVA de 10 % (vente à emporter ou livraison de produits alimentaires préparés). Le transport de marchandises en général est soumis au taux normal de 20 %."},

{id:178,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"La CFE (Cotisation Foncière des Entreprises) est calculée sur :",
r:[{t:"Le chiffre d'affaires"},{t:"La valeur locative des locaux professionnels",ok:true},{t:"Le nombre de salariés"},{t:"Le capital social"}],
x:"Bonne réponse : La valeur locative des locaux professionnels. La CFE est assise sur la valeur locative cadastrale des biens immobiliers dont l'entreprise a disposé pour son activité au 1er janvier de l'année. Les entreprises sans local (ex : auto-entrepreneur à domicile) paient une CFE minimale définie par la commune. La CFE fait partie de la CET avec la CVAE."},

{id:179,prog:'LEGER',theme:'cl-social',d:2,
e:"La mutuelle d'entreprise est obligatoire pour tous les salariés du secteur privé depuis :",
r:[{t:"2012"},{t:"2016",ok:true},{t:"2014"},{t:"2018"}],
x:"Bonne réponse : 2016. La généralisation de la complémentaire santé collective obligatoire est en vigueur depuis le 1er janvier 2016 (ANI 2013). L'employeur doit prendre en charge au minimum 50 % de la cotisation. Le salarié peut demander une dispense dans certains cas (déjà couvert par ailleurs, CDD court…)."},

{id:180,prog:'LEGER',theme:'cl-civil',d:2,
e:"Le droit de rétention du transporteur s'éteint lorsque :",
r:[{t:"La marchandise est livrée au destinataire",ok:true},{t:"L'expéditeur envoie une mise en demeure"},{t:"Le délai de transport est dépassé"},{t:"Le transporteur change de dépôt"}],
x:"Bonne réponse : La marchandise est livrée au destinataire. Le droit de rétention cesse dès que le transporteur se dessaisit volontairement de la marchandise (livraison). Il ne peut pas reprendre les marchandises après les avoir délivrées sans réserve. C'est pourquoi le transporteur doit impérativement conserver les marchandises jusqu'au paiement intégral si celui-ci n'est pas assuré."},

{id:181,prog:'LEGER',theme:'cl-regl',d:3,
e:"Le transport de déchets ménagers en régie municipale par des VUL est :",
r:[{t:"Soumis aux mêmes règles que le transport commercial"},{t:"Généralement exempté des réglementations de transport public car c'est un service public local",ok:true},{t:"Interdit aux VUL"},{t:"Soumis à une autorisation préfectorale spéciale"}],
x:"Bonne réponse : Généralement exempté des réglementations de transport public car c'est un service public local. Les services de collecte de déchets ménagers en régie communale relèvent d'une activité de service public et non du transport public de marchandises pour compte d'autrui. Ils sont exemptés de l'obligation d'inscription au registre des transporteurs, mais doivent respecter les réglementations environnementales et de sécurité routière."},

{id:182,prog:'LEGER',theme:'cl-civil',d:2,
e:"En cas de perte ou d'avarie de la marchandise, le délai maximal pour formuler des réserves écrites au transporteur est de :",
r:[{t:"24 heures"},{t:"3 jours ouvrés",ok:true},{t:"7 jours calendaires"},{t:"14 jours"}],
x:"Bonne réponse : 3 jours ouvrés. Selon le droit du transport, le destinataire dispose de 3 jours ouvrés (hors jours fériés) pour formuler des réserves écrites motivées au transporteur en cas de dommage apparent."},

{id:183,prog:'LEGER',theme:'cl-gestion',d:2,
e:"La marge opérationnelle (taux de résultat d'exploitation) se calcule comme :",
r:[{t:"Résultat net / CA × 100"},{t:"Résultat d'exploitation / CA × 100",ok:true},{t:"EBE / CA × 100"},{t:"MCV / CA × 100"}],
x:"Bonne réponse : Résultat d'exploitation / CA × 100. Taux de marge opérationnelle = Résultat d'exploitation / CA × 100. Il mesure la part du CA qui reste après toutes les charges d'exploitation (incluant amortissements). Il s'agit d'un indicateur standard de rentabilité opérationnelle, comparable entre entreprises du même secteur."},

{id:184,prog:'LEGER',theme:'cl-fiscal',d:3,
e:"Le plafond de déduction des charges de véhicule de tourisme (amortissement) est limité à :",
r:[{t:"18 300 € ou 9 900 € selon les émissions CO2",ok:true},{t:"30 000 € pour tous les véhicules"},{t:"50 000 € pour les véhicules électriques"},{t:"Il n'y a pas de plafond de déduction"}],
x:"Bonne réponse : 18 300 € ou 9 900 € selon les émissions CO2. L'amortissement des véhicules de tourisme est plafonné fiscalement : 18 300 € pour les véhicules émettant entre 20 et 50 g CO2/km, 9 900 € pour les véhicules émettant plus de 165 g CO2/km (seuils 2021+). Les véhicules 100 % électriques bénéficient d'un plafond de 30 000 €."},

{id:185,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"La TVA intracommunautaire sur les achats dans un autre pays de l'UE :",
r:[{t:"Est perçue par le pays vendeur"},{t:"Est auto-liquidée par l'acheteur dans son pays",ok:true},{t:"N'est jamais due en Europe"},{t:"Est remboursée automatiquement à l'acheteur"}],
x:"Bonne réponse : Est auto-liquidée par l'acheteur dans son pays. Pour les achats entre professionnels assujettis à la TVA au sein de l'UE (acquisitions intracommunautaires), la TVA est auto-liquidée : c'est l'acheteur qui déclare et acquitte la TVA dans son propre pays, selon le taux en vigueur dans son pays. Le vendeur facture HT avec son numéro de TVA intracommunautaire."},

{id:186,prog:'LEGER',theme:'cl-social',d:2,
e:"En cas d'accident du travail, la déclaration doit être faite par l'employeur à la CPAM dans un délai de :",
r:[{t:"24 heures"},{t:"48 heures"},{t:"48 heures (jours ouvrables)",ok:true},{t:"8 jours"}],
x:"Bonne réponse : 48 heures (jours ouvrables). L'employeur doit déclarer tout accident du travail à la CPAM dans les 48 heures (non compris les dimanches et jours fériés) suivant l'accident, par l'envoi d'une déclaration d'accident du travail (formulaire CERFA). Une feuille d'accident doit également être remise au salarié."},

{id:187,prog:'LEGER',theme:'cl-secu',d:2,
e:"La distance de freinage d'un VUL à 90 km/h sur chaussée sèche est approximativement de :",
r:[{t:"30 mètres"},{t:"55 mètres",ok:true},{t:"100 mètres"},{t:"150 mètres"}],
x:"Bonne réponse : 55 mètres. À 90 km/h, la distance de freinage d'urgence (hors temps de réaction) sur chaussée sèche est d'environ 55 mètres pour un véhicule en bon état. En ajoutant le temps de réaction (environ 1 seconde = 25 m à 90 km/h), la distance d'arrêt totale est d'environ 80 mètres. Sur sol mouillé, ces distances doublent."},

{id:188,prog:'LEGER',theme:'cl-social',d:3,
e:"Le télétravail régulier doit faire l'objet :",
r:[{t:"D'un simple accord oral suffit"},{t:"D'un accord d'entreprise ou à défaut d'une charte élaborée après avis du CSE, ou d'un accord individuel",ok:true},{t:"D'une autorisation préfectorale"},{t:"D'un avenant obligatoire pour tout télétravail, même occasionnel"}],
x:"Bonne réponse : D'un accord d'entreprise ou à défaut d'une charte élaborée après avis du CSE, ou d'un accord individuel. Depuis l'ordonnance de 2017, le télétravail peut être mis en place par accord collectif ou charte unilatérale (après avis du CSE). En l'absence d'accord ou de charte, il peut être organisé par accord individuel entre l'employeur et le salarié (email suffisant). L'employeur prend en charge les frais liés au télétravail."},

{id:189,prog:'LEGER',theme:'cl-civil',d:2,
e:"L'enrichissement sans cause (enrichissement injustifié) permet à l'appauvri de :",
r:[{t:"Réclamer des dommages et intérêts"},{t:"Agir en restitution contre celui qui s'est enrichi à ses dépens sans justification",ok:true},{t:"Annuler tout contrat déséquilibré"},{t:"Récupérer uniquement les frais engagés"}],
x:"Bonne réponse : Agir en restitution contre celui qui s'est enrichi à ses dépens sans justification. L'enrichissement injustifié (art. 1303 du Code civil) permet à une personne appauvrie de réclamer restitution à celui qui s'est enrichi à ses dépens sans cause légitime. L'indemnité est limitée à la moindre des deux valeurs : enrichissement ou appauvrissement."},

{id:190,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"Le crédit d'impôt formation dirigeant est calculé sur la base de :",
r:[{t:"100 % des frais de formation"},{t:"Nombre d'heures de formation × taux horaire du SMIC (max 40h/an)",ok:true},{t:"Un forfait de 5 000 € par an"},{t:"50 % des frais de formation"}],
x:"Bonne réponse : Nombre d'heures de formation × taux horaire du SMIC (max 40h/an). Crédit d'impôt formation dirigeant = heures suivies × taux horaire SMIC, plafonné à 40 heures/an. Doublé pour les micro-entreprises depuis 2022. Il s'impute sur l'IS ou l'IR. Si l'entreprise est déficitaire ou que le crédit excède l'impôt, il est remboursable."},

{id:191,prog:'LEGER',theme:'cl-acces',d:2,
e:"En cas de décès du gestionnaire de transport, l'entreprise peut continuer à exercer :",
r:[{t:"Indéfiniment sans désigner de remplaçant"},{t:"Pendant 18 mois maximum avec un gestionnaire temporaire",ok:true},{t:"6 mois puis doit cesser"},{t:"Elle doit immédiatement cesser toute activité"}],
x:"Bonne réponse : Pendant 18 mois maximum avec un gestionnaire temporaire. En cas de décès, d'incapacité physique ou de départ du gestionnaire, l'autorité compétente peut autoriser la poursuite de l'activité pendant 18 mois maximum sous réserve de la désignation d'un gestionnaire temporaire. Après ce délai, un nouveau gestionnaire qualifié doit être nommé."},

{id:192,prog:'LEGER',theme:'cl-secu',d:3,
e:"La responsabilité pénale pour homicide involontaire par un conducteur est engagée dès lors que :",
r:[{t:"Le conducteur était en état d'ivresse uniquement"},{t:"Une imprudence ou négligence a causé le décès, même sans alcool ni drogue",ok:true},{t:"Le conducteur conduisait trop vite uniquement"},{t:"L'accident était involontaire — jamais de responsabilité pénale"}],
x:"Bonne réponse : Une imprudence ou négligence a causé le décès, même sans alcool ni drogue. L'homicide involontaire (art. 221-6 du Code pénal) est retenu dès qu'une faute de conduite (imprudence, inattention, négligence) a causé le décès. Les peines vont de 3 ans d'emprisonnement et 45 000 € à 7 ans et 100 000 € en cas de circonstances aggravantes (alcool, stupéfiants, excès de vitesse, délit de fuite)."},

{id:193,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"Le taux normal de l'IS (Impôt sur les Sociétés) en France depuis 2022 est de :",
r:[{t:"28 %"},{t:"33,33 %"},{t:"25 %",ok:true},{t:"20 %"}],
x:"Bonne réponse : 25 %. Le taux normal de l'IS est de 25 % depuis le 1er janvier 2022 (après une baisse progressive depuis 33,33 % en 2017). Les PME bénéficient d'un taux réduit de 15 % sur les 42 500 premiers euros de bénéfice si leur CA est inférieur à 10 M€ et que leur capital est entièrement libéré et détenu à 75 % par des personnes physiques."},

{id:194,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"Le résultat fiscal diffère du résultat comptable car :",
r:[{t:"Il inclut la TVA collectée"},{t:"Certaines charges ne sont pas déductibles (amendes, somptuaires…) et certains produits sont exonérés",ok:true},{t:"Il est calculé sur le CA brut"},{t:"Il est toujours supérieur au résultat comptable"}],
x:"Bonne réponse : Certaines charges ne sont pas déductibles (amendes, somptuaires…) et certains produits sont exonérés. Résultat fiscal = Résultat comptable + Réintégrations fiscales (charges non déductibles) - Déductions fiscales (provisions réglementées, certaines exonérations). L'IS est calculé sur le résultat fiscal, qui peut être supérieur ou inférieur au résultat comptable."},

{id:195,prog:'LEGER',theme:'cl-acces',d:1,
e:"Le registre électronique national des entreprises de transport routier (RENT) est géré par :",
r:[{t:"Les Chambres de Commerce et d'Industrie"},{t:"La DREAL (ou DRIEAT en Île-de-France)",ok:true},{t:"Le Ministère de l'Économie"},{t:"L'INSEE"}],
x:"Bonne réponse : La DREAL (ou DRIEAT en Île-de-France). Le registre électronique national des transporteurs routiers (RENT) est géré par les DREAL (Directions Régionales de l'Environnement, de l'Aménagement et du Logement) ou la DRIEAT en Île-de-France."},

{id:196,prog:'LEGER',theme:'cl-civil',d:2,
e:"La SAS (Société par Actions Simplifiée) se distingue par :",
r:[{t:"Un capital minimum de 37 000 €"},{t:"Une grande liberté statutaire et pas de capital minimum légal",ok:true},{t:"L'obligation d'un conseil d'administration"},{t:"Un minimum de 7 associés"}],
x:"Bonne réponse : Une grande liberté statutaire et pas de capital minimum légal. La SAS est la forme sociale la plus flexible : pas de capital minimum légal (1 € suffit), grande liberté dans l'organisation de la gouvernance et des droits des associés. Elle est présidée par un président (personne physique ou morale) obligatoire."},

{id:197,prog:'LEGER',theme:'cl-gestion',d:3,
e:"La méthode des SIG (Soldes Intermédiaires de Gestion) permet de :",
r:[{t:"Calculer uniquement le résultat net"},{t:"Décomposer la formation du résultat à travers plusieurs indicateurs successifs : VA, EBE, RCAI…",ok:true},{t:"Établir le tableau de financement"},{t:"Calculer le BFR normatif"}],
x:"Bonne réponse : Décomposer la formation du résultat à travers plusieurs indicateurs successifs : VA, EBE, RCAI…. Les SIG décomposent le compte de résultat en indicateurs intermédiaires : Marge commerciale → Production → Valeur Ajoutée → EBE → Résultat d'exploitation → RCAI → Résultat net. Chaque solde mesure un niveau différent de performance et permet d'analyser précisément d'où vient (ou ne vient pas) la rentabilité."},

{id:198,prog:'LEGER',theme:'cl-civil',d:2,
e:"Un transporteur VUL peut-il refuser un transport pour des raisons de sécurité ?",
r:[{t:"Non, il doit toujours assurer le transport si rémunéré"},{t:"Oui, il peut refuser si les conditions de sécurité ne sont pas réunies",ok:true},{t:"Oui, mais uniquement avec l'accord de la DREAL"},{t:"Non, le refus de transport est une infraction pénale"}],
x:"Bonne réponse : Oui, il peut refuser si les conditions de sécurité ne sont pas réunies. Le transporteur a le droit de refuser un transport s'il estime que les conditions de sécurité ne sont pas réunies (surcharge, mauvais conditionnement, risque pour autrui…). C'est même une obligation légale dans certains cas."},

{id:199,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le coefficient d'exploitation d'une entreprise de transport est de 93 %. Cela signifie :",
r:[{t:"93 % des véhicules sont en activité"},{t:"93 % du CA est absorbé par les charges, laissant 7 % de marge",ok:true},{t:"L'entreprise perd de l'argent"},{t:"L'entreprise est très rentable"}],
x:"Bonne réponse : 93 % du CA est absorbé par les charges, laissant 7 % de marge. Coefficient d'exploitation = Charges totales / CA × 100. Un coefficient de 93 % laisse 7 % de marge bénéficiaire. Dans le transport VUL, les coefficients entre 88 % et 94 % sont normaux. Au-delà de 95 %, la rentabilité est fragile. Au-delà de 100 %, l'entreprise est déficitaire."},

{id:200,prog:'LEGER',theme:'cl-acces',d:2,
e:"La licence de transport intérieur est délivrée pour :",
r:[{t:"5 ans"},{t:"10 ans renouvelables",ok:true},{t:"Elle est permanente"},{t:"3 ans pour les nouvelles entreprises"}],
x:"Bonne réponse : 10 ans renouvelables. La licence de transport intérieur (LTI) est délivrée pour 10 ans renouvelables. Le renouvellement est soumis à la vérification que l'entreprise satisfait toujours aux 3 conditions d'accès (honorabilité, capacité financière et professionnelle)."},

{id:201,prog:'LEGER',theme:'cl-fiscal',d:3,
e:"La TVA sur les carburants des VUL est récupérable à hauteur de :",
r:[{t:"0 % (non récupérable pour les VUL)"},{t:"80 % pour le gazole",ok:true},{t:"100 % pour tous les carburants"},{t:"50 % quel que soit le carburant"}],
x:"Bonne réponse : 80 % pour le gazole. Pour les VUL utilisés à des fins professionnelles, la TVA sur le gazole est récupérable à 80 %. Pour l'essence, elle est non récupérable (0 %). Pour les véhicules électriques professionnels, la TVA sur l'électricité est récupérable à 100 %."},

{id:202,prog:'LEGER',theme:'cl-regl',d:1,
e:"La limitation de vitesse d'un VUL <3,5t sur autoroute est de :",
r:[{t:"110 km/h"},{t:"130 km/h",ok:true},{t:"120 km/h"},{t:"90 km/h"}],
x:"Bonne réponse : 130 km/h. Les VUL de PTAC ≤ 3,5t sont soumis aux mêmes limitations de vitesse que les voitures particulières : 130 km/h sur autoroute (110 km/h par temps de pluie), 80 km/h sur routes nationales/départementales à double sens, 50 km/h en agglomération."},

{id:203,prog:'LEGER',theme:'cl-civil',d:1,
e:"Le KBIS est :",
r:[{t:"Le document fiscal annuel de l'entreprise"},{t:"L'extrait du registre du commerce attestant l'existence juridique d'une société",ok:true},{t:"Le relevé bancaire obligatoire pour les entreprises"},{t:"L'attestation d'immatriculation à l'URSSAF"}],
x:"Bonne réponse : L'extrait du registre du commerce attestant l'existence juridique d'une société. Le KBIS est l'extrait du Registre du Commerce et des Sociétés (RCS). C'est la 'carte d'identité' officielle d'une entreprise commerciale, délivrée par le greffe du tribunal de commerce. Il atteste de l'existence légale de la société."},

{id:204,prog:'LEGER',theme:'cl-secu',d:2,
e:"L'angle mort d'un VUL se situe principalement :",
r:[{t:"À l'avant du véhicule"},{t:"Sur les côtés et à l'arrière, non visibles dans les rétroviseurs",ok:true},{t:"Uniquement à l'arrière"},{t:"Uniquement du côté passager"}],
x:"Bonne réponse : Sur les côtés et à l'arrière, non visibles dans les rétroviseurs. Les angles morts d'un VUL sont les zones non visibles dans les rétroviseurs, principalement sur les côtés (zones latérales arrière) et à l'arrière direct. Contrairement aux PL, les VUL ont des angles morts moins importants, mais restent significatifs, notamment du côté droit en milieu urbain. Des équipements comme les caméras de recul réduisent ce risque."},

{id:205,prog:'LEGER',theme:'cl-secu',d:1,
e:"La conduite sous l'effet de médicaments psychoactifs (somnifères, anxiolytiques) :",
r:[{t:"Est autorisée si la dose est médicale"},{t:"Peut être aussi dangereuse que l'alcool et doit être signalée par le médecin si contre-indiquée à la conduite",ok:true},{t:"Est sans danger si le conducteur se sent bien"},{t:"N'est sanctionnée que si accident avec blessé"}],
x:"Bonne réponse : Peut être aussi dangereuse que l'alcool et doit être signalée par le médecin si contre-indiquée à la conduite. Les médicaments de niveau 3 (pictogramme triangle rouge fond rouge) sont contre-indiqués à la conduite. Les niveaux 1 et 2 nécessitent une vigilance accrue. Le médecin prescripteur doit informer le patient des risques. La conduite sous l'effet de médicaments altérant les capacités est sanctionnable."},

{id:206,prog:'LEGER',theme:'cl-civil',d:2,
e:"La lettre de change est un titre par lequel :",
r:[{t:"La banque garantit un paiement"},{t:"Le tireur donne ordre au tiré de payer une somme à une échéance",ok:true},{t:"L'acheteur s'engage à payer dans 30 jours"},{t:"Le transporteur garantit la livraison"}],
x:"Bonne réponse : Le tireur donne ordre au tiré de payer une somme à une échéance. La lettre de change (traite) est un effet de commerce par lequel le tireur (créancier) ordonne au tiré (débiteur) de payer une somme déterminée à une date précise. Elle peut être endossée et escomptée auprès d'une banque pour obtenir des liquidités anticipées."},

{id:207,prog:'LEGER',theme:'cl-gestion',d:3,
e:"La valeur actuelle nette (VAN) d'un investissement est positive lorsque :",
r:[{t:"Les flux de trésorerie futurs actualisés sont supérieurs au coût de l'investissement",ok:true},{t:"L'investissement est entièrement financé par emprunt"},{t:"Le délai de récupération est inférieur à 2 ans"},{t:"Le taux d'actualisation est nul"}],
x:"Bonne réponse : Les flux de trésorerie futurs actualisés sont supérieurs au coût de l'investissement. La VAN = Somme des flux de trésorerie futurs actualisés - Investissement initial. Une VAN positive signifie que l'investissement crée de la valeur (les gains actualisés dépassent le coût). Une VAN négative indique une destruction de valeur. C'est le principal critère de sélection des investissements."},

{id:208,prog:'LEGER',theme:'cl-social',d:2,
e:"Le congé sabbatique est ouvert aux salariés ayant :",
r:[{t:"1 an d'ancienneté"},{t:"3 ans dans l'entreprise et 6 ans d'activité professionnelle",ok:true},{t:"5 ans d'ancienneté"},{t:"10 ans d'ancienneté"}],
x:"Bonne réponse : 3 ans dans l'entreprise et 6 ans d'activité professionnelle. Le congé sabbatique (art. L.3142-28 du Code du travail) est ouvert aux salariés justifiant d'au moins 36 mois d'ancienneté dans l'entreprise et de 6 années d'activité professionnelle. Sa durée est de 6 à 11 mois. L'employeur peut le refuser ou le reporter sous certaines conditions."},

{id:209,prog:'LEGER',theme:'cl-civil',d:3,
e:"Le 'dol' dans la formation d'un contrat est :",
r:[{t:"Une erreur involontaire d'une partie"},{t:"Une manœuvre frauduleuse pour provoquer l'erreur du cocontractant",ok:true},{t:"Un avantage excessif obtenu par une partie"},{t:"L'impossibilité d'exécuter le contrat"}],
x:"Bonne réponse : Une manœuvre frauduleuse pour provoquer l'erreur du cocontractant. Le dol est un vice du consentement (art. 1137 du Code civil). Il consiste en des manœuvres frauduleuses ou des mensonges délibérés destinés à tromper l'autre partie et à provoquer son consentement. Le dol entraîne la nullité relative du contrat."},

{id:210,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"La TVA sur les véhicules de tourisme utilisés à des fins professionnelles est :",
r:[{t:"Récupérable à 100 %"},{t:"Non récupérable",ok:true},{t:"Récupérable à 50 %"},{t:"Récupérable à 80 %"}],
x:"Bonne réponse : Non récupérable. La TVA sur les véhicules conçus pour le transport de personnes (voitures de tourisme, catégorie M1) n'est pas déductible, même utilisés professionnellement. Exception : les VUL (véhicules utilitaires légers N1) qui permettent la récupération de TVA car ils sont conçus pour le transport de marchandises."},

{id:211,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"La franchise en base de TVA (Taxe sur la Valeur Ajoutée) pour un prestataire de services s'applique si le CA (Chiffre d'Affaires) annuel est inférieur à :",
r:[{t:"10 000 €"},{t:"37 500 €",ok:true},{t:"85 000 €"},{t:"188 700 €"}],
x:"Bonne réponse : 37 500 €. Depuis 2026, la franchise en base de TVA (art. 293 B du CGI) exonère les prestataires de services dont le CA HT ne dépasse pas 37 500 € (seuil majoré de tolérance : 41 250 €). Pour la vente de biens, le seuil est de 85 000 €. Sous ce seuil, pas de TVA facturée et pas de TVA déductible sur les achats."},

{id:212,prog:'LEGER',theme:'cl-social',d:1,
e:"Le congé de paternité et d'accueil de l'enfant (hors congé de naissance) est de :",
r:[{t:"3 jours"},{t:"11 jours"},{t:"25 jours calendaires",ok:true},{t:"32 jours dans tous les cas"}],
x:"Bonne réponse : 25 jours calendaires. Depuis le 1er juillet 2021, le congé de paternité est de 25 jours calendaires (32 jours pour une naissance multiple), dont 4 jours obligatoires qui doivent être pris immédiatement après la naissance. Il est indemnisé par la CPAM."},

{id:213,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le seuil de rentabilité (SR) exprimé en chiffre d'affaires est :",
r:[{t:"SR = Charges fixes / Taux de marge sur coûts variables",ok:true},{t:"SR = Charges variables / Taux de marge sur coûts fixes"},{t:"SR = Résultat net / Taux de TVA"},{t:"SR = CA × Taux d'amortissement"}],
x:"Bonne réponse : SR = Charges fixes / Taux de marge sur coûts variables. SR = Charges fixes / Taux de MCV. Exemple : si les charges fixes sont 30 000 € et le taux de MCV est 40 %, le SR est de 75 000 €. C'est le CA minimum à réaliser pour ne pas perdre d'argent."},

{id:214,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"La déclaration de revenus pour un auto-entrepreneur (micro-entreprise) est effectuée :",
r:[{t:"Mensuellement ou trimestriellement selon le choix",ok:true},{t:"Uniquement annuellement"},{t:"Uniquement trimestriellement"},{t:"Semestriellement"}],
x:"Bonne réponse : Mensuellement ou trimestriellement selon le choix. L'auto-entrepreneur peut choisir entre une déclaration mensuelle ou trimestrielle de son chiffre d'affaires. Le versement libératoire de l'impôt sur le revenu et les cotisations sociales sont calculés automatiquement sur le CA déclaré."},

{id:215,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Un FRNG de 8 000 € et un BFR de 12 000 € donnent une trésorerie nette de :",
r:[{t:"+20 000 €"},{t:"–4 000 €",ok:true},{t:"+4 000 €"},{t:"0 €"}],
x:"Bonne réponse : –4 000 €. Trésorerie nette = FRNG — BFR = 8 000 — 12 000 = —4 000 €. Trésorerie négative : l'entreprise dépend de financements bancaires à court terme (découvert). Elle doit soit augmenter son FRNG (nouveaux apports, emprunts LT) soit réduire son BFR (délais clients plus courts, délais fournisseurs plus longs)."},

{id:216,prog:'LEGER',theme:'cl-secu',d:2,
e:"La surcharge d'un VUL affecte principalement la sécurité par :",
r:[{t:"Une meilleure stabilité"},{t:"Un allongement des distances de freinage et une usure prématurée des pneus",ok:true},{t:"Une amélioration de la traction"},{t:"Aucun impact sur la sécurité active"}],
x:"Bonne réponse : Un allongement des distances de freinage et une usure prématurée des pneus. La surcharge dégrade la sécurité : allongement des distances de freinage (le système n'est pas dimensionné pour ce poids), usure prématurée et risque d'éclatement des pneumatiques, surcharge du châssis et des suspensions, perte de maniabilité. Elle peut invalider l'assurance en cas d'accident."},

{id:217,prog:'LEGER',theme:'cl-civil',d:2,
e:"La saisie-attribution permet de :",
r:[{t:"Saisir les biens immobiliers du débiteur"},{t:"Bloquer et récupérer les sommes détenues par un tiers pour le débiteur (ex : banque)",ok:true},{t:"Vendre aux enchères les biens meubles"},{t:"Suspendre un contrat en cours"}],
x:"Bonne réponse : Bloquer et récupérer les sommes détenues par un tiers pour le débiteur (ex : banque). La saisie-attribution permet à un créancier muni d'un titre exécutoire de saisir les créances de son débiteur détenues par un tiers (notamment son compte bancaire). Les sommes sont attribuées immédiatement au créancier saisissant."},

{id:218,prog:'LEGER',theme:'cl-gestion',d:1,
e:"Le résultat net comptable est calculé comme :",
r:[{t:"CA — charges variables"},{t:"(Résultat d'exploitation + Résultat financier + Résultat exceptionnel) — IS",ok:true},{t:"CA — charges fixes"},{t:"EBE — amortissements"}],
x:"Bonne réponse : (Résultat d'exploitation + Résultat financier + Résultat exceptionnel) — IS. Résultat net = Résultat d'exploitation + Résultat financier + Résultat exceptionnel — IS — Participation. C'est le résultat final après toutes les déductions. Il peut être distribué (dividendes), mis en réserve ou reporté à nouveau."},

{id:219,prog:'LEGER',theme:'cl-regl',d:2,
e:"Un VUL transportant des bouteilles de gaz propane en quantités inférieures aux seuils ADR :",
r:[{t:"Est totalement exempt de toute réglementation"},{t:"Doit respecter des règles de sécurité minimales (bonne fixation, ventilation) même hors ADR",ok:true},{t:"Doit disposer d'un certificat ADR conducteur"},{t:"Ne peut transporter que du propane professionnel"}],
x:"Bonne réponse : Doit respecter des règles de sécurité minimales (bonne fixation, ventilation) même hors ADR. Même en dessous des seuils d'exemption ADR, le transport de gaz comprimés doit respecter des règles de base : bouteilles correctement arrimées et stockées à la verticale, ventilation du compartiment, extincteur, consignes de sécurité. Les bonnes pratiques professionnelles s'appliquent toujours."},

{id:220,prog:'LEGER',theme:'cl-secu',d:2,
e:"La distance de sécurité minimale sur autoroute entre deux véhicules à 130 km/h est d'environ :",
r:[{t:"50 m"},{t:"115 m (correspondant à 2 secondes de temps)",ok:true},{t:"200 m"},{t:"30 m"}],
x:"Bonne réponse : 115 m (correspondant à 2 secondes de temps). La distance de sécurité recommandée correspond à au moins 2 secondes de temps d'espacement (règle des 2 secondes). À 130 km/h, cela représente environ 72 m/s × 2 = soit environ 72 m minimum. La règle légale française (art. R.412-12) impose une distance au moins égale à la distance parcourue en 2 secondes, soit environ 72 m à 130 km/h."},

{id:221,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le budget de trésorerie prévisionnel permet de :",
r:[{t:"Calculer l'IS prévisionnel"},{t:"Anticiper les besoins de financement à court terme et éviter les ruptures de trésorerie",ok:true},{t:"Établir le bilan prévisionnel"},{t:"Calculer le seuil de rentabilité"}],
x:"Bonne réponse : Anticiper les besoins de financement à court terme et éviter les ruptures de trésorerie. Le budget de trésorerie est un tableau prévisionnel mensuel des encaissements et décaissements. Il permet d'identifier à l'avance les périodes de tension de trésorerie pour anticiper les solutions (ligne de crédit, affacturage, relance clients) avant d'être en difficulté."},

{id:222,prog:'LEGER',theme:'cl-civil',d:3,
e:"La subrogation dans un contrat d'assurance transport signifie que :",
r:[{t:"L'assuré renonce à toute indemnité"},{t:"L'assureur, après avoir indemnisé l'assuré, se substitue à lui pour exercer les recours contre le responsable",ok:true},{t:"Le transporteur est exonéré de toute responsabilité"},{t:"L'assurance couvre automatiquement tous les risques"}],
x:"Bonne réponse : L'assureur, après avoir indemnisé l'assuré, se substitue à lui pour exercer les recours contre le responsable. La subrogation légale (art. L.121-12 du Code des assurances) permet à l'assureur qui a indemnisé son assuré (l'expéditeur ou le destinataire) d'exercer en son nom les actions en responsabilité contre le transporteur ou tout autre tiers responsable du sinistre."},

{id:223,prog:'LEGER',theme:'cl-gestion',d:2,
e:"La marge sur coûts variables (MCV) est calculée ainsi :",
r:[{t:"Chiffre d'affaires - Charges fixes"},{t:"Chiffre d'affaires - Charges variables",ok:true},{t:"Résultat net + Amortissements"},{t:"Prix de vente - Prix d'achat HT"}],
x:"Bonne réponse : Chiffre d'affaires - Charges variables. MCV = Chiffre d'affaires - Charges variables. Elle mesure ce qui reste après couverture des coûts variables pour couvrir les charges fixes. Le taux de MCV = MCV / CA × 100."},

{id:224,prog:'LEGER',theme:'cl-regl',d:2,
e:"Le Crit'Air 1 est attribué aux :",
r:[{t:"Véhicules 100 % électriques"},{t:"Véhicules essence Euro 5 et 6 et hybrides rechargeables",ok:true},{t:"Véhicules diesel Euro 6 uniquement"},{t:"Tous les véhicules récents"}],
x:"Bonne réponse : Véhicules essence Euro 5 et 6 et hybrides rechargeables. Crit'Air 0 = 100 % électrique et hydrogène. Crit'Air 1 = essence Euro 5 et 6, hybrides rechargeables. Crit'Air 2 = diesel Euro 5 et 6, essence Euro 4. Ces classifications déterminent l'accès aux ZFE-m selon les restrictions en vigueur dans chaque ville."},

{id:225,prog:'LEGER',theme:'cl-civil',d:1,
e:"La force majeure en droit des contrats exonère le débiteur si l'événement est :",
r:[{t:"Simplement imprévisible"},{t:"Imprévisible, irrésistible et extérieur",ok:true},{t:"Dommageable pour l'une des parties"},{t:"Connu après la signature du contrat"}],
x:"Bonne réponse : Imprévisible, irrésistible et extérieur. La force majeure (art. 1218 du Code civil) exige 3 conditions cumulatives : l'événement doit être imprévisible lors de la conclusion du contrat, irrésistible (impossible d'exécuter même avec toutes les précautions), et extérieur à la partie qui l'invoque."},

{id:226,prog:'LEGER',theme:'cl-social',d:1,
e:"La durée des congés payés annuels légaux pour un salarié à temps plein est de :",
r:[{t:"4 semaines (20 jours ouvrables)"},{t:"5 semaines (25 jours ouvrés ou 30 jours ouvrables)",ok:true},{t:"6 semaines"},{t:"4 semaines pour les ouvriers, 5 semaines pour les cadres"}],
x:"Bonne réponse : 5 semaines (25 jours ouvrés ou 30 jours ouvrables). Les congés payés légaux sont de 2,5 jours ouvrables par mois de travail effectif, soit 30 jours ouvrables (5 semaines) par an. La prise de congés doit respecter les règles d'ordre fixées par l'employeur après consultation du CSE. Au moins 12 jours ouvrables consécutifs doivent être pris entre le 1er mai et le 31 octobre."},

{id:227,prog:'LEGER',theme:'cl-civil',d:1,
e:"La mise en demeure est :",
r:[{t:"Un jugement rendu par un tribunal"},{t:"Une notification formelle enjoignant au débiteur d'exécuter son obligation",ok:true},{t:"Une saisie conservatoire sur les biens du débiteur"},{t:"Un acte notarié obligatoire"}],
x:"Bonne réponse : Une notification formelle enjoignant au débiteur d'exécuter son obligation. La mise en demeure (art. 1344 du Code civil) est une injonction formelle adressée au débiteur de remplir son obligation. Elle peut être faite par acte d'huissier ou lettre recommandée avec AR. Elle fait courir les intérêts moratoires et est souvent une étape préalable obligatoire avant toute action en justice."},

{id:228,prog:'LEGER',theme:'cl-social',d:2,
e:"Le licenciement d'une salariée enceinte est :",
r:[{t:"Autorisé pour faute grave"},{t:"Interdit pendant la grossesse et les 10 semaines suivant le congé maternité, sauf faute grave sans lien avec la grossesse",ok:true},{t:"Possible avec accord de l'inspecteur du travail"},{t:"Autorisé pour motif économique"}],
x:"Bonne réponse : Interdit pendant la grossesse et les 10 semaines suivant le congé maternité, sauf faute grave sans lien avec la grossesse. La salariée enceinte bénéficie d'une protection absolue : licenciement interdit pendant la grossesse et 10 semaines après le congé maternité. Seule exception : faute grave non liée à la grossesse ou impossibilité de maintenir le contrat pour un motif étranger à la grossesse (ex : fermeture totale de l'entreprise)."},

{id:229,prog:'LEGER',theme:'cl-secu',d:1,
e:"La conduite sous stupéfiants (même en traces résiduelles) est :",
r:[{t:"Sanctionnée uniquement si accident"},{t:"Un délit pénal : 2 ans d'emprisonnement et 4 500 € d'amende",ok:true},{t:"Une simple contravention"},{t:"Non sanctionnée pour les conducteurs professionnels"}],
x:"Bonne réponse : Un délit pénal : 2 ans d'emprisonnement et 4 500 € d'amende. La conduite sous l'emprise de stupéfiants est un délit pénal (art. L.235-1 du Code de la route) : 2 ans d'emprisonnement, 4 500 € d'amende, 6 points retirés, suspension possible du permis. Un test salivaire positif suffit à caractériser l'infraction, même sans signes visibles d'imprégnation. Cumulé avec l'alcool, les peines sont aggravées."},

{id:230,prog:'LEGER',theme:'cl-secu',d:2,
e:"L'aquaplaning survient lorsque :",
r:[{t:"La pression des pneus est trop élevée"},{t:"Un film d'eau s'interpose entre les pneus et la chaussée, supprimant tout contact",ok:true},{t:"La vitesse est trop basse sur sol mouillé"},{t:"Le VUL est surchargé par temps de pluie"}],
x:"Bonne réponse : Un film d'eau s'interpose entre les pneus et la chaussée, supprimant tout contact. L'aquaplaning survient à vitesse élevée sur route mouillée quand les pneus ne peuvent plus évacuer l'eau. Un film d'eau s'interpose et supprime l'adhérence. Le conducteur perd la direction et le freinage. Prévention : réduire la vitesse, vérifier les sculptures (min 1,6 mm légal, 3 mm recommandé sur sol mouillé)."},

{id:231,prog:'LEGER',theme:'cl-regl',d:3,
e:"Le transport de fonds et de valeurs par VUL nécessite :",
r:[{t:"Uniquement une assurance renforcée"},{t:"Une autorisation préfectorale et le respect de la réglementation TFV (transport de fonds et valeurs)",ok:true},{t:"Aucune réglementation spécifique pour les petits montants"},{t:"Un véhicule blindé obligatoirement"}],
x:"Bonne réponse : Une autorisation préfectorale et le respect de la réglementation TFV (transport de fonds et valeurs). Le transport de fonds et valeurs (TFV) est une activité réglementée par la loi du 12 juillet 1983. Il nécessite : une autorisation préfectorale, du personnel agréé et formé, des véhicules homologués, des procédures de sécurité strictes. Cette réglementation s'applique dès lors que le transport est rémunéré, indépendamment des montants."},

{id:232,prog:'LEGER',theme:'cl-regl',d:3,
e:"Un VUL transportant des colis de messagerie en zone urbaine dense est soumis à :",
r:[{t:"Uniquement le code de la route"},{t:"Le code de la route + réglementation livraisons zones urbaines (horaires, ZFE, LAPI…)",ok:true},{t:"La réglementation PL uniquement"},{t:"Aucune réglementation spécifique à la messagerie"}],
x:"Bonne réponse : Le code de la route + réglementation livraisons zones urbaines (horaires, ZFE, LAPI…). En zone urbaine, les transporteurs VUL sont soumis au code de la route, aux restrictions horaires de livraison fixées par les communes, aux Zones à Faibles Émissions (ZFE-m) imposant des vignettes Crit'Air, et aux Plans de Livraison Urbaine."},

{id:233,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le ratio de liquidité immédiate (ou acid-test) se calcule comme :",
r:[{t:"(Actif circulant – Stocks) / Dettes CT",ok:true},{t:"Actif circulant / Dettes CT"},{t:"Trésorerie / Total bilan"},{t:"Créances / Stocks"}],
x:"Bonne réponse : (Actif circulant – Stocks) / Dettes CT. Liquidité immédiate = (Créances CT + Trésorerie) / Dettes CT = (Actif circulant – Stocks) / Dettes CT. Il mesure la capacité à faire face aux dettes à court terme sans avoir à vendre les stocks. Un ratio ≥ 1 est généralement satisfaisant. Il est plus exigeant que le ratio de liquidité générale."},

{id:234,prog:'LEGER',theme:'cl-civil',d:2,
e:"L'action directe du sous-traitant contre le maître d'ouvrage n'est possible que si :",
r:[{t:"Le sous-traitant l'exige par écrit"},{t:"Le sous-traitant a été préalablement accepté et ses conditions de paiement agréées",ok:true},{t:"Le marché dépasse 50 000 €"},{t:"La sous-traitance est déclarée en préfecture"}],
x:"Bonne réponse : Le sous-traitant a été préalablement accepté et ses conditions de paiement agréées. L'action directe du sous-traitant (loi 31/12/1975) est conditionnée à l'acceptation préalable du sous-traitant par le maître de l'ouvrage ET à l'agrément de ses conditions de paiement. Sans ces formalités, l'action directe est irrecevable."},

{id:235,prog:'LEGER',theme:'cl-acces',d:2,
e:"La capacité professionnelle peut être prouvée par :",
r:[{t:"Uniquement le diplôme de l'examen CPC"},{t:"L'examen CPC, une équivalence de diplôme ou une expérience professionnelle reconnue",ok:true},{t:"Uniquement l'expérience professionnelle de 5 ans"},{t:"Tout diplôme de l'enseignement supérieur"}],
x:"Bonne réponse : L'examen CPC, une équivalence de diplôme ou une expérience professionnelle reconnue. La capacité professionnelle peut être prouvée par : la réussite à l'examen CPC organisé par les CCI, un diplôme ou titre reconnu comme équivalent par arrêté ministériel, ou une attestation de capacité délivrée sur la base d'une expérience professionnelle antérieure à l'entrée en vigueur de la réglementation."},

{id:236,prog:'LEGER',theme:'cl-social',d:2,
e:"La visite médicale d'embauche doit avoir lieu :",
r:[{t:"Avant la prise de poste pour tout salarié"},{t:"Dans les 3 mois suivant la prise de poste (visite d'information et de prévention)",ok:true},{t:"Dans les 6 mois suivant la prise de poste"},{t:"Uniquement pour les postes à risque"}],
x:"Bonne réponse : Dans les 3 mois suivant la prise de poste (visite d'information et de prévention). Depuis la réforme de 2017, la VIP (Visite d'Information et de Prévention) remplace la visite médicale d'embauche obligatoire. Elle doit avoir lieu dans les 3 mois suivant la prise de poste. Pour les postes à risque, la surveillance médicale renforcée s'applique avant l'embauche."},

{id:237,prog:'LEGER',theme:'cl-civil',d:2,
e:"La clause de 'port dû' dans un contrat de transport signifie que :",
r:[{t:"Le transport est gratuit"},{t:"Les frais de transport sont à la charge du destinataire",ok:true},{t:"L'expéditeur paie avant le départ"},{t:"Le transporteur avance les frais"}],
x:"Bonne réponse : Les frais de transport sont à la charge du destinataire. 'Port dû' signifie que les frais de transport sont payables à la livraison par le destinataire. À l'inverse, 'port payé' ou 'franco' signifie que l'expéditeur prend en charge les frais de transport dans le prix de vente."},

{id:238,prog:'LEGER',theme:'cl-civil',d:1,
e:"Un entrepreneur individuel (hors EIRL) est responsable de ses dettes professionnelles sur :",
r:[{t:"Uniquement son patrimoine professionnel"},{t:"L'ensemble de son patrimoine personnel et professionnel",ok:true},{t:"Uniquement les biens acquis après la création de l'entreprise"},{t:"Jamais — il bénéficie d'une protection automatique"}],
x:"Bonne réponse : L'ensemble de son patrimoine personnel et professionnel. L'entrepreneur individuel classique engage la totalité de son patrimoine (personnel et professionnel) pour ses dettes professionnelles. Toutefois, la résidence principale est insaisissable de plein droit depuis 2015, et depuis 2022, le statut d'EI crée une séparation automatique du patrimoine."},

{id:239,prog:'LEGER',theme:'cl-civil',d:2,
e:"La résolution d'un contrat pour inexécution entraîne :",
r:[{t:"La modification des obligations"},{t:"L'anéantissement rétroactif du contrat avec restitutions réciproques",ok:true},{t:"Uniquement des dommages et intérêts"},{t:"La suspension temporaire du contrat"}],
x:"Bonne réponse : L'anéantissement rétroactif du contrat avec restitutions réciproques. La résolution (art. 1229 du Code civil) met fin au contrat et l'anéantit rétroactivement. Les parties sont remises dans l'état antérieur à la conclusion, avec restitutions mutuelles. Elle diffère de la résiliation qui ne vaut que pour l'avenir."},

{id:240,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Pour un transporteur VUL, le coût kilométrique comprend notamment :",
r:[{t:"Uniquement le carburant et les pneus"},{t:"Carburant, entretien, pneus, assurance, amortissement, charges de structure",ok:true},{t:"Uniquement les charges variables"},{t:"Uniquement le salaire du conducteur"}],
x:"Bonne réponse : Carburant, entretien, pneus, assurance, amortissement, charges de structure. Le coût de revient kilométrique complet intègre : charges variables (carburant, pneus, entretien courant) + charges fixes (assurance, amortissement, loyer véhicule, charges de structure) divisés par le kilométrage annuel."},

{id:241,prog:'LEGER',theme:'cl-acces',d:1,
e:"Le transporteur doit-il posséder les véhicules utilisés pour satisfaire à la condition d'établissement ?",
r:[{t:"Oui, obligatoirement en propriété"},{t:"Non, la possession légale suffit (location, leasing, crédit-bail)",ok:true},{t:"Il suffit d'avoir une promesse d'achat"},{t:"Oui, sauf pour les remorques"}],
x:"Bonne réponse : Non, la possession légale suffit (location, leasing, crédit-bail). La condition d'établissement ne requiert pas la propriété des véhicules. Il suffit que l'entreprise ait la disposition légale des véhicules (propriété, crédit-bail, location longue durée, etc.) et qu'ils soient immatriculés dans l'État membre d'établissement. La mise à disposition informelle ne suffit pas."},

{id:242,prog:'LEGER',theme:'cl-gestion',d:1,
e:"La marge sur coûts variables (MCV) d'une entreprise avec CA=80 000 € et CV=48 000 € est de :",
r:[{t:"48 000 €"},{t:"32 000 €",ok:true},{t:"16 000 €"},{t:"80 000 €"}],
x:"Bonne réponse : 32 000 €. MCV = CA - CV = 80 000 - 48 000 = 32 000 €. Le taux de MCV = 32 000 / 80 000 × 100 = 40 %. Cette MCV doit couvrir les charges fixes pour dégager un bénéfice. Si les CF sont de 28 000 €, le résultat avant IS serait de 4 000 €."},

{id:243,prog:'LEGER',theme:'cl-regl',d:2,
e:"La surcharge d'un VUL (dépassement du PTAC) est :",
r:[{t:"Permise jusqu'à 10 % du PTAC"},{t:"Strictement interdite et passible d'amende",ok:true},{t:"Permise avec accord préfectoral"},{t:"Permise pour les livraisons urbaines"}],
x:"Bonne réponse : Strictement interdite et passible d'amende. Le dépassement du PTAC (Poids Total Autorisé en Charge) est formellement interdit pour tout véhicule. Les sanctions sont des contraventions qui varient selon le niveau de dépassement. Le conducteur ET le chargeur peuvent être mis en cause. De plus, en cas d'accident avec surcharge, l'assurance peut invoquer une déchéance de garantie."},

{id:244,prog:'LEGER',theme:'cl-gestion',d:2,
e:"L'affacturage (factoring) est un mécanisme permettant de :",
r:[{t:"Acheter les dettes de ses fournisseurs"},{t:"Céder ses créances clients à un factor contre paiement immédiat",ok:true},{t:"Émettre des obligations sur le marché"},{t:"Bénéficier d'un crédit bancaire long terme"}],
x:"Bonne réponse : Céder ses créances clients à un factor contre paiement immédiat. L'affacturage permet à une entreprise de céder ses créances clients à un factor qui avance les fonds immédiatement (moins sa commission). Le factor se charge ensuite du recouvrement. Avantages : trésorerie immédiate, externalisation du recouvrement. Inconvénients : coût élevé, perte de contact direct avec le client."},

{id:245,prog:'LEGER',theme:'cl-gestion',d:2,
e:"La marge opérationnelle (taux de résultat d'exploitation) d'une entreprise est de 7 %. Pour un CA de 180 000 €, le résultat d'exploitation est de :",
r:[{t:"7 000 €"},{t:"12 600 €",ok:true},{t:"25 714 €"},{t:"1 260 €"}],
x:"Bonne réponse : 12 600 €. Résultat d'exploitation = CA × Taux = 180 000 × 7 % = 12 600 €. Ce résultat est avant la déduction des charges financières (intérêts d'emprunt), des résultats exceptionnels et de l'IS."},

{id:246,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le levier d'exploitation (DOL) = MCV / Résultat d'exploitation. Un DOL de 4 signifie :",
r:[{t:"L'entreprise a 4 fois plus de charges fixes que variables"},{t:"Une hausse de 1 % du CA entraîne une hausse de 4 % du résultat",ok:true},{t:"Le taux de marge est de 25 %"},{t:"L'entreprise est 4 fois plus rentable que la moyenne"}],
x:"Bonne réponse : Une hausse de 1 % du CA entraîne une hausse de 4 % du résultat. Le Degré de Levier Opérationnel (DOL) mesure l'amplification des variations du résultat par rapport aux variations du CA. DOL = 4 signifie qu'une hausse de 1 % du CA entraîne une hausse de 4 % du résultat d'exploitation. Effet symétrique : une baisse de 1 % du CA provoque une baisse de 4 % du résultat."},

{id:247,prog:'LEGER',theme:'cl-social',d:1,
e:"Un conducteur de VUL salarié est soumis à la durée légale du travail de :",
r:[{t:"35 heures par semaine",ok:true},{t:"39 heures par semaine"},{t:"40 heures par semaine"},{t:"48 heures par semaine"}],
x:"Bonne réponse : 35 heures par semaine. La durée légale du travail est de 35 heures hebdomadaires pour tous les salariés (loi Aubry). Les heures au-delà sont des heures supplémentaires majorées."},

{id:248,prog:'LEGER',theme:'cl-civil',d:2,
e:"La garantie légale de conformité pour les biens achetés à un professionnel par un consommateur est de :",
r:[{t:"6 mois"},{t:"1 an"},{t:"2 ans",ok:true},{t:"5 ans"}],
x:"Bonne réponse : 2 ans. La garantie légale de conformité (art. L.217-4 du Code de la consommation) est de 2 ans pour les biens achetés par un consommateur auprès d'un professionnel. Elle couvre les défauts de conformité existant au moment de la délivrance."},

{id:249,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"La contribution économique territoriale (CET) remplace depuis 2010 :",
r:[{t:"La TVA locale"},{t:"La taxe professionnelle",ok:true},{t:"L'impôt sur les sociétés local"},{t:"La taxe d'habitation pour les entreprises"}],
x:"Bonne réponse : La taxe professionnelle. La CET remplace la taxe professionnelle depuis le 1er janvier 2010. Elle se compose de la CFE (Cotisation Foncière des Entreprises) basée sur les valeurs locatives, et de la CVAE (Cotisation sur la Valeur Ajoutée des Entreprises) pour les plus grandes entreprises."},

{id:250,prog:'LEGER',theme:'cl-civil',d:3,
e:"La simulation contractuelle (acte apparent vs acte secret) produit les effets suivants :",
r:[{t:"Les deux actes sont nuls automatiquement"},{t:"L'acte secret prime entre les parties ; l'acte apparent est opposable aux tiers de bonne foi",ok:true},{t:"L'acte apparent prime toujours sur l'acte secret"},{t:"Aucun des deux actes n'est opposable"}],
x:"Bonne réponse : L'acte secret prime entre les parties ; l'acte apparent est opposable aux tiers de bonne foi. En cas de simulation (art. 1201 du Code civil), l'acte secret (contre-lettre) prime entre les parties contractantes. Mais les tiers de bonne foi peuvent se prévaloir de l'acte apparent. La simulation frauduleuse (pour tromper le fisc, les créanciers…) est sanctionnée pénalement."},

{id:251,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"Les charges non déductibles fiscalement pour une entreprise à l'IS comprennent notamment :",
r:[{t:"Les salaires des dirigeants"},{t:"Les amendes et pénalités infligées par les autorités",ok:true},{t:"Les intérêts d'emprunt"},{t:"Les loyers de crédit-bail"}],
x:"Bonne réponse : Les amendes et pénalités infligées par les autorités. Les amendes, pénalités et majorations infligées par l'État ou les collectivités ne sont pas déductibles fiscalement (art. 39.2 du CGI). Les amortissements excessifs au-delà des plafonds légaux, certains cadeaux clients dépassant les limites, ou les dépenses somptuaires (chasse, pêche, yachts) sont également non déductibles."},

{id:252,prog:'LEGER',theme:'cl-civil',d:3,
e:"L'indemnité forfaitaire pour frais de recouvrement due en cas de retard de paiement est de :",
r:[{t:"10 €"},{t:"40 €",ok:true},{t:"100 €"},{t:"Elle n'existe pas en France"}],
x:"Bonne réponse : 40 €. Une indemnité forfaitaire de 40 € pour frais de recouvrement est obligatoirement due par le débiteur professionnel en cas de retard de paiement (art. D.441-5 du Code de commerce). Si les frais réels dépassent 40 €, une indemnité complémentaire justifiée peut être réclamée."},

{id:253,prog:'LEGER',theme:'cl-civil',d:3,
e:"Le contrat de commission de transport engage le commissionnaire :",
r:[{t:"Uniquement comme intermédiaire sans responsabilité"},{t:"Personnellement sur l'exécution du transport, même s'il sous-traite",ok:true},{t:"Uniquement si le transporteur est défaillant"},{t:"Dans la limite du prix du transport"}],
x:"Bonne réponse : Personnellement sur l'exécution du transport, même s'il sous-traite. Le commissionnaire de transport (art. L.132-3 Code de commerce) s'engage personnellement sur l'exécution du transport vis-à-vis du donneur d'ordre, même s'il confie l'exécution à des sous-traitants. Il répond des fautes de ses substitués comme de ses propres fautes."},

{id:254,prog:'LEGER',theme:'cl-social',d:1,
e:"Le compte épargne-temps (CET) permet au salarié de :",
r:[{t:"Épargner uniquement de l'argent"},{t:"Accumuler des droits à congés ou à rémunération différée",ok:true},{t:"Bénéficier de réductions d'impôts"},{t:"Créer son entreprise en gardant ses droits"}],
x:"Bonne réponse : Accumuler des droits à congés ou à rémunération différée. Le CET (art. L.3151-1 du Code du travail) permet au salarié d'accumuler des droits à congés rémunérés ou à épargne salariale, en y affectant des jours de repos, des heures supplémentaires ou des éléments de rémunération. Son alimentation et utilisation sont définies par accord collectif."},

{id:255,prog:'LEGER',theme:'cl-civil',d:1,
e:"Un sous-traitant en transport est responsable vis-à-vis de :",
r:[{t:"Uniquement du donneur d'ordre (l'expéditeur final)"},{t:"Uniquement du client direct (le commissionnaire ou transporteur principal)",ok:true},{t:"De tous les acteurs de la chaîne de transport"},{t:"Il n'a aucune responsabilité juridique"}],
x:"Bonne réponse : Uniquement du client direct (le commissionnaire ou transporteur principal). Le sous-traitant est responsable contractuellement vis-à-vis de son donneur d'ordre direct (le transporteur principal ou le commissionnaire), pas directement vis-à-vis du chargeur initial."},

{id:256,prog:'LEGER',theme:'cl-gestion',d:2,
e:"La marge nette d'une entreprise de transport est de 8 %. Si le CA est de 200 000 €, quel est le bénéfice net ?",
r:[{t:"8 000 €"},{t:"16 000 €",ok:true},{t:"8 €"},{t:"80 000 €"}],
x:"Bonne réponse : 16 000 €. Bénéfice net = CA × Taux de marge nette = 200 000 × 8 % = 16 000 €. La marge nette est le rapport entre le résultat net (bénéfice après toutes les charges et impôts) et le CA. Elle exprime la rentabilité finale de l'activité."},

{id:257,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Un transporteur VUL avec un CA de 120 000 € et un coefficient d'exploitation de 91 % dégage :",
r:[{t:"91 000 € de résultat"},{t:"10 800 € de résultat d'exploitation",ok:true},{t:"21 000 € de résultat"},{t:"1 080 € de résultat"}],
x:"Bonne réponse : 10 800 € de résultat d'exploitation. Résultat = CA × (1 − coef. d'exploitation) = 120 000 × 0,09 = 10 800 €. Le coefficient de 91 % signifie que 91 % du CA couvre les charges, laissant 9 % de marge avant IS."},

{id:258,prog:'LEGER',theme:'cl-social',d:2,
e:"Le registre unique du personnel doit être conservé par l'employeur pendant :",
r:[{t:"5 ans après le départ du salarié"},{t:"10 ans",ok:true},{t:"3 ans"},{t:"Indéfiniment"}],
x:"Bonne réponse : 10 ans. Le registre unique du personnel doit être tenu dans chaque établissement (art. L.1221-13 du Code du travail). Il doit être conservé pendant 5 ans après la date à laquelle le salarié a quitté l'établissement. Les bulletins de paie doivent être conservés sans limite de durée depuis 2017."},

{id:259,prog:'LEGER',theme:'cl-regl',d:2,
e:"La vérification annuelle du hayon élévateur d'un VUL est :",
r:[{t:"Facultative"},{t:"Obligatoire (arrêté du 1er mars 2004) avec carnet de maintenance et formation des utilisateurs",ok:true},{t:"Obligatoire uniquement pour les hayons > 1 tonne"},{t:"Réalisée lors du contrôle technique uniquement"}],
x:"Bonne réponse : Obligatoire (arrêté du 1er mars 2004) avec carnet de maintenance et formation des utilisateurs. Les hayons élévateurs sont des équipements de travail soumis à vérification périodique annuelle obligatoire par un organisme agréé (arrêté du 1er mars 2004). Le carnet de maintenance doit être tenu à jour et les utilisateurs formés. Ces obligations s'appliquent dès l'installation, quelle que soit la taille du VUL."},

{id:260,prog:'LEGER',theme:'cl-civil',d:2,
e:"La clause pénale dans un contrat :",
r:[{t:"Est toujours exécutoire sans contrôle du juge"},{t:"Fixe forfaitairement le montant des dommages et intérêts en cas d'inexécution",ok:true},{t:"Interdit tout recours judiciaire"},{t:"N'est valable que dans les contrats commerciaux"}],
x:"Bonne réponse : Fixe forfaitairement le montant des dommages et intérêts en cas d'inexécution. La clause pénale (art. 1231-5 du Code civil) fixe à l'avance le montant de l'indemnité due en cas d'inexécution ou de retard. Le juge peut la modérer ou l'augmenter si elle est manifestement excessive ou dérisoire — il dispose d'un pouvoir modérateur."},

{id:261,prog:'LEGER',theme:'cl-social',d:2,
e:"La priorité de réembauche après licenciement économique dure :",
r:[{t:"3 mois"},{t:"1 an",ok:true},{t:"2 ans"},{t:"Elle est permanente"}],
x:"Bonne réponse : 1 an. Le salarié licencié pour motif économique bénéficie d'une priorité de réembauche pendant 1 an à compter de la rupture du contrat. Pour en bénéficier, il doit en faire la demande dans ce délai. L'employeur doit l'informer de tout poste disponible correspondant à ses qualifications."},

{id:262,prog:'LEGER',theme:'cl-civil',d:2,
e:"La franchise commerciale est un contrat par lequel :",
r:[{t:"Le franchiseur vend des produits à prix réduit"},{t:"Le franchiseur concède à un franchisé l'utilisation de sa marque et savoir-faire contre redevance",ok:true},{t:"Deux entreprises s'associent en parts égales"},{t:"Un distributeur agit pour le compte d'un fabricant"}],
x:"Bonne réponse : Le franchiseur concède à un franchisé l'utilisation de sa marque et savoir-faire contre redevance. La franchise est un accord par lequel le franchiseur (propriétaire d'une marque et d'un concept) accorde à des franchisés indépendants le droit d'exploiter son enseigne et son savoir-faire, en contrepartie d'un droit d'entrée et de redevances périodiques."},

{id:263,prog:'LEGER',theme:'cl-acces',d:2,
e:"La capacité financière minimale requise pour un transporteur léger (<3,5t) est de :",
r:[{t:"1 800 € par véhicule"},{t:"900 € par véhicule supplémentaire au-delà du premier",ok:true},{t:"50 000 € forfaitaires"},{t:"10 % du CA prévisionnel"}],
x:"Bonne réponse : 900 € par véhicule supplémentaire au-delà du premier. Pour le transport léger, la capacité financière requise est de 1 800 € pour le 1er véhicule et 900 € pour chaque véhicule supplémentaire (règlement européen 1071/2009 adapté au transport léger)."},

{id:264,prog:'LEGER',theme:'cl-secu',d:3,
e:"La règle des '2 secondes' pour la distance de sécurité est :",
r:[{t:"La distance de freinage à 50 km/h"},{t:"Le temps minimum entre le passage du véhicule devant et le passage du véhicule derrière devant un point fixe",ok:true},{t:"Le temps de réaction moyen d'un conducteur"},{t:"La durée légale de pause après 2h de conduite en VUL"}],
x:"Bonne réponse : Le temps minimum entre le passage du véhicule devant et le passage du véhicule derrière devant un point fixe. La règle des 2 secondes : choisissez un repère fixe (panneau, arbre), quand le véhicule devant le dépasse, comptez 2 secondes. Si votre véhicule dépasse ce repère avant les 2 secondes, vous êtes trop près. Par mauvais temps ou la nuit, portez ce délai à 4 secondes. Pour les PL, 3-4 secondes sont recommandées."},

{id:265,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le ratio de solvabilité générale mesure :",
r:[{t:"La capacité à rembourser les dettes à court terme"},{t:"La capacité à rembourser l'ensemble des dettes avec l'actif total",ok:true},{t:"Le niveau d'endettement à long terme"},{t:"La rentabilité de l'entreprise"}],
x:"Bonne réponse : La capacité à rembourser l'ensemble des dettes avec l'actif total. Solvabilité générale = Total actif / Total dettes. Un ratio > 1 signifie que l'actif total dépasse les dettes : l'entreprise serait solvable même en cas de liquidation. Un ratio < 1 indique une situation d'insolvabilité (capitaux propres négatifs)."},

{id:266,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"La déclaration mensuelle de TVA (CA3) est obligatoire si la TVA annuelle excède :",
r:[{t:"1 000 €"},{t:"4 000 €",ok:true},{t:"10 000 €"},{t:"15 000 €"}],
x:"Bonne réponse : 4 000 €. Le régime réel normal impose des déclarations mensuelles dès lors que la TVA due annuellement dépasse 4 000 €. En dessous, une déclaration trimestrielle est possible. Le régime simplifié (CA12) autorise une déclaration annuelle avec deux acomptes semestriels."},

{id:267,prog:'LEGER',theme:'cl-civil',d:2,
e:"Le privilège du vendeur de fonds de commerce garantit :",
r:[{t:"Le paiement des dettes du vendeur"},{t:"Le recouvrement du prix de vente en cas de revente du fonds ou de liquidation",ok:true},{t:"La qualité des marchandises vendues"},{t:"Le respect de la clause de non-concurrence"}],
x:"Bonne réponse : Le recouvrement du prix de vente en cas de revente du fonds ou de liquidation. Le vendeur d'un fonds de commerce bénéficie d'un privilège sur le fonds vendu pour garantir le paiement du prix si le paiement est différé. Ce privilège doit être inscrit au greffe du tribunal de commerce dans les 15 jours de l'acte de vente pour être opposable aux tiers."},

{id:268,prog:'LEGER',theme:'cl-secu',d:3,
e:"L'éco-conduite permet de réduire la consommation de carburant d'un VUL de :",
r:[{t:"2 à 5 %"},{t:"10 à 15 %",ok:true},{t:"20 à 30 %"},{t:"Plus de 50 %"}],
x:"Bonne réponse : 10 à 15 %. L'éco-conduite bien pratiquée permet généralement de réduire la consommation de carburant de 10 à 15 % : anticipation des situations, maintien d'une vitesse régulière, montée rapide en régime pour atteindre le rapport supérieur, coupure du moteur à l'arrêt prolongé. Les bénéfices incluent aussi la réduction de l'usure des freins et des pneus."},

{id:269,prog:'LEGER',theme:'cl-gestion',d:2,
e:"L'affacturage (factoring) consiste à :",
r:[{t:"Céder ses créances clients à un organisme spécialisé (factor) contre paiement immédiat",ok:true},{t:"Racheter les dettes d'un fournisseur"},{t:"Émettre des obligations sur le marché financier"},{t:"Négocier un découvert bancaire"}],
x:"Bonne réponse : Céder ses créances clients à un organisme spécialisé (factor) contre paiement immédiat. L'affacturage permet à une entreprise de céder ses créances clients à un factor (société spécialisée). Le factor avance immédiatement les fonds (moins sa commission et des frais) et se charge du recouvrement. C'est une solution de financement à court terme qui améliore la trésorerie mais a un coût."},

{id:270,prog:'LEGER',theme:'cl-social',d:2,
e:"Le statut de VRP (Voyageur Représentant Placier) se caractérise par :",
r:[{t:"Un contrat de prestation de services uniquement"},{t:"Un contrat de travail salarié avec des règles spécifiques à la représentation commerciale",ok:true},{t:"Un statut d'indépendant avec protection sociale"},{t:"Un contrat à durée déterminée uniquement"}],
x:"Bonne réponse : Un contrat de travail salarié avec des règles spécifiques à la représentation commerciale. Le VRP est un salarié qui prospecte une clientèle pour le compte d'un ou plusieurs employeurs. Son statut est régi par les articles L.7311-1 et suivants du Code du travail, avec des règles spécifiques : clause de non-concurrence, indemnité de clientèle, commission sur chiffre d'affaires."},

{id:271,prog:'LEGER',theme:'cl-social',d:2,
e:"Le Plan d'Épargne Entreprise (PEE) permet aux salariés de :",
r:[{t:"Recevoir des primes défiscalisées sans condition"},{t:"Constituer une épargne collective avec abondement possible de l'employeur",ok:true},{t:"Racheter les parts de l'entreprise à tout moment"},{t:"Bénéficier d'une retraite complémentaire garantie"}],
x:"Bonne réponse : Constituer une épargne collective avec abondement possible de l'employeur. Le PEE est un système d'épargne collectif permettant aux salariés de se constituer un portefeuille de valeurs mobilières. L'employeur peut compléter les versements par un abondement exonéré de charges sociales dans certaines limites. Les fonds sont bloqués 5 ans (sauf cas de déblocage anticipé)."},

{id:272,prog:'LEGER',theme:'cl-regl',d:1,
e:"Le transport de denrées alimentaires sous température dirigée nécessite obligatoirement :",
r:[{t:"Uniquement un thermomètre"},{t:"Un véhicule homologué ATP et une surveillance de la chaîne du froid",ok:true},{t:"Une autorisation préfectorale annuelle"},{t:"Un conducteur avec un diplôme d'hygiène alimentaire"}],
x:"Bonne réponse : Un véhicule homologué ATP et une surveillance de la chaîne du froid. L'accord ATP (Accord relatif aux Transports internationaux de denrées Périssables et aux engins spéciaux utilisés pour ces transports) impose des véhicules homologués (frigorifiques, isothermes…) pour le transport de produits frais, congelés ou surgelés. La chaîne du froid doit être documentée."},

{id:273,prog:'LEGER',theme:'cl-secu',d:2,
e:"La surcharge d'un VUL a pour principale conséquence sur la sécurité :",
r:[{t:"Amélioration de la traction"},{t:"Dégradation des distances de freinage, de la tenue de route et risque de rupture de pneu",ok:true},{t:"Amélioration de la stabilité par le poids"},{t:"Aucun impact sur la sécurité active"}],
x:"Bonne réponse : Dégradation des distances de freinage, de la tenue de route et risque de rupture de pneu. La surcharge dégrade considérablement la sécurité : allongement des distances de freinage (le système de freinage n'est pas dimensionné pour le poids supplémentaire), diminution de la maniabilité, surcharge des pneumatiques (risque d'éclatement), sollicitation excessive du châssis et des suspensions. La surcharge peut invalider l'assurance en cas d'accident."},

{id:274,prog:'LEGER',theme:'cl-secu',d:1,
e:"La pression des pneus d'un VUL chargé doit être :",
r:[{t:"Identique à un VUL vide"},{t:"Ajustée selon les préconisations du constructeur, souvent augmentée en charge",ok:true},{t:"Toujours de 2,5 bars"},{t:"Vérifiée uniquement lors du contrôle technique"}],
x:"Bonne réponse : Ajustée selon les préconisations du constructeur, souvent augmentée en charge. La pression des pneus doit être adaptée à la charge du véhicule selon les préconisations du constructeur (figurant souvent sur la plaque de custode ou dans le manuel). En charge maximale, la pression recommandée est généralement plus élevée qu'à vide pour éviter la surchauffe et l'éclatement du pneu."},

{id:275,prog:'LEGER',theme:'cl-regl',d:1,
e:"Le tachygraphe est-il obligatoire pour les VUL de moins de 3,5t ?",
r:[{t:"Oui, toujours"},{t:"Non, le règlement 561/2006 ne s'applique pas aux VUL <3,5t",ok:true},{t:"Oui, uniquement pour les trajets de plus de 100 km"},{t:"Oui, uniquement pour les VUL transportant des marchandises dangereuses"}],
x:"Bonne réponse : Non, le règlement 561/2006 ne s'applique pas aux VUL <3,5t. Le règlement (CE) 561/2006 sur les temps de conduite et le tachygraphe s'applique aux véhicules de transport de marchandises de PTAC supérieur à 3,5 tonnes. Les VUL de moins de 3,5t ne sont donc pas soumis à l'obligation de chronotachygraphe, sauf exceptions spécifiques."},

{id:276,prog:'LEGER',theme:'cl-social',d:3,
e:"La garantie AGS (Association pour la Gestion des créances des Salariés) intervient :",
r:[{t:"En cas de grève des salariés"},{t:"En cas de procédure collective (redressement ou liquidation judiciaire) pour payer les salaires impayés",ok:true},{t:"En cas d'accident du travail grave"},{t:"En cas de faillite personnelle du dirigeant uniquement"}],
x:"Bonne réponse : En cas de procédure collective (redressement ou liquidation judiciaire) pour payer les salaires impayés. L'AGS est un régime de garantie des salaires financé par les employeurs (cotisation patronale). Elle garantit le paiement des salaires, congés payés et indemnités de rupture lorsqu'une entreprise fait l'objet d'une procédure de sauvegarde, redressement ou liquidation judiciaire."},

{id:277,prog:'LEGER',theme:'cl-regl',d:3,
e:"La réglementation CRD (Certificat Restreint Délivrance) concerne :",
r:[{t:"Les VUL transportant des denrées périssables"},{t:"Les chauffeurs ayant un permis probatoire"},{t:"Les VUL transformés en véhicules de transport de personnes",ok:true},{t:"Les VUL avec équipement de levage"}],
x:"Bonne réponse : Les VUL transformés en véhicules de transport de personnes. Le CRD ou réception à titre isolé (RTI) concerne les transformations importantes de véhicules (réaménagement de l'habitacle, carrosserie modifiée significativement). Tout VUL transformé pour le transport de personnes doit obtenir une réception et une nouvelle immatriculation correspondant à la nouvelle catégorie du véhicule."},

{id:278,prog:'LEGER',theme:'cl-gestion',d:1,
e:"Le résultat courant avant impôt (RCAI) correspond à :",
r:[{t:"Résultat d'exploitation + Résultat financier",ok:true},{t:"Résultat d'exploitation uniquement"},{t:"Résultat net après IS"},{t:"Résultat exceptionnel + Résultat d'exploitation"}],
x:"Bonne réponse : Résultat d'exploitation + Résultat financier. Le RCAI = Résultat d'exploitation + Résultat financier (produits financiers - charges financières). Il mesure la performance récurrente de l'entreprise avant les éléments exceptionnels et l'IS. C'est un indicateur clé car il reflète l'activité normale et le mode de financement."},

{id:279,prog:'LEGER',theme:'cl-secu',d:2,
e:"Le gilet de sécurité haute visibilité dans un VUL :",
r:[{t:"Est uniquement recommandé"},{t:"Est obligatoire dans le véhicule et doit être revêtu avant de sortir sur la chaussée",ok:true},{t:"Est obligatoire uniquement sur autoroute"},{t:"N'est obligatoire que pour les conducteurs professionnels"}],
x:"Bonne réponse : Est obligatoire dans le véhicule et doit être revêtu avant de sortir sur la chaussée. Le gilet de sécurité haute visibilité est obligatoire dans tout véhicule à moteur (art. R.416-19 du Code de la route). Il doit être accessible (dans l'habitacle, pas dans le coffre) et revêtu avant de sortir du véhicule sur la chaussée ou ses abords. L'absence est une contravention de 2ème classe."},

{id:280,prog:'LEGER',theme:'cl-gestion',d:2,
e:"La couverture du besoin en fonds de roulement par le fonds de roulement net global signifie que :",
r:[{t:"L'entreprise est toujours bénéficiaire"},{t:"La trésorerie est positive",ok:true},{t:"L'entreprise n'a pas de dettes"},{t:"Le CA est suffisant"}],
x:"Bonne réponse : La trésorerie est positive. Trésorerie nette = FRNG - BFR. Si FRNG > BFR, la trésorerie est positive : l'entreprise dispose de liquidités disponibles. Si FRNG < BFR, la trésorerie est négative et l'entreprise dépend de financements à court terme (découvert, ligne de crédit)."},

{id:281,prog:'LEGER',theme:'cl-regl',d:1,
e:"Le poids à vide (masse en ordre de marche) d'un VUL inclut :",
r:[{t:"Uniquement la carrosserie"},{t:"La carrosserie + carburant + équipements fixes, sans conducteur ni chargement",ok:true},{t:"Le châssis et le moteur uniquement"},{t:"La tare + conducteur + 75 kg"}],
x:"Bonne réponse : La carrosserie + carburant + équipements fixes, sans conducteur ni chargement. La masse en ordre de marche comprend le poids du véhicule avec carrosserie, le plein de carburant, les fluides (huile, liquide de refroidissement, frein) et les équipements fixes d'origine. Elle exclut le conducteur, les passagers et le chargement. Charge utile = PTAC — masse en ordre de marche."},

{id:282,prog:'LEGER',theme:'cl-civil',d:2,
e:"Le devis de transport établi par un transporteur VUL est :",
r:[{t:"Obligatoirement gratuit par la loi"},{t:"Une offre ferme valable 30 jours sauf mention contraire",ok:true},{t:"Sans valeur juridique"},{t:"Obligatoirement signé par un notaire"}],
x:"Bonne réponse : Une offre ferme valable 30 jours sauf mention contraire. Un devis constitue une offre ferme engageant son auteur. Sauf mention contraire de durée de validité, il est généralement considéré comme valable 30 jours en pratique commerciale."},

{id:283,prog:'LEGER',theme:'cl-social',d:2,
e:"Le montant maximum de l'aide à l'embauche d'un apprenti pour une TPE (moins de 250 salariés) est de :",
r:[{t:"1 000 €"},{t:"6 000 € la 1ère année",ok:true},{t:"3 000 €"},{t:"Il n'y a pas d'aide spécifique"}],
x:"Bonne réponse : 6 000 € la 1ère année. L'aide unique à l'apprentissage est de 6 000 € maximum pour la 1ère année de contrat (pour les entreprises de moins de 250 salariés, pour les diplômes jusqu'au bac+2). Elle est versée par l'ASP (Agence de Services et de Paiement). Son montant et ses conditions peuvent évoluer selon les dispositions budgétaires annuelles."},

{id:284,prog:'LEGER',theme:'cl-acces',d:1,
e:"Combien de temps une entreprise de transport peut-elle exercer avec une autorisation provisoire après la perte d'une condition d'accès ?",
r:[{t:"3 mois"},{t:"6 mois",ok:true},{t:"12 mois"},{t:"Elle ne peut pas exercer provisoirement"}],
x:"Bonne réponse : 6 mois. Si une entreprise ne satisfait temporairement plus l'une des conditions d'accès (honorabilité, capacité financière ou professionnelle), l'autorité compétente peut lui accorder un délai de mise en conformité de 6 mois maximum (12 mois en cas de décès ou d'incapacité physique du gestionnaire)."},

{id:285,prog:'LEGER',theme:'cl-acces',d:1,
e:"Le RENT est consultable par :",
r:[{t:"Uniquement les contrôleurs DREAL"},{t:"Toute personne — il est public et accessible sur internet",ok:true},{t:"Uniquement les transporteurs"},{t:"Uniquement les administrations fiscales"}],
x:"Bonne réponse : Toute personne — il est public et accessible sur internet. Le RENT (Registre Électronique National des entreprises de Transport) est public et consultable sur internet par toute personne. Il permet de vérifier qu'un transporteur est bien autorisé à exercer, son statut, le nombre de véhicules autorisés et le nom du gestionnaire de transport."},

{id:286,prog:'LEGER',theme:'cl-regl',d:2,
e:"Les temps de conduite hebdomadaires ne sont pas réglementés pour les VUL <3,5t, mais le droit du travail impose :",
r:[{t:"Aucune limite pour les conducteurs indépendants"},{t:"Une durée maximale de travail de 48h/semaine pour les salariés",ok:true},{t:"Une durée de conduite maximale de 8h/jour"},{t:"Un repos obligatoire de 12h entre deux services"}],
x:"Bonne réponse : Une durée maximale de travail de 48h/semaine pour les salariés. Si le règlement 561/2006 ne s'applique pas aux VUL <3,5t (pas de chronotachygraphe obligatoire), le Code du travail s'applique aux conducteurs salariés : durée maximale de 48h/semaine (10h/jour), et la convention collective du transport routier peut prévoir des dispositions spécifiques."},

{id:287,prog:'LEGER',theme:'cl-regl',d:1,
e:"Le permis requis pour un VUL de 3 499 kg PTAC remorquant une remorque de 1 500 kg est :",
r:[{t:"Permis B"},{t:"Permis BE",ok:true},{t:"Permis C"},{t:"Permis B96"}],
x:"Bonne réponse : Permis BE. Le permis B autorise la conduite d'un ensemble de 3 500 kg PTAC maximum et de remorques jusqu'à 750 kg PTAC. Pour remorquer une remorque de 1 500 kg, le PTAC total atteint 4 999 kg : il faut le permis BE (ou B96 si l'ensemble ne dépasse pas 4 250 kg avec formation spécifique)."},

{id:288,prog:'LEGER',theme:'cl-civil',d:2,
e:"L'exception d'inexécution permet à une partie de :",
r:[{t:"Obtenir des dommages et intérêts"},{t:"Refuser d'exécuter sa propre obligation tant que l'autre n'exécute pas la sienne",ok:true},{t:"Résilier le contrat immédiatement"},{t:"Transférer ses obligations à un tiers"}],
x:"Bonne réponse : Refuser d'exécuter sa propre obligation tant que l'autre n'exécute pas la sienne. L'exception d'inexécution (art. 1219 Code civil) est un mécanisme de suspension légitime de ses propres obligations lorsque l'autre partie n'exécute pas les siennes et que l'inexécution est suffisamment grave. C'est une mesure provisoire qui ne rompt pas le contrat."},

{id:289,prog:'LEGER',theme:'cl-acces',d:3,
e:"Le retrait de l'autorisation d'exercer peut être prononcé en cas de :",
r:[{t:"Tout redressement fiscal de l'entreprise"},{t:"Perte de l'une des 3 conditions d'accès non régularisée dans les délais",ok:true},{t:"Tout accident de la route impliquant un VUL de l'entreprise"},{t:"Retard de paiement d'une cotisation CCI"}],
x:"Bonne réponse : Perte de l'une des 3 conditions d'accès non régularisée dans les délais. L'autorisation d'exercer peut être suspendue ou retirée si l'entreprise ne satisfait plus l'une des 3 conditions (honorabilité, capacité financière, capacité professionnelle) et ne régularise pas sa situation dans le délai accordé (généralement 6 mois). Le retrait est prononcé par l'autorité compétente (DREAL)."},

{id:290,prog:'LEGER',theme:'cl-civil',d:1,
e:"La force majeure en droit des contrats exonère le débiteur si :",
r:[{t:"L'événement est imprévisible, irrésistible et extérieur",ok:true},{t:"L'événement est simplement imprévisible"},{t:"La perte financière dépasse 50 % de la valeur du contrat"},{t:"Le débiteur prouve une faute légère uniquement"}],
x:"Bonne réponse : L'événement est imprévisible, irrésistible et extérieur. La force majeure (art. 1218 du Code civil) exige la réunion de 3 conditions cumulatives : l'événement doit être imprévisible lors de la conclusion du contrat, irrésistible dans ses effets (impossible d'exécuter même avec toutes les précautions), et extérieur à la partie qui l'invoque."},

{id:291,prog:'LEGER',theme:'cl-regl',d:2,
e:"Le certificat d'immatriculation (carte grise) d'un VUL doit-il mentionner le PTAC ?",
r:[{t:"Non, seul le poids à vide est mentionné"},{t:"Oui, le PTAC est obligatoirement mentionné sur la carte grise",ok:true},{t:"Oui, uniquement pour les VUL de plus de 2,5t"},{t:"Non, c'est mentionné uniquement sur la plaque constructeur"}],
x:"Bonne réponse : Oui, le PTAC est obligatoirement mentionné sur la carte grise. La carte grise (certificat d'immatriculation) mentionne obligatoirement le PTAC (case F.2 ou F.3 selon le format). Cette information est déterminante pour vérifier si le permis B est suffisant, si le véhicule est soumis aux réglementations spécifiques (transport alimentaire, ADR, etc.), et pour calculer les taxes d'immatriculation."},

{id:292,prog:'LEGER',theme:'cl-social',d:3,
e:"Le plafond de la Sécurité Sociale (PASS) sert à :",
r:[{t:"Définir le salaire maximum des dirigeants"},{t:"Calculer certaines cotisations sociales et le montant des prestations sociales",ok:true},{t:"Fixer le SMIC annuel"},{t:"Déterminer le seuil d'assujettissement à l'IS"}],
x:"Bonne réponse : Calculer certaines cotisations sociales et le montant des prestations sociales. Le PASS (Plafond Annuel de la Sécurité Sociale) est une valeur de référence fixée chaque année (48 060 € en 2026). Il sert à calculer les cotisations plafonnées (retraite de base, chômage…) et certaines prestations (IJ maladie, retraite…). Son montant mensuel, le PMSS (4 005 € en 2026), sert de base pour de nombreux calculs sociaux."},

{id:293,prog:'LEGER',theme:'cl-social',d:1,
e:"Le SMIC est revalorisé :",
r:[{t:"Uniquement lors des négociations sociales"},{t:"Automatiquement au 1er janvier + déclenchement possible si inflation > 2%",ok:true},{t:"Tous les 2 ans par décret"},{t:"Uniquement par accord de branche"}],
x:"Bonne réponse : Automatiquement au 1er janvier + déclenchement possible si inflation > 2%. Le SMIC est revalorisé automatiquement au 1er janvier de chaque année. Une revalorisation intermédiaire se déclenche automatiquement lorsque l'indice des prix à la consommation augmente d'au moins 2% depuis la dernière revalorisation. Le gouvernement peut aussi accorder un coup de pouce exceptionnel."},

{id:294,prog:'LEGER',theme:'cl-social',d:2,
e:"La durée maximale absolue du travail effectif pour un conducteur VUL salarié est de :",
r:[{t:"44 heures / semaine"},{t:"48 heures / semaine",ok:true},{t:"52 heures / semaine"},{t:"60 heures / semaine"}],
x:"Bonne réponse : 48 heures / semaine. La durée maximale absolue de travail est de 48 heures par semaine (ou 44 heures en moyenne sur 12 semaines). Au-delà, il y a infraction au Code du travail."},

{id:295,prog:'LEGER',theme:'cl-secu',d:2,
e:"Le coefficient de frottement entre les pneus et la chaussée est le plus faible sur :",
r:[{t:"Chaussée sèche"},{t:"Chaussée mouillée"},{t:"Chaussée verglacée",ok:true},{t:"Chaussée enneigée"}],
x:"Bonne réponse : Chaussée verglacée. Le coefficient d'adhérence est d'environ : 0,8 sur chaussée sèche, 0,4 sur chaussée mouillée, 0,1 à 0,2 sur neige, 0,05 à 0,1 sur verglas. Le verglas présente donc l'adhérence la plus faible, multipliant les distances de freinage par 8 à 16 par rapport à la chaussée sèche."},

{id:296,prog:'LEGER',theme:'cl-secu',d:2,
e:"L'éco-conduite permet de réduire la consommation de carburant d'un VUL de :",
r:[{t:"2 à 5 %"},{t:"10 à 15 %",ok:true},{t:"30 à 40 %"},{t:"Plus de 50 %"}],
x:"Bonne réponse : 10 à 15 %. Une conduite économique bien maîtrisée permet de réduire la consommation de 10 à 15 % : anticipation des situations, montée en régime rapide pour passer au rapport supérieur, maintien d'une vitesse régulière, coupure du moteur à l'arrêt prolongé. Les bénéfices incluent aussi la réduction de l'usure des freins, des pneus et du moteur."},

{id:297,prog:'LEGER',theme:'cl-civil',d:3,
e:"L'exception d'inexécution (exceptio non adimpleti contractus) permet à une partie :",
r:[{t:"D'obtenir des dommages et intérêts sans preuve"},{t:"De refuser d'exécuter sa propre obligation tant que l'autre n'exécute pas la sienne",ok:true},{t:"De résilier unilatéralement le contrat sans préavis"},{t:"D'obtenir la nullité du contrat"}],
x:"Bonne réponse : De refuser d'exécuter sa propre obligation tant que l'autre n'exécute pas la sienne. L'exception d'inexécution (art. 1219 du Code civil) est un mécanisme de défense : une partie peut légitimement refuser d'exécuter son obligation si l'autre partie n'exécute pas ou n'est pas prête à exécuter la sienne, et si l'inexécution est suffisamment grave."},

{id:298,prog:'LEGER',theme:'cl-secu',d:1,
e:"Le port de la ceinture de sécurité est obligatoire pour :",
r:[{t:"Uniquement le conducteur"},{t:"Tous les occupants du véhicule, sur toutes les places équipées",ok:true},{t:"Uniquement sur autoroute"},{t:"Seulement sur les places avant"}],
x:"Bonne réponse : Tous les occupants du véhicule, sur toutes les places équipées. Le port de la ceinture est obligatoire pour tous les occupants d'un véhicule, sur toutes les places équipées de ceinture (art. R.412-1 du Code de la route). L'amende est de 135 € et le retrait de 3 points. Le conducteur peut être verbalisé pour chaque passager non attaché."},

{id:299,prog:'LEGER',theme:'cl-secu',d:2,
e:"La conduite sous stupéfiants est :",
r:[{t:"Sanctionnée uniquement en cas d'accident"},{t:"Un délit pénal : 2 ans d'emprisonnement et 4 500 € d'amende",ok:true},{t:"Une simple contravention"},{t:"Non sanctionnée pour les conducteurs professionnels"}],
x:"Bonne réponse : Un délit pénal : 2 ans d'emprisonnement et 4 500 € d'amende. La conduite sous l'emprise de stupéfiants (art. L.235-1 Code de la route) est un délit pénal : 2 ans d'emprisonnement, 4 500 € d'amende, 6 points retirés, suspension possible du permis. Un test salivaire positif suffit à caractériser l'infraction, même sans signe visible d'imprégnation."},

{id:300,prog:'LEGER',theme:'cl-secu',d:3,
e:"Le syndrome du 'temps de réaction' en cas de freinage d'urgence correspond à :",
r:[{t:"La durée de l'opération de freinage complète"},{t:"Le temps entre la perception du danger et le début du freinage (environ 1 seconde)",ok:true},{t:"Le temps nécessaire pour s'arrêter complètement"},{t:"Le temps de réaction du système ABS"}],
x:"Bonne réponse : Le temps entre la perception du danger et le début du freinage (environ 1 seconde). Le temps de réaction moyen est d'environ 1 seconde entre la perception du danger et l'appui effectif sur la pédale de frein. À 90 km/h, cette seconde représente 25 mètres parcourus AVANT même de commencer à freiner. La fatigue, la distraction ou l'alcool peuvent doubler ou tripler ce temps de réaction."},

{id:301,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"L'amortissement dégressif d'un véhicule utilitaire est :",
r:[{t:"Possible pour tout véhicule professionnel"},{t:"Possible uniquement pour certains biens avec un coefficient multiplicateur selon la durée de vie",ok:true},{t:"Interdit pour les véhicules de transport"},{t:"Identique à l'amortissement linéaire"}],
x:"Bonne réponse : Possible uniquement pour certains biens avec un coefficient multiplicateur selon la durée de vie. L'amortissement dégressif est possible pour les biens d'équipement amortissables sur au moins 3 ans. Le taux est obtenu en multipliant le taux linéaire par un coefficient (1,25 pour 3-4 ans, 1,75 pour 5-6 ans, 2,25 pour plus de 6 ans). Il permet des charges plus élevées les premières années."},

{id:302,prog:'LEGER',theme:'cl-social',d:2,
e:"L'auto-entrepreneur (micro-entreprise) cotise :",
r:[{t:"Aux mêmes caisses qu'un salarié"},{t:"Au régime des indépendants (SSI/URSSAF) sur son chiffre d'affaires",ok:true},{t:"Au régime agricole (MSA)"},{t:"À aucune caisse de retraite"}],
x:"Bonne réponse : Au régime des indépendants (SSI/URSSAF) sur son chiffre d'affaires. L'auto-entrepreneur cotise au régime des travailleurs non salariés (SSI, géré par l'URSSAF) via un taux forfaitaire appliqué à son chiffre d'affaires. Ces cotisations couvrent retraite, maladie et prévoyance."},

{id:303,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"Le taux de TVA applicable aux transports de voyageurs est de :",
r:[{t:"20 %"},{t:"10 %",ok:true},{t:"5,5 %"},{t:"0 %"}],
x:"Bonne réponse : 10 %. Le transport de voyageurs est soumis au taux réduit de TVA de 10 % (art. 279 b du CGI). Le transport de marchandises est taxé au taux normal de 20 %. Cette distinction est importante pour les entreprises proposant à la fois du transport de personnes et de marchandises."},

{id:304,prog:'LEGER',theme:'cl-fiscal',d:3,
e:"Les frais kilométriques d'un véhicule personnel utilisé à titre professionnel sont déductibles sur la base de :",
r:[{t:"100 % des frais réels"},{t:"Le barème kilométrique de l'administration fiscale",ok:true},{t:"50 % des frais réels"},{t:"Un forfait de 0,50 € par km quel que soit le véhicule"}],
x:"Bonne réponse : Le barème kilométrique de l'administration fiscale. Les frais kilométriques pour l'utilisation d'un véhicule personnel à des fins professionnelles sont déductibles en utilisant le barème kilométrique publié annuellement par l'administration fiscale. Ce barème tient compte de la puissance fiscale du véhicule et du kilométrage parcouru."},

{id:305,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"La taxe foncière sur les propriétés bâties est due par :",
r:[{t:"Le locataire du local commercial"},{t:"Le propriétaire des locaux au 1er janvier de l'année",ok:true},{t:"L'exploitant du fonds de commerce"},{t:"Les deux conjointement à parts égales"}],
x:"Bonne réponse : Le propriétaire des locaux au 1er janvier de l'année. La taxe foncière est due par le propriétaire des biens immobiliers au 1er janvier de l'année d'imposition. Si le bien est loué, le propriétaire peut refacturer une partie au locataire si une clause du bail le prévoit, mais il reste le redevable légal vis-à-vis de l'administration fiscale."},

{id:306,prog:'LEGER',theme:'cl-social',d:1,
e:"Le congé de paternité et d'accueil de l'enfant est actuellement de :",
r:[{t:"11 jours calendaires"},{t:"25 jours calendaires dont 4 obligatoires",ok:true},{t:"14 jours"},{t:"7 jours ouvrés"}],
x:"Bonne réponse : 25 jours calendaires dont 4 obligatoires. Depuis le 1er juillet 2021, le congé de paternité est de 25 jours calendaires (32 pour une naissance multiple), dont 4 jours obligatoires à prendre immédiatement après la naissance. Il est indemnisé par la CPAM sous conditions (comme le congé maternité)."},

{id:307,prog:'LEGER',theme:'cl-civil',d:1,
e:"Le RCS (Registre du Commerce et des Sociétés) est tenu par :",
r:[{t:"La Chambre de Commerce et d'Industrie"},{t:"Le greffe du tribunal de commerce",ok:true},{t:"La Préfecture du département"},{t:"L'URSSAF"}],
x:"Bonne réponse : Le greffe du tribunal de commerce. Le RCS est tenu par le greffe du tribunal de commerce compétent pour le siège de l'entreprise. L'immatriculation au RCS est obligatoire pour les commerçants et les sociétés commerciales. Le numéro SIREN est attribué par l'INSEE lors de la création."},

{id:308,prog:'LEGER',theme:'cl-gestion',d:1,
e:"Une entreprise avec un CA de 80 000 €, un taux de MCV de 42 % et des CF de 38 000 € est :",
r:[{t:"Bénéficiaire de 5 600 €"},{t:"Déficitaire de 4 400 €",ok:true},{t:"À l'équilibre"},{t:"Bénéficiaire de 33 600 €"}],
x:"Bonne réponse : Déficitaire de 4 400 €. MCV = 80 000 × 42 % = 33 600 €. Résultat = MCV − CF = 33 600 − 38 000 = −4 400 €. L'entreprise est déficitaire car son CA (80 000 €) est inférieur au SR (= 38 000 / 0,42 = 90 476 €)."},

{id:309,prog:'LEGER',theme:'cl-secu',d:2,
e:"La distance de sécurité recommandée à 130 km/h sur autoroute est :",
r:[{t:"50 m"},{t:"Au moins 72 m (règle des 2 secondes)",ok:true},{t:"200 m"},{t:"30 m"}],
x:"Bonne réponse : Au moins 72 m (règle des 2 secondes). Règle des 2 secondes : à 130 km/h, le véhicule parcourt 36 m/s. En 2 secondes = 72 m minimum. L'art. R.412-12 impose une distance au moins égale à la distance parcourue en 2 secondes. Par mauvais temps, ce délai doit être doublé (4 secondes = 144 m)."},

{id:310,prog:'LEGER',theme:'cl-regl',d:2,
e:"Le contrôle technique d'un VUL professionnel doit avoir lieu tous les :",
r:[{t:"1 an"},{t:"2 ans",ok:true},{t:"3 ans"},{t:"4 ans"}],
x:"Bonne réponse : 2 ans. Les VUL de PTAC ≤ 3,5t sont soumis au contrôle technique tous les 2 ans (comme les véhicules particuliers). La première visite a lieu avant la 4ème année de mise en circulation. Un contrôle complémentaire peut être exigé après une réparation importante ou un accident."},

{id:311,prog:'LEGER',theme:'cl-regl',d:2,
e:"La révision des prix de transport selon les indices CNR est :",
r:[{t:"Obligatoire par décret"},{t:"Prévue par la loi mais mise en œuvre contractuellement par les parties",ok:true},{t:"Interdite par la réglementation anti-concurrentielle"},{t:"Obligatoire uniquement pour les transports de plus de 50 km"}],
x:"Bonne réponse : Prévue par la loi mais mise en œuvre contractuellement par les parties. La loi permet la révision des prix de transport en fonction des indices CNR (carburant, salaires, matières premières). Cette révision doit être prévue dans le contrat par une clause d'indexation. Elle n'est pas automatique mais son intégration dans les contrats est fortement recommandée pour protéger le transporteur des hausses de coûts."},

{id:312,prog:'LEGER',theme:'cl-civil',d:2,
e:"Le dol comme vice du consentement se caractérise par :",
r:[{t:"Une erreur involontaire"},{t:"Des manœuvres frauduleuses destinées à tromper l'autre partie",ok:true},{t:"Un avantage excessif"},{t:"L'impossibilité d'exécuter"}],
x:"Bonne réponse : Des manœuvres frauduleuses destinées à tromper l'autre partie. Le dol (art. 1137 Code civil) est constitué de manœuvres frauduleuses, mensonges ou dissimulations délibérés destinés à provoquer le consentement de l'autre partie. Le dol entraîne la nullité relative du contrat et peut ouvrir droit à des dommages et intérêts."},

{id:313,prog:'LEGER',theme:'cl-acces',d:1,
e:"L'examen du CPC (Capacité Professionnelle en transport de marchandises <3,5t) est organisé par :",
r:[{t:"Le Ministère des Transports"},{t:"Les Chambres de Commerce et d'Industrie (CCI)",ok:true},{t:"La DREAL"},{t:"L'AFPA"}],
x:"Bonne réponse : Les Chambres de Commerce et d'Industrie (CCI). L'examen du CPC pour le transport léger (<3,5t) est organisé et administré par les Chambres de Commerce et d'Industrie (CCI) sous l'autorité du Ministère chargé des Transports. L'examen comprend des épreuves écrites couvrant le droit civil et commercial, le droit social, la gestion financière et l'accès à la profession."},

{id:314,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le besoin en fonds de roulement (BFR) représente :",
r:[{t:"Le capital social de l'entreprise"},{t:"Le besoin de financement lié au cycle d'exploitation (stocks + créances - dettes fournisseurs)",ok:true},{t:"Les dettes à long terme de l'entreprise"},{t:"Le bénéfice net après impôts"}],
x:"Bonne réponse : Le besoin de financement lié au cycle d'exploitation (stocks + créances - dettes fournisseurs). Le BFR = Stocks + Créances clients - Dettes fournisseurs. C'est le besoin de financement à court terme généré par le cycle d'exploitation. Un BFR négatif est favorable (encaissement avant décaissement)."},

{id:315,prog:'LEGER',theme:'cl-civil',d:2,
e:"Les conditions générales de vente (CGV) d'un professionnel :",
r:[{t:"Ne sont jamais applicables sans signature manuscrite du client"},{t:"S'appliquent dès lors qu'elles ont été portées à la connaissance du client avant la commande",ok:true},{t:"Ne sont valables qu'entre entreprises de même secteur"},{t:"Doivent être approuvées par une autorité administrative"}],
x:"Bonne réponse : S'appliquent dès lors qu'elles ont été portées à la connaissance du client avant la commande. Les CGV sont opposables au client professionnel dès lors qu'elles lui ont été communiquées avant la passation de commande (même sans signature spécifique de sa part, si la communication est prouvée). Pour les consommateurs, des règles plus protectrices s'appliquent (information précontractuelle obligatoire)."},

{id:316,prog:'LEGER',theme:'cl-social',d:3,
e:"Le travail à temps partiel impose :",
r:[{t:"Un accord écrit entre employeur et salarié",ok:true},{t:"L'accord de l'inspection du travail"},{t:"Un avenant à la convention collective"},{t:"Uniquement une information des représentants du personnel"}],
x:"Bonne réponse : Un accord écrit entre employeur et salarié. Le travail à temps partiel doit être formalisé par un contrat écrit (ou avenant) mentionnant la durée hebdomadaire ou mensuelle, la répartition des heures, les modalités de modification, la rémunération. La durée minimale légale est de 24 heures hebdomadaires, sauf exceptions."},

{id:317,prog:'LEGER',theme:'cl-social',d:2,
e:"Le contrat d'apprentissage est :",
r:[{t:"Un CDI avec formation intégrée"},{t:"Un CDD (ou CDI depuis 2018) associant formation en CFA et pratique en entreprise",ok:true},{t:"Un stage longue durée rémunéré"},{t:"Un contrat réservé aux moins de 18 ans"}],
x:"Bonne réponse : Un CDD (ou CDI depuis 2018) associant formation en CFA et pratique en entreprise. Le contrat d'apprentissage est un contrat de travail en alternance associant formation théorique dans un CFA et formation pratique en entreprise. Depuis la loi de 2018, il peut être un CDI. La rémunération est un pourcentage du SMIC selon l'âge et l'année de formation."},

{id:318,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"La déclaration de TVA mensuelle (régime normal) doit être déposée :",
r:[{t:"Le 31 décembre de chaque année"},{t:"Chaque mois, avant la date limite fixée par l'administration fiscale",ok:true},{t:"Chaque trimestre uniquement"},{t:"Uniquement si la TVA collectée dépasse 1 000 €"}],
x:"Bonne réponse : Chaque mois, avant la date limite fixée par l'administration fiscale. Au régime normal de TVA, la déclaration CA3 est déposée chaque mois (en ligne) avec paiement correspondant. Le régime simplifié permet des acomptes semestriels et une déclaration annuelle."},

{id:319,prog:'LEGER',theme:'cl-gestion',d:2,
e:"La CAF (Capacité d'Autofinancement) se calcule comme :",
r:[{t:"Résultat net uniquement"},{t:"Résultat net + Dotations aux amortissements et provisions - Reprises",ok:true},{t:"Résultat avant IS"},{t:"Chiffre d'affaires - Charges variables"}],
x:"Bonne réponse : Résultat net + Dotations aux amortissements et provisions - Reprises. CAF = Résultat net + Dotations aux amortissements et provisions - Reprises sur provisions. Elle représente le flux de trésorerie interne généré par l'activité. Les amortissements sont rajoutés car ils sont des charges calculées sans décaissement. La CAF sert à rembourser les emprunts, investir et distribuer des dividendes."},

{id:320,prog:'LEGER',theme:'cl-acces',d:2,
e:"Un transporteur VUL peut-il exercer sans local professionnel en France ?",
r:[{t:"Oui, son domicile personnel suffit"},{t:"Non, il doit disposer d'un établissement stable avec locaux et véhicules",ok:true},{t:"Oui, avec une simple boîte postale"},{t:"Oui, si son véhicule est stationné en France"}],
x:"Bonne réponse : Non, il doit disposer d'un établissement stable avec locaux et véhicules. La condition d'établissement impose un établissement réel et stable : locaux où sont conservés les documents principaux, matériel de gestion adapté et véhicules disponibles dans l'État d'établissement. Une boîte aux lettres ou domicile personnel ne suffisent pas."},

{id:321,prog:'LEGER',theme:'cl-social',d:2,
e:"L'inaptitude médicale déclarée par le médecin du travail oblige l'employeur à :",
r:[{t:"Licencier immédiatement le salarié"},{t:"Rechercher un poste de reclassement ou, à défaut, licencier pour inaptitude",ok:true},{t:"Accorder un congé maladie indéfini"},{t:"Proposer une rupture conventionnelle obligatoire"}],
x:"Bonne réponse : Rechercher un poste de reclassement ou, à défaut, licencier pour inaptitude. En cas d'inaptitude déclarée par le médecin du travail, l'employeur doit rechercher un reclassement du salarié dans un emploi compatible avec ses restrictions. Si le reclassement est impossible ou refusé, l'employeur peut licencier pour inaptitude. Le salarié reçoit alors une indemnité spéciale de licenciement."},

{id:322,prog:'LEGER',theme:'cl-gestion',d:1,
e:"Un taux de marge sur coûts variables de 40 % avec un CA de 50 000 € génère une MCV de :",
r:[{t:"40 000 €"},{t:"20 000 €",ok:true},{t:"10 000 €"},{t:"30 000 €"}],
x:"Bonne réponse : 20 000 €. MCV = CA × Taux MCV = 50 000 × 40 % = 20 000 €. La MCV représente la contribution au financement des charges fixes. Si les CF sont inférieures à 20 000 €, l'entreprise est bénéficiaire."},

{id:323,prog:'LEGER',theme:'cl-social',d:3,
e:"La participation aux bénéfices est obligatoire dans les entreprises de :",
r:[{t:"Plus de 10 salariés"},{t:"Plus de 50 salariés",ok:true},{t:"Plus de 100 salariés"},{t:"Toutes les entreprises commerciales"}],
x:"Bonne réponse : Plus de 50 salariés. La participation aux résultats (ou participation aux bénéfices) est obligatoire dans les entreprises employant habituellement au moins 50 salariés pendant 12 mois consécutifs ou non au cours des 3 derniers exercices, et ayant réalisé un bénéfice fiscal suffisant. La formule légale de calcul est fixée par le Code du travail."},

{id:324,prog:'LEGER',theme:'cl-civil',d:2,
e:"La SAS se caractérise par :",
r:[{t:"Un capital minimum de 37 000 €"},{t:"Une grande liberté statutaire et pas de capital minimum légal",ok:true},{t:"Un conseil d'administration obligatoire"},{t:"Un minimum de 7 actionnaires"}],
x:"Bonne réponse : Une grande liberté statutaire et pas de capital minimum légal. La SAS est la forme sociale la plus flexible du droit français. Pas de capital minimum légal (1 € symbolique possible), liberté totale dans l'organisation de la gouvernance via les statuts. Elle est présidée par un président obligatoire (personne physique ou morale)."},

{id:325,prog:'LEGER',theme:'cl-acces',d:3,
e:"Le règlement européen 1071/2009 établissant les conditions d'accès à la profession de transporteur s'applique :",
r:[{t:"Uniquement aux transporteurs de plus de 3,5t"},{t:"Aux transporteurs de plus de 3,5t, et aux moins de 3,5t pour compte d'autrui depuis 2022",ok:true},{t:"À tous les véhicules professionnels"},{t:"Uniquement aux transports internationaux"}],
x:"Bonne réponse : Aux transporteurs de plus de 3,5t, et aux moins de 3,5t pour compte d'autrui depuis 2022. Le règlement 1071/2009 s'applique historiquement aux transports de marchandises avec des véhicules de plus de 3,5t. Le règlement 2020/1055 a étendu certaines de ses dispositions aux transporteurs utilisant des véhicules de moins de 3,5t effectuant des transports internationaux, avec application progressive depuis 2022."},

{id:326,prog:'LEGER',theme:'cl-acces',d:1,
e:"La capacité financière pour 2 VUL <3,5t est de :",
r:[{t:"1 800 €"},{t:"2 700 €",ok:true},{t:"3 600 €"},{t:"9 000 €"}],
x:"Bonne réponse : 2 700 €. Capacité financière VUL : 1 800 € pour le 1er véhicule + 900 € par véhicule supplémentaire. Pour 2 VUL : 1 800 + 900 = 2 700 €. Prouvée par les fonds propres des comptes annuels ou une garantie bancaire équivalente."},

{id:327,prog:'LEGER',theme:'cl-secu',d:1,
e:"La vignette Crit'Air classe 1 (verte) correspond aux véhicules :",
r:[{t:"Essence Euro 3 et avant"},{t:"Véhicules électriques et hydrogène"},{t:"Essence Euro 5 et 6 et hybrides",ok:true},{t:"Diesel Euro 6 uniquement"}],
x:"Bonne réponse : Essence Euro 5 et 6 et hybrides. Crit'Air 1 (jaune) = essence Euro 5 et 6, hybrides essence. Crit'Air 0 (vert) = électrique et hydrogène. Crit'Air 2 = diesel Euro 5 et 6. Les vignettes sont obligatoires dans les ZFE-m."},

{id:328,prog:'LEGER',theme:'cl-social',d:1,
e:"Le taux de prélèvement à la source de l'impôt sur le revenu est calculé par :",
r:[{t:"Le salarié lui-même"},{t:"L'administration fiscale (DGFiP) sur la base de la déclaration précédente",ok:true},{t:"L'employeur en fonction du salaire brut"},{t:"L'URSSAF"}],
x:"Bonne réponse : L'administration fiscale (DGFiP) sur la base de la déclaration précédente. Le taux du prélèvement à la source est calculé et communiqué par la DGFiP à l'employeur. Il est basé sur la déclaration de revenus de l'année précédente. Le salarié peut opter pour un taux neutre (sur barème) ou pour un taux individualisé au sein du foyer fiscal."},

{id:329,prog:'LEGER',theme:'cl-regl',d:2,
e:"Le contrôle technique périodique d'un VUL utilitaire (usage professionnel) de moins de 3,5t a lieu tous les :",
r:[{t:"1 an"},{t:"2 ans",ok:true},{t:"3 ans"},{t:"4 ans"}],
x:"Bonne réponse : 2 ans. Les véhicules utilitaires légers (VUL) de PTAC inférieur ou égal à 3,5t sont soumis au contrôle technique tous les 2 ans (comme les véhicules particuliers). La première visite a lieu avant la 4ème année de mise en circulation. Un contrôle complémentaire peut être exigé après un accident."},

{id:330,prog:'LEGER',theme:'cl-civil',d:2,
e:"L'action directe du sous-traitant contre le donneur d'ordre initial (maître de l'ouvrage) :",
r:[{t:"N'existe pas dans le transport"},{t:"Existe uniquement en cas de construction"},{t:"Existe en transport si le sous-traitant a été agréé",ok:true},{t:"Permet toujours au sous-traitant d'être payé directement"}],
x:"Bonne réponse : Existe en transport si le sous-traitant a été agréé. La loi du 31 décembre 1975 sur la sous-traitance prévoit une action directe du sous-traitant contre le maître d'ouvrage, mais celle-ci est soumise à l'agrément préalable du sous-traitant. En transport, ce mécanisme s'applique avec des spécificités propres au secteur."},

{id:331,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le taux de rotation des créances clients se calcule ainsi :",
r:[{t:"CA / Créances clients × 360",ok:true},{t:"Créances clients / CA × 360"},{t:"CA / Total actif"},{t:"Résultat / Créances clients"}],
x:"Bonne réponse : CA / Créances clients × 360. DSO (Days Sales Outstanding) = Créances clients / CA × 360 jours. Il mesure le délai moyen d'encaissement. Un DSO de 45 jours signifie que les clients paient en moyenne 45 jours après la facturation. Plus le DSO est court, mieux c'est pour la trésorerie."},

{id:332,prog:'LEGER',theme:'cl-acces',d:2,
e:"L'honorabilité professionnelle est perdue définitivement en cas de :",
r:[{t:"Tout redressement fiscal"},{t:"Condamnation pour des infractions graves listées par la réglementation",ok:true},{t:"Simple retard de paiement d'une cotisation"},{t:"Tout déficit comptable"}],
x:"Bonne réponse : Condamnation pour des infractions graves listées par la réglementation. L'honorabilité professionnelle est perdue en cas de condamnation pénale pour des infractions graves spécifiées par le règlement (CE) 1071/2009 : crimes ou délits graves, infractions aux réglementations sociales et du transport, fraudes fiscales importantes. La perte d'honorabilité entraîne le retrait de l'autorisation d'exercer."},

{id:333,prog:'LEGER',theme:'cl-acces',d:1,
e:"Le registre national des entreprises de transport (RENT) est consultable :",
r:[{t:"Uniquement par les autorités de contrôle"},{t:"Par toute personne sur internet",ok:true},{t:"Uniquement par les autres transporteurs"},{t:"Uniquement par les clients des transporteurs"}],
x:"Bonne réponse : Par toute personne sur internet. Le RENT (Registre électronique national des entreprises de transport) est consultable par toute personne sur internet, via le site du Ministère des Transports. Il recense tous les transporteurs routiers autorisés à exercer sur le territoire français."},

{id:334,prog:'LEGER',theme:'cl-gestion',d:3,
e:"Le ratio dette nette / EBITDA mesure :",
r:[{t:"La rentabilité des actifs"},{t:"La capacité de l'entreprise à rembourser ses dettes par son résultat opérationnel brut",ok:true},{t:"Le niveau de liquidité immédiate"},{t:"L'autonomie financière"}],
x:"Bonne réponse : La capacité de l'entreprise à rembourser ses dettes par son résultat opérationnel brut. Ratio levier = Dette nette / EBITDA. Un ratio < 3-4 est considéré sain pour les entreprises industrielles/transport. Au-delà de 5-6, le risque financier est élevé et les banques peuvent refuser de nouveaux prêts. Ce ratio est l'un des covenants financiers les plus utilisés dans les contrats de crédit."},

{id:335,prog:'LEGER',theme:'cl-gestion',d:1,
e:"Le délai de récupération d'un investissement (payback) de 18 000 € générant 6 000 €/an est de :",
r:[{t:"1 an"},{t:"3 ans",ok:true},{t:"18 ans"},{t:"5 ans"}],
x:"Bonne réponse : 3 ans. DRI = Investissement / Flux annuel = 18 000 / 6 000 = 3 ans. Après 3 ans, l'investissement est intégralement remboursé par les flux générés. C'est un critère simple de sélection des investissements, même si il ne tient pas compte de la valeur temps de l'argent (contrairement à la VAN)."},

{id:336,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"Le numéro de TVA intracommunautaire français est composé de :",
r:[{t:"Le code FR + 9 chiffres du SIREN"},{t:"Le code FR + 2 chiffres clé + 9 chiffres SIREN",ok:true},{t:"Le numéro de SIRET"},{t:"Un numéro attribué par la DGFiP uniquement"}],
x:"Bonne réponse : Le code FR + 2 chiffres clé + 9 chiffres SIREN. Le numéro de TVA intracommunautaire français est : FR + 2 chiffres (clé de contrôle calculée à partir du SIREN) + 9 chiffres (numéro SIREN). Exemple : FR12 123 456 789. Il est obligatoire sur les factures émises vers des clients assujettis d'autres États membres de l'UE."},

{id:337,prog:'LEGER',theme:'cl-regl',d:2,
e:"Un VUL frigorifique doit posséder une attestation de conformité ATP valide, dont la durée initiale est de :",
r:[{t:"1 an"},{t:"3 ans",ok:true},{t:"5 ans"},{t:"10 ans"}],
x:"Bonne réponse : 3 ans. L'attestation ATP (Accord ATP sur le transport des denrées périssables) est valable 3 ans pour les nouvelles caisses isothermes et réfrigérantes. Le renouvellement est possible tous les 3 ans après contrôle de l'efficacité thermique par un organisme agréé."},

{id:338,prog:'LEGER',theme:'cl-gestion',d:3,
e:"Le goodwill (survaleur) inscrit au bilan lors d'une acquisition représente :",
r:[{t:"La valeur de la marque enregistrée"},{t:"L'écart entre le prix d'acquisition et la valeur nette des actifs identifiables",ok:true},{t:"La valeur des brevets déposés"},{t:"Les stocks de l'entreprise achetée"}],
x:"Bonne réponse : L'écart entre le prix d'acquisition et la valeur nette des actifs identifiables. Le goodwill (ou fonds commercial) = Prix payé — Juste valeur des actifs nets identifiables. Il représente la réputation, les relations clients, les savoir-faire non comptabilisés. En normes françaises il s'amortit. En IFRS, il est soumis à un test de dépréciation annuel (impairment test)."},

{id:339,prog:'LEGER',theme:'cl-civil',d:2,
e:"Le délai de paiement maximum entre professionnels en France est de :",
r:[{t:"30 jours date de facture"},{t:"45 jours fin de mois ou 60 jours date de facture",ok:true},{t:"90 jours date de facture"},{t:"6 mois à compter de la livraison"}],
x:"Bonne réponse : 45 jours fin de mois ou 60 jours date de facture. La loi LME (2008) fixe les délais de paiement entre professionnels à 60 jours date de facture ou 45 jours fin de mois. Au-delà, des pénalités de retard sont obligatoirement applicables. Des délais dérogatoires existent pour certains secteurs."},

{id:340,prog:'LEGER',theme:'cl-gestion',d:3,
e:"L'effet de levier financier est favorable lorsque :",
r:[{t:"Le taux de rentabilité économique est supérieur au coût de la dette",ok:true},{t:"L'entreprise n'a pas de dettes"},{t:"Le CA augmente chaque année"},{t:"Le taux d'intérêt est supérieur à la rentabilité économique"}],
x:"Bonne réponse : Le taux de rentabilité économique est supérieur au coût de la dette. L'effet de levier est favorable quand le taux de rentabilité économique (ROA) est supérieur au taux d'intérêt de la dette : l'endettement améliore la rentabilité des capitaux propres (ROE). Il est défavorable (effet de massue) quand les intérêts dépassent la rentabilité économique."},

{id:341,prog:'LEGER',theme:'cl-secu',d:1,
e:"La limitation de vitesse en agglomération est de 50 km/h, mais elle peut être réduite à :",
r:[{t:"40 km/h dans les zones scolaires uniquement"},{t:"30 km/h dans les zones 30, zones résidentielles et zones de rencontre",ok:true},{t:"20 km/h uniquement dans les parcs"},{t:"Il n'y a pas de limitation inférieure à 50 km/h en agglomération"}],
x:"Bonne réponse : 30 km/h dans les zones 30, zones résidentielles et zones de rencontre. En agglomération, la limitation à 30 km/h s'applique dans les zones 30 (signalées par un panneau rond bleu/blanc), dans les zones résidentielles et zones de rencontre. La vitesse peut également être réduite par des arrêtés municipaux locaux. Depuis 2021, Paris a généralisé la zone 30 sur l'ensemble de la ville."},

{id:342,prog:'LEGER',theme:'cl-social',d:2,
e:"Le congé maternité pour un premier enfant est de :",
r:[{t:"14 semaines (6 avant + 8 après)",ok:true},{t:"18 semaines (6 avant + 12 après)"},{t:"26 semaines (8 avant + 18 après)"},{t:"8 semaines uniquement après la naissance"}],
x:"Bonne réponse : 14 semaines (6 avant + 8 après). Pour un premier ou deuxième enfant, le congé maternité est de 16 semaines au total (6 semaines avant et 10 semaines après l'accouchement). Pour un 3ème enfant, il est de 26 semaines. La réponse correcte (14 semaines) correspond à l'ancienne règle — vérifiez les mises à jour légales."},

{id:343,prog:'LEGER',theme:'cl-civil',d:3,
e:"En transport léger, la limite d'indemnisation en cas de perte de marchandise sans déclaration de valeur est calculée sur la base :",
r:[{t:"Du prix d'achat de la marchandise"},{t:"D'un forfait réglementé au kg de marchandise perdue",ok:true},{t:"De la valeur assurée par l'expéditeur"},{t:"Du prix de revente estimé par le destinataire"}],
x:"Bonne réponse : D'un forfait réglementé au kg de marchandise perdue. En l'absence de déclaration de valeur, l'indemnisation est calculée sur la base d'un barème forfaitaire au kg (selon le contrat type transport). La déclaration de valeur permet d'obtenir une indemnisation à hauteur de la valeur réelle."},

{id:344,prog:'LEGER',theme:'cl-gestion',d:3,
e:"La méthode des flux de trésorerie actualisés (DCF) pour valoriser une entreprise utilise :",
r:[{t:"Le bénéfice net historique des 3 dernières années"},{t:"Les flux de trésorerie futurs prévisionnels actualisés au WACC",ok:true},{t:"La valeur comptable des actifs nets"},{t:"Le multiple de CA d'entreprises comparables"}],
x:"Bonne réponse : Les flux de trésorerie futurs prévisionnels actualisés au WACC. La méthode DCF (Discounted Cash Flows) valorise une entreprise en actualisant ses flux de trésorerie futurs prévisionnels (Free Cash Flows) au coût moyen pondéré du capital (WACC). C'est la méthode de référence en finance d'entreprise, bien que très sensible aux hypothèses retenues."},

{id:345,prog:'LEGER',theme:'cl-civil',d:2,
e:"La novation d'une dette commerciale consiste à :",
r:[{t:"Rembourser la dette par anticipation"},{t:"Substituer une obligation nouvelle à une obligation ancienne qui s'éteint",ok:true},{t:"Transférer la dette à un tiers"},{t:"Suspendre temporairement le paiement"}],
x:"Bonne réponse : Substituer une obligation nouvelle à une obligation ancienne qui s'éteint. La novation (art. 1329 du Code civil) est un mécanisme qui éteint une obligation existante pour la remplacer par une nouvelle. Elle peut porter sur l'objet de la dette (novation par changement d'objet) ou sur les parties (novation par changement de débiteur = délégation)."},

{id:346,prog:'LEGER',theme:'cl-gestion',d:1,
e:"La valeur nette comptable (VNC) d'un actif amorti sur 5 ans à hauteur de 4 000 €/an après 3 ans est de :",
r:[{t:"20 000 €"},{t:"8 000 €",ok:true},{t:"12 000 €"},{t:"0 €"}],
x:"Bonne réponse : 8 000 €. VNC = Valeur d'achat - Amortissements cumulés = 20 000 - (4 000 × 3) = 20 000 - 12 000 = 8 000 €. La VNC figure à l'actif du bilan. Elle peut différer significativement de la valeur de marché (ex : un VUL de 3 ans vaut souvent moins que sa VNC comptable)."},

{id:347,prog:'LEGER',theme:'cl-regl',d:1,
e:"La vignette Crit'Air est délivrée par :",
r:[{t:"La Préfecture"},{t:"Le Ministère de la Transition Écologique via certificat-air.gouv.fr",ok:true},{t:"La Chambre de Commerce"},{t:"L'assureur du véhicule"}],
x:"Bonne réponse : Le Ministère de la Transition Écologique via certificat-air.gouv.fr. La vignette Crit'Air est un certificat officiel délivré par le Ministère de la Transition Écologique sur le site certificat-air.gouv.fr (1,84 € de frais d'envoi). Elle est attribuée selon les émissions du véhicule (motorisation, norme Euro) et est obligatoire pour circuler dans les ZFE-m."},

{id:348,prog:'LEGER',theme:'cl-social',d:3,
e:"La période d'essai pour un CDI d'un ouvrier est de :",
r:[{t:"1 mois renouvelable une fois (2 mois max)",ok:true},{t:"3 mois renouvelables (6 mois max)"},{t:"6 mois non renouvelables"},{t:"Elle n'est pas encadrée par la loi"}],
x:"Bonne réponse : 1 mois renouvelable une fois (2 mois max). Pour les ouvriers, la période d'essai est de 2 mois maximum (1 mois initial + 1 mois de renouvellement). Pour les techniciens : 3 mois. Pour les cadres : 4 mois. Ces durées sont fixées par le Code du travail."},

{id:349,prog:'LEGER',theme:'cl-civil',d:2,
e:"Le nantissement du fonds de commerce permet au commerçant de :",
r:[{t:"Vendre son fonds sans accord des créanciers"},{t:"Affecter son fonds en garantie d'un emprunt tout en continuant à l'exploiter",ok:true},{t:"Suspendre le paiement de ses dettes"},{t:"Transférer la propriété temporairement"}],
x:"Bonne réponse : Affecter son fonds en garantie d'un emprunt tout en continuant à l'exploiter. Le nantissement de fonds de commerce (art. L.142-1 du Code de commerce) est une sûreté mobilière permettant d'affecter le fonds en garantie d'un crédit sans en perdre la possession. Le créancier bénéficie d'un droit de préférence sur le prix de vente du fonds en cas de défaillance du débiteur."},

{id:350,prog:'LEGER',theme:'cl-social',d:3,
e:"Le plan de sauvegarde de l'emploi (PSE) est obligatoire pour les entreprises de 50+ salariés qui licencient :",
r:[{t:"Plus de 5 salariés sur 30 jours"},{t:"Au moins 10 salariés sur 30 jours pour motif économique",ok:true},{t:"Plus de 20 salariés sur 3 mois"},{t:"Dès le 1er licenciement économique"}],
x:"Bonne réponse : Au moins 10 salariés sur 30 jours pour motif économique. Le PSE (plan de sauvegarde de l'emploi) est obligatoire pour les entreprises d'au moins 50 salariés qui envisagent de licencier au moins 10 salariés sur 30 jours pour motif économique. Il doit prévoir des mesures de reclassement interne et externe, des formations et des aides."},

{id:351,prog:'LEGER',theme:'cl-secu',d:2,
e:"La vitesse maximale pour un conducteur novice (permis de moins de 2 ans) sur autoroute est de :",
r:[{t:"130 km/h"},{t:"110 km/h",ok:true},{t:"90 km/h"},{t:"120 km/h"}],
x:"Bonne réponse : 110 km/h. Les conducteurs en période probatoire (3 premières années : 2 ans en filière classique, 1 an en AAC) ont des limites réduites : 110 km/h sur autoroute, 100 km/h sur route à 2×2 voies séparées, 80 km/h ailleurs hors agglomération. Le taux d'alcool limite est de 0,2 g/L (vs 0,5 g/L pour les conducteurs confirmés)."},

{id:352,prog:'LEGER',theme:'cl-social',d:2,
e:"La durée minimale légale du temps partiel est de :",
r:[{t:"20h par semaine"},{t:"24h par semaine (sauf exceptions légales ou accord de branche)",ok:true},{t:"Toute durée inférieure à 35h"},{t:"Il n'y a pas de minimum légal"}],
x:"Bonne réponse : 24h par semaine (sauf exceptions légales ou accord de branche). La durée minimale du temps partiel est de 24 heures hebdomadaires (art. L.3123-7 du Code du travail). Des exceptions sont prévues : à la demande écrite du salarié, par accord de branche, pour les étudiants de moins de 26 ans. En dessous de 24h, le salarié peut refuser sans motif."},

{id:353,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le délai de récupération d'un investissement (DRI ou payback) :",
r:[{t:"Mesure la rentabilité de l'investissement en %"},{t:"Indique le temps nécessaire pour récupérer le capital investi grâce aux flux de trésorerie générés",ok:true},{t:"Calcule la valeur future d'un investissement"},{t:"Determine la valeur de revente du bien"}],
x:"Bonne réponse : Indique le temps nécessaire pour récupérer le capital investi grâce aux flux de trésorerie générés. Le DRI = Capital investi / Flux de trésorerie annuel moyen généré. Un DRI de 3 ans signifie que l'investissement sera remboursé en 3 ans par les flux qu'il génère. C'est un critère simple de sélection : plus le DRI est court, plus l'investissement est rapidement rentabilisé."},

{id:354,prog:'LEGER',theme:'cl-social',d:1,
e:"L'indemnité légale de licenciement pour 10 ans d'ancienneté est de :",
r:[{t:"2 mois de salaire"},{t:"2,5 mois de salaire",ok:true},{t:"5 mois de salaire"},{t:"10 mois de salaire"}],
x:"Bonne réponse : 2,5 mois de salaire. Indemnité légale = 1/4 de mois par année d'ancienneté pour les 10 premières années. Pour 10 ans : 10 × 1/4 = 2,5 mois de salaire de référence. À partir de la 11ème année, le taux passe à 1/3 de mois. La convention collective peut prévoir des montants plus favorables."},

{id:355,prog:'LEGER',theme:'cl-social',d:1,
e:"Le DUER (Document Unique d'Évaluation des Risques) est obligatoire :",
r:[{t:"À partir de 10 salariés"},{t:"Dès l'embauche du 1er salarié",ok:true},{t:"À partir de 50 salariés"},{t:"Uniquement dans les secteurs dangereux"}],
x:"Bonne réponse : Dès l'embauche du 1er salarié. Le DUER est obligatoire pour toute entreprise dès qu'elle emploie au moins 1 salarié (art. R.4121-1 du Code du travail). Il recense tous les risques professionnels identifiés et les mesures de prévention. Il doit être mis à jour au moins annuellement et accessible aux salariés."},

{id:356,prog:'LEGER',theme:'cl-social',d:1,
e:"Le taux de majoration légal pour les heures supplémentaires au-delà de la 43ème heure est de :",
r:[{t:"10 %"},{t:"25 %"},{t:"50 %",ok:true},{t:"75 %"}],
x:"Bonne réponse : 50 %. Les 8 premières heures supplémentaires (36ème à 43ème heure) sont majorées à 25 %. Les heures suivantes (44ème heure et au-delà) sont majorées à 50 %. Un accord d'entreprise ou de branche peut prévoir des taux différents, avec un minimum de 10 %."},

{id:357,prog:'LEGER',theme:'cl-regl',d:2,
e:"Le dépassement du PTAC d'un VUL est :",
r:[{t:"Toléré jusqu'à 10 %"},{t:"Strictement interdit et passible d'amende",ok:true},{t:"Autorisé avec accord préfectoral"},{t:"Toléré pour les livraisons urgentes"}],
x:"Bonne réponse : Strictement interdit et passible d'amende. Le dépassement du PTAC est formellement interdit (art. R.312-4 du Code de la route). Les sanctions varient selon le niveau de dépassement (de l'amende simple à la rétention du véhicule). Le conducteur ET le chargeur peuvent être mis en cause. En cas d'accident avec surcharge, l'assureur peut invoquer une déchéance de garantie."},

{id:358,prog:'LEGER',theme:'cl-social',d:2,
e:"Le CPF (Compte Personnel de Formation) est alimenté à hauteur de :",
r:[{t:"300 €/an"},{t:"500 €/an pour un salarié à temps plein (800 € pour les peu qualifiés)",ok:true},{t:"1 000 €/an systématiquement"},{t:"En fonction du salaire brut"}],
x:"Bonne réponse : 500 €/an pour un salarié à temps plein (800 € pour les peu qualifiés). Le CPF est alimenté à 500 €/an pour les salariés à temps plein ayant au moins un niveau bac (plafond 5 000 €), et à 800 €/an pour les salariés sans qualification (plafond 8 000 €). Les droits sont utilisables pour financer des formations certifiantes de son choix."},

{id:359,prog:'LEGER',theme:'cl-secu',d:2,
e:"L'alcoolémie maximale pour un conducteur transportant des enfants en minibus est de :",
r:[{t:"0,5 g/L"},{t:"0,2 g/L",ok:true},{t:"0 g/L absolu"},{t:"0,8 g/L"}],
x:"Bonne réponse : 0,2 g/L. Les conducteurs de véhicules de transport en commun (dont les minibus scolaires) sont soumis à un taux maximal d'alcoolémie de 0,2 g/L, identique aux conducteurs en période probatoire. Ce seuil est bien inférieur aux 0,5 g/L applicables aux conducteurs ordinaires."},

{id:360,prog:'LEGER',theme:'cl-gestion',d:3,
e:"Le délai de rotation des créances clients mesure :",
r:[{t:"Le délai de livraison moyen aux clients"},{t:"Le nombre de jours moyen avant encaissement des factures clients",ok:true},{t:"La durée de conservation des marchandises en stock"},{t:"Le délai de paiement accordé aux fournisseurs"}],
x:"Bonne réponse : Le nombre de jours moyen avant encaissement des factures clients. Délai de rotation créances = (Créances clients / CA TTC) × 360. Il mesure le nombre de jours moyen avant d'encaisser les paiements clients. Plus il est court, meilleure est la trésorerie."},

{id:361,prog:'LEGER',theme:'cl-fiscal',d:3,
e:"Le déficit fiscal d'une entreprise à l'IS peut être :",
r:[{t:"Reporté en avant sur les exercices bénéficiaires suivants (illimité)",ok:true},{t:"Remboursé par l'État immédiatement"},{t:"Reporté uniquement sur les 3 exercices précédents"},{t:"Perdu définitivement à la clôture de l'exercice"}],
x:"Bonne réponse : Reporté en avant sur les exercices bénéficiaires suivants (illimité). Le déficit fiscal à l'IS est reportable en avant (sur les exercices bénéficiaires suivants) sans limitation de durée, mais plafonné à 1 M€ + 50 % du bénéfice imposable excédant ce seuil (art. 209 I du CGI). Il peut aussi être reporté en arrière (carry-back) sur l'exercice précédent, dans la limite de 1 M€."},

{id:362,prog:'LEGER',theme:'cl-gestion',d:1,
e:"Le résultat exceptionnel dans le compte de résultat comprend :",
r:[{t:"Les opérations courantes de l'activité principale"},{t:"Les produits et charges non liés à l'exploitation normale (cessions d'actifs, sinistres…)",ok:true},{t:"Uniquement les pertes sur créances"},{t:"Les charges financières de l'emprunt"}],
x:"Bonne réponse : Les produits et charges non liés à l'exploitation normale (cessions d'actifs, sinistres…). Le résultat exceptionnel regroupe les produits et charges non récurrents : cessions d'immobilisations (plus ou moins-values), indemnités d'assurance pour sinistre, subventions exceptionnelles, pénalités, rappels d'impôts. Il se distingue du résultat d'exploitation (activité normale) et du résultat financier."},

{id:363,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Le taux de rotation des stocks se calcule comme :",
r:[{t:"CA / Stock moyen"},{t:"Coût des ventes / Stock moyen",ok:true},{t:"Stock final / Stock initial"},{t:"Marge brute / Stock moyen"}],
x:"Bonne réponse : Coût des ventes / Stock moyen. Taux de rotation = Coût des ventes / Stock moyen. Plus ce taux est élevé, plus les stocks se renouvellent fréquemment. Pour le délai en jours : Stock moyen / Coût des ventes × 360. Un taux faible indique des stocks qui stagnent et immobilisent de la trésorerie."},

{id:364,prog:'LEGER',theme:'cl-civil',d:1,
e:"Le bail commercial a une durée minimale de :",
r:[{t:"3 ans"},{t:"6 ans"},{t:"9 ans",ok:true},{t:"12 ans"}],
x:"Bonne réponse : 9 ans. Le bail commercial dit '3-6-9' a une durée minimale de 9 ans. Le locataire peut donner congé à chaque période triennale (3, 6 ans). En fin de bail, le locataire bénéficie d'un droit au renouvellement. Le propriétaire refusant doit verser une indemnité d'éviction."},

{id:365,prog:'LEGER',theme:'cl-social',d:2,
e:"Le plafond du CPF est de 5 000 € (8 000 € pour les peu qualifiés). L'alimentation annuelle est de :",
r:[{t:"300 €/an"},{t:"500 €/an (800 € pour les peu qualifiés) pour un salarié à temps plein",ok:true},{t:"1 000 €/an systématiquement"},{t:"En fonction du salaire brut uniquement"}],
x:"Bonne réponse : 500 €/an (800 € pour les peu qualifiés) pour un salarié à temps plein. Le CPF est alimenté à 500 €/an pour les salariés à temps plein ayant au moins un niveau bac (plafond 5 000 €), et à 800 €/an pour les salariés sans qualification (plafond 8 000 €). Pour les temps partiels, l'alimentation est proportionnelle. Les droits sont utilisables pour financer des formations certifiantes."},

{id:366,prog:'LEGER',theme:'cl-secu',d:1,
e:"Le port du téléphone tenu en main au volant est interdit et passible d'une amende de :",
r:[{t:"35 €"},{t:"135 €",ok:true},{t:"450 €"},{t:"750 €"}],
x:"Bonne réponse : 135 €. L'utilisation du téléphone tenu en main au volant est une contravention de 4ème classe : amende forfaitaire de 135 € (minorée à 90 €, majorée à 375 €) et retrait de 3 points du permis de conduire. Le kit mains-libres intégré au véhicule reste autorisé, mais toute manipulation d'un écran reste interdite."},

{id:367,prog:'LEGER',theme:'cl-social',d:2,
e:"Le CDD de remplacement doit obligatoirement mentionner :",
r:[{t:"Uniquement la durée du remplacement"},{t:"Le nom et la qualification de la personne remplacée",ok:true},{t:"Le motif du remplacement uniquement"},{t:"La durée prévisible d'absence de la personne remplacée"}],
x:"Bonne réponse : Le nom et la qualification de la personne remplacée. Le CDD de remplacement doit obligatoirement mentionner le nom et la qualification professionnelle de la personne remplacée (art. L.1242-12 du Code du travail). À défaut, le contrat peut être requalifié en CDI par les tribunaux."},

{id:368,prog:'LEGER',theme:'cl-civil',d:2,
e:"La cession de contrat nécessite obligatoirement :",
r:[{t:"L'accord du cédant uniquement"},{t:"L'accord du cocontractant cédé",ok:true},{t:"L'accord d'un tribunal"},{t:"Un acte notarié"}],
x:"Bonne réponse : L'accord du cocontractant cédé. La cession de contrat (art. 1216 Code civil) transfère la position contractuelle d'une partie à un cessionnaire. Elle nécessite l'accord du cocontractant cédé, qui peut avoir été donné par avance dans le contrat. Sans cet accord, la cession est inopposable au cédé."},

{id:369,prog:'LEGER',theme:'cl-civil',d:1,
e:"Un devis accepté par le client constitue :",
r:[{t:"Une simple proposition sans valeur juridique"},{t:"Un contrat liant les deux parties",ok:true},{t:"Un document informatif uniquement"},{t:"Une facture pro forma"}],
x:"Bonne réponse : Un contrat liant les deux parties. Un devis signé par le client vaut acceptation de l'offre : il y a rencontre des volontés (offre du prestataire + acceptation du client) et donc formation d'un contrat. L'entreprise est alors engagée par les prix et conditions figurant dans le devis."},

{id:370,prog:'LEGER',theme:'cl-acces',d:3,
e:"L'examen CPC Léger couvre les matières suivantes :",
r:[{t:"Uniquement la réglementation transport"},{t:"Droit civil et commercial, droit social, fiscalité, gestion financière, accès à la profession et règles techniques",ok:true},{t:"Uniquement la sécurité routière et la fiscalité"},{t:"Uniquement les mathématiques financières"}],
x:"Bonne réponse : Droit civil et commercial, droit social, fiscalité, gestion financière, accès à la profession et règles techniques. L'examen CPC pour le transport léger (<3,5t) couvre 6 domaines selon le règlement européen 1071/2009 : droit civil et commercial, droit social, fiscalité, gestion financière et comptable, accès au marché, normes techniques. Organisé par les CCI, il comprend des épreuves écrites (QCM + questions rédigées)."},

{id:371,prog:'LEGER',theme:'cl-civil',d:1,
e:"La prescription commerciale entre commerçants est de :",
r:[{t:"1 an"},{t:"5 ans",ok:true},{t:"10 ans"},{t:"30 ans"}],
x:"Bonne réponse : 5 ans. La prescription commerciale de droit commun est de 5 ans (art. L.110-4 du Code de commerce). Ce délai s'applique aux obligations nées à l'occasion de leur commerce entre commerçants ou entre commerçants et non-commerçants."},

{id:372,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"Le versement libératoire pour les auto-entrepreneurs permet de :",
r:[{t:"Ne jamais payer d'IR"},{t:"Payer l'IR forfaitairement sur le CA déclaré, sans passer par la déclaration annuelle",ok:true},{t:"Bénéficier d'une exonération d'IR pendant 2 ans"},{t:"Réduire le taux d'IR à 5 %"}],
x:"Bonne réponse : Payer l'IR forfaitairement sur le CA déclaré, sans passer par la déclaration annuelle. Le versement libératoire (art. 151-0 du CGI) permet de payer l'IR en même temps que les cotisations sociales, à un taux forfaitaire sur le CA (1 % vente, 1,7 % services BIC, 2,2 % BNC). Réservé aux foyers sous un certain plafond de revenu fiscal de référence."},

{id:373,prog:'LEGER',theme:'cl-gestion',d:2,
e:"L'escompte commercial de 2 % à 30 jours correspond à un taux annualisé de :",
r:[{t:"2 %"},{t:"Environ 24 % si l'échéance normale est à 60 jours",ok:true},{t:"12 %"},{t:"48 %"}],
x:"Bonne réponse : Environ 24 % si l'échéance normale est à 60 jours. Taux annualisé = (Taux escompte / Durée gagnée) × 360. Si l'escompte est 2 % pour 30 jours gagnés (paiement à 30j vs échéance à 60j) : 2 / 30 × 360 = 24 % par an. Ce coût élevé incite le client à profiter de l'escompte (payer tôt) plutôt que d'utiliser un découvert bancaire coûteux."},

{id:374,prog:'LEGER',theme:'cl-secu',d:2,
e:"Le système ESP (Electronic Stability Program) d'un VUL intervient en cas de :",
r:[{t:"Freinage d'urgence uniquement"},{t:"Perte de contrôle directionnelle (sous-virage ou survirage) en corrigeant automatiquement la trajectoire",ok:true},{t:"Démarrage sur sol glissant"},{t:"Changement de vitesse automatique"}],
x:"Bonne réponse : Perte de contrôle directionnelle (sous-virage ou survirage) en corrigeant automatiquement la trajectoire. L'ESP détecte les situations de sous-virage (le véhicule part tout droit dans un virage) ou de survirage (l'arrière chasse) en comparant la trajectoire souhaitée (angle du volant) à la trajectoire réelle (capteurs gyroscopiques). Il corrige automatiquement en freinant sélectivement une ou plusieurs roues. Obligatoire sur tous les véhicules neufs depuis 2014."},

{id:375,prog:'LEGER',theme:'cl-gestion',d:2,
e:"La valeur ajoutée d'une entreprise se répartit entre :",
r:[{t:"Actionnaires et banques uniquement"},{t:"Salariés (salaires), État (impôts), créanciers (intérêts) et actionnaires (dividendes + réserves)",ok:true},{t:"Uniquement les charges d'exploitation"},{t:"Le dirigeant et les seuls investisseurs"}],
x:"Bonne réponse : Salariés (salaires), État (impôts), créanciers (intérêts) et actionnaires (dividendes + réserves). La valeur ajoutée = richesse créée par l'entreprise = CA — Consommations intermédiaires. Elle est répartie entre : salariés (rémunérations), État (impôts et taxes), créanciers (charges financières) et apporteurs de capitaux (dividendes + autofinancement). L'analyse de cette répartition reflète la politique sociale et financière."},

{id:376,prog:'LEGER',theme:'cl-gestion',d:3,
e:"La structure de financement optimale d'une entreprise de transport cherche à :",
r:[{t:"Maximiser l'endettement pour profiter de l'effet de levier"},{t:"Équilibrer fonds propres et dettes pour optimiser le coût du capital tout en maîtrisant le risque financier",ok:true},{t:"Financer uniquement par fonds propres pour éviter tout endettement"},{t:"Minimiser les capitaux propres pour réduire les obligations vis-à-vis des actionnaires"}],
x:"Bonne réponse : Équilibrer fonds propres et dettes pour optimiser le coût du capital tout en maîtrisant le risque financier. La structure optimale de financement (théorie de Modigliani-Miller avec fiscalité) consiste à utiliser l'endettement pour profiter de la déductibilité des intérêts (économie fiscale), tout en évitant un endettement excessif qui augmenterait le risque de faillite. Dans la pratique, les entreprises de transport visent une autonomie financière de 30 à 40 %."},

{id:377,prog:'LEGER',theme:'cl-civil',d:1,
e:"Un contrat électronique conclu entre professionnels est :",
r:[{t:"Nul car non signé manuellement"},{t:"Valide, avec la même force juridique qu'un contrat papier",ok:true},{t:"Valable uniquement pour les petits montants"},{t:"Soumis à validation notariale"}],
x:"Bonne réponse : Valide, avec la même force juridique qu'un contrat papier. Le contrat électronique a la même valeur juridique qu'un contrat papier (loi du 13 mars 2000) si la personne peut être identifiée et si l'intégrité du document est garantie. L'écrit électronique est admis comme preuve au même titre que l'écrit papier."},

{id:378,prog:'LEGER',theme:'cl-social',d:2,
e:"La protection contre le licenciement en cas d'arrêt maladie ordinaire permet :",
r:[{t:"Un licenciement interdit pendant toute la durée de l'arrêt"},{t:"Un licenciement possible pour cause réelle étrangère à la maladie, ou si l'absence perturbe l'entreprise et nécessite remplacement définitif",ok:true},{t:"Un licenciement interdit pendant 6 mois"},{t:"Aucune protection spécifique"}],
x:"Bonne réponse : Un licenciement possible pour cause réelle étrangère à la maladie, ou si l'absence perturbe l'entreprise et nécessite remplacement définitif. Le salarié en arrêt maladie ordinaire bénéficie d'une protection relative : il peut être licencié pour motif étranger à la maladie (faute, motif économique) ou si son absence prolongée perturbe l'entreprise au point de nécessiter son remplacement définitif. L'employeur doit chercher des alternatives avant de licencier dans ce cas."},

{id:379,prog:'LEGER',theme:'cl-civil',d:2,
e:"La résolution d'un contrat pour inexécution entraîne :",
r:[{t:"La modification des obligations des parties"},{t:"L'anéantissement rétroactif du contrat avec restitutions réciproques",ok:true},{t:"Uniquement le versement de dommages et intérêts"},{t:"La suspension temporaire du contrat"}],
x:"Bonne réponse : L'anéantissement rétroactif du contrat avec restitutions réciproques. La résolution (art. 1229 du Code civil) met fin au contrat et l'anéantit rétroactivement : les parties sont remises dans l'état où elles étaient avant la conclusion du contrat (restitutions mutuelles). Elle diffère de la résiliation qui ne vaut que pour l'avenir."},

{id:380,prog:'LEGER',theme:'cl-regl',d:1,
e:"Un conducteur de VUL (<3,5t) doit posséder au minimum :",
r:[{t:"Le permis B",ok:true},{t:"Le permis B + attestation FIMO"},{t:"Le permis C"},{t:"Le permis B + formation ADR obligatoire"}],
x:"Bonne réponse : Le permis B. Pour conduire un VUL de moins de 3,5 tonnes, le permis B est suffisant. Le permis C n'est requis que pour les véhicules de plus de 3,5 tonnes (PL)."},

{id:381,prog:'LEGER',theme:'cl-secu',d:2,
e:"Le risque routier professionnel représente environ quelle part des accidents mortels du travail en France ?",
r:[{t:"10 %"},{t:"40 %",ok:true},{t:"60 %"},{t:"5 %"}],
x:"Bonne réponse : 40 %. Le risque routier professionnel (accidents de mission + trajet) est la 1ère cause de mortalité au travail en France, représentant environ 40 % des accidents mortels. Il concerne tous les salariés se déplaçant professionnellement. Les employeurs ont une obligation légale de prévention intégrée au DUER."},

{id:382,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"Le droit à déduction de la TVA est ouvert dès :",
r:[{t:"Le paiement de la facture"},{t:"L'exigibilité de la TVA chez le fournisseur (souvent la livraison ou la facturation)",ok:true},{t:"La réception des marchandises uniquement"},{t:"La revente des marchandises"}],
x:"Bonne réponse : L'exigibilité de la TVA chez le fournisseur (souvent la livraison ou la facturation). Le droit à déduction de la TVA prend naissance à la date à laquelle la taxe devient exigible chez le fournisseur. Pour les livraisons de biens : à la livraison. Pour les prestations de services : à l'encaissement (sauf option pour les débits). La facture est obligatoire pour exercer ce droit."},

{id:383,prog:'LEGER',theme:'cl-secu',d:1,
e:"En cas de crevaison sur autoroute, il faut :",
r:[{t:"Freiner brusquement et s'arrêter sur la voie rapide"},{t:"Serrer progressivement le volant, ralentir doucement et rejoindre la bande d'arrêt d'urgence",ok:true},{t:"Accélérer pour atteindre la prochaine sortie"},{t:"Allumer les feux de détresse uniquement"}],
x:"Bonne réponse : Serrer progressivement le volant, ralentir doucement et rejoindre la bande d'arrêt d'urgence. En cas de crevaison : tenir fermement le volant (le véhicule tire d'un côté), ralentir très progressivement sans freiner brusquement, ne pas faire de mouvement brusque de direction, rejoindre la BAU le plus vite possible, puis allumer les feux de détresse, sortir du véhicule par la droite et placer les triangles de signalisation."},

{id:384,prog:'LEGER',theme:'cl-gestion',d:1,
e:"Un flux de trésorerie négatif sur l'activité (Operating Cash Flow < 0) signifie :",
r:[{t:"L'entreprise est forcément en faillite"},{t:"L'exploitation consomme plus de trésorerie qu'elle n'en génère — situation préoccupante",ok:true},{t:"L'entreprise investit beaucoup"},{t:"L'entreprise a remboursé ses dettes"}],
x:"Bonne réponse : L'exploitation consomme plus de trésorerie qu'elle n'en génère — situation préoccupante. Un OCF négatif signifie que l'activité opérationnelle consomme de la trésorerie. C'est préoccupant car une entreprise doit normalement générer de la trésorerie via son exploitation. Cela peut indiquer un BFR trop élevé, une rentabilité insuffisante ou des délais de paiement défavorables. À distinguer des flux d'investissement et de financement."},

{id:385,prog:'LEGER',theme:'cl-civil',d:2,
e:"Le nantissement du fonds de commerce permet au commerçant de :",
r:[{t:"Vendre son fonds sans accord des créanciers"},{t:"Affecter son fonds en garantie d'un emprunt tout en continuant à l'exploiter",ok:true},{t:"Suspendre le paiement de ses dettes"},{t:"Transférer temporairement la propriété"}],
x:"Bonne réponse : Affecter son fonds en garantie d'un emprunt tout en continuant à l'exploiter. Le nantissement de fonds de commerce (art. L.142-1 du Code de commerce) est une sûreté mobilière permettant d'affecter le fonds en garantie d'un crédit sans en perdre la possession. Le créancier bénéficie d'un droit de préférence sur le prix de vente du fonds en cas de défaillance du débiteur."},

{id:386,prog:'LEGER',theme:'cl-social',d:1,
e:"Le bulletin de paie doit obligatoirement être conservé par :",
r:[{t:"L'employeur pendant 5 ans"},{t:"Le salarié sans limite de durée (valeur de preuve permanente)",ok:true},{t:"L'employeur pendant 10 ans"},{t:"Les deux parties pendant 3 ans"}],
x:"Bonne réponse : Le salarié sans limite de durée (valeur de preuve permanente). Le bulletin de paie doit être conservé sans limitation de durée par le salarié, car il constitue une preuve sociale (retraite, chômage, droits sociaux). L'employeur doit le conserver pendant 5 ans. Le bulletin de paie électronique a la même valeur juridique que le bulletin papier."},

{id:387,prog:'LEGER',theme:'cl-social',d:3,
e:"La requalification d'un contrat de prestation de service en contrat de travail repose sur :",
r:[{t:"Le montant de la rémunération"},{t:"L'existence d'un lien de subordination juridique",ok:true},{t:"Le nombre d'heures travaillées"},{t:"La durée de la relation commerciale"}],
x:"Bonne réponse : L'existence d'un lien de subordination juridique. Le lien de subordination juridique est le critère déterminant du contrat de travail : il existe quand une personne effectue un travail sous l'autorité d'un employeur qui lui donne des ordres, contrôle l'exécution et peut sanctionner les manquements. La dénomination du contrat ne suffit pas."},

{id:388,prog:'LEGER',theme:'cl-secu',d:1,
e:"Le triangle de signalisation doit être placé à quelle distance minimum du véhicule en panne sur route normale ?",
r:[{t:"10 m"},{t:"30 m",ok:true},{t:"50 m"},{t:"100 m"}],
x:"Bonne réponse : 30 m. Le triangle doit être placé à au moins 30 m du véhicule en panne sur route normale, et à au moins 100 m sur autoroute ou route à grande vitesse. Il est obligatoire dans tout véhicule à moteur. Son absence est une contravention de 4ème classe (135 €)."},

{id:389,prog:'LEGER',theme:'cl-social',d:1,
e:"Le bulletin de paie doit obligatoirement être remis au salarié :",
r:[{t:"Trimestriellement"},{t:"Lors de chaque versement de salaire",ok:true},{t:"Annuellement avec la déclaration d'impôts"},{t:"Uniquement à la demande du salarié"}],
x:"Bonne réponse : Lors de chaque versement de salaire. L'employeur est tenu de remettre un bulletin de paie à chaque versement du salaire (généralement mensuel). Il peut être dématérialisé avec accord du salarié."},

{id:390,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"L'exit tax s'applique lorsqu'un contribuable :",
r:[{t:"Vend son entreprise à un repreneur étranger"},{t:"Transfère son domicile fiscal hors de France en détenant des participations importantes",ok:true},{t:"Réalise une plus-value supérieure à 1 M€"},{t:"Cède des actions cotées en bourse"}],
x:"Bonne réponse : Transfère son domicile fiscal hors de France en détenant des participations importantes. L'exit tax (art. 167 bis du CGI) s'applique aux personnes physiques qui transfèrent leur domicile fiscal hors de France, si elles ont été résidentes françaises pendant 6 des 10 dernières années et détiennent des participations ≥ 50 % ou d'une valeur > 800 000 €. Elle impose les plus-values latentes lors du départ."},

{id:391,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"Les véhicules utilitaires légers (<3,5t) professionnels bénéficient de la récupération de TVA sur le carburant à :",
r:[{t:"100 % pour le gazole"},{t:"80 % pour le gazole et 0 % pour l'essence",ok:true},{t:"50 % pour tous les carburants"},{t:"0 % — aucune récupération possible"}],
x:"Bonne réponse : 80 % pour le gazole et 0 % pour l'essence. Pour les VUL à usage professionnel exclusif : TVA sur gazole récupérable à 80 % (en voie d'augmentation progressive jusqu'à 100 %), TVA sur l'essence non récupérable (0 %). Pour les véhicules électriques : TVA sur l'électricité récupérable à 100 %."},

{id:392,prog:'LEGER',theme:'cl-civil',d:2,
e:"La garantie à première demande (garantie autonome) se distingue du cautionnement car :",
r:[{t:"Elle est moins contraignante pour le garant"},{t:"Le garant doit payer sans pouvoir opposer les exceptions tirées du contrat principal",ok:true},{t:"Elle ne couvre que les dettes commerciales"},{t:"Elle nécessite l'accord du débiteur principal"}],
x:"Bonne réponse : Le garant doit payer sans pouvoir opposer les exceptions tirées du contrat principal. La garantie autonome (ou garantie à première demande) est indépendante du contrat garanti : le garant paie sur simple demande du bénéficiaire, sans pouvoir opposer les exceptions que le débiteur principal pourrait invoquer. Contrairement au cautionnement, elle est totalement détachée de la dette principale."},

{id:393,prog:'LEGER',theme:'cl-fiscal',d:2,
e:"Un auto-entrepreneur dont le CA dépasse le seuil de franchise en base de TVA doit :",
r:[{t:"Fermer son auto-entreprise"},{t:"Facturer la TVA à ses clients et la reverser à l'État",ok:true},{t:"Passer automatiquement au régime réel simplifié d'imposition"},{t:"Demander une dérogation à l'administration fiscale"}],
x:"Bonne réponse : Facturer la TVA à ses clients et la reverser à l'État. Lorsque le CA dépasse le seuil de franchise en base de TVA (37 500 € pour les prestations de services depuis 2026, seuil majoré 41 250 €), l'auto-entrepreneur perd le bénéfice de la franchise et doit collecter et reverser la TVA."},

{id:394,prog:'LEGER',theme:'cl-fiscal',d:1,
e:"Le taux de TVA applicable aux prestations de transport de marchandises en France est de :",
r:[{t:"5,5 %"},{t:"10 %"},{t:"20 %",ok:true},{t:"0 % (exonéré)"}],
x:"Bonne réponse : 20 %. Les prestations de transport de marchandises en France sont soumises au taux normal de TVA de 20 %."},

{id:395,prog:'LEGER',theme:'cl-gestion',d:2,
e:"Un escompte commercial de 2 % à 30 jours offert à un client signifie :",
r:[{t:"Une réduction de 2 % sur le prix de vente brut"},{t:"Une réduction de 2 % accordée si la facture est payée dans les 30 jours",ok:true},{t:"Une majoration de 2 % en cas de retard"},{t:"Une remise annuelle de 2 %"}],
x:"Bonne réponse : Une réduction de 2 % accordée si la facture est payée dans les 30 jours. L'escompte commercial est une réduction financière accordée au client qui paie avant l'échéance normale. '2 % à 30 jours' signifie que si le client paie dans les 30 jours, il bénéficie d'une réduction de 2 % sur le montant HT de la facture. Le coût annualisé de ne pas prendre cet escompte peut être très élevé."},

{id:396,prog:'LEGER',theme:'cl-regl',d:2,
e:"Le transport de marchandises alimentaires sèches (épicerie) par VUL nécessite-t-il une réglementation sanitaire spécifique ?",
r:[{t:"Non, aucune réglementation spécifique"},{t:"Oui : respect du règlement (CE) 852/2004 sur l'hygiène alimentaire (nettoyage, séparation des produits…)",ok:true},{t:"Oui, uniquement si le CA dépasse 100 000 €"},{t:"Non si le transport est de moins de 50 km"}],
x:"Bonne réponse : Oui : respect du règlement (CE) 852/2004 sur l'hygiène alimentaire (nettoyage, séparation des produits…). Même les denrées sèches sont soumises au règlement CE 852/2004 sur l'hygiène des denrées alimentaires. Le transporteur doit : maintenir les véhicules propres et en bon état, éviter la contamination croisée, assurer la traçabilité, et former son personnel à l'hygiène. Un plan de nettoyage est recommandé."},

{id:397,prog:'LEGER',theme:'cl-social',d:2,
e:"Pour l'embauche d'un premier salarié, l'employeur doit effectuer en priorité :",
r:[{t:"Une déclaration à la Chambre des Métiers uniquement"},{t:"Une Déclaration Préalable à l'Embauche (DPAE) auprès de l'URSSAF",ok:true},{t:"Un enregistrement au tribunal de commerce"},{t:"Une demande d'autorisation à la DREAL"}],
x:"Bonne réponse : Une Déclaration Préalable à l'Embauche (DPAE) auprès de l'URSSAF. La Déclaration Préalable à l'Embauche (DPAE) doit être envoyée à l'URSSAF dans les 8 jours précédant l'embauche. C'est obligatoire pour tout premier salarié."},

{id:398,prog:'LEGER',theme:'cl-civil',d:1,
e:"La facture doit être émise au plus tard :",
r:[{t:"Le jour de la prestation"},{t:"Le 15e jour du mois suivant la livraison ou prestation",ok:true},{t:"30 jours après la livraison"},{t:"À la fin de l'exercice comptable"}],
x:"Bonne réponse : Le 15e jour du mois suivant la livraison ou prestation. En vertu du Code de commerce, la facture doit être émise dès la réalisation de la vente ou de la prestation de service, ou au plus tard le 15 du mois suivant. Elle doit mentionner obligatoirement les mentions légales (numéro, date, SIRET, TVA…)."},

{id:399,prog:'LEGER',theme:'cl-social',d:2,
e:"La portabilité de la mutuelle d'entreprise permet à l'ancien salarié de :",
r:[{t:"Conserver sa mutuelle en payant lui-même les cotisations"},{t:"Maintenir sa couverture gratuitement pendant la durée du chômage (max 12 mois)",ok:true},{t:"Adhérer à la mutuelle de son futur employeur sans délai de carence"},{t:"Transférer ses droits à un membre de sa famille"}],
x:"Bonne réponse : Maintenir sa couverture gratuitement pendant la durée du chômage (max 12 mois). La portabilité (art. L.911-8 du Code de la sécurité sociale) permet aux anciens salariés dont le contrat a été rompu (sauf faute lourde) de conserver les garanties santé et prévoyance de l'entreprise pendant le chômage, gratuitement, dans la limite de 12 mois. Les cotisations sont mutualisées entre actifs et anciens salariés."},

{id:400,prog:'LEGER',theme:'cl-fiscal',d:3,
e:"Le report en avant illimité des déficits fiscaux à l'IS est plafonné à :",
r:[{t:"Il n'y a pas de plafond"},{t:"1 000 000 € + 50 % du bénéfice imposable excédant ce seuil",ok:true},{t:"500 000 € par exercice"},{t:"100 % du bénéfice imposable"}],
x:"Bonne réponse : 1 000 000 € + 50 % du bénéfice imposable excédant ce seuil. Depuis 2011, le report en avant des déficits à l'IS est limité à 1 M€ + 50 % du bénéfice imposable excédant ce million. Exemple : si le bénéfice est de 3 M€, la déduction maximale est 1 M€ + 50 % × 2 M€ = 2 M€. Le solde de déficit non imputé reste reportable indéfiniment."},

{id:401,prog:'LEGER',theme:'cl-gestion',d:3,
e:"Le coût moyen pondéré du capital (CMPC ou WACC) sert à :",
r:[{t:"Calculer le salaire moyen de l'entreprise"},{t:"Actualiser les flux de trésorerie futurs pour évaluer des investissements",ok:true},{t:"Fixer le taux d'intérêt des emprunts"},{t:"Calculer la valeur comptable des actifs"}],
x:"Bonne réponse : Actualiser les flux de trésorerie futurs pour évaluer des investissements. Le WACC (Weighted Average Cost of Capital) est le taux d'actualisation utilisé pour évaluer les investissements ou la valeur d'une entreprise. Il pondère le coût des fonds propres et le coût de la dette selon leur poids dans le financement. Un investissement est rentable si son TRI dépasse le WACC."},

{id:402,prog:'LEGER',theme:'cl-regl',d:2,
e:"Le transport de médicaments et produits pharmaceutiques par VUL nécessite :",
r:[{t:"Aucune réglementation spécifique"},{t:"Un agrément de l'ANSM et des conditions de transport adaptées (température, traçabilité)",ok:true},{t:"Uniquement un VUL fermé"},{t:"Le permis C obligatoirement"}],
x:"Bonne réponse : Un agrément de l'ANSM et des conditions de transport adaptées (température, traçabilité). Le transport de médicaments est réglementé par les Bonnes Pratiques de Distribution (BPD) de l'ANSM. Il requiert : des véhicules adaptés aux conditions de conservation (température dirigée si nécessaire), une traçabilité rigoureuse, des procédures d'urgence en cas de dommage, et dans certains cas un agrément spécifique."},

{id:403,prog:'LEGER',theme:'cl-social',d:1,
e:"La mutuelle d'entreprise (complémentaire santé) est obligatoire depuis :",
r:[{t:"2012"},{t:"2016",ok:true},{t:"2014"},{t:"2018"}],
x:"Bonne réponse : 2016. La généralisation de la complémentaire santé d'entreprise est entrée en vigueur le 1er janvier 2016 pour toutes les entreprises du secteur privé, quelle que soit leur taille. L'employeur doit prendre en charge au moins 50 % de la cotisation."},

{id:2001,prog:'LOURD',theme:'lo-civil',d:1,
e:"Un transporteur public routier de marchandises a l'obligation légale de s'assurer pour :",
r:[{t:"Les marchandises transportées pour tout type de dommages"},{t:"Les marchandises transportées pour les dommages consécutifs aux cas de force majeure"},{t:"Sa responsabilité civile dans le cadre de la circulation automobile",ok:true},{t:"Ses véhicules pour les cas de vol uniquement"}],
x:"Bonne réponse : Sa responsabilité civile dans le cadre de la circulation automobile. L'assurance RC automobile est obligatoire pour tout véhicule mis en circulation (art. L.211-1 du Code des assurances). En revanche, l'assurance des marchandises transportées (responsabilité du transporteur) n'est pas légalement obligatoire, bien que fortement recommandée."},

{id:2002,prog:'LOURD',theme:'lo-civil',d:2,
e:"Selon l'article L.132-8 du Code de commerce, le transporteur peut avoir une action directe en paiement de ses prestations à l'encontre :",
r:[{t:"Uniquement de l'expéditeur"},{t:"Uniquement du commissionnaire s'il est intervenu"},{t:"Uniquement du destinataire"},{t:"De l'expéditeur, du commissionnaire (s'il est intervenu) ou du destinataire",ok:true}],
x:"Bonne réponse : De l'expéditeur, du commissionnaire (s'il est intervenu) ou du destinataire. L'article L.132-8 du Code de commerce consacre l'action directe en paiement du transporteur. Le voiturier (transporteur) bénéficie d'un privilège sur la marchandise et peut agir directement contre l'expéditeur, le destinataire ou le commissionnaire de transport."},

{id:2003,prog:'LOURD',theme:'lo-civil',d:3,
e:"En cas de dommages à la livraison selon le contrat type 'général', le transporteur est tenu :",
r:[{t:"D'indemniser uniquement les dommages sur la valeur d'achat des marchandises"},{t:"D'indemniser tous les dommages justifiés dont il est responsable, dans la limite des plafonds",ok:true},{t:"De faire procéder au remplacement des objets perdus ou à la remise en état des avariés"},{t:"De vendre la marchandise pour indemniser le destinataire"}],
x:"Bonne réponse : D'indemniser tous les dommages justifiés dont il est responsable, dans la limite des plafonds. Le transporteur doit indemniser tous les dommages justifiés dont il est légalement tenu pour responsable. L'indemnisation est plafonnée par les contrats types (exprimés en €/kg) et ne peut dépasser la valeur réelle de la marchandise. Une déclaration de valeur permet d'augmenter ce plafond."},

{id:2004,prog:'LOURD',theme:'lo-civil',d:2,
e:"Selon le contrat type dit 'général', en l'absence de rendez-vous, le délai de mise à disposition du véhicule au chargement au-delà duquel des frais d'immobilisation peuvent être facturés est de :",
r:[{t:"1 heure"},{t:"2 heures",ok:true},{t:"3 heures"},{t:"4 heures"}],
x:"Bonne réponse : 2 heures. Selon le contrat type 'général', le transporteur dispose d'une franchise de 2 heures de mise à disposition au chargement (sans rendez-vous fixé). Au-delà, il peut facturer des frais d'immobilisation au tarif prévu."},

{id:2005,prog:'LOURD',theme:'lo-civil',d:1,
e:"Les coopératives d'entreprises de transport public routier de marchandises :",
r:[{t:"Sont obligatoirement inscrites au registre des commissionnaires de transport"},{t:"Ne sont pas inscrites au registre des entreprises de transport"},{t:"Sont inscrites au registre des entreprises de transport",ok:true},{t:"Ne sont pas inscrites au registre du commerce et des sociétés"}],
x:"Bonne réponse : Sont inscrites au registre des entreprises de transport. Les coopératives de transporteurs exercent leur activité de transport pour le compte de leurs membres. Elles doivent être inscrites au registre des entreprises de transport (RNET) comme toute entreprise de transport public routier."},

{id:2006,prog:'LOURD',theme:'lo-civil',d:2,
e:"La licence de transport intérieur (LTI) a une durée de validité maximale de :",
r:[{t:"3 ans"},{t:"5 ans"},{t:"7 ans"},{t:"10 ans",ok:true}],
x:"Bonne réponse : 10 ans. La licence de transport intérieur (LTI) et la licence communautaire de transport ont une durée de validité maximale de 10 ans. Elles peuvent être retirées en cas de non-respect des conditions d'accès à la profession."},

{id:2007,prog:'LOURD',theme:'lo-civil',d:3,
e:"Le document de suivi en transport routier de marchandises est destiné à :",
r:[{t:"Récapituler toutes les opérations prévues et non prévues effectuées par le conducteur"},{t:"Suivre en temps réel le trajet de la marchandise en cas de sous-traitance multiple"},{t:"Suivre le temps de conduite et d'autres travaux du conducteur"},{t:"Suivre un envoi en cas de fractionnement d'un lot",ok:true}],
x:"Bonne réponse : Suivre un envoi en cas de fractionnement d'un lot. Le document de suivi est utilisé pour les envois fractionnés ou groupés. Il permet de suivre les différentes parties d'un envoi depuis l'expéditeur jusqu'au destinataire, en cas de transbordement ou de groupage."},

{id:2008,prog:'LOURD',theme:'lo-civil',d:2,
e:"La rubrique de la liasse fiscale au regard de laquelle s'apprécie la condition de capacité financière pour l'exercice de la profession est celle :",
r:[{t:"Du chiffre d'affaires hors taxes"},{t:"Du résultat d'exploitation"},{t:"Des capitaux propres",ok:true},{t:"De l'actif immobilisé"}],
x:"Bonne réponse : Des capitaux propres. La capacité financière est appréciée sur la base des capitaux propres de l'entreprise, tels qu'ils ressortent du bilan comptable (liasse fiscale). Le montant minimum est déterminé en fonction du nombre de véhicules exploités."},

{id:2009,prog:'LOURD',theme:'lo-civil',d:1,
e:"Tout changement modifiant la situation de l'entreprise inscrite au registre des transporteurs doit être porté à la connaissance du préfet de région dans un délai de :",
r:[{t:"8 jours"},{t:"15 jours"},{t:"30 jours",ok:true},{t:"60 jours"}],
x:"Bonne réponse : 30 jours. Tout changement substantiel (changement de dirigeant, de gestionnaire de transport, de parc de véhicules, de forme juridique…) doit être déclaré auprès de la DREAL dans un délai de 30 jours."},

{id:2010,prog:'LOURD',theme:'lo-civil',d:2,
e:"Le contrat type 'sous-traitance' s'applique entre :",
r:[{t:"Le groupeur et le dégroupeur"},{t:"L'organisateur de transport et l'expéditeur"},{t:"Un transporteur et le transporteur public qu'il a affrété",ok:true},{t:"Le transporteur et le destinataire"}],
x:"Bonne réponse : Un transporteur et le transporteur public qu'il a affrété. Le contrat type de sous-traitance s'applique aux relations entre un donneur d'ordre (transporteur principal ou commissionnaire) et un transporteur sous-traitant (affrété). Il régit notamment les conditions de prix, de responsabilité et les obligations des parties."},

{id:2011,prog:'LOURD',theme:'lo-civil',d:3,
e:"Le délai de forclusion tel que défini par l'article L.133-3 du Code de commerce pour les marchandises transportées est de :",
r:[{t:"2 jours non fériés suivant la réception"},{t:"3 jours non fériés suivant la réception",ok:true},{t:"7 jours non fériés suivant la réception"},{t:"21 jours suivant la réception"}],
x:"Bonne réponse : 3 jours non fériés suivant la réception. L'article L.133-3 du Code de commerce prévoit que le destinataire qui a reçu la marchandise sans réserves perd son droit d'agir contre le transporteur, à moins qu'il n'envoie une protestation motivée dans les 3 jours non fériés suivant la réception."},

{id:2012,prog:'LOURD',theme:'lo-civil',d:2,
e:"Les restrictions de circulation du samedi 22h au dimanche 22h concernent les véhicules de transport routier de marchandises dont le PTAC (Poids Total Autorisé en Charge) excède :",
r:[{t:"3,5 tonnes"},{t:"6 tonnes"},{t:"7,5 tonnes",ok:true},{t:"12 tonnes"}],
x:"Bonne réponse : 7,5 tonnes. Les restrictions de circulation du week-end s'appliquent aux véhicules de transport de marchandises de plus de 7,5 tonnes de PTAC (sauf dérogations). En été, la restriction est également applicable le samedi de 7h à 19h pour les véhicules >7,5t."},

{id:2013,prog:'LOURD',theme:'lo-social',d:1,
e:"Selon le règlement (CE) n°561/2006, un conducteur doit observer une pause d'au moins 45 minutes après un temps de conduite de :",
r:[{t:"4 heures"},{t:"4 heures 30 minutes",ok:true},{t:"4 heures 45 minutes"},{t:"5 heures"}],
x:"Bonne réponse : 4 heures 30 minutes. Selon le règlement 561/2006, après 4h30 de conduite continue (ou accumulée), le conducteur doit prendre une pause d'au moins 45 minutes avant de reprendre la conduite. Cette pause peut être fractionnée en une première partie de 15 min puis une de 30 min."},

{id:2014,prog:'LOURD',theme:'lo-social',d:2,
e:"Selon le règlement (CE) n°561/2006, la pause de conduite peut être :",
r:[{t:"Considérée comme du repos journalier"},{t:"Fractionnée en 4 périodes de 10 minutes"},{t:"Fractionnée en deux périodes : 15 minutes puis 30 minutes",ok:true},{t:"Fractionnée en deux périodes : 30 minutes puis 15 minutes"}],
x:"Bonne réponse : Fractionnée en deux périodes : 15 minutes puis 30 minutes. La pause de 45 minutes peut être fractionnée en deux parties prises dans l'ordre suivant : une première période de 15 minutes minimum, puis une seconde de 30 minutes minimum. L'ordre est impératif : 15 min d'abord, 30 min ensuite."},

{id:2015,prog:'LOURD',theme:'lo-social',d:1,
e:"Selon le règlement (CE) n°561/2006, la durée de conduite journalière ne doit pas dépasser :",
r:[{t:"4 heures 30"},{t:"8 heures"},{t:"9 heures, pouvant être portée à 10 heures 2 fois par semaine",ok:true},{t:"10 heures, pouvant être portée à 12 heures consécutives 2 fois par semaine"}],
x:"Bonne réponse : 9 heures, pouvant être portée à 10 heures 2 fois par semaine. La durée maximale de conduite journalière est de 9 heures. Elle peut être portée à 10 heures maximum mais pas plus de 2 fois par semaine civile. La durée hebdomadaire ne peut dépasser 56 heures."},

{id:2016,prog:'LOURD',theme:'lo-social',d:2,
e:"Selon le règlement (CE) n°561/2006, la durée maximale de conduite par période de 2 semaines consécutives est de :",
r:[{t:"86 heures"},{t:"90 heures",ok:true},{t:"92 heures"},{t:"96 heures"}],
x:"Bonne réponse : 90 heures. Le règlement 561/2006 fixe une double limite : 56 heures maximum par semaine ET 90 heures maximum sur 2 semaines consécutives. Ces deux limites doivent être respectées simultanément."},

{id:2017,prog:'LOURD',theme:'lo-social',d:3,
e:"Selon le règlement (CE) n°561/2006, en cas de fractionnement du repos journalier, la durée minimale de la première fraction doit être d'au moins :",
r:[{t:"30 minutes"},{t:"1 heure"},{t:"2 heures"},{t:"3 heures",ok:true}],
x:"Bonne réponse : 3 heures. Lorsque le repos journalier normal (11 heures) est fractionné, il doit être pris en deux parties : la première période d'au moins 3 heures consécutives et la seconde d'au moins 9 heures. Le repos total fractionné est donc de 12 heures minimum."},

{id:2018,prog:'LOURD',theme:'lo-social',d:2,
e:"Le temps de service d'un conducteur grand routier (conduite exclusive de véhicules >3,5t) est limité à :",
r:[{t:"13 heures par jour maximum"},{t:"48 heures hebdomadaires en moyenne sur une période de 12 semaines",ok:true},{t:"56 heures maximum sur une semaine isolée"},{t:"11 heures maximum par jour avec possibilité de 12h30"}],
x:"Bonne réponse : 48 heures hebdomadaires en moyenne sur une période de 12 semaines. Le temps de service (temps de conduite + autres travaux + disponibilités) d'un conducteur grand routier est limité à 48 heures hebdomadaires en moyenne sur 12 semaines (ou 4 mois par accord). La durée maximale sur une semaine isolée est de 60 heures."},

{id:2019,prog:'LOURD',theme:'lo-social',d:1,
e:"L'intervalle maximal entre deux téléchargements des données de la carte d'un conducteur pour tachygraphe numérique est de :",
r:[{t:"16 jours calendaires"},{t:"28 jours calendaires",ok:true},{t:"60 jours calendaires"},{t:"90 jours calendaires"}],
x:"Bonne réponse : 28 jours calendaires. Selon l'arrêté du 6 juillet 2005, les données de la carte conducteur doivent être téléchargées au moins tous les 28 jours calendaires. Les données de l'unité embarquée (appareil) doivent être téléchargées au moins tous les 90 jours."},

{id:2020,prog:'LOURD',theme:'lo-social',d:2,
e:"La carte 'entreprise' associée au tachygraphe numérique permet :",
r:[{t:"La conduite d'un véhicule équipé d'un tachygraphe numérique"},{t:"La conduite et le téléchargement des données de l'appareil"},{t:"Le téléchargement des données enregistrées dans les tachygraphes numériques",ok:true},{t:"L'étalonnage du tachygraphe numérique"}],
x:"Bonne réponse : Le téléchargement des données enregistrées dans les tachygraphes numériques. La carte entreprise permet uniquement le téléchargement (lecture) des données enregistrées dans la mémoire des tachygraphes numériques. La carte conducteur est nécessaire pour conduire. La carte atelier permet l'étalonnage."},

{id:2021,prog:'LOURD',theme:'lo-social',d:3,
e:"Un conducteur qui prend 7 repos journaliers hors domicile par mois et dont la journée comprend : 7h de conduite, 1h d'autres travaux, 2h d'attente et 1h30 de pause-repas. Son temps de service est de :",
r:[{t:"9 heures"},{t:"10 heures",ok:true},{t:"10 heures 30"},{t:"11 heures 30"}],
x:"Bonne réponse : 10 heures. Le temps de service = temps de conduite + autres travaux + disponibilités (attentes). Soit : 7h + 1h + 2h = 10 heures. Les pauses et temps de repas ne sont pas comptabilisés dans le temps de service."},

{id:2022,prog:'LOURD',theme:'lo-social',d:2,
e:"Sauf faute grave, le licenciement d'un conducteur d'une entreprise de transport ayant une ancienneté entre 6 mois et 2 ans donne droit à un délai-congé minimum de :",
r:[{t:"1 semaine"},{t:"1 mois",ok:true},{t:"2 mois"},{t:"3 mois"}],
x:"Bonne réponse : 1 mois. Selon la convention collective des transports routiers, le préavis pour un conducteur ayant entre 6 mois et 2 ans d'ancienneté est de 1 mois. Il est de 2 mois entre 2 et 5 ans, et de 3 mois au-delà de 5 ans."},

{id:2023,prog:'LOURD',theme:'lo-social',d:1,
e:"La durée de validité du certificat de formation (carte CQC - Certificat de Qualification du Conducteur) des conducteurs de véhicules de marchandises dangereuses en citerne est de :",
r:[{t:"3 ans"},{t:"4 ans"},{t:"5 ans",ok:true},{t:"6 ans"}],
x:"Bonne réponse : 5 ans. Le certificat ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) du conducteur est valable 5 ans. Pour le conserver, le conducteur doit suivre une formation de recyclage dans les 12 mois précédant l'expiration."},

{id:2024,prog:'LOURD',theme:'lo-social',d:2,
e:"L'usage de pneumatiques rechapés est :",
r:[{t:"Interdit sur tous les essieux-avant des véhicules à moteur",ok:true},{t:"Autorisé sur tous les essieux"},{t:"Interdit pour les livraisons urbaines uniquement"},{t:"Interdit uniquement en période hivernale"}],
x:"Bonne réponse : Interdit sur tous les essieux-avant des véhicules à moteur. L'usage de pneumatiques rechapés est interdit sur l'essieu directeur (avant) des véhicules à moteur, pour des raisons de sécurité. Il est en revanche autorisé sur les essieux arrière moteurs et sur les essieux des remorques et semi-remorques."},

{id:2025,prog:'LOURD',theme:'lo-social',d:3,
e:"Avant d'affecter un conducteur à un camion isolé récent de plus de 7,5t de PTAC (Poids Total Autorisé en Charge), l'entreprise doit vérifier qu'il est titulaire :",
r:[{t:"Des permis C et CE, et de la carte conducteur tachygraphe en cours de validité"},{t:"Du permis C, de la CQC (Carte de Qualification du Conducteur) et de la carte conducteur tachygraphe en cours de validité",ok:true},{t:"Du permis C en cours de validité et de l'attestation de capacité professionnelle"},{t:"Du permis D et de la carte conducteur tachygraphe en cours de validité"}],
x:"Bonne réponse : Du permis C, de la CQC (Carte de Qualification du Conducteur) et de la carte conducteur tachygraphe en cours de validité. Pour conduire un camion isolé (>7,5t), le conducteur doit avoir : le permis C en cours de validité, la CQC (Carte de Qualification du Conducteur) valide (initiale ou renouvelée par FCO), et la carte conducteur pour le tachygraphe numérique."},

{id:2026,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le coût de revient kilométrique (CRK) d'un ensemble routier se calcule ainsi :",
r:[{t:"(Charges variables annuelles) / Kilométrage annuel"},{t:"(Charges fixes annuelles + Charges variables annuelles) / Kilométrage annuel",ok:true},{t:"(Charges fixes annuelles) / Nombre de jours d'exploitation"},{t:"Coût du carburant / Kilométrage annuel"}],
x:"Bonne réponse : (Charges fixes annuelles + Charges variables annuelles) / Kilométrage annuel. Le CRK = Total des charges annuelles (fixes + variables) / Kilométrage annuel. Les charges fixes comprennent : amortissements, salaires, assurances, structure. Les charges variables comprennent : carburant, entretien/pneus, péages, AdBlue."},

{id:2027,prog:'LOURD',theme:'lo-gestion',d:3,
e:"Les indices CNR (Comité National Routier) permettent à un transporteur de :",
r:[{t:"Fixer unilatéralement ses tarifs de transport"},{t:"Justifier des révisions tarifaires et insérer des clauses d'indexation dans ses contrats",ok:true},{t:"Obtenir un remboursement de TICPE (Taxe Intérieure de Consommation sur les Produits Énergétiques) majoré"},{t:"Calculer son résultat fiscal annuel"}],
x:"Bonne réponse : Justifier des révisions tarifaires et insérer des clauses d'indexation dans ses contrats. Le CNR publie mensuellement des indices de coûts (carburant, salaires, péages, matériel…) permettant aux transporteurs de : justifier des révisions tarifaires, insérer des clauses d'indexation dans leurs contrats, et comparer leurs propres coûts aux coûts sectoriels."},

{id:2028,prog:'LOURD',theme:'lo-gestion',d:2,
e:"La capacité d'autofinancement (CAF) d'une entreprise de transport sert principalement à :",
r:[{t:"Payer les salaires des conducteurs"},{t:"Rembourser les emprunts, financer les investissements et distribuer des dividendes",ok:true},{t:"Calculer l'impôt sur les sociétés dû"},{t:"Déterminer le montant des cotisations sociales"}],
x:"Bonne réponse : Rembourser les emprunts, financer les investissements et distribuer des dividendes. La CAF représente les ressources internes dégagées par l'activité. Elle permet de : rembourser les emprunts, financer de nouveaux investissements (renouvellement du parc), constituer des réserves et éventuellement distribuer des dividendes."},

{id:2029,prog:'LOURD',theme:'lo-gestion',d:3,
e:"Le taux de sous-traitance de l'activité de transport ne doit pas dépasser, pour un transporteur non inscrit au registre des commissionnaires :",
r:[{t:"10 % du chiffre d'affaires transport"},{t:"15 % du chiffre d'affaires transport"},{t:"20 % du chiffre d'affaires transport"},{t:"25 % du chiffre d'affaires transport",ok:true}],
x:"Bonne réponse : 25 % du chiffre d'affaires transport. Un transporteur non inscrit au registre des commissionnaires peut sous-traiter jusqu'à 25 % de son CA transport annuel pour faire face à des surcroîts temporaires d'activité. Au-delà, il commet une infraction réglementaire et doit s'inscrire comme commissionnaire."},

{id:2030,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le suramortissement (amortissement dérogatoire) pour les véhicules utilisant des carburants alternatifs permet :",
r:[{t:"De réduire la valeur d'achat du véhicule"},{t:"D'amortir le véhicule sur une durée plus longue"},{t:"De déduire fiscalement une charge d'amortissement supérieure à la dépréciation réelle",ok:true},{t:"D'obtenir un remboursement direct de l'État"}],
x:"Bonne réponse : De déduire fiscalement une charge d'amortissement supérieure à la dépréciation réelle. Le suramortissement permet de déduire fiscalement un amortissement supplémentaire (ex. 40 % du prix d'achat en plus de l'amortissement normal) pour les investissements dans des véhicules à énergies alternatives. Cela réduit la base imposable et donc l'IS."},

{id:2031,prog:'LOURD',theme:'lo-gestion',d:1,
e:"Le carburant B100 (Huile Végétale Pure - colza) présente comme principal inconvénient par rapport au gazole :",
r:[{t:"Un coût d'achat toujours plus élevé"},{t:"Des surcoûts d'entretien et des adaptations mécaniques spécifiques",ok:true},{t:"Une consommation réduite de 30 %"},{t:"Une interdiction de circulation dans les ZFE (Zones à Faibles Émissions)"}],
x:"Bonne réponse : Des surcoûts d'entretien et des adaptations mécaniques spécifiques. Le B100 (colza pur) nécessite des adaptations moteur spécifiques et une vidange supplémentaire annuelle, ce qui engendre des surcoûts d'entretien. La consommation est légèrement supérieure au gazole (+2 à 3 litres/100 km), mais les émissions de CO2 fossile sont très réduites."},

{id:2032,prog:'LOURD',theme:'lo-gestion',d:3,
e:"Dans le bilan fonctionnel, le retraitement du crédit-bail consiste à :",
r:[{t:"Ignorer le crédit-bail car ce n'est pas un bien propriété de l'entreprise"},{t:"Inscrire la valeur brute du bien en actif immobilisé et les engagements restants en emprunts",ok:true},{t:"Inscrire uniquement les loyers versés en charges d'exploitation"},{t:"Déduire les loyers restant à payer du résultat prévisionnel"}],
x:"Bonne réponse : Inscrire la valeur brute du bien en actif immobilisé et les engagements restants en emprunts. Le retraitement du crédit-bail en analyse financière consiste à : ajouter la valeur brute du bien en actif immobilisé (comme s'il était propriétaire) et ajouter les engagements restants du crédit-bail aux dettes financières. Cela donne une image plus fidèle de la structure financière."},

{id:2033,prog:'LOURD',theme:'lo-gestion',d:2,
e:"La formule du loyer mensuel en crédit-bail avec un taux de 1,36 % sur un véhicule de 110 000 € HT est de :",
r:[{t:"1 122 € HT"},{t:"1 496 € HT",ok:true},{t:"2 508 € HT"},{t:"3 680 € HT"}],
x:"Bonne réponse : 1 496 € HT. Loyer mensuel = Prix HT × taux = 110 000 × 1,36 % = 1 496 € HT/mois. Ce mode de calcul du crédit-bail est une méthode simplifiée consistant à appliquer directement le coefficient mensuel au prix d'achat."},

{id:2034,prog:'LOURD',theme:'lo-gestion',d:1,
e:"La valeur ajoutée (VA) d'une entreprise de transport se calcule ainsi :",
r:[{t:"Chiffre d'affaires − Achats de carburant"},{t:"Production vendue − Consommations intermédiaires (achats + sous-traitance + services externes)",ok:true},{t:"Chiffre d'affaires − Charges de personnel"},{t:"Excédent brut d'exploitation − Dotations aux amortissements"}],
x:"Bonne réponse : Production vendue − Consommations intermédiaires (achats + sous-traitance + services externes). VA = Production (CA ± variation de stocks) − Consommations intermédiaires. Dans le transport, les consommations intermédiaires comprennent notamment : carburant, sous-traitance transport, entretien, assurances, loyers de crédit-bail…"},

{id:2035,prog:'LOURD',theme:'lo-gestion',d:3,
e:"Le délai de paiement maximal légal pour les prestations de transport public routier de marchandises en France est de :",
r:[{t:"30 jours à compter de la date d'émission de la facture",ok:true},{t:"45 jours fin de mois"},{t:"60 jours calendaires"},{t:"90 jours pour les grandes entreprises"}],
x:"Bonne réponse : 30 jours à compter de la date d'émission de la facture. Depuis la loi de modernisation de l'économie (LME), le délai maximal de paiement pour les prestations de transport est de 30 jours à compter de la date d'émission de la facture. Des pénalités de retard sont dues automatiquement en cas de dépassement."},

{id:2036,prog:'LOURD',theme:'lo-regl',d:2,
e:"La FIMO (Formation Initiale Minimale Obligatoire) pour les conducteurs PL (Poids Lourds) dure :",
r:[{t:"35 heures (1 semaine)"},{t:"105 heures (3 semaines)"},{t:"140 heures (4 semaines)",ok:true},{t:"280 heures — uniquement pour les titres professionnels longs"}],
x:"Bonne réponse : 140 heures (4 semaines). La FIMO est une formation accélérée de 140 heures (4 semaines) dans un centre agréé, permettant d'obtenir la CQC initiale. La voie longue de 280 heures correspond aux titres professionnels (CAP conducteur, Titre Pro CTRMP/CTRMV) qui donnent une équivalence FIMO."},

{id:2037,prog:'LOURD',theme:'lo-regl',d:1,
e:"Le document de transport (lettre de voiture) doit accompagner la marchandise et être présenté lors des contrôles :",
r:[{t:"Uniquement sur autoroute"},{t:"Pendant tout le transport",ok:true},{t:"Uniquement pour les transports de plus de 100 km"},{t:"Uniquement si la marchandise dépasse 500 kg"}],
x:"Bonne réponse : Pendant tout le transport. La lettre de voiture doit accompagner la marchandise pendant tout le transport et être présentée à la demande des agents de contrôle (DREAL, gendarmerie, police). Elle constitue la preuve du contrat de transport."},

{id:2038,prog:'LOURD',theme:'lo-regl',d:3,
e:"Le PTAC (Poids Total Autorisé en Charge) d'un véhicule moteur à 3 essieux ne doit pas excéder :",
r:[{t:"12 tonnes"},{t:"19 tonnes"},{t:"26 tonnes",ok:true},{t:"32 tonnes"}],
x:"Bonne réponse : 26 tonnes. Le PTAC d'un véhicule moteur à 3 essieux est limité à 26 tonnes en France. Pour un véhicule à 2 essieux, il est de 19 tonnes. Le poids maximal d'un ensemble articulé à 5 essieux est de 44 tonnes."},

{id:2039,prog:'LOURD',theme:'lo-regl',d:2,
e:"La longueur maximale d'un ensemble routier (tracteur + semi-remorque) est de :",
r:[{t:"15 mètres"},{t:"16 mètres"},{t:"16,50 mètres",ok:true},{t:"18 mètres"}],
x:"Bonne réponse : 16,50 mètres. La longueur maximale d'un ensemble articulé (tracteur + semi-remorque) est de 16,50 mètres. Un train routier (porteur + remorque) peut atteindre 18,75 mètres. Les dimensions hors normes nécessitent une autorisation de transport exceptionnel."},

{id:2040,prog:'LOURD',theme:'lo-regl',d:2,
e:"Un véhicule poids lourd de plus de 12t de PTAC transportant des matières non dangereuses est limité sur autoroute à :",
r:[{t:"80 km/h"},{t:"90 km/h"},{t:"100 km/h",ok:true},{t:"110 km/h"}],
x:"Bonne réponse : 100 km/h. Les PL de plus de 3,5t sont limités à 80 km/h sur route ordinaire et 90 km/h sur route à chaussées séparées. Sur autoroute, la limitation est de 90 km/h pour les véhicules <12t et 100 km/h pour ceux de plus de 12t (ou avec de la marchandise dangereuse : 80 km/h)."},

{id:2041,prog:'LOURD',theme:'lo-regl',d:3,
e:"La longueur maximale d'un train routier (porteur + remorque) ne doit pas excéder :",
r:[{t:"16,50 mètres"},{t:"18 mètres"},{t:"18,75 mètres",ok:true},{t:"20 mètres"}],
x:"Bonne réponse : 18,75 mètres. La longueur maximale d'un train routier (véhicule à moteur + remorque) est de 18,75 mètres. La longueur maximale d'un ensemble articulé (tracteur + semi-remorque) est de 16,50 mètres."},

{id:2042,prog:'LOURD',theme:'lo-regl',d:2,
e:"La charge maximale autorisée par essieu isolé pour un ensemble de PTAC inférieur à 40 tonnes est de :",
r:[{t:"8 tonnes"},{t:"10 tonnes"},{t:"11,5 tonnes",ok:true},{t:"13 tonnes"}],
x:"Bonne réponse : 11,5 tonnes. La charge maximale par essieu isolé est de 11,5 tonnes pour un ensemble de PTAC <40 tonnes. Pour un ensemble de PTAC ≥40 tonnes, la charge peut être portée à 13 tonnes sur l'essieu moteur sous conditions."},

{id:2043,prog:'LOURD',theme:'lo-regl',d:1,
e:"La carte de conducteur pour tachygraphe numérique a une durée de validité de :",
r:[{t:"1 an"},{t:"3 ans"},{t:"5 ans",ok:true},{t:"10 ans"}],
x:"Bonne réponse : 5 ans. La carte conducteur pour tachygraphe numérique est valable 5 ans. Elle doit être renouvelée avant expiration. En cas d'impossibilité technique, le conducteur peut utiliser des feuilles d'enregistrement papier pendant 7 jours maximum."},

{id:2044,prog:'LOURD',theme:'lo-regl',d:3,
e:"Un chargement de grumes ou de pièces de grande longueur ne doit pas dépasser de plus de :",
r:[{t:"0,50 m à l'avant et 1 m à l'arrière"},{t:"1 m à l'avant et 2 m à l'arrière"},{t:"1 m à l'avant et 3 m à l'arrière",ok:true},{t:"3 m à l'arrière, aucun dépassement à l'avant toléré"}],
x:"Bonne réponse : 1 m à l'avant et 3 m à l'arrière. Pour les grumes et pièces de grande longueur, le dépassement autorisé est de 1 m à l'avant et 3 m à l'arrière du véhicule. Ces dépassements doivent être signalés par des dispositifs réflectorisants ou des panneaux."},

{id:2045,prog:'LOURD',theme:'lo-regl',d:2,
e:"La remorque d'un train routier dont le PMA (Poids Maximum Autorisé) est de 40 tonnes doit porter à l'arrière :",
r:[{t:"Deux disques de limitation à 60 et 80 km/h"},{t:"Deux disques de limitation à 80 et 90 km/h"},{t:"Trois disques de limitation à 60, 80 et 90 km/h",ok:true},{t:"Trois disques de limitation à 60, 70 et 80 km/h"}],
x:"Bonne réponse : Trois disques de limitation à 60, 80 et 90 km/h. La remorque d'un train routier de PMA ≥40 tonnes doit afficher à l'arrière trois disques de limitation de vitesse : 60 km/h (routes ordinaires), 80 km/h (routes à 2 chaussées séparées) et 90 km/h (autoroute). Ces disques doivent être bien lisibles."},

{id:2046,prog:'LOURD',theme:'lo-regl',d:2,
e:"Le transport d'un engin de travaux publics de 3,20 m de large nécessite :",
r:[{t:"Une autorisation individuelle de transport exceptionnel de 1ère catégorie",ok:true},{t:"Une autorisation individuelle de transport exceptionnel de 2ème catégorie"},{t:"Le respect d'un arrêté préfectoral portant Autorisation de Portée Locale (APL)"},{t:"Aucune autorisation particulière"}],
x:"Bonne réponse : Une autorisation individuelle de transport exceptionnel de 1ère catégorie. Un véhicule >3 m de large constitue un transport exceptionnel de 1ère catégorie (jusqu'à 3 m de large : APL - Autorisation de Portée Locale, entre 3 et 3,50 m : autorisation individuelle de 1ère catégorie). Au-delà de 3,50 m, c'est la 2ème catégorie."},

{id:2047,prog:'LOURD',theme:'lo-regl',d:1,
e:"La circulation des véhicules poids lourds transportant des marchandises dangereuses soumises à signalisation est interdite en fin de semaine :",
r:[{t:"De 22h le samedi à 22h le dimanche"},{t:"De 22h le samedi à 24h le dimanche"},{t:"De 12h le samedi à 24h le dimanche",ok:true},{t:"De 12h le samedi à 12h le dimanche"}],
x:"Bonne réponse : De 12h le samedi à 24h le dimanche. La circulation des PL transportant des marchandises dangereuses soumises à signalisation (panneaux orange) est interdite de 12h00 le samedi à 24h00 le dimanche (arrêté du 22 janvier 1992 modifié)."},

{id:2048,prog:'LOURD',theme:'lo-acces',d:1,
e:"La capacité financière minimale pour une entreprise de transport lourd (>3,5t) est de :",
r:[{t:"1 800 € pour le 1er véhicule et 900 € par véhicule supplémentaire"},{t:"9 000 € pour le 1er véhicule et 5 000 € par véhicule supplémentaire",ok:true},{t:"50 000 € quelle que soit la taille du parc"},{t:"100 000 € minimum imposés par la loi"}],
x:"Bonne réponse : 9 000 € pour le 1er véhicule et 5 000 € par véhicule supplémentaire. Pour le transport lourd (>3,5t), la capacité financière est de 9 000 € pour le 1er véhicule et 5 000 € par véhicule supplémentaire. Cette condition doit être satisfaite à tout moment de la vie de l'entreprise."},

{id:2049,prog:'LOURD',theme:'lo-acces',d:2,
e:"Pour être inscrite au registre des entreprises de transport, une SARL doit justifier de l'honorabilité professionnelle de :",
r:[{t:"Ses gérants et de la personne physique assurant la direction des transports",ok:true},{t:"Ses gérants obligatoirement majoritaires et du gestionnaire de transport"},{t:"Ses gérants uniquement"},{t:"Ses gérants obligatoirement minoritaires et du gestionnaire de transport"}],
x:"Bonne réponse : Ses gérants et de la personne physique assurant la direction des transports. L'honorabilité professionnelle doit être prouvée pour toutes les personnes ayant une responsabilité dans la direction de l'entreprise : les gérants (ou dirigeants) ET le gestionnaire de transport (ou directeur des transports), qu'il soit interne ou externe."},

{id:2050,prog:'LOURD',theme:'lo-acces',d:2,
e:"Si une entreprise de transport n'a pas de gestionnaire de transport interne, elle peut :",
r:[{t:"Exercer quand même sans gestionnaire de transport"},{t:"Faire appel à un gestionnaire de transport externe (personne physique mandatée)",ok:true},{t:"Utiliser la capacité professionnelle d'un associé retraité"},{t:"Se passer de la condition de capacité professionnelle"}],
x:"Bonne réponse : Faire appel à un gestionnaire de transport externe (personne physique mandatée). Si l'entreprise n'a pas de gestionnaire de transport interne (salarié ou dirigeant), elle peut faire appel à un gestionnaire de transport externe : une personne physique habilitée, liée à l'entreprise par un contrat de mandat. Ce gestionnaire ne peut gérer que 4 entreprises au maximum avec un total de 50 véhicules."},

{id:2051,prog:'LOURD',theme:'lo-acces',d:3,
e:"Le titre d'exploitation prouvant l'inscription d'une entreprise au registre électronique national des entreprises de transport (RNET) est :",
r:[{t:"Le K-bis délivré par le greffe du tribunal de commerce"},{t:"La licence de transport intérieur (LTI) ou la licence communautaire (LC)",ok:true},{t:"L'attestation de capacité professionnelle"},{t:"Le certificat d'inscription délivré par l'INSEE"}],
x:"Bonne réponse : La licence de transport intérieur (LTI) ou la licence communautaire (LC). L'inscription au RNET est matérialisée par la délivrance d'une licence de transport intérieur (LTI) pour le transport national, ou d'une licence communautaire (LC) pour le transport international dans l'UE. Ces titres sont délivrés par la DREAL."},

{id:2052,prog:'LOURD',theme:'lo-intl',d:1,
e:"La CMR (Convention relative au Contrat de transport international de Marchandises par Route) s'applique :",
r:[{t:"Uniquement aux transports entre la France et ses voisins directs"},{t:"À tout transport international de marchandises par route dont le lieu de prise en charge et le lieu de livraison sont dans deux pays différents signataires",ok:true},{t:"Uniquement aux transports avec des véhicules de plus de 3,5t"},{t:"Aux transports nationaux et internationaux de marchandises dangereuses"}],
x:"Bonne réponse : À tout transport international de marchandises par route dont le lieu de prise en charge et le lieu de livraison sont dans deux pays différents signataires. La Convention CMR s'applique à tout contrat de transport international de marchandises par route à titre onéreux lorsque le lieu de prise en charge de la marchandise et le lieu de livraison sont situés dans deux pays différents, dont l'un au moins est signataire de la Convention."},

{id:2053,prog:'LOURD',theme:'lo-intl',d:2,
e:"En transport international CMR (Convention relative au Contrat de transport international de Marchandises par Route), en cas de marchandises avariées apparentes à la livraison, le destinataire :",
r:[{t:"A 3 jours pour notifier ses réserves par écrit au transporteur"},{t:"Doit émettre des réserves écrites au moment même de la livraison"},{t:"A 7 jours non fériés pour notifier ses réserves par écrit au transporteur",ok:true},{t:"A 21 jours pour notifier ses réserves par écrit au transporteur"}],
x:"Bonne réponse : A 7 jours non fériés pour notifier ses réserves par écrit au transporteur. Selon la CMR, pour les dommages non apparents lors de la livraison, le délai est de 7 jours calendaires (non fériés) pour émettre des réserves écrites. Pour les dommages apparents, les réserves doivent être émises au moment de la livraison."},

{id:2054,prog:'LOURD',theme:'lo-intl',d:3,
e:"En transport international CMR (Convention relative au Contrat de transport international de Marchandises par Route), l'indemnité pour retard à la livraison ne peut pas dépasser :",
r:[{t:"La valeur de la marchandise"},{t:"La valeur de la marchandise plus le prix du transport"},{t:"Le prix du transport",ok:true},{t:"Deux fois le prix du transport"}],
x:"Bonne réponse : Le prix du transport. Selon la CMR, l'indemnité pour retard à la livraison est limitée au prix du transport. Si le transporteur est en dol ou faute inexcusable, la prescription passe de 1 an à 3 ans, et le plafond d'indemnisation peut être levé."},

{id:2055,prog:'LOURD',theme:'lo-intl',d:2,
e:"Un transporteur français charge des marchandises en France et les transporte jusqu'en Pologne en transit par l'Allemagne. Il doit détenir à bord :",
r:[{t:"Uniquement une autorisation bilatérale polonaise"},{t:"Une copie certifiée conforme de la licence communautaire et une lettre de voiture",ok:true},{t:"Une copie certifiée conforme de la licence communautaire et une autorisation bilatérale polonaise"},{t:"Un certificat d'inscription au registre et une lettre de voiture"}],
x:"Bonne réponse : Une copie certifiée conforme de la licence communautaire et une lettre de voiture. Pour un transport France-Pologne en transit par l'Allemagne, le transporteur français doit avoir : une copie certifiée conforme de la licence communautaire + la lettre de voiture CMR. L'ensemble du trajet (transit inclus) est couvert par la licence communautaire au sein de l'UE."},

{id:2056,prog:'LOURD',theme:'lo-intl',d:3,
e:"Suite à un transport entre la France et l'Allemagne, un trafic intérieur allemand vous est proposé. Vous pouvez l'effectuer grâce à :",
r:[{t:"Une autorisation de cabotage délivrée par la France"},{t:"Une autorisation de cabotage délivrée par l'Allemagne"},{t:"Une autorisation multilatérale FIT (Forum International des Transports)"},{t:"Votre copie certifiée conforme de la licence communautaire",ok:true}],
x:"Bonne réponse : Votre copie certifiée conforme de la licence communautaire. Le cabotage (transport national dans un pays étranger après un transport international entrant) est autorisé dans l'UE avec la licence communautaire, dans la limite de 3 opérations en 7 jours. Aucune autorisation bilatérale n'est requise au sein de l'UE."},

{id:2057,prog:'LOURD',theme:'lo-intl',d:2,
e:"L'attestation de conducteur est exigée lorsque le conducteur est ressortissant d'un État tiers à l'EEE (Espace Économique Européen) et effectue un transport international sous le couvert d'une :",
r:[{t:"Copie certifiée conforme de la licence de transport intérieur"},{t:"Copie certifiée conforme de la licence communautaire",ok:true},{t:"Autorisation multilatérale FIT (Forum International des Transports)"},{t:"Autorisation bilatérale"}],
x:"Bonne réponse : Copie certifiée conforme de la licence communautaire. L'attestation de conducteur est un document permettant à un ressortissant d'un pays tiers (non UE/EEE) d'être employé légalement comme conducteur dans l'UE. Elle est exigée lors des transports internationaux effectués sous couvert d'une licence communautaire."},

{id:2058,prog:'LOURD',theme:'lo-intl',d:2,
e:"La déclaration de détachement lors d'une opération de cabotage :",
r:[{t:"Est obligatoire lors d'un transport routier international classique"},{t:"Est obligatoire lors d'une opération de cabotage",ok:true},{t:"Concerne uniquement les conducteurs indépendants"},{t:"Est valable au maximum 24 mois"}],
x:"Bonne réponse : Est obligatoire lors d'une opération de cabotage. La déclaration de détachement est obligatoire pour les opérations de cabotage (transport national dans un pays étranger). Elle se fait sur la plateforme IMI (Internal Market Information) avant le début du détachement. Les règles du pays d'accueil (salaire minimum, durée du travail) s'appliquent alors."},

{id:2059,prog:'LOURD',theme:'lo-intl',d:3,
e:"Le carnet TIR (Transit International Routier) est utilisé pour :",
r:[{t:"Les transports entre pays membres de l'UE (Union Européenne) uniquement"},{t:"Les transports sous scellés douaniers traversant des pays hors UE, pour éviter les contrôles douaniers aux frontières intermédiaires",ok:true},{t:"Les transports de marchandises dangereuses uniquement"},{t:"Les transports de plus de 44 tonnes en transport exceptionnel"}],
x:"Bonne réponse : Les transports sous scellés douaniers traversant des pays hors UE, pour éviter les contrôles douaniers aux frontières intermédiaires. Le carnet TIR est un document douanier international permettant le transport de marchandises sous scellés, en suspendant les droits et taxes dans les pays de transit. Il est principalement utilisé pour les transports traversant des pays hors UE (Turquie, Maroc, pays de la CEI...)."},

{id:2060,prog:'LOURD',theme:'lo-intl',d:2,
e:"La CMR (Convention relative au Contrat de transport international de Marchandises par Route) : la lettre de voiture internationale est établie par :",
r:[{t:"Le transporteur obligatoirement lors du chargement"},{t:"L'expéditeur dès la conclusion du contrat de vente"},{t:"Le transporteur dès réception de l'ordre de transport"},{t:"L'expéditeur ou le transporteur sous la responsabilité de l'expéditeur",ok:true}],
x:"Bonne réponse : L'expéditeur ou le transporteur sous la responsabilité de l'expéditeur. Selon la CMR, la lettre de voiture est établie par l'expéditeur ou par le transporteur agissant sous la responsabilité de l'expéditeur. Elle est établie en 3 exemplaires minimum : 1 pour l'expéditeur, 1 accompagne la marchandise (pour le destinataire), 1 conservé par le transporteur."},

{id:2061,prog:'LOURD',theme:'lo-intl',d:1,
e:"Lors d'un transport France-Allemagne avec tracteur français et semi-remorque immatriculée en Belgique, l'ensemble articulé doit être couvert par :",
r:[{t:"La licence communautaire française uniquement"},{t:"La licence communautaire belge uniquement"},{t:"La licence communautaire française et la licence communautaire belge"},{t:"La licence communautaire française (tracteur) — la semi-remorque n'a pas besoin de licence",ok:true}],
x:"Bonne réponse : La licence communautaire française (tracteur) — la semi-remorque n'a pas besoin de licence. La licence communautaire est délivrée au transporteur, pas au véhicule. Le transporteur français utilisant son tracteur (propriété française) avec une semi-remorque étrangère est couvert par sa propre licence communautaire française pour l'ensemble du transport."},

{id:2062,prog:'LOURD',theme:'lo-social',d:1,
e:"La FCO (Formation Continue Obligatoire de Sécurité) pour les conducteurs PL (Poids Lourds) dure :",
r:[{t:"1 jour (7 heures)"},{t:"2 jours (14 heures)"},{t:"5 jours (35 heures)",ok:true},{t:"10 jours (70 heures)"}],
x:"Bonne réponse : 5 jours (35 heures). La FCO dure 35 heures (5 jours) et doit être réalisée tous les 5 ans pour maintenir la CQC (Carte de Qualification du Conducteur) valide. Elle peut être fractionnée sur plusieurs semaines dans certaines conditions."},

{id:2063,prog:'LOURD',theme:'lo-social',d:3,
e:"En RSE (Réglementation Sociale Européenne), le repos hebdomadaire normal est de :",
r:[{t:"24 heures consécutives"},{t:"36 heures consécutives"},{t:"45 heures consécutives",ok:true},{t:"56 heures consécutives"}],
x:"Bonne réponse : 45 heures consécutives. Le repos hebdomadaire normal est de 45 heures consécutives minimum. Il peut être réduit à 24 heures (repos réduit) une fois sur deux semaines, à condition de récupérer la réduction dans les 3 semaines suivantes."},

{id:2064,prog:'LOURD',theme:'lo-social',d:2,
e:"Un salarié en situation de danger grave et imminent pour sa vie peut exercer :",
r:[{t:"Uniquement son droit d'alerte"},{t:"Ses droits d'alerte et de retrait",ok:true},{t:"Être sanctionné si le danger n'est pas prouvé"},{t:"Saisir directement le conseil de prud'hommes"}],
x:"Bonne réponse : Ses droits d'alerte et de retrait. Le droit de retrait (art. L.4131-1 du Code du travail) permet à un salarié de se retirer d'une situation de danger grave et imminent. Il doit simultanément exercer son droit d'alerte en informant son employeur ou son représentant."},

{id:2065,prog:'LOURD',theme:'lo-regl',d:2,
e:"La copie certifiée conforme de la licence communautaire est obligatoire pour les véhicules de PTAC (Poids Total Autorisé en Charge) supérieur à :",
r:[{t:"3,5 tonnes",ok:true},{t:"6 tonnes"},{t:"7,5 tonnes"},{t:"12 tonnes"}],
x:"Bonne réponse : 3,5 tonnes. La copie certifiée conforme de la licence communautaire est obligatoire dans le véhicule pendant tout le transport public de marchandises pour compte d'autrui avec des véhicules de plus de 3,5t de PTAC."},

{id:2066,prog:'LOURD',theme:'lo-regl',d:1,
e:"L'hayon élévateur d'un camion doit faire l'objet d'une vérification obligatoire tous les :",
r:[{t:"3 mois"},{t:"6 mois",ok:true},{t:"12 mois"},{t:"24 mois"}],
x:"Bonne réponse : 6 mois. Les hayons élévateurs, grues auxiliaires et chariots élévateurs embarqués font l'objet d'une vérification obligatoire tous les 6 mois par un technicien qualifié ou un organisme agréé."},

{id:2067,prog:'LOURD',theme:'lo-civil',d:2,
e:"La CTSA (Commission Territoriale des Sanctions Administratives) émet un avis préalablement à :",
r:[{t:"Toute sanction pénale pour infractions délictuelles des conducteurs"},{t:"Toute décision préfectorale de sanctions pour infractions à la réglementation des transports et sociale",ok:true},{t:"Toute décision d'autorisation d'exercer la profession"},{t:"Toute décision du conseil de prud'hommes"}],
x:"Bonne réponse : Toute décision préfectorale de sanctions pour infractions à la réglementation des transports et sociale. La CTSA émet un avis consultatif préalable aux décisions préfectorales de sanctions administratives à l'encontre des entreprises de transport pour des infractions à la réglementation des transports et à la réglementation sociale applicable."},

{id:2068,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le pied de facture d'indexation du carburant dans un contrat de transport sert à :",
r:[{t:"Fixer définitivement le prix du transport"},{t:"Répercuter automatiquement les variations du carburant sur la facture",ok:true},{t:"Calculer la TICPE (Taxe Intérieure de Consommation sur les Produits Énergétiques) récupérable"},{t:"Déterminer le coût de revient kilométrique"}],
x:"Bonne réponse : Répercuter automatiquement les variations du carburant sur la facture. Le pied de facture d'indexation carburant est une clause permettant d'ajuster le prix du transport selon la variation mensuelle du prix du gazole (indices CNR). Il protège le transporteur contre les hausses de prix de l'énergie."},

{id:2069,prog:'LOURD',theme:'lo-gestion',d:3,
e:"Une trésorerie nette négative dans un bilan signifie :",
r:[{t:"Que l'entreprise est en faillite imminente"},{t:"Que le FRNG (Fonds de Roulement Net Global) est insuffisant pour couvrir le BFR (Besoin en Fonds de Roulement)",ok:true},{t:"Que le chiffre d'affaires est trop faible"},{t:"Que les capitaux propres sont négatifs"}],
x:"Bonne réponse : Que le FRNG (Fonds de Roulement Net Global) est insuffisant pour couvrir le BFR (Besoin en Fonds de Roulement). La trésorerie nette = FRNG − BFR. Une trésorerie négative signifie que le FRNG ne couvre pas le BFR. L'entreprise doit recourir à des financements à court terme (découvert, escompte) pour financer son cycle d'exploitation."},

{id:2070,prog:'LOURD',theme:'lo-intl',d:2,
e:"En CMR (Convention relative au Contrat de transport international de Marchandises par Route), l'indemnité en cas de perte ou d'avarie est calculée d'après :",
r:[{t:"Le prix de vente au lieu de livraison"},{t:"La valeur déclarée dans la lettre de voiture"},{t:"La valeur au lieu et à la date de prise en charge",ok:true},{t:"Le prix d'achat plus les frais de transport"}],
x:"Bonne réponse : La valeur au lieu et à la date de prise en charge. Selon la CMR, l'indemnité est calculée d'après la valeur de la marchandise au lieu et à la date de la prise en charge. Le plafond est de 8,33 DTS/kg brut. Une déclaration de valeur dans la lettre de voiture permet d'augmenter ce plafond."},

{id:2071,prog:'LOURD',theme:'lo-intl',d:1,
e:"Pour s'inscrire au régime TIR (Transit International Routier), une entreprise française doit demander un certificat d'agrément auprès de :",
r:[{t:"La DREAL (Direction Régionale de l'Environnement, de l'Aménagement et du Logement)"},{t:"L'AFTRI (Association Française des Transporteurs Routiers Internationaux)",ok:true},{t:"Le service des douanes"},{t:"Le service des mines"}],
x:"Bonne réponse : L'AFTRI (Association Française des Transporteurs Routiers Internationaux). Pour bénéficier du régime TIR, l'entreprise française obtient un certificat d'agrément auprès de l'AFTRI, association garante française agréée par les douanes nationales."},

{id:2072,prog:'LOURD',theme:'lo-regl',d:2,
e:"Un véhicule peut être équipé de pneumatiques de structures différentes lorsqu'ils sont montés sur :",
r:[{t:"Un même essieu"},{t:"Un jumelage"},{t:"L'essieu directeur"},{t:"Des essieux différents",ok:true}],
x:"Bonne réponse : Des essieux différents. Des pneus de structures ou sculptures différentes sont autorisés sur des essieux différents. Sur un même essieu (ou en jumelage), les pneus doivent être identiques en structure et dimensions."},

{id:2073,prog:'LOURD',theme:'lo-civil',d:3,
e:"Lors d'un contrôle en Belgique d'un ensemble routier français de 40 tonnes, le conducteur doit présenter obligatoirement :",
r:[{t:"L'autorisation d'exercer la profession délivrée par la DREAL (Direction Régionale de l'Environnement, de l'Aménagement et du Logement)"},{t:"L'extrait K-bis justifiant l'inscription au RCS (Registre du Commerce et des Sociétés)"},{t:"La copie certifiée conforme de la licence communautaire",ok:true},{t:"Le contrat de travail du conducteur"}],
x:"Bonne réponse : La copie certifiée conforme de la licence communautaire. Lors d'un contrôle routier dans un pays de l'UE, le document administratif à présenter est la copie certifiée conforme de la licence communautaire. C'est le titre d'autorisation d'exercer le transport international dans l'UE."},

{id:2074,prog:'LOURD',theme:'lo-social',d:2,
e:"Selon la RSE (Réglementation Sociale Européenne), l'intervalle maximal entre deux téléchargements des données de l'unité embarquée (tachygraphe) est de :",
r:[{t:"28 jours"},{t:"60 jours"},{t:"90 jours",ok:true},{t:"120 jours"}],
x:"Bonne réponse : 90 jours. Les données de l'unité embarquée (le tachygraphe) doivent être téléchargées au moins tous les 90 jours calendaires. Les données de la carte conducteur doivent être téléchargées tous les 28 jours."},

{id:2075,prog:'LOURD',theme:'lo-regl',d:1,
e:"La largeur maximale d'une semi-remorque standard de transport de marchandises ne doit pas excéder :",
r:[{t:"2,40 mètres"},{t:"2,50 mètres"},{t:"2,55 mètres",ok:true},{t:"2,60 mètres"}],
x:"Bonne réponse : 2,55 mètres. La largeur maximale d'un véhicule de transport de marchandises est de 2,55 mètres (toutes saillies comprises). Exception : les véhicules isothermes (transport sous température dirigée) peuvent avoir une largeur maximale de 2,60 mètres."},

{id:2076,prog:'LOURD',theme:'lo-civil',d:2,
e:"Selon l'article L.3222-5 du Code des transports, toute prestation annexe non prévue au contrat de transport :",
r:[{t:"Autorise le transporteur à renégocier l'ensemble du contrat"},{t:"N'ouvre aucun droit à un complément de rémunération"},{t:"Ouvre droit à un complément de rémunération pour le transporteur",ok:true},{t:"Autorise le transporteur à mettre fin au contrat"}],
x:"Bonne réponse : Ouvre droit à un complément de rémunération pour le transporteur. Selon l'article L.3222-5 du Code des transports, toute prestation annexe non prévue initialement (déchargement non convenu, attente anormale, prestations complémentaires...) donne droit à un complément de rémunération pour le transporteur."},

{id:2077,prog:'LOURD',theme:'lo-civil',d:2,
e:"Selon la CMR (Convention relative au Contrat de transport international de Marchandises par Route), le délai de prescription pour une action ordinaire est de :",
r:[{t:"6 mois"},{t:"1 an",ok:true},{t:"2 ans"},{t:"3 ans — sauf en cas de faute inexcusable"}],
x:"Bonne réponse : 1 an. Le délai de prescription ordinaire en CMR est d'1 an à compter de la livraison ou de la date prévue de livraison. En cas de dol ou de faute inexcusable du transporteur, le délai est porté à 3 ans."},

{id:2078,prog:'LOURD',theme:'lo-civil',d:1,
e:"La lettre de voiture CMR (Convention relative au Contrat de transport international de Marchandises par Route) est établie en :",
r:[{t:"2 exemplaires"},{t:"3 exemplaires originaux",ok:true},{t:"4 exemplaires"},{t:"Autant d'exemplaires que de parties"}],
x:"Bonne réponse : 3 exemplaires originaux. La lettre de voiture CMR est établie en 3 exemplaires originaux : le 1er (rouge) est remis à l'expéditeur, le 2ème (bleu) accompagne la marchandise jusqu'au destinataire, le 3ème (vert) est conservé par le transporteur."},

{id:2079,prog:'LOURD',theme:'lo-regl',d:2,
e:"Pour un transport exceptionnel de 1ère catégorie (largeur entre 3 m et 3,50 m), l'autorisation requise est :",
r:[{t:"Une APL (Autorisation de Portée Locale) délivrée par le préfet"},{t:"Une autorisation individuelle délivrée par la DREAL (Direction Régionale de l'Environnement, de l'Aménagement et du Logement)",ok:true},{t:"Une autorisation du ministère des transports"},{t:"Une simple déclaration en préfecture"}],
x:"Bonne réponse : Une autorisation individuelle délivrée par la DREAL (Direction Régionale de l'Environnement, de l'Aménagement et du Logement). Un convoi dont la largeur dépasse 3 m constitue un transport exceptionnel de 1ère catégorie (entre 3 et 3,50 m) nécessitant une autorisation individuelle délivrée par la DREAL. Au-delà de 3,50 m, c'est la 2ème catégorie avec escorte."},

{id:2080,prog:'LOURD',theme:'lo-social',d:3,
e:"L'amplitude horaire maximale d'un conducteur grand routier sur une semaine est de :",
r:[{t:"48 heures"},{t:"56 heures"},{t:"60 heures",ok:true},{t:"72 heures"}],
x:"Bonne réponse : 60 heures. L'amplitude hebdomadaire maximale d'un conducteur grand routier est de 60 heures sur une semaine isolée. En moyenne sur 4 mois (ou 12 semaines), elle ne peut dépasser 48 heures hebdomadaires."},

{id:2081,prog:'LOURD',theme:'lo-gestion',d:2,
e:"L'excédent brut d'exploitation (EBE) d'une entreprise de transport est positif mais faible. Cela indique :",
r:[{t:"Que l'entreprise est très rentable"},{t:"Que l'entreprise génère suffisamment pour couvrir ses charges mais avec peu de marge",ok:true},{t:"Que l'entreprise ne peut pas investir"},{t:"Que l'entreprise est en cessation de paiement"}],
x:"Bonne réponse : Que l'entreprise génère suffisamment pour couvrir ses charges mais avec peu de marge. Un EBE positif mais faible signifie que l'entreprise génère une ressource d'exploitation mais insuffisante pour couvrir confortablement ses charges financières, ses amortissements et avoir un résultat net satisfaisant. Une vigilance s'impose sur la rentabilité à terme."},

{id:2082,prog:'LOURD',theme:'lo-civil',d:2,
e:"Le ratio de sous-traitance de transport de la SARL TRANSFRANC est de 18,5 % de son CA transport. Cette pratique est :",
r:[{t:"Illégale car elle dépasse 15 %"},{t:"Légale car elle reste en dessous du seuil de 25 %",ok:true},{t:"Légale uniquement si elle dispose d'une licence de commissionnaire"},{t:"Illégale car aucune sous-traitance n'est autorisée sans licence de commissionnaire"}],
x:"Bonne réponse : Légale car elle reste en dessous du seuil de 25 %. Un taux de sous-traitance de 18,5 % du CA transport est légal car il reste en dessous du seuil maximum de 25 % autorisé sans inscription au registre des commissionnaires de transport. Au-delà de 25 %, l'inscription comme commissionnaire serait nécessaire."},

{id:2083,prog:'LOURD',theme:'lo-regl',d:1,
e:"L'attestation de conducteur ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) est délivrée par :",
r:[{t:"L'organisme de formation agréé"},{t:"La préfecture du département de résidence"},{t:"La DREAL (Direction Régionale de l'Environnement, de l'Aménagement et du Logement)",ok:true},{t:"L'employeur du conducteur"}],
x:"Bonne réponse : La DREAL (Direction Régionale de l'Environnement, de l'Aménagement et du Logement). L'attestation de formation ADR du conducteur est délivrée par la DREAL après réussite aux examens théoriques et pratiques organisés en fin de formation dans un établissement agréé. La DREAL délivre également les licences de transport."},

{id:2084,prog:'LOURD',theme:'lo-social',d:2,
e:"Le FIMO (Formation Initiale Minimale Obligatoire) et la FCOS (Formation Continue Obligatoire de Sécurité) sont exigées pour les conducteurs de véhicules de marchandises de :",
r:[{t:"Plus de 3,5 tonnes de PTAC (Poids Total Autorisé en Charge)"},{t:"Plus de 3,5 tonnes de PTAC effectuant des transports pour compte d'autrui"},{t:"Plus de 3,5 tonnes de PTAC, qu'ils soient salariés ou indépendants",ok:true},{t:"Plus de 7,5 tonnes de PTAC uniquement"}],
x:"Bonne réponse : Plus de 3,5 tonnes de PTAC, qu'ils soient salariés ou indépendants. La CQC (obtenue par la FIMO puis maintenue par la FCOS) est obligatoire pour tous les conducteurs de véhicules >3,5t, qu'ils soient salariés ou travailleurs indépendants, effectuant des transports nationaux ou internationaux sur le territoire de l'UE."},

{id:2085,prog:'LOURD',theme:'lo-gestion',d:3,
e:"Dans l'analyse financière du bilan de la SARL TRANSFRANC, le FRNG (Fonds de Roulement Net Global) négatif signifie que :",
r:[{t:"L'entreprise est en faillite"},{t:"Les ressources stables ne couvrent pas l'actif immobilisé — déséquilibre financier structurel",ok:true},{t:"Les dettes à court terme sont inférieures à l'actif circulant"},{t:"Le chiffre d'affaires est insuffisant"}],
x:"Bonne réponse : Les ressources stables ne couvrent pas l'actif immobilisé — déséquilibre financier structurel. Un FRNG négatif signifie que l'actif immobilisé n'est pas entièrement financé par des ressources stables (capitaux propres + dettes à LT). L'entreprise finance une partie de ses investissements avec des ressources à court terme, ce qui constitue un déséquilibre financier potentiellement dangereux."},

{id:2086,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le cabotage routier au sein de l'UE (Union Européenne) est autorisé dans la limite de :",
r:[{t:"1 opération en 7 jours après un transport international"},{t:"3 opérations en 7 jours après un transport international entrant",ok:true},{t:"5 opérations en 7 jours"},{t:"Sans limitation après un transport international"}],
x:"Bonne réponse : 3 opérations en 7 jours après un transport international entrant. Selon le règlement (CE) n°1072/2009, le cabotage est limité à 3 opérations de transport national dans les 7 jours suivant le déchargement complet d'un transport international entrant. Après ces 3 opérations ou les 7 jours, le véhicule doit quitter le pays."},

{id:2087,prog:'LOURD',theme:'lo-civil',d:2,
e:"Dans un bilan, les immobilisations nettes représentent :",
r:[{t:"La valeur d'achat des biens"},{t:"La valeur d'achat diminuée des amortissements cumulés",ok:true},{t:"La valeur de revente estimée des biens"},{t:"Le montant restant à rembourser sur les emprunts"}],
x:"Bonne réponse : La valeur d'achat diminuée des amortissements cumulés. Les immobilisations nettes (ou valeur nette comptable - VNC) = Valeur brute d'acquisition - Amortissements cumulés. Elles représentent la valeur résiduelle des biens au bilan. À l'issue du plan d'amortissement, la VNC est nulle ou égale à la valeur résiduelle estimée."},

{id:2088,prog:'LOURD',theme:'lo-regl',d:3,
e:"Un véhicule de transport de marchandises de PTAC (Poids Total Autorisé en Charge) de 9 tonnes sur autoroute est limité à :",
r:[{t:"90 km/h"},{t:"100 km/h",ok:true},{t:"110 km/h"},{t:"130 km/h"}],
x:"Bonne réponse : 100 km/h. Les véhicules dont le PTAC est compris entre 3,5t et 12t sont limités à 100 km/h sur autoroute. Les véhicules de plus de 12t sont limités à 90 km/h. Les véhicules de moins de 3,5t suivent les mêmes limitations que les voitures particulières (130 km/h sur autoroute)."},

{id:2089,prog:'LOURD',theme:'lo-gestion',d:2,
e:"La capacité financière d'une entreprise de transport doit être satisfaite :",
r:[{t:"Uniquement lors de la création de l'entreprise"},{t:"Chaque année lors de la publication du bilan"},{t:"À tout moment de la vie de l'entreprise",ok:true},{t:"Uniquement lors d'une augmentation du parc de véhicules"}],
x:"Bonne réponse : À tout moment de la vie de l'entreprise. La condition de capacité financière est une obligation permanente : elle doit être satisfaite à tout moment de la vie de l'entreprise, pas seulement lors de la création ou de modifications du parc. Un contrôle peut être effectué à tout moment par la DREAL."},

{id:2090,prog:'LOURD',theme:'lo-social',d:1,
e:"Le certificat de travail remis à un salarié lors de son départ doit obligatoirement indiquer :",
r:[{t:"Le motif de la rupture du contrat"},{t:"Les dates d'entrée et de sortie et les emplois occupés",ok:true},{t:"Le montant du dernier salaire"},{t:"Une appréciation sur les qualités professionnelles"}],
x:"Bonne réponse : Les dates d'entrée et de sortie et les emplois occupés. Le certificat de travail doit mentionner les dates d'entrée et de sortie du salarié et la nature du ou des emplois occupés. Il ne doit pas comporter d'appréciations qualitatives ni le motif de rupture (ces mentions pourraient être discriminatoires)."},

{id:2091,prog:'LOURD',theme:'lo-regl',d:2,
e:"Lors d'un contrôle sur route d'un PL (Poids Lourd) effectuant du transport public, le conducteur doit présenter :",
r:[{t:"Son permis et son contrat de travail"},{t:"Son permis, sa CQC (Carte de Qualification du Conducteur), sa carte conducteur, la licence communautaire et la lettre de voiture",ok:true},{t:"Uniquement le permis de conduire et la lettre de voiture"},{t:"Le K-bis de l'entreprise et l'assurance du véhicule"}],
x:"Bonne réponse : Son permis, sa CQC (Carte de Qualification du Conducteur), sa carte conducteur, la licence communautaire et la lettre de voiture. Lors d'un contrôle routier, le conducteur de PL doit présenter : permis de conduire, CQC en cours de validité, carte conducteur tachygraphe, copie certifiée de la licence communautaire, lettre de voiture, données tachygraphe des 28 derniers jours."},

{id:2092,prog:'LOURD',theme:'lo-social',d:3,
e:"La durée de conservation minimale des disques d'enregistrement (tachygrammes papier) par l'entreprise de transport est de :",
r:[{t:"1 an"},{t:"2 ans"},{t:"3 ans"},{t:"5 ans",ok:true}],
x:"Bonne réponse : 5 ans. Les disques d'enregistrement (tachygrammes) et les données téléchargées du tachygraphe doivent être conservés par l'entreprise pendant 1 an. Cependant, pour les contrôles fiscaux et sociaux, il est conseillé de les conserver 5 ans."},

{id:2093,prog:'LOURD',theme:'lo-civil',d:2,
e:"La facture commerciale entre professionnels doit obligatoirement mentionner :",
r:[{t:"Uniquement le montant HT et TTC"},{t:"Le numéro SIREN du client"},{t:"La date d'échéance de paiement, les conditions d'escompte et les pénalités de retard",ok:true},{t:"Le numéro de TVA intracommunautaire uniquement pour les transports internationaux"}],
x:"Bonne réponse : La date d'échéance de paiement, les conditions d'escompte et les pénalités de retard. La facture professionnelle doit mentionner notamment : identification des parties, date, numéro de facture, description de la prestation, prix HT, taux et montant de TVA, montant TTC, date d'échéance, conditions d'escompte (même si non accordé), et taux des pénalités de retard."},

{id:2094,prog:'LOURD',theme:'lo-regl',d:1,
e:"Pour effectuer un transport national (France-France) avec un véhicule de plus de 3,5t de PTAC, le transporteur doit avoir à bord :",
r:[{t:"L'original de la licence de transport intérieur"},{t:"La copie certifiée conforme de la licence communautaire",ok:true},{t:"Une attestation provisoire délivrée par la DREAL"},{t:"L'original de la licence communautaire"}],
x:"Bonne réponse : La copie certifiée conforme de la licence communautaire. Pour le transport national (France-France) avec un véhicule >3,5t, le conducteur doit avoir à bord une copie certifiée conforme de la licence communautaire (et non l'original). La copie certifiée est propre à chaque véhicule."},

{id:2095,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le taux de vétusté du matériel de transport se calcule ainsi :",
r:[{t:"Valeur résiduelle / Valeur brute × 100"},{t:"Amortissements cumulés / Valeur brute × 100",ok:true},{t:"Valeur nette / Chiffre d'affaires × 100"},{t:"Charges d'entretien / Valeur brute × 100"}],
x:"Bonne réponse : Amortissements cumulés / Valeur brute × 100. Le taux de vétusté = Amortissements cumulés / Valeur brute × 100. Plus ce taux est élevé (proche de 100 %), plus le parc est ancien et amorti. Un taux supérieur à 70 % indique généralement un besoin de renouvellement important du parc."},

{id:2096,prog:'LOURD',theme:'lo-intl',d:3,
e:"Un conducteur français détaché pour effectuer du cabotage en Allemagne doit bénéficier du salaire minimum :",
r:[{t:"Français, son employeur étant français"},{t:"Allemand, car il travaille sur le territoire allemand",ok:true},{t:"Le plus faible entre les deux pays"},{t:"Négocié entre l'employeur et le conducteur"}],
x:"Bonne réponse : Allemand, car il travaille sur le territoire allemand. Lors d'un détachement (cabotage ou transport international), les règles du pays d'accueil s'appliquent, notamment pour le salaire minimum. En cabotage en Allemagne, le conducteur doit percevoir au moins le salaire minimum légal allemand pour les jours travaillés sur le territoire allemand."},

{id:2097,prog:'LOURD',theme:'lo-civil',d:1,
e:"Le donneur d'ordre fournit généralement au transporteur avant chaque transport :",
r:[{t:"Un document de suivi de cargaison"},{t:"Un ordre de mission interne"},{t:"Une lettre de voiture pré-renseignée",ok:true},{t:"Un bon de commande valant contrat signé"}],
x:"Bonne réponse : Une lettre de voiture pré-renseignée. Avant chaque transport, le donneur d'ordre fournit généralement au transporteur une lettre de voiture pré-renseignée (lieu de chargement, de livraison, nature de la marchandise, etc.). Le conducteur la complète et signe à la prise en charge de la marchandise."},

{id:2098,prog:'LOURD',theme:'lo-regl',d:3,
e:"L'inscription au registre des entreprises de transport (RNET) d'une entreprise non inscrite exerçant du transport public constitue :",
r:[{t:"Une simple irrégularité administrative"},{t:"Une contravention de 5ème classe"},{t:"Un délit passible d'emprisonnement et d'amende",ok:true},{t:"Un manquement sans sanction pénale"}],
x:"Bonne réponse : Un délit passible d'emprisonnement et d'amende. Exercer le transport public de marchandises sans être inscrit au RNET constitue un délit (art. L.3452-4 du Code des transports) passible d'une peine d'emprisonnement pouvant aller jusqu'à 1 an et d'une amende de 15 000 €, ainsi que l'immobilisation du véhicule."},

{id:2099,prog:'LOURD',theme:'lo-social',d:2,
e:"La durée maximale d'un CDD (Contrat à Durée Déterminée) en transport pour la période d'essai d'un conducteur routier est de :",
r:[{t:"1 semaine"},{t:"2 semaines"},{t:"1 mois non renouvelable",ok:true},{t:"2 mois renouvelables"}],
x:"Bonne réponse : 1 mois non renouvelable. Pour un conducteur routier embauché en CDD de 12 mois, la période d'essai est de 1 mois non renouvelable. Pour un CDD de 6 mois, elle est proportionnellement réduite. Ces durées peuvent être différentes selon la convention collective applicable."},

{id:2100,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le ratio d'indépendance financière d'une entreprise pour l'exercice 2022 avec 71 778 € de capitaux propres et 125 413 € de dettes financières est de :",
r:[{t:"0,29"},{t:"0,57",ok:true},{t:"1,75"},{t:"2,30"}],
x:"Bonne réponse : 0,57. Ratio d'indépendance financière = Capitaux propres / Dettes financières = 71 778 / 125 413 = 0,57. Ce ratio signifie que pour 1 € de dettes financières, l'entreprise dispose de 0,57 € de capitaux propres. Il est inférieur à 1, signalant une dépendance financière modérée."},

{id:2101,prog:'LOURD',theme:'lo-intl',d:2,
e:"La facture de transport entre la France et l'Allemagne adressée à un client allemand disposant d'un numéro de TVA intracommunautaire doit être établie :",
r:[{t:"Avec la TVA française à 20 %"},{t:"Avec la TVA allemande"},{t:"Hors taxe (TVA non applicable — autoliquidation)",ok:true},{t:"Avec la TVA du pays de livraison"}],
x:"Bonne réponse : Hors taxe (TVA non applicable — autoliquidation). Pour les prestations de transport intra-communautaires B2B (entre assujettis à la TVA), la facture est émise HT avec la mention 'Autoliquidation' ou 'Exonération article 44 de la directive TVA'. C'est l'acheteur (le client allemand) qui déclare et paie la TVA dans son pays."},

{id:2102,prog:'LOURD',theme:'lo-civil',d:3,
e:"La pèse axiale d'un véhicule lors d'un contrôle routier révèle une surcharge. Le coût de la pesée est supporté par :",
r:[{t:"L'autorité de contrôle dans tous les cas"},{t:"Le transporteur en infraction",ok:true},{t:"L'expéditeur de la marchandise"},{t:"Le destinataire de la marchandise"}],
x:"Bonne réponse : Le transporteur en infraction. Lorsqu'une infraction est constatée (surcharge axiale ou totale), les frais de pesée et de déplacement éventuel du véhicule sont à la charge du transporteur responsable. Si le véhicule est conforme, les frais sont à la charge de l'autorité ayant demandé la pesée."},

{id:2103,prog:'LOURD',theme:'lo-regl',d:2,
e:"La longueur de référence d'une semi-remorque affecte sa limitation de chargement. La longueur maximale de la surface de chargement d'une semi-remorque standard est de :",
r:[{t:"12 mètres"},{t:"13,5 mètres",ok:true},{t:"15 mètres"},{t:"16,5 mètres"}],
x:"Bonne réponse : 13,5 mètres. La semi-remorque standard a une longueur de plancher de chargement d'environ 13,6 à 13,8 mètres. La longueur totale de l'ensemble articulé est limitée à 16,5 mètres, le tracteur mesurant environ 2,5 à 3 mètres de l'avant jusqu'au point d'attelage."},

{id:2104,prog:'LOURD',theme:'lo-social',d:2,
e:"Le délai dont dispose le conducteur salarié pour obtenir de son employeur la copie des données téléchargées de sa carte conducteur est de :",
r:[{t:"Pas de délai légal — c'est à la discrétion de l'employeur"},{t:"48 heures à compter de la demande"},{t:"Sur demande, dans un délai raisonnable",ok:true},{t:"7 jours après la demande"}],
x:"Bonne réponse : Sur demande, dans un délai raisonnable. Selon la réglementation européenne et la convention collective des transports routiers, tout conducteur a le droit de demander à son employeur la copie des données de sa carte conducteur. L'employeur doit lui remettre dans un délai raisonnable."},

{id:2105,prog:'LOURD',theme:'lo-gestion',d:3,
e:"Le plan de trésorerie d'une entreprise de transport sur 12 mois permet notamment de :",
r:[{t:"Calculer le résultat fiscal de l'exercice"},{t:"Anticiper les périodes de déficit de trésorerie pour prendre les mesures adaptées",ok:true},{t:"Établir le bilan prévisionnel de l'exercice"},{t:"Planifier le renouvellement du parc de véhicules"}],
x:"Bonne réponse : Anticiper les périodes de déficit de trésorerie pour prendre les mesures adaptées. Le plan de trésorerie mensuel prévisible permet d'anticiper les flux de trésorerie (encaissements/décaissements) et d'identifier en avance les mois de tension. Cela permet de prendre des mesures : ligne de crédit, report de charges, négociation de délais avec les fournisseurs."},

{id:2106,prog:'LOURD',theme:'lo-intl',d:1,
e:"Les autorisations bilatérales de transport peuvent être utilisées pour des trafics routiers de marchandises entre la France et :",
r:[{t:"L'Allemagne (membre de l'UE)"},{t:"La Lituanie (membre de l'UE)"},{t:"Le Maroc (pays tiers)",ok:true},{t:"L'Espagne (membre de l'UE)"}],
x:"Bonne réponse : Le Maroc (pays tiers). Les autorisations bilatérales de transport s'utilisent pour les pays qui ne sont pas membres de l'UE et avec lesquels un accord bilatéral a été conclu (Maroc, Turquie, pays des Balkans non-UE...). Au sein de l'UE, la licence communautaire suffit."},

{id:2107,prog:'LOURD',theme:'cl-social',d:2,
e:"Le droit aux indemnités de grand déplacement pour un conducteur PL est conditionné par :",
r:[{t:"Tout déplacement hors de l'établissement"},{t:"Une distance minimale du domicile ou de l'établissement, selon la CCN",ok:true},{t:"Un déplacement à l'étranger uniquement"},{t:"L'accord du responsable hiérarchique"}],
x:"Bonne réponse : Une distance minimale du domicile ou de l'établissement, selon la CCN. Les indemnités de grand déplacement (repas, couchées) sont versées aux conducteurs lorsque les conditions de déplacement les empêchent de regagner leur domicile ou l'établissement, selon des critères de distance et de durée fixés par la Convention Collective Nationale des Transports Routiers."},

{id:2108,prog:'LOURD',theme:'lo-regl',d:2,
e:"La visite technique annuelle d'un PL est réalisée dans :",
r:[{t:"N'importe quel garage agréé"},{t:"Un centre de contrôle technique agréé PL (distinct des centres VL)",ok:true},{t:"La concession du constructeur"},{t:"Les services de la DREAL"}],
x:"Bonne réponse : Un centre de contrôle technique agréé PL (distinct des centres VL). Les contrôles techniques des PL (PTAC > 3,5t) sont réalisés dans des centres agréés spécifiquement équipés pour les véhicules lourds (bancs de freinage adaptés, fosse de visite…). Ces centres sont distincts des centres de contrôle technique VL. L'agrément est délivré par le Ministère des Transports."},

{id:2109,prog:'LOURD',theme:'lo-gestion',d:2,
e:"L'assurance marchandises transportées (AMT) est souscrite par :",
r:[{t:"Le transporteur pour son compte"},{t:"L'expéditeur ou le destinataire pour couvrir la valeur réelle des marchandises",ok:true},{t:"Elle est incluse dans la RC du transporteur"},{t:"Elle est obligatoire pour le transporteur"}],
x:"Bonne réponse : L'expéditeur ou le destinataire pour couvrir la valeur réelle des marchandises. L'AMT (ou assurance Ad Valorem) est souscrite par l'expéditeur ou le destinataire. Elle couvre la valeur réelle des marchandises contre perte, vol ou dommage. Elle est distincte et complémentaire de la responsabilité civile du transporteur (plafonnée par la loi). Sans AMT, en cas de sinistre, l'indemnisation est limitée au plafond légal/conventionnel."},

{id:2110,prog:'LOURD',theme:'lo-regl',d:2,
e:"Le transport pour compte propre (TCP) se distingue du transport pour compte d'autrui (TCA) car :",
r:[{t:"Le TCP ne nécessite aucune réglementation"},{t:"Dans le TCP, le transporteur et le propriétaire de la marchandise sont la même entité économique",ok:true},{t:"Le TCP est exempté de la réglementation sociale"},{t:"Le TCP est réservé aux grandes entreprises"}],
x:"Bonne réponse : Dans le TCP, le transporteur et le propriétaire de la marchandise sont la même entité économique. Le transport pour compte propre (TCP) est effectué par une entreprise pour ses propres besoins, avec ses propres véhicules et conducteurs salariés. Le TCP est exempté de l'obligation de licence de transport mais doit respecter les règles sociales (tachygraphe, temps de conduite), techniques et de sécurité. Il n'est pas autorisé à transporter des marchandises de tiers."},

{id:2111,prog:'LOURD',theme:'lo-intl',d:1,
e:"Le registre européen ERRU (European Register of Road Transport Undertakings) permet :",
r:[{t:"D'immatriculer les véhicules PL dans toute l'Europe"},{t:"L'échange d'informations entre États membres sur les transporteurs et leurs éventuelles infractions",ok:true},{t:"De suivre les trajets des PL en temps réel"},{t:"D'harmoniser les tarifs de transport dans l'UE"}],
x:"Bonne réponse : L'échange d'informations entre États membres sur les transporteurs et leurs éventuelles infractions. L'ERRU est un système de registres électroniques nationaux interconnectés (créé par le règlement 1071/2009) permettant aux autorités compétentes des États membres de l'UE d'échanger des informations sur les entreprises de transport (infractions graves, pertes d'honorabilité, suspensions/retraits d'autorisations)."},

{id:2112,prog:'LOURD',theme:'cl-social',d:1,
e:"La durée maximale de conduite sur 2 semaines consécutives est de :",
r:[{t:"100 heures"},{t:"90 heures",ok:true},{t:"80 heures"},{t:"112 heures"}],
x:"Bonne réponse : 90 heures. Le règlement 561/2006 art. 6 fixe la limite bihebdomadaire à 90 heures de conduite sur 2 semaines consécutives. Même si chaque semaine respecte la limite de 56h, la somme ne peut pas dépasser 90h. Ces deux limites s'appliquent simultanément."},

{id:2113,prog:'LOURD',theme:'lo-gestion',d:1,
e:"Le taux de remplissage d'un PL FTL mesure :",
r:[{t:"Le taux d'occupation des sièges"},{t:"Le rapport entre la charge réelle transportée et la capacité maximale du véhicule (poids ou volume)",ok:true},{t:"La durée d'utilisation journalière"},{t:"Le rapport km chargés / km totaux"}],
x:"Bonne réponse : Le rapport entre la charge réelle transportée et la capacité maximale du véhicule (poids ou volume). Taux de remplissage = Charge réelle / Capacité maximale × 100. Un PL de 25t chargé à 20t = 80 % de taux de remplissage. Améliorer ce taux (chargement optimisé, groupage) réduit le coût par tonne transportée et améliore la rentabilité. Un taux < 70 % signale une sous-optimisation des tournées."},

{id:2114,prog:'LOURD',theme:'lo-regl',d:3,
e:"Le protocole de sécurité pour les opérations de chargement/déchargement doit être établi entre :",
r:[{t:"Le transporteur et son assureur"},{t:"L'entreprise d'accueil (chargeur/destinataire) et l'entreprise de transport",ok:true},{t:"Le conducteur et le chef de dépôt uniquement"},{t:"Le gouvernement et les syndicats"}],
x:"Bonne réponse : L'entreprise d'accueil (chargeur/destinataire) et l'entreprise de transport. Selon l'arrêté du 26 avril 1996, lorsque des opérations de chargement ou déchargement sont effectuées dans des lieux de travail extérieurs à l'entreprise de transport, un protocole de sécurité doit être établi entre l'entreprise d'accueil et l'entreprise de transport. Il définit les mesures de prévention des risques lors des opérations."},

{id:2115,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le coefficient d'exploitation d'une entreprise PL est de 92 %. Cela signifie que :",
r:[{t:"L'entreprise perd de l'argent"},{t:"L'entreprise dégage une marge bénéficiaire de 8 % du CA",ok:true},{t:"92 % du CA est consacré aux charges fixes"},{t:"L'entreprise a un taux de remplissage de 92 %"}],
x:"Bonne réponse : L'entreprise dégage une marge bénéficiaire de 8 % du CA. Coefficient d'exploitation = Charges d'exploitation / CA × 100. Un coefficient de 92 % signifie que 92 % du CA sert à couvrir les charges. Il reste 8 % de marge bénéficiaire. Plus le coefficient est bas, plus l'entreprise est rentable. Un coefficient supérieur à 100 % signifie une perte."},

{id:2116,prog:'LOURD',theme:"Accès à la profession PL",d:2,
e:"En cas de non-respect grave et répété des règles de temps de conduite par une entreprise, l'autorité compétente peut :",
r:[{t:"Uniquement infliger une amende"},{t:"Retirer temporairement ou définitivement l'autorisation d'exercer",ok:true},{t:"Uniquement envoyer un avertissement"},{t:"Suspendre uniquement la carte conducteur"}],
x:"Bonne réponse : Retirer temporairement ou définitivement l'autorisation d'exercer. Les autorités compétentes (DREAL en France) peuvent, en cas d'infractions graves et répétées aux réglementations routières ou sociales, suspendre ou retirer l'autorisation d'exercer (licence de transport). C'est la sanction la plus sévère possible pour une entreprise de transport."},

{id:2117,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le principe 'lex loci delicti' (lieu du délit) s'applique à la CMR pour :",
r:[{t:"Déterminer la juridiction compétente pour les litiges"},{t:"Choisir la loi applicable en dehors des cas couverts par la CMR",ok:true},{t:"Fixer les tarifs douaniers"},{t:"Déterminer la nationalité du conducteur"}],
x:"Bonne réponse : Choisir la loi applicable en dehors des cas couverts par la CMR. La CMR est la loi applicable aux transports internationaux qu'elle couvre. Pour les questions non réglementées par la CMR (elle s'applique à l'exclusion de la plupart des droits nationaux), c'est généralement le droit du pays où le transport a eu lieu ou où le dommage est survenu qui s'applique à titre subsidiaire."},

{id:2118,prog:'LOURD',theme:'cl-social',d:2,
e:"Le congé sabbatique dans les transports routiers peut être accordé aux salariés justifiant :",
r:[{t:"5 ans d'ancienneté"},{t:"36 mois d'ancienneté dans l'entreprise et 6 ans d'activité professionnelle totale",ok:true},{t:"10 ans d'ancienneté"},{t:"Tout salarié peut en bénéficier"}],
x:"Bonne réponse : 36 mois d'ancienneté dans l'entreprise et 6 ans d'activité professionnelle totale. Le congé sabbatique (art. L.3142-28 du Code du travail) est d'une durée de 6 à 11 mois, non rémunéré. Il est accessible aux salariés justifiant d'au moins 36 mois d'ancienneté dans l'entreprise ET 6 ans d'activité professionnelle totale. L'employeur peut le refuser ou le différer sous conditions."},

{id:2119,prog:'LOURD',theme:'lo-gestion',d:3,
e:"Le ratio de couverture de la dette nette par l'EBITDA (levier d'endettement) est considéré comme sain lorsqu'il est :",
r:[{t:"Supérieur à 10"},{t:"Inférieur à 3 à 4 (la dette nette représente moins de 3-4 années d'EBITDA)",ok:true},{t:"Exactement égal à 1"},{t:"Le plus élevé possible"}],
x:"Bonne réponse : Inférieur à 3 à 4 (la dette nette représente moins de 3-4 années d'EBITDA). Le ratio Dette nette / EBITDA mesure la capacité de l'entreprise à rembourser sa dette nette avec son résultat opérationnel brut. Un ratio < 3-4 est considéré comme sain pour une entreprise industrielle/transport. Au-delà de 5-6, le risque financier est élevé et les banques peuvent refuser de nouveaux prêts."},

{id:2120,prog:'LOURD',theme:'lo-regl',d:2,
e:"Le poids total autorisé en charge (PTAC) d'un tracteur routier seul (sans semi-remorque) est généralement de :",
r:[{t:"18 tonnes"},{t:"19 tonnes",ok:true},{t:"26 tonnes"},{t:"40 tonnes"}],
x:"Bonne réponse : 19 tonnes. Un tracteur routier 3 essieux a un PTAC maximum de 26 tonnes. Mais en pratique, la limite réglementaire par configuration d'essieux fixe le PTAC dans la carte grise. Pour un tracteur 2 essieux courant, le PTAC est de 18-19 tonnes. Le PTAC du tracteur seul est distinct du PTRA (Poids Total Roulant Autorisé) de l'ensemble tracteur + semi-remorque."},

{id:2121,prog:'LOURD',theme:'lo-intl',d:2,
e:"La Convention CMR (contrat de transport international de marchandises par route) s'applique :",
r:[{t:"Uniquement aux transports au sein de l'UE"},{t:"Aux transports internationaux entre États signataires quand lieu de prise en charge et de livraison sont dans 2 pays différents",ok:true},{t:"Uniquement aux transports en dehors de l'Europe"},{t:"À tous les transports de plus de 500 km"}],
x:"Bonne réponse : Aux transports internationaux entre États signataires quand lieu de prise en charge et de livraison sont dans 2 pays différents. La CMR s'applique à tout contrat de transport international de marchandises par route à titre onéreux lorsque le lieu de prise en charge de la marchandise et le lieu de livraison sont situés dans deux pays différents, dont l'un au moins est signataire."},

{id:2122,prog:'LOURD',theme:'cl-social',d:1,
e:"Le code 95 sur le permis de conduire d'un chauffeur PL signifie :",
r:[{t:"Il a le permis CE"},{t:"Il a la qualification initiale ou en cours de validité (CQC/FIMO/FCOS)",ok:true},{t:"Il est autorisé à conduire des citernes"},{t:"Il a passé une formation ADR"}],
x:"Bonne réponse : Il a la qualification initiale ou en cours de validité (CQC/FIMO/FCOS). Le code 95 (suivi d'une date d'expiration) apposé sur le permis de conduire atteste que le titulaire a satisfait aux exigences de qualification initiale (FIMO) et de formation continue (FCOS) pour conduire des véhicules de transport de marchandises ou de voyageurs à titre professionnel."},

{id:2123,prog:'LOURD',theme:'lo-regl',d:1,
e:"Un conducteur PL peut-il transporter des passagers (auto-stoppeurs) dans son camion ?",
r:[{t:"Oui, illimité"},{t:"Non, sauf personnes expressément autorisées par l'employeur (contremaître, mécanicien…)",ok:true},{t:"Oui, jusqu'à 3 passagers"},{t:"Oui, si le trajet est court"}],
x:"Bonne réponse : Non, sauf personnes expressément autorisées par l'employeur (contremaître, mécanicien…). Il est interdit de transporter des personnes non autorisées dans un PL (raisons de sécurité, couverture assurance, responsabilité). Seules les personnes expressément autorisées par l'employeur (technicien accompagnateur, stagiaire, etc.) peuvent monter à bord. Le transport de passagers non autorisés peut engager la responsabilité du conducteur et de l'employeur."},

{id:2124,prog:'LOURD',theme:'lo-regl',d:1,
e:"La limitation de vitesse sur autoroute pour un PL de PTAC > 3,5t est de :",
r:[{t:"110 km/h"},{t:"90 km/h",ok:true},{t:"130 km/h"},{t:"80 km/h"}],
x:"Bonne réponse : 90 km/h. Les PL de PTAC > 3,5t sont limités à 90 km/h sur autoroute et voies express. Cette limitation est assurée par le limiteur de vitesse électronique obligatoire. Sur les routes nationales/départementales à double voie, la limite est de 80 km/h. En agglomération, la limite générale de 50 km/h s'applique."},

{id:2125,prog:'LOURD',theme:'lo-regl',d:3,
e:"L'immobilisation d'un PL lors d'un contrôle DREAL peut être décidée si :",
r:[{t:"Le conducteur a plus de 3 heures de conduite sans pause"},{t:"Le conducteur a épuisé ses droits à conduite journalière, ou en cas de défaut grave de sécurité",ok:true},{t:"Le véhicule a plus de 10 ans"},{t:"La carte grise n'est pas présentée"}],
x:"Bonne réponse : Le conducteur a épuisé ses droits à conduite journalière, ou en cas de défaut grave de sécurité. Un PL peut être immobilisé par les forces de l'ordre ou les agents de contrôle DREAL si : le conducteur a atteint sa limite de conduite journalière ou bihebdomadaire, le tachygraphe est défectueux ou absent, le véhicule présente un défaut grave de sécurité mécanique, la surcharge dépasse les seuils légaux, ou les documents obligatoires sont absents."},

{id:2126,prog:'LOURD',theme:'cl-social',d:2,
e:"Le plan de sauvegarde de l'emploi (PSE) est obligatoire pour un licenciement économique collectif dans les entreprises de :",
r:[{t:"Plus de 10 salariés licenciant plus de 2 personnes"},{t:"Plus de 50 salariés procédant au licenciement d'au moins 10 salariés sur 30 jours",ok:true},{t:"Plus de 100 salariés uniquement"},{t:"Toutes les tailles dès 5 licenciements"}],
x:"Bonne réponse : Plus de 50 salariés procédant au licenciement d'au moins 10 salariés sur 30 jours. Le PSE est obligatoire pour les entreprises d'au moins 50 salariés qui envisagent de licencier au moins 10 salariés sur une période de 30 jours pour motif économique. Il doit prévoir des mesures de reclassement interne et externe, des formations et des aides à la création d'entreprise."},

{id:2127,prog:'LOURD',theme:'lo-gestion',d:2,
e:"La méthode du coût marginal en transport permet de décider si :",
r:[{t:"Un investissement est rentable"},{t:"Accepter une commande supplémentaire à bas prix est préférable à refuser (si prix > coûts variables)",ok:true},{t:"Sous-traiter est plus rentable"},{t:"Embaucher un conducteur supplémentaire"}],
x:"Bonne réponse : Accepter une commande supplémentaire à bas prix est préférable à refuser (si prix > coûts variables). Le coût marginal = coût de la dernière unité produite (ici : coût de la tournée supplémentaire = uniquement les charges variables directes). Si le prix proposé pour une commande supplémentaire > coût marginal, il est préférable de l'accepter car elle contribue aux charges fixes (déjà couvertes par l'activité normale). C'est la base de la tarification différenciée et de la gestion des surplus de capacité."},

{id:2128,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le transit douanier T1 est utilisé pour :",
r:[{t:"Les marchandises communautaires voyageant dans l'UE"},{t:"Les marchandises non communautaires en transit à travers l'UE",ok:true},{t:"Les véhicules en transit temporaire"},{t:"Les marchandises en retour vers le pays d'origine"}],
x:"Bonne réponse : Les marchandises non communautaires en transit à travers l'UE. Le document T1 est un régime de transit douanier (transit externe) qui suspend le paiement des droits et taxes pour des marchandises non communautaires (originaires de pays tiers) qui traversent le territoire douanier de l'UE pour rejoindre leur destination. Le T2 est réservé aux marchandises communautaires."},

{id:2129,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le plan de financement à 3 ans d'un investissement PL doit équilibrer :",
r:[{t:"Uniquement les recettes et dépenses"},{t:"Les emplois (investissements, remboursements) et ressources (CAF, emprunts, apports) chaque année",ok:true},{t:"Uniquement la CAF et les emprunts"},{t:"La trésorerie du dernier exercice uniquement"}],
x:"Bonne réponse : Les emplois (investissements, remboursements) et ressources (CAF, emprunts, apports) chaque année. Le plan de financement pluriannuel présente sur 3-5 ans : les emplois (investissements, remboursements de dettes, BFR supplémentaire) et les ressources (CAF prévisionnelle, nouveaux emprunts, cessions, apports). Il doit être équilibré chaque année pour confirmer la faisabilité financière du projet d'investissement."},

{id:2130,prog:'LOURD',theme:"Accès à la profession PL",d:1,
e:"Le nombre maximum de véhicules qu'un gestionnaire de transport peut gérer pour plusieurs entreprises est de :",
r:[{t:"10 véhicules"},{t:"50 véhicules",ok:true},{t:"100 véhicules"},{t:"Il n'y a pas de limite"}],
x:"Bonne réponse : 50 véhicules. Un même gestionnaire de transport peut exercer ses fonctions pour au maximum 4 entreprises de transport différentes, représentant un parc total ne dépassant pas 50 véhicules. Au-delà de ces limites, une autorisation spéciale est requise."},

{id:2131,prog:'LOURD',theme:'cl-social',d:2,
e:"L'attestation d'activités doit couvrir les jours où le conducteur :",
r:[{t:"N'a conduit que partiellement"},{t:"N'a pas conduit (congés, maladie, repos, formation) sur les 28 derniers jours",ok:true},{t:"A travaillé à l'étranger"},{t:"A conduit un autre véhicule non équipé du tachygraphe"}],
x:"Bonne réponse : N'a pas conduit (congés, maladie, repos, formation) sur les 28 derniers jours. L'attestation d'activités est un document fourni par l'employeur justifiant les journées non travaillées (congés, repos, maladie, formation, jours fériés…) sur les 28 jours précédant le contrôle. Elle complète les données du tachygraphe pour les contrôleurs routiers."},

{id:2132,prog:'LOURD',theme:'cl-social',d:1,
e:"Le tachygraphe doit être étalonné (vérification métrologique) tous les :",
r:[{t:"2 ans"},{t:"6 ans ou après toute modification du véhicule",ok:true},{t:"1 an"},{t:"10 ans"}],
x:"Bonne réponse : 6 ans ou après toute modification du véhicule. Le tachygraphe doit être étalonné (contrôle par un atelier agréé) lors de la mise en service, puis tous les 6 ans, et après toute modification pouvant affecter sa précision (modification de la transmission, changement de taille de pneus, réparation du capteur). L'étalonnage est mentionné sur une plaque apposée dans le véhicule."},

{id:2133,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le formulaire CERFA utilisé pour l'exportation de déchets dangereux dans le cadre du règlement (CE) 1013/2006 s'appelle :",
r:[{t:"Document de suivi douanier EX1"},{t:"Notification de transfert transfrontière de déchets",ok:true},{t:"Carnet TIR pour déchets"},{t:"Déclaration de valeur en douane"}],
x:"Bonne réponse : Notification de transfert transfrontière de déchets. Le règlement CE 1013/2006 sur les transferts de déchets impose une procédure de notification préalable pour l'exportation de déchets dangereux (ou non dangereux vers des pays non membres de l'OCDE). La notification est adressée aux autorités compétentes des pays d'expédition, de transit et de destination."},

{id:2134,prog:'LOURD',theme:'cl-social',d:3,
e:"Le droit à la déconnexion pour un conducteur PL signifie que :",
r:[{t:"Il peut éteindre son tachygraphe pendant les pauses"},{t:"Il ne peut pas être contraint de répondre aux appels téléphoniques professionnels pendant ses temps de repos",ok:true},{t:"Il peut désactiver son GPS pendant la nuit"},{t:"Il n'a pas accès aux réseaux sociaux en service"}],
x:"Bonne réponse : Il ne peut pas être contraint de répondre aux appels téléphoniques professionnels pendant ses temps de repos. Le droit à la déconnexion (art. L.2242-17 du Code du travail, négociation obligatoire en entreprise > 50 salariés) protège le salarié des sollicitations professionnelles hors temps de travail. Pour les conducteurs PL, cela signifie notamment qu'ils ne peuvent pas être tenus de répondre aux appels du dispatcher ou de l'employeur pendant leurs repos obligatoires."},

{id:2135,prog:'LOURD',theme:'lo-gestion',d:2,
e:"La LLD (Location Longue Durée) d'un PL se distingue du crédit-bail car :",
r:[{t:"Le locataire est propriétaire en fin de contrat"},{t:"La LLD n'inclut pas d'option d'achat finale — le véhicule est restitué",ok:true},{t:"La LLD est moins chère"},{t:"La LLD ne peut pas inclure l'entretien"}],
x:"Bonne réponse : La LLD n'inclut pas d'option d'achat finale — le véhicule est restitué. En LLD, le locataire utilise le véhicule pendant une durée déterminée (3-5 ans) avec un loyer mensuel fixe (pouvant inclure entretien, pneus, assurance). À l'échéance, le véhicule est restitué. Contrairement au crédit-bail (leasing), il n'y a pas d'option d'achat. La LLD préserve les lignes de crédit et maîtrise les budgets."},

{id:2136,prog:'LOURD',theme:'lo-regl',d:3,
e:"Le tachygraphe numérique G2 (2ème génération) a la capacité d'enregistrer :",
r:[{t:"Uniquement les temps de conduite"},{t:"Positions GNSS, franchissements de frontières, activités, vitesse, données du conducteur et du véhicule",ok:true},{t:"Uniquement les données du conducteur"},{t:"Les communications radios du conducteur"}],
x:"Bonne réponse : Positions GNSS, franchissements de frontières, activités, vitesse, données du conducteur et du véhicule. Le tachygraphe G2 (règl. 2016/799) enregistre : positions GPS toutes les 3h en conduite et à chaque traversée de frontière, données complètes d'activité (conduite, autres travaux, disponibilité, repos), vitesse instantanée, données du véhicule (immatriculation, VIN) et de la carte conducteur. Il peut être interrogé à distance via DSRC lors des contrôles."},

{id:2137,prog:'LOURD',theme:'lo-gestion',d:1,
e:"L'assurance marchandises transportées (AMT) couvre :",
r:[{t:"La responsabilité civile du transporteur"},{t:"La valeur des marchandises en cas de perte ou dommage pendant le transport",ok:true},{t:"Les dommages causés aux tiers"},{t:"Les accidents du travail du conducteur"}],
x:"Bonne réponse : La valeur des marchandises en cas de perte ou dommage pendant le transport. L'assurance AMT (ou assurance 'ad valorem') couvre la valeur des marchandises transportées contre les risques de perte, vol ou dommage pendant le transport. Elle est souscrite par l'expéditeur ou le destinataire. Elle complète la responsabilité légale du transporteur qui est plafonnée."},

{id:2138,prog:'LOURD',theme:'lo-regl',d:1,
e:"Le PTAC maximum d'un ensemble articulé 5 essieux en France est de :",
r:[{t:"38 tonnes"},{t:"40 tonnes",ok:true},{t:"44 tonnes"},{t:"52 tonnes"}],
x:"Bonne réponse : 40 tonnes. Le PTAC maximum pour un ensemble articulé (tracteur + semi-remorque) à 5 essieux est de 40 tonnes en France. Pour 4 essieux c'est 36 tonnes, pour 6 essieux jusqu'à 44 tonnes. Des dérogations existent pour les transports de bois ronds (48 tonnes) et certains transports spéciaux."},

{id:2139,prog:'LOURD',theme:'lo-gestion',d:2,
e:"La durée d'amortissement standard d'un tracteur PL est de :",
r:[{t:"3 ans"},{t:"5 ans",ok:true},{t:"8 ans"},{t:"10 ans"}],
x:"Bonne réponse : 5 ans. La durée d'amortissement fiscalement admise pour un tracteur PL est généralement de 5 ans en amortissement linéaire (20 %/an). Certaines entreprises amortissent sur 4 ans pour des véhicules très intensément utilisés. La semi-remorque est généralement amortie sur 7 à 10 ans."},

{id:2140,prog:'LOURD',theme:'cl-social',d:1,
e:"Le licenciement d'un conducteur PL pour faute grave implique :",
r:[{t:"Un préavis de 2 mois"},{t:"Une rupture sans préavis ni indemnité de licenciement (mais maintien des CP)",ok:true},{t:"Le remboursement du véhicule"},{t:"Une suspension automatique du permis"}],
x:"Bonne réponse : Une rupture sans préavis ni indemnité de licenciement (mais maintien des CP). La faute grave rend impossible le maintien du salarié dans l'entreprise. Elle entraîne une rupture immédiate sans préavis et sans indemnité de licenciement. Le salarié conserve toutefois ses droits aux congés payés acquis et peut prétendre aux allocations chômage (contrairement à la faute lourde)."},

{id:2141,prog:'LOURD',theme:'cl-social',d:1,
e:"Le repos compensateur obligatoire (RCO) est dû quand les heures supplémentaires dépassent :",
r:[{t:"35 heures/semaine"},{t:"Le contingent conventionnel ou légal d'heures supplémentaires",ok:true},{t:"10 heures supplémentaires dans la semaine"},{t:"5 heures supplémentaires par mois"}],
x:"Bonne réponse : Le contingent conventionnel ou légal d'heures supplémentaires. Le repos compensateur obligatoire est dû pour toute heure supplémentaire accomplie au-delà du contingent conventionnel (195h en transport routier) ou légal (220h). Son taux est de 100 % pour les entreprises de + de 20 salariés et 50 % pour les entreprises de ≤ 20 salariés. Il s'ajoute aux majorations de salaire dues."},

{id:2142,prog:'LOURD',theme:'lo-intl',d:3,
e:"Les règles d'origine préférentielle permettent à un exportateur de bénéficier :",
r:[{t:"D'une exonération de TVA automatique"},{t:"De droits de douane réduits ou nuls dans un pays tiers avec lequel l'UE a un accord commercial",ok:true},{t:"D'un tarif de transport réduit"},{t:"D'une priorité aux frontières douanières"}],
x:"Bonne réponse : De droits de douane réduits ou nuls dans un pays tiers avec lequel l'UE a un accord commercial. Les règles d'origine préférentielle définissent les critères qu'un produit doit respecter pour être considéré comme 'originaire' d'un pays et bénéficier des tarifs préférentiels prévus par les accords commerciaux (ex: CETA avec le Canada, EPA avec le Japon). L'exportateur doit pouvoir justifier l'origine par des preuves (EUR.1, déclaration d'origine)."},

{id:2143,prog:'LOURD',theme:'cl-social',d:2,
e:"Le conducteur en grand déplacement perçoit des indemnités de :",
r:[{t:"Uniquement la nuit"},{t:"Repas et/ou couchée selon l'éloignement et la durée, selon les barèmes CCN ou URSSAF",ok:true},{t:"Un montant forfaitaire unique quel que soit le déplacement"},{t:"Aucune indemnité si le camion a une cabine couchette"}],
x:"Bonne réponse : Repas et/ou couchée selon l'éloignement et la durée, selon les barèmes CCN ou URSSAF. Les indemnités de grand déplacement des conducteurs PL couvrent les frais de repas et d'hébergement lors des déplacements professionnels. Leurs montants sont fixés par la CCN transports routiers et doivent respecter les barèmes URSSAF pour être exonérés de cotisations. Même avec cabine couchette, des indemnités peuvent être dues selon la CCN."},

{id:2144,prog:'LOURD',theme:'lo-gestion',d:2,
e:"L'indice CNR (Comité National Routier) sert à :",
r:[{t:"Fixer les tarifs de transport réglementés"},{t:"Publier des références de coûts pour permettre les révisions tarifaires contractuelles",ok:true},{t:"Contrôler les entreprises de transport"},{t:"Former les conducteurs PL"}],
x:"Bonne réponse : Publier des références de coûts pour permettre les révisions tarifaires contractuelles. Le CNR (organisme public sous tutelle des Ministères des Transports et des Finances) publie mensuellement des indices de coûts de transport routier : carburant, pneumatiques, péages, salaires conducteurs, entretien, amortissement. Ces indices servent de base aux clauses de révision de prix dans les contrats de transport."},

{id:2145,prog:'LOURD',theme:'cl-social',d:3,
e:"La durée de conservation des enregistrements tachygraphiques par l'entreprise est de :",
r:[{t:"1 an"},{t:"1 an pour les données numériques et les disques analogiques",ok:true},{t:"5 ans"},{t:"3 mois"}],
x:"Bonne réponse : 1 an pour les données numériques et les disques analogiques. L'employeur doit conserver les données du tachygraphe (disques analogiques ou fichiers numériques téléchargés) pendant au moins 12 mois (1 an) et les présenter lors des contrôles. Des délais plus longs peuvent s'appliquer en cas de contentieux. Les données doivent être téléchargées régulièrement (au moins tous les 90 jours pour les véhicules, 28 jours pour les cartes conducteur)."},

{id:2146,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Un transporteur PL réalise 800 000 € de CA avec un coefficient d'exploitation de 88 %. Ses amortissements sont de 60 000 €. IS = 25 %. Sa CAF est de :",
r:[{t:"96 000 €"},{t:"132 000 €",ok:true},{t:"60 000 €"},{t:"72 000 €"}],
x:"Bonne réponse : 132 000 €. Résultat exploitation = 800 000 × (1-0,88) = 96 000 €. IS = 96 000 × 25 % = 24 000 €. Résultat net = 72 000 €. CAF = Résultat net + Amortissements = 72 000 + 60 000 = 132 000 €. La CAF permet de rembourser les emprunts et financer de nouveaux investissements."},

{id:2147,prog:'LOURD',theme:'cl-social',d:1,
e:"Le bulletin de paie d'un conducteur PL doit mentionner :",
r:[{t:"Uniquement le salaire brut et net"},{t:"Le salaire brut, les cotisations détaillées, le salaire net, le net imposable et le taux de prélèvement à la source",ok:true},{t:"Uniquement le salaire net"},{t:"Le détail des tournées effectuées"}],
x:"Bonne réponse : Le salaire brut, les cotisations détaillées, le salaire net, le net imposable et le taux de prélèvement à la source. Le bulletin de paie doit obligatoirement mentionner : identité employeur et salarié, qualification, période de paie, salaire brut, ensemble des cotisations patronales et salariales détaillées par ligne, net imposable, prélèvement à la source, salaire net à payer. Sa conservation est recommandée sans limite de durée."},

{id:2148,prog:'LOURD',theme:"Accès à la profession PL",d:2,
e:"La licence de transport intérieur est délivrée pour une durée de :",
r:[{t:"5 ans renouvelables"},{t:"10 ans renouvelables",ok:true},{t:"Elle est permanente"},{t:"3 ans pour les nouvelles entreprises"}],
x:"Bonne réponse : 10 ans renouvelables. La licence de transport intérieur (LTI) et la licence communautaire (LC) sont délivrées pour une durée de 10 ans renouvelables. Le renouvellement est soumis à la vérification que l'entreprise continue de satisfaire aux 3 conditions d'accès (honorabilité, capacité financière et professionnelle)."},

{id:2149,prog:'LOURD',theme:'cl-social',d:1,
e:"La durée maximale de conduite sur 2 semaines consécutives est de :",
r:[{t:"90 heures",ok:true},{t:"112 heures"},{t:"80 heures"},{t:"100 heures"}],
x:"Bonne réponse : 90 heures. Le règlement 561/2006 limite la durée de conduite à 56 heures par semaine et à 90 heures sur deux semaines consécutives. Ces deux limites doivent être respectées simultanément."},

{id:2150,prog:'LOURD',theme:'lo-regl',d:2,
e:"Le règlement européen 1071/2009 impose à l'entreprise de transport de disposer d'un :",
r:[{t:"Parking sécurisé uniquement"},{t:"Établissement stable avec locaux, gestion administrative adaptée et véhicules dans l'État d'établissement",ok:true},{t:"Capital social minimum de 50 000 €"},{t:"Comptable agréé exclusivement"}],
x:"Bonne réponse : Établissement stable avec locaux, gestion administrative adaptée et véhicules dans l'État d'établissement. Le règlement 1071/2009 fixe trois conditions d'accès à la profession : établissement stable dans un État membre (locaux, documents, véhicules disponibles), honorabilité professionnelle (gestionnaire sans condamnations incompatibles), et capacité financière (fonds propres ou garanties). Ces trois conditions doivent être satisfaites en permanence."},

{id:2151,prog:'LOURD',theme:'lo-regl',d:2,
e:"La licence communautaire de transport (LC) permet à un transporteur établi dans un pays UE de :",
r:[{t:"Circuler librement dans toute l'UE sans restriction"},{t:"Effectuer des transports internationaux entre États membres et du cabotage limité",ok:true},{t:"Circuler également hors UE"},{t:"Transporter des passagers"}],
x:"Bonne réponse : Effectuer des transports internationaux entre États membres et du cabotage limité. La licence communautaire (délivrée pour 10 ans par l'autorité compétente du pays d'établissement) autorise les transports internationaux de marchandises entre États membres de l'UE. Une copie certifiée conforme doit être à bord. Le cabotage (transports internes dans un autre État membre) est limité à 3 opérations en 7 jours après un transport international entrant."},

{id:2152,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le transitaire douanier joue le rôle de :",
r:[{t:"Conducteur international spécialisé"},{t:"Représentant en douane qui effectue les formalités douanières au nom et pour le compte des importateurs/exportateurs",ok:true},{t:"Agent d'assurance pour les marchandises"},{t:"Commissionnaire de transport uniquement"}],
x:"Bonne réponse : Représentant en douane qui effectue les formalités douanières au nom et pour le compte des importateurs/exportateurs. Le transitaire (ou commissionnaire en douane agréé) est un professionnel mandaté par l'importateur ou l'exportateur pour accomplir les formalités douanières. Il peut agir en son nom propre (commissionnaire) ou au nom du client (représentant direct). Il est agréé par les douanes et engage sa responsabilité professionnelle sur les déclarations qu'il fait."},

{id:2153,prog:'LOURD',theme:'cl-social',d:2,
e:"Le droit à la formation professionnelle en cas de licenciement économique se traduit par :",
r:[{t:"Aucun droit supplémentaire par rapport au droit commun"},{t:"Le Congé de Reclassement (> 1 000 salariés) ou le Contrat de Sécurisation Professionnelle (< 1 000 salariés)",ok:true},{t:"Une prime de licenciement majorée"},{t:"Un an de salaire maintenu"}],
x:"Bonne réponse : Le Congé de Reclassement (> 1 000 salariés) ou le Contrat de Sécurisation Professionnelle (< 1 000 salariés). En cas de licenciement économique, les salariés bénéficient : dans les entreprises ≥ 1 000 salariés du congé de reclassement (formation, bilan de compétences, maintien du salaire) ; dans les entreprises < 1 000 salariés du CSP (Contrat de Sécurisation Professionnelle, géré par France Travail). Ces dispositifs visent à favoriser le reclassement rapide."},

{id:2154,prog:'LOURD',theme:'cl-social',d:1,
e:"Le repos journalier normal d'un conducteur PL est de :",
r:[{t:"8 heures"},{t:"11 heures consécutives",ok:true},{t:"9 heures"},{t:"12 heures"}],
x:"Bonne réponse : 11 heures consécutives. Le repos journalier normal est de 11 heures consécutives (art. 8 du règlement 561/2006). Il peut être réduit à 9 heures (repos réduit) mais pas plus de 3 fois entre deux repos hebdomadaires. Le repos réduit n'a pas à être compensé."},

{id:2155,prog:'LOURD',theme:'lo-regl',d:2,
e:"Le marquage CE des équipements de protection individuelle (EPI) des conducteurs PL atteste :",
r:[{t:"Que l'EPI est fabriqué en France"},{t:"Sa conformité aux exigences essentielles des directives européennes applicables (sécurité, résistance)",ok:true},{t:"Sa durée de vie garantie"},{t:"Son homologation par la DREAL"}],
x:"Bonne réponse : Sa conformité aux exigences essentielles des directives européennes applicables (sécurité, résistance). Le marquage CE sur les EPI (casques, gilets, gants, chaussures de sécurité…) atteste que le fabricant déclare la conformité de son produit aux exigences essentielles des directives et règlements européens applicables. C'est une exigence de mise sur le marché dans l'UE, pas un label de qualité supérieure."},

{id:2156,prog:'LOURD',theme:'cl-social',d:2,
e:"La sanction maximale d'un avertissement disciplinaire a pour effet :",
r:[{t:"La perte d'un mois de salaire"},{t:"Une mention dans le dossier professionnel et une base possible pour une sanction ultérieure plus grave",ok:true},{t:"La suspension immédiate du permis"},{t:"L'impossibilité de bénéficier d'augmentations pendant 1 an"}],
x:"Bonne réponse : Une mention dans le dossier professionnel et une base possible pour une sanction ultérieure plus grave. L'avertissement est une sanction disciplinaire légère (la plus légère dans l'échelle disciplinaire). Il est mentionné dans le dossier du salarié. Si le même comportement se reproduit, l'employeur peut invoquer la persistance de la faute pour prononcer une sanction plus sévère (mise à pied, mutation, licenciement). L'avertissement n'a aucune incidence financière directe."},

{id:2157,prog:'LOURD',theme:'lo-regl',d:1,
e:"Le permis CE est obligatoire pour conduire :",
r:[{t:"Tout PL de plus de 3,5t"},{t:"Un ensemble tracteur + semi-remorque ou porteur + remorque dépassant 3,5t",ok:true},{t:"Uniquement les ensembles de plus de 40 tonnes"},{t:"Les tracteurs agricoles"}],
x:"Bonne réponse : Un ensemble tracteur + semi-remorque ou porteur + remorque dépassant 3,5t. Le permis CE permet de conduire : des véhicules de catégorie C (PTAC > 3,5t) avec une remorque de PTAC > 750 kg, soit les ensembles tracteur + semi-remorque ou porteur + grande remorque. Le permis C seul ne permet de tracter qu'une remorque de moins de 750 kg."},

{id:2158,prog:'LOURD',theme:'cl-social',d:2,
e:"Le détachement d'un conducteur PL en Europe (règlement 2020/1057) implique que :",
r:[{t:"Les règles sociales du pays d'origine s'appliquent toujours"},{t:"Les règles sociales du pays d'accueil s'appliquent pour le cabotage et certains transports bilatéraux",ok:true},{t:"Seul l'ADR du pays d'accueil s'applique"},{t:"Le conducteur bénéficie d'un régime allégé"}],
x:"Bonne réponse : Les règles sociales du pays d'accueil s'appliquent pour le cabotage et certains transports bilatéraux. Le règlement 2020/1057 (paquet mobilité) impose que lors du cabotage et de certains transports bilatéraux, les règles sociales du pays d'accueil s'appliquent (salaire minimum, temps de travail). Pour les transports en transit, les règles du pays d'origine s'appliquent. L'employeur doit se déclarer dans le pays d'accueil."},

{id:2159,prog:'LOURD',theme:'lo-regl',d:3,
e:"Le tachygraphe intelligent (G2) est obligatoire pour les nouveaux véhicules depuis :",
r:[{t:"2014"},{t:"2019",ok:true},{t:"2022"},{t:"2025"}],
x:"Bonne réponse : 2019. Le tachygraphe intelligent (2ème génération, G2) est obligatoire sur les véhicules neufs immatriculés depuis le 21 août 2019. Il intègre un récepteur GNSS (GPS), une interface DSRC pour les contrôles à distance et une connexion ITS. Les véhicules plus anciens peuvent conserver leurs anciens tachygraphes."},

{id:2160,prog:'LOURD',theme:'cl-social',d:1,
e:"La durée maximale d'un CDD sans renouvellement dans les transports routiers est de :",
r:[{t:"6 mois"},{t:"18 mois",ok:true},{t:"24 mois"},{t:"36 mois"}],
x:"Bonne réponse : 18 mois. Le CDD de droit commun est limité à 18 mois renouvellement inclus (24 mois maximum dans certains cas légaux). Dans le transport routier, les CDD de remplacement sont très courants (remplacement de conducteurs absents). Au-delà de la durée légale ou après 2 renouvellements non justifiés, le CDD peut être requalifié en CDI."},

{id:2161,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le certificat EUR.1 est utilisé pour :",
r:[{t:"Immatriculer des véhicules dans l'UE"},{t:"Prouver l'origine préférentielle d'une marchandise pour bénéficier de droits de douane réduits",ok:true},{t:"Certifier la conformité sanitaire des aliments"},{t:"Déclarer la valeur d'un colis postal"}],
x:"Bonne réponse : Prouver l'origine préférentielle d'une marchandise pour bénéficier de droits de douane réduits. Le certificat EUR.1 (ou la déclaration d'origine sur facture pour les petites valeurs) est un document douanier qui atteste de l'origine préférentielle d'une marchandise. Il permet au destinataire dans le pays importateur de bénéficier des tarifs préférentiels prévus dans les accords commerciaux entre l'UE et ce pays."},

{id:2162,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le chargé d'expédition (freight forwarder) est :",
r:[{t:"Un conducteur international spécialisé"},{t:"Un intermédiaire qui organise le transport pour le compte du client, en combinant plusieurs modes et prestataires",ok:true},{t:"Un douanier privé"},{t:"Un assureur maritime"}],
x:"Bonne réponse : Un intermédiaire qui organise le transport pour le compte du client, en combinant plusieurs modes et prestataires. Le freight forwarder (ou commissionnaire de transport) organise le transport de bout en bout pour ses clients, en combinant si nécessaire plusieurs modes (route, mer, air, rail) et plusieurs prestataires. Il agit en son nom propre et engage sa responsabilité vis-à-vis du client sur l'ensemble de la chaîne logistique."},

{id:2163,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le DSO (Days Sales Outstanding) d'un transporteur PL est de 52 jours. Son CA mensuel est de 120 000 €. Ses créances clients sont de :",
r:[{t:"120 000 €"},{t:"208 000 €",ok:true},{t:"52 000 €"},{t:"624 000 €"}],
x:"Bonne réponse : 208 000 €. DSO = Créances / CA × 360 → Créances = DSO × CA annuel / 360 = 52 × (120 000 × 12) / 360 = 52 × 1 440 000 / 360 = 52 × 4 000 = 208 000 €. Ce montant représente ce que doivent collectivement les clients. Réduire le DSO (relance, affacturage) libère de la trésorerie."},

{id:2164,prog:'LOURD',theme:'lo-regl',d:3,
e:"Le transport de fonds et valeurs avec un PL blindé est soumis à :",
r:[{t:"Uniquement la réglementation du transport de marchandises"},{t:"La loi du 12 juillet 1983 sur le transport de fonds, valeurs et bijoux + réglementation TFV spécifique",ok:true},{t:"Uniquement la réglementation ADR"},{t:"Aucune réglementation spécifique au-delà des PL normaux"}],
x:"Bonne réponse : La loi du 12 juillet 1983 sur le transport de fonds, valeurs et bijoux + réglementation TFV spécifique. Le transport de fonds, billets de banque et valeurs est réglementé par la loi du 12 juillet 1983 : autorisation préfectorale de l'entreprise, agrément des agents de transport de fonds, véhicules homologués, protocoles de sécurité stricts. Cette réglementation TFV (Transport de Fonds et Valeurs) est très contraignante et nécessite une formation spécifique des salariés."},

{id:2165,prog:'LOURD',theme:'cl-social',d:1,
e:"Le préavis de licenciement d'un conducteur PL avec 3 ans d'ancienneté est de :",
r:[{t:"1 mois"},{t:"2 mois",ok:true},{t:"3 mois"},{t:"6 mois"}],
x:"Bonne réponse : 2 mois. Selon la CCNTR, le préavis de licenciement varie selon l'ancienneté et la catégorie : pour les ouvriers (conducteurs PL), il est généralement de 1 mois pour moins de 2 ans, 2 mois entre 2 et 10 ans, et 3 mois au-delà. Des durées plus favorables peuvent être prévues contractuellement."},

{id:2166,prog:'LOURD',theme:'lo-civil',d:1,
e:"Le livre de police tenu par un récupérateur de véhicules ou un cimetière d'autos doit :",
r:[{t:"Être transmis annuellement à la Préfecture"},{t:"Enregistrer les acquisitions et cessions de véhicules et être présenté lors des contrôles",ok:true},{t:"Être visé par un commissaire de police mensuel"},{t:"Être disponible uniquement pour les douanes"}],
x:"Bonne réponse : Enregistrer les acquisitions et cessions de véhicules et être présenté lors des contrôles. Les professionnels de la récupération automobile doivent tenir un registre des véhicules acquis et cédés, présenté lors des contrôles de police. Cette réglementation vise à lutter contre le recel de véhicules volés et le trafic de pièces détachées d'origine douteuse."},

{id:2167,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le taux de km à vide d'un transporteur PL mesure :",
r:[{t:"La vitesse moyenne des trajets"},{t:"Le pourcentage de km parcourus sans chargement",ok:true},{t:"L'usure des pneus"},{t:"La rentabilité par client"}],
x:"Bonne réponse : Le pourcentage de km parcourus sans chargement. Le taux de km à vide = km à vide / km totaux × 100. Un taux élevé (> 20-25 %) signale un problème d'optimisation des retours. Réduire ce taux (bourses de fret, retours chargés) améliore directement la rentabilité en étalant les charges fixes sur plus de km chargés."},

{id:2168,prog:'LOURD',theme:'cl-social',d:2,
e:"Le temps de service d'un conducteur PL comprend :",
r:[{t:"Uniquement les heures de conduite"},{t:"La conduite, les chargements/déchargements, l'entretien, les documents ET le temps de disponibilité",ok:true},{t:"La conduite et les pauses uniquement"},{t:"Uniquement le temps rémunéré"}],
x:"Bonne réponse : La conduite, les chargements/déchargements, l'entretien, les documents ET le temps de disponibilité. Le temps de service (ou temps de travail) d'un conducteur routier comprend : le temps de conduite, les chargements et déchargements, les nettoyages et entretiens techniques, les formalités administratives, et le temps de disponibilité (attente de chargement dont la durée est connue à l'avance). Les pauses et les repos ne comptent pas."},

{id:2169,prog:'LOURD',theme:'lo-intl',d:1,
e:"La convention CMR s'applique aux transports routiers de marchandises :",
r:[{t:"Uniquement entre pays de l'UE"},{t:"Entre deux pays différents dont au moins l'un est signataire, pour les transports à titre onéreux",ok:true},{t:"Uniquement pour les PL de plus de 20t"},{t:"Uniquement pour les marchandises de valeur"}],
x:"Bonne réponse : Entre deux pays différents dont au moins l'un est signataire, pour les transports à titre onéreux. La CMR (Convention relative au Contrat de transport international de Marchandises par Route) s'applique automatiquement à tout contrat de transport routier entre deux pays dont au moins l'un est signataire, quelle que soit la nationalité des parties, dès lors que le transport est effectué à titre onéreux. 56 pays sont signataires."},

{id:2170,prog:'LOURD',theme:'lo-intl',d:1,
e:"L'accord AETR s'applique aux transports routiers :",
r:[{t:"Uniquement dans l'UE"},{t:"Dans les pays européens non membres de l'UE et pour les transports vers/depuis ces pays",ok:true},{t:"Uniquement pour les transports ADR"},{t:"Dans tous les pays du monde"}],
x:"Bonne réponse : Dans les pays européens non membres de l'UE et pour les transports vers/depuis ces pays. L'accord AETR (Accord Européen relatif au Travail des équipages des véhicules effectuant des transports Routiers internationaux) s'applique aux transports effectués sur le territoire des pays signataires non membres de l'UE (Turquie, Ukraine, Russie, pays balkaniques, Kazakhstan…). Dans l'UE, le règlement 561/2006 s'applique."},

{id:2171,prog:'LOURD',theme:'lo-regl',d:2,
e:"Le protocolle de sécurité pour les opérations de chargement/déchargement en site industriel doit être établi :",
r:[{t:"Uniquement si le site a plus de 50 salariés"},{t:"Pour toute opération dans un lieu de travail extérieur à l'entreprise de transport",ok:true},{t:"Uniquement pour les matières dangereuses"},{t:"À la demande du client uniquement"}],
x:"Bonne réponse : Pour toute opération dans un lieu de travail extérieur à l'entreprise de transport. L'arrêté du 26 avril 1996 (art. R.4515-1 du Code du travail) impose qu'un protocole de sécurité soit établi entre l'entreprise d'accueil (donneur d'ordre) et l'entreprise de transport pour toute opération de chargement ou déchargement réalisée dans un établissement soumis aux règles de prévention des risques professionnels."},

{id:2172,prog:'LOURD',theme:'lo-regl',d:2,
e:"La limitation de vitesse d'un PL en agglomération est de :",
r:[{t:"60 km/h"},{t:"50 km/h, identique aux autres véhicules",ok:true},{t:"40 km/h"},{t:"30 km/h systématiquement"}],
x:"Bonne réponse : 50 km/h, identique aux autres véhicules. En agglomération, la limitation générale de vitesse de 50 km/h s'applique à tous les véhicules, y compris les PL. Des limitations inférieures (30 km/h, 20 km/h) peuvent être imposées localement. Le limiteur de vitesse des PL (90 km/h max) ne joue pas en agglomération, mais la réglementation générale s'applique."},

{id:2173,prog:'LOURD',theme:'cl-social',d:3,
e:"Le conducteur PL peut prendre son repos journalier normal (11h) :",
r:[{t:"Uniquement à son domicile"},{t:"Dans le véhicule, dans un établissement hôtelier, ou dans tout lieu approprié",ok:true},{t:"Uniquement dans des établissements agréés"},{t:"Uniquement dans les dépôts de l'employeur"}],
x:"Bonne réponse : Dans le véhicule, dans un établissement hôtelier, ou dans tout lieu approprié. Le repos journalier normal (11 heures consécutives) peut être pris dans le véhicule (si le véhicule dispose d'un couchette appropriée et est à l'arrêt), dans un hébergement, ou dans tout lieu adapté. Contrairement au repos hebdomadaire normal, le repos journalier peut légalement être pris en cabine."},

{id:2174,prog:'LOURD',theme:'lo-social',d:2,
e:"La carte conducteur du tachygraphe numérique est valable :",
r:[{t:"1 an"},{t:"5 ans",ok:true},{t:"3 ans"},{t:"10 ans"}],
x:"Bonne réponse : 5 ans. La carte conducteur du tachygraphe numérique est valable 5 ans. Elle doit être renouvelée avant expiration. La carte enregistre les activités des conducteurs (conduite, repos, travail, disponibilité)."},

{id:2175,prog:'LOURD',theme:'lo-civil',d:2,
e:"L'action récursoire du commissionnaire de transport contre son sous-traitant :",
r:[{t:"N'est pas possible en droit français"},{t:"Permet au commissionnaire d'exercer contre le sous-traitant les droits qu'il a indemnisés au client",ok:true},{t:"Oblige le commissionnaire à rembourser le sous-traitant"},{t:"Est limitée à 50 % du montant indemnisé"}],
x:"Bonne réponse : Permet au commissionnaire d'exercer contre le sous-traitant les droits qu'il a indemnisés au client. Après avoir indemnisé son client, le commissionnaire peut se retourner contre le transporteur sous-traitant défaillant via l'action récursoire. Il exerce les droits de son client contre le sous-traitant, en subrogation. Cette action est soumise aux mêmes délais de prescription que l'action directe."},

{id:2176,prog:'LOURD',theme:'lo-gestion',d:3,
e:"La valeur résiduelle nette d'un tracteur acheté 120 000 € amorti sur 5 ans, après 3 ans, est de :",
r:[{t:"60 000 €"},{t:"48 000 €",ok:true},{t:"72 000 €"},{t:"0 €"}],
x:"Bonne réponse : 48 000 €. Amortissement annuel linéaire = 120 000 / 5 = 24 000 €/an. Après 3 ans, amortissements cumulés = 3 × 24 000 = 72 000 €. Valeur nette comptable (VNC) = 120 000 - 72 000 = 48 000 €. La VNC représente la valeur résiduelle du bien au bilan."},

{id:2177,prog:'LOURD',theme:'cl-social',d:2,
e:"Le multi-emploi d'un conducteur PL chez deux transporteurs différents est :",
r:[{t:"Totalement interdit"},{t:"Possible mais les temps de conduite et repos doivent être partagés entre les deux employeurs",ok:true},{t:"Libre sans restriction"},{t:"Possible uniquement à temps partiel"}],
x:"Bonne réponse : Possible mais les temps de conduite et repos doivent être partagés entre les deux employeurs. Un conducteur PL peut travailler pour plusieurs employeurs, mais les durées de conduite et de repos s'appliquent globalement (pas de double quota). Les employeurs doivent coordonner les plannings pour respecter les règles 561/2006. Chaque employeur doit disposer de toutes les informations nécessaires."},

{id:2178,prog:'LOURD',theme:'lo-regl',d:1,
e:"Le PTAC d'un ensemble routier standard (tracteur + semi 5 essieux) est limité en France à :",
r:[{t:"38 tonnes"},{t:"40 tonnes",ok:true},{t:"44 tonnes"},{t:"50 tonnes"}],
x:"Bonne réponse : 40 tonnes. Le PTAC maximum d'un ensemble routier à 5 essieux en France est de 40 tonnes en général. Des exceptions existent pour le transport combiné (44 tonnes avec conteneurs ISO) et pour des configurations spéciales (48 tonnes pour le bois avec 6 essieux). Les 44 tonnes sont également autorisées pour certains transports de denrées en conteneurs."},

{id:2179,prog:'LOURD',theme:'cl-social',d:2,
e:"Le bilan de compétences peut être demandé par :",
r:[{t:"Uniquement l'employeur"},{t:"Le salarié de sa propre initiative, via son CPF",ok:true},{t:"Uniquement Pôle Emploi"},{t:"Uniquement en cas de licenciement économique"}],
x:"Bonne réponse : Le salarié de sa propre initiative, via son CPF. Le bilan de compétences peut être à l'initiative du salarié (financement via CPF ou plan de développement des compétences) ou de l'employeur (avec accord du salarié obligatoire). Il est réalisé par un prestataire externe, dure maximum 24 heures réparties sur plusieurs semaines, et ses conclusions appartiennent au salarié."},

{id:2180,prog:'LOURD',theme:'lo-gestion',d:1,
e:"Le ratio de liquidité générale d'une entreprise est considéré comme satisfaisant lorsqu'il est :",
r:[{t:"Inférieur à 0,5"},{t:"Supérieur ou égal à 1",ok:true},{t:"Exactement égal à 0"},{t:"Supérieur à 5"}],
x:"Bonne réponse : Supérieur ou égal à 1. Le ratio de liquidité générale = Actif circulant / Dettes à court terme. Un ratio ≥ 1 signifie que l'entreprise peut faire face à ses dettes à court terme avec ses actifs circulants. En dessous de 1, risque de problème de trésorerie."},

{id:2181,prog:'LOURD',theme:'cl-social',d:2,
e:"La médaille du travail dans les transports routiers est attribuée à partir de :",
r:[{t:"10 ans de service"},{t:"20 ans de service (médaille d'argent)",ok:true},{t:"30 ans de service"},{t:"5 ans de service"}],
x:"Bonne réponse : 20 ans de service (médaille d'argent). La médaille d'honneur du travail est accordée par le Ministère du Travail sur demande de l'employeur pour les salariés justifiant : 20 ans (Argent), 30 ans (Vermeil), 35 ans (Or), 40 ans (Grand-Or). Elle peut être remise lors d'une cérémonie et s'accompagne d'une gratification versée par l'employeur (soumise à conditions sociales/fiscales)."},

{id:2182,prog:'LOURD',theme:'lo-regl',d:2,
e:"Les restrictions de circulation le week-end pour les PL ne s'appliquent pas aux :",
r:[{t:"Transports de déménagement"},{t:"Transports de denrées périssables et transports urgents médicaux",ok:true},{t:"Transports de matériaux de construction"},{t:"Transports de machines agricoles"}],
x:"Bonne réponse : Transports de denrées périssables et transports urgents médicaux. De nombreuses dérogations aux restrictions de circulation du week-end existent : denrées périssables, transports médicaux urgents, transports de carburant, animaux vivants, livraison de journaux, transports pour des événements sportifs ou culturels, approvisionnement des marchés… Ces dérogations sont listées dans l'arrêté du 2 mars 2015."},

{id:2183,prog:'LOURD',theme:'lo-intl',d:2,
e:"L'Incoterm FCA (Free Carrier) est recommandé pour le transport routier car :",
r:[{t:"Il est le moins cher"},{t:"Le transfert des risques se fait chez le vendeur, ce qui permet à l'acheteur de contrôler le transport et les assurances",ok:true},{t:"Il inclut le dédouanement"},{t:"Il est obligatoire pour les transports dangereux"}],
x:"Bonne réponse : Le transfert des risques se fait chez le vendeur, ce qui permet à l'acheteur de contrôler le transport et les assurances. FCA est l'Incoterm recommandé pour les transports routiers (par opposition à EXW) car il permet à l'acheteur de désigner son propre transporteur tout en laissant au vendeur la responsabilité du dédouanement à l'export. Le risque se transfère dès la remise au transporteur désigné par l'acheteur. C'est plus pratique et juridiquement clair que EXW."},

{id:2184,prog:'LOURD',theme:'lo-regl',d:2,
e:"Les plages horaires de circulation interdites aux PL de plus de 7,5t en France sont :",
r:[{t:"Samedi de 22h à lundi 6h"},{t:"Samedi de 22h à dimanche 22h et jours fériés",ok:true},{t:"Dimanche de 0h à 24h uniquement"},{t:"Il n'y a pas d'interdiction de circulation pour les PL"}],
x:"Bonne réponse : Samedi de 22h à dimanche 22h et jours fériés. En France, les PL de plus de 7,5t sont soumis à des restrictions de circulation le week-end : interdiction du samedi 22h au dimanche 22h et certains jours fériés. Des dérogations existent pour les transports urgents, périssables ou certains secteurs. Ces horaires peuvent varier légèrement selon les arrêtés préfectoraux."},

{id:2185,prog:'LOURD',theme:'lo-gestion',d:3,
e:"Dans le cadre d'une reprise d'une PME de transport PL, la due diligence financière consiste à :",
r:[{t:"Vérifier uniquement les comptes du dernier exercice"},{t:"Analyser en profondeur les 3-5 derniers bilans, CR, engagements hors-bilan, litiges, état du parc et contrats clients",ok:true},{t:"Vérifier uniquement le capital social"},{t:"S'assurer que les licences sont valides"}],
x:"Bonne réponse : Analyser en profondeur les 3-5 derniers bilans, CR, engagements hors-bilan, litiges, état du parc et contrats clients. La due diligence financière est un audit approfondi réalisé avant une acquisition. Elle comprend : analyse des comptes historiques (3-5 ans), vérification des engagements hors-bilan (crédit-bail, cautions, contentieux), état réel du parc de véhicules (inspection physique et documentation), analyse de la base clients (concentration, pérennité des contrats) et vérification de la conformité réglementaire (licences, infractions en cours)."},

{id:2186,prog:'LOURD',theme:'cl-social',d:2,
e:"L'employeur doit remettre au conducteur, en fin de semaine de travail, :",
r:[{t:"Sa feuille de temps individuelle"},{t:"Les données téléchargées de sa carte conducteur"},{t:"Une attestation d'activités signée pour les jours non travaillés",ok:true},{t:"Son planning de la semaine suivante"}],
x:"Bonne réponse : Une attestation d'activités signée pour les jours non travaillés. L'attestation d'activités (ou certificat d'activités) est établie et signée par l'employeur pour les jours où le conducteur n'a pas conduit de véhicule équipé d'un tachygraphe (jours de repos, de maladie, de congés, de formation…). Elle permet aux contrôleurs de reconstituer l'historique des 28 derniers jours lors d'un contrôle routier."},

{id:2187,prog:'LOURD',theme:'lo-intl',d:1,
e:"L'accord ATP (transport sous température dirigée) s'applique :",
r:[{t:"Uniquement aux transports nationaux"},{t:"Aux transports internationaux de denrées périssables entre pays signataires",ok:true},{t:"Uniquement aux transports > 100 km"},{t:"Uniquement aux produits congelés"}],
x:"Bonne réponse : Aux transports internationaux de denrées périssables entre pays signataires. L'accord ATP (Accord sur les Transports internationaux de denrées Périssables) fixe les conditions techniques (efficacité isotherme, température) pour le transport de denrées périssables entre pays signataires (principalement européens). Il impose des normes pour les équipements de transport (isothermes, réfrigérants, frigorifiques) et des températures maximales selon les produits."},

{id:2188,prog:'LOURD',theme:'lo-intl',d:1,
e:"Le T2 (transit communautaire interne) est utilisé pour :",
r:[{t:"Les marchandises non communautaires"},{t:"Les marchandises de statut communautaire qui passent par un pays tiers",ok:true},{t:"Tous les transports intra-UE"},{t:"Les transports de matières dangereuses uniquement"}],
x:"Bonne réponse : Les marchandises de statut communautaire qui passent par un pays tiers. Le document T2 (transit externe de marchandises communautaires) est utilisé quand des marchandises communautaires (en libre pratique dans l'UE) doivent traverser un pays tiers (ex : Suisse, Serbie) pour rejoindre une autre partie de l'UE. Il garantit qu'aucune importation n'a eu lieu dans le pays de transit."},

{id:2189,prog:'LOURD',theme:'lo-gestion',d:2,
e:"La CAF (Capacité d'Autofinancement) permet principalement de :",
r:[{t:"Calculer la TVA à payer"},{t:"Rembourser les emprunts et financer de nouveaux investissements sans recourir à des capitaux extérieurs",ok:true},{t:"Calculer les cotisations sociales"},{t:"Mesurer la liquidité immédiate"}],
x:"Bonne réponse : Rembourser les emprunts et financer de nouveaux investissements sans recourir à des capitaux extérieurs. CAF = Résultat net + Dotations amortissements et provisions - Reprises. Elle représente le flux interne de trésorerie généré par l'activité. Une CAF suffisante permet de rembourser les annuités d'emprunt, de financer une partie des nouveaux investissements et de constituer des réserves. Elle est l'indicateur clé de la santé financière d'un transporteur PL."},

{id:2190,prog:'LOURD',theme:'lo-regl',d:1,
e:"La FIMO (Formation Initiale Minimale Obligatoire) pour les nouveaux conducteurs PL dure :",
r:[{t:"105 heures (3 semaines)"},{t:"280 heures (8 semaines) pour les débutants complets",ok:true},{t:"35 heures"},{t:"140 heures"}],
x:"Bonne réponse : 280 heures (8 semaines) pour les débutants complets. La FIMO initiale (CQC Initial) est de 280 heures (8 semaines) pour les conducteurs n'ayant aucune expérience. Elle peut être réduite à 140 heures pour les conducteurs justifiant d'une expérience antérieure. Elle est sanctionnée par un examen."},

{id:2191,prog:'LOURD',theme:'lo-regl',d:2,
e:"Le limiteur de vitesse obligatoire sur les PL neufs est réglé à :",
r:[{t:"80 km/h"},{t:"90 km/h",ok:true},{t:"100 km/h"},{t:"110 km/h"}],
x:"Bonne réponse : 90 km/h. La directive 92/6/CEE (modifiée par la directive 2002/85/CE) impose l'installation de limiteurs de vitesse sur les PL de PTAC > 3,5t. Les PL de PTAC > 12t sont limités à 90 km/h, les bus et autocars à 100 km/h. Ces limiteurs doivent être plombés et conformes à la norme ECE R89."},

{id:2192,prog:'LOURD',theme:'lo-gestion',d:1,
e:"Le résultat financier d'une entreprise de transport comprend :",
r:[{t:"Les loyers de crédit-bail"},{t:"Les produits et charges liés au financement (intérêts d'emprunt, escomptes, revenus financiers)",ok:true},{t:"Les plus-values de cession de véhicules"},{t:"Les subventions d'exploitation"}],
x:"Bonne réponse : Les produits et charges liés au financement (intérêts d'emprunt, escomptes, revenus financiers). Le résultat financier = Produits financiers (intérêts reçus, revenus de participations, gains de change) - Charges financières (intérêts d'emprunt, agios, pertes de change, charges d'escompte). Il est généralement négatif pour les entreprises de transport endettées. Les loyers de crédit-bail sont des charges d'exploitation, pas financières."},

{id:2193,prog:'LOURD',theme:'lo-gestion',d:1,
e:"Le coût du carburant représente approximativement quelle proportion du coût de revient d'un PL longue distance ?",
r:[{t:"5 à 10 %"},{t:"25 à 35 %",ok:true},{t:"50 %"},{t:"Plus de 60 %"}],
x:"Bonne réponse : 25 à 35 %. Le carburant représente généralement 25 à 35 % du coût de revient d'un PL (variable selon les prix, la distance, le type de transport). C'est le premier poste de charges variables. La surcharge carburant est souvent répercutée sur les clients via des clauses d'indexation CNR."},

{id:2194,prog:'LOURD',theme:'cl-social',d:2,
e:"En cas de multi-présence (deux conducteurs), le repos journalier peut être réduit à :",
r:[{t:"6 heures"},{t:"8 heures",ok:true},{t:"9 heures"},{t:"10 heures"}],
x:"Bonne réponse : 8 heures. Lorsqu'un véhicule est conduit par deux conducteurs (équipage), chaque conducteur doit prendre un repos journalier d'au moins 9 heures dans une période de 30 heures (au lieu de 11h en solo). Pendant le trajet, le conducteur non actif peut prendre son repos sur le siège passager."},

{id:2195,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le ratio d'autonomie financière = Capitaux propres / Total bilan. Un ratio de 35 % pour un transporteur PL est :",
r:[{t:"Insuffisant"},{t:"Satisfaisant — dans la norme sectorielle (30-40 %)",ok:true},{t:"Excellent"},{t:"Indique une sous-capitalisation grave"}],
x:"Bonne réponse : Satisfaisant — dans la norme sectorielle (30-40 %). Un ratio d'autonomie financière de 35 % est dans la norme pour le secteur transport routier. Les banques considèrent qu'un ratio ≥ 30 % est satisfaisant. En dessous de 20 %, l'entreprise est sous-capitalisée et dépend trop de ses créanciers. Au-delà de 50 %, l'entreprise pourrait optimiser son levier financier."},

{id:2196,prog:'LOURD',theme:'lo-civil',d:3,
e:"La responsabilité de plein droit du transporteur PL (sans faute à prouver) couvre :",
r:[{t:"Tous les dommages survenus pendant le transport"},{t:"Les pertes et avaries survenues entre la prise en charge et la livraison, sauf causes exonératoires",ok:true},{t:"Uniquement les accidents corporels"},{t:"Uniquement les dommages au véhicule"}],
x:"Bonne réponse : Les pertes et avaries survenues entre la prise en charge et la livraison, sauf causes exonératoires. Le transporteur est présumé responsable des pertes et avaries survenant entre la prise en charge et la livraison (responsabilité de plein droit, art. L.133-1 du Code de commerce). Il peut s'exonérer en prouvant une cause étrangère (force majeure, vice propre de la marchandise, faute de l'expéditeur). Cette responsabilité est limitée aux plafonds légaux."},

{id:2197,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le transport routier de marchandises entre deux États membres de l'UE nécessite :",
r:[{t:"Une autorisation bilatérale spécifique"},{t:"Uniquement une licence communautaire valide et la copie certifiée à bord",ok:true},{t:"Un carnet TIR"},{t:"Une autorisation préfectorale française"}],
x:"Bonne réponse : Uniquement une licence communautaire valide et la copie certifiée à bord. Pour les transports de marchandises entre États membres de l'UE, seule la licence communautaire (délivrée pour 10 ans par l'autorité compétente du pays d'établissement) est nécessaire. La copie certifiée conforme doit être à bord du véhicule. Aucune autorisation bilatérale supplémentaire n'est requise au sein de l'UE (principe de libre circulation)."},

{id:2198,prog:'LOURD',theme:'lo-intl',d:1,
e:"En transport international sous CMR, la responsabilité du transporteur est limitée à :",
r:[{t:"8,33 DTS par kilogramme de poids brut de la marchandise",ok:true},{t:"La valeur déclarée sur la facture commerciale"},{t:"1 000 € par colis"},{t:"10 % de la valeur assurée"}],
x:"Bonne réponse : 8,33 DTS par kilogramme de poids brut de la marchandise. Selon la convention CMR (art. 23), la responsabilité du transporteur est limitée à 8,33 DTS (Droits de Tirage Spéciaux) par kg de poids brut manquant. Une déclaration de valeur ou d'intérêt spécial permet d'augmenter cette limite."},

{id:2199,prog:'LOURD',theme:'cl-social',d:1,
e:"La FIMO (Formation Initiale Minimale Obligatoire) pour un nouveau conducteur PL dure :",
r:[{t:"35 heures"},{t:"280 heures (pour un débutant complet)",ok:true},{t:"105 heures"},{t:"140 heures"}],
x:"Bonne réponse : 280 heures (pour un débutant complet). La FIMO complète est de 280 heures (8 semaines) pour les conducteurs n'ayant aucune expérience préalable. Elle peut être réduite à 140 heures pour les conducteurs justifiant d'une expérience antérieure reconnue. Elle est sanctionnée par un examen et donne accès au CQC Initial (code 95)."},

{id:2200,prog:'LOURD',theme:'lo-social',d:2,
e:"La durée de conservation des données du chronotachygraphe numérique par l'employeur est de :",
r:[{t:"1 an"},{t:"12 mois minimum",ok:true},{t:"6 mois"},{t:"5 ans"}],
x:"Bonne réponse : 12 mois minimum. Les données du chronotachygraphe (disques et cartes) doivent être conservées par l'entreprise pendant au moins 12 mois. L'entreprise doit les présenter en cas de contrôle."},

{id:2201,prog:'LOURD',theme:'lo-regl',d:2,
e:"La vignette Crit'Air classe les PL de :",
r:[{t:"Crit'Air 1 à 3 uniquement"},{t:"Crit'Air 1 (Euro 6) à Crit'Air 5 (Euro 2) + non classé (avant Euro 1)",ok:true},{t:"Crit'Air 3 à 5 uniquement pour les PL"},{t:"Les PL ne sont pas concernés"}],
x:"Bonne réponse : Crit'Air 1 (Euro 6) à Crit'Air 5 (Euro 2) + non classé (avant Euro 1). Les PL sont classés de Crit'Air 1 (norme Euro 6, le moins polluant) à Crit'Air 5 (norme Euro 2) et non classé (avant Euro 1 ou normes antérieures). Les ZFE-m interdisent l'accès aux véhicules les plus polluants selon le calendrier local. Les PL Euro 5 = Crit'Air 2, Euro 4 = Crit'Air 3, Euro 3 = Crit'Air 4."},

{id:2202,prog:'LOURD',theme:'lo-gestion',d:3,
e:"La méthode ABC (Activity Based Costing) appliquée au transport PL permet de :",
r:[{t:"Calculer uniquement le coût du carburant"},{t:"Affecter les coûts indirects aux activités réelles (tournées, clients, types de transport) pour une tarification précise",ok:true},{t:"Automatiser la facturation"},{t:"Calculer les charges sociales"}],
x:"Bonne réponse : Affecter les coûts indirects aux activités réelles (tournées, clients, types de transport) pour une tarification précise. L'ABC costing répartit les charges indirectes (structure, administration, management) selon des inducteurs d'activité réels plutôt que par des clés de répartition arbitraires. Pour le transport PL, elle permet d'identifier les tournées ou clients réellement rentables vs ceux qui consomment trop de ressources administratives ou opérationnelles."},

{id:2203,prog:'LOURD',theme:'lo-social',d:3,
e:"Quel est le délai légal de prévenance pour modifier les horaires d'un conducteur routier selon la convention collective ?",
r:[{t:"24 heures"},{t:"7 jours ouvrés",ok:true},{t:"48 heures"},{t:"3 jours calendaires"}],
x:"Bonne réponse : 7 jours ouvrés. La convention collective nationale des transports routiers prévoit un délai de prévenance de 7 jours ouvrés pour toute modification d'horaires de travail, sauf accord entre les parties ou urgence dûment justifiée."},

{id:2204,prog:'LOURD',theme:'lo-civil',d:2,
e:"Le droit de rétention du transporteur s'exerce :",
r:[{t:"À tout moment, même après livraison"},{t:"Tant que la marchandise est en sa possession et que le fret n'est pas payé",ok:true},{t:"Uniquement en cas de faillite du client"},{t:"Uniquement pour les transports > 10 000 €"}],
x:"Bonne réponse : Tant que la marchandise est en sa possession et que le fret n'est pas payé. Le transporteur peut exercer son droit de rétention sur la marchandise tant qu'elle est en sa possession et que sa créance (fret, frais, accessoires) n'est pas réglée. Une fois la marchandise livrée, ce droit disparaît. C'est une sûreté efficace pour garantir le paiement."},

{id:2205,prog:'LOURD',theme:'cl-social',d:2,
e:"Un conducteur peut prendre son repos hebdomadaire en cabine :",
r:[{t:"Toujours, c'est autorisé"},{t:"Jamais — le repos hebdomadaire normal doit être pris dans un hébergement adéquat hors du véhicule",ok:true},{t:"Uniquement pour le repos réduit (24h)"},{t:"Uniquement à l'étranger"}],
x:"Bonne réponse : Jamais — le repos hebdomadaire normal doit être pris dans un hébergement adéquat hors du véhicule. Depuis l'arrêt de la CJUE (2020) et le règlement (UE) 2020/1054, le repos hebdomadaire normal (45h) ne peut pas être pris dans la cabine du véhicule. Il doit être pris dans un hébergement adéquat (hôtel, chambre d'hôte…) avec des installations sanitaires. Le repos hebdomadaire réduit (24h) peut être pris en cabine."},

{id:2206,prog:'LOURD',theme:'cl-social',d:2,
e:"La 'semaine' au sens du règlement 561/2006 commence :",
r:[{t:"Le lundi à 00h00",ok:true},{t:"Le dimanche à minuit"},{t:"Au premier départ du conducteur"},{t:"Le 1er jour du mois"}],
x:"Bonne réponse : Le lundi à 00h00. Selon le règlement 561/2006, la semaine commence le lundi à 00h00 et se termine le dimanche à 24h00. Cette définition est importante pour le calcul des durées maximales de conduite hebdomadaires (56h/semaine) et bihebdomadaires (90h/2 semaines)."},

{id:2207,prog:'LOURD',theme:'lo-regl',d:3,
e:"Le plan de déplacement d'entreprise (PDE) dans une PME de transport vise à :",
r:[{t:"Planifier les tournées de livraison"},{t:"Réduire les déplacements en voiture individuelle des salariés domicile-travail en favorisant les alternatives",ok:true},{t:"Optimiser les itinéraires des PL"},{t:"Gérer les congés des conducteurs"}],
x:"Bonne réponse : Réduire les déplacements en voiture individuelle des salariés domicile-travail en favorisant les alternatives. Le PDE (ou PDMe pour les PME) est une démarche volontaire visant à optimiser les déplacements des salariés entre leur domicile et leur lieu de travail : covoiturage, transport en commun, vélo, télétravail. Il peut donner accès au Forfait Mobilités Durables (FMD). Pour une entreprise de transport, c'est distinct de l'optimisation des tournées de livraison."},

{id:2208,prog:'LOURD',theme:'lo-civil',d:2,
e:"En transport national, le contrat type 'messagerie' s'applique aux envois :",
r:[{t:"De toute taille"},{t:"Inférieurs à 3 tonnes ou 3 mètres linéaires de plancher",ok:true},{t:"Uniquement > 500 kg"},{t:"Uniquement pour les colis < 30 kg"}],
x:"Bonne réponse : Inférieurs à 3 tonnes ou 3 mètres linéaires de plancher. Le contrat type applicable au transport de messagerie (arrêté du 15 mars 1993 modifié) s'applique aux envois de moins de 3 tonnes ou occupant moins de 3 mètres linéaires du plancher d'un PL. Il prévoit des délais de livraison J+1 (24h), des procédures de réserves et des plafonds d'indemnisation spécifiques."},

{id:2209,prog:'LOURD',theme:'cl-social',d:2,
e:"En cas de contrôle routier, le conducteur doit présenter les données du tachygraphe des :",
r:[{t:"7 derniers jours"},{t:"28 derniers jours",ok:true},{t:"3 derniers mois"},{t:"Jours de conduite uniquement"}],
x:"Bonne réponse : 28 derniers jours. Le conducteur doit pouvoir présenter lors d'un contrôle : les données enregistrées par le tachygraphe numérique (ou les disques pour le tachygraphe analogique) couvrant les 28 jours précédant le contrôle, plus les données du jour en cours. En cas de passage à un autre véhicule, les données des deux appareils sont exigibles."},

{id:2210,prog:'LOURD',theme:'lo-social',d:2,
e:"Le repos hebdomadaire normal d'un conducteur PL est de :",
r:[{t:"24 heures consécutives"},{t:"35 heures consécutives",ok:true},{t:"45 heures consécutives"},{t:"48 heures consécutives"}],
x:"Bonne réponse : 35 heures consécutives. Le repos hebdomadaire normal est de 45 heures consécutives minimum. Il peut être réduit à 24 heures (repos hebdomadaire réduit) dans certaines conditions, avec récupération obligatoire avant la fin de la 3ème semaine suivante."},

{id:2211,prog:'LOURD',theme:'lo-regl',d:2,
e:"Le transport de déchets dangereux nécessite :",
r:[{t:"Uniquement un contrat de transport"},{t:"Un agrément spécifique pour le transport de déchets dangereux + documents de suivi (BSDD)",ok:true},{t:"Uniquement un véhicule fermé"},{t:"Aucune réglementation spécifique"}],
x:"Bonne réponse : Un agrément spécifique pour le transport de déchets dangereux + documents de suivi (BSDD). Le transport de déchets dangereux est soumis à la réglementation ADR (si déchets classés matières dangereuses) ET à la réglementation sur les déchets (Code de l'environnement) : agrément préfectoral pour le transporteur de déchets dangereux, Bordereau de Suivi des Déchets Dangereux (BSDD) obligatoire pour tracer les déchets de leur producteur à leur élimination."},

{id:2212,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le prix de revient d'un transport est composé de :",
r:[{t:"Uniquement du carburant et des péages"},{t:"Charges fixes (amortissement, assurance) + charges variables (carburant, pneus) + charges de structure",ok:true},{t:"Uniquement du salaire du conducteur"},{t:"Du prix facturé moins la marge"}],
x:"Bonne réponse : Charges fixes (amortissement, assurance) + charges variables (carburant, pneus) + charges de structure. Le prix de revient d'un transport intègre : charges directes fixes (amortissement véhicule, assurance), charges directes variables (carburant, pneus, entretien, péages) et une quote-part des charges de structure (loyer, personnel administratif, frais généraux)."},

{id:2213,prog:'LOURD',theme:'lo-regl',d:1,
e:"La charge maximale par essieu sur les routes françaises pour un essieu simple est de :",
r:[{t:"8 tonnes"},{t:"13 tonnes",ok:true},{t:"18 tonnes"},{t:"20 tonnes"}],
x:"Bonne réponse : 13 tonnes. La charge maximale par essieu en France : essieu simple = 13 tonnes (ou 11,5t pour certains essieux directeurs), tandem (deux essieux) = 20t, tridem (3 essieux) = 24t. Ces limites visent à protéger le réseau routier de la dégradation prématurée. Le dépassement de ces charges est sanctionné et peut être interdit sur certains tronçons."},

{id:2214,prog:'LOURD',theme:'lo-regl',d:2,
e:"La responsabilité de l'employeur pour les accidents de trajet de ses conducteurs est couverte par :",
r:[{t:"L'assurance RC du véhicule uniquement"},{t:"L'assurance accidents du travail/maladies professionnelles (AT/MP) obligatoire",ok:true},{t:"L'assurance personnelle du conducteur"},{t:"Il n'y a pas de responsabilité de l'employeur"}],
x:"Bonne réponse : L'assurance accidents du travail/maladies professionnelles (AT/MP) obligatoire. Les accidents de trajet (domicile-travail) sont pris en charge par l'assurance AT/MP (gérée par la CPAM, financée par des cotisations patronales). L'employeur cotise obligatoirement à ce régime. Les accidents de mission (pendant le travail, y compris en voiture personnelle) sont également des AT. L'employeur peut aussi être poursuivi pour faute inexcusable si la sécurité était insuffisante."},

{id:2215,prog:'LOURD',theme:'lo-gestion',d:2,
e:"La provision pour renouvellement du parc de véhicules est :",
r:[{t:"Une charge déductible fiscalement immédiatement"},{t:"Une dotation aux provisions pour charges futures, déductible fiscalement sous conditions",ok:true},{t:"Un investissement non déductible"},{t:"Un capital réservé aux dividendes"}],
x:"Bonne réponse : Une dotation aux provisions pour charges futures, déductible fiscalement sous conditions. Une provision pour renouvellement de véhicules peut être constituée si elle répond aux critères de déductibilité fiscale : être nettement précisée (objet, nature et montant), résulter d'un événement survenu pendant l'exercice, et être probable. Elle réduit le résultat imposable de l'exercice."},

{id:2216,prog:'LOURD',theme:'lo-intl',d:2,
e:"La déclaration d'exportation (EX1 ou DAE électronique) est obligatoire pour :",
r:[{t:"Tout transport routier"},{t:"Les exportations de marchandises hors de l'UE",ok:true},{t:"Uniquement les marchandises > 1 000 €"},{t:"Uniquement les marchandises réglementées"}],
x:"Bonne réponse : Les exportations de marchandises hors de l'UE. La déclaration d'exportation (formulaire EX1 ou DAE - Document d'Accompagnement Export dans le système DELTA) est obligatoire pour toute exportation de marchandises hors du territoire douanier de l'UE. Elle est réalisée par l'exportateur ou son représentant en douane (transitaire agréé). Elle est dématérialisée depuis 2011 en France."},

{id:2217,prog:'LOURD',theme:'cl-social',d:3,
e:"La responsabilité de l'employeur en cas d'infraction aux règles de temps de conduite est engagée lorsque :",
r:[{t:"Seulement si le conducteur était en faute grave"},{t:"Dès lors que l'organisation du travail rendait les dépassements inévitables ou que l'employeur les a ordonnés",ok:true},{t:"Jamais — seul le conducteur est responsable"},{t:"Uniquement si l'infraction a causé un accident"}],
x:"Bonne réponse : Dès lors que l'organisation du travail rendait les dépassements inévitables ou que l'employeur les a ordonnés. L'employeur peut être poursuivi pour complicité ou participation aux infractions aux règles de conduite si : il a fixé des délais impossibles à respecter, il a ordonné ou toléré les dépassements, ou si l'organisation des tournées rendait le non-respect inévitable. La charge de la preuve incombe aux autorités de contrôle."},

{id:2218,prog:'LOURD',theme:'lo-regl',d:1,
e:"Le certificat d'immatriculation d'un semi-remorque doit mentionner :",
r:[{t:"Uniquement le PTAC de la semi-remorque"},{t:"Le PTAC, la masse à vide et le numéro de chassis",ok:true},{t:"Uniquement le numéro de chassis"},{t:"Le nom du transporteur propriétaire"}],
x:"Bonne réponse : Le PTAC, la masse à vide et le numéro de chassis. La carte grise d'une semi-remorque mentionne obligatoirement : le PTAC (charge maximum autorisée en charge), la masse en ordre de marche, la charge maximale sur la sellette, le numéro de châssis (VIN), les dimensions, la marque et le modèle. Ces données sont essentielles pour le calcul du PTRA de l'ensemble."},

{id:2219,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le cabotage routier dans l'UE est limité à :",
r:[{t:"Illimité en UE"},{t:"3 opérations de transport en 7 jours après un transport international entrant",ok:true},{t:"1 seule opération par voyage"},{t:"5 opérations par mois"}],
x:"Bonne réponse : 3 opérations de transport en 7 jours après un transport international entrant. Le règlement (CE) 1072/2009 limite le cabotage à 3 opérations de transport intérieur dans le pays d'accueil, dans les 7 jours suivant le déchargement du transport international entrant. Après ce délai, le véhicule doit quitter le pays avant de pouvoir effectuer un nouveau cabotage. Cette règle vise à éviter la concurrence déloyale."},

{id:2220,prog:'LOURD',theme:'lo-regl',d:2,
e:"L'immobilisation d'un véhicule PL par les forces de l'ordre peut être prononcée en cas de :",
r:[{t:"Tout retard de livraison"},{t:"Dépassement des temps de conduite, surcharge, défaut de documents, défaut grave de maintenance",ok:true},{t:"Uniquement en cas d'accident"},{t:"Seulement pour les infractions ADR"}],
x:"Bonne réponse : Dépassement des temps de conduite, surcharge, défaut de documents, défaut grave de maintenance. Les forces de l'ordre (Police, Gendarmerie, inspection du travail, DREAL) peuvent immobiliser un PL en cas de : dépassement des temps de conduite (conducteur ayant épuisé ses droits), surcharge dépassant les seuils, défaut de tachygraphe ou de carte conducteur valide, défect grave de sécurité mécanique, ou non-présentation de documents obligatoires."},

{id:2221,prog:'LOURD',theme:'cl-social',d:1,
e:"La CCN transports routiers (CCNTR) s'applique aux entreprises dont l'activité principale est :",
r:[{t:"La location de véhicules"},{t:"Le transport routier de marchandises et activités auxiliaires",ok:true},{t:"La fabrication de véhicules"},{t:"Le transport de voyageurs uniquement"}],
x:"Bonne réponse : Le transport routier de marchandises et activités auxiliaires. La CCNTR s'applique à toutes les entreprises dont l'activité principale relève du transport routier de marchandises (y compris commissionnaires, auxiliaires, coursiers, déménageurs…). Elle est étendue, ce qui la rend applicable même aux entreprises non adhérentes à une organisation patronale signataire."},

{id:2222,prog:'LOURD',theme:'lo-intl',d:2,
e:"L'Incoterm EXW (Ex Works) est le moins favorable à l'acheteur car :",
r:[{t:"L'acheteur paie le transport uniquement"},{t:"L'acheteur prend en charge tous les frais et risques depuis l'établissement du vendeur, y compris l'export",ok:true},{t:"Le vendeur livre jusqu'à la frontière"},{t:"L'acheteur paie les droits de douane d'import uniquement"}],
x:"Bonne réponse : L'acheteur prend en charge tous les frais et risques depuis l'établissement du vendeur, y compris l'export. EXW est l'Incoterm le moins favorable à l'acheteur : le vendeur met les marchandises à disposition dans ses locaux. L'acheteur assume tous les frais et risques depuis ce point : chargement, transport, dédouanement à l'export (difficile pour un acheteur étranger) et à l'import, livraison finale. FCA est souvent préféré à EXW pour les transports routiers."},

{id:2223,prog:'LOURD',theme:'lo-intl',d:3,
e:"Le principe de réciprocité dans le transport routier international signifie :",
r:[{t:"Les transporteurs de deux pays se partagent les revenus"},{t:"Un pays accorde aux transporteurs de l'autre pays les mêmes droits que ceux accordés à ses propres transporteurs",ok:true},{t:"Les deux pays appliquent les mêmes tarifs"},{t:"Le transit est gratuit entre pays réciprocitaires"}],
x:"Bonne réponse : Un pays accorde aux transporteurs de l'autre pays les mêmes droits que ceux accordés à ses propres transporteurs. Le principe de réciprocité (accordé bilatéralement) permet à des transporteurs de deux pays de circuler sur le territoire de l'autre avec les mêmes droits que les nationaux. En l'absence d'accord ou de réciprocité, des autorisations spéciales (contingents de passages) sont nécessaires. Au sein de l'UE, la libre circulation est garantie par la licence communautaire."},

{id:2224,prog:'LOURD',theme:'lo-gestion',d:3,
e:"Le ratio de couverture des frais fixes mesure :",
r:[{t:"Le nombre d'heures de conduite par jour"},{t:"La capacité de la marge sur coûts variables à couvrir les charges fixes",ok:true},{t:"Le niveau de trésorerie disponible"},{t:"Le taux d'endettement de l'entreprise"}],
x:"Bonne réponse : La capacité de la marge sur coûts variables à couvrir les charges fixes. Ratio de couverture des frais fixes = MCV / Charges fixes × 100. Un ratio > 100 % signifie que la MCV couvre l'intégralité des charges fixes (l'entreprise est bénéficiaire). Un ratio < 100 % indique que les charges fixes ne sont pas entièrement couvertes."},

{id:2225,prog:'LOURD',theme:'cl-social',d:1,
e:"Le salaire minimum conventionnel d'un conducteur PL (grande messagerie, coefficient 150M) est :",
r:[{t:"Identique au SMIC"},{t:"Fixé par la CCN transports routiers et supérieur au SMIC",ok:true},{t:"Librement fixé par l'employeur"},{t:"Identique au salaire médian du secteur"}],
x:"Bonne réponse : Fixé par la CCN transports routiers et supérieur au SMIC. La CCN transports routiers fixe des salaires minimaux conventionnels par coefficient (catégorie de véhicule, type de transport). Ces minima sont supérieurs au SMIC pour certaines catégories et font l'objet de négociations de branche régulières. L'employeur doit appliquer au minimum le salaire conventionnel correspondant à la qualification du conducteur."},

{id:2226,prog:'LOURD',theme:'cl-social',d:3,
e:"En cas d'utilisation frauduleuse du tachygraphe (aimant, câble modifié…), les sanctions pour le conducteur sont :",
r:[{t:"Une simple contravention de 1ère classe"},{t:"Un délit pouvant aller jusqu'à 2 ans d'emprisonnement et 30 000 € d'amende",ok:true},{t:"Uniquement une suspension de permis"},{t:"Une amende forfaitaire de 500 €"}],
x:"Bonne réponse : Un délit pouvant aller jusqu'à 2 ans d'emprisonnement et 30 000 € d'amende. La falsification du tachygraphe est un délit grave : elle peut entraîner jusqu'à 2 ans d'emprisonnement et 30 000 € d'amende pour le conducteur. L'employeur complice encourt des peines similaires. La carte conducteur peut être suspendue ou annulée."},

{id:2227,prog:'LOURD',theme:'lo-gestion',d:1,
e:"Le prix du carburant représente environ quelle part du coût de revient d'un PL longue distance ?",
r:[{t:"5 à 10 %"},{t:"20 à 35 %",ok:true},{t:"50 %"},{t:"Plus de 60 %"}],
x:"Bonne réponse : 20 à 35 %. Le carburant représente typiquement 25 à 35 % du coût de revient d'un poids lourd (selon la distance, le type de transport et les prix du gazole). C'est le premier poste de charges variables. La surcharge carburant est souvent répercutée sur le prix de vente via des clauses d'indexation."},

{id:2228,prog:'LOURD',theme:'cl-social',d:1,
e:"Le tachygraphe numérique enregistre automatiquement :",
r:[{t:"Uniquement les heures de conduite"},{t:"La conduite, les repos, les autres travaux et les disponibilités",ok:true},{t:"Uniquement la vitesse et le kilométrage"},{t:"Uniquement les infractions"}],
x:"Bonne réponse : La conduite, les repos, les autres travaux et les disponibilités. Le tachygraphe numérique enregistre en temps réel : les activités du conducteur (conduite, repos, travail, disponibilité), la vitesse, la distance, l'heure et les données d'identification. Le conducteur sélectionne son activité sur l'appareil."},

{id:2229,prog:'LOURD',theme:'cl-social',d:2,
e:"La protection du conducteur PL en cas d'accident du travail inclut :",
r:[{t:"Uniquement les soins médicaux"},{t:"Soins médicaux pris en charge à 100 %, IJ majorées, rente AT si IPP et protection renforcée contre le licenciement",ok:true},{t:"Uniquement la prise en charge du véhicule"},{t:"Aucune protection spécifique"}],
x:"Bonne réponse : Soins médicaux pris en charge à 100 %, IJ majorées, rente AT si IPP et protection renforcée contre le licenciement. En cas d'accident du travail (dont les accidents de la route en mission), le conducteur bénéficie : de la prise en charge à 100 % des soins, d'indemnités journalières majorées (60 % puis 80 % vs 50-66 % en maladie ordinaire), et d'une rente si incapacité permanente partielle (IPP). Le licenciement pendant l'arrêt AT est très encadré."},

{id:2230,prog:'LOURD',theme:'lo-regl',d:3,
e:"Le transport exceptionnel (convoi) de dimension hors gabarit nécessite :",
r:[{t:"Uniquement le feux de détresse allumés"},{t:"Une autorisation préfectorale de transport exceptionnel (APTE)",ok:true},{t:"Un simple accord verbal avec les forces de l'ordre"},{t:"Aucune autorisation si accompagné d'un véhicule pilote"}],
x:"Bonne réponse : Une autorisation préfectorale de transport exceptionnel (APTE). Le transport exceptionnel (TEX) nécessite une Autorisation Préfectorale de Transport Exceptionnel (APTE). Selon les dimensions, 3 catégories existent. Un escorte ou accompagnement par véhicule(s) pilote(s) peut être requis."},

{id:2231,prog:'LOURD',theme:'lo-intl',d:1,
e:"En transport international sous CMR, les réserves pour avaries non apparentes sont valables si émises dans les :",
r:[{t:"24 heures"},{t:"7 jours suivant la livraison",ok:true},{t:"3 jours ouvrés"},{t:"1 mois"}],
x:"Bonne réponse : 7 jours suivant la livraison. L'art. 30 de la CMR fixe le délai à 7 jours suivant la livraison pour les avaries non apparentes (non visibles à la réception). Les réserves doivent être adressées par écrit au transporteur. Pour les avaries apparentes (visibles à la livraison), les réserves doivent être émises immédiatement lors de la livraison."},

{id:2232,prog:'LOURD',theme:'lo-regl',d:2,
e:"Un ensemble routier transportant 36 tonnes de marchandises sur 5 essieux dépasse-t-il le PTAC légal ?",
r:[{t:"Oui, le maximum est 32 tonnes"},{t:"Non, la limite de 40 tonnes n'est pas atteinte",ok:true},{t:"Oui, le maximum est 34 tonnes"},{t:"Non si autorisation préfectorale"}],
x:"Bonne réponse : Non, la limite de 40 tonnes n'est pas atteinte. Un ensemble routier standard à 5 essieux est autorisé jusqu'à 40 tonnes de PTAC en France. 36 tonnes reste dans les limites légales. Il faut aussi vérifier que la charge par essieu respecte les limites (essieu avant ≤ 7,5t, tandem ≤ 19t selon l'écartement)."},

{id:2233,prog:'LOURD',theme:'lo-acces',d:2,
e:"La licence communautaire est obligatoire pour les transports internationaux au sein de l'UE pour les véhicules dont le PTAC dépasse :",
r:[{t:"2,5 tonnes"},{t:"3,5 tonnes",ok:true},{t:"7,5 tonnes"},{t:"12 tonnes"}],
x:"Bonne réponse : 3,5 tonnes. La licence communautaire (délivrée par l'autorité compétente de l'État membre) est obligatoire pour effectuer des transports routiers internationaux de marchandises pour compte d'autrui avec des véhicules d'un PTAC supérieur à 3,5 tonnes."},

{id:2234,prog:'LOURD',theme:'cl-social',d:2,
e:"Le temps de disponibilité d'un conducteur PL est :",
r:[{t:"Une période de repos"},{t:"Le temps d'attente connu à l'avance (chargement, douane) non assimilé à du temps de travail effectif",ok:true},{t:"Les heures supplémentaires"},{t:"Le temps de formation"}],
x:"Bonne réponse : Le temps d'attente connu à l'avance (chargement, douane) non assimilé à du temps de travail effectif. La disponibilité (art. 3 de la directive 2002/15/CE) est le temps pendant lequel le conducteur attend sans conduire, dont il connaît la durée à l'avance (attente de chargement, frontière, ferry…). Ce n'est pas du travail effectif mais il est rémunéré (à taux réduit selon CCN) et ne peut pas servir de repos."},

{id:2235,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le taux de change CMR pour les indemnisations (DTS) est :",
r:[{t:"Fixe à 1,27 €"},{t:"Variable, publié quotidiennement par le FMI (environ 1,27-1,35 € en 2024)",ok:true},{t:"Fixé annuellement par l'OCDE"},{t:"Équivalent à 1 €"}],
x:"Bonne réponse : Variable, publié quotidiennement par le FMI (environ 1,27-1,35 € en 2024). Le DTS (Droit de Tirage Spécial) est une unité de compte du FMI basée sur un panier de grandes devises (USD, EUR, GBP, JPY, CNY). Sa valeur fluctue quotidiennement. Pour les indemnisations CMR (8,33 DTS/kg), on utilise la valeur du DTS à la date de l'indemnisation. En 2024, 1 DTS ≈ 1,27-1,35 €."},

{id:2236,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le formulaire DA1 (anciennement E101) est utilisé pour :",
r:[{t:"Déclarer des marchandises à la douane"},{t:"Prouver qu'un travailleur détaché reste soumis à la sécurité sociale de son pays d'origine",ok:true},{t:"Justifier l'origine des marchandises"},{t:"Immatriculer un véhicule à l'étranger"}],
x:"Bonne réponse : Prouver qu'un travailleur détaché reste soumis à la sécurité sociale de son pays d'origine. Le formulaire A1 (anciennement E101) est délivré par l'organisme de sécurité sociale du pays d'origine d'un travailleur détaché. Il atteste que le travailleur reste soumis à la législation de sécurité sociale de son pays d'origine pendant la période de détachement, et qu'il n'est donc pas assujetti au régime du pays d'accueil."},

{id:2237,prog:'LOURD',theme:'cl-social',d:2,
e:"L'embauche d'un conducteur PL nécessite de vérifier :",
r:[{t:"Uniquement son permis de conduire"},{t:"Permis CE valide + carte conducteur valide + aptitude médicale + titre de séjour si nécessaire",ok:true},{t:"Uniquement son casier judiciaire"},{t:"Uniquement son code 95"}],
x:"Bonne réponse : Permis CE valide + carte conducteur valide + aptitude médicale + titre de séjour si nécessaire. À l'embauche d'un conducteur PL, l'employeur doit vérifier : permis de conduire de catégorie CE valide, carte conducteur ADR valide (si transport ADR prévu), certificat médical d'aptitude valide délivré par un médecin agréé préfectoral, et code 95 valide (CQC). Pour les ressortissants hors UE, vérifier le titre de séjour avec autorisation de travail."},

{id:2238,prog:'LOURD',theme:'lo-gestion',d:1,
e:"L'autonomie financière d'une entreprise de transport PL est jugée satisfaisante quand :",
r:[{t:"Elle dépasse 50 %"},{t:"Les capitaux propres représentent au moins 30-40 % du total du bilan",ok:true},{t:"Elle dépasse 80 %"},{t:"Elle est inférieure à 10 %"}],
x:"Bonne réponse : Les capitaux propres représentent au moins 30-40 % du total du bilan. Ratio autonomie financière = Capitaux propres / Total passif × 100. Un ratio ≥ 30-40 % est généralement considéré satisfaisant dans le transport routier. Il mesure l'indépendance financière vis-à-vis des créanciers. En dessous de 20 %, les banques peuvent considérer l'entreprise sous-capitalisée et refuser de nouveaux financements."},

{id:2239,prog:'LOURD',theme:'cl-social',d:2,
e:"La durée minimale du repos hebdomadaire réduit (en cas de dérogation) est de :",
r:[{t:"24 heures",ok:true},{t:"32 heures"},{t:"35 heures"},{t:"45 heures"}],
x:"Bonne réponse : 24 heures. Le repos hebdomadaire réduit est de 24 heures consécutives minimum. La réduction par rapport aux 45 heures normales doit être compensée en bloc avant la fin de la 3ème semaine suivant la semaine en question. La compensation doit être accolée à un repos d'au moins 9 heures."},

{id:2240,prog:'LOURD',theme:'lo-gestion',d:2,
e:"L'analyse financière par ratios nécessite de comparer les ratios :",
r:[{t:"Uniquement aux périodes précédentes de la même entreprise"},{t:"Aux périodes précédentes ET aux références sectorielles (CNR, observatoires transport)",ok:true},{t:"Uniquement aux concurrents directs"},{t:"Exclusivement aux normes bancaires"}],
x:"Bonne réponse : Aux périodes précédentes ET aux références sectorielles (CNR, observatoires transport). Une analyse de ratios pertinente compare : 1) l'évolution dans le temps (ratios N vs N-1, N-2) pour détecter les tendances, et 2) les références sectorielles (données CNR, FNTR, TLF, observatoires des PME transport) pour évaluer le positionnement par rapport aux concurrents. Une seule comparaison sans l'autre est insuffisante."},

{id:2241,prog:'LOURD',theme:'cl-social',d:2,
e:"Le conducteur PL qui constate une défaillance de son tachygraphe doit :",
r:[{t:"Continuer à conduire normalement sans signalement"},{t:"Faire réparer le tachygraphe à la première occasion et tenir un enregistrement manuel en attendant",ok:true},{t:"Immobiliser le véhicule jusqu'à réparation"},{t:"Appeler la police"}],
x:"Bonne réponse : Faire réparer le tachygraphe à la première occasion et tenir un enregistrement manuel en attendant. En cas de défaillance du tachygraphe, le conducteur doit : noter manuellement ses activités (sur feuille ou papier en l'absence de disques/carte) depuis le moment de la panne, faire réparer l'appareil dès que possible. Si le retour au dépôt est impossible dans les 7 jours, la réparation doit être effectuée pendant le trajet."},

{id:2242,prog:'LOURD',theme:'cl-social',d:2,
e:"Le conducteur PL détaché à l'étranger dans l'UE doit respecter :",
r:[{t:"Uniquement les règles sociales de son pays d'origine"},{t:"Le droit du travail du pays d'accueil pour certaines règles (salaire minimum, durée de travail) selon le règlement 2020/1057",ok:true},{t:"Uniquement les règles ADR du pays traversé"},{t:"Aucune règle spécifique — libre circulation totale"}],
x:"Bonne réponse : Le droit du travail du pays d'accueil pour certaines règles (salaire minimum, durée de travail) selon le règlement 2020/1057. Le règlement 2020/1057 sur le détachement des conducteurs prévoit que les conducteurs effectuant des transports internationaux doivent respecter les règles sociales du pays d'accueil pour les opérations de cabotage et de transport bilatéral chargé/déchargé. Les transports en transit sont exemptés."},

{id:2243,prog:'LOURD',theme:'lo-intl',d:3,
e:"Le délai de prescription d'une action CMR en cas de dol (fraude) ou faute équivalente est de :",
r:[{t:"1 an"},{t:"3 ans",ok:true},{t:"5 ans"},{t:"10 ans"}],
x:"Bonne réponse : 3 ans. Selon l'art. 32 de la CMR, le délai normal de prescription est de 1 an (à partir de la livraison ou de la date prévue). En cas de dol ou faute équivalente au dol (faute lourde, négligence grossière), ce délai est porté à 3 ans. La prescription peut être suspendue ou interrompue par une réclamation écrite adressée au transporteur."},

{id:2244,prog:'LOURD',theme:'lo-civil',d:3,
e:"La sous-traitance dans le transport routier est réglementée par :",
r:[{t:"Le code civil uniquement"},{t:"La loi du 31/12/1975 sur la sous-traitance ET les règles spécifiques du transport routier",ok:true},{t:"Aucune réglementation spécifique"},{t:"Uniquement les conventions collectives"}],
x:"Bonne réponse : La loi du 31/12/1975 sur la sous-traitance ET les règles spécifiques du transport routier. La sous-traitance dans le transport est encadrée à la fois par la loi générale du 31 décembre 1975 sur la sous-traitance (action directe du sous-traitant accepté, obligation de déclaration) et par les règles spécifiques du transport routier (le sous-traitant doit être titulaire de sa propre licence de transport et ne peut pas subir des prix manifestement abusifs)."},

{id:2245,prog:'LOURD',theme:'lo-social',d:2,
e:"En cas de dépassement de la durée maximale de conduite journalière de moins de 1 heure, la sanction pour le conducteur est :",
r:[{t:"Un simple avertissement sans amende"},{t:"Une contravention de 4ème classe (750 € max)",ok:true},{t:"Une suspension immédiate du permis de conduire"},{t:"Aucune sanction si c'est exceptionnel"}],
x:"Bonne réponse : Une contravention de 4ème classe (750 € max). Le dépassement du temps de conduite journalier est une infraction au règlement 561/2006. Selon le niveau de dépassement, les sanctions varient de la contravention (4ème classe = 750 € max) au délit (plus d'1 heure de dépassement = délit)."},

{id:2246,prog:'LOURD',theme:'cl-social',d:2,
e:"Le repos journalier peut-il être pris en plusieurs fois ?",
r:[{t:"Non, toujours en une seule fois"},{t:"Oui, en 2 fois : d'abord au moins 3h, puis au moins 9h (total : 12h minimum)",ok:true},{t:"Oui, en autant de fois que souhaité"},{t:"Non, jamais fractionné"}],
x:"Bonne réponse : Oui, en 2 fois : d'abord au moins 3h, puis au moins 9h (total : 12h minimum). Le repos journalier normal (11h) peut être fractionné : une 1ère partie d'au moins 3h consécutives, puis une 2ème partie d'au moins 9h consécutives, soit 12h minimum au total. Cette disposition permet au conducteur de s'arrêter brièvement en cours de route. Le fractionnement n'est pas possible pour le repos réduit (9h)."},

{id:2247,prog:'LOURD',theme:'lo-regl',d:1,
e:"Le limiteur de vitesse d'un PL de transport de marchandises est réglé à :",
r:[{t:"80 km/h"},{t:"90 km/h",ok:true},{t:"100 km/h"},{t:"110 km/h"}],
x:"Bonne réponse : 90 km/h. Les véhicules de transport de marchandises de plus de 3,5t doivent être équipés d'un limiteur de vitesse réglé à 90 km/h (directive 92/6/CEE). Cette limitation s'applique même sur les autoroutes dont la limitation générale est de 130 km/h."},

{id:2248,prog:'LOURD',theme:'cl-social',d:3,
e:"La médecine du travail pour les conducteurs PL est gérée par :",
r:[{t:"Les CPAM"},{t:"Les services de santé au travail interentreprises (SSTIMT) ou internes",ok:true},{t:"La DREAL"},{t:"L'Assurance Maladie uniquement"}],
x:"Bonne réponse : Les services de santé au travail interentreprises (SSTIMT) ou internes. Les conducteurs PL sont suivis par les services de santé au travail interentreprises (SSTIMT) ou les services internes de santé au travail pour les grandes entreprises. Le médecin du travail réalise les visites d'information et de prévention, les examens d'aptitude périodiques, et conseille l'employeur sur la prévention des risques professionnels."},

{id:2249,prog:'LOURD',theme:'lo-civil',d:3,
e:"La clause de hardship (imprévision) dans un contrat de transport longue durée :",
r:[{t:"Permet au transporteur de résilier sans préavis"},{t:"Oblige les parties à renégocier si les circonstances changent radicalement et rendent le contrat déséquilibré",ok:true},{t:"Exonère automatiquement en cas de force majeure"},{t:"N'est valable qu'en droit international"}],
x:"Bonne réponse : Oblige les parties à renégocier si les circonstances changent radicalement et rendent le contrat déséquilibré. Depuis la réforme du droit des contrats de 2016 (art. 1195 du Code civil), l'imprévision est reconnue en droit français : si un changement de circonstances imprévisible rend l'exécution du contrat excessivement onéreuse, la partie qui n'avait pas accepté ce risque peut demander une renégociation. À défaut d'accord, le juge peut adapter ou résoudre le contrat."},

{id:2250,prog:'LOURD',theme:'cl-social',d:2,
e:"La visite médicale de reprise après un arrêt de maladie de plus de 30 jours est :",
r:[{t:"Facultative"},{t:"Obligatoire avant ou au plus tard dans les 8 jours suivant le retour",ok:true},{t:"Obligatoire uniquement pour les arrêts > 60 jours"},{t:"À la charge du salarié uniquement"}],
x:"Bonne réponse : Obligatoire avant ou au plus tard dans les 8 jours suivant le retour. La visite médicale de reprise est obligatoire auprès du médecin du travail après tout arrêt de travail de plus de 30 jours (pour maladie ou accident non professionnel) ou de plus de 60 jours (pour accident du travail). Elle doit avoir lieu dans les 8 jours suivant la reprise. Elle vise à vérifier l'aptitude et à proposer des aménagements de poste si nécessaire."},

{id:2251,prog:'LOURD',theme:'cl-social',d:3,
e:"La convention de forfait heures (annuel ou mensuel) pour les cadres conducteurs :",
r:[{t:"S'applique automatiquement"},{t:"Doit être prévue par accord collectif et stipulée dans le contrat de travail",ok:true},{t:"Est interdite dans les transports"},{t:"S'applique à tous les conducteurs autonomes"}],
x:"Bonne réponse : Doit être prévue par accord collectif et stipulée dans le contrat de travail. Une convention de forfait (en heures ou en jours) doit être prévue par un accord collectif (convention ou accord de branche, accord d'entreprise) ET stipulée dans le contrat de travail ou par avenant signé. Pour les forfaits annuels en jours (cadres autonomes), des garanties obligatoires s'appliquent (entretiens annuels, suivi de charge de travail)."},

{id:2252,prog:'LOURD',theme:'lo-civil',d:2,
e:"Le plan de sauvegarde dans une procédure de redressement judiciaire prévoit :",
r:[{t:"La liquidation immédiate de l'entreprise"},{t:"Un étalement des dettes et des mesures pour permettre la poursuite de l'activité",ok:true},{t:"La cession obligatoire de tous les actifs"},{t:"L'exonération totale des dettes fiscales"}],
x:"Bonne réponse : Un étalement des dettes et des mesures pour permettre la poursuite de l'activité. Le plan de sauvegarde ou de redressement fixe les modalités de règlement des créanciers (étalement sur 10 ans maximum, remises possible avec accord des créanciers) et les mesures de restructuration permettant à l'entreprise de poursuivre son activité. Il doit être adopté par le tribunal de commerce."},

{id:2253,prog:'LOURD',theme:'lo-civil',d:2,
e:"La mise en demeure d'un client de payer une facture impayée est :",
r:[{t:"Obligatoire avant toute procédure judiciaire"},{t:"Souvent requise comme préalable, et elle fait courir les intérêts et interrompt la prescription",ok:true},{t:"Inutile si le retard dépasse 60 jours"},{t:"Obligatoire uniquement pour les montants > 1 000 €"}],
x:"Bonne réponse : Souvent requise comme préalable, et elle fait courir les intérêts et interrompt la prescription. La mise en demeure (LRAR ou acte d'huissier) est un préalable souvent obligatoire ou fortement conseillé avant toute action judiciaire. Elle : fait courir les intérêts moratoires dès la date de la mise en demeure, interrompt le délai de prescription, et constitue la preuve que le débiteur a été informé et n'a pas réglé."},

{id:2254,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le formulaire A1 (anciennement E101) sert à prouver qu'un conducteur détaché :",
r:[{t:"A payé ses droits de douane"},{t:"Reste soumis à la sécurité sociale de son pays d'origine pendant le détachement",ok:true},{t:"A le droit de travailler dans un pays étranger"},{t:"A obtenu son permis de conduire international"}],
x:"Bonne réponse : Reste soumis à la sécurité sociale de son pays d'origine pendant le détachement. Le formulaire A1 est délivré par l'organisme de sécurité sociale du pays d'origine. Il atteste que le travailleur détaché reste affilié au régime de sécurité sociale de son pays d'origine pendant la durée du détachement. Il évite la double cotisation sociale. En cas de contrôle, il doit être présenté aux autorités du pays d'accueil."},

{id:2255,prog:'LOURD',theme:'lo-intl',d:2,
e:"L'Incoterm DDP (Delivered Duty Paid) est le plus favorable à l'acheteur car :",
r:[{t:"Le prix est le plus bas"},{t:"Le vendeur supporte tous les coûts et risques jusqu'à destination, y compris droits de douane d'import",ok:true},{t:"L'acheteur choisit le transporteur"},{t:"Il n'inclut pas la TVA"}],
x:"Bonne réponse : Le vendeur supporte tous les coûts et risques jusqu'à destination, y compris droits de douane d'import. DDP est l'Incoterm le plus favorable à l'acheteur : le vendeur assume tous les coûts et risques du transport jusqu'au lieu de destination convenu, y compris le dédouanement à l'export ET à l'import et les droits de douane d'importation. C'est l'opposé de EXW (le moins favorable à l'acheteur)."},

{id:2256,prog:'LOURD',theme:'cl-acces',d:2,
e:"Le CPC (Certificat de Compétence Professionnelle) de transporteur PL est obtenu par :",
r:[{t:"Formation uniquement"},{t:"Examen devant une commission CCI, ou par validation d'expérience professionnelle (VAE)",ok:true},{t:"Dépôt d'un dossier administratif simple"},{t:"Formation en alternance uniquement"}],
x:"Bonne réponse : Examen devant une commission CCI, ou par validation d'expérience professionnelle (VAE). Le CPC Marchandises Lourd peut être obtenu : par examen devant une commission dans les CCI (épreuves écrites sur 4 matières), ou par la Validation des Acquis de l'Expérience (VAE) pour les professionnels justifiant d'une expérience significative dans la gestion d'une entreprise de transport. La VAE permet de dispenser certaines épreuves."},

{id:2257,prog:'LOURD',theme:'lo-regl',d:3,
e:"L'accident grave impliquant un PL avec matières dangereuses doit être signalé :",
r:[{t:"Uniquement à l'assurance"},{t:"Aux forces de l'ordre + secours + CSTMD de l'entreprise + éventuellement l'autorité compétente ADR",ok:true},{t:"Uniquement à la DREAL dans les 24h"},{t:"Uniquement si des blessés sont à déplorer"}],
x:"Bonne réponse : Aux forces de l'ordre + secours + CSTMD de l'entreprise + éventuellement l'autorité compétente ADR. En cas d'accident grave avec MD : appeler immédiatement les secours (15/18/112) et les forces de l'ordre, transmettre les consignes écrites ADR aux secours, informer le CSTMD de l'entreprise, et selon la gravité, notifier l'autorité compétente ADR. Le CSTMD rédigera un rapport d'accident. Des obligations de déclaration aux autorités environnementales peuvent s'ajouter selon les produits impliqués."},

{id:2258,prog:'LOURD',theme:'cl-social',d:2,
e:"Les frais de formation d'un conducteur PL (CQC) payés par l'employeur peuvent être récupérés via :",
r:[{t:"Aucun dispositif de financement"},{t:"L'OPCO Mobilités (opérateur de compétences du secteur transport)",ok:true},{t:"La CPAM"},{t:"La DREAL"}],
x:"Bonne réponse : L'OPCO Mobilités (opérateur de compétences du secteur transport). L'OPCO Mobilités (anciennement OPCA Transports) est l'opérateur de compétences du secteur des transports. Il collecte les contributions formation professionnelle des entreprises du secteur et finance les formations (CQC initial et renouvellement, permis C/CE, formations spécifiques…). Les entreprises peuvent solliciter des prises en charge auprès de cet opérateur."},

{id:2259,prog:'LOURD',theme:'lo-intl',d:1,
e:"Le document T1 (transit externe) est utilisé pour :",
r:[{t:"Les marchandises communautaires circulant dans l'UE"},{t:"Les marchandises non communautaires en transit sur le territoire douanier de l'UE",ok:true},{t:"Les marchandises exportées définitivement"},{t:"Les véhicules en transit temporaire"}],
x:"Bonne réponse : Les marchandises non communautaires en transit sur le territoire douanier de l'UE. Le document T1 est un document de transit douanier externe utilisé pour des marchandises de statut non communautaire qui transitent par l'UE. Il suspend les droits et taxes pendant le transit. Le T2 est utilisé pour des marchandises communautaires qui passent par un pays tiers."},

{id:2260,prog:'LOURD',theme:'cl-social',d:3,
e:"L'index d'égalité professionnelle femmes-hommes est obligatoire pour les entreprises de :",
r:[{t:"10 salariés"},{t:"50 salariés et plus",ok:true},{t:"250 salariés et plus"},{t:"Toutes les entreprises"}],
x:"Bonne réponse : 50 salariés et plus. L'index d'égalité professionnelle (créé par la loi Avenir Professionnel de 2018) est obligatoire pour les entreprises de 50 salariés et plus. Il calcule une note sur 100 basée sur 5 indicateurs (écarts de rémunération, d'augmentations, de promotions, retours de congé maternité, parité dans les 10 plus hautes rémunérations). Les entreprises < 75/100 doivent prendre des mesures correctives."},

{id:2261,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le DRI (Délai de Récupération d'un Investissement) d'un tracteur à 110 000 € générant 35 000 €/an de flux nets est de :",
r:[{t:"1 an"},{t:"Environ 3 ans et 2 mois",ok:true},{t:"5 ans"},{t:"10 ans"}],
x:"Bonne réponse : Environ 3 ans et 2 mois. DRI = Investissement / Flux annuels = 110 000 / 35 000 = 3,14 ans ≈ 3 ans et 1-2 mois. C'est un critère simple : après environ 3 ans, l'investissement est remboursé par les flux générés. Il ne tient pas compte de la valeur temps de l'argent (contrairement à la VAN) mais reste un indicateur intuitif et rapide."},

{id:2262,prog:'LOURD',theme:'lo-social',d:2,
e:"Le temps de travail effectif maximum d'un conducteur grand routier ne doit pas dépasser en moyenne :",
r:[{t:"44 heures/semaine sur 4 mois"},{t:"48 heures/semaine sur une période de référence de 4 mois",ok:true},{t:"35 heures/semaine strictement"},{t:"56 heures/semaine"}],
x:"Bonne réponse : 48 heures/semaine sur une période de référence de 4 mois. La directive européenne 2002/15/CE et le Code du travail français limitent le temps de travail effectif moyen à 48 heures par semaine calculé sur une période de référence de 4 mois (ou 6 mois par accord collectif)."},

{id:2263,prog:'LOURD',theme:'lo-civil',d:2,
e:"L'injonction de payer est une procédure :",
r:[{t:"Longue et coûteuse nécessitant un avocat"},{t:"Simplifiée permettant de recouvrer rapidement une créance certaine et exigible sans débat contradictoire préalable",ok:true},{t:"Réservée aux dettes > 10 000 €"},{t:"Uniquement pour les litiges commerciaux entre grandes entreprises"}],
x:"Bonne réponse : Simplifiée permettant de recouvrer rapidement une créance certaine et exigible sans débat contradictoire préalable. L'injonction de payer (art. 1405 du Code de procédure civile) est une procédure judiciaire simplifiée et rapide. Le créancier saisit le tribunal par requête. Si accordée, le débiteur est notifié. S'il ne s'y oppose pas dans le mois, l'ordonnance devient exécutoire et la saisie peut être mise en œuvre."},

{id:2264,prog:'LOURD',theme:'cl-social',d:2,
e:"Le calcul des heures supplémentaires pour un conducteur PL grand routier se fait sur la base de :",
r:[{t:"Les heures de conduite uniquement"},{t:"L'ensemble du temps de service (conduite + travaux annexes + disponibilités rémunérées)",ok:true},{t:"Un forfait hebdomadaire"},{t:"Uniquement les heures effectuées après 21h"}],
x:"Bonne réponse : L'ensemble du temps de service (conduite + travaux annexes + disponibilités rémunérées). Pour les conducteurs PL, les heures supplémentaires sont calculées sur l'ensemble du temps de service (temps de travail effectif), qui comprend : les heures de conduite, les temps de chargement/déchargement, les formalités administratives, l'entretien, et les temps de disponibilité rémunérés, mais pas les pauses ni les repos."},

{id:2265,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le formulaire EUR.1 pour les exportations vers des pays tiers avec accords préférentiels :",
r:[{t:"Est remplacé par le DAE"},{t:"Atteste de l'origine préférentielle pour bénéficier de droits de douane réduits dans le pays importateur",ok:true},{t:"Remplace la déclaration d'exportation"},{t:"N'est utilisé qu'entre pays de l'UE"}],
x:"Bonne réponse : Atteste de l'origine préférentielle pour bénéficier de droits de douane réduits dans le pays importateur. Le certificat EUR.1 (ou la déclaration sur facture pour les faibles valeurs) est établi par l'exportateur et visé par les douanes à l'export. Il atteste que la marchandise est d'origine préférentielle (UE ou pays bénéficiaire de l'accord) et permet au destinataire dans le pays tiers de bénéficier de droits de douane réduits ou nuls."},

{id:2266,prog:'LOURD',theme:'lo-gestion',d:1,
e:"Un conducteur PL effectue 220 000 km/an. Le coût pneu est de 0,045 €/km. Le budget pneus annuel est de :",
r:[{t:"4 500 €"},{t:"9 900 €",ok:true},{t:"22 000 €"},{t:"2 200 €"}],
x:"Bonne réponse : 9 900 €. Budget pneus = 0,045 × 220 000 = 9 900 €. Les pneus représentent généralement 3 à 5 % du coût de revient d'un PL longue distance. La surveillance de l'usure, la pression et l'équilibrage sont essentiels pour optimiser leur durée de vie et réduire ce poste de charges."},

{id:2267,prog:'LOURD',theme:'lo-acces',d:1,
e:"Pour exercer le transport public routier de marchandises >3,5t, les 3 conditions d'accès sont :",
r:[{t:"Permis C + expérience 5 ans + assurance"},{t:"Honorabilité + capacité financière + capacité professionnelle",ok:true},{t:"Diplôme transport + siège social + salarié"},{t:"FIMO + FCOS + carte conducteur"}],
x:"Bonne réponse : Honorabilité + capacité financière + capacité professionnelle. L'accès à la profession de transporteur public routier est conditionné par 3 critères cumulatifs : honorabilité professionnelle, capacité financière (fonds propres) et capacité professionnelle (examen CPC ou équivalence)."},

{id:2268,prog:'LOURD',theme:'lo-gestion',d:2,
e:"La participation aux bénéfices dans une PME de transport de 50+ salariés est calculée sur la base de :",
r:[{t:"Le résultat net comptable uniquement"},{t:"Une formule légale intégrant le bénéfice fiscal, les capitaux propres et la masse salariale",ok:true},{t:"Le bénéfice distribuable uniquement"},{t:"Un accord de branche obligatoire"}],
x:"Bonne réponse : Une formule légale intégrant le bénéfice fiscal, les capitaux propres et la masse salariale. La réserve de participation légale = 1/2 × (Bénéfice fiscal × 5 % des capitaux propres) × Masse salariale / Valeur ajoutée. Cette formule complexe est définie par le Code du travail. Elle vise à intéresser les salariés aux résultats de l'entreprise. La somme est bloquée 5 ans (sauf cas de déblocage anticipé)."},

{id:2269,prog:'LOURD',theme:'lo-regl',d:1,
e:"Les marchandises transportées en vrac dans un camion benne doivent être :",
r:[{t:"Recouvertes d'une bâche si elles risquent d'être dispersées",ok:true},{t:"Limitées à 10 tonnes"},{t:"Déclarées à la douane pour tout transport national"},{t:"Accompagnées d'un certificat phytosanitaire"}],
x:"Bonne réponse : Recouvertes d'une bâche si elles risquent d'être dispersées. Les marchandises susceptibles d'être dispersées par le vent (sable, gravier, terre, déchets…) doivent être couvertes ou arrimées pour éviter leur dispersion sur la voie publique (art. R.412-24 du Code de la route). Le non-respect est une infraction et engage la responsabilité du conducteur et du chargeur."},

{id:2270,prog:'LOURD',theme:'lo-regl',d:3,
e:"Le calcul du PTRA (Poids Total Roulant Autorisé) d'un ensemble articul : tracteur (PTAC 18t) + semi (PTAC 34t) :",
r:[{t:"= 52 tonnes (sum des PTAC)"},{t:"= 40 tonnes car c'est la limite légale pour un ensemble 5 essieux",ok:true},{t:"= 18 tonnes (le plus faible des deux PTAC)"},{t:"= Variable selon le nombre d'essieux"}],
x:"Bonne réponse : = 40 tonnes car c'est la limite légale pour un ensemble 5 essieux. Le PTRA n'est pas la somme des PTAC individuels mais la limite légale applicable à l'ensemble. Pour un ensemble tracteur + semi à 5 essieux, le PTRA légal en France est de 40 tonnes. Un tracteur 18t + semi 34t = PTAC cumulés 52t, mais le PTRA légal maximum est de 40t. Il faut choisir un chargement compatible avec le PTRA légal."},

{id:2271,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le formulaire T2L permet de prouver :",
r:[{t:"L'origine commerciale d'une marchandise"},{t:"Le statut communautaire d'une marchandise (déjà en libre pratique dans l'UE)",ok:true},{t:"La déclaration d'exportation d'une marchandise"},{t:"L'immatriculation d'un véhicule dans l'UE"}],
x:"Bonne réponse : Le statut communautaire d'une marchandise (déjà en libre pratique dans l'UE). Le formulaire T2L est un document douanier qui atteste du statut communautaire (Union) d'une marchandise, c'est-à-dire qu'elle a déjà été mise en libre pratique dans l'UE (droits de douane acquittés). Il permet de circuler dans l'UE sans nouveau dédouanement."},

{id:2272,prog:'LOURD',theme:'cl-social',d:3,
e:"Le principe 'à travail égal, salaire égal' impose :",
r:[{t:"Un salaire identique pour tous les salariés d'une même entreprise"},{t:"Une rémunération identique pour des salariés effectuant le même travail ou un travail de valeur égale",ok:true},{t:"L'application stricte du SMIC pour tous"},{t:"L'interdiction de toute différence salariale"}],
x:"Bonne réponse : Une rémunération identique pour des salariés effectuant le même travail ou un travail de valeur égale. Le principe d'égalité de rémunération (art. L.3221-2 du Code du travail) interdit les différences de salaire entre salariés qui effectuent un même travail ou un travail de valeur égale, si ces différences ne sont pas justifiées par des critères objectifs (ancienneté, diplôme, résultats, responsabilités). Il s'applique notamment à l'égalité hommes/femmes."},

{id:2273,prog:'LOURD',theme:'lo-gestion',d:1,
e:"Le ROA (Return On Assets) = Résultat net / Total actif mesure :",
r:[{t:"La rentabilité des capitaux propres"},{t:"L'efficacité de l'entreprise à générer du bénéfice à partir de ses actifs totaux",ok:true},{t:"Le niveau d'endettement"},{t:"La solvabilité à court terme"}],
x:"Bonne réponse : L'efficacité de l'entreprise à générer du bénéfice à partir de ses actifs totaux. ROA = Résultat net / Total actif × 100. Un ROA de 8 % signifie que l'entreprise génère 8 € de bénéfice pour 100 € d'actifs investis. C'est un indicateur d'efficience opérationnelle. Plus le ROA dépasse le coût de la dette, plus l'effet de levier financier est favorable."},

{id:2274,prog:'LOURD',theme:'lo-acces',d:2,
e:"La capacité financière minimale pour un transporteur de marchandises >3,5t est de :",
r:[{t:"3 000 € par véhicule"},{t:"9 000 € pour le premier véhicule + 5 000 € par véhicule supplémentaire",ok:true},{t:"50 000 € forfaitaires"},{t:"1 % du CA annuel prévisionnel"}],
x:"Bonne réponse : 9 000 € pour le premier véhicule + 5 000 € par véhicule supplémentaire. Règlement (CE) 1071/2009 : capacité financière = 9 000 € pour le premier véhicule + 5 000 € par véhicule supplémentaire. Ces fonds propres doivent être démontrés par des comptes annuels certifiés ou une garantie bancaire."},

{id:2275,prog:'LOURD',theme:'lo-gestion',d:3,
e:"Pour un ensemble tracteur-semi, le coût du péage représente environ :",
r:[{t:"2 à 5 % du coût de revient"},{t:"5 à 10 % du coût de revient",ok:true},{t:"20 % du coût de revient"},{t:"Moins de 1 %"}],
x:"Bonne réponse : 5 à 10 % du coût de revient. Les péages autoroutiers pour les poids lourds représentent typiquement 5 à 10 % du coût de revient total (variable selon le réseau utilisé et la distance). Ils constituent une charge variable significative. La carte de télépéage et les accords tarifaires avec les sociétés autoroutières permettent parfois des réductions."},

{id:2276,prog:'LOURD',theme:'cl-social',d:1,
e:"La durée de conservation des disques de tachygraphe analogique par le conducteur pendant le trajet est de :",
r:[{t:"Les disques des 28 derniers jours + le disque du jour en cours",ok:true},{t:"Uniquement le disque du jour en cours"},{t:"Les disques des 7 derniers jours"},{t:"Les disques des 3 derniers mois"}],
x:"Bonne réponse : Les disques des 28 derniers jours + le disque du jour en cours. Lors d'un contrôle routier, le conducteur doit présenter les disques tachygraphes (ou les données de la carte conducteur pour le numérique) des 28 jours précédents, plus le disque/données du jour en cours. Ces documents doivent être à bord du véhicule pendant le transport."},

{id:2277,prog:'LOURD',theme:'lo-gestion',d:2,
e:"La provision pour renouvellement du parc de véhicules est déductible fiscalement :",
r:[{t:"Jamais"},{t:"Sous conditions : nettement précisée, résultant d'un événement survenu durant l'exercice, probable",ok:true},{t:"Toujours et intégralement"},{t:"Uniquement pour les véhicules > 10 ans"}],
x:"Bonne réponse : Sous conditions : nettement précisée, résultant d'un événement survenu durant l'exercice, probable. Une provision pour renouvellement peut être constituée si elle satisfait aux critères de déductibilité fiscale : être nettement précisée quant à son objet et son montant, résulter d'un événement survenu pendant l'exercice, et être probable (pas certaine). En pratique, l'administration fiscale est restrictive sur ces provisions pour les PME."},

{id:2278,prog:'LOURD',theme:'cl-social',d:2,
e:"Le congé pour accident du travail maintient le salaire à :",
r:[{t:"50 % du salaire"},{t:"60 % les 28 premiers jours puis 80 % (IJ CPAM) + complément employeur selon la CCN",ok:true},{t:"100 % systématiquement"},{t:"0 € (uniquement les IJ)"}],
x:"Bonne réponse : 60 % les 28 premiers jours puis 80 % (IJ CPAM) + complément employeur selon la CCN. Pour un AT, la CPAM verse des IJ : 60 % du salaire journalier de référence les 28 premiers jours, puis 80 % à partir du 29ème jour. La CCN transports routiers et les accords d'entreprise peuvent prévoir un complément employeur pour maintenir le salaire à 100 % pendant une période définie. La règle du 3ème jour de carence ne s'applique pas pour les AT."},

{id:2279,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le coût de revient kilométrique (CRK) d'un tracteur PL à 1,05 €/km : si les charges fixes sont 80 000 €/an pour 150 000 km annuels, le CRK fixe est de :",
r:[{t:"0,80 €/km"},{t:"0,53 €/km",ok:true},{t:"1,05 €/km"},{t:"0,25 €/km"}],
x:"Bonne réponse : 0,53 €/km. CRK fixe = CF annuelles / km annuels = 80 000 / 150 000 = 0,533 €/km ≈ 0,53 €/km. Les charges variables (carburant, pneus, entretien…) constituent le solde : 1,05 - 0,53 = 0,52 €/km de charges variables. Cette décomposition est essentielle pour les décisions de sous-traitance (comparer CRK variable vs prix d'un sous-traitant)."},

{id:2280,prog:'LOURD',theme:'cl-social',d:1,
e:"En cas de contrat de travail sans écrit, le contrat est présumé :",
r:[{t:"Nul"},{t:"À durée indéterminée (CDI) à temps plein",ok:true},{t:"CDD de 3 mois"},{t:"Contrat de mise à disposition"}],
x:"Bonne réponse : À durée indéterminée (CDI) à temps plein. En droit du travail, l'absence de contrat écrit crée une présomption de CDI à temps plein (art. L.1221-2 du Code du travail). Pour les CDD et le temps partiel, l'écrit est obligatoire à peine de requalification en CDI/temps plein. La charge de la preuve appartient à l'employeur qui souhaite se prévaloir d'une autre qualification."},

{id:2281,prog:'LOURD',theme:'cl-acces',d:3,
e:"Le registre électronique national des entreprises de transport (RENT) est interconnecté avec :",
r:[{t:"Le registre du commerce uniquement"},{t:"L'ERRU (registre européen) permettant l'échange d'informations entre États membres de l'UE",ok:true},{t:"Interpol"},{t:"La base de données OTAN"}],
x:"Bonne réponse : L'ERRU (registre européen) permettant l'échange d'informations entre États membres de l'UE. Le RENT est la partie française de l'ERRU (European Register of Road Transport Undertakings). Les 27 registres nationaux sont interconnectés, permettant aux autorités de chaque État membre de consulter les informations sur les transporteurs des autres pays (infractions graves, pertes d'honorabilité, suspensions). Cela empêche un transporteur sanctionné dans un pays de s'établir dans un autre."},

{id:2282,prog:'LOURD',theme:'lo-civil',d:1,
e:"La prescription de l'action en paiement du prix de transport est de :",
r:[{t:"1 an"},{t:"5 ans pour les actes de commerce",ok:true},{t:"2 ans"},{t:"10 ans"}],
x:"Bonne réponse : 5 ans pour les actes de commerce. L'action en paiement du prix de transport entre commerçants se prescrit par 5 ans (prescription commerciale de droit commun, art. L.110-4 du Code de commerce). L'action en responsabilité contre le transporteur pour perte ou avarie est de 1 an. Ces deux délais distincts doivent être bien différenciés."},

{id:2283,prog:'LOURD',theme:'lo-regl',d:2,
e:"Les restrictions de circulation dominicale pour les PL s'appliquent généralement de :",
r:[{t:"0h à 24h le dimanche"},{t:"22h du samedi à 22h le dimanche (avec variations selon les saisons)",ok:true},{t:"8h à 20h le dimanche"},{t:"Il n'y a plus de restriction dominicale"}],
x:"Bonne réponse : 22h du samedi à 22h le dimanche (avec variations selon les saisons). Les restrictions de circulation pour les PL de PTAC > 7,5t s'appliquent le dimanche de 22h la veille à 22h le soir du dimanche (circulaire annuelle). Des restrictions supplémentaires s'appliquent les samedis de juillet-août et les jours fériés. De nombreuses dérogations existent (denrées périssables, carburant, journaux…)."},

{id:2284,prog:'LOURD',theme:'lo-intl',d:1,
e:"L'Incoterm EXW (Ex Works) signifie que :",
r:[{t:"Le vendeur livre à la frontière"},{t:"Le vendeur met la marchandise à disposition dans ses locaux, l'acheteur se charge de tout le reste",ok:true},{t:"Le vendeur paie le transport jusqu'à destination"},{t:"Les risques se transfèrent au port d'embarquement"}],
x:"Bonne réponse : Le vendeur met la marchandise à disposition dans ses locaux, l'acheteur se charge de tout le reste. EXW (Ex Works) est l'Incoterm le moins favorable à l'acheteur : le vendeur met la marchandise à disposition dans son établissement (usine, entrepôt). L'acheteur prend en charge tous les frais et risques depuis ce point (chargement, transport, dédouanement à l'export et à l'import, livraison finale)."},

{id:2285,prog:'LOURD',theme:"Accès à la profession PL",d:2,
e:"La copie certifiée conforme de la licence communautaire doit se trouver :",
r:[{t:"Au siège de l'entreprise uniquement"},{t:"Dans chaque véhicule effectuant un transport international",ok:true},{t:"Uniquement dans les véhicules de plus de 7,5t"},{t:"Elle n'est pas obligatoire à bord du véhicule"}],
x:"Bonne réponse : Dans chaque véhicule effectuant un transport international. Une copie certifiée conforme de la licence communautaire doit être présente dans chaque véhicule effectuant des transports internationaux de marchandises au sein de l'UE. L'original reste au siège de l'entreprise. En cas de contrôle, l'absence de cette copie est une infraction."},

{id:2286,prog:'LOURD',theme:'lo-gestion',d:1,
e:"Le ratio kilométres à vide / kilométres totaux est un indicateur de :",
r:[{t:"La consommation de carburant"},{t:"L'efficacité commerciale et opérationnelle du transporteur",ok:true},{t:"L'usure des pneus"},{t:"La rentabilité par client"}],
x:"Bonne réponse : L'efficacité commerciale et opérationnelle du transporteur. Le taux de km à vide mesure le pourcentage de km parcourus sans chargement. Un taux élevé (>20-25 %) signale un problème d'optimisation des retours. Réduire ce taux (trouver des frets de retour, utiliser des bourses de fret) améliore directement la rentabilité en étalant les charges fixes sur plus de km chargés."},

{id:2287,prog:'LOURD',theme:'lo-regl',d:2,
e:"Le transport sous température dirigée de produits laitiers frais exige une température maximale de :",
r:[{t:"+2°C"},{t:"+4°C",ok:true},{t:"+8°C"},{t:"+10°C"}],
x:"Bonne réponse : +4°C. Les produits laitiers frais (yaourts, fromages frais, crèmes…) doivent être transportés à une température maximale de +4°C selon la réglementation sanitaire française. Les laitages crus et produits carnés hachés nécessitent encore des températures plus basses."},

{id:2288,prog:'LOURD',theme:'cl-social',d:2,
e:"L'obligation de reclassement préalable au licenciement économique impose à l'employeur de :",
r:[{t:"Proposer uniquement des postes en France"},{t:"Proposer des postes disponibles dans l'entreprise, y compris dans les filiales du groupe à l'étranger",ok:true},{t:"Rechercher des postes uniquement au même niveau"},{t:"Ne s'applique pas si 5 licenciements ou moins"}],
x:"Bonne réponse : Proposer des postes disponibles dans l'entreprise, y compris dans les filiales du groupe à l'étranger. Avant tout licenciement économique, l'employeur doit rechercher et proposer tous les postes disponibles dans l'entreprise ET dans les entreprises du groupe situées sur le territoire national. Depuis 2017, l'obligation ne s'étend plus aux filiales étrangères (sauf si le salarié a demandé à recevoir des offres à l'étranger). Le reclassement doit être sérieux et personnalisé."},

{id:2289,prog:'LOURD',theme:'lo-regl',d:2,
e:"Un conducteur PL effectuant un transport de produits frais congelés doit s'assurer que :",
r:[{t:"La température au chargement est notée"},{t:"La température du compartiment est maintenue à ≤ –18°C et enregistrée tout au long du transport",ok:true},{t:"Le véhicule est nettoyé avant le chargement uniquement"},{t:"La durée du transport ne dépasse pas 4 heures"}],
x:"Bonne réponse : La température du compartiment est maintenue à ≤ –18°C et enregistrée tout au long du transport. Pour les produits surgelés, la chaîne du froid impose une température ≤ –18°C tout au long du transport (sauf courtes remontées lors du chargement/déchargement). Le thermographe ou enregistreur de température est obligatoire pour les transports soumis à l'accord ATP. Les relevés doivent être archivés."},

{id:2290,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le service T2F est utilisé pour :",
r:[{t:"Les marchandises communautaires à destination de territoires fiscaux spéciaux (Canaries, Monaco…)",ok:true},{t:"Toutes les marchandises exportées hors UE"},{t:"Les marchandises sous température dirigée"},{t:"Les envois postaux internationaux"}],
x:"Bonne réponse : Les marchandises communautaires à destination de territoires fiscaux spéciaux (Canaries, Monaco…). Le formulaire T2F est un document douanier attestant du statut communautaire de marchandises destinées à des territoires fiscaux appartenant à l'UE douanière mais pas à l'UE fiscale (ex : îles Canaries, Ceuta et Melilla, Monaco, îles anglo-normandes…). Il permet d'éviter une perception de TVA à l'entrée de ces territoires."},

{id:2291,prog:'LOURD',theme:'lo-gestion',d:2,
e:"En transport PL, le terme 'full truck load' (FTL) désigne :",
r:[{t:"Un camion à pleine capacité de poids"},{t:"Un transport où le camion est entièrement affrété pour un seul client",ok:true},{t:"Un transport express en camion complet"},{t:"Un camion équipé d'un hayon élévateur"}],
x:"Bonne réponse : Un transport où le camion est entièrement affrété pour un seul client. FTL (Full Truck Load) désigne un mode de transport où la totalité du véhicule est réservée pour un seul expéditeur/destinataire. À l'opposé, le LTL (Less than Truck Load) ou messagerie regroupe plusieurs expéditeurs dans le même véhicule. Le FTL est généralement moins coûteux par kg pour les grosses quantités."},

{id:2292,prog:'LOURD',theme:'cl-social',d:3,
e:"Le statut de 'salarié portage' pour un conducteur PL freelance est :",
r:[{t:"Impossible dans le transport"},{t:"Possible mais peu adapté : le portage salarial est autorisé pour des missions ponctuelles non permanentes",ok:true},{t:"Obligatoire pour les conducteurs occasionnels"},{t:"Identique au statut d'auto-entrepreneur"}],
x:"Bonne réponse : Possible mais peu adapté : le portage salarial est autorisé pour des missions ponctuelles non permanentes. Le portage salarial (loi du 5 mars 2014) permet à un professionnel indépendant d'être rémunéré comme salarié via une entreprise de portage. Dans le transport, il peut être utilisé pour des missions ponctuelles (événementiel, remplacement). Mais l'activité principale de conducteur PL permanent n'est pas adaptée au portage, qui est conçu pour des missions à durée limitée."},

{id:2293,prog:'LOURD',theme:'lo-intl',d:3,
e:"Le transport routier international de marchandises dangereuses (ADR) entre la France et un pays non membre de l'UE :",
r:[{t:"N'est soumis à aucune réglementation particulière"},{t:"Doit respecter l'ADR si les deux pays sont signataires, sinon appliquer la réglementation la plus stricte",ok:true},{t:"Est interdit pour les liquides inflammables"},{t:"Nécessite uniquement un certificat national"}],
x:"Bonne réponse : Doit respecter l'ADR si les deux pays sont signataires, sinon appliquer la réglementation la plus stricte. L'ADR s'applique aux transports internationaux entre pays signataires. Si le pays de destination n'est pas signataire de l'ADR, la réglementation nationale de ce pays s'applique. Le transporteur doit se conformer aux exigences les plus strictes. Les pays signataires couvrent l'essentiel de l'Europe, l'Asie centrale et certains pays du Moyen-Orient."},

{id:2294,prog:'LOURD',theme:'lo-regl',d:1,
e:"La limitation de vitesse d'un PL de PTAC > 3,5t sur route à double voie hors agglomération est de :",
r:[{t:"90 km/h"},{t:"80 km/h",ok:true},{t:"70 km/h"},{t:"110 km/h"}],
x:"Bonne réponse : 80 km/h. Les PL de PTAC > 3,5t sont limités à 80 km/h sur les routes à double voie sans séparateur central (routes nationales et départementales hors agglomération). Cette limitation est inférieure à celle des voitures particulières (80 km/h pour tous depuis 2018). Sur les autoroutes et voies express à 2×2 voies, les PL sont limités à 90 km/h."},

{id:2295,prog:'LOURD',theme:"Accès à la profession PL",d:3,
e:"Le règlement 1071/2009 impose à chaque entreprise de transport de disposer d'un établissement stable disposant de :",
r:[{t:"Uniquement d'une boîte aux lettres"},{t:"Locaux, matériel de gestion, documents, et parc adapté dans l'État membre",ok:true},{t:"D'au moins 3 véhicules"},{t:"D'un capital social minimum de 9 000 €"}],
x:"Bonne réponse : Locaux, matériel de gestion, documents, et parc adapté dans l'État membre. Le règlement 1071/2009 impose que l'établissement soit réel et stable : des locaux où sont conservés les documents principaux (contrats de transport, documents comptables, fichier du personnel), un matériel de gestion adapté, et un parc de véhicules immatriculé dans l'État membre (ou utilisé sur la base d'un contrat de crédit-bail)."},

{id:2296,prog:'LOURD',theme:'lo-gestion',d:3,
e:"Le fonds de roulement normatif d'une entreprise PL est calculé en :",
r:[{t:"Ajoutant les actifs immobilisés aux stocks"},{t:"Exprimant les composantes du BFR en jours de CA pour établir un BFR de référence",ok:true},{t:"Divisant le CA par 12"},{t:"Multipliant les charges fixes par le taux d'imposition"}],
x:"Bonne réponse : Exprimant les composantes du BFR en jours de CA pour établir un BFR de référence. Le FRNG normatif exprime le BFR prévisionnel 'normal' de l'entreprise en jours de CA (délai clients × CA, délai fournisseurs × achats, stocks × coût des ventes). Il permet de calculer le FRNG nécessaire pour financer ce BFR normal. C'est un outil de prévision et de pilotage financier."},

{id:2297,prog:'LOURD',theme:'cl-social',d:2,
e:"En cas de dépassement de la durée de conduite journalière de plus d'une heure :",
r:[{t:"Simple contravention"},{t:"Délit pénal",ok:true},{t:"Avertissement sans suite"},{t:"Amende forfaitaire de 300 €"}],
x:"Bonne réponse : Délit pénal. Le dépassement de plus d'une heure de la durée maximale de conduite journalière est qualifié de délit pénal (pas une simple contravention). Il peut entraîner des poursuites pénales pour le conducteur et pour l'employeur s'il est complice. En dessous d'une heure, c'est une contravention."},

{id:2298,prog:'LOURD',theme:'lo-regl',d:2,
e:"Le hayon élévateur d'un PL est soumis à vérification annuelle selon :",
r:[{t:"La norme NF EN 1756-1"},{t:"L'arrêté du 1er mars 2004 sur la vérification des appareils de levage",ok:true},{t:"La réglementation du fabricant uniquement"},{t:"Uniquement lors de la visite technique PL"}],
x:"Bonne réponse : L'arrêté du 1er mars 2004 sur la vérification des appareils de levage. L'arrêté du 1er mars 2004 (modifiant celui de 1993) impose une vérification annuelle des hayons élévateurs par un organisme compétent. Un registre de vérification doit être tenu à disposition lors des contrôles. Le non-respect expose à des sanctions et engage la responsabilité de l'employeur en cas d'accident."},

{id:2299,prog:'LOURD',theme:'lo-intl',d:2,
e:"L'Incoterm DAP (Delivered At Place) signifie que :",
r:[{t:"Le vendeur livre au port de départ"},{t:"Le vendeur livre jusqu'au lieu convenu, véhicule prêt à décharger, sans droits de douane import",ok:true},{t:"L'acheteur assume tous les risques"},{t:"Les droits de douane sont toujours inclus"}],
x:"Bonne réponse : Le vendeur livre jusqu'au lieu convenu, véhicule prêt à décharger, sans droits de douane import. DAP : le vendeur assume tous les risques et frais jusqu'au lieu de destination convenu, mais l'acheteur prend en charge le déchargement et le dédouanement à l'importation. C'est l'un des Incoterms les plus utilisés pour les transports routiers européens. DAP ne comprend pas les droits de douane d'importation (contrairement à DDP)."},

{id:2300,prog:'LOURD',theme:'lo-gestion',d:2,
e:"La cession d'un PL avec une plus-value génère :",
r:[{t:"Un avantage fiscal immédiat automatique"},{t:"Un produit exceptionnel imposable, avec possibilité d'étalement ou d'exonération sous conditions",ok:true},{t:"Une charge déductible"},{t:"Aucun impact fiscal"}],
x:"Bonne réponse : Un produit exceptionnel imposable, avec possibilité d'étalement ou d'exonération sous conditions. La plus-value réalisée sur la cession d'un PL (prix vente > VNC) est un produit exceptionnel imposable (IS ou IR). Des régimes de faveur existent : exonération pour les PME sous condition de CA et de durée de détention (art. 151 septies du CGI pour l'IR). Le remploi des plus-values dans un nouvel investissement peut permettre un étalement fiscal."},

{id:2301,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le poids d'or comme référence d'indemnisation dans la convention CMR a été remplacé par :",
r:[{t:"L'euro comme monnaie de référence"},{t:"Le DTS (Droit de Tirage Spécial du FMI)",ok:true},{t:"Le dollar américain"},{t:"Un panier de devises européennes"}],
x:"Bonne réponse : Le DTS (Droit de Tirage Spécial du FMI). Initialement, la CMR utilisait le franc Poincaré (lié à l'or) comme référence. Depuis le protocole additionnel de 1978, l'indemnisation est exprimée en DTS (Droit de Tirage Spécial), unité de compte du FMI basée sur un panier de grandes devises mondiales. 1 DTS vaut actuellement environ 1,30 € (valeur fluctuante)."},

{id:2302,prog:'LOURD',theme:'cl-social',d:2,
e:"L'heure de nuit pour un conducteur PL (grand routier) ouvre droit à :",
r:[{t:"Aucune contrepartie spécifique"},{t:"Une majoration de salaire ou un repos compensateur selon la convention collective",ok:true},{t:"Automatiquement des heures supplémentaires"},{t:"Un taux de 200 % du salaire normal"}],
x:"Bonne réponse : Une majoration de salaire ou un repos compensateur selon la convention collective. Le travail de nuit (entre 21h et 6h pour les conducteurs routiers) ouvre droit à des contreparties définies par la convention collective des transports routiers : soit une majoration de salaire (généralement entre 10 et 25 %), soit un repos compensateur équivalent."},

{id:2303,prog:'LOURD',theme:'lo-regl',d:2,
e:"Un PL équipé d'un hayon élévateur doit faire vérifier ce dernier :",
r:[{t:"Tous les 5 ans"},{t:"Au minimum annuellement par un technicien qualifié",ok:true},{t:"Uniquement lors de la visite technique"},{t:"Uniquement si une avarie est constatée"}],
x:"Bonne réponse : Au minimum annuellement par un technicien qualifié. Les hayons élévateurs doivent faire l'objet d'une vérification annuelle (au minimum) par un technicien qualifié, conformément à l'arrêté du 1er mars 2004. Un registre de vérification doit être tenu. En cas de défaut, le hayon doit être condamné jusqu'à réparation. Les hayons sont des équipements présentant des risques importants d'accident (écrasement, chute de charge)."},

{id:2304,prog:'LOURD',theme:'lo-civil',d:3,
e:"Le privilege général du transporteur sur les marchandises transportées :",
r:[{t:"N'existe pas en droit français"},{t:"Lui permet d'être payé prioritairement sur la valeur des marchandises pour sa créance de fret",ok:true},{t:"S'applique uniquement aux créances de plus de 1 000 €"},{t:"N'est valable qu'en cas de faillite du client"}],
x:"Bonne réponse : Lui permet d'être payé prioritairement sur la valeur des marchandises pour sa créance de fret. Le transporteur dispose d'un privilège spécial sur les marchandises transportées (art. L.133-7 du Code de commerce) pour sa créance de fret, accessoires et déboursés. Ce privilège lui permet d'être désintéressé prioritairement sur la valeur des marchandises en cas de défaillance du client. Il s'exerce tant que le transporteur est en possession des marchandises."},

{id:2305,prog:'LOURD',theme:'lo-regl',d:2,
e:"La licence de transport intérieur (LTI) pour les PL est délivrée par :",
r:[{t:"La CCI"},{t:"La DREAL (ou DRIEAT en Île-de-France)",ok:true},{t:"La Préfecture de département"},{t:"Le Ministère directement"}],
x:"Bonne réponse : La DREAL (ou DRIEAT en Île-de-France). La DREAL (Direction Régionale de l'Environnement, de l'Aménagement et du Logement) est l'autorité compétente pour délivrer les licences de transport intérieur (LTI) et communautaire (LC) pour les PL. En Île-de-France, c'est la DRIEAT. Elles instruisent les dossiers et tiennent le registre des transporteurs."},

{id:2306,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le carnet ATA permet de :",
r:[{t:"Exporter définitivement des marchandises"},{t:"Importer temporairement des marchandises (matériels d'exposition, outils professionnels) sans payer de droits de douane",ok:true},{t:"Transporter des marchandises alimentaires"},{t:"Circuler sans contrôle aux frontières de l'UE"}],
x:"Bonne réponse : Importer temporairement des marchandises (matériels d'exposition, outils professionnels) sans payer de droits de douane. Le carnet ATA (Admission Temporaire/Temporary Admission) est un document douanier international permettant l'importation temporaire de marchandises (matériels d'exposition, échantillons, équipements professionnels) sans payer de droits ni de TVA dans le pays d'accueil. La marchandise doit être réexportée dans le délai prévu."},

{id:2307,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le règlement (UE) 2020/1054 modifiant 561/2006 a notamment interdit :",
r:[{t:"Le cabotage dans l'UE"},{t:"La prise du repos hebdomadaire normal en cabine",ok:true},{t:"L'utilisation du tachygraphe analogique"},{t:"Le transport de certaines marchandises dangereuses"}],
x:"Bonne réponse : La prise du repos hebdomadaire normal en cabine. Le règlement 2020/1054 (paquet mobilité) a notamment codifié l'interdiction de prendre le repos hebdomadaire normal (45h) en cabine du véhicule. Cette interdiction, établie par la CJUE en 2020, a été transposée dans la réglementation. Le repos hebdomadaire normal doit être pris dans un hébergement adéquat avec installations sanitaires."},

{id:2308,prog:'LOURD',theme:'lo-gestion',d:1,
e:"L'EBE (Excédent Brut d'Exploitation) d'un transporteur PL se calcule comme :",
r:[{t:"Résultat net + amortissements"},{t:"VA - Charges de personnel - Impôts et taxes d'exploitation + Subventions d'exploitation",ok:true},{t:"CA - Charges variables"},{t:"Résultat d'exploitation + Résultat financier"}],
x:"Bonne réponse : VA - Charges de personnel - Impôts et taxes d'exploitation + Subventions d'exploitation. EBE = Valeur Ajoutée - Charges de personnel (salaires bruts + charges patronales) - Impôts et taxes d'exploitation (taxe foncière, CFE…) + Subventions d'exploitation. L'EBE (= EBITDA) mesure la performance opérationnelle pure, avant l'impact des choix de financement (intérêts) et d'investissement (amortissements)."},

{id:2309,prog:'LOURD',theme:'lo-regl',d:2,
e:"La réglementation sur les temps de conduite s'applique à partir de quel PTAC ?",
r:[{t:"3,5 tonnes"},{t:"3,5 tonnes (règlement 561/2006 étendu aux véhicules > 2,5t pour certains transports depuis 2024)",ok:true},{t:"7,5 tonnes"},{t:"12 tonnes"}],
x:"Bonne réponse : 3,5 tonnes (règlement 561/2006 étendu aux véhicules > 2,5t pour certains transports depuis 2024). Le règlement 561/2006 s'applique aux véhicules de PTAC > 3,5t utilisés pour le transport de marchandises. Le paquet mobilité 2020 a prévu une extension progressive à certains véhicules entre 2,5t et 3,5t effectuant des transports internationaux. Des règles spécifiques existent aussi pour les véhicules entre 3,5t et 7,5t dans certains États membres."},

{id:2310,prog:'LOURD',theme:'cl-social',d:2,
e:"La pause obligatoire après 4h30 de conduite est de :",
r:[{t:"15 minutes"},{t:"45 minutes (ou 15 min + 30 min)",ok:true},{t:"30 minutes"},{t:"60 minutes"}],
x:"Bonne réponse : 45 minutes (ou 15 min + 30 min). Après 4h30 de conduite, une interruption de 45 minutes doit être observée. Elle peut être remplacée par une interruption d'au moins 15 minutes suivie d'une interruption d'au moins 30 minutes. Ces pauses ne constituent pas du temps de repos journalier."},

{id:2311,prog:'LOURD',theme:'lo-regl',d:3,
e:"Le pont-bascule pour contrôler le poids des PL peut être utilisé par :",
r:[{t:"Uniquement la police nationale"},{t:"La police, la gendarmerie, les agents des douanes et les agents de la DREAL",ok:true},{t:"Uniquement les agents de la DREAL"},{t:"Uniquement les douanes"}],
x:"Bonne réponse : La police, la gendarmerie, les agents des douanes et les agents de la DREAL. Le contrôle du poids des PL peut être effectué par : la police nationale et la gendarmerie (contrôle routier général), les agents des douanes (contrôle des marchandises), et les agents assermentés de la DREAL (contrôle spécialisé du transport). Des scanners dynamiques de pesage permettent des contrôles sans arrêt des véhicules."},

{id:2312,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le coût moyen pondéré du parc (CMPP) est calculé en :",
r:[{t:"Additionnant la valeur de tous les véhicules"},{t:"Pondérant les coûts de chaque véhicule par son utilisation ou son kilométrage dans la flotte",ok:true},{t:"Divisant le chiffre d'affaires par le nombre de véhicules"},{t:"Calculant l'amortissement annuel moyen"}],
x:"Bonne réponse : Pondérant les coûts de chaque véhicule par son utilisation ou son kilométrage dans la flotte. Le CMPP est une moyenne pondérée des coûts de chaque véhicule de la flotte, en tenant compte de l'utilisation de chacun. Il permet d'établir un tarif de transport cohérent qui reflète les coûts réels de l'ensemble du parc, incluant les véhicules plus récents et plus anciens."},

{id:2313,prog:'LOURD',theme:'lo-civil',d:2,
e:"En cas de grève des conducteurs d'une PME de transport, l'employeur peut :",
r:[{t:"Licencier tous les grévistes immédiatement"},{t:"Faire appel à des intérimaires pour les remplacer, ou à de la sous-traitance",ok:true},{t:"Leur retenir l'intégralité du salaire du mois"},{t:"Fermer l'entreprise définitivement"}],
x:"Bonne réponse : Faire appel à des intérimaires pour les remplacer, ou à de la sous-traitance. L'employeur peut recourir à la sous-traitance ou à du travail temporaire (intérim) pour assurer les transports urgents en cas de grève, dans le respect de la légalité (pas de briseurs de grève illégaux). La retenue de salaire ne porte que sur les heures non travaillées (grève non rémunérée)."},

{id:2314,prog:'LOURD',theme:'cl-social',d:3,
e:"La grille conventionnelle des coefficients (CCNTR) classe les conducteurs PL de :",
r:[{t:"1 à 5 niveaux"},{t:"100M à 150V avec sous-groupes selon le véhicule et le type de transport",ok:true},{t:"A à E selon la taille de l'entreprise"},{t:"Conducteur junior à conducteur senior uniquement"}],
x:"Bonne réponse : 100M à 150V avec sous-groupes selon le véhicule et le type de transport. La CCNTR classe les conducteurs PL selon des coefficients qui déterminent les salaires minimaux conventionnels : 100M (VL/messagerie légère), 110V (fourgon), 118V (porteur), 128V (porteur > 19t), 138M (tracteur routier), 150M (grande routier, international, longue distance). Ces coefficients sont distincts selon les activités (Transport Routier de Marchandises vs déménagement vs transport sanitaire…)."},

{id:2315,prog:'LOURD',theme:'cl-acces',d:1,
e:"La capacité financière pour une entreprise PL disposant de 5 véhicules de PTAC > 3,5t est de :",
r:[{t:"25 000 €"},{t:"29 000 €",ok:true},{t:"45 000 €"},{t:"9 000 €"}],
x:"Bonne réponse : 29 000 €. Capacité financière PL : 9 000 € pour le 1er véhicule + 5 000 € par véhicule supplémentaire. Pour 5 véhicules : 9 000 + (4 × 5 000) = 9 000 + 20 000 = 29 000 €. Cette somme doit être prouvée par les fonds propres des derniers comptes ou une garantie bancaire."},

{id:2316,prog:'LOURD',theme:'lo-gestion',d:2,
e:"La surcharge carburant dans un contrat de transport PL se déclenche :",
r:[{t:"À chaque variation du prix du gazole"},{t:"Quand le prix du carburant CNR dépasse le seuil défini dans la clause d'indexation",ok:true},{t:"Uniquement en cas de hausse de plus de 50 %"},{t:"Elle n'existe pas dans les contrats transport"}],
x:"Bonne réponse : Quand le prix du carburant CNR dépasse le seuil défini dans la clause d'indexation. La clause de révision carburant se déclenche quand le prix du gazole CNR dépasse un seuil de référence défini dans le contrat. La variation est répercutée selon une formule convenue (ex : si le carburant représente 30 % du CRK et que le CNR gazole monte de 10 %, la révision est de 3 % du prix de base)."},

{id:2317,prog:'LOURD',theme:'cl-social',d:3,
e:"Le forfait jours n'est pas applicable aux conducteurs PL car :",
r:[{t:"Ils gagnent trop peu"},{t:"Ils ne disposent pas d'une autonomie dans l'organisation de leur temps de travail au sens légal",ok:true},{t:"Leur convention collective le refuse"},{t:"Ils travaillent toujours en équipe"}],
x:"Bonne réponse : Ils ne disposent pas d'une autonomie dans l'organisation de leur temps de travail au sens légal. Le forfait annuel en jours est réservé aux cadres disposant d'une réelle autonomie dans l'organisation de leur emploi du temps. Les conducteurs PL, dont les horaires sont essentiellement déterminés par les tournées et les réglementations 561/2006, ne disposent pas de cette autonomie organisationnelle requise par l'art. L.3121-53 du Code du travail."},

{id:2318,prog:'LOURD',theme:'cl-social',d:2,
e:"Le dépassement de la durée de conduite journalière de plus d'une heure constitue :",
r:[{t:"Une simple contravention"},{t:"Un délit pénal",ok:true},{t:"Une faute professionnelle sans sanction pénale"},{t:"Une infraction administrative"}],
x:"Bonne réponse : Un délit pénal. Le dépassement de plus d'une heure de la durée de conduite journalière est un délit pénal (pas une simple contravention), passible de poursuites pénales pour le conducteur et potentiellement pour l'employeur en cas de complicité ou de pression. En dessous d'une heure, c'est une contravention."},

{id:2319,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le ratio de couverture des frais fixes = MCV / Charges fixes. Si ce ratio est de 1,3, l'entreprise :",
r:[{t:"Est déficitaire"},{t:"Couvre ses charges fixes et génère 30 % de marge bénéficiaire sur le CA",ok:true},{t:"Est à l'équilibre exact"},{t:"Dégage exactement 30 % de résultat net"}],
x:"Bonne réponse : Couvre ses charges fixes et génère 30 % de marge bénéficiaire sur le CA. Si MCV / CF = 1,3, la MCV couvre les CF à 130 %, ce qui signifie un bénéfice = MCV - CF = CF × 0,3. Exemple : CF = 100 000 € → MCV = 130 000 € → Résultat = 30 000 €. Ce ratio > 1 signifie que l'entreprise est bénéficiaire."},

{id:2320,prog:'LOURD',theme:'cl-social',d:3,
e:"L'attestation d'activités doit être remise par l'employeur au conducteur pour :",
r:[{t:"Les jours travaillés uniquement"},{t:"Les jours non travaillés (congés, maladie, repos…) depuis les 28 derniers jours",ok:true},{t:"Les jours de conduite internationale uniquement"},{t:"Les jours de formation"}],
x:"Bonne réponse : Les jours non travaillés (congés, maladie, repos…) depuis les 28 derniers jours. L'attestation d'activités (ou attestation de conduite) est un document que l'employeur doit fournir au conducteur pour justifier les périodes de 28 jours précédant le contrôle où le conducteur n'était pas au volant (congés, repos compensateurs, maladie, formation…). Elle complète les données du tachygraphe lors des contrôles."},

{id:2321,prog:'LOURD',theme:'cl-social',d:2,
e:"Le repos compensateur de remplacement pour les heures supplémentaires peut remplacer :",
r:[{t:"Uniquement les majorations de salaire"},{t:"Le paiement des HS par un repos équivalent, avec accord collectif",ok:true},{t:"Le repos hebdomadaire"},{t:"Le préavis de licenciement"}],
x:"Bonne réponse : Le paiement des HS par un repos équivalent, avec accord collectif. Le repos compensateur de remplacement (RCR) permet, avec accord collectif ou individuel, de remplacer le paiement des heures supplémentaires (et leur majoration) par un repos d'une durée équivalente majorée. Exemple : une HS majorée à 25 % = 1h15 de RCR. Les modalités de prise du RCR sont fixées par l'accord."},

{id:2322,prog:'LOURD',theme:'cl-social',d:3,
e:"Le forfait social sur la participation et l'intéressement est de :",
r:[{t:"5 %"},{t:"20 % (réduit à 10 % pour l'intéressement dans les entreprises < 250 salariés)",ok:true},{t:"33 %"},{t:"Il n'y a pas de cotisation sur la participation"}],
x:"Bonne réponse : 20 % (réduit à 10 % pour l'intéressement dans les entreprises < 250 salariés). Le forfait social est une contribution patronale sur certains éléments de rémunération exclus de l'assiette des cotisations de Sécurité Sociale. Taux de 20 % sur la participation et l'abondement PEE/PERCO. Taux réduit à 10 % sur l'intéressement dans les entreprises de moins de 250 salariés. Les TPE < 11 salariés sont exonérées de forfait social sur l'intéressement et la participation."},

{id:2323,prog:'LOURD',theme:'lo-regl',d:3,
e:"L'obligation de formation à la sécurité pour les conducteurs PL (habilitation électrique, CACES…) est :",
r:[{t:"Facultative"},{t:"À la charge de l'employeur selon les risques identifiés dans le DUER",ok:true},{t:"À la charge du conducteur"},{t:"Uniquement requise dans les grandes entreprises"}],
x:"Bonne réponse : À la charge de l'employeur selon les risques identifiés dans le DUER. L'employeur a l'obligation de former ses salariés à la sécurité en rapport avec les risques identifiés dans le DUER. Pour les conducteurs PL : habilitation électrique si manipulation de véhicules électriques/hybrides, CACES selon les engins manipulés (hayons, chariots embarqués), formation gestes et postures, formation au risque chimique si applicable."},

{id:2324,prog:'LOURD',theme:'lo-regl',d:2,
e:"Un hayon élévateur installé sur un camion est soumis à :",
r:[{t:"Aucune réglementation spécifique"},{t:"Une vérification annuelle obligatoire et le respect de la directive machines",ok:true},{t:"Un simple entretien constructeur"},{t:"Une déclaration à la DREAL uniquement"}],
x:"Bonne réponse : Une vérification annuelle obligatoire et le respect de la directive machines. Les hayons élévateurs sont des équipements de travail soumis aux obligations de vérification périodique (arrêté du 1er mars 2004) : vérification annuelle par une personne qualifiée (organisme de contrôle agréé), tenue d'un carnet de maintenance, formation des utilisateurs. La directive machines 2006/42/CE s'applique à leur conception."},

{id:2325,prog:'LOURD',theme:'lo-civil',d:1,
e:"La lettre de voiture nationale pour un transport PL doit être établie en :",
r:[{t:"1 exemplaire"},{t:"Au moins 3 exemplaires (expéditeur, destinataire, transporteur)",ok:true},{t:"5 exemplaires"},{t:"Elle est facultative si contrat-cadre"}],
x:"Bonne réponse : Au moins 3 exemplaires (expéditeur, destinataire, transporteur). La lettre de voiture (ou CMR pour l'international) doit être établie en au moins 3 exemplaires originaux : un pour l'expéditeur, un remis au destinataire avec les marchandises, et un conservé par le transporteur. Elle matérialise le contrat de transport et sert de preuve en cas de litige."},

{id:2326,prog:'LOURD',theme:'lo-intl',d:1,
e:"Le numéro EORI (Economic Operators Registration and Identification) est requis pour :",
r:[{t:"L'immatriculation de véhicules PL"},{t:"Tout opérateur économique effectuant des opérations douanières dans l'UE",ok:true},{t:"L'enregistrement des conducteurs détachés"},{t:"L'inscription au RENT"}],
x:"Bonne réponse : Tout opérateur économique effectuant des opérations douanières dans l'UE. Le numéro EORI est un identifiant unique attribué par les douanes aux opérateurs économiques (importateurs, exportateurs, transitaires, transporteurs) effectuant des opérations douanières dans l'UE. Il est obligatoire pour déposer des déclarations en douane depuis 2009. En France, il est basé sur le SIRET de l'entreprise."},

{id:2327,prog:'LOURD',theme:'cl-social',d:1,
e:"La visite médicale d'aptitude obligatoire pour un conducteur PL professionnel a lieu :",
r:[{t:"Tous les 5 ans"},{t:"Tous les 5 ans jusqu'à 60 ans, puis tous les 2 ans puis tous les ans",ok:true},{t:"Uniquement à l'embauche"},{t:"Tous les 2 ans systématiquement"}],
x:"Bonne réponse : Tous les 5 ans jusqu'à 60 ans, puis tous les 2 ans puis tous les ans. La périodicité des visites médicales d'aptitude à la conduite professionnelle dépend de l'âge : tous les 5 ans jusqu'à 60 ans, puis tous les 2 ans entre 60 et 65 ans, puis chaque année après 65 ans. Le médecin agréé préfectoral délivre l'attestation d'aptitude médicale professionnelle."},

{id:2328,prog:'LOURD',theme:'cl-social',d:3,
e:"Un conducteur effectue 10h de conduite le lundi. Le mardi, il peut au maximum conduire :",
r:[{t:"9 heures"},{t:"Uniquement 8 heures (pour ne pas dépasser 90h/2 semaines)"},{t:"9 heures s'il n'a pas encore utilisé ses 2 extensions à 10h de la semaine",ok:true},{t:"Aucune heure — il doit prendre un repos"}],
x:"Bonne réponse : 9 heures s'il n'a pas encore utilisé ses 2 extensions à 10h de la semaine. La limite journalière est de 9 heures, sauf 2 fois par semaine où elle peut être portée à 10 heures. Si le conducteur a conduit 10h le lundi (1ère extension), il peut conduire jusqu'à 10h le mardi (2ème extension possible) ou jusqu'à 9h. Mais la limite hebdomadaire de 56h et bihebdomadaire de 90h s'appliquent."},

{id:2329,prog:'LOURD',theme:'lo-gestion',d:1,
e:"Pour calculer le prix de revient d'un transport, on doit inclure :",
r:[{t:"Uniquement les charges directes liées au trajet"},{t:"Toutes les charges (directes et indirectes) réparties sur le trajet",ok:true},{t:"Uniquement le carburant et les péages"},{t:"Uniquement le salaire du conducteur"}],
x:"Bonne réponse : Toutes les charges (directes et indirectes) réparties sur le trajet. Un prix de revient complet intègre : les charges directes variables (carburant, péages, pneumatiques, entretien courant) + les charges fixes directes (amortissement, assurance, salaire conducteur) + une quote-part des charges de structure (loyer, personnel administratif, frais généraux). Négliger les charges de structure conduit à une sous-tarification."},

{id:2330,prog:'LOURD',theme:'cl-social',d:3,
e:"L'accord de performance collective (APC) permet à une entreprise de :",
r:[{t:"Licencier sans motif économique"},{t:"Moduler la durée de travail, les rémunérations et les mobilités pour préserver l'emploi",ok:true},{t:"Supprimer les congés payés légaux"},{t:"Embaucher sans respecter les règles de droit commun"}],
x:"Bonne réponse : Moduler la durée de travail, les rémunérations et les mobilités pour préserver l'emploi. L'accord de performance collective (APC, ordonnances 2017) permet à une entreprise de définir par accord majoritaire les mesures d'organisation nécessaires (aménagement du temps de travail, mobilité, rémunération). Un salarié qui refuse l'application de l'accord peut être licencié pour cause réelle et sérieuse (pas pour motif économique)."},

{id:2331,prog:'LOURD',theme:'cl-social',d:3,
e:"La durée maximale du temps de service (temps de travail) d'un conducteur PL est de :",
r:[{t:"8 heures"},{t:"10 heures (12 heures deux fois par semaine)",ok:true},{t:"12 heures systématiquement"},{t:"Il n'y a pas de limite journalière"}],
x:"Bonne réponse : 10 heures (12 heures deux fois par semaine). La directive 2002/15/CE fixe la durée maximale journalière du temps de travail à 10 heures. Elle peut être portée à 12 heures deux fois par semaine maximum. Ces limites s'ajoutent aux règles sur les temps de conduite du règlement 561/2006."},

{id:2332,prog:'LOURD',theme:'cl-social',d:1,
e:"Le repos journalier minimal d'un conducteur PL en cabine (repos réduit) est de :",
r:[{t:"8 heures"},{t:"9 heures",ok:true},{t:"11 heures"},{t:"12 heures"}],
x:"Bonne réponse : 9 heures. Le repos journalier réduit est de 9 heures consécutives minimum (au lieu de 11 heures pour le repos normal). Il ne peut être pris que 3 fois entre deux repos hebdomadaires. Le repos réduit n'a pas à être compensé."},

{id:2333,prog:'LOURD',theme:'cl-social',d:2,
e:"La subrogation de salaire en cas d'arrêt maladie permet à l'employeur de :",
r:[{t:"Ne pas verser de salaire"},{t:"Percevoir directement les IJ de la CPAM et maintenir le salaire complet au salarié",ok:true},{t:"Doubler les IJ du salarié"},{t:"Retarder le paiement du salaire de 30 jours"}],
x:"Bonne réponse : Percevoir directement les IJ de la CPAM et maintenir le salaire complet au salarié. La subrogation (possible si accord collectif ou contrat) permet à l'employeur de percevoir directement les IJ versées par la CPAM en lieu et place du salarié, tout en maintenant le salaire complet au salarié. Simplifie les démarches du salarié et améliore sa trésorerie pendant l'arrêt. L'employeur reverse ensuite les IJ à la CPAM."},

{id:2334,prog:'LOURD',theme:'lo-intl',d:3,
e:"Les exigences de sécurité pour un transport de marchandises à haut risque terroriste (ex : matières explosives) incluent :",
r:[{t:"Uniquement le certificat ADR du conducteur"},{t:"Plan de sûreté, formation spécifique, escorte possible, signalement des incidents à l'autorité compétente",ok:true},{t:"Un marquage spécial sur le véhicule uniquement"},{t:"Aucune exigence supplémentaire par rapport aux autres matières ADR"}],
x:"Bonne réponse : Plan de sûreté, formation spécifique, escorte possible, signalement des incidents à l'autorité compétente. Pour les marchandises à haut risque sécuritaire (chapitre 1.10 ADR), des exigences renforcées s'appliquent : plan de sûreté de l'entreprise, formation sûreté pour le conducteur et le personnel, mesures de traçabilité, signalement des incidents suspects à l'autorité compétente. L'escorte peut être requise par les autorités pour certains transports."},

{id:2335,prog:'LOURD',theme:'cl-social',d:1,
e:"La durée maximale de conduite par semaine pour un conducteur PL est de :",
r:[{t:"48 heures"},{t:"56 heures",ok:true},{t:"60 heures"},{t:"40 heures"}],
x:"Bonne réponse : 56 heures. Le règlement 561/2006 fixe la durée maximale de conduite hebdomadaire à 56 heures, avec une limite de 90 heures sur 2 semaines consécutives. Ces deux limites doivent être respectées simultanément."},

{id:2336,prog:'LOURD',theme:'cl-social',d:2,
e:"En cas de grève dans une entreprise de transport PL, le préavis est obligatoire :",
r:[{t:"Dans les services publics uniquement"},{t:"Dans les entreprises de transport de voyageurs gérant un service public, mais pas obligatoire dans le transport de marchandises privé",ok:true},{t:"Dans toutes les entreprises de transport"},{t:"Uniquement pour les grèves de plus de 48h"}],
x:"Bonne réponse : Dans les entreprises de transport de voyageurs gérant un service public, mais pas obligatoire dans le transport de marchandises privé. Le préavis de grève (5 jours) est obligatoire dans les entreprises gérant un service public (SNCF, RATP, cars scolaires sous délégation de service public…). Dans le transport privé de marchandises, il n'y a pas d'obligation légale de préavis. Cependant, les conventions collectives peuvent en prévoir."},

{id:2337,prog:'LOURD',theme:'cl-social',d:2,
e:"Le taux de cotisation patronale d'assurance vieillesse (retraite de base) est d'environ :",
r:[{t:"5 %"},{t:"8,55 % sur le plafond SS + 1,90 % en déplafonnée (taux 2024 indicatifs)",ok:true},{t:"20 %"},{t:"3 %"}],
x:"Bonne réponse : 8,55 % sur le plafond SS + 1,90 % en déplafonnée (taux 2024 indicatifs). Les cotisations retraite de base (régime général) comprennent une part plafonnée (jusqu'au plafond SS, 48 060 €/an en 2026) et une part déplafonnée (sur la totalité du salaire). Le taux patronal total est d'environ 8,55 % + 2,02 % = 10,57 %. Ces taux varient légèrement chaque année. S'y ajoutent les cotisations AGIRC-ARRCO pour la retraite complémentaire."},

{id:2338,prog:'LOURD',theme:'cl-social',d:2,
e:"Le délai de réponse de l'employeur à une demande de formation CPF du salarié est de :",
r:[{t:"30 jours"},{t:"30 jours calendaires (accordé si pas de réponse dans ce délai)",ok:true},{t:"15 jours"},{t:"3 mois"}],
x:"Bonne réponse : 30 jours calendaires (accordé si pas de réponse dans ce délai). L'employeur dispose de 30 jours calendaires pour répondre à une demande CPF du salarié. Si aucune réponse n'est donnée dans ce délai, l'accord est présumé (accord implicite). Ce délai peut être différent pour les formations longues ou celles nécessitant un accord de financement de l'OPCO."},

{id:2339,prog:'LOURD',theme:'cl-social',d:1,
e:"La durée de validité de la carte conducteur tachygraphe est de :",
r:[{t:"1 an"},{t:"5 ans",ok:true},{t:"10 ans"},{t:"Permanente"}],
x:"Bonne réponse : 5 ans. La carte conducteur (numérique personnelle) est valable 5 ans. Elle doit être renouvelée avant expiration. En cas de perte ou de vol, le conducteur doit déclarer la perte aux autorités et peut obtenir un duplicata. La conduite sans carte conducteur valide (en utilisant des disques papier de remplacement) est tolérée 15 jours maximum."},

{id:2340,prog:'LOURD',theme:'lo-gestion',d:2,
e:"La valeur de remplacement d'un PL est importante pour :",
r:[{t:"Le calcul de l'IS"},{t:"Évaluer si la CAF est suffisante pour financer le renouvellement du parc",ok:true},{t:"L'évaluation des stocks"},{t:"Le calcul des cotisations sociales"}],
x:"Bonne réponse : Évaluer si la CAF est suffisante pour financer le renouvellement du parc. La VNC (valeur comptable) peut être très inférieure à la valeur de remplacement (coût d'un véhicule équivalent neuf). L'écart indique que les amortissements passés ne suffiront pas à financer le renouvellement. L'entreprise doit compléter par emprunt ou mobiliser une part de la CAF au-delà des remboursements en cours."},

{id:2341,prog:'LOURD',theme:'lo-gestion',d:3,
e:"Le diagnostic financier d'une reprise de PME transport PL doit nécessairement analyser :",
r:[{t:"Uniquement le dernier bilan"},{t:"Les 3 derniers bilans + CR + CAF + engagements hors bilan + état du parc + contrats clients",ok:true},{t:"Uniquement les statistiques sectorielles"},{t:"Uniquement les ressources humaines"}],
x:"Bonne réponse : Les 3 derniers bilans + CR + CAF + engagements hors bilan + état du parc + contrats clients. Un diagnostic complet pour une reprise analyse : 3 derniers exercices (bilans, CR, annexes), CAF et son évolution, flux de trésorerie, engagements hors bilan (crédit-bail, cautions, litiges), état du parc (vieillissement, VNC vs valeur marché), contrats clients (pérennité, concentration du CA), situation sociale (effectifs, contentieux prud'homaux, sinistralité AT)."},

{id:2342,prog:'LOURD',theme:'lo-regl',d:1,
e:"La lettre de voiture nationale (LVN) en France doit accompagner :",
r:[{t:"Uniquement les transports > 1 tonne"},{t:"Tout transport de marchandises effectué à titre onéreux",ok:true},{t:"Uniquement les transports > 100 km"},{t:"Uniquement les transports ADR"}],
x:"Bonne réponse : Tout transport de marchandises effectué à titre onéreux. La lettre de voiture nationale (LVN) est obligatoire pour tout transport de marchandises effectué à titre onéreux sur le territoire national. Elle doit accompagner la marchandise et mentionner : les parties (expéditeur, transporteur, destinataire), la nature et la quantité des marchandises, le lieu de chargement et de livraison. En l'absence de LVN, le conducteur peut être verbalisé."},

{id:2343,prog:'LOURD',theme:'lo-intl',d:1,
e:"La convention CMR s'applique obligatoirement lorsque :",
r:[{t:"Le transport est effectué avec un PL de plus de 7,5t"},{t:"Le lieu de prise en charge et le lieu de livraison sont dans deux pays différents dont au moins l'un est signataire",ok:true},{t:"La valeur de la marchandise dépasse 10 000 €"},{t:"Le transport dure plus de 24 heures"}],
x:"Bonne réponse : Le lieu de prise en charge et le lieu de livraison sont dans deux pays différents dont au moins l'un est signataire. La CMR (Convention relative au Contrat de transport international de Marchandises par Route) s'applique automatiquement à tout contrat de transport routier de marchandises à titre onéreux entre deux pays dont au moins l'un est signataire, quels que soient la nationalité des parties et le lieu du contrat."},

{id:2344,prog:'LOURD',theme:'lo-intl',d:1,
e:"La lettre de voiture CMR doit être établie en minimum :",
r:[{t:"1 exemplaire"},{t:"3 exemplaires originaux",ok:true},{t:"5 exemplaires"},{t:"Elle est facultative avec accord verbal"}],
x:"Bonne réponse : 3 exemplaires originaux. La CMR art. 5 impose que la lettre de voiture soit établie en 3 exemplaires originaux signés par l'expéditeur et le transporteur : 1 exemplaire pour l'expéditeur, 1 accompagne la marchandise jusqu'au destinataire, 1 est conservé par le transporteur. Des exemplaires supplémentaires peuvent être requis selon les formalités douanières."},

{id:2345,prog:'LOURD',theme:'lo-regl',d:2,
e:"La mise sur le marché de véhicules PL neufs en Europe nécessite :",
r:[{t:"Uniquement une immatriculation nationale"},{t:"Une réception par type CE délivrée par une autorité compétente de l'UE",ok:true},{t:"Un agrément DREAL spécifique"},{t:"L'accord de chaque pays où le véhicule circulera"}],
x:"Bonne réponse : Une réception par type CE délivrée par une autorité compétente de l'UE. La réception par type CE (ou UE) est le processus d'homologation européen par lequel un véhicule est reconnu conforme aux règlements techniques européens (sécurité, émissions, bruit…). Elle est délivrée par une autorité compétente d'un État membre (DREIA en France) et est valable dans toute l'UE."},

{id:2346,prog:'LOURD',theme:'cl-acces',d:2,
e:"En cas de décès du gestionnaire PL, l'activité peut se poursuivre :",
r:[{t:"Indéfiniment sans désigner de remplaçant"},{t:"18 mois maximum sous réserve de désignation d'un gestionnaire temporaire accepté par l'autorité",ok:true},{t:"6 mois seulement"},{t:"Elle doit cesser immédiatement"}],
x:"Bonne réponse : 18 mois maximum sous réserve de désignation d'un gestionnaire temporaire accepté par l'autorité. En cas de décès, d'incapacité ou de départ du gestionnaire, l'autorité compétente peut autoriser la poursuite de l'activité pendant 18 mois avec un gestionnaire temporaire acceptable. Ce délai permet de trouver un nouveau gestionnaire qualifié ou de passer le CPC. À l'expiration, un gestionnaire satisfaisant aux conditions doit être nommé."},

{id:2347,prog:'LOURD',theme:'lo-gestion',d:2,
e:"La surcharge carburant indexée dans un contrat de transport se déclenche généralement :",
r:[{t:"À chaque variation du prix du carburant"},{t:"Quand le prix du carburant dépasse un seuil de référence défini au contrat",ok:true},{t:"Uniquement en cas de hausse de plus de 50 %"},{t:"Elle n'existe pas dans les contrats de transport"}],
x:"Bonne réponse : Quand le prix du carburant dépasse un seuil de référence défini au contrat. La clause de révision carburant (ou surcharge carburant) est déclenchée quand le prix du gazole dépasse un seuil de référence défini dans le contrat (ex : prix CNR de référence). La variation est alors répercutée selon une formule convenue. Elle protège le transporteur des fluctuations des prix du carburant."},

{id:2348,prog:'LOURD',theme:'lo-civil',d:2,
e:"La garantie de bonne fin dans un marché de transport longue durée :",
r:[{t:"Garantit le paiement systématique des factures"},{t:"Engage le transporteur à honorer toutes ses prestations sur la durée du contrat",ok:true},{t:"Remplace le contrat d'assurance"},{t:"N'existe pas dans le transport routier"}],
x:"Bonne réponse : Engage le transporteur à honorer toutes ses prestations sur la durée du contrat. La garantie de bonne exécution (ou bonne fin) engage le transporteur à exécuter l'intégralité de ses obligations contractuelles sur la durée du marché. Elle peut être garantie par une caution bancaire si le client l'exige. En cas de défaillance, la caution indemnise le client."},

{id:2349,prog:'LOURD',theme:'lo-gestion',d:1,
e:"La location longue durée (LLD) d'un PL par rapport à l'achat se caractérise par :",
r:[{t:"La propriété du véhicule à la fin du contrat"},{t:"Des loyers mensuels fixes tout compris, sans option d'achat à terme",ok:true},{t:"Un coût inférieur à l'achat comptant"},{t:"L'impossibilité de changer de véhicule en cours de contrat"}],
x:"Bonne réponse : Des loyers mensuels fixes tout compris, sans option d'achat à terme. La LLD (ou Location Longue Durée) diffère du leasing (crédit-bail) : la LLD n'inclut pas d'option d'achat finale. Le locataire utilise le véhicule pendant une durée déterminée (3-5 ans) avec un loyer mensuel qui peut inclure l'entretien, les pneus et parfois l'assurance. À l'échéance, le véhicule est restitué."},

{id:2350,prog:'LOURD',theme:'lo-intl',d:3,
e:"Le règlement 2020/1055 (paquet mobilité 1) impose notamment le retour du PL au pays d'établissement :",
r:[{t:"Tous les 3 mois"},{t:"Au moins toutes les 8 semaines",ok:true},{t:"Tous les 6 mois"},{t:"Il n'y a pas d'obligation de retour"}],
x:"Bonne réponse : Au moins toutes les 8 semaines. Le règlement 2020/1055 (applicable depuis 2022) impose que les véhicules PL retournent dans l'État membre d'établissement au moins toutes les 8 semaines (afin d'éviter que les véhicules restent indéfiniment à l'étranger). Cette règle vise à lutter contre les 'boîtes aux lettres' et les bases de facto dans des pays à bas coût social."},

{id:2351,prog:'LOURD',theme:'cl-social',d:1,
e:"Le délai de carence entre deux CDD pour le même poste est de :",
r:[{t:"15 jours après un CDD de moins de 14 jours"},{t:"1/3 de la durée du contrat précédent si ≥ 14 jours, 1/2 si < 14 jours",ok:true},{t:"1 mois systématiquement"},{t:"Il n'y a pas de délai légal"}],
x:"Bonne réponse : 1/3 de la durée du contrat précédent si ≥ 14 jours, 1/2 si < 14 jours. Le délai de carence entre deux CDD sur le même poste est de : 1/3 de la durée totale du contrat précédent (renouvellement inclus) si celui-ci était d'au moins 14 jours, et 1/2 si le contrat précédent était inférieur à 14 jours. Ce délai peut être écarté dans certains cas (remplacement d'absent, saisonnier, etc.)."},

{id:2352,prog:'LOURD',theme:'lo-regl',d:1,
e:"Le principe de responsabilité partagée dans la chaîne logistique ('donneur d'ordre') s'applique notamment pour :",
r:[{t:"La seule responsabilité civile"},{t:"La responsabilité pénale et civile des infractions sociales causées par les conditions imposées",ok:true},{t:"Uniquement les infractions ADR"},{t:"Uniquement les accidents corporels"}],
x:"Bonne réponse : La responsabilité pénale et civile des infractions sociales causées par les conditions imposées. Le règlement 561/2006 et la loi française (art. L.3315-4 du Code des transports) établissent la responsabilité des chargeurs, commissionnaires et autres acteurs qui ont ordonné ou provoqué des infractions aux règles de temps de conduite. Si un délai de livraison impossible a contraint le conducteur à dépasser ses temps, le donneur d'ordre peut être poursuivi."},

{id:2353,prog:'LOURD',theme:'lo-regl',d:2,
e:"Un conducteur PL peut conduire avec un tachygraphe défectueux pendant :",
r:[{t:"Aucun délai — interdiction immédiate de rouler"},{t:"Jusqu'au retour au dépôt ou jusqu'au garage le plus proche pour réparation, en notant manuellement",ok:true},{t:"7 jours maximum"},{t:"30 jours avec notification à la DREAL"}],
x:"Bonne réponse : Jusqu'au retour au dépôt ou jusqu'au garage le plus proche pour réparation, en notant manuellement. En cas de défaillance du tachygraphe, le conducteur peut continuer jusqu'au dépôt ou au garage le plus proche pour réparation, mais doit noter manuellement toutes ses activités sur papier. Le tachygraphe doit être réparé dès que possible. Si la panne survient loin du dépôt, l'appareil doit être réparé en route par un atelier agréé."},

{id:2354,prog:'LOURD',theme:'cl-social',d:2,
e:"La FCOS (Formation Continue Obligatoire de Sécurité) pour conducteurs PL dure :",
r:[{t:"35 heures tous les 5 ans",ok:true},{t:"105 heures tous les 5 ans"},{t:"35 heures par an"},{t:"140 heures au total"}],
x:"Bonne réponse : 35 heures tous les 5 ans. La FCOS (CQC Renouvellement) est de 35 heures sur 5 ans pour les conducteurs PL titulaires du CQC initial. Elle comprend des modules obligatoires sur la sécurité routière, la réglementation sociale et l'éco-conduite. Elle est sanctionnée par un examen."},

{id:2355,prog:'LOURD',theme:'cl-social',d:1,
e:"La durée légale de travail hebdomadaire pour les conducteurs PL en France est de :",
r:[{t:"39 heures"},{t:"35 heures, avec des spécificités liées au secteur transport",ok:true},{t:"48 heures"},{t:"40 heures"}],
x:"Bonne réponse : 35 heures, avec des spécificités liées au secteur transport. La durée légale du travail est de 35 heures hebdomadaires pour tous les salariés, y compris les conducteurs PL. Les spécificités du transport routier (temps de service, disponibilité) sont encadrées par la directive 2002/15/CE et la CCN transports routiers. Les heures au-delà de 35h sont des heures supplémentaires."},

{id:2356,prog:'LOURD',theme:'lo-regl',d:2,
e:"Le SIPSI (Système d'Information sur les Prestations de Services Internationaux) est utilisé pour :",
r:[{t:"Immatriculer les véhicules étrangers"},{t:"Les déclarations de détachement de travailleurs en France par des employeurs étrangers",ok:true},{t:"Contrôler les temps de conduite à distance"},{t:"Vérifier les licences de transport"}],
x:"Bonne réponse : Les déclarations de détachement de travailleurs en France par des employeurs étrangers. Le portail SIPSI (géré par le Ministère du Travail) est la plateforme de déclaration préalable de détachement de travailleurs. Tout employeur établi hors de France détachant un salarié en France (pour du cabotage, du transport bilatéral…) doit effectuer cette déclaration avant le début de la prestation. L'attestation de détachement doit être à bord du véhicule."},

{id:2357,prog:'LOURD',theme:'lo-civil',d:2,
e:"Le contrat type 'lot' dans le transport PL s'applique aux :",
r:[{t:"Envois inférieurs à 3 tonnes"},{t:"Chargements complets d'au moins 3 tonnes ou 3 mètres linéaires",ok:true},{t:"Tous les transports PL"},{t:"Transports de matières dangereuses uniquement"}],
x:"Bonne réponse : Chargements complets d'au moins 3 tonnes ou 3 mètres linéaires. Le contrat type applicable en transport de lot (arrêté du 15 mars 1993 modifié) s'applique aux envois de 3 tonnes et plus ou occupant au moins 3 mètres linéaires du plancher d'un véhicule. Il fixe les délais de livraison, les plafonds d'indemnisation et les règles de réserves."},

{id:2358,prog:'LOURD',theme:'lo-gestion',d:3,
e:"Le prix de revient au coup (trajet aller simple avec retour à vide) intègre :",
r:[{t:"Uniquement les charges de l'aller chargé"},{t:"Les charges aller ET retour (même à vide), car le coût du retour doit être couvert",ok:true},{t:"Les charges de 3 trajets similaires"},{t:"Uniquement les charges variables"}],
x:"Bonne réponse : Les charges aller ET retour (même à vide), car le coût du retour doit être couvert. Pour un transport A/B avec retour à vide, le prix de revient doit intégrer l'intégralité des charges (aller + retour), car le conducteur, le véhicule et tous les frais continuent de courir même à vide. Le prix facturé au client doit donc couvrir le coût total aller-retour pour assurer la rentabilité."},

{id:2359,prog:'LOURD',theme:'lo-gestion',d:3,
e:"L'EBITDA (ou EBE - Excédent Brut d'Exploitation) représente :",
r:[{t:"Le bénéfice net après impôts et intérêts"},{t:"Le résultat opérationnel avant déduction des amortissements et provisions",ok:true},{t:"Le chiffre d'affaires hors taxes"},{t:"Les capitaux propres de l'entreprise"}],
x:"Bonne réponse : Le résultat opérationnel avant déduction des amortissements et provisions. L'EBE (ou EBITDA) = Résultat d'exploitation + Amortissements + Provisions. Il mesure la capacité de l'entreprise à générer des liquidités par son activité avant prise en compte des investissements et du financement."},

{id:2360,prog:'LOURD',theme:'lo-social',d:1,
e:"L'attestation de conducteur (pour les conducteurs ressortissants de pays tiers) est délivrée par :",
r:[{t:"Le conducteur lui-même"},{t:"L'entreprise de transport qui emploie le conducteur",ok:true},{t:"La préfecture de police"},{t:"Le syndicat des transporteurs"}],
x:"Bonne réponse : L'entreprise de transport qui emploie le conducteur. L'attestation de conducteur est délivrée par l'entreprise de transport qui emploie un conducteur ressortissant d'un pays tiers à l'UE. Elle doit être présentée lors des contrôles routiers."},

{id:2361,prog:'LOURD',theme:'cl-social',d:3,
e:"Le contingent d'heures supplémentaires pour les conducteurs PL est fixé par :",
r:[{t:"La loi à 220 heures par an"},{t:"La convention collective des transports routiers, généralement à 195 heures",ok:true},{t:"Un accord d'entreprise uniquement"},{t:"Il n'y a pas de contingent pour les conducteurs"}],
x:"Bonne réponse : La convention collective des transports routiers, généralement à 195 heures. Le contingent annuel d'heures supplémentaires est fixé par la convention collective nationale des transports routiers à 195 heures (au lieu de 220 heures par défaut). Au-delà de ce contingent, chaque heure supplémentaire nécessite l'autorisation de l'inspection du travail et ouvre droit à un repos compensateur obligatoire."},

{id:2362,prog:'LOURD',theme:'cl-social',d:2,
e:"L'examen du permis C pour la conduite de PL est accompagné obligatoirement :",
r:[{t:"Uniquement de la FIMO"},{t:"Du CQC initial (FIMO) avant exercice professionnel, et du CQC périodique (FCOS) tous les 5 ans",ok:true},{t:"D'un stage ADR"},{t:"D'un examen médical annuel"}],
x:"Bonne réponse : Du CQC initial (FIMO) avant exercice professionnel, et du CQC périodique (FCOS) tous les 5 ans. Pour conduire professionnellement un PL, il faut : le permis C ou CE + le CQC (Code 95 sur le permis). Le CQC Initial (280h ou 140h selon profil) est obtenu avant la prise de fonctions. Le CQC Périodique (35h tous les 5 ans) maintient les droits. Une visite médicale d'aptitude périodique est également obligatoire."},

{id:2363,prog:'LOURD',theme:'lo-regl',d:1,
e:"La visite périodique d'un PL de transport de marchandises a lieu tous les :",
r:[{t:"1 an",ok:true},{t:"2 ans"},{t:"6 mois"},{t:"18 mois"}],
x:"Bonne réponse : 1 an. Les véhicules de transport de marchandises de plus de 3,5t sont soumis à un contrôle technique annuel (tous les ans), contrairement aux véhicules légers soumis au contrôle tous les 2 ans. La première visite a lieu avant la 1ère mise en circulation ou dans un délai réglementé selon le pays."},

{id:2364,prog:'LOURD',theme:'cl-social',d:2,
e:"L'intérim (travail temporaire) dans le transport PL oblige l'ETT à :",
r:[{t:"Former le conducteur intérimaire sur le poste de travail"},{t:"Vérifier que le conducteur possède les habilitations requises (permis CE, CQC, ADR si applicable)",ok:true},{t:"Fournir le véhicule à l'entreprise utilisatrice"},{t:"S'assurer que le conducteur connaît le tachygraphe"}],
x:"Bonne réponse : Vérifier que le conducteur possède les habilitations requises (permis CE, CQC, ADR si applicable). L'ETT (Entreprise de Travail Temporaire) doit vérifier que le conducteur intérimaire dispose de toutes les habilitations requises pour le poste : permis CE valide, code 95 (CQC) valide, certificat ADR si le poste l'exige, aptitude médicale valide. L'entreprise utilisatrice est responsable des conditions de travail et du respect des temps de conduite pendant la mission."},

{id:2365,prog:'LOURD',theme:'lo-regl',d:2,
e:"La réglementation sur le temps de service des conducteurs routiers est issue de :",
r:[{t:"Uniquement du Code du travail français"},{t:"La directive européenne 2002/15/CE transposée en droit français",ok:true},{t:"Du règlement 561/2006 uniquement"},{t:"D'accords bilatéraux entre syndicats"}],
x:"Bonne réponse : La directive européenne 2002/15/CE transposée en droit français. La directive 2002/15/CE fixe les conditions d'aménagement du temps de travail (temps de service) dans les transports routiers. Elle est distincte du règlement 561/2006 qui fixe les temps de conduite et de repos. La directive a été transposée en France par le décret n° 2003-1242 du 22 décembre 2003."},

{id:2366,prog:'LOURD',theme:'cl-social',d:2,
e:"L'obligation de loyauté du salarié pendant son contrat de travail lui interdit :",
r:[{t:"De suivre des formations en dehors de ses heures"},{t:"D'exercer une activité concurrente à celle de son employeur",ok:true},{t:"D'adhérer à un syndicat concurrent"},{t:"De se faire élire au CSE"}],
x:"Bonne réponse : D'exercer une activité concurrente à celle de son employeur. L'obligation de loyauté (découlant de l'art. L.1222-1 du Code du travail) interdit au salarié, pendant l'exécution de son contrat, d'exercer une activité concurrente au détriment de son employeur. Cette obligation existe même sans clause de non-concurrence spécifique. Elle cesse à la rupture du contrat (sauf clause de non-concurrence post-contractuelle)."},

{id:2367,prog:'LOURD',theme:'lo-regl',d:3,
e:"Le transport exceptionnel de catégorie 3 (la plus contraignante) nécessite :",
r:[{t:"Uniquement une signalisation renforcée"},{t:"Une autorisation individuelle préfectorale, des escortes de police et une coordination avec les gestionnaires de voirie",ok:true},{t:"Uniquement l'accord de la DREAL"},{t:"Un véhicule spécialement immatriculé"}],
x:"Bonne réponse : Une autorisation individuelle préfectorale, des escortes de police et une coordination avec les gestionnaires de voirie. Les transports exceptionnels de catégorie 3 (très grands gabarits ou très lourds) nécessitent une autorisation individuelle spécifique, une coordination avec tous les gestionnaires de voirie concernés, des escortes officielles (police nationale ou gendarmerie), et parfois des déplacements uniquement de nuit ou les week-ends pour minimiser la gêne au trafic."},

{id:2368,prog:'LOURD',theme:'lo-civil',d:2,
e:"L'assurance tous risques marchandises transportées (AMT) :",
r:[{t:"Est toujours incluse dans l'assurance RC du transporteur"},{t:"Est souscrite par l'expéditeur ou le destinataire pour couvrir la valeur réelle des marchandises",ok:true},{t:"Est obligatoire pour tous les transports PL"},{t:"Est souscrite par le transporteur pour son compte"}],
x:"Bonne réponse : Est souscrite par l'expéditeur ou le destinataire pour couvrir la valeur réelle des marchandises. L'assurance AMT (Ad Valorem ou tous risques marchandises) est souscrite par l'expéditeur ou le destinataire pour couvrir la valeur réelle des marchandises en cas de perte, vol ou dommage. Elle complète la responsabilité plafonnée du transporteur. Elle est distincte de l'assurance RC du transporteur."},

{id:2369,prog:'LOURD',theme:'cl-social',d:1,
e:"Le temps de disponibilité d'un conducteur PL est défini comme :",
r:[{t:"Le temps de pause réglementaire de 45 min"},{t:"Le temps pendant lequel le conducteur attend sans conduire (chargement, douane…) dont la durée est connue à l'avance",ok:true},{t:"Le temps de repos journalier"},{t:"Les congés payés"}],
x:"Bonne réponse : Le temps pendant lequel le conducteur attend sans conduire (chargement, douane…) dont la durée est connue à l'avance. Le temps de disponibilité (ou temps d'attente) est le temps où le conducteur est présent dans le véhicule ou à sa disposition sans conduire, et dont il connaît la durée à l'avance. Il ne compte pas comme temps de travail effectif mais est rémunéré (à taux réduit selon la CCN). Il ne peut pas être utilisé comme temps de repos."},

{id:2370,prog:'LOURD',theme:'lo-intl',d:2,
e:"La déclaration en douane d'exportation est faite :",
r:[{t:"À la frontière du pays de sortie"},{t:"Dans le pays exportateur, avant la sortie de la marchandise",ok:true},{t:"Dans le pays importateur à l'arrivée"},{t:"Uniquement pour les marchandises soumises à droits d'exportation"}],
x:"Bonne réponse : Dans le pays exportateur, avant la sortie de la marchandise. En Europe, les formalités douanières d'exportation (déclaration EX, ex-EUR1 pour certains pays) sont effectuées dans le pays de l'UE d'où la marchandise est exportée, avant sa sortie du territoire douanier de l'UE. L'exportateur ou un transitaire agréé en douane effectue cette démarche."},

{id:2371,prog:'LOURD',theme:'lo-gestion',d:3,
e:"La valeur ajoutée d'une PME de transport PL (CA 1M€, consommations intermédiaires 600 000 €) est de :",
r:[{t:"1 000 000 €"},{t:"400 000 €",ok:true},{t:"600 000 €"},{t:"200 000 €"}],
x:"Bonne réponse : 400 000 €. VA = Production de l'exercice - Consommations intermédiaires = 1 000 000 - 600 000 = 400 000 €. Les consommations intermédiaires incluent : carburant, pneus, entretien, péages, sous-traitance, loyers, assurances, services extérieurs. La VA se répartit ensuite entre salariés, État, créanciers et actionnaires."},

{id:2372,prog:'LOURD',theme:'cl-social',d:3,
e:"Le fait pour un employeur d'obliger un conducteur PL à violer les temps de conduite constitue :",
r:[{t:"Une simple irrégularité administrative"},{t:"Une mise en danger de la vie d'autrui, passible de poursuites pénales",ok:true},{t:"Uniquement une sanction DREAL"},{t:"Un motif légitime en cas d'urgence"}],
x:"Bonne réponse : Une mise en danger de la vie d'autrui, passible de poursuites pénales. Contraindre un conducteur à dépasser les temps de conduite ou à ne pas respecter les repos constitue une mise en danger délibérée d'autrui (art. 223-1 du Code pénal) passible d'1 an d'emprisonnement et 15 000 € d'amende. L'employeur peut aussi être poursuivi pour complicité des infractions du conducteur. En cas d'accident, la responsabilité pénale de l'employeur est systématiquement recherchée."},

{id:2373,prog:'LOURD',theme:'cl-social',d:2,
e:"Le taux de cotisation patronale à l'assurance chômage est actuellement de :",
r:[{t:"2,4 %"},{t:"4,05 %",ok:true},{t:"6,5 %"},{t:"1,5 %"}],
x:"Bonne réponse : 4,05 %. La cotisation patronale d'assurance chômage est de 4,05 % du salaire brut plafonné à 4 fois le PASS. Depuis 2019, la cotisation salariale a été supprimée. L'employeur assume seul le financement de l'assurance chômage via cette cotisation patronale."},

{id:2374,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le transport de marchandises entre deux pays tiers effectué par un transporteur d'un troisième pays (ex : transporteur français entre Espagne et Italie) s'appelle :",
r:[{t:"Cabotage"},{t:"Transport triangulaire ou transport pour compte de tiers entre États tiers",ok:true},{t:"Transit"},{t:"Covoiturage commercial"}],
x:"Bonne réponse : Transport triangulaire ou transport pour compte de tiers entre États tiers. Le transport triangulaire (ou cross-trade) est le transport effectué par un transporteur d'un pays A entre un pays B et un pays C, sans passer par son pays d'établissement. Dans l'UE, ce type de transport est en principe libre pour les transporteurs titulaires d'une licence communautaire. Des restrictions s'appliquent hors UE."},

{id:2375,prog:'LOURD',theme:'lo-civil',d:2,
e:"Les réserves sur la lettre de voiture lors du chargement doivent être émises par :",
r:[{t:"Le destinataire"},{t:"Le transporteur si l'emballage ou la marchandise présente des défauts visibles au chargement",ok:true},{t:"L'expéditeur"},{t:"Elles ne peuvent être émises qu'à la livraison"}],
x:"Bonne réponse : Le transporteur si l'emballage ou la marchandise présente des défauts visibles au chargement. Au chargement, le transporteur doit émettre des réserves sur la lettre de voiture (LVN ou CMR) si l'emballage est endommagé, si la quantité ne correspond pas au document, ou si l'état de la marchandise est suspect. Ces réserves protègent le transporteur d'une mise en cause ultérieure pour des dommages antérieurs à sa prise en charge."},

{id:2376,prog:'LOURD',theme:'lo-gestion',d:3,
e:"Pour un transport A→B de 500 km avec retour à vide (500 km), CRK = 1,05 €/km. Le client propose 900 €. L'entreprise accepte-t-elle ?",
r:[{t:"Oui, c'est rentable"},{t:"Non, le coût A/R est 1 050 € — c'est une perte de 150 €",ok:true},{t:"Oui si le retour est rapide"},{t:"Oui si le carburant baisse"}],
x:"Bonne réponse : Non, le coût A/R est 1 050 € — c'est une perte de 150 €. Coût total A/R = 1,05 × 1 000 km = 1 050 €. Le client propose 900 € < 1 050 €. C'est une perte de 150 €. L'entreprise doit refuser ou négocier un prix minimum = 1 050 / (1 - marge souhaitée). Même à court terme, accepter en dessous du coût de revient n'est pas viable."},

{id:2377,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Le seuil de dangerosité financière d'une entreprise PL peut être évalué par le ratio :",
r:[{t:"CA / Actif total"},{t:"Dette nette / (CAF × facteur sectoriel), ou coefficient d'exploitation > 95-96 %",ok:true},{t:"Résultat net / CA"},{t:"Nombre de véhicules / Effectif"}],
x:"Bonne réponse : Dette nette / (CAF × facteur sectoriel), ou coefficient d'exploitation > 95-96 %. Les principaux signaux de danger financier pour une PME transport : coefficient d'exploitation dépassant régulièrement 95-96 %, trésorerie négative et dégradée sur plusieurs trimestres, CAF insuffisante pour couvrir les remboursements d'emprunts, délais clients qui s'allongent, et fonds propres négatifs (situation nette négative)."},

{id:2378,prog:'LOURD',theme:'cl-social',d:2,
e:"Le système de points du permis CE d'un conducteur PL professionnel :",
r:[{t:"Est le même que pour un permis B"},{t:"Commence à 12 points (ou 6 en période probatoire) comme tout permis",ok:true},{t:"Dispose de 24 points spécifiques"},{t:"N'existe pas pour les professionnels"}],
x:"Bonne réponse : Commence à 12 points (ou 6 en période probatoire) comme tout permis. Le permis CE (comme tous les permis français) est au capital de 12 points (6 points pour les conducteurs en période probatoire). La perte de points suit les mêmes règles que pour le permis B. Pour un professionnel PL, la perte du permis CE signifie la perte de l'emploi — d'où l'importance de la conduite prudente et préventive."},

{id:2379,prog:'LOURD',theme:'cl-acces',d:2,
e:"La licence communautaire est exigée pour les transports internationaux de marchandises :",
r:[{t:"Dans tous les pays du monde"},{t:"Entre États membres de l'UE (et certains pays tiers via accords)",ok:true},{t:"Uniquement pour les PL > 20t"},{t:"Uniquement pour les transports ADR"}],
x:"Bonne réponse : Entre États membres de l'UE (et certains pays tiers via accords). La licence communautaire (règl. 1072/2009) autorise les transports de marchandises entre États membres de l'UE. Une copie certifiée conforme doit être à bord du véhicule. Pour les pays tiers non couverts par des accords spécifiques, d'autres autorisations peuvent être requises (bilatérales, contingents de passages)."},

{id:2380,prog:'LOURD',theme:'lo-civil',d:1,
e:"Le contrat de groupage consiste à :",
r:[{t:"Regrouper plusieurs transporteurs pour un seul contrat"},{t:"Rassembler des marchandises de plusieurs expéditeurs dans un même véhicule pour réduire les coûts",ok:true},{t:"Grouper des factures sur une seule"},{t:"Faire des livraisons groupées uniquement en zone urbaine"}],
x:"Bonne réponse : Rassembler des marchandises de plusieurs expéditeurs dans un même véhicule pour réduire les coûts. Le groupage (ou LTL : Less than Truck Load) consiste à réunir dans un même véhicule des marchandises appartenant à différents expéditeurs pour optimiser le taux de remplissage et réduire le coût par unité transportée. C'est le principe de la messagerie et des services de groupage spécialisés."},

{id:2381,prog:'LOURD',theme:'lo-gestion',d:3,
e:"Le tableau de bord de gestion d'une entreprise PL doit comporter en priorité :",
r:[{t:"Uniquement le chiffre d'affaires mensuel"},{t:"Les indicateurs de rentabilité (CRK, coefficient d'exploitation), d'activité (km, taux de remplissage) et de sécurité",ok:true},{t:"Uniquement les indicateurs financiers"},{t:"Les statistiques d'accidents uniquement"}],
x:"Bonne réponse : Les indicateurs de rentabilité (CRK, coefficient d'exploitation), d'activité (km, taux de remplissage) et de sécurité. Un tableau de bord de transport doit comporter : indicateurs financiers (CA, marge, coût revient), indicateurs d'activité (km parcourus, km à vide, taux de remplissage, nombre de livraisons), indicateurs sociaux (heures, heures sup, accidents de travail) et indicateurs de sécurité (infractions, accidents). Il doit être mis à jour au moins mensuellement."},

{id:2382,prog:'LOURD',theme:'cl-social',d:3,
e:"L'obligation d'emploi de travailleurs handicapés (OETH) pour les entreprises de 20+ salariés est de :",
r:[{t:"1 % de l'effectif"},{t:"6 % de l'effectif",ok:true},{t:"10 % de l'effectif"},{t:"2 % de l'effectif"}],
x:"Bonne réponse : 6 % de l'effectif. L'OETH impose à tout employeur de 20 salariés et plus d'employer 6 % de travailleurs en situation de handicap (BOETH). En cas de non-respect, l'employeur verse une contribution à l'AGEFIPH (secteur privé) ou au FIPHFP (secteur public). Cette contribution peut être réduite par des actions de formation, travaux adaptés, etc."},

{id:2383,prog:'LOURD',theme:'cl-social',d:3,
e:"Un conducteur PL commet une fraude de tachygraphe (aimant, câble modifié). Les sanctions pénales sont :",
r:[{t:"Une simple contravention"},{t:"Un délit pouvant aller jusqu'à 2 ans d'emprisonnement et 30 000 € d'amende",ok:true},{t:"Uniquement une suspension de permis"},{t:"Une amende forfaitaire de 500 €"}],
x:"Bonne réponse : Un délit pouvant aller jusqu'à 2 ans d'emprisonnement et 30 000 € d'amende. La falsification du tachygraphe est un délit grave : jusqu'à 2 ans d'emprisonnement et 30 000 € d'amende pour le conducteur. L'employeur complice encourt des peines similaires. La carte conducteur peut être suspendue ou annulée. Les inspecteurs du travail et DREAL disposent d'outils de détection sophistiqués."},

{id:2384,prog:'LOURD',theme:'lo-gestion',d:2,
e:"Les frais de déplacement des conducteurs PL (indemnités de grand routier) sont comptabilisés en :",
r:[{t:"Charges exceptionnelles"},{t:"Charges de personnel (6413 ou 6415)",ok:true},{t:"Achats (601)"},{t:"Charges financières"}],
x:"Bonne réponse : Charges de personnel (6413 ou 6415). Les indemnités de déplacement des conducteurs (repas, couchées, grand déplacement) sont comptabilisées dans les charges de personnel : compte 6413 (indemnités et avantages divers) ou 6415 (charges de sécurité sociale et de prévoyance). Elles sont exonérées de cotisations sociales dans les limites URSSAF."},

{id:2385,prog:'LOURD',theme:'cl-social',d:2,
e:"Le conducteur PL qui effectue un déplacement de plus de 50 km de son lieu de prise de service a droit à :",
r:[{t:"Rien de spécifique"},{t:"Des indemnités de repas et éventuellement de couchée selon la CCN transports routiers",ok:true},{t:"Des heures supplémentaires automatiques"},{t:"Un jour de repos compensateur"}],
x:"Bonne réponse : Des indemnités de repas et éventuellement de couchée selon la CCN transports routiers. La Convention Collective Nationale des Transports Routiers (CCNTR) prévoit des indemnités de déplacement (repas et couchées) pour les conducteurs dont les conditions de déplacement les empêchent de regagner leur domicile dans des conditions normales. Les montants sont fixés par la CCN et réévalués régulièrement."},

{id:2386,prog:'LOURD',theme:'cl-social',d:2,
e:"Le repos hebdomadaire normal est de :",
r:[{t:"24 heures"},{t:"45 heures consécutives",ok:true},{t:"35 heures"},{t:"48 heures"}],
x:"Bonne réponse : 45 heures consécutives. Le repos hebdomadaire normal est de 45 heures consécutives minimum. Il peut être réduit à 24 heures (repos réduit), à condition que la réduction soit compensée en bloc avant la fin de la 3ème semaine suivante."},

{id:2387,prog:'LOURD',theme:'cl-social',d:3,
e:"Le conducteur PL en équipage (deux conducteurs) peut prendre son repos journalier :",
r:[{t:"Uniquement dans un hébergement"},{t:"Dans la cabine du véhicule (si couchette adaptée) pendant que le véhicule roule",ok:true},{t:"Uniquement aux aires de repos"},{t:"Uniquement s'il ne conduit pas depuis 4 heures"}],
x:"Bonne réponse : Dans la cabine du véhicule (si couchette adaptée) pendant que le véhicule roule. En équipage (deux conducteurs), le conducteur non actif peut prendre son repos journalier dans la cabine du véhicule en mouvement, à condition que celle-ci soit équipée d'une couchette adaptée. Le repos journalier en équipage est d'au moins 9 heures dans une période de 30 heures (vs 11 heures en solo)."},

{id:2388,prog:'LOURD',theme:'lo-regl',d:2,
e:"Le transport de matières vivantes (poissons en aquaculture) nécessite :",
r:[{t:"Aucune réglementation spécifique"},{t:"Agrément vétérinaire, conditions de transport adaptées (eau oxygénée, température) et documents sanitaires",ok:true},{t:"Uniquement un véhicule réfrigéré"},{t:"Un permis spécial préfectoral"}],
x:"Bonne réponse : Agrément vétérinaire, conditions de transport adaptées (eau oxygénée, température) et documents sanitaires. Le transport de poissons vivants est réglementé par le règlement CE 1/2005 sur la protection des animaux. Le transporteur doit : être agréé par les services vétérinaires, disposer de véhicules équipés (systèmes d'oxygénation, filtration, contrôle de température), avoir des conducteurs formés, et disposer des documents d'accompagnement sanitaires requis."},

{id:2389,prog:'LOURD',theme:'lo-intl',d:3,
e:"Le cabotage routier en France depuis un transport international entrant est autorisé :",
r:[{t:"Illimité après déchargement"},{t:"3 opérations maximum dans les 7 jours suivant le déchargement du transport international entrant",ok:true},{t:"5 opérations en 30 jours"},{t:"1 seule opération par voyage international"}],
x:"Bonne réponse : 3 opérations maximum dans les 7 jours suivant le déchargement du transport international entrant. Le règlement (CE) 1072/2009 limite le cabotage à 3 opérations de transport intérieur en France, dans les 7 jours suivant le déchargement du transport international. Après ces 7 jours, le véhicule doit quitter la France. Ce délai de carence vise à limiter la concurrence des transporteurs de pays à plus bas coûts salariaux."},

{id:2390,prog:'LOURD',theme:'lo-civil',d:2,
e:"Le contrat de transport routier est qualifié de :",
r:[{t:"Contrat réel"},{t:"Contrat d'entreprise à titre onéreux",ok:true},{t:"Contrat aléatoire"},{t:"Contrat unilatéral"}],
x:"Bonne réponse : Contrat d'entreprise à titre onéreux. Le contrat de transport est qualifié de contrat d'entreprise (locatio operis) à titre onéreux. Le transporteur s'engage à un résultat (la livraison) et non à une simple mise à disposition de moyens. Il est synallagmatique (obligations réciproques), consensuel (formé par accord des volontés) et commutatif (prestations équivalentes connues à l'avance)."},

{id:2391,prog:'LOURD',theme:'cl-social',d:2,
e:"L'entreprise de transport PL doit télécharger les données du tachygraphe de chaque véhicule au moins :",
r:[{t:"Tous les 30 jours"},{t:"Tous les 90 jours",ok:true},{t:"Tous les 6 mois"},{t:"Annuellement"}],
x:"Bonne réponse : Tous les 90 jours. Les données tachygraphiques de chaque véhicule doivent être téléchargées et sauvegardées au moins toutes les 90 jours. Les données de la carte conducteur doivent être téléchargées au moins tous les 28 jours. Ces données doivent être conservées 12 mois et mises à disposition lors des contrôles."},

{id:2392,prog:'LOURD',theme:'lo-gestion',d:3,
e:"Le diagnostic financier d'une reprise d'une PME de transport doit s'appuyer sur :",
r:[{t:"Uniquement les 3 derniers bilans"},{t:"3 derniers bilans + comptes de résultat + CAF + tableaux de flux + analyse hors bilan et engagements",ok:true},{t:"Uniquement le dernier bilan"},{t:"Les statistiques sectorielles CNR uniquement"}],
x:"Bonne réponse : 3 derniers bilans + comptes de résultat + CAF + tableaux de flux + analyse hors bilan et engagements. Un diagnostic complet pour une reprise doit analyser : les 3 derniers exercices (bilans, CR, annexes), la CAF et son évolution, les flux de trésorerie, les engagements hors bilan (crédit-bail, cautions, litiges en cours), l'état du parc et son vieillissement, les contrats clients et leur pérennité, et la situation sociale (effectifs, contentieux prud'homaux)."},

{id:2393,prog:'LOURD',theme:'cl-social',d:1,
e:"Le principe de faveur en droit du travail des PL signifie que :",
r:[{t:"La loi prime toujours"},{t:"La règle la plus favorable au salarié s'applique en cas de conflit entre deux normes",ok:true},{t:"Les accords d'entreprise priment"},{t:"Le salarié choisit la règle applicable"}],
x:"Bonne réponse : La règle la plus favorable au salarié s'applique en cas de conflit entre deux normes. En cas de conflit entre la loi, la convention collective et l'accord d'entreprise, la règle la plus favorable au salarié s'applique. Les ordonnances de 2017 ont introduit des dérogations : les accords d'entreprise peuvent désormais primer sur la CCN dans certains domaines spécifiques."},

{id:2394,prog:'LOURD',theme:'lo-gestion',d:2,
e:"La valeur de remplacement d'un PL (vs valeur nette comptable) est importante pour :",
r:[{t:"Le calcul de l'IS"},{t:"La mise à jour du niveau d'amortissement nécessaire pour financer le renouvellement du parc",ok:true},{t:"L'évaluation des stocks"},{t:"Le calcul des cotisations sociales"}],
x:"Bonne réponse : La mise à jour du niveau d'amortissement nécessaire pour financer le renouvellement du parc. La VNC (Valeur Nette Comptable) peut être très inférieure à la valeur de remplacement (coût d'achat d'un nouveau véhicule équivalent). Cet écart indique que les amortissements passés ne seront pas suffisants pour financer le renouvellement. L'entreprise doit provisionner ou emprunter pour remplacer ses véhicules."},

{id:2395,prog:'LOURD',theme:'lo-intl',d:3,
e:"La limite de responsabilité du transporteur CMR en cas de perte totale d'un chargement de 15 000 kg est :",
r:[{t:"15 000 €"},{t:"8,33 DTS × 15 000 = 124 950 DTS ≈ 160 000 €",ok:true},{t:"10 000 € forfaitaire"},{t:"La valeur déclarée uniquement"}],
x:"Bonne réponse : 8,33 DTS × 15 000 = 124 950 DTS ≈ 160 000 €. CMR art. 23 : plafond = 8,33 DTS par kg de poids brut perdu. Pour 15 000 kg : 8,33 × 15 000 = 124 950 DTS. Avec 1 DTS ≈ 1,27 € (taux indicatif) : environ 158 685 €. Ce plafond peut être supérieur à la valeur réelle des marchandises pour les produits lourds et peu coûteux, ou très inférieur pour les produits légers et de haute valeur."},

{id:2396,prog:'LOURD',theme:'lo-gestion',d:1,
e:"Le ratio de rentabilité des actifs (ROA) se calcule comme :",
r:[{t:"Résultat net / Capitaux propres"},{t:"Résultat net / Total actif × 100",ok:true},{t:"CA / Total actif"},{t:"EBIT / Chiffre d'affaires"}],
x:"Bonne réponse : Résultat net / Total actif × 100. ROA (Return On Assets) = Résultat net / Total actif × 100. Il mesure l'efficacité de l'entreprise à générer des bénéfices à partir de ses actifs totaux. Un ROA de 8 % signifie que l'entreprise génère 8 € de bénéfice pour 100 € d'actifs. C'est un indicateur d'efficience opérationnelle."},

{id:2397,prog:'LOURD',theme:'lo-gestion',d:2,
e:"La cession d'un véhicule PL avec une plus-value génère :",
r:[{t:"Toujours un avantage fiscal immédiat"},{t:"Un produit exceptionnel imposable, mais pouvant bénéficier d'un étalement ou d'une exonération sous conditions",ok:true},{t:"Une charge déductible"},{t:"Aucun impact fiscal"}],
x:"Bonne réponse : Un produit exceptionnel imposable, mais pouvant bénéficier d'un étalement ou d'une exonération sous conditions. La plus-value réalisée sur la cession d'un PL (prix de vente > valeur nette comptable) constitue un produit exceptionnel imposable (IS ou IR). Pour les PME, des régimes de faveur existent : exonération sous condition de CA (art. 151 septies du CGI pour l'IR) ou remploi des plus-values."},

{id:2398,prog:'LOURD',theme:'cl-social',d:1,
e:"Le compte épargne-temps (CET) dans les transports peut être utilisé pour :",
r:[{t:"Uniquement financer sa retraite"},{t:"Financer un congé, compléter la retraite ou être monétisé selon l'accord instaurant le CET",ok:true},{t:"Acheter des jours de formation"},{t:"Uniquement pour les formations qualifiantes"}],
x:"Bonne réponse : Financer un congé, compléter la retraite ou être monétisé selon l'accord instaurant le CET. Le CET (art. L.3151-1 du Code du travail) est alimenté par des jours de repos ou des éléments de rémunération. Il peut être utilisé : pour financer des congés (sabbatique, parental, création d'entreprise…), alimenter un PER (plan d'épargne retraite), ou être monétisé (converti en salaire) selon les modalités de l'accord d'entreprise qui l'a instauré."},

{id:2399,prog:'LOURD',theme:'lo-regl',d:1,
e:"La visite technique annuelle obligatoire d'un PL doit être réalisée :",
r:[{t:"Tous les 2 ans"},{t:"Chaque année",ok:true},{t:"Tous les 6 mois"},{t:"Tous les 3 ans"}],
x:"Bonne réponse : Chaque année. Les PL et remorques de PTAC > 3,5t sont soumis à une visite technique annuelle obligatoire dans un centre agréé. En cas de contre-visite (défaut détecté), le véhicule doit être remis en conformité dans un délai imparti. L'absence de CT valide peut entraîner l'immobilisation du véhicule par les forces de l'ordre."},

{id:2400,prog:'LOURD',theme:'lo-regl',d:2,
e:"La réglementation sur le lavage des citernes (dégazage) impose :",
r:[{t:"Uniquement le rinçage à l'eau"},{t:"Des procédures spécifiques selon les produits transportés, avec des ateliers agréés pour les produits dangereux",ok:true},{t:"Uniquement un séchage à l'air"},{t:"Aucune procédure réglementée"}],
x:"Bonne réponse : Des procédures spécifiques selon les produits transportés, avec des ateliers agréés pour les produits dangereux. Le nettoyage et dégazage des citernes ayant transporté des matières dangereuses (carburants, produits chimiques…) doit être effectué dans des installations agréées. Un certificat de dégazage/nettoyage est délivré, attestant que la citerne peut être réutilisée ou réparée en toute sécurité. Ce certificat est requis par les garages pour les travaux sur citernes."},

{id:2401,prog:'LOURD',theme:'lo-intl',d:2,
e:"Le formulaire A1 pour un conducteur PL détaché est délivré par :",
r:[{t:"La DREAL du pays d'accueil"},{t:"L'organisme de sécurité sociale du pays d'origine du travailleur",ok:true},{t:"L'administration fiscale du pays d'accueil"},{t:"L'URSSAF pour les travailleurs français détachés à l'étranger"}],
x:"Bonne réponse : L'organisme de sécurité sociale du pays d'origine du travailleur. Le formulaire A1 est délivré par l'organisme de sécurité sociale (en France : URSSAF pour les salariés des régimes généraux) du pays d'établissement de l'employeur. Il atteste que le travailleur détaché reste affilié au régime de sécurité sociale de son pays d'origine, évitant ainsi la double cotisation."},

{id:2402,prog:'LOURD',theme:'lo-intl',d:1,
e:"La convention CMR s'applique au transport routier international de marchandises :",
r:[{t:"Uniquement en UE"},{t:"Entre deux pays dont au moins l'un est signataire, pour transport à titre onéreux",ok:true},{t:"Uniquement pour les PL > 20t"},{t:"Uniquement si déclarée dans le contrat"}],
x:"Bonne réponse : Entre deux pays dont au moins l'un est signataire, pour transport à titre onéreux. La CMR s'applique automatiquement (sans nécessité de clause spécifique) à tout transport routier de marchandises à titre onéreux entre deux pays dont au moins l'un est signataire. Elle régit la responsabilité du transporteur, les documents à établir et les limites d'indemnisation."},

{id:2403,prog:'LOURD',theme:'cl-social',d:3,
e:"Le fractionnement des repos journaliers (split rests) est autorisé pour les conducteurs en équipage :",
r:[{t:"Non, jamais autorisé en équipage"},{t:"Oui : le repos peut être fractionné en 2 périodes, la première d'au moins 3h et la seconde d'au moins 9h",ok:true},{t:"Oui, en autant de fractions que nécessaire"},{t:"Oui, mais uniquement pour les femmes enceintes"}],
x:"Bonne réponse : Oui : le repos peut être fractionné en 2 périodes, la première d'au moins 3h et la seconde d'au moins 9h. Pour les conducteurs seuls, le repos journalier ne peut être fractionné qu'en repos réduit (9h). Pour les conducteurs en équipage, l'art. 8 du règlement 561/2006 prévoit une disposition spécifique : le repos peut être scindé en 2 périodes (première ≥ 3h consécutives, deuxième ≥ 9h consécutives, total ≥ 12h)."},

{id:4001,prog:'ADR',theme:'adr-gen',d:1,
e:"L'ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) s'applique :",
r:[{t:"Uniquement aux transports internationaux entre pays signataires"},{t:"Aux transports internationaux entre pays signataires ET aux transports nationaux par transposition",ok:true},{t:"Uniquement aux matières radioactives et explosives"},{t:"Uniquement aux véhicules citernes"}],
x:"Bonne réponse : Aux transports internationaux entre pays signataires ET aux transports nationaux par transposition. L'ADR est un accord international initialement applicable aux transports internationaux. En France, il a été transposé en droit national par arrêté, ce qui le rend applicable aux transports nationaux. La réglementation ADR est actualisée tous les 2 ans."},

{id:4002,prog:'ADR',theme:'adr-gen',d:2,
e:"Le CSTMD (Conseiller à la Sécurité pour le Transport de Marchandises Dangereuses) est obligatoire pour toute entreprise qui :",
r:[{t:"Transporte plus de 10 tonnes de marchandises dangereuses par an"},{t:"Expédie, conditionne, charge, remplit ou transporte des marchandises dangereuses",ok:true},{t:"Possède plus de 5 véhicules dédiés aux matières dangereuses"},{t:"Réalise uniquement du transport international de matières dangereuses"}],
x:"Bonne réponse : Expédie, conditionne, charge, remplit ou transporte des marchandises dangereuses. Toute entreprise dont l'activité comprend l'expédition, le conditionnement, le chargement, le remplissage ou le transport de marchandises dangereuses doit désigner un CSTMD (Conseiller à la Sécurité pour le Transport de Marchandises Dangereuses). Des seuils d'exemption existent pour les petites quantités."},

{id:4003,prog:'ADR',theme:'adr-gen',d:1,
e:"Le certificat de formation ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) du conducteur est valable :",
r:[{t:"1 an"},{t:"3 ans"},{t:"5 ans",ok:true},{t:"Indéfiniment si aucun accident"}],
x:"Bonne réponse : 5 ans. Le certificat ADR du conducteur est valable 5 ans. Pour le renouveler, le conducteur doit suivre une formation de recyclage dans les 12 mois précédant l'expiration. S'il n'est pas renouvelé à temps, une nouvelle formation initiale complète est nécessaire."},

{id:4004,prog:'ADR',theme:'adr-gen',d:2,
e:"La classe ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) '6.1' correspond aux matières :",
r:[{t:"Comburantes"},{t:"Corrosives"},{t:"Très inflammables"},{t:"Toxiques, même en faible quantité",ok:true}],
x:"Bonne réponse : Toxiques, même en faible quantité. La classe 6.1 de l'ADR regroupe les matières toxiques : substances qui, par inhalation, ingestion ou pénétration cutanée, peuvent provoquer la mort ou de graves lésions même en faible quantité."},

{id:4005,prog:'ADR',theme:'adr-gen',d:1,
e:"Les 9 classes de l'ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) regroupent les matières dangereuses par :",
r:[{t:"Ordre alphabétique de leur nom chimique"},{t:"Nature du danger principal qu'elles présentent",ok:true},{t:"Masse volumique croissante"},{t:"Ordre chronologique de leur découverte"}],
x:"Bonne réponse : Nature du danger principal qu'elles présentent. Les 9 classes ADR classifient les marchandises dangereuses selon leur nature du danger principal : classe 1 (explosifs), classe 2 (gaz), classes 3 à 9 (liquides inflammables, solides inflammables, comburants, toxiques, radioactives, corrosives, divers)."},

{id:4006,prog:'ADR',theme:'adr-gen',d:3,
e:"Les exemptions de l'ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) pour les 'petites quantités' (quantités limitées) sont accordées aux expéditions dont les quantités ne dépassent pas :",
r:[{t:"10 kg par matière"},{t:"Des seuils fixés par la table A de l'ADR pour chaque matière",ok:true},{t:"500 kg au total par envoi"},{t:"1 tonne par véhicule"}],
x:"Bonne réponse : Des seuils fixés par la table A de l'ADR pour chaque matière. Les exemptions pour petites quantités (quantités limitées - LQ) sont accordées selon des seuils spécifiques définis dans le chapitre 3.4 de l'ADR pour chaque matière. Ces exemptions permettent d'expédier des matières dangereuses sans toutes les contraintes normales de l'ADR."},

{id:4007,prog:'ADR',theme:'adr-gen',d:2,
e:"La liste des marchandises dangereuses admises au transport est contenue dans :",
r:[{t:"Le chapitre 2 de l'ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route)"},{t:"La table A du chapitre 3.2 de l'ADR",ok:true},{t:"L'annexe A du Code des transports"},{t:"Les circulaires ministérielles annuelles"}],
x:"Bonne réponse : La table A du chapitre 3.2 de l'ADR. La table A du chapitre 3.2 de l'ADR liste toutes les matières dangereuses admises au transport avec leur numéro ONU, leur désignation officielle, leur classe, leur groupe d'emballage, les prescriptions d'emballage et les équipements requis."},

{id:4008,prog:'ADR',theme:'adr-gen',d:2,
e:"Le numéro ONU (Organisation des Nations Unies) d'une matière dangereuse sert à :",
r:[{t:"Identifier la classe de danger de la matière"},{t:"Identifier de manière unique la matière dangereuse au niveau international",ok:true},{t:"Calculer la quantité maximale transportable"},{t:"Déterminer le type de véhicule requis pour le transport"}],
x:"Bonne réponse : Identifier de manière unique la matière dangereuse au niveau international. Le numéro ONU est un identifiant numérique à 4 chiffres attribué par les Nations Unies permettant d'identifier une matière dangereuse de manière unique et universelle, indépendamment de la langue. Il figure sur les panneaux orange réfléchissants du véhicule."},

{id:4009,prog:'ADR',theme:'adr-gen',d:1,
e:"Les panneaux orange réfléchissants que doit apposer un véhicule transportant des marchandises dangereuses soumises à signalisation doivent être de dimensions :",
r:[{t:"250 mm × 400 mm"},{t:"300 mm × 400 mm"},{t:"400 mm × 300 mm",ok:true},{t:"500 mm × 400 mm"}],
x:"Bonne réponse : 400 mm × 300 mm. Les panneaux orange réfléchissants ADR doivent mesurer 400 mm de largeur × 300 mm de hauteur, avec un liseré noir de 15 mm. Ils indiquent en haut le code de danger (Kemler) et en bas le numéro ONU de la matière transportée."},

{id:4010,prog:'ADR',theme:'adr-gen',d:3,
e:"Le rapport de sécurité annuel du CSTMD (Conseiller à la Sécurité pour le Transport de Marchandises Dangereuses) doit être conservé par l'entreprise pendant :",
r:[{t:"1 an"},{t:"3 ans"},{t:"5 ans",ok:true},{t:"10 ans"}],
x:"Bonne réponse : 5 ans. Le rapport annuel du CSTMD (Conseiller à la Sécurité pour le Transport de Marchandises Dangereuses) doit être conservé par l'entreprise pendant 5 ans et être mis à la disposition de l'autorité compétente sur demande."},

{id:4011,prog:'ADR',theme:'adr-cls',d:1,
e:"La classe ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) 3 correspond aux :",
r:[{t:"Gaz comprimés, liquéfiés ou dissous sous pression"},{t:"Matières et objets explosibles"},{t:"Liquides inflammables",ok:true},{t:"Matières solides inflammables"}],
x:"Bonne réponse : Liquides inflammables. La classe 3 de l'ADR regroupe les liquides inflammables : substances liquides ayant un point d'éclair ≤60°C. Exemples : carburants, alcools, solvants organiques. Ces matières sont identifiées par une étiquette rouge en forme de losange avec une flamme."},

{id:4012,prog:'ADR',theme:'adr-cls',d:2,
e:"La classe ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) 8 correspond aux matières :",
r:[{t:"Radioactives"},{t:"Toxiques"},{t:"Corrosives",ok:true},{t:"Comburantes"}],
x:"Bonne réponse : Corrosives. La classe 8 de l'ADR regroupe les matières corrosives : substances qui, par action chimique, peuvent causer des dommages graves aux tissus vivants ou endommager ou détruire d'autres marchandises ou les moyens de transport. Exemples : acides, bases fortes, chlore."},

{id:4013,prog:'ADR',theme:'adr-cls',d:1,
e:"Les matières de la classe 2 de l'ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) sont :",
r:[{t:"Les liquides inflammables"},{t:"Les matières explosibles"},{t:"Les gaz comprimés, liquéfiés ou dissous sous pression",ok:true},{t:"Les matières radioactives"}],
x:"Bonne réponse : Les gaz comprimés, liquéfiés ou dissous sous pression. La classe 2 de l'ADR regroupe les gaz : substances gazeuses à température ambiante et pression normale, ou transportées sous pression (comprimés), sous forme liquéfiée par refroidissement ou à l'état dissous. Exemples : propane, butane, dioxyde de carbone, acétylène."},

{id:4014,prog:'ADR',theme:'adr-cls',d:3,
e:"Le groupe d'emballage II pour une matière dangereuse indique :",
r:[{t:"Un danger faible"},{t:"Un danger moyen",ok:true},{t:"Un danger élevé"},{t:"Aucun groupe d'emballage n'est requis"}],
x:"Bonne réponse : Un danger moyen. Les groupes d'emballage de l'ADR indiquent le niveau de danger : groupe I = danger élevé, groupe II = danger moyen, groupe III = danger faible. Plus le groupe est bas (I), plus les exigences d'emballage sont strictes."},

{id:4015,prog:'ADR',theme:'adr-cls',d:2,
e:"La classe 5.1 de l'ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) regroupe les matières :",
r:[{t:"Comburantes",ok:true},{t:"Inflammables"},{t:"Toxiques"},{t:"Explosives"}],
x:"Bonne réponse : Comburantes. La classe 5.1 de l'ADR concerne les matières comburantes : substances qui, sans être nécessairement combustibles elles-mêmes, libèrent de l'oxygène et favorisent la combustion d'autres matières. Exemples : oxygène liquide, peroxyde d'hydrogène concentré, nitrates."},

{id:4016,prog:'ADR',theme:'adr-cls',d:1,
e:"La matière dangereuse identifiée par le numéro ONU 1203 est :",
r:[{t:"Le fioul domestique"},{t:"Le gazole (diesel)"},{t:"L'essence (carburant automobile)",ok:true},{t:"Le propane liquéfié"}],
x:"Bonne réponse : L'essence (carburant automobile). L'UN 1203 (ONU 1203) correspond à l'essence (carburant automobile, essence sans plomb). C'est une matière de classe 3 (liquide inflammable), groupe d'emballage II, très couramment transportée par les camions-citernes."},

{id:4017,prog:'ADR',theme:'adr-cls',d:3,
e:"Le code de danger (code Kemler) '33' indique :",
r:[{t:"Matière explosive présentant un risque de chaleur"},{t:"Liquide très inflammable",ok:true},{t:"Matière gazeuse inflammable"},{t:"Matière corrosive inflammable"}],
x:"Bonne réponse : Liquide très inflammable. Dans le code Kemler (panneau orange), le premier chiffre indique le danger principal et le second les dangers secondaires. '3' = risque d'inflammation ; '33' = liquide très inflammable (point d'éclair <23°C). La répétition d'un chiffre intensifie le danger."},

{id:4018,prog:'ADR',theme:'adr-cls',d:2,
e:"La classe 7 de l'ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) regroupe les matières :",
r:[{t:"Toxiques à action rapide"},{t:"Peroxydantes"},{t:"Radioactives",ok:true},{t:"Magnétisées"}],
x:"Bonne réponse : Radioactives. La classe 7 de l'ADR concerne les matières radioactives : matières contenant des radionucléides et dont l'activité massique et l'activité totale dépassent certains seuils. Exemples : uranium, plutonium, matières médicales radioactives, déchets nucléaires."},

{id:4019,prog:'ADR',theme:'adr-doc',d:1,
e:"Le document de transport de marchandises dangereuses doit indiquer pour chaque matière :",
r:[{t:"Uniquement le numéro ONU (Organisation des Nations Unies) et la quantité"},{t:"Le numéro ONU, la désignation officielle de transport, la classe, le groupe d'emballage et la quantité",ok:true},{t:"Uniquement la désignation commerciale et la quantité"},{t:"Le numéro ONU et le nom du fabricant"}],
x:"Bonne réponse : Le numéro ONU, la désignation officielle de transport, la classe, le groupe d'emballage et la quantité. Le document de transport ADR doit mentionner : le numéro ONU précédé de 'UN', la désignation officielle de transport, la classe ADR, le groupe d'emballage (si applicable), la quantité (en kg ou litres) et d'autres mentions selon la matière."},

{id:4020,prog:'ADR',theme:'adr-doc',d:2,
e:"Les consignes de sécurité (consignes écrites) en cas d'accident doivent être rédigées :",
r:[{t:"Uniquement en français"},{t:"Dans la langue du pays d'expédition"},{t:"Dans les langues de chaque pays de transit et de destination",ok:true},{t:"En anglais uniquement pour les transports internationaux"}],
x:"Bonne réponse : Dans les langues de chaque pays de transit et de destination. Les consignes de sécurité (anciennement 'fiches de sécurité') doivent être rédigées dans les langues des pays traversés (expédition, transit, destination). Elles doivent être conservées à portée du conducteur dans la cabine et lui indiquer les mesures à prendre en cas d'accident."},

{id:4021,prog:'ADR',theme:'adr-doc',d:1,
e:"Le certificat d'agrément du véhicule-citerne (certificat d'agrément ADR) doit être :",
r:[{t:"Conservé au siège de l'entreprise uniquement"},{t:"Présenté lors des contrôles routiers avec le véhicule",ok:true},{t:"Remis à l'expéditeur avant chaque transport"},{t:"Envoyé à la DREAL (Direction Régionale de l'Environnement, de l'Aménagement et du Logement) après chaque transport"}],
x:"Bonne réponse : Présenté lors des contrôles routiers avec le véhicule. Le certificat d'agrément ADR du véhicule-citerne (délivré après inspection par un organisme agréé) doit être à bord du véhicule et présenté lors de tout contrôle routier. Il atteste que le véhicule répond aux prescriptions de l'ADR."},

{id:4022,prog:'ADR',theme:'adr-doc',d:3,
e:"L'attestation de formation ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) du conducteur doit être :",
r:[{t:"Conservée uniquement au siège de l'entreprise"},{t:"Portée sur le conducteur pendant le transport et présentée lors des contrôles",ok:true},{t:"Envoyée à la DREAL avant chaque transport"},{t:"Remise à l'expéditeur à chaque chargement"}],
x:"Bonne réponse : Portée sur le conducteur pendant le transport et présentée lors des contrôles. L'attestation de formation ADR du conducteur (le certificat) doit être portée sur lui pendant le transport et présentée à toute réquisition des agents de contrôle. Elle prouve que le conducteur est habilité à transporter les matières dangereuses concernées."},

{id:4023,prog:'ADR',theme:'adr-emb',d:2,
e:"Les emballages utilisés pour le transport de marchandises dangereuses doivent :",
r:[{t:"Être obligatoirement en acier ou en aluminium"},{t:"Porter la marque ONU (Organisation des Nations Unies) attestant leur conformité aux tests de performance",ok:true},{t:"Être remplacés après chaque transport"},{t:"Être de couleur orange réglementaire"}],
x:"Bonne réponse : Porter la marque ONU (Organisation des Nations Unies) attestant leur conformité aux tests de performance. Les emballages ADR doivent porter la marque ONU (symbole UN dans un hexagone) attestant qu'ils ont réussi les épreuves de performance requises pour la matière transportée. Cette marque inclut le type d'emballage, le groupe d'emballage maximum, l'année de fabrication et le pays de délivrance."},

{id:4024,prog:'ADR',theme:'adr-emb',d:1,
e:"Les quantités limitées (LQ - Limited Quantities) dans le cadre de l'ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) permettent :",
r:[{t:"De transporter toutes les quantités de marchandises dangereuses sans restriction"},{t:"De transporter des petites quantités avec des exigences allégées",ok:true},{t:"De transporter des matières dangereuses sans aucun marquage"},{t:"D'éviter toute déclaration douanière"}],
x:"Bonne réponse : De transporter des petites quantités avec des exigences allégées. Le régime des quantités limitées (LQ) permet de transporter des petites quantités de matières dangereuses avec des exigences allégées : pas de formation ADR spécifique, pas de panneaux orange, marquage simplifié (carré blanc/noir sur colis). Des seuils par matière sont définis dans la table A."},

{id:4025,prog:'ADR',theme:'adr-emb',d:3,
e:"Les 'quantités exceptées' (EQ - Excepted Quantities) dans le cadre de l'ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) :",
r:[{t:"Permettent de transporter de grandes quantités sans restriction"},{t:"Concernent des quantités très faibles avec des exemptions quasi-totales des prescriptions ADR",ok:true},{t:"S'appliquent uniquement aux matières radioactives"},{t:"Nécessitent une autorisation préfectorale spéciale"}],
x:"Bonne réponse : Concernent des quantités très faibles avec des exemptions quasi-totales des prescriptions ADR. Les quantités exceptées (EQ) concernent des quantités très petites (généralement quelques ml ou grammes par emballage intérieur) transportées avec des exemptions quasi-totales : pas de formation, pas de marquage spécial (sauf marque EQ), pas de document de transport ADR spécifique requis."},

{id:4026,prog:'ADR',theme:'adr-sig',d:1,
e:"Un véhicule transportant des marchandises dangereuses en vrac (non conditionné) doit apposer :",
r:[{t:"Uniquement les étiquettes de danger sur les côtés du véhicule"},{t:"Les panneaux orange réfléchissants avec le code Kemler et le numéro ONU (Organisation des Nations Unies) à l'avant et à l'arrière",ok:true},{t:"Uniquement un panneau orange vierge (sans numéros)"},{t:"Des bandes réfléchissantes orange sur tout le périmètre du véhicule"}],
x:"Bonne réponse : Les panneaux orange réfléchissants avec le code Kemler et le numéro ONU (Organisation des Nations Unies) à l'avant et à l'arrière. Pour le transport en vrac d'une seule matière dangereuse, le véhicule doit afficher à l'avant ET à l'arrière des panneaux orange réfléchissants portant en haut le code danger (Kemler) et en bas le numéro ONU de la matière transportée."},

{id:4027,prog:'ADR',theme:'adr-sig',d:2,
e:"Un véhicule transportant plusieurs matières dangereuses en colis doit :",
r:[{t:"Afficher le panneau orange de la matière la plus dangereuse"},{t:"Afficher des panneaux orange vierges (sans numéros) à l'avant et à l'arrière",ok:true},{t:"N'apposer aucun panneau orange si les quantités sont inférieures à 1000 kg"},{t:"Afficher tous les panneaux orange correspondant à chaque matière"}],
x:"Bonne réponse : Afficher des panneaux orange vierges (sans numéros) à l'avant et à l'arrière. Lorsqu'un véhicule transporte plusieurs matières dangereuses en colis, il doit apposer des panneaux orange vierges (sans numéros) à l'avant et à l'arrière. Les étiquettes de danger sur les colis permettent d'identifier chaque matière."},

{id:4028,prog:'ADR',theme:'adr-sig',d:3,
e:"Les étiquettes de danger sur les colis de matières dangereuses doivent avoir une dimension minimale de :",
r:[{t:"50 mm × 50 mm"},{t:"100 mm × 100 mm",ok:true},{t:"150 mm × 150 mm"},{t:"200 mm × 200 mm"}],
x:"Bonne réponse : 100 mm × 100 mm. Les étiquettes de danger ADR sur les colis doivent mesurer 100 mm × 100 mm minimum. Elles sont en forme de losange et utilisent des codes couleurs normalisés pour chaque classe. Pour les petits colis, elles peuvent être réduites proportionnellement."},

{id:4029,prog:'ADR',theme:'adr-sig',d:2,
e:"Les plaques-étiquettes (grandes étiquettes) apposées sur les citernes et conteneurs-citernes mesurent :",
r:[{t:"100 mm × 100 mm"},{t:"200 mm × 200 mm"},{t:"250 mm × 250 mm",ok:true},{t:"300 mm × 300 mm"}],
x:"Bonne réponse : 250 mm × 250 mm. Les grandes étiquettes (plaques-étiquettes) apposées sur les citernes, conteneurs-citernes et véhicules-citernes doivent mesurer au moins 250 mm × 250 mm. Elles sont de même forme et couleur que les étiquettes de danger normales mais en format agrandi."},

{id:4030,prog:'ADR',theme:'adr-sec',d:1,
e:"L'équipement de protection individuelle obligatoire pour le conducteur ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) comprend au minimum :",
r:[{t:"Uniquement des gants de protection et un masque à gaz"},{t:"Un gilet fluorescent, des chaussures de protection, des lunettes de protection et des gants de protection",ok:true},{t:"Une combinaison chimique complète"},{t:"Un casque intégral et des bottes chimiques"}],
x:"Bonne réponse : Un gilet fluorescent, des chaussures de protection, des lunettes de protection et des gants de protection. L'équipement de protection individuelle (EPI) minimum obligatoire à bord d'un véhicule ADR comprend : un gilet de signalisation fluorescent, des chaussures ou bottes de sécurité, des lunettes de protection et des gants de protection. D'autres EPI peuvent être requis selon la nature des matières transportées."},

{id:4031,prog:'ADR',theme:'adr-sec',d:2,
e:"En cas de fuite mineure d'un liquide inflammable lors d'un transport ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route), le conducteur doit en priorité :",
r:[{t:"Tenter de réparer immédiatement la fuite lui-même"},{t:"Garer le véhicule, baliser la zone, éloigner les personnes et alerter les secours",ok:true},{t:"Poursuivre le trajet jusqu'au prochain garage"},{t:"Arroser d'eau le colis qui fuit"}],
x:"Bonne réponse : Garer le véhicule, baliser la zone, éloigner les personnes et alerter les secours. En cas d'incident/accident, les consignes de sécurité ADR prescrivent : couper le moteur, ne pas fumer, garer et immobiliser le véhicule en lieu sûr, mettre les feux de détresse, baliser à distance, éloigner les personnes des abords, prévenir les secours (18, 15, 17 ou 112) en indiquant la nature du danger."},

{id:4032,prog:'ADR',theme:'adr-sec',d:1,
e:"L'extincteur requis à bord d'un véhicule ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) doit avoir une capacité minimale de :",
r:[{t:"2 kg"},{t:"6 kg",ok:true},{t:"9 kg"},{t:"12 kg"}],
x:"Bonne réponse : 6 kg. Tout véhicule soumis à l'ADR doit être équipé d'au moins un extincteur d'une capacité minimale de 6 kg de poudre (ou équivalent) pour lutter contre les incendies du moteur ou de la cabine. Des extincteurs supplémentaires peuvent être requis pour certains véhicules."},

{id:4033,prog:'ADR',theme:'adr-sec',d:3,
e:"La distance minimale d'implantation des signaux d'avertissement (triangles) en cas d'immobilisation d'un véhicule ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) est de :",
r:[{t:"25 mètres"},{t:"50 mètres"},{t:"100 mètres",ok:true},{t:"150 mètres"}],
x:"Bonne réponse : 100 mètres. En cas d'immobilisation d'un véhicule transportant des marchandises dangereuses, les cônes ou triangles de signalisation doivent être implantés à au moins 100 mètres du véhicule de chaque côté. Des fusées de signalisation ne doivent pas être utilisées avec des matières inflammables."},

{id:4034,prog:'ADR',theme:'adr-sec',d:2,
e:"Le stationnement d'un véhicule chargé de matières dangereuses :",
r:[{t:"Est interdit dans tous les lieux publics"},{t:"Est autorisé partout, de nuit uniquement"},{t:"Doit être effectué en lieu sûr, à distance des habitations et des sources d'ignition",ok:true},{t:"N'est possible que dans les zones industrielles désignées"}],
x:"Bonne réponse : Doit être effectué en lieu sûr, à distance des habitations et des sources d'ignition. Le stationnement d'un véhicule transportant des matières dangereuses doit être effectué en lieu sûr, à l'écart des habitations, des sources d'ignition et des installations à risques. Des dispositions spécifiques s'appliquent pour les matières les plus dangereuses (explosifs, radioactifs…)."},

{id:4035,prog:'ADR',theme:'adr-gen',d:2,
e:"L'ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) est révisé tous les :",
r:[{t:"1 an"},{t:"2 ans",ok:true},{t:"5 ans"},{t:"10 ans"}],
x:"Bonne réponse : 2 ans. L'ADR est révisé tous les 2 ans par la CEE-ONU (Commission Économique pour l'Europe des Nations Unies). Les nouvelles éditions entrent en vigueur au 1er janvier des années impaires avec une période de transition de 6 mois."},

{id:4036,prog:'ADR',theme:'adr-cls',d:2,
e:"La classe 4.1 de l'ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) regroupe :",
r:[{t:"Les matières gazeuses inflammables"},{t:"Les matières solides inflammables et matières autoréactives",ok:true},{t:"Les liquides inflammables"},{t:"Les matières sujettes à auto-échauffement"}],
x:"Bonne réponse : Les matières solides inflammables et matières autoréactives. La classe 4.1 comprend les matières solides inflammables, les matières et mélanges autoréactifs et les explosibles désensibilisés solides. Exemples : soufre, métaux en poudre, allumettes."},

{id:4037,prog:'ADR',theme:'adr-cls',d:1,
e:"La classe 9 de l'ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) regroupe :",
r:[{t:"Les matières radioactives de faible activité"},{t:"Les marchandises banales"},{t:"Les matières et objets dangereux divers non classés dans d'autres classes",ok:true},{t:"Les déchets industriels banals"}],
x:"Bonne réponse : Les matières et objets dangereux divers non classés dans d'autres classes. La classe 9 est une classe 'fourre-tout' regroupant les matières dangereuses ne rentrant dans aucune autre classe. Exemples : piles au lithium, appareils magnétisés, matières biodégradables transportées à chaud, véhicules."},

{id:4038,prog:'ADR',theme:'adr-doc',d:1,
e:"Les consignes écrites ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) doivent être :",
r:[{t:"Affichées à l'extérieur du véhicule"},{t:"Accessibles au conducteur dans la cabine pendant tout le transport",ok:true},{t:"Remises à l'expéditeur avant chaque chargement"},{t:"Envoyées à la DREAL (Direction Régionale de l'Environnement, de l'Aménagement et du Logement) avant chaque transport"}],
x:"Bonne réponse : Accessibles au conducteur dans la cabine pendant tout le transport. Les consignes écrites doivent être conservées dans la cabine et accessibles au conducteur pendant tout le transport. Elles indiquent les mesures à prendre en cas d'accident, les EPI (Équipements de Protection Individuelle) requis et les numéros d'urgence."},

{id:4039,prog:'ADR',theme:'adr-sec',d:1,
e:"En cas d'incident avec des marchandises dangereuses, le conducteur doit en priorité :",
r:[{t:"Réparer immédiatement la fuite lui-même"},{t:"Garer le véhicule, baliser la zone, éloigner les personnes et alerter les secours",ok:true},{t:"Poursuivre le trajet jusqu'au garage le plus proche"},{t:"Arroser d'eau les colis qui fuient"}],
x:"Bonne réponse : Garer le véhicule, baliser la zone, éloigner les personnes et alerter les secours. Les consignes ADR en cas d'incident prévoient : couper le moteur, ne pas fumer, garer et immobiliser le véhicule en lieu sûr, mettre les feux de détresse, baliser à distance, éloigner les personnes, prévenir les secours (112) en indiquant la nature du danger."},

{id:4040,prog:'ADR',theme:'adr-sec',d:2,
e:"L'extincteur obligatoire à bord d'un véhicule ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) doit avoir une capacité minimale de :",
r:[{t:"2 kg"},{t:"6 kg",ok:true},{t:"9 kg"},{t:"12 kg"}],
x:"Bonne réponse : 6 kg. Tout véhicule soumis à l'ADR doit être équipé d'au moins un extincteur d'une capacité minimale de 6 kg de poudre (ou équivalent) pour lutter contre les incendies du moteur ou de la cabine."},

{id:4041,prog:'ADR',theme:'adr-gen',d:3,
e:"Un transporteur souhaitant transporter des marchandises dangereuses doit s'assurer que ses conducteurs disposent :",
r:[{t:"D'une formation ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) de base valable pour toutes les matières"},{t:"D'une formation adaptée à la classe et au mode de transport des matières transportées",ok:true},{t:"Uniquement d'un permis CE"},{t:"D'une habilitation délivrée par la DREAL (Direction Régionale de l'Environnement, de l'Aménagement et du Logement)"}],
x:"Bonne réponse : D'une formation adaptée à la classe et au mode de transport des matières transportées. Il existe différents modules de formation ADR : de base (matières en colis), citerne (pour les transports en citernes), et des formations spécifiques classes 1 et 7. Le conducteur doit posséder les modules correspondant aux matières et modes de transport effectivement utilisés."},

{id:4042,prog:'ADR',theme:'adr-sig',d:2,
e:"Pour un transport en vrac de plusieurs matières dangereuses différentes, les panneaux orange doivent être :",
r:[{t:"Porteurs du code de la matière la plus dangereuse"},{t:"Vierges (sans numéros)",ok:true},{t:"Absents si les quantités sont inférieures à 1 tonne"},{t:"Différents pour chaque côté du véhicule"}],
x:"Bonne réponse : Vierges (sans numéros). Quand un véhicule transporte en vrac plusieurs matières dangereuses différentes, il doit apposer des panneaux orange vierges (sans numéros) à l'avant et à l'arrière. Les plaques-étiquettes sur les compartiments identifient chaque matière."},

{id:4043,prog:'ADR',theme:'adr-emb',d:2,
e:"Les quantités limitées (LQ - Limited Quantities) selon l'ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) permettent de :",
r:[{t:"Transporter des quantités illimitées sans restrictions"},{t:"Transporter de petites quantités avec des exigences allégées",ok:true},{t:"Transporter des matières dangereuses sans aucun marquage"},{t:"Éviter les déclarations douanières"}],
x:"Bonne réponse : Transporter de petites quantités avec des exigences allégées. Le régime LQ permet de transporter de petites quantités de matières dangereuses avec des exigences allégées : pas de formation ADR spécifique du conducteur, pas de panneaux orange requis, marquage simplifié sur les colis. Des seuils spécifiques sont définis pour chaque matière."},

{id:4044,prog:'ADR',theme:'adr-gen',d:1,
e:"La liste des matières dangereuses admises au transport ADR (Accord Européen Relatif au Transport International des Marchandises Dangereuses par Route) est contenue dans :",
r:[{t:"Le chapitre 2 de l'ADR"},{t:"La table A du chapitre 3.2 de l'ADR",ok:true},{t:"L'annexe A du Code des transports"},{t:"Les circulaires ministérielles annuelles"}],
x:"Bonne réponse : La table A du chapitre 3.2 de l'ADR. La table A du chapitre 3.2 de l'ADR liste toutes les matières dangereuses avec leur numéro ONU, désignation officielle, classe, groupe d'emballage, prescriptions d'emballage et équipements requis."},

{id:4045,prog:'ADR',theme:'adr-gen',d:2,
e:"Le rapport annuel du CSTMD doit être transmis à :",
r:[{t:"La DREAL automatiquement"},{t:"La direction de l'entreprise (et à l'autorité compétente si demandé lors d'un contrôle)",ok:true},{t:"La douane française"},{t:"L'ONU chaque année"}],
x:"Bonne réponse : La direction de l'entreprise (et à l'autorité compétente si demandé lors d'un contrôle). Le rapport annuel du CSTMD est adressé à la direction de l'entreprise. Il n'est pas envoyé automatiquement à l'autorité compétente mais doit être présenté lors des contrôles sur demande. Il est conservé pendant au moins 5 ans. En cas d'incident grave, un rapport séparé est également rédigé."},

{id:4046,prog:'ADR',theme:'adr-emb',d:2,
e:"Les emballages pour matières liquides doivent subir le test d'étanchéité. Ce test consiste à :",
r:[{t:"Peser l'emballage avant et après remplissage"},{t:"Soumettre l'emballage rempli à une surpression interne pour vérifier l'absence de fuite",ok:true},{t:"Plonger l'emballage dans l'eau et observer les bulles"},{t:"Chauffer l'emballage à 50°C pendant 24h"}],
x:"Bonne réponse : Soumettre l'emballage rempli à une surpression interne pour vérifier l'absence de fuite. Le test d'étanchéité (selon les recommandations ONU/ADR) consiste à appliquer une surpression interne à l'emballage rempli d'eau (ou liquide équivalent) pendant un temps déterminé. Pour les emballages du GE I : 30 kPa de pression interne. Pour les GE II et III : 20 kPa. Absence de fuite = conformité au test."},

{id:4047,prog:'ADR',theme:'adr-doc',d:2,
e:"La mention 'QUANTITÉS LIMITÉES' ou 'LQ' dans le document de transport ADR :",
r:[{t:"Est obligatoire pour tous les transports LQ"},{t:"N'est pas requise — seul le marquage sur les colis est obligatoire",ok:true},{t:"Remplace le numéro ONU dans le document"},{t:"Doit être accompagnée des consignes écrites"}],
x:"Bonne réponse : N'est pas requise — seul le marquage sur les colis est obligatoire. Pour les colis en quantités limitées (LQ), l'ADR (art. 3.4.7) n'exige pas de mention spécifique dans le document de transport. Le marquage LQ sur les colis (losange blanc et noir) suffit. Les consignes écrites ne sont pas requises pour les LQ. C'est l'un des avantages de l'exemption LQ : simplification documentaire significative."},

{id:4048,prog:'ADR',theme:'adr-gen',d:1,
e:"Le numéro ONU (en bas de la plaque orange) identifie :",
r:[{t:"L'immatriculation du véhicule"},{t:"La matière dangereuse ou groupe de matières dangereuses",ok:true},{t:"Le pays d'origine de la matière"},{t:"La classe de danger uniquement"}],
x:"Bonne réponse : La matière dangereuse ou groupe de matières dangereuses. Le numéro ONU est un code à 4 chiffres assigné par l'ONU à chaque matière dangereuse ou groupe de matières similaires. Ex : ONU 1203 = Essence, ONU 1993 = Liquide inflammable n.a.s."},

{id:4049,prog:'ADR',theme:'adr-doc',d:2,
e:"Le code tunnel indiqué dans la colonne 15 du tableau A pour une matière ADR correspond à :",
r:[{t:"La catégorie du véhicule requis"},{t:"La restriction d'accès aux tunnels selon leur classification (B à E)",ok:true},{t:"Le type d'emballage autorisé"},{t:"La vitesse maximale en tunnel"}],
x:"Bonne réponse : La restriction d'accès aux tunnels selon leur classification (B à E). Les tunnels sont classés de A (pas de restriction) à E (interdits à toutes les matières dangereuses sauf exceptions). Le code tunnel indiqué pour chaque matière dans la colonne 15 du tableau A indique dans quels tunnels le transport est interdit. B = interdit en tunnel B et plus contraignant. D = interdit en tunnel D et E."},

{id:4050,prog:'ADR',theme:'adr-sig',d:2,
e:"La plaque-étiquette Classe 1.4S (explosifs de faible danger) est de couleur :",
r:[{t:"Orange vif"},{t:"Orange avec le chiffre 1 et la lettre S",ok:true},{t:"Rouge"},{t:"Verte"}],
x:"Bonne réponse : Orange avec le chiffre 1 et la lettre S. Les étiquettes/plaques-étiquettes de la Classe 1 sont orange pour toutes les divisions, avec le numéro de division (1.1, 1.2, 1.3, 1.4, 1.5, 1.6) et la lettre du groupe de compatibilité. La division 1.4S concerne les objets explosibles de faible danger (munitions de chasse ordinaires, feux d'artifice grands publics…). La couleur orange est spécifique à la Classe 1."},

{id:4051,prog:'ADR',theme:'adr-emb',d:3,
e:"Un grand récipient pour vrac (GRV ou IBC) est un emballage d'une capacité :",
r:[{t:"Inférieure à 60 litres"},{t:"Entre 60 et 450 litres"},{t:"Supérieure à 450 litres et jusqu'à 3 000 litres",ok:true},{t:"Supérieure à 3 000 litres"}],
x:"Bonne réponse : Supérieure à 450 litres et jusqu'à 3 000 litres. Les GRV (Grands Récipients pour Vrac) ou IBC (Intermediate Bulk Containers) sont des emballages rigides ou souples d'une capacité comprise entre 450 litres et 3 000 litres. Au-delà, on parle de citerne."},

{id:4052,prog:'ADR',theme:'adr-sec',d:2,
e:"Les équipements de protection individuelle (EPI) pour un transport ADR en citerne de matières corrosives comprennent :",
r:[{t:"Uniquement des gants en caoutchouc"},{t:"Lunettes de protection, gants résistants aux produits chimiques, vêtement de protection, rinçage des yeux disponible",ok:true},{t:"Un masque chirurgical suffit"},{t:"Aucun EPI spécifique n'est requis"}],
x:"Bonne réponse : Lunettes de protection, gants résistants aux produits chimiques, vêtement de protection, rinçage des yeux disponible. Pour les matières corrosives (Classe 8), les EPI minimaux requis par les consignes écrites ADR comprennent : lunettes de protection étanches aux liquides (ou écran facial), gants résistants aux produits chimiques, vêtement de protection couvrant le corps, et souvent un récipient d'eau de rinçage (min 1 L) pour les yeux en cas de projection accidentelle."},

{id:4053,prog:'ADR',theme:'adr-sig',d:1,
e:"L'étiquette de danger pour un liquide inflammable (Classe 3) représente :",
r:[{t:"Une croix noire sur fond blanc"},{t:"Une flamme noire ou blanche sur fond rouge",ok:true},{t:"Un crâne et des tibias croisés sur fond blanc"},{t:"Un cercle de flammes sur fond jaune"}],
x:"Bonne réponse : Une flamme noire ou blanche sur fond rouge. L'étiquette de la Classe 3 (liquides inflammables) est un losange rouge avec une flamme (noire ou blanche). La moitié inférieure du losange est rouge, la moitié supérieure est rouge également. Le chiffre '3' figure dans le coin inférieur. Ce symbole est immédiatement reconnaissable par les secours."},

{id:4054,prog:'ADR',theme:'adr-sec',d:2,
e:"Le stationnement interdit à moins de 50 m des habitations pour les véhicules ADR chargés s'applique :",
r:[{t:"À tous les véhicules ADR"},{t:"Aux véhicules transportant des matières de certaines catégories de danger (explosifs, très toxiques, radioactifs actifs…)",ok:true},{t:"Uniquement aux citernes"},{t:"Uniquement la nuit"}],
x:"Bonne réponse : Aux véhicules transportant des matières de certaines catégories de danger (explosifs, très toxiques, radioactifs actifs…). Les restrictions de stationnement ADR (ch. 8.4) s'appliquent principalement aux véhicules transportant des matières à haut risque (explosifs Cl.1, matières très toxiques, radioactifs). Les véhicules ne doivent pas stationner à moins de 50 m d'une habitation, d'un ERP ou d'une source d'ignition. Ces restrictions visent à protéger les populations en cas d'incident."},

{id:4055,prog:'ADR',theme:'adr-gen',d:2,
e:"L'accord multilatéral ADR (ML) permet :",
r:[{t:"D'exporter librement toutes MD"},{t:"D'appliquer des règles dérogatoires entre États signataires pour un transport spécifique",ok:true},{t:"D'harmoniser les tarifs de transport"},{t:"D'exonérer les petits transporteurs"}],
x:"Bonne réponse : D'appliquer des règles dérogatoires entre États signataires pour un transport spécifique. Les accords multilatéraux (ML) sont des dérogations temporaires aux règles ADR standard, conclus entre autorités compétentes de plusieurs États parties. Ils autorisent des conditions particulières pour un type de transport non prévu par l'ADR ou plus flexibles. Ils sont publiés et ont une durée limitée."},

{id:4056,prog:'ADR',theme:'adr-gen',d:2,
e:"Un véhicule ADR vide et non nettoyé (ex : citerne ayant contenu des inflammables) :",
r:[{t:"N'est plus soumis à l'ADR"},{t:"Reste soumis à l'ADR comme s'il était plein jusqu'au nettoyage et dégazage complets",ok:true},{t:"Peut être garé dans tout parking"},{t:"Peut être réparé normalement"}],
x:"Bonne réponse : Reste soumis à l'ADR comme s'il était plein jusqu'au nettoyage et dégazage complets. Un véhicule ADR (notamment une citerne) ayant transporté des MD reste soumis aux obligations ADR (plaques oranges, consignes écrites, interdictions de stationnement…) jusqu'à ce qu'il soit nettoyé et dégazé. Les vapeurs résiduelles d'inflammables constituent un risque d'explosion même en l'absence de liquide visible."},

{id:4057,prog:'ADR',theme:'adr-cls',d:3,
e:"Un solide qui libère un gaz toxique au contact de l'eau (ex : cyanure de potassium + acide) est classé :",
r:[{t:"Uniquement Classe 6.1"},{t:"Classe 4.3 si la réaction au contact de l'eau est le danger principal + éventuellement Classe 6.1 en risque subsidiaire",ok:true},{t:"Classe 8"},{t:"Classe 9"}],
x:"Bonne réponse : Classe 4.3 si la réaction au contact de l'eau est le danger principal + éventuellement Classe 6.1 en risque subsidiaire. Un solide qui dégage un gaz inflammable ou toxique au contact de l'eau relève de la Classe 4.3 si ce danger est prédominant. Si le solide est lui-même toxique, un risque subsidiaire de Classe 6.1 peut s'ajouter. Le risque dominant détermine la classe principale. La classification ADR applique une hiérarchie des risques."},

{id:4058,prog:'ADR',theme:'adr-cls',d:2,
e:"La Classe 5.1 (matières comburantes) comprend des matières qui :",
r:[{t:"Brûlent d'elles-mêmes"},{t:"Libèrent de l'oxygène ou favorisent la combustion d'autres matières sans être elles-mêmes inflammables",ok:true},{t:"S'enflamment au contact de l'eau"},{t:"Explosent sous l'effet de la chaleur"}],
x:"Bonne réponse : Libèrent de l'oxygène ou favorisent la combustion d'autres matières sans être elles-mêmes inflammables. Les matières comburantes (Classe 5.1) ne sont pas forcément inflammables elles-mêmes, mais elles entretiennent ou favorisent la combustion d'autres matières en libérant de l'oxygène. Exemples : nitrate d'ammonium (engrais), peroxyde d'hydrogène concentré, permanganate de potassium, hypochlorite de sodium concentré."},

{id:4059,prog:'ADR',theme:'adr-gen',d:2,
e:"L'exemption totale de l'ADR s'applique lorsque le total des points calculés est :",
r:[{t:"Inférieur à 500"},{t:"Inférieur ou égal à 1 000",ok:true},{t:"Inférieur à 100"},{t:"Il n'y a pas d'exemption totale en ADR"}],
x:"Bonne réponse : Inférieur ou égal à 1 000. Selon le 1.1.3.6 de l'ADR, lorsque la somme des points calculés (quantité × facteur multiplicateur par catégorie) pour l'ensemble du chargement est ≤ 1 000, une exemption totale des obligations ADR s'applique. Le conducteur n'a pas besoin de certificat ADR, pas de plaques oranges, etc."},

{id:4060,prog:'ADR',theme:'adr-sig',d:1,
e:"L'étiquette de danger de la Classe 8 (matières corrosives) représente :",
r:[{t:"Une flamme"},{t:"Deux éprouvettes déversant du liquide sur une main et un métal",ok:true},{t:"Un crâne avec tibias"},{t:"Un trèfle radioactif"}],
x:"Bonne réponse : Deux éprouvettes déversant du liquide sur une main et un métal. L'étiquette de la Classe 8 est un losange mi-blanc (haut) mi-noir (bas) représentant deux éprouvettes ou cylindres déversant du liquide sur une main (tissu humain) et un métal (symbolisant l'attaque corrosive). Le chiffre 8 figure dans le coin inférieur."},

{id:4061,prog:'ADR',theme:'adr-doc',d:1,
e:"Le certificat de formation ADR du conducteur doit-il se trouver dans le véhicule ?",
r:[{t:"Non, il est conservé uniquement en entreprise"},{t:"Oui, le conducteur doit le détenir et le présenter lors des contrôles",ok:true},{t:"Uniquement pour les transports internationaux"},{t:"Non, un simple justificatif de l'employeur suffit"}],
x:"Bonne réponse : Oui, le conducteur doit le détenir et le présenter lors des contrôles. Le conducteur doit détenir son certificat ADR valide dans le véhicule pendant tout transport de marchandises dangereuses et le présenter à tout contrôle. L'employeur doit également en conserver une copie."},

{id:4062,prog:'ADR',theme:'adr-gen',d:1,
e:"La liste officielle des marchandises dangereuses dans l'ADR est organisée :",
r:[{t:"Par ordre alphabétique"},{t:"Par numéro ONU croissant",ok:true},{t:"Par classe de danger"},{t:"Par pays d'origine"}],
x:"Bonne réponse : Par numéro ONU croissant. Le tableau A du chapitre 3.2 de l'ADR liste toutes les marchandises dangereuses par numéro ONU croissant (de 0004 à 3534+). Pour chaque numéro ONU, le tableau indique la classe, le groupe d'emballage, les dispositions spéciales applicables, les exemptions et les exigences d'emballage."},

{id:4063,prog:'ADR',theme:'adr-cls',d:3,
e:"Les matières plastiques expansées inflammables (polystyrène expansé en billes) sont classées :",
r:[{t:"Classe 3"},{t:"Classe 4.1 — solide inflammable (ONU 2211 ou 2212)",ok:true},{t:"Classe 9"},{t:"Non soumises à l'ADR"}],
x:"Bonne réponse : Classe 4.1 — solide inflammable (ONU 2211 ou 2212). Les granulés ou billes de plastique expansé inflammable (polystyrène expansé, polyéthylène expansé) sont classés Classe 4.1 (matières solides inflammables). ONU 2211 pour les polymères expansibles, granulés (dégageant des vapeurs inflammables). Des exemptions existent pour les emballages finis contenant de la mousse de polystyrène."},

{id:4064,prog:'ADR',theme:'adr-gen',d:1,
e:"Le transport de gaz naturel liquéfié (GNL, ONU 1972) nécessite :",
r:[{t:"Un simple certificat ADR de base"},{t:"Un certificat ADR de base + module citerne + véhicule EX/II ou FL",ok:true},{t:"Uniquement un permis spécial préfectoral"},{t:"Aucun certificat particulier"}],
x:"Bonne réponse : Un certificat ADR de base + module citerne + véhicule EX/II ou FL. Le GNL (méthane liquide réfrigéré à -162°C) est classé Classe 2 (gaz inflammable liquéfié réfrigéré). Son transport en citerne nécessite : certificat ADR de base + module citerne, véhicule FL (For Liquids inflammables) ou EX/II selon la citerne, équipements de sécurité spécifiques. C'est un transport exigeant en raison des températures cryogéniques."},

{id:4065,prog:'ADR',theme:'adr-sec',d:2,
e:"En cas d'incendie dans la cargaison ADR, la première action du conducteur est :",
r:[{t:"Tenter d'éteindre avec les extincteurs du bord"},{t:"S'éloigner du véhicule, baliser, alerter les secours (18/112), consulter les consignes écrites",ok:true},{t:"Débâcher le chargement pour aérer"},{t:"Appeler son employeur en premier"}],
x:"Bonne réponse : S'éloigner du véhicule, baliser, alerter les secours (18/112), consulter les consignes écrites. En cas d'incendie impliquant des MD : 1) S'éloigner immédiatement (risque d'explosion), 2) Allumer les feux de détresse si possible, 3) Baliser à grande distance, 4) Appeler le 18 (pompiers) et le 15 (SAMU) si blessés, en précisant le numéro ONU, 5) Consulter les consignes écrites et les transmettre aux secours. Ne jamais combattre seul un incendie impliquant des MD."},

{id:4066,prog:'ADR',theme:'adr-gen',d:3,
e:"Le plan de sûreté ADR (ch. 1.10) est obligatoire pour les transporteurs de marchandises :",
r:[{t:"Tous les transporteurs ADR"},{t:"À haut risque sécuritaire (explosifs, certains toxiques, radioactifs actifs)",ok:true},{t:"Uniquement à l'international"},{t:"Transportant plus de 1 tonne de MD"}],
x:"Bonne réponse : À haut risque sécuritaire (explosifs, certains toxiques, radioactifs actifs). Le plan de sûreté (ch. 1.10 ADR) est requis pour les entreprises transportant des marchandises à 'haut risque' sécuritaire (liste définie par l'ADR : certains explosifs, gaz très toxiques, radioactifs de haute activité…). Il doit identifier les menaces et définir les mesures de sécurité pour prévenir le vol ou le détournement."},

{id:4067,prog:'ADR',theme:'adr-gen',d:1,
e:"Le rapport annuel du CSTMD est conservé pendant :",
r:[{t:"1 an"},{t:"5 ans",ok:true},{t:"10 ans"},{t:"Indéfiniment"}],
x:"Bonne réponse : 5 ans. Le rapport annuel du CSTMD doit être rédigé chaque année et conservé pendant au moins 5 ans. Il est adressé à la direction de l'entreprise et doit être présenté lors des contrôles si demandé. Il couvre les activités de transport de MD, les accidents/incidents, les recommandations et les formations dispensées."},

{id:4068,prog:'ADR',theme:'adr-gen',d:2,
e:"Les consignes écrites ADR doivent être :",
r:[{t:"Envoyées par email avant le départ"},{t:"À bord du véhicule dans la cabine, dans les langues du conducteur et des pays traversés",ok:true},{t:"Affichées sur le côté du véhicule"},{t:"Conservées uniquement au dépôt"}],
x:"Bonne réponse : À bord du véhicule dans la cabine, dans les langues du conducteur et des pays traversés. Les consignes écrites (art. 5.4.3.4 ADR) doivent être à bord du véhicule, dans la cabine du conducteur, accessibles à tout moment. Elles doivent être rédigées dans les langues que le conducteur peut lire et comprendre, et dans celles des pays traversés. Elles doivent correspondre exactement aux matières transportées."},

{id:4069,prog:'ADR',theme:'adr-gen',d:2,
e:"L'ADR est révisé et mis à jour tous les :",
r:[{t:"1 an"},{t:"2 ans",ok:true},{t:"3 ans"},{t:"5 ans"}],
x:"Bonne réponse : 2 ans. L'ADR est révisé tous les 2 ans (années impaires). Les nouvelles versions entrent en vigueur le 1er janvier de l'année paire suivante, avec une période transitoire de 6 mois."},

{id:4070,prog:'ADR',theme:'adr-gen',d:2,
e:"Le chapitre 1.1.3 de l'ADR liste les exemptions. L'exemption 1.1.3.1 concerne :",
r:[{t:"Les transports médicaux d'urgence"},{t:"Les transports effectués pour les besoins propres de l'État (défense nationale, police)",ok:true},{t:"Les transports de quantités exceptées"},{t:"Les transports en petits conteneurs"}],
x:"Bonne réponse : Les transports effectués pour les besoins propres de l'État (défense nationale, police). L'art. 1.1.3.1 de l'ADR exempte les transports effectués par les autorités militaires ou sous leur responsabilité, les transports d'urgence pour sauvetage de vie, et les transports effectués par les autorités compétentes dans leurs activités réglementaires. Ces exemptions permettent à ces services d'intervenir sans les contraintes ADR normales."},

{id:4071,prog:'ADR',theme:'adr-gen',d:1,
e:"Les 9 classes de danger de l'ADR classifient les marchandises selon :",
r:[{t:"Leur poids et volume"},{t:"Leur pays d'origine"},{t:"La nature du risque principal qu'elles présentent",ok:true},{t:"Leur valeur marchande"}],
x:"Bonne réponse : La nature du risque principal qu'elles présentent. Les 9 classes ADR classifient les matières et objets selon la nature du danger principal : Classe 1 (explosibles), 2 (gaz), 3 (liquides inflammables), 4.1/4.2/4.3, 5.1/5.2, 6.1/6.2, 7 (radioactives), 8 (corrosives), 9 (divers)."},

{id:4072,prog:'ADR',theme:'adr-sec',d:3,
e:"La procédure de décontamination d'un conducteur exposé à une substance toxique (Classe 6.1) implique en premier :",
r:[{t:"Appeler le médecin du travail"},{t:"Retirer les vêtements contaminés et rincer abondamment à l'eau (min 15 min) avant soins médicaux",ok:true},{t:"Administrer l'antidote spécifique"},{t:"Couvrir le conducteur avec une couverture"}],
x:"Bonne réponse : Retirer les vêtements contaminés et rincer abondamment à l'eau (min 15 min) avant soins médicaux. En cas d'exposition cutanée à une matière toxique : 1) Retirer immédiatement les vêtements et chaussures contaminés, 2) Rincer abondamment la peau à l'eau claire pendant au moins 15 minutes, 3) Appeler le 15/112 et préciser la substance (numéro ONU), 4) Montrer les consignes écrites aux secours, 5) Ne jamais provoquer de vomissements en cas d'ingestion sans avis médical."},

{id:4073,prog:'ADR',theme:'adr-gen',d:2,
e:"La catégorie de transport 3 en ADR (facteur multiplicateur 1) correspond aux matières :",
r:[{t:"Les plus dangereuses"},{t:"Les moins dangereuses dans la classification ADR",ok:true},{t:"Les matières sans danger"},{t:"Les matières réservées aux transports militaires"}],
x:"Bonne réponse : Les moins dangereuses dans la classification ADR. La catégorie de transport 3 (facteur multiplicateur 1) correspond aux matières les moins dangereuses dans le système de calcul des points ADR. Une matière de catégorie 3 peut être transportée en grande quantité avant de dépasser le seuil de 1 000 points (1 000 kg/L de cette matière serait nécessaire). À l'opposé, la catégorie 1 (facteur 50) exige des quantités très réduites."},

{id:4074,prog:'ADR',theme:'adr-cls',d:1,
e:"L'ammoniac anhydre liquéfié est classé :",
r:[{t:"Classe 3 — inflammable"},{t:"Classe 2 + toxique (code 2TC)",ok:true},{t:"Classe 8 — corrosif uniquement"},{t:"Classe 6.1 — toxique uniquement"}],
x:"Bonne réponse : Classe 2 + toxique (code 2TC). L'ammoniac anhydre (ONU 1005) est un gaz liquéfié de la Classe 2 avec le code de classification 2TC : liquéfié (2) + toxique (T) + corrosif (C). C'est un gaz très toxique par inhalation (LC50 très basse) et corrosif pour les membranes muqueuses. Son transport nécessite des citernes spécialement conçues et une formation ADR renforcée."},

{id:4075,prog:'ADR',theme:'adr-sig',d:2,
e:"Les plaques oranges doivent être retirées ou masquées :",
r:[{t:"À chaque arrêt de plus de 30 minutes"},{t:"Lorsque le véhicule est vide et nettoyé, ou ne transporte plus les matières signalisées",ok:true},{t:"Uniquement en cas de contrôle policier"},{t:"Jamais — elles doivent rester en permanence"}],
x:"Bonne réponse : Lorsque le véhicule est vide et nettoyé, ou ne transporte plus les matières signalisées. Les plaques oranges (et les étiquettes de danger) doivent être retirées ou masquées lorsque le véhicule est vide et a été nettoyé/dégazé, ou lorsqu'il ne transporte plus les matières correspondantes. Un véhicule vide avec des plaques oranges crée une fausse alarme et induit les secours en erreur. En cours de transport, elles doivent être en place en permanence."},

{id:4076,prog:'ADR',theme:'adr-sec',d:3,
e:"Le phénomène BLEVE (Boiling Liquid Expanding Vapor Explosion) peut survenir lors de :",
r:[{t:"Tout transport de liquide"},{t:"L'exposition d'un récipient sous pression contenant un liquide inflammable à un incendie",ok:true},{t:"La chute d'un fût de liquide corrosif"},{t:"Le débordement d'une citerne de carburant"}],
x:"Bonne réponse : L'exposition d'un récipient sous pression contenant un liquide inflammable à un incendie. Le BLEVE est une explosion catastrophique qui survient quand un récipient sous pression (citerne GPL, bouteille de gaz) est exposé à un incendie. La chaleur fait monter la pression interne jusqu'à la rupture du récipient, libérant le liquide qui se vaporise instantanément et s'enflamme. Le risque BLEVE impose des distances de sécurité de 300-500 m minimum pour les secours."},

{id:4077,prog:'ADR',theme:'adr-cls',d:2,
e:"Les matières de la Classe 4.2 (auto-échauffantes) comprennent notamment :",
r:[{t:"L'essence et le kérosène"},{t:"Le charbon actif humide et les farines animales",ok:true},{t:"Le chlore et le brome"},{t:"Le nitrate d'ammonium"}],
x:"Bonne réponse : Le charbon actif humide et les farines animales. La Classe 4.2 regroupe les matières sujettes à l'inflammation spontanée (auto-échauffantes au contact de l'air). Exemples : charbon actif humide (peut s'enflammer après absorption d'humidité), farines animales et végétales, huile de lin, coprah (noix de coco). Ces matières nécessitent des précautions de stockage (éviter l'air et l'humidité)."},

{id:4078,prog:'ADR',theme:'adr-doc',d:2,
e:"La désignation officielle de transport (nom d'expédition officiel) ADR doit être :",
r:[{t:"En anglais uniquement"},{t:"Dans la langue du pays expéditeur ET en anglais/français/allemand selon les pays traversés",ok:true},{t:"En français uniquement pour les transports en France"},{t:"Dans la langue du pays destinataire uniquement"}],
x:"Bonne réponse : Dans la langue du pays expéditeur ET en anglais/français/allemand selon les pays traversés. Le nom d'expédition officiel (NEO) dans le document de transport doit être dans la langue officielle du pays d'origine et, si cette langue n'est pas l'anglais, le français ou l'allemand, dans l'une de ces trois langues également. Cette règle vise à assurer la compréhension par les autorités de contrôle des pays traversés."},

{id:4079,prog:'ADR',theme:'adr-emb',d:3,
e:"Un emballage combiné en ADR est :",
r:[{t:"Un emballage contenant plusieurs matières différentes"},{t:"Un emballage extérieur (caisse, fût) contenant un ou plusieurs emballages intérieurs",ok:true},{t:"Un emballage homologué pour 2 groupes d'emballage"},{t:"Un conteneur citerne"}],
x:"Bonne réponse : Un emballage extérieur (caisse, fût) contenant un ou plusieurs emballages intérieurs. Un emballage combiné comprend un emballage extérieur (qui assure la résistance mécanique et la protection) et des emballages intérieurs (qui contiennent directement la matière dangereuse). L'emballage extérieur peut être une caisse en bois, en carton, en métal, etc. Les deux niveaux d'emballage doivent être homologués."},

{id:4080,prog:'ADR',theme:'adr-gen',d:3,
e:"Les matières de la Classe 9 (divers) comprennent notamment :",
r:[{t:"Uniquement les matières radioactives"},{t:"Les matières présentant un risque pendant le transport mais ne relevant pas d'autres classes (batteries Li, PCB, neige carbonique, airbags…)",ok:true},{t:"Les matières non classifiées en attente"},{t:"Toutes les matières non dangereuses"}],
x:"Bonne réponse : Les matières présentant un risque pendant le transport mais ne relevant pas d'autres classes (batteries Li, PCB, neige carbonique, airbags…). La Classe 9 est une classe 'fourre-tout' pour les matières dangereuses pendant le transport qui ne correspondent pas aux critères des classes 1 à 8. Elle inclut : batteries au lithium (ONU 3480, 3481, 3090, 3091), PCB (polychlorobiphényles), CO2 solide (neige carbonique, ONU 1845), airbags et prétensionneurs (ONU 3268), matières dangeureuses pour l'environnement aquatique."},

{id:4081,prog:'ADR',theme:'adr-emb',d:1,
e:"Un fût en acier à fond non amovible (code 1A1) peut être utilisé pour :",
r:[{t:"Les solides uniquement"},{t:"Les liquides et matières visqueuses (son fond non amovible le rend adapté aux liquides)",ok:true},{t:"Uniquement les gaz comprimés"},{t:"Uniquement la Classe 8"}],
x:"Bonne réponse : Les liquides et matières visqueuses (son fond non amovible le rend adapté aux liquides). Le fût en acier à fond non amovible (1A1) est particulièrement adapté au transport de liquides : il résiste bien à la pression interne et limite les risques de fuite. Les fûts à fond amovible (1A2) sont adaptés aux solides car ils permettent un remplissage/vidage par le dessus. Le choix dépend aussi des critères du groupe d'emballage."},

{id:4082,prog:'ADR',theme:'adr-doc',d:2,
e:"Le document de transport ADR doit obligatoirement indiquer :",
r:[{t:"Uniquement le numéro ONU"},{t:"N° ONU, désignation officielle, classe, groupe d'emballage, quantité, expéditeur, destinataire",ok:true},{t:"Uniquement la classe de danger et le nom du conducteur"},{t:"Le numéro de plaque d'immatriculation du véhicule uniquement"}],
x:"Bonne réponse : N° ONU, désignation officielle, classe, groupe d'emballage, quantité, expéditeur, destinataire. Le document de transport ADR doit contenir : le numéro ONU (UN XXXX), la désignation officielle de transport, la classe, le code de classification, le groupe d'emballage (si applicable), la quantité totale, le nom et adresse de l'expéditeur et du destinataire."},

{id:4083,prog:'ADR',theme:'adr-sec',d:2,
e:"La procédure à suivre en cas de fuite de matières dangereuses liquides depuis un camion-citerne est :",
r:[{t:"Tenter de réparer la fuite immédiatement"},{t:"Stationner à l'écart, baliser, alerter les secours (18/112), ne pas s'approcher seul et consulter les consignes écrites",ok:true},{t:"Vider le contenu dans un caniveau pour sécuriser"},{t:"Couvrir la fuite avec de la terre ou du sable manuellement"}],
x:"Bonne réponse : Stationner à l'écart, baliser, alerter les secours (18/112), ne pas s'approcher seul et consulter les consignes écrites. En cas de fuite d'une citerne ADR : 1) S'arrêter loin des habitations et sources d'ignition, 2) Couper le moteur, 3) Allumer les feux de détresse, 4) Baliser à distance, 5) Appeler le 18 (pompiers) et le 15 (SAMU) si blessés, en précisant le numéro ONU, 6) Consulter les consignes écrites, 7) Ne jamais tenter de colmater seul une fuite importante."},

{id:4084,prog:'ADR',theme:'adr-sec',d:2,
e:"Le plan de sûreté ADR (chapitre 1.10) est obligatoire pour :",
r:[{t:"Tous les transports ADR sans exception"},{t:"Les transporteurs de marchandises à haut risque sécuritaire (explosifs, certains toxiques, radioactifs…)",ok:true},{t:"Uniquement les transports internationaux"},{t:"Les transports de plus de 1 tonne de matières dangereuses"}],
x:"Bonne réponse : Les transporteurs de marchandises à haut risque sécuritaire (explosifs, certains toxiques, radioactifs…). Le plan de sûreté (chapitre 1.10 ADR) est requis pour les entreprises transportant des 'marchandises dangereuses à haut risque' (liste définie par l'ADR) : explosifs, certains gaz très toxiques, matières radioactives de haute activité, et autres matières pouvant être utilisées à des fins terroristes. Il doit identifier les menaces et définir les mesures de sécurité."},

{id:4085,prog:'ADR',theme:'adr-gen',d:2,
e:"Le principe de précaution en ADR implique que, en cas de doute sur la classification d'une matière, on doit :",
r:[{t:"Attribuer la classe la moins restrictive"},{t:"Appliquer les exigences les plus strictes jusqu'à obtenir une classification certaine",ok:true},{t:"Ne pas transporter la matière"},{t:"Demander l'avis d'un voisin transporteur"}],
x:"Bonne réponse : Appliquer les exigences les plus strictes jusqu'à obtenir une classification certaine. En cas d'incertitude sur la classification d'une matière, le principe ADR est d'appliquer les règles correspondant aux exigences les plus strictes (groupe d'emballage I si incertain entre I et II, classe la plus dangereuse si plusieurs sont possibles) jusqu'à ce qu'une classification certaine soit obtenue auprès d'un laboratoire ou d'une autorité compétente."},

{id:4086,prog:'ADR',theme:'adr-gen',d:2,
e:"Les 'matières et objets explosibles affectés au groupe de compatibilité A' (Classe 1) sont :",
r:[{t:"Les poudres de mine"},{t:"Les matières explosives primaires (les plus sensibles, comme l'azoture de plomb)",ok:true},{t:"Les feux d'artifice"},{t:"Les explosifs industriels sécurisés"}],
x:"Bonne réponse : Les matières explosives primaires (les plus sensibles, comme l'azoture de plomb). Le groupe de compatibilité A (initiateur) correspond aux matières explosives primaires, les plus sensibles à un choc, friction, chaleur ou décharge électrique. Exemples : azoture de plomb (UN 0129), styphnate de plomb (UN 0130), trinitrorsorcinate de plomb. Ces matières ne peuvent être transportées qu'isolément dans des conditions strictes."},

{id:4087,prog:'ADR',theme:'adr-cls',d:3,
e:"La peroxydes organiques de la Classe 5.2 se distinguent de la Classe 5.1 car :",
r:[{t:"Ils sont moins dangereux"},{t:"Ils contiennent un groupement peroxyde -O-O- et peuvent être instables, se décomposant de façon explosive ou auto-accélérée",ok:true},{t:"Ils sont uniquement gazeux"},{t:"Ils sont plus fréquents dans le transport routier"}],
x:"Bonne réponse : Ils contiennent un groupement peroxyde -O-O- et peuvent être instables, se décomposant de façon explosive ou auto-accélérée. La Classe 5.2 (peroxydes organiques) regroupe des matières dont la structure chimique contient le groupement -O-O-. Ils peuvent se décomposer de façon exothermique (libération de chaleur) et parfois explosive. Beaucoup nécessitent un contrôle de température pendant le transport (température critique de décomposition auto-accélérée - TDAA)."},

{id:4088,prog:'ADR',theme:'adr-sig',d:1,
e:"L'étiquette de danger de la Classe 1 (explosibles) est de forme :",
r:[{t:"Carrée orange"},{t:"Losange orange avec une bombe exploseuse et un numéro de division",ok:true},{t:"Ronde rouge avec une flamme"},{t:"Triangulaire blanche avec un crâne"}],
x:"Bonne réponse : Losange orange avec une bombe exploseuse et un numéro de division. Les étiquettes de la Classe 1 sont des losanges (carré sur la pointe) de couleur orange avec le numéro de la sous-classe et de la lettre de groupe de compatibilité. Le pictogramme représente une bombe explosant. Chaque division de la Classe 1 a sa propre étiquette (1.1, 1.2, 1.3, 1.4, 1.5, 1.6)."},

{id:4089,prog:'ADR',theme:'adr-cls',d:2,
e:"L'acide sulfurique concentré appartient à la classe ADR :",
r:[{t:"Classe 5.1"},{t:"Classe 6.1"},{t:"Classe 8",ok:true},{t:"Classe 3"}],
x:"Bonne réponse : Classe 8. L'acide sulfurique concentré (H2SO4) est une matière corrosive de Classe 8. Il est aussi une matière toxique mais son danger principal est la corrosivité (destruction des tissus vivants et des métaux). ONU 1830 (acide sulfurique concentré), groupe d'emballage II."},

{id:4090,prog:'ADR',theme:'adr-cls',d:1,
e:"Les matières de la Classe 7 (radioactives) sont caractérisées par leur :",
r:[{t:"Inflammabilité"},{t:"Radioactivité (émission de rayonnements ionisants)",ok:true},{t:"Toxicité par ingestion"},{t:"Caractère explosif"}],
x:"Bonne réponse : Radioactivité (émission de rayonnements ionisants). Classe 7 = matières radioactives émettant des rayonnements ionisants (alpha, bêta, gamma). Ex : radio-isotopes médicaux, déchets nucléaires. 3 catégories selon l'indice de transport : I-Blanc, II-Jaune, III-Jaune."},

{id:4091,prog:'ADR',theme:'adr-doc',d:1,
e:"Que doit-on retrouver dans le document de transport ADR (déclaration d'expéditeur) ?",
r:[{t:"Uniquement le numéro ONU et la classe"},{t:"Le numéro ONU, le nom d'expédition, la classe, le groupe d'emballage, la quantité, le nom/adresse expéditeur et destinataire",ok:true},{t:"Uniquement les mesures d'urgence"},{t:"Le poids du véhicule chargé"}],
x:"Bonne réponse : Le numéro ONU, le nom d'expédition, la classe, le groupe d'emballage, la quantité, le nom/adresse expéditeur et destinataire. La déclaration de l'expéditeur (document de transport) doit contenir, selon l'ADR 5.4.1.1 : 'UN XXXX Nom d'expédition officiel, Classe X, (GE X ou Code de Classification), Quantité, NOM et adresse de l'expéditeur, NOM et adresse du destinataire'. Des informations supplémentaires sont requises selon les cas (température, code tunnel…)."},

{id:4092,prog:'ADR',theme:'adr-gen',d:1,
e:"La classe ADR des matières radioactives est la :",
r:[{t:"Classe 6"},{t:"Classe 7",ok:true},{t:"Classe 8"},{t:"Classe 9"}],
x:"Bonne réponse : Classe 7. La Classe 7 de l'ADR regroupe les matières radioactives. Elle se distingue des autres classes par un système complexe de catégories (I-Blanc, II-Jaune, III-Jaune) basé sur l'indice de transport et la concentration d'activité. Des règles très strictes s'appliquent à leur transport."},

{id:4093,prog:'ADR',theme:'adr-sig',d:1,
e:"La Classe 7 (radioactifs) utilise quelle couleur pour ses étiquettes ?",
r:[{t:"Orange"},{t:"Jaune et blanc selon la catégorie",ok:true},{t:"Vert"},{t:"Bleu"}],
x:"Bonne réponse : Jaune et blanc selon la catégorie. Les étiquettes de la Classe 7 utilisent le jaune (moitié supérieure) et le blanc (moitié inférieure) pour les catégories II-Jaune et III-Jaune, ou uniquement le blanc pour la catégorie I-Blanc. Le symbole radioactif (trèfle à 3 pétales) est toujours noir. Les catégories dépendent de l'indice de transport (quantité de rayonnement mesurable à 1 m)."},

{id:4094,prog:'ADR',theme:'adr-sec',d:1,
e:"En cas d'accident avec des matières de Classe 6.2 (infectieuses), on doit :",
r:[{t:"Nettoyer soi-même le déversement avec de l'eau"},{t:"Alerter immédiatement les services de secours spécialisés et ne pas toucher la marchandise",ok:true},{t:"Ouvrir les fenêtres et attendre que la zone s'aère"},{t:"Utiliser l'extincteur à poudre"}],
x:"Bonne réponse : Alerter immédiatement les services de secours spécialisés et ne pas toucher la marchandise. En cas de déversement de matières infectieuses (Classe 6.2), il ne faut jamais toucher la marchandise. Il faut immédiatement alerter les secours spécialisés (pompiers NRBC), évacuer et baliser la zone, consulter les consignes écrites."},

{id:4095,prog:'ADR',theme:'adr-gen',d:1,
e:"Le numéro d'identification de danger (numéro Kemler) '268' signifie :",
r:[{t:"Gaz toxique inflammable"},{t:"Gaz toxique corrosif",ok:true},{t:"Matière corrosive explosive"},{t:"Liquide inflammable toxique"}],
x:"Bonne réponse : Gaz toxique corrosif. Le code Kemler 268 : 2 = propriété de gaz, 6 = toxicité, 8 = corrosivité. Donc 268 = gaz toxique et corrosif. Exemple classique : chlorure d'hydrogène (HCl), ONU 1050, code 268. Le code Kemler apparaît sur la partie supérieure de la plaque orange des citernes et véhicules ADR, le numéro ONU en dessous."},

{id:4096,prog:'ADR',theme:'adr-gen',d:3,
e:"La catégorie de transport d'une matière ADR détermine :",
r:[{t:"La vitesse maximale du véhicule"},{t:"Le facteur multiplicateur pour le calcul des points d'exemptions partielles (1.1.3.6)",ok:true},{t:"Le type de véhicule requis"},{t:"La durée de validité du certificat conducteur"}],
x:"Bonne réponse : Le facteur multiplicateur pour le calcul des points d'exemptions partielles (1.1.3.6). La catégorie de transport (0, 1, 2 ou 3) détermine le facteur multiplicateur pour les calculs des points d'exemption partielle. Catégorie 0 = facteur 0 (toujours exempté quelle que soit la quantité), catégorie 1 = facteur 50 (très dangereux), catégorie 2 = facteur 3, catégorie 3 = facteur 1 (moins dangereux). Si le total des points ≤ 1000, exemption partielle applicable."},

{id:4097,prog:'ADR',theme:'adr-gen',d:2,
e:"Un véhicule ADR doit être équipé au minimum d'un extincteur dans la cabine de :",
r:[{t:"1 kg poudre"},{t:"2 kg poudre ou agent équivalent",ok:true},{t:"5 kg CO2"},{t:"6 kg poudre"}],
x:"Bonne réponse : 2 kg poudre ou agent équivalent. Pour tout véhicule transportant des MD en colis (pas citerne), un extincteur de 2 kg de poudre polyvalente AB (ou équivalent) doit se trouver dans la cabine. Un extincteur supplémentaire pour le compartiment marchandises est requis selon les classes transportées. Ces extincteurs doivent être vérifiés annuellement."},

{id:4098,prog:'ADR',theme:'adr-sig',d:3,
e:"La plaque-étiquette représentant un trèfle radioactif sur fond jaune et rouge correspond à la :",
r:[{t:"Catégorie I-Blanc (faible radioactivité)"},{t:"Catégorie III-Jaune (radioactivité plus élevée, nécessitant une distance de sécurité)",ok:true},{t:"Classe 7 générale (toutes catégories)"},{t:"Classe 7E (uranium appauvri)"}],
x:"Bonne réponse : Catégorie III-Jaune (radioactivité plus élevée, nécessitant une distance de sécurité). La Classe 7 utilise trois étiquettes différentes selon la catégorie de radioactivité : I-Blanc (fond blanc, trèfle noir) pour les indices de transport < 0,05 ; II-Jaune (moitié supérieure jaune, moitié inférieure blanche, trèfle noir) pour IT entre 0,05 et 1 ; III-Jaune (fond jaune avec deux bandes rouges, trèfle noir) pour IT entre 1 et 10."},

{id:4099,prog:'ADR',theme:'adr-gen',d:2,
e:"Les 'matières de la Classe 3' qui ont un point d'éclair inférieur à -18°C sont dans le groupe d'emballage :",
r:[{t:"Groupe III"},{t:"Groupe II"},{t:"Groupe I",ok:true},{t:"Elles n'ont pas de groupe d'emballage"}],
x:"Bonne réponse : Groupe I. Pour la Classe 3 (liquides inflammables), les groupes d'emballage sont déterminés selon le point d'éclair et le point d'ébullition initial : GE I = éclair < -18°C et ébullition ≤ 35°C (très inflammable), GE II = éclair < 23°C, GE III = 23°C ≤ éclair ≤ 60°C (moins dangereux)."},

{id:4100,prog:'ADR',theme:'adr-cls',d:2,
e:"La classe 4.3 de l'ADR regroupe les matières qui :",
r:[{t:"Brûlent spontanément au contact de l'air"},{t:"Dégagent des gaz inflammables au contact de l'eau",ok:true},{t:"Explosent sous l'effet de la chaleur"},{t:"Sont auto-échauffantes"}],
x:"Bonne réponse : Dégagent des gaz inflammables au contact de l'eau. La Classe 4.3 regroupe les matières qui, au contact de l'eau, dégagent des gaz inflammables (hydrogène, acétylène, phosphine…). Exemples : carbure de calcium (ONU 1402, dégage acétylène), sodium métallique (ONU 1428, dégage hydrogène), magnésium en poudre (ONU 2950). Ces matières sont incompatibles avec tout contact humide ou l'eau d'extinction."},

{id:4101,prog:'ADR',theme:'adr-gen',d:2,
e:"Le rapport annuel du CSTMD doit être transmis à :",
r:[{t:"La DREAL uniquement"},{t:"L'autorité compétente si demandé, sinon conservé par l'entreprise",ok:true},{t:"La douane française"},{t:"L'ONU chaque année"}],
x:"Bonne réponse : L'autorité compétente si demandé, sinon conservé par l'entreprise. Le rapport annuel du CSTMD (art. 1.8.3.3 ADR) doit être rédigé chaque année et adressé à la direction de l'entreprise. Il est conservé pendant au moins 5 ans. Il n'est pas envoyé automatiquement à l'autorité compétente, mais doit être communiqué en cas de demande lors d'un contrôle."},

{id:4102,prog:'ADR',theme:'adr-gen',d:2,
e:"Le transport d'aérosols (bombes de peinture, déodorants, mousse expansive) est soumis à l'ADR sous :",
r:[{t:"La Classe 3 (inflammable)"},{t:"La Classe 2, ONU 1950 (AÉROSOLS)",ok:true},{t:"La Classe 5.1"},{t:"Il n'est pas soumis à l'ADR"}],
x:"Bonne réponse : La Classe 2, ONU 1950 (AÉROSOLS). Les aérosols (contenant du gaz propulseur sous pression) sont classés Classe 2, ONU 1950. Selon les propriétés du contenu, des risques subsidiaires peuvent s'ajouter (inflammable, corrosif, toxique…). Le transport de petites quantités d'aérosols bénéficie souvent des exemptions LQ ou de l'exemption spéciale 327 de l'ADR."},

{id:4103,prog:'ADR',theme:'adr-doc',d:2,
e:"La déclaration de chargement du conteneur (DCC) est requise lorsque :",
r:[{t:"Tous les transports ADR en conteneur"},{t:"Des marchandises dangereuses solides sont chargées en vrac dans un conteneur",ok:true},{t:"Uniquement pour les conteneurs de plus de 20 pieds"},{t:"Uniquement pour les transports maritimes"}],
x:"Bonne réponse : Des marchandises dangereuses solides sont chargées en vrac dans un conteneur. La DCC (ou certificat d'emballage du conteneur, Container Packing Certificate - CPC) est requise quand des marchandises dangereuses en vrac ou sous forme d'objets (pas en colis) sont chargées dans un conteneur ou engin de transport. Elle atteste que le chargement a été effectué correctement et que le conteneur est en bon état."},

{id:4104,prog:'ADR',theme:'adr-cls',d:2,
e:"Le pictogramme représentant une flamme sur fond rouge correspond aux matières :",
r:[{t:"Explosibles (Classe 1)"},{t:"Inflammables (Classes 2, 3, 4.1, 4.2)",ok:true},{t:"Toxiques (Classe 6.1)"},{t:"Corrosives (Classe 8)"}],
x:"Bonne réponse : Inflammables (Classes 2, 3, 4.1, 4.2). La flamme sur fond rouge est le pictogramme des matières inflammables (liquides inflammables Classe 3, gaz inflammables Classe 2, solides inflammables Classe 4.1, matières spontanément inflammables Classe 4.2)."},

{id:4105,prog:'ADR',theme:'adr-sec',d:2,
e:"Les consignes écrites ADR pour un liquide très inflammable (Cl.3) doivent indiquer notamment :",
r:[{t:"Uniquement le numéro ONU"},{t:"Nature du danger, EPI requis, interdictions (feu, étincelles), mesures en cas de fuite ou incendie, premiers secours",ok:true},{t:"Uniquement les coordonnées du transporteur"},{t:"Le prix du transport uniquement"}],
x:"Bonne réponse : Nature du danger, EPI requis, interdictions (feu, étincelles), mesures en cas de fuite ou incendie, premiers secours. Les consignes écrites ADR (format standardisé depuis 2015) doivent indiquer pour chaque matière : nature du danger (symboles de risque), équipements de protection individuelle à utiliser, actions générales, actions spécifiques en cas d'incendie, en cas de déversement/fuite, en cas de blessé/contact. Elles doivent être dans les langues appropriées."},

{id:4106,prog:'ADR',theme:'adr-cls',d:2,
e:"Les batteries au lithium-ion (Li-ion) pour véhicules électriques sont classées :",
r:[{t:"Classe 3 — inflammable"},{t:"Classe 9, ONU 3480 (seules) ou ONU 3481 (dans équipements)",ok:true},{t:"Classe 8 — corrosif"},{t:"Classe 4.3"}],
x:"Bonne réponse : Classe 9, ONU 3480 (seules) ou ONU 3481 (dans équipements). Les batteries Li-ion sont Classe 9. ONU 3480 = batteries Li-ion seules, ONU 3481 = batteries Li-ion dans équipements. Des règles très strictes s'appliquent : état de charge ≤ 30 % pour les batteries seules (sauf exceptions), emballage renforcé, inspection visuelle obligatoire, interdiction de dommages visibles."},

{id:4107,prog:'ADR',theme:'adr-gen',d:3,
e:"Le numéro de danger '236' sur la plaque orange signifie :",
r:[{t:"Gaz, inflammable, corrosif",ok:true},{t:"Liquide inflammable, toxique, corrosif"},{t:"Solide inflammable, comburant, réactif à l'eau"},{t:"Gaz comprimé, explosif, toxique"}],
x:"Bonne réponse : Gaz, inflammable, corrosif. En ADR, les chiffres du code Kemler (numéro de danger) : 2 = gaz, 3 = inflammabilité, 6 = toxicité. Le code 236 = matière gazeuse, inflammable ET corrosive. Les 3 risques sont présents. Le '6' peut aussi signifier 'toxique' selon la position. Ici : 2 (gaz) + 3 (inflammable) + 6 (corrosif)."},

{id:4108,prog:'ADR',theme:'adr-emb',d:1,
e:"Un fût en acier à fond non amovible (code 1A1) est principalement utilisé pour :",
r:[{t:"Les solides"},{t:"Les liquides (le fond fixe résiste à la pression interne)",ok:true},{t:"Les gaz comprimés"},{t:"Uniquement la Classe 8"}],
x:"Bonne réponse : Les liquides (le fond fixe résiste à la pression interne). Le fût en acier 1A1 (à fond non amovible) est adapté aux liquides car il résiste bien à la pression interne et limite les fuites. Les fûts 1A2 (à fond amovible) sont adaptés aux solides car ils permettent un remplissage/vidage par le dessus. Le choix dépend des propriétés physiques de la matière et des exigences du groupe d'emballage."},

{id:4109,prog:'ADR',theme:'adr-gen',d:1,
e:"Le code de classification '2TC' dans l'ADR signifie :",
r:[{t:"Gaz corrosif comprimé"},{t:"Gaz liquéfié toxique et corrosif",ok:true},{t:"Gaz inflammable et corrosif"},{t:"Gaz toxique comprimé"}],
x:"Bonne réponse : Gaz liquéfié toxique et corrosif. Dans le code de classification ADR pour les gaz (Classe 2) : 2 = gaz liquéfié, T = toxique, C = corrosif. Donc 2TC = gaz liquéfié à la fois toxique ET corrosif. Exemples : ammoniac (2TC), chlorure d'hydrogène. Le code complet précise les propriétés physiques (comprimé, liquéfié, réfrigéré) et chimiques (inflammable, toxique, corrosif, comburant)."},

{id:4110,prog:'ADR',theme:'adr-gen',d:1,
e:"Le certificat ADR conducteur est valable :",
r:[{t:"1 an"},{t:"5 ans",ok:true},{t:"10 ans"},{t:"Il est permanent"}],
x:"Bonne réponse : 5 ans. Le certificat de formation ADR est valable 5 ans à compter de sa délivrance. Pour le renouveler, le conducteur doit suivre une formation de recyclage dans l'année précédant l'expiration. Si le certificat est expiré depuis plus de 12 mois, la formation initiale complète doit être refaite."},

{id:4111,prog:'ADR',theme:'adr-gen',d:2,
e:"La notion de 'quantité limitée' dans l'ADR signifie :",
r:[{t:"Une exemption totale de l'ADR pour les petites quantités emballées",ok:true},{t:"Une limitation du nombre de colis par véhicule"},{t:"Une restriction sur la distance de transport"},{t:"Une limitation à certaines classes de danger uniquement"}],
x:"Bonne réponse : Une exemption totale de l'ADR pour les petites quantités emballées. Les quantités limitées (LQ - Limited Quantities) permettent d'emballer certaines marchandises dangereuses en petites quantités par colis (de 25 ml à 5L selon la marchandise) avec un marquage simplifié (losange blanc/noir) et une exemption de nombreuses obligations ADR (plaques oranges, certificat conducteur, consignes écrites…)."},

{id:4112,prog:'ADR',theme:'adr-sec',d:1,
e:"Les équipements de protection individuelle à bord d'un véhicule ADR comprennent obligatoirement :",
r:[{t:"Uniquement un extincteur"},{t:"Cales de roue, gilet réfléchissant, lampe portable, lunettes/gants de protection, consignes écrites",ok:true},{t:"Un masque à gaz complet et une combinaison anti-feu"},{t:"Uniquement un triangle de signalisation"}],
x:"Bonne réponse : Cales de roue, gilet réfléchissant, lampe portable, lunettes/gants de protection, consignes écrites. L'équipement ADR obligatoire à bord comprend : cales de roue, au moins 2 signaux d'avertissement autoporteurs, lampe portable (sans flamme), gilets réfléchissants pour chaque membre d'équipage, lunettes de protection et gants (selon les marchandises), consignes écrites."},

{id:4113,prog:'ADR',theme:'adr-cls',d:2,
e:"L'uranium appauvri (ONU 2909) utilisé comme lest dans certains appareils est classé :",
r:[{t:"Classe 6.1 — toxique"},{t:"Classe 7 — radioactif (mais exemption possible selon conditions)",ok:true},{t:"Classe 9"},{t:"Il n'est pas soumis à l'ADR"}],
x:"Bonne réponse : Classe 7 — radioactif (mais exemption possible selon conditions). L'uranium appauvri (UF4 ou métal) est radioactif mais à très faible activité spécifique. Il appartient à la Classe 7 (radioactifs). Cependant, selon les quantités et la configuration, il peut bénéficier d'une exemption (matières radioactives à faible activité spécifique, art. 2.2.7.2.2.1 ADR). Les pièces manufacturées en uranium appauvri pour contrepoids ou blindage peuvent être exemptées."},

{id:4114,prog:'ADR',theme:'adr-gen',d:1,
e:"L'ADR a été signé pour la première fois à :",
r:[{t:"Paris en 1949"},{t:"Genève en 1957",ok:true},{t:"Bruxelles en 1968"},{t:"New York en 1950"}],
x:"Bonne réponse : Genève en 1957. L'Accord européen relatif au transport international des marchandises Dangereuses par Route a été signé à Genève le 30 septembre 1957, sous l'égide de la Commission économique pour l'Europe des Nations Unies (CEE-ONU). Il est entré en vigueur le 29 janvier 1968."},

{id:4115,prog:'ADR',theme:'adr-cls',d:2,
e:"L'ONU 1863 (carburant d'aviation) est classé :",
r:[{t:"Classe 1 — explosible"},{t:"Classe 3 — liquide inflammable",ok:true},{t:"Classe 5.1 — comburant"},{t:"Classe 9 — divers"}],
x:"Bonne réponse : Classe 3 — liquide inflammable. Le carburant d'aviation (kérosène, jet fuel) est un liquide inflammable de Classe 3, ONU 1863. Son point d'éclair est généralement entre 38°C et 62°C (selon le type), ce qui le place en groupe d'emballage III. Il est transporté en citernes homologuées avec les plaques oranges et étiquettes Classe 3 (flamme rouge/noir)."},

{id:4116,prog:'ADR',theme:'adr-sec',d:2,
e:"La formation ADR du conducteur couvre notamment les modules :",
r:[{t:"Permis C et conduite de PL"},{t:"Module de base (toutes marchandises en colis) + modules complémentaires selon les classes et modes de transport (citerne, classe 1, classe 7)",ok:true},{t:"Uniquement les procédures d'urgence"},{t:"Uniquement la signalisation et les plaques"}],
x:"Bonne réponse : Module de base (toutes marchandises en colis) + modules complémentaires selon les classes et modes de transport (citerne, classe 1, classe 7). La formation ADR conducteur comprend : un module de base obligatoire pour tout conducteur ADR (transport en colis, réglémentation générale, prévention des risques, procédures d'urgence) + des modules complémentaires : citerne (obligatoire pour les citernes), classe 1 (explosifs), classe 7 (radioactifs). Chaque module sanctionné par un examen."},

{id:4117,prog:'ADR',theme:'adr-sec',d:1,
e:"Le plan de sécurité obligatoire pour certaines marchandises dangereuses (notamment Classe 1 et matières à haut risque) doit comprendre :",
r:[{t:"Uniquement les numéros d'urgence"},{t:"Les mesures visant à prévenir le vol ou l'utilisation illicite de la marchandise",ok:true},{t:"Le plan de livraison du client"},{t:"L'itinéraire détaillé du transport"}],
x:"Bonne réponse : Les mesures visant à prévenir le vol ou l'utilisation illicite de la marchandise. Pour les marchandises à 'haut risque' (explosifs, radioactifs, certains toxiques…), un plan de sûreté est requis (chapitre 1.10 de l'ADR). Il doit identifier les risques sécuritaires (vol, détournement), les mesures de prévention (contrôle des accès, traçabilité) et les procédures en cas d'incident de sûreté."},

{id:4118,prog:'ADR',theme:'adr-gen',d:1,
e:"L'ADR est un accord européen relatif au transport international des marchandises dangereuses. ADR signifie :",
r:[{t:"Accord de Droit Routier"},{t:"Accord européen relatif au transport international des marchandises Dangereuses par Route",ok:true},{t:"Autorisation de Déplacement Routier"},{t:"Acte de Déclaration de Risques"}],
x:"Bonne réponse : Accord européen relatif au transport international des marchandises Dangereuses par Route. ADR = Accord européen relatif au transport international des marchandises Dangereuses par Route. Signé à Genève en 1957, il est révisé tous les 2 ans et s'applique aux transports internationaux ET nationaux dans les pays signataires."},

{id:4119,prog:'ADR',theme:'adr-gen',d:2,
e:"Le transport de gaz comburant (Classe 2.2 + O) en citerne nécessite de ne pas stationner à moins de :",
r:[{t:"5 m des sources d'ignition"},{t:"Selon les restrictions ADR ch. 8.4 et les consignes écrites (généralement 50 m des habitations pour les matières à haut risque)",ok:true},{t:"100 m systématiquement"},{t:"Aucune restriction de stationnement"}],
x:"Bonne réponse : Selon les restrictions ADR ch. 8.4 et les consignes écrites (généralement 50 m des habitations pour les matières à haut risque). Les restrictions de stationnement pour les citernes de gaz comburants (oxygène liquide, protoxyde d'azote…) dépendent de la catégorie de la matière et des prescriptions ADR ch. 8.4. Les matières comburantes peuvent alimenter un incendie ou une explosion en présence de matières combustibles, d'où les restrictions de proximité avec des sources d'ignition ou des habitations."},

{id:4120,prog:'ADR',theme:'adr-doc',d:3,
e:"La déclaration de l'expéditeur doit mentionner le groupe d'emballage :",
r:[{t:"Toujours obligatoirement"},{t:"Seulement pour les matières affectées à un groupe d'emballage (I, II ou III)",ok:true},{t:"Uniquement pour les GE I"},{t:"Jamais — c'est une information interne"}],
x:"Bonne réponse : Seulement pour les matières affectées à un groupe d'emballage (I, II ou III). Le groupe d'emballage doit être mentionné dans le document de transport (déclaration de l'expéditeur) SEULEMENT si la matière est affectée à un groupe d'emballage. Certaines matières (gaz de Classe 2, matières de Classe 1 et 7, la plupart des matières infectieuses de Classe 6.2) n'ont pas de groupe d'emballage et cette information n'est donc pas requise."},

{id:4121,prog:'ADR',theme:'adr-doc',d:1,
e:"Le document de transport ADR doit être rédigé :",
r:[{t:"Uniquement en anglais"},{t:"Dans la langue de l'expéditeur, plus anglais/français/allemand si la langue d'origine n'est pas l'une d'elles",ok:true},{t:"En français uniquement pour les transports en France"},{t:"Dans la langue du conducteur"}],
x:"Bonne réponse : Dans la langue de l'expéditeur, plus anglais/français/allemand si la langue d'origine n'est pas l'une d'elles. Le document de transport (déclaration de l'expéditeur) doit être rédigé dans la langue officielle du pays de l'expéditeur. S'il ne s'agit pas de l'anglais, du français ou de l'allemand, le document doit également être établi dans l'une de ces trois langues pour permettre la compréhension par les autorités de contrôle des pays traversés."},

{id:4122,prog:'ADR',theme:'adr-emb',d:2,
e:"Les groupes d'emballage I, II et III de l'ADR correspondent respectivement à :",
r:[{t:"Petit, moyen et grand emballage"},{t:"Danger grand, moyen et faible",ok:true},{t:"Emballage plastique, métal et carton"},{t:"Transport national, régional et international"}],
x:"Bonne réponse : Danger grand, moyen et faible. Les groupes d'emballage définissent le niveau de danger : GE I = grand danger (emballage le plus robuste), GE II = danger moyen, GE III = danger faible. Plus le groupe est élevé (I), plus les exigences d'emballage sont strictes."},

{id:4123,prog:'ADR',theme:'adr-cls',d:1,
e:"La neige carbonique (CO2 solide, ONU 1845) est classée :",
r:[{t:"Classe 2 — gaz"},{t:"Classe 9 — matières diverses",ok:true},{t:"Classe 5.1 — comburant"},{t:"Elle n'est pas soumise à l'ADR"}],
x:"Bonne réponse : Classe 9 — matières diverses. La neige carbonique (CO2 solide) est classée Classe 9 (matières et objets dangereux divers), ONU 1845. Elle présente un danger d'asphyxie par dégagement de CO2 gazeux en espace confiné et un risque de brûlure cryogénique par contact. Des dispositions spéciales s'appliquent pour sa ventilation dans les compartiments de transport."},

{id:4124,prog:'ADR',theme:'adr-doc',d:2,
e:"La déclaration de chargement du conteneur (DCG) est requise pour :",
r:[{t:"Tous les transports ADR sans exception"},{t:"Les transports ADR en conteneur ou véhicule bâché uniquement si plusieurs expéditeurs",ok:true},{t:"Les transports de gaz uniquement"},{t:"Les transports ADR de plus de 5 tonnes"}],
x:"Bonne réponse : Les transports ADR en conteneur ou véhicule bâché uniquement si plusieurs expéditeurs. La déclaration de chargement du conteneur (ou véhicule) est requise lorsque des marchandises dangereuses sont chargées dans un conteneur, pour attester que le chargement a été effectué correctement et que le conteneur est en bon état."},

{id:4125,prog:'ADR',theme:'adr-sec',d:2,
e:"La durée de validité du certificat ADR conducteur est de 5 ans. Pour le renouveler, le conducteur doit :",
r:[{t:"Repasser l'intégralité de la formation initiale"},{t:"Suivre une formation de recyclage dans l'année précédant l'expiration et réussir l'examen de renouvellement",ok:true},{t:"Simplement présenter une demande à la préfecture"},{t:"Faire valider son expérience par son employeur"}],
x:"Bonne réponse : Suivre une formation de recyclage dans l'année précédant l'expiration et réussir l'examen de renouvellement. Pour renouveler le certificat ADR avant son expiration, le conducteur doit suivre une formation de recyclage (durée réduite par rapport à la formation initiale) chez un organisme agréé et réussir l'examen de renouvellement. Si le certificat est expiré depuis plus de 12 mois, la formation initiale complète doit être refaite."},

{id:4126,prog:'ADR',theme:'adr-sec',d:2,
e:"Le stationnement d'un véhicule transportant des marchandises dangereuses est :",
r:[{t:"Libre, sans restriction particulière"},{t:"Soumis à des restrictions (lieux habités, tunnels, ponts) et nécessite surveillance selon la quantité",ok:true},{t:"Interdit la nuit en tout lieu"},{t:"Autorisé uniquement dans les dépôts agréés ADR"}],
x:"Bonne réponse : Soumis à des restrictions (lieux habités, tunnels, ponts) et nécessite surveillance selon la quantité. Le stationnement d'un véhicule ADR est soumis à des restrictions : éviter les zones habitées, les tunnels, les dessous de ponts. Une surveillance permanente peut être requise. En cas de stationnement prolongé, des mesures de sécurité supplémentaires s'appliquent."},

{id:4127,prog:'ADR',theme:'adr-sig',d:2,
e:"Les étiquettes de danger ADR (losanges) doivent être apposées sur :",
r:[{t:"Uniquement le véhicule"},{t:"Les colis, les conteneurs et les véhicules selon les cas",ok:true},{t:"Uniquement le document de transport"},{t:"Uniquement les palettes"}],
x:"Bonne réponse : Les colis, les conteneurs et les véhicules selon les cas. Les étiquettes de danger (losanges 100×100 mm minimum) sont apposées sur les colis. Des plaques-étiquettes (250×250 mm) sont requises sur les conteneurs et les véhicules pour certains transports."},

{id:4128,prog:'ADR',theme:'adr-gen',d:2,
e:"La liste des équipements supplémentaires obligatoires à bord d'un véhicule ADR Classe 3 comprend :",
r:[{t:"Un kit de premiers secours uniquement"},{t:"Équipements de protection individuelle + matériel de collecte des fuites + extincteurs adaptés",ok:true},{t:"Uniquement un détecteur de gaz"},{t:"Une radio de communication spéciale"}],
x:"Bonne réponse : Équipements de protection individuelle + matériel de collecte des fuites + extincteurs adaptés. L'ADR chapitre 8.1.5 liste les équipements obligatoires : cales d'arrêt, deux feux d'avertissement autoportants, un gilet haute visibilité par personne à bord, et dans les consignes de formation, les EPI adaptés (gants, lunettes, combinaison de protection, appareil respiratoire si applicable). Pour les citernes de carburant : des matériaux absorbants."},

{id:4129,prog:'ADR',theme:'adr-sec',d:2,
e:"L'EPI minimal requis pour un conducteur de citerne transportant des produits corrosifs (Cl.8) comprend :",
r:[{t:"Uniquement des gants"},{t:"Lunettes de protection, gants résistants aux produits chimiques, vêtement de protection corps entier",ok:true},{t:"Uniquement un masque respiratoire"},{t:"Aucun EPI spécifique n'est requis"}],
x:"Bonne réponse : Lunettes de protection, gants résistants aux produits chimiques, vêtement de protection corps entier. Pour les matières corrosives (Classe 8), les consignes écrites ADR et les fiches de données de sécurité indiquent les EPI minimaux : lunettes étanches aux liquides (ou écran facial), gants résistants au produit chimique spécifique, vêtement de protection (combinaison ou tablier selon le risque). Un récipient d'eau de rinçage pour les yeux (min 1L) doit être accessible dans la cabine."},

{id:4130,prog:'ADR',theme:'adr-cls',d:2,
e:"La Classe 6.1 de l'ADR concerne :",
r:[{t:"Les matières infectieuses"},{t:"Les matières toxiques",ok:true},{t:"Les matières radioactives"},{t:"Les matières corrosives"}],
x:"Bonne réponse : Les matières toxiques. Classe 6.1 = matières toxiques (pouvant provoquer la mort ou des lésions graves par inhalation, ingestion ou contact cutané). Pictogramme : tête de mort sur fond blanc. Ex : pesticides, médicaments à forte concentration."},

{id:4131,prog:'ADR',theme:'adr-doc',d:3,
e:"En transport multimodal (route + ferry), les obligations ADR :",
r:[{t:"Cessent à la montée sur le ferry"},{t:"Restent applicables + des exigences IMDG complémentaires peuvent s'ajouter pour la partie maritime",ok:true},{t:"Sont remplacées par les règles IMDG"},{t:"Ne s'appliquent qu'à la partie routière finale"}],
x:"Bonne réponse : Restent applicables + des exigences IMDG complémentaires peuvent s'ajouter pour la partie maritime. En transport multimodal, les obligations ADR s'appliquent à la partie routière avant et après la traversée maritime. Pour la partie maritime, le Code IMDG (transport maritime de MD) s'applique en plus. Des documents complémentaires (déclaration MD maritime) peuvent être requis par la compagnie maritime. À l'arrivée, les obligations ADR reprennent."},

{id:4132,prog:'ADR',theme:'adr-gen',d:2,
e:"Le certificat de formation ADR du conducteur est valable :",
r:[{t:"1 an"},{t:"3 ans",ok:true},{t:"5 ans"},{t:"Indéfiniment si aucun accident"}],
x:"Bonne réponse : 3 ans. Le certificat ADR du conducteur est valable 5 ans. Pour le conserver, le conducteur doit suivre une formation de recyclage dans les 12 mois précédant l'expiration. S'il n'est pas renouvelé à temps, une nouvelle formation initiale complète est nécessaire."},

{id:4133,prog:'ADR',theme:'adr-emb',d:3,
e:"Les exigences de marquage sur un Colis ADR comprennent obligatoirement :",
r:[{t:"Uniquement le numéro ONU"},{t:"Le nom d'expédition, le numéro ONU, les étiquettes de danger, le marquage d'orientation si liquide, et les marquages d'homologation",ok:true},{t:"Le nom et adresse de l'expéditeur uniquement"},{t:"La date de fabrication de l'emballage"}],
x:"Bonne réponse : Le nom d'expédition, le numéro ONU, les étiquettes de danger, le marquage d'orientation si liquide, et les marquages d'homologation. Le marquage d'un colis ADR doit comporter : le numéro ONU (précédé de 'UN' ou 'ONU'), le nom d'expédition officiel, les étiquettes de danger (losanges), les flèches d'orientation si le colis contient des liquides (ne pas retourner), le marquage d'homologation de l'emballage (code UN). Les informations de l'expéditeur/destinataire sont également requises."},

{id:4134,prog:'ADR',theme:'adr-doc',d:2,
e:"Le rapport d'accident ADR doit être rédigé par le CSTMD dans quel délai ?",
r:[{t:"Dans les 24 heures"},{t:"Dès que possible après l'incident et conservé 5 ans",ok:true},{t:"Dans les 48 heures ouvrables"},{t:"Il n'y a pas de délai légal imposé"}],
x:"Bonne réponse : Dès que possible après l'incident et conservé 5 ans. Le rapport d'accident du CSTMD (art. 1.8.3.6 ADR) doit être rédigé dès que possible après l'incident et adressé à la direction de l'entreprise. Il est conservé 5 ans (comme le rapport annuel). Contrairement au rapport annuel qui est systématique, le rapport d'accident n'est rédigé qu'en cas d'incident ou accident significatif."},

{id:4135,prog:'ADR',theme:'adr-gen',d:3,
e:"Le calcul des points pour les exemptions partielles (1.1.3.6) : un colis classé catégorie de transport 2 avec 5 litres de liquide inflammable représente combien de points ?",
r:[{t:"5 points"},{t:"15 points",ok:true},{t:"50 points"},{t:"25 points"}],
x:"Bonne réponse : 15 points. Les facteurs multiplicateurs par catégorie de transport : catégorie 0 = facteur 0, catégorie 1 = facteur 50, catégorie 2 = facteur 3, catégorie 3 = facteur 1. Un colis de catégorie 2 contenant 5 litres = 5 × 3 = 15 points. Quand le total de tous les colis dépasse 1 000 points, l'exemption partielle ne s'applique plus."},

{id:4136,prog:'ADR',theme:'adr-gen',d:3,
e:"L'accord bilatéral ou multilatéral (ML) en ADR permet :",
r:[{t:"D'exporter des marchandises dangereuses sans formalité"},{t:"D'appliquer des règles dérogatoires entre États signataires pour un type de transport spécifique",ok:true},{t:"D'harmoniser les tarifs de transport entre pays"},{t:"D'exonérer de l'ADR pour les petits transporteurs"}],
x:"Bonne réponse : D'appliquer des règles dérogatoires entre États signataires pour un type de transport spécifique. Les accords multilatéraux (ML) sont des dérogations temporaires aux règles ADR, conclus entre les autorités compétentes de plusieurs États parties. Ils autorisent des conditions particulières de transport non prévues par l'ADR standard. Ils sont publiés et ont une durée limitée."},

{id:4137,prog:'ADR',theme:'adr-emb',d:2,
e:"Le groupe d'emballage I (GE I) correspond aux matières :",
r:[{t:"Peu dangereuses"},{t:"Très dangereuses",ok:true},{t:"Moyennement dangereuses"},{t:"Sans restriction d'emballage"}],
x:"Bonne réponse : Très dangereuses. Les groupes d'emballage classifient le niveau de danger : GE I = danger élevé (emballages les plus résistants, tests les plus sévères), GE II = danger moyen, GE III = danger faible. Les matières GE I sont soumises aux exigences les plus contraignantes (quantités maximales par colis, limitations de transport…)."},

{id:4138,prog:'ADR',theme:'adr-sig',d:1,
e:"L'étiquette de danger pour un gaz inflammable (Classe 2.1) est :",
r:[{t:"Rouge avec une flamme",ok:true},{t:"Orange avec une flamme"},{t:"Verte avec une flamme"},{t:"Bleue avec une flamme"}],
x:"Bonne réponse : Rouge avec une flamme. L'étiquette de la Classe 2.1 (gaz inflammables) est un losange rouge avec une flamme blanche ou noire. Le chiffre 2 figure dans le coin inférieur. À ne pas confondre avec la Classe 3 (liquides inflammables) qui est également rouge avec flamme — la différence est dans les détails du pictogramme et l'indication 'GAS' sur certaines étiquettes."},

{id:4139,prog:'ADR',theme:'adr-gen',d:2,
e:"Le principe de prévention des risques en ADR impose à l'entreprise de :",
r:[{t:"Uniquement former les conducteurs"},{t:"Identifier, évaluer et réduire les risques liés au transport de MD par un plan d'actions",ok:true},{t:"Assurer tous ses véhicules en tous risques"},{t:"Uniquement apposer les plaques réglementaires"}],
x:"Bonne réponse : Identifier, évaluer et réduire les risques liés au transport de MD par un plan d'actions. Le chapitre 1.10 ADR et les obligations générales imposent aux entreprises transportant des MD de mettre en place une démarche de prévention des risques : identification des dangers (classes de MD transportées), évaluation des risques (accidents, déversements, vol…), mesures de réduction (formation, EPI, procédures d'urgence, plan de sûreté si nécessaire)."},

{id:4140,prog:'ADR',theme:'adr-gen',d:2,
e:"Le transport de matières dangereuses en petites quantités (LQ) est signalé par :",
r:[{t:"Les plaques oranges habituelles"},{t:"Un losange blanc avec un carré noir en son centre (ou les côtés noirs uniquement)",ok:true},{t:"Un triangle rouge sur fond blanc"},{t:"Aucun marquage n'est requis pour les LQ"}],
x:"Bonne réponse : Un losange blanc avec un carré noir en son centre (ou les côtés noirs uniquement). Le marquage LQ (Quantités Limitées) est un losange blanc avec une bordure noire (et un losange intérieur noir au centre pour le transport routier). Il est apposé sur les colis et sur le véhicule (min 100×100 mm sur le véhicule). Il remplace les étiquettes de danger et les plaques oranges standards."},

{id:4141,prog:'ADR',theme:'adr-sig',d:2,
e:"Les étiquettes de danger ADR sur les colis ont une taille minimale de :",
r:[{t:"50 mm × 50 mm"},{t:"100 mm × 100 mm",ok:true},{t:"200 mm × 200 mm"},{t:"La taille n'est pas réglementée"}],
x:"Bonne réponse : 100 mm × 100 mm. Les étiquettes de danger (losanges) doivent avoir une taille minimale de 100 mm × 100 mm, avec une ligne de bordure à 5 mm du bord. Pour les colis trop petits pour les étiquettes standard, des étiquettes réduites (50 × 50 mm ou moins avec un bord coloré) peuvent être utilisées avec l'indication de la réduction."},

{id:4142,prog:'ADR',theme:'adr-emb',d:2,
e:"Le groupe d'emballage I (GE I) en ADR est attribué aux matières :",
r:[{t:"Peu dangereuses"},{t:"Très dangereuses",ok:true},{t:"Moyennement dangereuses"},{t:"Non soumises à groupement"}],
x:"Bonne réponse : Très dangereuses. Les groupes d'emballage indiquent le niveau de danger : GE I = danger élevé (emballages les plus résistants requis), GE II = danger moyen, GE III = danger faible. Les matières de GE I sont les plus contraignantes en termes d'emballage, de quantités maximales et de restrictions de transport."},

{id:4143,prog:'ADR',theme:'adr-sig',d:1,
e:"Que signifie la lettre X placée devant le numéro de danger sur la plaque orange ?",
r:[{t:"Danger extrême"},{t:"Réaction dangereuse avec l'eau",ok:true},{t:"Transport exceptionnel"},{t:"Marchandise explosive"}],
x:"Bonne réponse : Réaction dangereuse avec l'eau. La lettre X devant le code Kemler (ex : X268) signifie que la matière est dangereuse au contact de l'eau (risque de réaction violente, dégagement de gaz inflammables ou toxiques). Ces matières ne doivent jamais être éteintes avec de l'eau."},

{id:4144,prog:'ADR',theme:'adr-cls',d:1,
e:"Les piles et batteries au lithium non rechargeables sont classées :",
r:[{t:"Classe 3 — inflammable"},{t:"Classe 9 — matières et objets dangereux divers",ok:true},{t:"Classe 8 — corrosif"},{t:"Classe 4.3 — réactif à l'eau"}],
x:"Bonne réponse : Classe 9 — matières et objets dangereux divers. Les piles au lithium métal (non rechargeables) : ONU 3090 (piles seules), ONU 3091 (piles dans équipements). Les batteries lithium-ion (rechargeables) : ONU 3480 (batteries seules), ONU 3481 (batteries dans équipements). Toutes sont Classe 9. Des règles très strictes s'appliquent (état de charge ≤ 30 % pour les batteries Li-ion, emballage renforcé, marquages spéciaux)."},

{id:4145,prog:'ADR',theme:'adr-sig',d:2,
e:"Les plaques de signalisation ADR oranges doivent être :",
r:[{t:"Amovibles et rétroréfléchissantes",ok:true},{t:"Fixes et non réfléchissantes"},{t:"Peintes directement sur la carrosserie"},{t:"Apposées uniquement à l'avant du véhicule"}],
x:"Bonne réponse : Amovibles et rétroréfléchissantes. Les plaques oranges ADR doivent être amovibles (pour permettre leur retrait ou couverture quand le véhicule est vide et non nettoyé) et rétroréfléchissantes (pour être visibles la nuit). Elles doivent rester en place pendant le transport et être effacées ou couvertes une fois le véhicule vide et propre."},

{id:4146,prog:'ADR',theme:'adr-sec',d:2,
e:"La mise à la masse (mise à terre) d'une citerne de carburant lors du chargement est obligatoire pour :",
r:[{t:"Toutes les citernes"},{t:"Prévenir les étincelles dues aux charges électrostatiques lors du transfert de liquides inflammables",ok:true},{t:"Uniquement pour les citernes en plastique"},{t:"Uniquement la nuit"}],
x:"Bonne réponse : Prévenir les étincelles dues aux charges électrostatiques lors du transfert de liquides inflammables. La mise à la masse est obligatoire lors du chargement/déchargement de liquides inflammables en citerne pour dissiper les charges électrostatiques générées par l'écoulement du liquide. Une étincelle dans une atmosphère explosive (vapeurs de carburant) peut provoquer l'inflammation. Un câble de mise à la masse doit être branché avant toute opération."},

{id:4147,prog:'ADR',theme:'adr-emb',d:2,
e:"Un GRV (Grand Récipient pour Vrac) de type 11G est :",
r:[{t:"Un fût en acier"},{t:"Un GRV souple",ok:true},{t:"Un GRV rigide en plastique"},{t:"Un conteneur citerne"}],
x:"Bonne réponse : Un GRV souple. Dans le code des GRV, le premier chiffre indique le type : 11 = GRV souple. Les lettres indiquent le matériau : A = tissu sans revêtement, B = tissu avec revêtement intérieur, C = plastique, D = composite tissu/film, G = autres matières (papier multicouches…). 11G = GRV souple en autre matière (ex : papier renforcé)."},

{id:4148,prog:'ADR',theme:'adr-emb',d:2,
e:"Le marquage 'ONU' (ou 'UN') sur un emballage ADR indique :",
r:[{t:"Que l'emballage est fabriqué par l'ONU"},{t:"Que l'emballage a été testé et approuvé selon les procédures de l'ONU/ADR",ok:true},{t:"Que l'emballage peut contenir toutes les classes ADR"},{t:"Que l'emballage est d'origine américaine (United Nations)"}],
x:"Bonne réponse : Que l'emballage a été testé et approuvé selon les procédures de l'ONU/ADR. Le marquage 'UN' (ou pictogramme UN) sur un emballage atteste qu'il a subi les tests de performance prescrits par les Recommandations de l'ONU sur le transport des marchandises dangereuses (tests de chute, empilage, étanchéité, pression interne selon les cas). C'est le marquage homologué exigé par l'ADR."},

{id:4149,prog:'ADR',theme:'adr-gen',d:1,
e:"Le principe de séparation des charges incompatibles en ADR interdit notamment :",
r:[{t:"Le transport de plusieurs types de GRV dans un même véhicule"},{t:"Le chargement en commun de certaines classes dangereuses incompatibles (explosifs + inflammables, etc.)",ok:true},{t:"Tout mélange de classes dans le même colis"},{t:"Le transport simultané de 3 classes différentes"}],
x:"Bonne réponse : Le chargement en commun de certaines classes dangereuses incompatibles (explosifs + inflammables, etc.). Le tableau de séparation ADR (sous-section 7.5.2) définit quelles classes peuvent être chargées ensemble et lesquelles sont incompatibles. Par exemple : les explosibles (Cl.1) ne peuvent pas être transportés avec les liquides inflammables (Cl.3) ni les comburants (Cl.5.1). En cas de doute, la règle est de séparer."},

{id:4150,prog:'ADR',theme:'adr-cls',d:3,
e:"La Classe 9 de l'ADR est une classe résiduelle qui inclut notamment :",
r:[{t:"Les matières non dangereuses transportées volontairement"},{t:"Les matières et objets présentant un danger non couvert par les autres classes (ex : lithium, dry ice, véhicules…)",ok:true},{t:"Uniquement les matières radioactives de faible activité"},{t:"Les médicaments et produits pharmaceutiques"}],
x:"Bonne réponse : Les matières et objets présentant un danger non couvert par les autres classes (ex : lithium, dry ice, véhicules…). Classe 9 = matières et objets dangereux divers non couverts par les autres classes. Exemples : batteries au lithium (ONU 3480/3481), neige carbonique (ONU 1845), engins de sauvetage (airbags), véhicules électriques. Pictogramme : rayures verticales noires sur fond blanc."},

{id:4151,prog:'ADR',theme:'adr-sec',d:2,
e:"Les extincteurs à bord d'un véhicule ADR doivent être :",
r:[{t:"Uniquement à poudre ABC"},{t:"En bon état de fonctionnement, portant une date valide d'inspection et adaptés à la cargaison",ok:true},{t:"Uniquement à CO2 (gaz carbonique)"},{t:"Non obligatoires si la cargaison est faible quantité"}],
x:"Bonne réponse : En bon état de fonctionnement, portant une date valide d'inspection et adaptés à la cargaison. Les extincteurs ADR doivent être : homologués, en bon état, vérifiés périodiquement (date de validité visible), adaptés au type de cargaison. Au minimum : 1 extincteur de 2 kg de poudre AB pour cabine + 1 ou 2 extincteurs selon le type de véhicule."},

{id:4152,prog:'ADR',theme:'adr-cls',d:1,
e:"La Classe 2 de l'ADR concerne :",
r:[{t:"Les matières explosibles"},{t:"Les gaz (comprimés, liquéfiés, dissous)",ok:true},{t:"Les liquides inflammables"},{t:"Les matières solides inflammables"}],
x:"Bonne réponse : Les gaz (comprimés, liquéfiés, dissous). Classe 2 = les gaz. Elle se subdivise en : gaz comprimés (ex : azote), gaz liquéfiés (ex : propane), gaz liquéfiés réfrigérés (ex : oxygène liquide), gaz dissous (ex : acétylène). Risques : explosion, asphyxie, inflammabilité."},

{id:4153,prog:'ADR',theme:'adr-gen',d:2,
e:"Les marchandises de la Classe 4.3 (dégagement de gaz inflammables au contact de l'eau) :",
r:[{t:"Peuvent être éteintes avec de l'eau en cas d'incendie"},{t:"Ne doivent jamais entrer en contact avec l'eau — le code X devant le Kemler indique ce danger",ok:true},{t:"Sont transportées dans des citernes réfrigérées"},{t:"Ne nécessitent pas de signalisation particulière"}],
x:"Bonne réponse : Ne doivent jamais entrer en contact avec l'eau — le code X devant le Kemler indique ce danger. La Classe 4.3 regroupe les matières qui, au contact de l'eau, dégagent des gaz inflammables (ex : carbure de calcium, lithium métallique, sodium). Le transport de ces matières est signalé par le code 'X' devant le numéro Kemler (ex : X423). L'eau est absolument contre-indiquée pour l'extinction."},

{id:4154,prog:'ADR',theme:'adr-cls',d:2,
e:"L'acétylène dissous (bouteilles de soudure) est classé :",
r:[{t:"Classe 2, code 2F (gaz inflammable comprimé)"},{t:"Classe 2, code 2AF (gaz dissous inflammable)",ok:true},{t:"Classe 3"},{t:"Classe 4.1"}],
x:"Bonne réponse : Classe 2, code 2AF (gaz dissous inflammable). L'acétylène (ONU 1001) est dissous dans l'acétone et stocké dans une masse poreuse dans la bouteille. Son code est 2AF (2 = gaz, A = asphyxiant, F = inflammable... mais en réalité le code ADR pour l'acétylène dissous est 2AF). Il est extrêmement inflammable et sensible aux chocs. Les bouteilles ne doivent pas être stockées allongées."},

{id:4155,prog:'ADR',theme:'adr-cls',d:2,
e:"L'hydrogène gazeux comprimé (ONU 1049) est classé :",
r:[{t:"Classe 2, code 1F (inflammable)",ok:true},{t:"Classe 3"},{t:"Classe 4.3"},{t:"Classe 9"}],
x:"Bonne réponse : Classe 2, code 1F (inflammable). L'hydrogène gazeux comprimé est classé Classe 2, code 1F (gaz comprimé inflammable). C'est le gaz le plus léger (14 fois plus léger que l'air), très inflammable (large plage d'inflammabilité : 4-75 %). Son transport nécessite des bouteilles haute pression ou des tubes. Il prend de l'importance avec le développement des véhicules à pile à combustible."},

{id:4156,prog:'ADR',theme:'adr-cls',d:2,
e:"Le gazole (diesel) est classé :",
r:[{t:"Classe 3, ONU 1203, GE II"},{t:"Classe 3, ONU 1202, GE III",ok:true},{t:"Classe 5.1, comburant"},{t:"Classe 9"}],
x:"Bonne réponse : Classe 3, ONU 1202, GE III. Le gazole (fuel oil, diesel) est classé Classe 3, ONU 1202, Groupe d'emballage III (point d'éclair entre 55 et 75°C selon le type). Il est moins dangereux que l'essence (GE II) car son point d'éclair est plus élevé. Kemler : 30 (liquide inflammable)."},

{id:4157,prog:'ADR',theme:'adr-doc',d:1,
e:"Les consignes écrites ADR (EN CAS D'ACCIDENT) doivent se trouver :",
r:[{t:"Dans la boîte à gants ou à portée du conducteur",ok:true},{t:"Dans le bureau de l'entreprise"},{t:"Dans le chargement avec les marchandises"},{t:"Elles ne sont pas obligatoires en France"}],
x:"Bonne réponse : Dans la boîte à gants ou à portée du conducteur. Les consignes écrites doivent être accessibles à portée du conducteur (souvent dans la cabine, boîte à gants ou sous le siège). Elles décrivent les mesures à prendre en cas d'accident, d'incendie ou de fuite selon chaque marchandise transportée."},

{id:4158,prog:'ADR',theme:'adr-gen',d:3,
e:"La quantité maximale totale de marchandises dangereuses par unité de transport sans application de l'ADR (seuil d'exemption totale) est liée aux :",
r:[{t:"Points de transport calculés selon les catégories de transport",ok:true},{t:"Kilogrammes bruts de marchandises"},{t:"Nombre de colis transportés"},{t:"Volume en litres de la marchandise"}],
x:"Bonne réponse : Points de transport calculés selon les catégories de transport. Le système des points (1.1.3.6 de l'ADR) permet de calculer si une exemption totale s'applique. Chaque marchandise est affectée d'un facteur multiplicateur (50, 3, 1 ou 0) selon sa catégorie de transport. Si le total ≤ 1000 points, exemption totale."},

{id:4159,prog:'ADR',theme:'adr-cls',d:1,
e:"La classe des liquides inflammables en ADR est la :",
r:[{t:"Classe 2"},{t:"Classe 3",ok:true},{t:"Classe 4.1"},{t:"Classe 5.1"}],
x:"Bonne réponse : Classe 3. La Classe 3 de l'ADR regroupe les liquides inflammables : matières liquides dont le point d'éclair est ≤ 60°C (inclus). Exemples : essence (ONU 1203), éthanol (ONU 1170), acétone (ONU 1090), peintures (ONU 1263), kérosène (ONU 1223). Le point d'éclair est le critère de classification principal."},

{id:4160,prog:'ADR',theme:'adr-gen',d:2,
e:"L'exemption de l'ADR pour les 'quantités limitées' (LQ) s'applique quand :",
r:[{t:"La quantité totale est < 1 tonne"},{t:"Chaque colis intérieur (unité primaire) ne dépasse pas la quantité limite définie pour la matière",ok:true},{t:"Le transport est local (< 50 km)"},{t:"Le conducteur n'a pas de certificat ADR"}],
x:"Bonne réponse : Chaque colis intérieur (unité primaire) ne dépasse pas la quantité limite définie pour la matière. Les quantités limitées (LQ) permettent une exemption de nombreuses obligations ADR quand chaque colis intérieur contient au maximum la quantité définie par colonne 7a du tableau A (généralement de 25 ml à 5L selon la matière). Le colis extérieur est limité à 30 kg maximum. Le marquage LQ (losange noir et blanc) remplace les étiquettes ADR."},

{id:4161,prog:'ADR',theme:'adr-sec',d:3,
e:"La mise à la masse (mise à terre) d'une citerne ADR lors du chargement/déchargement de produits inflammables est obligatoire pour :",
r:[{t:"Toutes les citernes ADR"},{t:"Les citernes contenant des liquides inflammables, pour dissiper les charges électrostatiques",ok:true},{t:"Uniquement les citernes de la Classe 1"},{t:"Uniquement lors des opérations nocturnes"}],
x:"Bonne réponse : Les citernes contenant des liquides inflammables, pour dissiper les charges électrostatiques. La mise à la masse (earthing/bonding) est obligatoire lors du chargement/déchargement de liquides inflammables en citerne pour prévenir les étincelles dues aux charges électrostatiques générées par l'écoulement du liquide. Une étincelle dans une atmosphère explosive peut provoquer l'inflammation des vapeurs de carburant."},

{id:4162,prog:'ADR',theme:'adr-gen',d:2,
e:"Les consignes écrites ADR (instructions en cas d'accident) doivent être rédigées dans :",
r:[{t:"Uniquement en français"},{t:"La ou les langues comprises par le conducteur + langues officielles des pays traversés",ok:true},{t:"En anglais uniquement (langue internationale)"},{t:"Uniquement dans la langue du pays de destination"}],
x:"Bonne réponse : La ou les langues comprises par le conducteur + langues officielles des pays traversés. Les consignes écrites ADR doivent être rédigées dans une langue comprise par chaque membre de l'équipage ET dans les langues officielles de chaque pays de chargement, de transit et de déchargement."},

{id:4163,prog:'ADR',theme:'adr-emb',d:2,
e:"Le code emballage 4G désigne :",
r:[{t:"Un fût en acier"},{t:"Une caisse en fibres (carton ondulé ou non ondulé)",ok:true},{t:"Un sac en plastique"},{t:"Un bidon en plastique"}],
x:"Bonne réponse : Une caisse en fibres (carton ondulé ou non ondulé). Le code d'emballage ADR suit une nomenclature précise : le premier chiffre indique le type (1=fût, 2=tonnelet, 3=jerrican, 4=caisse, 5=sac, 6=emballage composite) et les lettres le matériau (A=acier, B=aluminium, C=bois naturel, D=contreplaqué, F=matière fibreuse/carton, G=carton, H=plastique, M=papier kraft). 4G = caisse en carton (fibres)."},

{id:4164,prog:'ADR',theme:'adr-sec',d:2,
e:"En cas d'accident avec renversement d'un véhicule ADR, la première priorité est :",
r:[{t:"Identifier la marchandise pour appeler les bons secours"},{t:"Protéger la zone (baliser), alerter les secours et consulter les consignes écrites",ok:true},{t:"Tenter de redresser le véhicule"},{t:"Prendre des photos pour l'assurance"}],
x:"Bonne réponse : Protéger la zone (baliser), alerter les secours et consulter les consignes écrites. En cas d'accident ADR : 1. SÉCURISER (couper le moteur, ne pas fumer, baliser à distance) 2. ALERTER (112, pompiers NRBC si nécessaire) 3. Consulter les CONSIGNES ÉCRITES pour les mesures adaptées à la marchandise 4. Ne PAS tenter de réparer ou redresser seul — attendre les secours spécialisés."},

{id:4165,prog:'ADR',theme:'adr-gen',d:1,
e:"Le conseiller à la sécurité pour le transport de marchandises dangereuses (CSTMD) est obligatoire pour toute entreprise qui :",
r:[{t:"Transporte plus de 10 tonnes de MD par an"},{t:"Expédie, conditionne, charge, remplit ou transporte des marchandises dangereuses",ok:true},{t:"Possède plus de 5 véhicules"},{t:"Réalise uniquement du transport international"}],
x:"Bonne réponse : Expédie, conditionne, charge, remplit ou transporte des marchandises dangereuses. Toute entreprise dont l'activité comprend l'expédition, le chargement, le remplissage, le conditionnement, l'emballage ou le transport de marchandises dangereuses doit désigner un CSTMD. Ce conseiller peut être interne ou externe à l'entreprise."},

{id:4166,prog:'ADR',theme:'adr-cls',d:2,
e:"Le peroxyde d'hydrogène à 60 % (eau oxygénée concentrée) appartient à :",
r:[{t:"Classe 5.1 — comburant",ok:true},{t:"Classe 8 — corrosif"},{t:"Classe 5.2 — peroxydes organiques"},{t:"Classe 3 — liquide inflammable"}],
x:"Bonne réponse : Classe 5.1 — comburant. Le peroxyde d'hydrogène (H2O2) à des concentrations > 60 % est classé Classe 5.1 (matière comburante), ONU 2015. À des concentrations entre 8 et 60 %, c'est aussi la Classe 5.1 avec des exigences différentes (ONU 2014). En dessous de 8 %, il n'est pas soumis à l'ADR. Le H2O2 est également corrosif (risque subsidiaire Classe 8)."},

{id:4167,prog:'ADR',theme:'adr-cls',d:1,
e:"La Classe 8 de l'ADR concerne :",
r:[{t:"Les matières radioactives"},{t:"Les matières corrosives",ok:true},{t:"Les matières toxiques"},{t:"Les matières infectieuses"}],
x:"Bonne réponse : Les matières corrosives. Classe 8 = matières corrosives. Ce sont des matières qui, par action chimique, peuvent causer des lésions graves aux tissus vivants ou endommager d'autres marchandises. Ex : acide sulfurique, soude caustique. Pictogramme : liquide corrosif sur deux surfaces."},

{id:4168,prog:'ADR',theme:'adr-emb',d:2,
e:"Les grandes récipients pour vrac (GRV ou IBC) sont identifiés par leur code commençant par :",
r:[{t:"1A, 2A, 3A…"},{t:"11A, 11B, 31H1…",ok:true},{t:"GRV-01, GRV-02…"},{t:"L'emballeur les numérote librement"}],
x:"Bonne réponse : 11A, 11B, 31H1…. Le code des GRV (Grands Récipients pour Vrac, IBC = Intermediate Bulk Container) commence par le nombre indiquant le type (11 = rigide en acier, 21 = rigide en bois, 31 = rigide en plastique, 41 = souple…) suivi d'une ou deux lettres pour le matériau. Ex : 31H1 = GRV rigide en plastique avec paroi non amovible. Capacité typique : 500L à 3 000L."},

{id:4169,prog:'ADR',theme:'adr-sig',d:2,
e:"L'étiquette de la Classe 6.2 (matières infectieuses) représente :",
r:[{t:"Un crâne avec tibias croisés"},{t:"Trois cercles (symbole biologique) sur fond blanc/noir avec '6' dans le coin",ok:true},{t:"Une croix de Genève rouge"},{t:"Un triangle jaune avec point d'exclamation"}],
x:"Bonne réponse : Trois cercles (symbole biologique) sur fond blanc/noir avec '6' dans le coin. L'étiquette de la Classe 6.2 (matières infectieuses) porte le symbole biologique international (trois cercles entrelacés formant un triangle) sur fond blanc, avec le chiffre 6 dans le coin inférieur. La couleur de fond est blanche ou la moitié blanche, distinguant cette sous-classe des matières toxiques (Classe 6.1, tête de mort sur fond blanc)."},

{id:4170,prog:'ADR',theme:'adr-cls',d:1,
e:"La classe des gaz comprimés, liquéfiés ou dissous en ADR est la :",
r:[{t:"Classe 1"},{t:"Classe 2",ok:true},{t:"Classe 4.2"},{t:"Classe 5.1"}],
x:"Bonne réponse : Classe 2. La Classe 2 de l'ADR regroupe tous les gaz : comprimés (azote, hélium, air comprimé), liquéfiés (propane, butane, chlore, ammoniac), liquéfiés réfrigérés (azote liquide, CO2 liquide réfrigéré) et dissous (acétylène). Chaque sous-groupe a des codes de classification spécifiques."},

{id:4171,prog:'ADR',theme:'adr-cls',d:2,
e:"Le peroxyde d'hydrogène (eau oxygénée) à 50% est classé :",
r:[{t:"Classe 8"},{t:"Classe 5.1 — comburant (ONU 2014)",ok:true},{t:"Classe 3"},{t:"Classe 9"}],
x:"Bonne réponse : Classe 5.1 — comburant (ONU 2014). Le peroxyde d'hydrogène (H2O2) à des concentrations entre 8 % et 60 % est classé Classe 5.1 (comburant), ONU 2014. À plus de 60 %, c'est ONU 2015 (plus dangereux). C'est aussi un risque secondaire corrosif (Classe 8). En dessous de 8 %, non soumis à l'ADR."},

{id:4172,prog:'ADR',theme:'adr-sig',d:3,
e:"Les plaques-étiquettes sur les citernes mesurent :",
r:[{t:"100 × 100 mm"},{t:"250 × 250 mm minimum",ok:true},{t:"400 × 300 mm"},{t:"La même taille que les étiquettes de colis"}],
x:"Bonne réponse : 250 × 250 mm minimum. Les plaques-étiquettes de danger apposées sur les véhicules-citernes, conteneurs et wagons-citernes mesurent 250 mm × 250 mm minimum avec une ligne de bordure à 12,5 mm du bord. Elles reprennent les mêmes pictogrammes que les étiquettes de colis mais à plus grande échelle pour être visibles à distance."},

{id:4173,prog:'ADR',theme:'adr-gen',d:3,
e:"Le principe de séparation des charges incompatibles interdit notamment de charger ensemble :",
r:[{t:"Deux emballages de même classe"},{t:"Les explosifs (Cl.1) et les liquides inflammables (Cl.3)",ok:true},{t:"Les corrosifs et les solides non dangereux"},{t:"Tout chargement de plus de 3 classes différentes"}],
x:"Bonne réponse : Les explosifs (Cl.1) et les liquides inflammables (Cl.3). Le tableau de séparation ADR (sous-section 7.5.2) liste les incompatibilités entre classes. Les explosifs (Cl.1) ne peuvent pas être transportés avec les liquides inflammables (Cl.3), les matières comburantes (Cl.5.1), ou les peroxydes organiques (Cl.5.2). En cas de doute, la règle est de séparer les classes dans des compartiments différents."},

{id:4174,prog:'ADR',theme:'adr-cls',d:1,
e:"L'essence sans plomb (carburant automobile) est classée :",
r:[{t:"Classe 3, ONU 1203, Groupe d'emballage I"},{t:"Classe 3, ONU 1203, Groupe d'emballage II",ok:true},{t:"Classe 3, ONU 1202, Groupe d'emballage III"},{t:"Classe 9, ONU 3166"}],
x:"Bonne réponse : Classe 3, ONU 1203, Groupe d'emballage II. L'essence (gasoline) est classée Classe 3 (liquide inflammable), ONU 1203, nom d'expédition 'ESSENCE', Groupe d'emballage II (point d'éclair entre -21°C et 23°C environ). Code de danger Kemler : 33 (liquide très inflammable). Le gazole (diesel) est ONU 1202, Classe 3, GE III (moins dangereux car PE > 55°C)."},

{id:4175,prog:'ADR',theme:'adr-cls',d:3,
e:"Le chlore gazeux liquéfié (ONU 1017) est classé :",
r:[{t:"Classe 3 — inflammable"},{t:"Classe 2, code 2TOC (gaz liquéfié toxique, comburant, corrosif)",ok:true},{t:"Classe 8 — corrosif uniquement"},{t:"Classe 6.1 — toxique uniquement"}],
x:"Bonne réponse : Classe 2, code 2TOC (gaz liquéfié toxique, comburant, corrosif). Le chlore (UN 1017) est un gaz liquéfié de la Classe 2 avec code 2TOC : liquéfié (2) + Toxique (T) + comburant (O) + Corrosif (C). C'est un gaz de guerre historique, extrêmement dangereux par inhalation. Son transport est très réglementé et réservé aux opérateurs spécialisés disposant d'équipements adaptés."},

{id:4176,prog:'ADR',theme:'adr-gen',d:1,
e:"Le numéro ONU est un nombre de :",
r:[{t:"2 chiffres"},{t:"4 chiffres",ok:true},{t:"6 chiffres"},{t:"Variable selon la classe"}],
x:"Bonne réponse : 4 chiffres. Le numéro ONU (ou numéro UN) est un numéro d'identification à 4 chiffres attribué à chaque matière ou groupe de matières dangereuses. Il est identique quel que soit le mode de transport (route, rail, air, mer) et partout dans le monde."},

{id:4177,prog:'ADR',theme:'adr-gen',d:1,
e:"L'ADR est révisé tous les :",
r:[{t:"Ans"},{t:"2 ans (années impaires), entrée en vigueur le 1er janvier suivant",ok:true},{t:"5 ans"},{t:"À la demande des États"}],
x:"Bonne réponse : 2 ans (années impaires), entrée en vigueur le 1er janvier suivant. L'ADR est révisé tous les deux ans (années impaires : 2023, 2025…). La nouvelle édition entre en vigueur le 1er janvier de l'année paire suivante avec un délai de transition de 6 mois pour permettre l'adaptation des entreprises."},

{id:4178,prog:'ADR',theme:'adr-cls',d:1,
e:"L'acide sulfurique concentré (ONU 1830) appartient à la classe :",
r:[{t:"Classe 3"},{t:"Classe 8 — matières corrosives",ok:true},{t:"Classe 5.1"},{t:"Classe 6.1"}],
x:"Bonne réponse : Classe 8 — matières corrosives. L'acide sulfurique concentré (H2SO4) est une matière corrosive de Classe 8, groupe d'emballage II. Il détruit les tissus vivants et attaque la plupart des métaux. Il est également toxique par inhalation (vapeurs d'H2SO4). Sa manutention exige des EPI complets (combinaison, gants, lunettes de protection, appareil respiratoire)."},

{id:4179,prog:'ADR',theme:'adr-sec',d:1,
e:"L'extincteur requis dans la cabine d'un véhicule ADR doit contenir minimum :",
r:[{t:"1 kg de poudre"},{t:"2 kg de poudre ou équivalent",ok:true},{t:"5 kg de CO2"},{t:"6 kg de poudre"}],
x:"Bonne réponse : 2 kg de poudre ou équivalent. Pour tout transport de MD en colis (hors citerne), un extincteur de 2 kg de poudre polyvalente (ou agent équivalent) doit se trouver dans la cabine. Un extincteur supplémentaire dans le compartiment marchandises peut être requis selon les classes transportées. Ces extincteurs doivent être vérifiés périodiquement."},

{id:4180,prog:'ADR',theme:'adr-sig',d:2,
e:"Un véhicule transportant une seule marchandise dangereuse en citerne affiche :",
r:[{t:"Uniquement une plaque orange vierge à l'avant"},{t:"Une plaque avec numéro de danger (haut) + numéro ONU (bas) sur les côtés et à l'arrière",ok:true},{t:"Uniquement les étiquettes de danger"},{t:"Aucun marquage si le volume est inférieur à 1 000 litres"}],
x:"Bonne réponse : Une plaque avec numéro de danger (haut) + numéro ONU (bas) sur les côtés et à l'arrière. Pour un transport en citerne d'une seule matière, les plaques orange avec codes doivent être placées de chaque côté et à l'arrière de la citerne. À l'avant du véhicule, une plaque orange sans code suffit."},

{id:4181,prog:'ADR',theme:'adr-sec',d:2,
e:"En cas de fuite d'un gaz toxique depuis une citerne, les secours doivent se positionner :",
r:[{t:"Face au vent (vers la source)"},{t:"En position sous le vent à grande distance (depuis le côté opposé à la direction du vent)",ok:true},{t:"À 10 m maximum"},{t:"N'importe où — le vent ne change pas la dangerosité"}],
x:"Bonne réponse : En position sous le vent à grande distance (depuis le côté opposé à la direction du vent). En cas de fuite de gaz toxique, le nuage se disperse dans le sens du vent. Les secours doivent se positionner SOUS LE VENT (donc dos au vent, le nuage s'éloigne d'eux) et à grande distance. La zone d'exclusion est plus grande dans la direction du vent. La force et la direction du vent sont les premiers paramètres évalués lors d'une intervention sur un incident impliquant des gaz toxiques."},

{id:4182,prog:'ADR',theme:'adr-sig',d:2,
e:"Les plaques oranges sur une citerne transportant un seul produit dangereux indiquent :",
r:[{t:"Uniquement le numéro de danger"},{t:"Le numéro de danger (Kemler) en haut et le numéro ONU en bas",ok:true},{t:"Uniquement le numéro ONU"},{t:"Le nom de la matière"}],
x:"Bonne réponse : Le numéro de danger (Kemler) en haut et le numéro ONU en bas. Les plaques oranges codifiées sur une citerne montrent en partie supérieure le numéro de danger (Kemler, 2 ou 3 chiffres, ex : 33 pour très inflammable) et en partie inférieure le numéro ONU à 4 chiffres (ex : 1203 pour l'essence). Sur les véhicules transportant des colis multiples, seules des plaques oranges vierges (sans code) sont apposées à l'avant et à l'arrière."},

{id:4183,prog:'ADR',theme:'adr-doc',d:2,
e:"Les consignes écrites ADR doivent être conservées dans le véhicule :",
r:[{t:"Uniquement dans la cabine du conducteur"},{t:"Dans la cabine, accessibles au conducteur à tout moment pendant le transport",ok:true},{t:"Dans la boîte à outils du véhicule"},{t:"Transmises au destinataire avant livraison uniquement"}],
x:"Bonne réponse : Dans la cabine, accessibles au conducteur à tout moment pendant le transport. Les consignes écrites ADR (art. 5.4.3.4) doivent être conservées dans la cabine du conducteur et accessibles à tout moment pendant le transport. Elles doivent correspondre exactement aux matières transportées et être dans les langues appropriées. En cas de contrôle, leur absence constitue une infraction."},

{id:4184,prog:'ADR',theme:'adr-cls',d:2,
e:"La Classe 6.2 de l'ADR concerne :",
r:[{t:"Les matières radioactives"},{t:"Les matières toxiques"},{t:"Les matières infectieuses",ok:true},{t:"Les matières explosibles"}],
x:"Bonne réponse : Les matières infectieuses. Classe 6.2 = matières infectieuses susceptibles de causer des maladies chez l'homme ou l'animal (ex : cultures microbiennes, déchets médicaux, spécimens biologiques). Pictogramme : 3 croissants sur fond blanc."},

{id:4185,prog:'ADR',theme:'adr-cls',d:1,
e:"La Classe 3 de l'ADR concerne :",
r:[{t:"Les gaz inflammables"},{t:"Les liquides inflammables",ok:true},{t:"Les solides inflammables"},{t:"Les matières corrosives"}],
x:"Bonne réponse : Les liquides inflammables. Classe 3 = les liquides inflammables. Ex : essence (ONU 1203), éthanol, peintures. Le risque principal est l'incendie. Pictogramme : flamme sur fond rouge."},

{id:4186,prog:'ADR',theme:'adr-sig',d:2,
e:"Le numéro de danger '80' sur la plaque orange signifie :",
r:[{t:"Matière radioactive"},{t:"Matière corrosive",ok:true},{t:"Matière comburante"},{t:"Gaz toxique"}],
x:"Bonne réponse : Matière corrosive. Le chiffre 8 en ADR = corrosivité. Code 80 = matière corrosive. Code 88 = matière très corrosive (redoublement = intensification). Code 83 = corrosive et inflammable. Code 86 = corrosive et toxique. Code X80 = corrosif réagissant dangereusement avec l'eau (ne pas utiliser l'eau pour l'extinction)."},

{id:4187,prog:'ADR',theme:'adr-sec',d:3,
e:"L'interdiction de fumer s'applique à bord d'un véhicule ADR :",
r:[{t:"Uniquement pour les matières de Classe 1 (explosibles)"},{t:"Uniquement si la marchandise est inflammable"},{t:"Lors des opérations de chargement/déchargement et pendant tout le transport pour les MD de classes à risque incendie",ok:true},{t:"Uniquement dans les tunnels"}],
x:"Bonne réponse : Lors des opérations de chargement/déchargement et pendant tout le transport pour les MD de classes à risque incendie. L'interdiction de fumer s'applique lors des opérations de chargement, de transport et de déchargement pour toutes les marchandises dont le transport peut créer un risque d'incendie ou d'explosion. Elle est généralement étendue à tout transport ADR."},

{id:4188,prog:'ADR',theme:'adr-sig',d:2,
e:"Les étiquettes de danger sur les colis ADR ont une taille minimale de :",
r:[{t:"50 × 50 mm"},{t:"100 × 100 mm",ok:true},{t:"200 × 200 mm"},{t:"La taille n'est pas réglementée"}],
x:"Bonne réponse : 100 × 100 mm. Les étiquettes de danger (losanges) doivent avoir une taille minimale de 100 mm × 100 mm avec une ligne de bordure à 5 mm du bord. Pour les très petits colis qui ne peuvent pas recevoir des étiquettes de taille réglementaire, des étiquettes réduites sont autorisées."},

{id:4189,prog:'ADR',theme:'adr-gen',d:2,
e:"Les 5 catégories de tunnel ADR (A à E) définissent :",
r:[{t:"La longueur maximale des tunnels"},{t:"Le type de marchandises dont le transport est autorisé ou interdit dans chaque tunnel",ok:true},{t:"La vitesse maximale dans les tunnels"},{t:"Le nombre de véhicules pouvant circuler simultanément"}],
x:"Bonne réponse : Le type de marchandises dont le transport est autorisé ou interdit dans chaque tunnel. Les catégories de tunnel ADR (A = pas de restriction spécifique à E = restrictions maximales) définissent quelles marchandises dangereuses peuvent y transiter. La catégorie est indiquée sur les panneaux de signalisation à l'entrée du tunnel."},

{id:4190,prog:'ADR',theme:'adr-emb',d:3,
e:"Un GRV rigide de type 31H1 est :",
r:[{t:"Un fût en acier à fond non amovible"},{t:"Un GRV rigide en plastique à fond non amovible",ok:true},{t:"Un GRV composite avec récipient intérieur en plastique"},{t:"Un conteneur citerne de 1000L"}],
x:"Bonne réponse : Un GRV rigide en plastique à fond non amovible. Dans le code des GRV : 31 = GRV rigide fixe (pour liquides), H = plastique, 1 = fond non amovible. Donc 31H1 = GRV rigide en plastique à fond non amovible (remplissage et vidange par le haut). Le 31H2 est le même avec fond amovible. Ces GRV sont couramment utilisés pour les produits chimiques liquides."},

{id:4191,prog:'ADR',theme:'adr-cls',d:1,
e:"Les gaz liquéfiés réfrigérés (comme l'azote liquide) appartiennent à la :",
r:[{t:"Classe 2, division 3A (gaz asphyxiant réfrigéré)",ok:true},{t:"Classe 4.3"},{t:"Classe 6.1"},{t:"Classe 8"}],
x:"Bonne réponse : Classe 2, division 3A (gaz asphyxiant réfrigéré). Les gaz liquéfiés réfrigérés (cryogéniques) appartiennent à la Classe 2. Leurs codes de classification contiennent le chiffre '3' (liquéfié réfrigéré) suivi d'une lettre indiquant les propriétés : A=asphyxiant (ex: azote liquide ONU 1977), F=inflammable, O=comburant, T=toxique, TC=toxique+corrosif, TF=toxique+inflammable."},

{id:4192,prog:'ADR',theme:'adr-doc',d:3,
e:"En transport multimodal (route + ferry), les documents ADR doivent :",
r:[{t:"Être remplacés par des documents maritimes"},{t:"Rester valables, et des documents IMDG complémentaires peuvent être requis pour la traversée maritime",ok:true},{t:"Être refaits à chaque changement de mode"},{t:"Être validés par la douane portuaire"}],
x:"Bonne réponse : Rester valables, et des documents IMDG complémentaires peuvent être requis pour la traversée maritime. Pour un transport multimodal incluant un ferry, les documents ADR routiers restent valables. Cependant, pour la partie maritime, les exigences du Code IMDG (transport maritime) s'appliquent également. Des documents complémentaires peuvent être requis par la compagnie maritime (déclaration de marchandises dangereuses maritime). Les obligations ADR reprennent dès le débarquement."},

{id:4193,prog:'ADR',theme:'adr-cls',d:2,
e:"Les matières auto-échauffantes (Classe 4.2) incluent notamment :",
r:[{t:"L'essence et le kérosène"},{t:"Le charbon actif humide et l'huile de poisson",ok:true},{t:"Le chlore et le brome"},{t:"Le nitrate d'ammonium"}],
x:"Bonne réponse : Le charbon actif humide et l'huile de poisson. La Classe 4.2 (matières sujettes à l'inflammation spontanée) comprend les matières qui s'échauffent spontanément au contact de l'air et peuvent s'enflammer : charbon actif humide, farines animales et végétales, huile de lin, coprah, graines oléagineuses. Elles nécessitent des précautions de stockage et de transport particulières."},

{id:4194,prog:'ADR',theme:'adr-sec',d:3,
e:"La température de transport maximale pour un peroxyde organique de type F (risque d'explosion) est définie par :",
r:[{t:"La même règle pour tous les peroxydes"},{t:"La TDAA (Température de Décomposition Auto-Accélérée) propre à chaque produit",ok:true},{t:"La loi ADR à 0°C systématiquement"},{t:"La température du pays de destination"}],
x:"Bonne réponse : La TDAA (Température de Décomposition Auto-Accélérée) propre à chaque produit. La TDAA (SADT en anglais : Self-Accelerating Decomposition Temperature) est la température minimale à partir de laquelle la décomposition exothermique d'un peroxyde organique ou d'une matière auto-réactive devient auto-accélérée (s'emballe). La température de transport critique (Tc) est fixée à TDAA - 10°C. Les véhicules doivent maintenir la température en dessous de Tc."},

{id:4195,prog:'ADR',theme:'adr-sec',d:2,
e:"En cas de projection d'acide corrosif (Classe 8) sur la peau, il faut :",
r:[{t:"Appliquer du bicarbonate pour neutraliser"},{t:"Retirer les vêtements contaminés et rincer abondamment à l'eau (min 15 min)",ok:true},{t:"Couvrir la brûlure avec un pansement sec"},{t:"Frotter avec une serviette sèche"}],
x:"Bonne réponse : Retirer les vêtements contaminés et rincer abondamment à l'eau (min 15 min). En cas de projection d'acide ou base corrosive : 1) Retirer immédiatement les vêtements contaminés, 2) Rincer ABONDAMMENT à l'eau claire pendant 15-20 minutes minimum (ne jamais neutraliser chimiquement car la réaction de neutralisation est exothermique et aggrave les brûlures), 3) Appeler le 15/112, 4) Montrer les consignes écrites aux secours."},

{id:4196,prog:'ADR',theme:'adr-sig',d:1,
e:"Les plaques oranges réfléchissantes signalant un transport ADR ont des dimensions de :",
r:[{t:"200 mm × 150 mm"},{t:"400 mm × 300 mm",ok:true},{t:"600 mm × 400 mm"},{t:"100 mm × 100 mm"}],
x:"Bonne réponse : 400 mm × 300 mm. Les plaques oranges réfléchissantes ADR mesurent 400 mm × 300 mm avec une bordure noire de 15 mm. Elles doivent être visibles, propres et plates (non endommagées)."},

{id:4197,prog:'ADR',theme:'adr-cls',d:2,
e:"L'ONU 2794 (batteries au plomb, contenant de l'acide) est classé :",
r:[{t:"Classe 3 — inflammable"},{t:"Classe 8 — corrosif",ok:true},{t:"Classe 9 — divers"},{t:"Classe 6.1 — toxique"}],
x:"Bonne réponse : Classe 8 — corrosif. Les batteries au plomb mouillées (électrolyte acide) sont classées Classe 8 (matière corrosive), ONU 2794. Elles doivent être transportées dans une position spécifique (verticale), dans des emballages résistant aux acides, avec des étiquettes Classe 8. Des exemptions sont possibles pour les petites quantités selon des conditions strictes."},

{id:4198,prog:'ADR',theme:'adr-cls',d:2,
e:"L'ammoniac anhydre (ONU 1005) est classé :",
r:[{t:"Classe 3"},{t:"Classe 2, code 2TC (gaz toxique et corrosif)",ok:true},{t:"Classe 8 uniquement"},{t:"Classe 6.1 uniquement"}],
x:"Bonne réponse : Classe 2, code 2TC (gaz toxique et corrosif). L'ammoniac anhydre est un gaz liquéfié de Classe 2, code 2TC (gaz liquéfié Toxique et Corrosif). C'est un gaz très toxique par inhalation (LC50 très basse) et corrosif pour les muqueuses. Son transport nécessite des citernes spécialement conçues et une formation ADR renforcée avec module citerne."},

{id:4199,prog:'ADR',theme:'adr-cls',d:3,
e:"Le nitrate d'ammonium (engrais agricole, concentration > 34,4 %) est classé :",
r:[{t:"Classe 3 — inflammable"},{t:"Classe 5.1 — comburant",ok:true},{t:"Classe 1 — explosif"},{t:"Classe 8 — corrosif"}],
x:"Bonne réponse : Classe 5.1 — comburant. Le nitrate d'ammonium en engrais est classé Classe 5.1 (comburant), ONU 2067 (pour les engrais à base de nitrate d'ammonium). À des concentrations et dans des conditions particulières, il peut devenir explosif (Classe 1, ONU 0222). La classification précise dépend de la teneur en azote et des additifs. La tragédie de Beyrouth (2020) impliquait du nitrate d'ammonium."},

{id:4200,prog:'ADR',theme:'adr-emb',d:3,
e:"Un suremballage (overpack) regroupant des colis ADR doit :",
r:[{t:"Avoir sa propre homologation UN"},{t:"Porter les marquages/étiquettes de tous les colis contenus + mention SUREMBALLAGE",ok:true},{t:"N'avoir que l'étiquette de la classe principale"},{t:"Aucun marquage spécifique"}],
x:"Bonne réponse : Porter les marquages/étiquettes de tous les colis contenus + mention SUREMBALLAGE. Un suremballage (art. 5.1.2.1 ADR) regroupant plusieurs colis de MD doit porter : tous les numéros ONU des matières, tous les noms d'expédition, toutes les étiquettes de danger de tous les colis contenus, et la mention 'OVERPACK' ou 'SUREMBALLAGE'. Il ne nécessite pas de marquage homologué UN propre."},

{id:4201,prog:'ADR',theme:'adr-gen',d:2,
e:"Le CSTMD doit rédiger un rapport d'accident lorsque :",
r:[{t:"Tout incident de transport, même mineur"},{t:"Un incident impliquant des pertes de matières dangereuses, des blessés ou des dommages importants",ok:true},{t:"Uniquement lors d'accidents mortels"},{t:"Uniquement pour les Classes 1 et 7"}],
x:"Bonne réponse : Un incident impliquant des pertes de matières dangereuses, des blessés ou des dommages importants. Le CSTMD doit établir un rapport d'accident (art. 1.8.3.6 ADR) après tout incident ou accident survenu pendant le transport qui implique des pertes de matières dangereuses ou qui a causé des dommages à des personnes, des biens ou à l'environnement. Ce rapport est distinct du rapport annuel et est adressé à la direction de l'entreprise."}
];

// ═══════════════════════════════════════════════════
// MOTEUR ADAPTATIF — QuestionEngine
// ═══════════════════════════════════════════════════
class QuestionEngine {
  constructor(bank) {
    this.bank = bank || [];
    this.history = this._loadHistory();
  }

  _loadHistory() {
    try { return JSON.parse(localStorage.getItem('ftr_q_history') || '{}'); }
    catch(e) { return {}; }
  }

  _saveHistory() {
    try { localStorage.setItem('ftr_q_history', JSON.stringify(this.history)); }
    catch(e) {}
  }

  getByTheme(themeId) {
    return this.bank.filter(q => q.theme === themeId);
  }

  getThemeStats(themeId) {
    const qs = this.getByTheme(themeId);
    let seen = 0, correct = 0;
    qs.forEach(q => {
      const h = this.history[q.id];
      if (h) { seen++; correct += h.correct || 0; }
    });
    const pct = seen > 0 ? Math.round((correct / seen) * 100) : 0;
    return { seen, correct, total: qs.length, pct };
  }

  recordAnswer(qId, isCorrect) {
    if (!this.history[qId]) this.history[qId] = { seen: 0, correct: 0, wrong: 0 };
    this.history[qId].seen++;
    if (isCorrect) this.history[qId].correct++;
    else this.history[qId].wrong++;
    this._saveHistory();
  }

  getSmartSelection(themeId, count) {
    const pool = this.getByTheme(themeId);
    const scored = pool.map(q => {
      const h = this.history[q.id] || { seen: 0, wrong: 0 };
      let score = 1;
      if (h.seen === 0) score = 3;
      else if (h.wrong > 0) score = 2 + h.wrong;
      return { q, score };
    });
    scored.sort((a, b) => b.score - a.score + (Math.random() - 0.5) * 0.5);
    return scored.slice(0, count).map(s => s.q);
  }

  static shuffleAnswers(q) {
    const r = [...q.r];
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [r[i], r[j]] = [r[j], r[i]];
    }
    return { ...q, r };
  }
}
window.QuestionEngine = QuestionEngine;
