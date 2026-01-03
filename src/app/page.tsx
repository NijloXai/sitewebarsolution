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
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import HomeHero from "@/components/home/HomeHero";
import { ProfilsClients } from "@/components/home/ProfilsClients";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { RealisationsSection } from "@/components/home/RealisationsSection";
import { PourquoiChoisir } from "@/components/home/PourquoiChoisir";
import { MarchesPublicsBlock } from "@/components/home/MarchesPublicsBlock";
import { AvisZoneIntervention } from "@/components/home/AvisZoneIntervention";
import { Button } from "@/components/ui/button";
import { barreConfianceItems, services, avisClients } from "@/lib/home-data";

// Lazy loading des composants en bas de page (non critiques pour le rendu initial)
const FAQ = dynamic(() => import("@/components/FAQ").then(mod => ({ default: mod.FAQ })), {
  ssr: true, // Garder le SSR pour le SEO
});

const ContactForm = dynamic(() => import("@/components/ContactForm").then(mod => ({ default: mod.ContactForm })), {
  ssr: true, // Garder le SSR pour le SEO
});


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
      "itemListElement": services.map((service, index) => ({
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
  const servicesSchema = services.map((service) => ({
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
        <HomeHero />

        {/* ============================================
            BARRE DE CONFIANCE - Preuves sociales
            Affiche les chiffres clés qui rassurent le visiteur (certifications, expérience)
            ============================================ */}
        <TrustBar items={barreConfianceItems} />

        {/* ============================================
            ENTRÉES PAR PROFILS - Le triage des visiteurs
            3 cartes permettant aux visiteurs de s'identifier (Marchés Publics, Pros, Particuliers)
            ============================================ */}
        <ProfilsClients />

        {/* ============================================
            APERÇU SERVICES - Les 4 domaines d'intervention
            Présente les services principaux avec liens vers les pages détaillées
            ============================================ */}
        <ServicesPreview />

        {/* ============================================
            PORTFOLIO AVANT/APRÈS - Preuve visuelle
            Montre un exemple de réalisation avec comparaison avant/après
            ============================================ */}
        <RealisationsSection />

        {/* ============================================
            POURQUOI NOUS + MÉTHODE
            Section en 2 colonnes : arguments de différenciation à gauche, méthode de travail à droite
            ============================================ */}
        <PourquoiChoisir />

        {/* ============================================
            BLOC MARCHÉS PUBLICS - Espace dédié aux collectivités
            Section mise en avant pour les acheteurs publics avec documents disponibles
            ============================================ */}
        <MarchesPublicsBlock />

        {/* ============================================
            AVIS CLIENTS + ZONE D'INTERVENTION
            Section en 2 colonnes : avis Google à gauche, carte zone à droite (SEO local)
            ============================================ */}
        <AvisZoneIntervention />

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
          className="flex-1 bg-brand-orange-dark hover:bg-brand-orange text-white font-bold shadow-md"
          aria-label="Demander un devis gratuit"
        >
          <a href="#contact">Devis Gratuit</a>
        </Button>
      </div>
    </>
  );
}
