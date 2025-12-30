/*
  Page d'accueil du site AR+SOLUTION.
  
  C'est la première page que voit le visiteur. Elle présente :
  - L'entreprise AR+SOLUTION (rénovation, plâtrerie, isolation à Strasbourg)
  - Les certifications et garanties (RGE, Décennale)
  - Les différents profils clients (Marchés Publics, Pros, Particuliers)
  - Les 4 services principaux (Plâtrerie, Isolation, Peinture, Enduits)
  - Des exemples de réalisations avant/après
  - Les avantages de choisir AR+SOLUTION et la méthode de travail
  - Un espace dédié aux acheteurs publics
  - Les avis clients et la zone d'intervention
  - Une FAQ et un formulaire de demande de devis

  L'utilisateur peut :
  - Naviguer vers les différentes sections via le menu
  - Cliquer sur les cartes services pour en savoir plus
  - Demander un devis via le formulaire ou le bouton CTA
  - Appeler directement via le numéro affiché
*/

import Link from "next/link";
import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import GridScan from "@/components/GridScan";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

/* ============================================
   DONNÉES DE LA PAGE
   ============================================ */

/* Éléments de la barre de confiance affichés sous le hero */
const barreConfianceItems = [
  { valeur: "RGE", label: "Entreprise Certifiée" },
  { valeur: "10 Ans", label: "Garantie Décennale" },
  { valeur: "67", label: "Intervention Bas-Rhin" },
  { valeur: "+150", label: "Projets Réalisés" },
];

/* Cartes présentant les 3 profils clients cibles */
const profilsClients = [
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
];

/* Icônes SVG spécifiques et représentatives pour chaque service */
const IconePlatrerie = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    {/* Cloisons/Murs avec détails */}
    <rect x="3" y="4" width="6" height="16" rx="0.5" strokeWidth={1.5} />
    <rect x="11" y="4" width="6" height="16" rx="0.5" strokeWidth={1.5} />
    {/* Détails de structure (montants) */}
    <line x1="5" y1="7" x2="5" y2="9" strokeWidth={1.5} />
    <line x1="5" y1="11" x2="5" y2="13" strokeWidth={1.5} />
    <line x1="5" y1="15" x2="5" y2="17" strokeWidth={1.5} />
    <line x1="13" y1="7" x2="13" y2="9" strokeWidth={1.5} />
    <line x1="13" y1="11" x2="13" y2="13" strokeWidth={1.5} />
    <line x1="13" y1="15" x2="13" y2="17" strokeWidth={1.5} />
    {/* Lignes horizontales (rails) */}
    <line x1="3" y1="6" x2="9" y2="6" strokeWidth={1} />
    <line x1="11" y1="6" x2="17" y2="6" strokeWidth={1} />
    <line x1="3" y1="18" x2="9" y2="18" strokeWidth={1} />
    <line x1="11" y1="18" x2="17" y2="18" strokeWidth={1} />
  </svg>
);

const IconeIsolation = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    {/* Maison avec toit */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      strokeWidth={1.5}
    />
    {/* Couche d'isolation (lignes ondulées autour de la maison) */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 11c1-0.5 2-0.5 3 0s2 0.5 3 0s2-0.5 3 0s2 0.5 3 0s2-0.5 3 0"
      strokeWidth={1.2}
      strokeDasharray="0.5 1"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 13c1-0.5 2-0.5 3 0s2 0.5 3 0s2-0.5 3 0s2 0.5 3 0s2-0.5 3 0"
      strokeWidth={1.2}
      strokeDasharray="0.5 1"
    />
    {/* Thermomètre pour représenter l'efficacité énergétique */}
    <circle cx="18" cy="6" r="2" strokeWidth={1.5} />
    <line x1="18" y1="8" x2="18" y2="10" strokeWidth={1.5} />
    <line x1="18" y1="10" x2="18" y2="12" strokeWidth={1.5} />
  </svg>
);

const IconePeinture = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    {/* Manche du rouleau */}
    <rect x="10.5" y="2" width="3" height="4" rx="0.5" strokeWidth={1.5} />
    {/* Poignée */}
    <rect x="11" y="1" width="2" height="1.5" rx="0.3" strokeWidth={1.2} />
    {/* Corps du rouleau */}
    <rect x="9" y="6" width="6" height="14" rx="1" strokeWidth={1.5} />
    {/* Cylindre du rouleau (partie qui roule) */}
    <ellipse cx="12" cy="6" rx="3" ry="1.5" strokeWidth={1.5} />
    {/* Texture du rouleau (lignes horizontales) */}
    <line x1="9.5" y1="10" x2="14.5" y2="10" strokeWidth={0.8} />
    <line x1="9.5" y1="13" x2="14.5" y2="13" strokeWidth={0.8} />
    <line x1="9.5" y1="16" x2="14.5" y2="16" strokeWidth={0.8} />
    {/* Gouttes de peinture */}
    <path
      d="M8 12c0-1 1-2 2-2s2 1 2 2"
      strokeWidth={1.2}
      strokeLinecap="round"
    />
    <path
      d="M16 15c0-1 1-2 2-2s2 1 2 2"
      strokeWidth={1.2}
      strokeLinecap="round"
    />
  </svg>
);

const IconeEnduits = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    {/* Truelle - manche */}
    <line x1="12" y1="2" x2="12" y2="8" strokeWidth={2} strokeLinecap="round" />
    {/* Truelle - poignée */}
    <rect x="10.5" y="2" width="3" height="2" rx="0.5" strokeWidth={1.5} />
    {/* Truelle - lame triangulaire */}
    <path
      d="M8 8 L12 16 L16 8 Z"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    {/* Ligne de lissage (effet de mouvement) */}
    <path
      d="M6 12 Q8 10 10 12 T14 12"
      strokeWidth={1.2}
      strokeLinecap="round"
      fill="none"
    />
    {/* Surface lissée (lignes parallèles) */}
    <line x1="4" y1="18" x2="20" y2="18" strokeWidth={1} />
    <line x1="4" y1="20" x2="20" y2="20" strokeWidth={1} />
    <line x1="4" y1="22" x2="20" y2="22" strokeWidth={1} />
  </svg>
);

/* Les 4 services principaux affichés en cartes */
const services = [
  {
    id: "platrerie",
    titre: "Plâtrerie",
    accroche: "Redistribuez vos volumes sans gros œuvre.",
    tag: "TECHNIQUE",
    tagColor: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&h=400&fit=crop",
    imageAlt: "Travaux de plâtrerie et création de cloisons",
    prestations: ["Cloisons sèches", "Faux-plafonds", "Doublage murs"],
    lien: "/services/platrerie",
    iconeColor: "orange",
    icone: <IconePlatrerie />,
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
    icone: <IconeIsolation />,
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
    icone: <IconePeinture />,
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
    icone: <IconeEnduits />,
  },
];

/* Icônes SVG spécifiques pour les arguments "Pourquoi nous choisir" */
const IconeChantierPropre = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    {/* Bâche de protection */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l9 5 9-5M3 8l9-5 9 5M3 8v8l9 5 9-5V8"
    />
    {/* Symbole de protection (bouclier) */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const IconePlanning = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    {/* Calendrier */}
    <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth={1.5} />
    <line x1="8" y1="2" x2="8" y2="6" strokeWidth={1.5} />
    <line x1="16" y1="2" x2="16" y2="6" strokeWidth={1.5} />
    <line x1="3" y1="10" x2="21" y2="10" strokeWidth={1.5} />
    {/* Check mark pour respect du planning */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const IconeFinitions = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    {/* Règle/règle de mesure */}
    <rect x="3" y="8" width="18" height="3" rx="0.5" strokeWidth={1.5} />
    {/* Marques de mesure */}
    <line x1="5" y1="7" x2="5" y2="9" strokeWidth={1.5} />
    <line x1="8" y1="7" x2="8" y2="9" strokeWidth={1.5} />
    <line x1="11" y1="7" x2="11" y2="9" strokeWidth={1.5} />
    <line x1="14" y1="7" x2="14" y2="9" strokeWidth={1.5} />
    <line x1="17" y1="7" x2="17" y2="9" strokeWidth={1.5} />
    <line x1="20" y1="7" x2="20" y2="9" strokeWidth={1.5} />
    {/* Étoile pour qualité */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const IconeDevis = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    {/* Document avec liste */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
    {/* Lignes de texte (détails) */}
    <line x1="9" y1="9" x2="15" y2="9" strokeWidth={1.5} />
    <line x1="9" y1="13" x2="15" y2="13" strokeWidth={1.5} />
    <line x1="9" y1="17" x2="13" y2="17" strokeWidth={1.5} />
  </svg>
);

/* Arguments "Pourquoi nous choisir" avec icônes spécifiques */
const argumentsChoix = [
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

/* Helper pour obtenir les classes CSS selon le type de couleur */
const getCouleurClasses = (type: string) => {
  const classes = {
    green: "bg-green-50 text-green-600 border-green-200 group-hover:bg-green-100 group-hover:border-green-300",
    blue: "bg-blue-50 text-blue-600 border-blue-200 group-hover:bg-blue-100 group-hover:border-blue-300",
    amber: "bg-amber-50 text-amber-600 border-amber-200 group-hover:bg-amber-100 group-hover:border-amber-300",
    purple: "bg-purple-50 text-purple-600 border-purple-200 group-hover:bg-purple-100 group-hover:border-purple-300",
  };
  return classes[type as keyof typeof classes] || classes.blue;
};

/* Helper pour obtenir la classe de délai d'animation (remplace les styles inline) */
const getAnimationDelayClass = (index: number) => {
  const delayClasses = [
    "animate-delay-0",
    "animate-delay-100",
    "animate-delay-200",
    "animate-delay-300",
    "animate-delay-400",
    "animate-delay-500",
  ];
  return delayClasses[index] || delayClasses[0];
};

/* Icônes SVG pour la section "Notre méthode de travail" */
const IconePriseContact = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    {/* Téléphone */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
    {/* Email/enveloppe */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      strokeWidth={1.5}
    />
  </svg>
);

const IconeVisiteTechnique = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    {/* Maison */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
    {/* Règle/outil de mesure */}
    <rect x="16" y="4" width="4" height="2" rx="0.5" strokeWidth={1.5} />
    <line x1="16" y1="5" x2="20" y2="5" strokeWidth={1.5} />
    <line x1="17" y1="4.5" x2="17" y2="5.5" strokeWidth={1.5} />
    <line x1="19" y1="4.5" x2="19" y2="5.5" strokeWidth={1.5} />
    {/* Ligne de mesure */}
    <line x1="16" y1="7" x2="20" y2="7" strokeWidth={1.5} />
  </svg>
);

const IconeDevisPlanification = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    {/* Document */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
    {/* Lignes de texte */}
    <line x1="9" y1="9" x2="15" y2="9" strokeWidth={1.5} />
    <line x1="9" y1="13" x2="15" y2="13" strokeWidth={1.5} />
    <line x1="9" y1="17" x2="13" y2="17" strokeWidth={1.5} />
    {/* Calendrier */}
    <rect x="3" y="3" width="6" height="6" rx="0.5" strokeWidth={1.5} />
    <line x1="5" y1="2" x2="5" y2="4" strokeWidth={1.5} />
    <line x1="7" y1="2" x2="7" y2="4" strokeWidth={1.5} />
    <line x1="3" y1="5" x2="9" y2="5" strokeWidth={1.5} />
  </svg>
);

const IconeRealisation = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    {/* Bouclier de validation */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
    {/* Checkmark à l'intérieur */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4"
      strokeWidth={2}
    />
  </svg>
);

/* Étapes de la méthode de travail (stepper) */
const etapesMethode = [
  { 
    numero: 1, 
    titre: "Prise de contact", 
    description: "Rapide par téléphone ou email.",
    icone: <IconePriseContact />
  },
  { 
    numero: 2, 
    titre: "Visite Technique", 
    description: "Analyse sur site pour métrés précis.",
    icone: <IconeVisiteTechnique />
  },
  { 
    numero: 3, 
    titre: "Devis & Planification", 
    description: "Validation du chiffrage et date d'intervention.",
    icone: <IconeDevisPlanification />
  },
  { 
    numero: 4, 
    titre: "Réalisation & Réception", 
    description: "Travaux et validation de fin de chantier.",
    icone: <IconeRealisation />
  },
];

/* Documents disponibles pour les marchés publics */
const documentsMarchesPublics = [
  { titre: "Attestation RGE", disponibilite: "Disponible" },
  { titre: "Décennale", disponibilite: "Disponible" },
  { titre: "Kbis & RC Pro", disponibilite: "Disponible" },
  { titre: "Références", disponibilite: "Sur demande" },
];

/* Avis clients affichés sur la page */
const avisClients = [
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
];

/* Villes de la zone d'intervention pour le SEO local */
const villesIntervention = [
  "Strasbourg Centre",
  "Schiltigheim",
  "Illkirch-Graffenstaden",
  "Haguenau",
  "Sélestat",
  "Obernai",
];

/* Réalisation featured avec images avant/après pour le slider */
const realisationFeatured = {
  titre: "Rénovation complète Appartement",
  lieu: "Strasbourg Neudorf",
  metiers: "Plâtrerie, Isolation & Peinture",
  imageAvant: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&q=80",
  imageApres: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop&q=80",
};

/* Réalisations supplémentaires pour la grille de miniatures */
const realisationsMiniatures = [
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
];



/* ============================================
   ICÔNES POUR LA SECTION MARCHÉS PUBLICS
   ============================================ */

/* Icône pour les dossiers administratifs (documents avec badge de vérification) */
const IconeDossiersAdmin = ({ className }: { className?: string }) => (
  <svg
    className={className || "w-6 h-6"}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    {/* Dossier/document */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
    {/* Badge de vérification (cercle avec check) */}
    <circle cx="17" cy="7" r="3" strokeWidth={2} />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7l1 1 2-2"
      strokeWidth={2}
    />
  </svg>
);

/* Icône pour site occupé et bâtiments ERP (bâtiment avec indication d'occupation) */
const IconeSiteOccupe = ({ className }: { className?: string }) => (
  <svg
    className={className || "w-6 h-6"}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    {/* Bâtiment principal */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
    {/* Indicateur d'occupation (badge avec horloge) */}
    <circle cx="17" cy="7" r="3" strokeWidth={2} fill="currentColor" fillOpacity="0.1" />
    <circle cx="17" cy="7" r="2" strokeWidth={1.5} />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 6v2l1.5 1.5"
      strokeWidth={1.5}
    />
  </svg>
);

/* Icône pour interlocuteur unique (personne avec badge étoile) */
const IconeInterlocuteurUnique = ({ className }: { className?: string }) => (
  <svg
    className={className || "w-6 h-6"}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    {/* Personne */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
    {/* Étoile pour indiquer un interlocuteur dédié/privilégié */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.5 4l1.5 3 3 .5-2.5 2.5.5 3-3-1.5-3 1.5.5-3-2.5-2.5 3-.5 1.5-3z"
      strokeWidth={2}
      fill="currentColor"
      fillOpacity="0.2"
    />
  </svg>
);

/* Fonction pour obtenir l'icône appropriée selon le type de document */
const getDocumentIcon = (titre: string, className?: string) => {
  const baseClass = className || "w-8 h-8";
  
  if (titre.includes("RGE")) {
    // Icône de badge/certificat pour RGE
    return (
      <svg
        className={baseClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        {/* Badge/certificat */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    );
  } else if (titre.includes("Décennale")) {
    // Icône de bouclier pour la garantie décennale
    return (
      <svg
        className={baseClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        {/* Bouclier de garantie */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    );
  } else if (titre.includes("Kbis") || titre.includes("RC Pro")) {
    // Icône de document légal avec sceau
    return (
      <svg
        className={baseClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        {/* Document */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
        {/* Sceau/stamp en bas */}
        <circle cx="18" cy="18" r="2.5" strokeWidth={1.5} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 18l1 1 2-2"
          strokeWidth={1.5}
        />
      </svg>
    );
  } else {
    // Icône de dossier par défaut pour Références
    return (
      <svg
        className={baseClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        {/* Dossier avec onglets */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    );
  }
};

/* ============================================
   PAGE D'ACCUEIL
   ============================================ */

export default function PageAccueil() {
  return (
    <>
      {/* Header - Navigation principale sticky */}
      <Header pageActive="accueil" ctaHref="#contact" />

      {/* ============================================
          CONTENU PRINCIPAL
          ============================================ */}
      <main className="mt-20">
        {/* ============================================
            HERO SECTION - La promesse principale
            L'utilisateur voit immédiatement ce que fait l'entreprise et peut demander un devis
            Animation 3D futuriste en arrière-plan qui réagit aux mouvements de la souris
            ============================================ */}
        <section className="relative bg-slate-900 overflow-hidden">
          {/* Animation 3D GridScan en arrière-plan */}
          <div className="absolute inset-0">
            <GridScan
              sensitivity={0.55}
              lineThickness={1}
              linesColor="#1e3a5f"
              gridScale={0.1}
              scanColor="#f97316"
              scanOpacity={0.5}
              enablePost
              bloomIntensity={0.6}
              chromaticAberration={0.002}
              noiseIntensity={0.01}
              scanDuration={3.0}
              scanDelay={1.5}
            />
            {/* Overlay gradient pour améliorer la lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-900/40" />
          </div>

          {/* Contenu du hero */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl">
              {/* Badges de localisation et certifications */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <Badge 
                  variant="outline" 
                  className="bg-brand-orange/20 text-brand-orange border-brand-orange/30 uppercase tracking-wide"
                >
                  Strasbourg & Alsace
                </Badge>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-white bg-white/10 border-white/20">
                    RGE Qualibat
                  </Badge>
                  <Badge variant="outline" className="text-white bg-white/10 border-white/20">
                    Décennale
                  </Badge>
                </div>
              </div>

              {/* Titre principal - promesse de valeur */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Travaux de Plâtrerie, Isolation & Finitions.
              </h1>

              {/* Sous-titre explicatif */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 font-light">
                Votre interlocuteur unique pour la rénovation intérieure.
                Fiabilité technique, certifications RGE et respect strict des
                délais.
              </p>

              {/* Boutons d'action principaux */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg"
                >
                  <a href="#contact">Demander un devis gratuit</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-brand-blue backdrop-blur-sm"
                >
                  <Link href="/marches-publics">Accès Acheteurs Publics</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            BARRE DE CONFIANCE - Preuves sociales
            Affiche les chiffres clés qui rassurent le visiteur (certifications, expérience)
            ============================================ */}
        <TrustBar items={barreConfianceItems} />

        {/* ============================================
            ENTRÉES PAR PROFILS - Le triage des visiteurs
            3 cartes permettant aux visiteurs de s'identifier (Marchés Publics, Pros, Particuliers)
            ============================================ */}
        <section className="py-20 md:py-28 bg-white" id="profils">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Titre de la section */}
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-5 md:mb-6">
                À qui s&apos;adresse notre expertise ?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Des solutions adaptées aux contraintes techniques et
                administratives de chaque acteur.
              </p>
            </div>

            {/* Grille des 3 cartes profils */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {profilsClients.map((profil) => (
                <Card
                  key={profil.id}
                  className="group relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out flex flex-col focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 border-2 border-gray-200 hover:border-brand-orange/50 bg-white pt-0"
                  style={{
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {/* Image de la carte */}
                  <div className="relative h-52 md:h-56 overflow-hidden bg-gray-200">
                    <img
                      src={profil.image}
                      alt={profil.titre}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Gradient overlay pour améliorer la profondeur et l'esthétique */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500 ease-out" />
                    {/* Overlay subtil en bas pour améliorer la transition avec le contenu */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/20 to-transparent" />
                  </div>
                  {/* Contenu de la carte */}
                  <CardContent className="p-6 md:p-7 lg:p-8 flex-1 flex flex-col">
                    {profil.badge && (
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary" className="bg-brand-orange/10 text-brand-orange border-brand-orange/20 uppercase font-bold tracking-wide">
                          {profil.badge}
                        </Badge>
                      </div>
                    )}
                    <CardTitle className="text-xl md:text-2xl text-brand-blue-dark font-bold mb-3 md:mb-4 leading-tight group-hover:text-brand-orange transition-colors duration-300">
                      {profil.titre}
                    </CardTitle>
                    <CardDescription className="text-sm md:text-base text-gray-700 mb-5 md:mb-6 flex-1 leading-relaxed">
                      {profil.description}
                    </CardDescription>
                    <Link
                      href={profil.lien}
                      className="inline-flex items-center text-brand-orange font-bold hover:text-brand-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded transition-all duration-300 group/link mt-auto"
                      aria-label={`${profil.lienTexte} - ${profil.titre}`}
                    >
                      {profil.lienTexte} <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300 ease-out" aria-hidden="true">→</span>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            APERÇU SERVICES - Les 4 domaines d'intervention
            Présente les services principaux avec liens vers les pages détaillées
            ============================================ */}
        <section 
          className="py-16 sm:py-20 md:py-24 bg-gray-100" 
          id="services"
          aria-labelledby="services-title"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Titre de la section amélioré */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 
                id="services-title"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4 sm:mb-5 md:mb-6"
              >
                Nos domaines d&apos;intervention en Alsace
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                Une maîtrise technique complète pour le second œuvre.
              </p>
            </div>

            {/* Grille des 4 cartes services avec design moderne */}
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
              role="list"
              aria-label="Liste des services proposés"
            >
              {services.map((service) => (
                <Card
                  key={service.id}
                  role="listitem"
                  className="group relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 border-2 border-gray-200 hover:border-brand-orange bg-white pt-0 h-full motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.02] motion-reduce:transition-none"
                  style={{
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {/* Image en en-tête avec effet zoom au survol */}
                  <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden bg-gray-200">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover object-center motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Overlay gradient pour améliorer la lisibilité */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-70 motion-safe:group-hover:opacity-50 motion-safe:transition-opacity motion-safe:duration-500 motion-safe:ease-out" />
                    {/* Tag/Badge coloré en overlay sur l'image */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <Badge
                        className={`${service.tagColor} text-white border-0 rounded-md shadow-lg uppercase font-bold tracking-wide text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1`}
                        aria-label={`Catégorie: ${service.tag}`}
                      >
                        {service.tag}
                      </Badge>
                    </div>
                    {/* Icône du service en overlay sur l'image */}
                    <div
                      className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 ${
                        service.iconeColor === "orange"
                          ? "bg-brand-orange/90 text-white"
                          : "bg-brand-blue/90 text-white"
                      } rounded-lg flex items-center justify-center shadow-xl backdrop-blur-sm motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out`}
                      aria-hidden="true"
                    >
                      {service.icone}
                    </div>
                  </div>

                  {/* Contenu de la carte avec structure CardHeader/CardContent/CardFooter */}
                  <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4 flex-1 flex flex-col">
                    <h3 
                      className="text-lg sm:text-xl md:text-2xl text-brand-blue-dark font-bold mb-2 sm:mb-3 leading-tight motion-safe:group-hover:text-brand-orange motion-safe:transition-colors motion-safe:duration-300"
                    >
                      {service.titre}
                    </h3>
                    <CardDescription 
                      className="text-brand-orange font-semibold text-xs sm:text-sm md:text-base mb-3 sm:mb-4"
                      id={`${service.id}-description`}
                    >
                      {service.accroche}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-4 sm:px-6 pb-3 sm:pb-4 flex-1 flex flex-col">
                    {/* Liste des prestations */}
                    <ul 
                      className="text-xs sm:text-sm md:text-base text-gray-700 space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 flex-1"
                      role="list"
                      aria-label={`Prestations incluses dans ${service.titre}`}
                    >
                      {service.prestations.map((prestation) => (
                        <li 
                          key={prestation} 
                          className="flex items-start"
                          role="listitem"
                        >
                          <span 
                            className="text-brand-orange mt-1 sm:mt-1.5 mr-2 font-bold flex-shrink-0" 
                            aria-hidden="true"
                          >
                            •
                          </span>
                          <span>{prestation}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  {/* Footer avec bouton "En savoir plus" amélioré */}
                  <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
                    <Link
                      href={service.lien}
                      className="inline-flex items-center text-brand-orange font-bold hover:text-brand-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded transition-all duration-300 group/link w-full justify-between text-sm sm:text-base"
                      aria-label={`En savoir plus sur ${service.titre} - ${service.accroche}`}
                      aria-describedby={`${service.id}-description`}
                    >
                      <span>En savoir plus</span>
                      <span 
                        className="ml-2 motion-safe:group-hover/link:translate-x-1 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out" 
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            PORTFOLIO AVANT/APRÈS - Preuve visuelle
            Montre un exemple de réalisation avec comparaison avant/après
            ============================================ */}
        <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-white" id="realisations">
          <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
            {/* En-tête amélioré avec badge contextuel, meilleure hiérarchie visuelle et bouton CTA - Optimisé mobile */}
            <div className="text-center md:text-left mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              {/* Badge contextuel */}
              <div className="flex justify-center md:justify-start mb-3 sm:mb-4">
                <Badge 
                  variant="outline" 
                  className="bg-brand-orange/10 text-brand-orange border-brand-orange/30 uppercase tracking-wide font-semibold px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm"
                >
                  Portfolio
                </Badge>
              </div>
              
              {/* Titre principal avec meilleure hiérarchie */}
              <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-2 sm:px-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-2 sm:mb-3 md:mb-4 leading-tight">
                  Nos réalisations parlent pour nous
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto md:mx-0 leading-relaxed">
                  Découvrez la qualité de nos finitions sur des chantiers
                  récents.
                </p>
              </div>

              {/* Bouton CTA visible sur toutes les tailles d'écran - Optimisé mobile */}
              <div className="flex justify-center md:justify-start px-2 sm:px-0">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 font-bold w-full sm:w-auto min-h-[48px] sm:min-h-auto px-5 sm:px-6 text-sm sm:text-base"
                  aria-label="Explorer le portfolio de réalisations"
                >
                  <Link href="/realisations">
                    Explorer le portfolio
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Slider avant/après avec comparaison interactive */}
            <div className="relative">
              <BeforeAfterSlider
                imageAvant={realisationFeatured.imageAvant}
                imageApres={realisationFeatured.imageApres}
                altAvant={`Avant rénovation - ${realisationFeatured.titre}`}
                altApres={`Après rénovation - ${realisationFeatured.titre}`}
                hauteur="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                modeInitial="apres"
              />

              {/* Badge d'information sur le projet - Optimisé mobile */}
              <Card className="absolute top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-auto md:top-6 md:left-6 bg-white/98 backdrop-blur-md z-30 sm:max-w-xs md:max-w-sm border border-gray-200/50 shadow-xl sm:shadow-2xl">
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6">
                  <CardTitle className="text-brand-blue text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight mb-2 sm:mb-3 md:mb-4">
                    {realisationFeatured.titre}
                  </CardTitle>
                  <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
                    {/* Lieu avec icône */}
                    <div className="flex items-start gap-1.5 sm:gap-2">
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-brand-orange mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <CardDescription className="text-[11px] sm:text-xs md:text-sm text-gray-700 leading-relaxed">
                        {realisationFeatured.lieu}
                      </CardDescription>
                    </div>
                    {/* Métiers avec icône */}
                    <div className="flex items-start gap-1.5 sm:gap-2">
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-brand-orange mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <CardDescription className="text-[11px] sm:text-xs md:text-sm text-gray-700 leading-relaxed">
                        {realisationFeatured.metiers}
                      </CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </section>

        {/* ============================================
            POURQUOI NOUS + MÉTHODE
            Section en 2 colonnes : arguments de différenciation à gauche, méthode de travail à droite
            ============================================ */}
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50 overflow-hidden" id="pourquoi-choisir" aria-labelledby="pourquoi-choisir-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Colonne gauche : Pourquoi nous choisir */}
              <div>
                <div className="mb-8 md:mb-10">
                  <h2 id="pourquoi-choisir-title" className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                    Pourquoi choisir AR+SOLUTION ?
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Des engagements concrets qui font la différence
                  </p>
                </div>
                <div className="space-y-4 md:space-y-5">
                  {argumentsChoix.map((argument, index) => (
                    <div
                      key={argument.titre}
                      className={`group relative bg-white rounded-xl border-2 p-4 md:p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left will-change-transform-opacity ${getAnimationDelayClass(index)}`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Icône avec couleur spécifique */}
                        <div className="flex-shrink-0">
                          <div className={`flex items-center justify-center h-12 w-12 rounded-xl border-2 ${getCouleurClasses(argument.couleurType)} transition-all duration-300 motion-safe:group-hover:scale-110 motion-safe:group-hover:rotate-3 will-change-transform`}>
                            {argument.icone}
                          </div>
                        </div>
                        {/* Texte de l'argument */}
                        <div className="flex-1 pt-1">
                          <h4 className="text-lg md:text-xl font-bold text-brand-blue mb-2 group-hover:text-brand-orange-dark transition-colors duration-300">
                            {argument.titre}
                          </h4>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {argument.description}
                          </p>
                        </div>
                      </div>
                      {/* Ligne décorative au survol */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl will-change-opacity" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Colonne droite : Méthode de travail (stepper) */}
              <Card className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-500 ease-in-out">
                <CardHeader className="bg-white border-b border-brand-orange/20 rounded-t-lg p-5 md:p-6 lg:p-7">
                  <CardTitle className="text-xl md:text-2xl font-bold text-brand-blue">
                    Notre méthode de travail
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm md:text-base mt-3 md:mt-4">
                    4 étapes simples pour votre projet
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-5 md:p-6 lg:p-7">
                  {/* Timeline modernisée : cartes empilées avec numéros discrets */}
                  <div className="space-y-5 md:space-y-6">
                    {etapesMethode.map((etape, index) => (
                      <div 
                        key={etape.numero} 
                        className={`group relative motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom will-change-transform-opacity ${getAnimationDelayClass(index)}`}
                      >
                        <div className="bg-white rounded-lg p-4 md:p-5 border border-gray-100 group-hover:border-brand-orange group-hover:shadow-xl group-hover:shadow-brand-orange/20 motion-safe:group-hover:scale-[1.02] transition-all duration-300 ease-in-out">
                          <div className="flex items-start gap-4">
                            {/* Conteneur avec icône SVG et numéro en overlay */}
                            <div className="flex-shrink-0 relative">
                              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 border-2 border-brand-orange/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-brand-orange/20 group-hover:to-brand-orange/10 group-hover:border-brand-orange group-hover:shadow-md group-hover:shadow-brand-orange/30 transition-all duration-300 ease-in-out will-change-transform">
                                {/* Icône SVG avec rotation au hover */}
                                <div className="absolute inset-0 flex items-center justify-center text-brand-orange motion-safe:group-hover:rotate-[5deg] transition-transform duration-300 ease-in-out">
                                  <div className="w-6 h-6 md:w-7 md:h-7">
                                    {etape.icone}
                                  </div>
                                </div>
                                {/* Numéro en overlay (coin supérieur droit) */}
                                <div className="absolute -top-1.5 -right-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full bg-brand-orange text-white flex items-center justify-center text-xs md:text-sm font-bold shadow-md motion-safe:group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-orange/50 transition-all duration-300 ease-in-out z-10">
                                  {etape.numero}
                                </div>
                              </div>
                            </div>
                            {/* Contenu de l'étape */}
                            <div className="flex-1 pt-0.5">
                              <h5 className="font-bold text-brand-blue text-base md:text-lg mb-1.5 md:mb-2 group-hover:text-brand-orange transition-colors duration-300 ease-in-out">
                                {etape.titre}
                              </h5>
                              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                {etape.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Badge de confiance intégré de manière discrète */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <svg
                        className="w-3.5 h-3.5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <span>Processus éprouvé</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ============================================
            BLOC MARCHÉS PUBLICS - Espace dédié aux collectivités
            Section mise en avant pour les acheteurs publics avec documents disponibles
            ============================================ */}
        <section
          className="py-16 sm:py-20 md:py-24 lg:py-28 bg-brand-blue text-white relative overflow-hidden"
          id="marches-publics"
        >
          {/* Gradient animé en arrière-plan pour effet de profondeur */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-800/20 opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center">
              {/* Contenu texte */}
              <div className="space-y-6 md:space-y-8">
                {/* Badge "Espace Collectivités" amélioré avec effet de profondeur et animations */}
                <Badge
                  variant="outline"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700/90 to-blue-800/90 text-blue-50 border-blue-500/50 text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full uppercase tracking-wider shadow-lg shadow-blue-900/30 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-900/40 hover:scale-105 hover:border-blue-400/70 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 group/badge"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/badge:rotate-12 group-hover/badge:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  Espace Collectivités
                </Badge>
                
                {/* Titre principal avec hiérarchie typographique améliorée */}
                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-white">
                    Acheteurs Publics : un partenaire conforme et réactif.
                  </h2>
                  
                  {/* Description avec typographie optimisée */}
                  <p className="text-blue-50 sm:text-blue-100 text-base sm:text-lg md:text-xl leading-relaxed tracking-normal max-w-2xl">
                    Nous connaissons vos contraintes. AR+SOLUTION structure ses
                    offres pour répondre aux exigences des marchés publics
                    (Écoles, Mairies, Bâtiments administratifs).
                  </p>
                </div>

                {/* Liste des avantages avec icônes améliorées et animations */}
                <div className="space-y-4 md:space-y-5 pt-2">
                  {[
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
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className={`flex items-start gap-3 sm:gap-4 group/advantage transition-all duration-300 hover:translate-x-1 will-change-transform ${getAnimationDelayClass(index)}`}
                    >
                      <div className="flex-shrink-0 mt-0.5 relative">
                        <div className="transition-all duration-300 group-hover/advantage:scale-110 group-hover/advantage:rotate-6 group-hover/advantage:drop-shadow-lg will-change-transform">
                          {item.icone}
                        </div>
                        {/* Cercle de pulsation autour de l'icône au survol */}
                        <div className="absolute inset-0 rounded-full bg-brand-orange/20 scale-0 group-hover/advantage:scale-150 opacity-0 group-hover/advantage:opacity-100 transition-all duration-500 -z-10 -m-2 will-change-transform-opacity" />
                      </div>
                      <span className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-medium transition-colors duration-300 group-hover/advantage:text-brand-orange/90">
                        {item.texte}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA email avec animations améliorées */}
                <div className="pt-2 md:pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-brand-blue hover:bg-gray-100 shadow-lg hover:shadow-xl hover:shadow-white/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 group/button"
                  >
                    <a href="mailto:marches@ar-solution.fr" className="inline-flex items-center gap-2">
                      <span>Contacter le service Marchés Publics</span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover/button:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Grille des documents disponibles avec animations d'entrée */}
              <div className="bg-blue-800/50 p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl border border-blue-700 shadow-2xl backdrop-blur-sm hover:border-blue-600/80 transition-all duration-500">
                <div className="grid grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                  {documentsMarchesPublics.map((doc, index) => (
                    <Card
                      key={doc.titre}
                      className="group relative bg-gradient-to-br from-brand-blue via-blue-700 to-brand-blue border-2 border-blue-600/60 flex flex-col items-center text-center overflow-hidden cursor-pointer hover:border-brand-orange/60 hover:shadow-2xl hover:shadow-brand-orange/20 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 ease-out motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.03] focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 focus-within:ring-offset-blue-800"
                      style={{
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: "both"
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Document: ${doc.titre} - ${doc.disponibilite}`}
                    >
                      {/* Effet de brillance au survol avec animation fluide */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/10 group-hover:to-white/5 transition-all duration-500 pointer-events-none" />
                      
                      {/* Bordure lumineuse au survol avec animation */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-orange/30 rounded-lg transition-all duration-300 pointer-events-none group-focus-within:border-brand-orange/50" />
                      
                      {/* Effet de brillance animé qui traverse la carte */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                      </div>
                      
                      <CardContent className="p-4 md:p-5 lg:p-6 relative z-10 w-full">
                        {/* Icône document avec animation améliorée */}
                        <div className="mb-3 md:mb-4 text-blue-200 flex justify-center transition-all duration-300 group-hover:scale-110 group-hover:text-brand-orange group-hover:drop-shadow-lg group-focus-within:scale-110 group-focus-within:text-brand-orange">
                          <div className="relative">
                            <div className="transition-transform duration-300 group-hover:rotate-6 group-focus-within:rotate-6">
                              {getDocumentIcon(doc.titre, "w-10 h-10 md:w-12 md:h-12")}
                            </div>
                            {/* Cercle de pulsation autour de l'icône au survol */}
                            <div className="absolute inset-0 rounded-full bg-brand-orange/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-focus-within:scale-150 transition-all duration-500 -z-10" />
                            {/* Anneau de pulsation supplémentaire */}
                            <div className="absolute inset-0 rounded-full bg-brand-orange/10 scale-0 group-hover:scale-[1.8] opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
                          </div>
                        </div>
                        
                        {/* Titre avec meilleure hiérarchie et animation */}
                        <CardTitle className="text-sm md:text-base lg:text-lg text-white mb-2 md:mb-3 font-bold leading-tight group-hover:text-brand-orange group-focus-within:text-brand-orange transition-colors duration-300">
                          {doc.titre}
                        </CardTitle>
                        
                        {/* Badge de disponibilité avec design amélioré et animations */}
                        <div className="flex justify-center">
                          <Badge
                            variant="outline"
                            className={`text-xs md:text-sm px-2 md:px-3 py-1 md:py-1.5 rounded-full font-semibold border-2 transition-all duration-300 ${
                              doc.disponibilite === "Disponible"
                                ? "bg-green-500/20 text-green-200 border-green-400/50 group-hover:bg-green-500/30 group-hover:border-green-400 group-hover:shadow-lg group-hover:shadow-green-500/20 group-hover:scale-105"
                                : "bg-amber-500/20 text-amber-200 border-amber-400/50 group-hover:bg-amber-500/30 group-hover:border-amber-400 group-hover:shadow-lg group-hover:shadow-amber-500/20 group-hover:scale-105"
                            }`}
                          >
                            <span className="flex items-center gap-1.5">
                              {doc.disponibilite === "Disponible" ? (
                                <>
                                  <svg
                                    className="w-3 h-3 md:w-3.5 md:h-3.5 transition-transform duration-300 group-hover:rotate-12"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                    aria-hidden="true"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  {doc.disponibilite}
                                </>
                              ) : (
                                <>
                                  <svg
                                    className="w-3 h-3 md:w-3.5 md:h-3.5 transition-transform duration-300 group-hover:rotate-12"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                    aria-hidden="true"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  {doc.disponibilite}
                                </>
                              )}
                            </span>
                          </Badge>
                        </div>
                      </CardContent>
                      
                      {/* Effet de profondeur avec ombre portée au survol */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/0 via-brand-orange/0 to-brand-orange/0 group-hover:from-brand-orange/10 group-hover:via-brand-orange/5 group-hover:to-brand-orange/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 -z-10" />
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            AVIS CLIENTS + ZONE D'INTERVENTION
            Section en 2 colonnes : avis Google à gauche, carte zone à droite (SEO local)
            ============================================ */}
        <section className="py-16 bg-white" id="avis" role="region" aria-labelledby="avis-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Colonne gauche : Avis Google */}
              <div>
                <h2 id="avis-title" className="text-2xl font-bold text-brand-blue mb-6">
                  Ce que disent nos clients
                </h2>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  {/* Note globale */}
                  <div className="flex items-center mb-4" role="group" aria-label="Note moyenne: 4.8 sur 5 étoiles">
                    <div className="flex items-center gap-0.5" role="img" aria-label="5 étoiles sur 5, note moyenne de 4.8">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-brand-orange-dark"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 font-bold text-gray-900" aria-label="Note de 4.8 sur 5">4.8/5</span>
                    <span className="ml-2 text-sm text-gray-500">
                      sur Google Avis
                    </span>
                  </div>

                  {/* Liste des avis avec structure sémantique améliorée */}
                  <div className="space-y-5" role="list" aria-label="Liste des avis clients" aria-live="polite">
                    {avisClients.map((avis, index) => (
                      <article 
                        key={index}
                        className="group relative overflow-hidden shadow-md hover:shadow-xl border border-gray-200 hover:border-brand-orange/30 transition-all duration-300 ease-out hover:-translate-y-1 bg-white rounded-lg focus-within:ring-2 focus-within:ring-brand-orange-dark focus-within:ring-offset-2"
                        style={{
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                        }}
                        itemScope
                        itemType="https://schema.org/Review"
                        role="listitem"
                        aria-labelledby={`avis-auteur-${index}`}
                      >
                        <div className="p-6">
                          {/* Note de l'avis individuel avec microdonnées */}
                          <div 
                            itemProp="reviewRating" 
                            itemScope 
                            itemType="https://schema.org/Rating" 
                            className="mb-3"
                            aria-label={`Note: ${avis.note} sur 5 étoiles`}
                          >
                            <meta itemProp="ratingValue" content={avis.note.toString()} />
                            <meta itemProp="bestRating" content="5" />
                            <div className="flex items-center gap-0.5" role="img" aria-label={`${avis.note} étoiles sur 5`}>
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${i < avis.note ? 'text-brand-orange-dark' : 'text-gray-300'}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          {/* Citation de l'avis */}
                          <blockquote 
                            className="not-italic text-gray-700 text-base leading-relaxed mb-4 border-l-4 border-brand-orange-dark pl-4"
                            itemProp="reviewBody"
                          >
                            {avis.texte}
                          </blockquote>
                          {/* Auteur, localisation et date de l'avis */}
                          <footer className="text-sm text-gray-600 font-semibold">
                            <cite className="not-italic" id={`avis-auteur-${index}`}>
                              <span itemProp="author" itemScope itemType="https://schema.org/Person">
                                <span itemProp="name">{avis.auteur}</span>
                              </span>
                              <span className="text-gray-500 font-normal" itemProp="locationCreated" itemScope itemType="https://schema.org/Place">
                                <span className="sr-only">, </span>
                                <span itemProp="name">({avis.ville})</span>
                              </span>
                            </cite>
                            {avis.date && (
                              <time 
                                itemProp="datePublished" 
                                dateTime={avis.date}
                                className="block text-xs text-gray-500 mt-1 font-normal"
                              >
                                {new Date(avis.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                              </time>
                            )}
                          </footer>
                          {/* Service évalué avec microdonnées */}
                          <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Service" className="sr-only">
                            <meta itemProp="name" content="AR+SOLUTION - Travaux de Plâtrerie, Isolation & Finitions" />
                            <meta itemProp="description" content="Entreprise de rénovation intérieure spécialisée en plâtrerie, isolation et finitions à Strasbourg et dans le Bas-Rhin" />
                          </div>
                        </div>
                        {/* Ligne décorative au survol */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange-dark via-brand-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                      </article>
                    ))}
                  </div>
                  <div className="text-center mt-6">
                    <a
                      href="#avis"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm text-brand-blue font-semibold hover:text-brand-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-dark focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 rounded-md transition-all duration-300 hover:bg-orange-50 focus-visible:bg-orange-50 underline decoration-2 underline-offset-2 group/link"
                      aria-label="Voir tous les avis clients sur Google Avis"
                      aria-describedby="avis-description"
                    >
                      <span>Voir tous les avis</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                  <span id="avis-description" className="sr-only">Ouvre la section des avis clients avec la note moyenne de 4.8 sur 5 étoiles</span>
                </div>
              </div>

              {/* Colonne droite : Zone d'intervention */}
              <div>
                <h2 className="text-2xl font-bold text-brand-blue mb-6">
                  Zone d&apos;intervention
                </h2>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 h-full">
                  <p className="text-gray-700 mb-4">
                    Basée à <strong>Strasbourg</strong>, notre équipe intervient
                    dans tout le <strong>Bas-Rhin (67)</strong> pour vos projets
                    de rénovation.
                  </p>
                  {/* Liste des villes */}
                  <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-6">
                    {villesIntervention.map((ville) => (
                      <li key={ville} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2" />
                        {ville}
                      </li>
                    ))}
                  </ul>
                  {/* Placeholder carte */}
                  <div className="w-full h-32 bg-gray-200 rounded overflow-hidden">
                    <img
                      src="https://placehold.co/600x200?text=Carte+Alsace+Strasbourg"
                      alt="Carte Zone Intervention"
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            FAQ + FORMULAIRE DE CONTACT
            FAQ accordéon puis formulaire de demande de devis
            ============================================ */}
        <section className="py-16 bg-gray-100" id="contact">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* FAQ Accordéon - Répond aux questions courantes avant le formulaire */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-brand-blue mb-6 text-center">
                Questions Fréquentes
              </h2>

              <FAQ />
            </div>

            {/* Formulaire de demande de devis - Le visiteur peut envoyer sa demande */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-t-4 border-brand-orange">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-brand-blue mb-2">
                  Parlez-nous de votre projet
                </h2>
                <p className="text-gray-500">
                  Réponse garantie sous 48h ouvrées.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer réutilisable */}
      <Footer />

      {/* ============================================
          BARRE STICKY MOBILE
          Affichée uniquement sur mobile, permet d'appeler ou demander un devis rapidement
          ============================================ */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 flex gap-3">
        <Button
          asChild
          variant="secondary"
          className="flex-1 text-brand-blue font-bold"
        >
          <a href="tel:0388000000">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Appeler
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          className="flex-1 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold shadow-md"
        >
          <a href="#contact">Devis Gratuit</a>
        </Button>
      </div>
    </>
  );
}
