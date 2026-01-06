/*
  Page Services Hub - Vue d'ensemble de tous les services AR+SOLUTION
  
  L'utilisateur voit :
  - Un en-tête avec la promesse principale et les badges de confiance (RGE, Décennale)
  - Une grille de 4 cartes présentant chaque service (Plâtrerie, Isolation, Peinture, Aménagement)
  - Une section dédiée aux marchés publics pour les collectivités
  - La méthode de travail en 4 étapes claires
  - Un aperçu des dernières réalisations
  - Les raisons de choisir AR+SOLUTION avec une FAQ rapide
  - Un bloc final pour demander un devis

  L'utilisateur peut :
  - Cliquer sur une carte service pour accéder à la page détaillée
  - Accéder à l'espace marchés publics
  - Consulter les réalisations
  - Lire les réponses aux questions fréquentes
  - Demander un devis gratuit via le CTA
*/

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import CtaBlock from "@/components/common/CtaBlock";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TrustBar from "@/components/common/TrustBar";
import ServiceHero from "@/components/services/ServiceHero";
import MobileStickyBar from "@/components/services/MobileStickyBar";
import ServiceMethodSection from "@/components/services/ServiceMethodSection";
import ServiceRealisationsSection from "@/components/services/ServiceRealisationsSection";
import ServiceFeaturesGrid from "@/components/services/ServiceFeaturesGrid";
import ServiceFAQSection from "@/components/services/ServiceFAQSection";

// Code splitting dynamique pour les composants lourds
const MarchesPublicsSection = dynamic(
  () => import("@/components/services/MarchesPublicsSection"),
  { ssr: true }
);
const ServiceStructuredData = dynamic(
  () => import("@/components/services/ServiceStructuredData"),
  { ssr: true }
);
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
  servicesData,
  barreConfianceGenerique,
  marchesPublicsAvantages,
  documentsMarchesPublicsGenerique,
  methodeEtapes,
  realisationsApercu,
  raisonsChoisir,
  faqRapide,
} from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Nos Services | Plâtrerie, Isolation, Peinture & Aménagement à Strasbourg | AR+SOLUTION",
  description:
    "Découvrez nos services de rénovation intérieure à Strasbourg : plâtrerie, isolation thermique RGE, peinture et aménagement. Certifié Qualibat, garantie décennale. Devis gratuit.",
  keywords: [
    "services rénovation Strasbourg",
    "plâtrerie isolation aménagement",
    "travaux intérieurs Alsace",
    "entreprise RGE Qualibat",
    "devis gratuit rénovation",
  ],
  openGraph: {
    title: "Nos Services | Plâtrerie, Isolation, Peinture & Aménagement à Strasbourg | AR+SOLUTION",
    description:
      "Découvrez nos services de rénovation intérieure à Strasbourg : plâtrerie, isolation thermique RGE, peinture et aménagement. Certifié Qualibat, garantie décennale.",
    type: "website",
    locale: "fr_FR",
    url: "https://ar-solution.fr/services",
    siteName: "AR+SOLUTION",
    images: [
      {
        url: "https://ar-solution.fr/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Services AR+SOLUTION - Rénovation intérieure Strasbourg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos Services | Plâtrerie, Isolation, Peinture & Aménagement à Strasbourg | AR+SOLUTION",
    description:
      "Découvrez nos services de rénovation intérieure à Strasbourg : plâtrerie, isolation thermique RGE, peinture et aménagement. Certifié Qualibat, garantie décennale.",
    images: ["https://ar-solution.fr/og-services.jpg"],
  },
  alternates: {
    canonical: "https://ar-solution.fr/services",
  },
};



export default function ServicesPage() {
  return (
    <>
      {/* Header - Navigation principale sticky */}
      <Header pageActive="services" />

      <main className="mt-20">
      {/* ========================================
          SECTION 1 : HERO HEADER
          En-tête avec promesse principale, badges de confiance et boutons d'action
      ======================================== */}
      <ServiceHero
        title="Nos services de rénovation intérieure & isolation"
        titleHighlight="Strasbourg / Alsace"
        subtitle="Plâtrerie, Isolation, Peinture. Nous transformons vos espaces avec une exigence absolue sur les finitions et la propreté. Pour les particuliers et les marchés publics."
        badges={[
          { label: "Strasbourg & Alsace", variant: "location" },
          { label: "RGE Qualibat", variant: "certification" },
          { label: "Décennale", variant: "certification" },
        ]}
        ctaLinks={[
          { label: "Demander un devis gratuit", href: "/contact", variant: "primary" },
          { label: "Accès Acheteurs Publics", href: "/marches-publics", variant: "secondary" },
        ]}
      />

      {/* ========================================
          BARRE DE CONFIANCE - Preuves sociales
          Affiche les certifications et avantages clés
      ======================================== */}
      <TrustBar items={barreConfianceGenerique} />

      {/* ========================================
          SECTION 2 : GRILLE DES SERVICES
          4 cartes présentant chaque service avec lien vers la page détaillée
      ======================================== */}
      <section 
        className="py-16 md:py-24 bg-gray-100" 
        id="services"
        aria-labelledby="services-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête de section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 
              id="services-title"
              className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 sm:mb-5 md:mb-6"
            >
              Une expertise complète pour vos travaux de second œuvre
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Nous coordonnons l'ensemble de ces lots pour vous offrir un interlocuteur
              unique et un chantier fluide.
            </p>
          </div>

          {/* Grille des 4 cartes services avec design moderne */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            role="list"
            aria-label="Liste des services proposés"
          >
            {servicesData.map((service, index) => (
              <Card
                key={service.id}
                role="listitem"
                className="group relative overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 border-2 border-gray-200 hover:border-brand-orange bg-white pt-0 h-full motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.02] motion-reduce:transition-none"
                style={{
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Image en en-tête avec effet zoom au survol */}
                <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden bg-gray-200">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    priority={index < 4}
                    loading={index < 4 ? "eager" : "lazy"}
                    className="object-cover object-center motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out"
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
                    {service.title}
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
                    aria-label={`Prestations incluses dans ${service.title}`}
                  >
                    {service.points.map((point) => (
                      <li 
                        key={point} 
                        className="flex items-start"
                        role="listitem"
                      >
                        <span 
                          className="text-brand-orange mt-1 sm:mt-1.5 mr-2 font-bold flex-shrink-0" 
                          aria-hidden="true"
                        >
                          •
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Footer avec bouton "En savoir plus" amélioré */}
                <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
                  <Link
                    href={service.lien}
                    className="inline-flex items-center text-brand-orange font-bold hover:text-brand-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded transition-all duration-300 group/link w-full justify-between text-sm sm:text-base"
                    aria-label={`En savoir plus sur ${service.title} - ${service.accroche}`}
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

      {/* ========================================
          SECTION 3 : FOCUS MARCHÉS PUBLICS
          Section dédiée aux collectivités et gestionnaires publics
      ======================================== */}
      <MarchesPublicsSection
        avantages={marchesPublicsAvantages}
        documents={documentsMarchesPublicsGenerique}
      />

      {/* ========================================
          SECTION 4 : LA MÉTHODE
          Les 4 étapes du processus de travail pour rassurer le client
      ======================================== */}
      <ServiceMethodSection
        title="Votre projet en 4 étapes claires"
        subtitle="Fini le stress des travaux. Nous balisons chaque étape pour votre sérénité."
        etapes={methodeEtapes}
        variant="list"
        backgroundVariant="white"
      />

      {/* ========================================
          SECTION 5 : RÉALISATIONS
          Aperçu de 3 projets récents pour montrer le savoir-faire
      ======================================== */}
      <ServiceRealisationsSection
        title="Nos réalisations parlent pour nous"
        subtitle="Découvrez la qualité de nos finitions sur des chantiers récents à Strasbourg, Illkirch, Schiltigheim..."
        realisations={realisationsApercu.map(r => ({
          ...r,
          type: r.lieu.includes("Marché") ? "Marché Public" : "Résidentiel"
        }))}
        voirToutLink="/realisations"
        voirToutText="Explorer le portfolio"
        variant="gray"
      />

      {/* ========================================
          SECTION 6 : POURQUOI NOUS
          Arguments de différenciation
      ======================================== */}
      <ServiceFeaturesGrid
        title="Pourquoi choisir AR+SOLUTION ?"
        subtitle="Des engagements concrets qui font la différence"
        features={raisonsChoisir.map((raison, index) => ({
          id: `raison-${index}`,
          titre: raison.titre,
          description: raison.description,
          icone: raison.icone,
          iconeColor: raison.couleurType === "green" ? "green" : raison.couleurType === "amber" || raison.couleurType === "purple" ? "orange" : "blue"
        }))}
        columns={2}
        variant="gray"
      />

      {/* ========================================
          SECTION 7 : FAQ RAPIDE
          Réponses aux questions fréquentes
      ======================================== */}
      <ServiceFAQSection
        title="Questions fréquentes"
        items={faqRapide}
        variant="white"
      />

      {/* ========================================
          SECTION 8 : CTA FINAL
          Bloc de conversion pour inciter à demander un devis
      ======================================== */}
      <CtaBlock
        titre="Prêt à lancer votre projet ?"
        description="Obtenez un chiffrage précis et gratuit pour vos travaux de rénovation ou d'isolation en Alsace. Sans engagement."
        texteTelephone="Une question ? 03 88 00 00 00"
      />
    </main>

      {/* Footer réutilisable */}
      <Footer />

      {/* ============================================
          BARRE STICKY MOBILE
          Affichée uniquement sur mobile, permet d'appeler ou demander un devis rapidement
          ============================================ */}
      <MobileStickyBar
        phoneNumber="tel:0388000000"
        devisLink="/contact"
        devisText="Devis Gratuit"
      />

      {/* ============================================
          DONNÉES STRUCTURÉES SEO
          Schema.org pour améliorer le référencement
          ============================================ */}
      <ServiceStructuredData
        serviceName="Services de Rénovation Intérieure"
        serviceDescription="Services de rénovation intérieure à Strasbourg : plâtrerie, isolation thermique RGE, peinture et aménagement. Certifié Qualibat, garantie décennale. Devis gratuit."
        serviceUrl="/services"
        serviceType="Rénovation intérieure"
        faqItems={faqRapide}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
    </>
  );
}

