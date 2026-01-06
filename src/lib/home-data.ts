/**
 * Données statiques de la page d'accueil
 * 
 * Ce fichier contient toutes les constantes de données utilisées sur la page d'accueil.
 * Les icônes React sont référencées par leur identifiant et doivent être mappées
 * dans le composant qui utilise ces données.
 */

/* ============================================
   BARRE DE CONFIANCE
   ============================================ */

export const barreConfianceItems = [
  { valeur: "RGE", label: "Entreprise Certifiée" },
  { valeur: "10 Ans", label: "Garantie Décennale" },
  { valeur: "67", label: "Intervention Bas-Rhin" },
  { valeur: "+150", label: "Projets Réalisés" },
] as const;

/* ============================================
   PROFILS CLIENTS
   ============================================ */

export const profilsClients = [
  {
    id: "public",
    badge: "Collectivités",
    titre: "Marchés Publics",
    description:
      "Réactivité administrative, dossiers conformes (DC4), respect des délais en site occupé.",
    lien: "/marches-publics",
    lienTexte: "Accéder à l'espace dédié",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
  },
  {
    id: "pro",
    badge: null,
    titre: "Copro & Gestionnaires",
    description:
      "Rénovation de plateaux de bureaux, parties communes et remise en état locative rapide.",
    lien: "/contact",
    lienTexte: "Nos solutions Pro",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    id: "particulier",
    badge: null,
    titre: "Particuliers",
    description:
      "Isolation, plâtrerie et mise en peinture pour valoriser votre habitat sans stress.",
    lien: "/services",
    lienTexte: "Voir les services",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
  },
] as const;

/* ============================================
   SERVICES
   ============================================ */

export const services = [
  {
    id: "platrerie",
    titre: "Plâtrerie",
    accroche: "Redistribuez vos volumes sans gros œuvre.",
    tag: "TECHNIQUE",
    tagColor: "bg-brand-blue",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&h=400&fit=crop",
    imageAlt: "Travaux de plâtrerie et création de cloisons",
    prestations: ["Cloisons sèches", "Faux-plafonds", "Doublage murs"],
    lien: "/services/platrerie",
    iconeColor: "orange",
    iconeId: "platrerie", // Identifiant pour mapper l'icône React
  },
  {
    id: "isolation",
    titre: "Isolation",
    accroche: "Réduisez votre facture énergétique de 30%.",
    tag: "ÉCONOMIES",
    tagColor: "bg-green-600",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    imageAlt: "Travaux d'isolation thermique certifiés RGE",
    prestations: [
      "Isolation Thermique (ITI)",
      "Isolation Phonique",
      "Combles perdus",
    ],
    lien: "/services/isolation",
    iconeColor: "blue",
    iconeId: "isolation", // Identifiant pour mapper l'icône React
  },
  {
    id: "peinture",
    titre: "Peinture & Déco",
    accroche: "Des murs lisses et des finitions durables.",
    tag: "FINITIONS",
    tagColor: "bg-purple-600",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    imageAlt: "Travaux de peinture et décoration intérieure",
    prestations: [
      "Peinture intérieure",
      "Revêtements muraux",
      "Finitions soignées",
    ],
    lien: "/services/amenagement",
    iconeColor: "orange",
    iconeId: "peinture", // Identifiant pour mapper l'icône React
  },
  {
    id: "enduits",
    titre: "Enduits",
    accroche: "Préparation parfaite pour vos finitions.",
    tag: "PREPARATION",
    tagColor: "bg-amber-600",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
    imageAlt: "Travaux d'enduits et préparation des supports",
    prestations: ["Ratissage complet", "Préparation support", "Lissage murs"],
    lien: "/services/enduits-finitions",
    iconeColor: "blue",
    iconeId: "enduits", // Identifiant pour mapper l'icône React
  },
] as const;

/* ============================================
   ARGUMENTS "POURQUOI NOUS CHOISIR"
   ============================================ */

export const argumentsChoix = [
  {
    titre: "Chantier Propre & Protégé",
    description:
      "Nous respectons les lieux (bâchage complet, nettoyage quotidien). Zéro poussière laissée.",
    iconeId: "chantier-propre", // Identifiant pour mapper l'icône React
    couleurType: "green",
  },
  {
    titre: "Respect strict du planning",
    description:
      "Une date annoncée est une date tenue. Crucial pour les appels d'offres et vos emménagements.",
    iconeId: "planning", // Identifiant pour mapper l'icône React
    couleurType: "blue",
  },
  {
    titre: "Finitions Soignées",
    description:
      "Murs lisses, angles parfaits. L'exigence de la qualité pour un rendu durable.",
    iconeId: "finitions", // Identifiant pour mapper l'icône React
    couleurType: "amber",
  },
  {
    titre: "Devis Clair & Détaillé",
    description:
      "Pas de mauvaise surprise. Tout est chiffré avant démarrage.",
    iconeId: "devis", // Identifiant pour mapper l'icône React
    couleurType: "purple",
  },
] as const;

/* ============================================
   ÉTAPES DE LA MÉTHODE DE TRAVAIL
   ============================================ */

export const etapesMethode = [
  { 
    numero: 1, 
    titre: "Prise de contact", 
    description: "Rapide par téléphone ou email.",
    iconeId: "prise-contact", // Identifiant pour mapper l'icône React
  },
  { 
    numero: 2, 
    titre: "Visite Technique", 
    description: "Analyse sur site pour métrés précis.",
    iconeId: "visite-technique", // Identifiant pour mapper l'icône React
  },
  { 
    numero: 3, 
    titre: "Devis & Planification", 
    description: "Validation du chiffrage et date d'intervention.",
    iconeId: "devis-planification", // Identifiant pour mapper l'icône React
  },
  { 
    numero: 4, 
    titre: "Réalisation & Réception", 
    description: "Travaux et validation de fin de chantier.",
    iconeId: "realisation", // Identifiant pour mapper l'icône React
  },
] as const;

/* ============================================
   DOCUMENTS MARCHÉS PUBLICS
   ============================================ */

export const documentsMarchesPublics = [
  { titre: "Attestation RGE", disponibilite: "Disponible" },
  { titre: "Décennale", disponibilite: "Disponible" },
  { titre: "Kbis & RC Pro", disponibilite: "Disponible" },
  { titre: "Références", disponibilite: "Sur demande" },
] as const;

/* ============================================
   AVIS CLIENTS
   ============================================ */

export const avisClients = [
  {
    texte:
      "Intervention rapide pour l'isolation de nos combles. Équipe très propre et polie. Je recommande.",
    auteur: "Jean M.",
    ville: "Strasbourg",
    date: "2024-01-15",
    note: 5,
  },
  {
    texte:
      "Nous avons fait appel à AR pour la rénovation de nos bureaux. Respect du planning, parfait.",
    auteur: "Sophie L.",
    ville: "Illkirch",
    date: "2024-02-20",
    note: 5,
  },
] as const;

/* ============================================
   VILLES D'INTERVENTION
   ============================================ */

export const villesIntervention = [
  "Strasbourg Centre",
  "Schiltigheim",
  "Illkirch-Graffenstaden",
  "Haguenau",
  "Sélestat",
  "Obernai",
] as const;

/* ============================================
   RÉALISATION FEATURED
   ============================================ */

export const realisationFeatured = {
  titre: "Rénovation complète Appartement",
  lieu: "Strasbourg Neudorf",
  metiers: "Plâtrerie, Isolation & Peinture",
  imageAvant: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&q=80",
  imageApres: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop&q=80",
} as const;

/* ============================================
   RÉALISATIONS MINIATURES
   ============================================ */

export const realisationsMiniatures = [
  {
    id: "combles-krutenau",
    titre: "Rénovation complète de combles",
    metier: "Isolation & Plâtrerie",
    lieu: "Strasbourg Krutenau",
    secteur: "particulier",
    description: "Création d'une suite parentale sous toiture avec gain thermique R=7.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "ecole-maternelle",
    titre: "Réfection acoustique - École Maternelle",
    metier: "Faux-Plafonds",
    lieu: "Eurométropole",
    secteur: "public",
    description: "Intervention en site occupé durant les vacances scolaires.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "maison-selestat",
    titre: "Rénovation thermique maison ancienne",
    metier: "Isolation Intérieure",
    lieu: "Sélestat",
    secteur: "particulier",
    description: "Traitement des ponts thermiques et doublage des murs.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "bureaux-illkirch",
    titre: "Aménagement plateau de bureaux",
    metier: "Cloisons & Plâtrerie",
    lieu: "Illkirch-Graffenstaden",
    secteur: "particulier",
    description: "Création de 8 bureaux individuels avec isolation phonique renforcée.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80",
  },
] as const;

