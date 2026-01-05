/*
  Page Service Plâtrerie du site AR+SOLUTION.
  
  Cette page présente en détail les prestations de plâtrerie proposées par AR+SOLUTION :
  - Cloisons & Distribution (BA13, cloisons courbes, grande hauteur)
  - Faux Plafonds Techniques (dalles 600x600, acoustiques, coupe-feu)
  - Préparation & Finitions (ratissage, bandes à joint, enduits Q4)
  - Isolation Intérieure (doublage thermique)
  
  L'utilisateur voit :
  - Les différentes prestations avec leurs avantages
  - Les certifications (RGE, Qualibat, Décennale)
  - Des exemples de projets réalisés en Alsace
  - La méthode de travail (propreté, délais)
  - Une FAQ répondant aux questions courantes sur la plâtrerie
  
  L'utilisateur peut :
  - Découvrir quel type de prestation correspond à son besoin
  - Choisir entre les profils : Public, Pro ou Particulier
  - Demander un devis via le formulaire ou le bouton CTA
  - Contacter le service Marchés Publics s'il est acheteur public
*/

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CtaBlock from "@/components/common/CtaBlock";
import TrustBar from "@/components/common/TrustBar";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeaturesGrid from "@/components/services/ServiceFeaturesGrid";
import MobileStickyBar from "@/components/services/MobileStickyBar";

// Code splitting dynamique pour les composants lourds
const ServiceFAQSection = dynamic(
  () => import("@/components/services/ServiceFAQSection"),
  { ssr: true }
);
const ServiceRealisationsSection = dynamic(
  () => import("@/components/services/ServiceRealisationsSection"),
  { ssr: true }
);
const ServiceMethodSection = dynamic(
  () => import("@/components/services/ServiceMethodSection"),
  { ssr: true }
);
const ServiceStructuredData = dynamic(
  () => import("@/components/services/ServiceStructuredData"),
  { ssr: true }
);
const MarchesPublicsSection = dynamic(
  () => import("@/components/services/MarchesPublicsSection"),
  { ssr: true }
);
import { platreriePageMetadata } from "@/lib/services-metadata";
import { barreConfianceGenerique, marchesPublicsAvantages, documentsMarchesPublicsPlatrerie } from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = platreriePageMetadata;

/* ============================================
   DONNÉES DE LA PAGE
   ============================================ */

/* ============================================
   DONNÉES DE LA PAGE
   ============================================ */

// Utilisation des données centralisées
const barreConfianceItems = barreConfianceGenerique;

/* Les 4 prestations de plâtrerie proposées */
const prestationsPlatrerie = [
  {
    id: "cloisons",
    titre: "Cloisons & Distribution",
    description:
      "Création d'espaces, cloisons séparatives, doublage BA13, cloisons courbes ou grande hauteur. Redistribution complète de l'espace intérieur.",
    iconeColor: "blue" as const,
  },
  {
    id: "faux-plafonds",
    titre: "Faux Plafonds Techniques",
    description:
      "Dalles 600x600, plafonds suspendus acoustiques, coupe-feu et intégration luminaires. Solutions pour bureaux, commerces et ERP.",
    iconeColor: "orange" as const,
  },
  {
    id: "finitions",
    titre: "Préparation & Finitions",
    description:
      "Ratissage complet, bandes à joint, enduits de lissage prêts à peindre (Q4). Surfaces parfaites pour vos finitions de peinture.",
    iconeColor: "blue" as const,
    lienTexte: "Voir aussi : Notre lot Peinture",
    lien: "/services/enduits-finitions",
  },
  {
    id: "isolation",
    titre: "Isolation Intérieure",
    description:
      "Doublage thermique des murs, laine de verre, bio-sourcés. Conformité RE2020 et éligibilité aux aides MaPrimeRénov'.",
    iconeColor: "orange" as const,
    lienTexte: "Voir aussi : Isolation RGE",
    lien: "/services/isolation",
  },
];

/* Contenu des onglets pour les 3 profils clients */
const profilsClients = [
  {
    id: "public",
    nomOnglet: "Collectivités & Public",
    icone: "building",
    titre: "Mairies, Écoles & ERP",
    description:
      "Nous comprenons les contraintes strictes des marchés publics. Nos équipes sont formées pour intervenir en site occupé (écoles, administrations) sans perturber le service.",
    avantages: [
      "Dossiers techniques (DOE, CCTP respectés)",
      "Normes Feu & Acoustique ERP",
      "Gestion stricte des plannings",
    ],
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop&q=80",
    lien: "/marches-publics",
    lienTexte: "Accéder à l'espace Marchés Publics",
  },
  {
    id: "pro",
    nomOnglet: "Pros & Bureaux",
    icone: "briefcase",
    titre: "Bureaux & Commerces",
    description:
      "Modularité et confort de travail. Nous créons des espaces qui améliorent la productivité grâce à une acoustique maîtrisée.",
    avantages: [
      "Cloisons amovibles ou modulaires",
      "Correction acoustique open-space",
      "Intégration esthétique des réseaux",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80",
    lien: null,
    lienTexte: null,
  },
  {
    id: "particulier",
    nomOnglet: "Particuliers",
    icone: "home",
    titre: "Rénovation de l'Habitat",
    description:
      "Redéfinissez vos volumes. Nous garantissons des murs droits, lisses et une isolation performante pour votre confort quotidien.",
    avantages: [
      "Protection totale de votre mobilier",
      "Finitions Q4 (Prêt à peindre)",
      "Création de niches et déco",
    ],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&q=80",
    lien: "#devis",
    lienTexte: "Demander un devis rénovation",
  },
];

/* Étapes de la méthode de travail (propreté et délais) */
const etapesMethode = [
  {
    numero: 1,
    titre: "Protection rigoureuse",
    description:
      "Bâchage des sols, protection des huisseries et confinement de la zone de travail avant le premier coup de visseuse.",
  },
  {
    numero: 2,
    titre: "Intervention en site occupé",
    description:
      "Habitués aux bureaux et logements habités, nous minimisons les nuisances sonores et la poussière.",
  },
  {
    numero: 3,
    titre: "Nettoyage final",
    description:
      "Aspiration industrielle et évacuation des déchets en centre de tri agréé.",
  },
];

/* Projets de plâtrerie réalisés (avant/après) */
const projetsRealises = [
  {
    titre: "Réfectoire Scolaire",
    lieu: "Schiltigheim",
    type: "Marché Public",
    description:
      "Installation de dalles acoustiques Rockfon pour réduire le brouhaha de 50%.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&q=80",
  },
  {
    titre: "Aménagement de Combles",
    lieu: "Colmar",
    type: "Particulier",
    description:
      "Création d'une suite parentale avec isolation RGE (R=7) et dressing intégré.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&q=80",
  },
];

// Utilisation des données centralisées
const marchesPublicsAvantagesData = marchesPublicsAvantages;
const documentsMarchesPublicsData = documentsMarchesPublicsPlatrerie;

/* Questions fréquentes sur la plâtrerie */
const faqItems = [
  {
    question: "Intervenez-vous pendant les vacances scolaires ?",
    reponse:
      "Oui, absolument. Pour nos clients publics (écoles, mairies), nous planifions nos interventions durant les périodes de fermeture ou en horaires décalés pour ne pas perturber l'activité.",
  },
  {
    question: "Quelle différence entre cloison simple et acoustique ?",
    reponse:
      "Une cloison standard est composée d'une plaque de BA13 de chaque côté. Une solution acoustique (souvent bleue) utilise un plâtre haute densité et une laine minérale spécifique à l'intérieur, permettant de réduire les bruits de 50% entre deux pièces (idéal chambres ou bureaux).",
  },
  {
    question: "Gérez-vous la mise en peinture après le placo ?",
    reponse:
      "Oui. Nous proposons une offre globale \"Plâtrerie + Peinture\". Cela vous garantit que le peintre réceptionne son propre support, évitant tout litige sur la qualité du lissage.",
  },
];

/* ============================================
   PAGE SERVICE PLÂTRERIE
   ============================================ */

export default function PageServicePlatrerie() {
  return (
    <>
      {/* Header - Navigation principale sticky */}
      <Header pageActive="services" ctaHref="#devis" />

      {/* ============================================
          CONTENU PRINCIPAL
          ============================================ */}
      <main className="mt-20">
        {/* ============================================
            HERO SECTION - La promesse plâtrerie
            L'utilisateur comprend immédiatement le service et peut demander un devis
            ============================================ */}
        <ServiceHero
          title="Plâtrerie technique, cloisons & faux plafonds"
          titleHighlight="à Strasbourg et en Alsace"
          subtitle="De la rénovation de l'habitat aux marchés publics : expertise acoustique, coupe-feu et agencement d'espaces. Intervention en site occupé."
          badges={[
            { label: "Strasbourg & Alsace", variant: "location" },
            { label: "RGE Qualibat", variant: "certification" },
            { label: "Décennale", variant: "certification" },
          ]}
          ctaLinks={[
            { label: "Demander un devis gratuit", href: "#devis", variant: "primary" },
            { label: "Accès Acheteurs Publics", href: "/marches-publics", variant: "secondary" },
          ]}
        />

        {/* ============================================
            BARRE DE CONFIANCE - Preuves sociales plâtrerie
            Affiche les certifications et avantages clés
            ============================================ */}
        <TrustBar items={barreConfianceItems} />

        {/* ============================================
            PÉRIMÈTRE D'INTERVENTION - Les 4 prestations
            Présente les différentes prestations de plâtrerie avec leurs avantages
            ============================================ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Titre de la section */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                Notre périmètre d&apos;intervention
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nous gérons l&apos;intégralité du lot plâtrerie, du petit
                raccord de rénovation au plateau de bureaux complet de 1000m².
              </p>
            </div>

            {/* Grille des 4 cartes prestations */}
            <ServiceFeaturesGrid
              features={prestationsPlatrerie}
              columns={4}
              variant="white"
            />
          </div>
        </section>

        {/* ============================================
            SOLUTIONS PAR PROFIL - Tabs Public/Pro/Particulier
            L'utilisateur peut voir les avantages spécifiques à son profil
            ============================================ */}
        <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-brand-blue mb-8">
              Des solutions adaptées à votre profil
            </h2>

            {/* Grille des 3 profils clients */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {profilsClients.map((profil) => (
                <Card
                  key={profil.id}
                  className={`shadow-sm border-l-4 ${
                    profil.id === "public"
                      ? "border-brand-blue"
                      : profil.id === "pro"
                      ? "border-brand-orange"
                      : "border-gray-400"
                  }`}
                >
                  <CardContent className="p-6">
                    {/* Icône du profil */}
                    <div
                      className={`w-10 h-10 mb-4 rounded-full flex items-center justify-center ${
                        profil.id === "public"
                          ? "bg-blue-100 text-brand-blue"
                          : profil.id === "pro"
                          ? "bg-orange-100 text-brand-orange"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {profil.icone === "building" && (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      )}
                      {profil.icone === "briefcase" && (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                      {profil.icone === "home" && (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      )}
                    </div>

                    <CardTitle className="text-xl text-brand-blue mb-2">
                      {profil.titre}
                    </CardTitle>
                    <CardDescription className="text-sm mb-4">
                      {profil.description}
                    </CardDescription>

                    {/* Liste des avantages */}
                    <ul className="space-y-2 mb-4">
                      {profil.avantages.map((avantage, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm font-semibold"
                        >
                          <svg
                            className="w-4 h-4 text-green-500 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {avantage}
                        </li>
                      ))}
                    </ul>

                    {/* Lien CTA si disponible */}
                    {profil.lien && (
                      <Link
                        href={profil.lien}
                        className="text-brand-orange font-bold hover:underline text-sm"
                      >
                        {profil.lienTexte}
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            MÉTHODE - Propreté et délais (Réassurance)
            Explique l'engagement sur la propreté du chantier
            ============================================ */}
        <ServiceMethodSection
          title="Un chantier propre et des délais tenus : notre engagement."
          subtitle="Le frein n°1 aux travaux est la peur de la poussière. Chez nous, la protection est la première étape du chantier, pas une option."
          etapes={etapesMethode}
          image={{
            src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=500&fit=crop&q=80",
            alt: "Protection de chantier plâtrerie",
          }}
          imagePosition="left"
          variant="list"
          backgroundVariant="white"
        />

        {/* ============================================
            RÉALISATIONS - Projets Avant/Après
            Montre des exemples concrets de chantiers de plâtrerie réalisés
            ============================================ */}
        <ServiceRealisationsSection
          title="La précision se voit dans les détails"
          subtitle="Quelques exemples de transformations réalisées en Alsace."
          realisations={projetsRealises}
          voirToutLink="/realisations"
          voirToutText="Voir tous nos projets plâtrerie"
          variant="gray"
        />

        {/* ============================================
            SECTION MARCHÉS PUBLICS
            Section dédiée aux acheteurs publics avec garanties
            ============================================ */}
        <MarchesPublicsSection
          avantages={marchesPublicsAvantagesData}
          documents={documentsMarchesPublicsData}
        />

        {/* ============================================
            FAQ PLÂTRERIE
            Répond aux questions courantes sur la plâtrerie
            ============================================ */}
        <ServiceFAQSection
          title="Questions fréquentes"
          items={faqItems}
          variant="white"
        />

        {/* ============================================
            CTA FINAL - Demande de devis
            Section d'appel à l'action final pour convertir le visiteur
            ============================================ */}
        <CtaBlock
          titre="Votre projet de rénovation commence ici."
          description="Recevez une estimation précise et un planning fiable pour vos travaux de plâtrerie à Strasbourg et environs."
          texteDevis="Demander mon devis gratuit"
          id="devis"
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
        devisLink="#devis"
        devisText="Devis Plâtrerie"
      />

      {/* ============================================
          DONNÉES STRUCTURÉES SEO
          Schema.org pour améliorer le référencement
          ============================================ */}
      <ServiceStructuredData
        serviceName="Plâtrerie & Faux-plafonds"
        serviceDescription="Plâtrerie technique à Strasbourg : cloisons BA13, faux-plafonds acoustiques, doublage thermique. Intervention en site occupé. Certifié RGE Qualibat, garantie décennale."
        serviceUrl="/services/platrerie"
        serviceType="Plâtrerie"
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Plâtrerie", url: "/services/platrerie" },
        ]}
      />
    </>
  );
}

