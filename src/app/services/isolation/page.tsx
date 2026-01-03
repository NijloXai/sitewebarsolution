/*
  Page Service Isolation du site AR+SOLUTION.
  
  Cette page présente en détail les prestations d'isolation proposées par AR+SOLUTION :
  - Isolation Thermique par l'Intérieur (ITI)
  - Isolation des combles perdus et aménagés
  - Isolation phonique / acoustique
  - Isolation des sols et planchers
  
  L'utilisateur voit :
  - Les différents types d'isolation avec leurs avantages
  - Les certifications RGE permettant les aides (MaPrimeRénov', CEE)
  - Des exemples de projets réalisés en Alsace
  - La méthode de travail et les garanties
  - Une FAQ répondant aux questions courantes sur l'isolation
  
  L'utilisateur peut :
  - Découvrir quel type d'isolation correspond à son besoin
  - Comprendre les économies et aides possibles
  - Demander un devis via le formulaire ou le bouton CTA
  - Contacter le service Marchés Publics s'il est acheteur public
*/

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CtaBlock from "@/components/CtaBlock";
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
import { isolationPageMetadata } from "@/lib/services-metadata";
import { barreConfianceIsolation, marchesPublicsAvantages, documentsMarchesPublicsIsolation } from "@/lib/services-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = isolationPageMetadata;

/* ============================================
   DONNÉES DE LA PAGE
   ============================================ */

// Utilisation des données centralisées
const barreConfianceItems = barreConfianceIsolation;

/* Les 4 types d'isolation proposés */
const typesIsolation = [
  {
    id: "iti",
    titre: "Isolation Thermique Intérieure (ITI)",
    description:
      "Doublage des murs par l'intérieur avec laine de verre, laine de roche ou isolants biosourcés. Solution efficace pour supprimer les ponts thermiques et réduire votre facture énergétique.",
    iconeColor: "blue" as const,
  },
  {
    id: "combles",
    titre: "Isolation des Combles",
    description:
      "Combles perdus (soufflage) ou aménagés (sous rampants). Jusqu'à 30% de déperditions évitées. Travaux rapides avec un minimum de désagréments.",
    iconeColor: "orange" as const,
  },
  {
    id: "phonique",
    titre: "Isolation Phonique",
    description:
      "Réduction des nuisances sonores entre étages, avec les voisins ou depuis l'extérieur. Cloisons acoustiques haute performance et faux-plafonds désolidarisés.",
    iconeColor: "blue" as const,
  },
  {
    id: "sols",
    titre: "Isolation des Sols & Planchers",
    description:
      "Isolation du plancher bas sur cave, vide sanitaire ou terre-plein. Suppression de la sensation de sol froid et amélioration du confort thermique global.",
    iconeColor: "orange" as const,
  },
];

/* Cartes présentant les 3 profils clients cibles pour l'isolation */
const profilsClients = [
  {
    id: "public",
    badge: "Collectivités",
    titre: "Marchés Publics",
    avantages: [
      "Dossiers conformes aux AO",
      "Respect normes thermiques RT/RE",
      "RGE & Décennale à jour",
    ],
    accentColor: "brand-blue",
  },
  {
    id: "pro",
    badge: null,
    titre: "Copros & Syndics",
    avantages: [
      "Isolation parties communes",
      "Travaux en site occupé",
      "Planification sur vacances",
    ],
    accentColor: "green",
  },
  {
    id: "particulier",
    badge: null,
    titre: "Particuliers",
    avantages: [
      "Aide au montage MaPrimeRénov'",
      "Propreté chantier garantie",
      "Conseils personnalisés",
    ],
    accentColor: "orange",
  },
];

/* Arguments pour choisir un expert global (isolation + finitions) */
const argumentsExpertGlobal = [
  {
    titre: "Planning Maîtrisé",
    description:
      "Pas d'attente entre la pose de l'isolant, les plaques de plâtre et la mise en peinture.",
  },
  {
    titre: "Responsabilité Unique",
    description:
      "Un seul interlocuteur pour l'isolation et les finitions. Zéro rejet de faute entre corps de métier.",
  },
];

/* Projets d'isolation réalisés */
const projetsRealises = [
  {
    titre: "Isolation combles soufflée",
    lieu: "Schiltigheim",
    type: "Particulier",
    description: "R=7 atteint, éligible MaPrimeRénov'. Travaux en 1 journée.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop&q=80",
  },
  {
    titre: "Doublage ITI bureaux",
    lieu: "Strasbourg Centre",
    type: "Marché Public",
    description:
      "Isolation thermique et acoustique de 400m² en site occupé.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80",
  },
];

/* Étapes de la méthode de travail */
const etapesMethode = [
  {
    numero: 1,
    titre: "Diagnostic Thermique",
    description: "Analyse des déperditions et préconisations adaptées.",
  },
  {
    numero: 2,
    titre: "Devis Détaillé",
    description: "Chiffrage précis avec simulation des aides (RGE obligatoire).",
  },
  {
    numero: 3,
    titre: "Travaux Propres",
    description: "Pose de l'isolant, plâtrerie et finitions dans la continuité.",
  },
  {
    numero: 4,
    titre: "Réception & Attestation",
    description: "PV de réception et documents pour vos dossiers d'aides.",
  },
];

// Utilisation des données centralisées
const marchesPublicsAvantagesData = marchesPublicsAvantages;
const documentsMarchesPublicsData = documentsMarchesPublicsIsolation;

/* Questions fréquentes sur l'isolation */
const faqItems = [
  {
    question: "Quelle épaisseur d'isolant pour être éligible aux aides ?",
    reponse:
      "Pour MaPrimeRénov' et les CEE, il faut atteindre une résistance thermique minimale (R) : R≥3,7 pour les murs, R≥7 pour les combles perdus, R≥6 pour les rampants. Nous vous conseillons sur l'épaisseur optimale selon votre projet.",
  },
  {
    question: "Combien de temps durent les travaux d'isolation ?",
    reponse:
      "Cela dépend de la surface et du type d'isolation. Pour des combles perdus (soufflage), comptez 1 journée. Pour un doublage ITI complet d'une maison, prévoyez 1 à 2 semaines incluant plâtrerie et peinture.",
  },
  {
    question: "Pourquoi choisir un artisan RGE pour l'isolation ?",
    reponse:
      "Le label RGE (Reconnu Garant de l'Environnement) est obligatoire pour bénéficier des aides de l'État : MaPrimeRénov', Certificats d'Économies d'Énergie (CEE), Éco-PTZ. AR+SOLUTION est certifié RGE Qualibat.",
  },
  {
    question: "Intervenez-vous en appartement occupé ?",
    reponse:
      "Oui, nous travaillons régulièrement en site occupé (appartements, bureaux). Nous installons des protections anti-poussière et organisons le chantier pour limiter les nuisances.",
  },
];

/* ============================================
   PAGE SERVICE ISOLATION
   ============================================ */

export default function PageServiceIsolation() {
  return (
    <>
      {/* Header - Navigation principale sticky */}
      <Header pageActive="services" ctaHref="#devis" />

      {/* ============================================
          CONTENU PRINCIPAL
          ============================================ */}
      <main className="mt-20">
        {/* ============================================
            HERO SECTION - La promesse isolation
            L'utilisateur comprend immédiatement le service et peut demander un devis
            ============================================ */}
        <ServiceHero
          title="Isolation Thermique & Phonique à"
          titleHighlight="Strasbourg"
          subtitle="Réduisez vos factures d'énergie et améliorez votre confort. Certification RGE pour bénéficier de MaPrimeRénov' et des aides CEE."
          scanColor="#22c55e"
        />

        {/* ============================================
            BARRE DE CONFIANCE - Preuves sociales isolation
            Affiche les certifications et avantages clés de l'isolation
            ============================================ */}
        <TrustBar items={barreConfianceItems} />

        {/* ============================================
            TYPES D'ISOLATION - Les 4 prestations principales
            Présente les différentes solutions d'isolation avec leurs avantages
            ============================================ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Titre de la section */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                Quelle isolation pour votre projet ?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                De l&apos;isolation des combles à l&apos;insonorisation complète, nous
                maîtrisons toutes les techniques pour améliorer votre confort.
              </p>
            </div>

            {/* Grille des 4 cartes types d'isolation */}
            <ServiceFeaturesGrid
              features={typesIsolation}
              columns={4}
              variant="white"
            />
          </div>
        </section>

        {/* ============================================
            CIBLES CLIENTS - Adaptation à chaque profil
            3 colonnes présentant les avantages spécifiques pour chaque type de client
            ============================================ */}
        <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Texte intro à gauche */}
              <div className="lg:col-span-4">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 md:mb-6">
                  Une solution adaptée à vos contraintes
                </h2>
                <p className="text-gray-600 mb-6">
                  Que vous soyez une collectivité, un syndic de copropriété ou un
                  particulier, nous adaptons notre approche à vos besoins
                  spécifiques.
                </p>
                <a
                  href="#devis"
                  className="text-brand-orange font-semibold flex items-center hover:underline"
                >
                  Discuter de votre projet
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Cartes cibles à droite */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {profilsClients.map((profil) => (
                  <Card
                    key={profil.id}
                    className={
                      profil.id === "public"
                        ? "bg-slate-50 border-l-4 border-brand-blue"
                        : "shadow-sm"
                    }
                  >
                    <CardContent className="p-6">
                      {profil.badge && (
                        <Badge variant="secondary" className="text-xs font-bold tracking-wider uppercase mb-2">
                          {profil.badge}
                        </Badge>
                      )}
                      <CardTitle className="text-lg text-brand-blue mt-1 mb-3">
                        {profil.titre}
                      </CardTitle>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {profil.avantages.map((avantage, index) => (
                          <li key={index} className="flex items-start">
                            <span
                              className={`mr-2 ${
                                profil.id === "public"
                                  ? "text-brand-orange"
                                  : profil.id === "pro"
                                  ? "text-green-500"
                                  : "text-orange-500"
                              }`}
                            >
                              ✓
                            </span>
                            {avantage}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            ARGUMENT EXPERT GLOBAL
            Explique l'avantage d'avoir un interlocuteur unique pour isolation + finitions
            ============================================ */}
        <section className="py-16 md:py-24 bg-brand-blue text-white overflow-hidden relative">
          {/* Décoration de fond */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-orange/20 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Contenu texte */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pourquoi choisir un expert global plutôt que 3 artisans ?
                </h2>
                <p className="text-slate-300 text-lg mb-8">
                  Fini le ping-pong entre l&apos;isolant mal posé et le plaquiste qui
                  refuse de reprendre. En gérant l&apos;ensemble de la chaîne
                  (isolation, plâtrerie, peinture), nous garantissons un résultat
                  sans défaut.
                </p>
                <div className="flex flex-col gap-4">
                  {argumentsExpertGlobal.map((argument) => (
                    <div
                      key={argument.titre}
                      className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur"
                    >
                      <div className="bg-brand-orange p-2 rounded-full flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">{argument.titre}</h4>
                        <p className="text-sm text-slate-300">
                          {argument.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visuel comparatif */}
              <div className="lg:w-1/2 w-full">
                <div className="bg-white text-slate-800 rounded-xl p-6 shadow-2xl">
                  <h3 className="text-center font-bold mb-6 border-b pb-4">
                    La différence sur votre chantier isolation
                  </h3>
                  <div className="flex gap-4">
                    {/* Sans nous */}
                    <div className="w-1/2 text-center opacity-60">
                      <div className="text-red-500 font-bold mb-2 text-sm uppercase tracking-wide">
                        Classique
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-100 p-2 rounded text-sm">
                          Isolant (Ent. A)
                        </div>
                        <div className="h-4 border-l-2 border-dashed border-gray-300 mx-auto" />
                        <div className="bg-gray-100 p-2 rounded text-sm text-red-500 font-bold">
                          Litige responsabilité ?
                        </div>
                        <div className="h-4 border-l-2 border-dashed border-gray-300 mx-auto" />
                        <div className="bg-gray-100 p-2 rounded text-sm">
                          Plâtrerie (Ent. B)
                        </div>
                      </div>
                    </div>

                    {/* Séparateur */}
                    <div className="w-px bg-gray-200" />

                    {/* Avec nous */}
                    <div className="w-1/2 text-center relative">
                      <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow">
                        RECOMMANDÉ
                      </div>
                      <div className="text-brand-orange font-bold mb-2 text-sm uppercase tracking-wide">
                        AR+SOLUTION
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg border-2 border-brand-orange h-full flex flex-col justify-center items-center gap-2">
                        <span className="text-2xl">🏠</span>
                        <span className="font-bold text-brand-blue">
                          1 Équipe Complète
                        </span>
                        <span className="text-sm">Isolation + Finitions</span>
                        <span className="text-sm font-bold text-green-600">
                          Garantie Totale
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            RÉALISATIONS - Projets d'isolation
            Montre des exemples concrets de chantiers d'isolation réalisés
            ============================================ */}
        <ServiceRealisationsSection
          title="Projets d'isolation réalisés en Alsace"
          subtitle="Des chantiers concrets avec des résultats mesurables."
          realisations={projetsRealises}
          voirToutLink="/realisations"
          voirToutText="Voir toutes nos réalisations"
          variant="gray"
        />

        {/* ============================================
            MÉTHODE DE TRAVAIL - Timeline
            Explique le déroulement d'un projet d'isolation de A à Z
            ============================================ */}
        <ServiceMethodSection
          title="Un déroulé clair, de l'audit à la réception"
          etapes={etapesMethode}
          variant="timeline"
          backgroundVariant="white"
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
            FAQ ISOLATION
            Répond aux questions courantes sur l'isolation
            ============================================ */}
        <ServiceFAQSection
          title="Questions fréquentes sur l'isolation"
          items={faqItems}
          variant="white"
        />

        {/* ============================================
            CTA FINAL - Demande de devis
            Section d'appel à l'action final pour convertir le visiteur
            ============================================ */}
        <CtaBlock
          titre="Prêt à améliorer votre confort thermique ?"
          description="Que vous soyez un particulier souhaitant réduire vos factures ou une collectivité avec un projet de rénovation énergétique, obtenez une étude personnalisée."
          variante="bleu"
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
        devisText="Devis Isolation"
      />

      {/* ============================================
          DONNÉES STRUCTURÉES SEO
          Schema.org pour améliorer le référencement
          ============================================ */}
      <ServiceStructuredData
        serviceName="Isolation Thermique & Phonique"
        serviceDescription="Isolation thermique et phonique certifiée RGE à Strasbourg. Combles, ITI, sols. Éligible MaPrimeRénov' et aides CEE. Réduction facture énergétique jusqu'à 30%."
        serviceUrl="/services/isolation"
        serviceType="Isolation thermique"
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Isolation", url: "/services/isolation" },
        ]}
      />
    </>
  );
}


