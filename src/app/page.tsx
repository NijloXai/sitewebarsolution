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

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/common/Header";
import TrustBar from "@/components/common/TrustBar";
import Footer from "@/components/common/Footer";
import GridScan from "@/components/common/GridScan";
import ContactFormHome from "@/components/common/ContactFormHome";
import BeforeAfterSlider from "@/components/common/BeforeAfterSlider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  barreConfianceItems,
  profilsClients,
  services as servicesData,
  argumentsChoix as argumentsChoixData,
  etapesMethode as etapesMethodeData,
  documentsMarchesPublics,
  avisClients,
  villesIntervention,
  realisationFeatured
} from "@/lib/home-data";
import {
  iconesServices,
  iconesArguments,
  iconesEtapes,
  IconeDossiersAdmin,
  IconeSiteOccupe,
  IconeInterlocuteurUnique,
  getDocumentIcon
} from "@/components/icons/HomeIcons";


/* ============================================
   METADATA SEO - Informations pour les moteurs de recherche
   ============================================ */
export const metadata: Metadata = {
  title: "AR+SOLUTION | Plâtrerie, Isolation & Finitions à Strasbourg",
  description: "Expert en rénovation intérieure à Strasbourg et en Alsace. Plâtrerie, isolation RGE, peinture et enduits. Devis gratuit sous 48h. Particuliers et marchés publics.",
  keywords: ["plâtrerie Strasbourg", "isolation RGE Alsace", "rénovation intérieure", "enduits finitions", "marchés publics BTP"],
  openGraph: {
    title: "AR+SOLUTION | Plâtrerie, Isolation & Finitions à Strasbourg",
    description: "Expert en rénovation intérieure à Strasbourg et en Alsace. Plâtrerie, isolation RGE, peinture et enduits. Devis gratuit sous 48h.",
    url: "https://ar-solution.fr",
    siteName: "AR+SOLUTION",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AR+SOLUTION - Travaux de plâtrerie et isolation à Strasbourg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AR+SOLUTION | Plâtrerie, Isolation & Finitions à Strasbourg",
    description: "Expert en rénovation intérieure à Strasbourg et en Alsace. Devis gratuit sous 48h.",
  },
  alternates: {
    canonical: "https://ar-solution.fr",
  },
};


/* ============================================
   DONNÉES STRUCTURÉES JSON-LD (Schema.org)
   ============================================ */

function StructuredData() {
  // URL de base du site (à adapter selon le domaine de production)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ar-solution.fr';

  // Calcul de la note moyenne des avis
  const noteMoyenne = avisClients.reduce((acc, avis) => acc + avis.note, 0) / avisClients.length;

  // Schema Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AR+SOLUTION",
    "legalName": "AR+SOLUTION",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "Expert en rénovation, plâtrerie et isolation à Strasbourg. Partenaire de confiance des particuliers et des marchés publics.",
    "foundingDate": "2006",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-3-88-00-00-00",
      "contactType": "Customer Service",
      "email": "contact@ar-solution.fr",
      "areaServed": "FR",
      "availableLanguage": "French"
    },
    "sameAs": [],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Strasbourg",
      "addressRegion": "Alsace",
      "postalCode": "67000",
      "addressCountry": "FR"
    }
  };

  // Schema WebSite avec SearchAction (recommandé par Google pour les sites avec recherche)
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AR+SOLUTION",
    "alternateName": "AR+ Solution Strasbourg",
    "url": baseUrl,
    "description": "Expert en rénovation intérieure, plâtrerie, isolation et finitions à Strasbourg et en Alsace. Certifié RGE Qualibat.",
    "publisher": {
      "@type": "Organization",
      "name": "AR+SOLUTION",
      "@id": `${baseUrl}#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/recherche?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "fr-FR"
  };

  // Schema LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AR+SOLUTION",
    "image": `${baseUrl}/logo.png`,
    "description": "Entreprise de rénovation, plâtrerie et isolation à Strasbourg. Certifiée RGE. Partenaires des marchés publics et des particuliers.",
    "url": baseUrl,
    "telephone": "+33-3-88-00-00-00",
    "email": "contact@ar-solution.fr",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Strasbourg",
      "addressLocality": "Strasbourg",
      "addressRegion": "Alsace",
      "postalCode": "67000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.5734,
      "longitude": 7.7521
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Strasbourg"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de rénovation",
      "itemListElement": servicesData.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.titre,
          "description": service.accroche,
          "url": `${baseUrl}${service.lien}`
        },
        "position": index + 1
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": parseFloat(noteMoyenne.toFixed(1)),
      "reviewCount": avisClients.length,
      "bestRating": 5,
      "worstRating": 1
    }
  };

  // Schema Service (pour chaque service proposé)
  const servicesSchema = servicesData.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.titre,
    "description": service.accroche,
    "provider": {
      "@type": "LocalBusiness",
      "name": "AR+SOLUTION"
    },
    "areaServed": {
      "@type": "City",
      "name": "Strasbourg"
    },
    "url": `${baseUrl}${service.lien}`,
    "serviceType": service.titre
  }));

  // Schema Review (pour chaque avis client)
  const reviewsSchema = avisClients.map((avis) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": avis.auteur
    },
    "datePublished": avis.date,
    "reviewBody": avis.texte,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": avis.note,
      "bestRating": 5,
      "worstRating": 1
    },
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "AR+SOLUTION"
    }
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {servicesSchema.map((schema, index) => (
        <script
          key={`service-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {reviewsSchema.map((schema, index) => (
        <script
          key={`review-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}


/* ============================================
   HELPERS ET DONNÉES ENRICHIES
   ============================================ */

/* Helper pour obtenir les classes CSS selon le type de couleur (section Pourquoi Choisir) */
const getCouleurClasses = (type: string) => {
  const classes = {
    green: "bg-green-50 text-green-600 border-green-200",
    blue: "bg-brand-blue/5 text-brand-blue border-brand-blue/20",
    amber: "bg-amber-50 text-amber-600 border-amber-200",
    purple: "bg-purple-50 text-purple-600 border-purple-200",
  };
  return classes[type as keyof typeof classes] || classes.blue;
};

/* Helper pour obtenir la classe de délai d'animation */
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

/* Les 4 services principaux enrichis avec les icônes React */
const services = servicesData.map((service) => {
  const IconeComponent = iconesServices[service.iconeId];
  return {
    ...service,
    icone: IconeComponent ? <IconeComponent /> : null,
  };
});

/* Arguments "Pourquoi nous choisir" enrichis avec les icônes React */
const argumentsChoix = argumentsChoixData.map((argument) => {
  const IconeComponent = iconesArguments[argument.iconeId];
  return {
    ...argument,
    icone: IconeComponent ? <IconeComponent /> : null,
  };
});

/* Étapes de la méthode de travail enrichies avec les icônes React */
const etapesMethode = etapesMethodeData.map((etape) => {
  const IconeComponent = iconesEtapes[etape.iconeId];
  return {
    ...etape,
    icone: IconeComponent ? <IconeComponent /> : null,
  };
});

/* Questions fréquentes de la FAQ */
const faqItems = [
  {
    question: "Quels sont vos délais d'intervention ?",
    reponse:
      "Nos délais varient selon la charge, mais nous nous engageons à fournir un devis sous 48h. Pour les travaux, un planning précis est validé avant signature.",
  },
  {
    question: "Êtes-vous certifiés RGE pour les aides ?",
    reponse:
      "Oui, nous sommes certifiés RGE (Reconnu Garant de l'Environnement), ce qui vous rend éligible aux aides de l'État (MaPrimeRénov', CEE) pour les travaux d'isolation.",
  },
  {
    question: "Comment garantissez-vous la propreté du chantier ?",
    reponse:
      "La protection des sols et du mobilier est systématique avant tout démarrage. Un nettoyage est effectué chaque fin de journée.",
  },
];


/* ============================================
   PAGE D'ACCUEIL
   ============================================ */

export default function PageAccueil() {
  return (
    <>
      {/* Données structurées JSON-LD pour le SEO */}
      <StructuredData />

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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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
                  className="bg-brand-orange-dark hover:bg-brand-orange text-white shadow-lg"
                >
                  <a href="#contact" aria-label="Demander un devis gratuit">Demander un devis gratuit</a>
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
        <section className="py-16 md:py-24 bg-white" id="profils">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Titre de la section */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 md:mb-6">
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
                  className="group relative overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-out flex flex-col focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 border-2 border-gray-200 hover:border-brand-orange/50 bg-white pt-0"
                  style={{
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {/* Image de la carte */}
                  <div className="relative h-52 md:h-56 overflow-hidden bg-gray-200">
                    <Image
                      src={profil.image}
                      alt={profil.titre}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
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
          className="py-16 md:py-24 bg-gray-100" 
          id="services"
          aria-labelledby="services-title"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Titre de la section */}
            <div className="text-center mb-12 sm:mb-14 md:mb-16">
              <h2 
                id="services-title"
                className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 md:mb-6"
              >
                Nos domaines d&apos;intervention en Alsace
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                Une maîtrise technique complète pour le second œuvre.
              </p>
            </div>

            {/* Grille des 4 cartes services */}
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
              role="list"
              aria-label="Liste des services proposés"
            >
              {services.map((service) => (
                <Card
                  key={service.id}
                  role="listitem"
                  className="group relative overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 border-2 border-gray-200 hover:border-brand-orange bg-white pt-0 h-full motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.02] motion-reduce:transition-none"
                  style={{
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {/* Image avec effet zoom au survol */}
                  <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden bg-gray-200">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-70 motion-safe:group-hover:opacity-50 motion-safe:transition-opacity motion-safe:duration-500 motion-safe:ease-out" />
                    {/* Tag/Badge coloré */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <Badge
                        className={`${service.tagColor} text-white border-0 rounded-md shadow-lg uppercase font-bold tracking-wide text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1`}
                        aria-label={`Catégorie: ${service.tag}`}
                      >
                        {service.tag}
                      </Badge>
                    </div>
                    {/* Icône du service */}
                    <div
                      className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 ${
                        service.iconeColor === "orange"
                          ? "bg-brand-orange-dark/90 text-white"
                          : "bg-brand-blue/90 text-white"
                      } rounded-lg flex items-center justify-center shadow-xl backdrop-blur-sm motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out`}
                      aria-hidden="true"
                    >
                      {service.icone}
                    </div>
                  </div>

                  {/* Contenu de la carte */}
                  <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4 flex-1 flex flex-col">
                    <h3 
                      className="text-lg sm:text-xl md:text-2xl text-brand-blue-dark font-bold mb-2 sm:mb-3 leading-tight motion-safe:group-hover:text-brand-orange motion-safe:transition-colors motion-safe:duration-300"
                    >
                      {service.titre}
                    </h3>
                    <CardDescription 
                      className="text-brand-orange-dark font-semibold text-xs sm:text-sm md:text-base mb-3 sm:mb-4"
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

                  {/* Footer avec bouton "En savoir plus" */}
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
            Le visiteur peut basculer entre les images Avant et Après
            ============================================ */}
        <section className="py-16 md:py-24 bg-white" id="realisations">
          <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
            {/* En-tête de la section */}
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
              
              {/* Titre principal */}
              <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-2 sm:px-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-2 sm:mb-3 md:mb-4 leading-tight">
                  Nos réalisations parlent pour nous
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto md:mx-0 leading-relaxed">
                  Découvrez la qualité de nos finitions sur des chantiers
                  récents.
                </p>
              </div>

              {/* Bouton CTA vers le portfolio */}
              <div className="flex justify-center md:justify-start px-2 sm:px-0">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-orange-dark hover:bg-brand-orange text-white shadow-lg hover:shadow-xl transition-all duration-300 font-bold w-full sm:w-auto min-h-[48px] sm:min-h-auto px-5 sm:px-6 text-sm sm:text-base"
                >
                  <Link href="/realisations" aria-label="Explorer le portfolio de réalisations">
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
            <BeforeAfterSlider realisation={realisationFeatured} />
          </div>
        </section>

        {/* ============================================
            POURQUOI NOUS + MÉTHODE
            Section en 2 colonnes : arguments de différenciation à gauche, méthode de travail à droite
            ============================================ */}
        <section className="py-16 md:py-24 bg-gray-50 overflow-hidden" id="pourquoi-choisir" aria-labelledby="pourquoi-choisir-title">
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
                      className={`group relative bg-white rounded-xl border-2 p-4 md:p-5 transition-all duration-300 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left will-change-transform-opacity ${getAnimationDelayClass(index)}`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Icône avec couleur spécifique */}
                        <div className="flex-shrink-0">
                          <div className={`flex items-center justify-center h-12 w-12 rounded-xl border-2 ${getCouleurClasses(argument.couleurType)} transition-all duration-300 will-change-transform`}>
                            {argument.icone}
                          </div>
                        </div>
                        {/* Texte de l'argument */}
                        <div className="flex-1 pt-1">
                          <h4 className="text-lg md:text-xl font-bold text-brand-blue mb-2 transition-colors duration-300">
                            {argument.titre}
                          </h4>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {argument.description}
                          </p>
                        </div>
                      </div>
                      {/* Ligne décorative au survol */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-blue to-transparent opacity-0 transition-opacity duration-300 rounded-b-xl will-change-opacity" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Colonne droite : Méthode de travail (stepper) */}
              <Card className="shadow-sm border border-gray-200 transition-shadow duration-500 ease-in-out">
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
                              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 border-2 border-brand-orange/20 flex items-center justify-center transition-all duration-300 ease-in-out will-change-transform">
                                {/* Icône SVG avec rotation au hover */}
                                <div className="absolute inset-0 flex items-center justify-center text-brand-orange transition-transform duration-300 ease-in-out">
                                  <div className="w-6 h-6 md:w-7 md:h-7">
                                    {etape.icone}
                                  </div>
                                </div>
                                {/* Numéro en overlay (coin supérieur droit) */}
                                <div className="absolute -top-1.5 -right-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full bg-brand-orange-dark text-white flex items-center justify-center text-xs md:text-sm font-bold shadow-md transition-all duration-300 ease-in-out z-10">
                                  {etape.numero}
                                </div>
                              </div>
                            </div>
                            {/* Contenu de l'étape */}
                            <div className="flex-1 pt-0.5">
                              <h5 className="font-bold text-brand-blue text-base md:text-lg mb-1.5 md:mb-2 transition-colors duration-300 ease-in-out">
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
                  {/* Badge de confiance */}
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
          className="py-16 md:py-24 bg-brand-blue text-white relative overflow-hidden"
          id="marches-publics"
        >
          {/* Gradient animé en arrière-plan pour effet de profondeur */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-dark/20 via-transparent to-brand-blue-dark/20 opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center">
              {/* Contenu texte */}
              <div className="space-y-6 md:space-y-8">
                {/* Badge "Espace Collectivités" */}
                <Badge
                  variant="outline"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue-light/90 to-brand-blue/90 text-white/90 border-brand-blue-light/50 text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full uppercase tracking-wider shadow-lg shadow-brand-blue-dark/30 backdrop-blur-sm hover:shadow-xl hover:shadow-brand-blue-dark/40 hover:scale-105 hover:border-brand-blue-light/70 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-dark group/badge"
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
                
                {/* Titre principal */}
                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white">
                    Acheteurs Publics : un partenaire conforme et réactif.
                  </h2>
                  
                  {/* Description */}
                  <p className="text-white/80 text-base md:text-lg leading-relaxed tracking-normal max-w-2xl">
                    Nous connaissons vos contraintes. AR+SOLUTION structure ses
                    offres pour répondre aux exigences des marchés publics
                    (Écoles, Mairies, Bâtiments administratifs).
                  </p>
                </div>

                {/* Liste des avantages */}
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
                      className={`flex items-start gap-3 sm:gap-4 group/advantage transition-all duration-300 will-change-transform ${getAnimationDelayClass(index)}`}
                    >
                      <div className="flex-shrink-0 mt-0.5 relative">
                        <div className="transition-all duration-300 will-change-transform">
                          {item.icone}
                        </div>
                        {/* Cercle de pulsation autour de l'icône au survol */}
                        <div className="absolute inset-0 rounded-full bg-brand-orange/20 scale-0 opacity-0 transition-all duration-500 -z-10 -m-2 will-change-transform-opacity" />
                      </div>
                      <span className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                        {item.texte}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA email */}
                <div className="pt-2 md:pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-brand-blue hover:bg-gray-100 shadow-lg hover:shadow-xl hover:shadow-white/20 transition-all duration-300 ease-out font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 group/button"
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

              {/* Grille des documents disponibles */}
              <div className="bg-brand-blue-dark/50 p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl border border-brand-blue-light/30 shadow-2xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                  {documentsMarchesPublics.map((doc, index) => (
                    <Card
                      key={doc.titre}
                      className="group relative bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-blue border-2 border-brand-blue-light/60 flex flex-col items-center text-center overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 focus-within:ring-offset-brand-blue-dark"
                      style={{
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: "both"
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Document: ${doc.titre} - ${doc.disponibilite}`}
                    >
                      {/* Bordure lumineuse au focus */}
                      <div className="absolute inset-0 border-2 border-transparent rounded-lg pointer-events-none group-focus-within:border-brand-orange/50" />
                      
                      <CardContent className="p-4 md:p-5 lg:p-6 relative z-10 w-full">
                        {/* Icône document */}
                        <div className="mb-3 md:mb-4 text-white/70 flex justify-center group-focus-within:scale-110 group-focus-within:text-brand-orange">
                          <div className="relative">
                            <div className="group-focus-within:rotate-6">
                              {getDocumentIcon(doc.titre, "w-10 h-10 md:w-12 md:h-12")}
                            </div>
                            {/* Cercle de pulsation au focus */}
                            <div className="absolute inset-0 rounded-full bg-brand-orange/20 scale-0 opacity-0 group-focus-within:opacity-100 group-focus-within:scale-150 transition-all duration-500 -z-10" />
                          </div>
                        </div>
                        
                        {/* Titre */}
                        <CardTitle className="text-sm md:text-base lg:text-lg text-white mb-2 md:mb-3 font-bold leading-tight group-focus-within:text-brand-orange">
                          {doc.titre}
                        </CardTitle>
                        
                        {/* Badge de disponibilité */}
                        <div className="flex justify-center">
                          <Badge
                            variant="outline"
                            className={`text-xs md:text-sm px-2 md:px-3 py-1 md:py-1.5 rounded-full font-semibold border-2 ${
                              doc.disponibilite === "Disponible"
                                ? "bg-green-500/20 text-green-200 border-green-400/50"
                                : "bg-amber-500/20 text-amber-200 border-amber-400/50"
                            }`}
                          >
                            <span className="flex items-center gap-1.5">
                              {doc.disponibilite === "Disponible" ? (
                                <>
                                  <svg
                                    className="w-3 h-3 md:w-3.5 md:h-3.5"
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
                                    className="w-3 h-3 md:w-3.5 md:h-3.5"
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
                      
                      {/* Effet de profondeur au focus */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/0 via-brand-orange/0 to-brand-orange/0 rounded-lg blur-xl opacity-0 group-focus-within:opacity-100 group-focus-within:from-brand-orange/10 group-focus-within:via-brand-orange/5 group-focus-within:to-brand-orange/10 transition-opacity duration-500 -z-10" />
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
        <section className="py-16 md:py-24 bg-white" id="avis" role="region" aria-labelledby="avis-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Colonne gauche : Avis Google */}
              <div>
                <h2 id="avis-title" className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
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

                  {/* Liste des avis */}
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
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm text-brand-blue font-semibold hover:text-brand-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-dark focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 rounded-md transition-all duration-300 hover:bg-brand-orange/5 focus-visible:bg-brand-orange/5 underline decoration-2 underline-offset-2 group/link"
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
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                  Zone d&apos;intervention
                </h2>
                <div className="bg-brand-blue/5 p-6 rounded-xl border border-brand-blue/10 h-full">
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
                  <div className="relative w-full h-32 bg-gray-200 rounded overflow-hidden">
                    <Image
                      src="https://placehold.co/600x200?text=Carte+Alsace+Strasbourg"
                      alt="Carte Zone Intervention"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-60"
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
        <section className="py-16 md:py-24 bg-gray-100" id="contact">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* FAQ Accordéon - Répond aux questions courantes avant le formulaire */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6 text-center">
                Questions Fréquentes
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-lg shadow-sm px-4"
                  >
                    <AccordionTrigger className="font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      {item.reponse}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Formulaire de demande de devis - Composant client séparé */}
            <ContactFormHome />
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
          className="flex-1 bg-brand-orange-dark hover:bg-brand-orange text-white font-bold shadow-md"
        >
          <a href="#contact" aria-label="Demander un devis gratuit">Devis Gratuit</a>
        </Button>
      </div>
    </>
  );
}
