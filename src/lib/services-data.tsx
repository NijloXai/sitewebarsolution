/**
 * Données centralisées pour les pages de services
 * 
 * Ce fichier contient toutes les données communes utilisées dans les différentes
 * pages de services pour éviter la duplication et faciliter la maintenance.
 */

import { ReactNode } from "react";
import {
  IconePriseContact,
  IconeDevisPlanification,
  IconeVisiteTechnique,
  IconeRealisation,
  IconeChantierPropre,
  IconePlanning,
  IconeFinitions,
  IconeDevis,
  IconeDossiersAdmin,
  IconeSiteOccupe,
  IconeInterlocuteurUnique,
  IconePlatrerie,
  IconeIsolation,
  IconePeinture,
  IconeEnduits,
} from "@/components/icons/ServiceIcons";

/* ============================================
   TYPES ET INTERFACES
   ============================================ */

export interface TrustBarItem {
  valeur: string;
  label: string;
}

export interface MethodeEtape {
  numero: number;
  titre: string;
  description: string;
  icone: ReactNode;
  badge?: string;
}

export interface RaisonChoisir {
  titre: string;
  description: string;
  icone: ReactNode;
  couleurType: "green" | "blue" | "amber" | "purple";
}

export interface FAQItem {
  question: string;
  reponse: string;
}

export interface AvantageMarchesPublics {
  icone: ReactNode;
  texte: string;
}

export interface DocumentMarchesPublics {
  titre: string;
  disponibilite: "Disponible" | "Sur demande";
}

export interface RealisationApercu {
  id: number;
  titre: string;
  lieu: string;
  description: string;
  image: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  accroche: string;
  tag: string;
  tagColor: string;
  image: string;
  imageAlt: string;
  points: string[];
  lien: string;
  iconeColor: "orange" | "blue";
  icone: ReactNode;
}

/* ============================================
   DONNÉES DES SERVICES PRINCIPAUX
   ============================================ */

/**
 * Données des 4 services principaux pour la page principale des services
 * Chaque carte affiche un aperçu du service avec lien vers la page détaillée
 */
export const servicesData: ServiceCard[] = [
  {
    id: "platrerie",
    title: "Plâtrerie & Faux-plafonds",
    accroche: "Redistribuez vos volumes sans gros œuvre.",
    tag: "TECHNIQUE",
    tagColor: "bg-brand-blue",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&h=400&fit=crop",
    imageAlt: "Travaux de plâtrerie et faux-plafonds",
    points: [
      "Cloisons sèches & distribution",
      "Faux-plafonds design/acoustiques",
      "Doublage des murs",
    ],
    lien: "/services/platrerie",
    iconeColor: "orange",
    icone: <IconePlatrerie />,
  },
  {
    id: "isolation",
    title: "Isolation Thermique & Phonique",
    accroche: "Réduisez votre facture énergétique de 30%.",
    tag: "ÉCONOMIES",
    tagColor: "bg-green-600",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
    imageAlt: "Travaux d'isolation thermique certifiés RGE",
    points: [
      "Laine de bois, verre ou roche",
      "Soufflage de combles",
      "Correction acoustique",
    ],
    lien: "/services/isolation",
    iconeColor: "blue",
    icone: <IconeIsolation />,
  },
  {
    id: "peinture",
    title: "Peinture & Décoration",
    accroche: "Des murs lisses et des finitions durables.",
    tag: "FINITIONS",
    tagColor: "bg-brand-blue",
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=600&h=400&fit=crop",
    imageAlt: "Travaux de peinture et finitions",
    points: [
      "Ratissage & Lissage complet",
      "Peintures écologiques (A+)",
      "Pose de revêtements muraux",
    ],
    lien: "/services/enduits-finitions",
    iconeColor: "orange",
    icone: <IconePeinture />,
  },
  {
    id: "amenagement",
    title: "Aménagement Intérieur",
    accroche: "Optimisez chaque m² de votre bien.",
    tag: "ESPACE",
    tagColor: "bg-brand-orange",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    imageAlt: "Aménagement intérieur et combles",
    points: [
      "Aménagement de combles",
      "Création de placards/dressings",
      "Agencement global",
    ],
    lien: "/services/amenagement",
    iconeColor: "blue",
    icone: <IconeEnduits />,
  },
];

/* ============================================
   DONNÉES DES BARRES DE CONFIANCE
   ============================================ */

/**
 * Barre de confiance générique pour la page principale des services
 */
export const barreConfianceGenerique: TrustBarItem[] = [
  { valeur: "RGE", label: "Certifié Qualibat" },
  { valeur: "10 Ans", label: "Garantie Décennale" },
  { valeur: "150+", label: "Chantiers Réalisés" },
  { valeur: "Alsace", label: "Intervention Rapide" },
];

/**
 * Barre de confiance spécifique pour l'aménagement/peinture
 */
export const barreConfianceAmenagement: TrustBarItem[] = [
  { valeur: "A+", label: "Peintures Écolabel" },
  { valeur: "10 Ans", label: "Garantie Décennale" },
  { valeur: "0%", label: "Tache Garantie" },
  { valeur: "Alsace", label: "Strasbourg & Environs" },
];

/**
 * Barre de confiance spécifique pour l'isolation
 */
export const barreConfianceIsolation: TrustBarItem[] = [
  { valeur: "RGE", label: "Qualibat Reconnu" },
  { valeur: "10 Ans", label: "Garantie Décennale" },
  { valeur: "-30%", label: "Économies Énergie" },
  { valeur: "Aides", label: "MaPrimeRénov'" },
];

/**
 * Barre de confiance spécifique pour les enduits/finitions
 */
export const barreConfianceEnduits: TrustBarItem[] = [
  { valeur: "RGE", label: "Qualibat Reconnu" },
  { valeur: "10 Ans", label: "Garantie Décennale" },
  { valeur: "Q4", label: "Finition Premium" },
  { valeur: "48h", label: "Devis Rapide" },
];

/* ============================================
   DONNÉES DE LA MÉTHODE EN 4 ÉTAPES
   ============================================ */

/**
 * Les 4 étapes du processus de travail expliquées simplement au client
 * Utilisé sur la page principale des services
 */
export const methodeEtapes: MethodeEtape[] = [
  {
    numero: 1,
    titre: "Contact & Visite",
    description: "Réponse sous 24h. Visite technique pour métré précis.",
    icone: <IconePriseContact />,
  },
  {
    numero: 2,
    titre: "Devis & Planning",
    description: "Devis détaillé par lot. Validation d'un planning réaliste.",
    icone: <IconeDevisPlanification />,
  },
  {
    numero: 3,
    titre: "Travaux Soignés",
    description: "Protections installées. Chantier nettoyé chaque soir.",
    badge: "Site Occupé OK",
    icone: <IconeVisiteTechnique />,
  },
  {
    numero: 4,
    titre: "Réception",
    description: "Validation des finitions. Activation de la garantie décennale.",
    icone: <IconeRealisation />,
  },
];

/* ============================================
   DONNÉES DES RAISONS DE NOUS CHOISIR
   ============================================ */

/**
 * Les arguments différenciants pour convaincre le visiteur
 * Utilisé sur la page principale des services
 */
export const raisonsChoisir: RaisonChoisir[] = [
  {
    titre: "Chantier Propre & Protégé",
    description:
      "Nous respectons les lieux (bâchage complet, nettoyage quotidien). Zéro poussière laissée.",
    icone: <IconeChantierPropre />,
    couleurType: "green",
  },
  {
    titre: "Respect strict du planning",
    description:
      "Une date annoncée est une date tenue. Crucial pour les appels d'offres et vos emménagements.",
    icone: <IconePlanning />,
    couleurType: "blue",
  },
  {
    titre: "Finitions Soignées",
    description:
      "Murs lisses, angles parfaits. L'exigence de la qualité pour un rendu durable.",
    icone: <IconeFinitions />,
    couleurType: "amber",
  },
  {
    titre: "Devis Clair & Détaillé",
    description:
      "Pas de mauvaise surprise. Tout est chiffré avant démarrage.",
    icone: <IconeDevis />,
    couleurType: "purple",
  },
];

/* ============================================
   DONNÉES DES AVANTAGES MARCHÉS PUBLICS
   ============================================ */

/**
 * Liste des points forts pour les collectivités et gestionnaires
 * Utilisé dans toutes les pages de services
 */
export const marchesPublicsAvantages: AvantageMarchesPublics[] = [
  {
    icone: <IconeDossiersAdmin className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />,
    texte: "Dossiers administratifs RGE & Assurances à jour"
  },
  {
    icone: <IconeSiteOccupe className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />,
    texte: "Expérience en site occupé et bâtiments ERP"
  },
  {
    icone: <IconeInterlocuteurUnique className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />,
    texte: "Interlocuteur unique dédié aux marchés"
  },
];

/* ============================================
   DONNÉES DES DOCUMENTS MARCHÉS PUBLICS
   ============================================ */

/**
 * Documents disponibles pour les marchés publics (générique)
 */
export const documentsMarchesPublicsGenerique: DocumentMarchesPublics[] = [
  { titre: "Attestation RGE", disponibilite: "Disponible" },
  { titre: "Décennale", disponibilite: "Disponible" },
  { titre: "Kbis & RC Pro", disponibilite: "Disponible" },
  { titre: "Références", disponibilite: "Sur demande" },
];

/**
 * Documents spécifiques pour l'isolation
 */
export const documentsMarchesPublicsIsolation: DocumentMarchesPublics[] = [
  { titre: "Attestation RGE", disponibilite: "Disponible" },
  { titre: "Décennale", disponibilite: "Disponible" },
  { titre: "Fiches techniques isolants", disponibilite: "Sur demande" },
  { titre: "Références chantiers publics", disponibilite: "Sur demande" },
];

/**
 * Documents spécifiques pour la plâtrerie
 */
export const documentsMarchesPublicsPlatrerie: DocumentMarchesPublics[] = [
  { titre: "Attestation URSSAF", disponibilite: "Disponible" },
  { titre: "Décennale", disponibilite: "Disponible" },
  { titre: "RC Pro", disponibilite: "Disponible" },
  { titre: "PV réaction au feu", disponibilite: "Sur demande" },
];

/**
 * Documents spécifiques pour les enduits/finitions
 */
export const documentsMarchesPublicsEnduits: DocumentMarchesPublics[] = [
  { titre: "Attestation RGE", disponibilite: "Disponible" },
  { titre: "Décennale", disponibilite: "Disponible" },
  { titre: "Fiches techniques enduits", disponibilite: "Sur demande" },
  { titre: "Références chantiers publics", disponibilite: "Sur demande" },
];

/* ============================================
   DONNÉES DES FAQ COMMUNES
   ============================================ */

/**
 * FAQ rapide pour la page principale des services
 */
export const faqRapide: FAQItem[] = [
  {
    question: "Quels sont vos délais d'intervention ?",
    reponse: "Nous intervenons généralement sous 2 à 4 semaines après signature du devis. Pour les urgences ou petits chantiers, contactez-nous.",
  },
  {
    question: "Intervenez-vous en site occupé ?",
    reponse: "Oui, c'est notre spécialité. Nous adaptons nos horaires et créons des zones de confinement pour minimiser la gêne.",
  },
  {
    question: "Gérez-vous les dossiers MaPrimeRénov' ?",
    reponse: "En tant qu'entreprise RGE, nous vous fournissons tous les justificatifs techniques nécessaires pour monter votre dossier d'aides.",
  },
];

/* ============================================
   DONNÉES DES RÉALISATIONS
   ============================================ */

/**
 * Aperçu de 3 projets récents pour donner confiance
 * Utilisé sur la page principale des services
 */
export const realisationsApercu: RealisationApercu[] = [
  {
    id: 1,
    titre: "Rénovation complète Haussmannien",
    lieu: "Strasbourg Centre",
    description: "Plâtrerie, Corniches, Peinture",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=500&fit=crop",
  },
  {
    id: 2,
    titre: "Isolation combles perdus",
    lieu: "Obernai",
    description: "Laine soufflée, RGE, Gain 35%",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=500&fit=crop",
  },
  {
    id: 3,
    titre: "Réaménagement Bureaux Mairie",
    lieu: "Marché Public",
    description: "Cloisons modulaires, Faux-plafonds, Site occupé",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=500&fit=crop",
  },
];

