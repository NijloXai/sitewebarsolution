/**
 * Helpers communs pour les pages de services
 * 
 * Ce fichier contient les fonctions utilitaires partagées entre
 * les différentes pages de services pour éviter la duplication de code.
 */

import { ReactElement } from "react";

/**
 * Helper pour obtenir les classes CSS d'animation delay selon l'index
 * 
 * @param index - L'index de l'élément dans la liste (0-5)
 * @returns La classe CSS correspondante (animate-delay-0 à animate-delay-500)
 * 
 * @example
 * ```tsx
 * {items.map((item, index) => (
 *   <div className={getAnimationDelayClass(index)}>
 *     {item}
 *   </div>
 * ))}
 * ```
 */
export const getAnimationDelayClass = (index: number): string => {
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

/**
 * Fonction pour obtenir l'icône appropriée selon le type de document
 * 
 * Retourne un composant SVG React correspondant au type de document :
 * - RGE / URSSAF : Badge/certificat
 * - Décennale : Bouclier de garantie
 * - RC Pro / Kbis / PV : Document avec sceau
 * - Fiches techniques / Références : Document avec badge
 * - Par défaut : Dossier avec onglets
 * 
 * @param titre - Le titre du document à analyser
 * @param className - Classes CSS optionnelles pour l'icône (défaut: "w-8 h-8")
 * @returns Un élément React SVG représentant l'icône du document
 * 
 * @example
 * ```tsx
 * {getDocumentIcon("Attestation RGE", "w-10 h-10")}
 * ```
 */
export const getDocumentIcon = (titre: string, className?: string): ReactElement => {
  const baseClass = className || "w-8 h-8";
  
  if (titre.includes("RGE") || titre.includes("URSSAF")) {
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    );
  } else if (
    titre.includes("RC Pro") || 
    titre.includes("Kbis") || 
    titre.includes("PV") ||
    titre.includes("Fiches techniques") ||
    titre.includes("Références")
  ) {
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
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
    // Icône de dossier par défaut
    return (
      <svg
        className={baseClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    );
  }
};

/**
 * Helper pour obtenir les classes CSS selon le type de couleur
 * 
 * Retourne les classes Tailwind CSS pour les couleurs de badges/cartes :
 * - green : Fond vert clair, texte vert foncé, bordure verte
 * - blue : Fond bleu clair, texte bleu foncé, bordure bleue
 * - amber : Fond ambre clair, texte ambre foncé, bordure ambre
 * - purple : Fond violet clair, texte violet foncé, bordure violette
 * 
 * @param type - Le type de couleur (green, blue, amber, purple)
 * @returns Les classes CSS correspondantes (défaut: blue)
 * 
 * @example
 * ```tsx
 * <div className={getCouleurClasses("green")}>
 *   Contenu
 * </div>
 * ```
 */
export const getCouleurClasses = (type: string): string => {
  const classes = {
    green: "bg-green-50 text-green-600 border-green-200",
    blue: "bg-brand-blue/5 text-brand-blue border-brand-blue/20",
    amber: "bg-amber-50 text-amber-600 border-amber-200",
    purple: "bg-purple-50 text-purple-600 border-purple-200",
  };
  return classes[type as keyof typeof classes] || classes.blue;
};

