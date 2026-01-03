/*
  ServiceIcons.tsx - Centralisation de toutes les icônes SVG utilisées dans les pages services
  
  Ce fichier contient toutes les icônes SVG réutilisables pour éviter la duplication de code
  entre les différentes pages de services.
*/

/* ========================================
   ICÔNES SVG SPÉCIFIQUES POUR CHAQUE SERVICE
   ======================================== */

export const IconePlatrerie = () => (
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

export const IconeIsolation = () => (
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

export const IconePeinture = () => (
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

export const IconeEnduits = () => (
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

/* ========================================
   ICÔNES POUR LA SECTION MARCHÉS PUBLICS
   ======================================== */

/* Icône pour les dossiers administratifs (documents avec badge de vérification) */
export const IconeDossiersAdmin = ({ className }: { className?: string }) => (
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
export const IconeSiteOccupe = ({ className }: { className?: string }) => (
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
export const IconeInterlocuteurUnique = ({ className }: { className?: string }) => (
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

/* ========================================
   ICÔNES SVG POUR LA SECTION MÉTHODE DE TRAVAIL
   ======================================== */

export const IconePriseContact = () => (
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

export const IconeVisiteTechnique = () => (
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

export const IconeDevisPlanification = () => (
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

export const IconeRealisation = () => (
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

/* ========================================
   ICÔNES SVG POUR LA SECTION "POURQUOI NOUS CHOISIR"
   ======================================== */

export const IconeChantierPropre = () => (
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

export const IconePlanning = () => (
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

export const IconeFinitions = () => (
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

export const IconeDevis = () => (
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

