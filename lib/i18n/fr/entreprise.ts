/**
 * Dictionnaire FR — Plateforme Entreprise JobBook
 * Registre soutenu et institutionnel (spec §10).
 * Aucun texte d'interface ne doit être codé en dur dans les pages Entreprise.
 * Structure prête pour l'ajout d'une locale « en » ultérieure.
 */
export const entrepriseFr = {
  header: {
    space: "Espace Entreprise",
    account: "Kedge Capital",
    notifications: "Notifications",
    menu: "Ouvrir le menu",
  },

  nav: {
    sectionMain: "Pilotage",
    sectionOps: "Opérations",
    sectionAccount: "Compte",
    dashboard: "Tableau de bord",
    publier: "Publier une mission",
    offres: "Mes offres",
    candidatures: "Candidatures reçues",
    preselection: "Prestataires présélectionnés",
    missions: "Mes missions",
    messages: "Messages",
    paiements: "Paiements et reçus",
    evaluations: "Évaluations",
    profil: "Profil de l'Entreprise",
    assistance: "Assistance",
  },

  mobileNav: {
    dashboard: "Accueil",
    publier: "Publier",
    offres: "Mes offres",
    messages: "Messages",
    profil: "Profil",
  },

  dashboard: {
    eyebrow: "Centre de pilotage",
    greeting: "Bonjour, Kedge Capital",
    intro:
      "Voici la synthèse de votre activité. Nous vous invitons à traiter en priorité les décisions en attente.",
    kpiTitle: "Indicateurs de l'activité",
    kpi: {
      brouillons: "Offres en brouillon",
      paiementRequis: "Offres en paiement requis",
      publiees: "Offres publiées",
      nouvellesCandidatures: "Nouvelles candidatures",
      aExaminer: "Candidatures à examiner",
      preselectionnes: "Prestataires présélectionnés",
      aAttribuer: "Missions à attribuer",
      actives: "Missions actives",
      decisions: "Décisions requises",
      messages: "Messages non lus",
      recus: "Reçus disponibles",
    },
    decisionsTitle: "Actions requérant une décision",
    decisionsSub: "Interventions attendues de votre part",
    quickActionsTitle: "Actions rapides",
    quickActions: {
      publier: "Publier une mission",
      finaliser: "Finaliser un brouillon",
      payer: "Payer les frais",
      examiner: "Examiner les candidatures",
      comparer: "Comparer les prestataires",
      preselectionner: "Présélectionner",
    },
    missionsTitle: "Vos missions actives",
    missionsCount: "actives",
    labels: {
      candidatures: "Candidatures",
      cloture: "Clôture",
      reference: "Réf.",
      examiner: "Examiner",
      voirTout: "Voir tout",
    },
  },

  publier: {
    title: "Publier une mission",
    step: "Étape 3 sur 10",
    eyebrow: "Mandat institutionnel",
    sectionTitle: "Compétences & Périmètre",
    sectionIntro:
      "Veuillez définir les qualifications requises et les livrables attendus pour ce mandat.",
    intituleLabel: "Intitulé du mandat",
    intituleHint: "Visible dans le flux des experts accrédités après confirmation du paiement.",
    competencesLabel: "Compétences requises",
    competencesCount: "retenues",
    ajouterCompetence: "Ajouter une compétence",
    modaliteLabel: "Modalité d'exercice",
    modalites: {
      onsite: "Présentiel",
      hybrid: "Hybride",
      remote: "À distance",
    },
    honorairesLabel: "Honoraires prévisionnels",
    honorairesUnit: "FCFA / mois",
    baremeIndicatif: "Barème indicatif",
    confidentielTitle: "Mode confidentiel",
    confidentielSub: "Masquer l'identité de l'entreprise dans l'offre publiée.",
    paymentNotice:
      "La publication demeure suspendue jusqu'à la confirmation définitive du paiement des frais.",
    continuer: "Enregistrer et régler les frais",
    brouillon: "Enregistrer le brouillon",
  },

  offres: {
    title: "Mes offres",
    intro:
      "Retrouvez l'ensemble de vos offres selon leur statut. Une offre demeure invisible tant que son paiement n'a pas été confirmé.",
    groups: {
      brouillons: "Brouillons",
      paiementRequis: "Paiement requis",
      publiees: "Publiées",
    },
    labels: {
      reference: "Réf.",
      candidatures: "candidatures",
      cloture: "Clôture",
      montant: "Montant de référence",
      maj: "Mise à jour",
    },
    actions: {
      finaliser: "Finaliser",
      payer: "Régler les frais",
      examiner: "Examiner",
      modifier: "Modifier",
      voir: "Consulter",
    },
    statutInvisible: "Non visible par les prestataires",
    statutVisible: "Visible dans le flux",
    empty: "Aucune offre dans cette catégorie pour le moment.",
    newOffer: "Nouvelle mission",
  },

  candidatures: {
    title: "Candidatures reçues",
    eyebrow: "Appel d'offres restreint",
    missionTitle: "Audit comptable annuel & Consolidation IFRS",
    missionMeta: "Réf. KED-2024-09 · 24 candidatures reçues · Clôture 28 sept.",
    stats: {
      total: "Total",
      preselection: "Présélection",
      comparateur: "Comparateur",
    },
    tabs: {
      toutes: "Toutes",
      preselection: "Présélection",
      comparateur: "Comparateur",
    },
    labels: {
      match: "compatibilité",
      tjm: "TJM proposé",
      experience: "Expérience",
    },
    actions: {
      examiner: "Examiner le dossier",
      preselectionner: "Présélectionner",
      contacter: "Contacter",
    },
    escrowTitle: "Garantie Séquestre UEMOA",
    escrowText:
      "L'ensemble des règlements est protégé par dépôt fiduciaire, conformément à la réglementation BCEAO.",
  },

  paiements: {
    title: "Paiements et reçus",
    portalBadge: "Portail Agréé UEMOA",
    protocol: "Protocole TLS 1.3",
    mandatEyebrow: "Mandat exclusif",
    mandatTitle: "Audit comptable annuel & Consolidation IFRS",
    breakdownTitle: "Ventilation Financière Réglementaire",
    currency: "XOF (FCFA)",
    lignes: {
      reference: "Montant de référence mission",
      taux: "Taux réglementaire JobBook",
      tauxNote: "L'Entreprise règle le taux complet applicable ; il n'est jamais divisé.",
      frais: "Frais de publication & traitement",
    },
    totalLabel: "Total net à régler",
    totalNote: "TVA incluse selon directive WAEMU",
    disclaimer:
      "Le règlement autorise la publication de la mission. La visibilité de l'offre demeure conditionnée à la confirmation du paiement.",
    methodsTitle: "Moyen de règlement sécurisé",
    methodsNote: "Sans frais de transaction",
    methods: {
      card: "Carte Bancaire",
      transfer: "Virement Bancaire",
      mobile: "Mobile Money",
      cardDesc: "Visa, Mastercard, cartes corporate internationales",
      transferDesc: "Transfert SEPA / Wire international",
      mobileDesc: "Orange Money, MTN MoMo, Wave",
    },
    trust: {
      iso: "ISO 27001",
      escrow: "Séquestre UEMOA",
      receipt: "Reçu fiscal",
    },
    cta: "Confirmer le règlement sécurisé",
    receiptsTitle: "Reçus disponibles",
    receiptLabel: "Reçu",
    download: "Télécharger",
  },

  preselection: {
    title: "Prestataires présélectionnés",
    intro:
      "Retrouvez les prestataires que vous avez retenus pour un examen approfondi et une éventuelle sélection.",
    labels: {
      match: "compatibilité",
      tjm: "TJM proposé",
      mission: "Mission",
    },
    actions: {
      selectionner: "Sélectionner",
      retirer: "Retirer",
      examiner: "Examiner",
    },
    empty: "Vous n'avez présélectionné aucun prestataire pour le moment.",
  },

  missions: {
    title: "Mes missions",
    intro: "Suivez l'attribution et l'exécution de vos missions.",
    tabs: {
      aAttribuer: "À attribuer",
      actives: "Actives",
    },
    labels: {
      reference: "Réf.",
      prestataire: "Prestataire",
      echeance: "Échéance",
      progression: "Progression",
    },
    actions: {
      attribuer: "Attribuer",
      suivre: "Suivre",
      evaluer: "Évaluer",
    },
    empty: "Aucune mission dans cette catégorie.",
  },

  messages: {
    title: "Messages",
    intro: "Vos échanges sécurisés avec les prestataires.",
    search: "Rechercher une conversation",
    unread: "non lus",
    empty: "Aucune conversation pour le moment.",
    open: "Ouvrir la conversation",
  },

  evaluations: {
    title: "Évaluations",
    intro:
      "Consultez les évaluations émises à l'issue de vos missions et contribuez à la réputation de l'écosystème.",
    labels: {
      mission: "Mission",
      prestataire: "Prestataire",
      note: "Note",
    },
    actions: {
      evaluer: "Rédiger une évaluation",
      consulter: "Consulter",
    },
    empty: "Aucune évaluation disponible pour le moment.",
  },

  profil: {
    title: "Profil de l'Entreprise",
    intro:
      "Gérez les informations institutionnelles présentées aux prestataires et aux services de conformité.",
    sections: {
      identite: "Identité de l'entreprise",
      contact: "Coordonnées",
      conformite: "Conformité",
    },
    fields: {
      raisonSociale: "Raison sociale",
      secteur: "Secteur d'activité",
      pays: "Pays",
      email: "Adresse de contact",
      telephone: "Téléphone",
      registre: "Numéro d'immatriculation",
    },
    save: "Enregistrer les modifications",
  },

  assistance: {
    title: "Assistance",
    intro:
      "Notre équipe demeure à votre disposition pour toute question relative à votre espace Entreprise.",
    channels: {
      docTitle: "Centre de documentation",
      docDesc: "Consultez nos guides relatifs à la publication et à la sélection.",
      contactTitle: "Contacter un conseiller",
      contactDesc: "Un conseiller dédié vous répond sous 24 heures ouvrées.",
      statusTitle: "État des services",
      statusDesc: "Consultez la disponibilité de la plateforme en temps réel.",
    },
    action: "Accéder",
  },

  commun: {
    retour: "Retour",
    continuer: "Continuer",
    annuler: "Annuler",
    voirTout: "Voir tout",
    enregistrer: "Enregistrer",
    statut: "Statut",
    urgent: "Prioritaire",
  },
} as const;

export type EntrepriseDict = typeof entrepriseFr;
