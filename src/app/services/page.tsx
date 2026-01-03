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
import CtaBlock from "@/components/CtaBlock";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import ServiceHero from "@/components/services/ServiceHero";
import MobileStickyBar from "@/components/services/MobileStickyBar";

// Code splitting dynamique pour les composants lourds
const MarchesPublicsSection = dynamic(
  () => import("@/components/services/MarchesPublicsSection"),
  { ssr: true }
);
const ServiceStructuredData = dynamic(
  () => import("@/components/services/ServiceStructuredData"),
  { ssr: true }
);
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { getAnimationDelayClass, getCouleurClasses } from "@/lib/services-helpers";
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
                className="group relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 border-2 border-gray-200 hover:border-brand-orange bg-white pt-0 h-full motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.02] motion-reduce:transition-none"
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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête de section */}
          <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 md:mb-6">
              Votre projet en 4 étapes claires
            </h2>
            <p className="text-gray-600 text-lg">
              Fini le stress des travaux. Nous balisons chaque étape pour votre sérénité.
            </p>
          </div>

          {/* Cartes empilées avec icônes SVG et numéros en overlay */}
          <Card className="shadow-sm border border-gray-200 transition-shadow duration-500 ease-in-out max-w-4xl mx-auto">
            <CardContent className="p-5 md:p-6 lg:p-7">
              {/* Timeline modernisée : cartes empilées avec numéros discrets */}
              <div className="space-y-5 md:space-y-6">
                {methodeEtapes.map((etape, index) => (
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
                            <div className="absolute -top-1.5 -right-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full bg-brand-orange text-white flex items-center justify-center text-xs md:text-sm font-bold shadow-md transition-all duration-300 ease-in-out z-10">
                              {etape.numero}
                            </div>
                          </div>
                        </div>
                        {/* Contenu de l'étape */}
                        <div className="flex-1 pt-0.5">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <h5 className="font-bold text-brand-blue text-base md:text-lg mb-1.5 md:mb-2 transition-colors duration-300 ease-in-out">
                                {etape.titre}
                              </h5>
                              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                {etape.description}
                              </p>
                            </div>
                            {/* Badge spécial si présent */}
                            {etape.badge && (
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex-shrink-0">
                                {etape.badge}
                              </Badge>
                            )}
                          </div>
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
      </section>

      {/* ========================================
          SECTION 5 : RÉALISATIONS
          Aperçu de 3 projets récents pour montrer le savoir-faire
      ======================================== */}
      <section className="py-16 md:py-24 bg-gray-50" id="realisations">
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
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2 sm:mb-3 md:mb-4 leading-tight">
                Nos réalisations parlent pour nous
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto md:mx-0 leading-relaxed">
                Découvrez la qualité de nos finitions sur des chantiers récents à Strasbourg, Illkirch, Schiltigheim...
              </p>
            </div>

            {/* Bouton CTA visible sur toutes les tailles d'écran - Optimisé mobile */}
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

          {/* Grille des 3 projets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realisationsApercu.map((projet, index) => (
              <div
                key={projet.id}
                className="group relative overflow-hidden rounded-xl shadow-md"
              >
                <Image
                  src={projet.image}
                  alt={projet.titre}
                  width={600}
                  height={500}
                  loading="lazy"
                  className="w-full h-80 object-cover transition-transform duration-500"
                />
                {/* Overlay avec informations du projet */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <span className="text-brand-orange text-xs font-bold uppercase mb-1">
                    {projet.lieu}
                  </span>
                  <h3 className="text-white font-bold text-lg">{projet.titre}</h3>
                  <p className="text-slate-300 text-sm mt-1 opacity-0 transition-opacity">
                    {projet.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 6 : POURQUOI NOUS + FAQ RAPIDE
          Arguments de différenciation et réponses aux questions fréquentes
      ======================================== */}
      <section className="py-16 md:py-24 bg-gray-50 overflow-hidden" id="pourquoi-choisir" aria-labelledby="pourquoi-choisir-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Colonne gauche : Pourquoi nous choisir */}
            <div>
              <div className="mb-8 md:mb-10">
                <h2 id="pourquoi-choisir-title" className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 md:mb-6">
                  Pourquoi choisir AR+SOLUTION ?
                </h2>
                <p className="text-gray-600 text-lg">
                  Des engagements concrets qui font la différence
                </p>
              </div>
              <div className="space-y-4 md:space-y-5">
                {raisonsChoisir.map((argument, index) => (
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
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl will-change-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne droite : FAQ rapide */}
            <div className="lg:w-1/2 bg-slate-100 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold mb-6">FAQ Rapide</h3>
              <div className="space-y-4">
                {faqRapide.map((item, index) => (
                  <details
                    key={index}
                    className="group bg-white rounded-lg p-4 shadow-sm cursor-pointer"
                  >
                    <summary className="flex justify-between items-center font-medium list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-dark focus-visible:ring-offset-2 rounded">
                      <span>{item.question}</span>
                      <span className="transition group-open:rotate-180 text-blue-600" aria-hidden="true">
                        ▼
                      </span>
                    </summary>
                    <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                      {item.reponse}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 7 : CTA FINAL
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

