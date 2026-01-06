/**
 * Métadonnées SEO centralisées pour les pages de services
 * 
 * Ce fichier contient les helpers et configurations pour générer
 * les métadonnées SEO (OpenGraph, Twitter, etc.) de manière cohérente
 * pour toutes les pages de services.
 */

import type { Metadata } from "next";

/* ============================================
   TYPES ET INTERFACES
   ============================================ */

export interface ServiceMetadataConfig {
  /** Titre de la page (sans le nom de l'entreprise) */
  title: string;
  /** Description de la page */
  description: string;
  /** URL canonique de la page (ex: "/services/platrerie") */
  canonicalUrl: string;
  /** Mots-clés SEO pour la page */
  keywords?: string[];
  /** Nom du fichier image OpenGraph (ex: "og-platrerie.jpg") */
  ogImage?: string;
  /** Texte alternatif pour l'image OpenGraph */
  ogImageAlt?: string;
}

/* ============================================
   CONFIGURATION DE BASE
   ============================================ */

const baseUrl = "https://ar-solution.fr";
const siteName = "AR+SOLUTION";
const defaultOgImage = "https://ar-solution.fr/og-services.jpg";
const defaultOgImageAlt = "Services AR+SOLUTION - Rénovation intérieure Strasbourg";

/* ============================================
   FONCTION HELPER POUR GÉNÉRER LES MÉTADONNÉES
   ============================================ */

/**
 * Génère les métadonnées SEO complètes pour une page de service
 * 
 * @param config - Configuration contenant les informations spécifiques à la page
 * @returns Objet Metadata compatible avec Next.js
 * 
 * @example
 * ```tsx
 * export const metadata = generateServiceMetadata({
 *   title: "Plâtrerie & Faux-plafonds à Strasbourg",
 *   description: "Plâtrerie technique à Strasbourg : cloisons BA13, faux-plafonds acoustiques...",
 *   canonicalUrl: "/services/platrerie",
 *   ogImage: "og-platrerie.jpg",
 *   ogImageAlt: "Plâtrerie et faux-plafonds AR+SOLUTION Strasbourg"
 * });
 * ```
 */
export function generateServiceMetadata(config: ServiceMetadataConfig): Metadata {
  const fullTitle = `${config.title} | AR+SOLUTION`;
  const fullUrl = `${baseUrl}${config.canonicalUrl}`;
  const ogImageUrl = config.ogImage 
    ? `${baseUrl}/${config.ogImage}`
    : defaultOgImage;
  const ogImageAlt = config.ogImageAlt || defaultOgImageAlt;

  return {
    title: fullTitle,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: fullTitle,
      description: config.description,
      type: "website",
      locale: "fr_FR",
      url: fullUrl,
      siteName: siteName,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: config.description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

/* ============================================
   CONFIGURATIONS PRÉDÉFINIES PAR SERVICE
   ============================================ */

/**
 * Métadonnées pour la page principale des services
 */
export const servicesPageMetadata: Metadata = generateServiceMetadata({
  title: "Nos Services | Plâtrerie, Isolation, Peinture & Aménagement à Strasbourg",
  description:
    "Découvrez nos services de rénovation intérieure à Strasbourg : plâtrerie, isolation thermique RGE, peinture et aménagement. Certifié Qualibat, garantie décennale. Devis gratuit.",
  canonicalUrl: "/services",
  keywords: [
    "services rénovation Strasbourg",
    "plâtrerie isolation aménagement",
    "travaux intérieurs Alsace",
    "entreprise RGE Qualibat",
    "devis gratuit rénovation",
  ],
  ogImage: "og-services.jpg",
  ogImageAlt: "Services AR+SOLUTION - Rénovation intérieure Strasbourg",
});

/**
 * Métadonnées pour la page Plâtrerie
 */
export const platreriePageMetadata: Metadata = generateServiceMetadata({
  title: "Plâtrerie & Faux-plafonds à Strasbourg | Cloisons BA13, Site Occupé",
  description:
    "Plâtrerie technique à Strasbourg : cloisons BA13, faux-plafonds acoustiques, doublage thermique. Intervention en site occupé. Certifié RGE Qualibat, garantie décennale. Devis gratuit.",
  canonicalUrl: "/services/platrerie",
  keywords: [
    "plâtrerie Strasbourg",
    "faux-plafonds acoustiques Alsace",
    "cloisons BA13",
    "doublage thermique",
    "plaquiste professionnel Bas-Rhin",
    "site occupé plâtrerie",
  ],
  ogImage: "og-platrerie.jpg",
  ogImageAlt: "Plâtrerie et faux-plafonds AR+SOLUTION Strasbourg",
});

/**
 * Métadonnées pour la page Isolation
 */
export const isolationPageMetadata: Metadata = generateServiceMetadata({
  title: "Isolation Thermique & Phonique RGE à Strasbourg | MaPrimeRénov'",
  description:
    "Isolation thermique et phonique certifiée RGE à Strasbourg. Combles, ITI, sols. Éligible MaPrimeRénov' et aides CEE. Réduction facture énergétique jusqu'à 30%. Devis gratuit.",
  canonicalUrl: "/services/isolation",
  keywords: [
    "isolation thermique Strasbourg",
    "isolation phonique Alsace",
    "RGE MaPrimeRénov",
    "isolation combles Bas-Rhin",
    "ITI isolation intérieure",
    "aides CEE isolation",
  ],
  ogImage: "og-isolation.jpg",
  ogImageAlt: "Isolation thermique et phonique RGE AR+SOLUTION Strasbourg",
});

/**
 * Métadonnées pour la page Aménagement/Peinture
 */
export const amenagementPageMetadata: Metadata = generateServiceMetadata({
  title: "Peinture Intérieure & Aménagement à Strasbourg | Haute Décoration",
  description:
    "Peinture intérieure et aménagement à Strasbourg : décoration résidentielle, bureaux, ERP. Peintures A+ écolabel, finitions soignées, 0% tache garanti. Devis gratuit.",
  canonicalUrl: "/services/amenagement",
  keywords: [
    "peinture intérieure Strasbourg",
    "aménagement intérieur Alsace",
    "décoration bureaux ERP",
    "peintures écolabel A+",
    "peintre professionnel Bas-Rhin",
    "finitions décoratives",
  ],
  ogImage: "og-amenagement.jpg",
  ogImageAlt: "Peinture intérieure et aménagement AR+SOLUTION Strasbourg",
});

/**
 * Métadonnées pour la page Enduits & Finitions
 */
export const enduitsFinitionsPageMetadata: Metadata = generateServiceMetadata({
  title: "Enduits & Finitions à Strasbourg | Ratissage Q4, Airless, Propreté Garantie",
  description:
    "Plâtrerie fine et enduits de finition à Strasbourg : ratissage Q4, enduit projeté Airless, finitions décoratives. Chantier propre garanti, site occupé. Devis gratuit sous 48h.",
  canonicalUrl: "/services/enduits-finitions",
  keywords: [
    "enduits finition Strasbourg",
    "ratissage Q4 Alsace",
    "enduit projeté Airless",
    "plâtrerie fine Bas-Rhin",
    "finitions décoratives murs",
    "chantier propre garanti",
  ],
  ogImage: "og-enduits.jpg",
  ogImageAlt: "Enduits et finitions AR+SOLUTION Strasbourg",
});

