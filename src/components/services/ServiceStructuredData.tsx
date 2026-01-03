/**
 * Composant pour générer les données structurées Schema.org pour les pages de services
 * 
 * Ce composant génère automatiquement les schémas JSON-LD suivants :
 * - LocalBusiness : Informations sur l'entreprise AR+SOLUTION
 * - Service : Détails du service spécifique de la page
 * - FAQPage : Questions fréquentes si fournies
 * - BreadcrumbList : Fil d'Ariane pour la navigation
 * 
 * @example
 * ```tsx
 * <ServiceStructuredData
 *   serviceName="Plâtrerie & Faux-plafonds"
 *   serviceDescription="Plâtrerie technique à Strasbourg..."
 *   serviceUrl="/services/platrerie"
 *   faqItems={[
 *     { question: "Quel délai?", reponse: "48h" }
 *   ]}
 *   breadcrumbs={[
 *     { name: "Accueil", url: "/" },
 *     { name: "Services", url: "/services" },
 *     { name: "Plâtrerie", url: "/services/platrerie" }
 *   ]}
 * />
 * ```
 */

import { FAQItem } from "./ServiceFAQSection";

/* ============================================
   TYPES ET INTERFACES
   ============================================ */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ServiceStructuredDataProps {
  /** Nom du service (ex: "Plâtrerie & Faux-plafonds") */
  serviceName: string;
  /** Description détaillée du service */
  serviceDescription: string;
  /** URL canonique de la page de service (ex: "/services/platrerie") */
  serviceUrl: string;
  /** Type de service pour Schema.org (ex: "Plâtrerie", "Isolation thermique") */
  serviceType?: string;
  /** Liste des questions/réponses pour générer FAQPage (optionnel) */
  faqItems?: FAQItem[];
  /** Fil d'Ariane pour BreadcrumbList (optionnel) */
  breadcrumbs?: BreadcrumbItem[];
  /** URL de base du site (par défaut: https://ar-solution.fr) */
  baseUrl?: string;
}

/* ============================================
   COMPOSANT PRINCIPAL
   ============================================ */

export default function ServiceStructuredData({
  serviceName,
  serviceDescription,
  serviceUrl,
  serviceType,
  faqItems = [],
  breadcrumbs = [],
  baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ar-solution.fr",
}: ServiceStructuredDataProps) {
  // Construction de l'URL complète du service
  const fullServiceUrl = serviceUrl.startsWith("http")
    ? serviceUrl
    : `${baseUrl}${serviceUrl.startsWith("/") ? serviceUrl : `/${serviceUrl}`}`;

  // ============================================
  // SCHEMA LOCALBUSINESS
  // Informations sur l'entreprise AR+SOLUTION
  // ============================================
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#localbusiness`,
    name: "AR+SOLUTION",
    image: `${baseUrl}/logo.png`,
    description:
      "Entreprise de rénovation, plâtrerie et isolation à Strasbourg. Certifiée RGE Qualibat. Partenaires des marchés publics et des particuliers.",
    url: baseUrl,
    telephone: "+33-3-88-00-00-00",
    email: "contact@ar-solution.fr",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Strasbourg",
      addressLocality: "Strasbourg",
      addressRegion: "Alsace",
      postalCode: "67000",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.5734,
      longitude: 7.7521,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Strasbourg",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.8,
      reviewCount: 45,
      bestRating: 5,
      worstRating: 1,
    },
  };

  // ============================================
  // SCHEMA SERVICE
  // Détails du service spécifique de la page
  // ============================================
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}#localbusiness`,
      name: "AR+SOLUTION",
    },
    areaServed: {
      "@type": "City",
      name: "Strasbourg",
    },
    url: fullServiceUrl,
    serviceType: serviceType || serviceName,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "EUR",
        price: "0",
        valueAddedTaxIncluded: true,
      },
    },
  };

  // ============================================
  // SCHEMA FAQPAGE
  // Questions fréquentes si fournies
  // ============================================
  const faqPageSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.reponse,
            },
          })),
        }
      : null;

  // ============================================
  // SCHEMA BREADCRUMBLIST
  // Fil d'Ariane pour la navigation
  // ============================================
  const breadcrumbListSchema =
    breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: crumb.url.startsWith("http")
              ? crumb.url
              : `${baseUrl}${crumb.url.startsWith("/") ? crumb.url : `/${crumb.url}`}`,
          })),
        }
      : null;

  // ============================================
  // RENDU DES SCRIPTS JSON-LD
  // ============================================
  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema, null, 0),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema, null, 0),
        }}
      />

      {/* FAQPage Schema (si des FAQ sont fournies) */}
      {faqPageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqPageSchema, null, 0),
          }}
        />
      )}

      {/* BreadcrumbList Schema (si un fil d'Ariane est fourni) */}
      {breadcrumbListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbListSchema, null, 0),
          }}
        />
      )}
    </>
  );
}

