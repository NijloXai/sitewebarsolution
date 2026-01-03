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

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CtaBlock from "@/components/CtaBlock";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GridScan from "@/components/GridScan";

/* ============================================
   HELPERS ET ICÔNES POUR LES SECTIONS COMMUNES
   ============================================ */

/* Helper pour obtenir les classes CSS selon le type de couleur */
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

/* Icône pour les dossiers administratifs */
const IconeDossiersAdmin = ({ className }: { className?: string }) => (
  <svg
    className={className || "w-6 h-6"}
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
    <circle cx="17" cy="7" r="3" strokeWidth={2} />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7l1 1 2-2"
      strokeWidth={2}
    />
  </svg>
);

/* Icône pour site occupé et bâtiments ERP */
const IconeSiteOccupe = ({ className }: { className?: string }) => (
  <svg
    className={className || "w-6 h-6"}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
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

/* Icône pour interlocuteur unique */
const IconeInterlocuteurUnique = ({ className }: { className?: string }) => (
  <svg
    className={className || "w-6 h-6"}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
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

/* Fonction pour obtenir l'icône appropriée selon le type de document */
const getDocumentIcon = (titre: string, className?: string) => {
  const baseClass = className || "w-8 h-8";
  
  if (titre.includes("RGE")) {
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
  } else if (titre.includes("Fiches techniques") || titre.includes("Références")) {
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

/* ============================================
   DONNÉES DE LA PAGE
   ============================================ */

/* Éléments de la barre de confiance spécifique isolation */
const barreConfianceItems = [
  { valeur: "RGE", label: "Qualibat Reconnu" },
  { valeur: "10 Ans", label: "Garantie Décennale" },
  { valeur: "-30%", label: "Économies Énergie" },
  { valeur: "Aides", label: "MaPrimeRénov'" },
];

/* Les 4 types d'isolation proposés */
const typesIsolation = [
  {
    id: "iti",
    titre: "Isolation Thermique Intérieure (ITI)",
    description:
      "Doublage des murs par l'intérieur avec laine de verre, laine de roche ou isolants biosourcés. Solution efficace pour supprimer les ponts thermiques et réduire votre facture énergétique.",
    iconeColor: "blue",
  },
  {
    id: "combles",
    titre: "Isolation des Combles",
    description:
      "Combles perdus (soufflage) ou aménagés (sous rampants). Jusqu'à 30% de déperditions évitées. Travaux rapides avec un minimum de désagréments.",
    iconeColor: "orange",
  },
  {
    id: "phonique",
    titre: "Isolation Phonique",
    description:
      "Réduction des nuisances sonores entre étages, avec les voisins ou depuis l'extérieur. Cloisons acoustiques haute performance et faux-plafonds désolidarisés.",
    iconeColor: "blue",
  },
  {
    id: "sols",
    titre: "Isolation des Sols & Planchers",
    description:
      "Isolation du plancher bas sur cave, vide sanitaire ou terre-plein. Suppression de la sensation de sol froid et amélioration du confort thermique global.",
    iconeColor: "orange",
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
    image: "https://placehold.co/800x600?text=Combles+Isolés+R7",
  },
  {
    titre: "Doublage ITI bureaux",
    lieu: "Strasbourg Centre",
    type: "Marché Public",
    description:
      "Isolation thermique et acoustique de 400m² en site occupé.",
    image: "https://placehold.co/800x600?text=Bureaux+Isolation+ITI",
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

/* Avantages Marchés Publics */
const marchesPublicsAvantages = [
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
  },
];

/* Documents disponibles pour les marchés publics */
const documentsMarchesPublics = [
  { titre: "Attestation RGE", disponibilite: "Disponible" },
  { titre: "Décennale", disponibilite: "Disponible" },
  { titre: "Fiches techniques isolants", disponibilite: "Sur demande" },
  { titre: "Références chantiers publics", disponibilite: "Sur demande" },
];

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
        <section className="relative bg-slate-900 overflow-hidden min-h-[85vh] flex items-center">
          {/* Animation 3D GridScan en arrière-plan */}
          <div className="absolute inset-0">
            <GridScan
              sensitivity={0.55}
              lineThickness={1}
              linesColor="#1e3a5f"
              gridScale={0.1}
              scanColor="#22c55e"
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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 w-full">
            <div className="max-w-2xl">
              {/* Badges certifications et localisation */}
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
                Isolation Thermique & Phonique à{" "}
                <span className="text-brand-orange">Strasbourg</span>
              </h1>

              {/* Sous-titre explicatif */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 font-light">
                Réduisez vos factures d&apos;énergie et améliorez votre confort.
                Certification RGE pour bénéficier de{" "}
                <strong className="text-white">MaPrimeRénov&apos;</strong> et des aides CEE.
              </p>

              {/* Boutons d'action principaux */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg"
                >
                  <a href="#devis">Demander un devis gratuit</a>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {typesIsolation.map((type) => (
                <Card
                  key={type.id}
                  className="group relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col border-2 border-gray-200 hover:border-brand-orange bg-white h-full"
                >
                  {/* CardHeader avec icône */}
                  <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
                    {/* Icône du type d'isolation - style harmonisé */}
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 ${
                        type.iconeColor === "orange"
                          ? "bg-brand-orange/10 text-brand-orange"
                          : "bg-brand-blue/10 text-brand-blue"
                      } rounded-lg flex items-center justify-center mb-4 shadow-sm transition-all duration-300 group-hover:scale-110`}
                    >
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </div>
                    {/* Titre */}
                    <CardTitle className="text-lg sm:text-xl md:text-2xl text-brand-blue-dark font-bold mb-2 sm:mb-3 leading-tight group-hover:text-brand-orange transition-colors duration-300">
                      {type.titre}
                    </CardTitle>
                  </CardHeader>

                  {/* CardContent avec description */}
                  <CardContent className="px-4 sm:px-6 pb-3 sm:pb-4 flex-1 flex flex-col">
                    <CardDescription className="text-sm md:text-base text-gray-700 flex-1">
                      {type.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
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
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
                  Projets d&apos;isolation réalisés en Alsace
                </h2>
                <p className="text-gray-600 mt-2">
                  Des chantiers concrets avec des résultats mesurables.
                </p>
              </div>
              <Link
                href="/realisations"
                className="hidden md:inline-flex text-brand-orange font-semibold hover:underline mt-4 md:mt-0"
              >
                Voir toutes nos réalisations →
              </Link>
            </div>

            {/* Grille des projets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projetsRealises.map((projet) => (
                <div key={projet.titre} className="group cursor-pointer">
                  <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video">
                    <img
                      src={projet.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      alt={projet.titre}
                    />
                    {/* Badge type de projet */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-brand-orange text-white uppercase">
                        {projet.type}
                      </Badge>
                    </div>
                    {/* Label lieu */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-sm font-bold shadow-sm">
                      {projet.lieu}
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-800">
                    {projet.titre}
                  </h3>
                  <p className="text-sm text-gray-500">{projet.description}</p>
                </div>
              ))}
            </div>

            {/* Lien mobile */}
            <div className="mt-8 text-center md:hidden">
              <Link
                href="/realisations"
                className="text-brand-orange font-semibold hover:underline"
              >
                Voir toutes nos réalisations →
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================
            MÉTHODE DE TRAVAIL - Timeline
            Explique le déroulement d'un projet d'isolation de A à Z
            ============================================ */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue text-center mb-8 md:mb-12">
              Un déroulé clair, de l&apos;audit à la réception
            </h2>

            <div className="relative">
              {/* Ligne de temps (desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {etapesMethode.map((etape, index) => (
                  <div key={etape.numero} className="bg-white p-4 text-center md:pt-8">
                    <div
                      className={`w-12 h-12 mx-auto ${
                        index === 0
                          ? "bg-brand-blue text-white"
                          : "bg-gray-200 text-gray-600"
                      } rounded-full flex items-center justify-center font-bold text-xl mb-4 border-4 border-white shadow-sm`}
                    >
                      {etape.numero}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{etape.titre}</h3>
                    <p className="text-sm text-gray-500">{etape.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION MARCHÉS PUBLICS
            Section dédiée aux acheteurs publics avec garanties
            ============================================ */}
        <section
          className="py-16 md:py-24 bg-brand-blue text-white relative overflow-hidden"
          id="marches-publics"
        >
          {/* Gradient animé en arrière-plan pour effet de profondeur */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-800/20 opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center">
              {/* Contenu texte */}
              <div className="space-y-6 md:space-y-8">
                {/* Badge "Espace Collectivités" amélioré avec effet de profondeur et animations */}
                <Badge
                  variant="outline"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700/90 to-blue-800/90 text-blue-50 border-blue-500/50 text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full uppercase tracking-wider shadow-lg shadow-blue-900/30 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-900/40 hover:scale-105 hover:border-blue-400/70 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 group/badge"
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
                
                {/* Titre principal avec hiérarchie typographique améliorée */}
                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white">
                    Acheteurs Publics : un partenaire conforme et réactif.
                  </h2>
                  
                  {/* Description avec typographie optimisée */}
                  <p className="text-blue-50 sm:text-blue-100 text-base sm:text-lg md:text-xl leading-relaxed tracking-normal max-w-2xl">
                    Nous connaissons vos contraintes. AR+SOLUTION structure ses
                    offres pour répondre aux exigences des marchés publics
                    (Écoles, Mairies, Bâtiments administratifs).
                  </p>
                </div>

                {/* Liste des avantages avec icônes améliorées et animations */}
                <div className="space-y-4 md:space-y-5 pt-2">
                  {marchesPublicsAvantages.map((item, index) => (
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

                {/* CTA email avec animations améliorées */}
                <div className="pt-2 md:pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-brand-blue hover:bg-gray-100 shadow-lg hover:shadow-xl hover:shadow-white/20 transition-all duration-300 ease-out font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 group/button"
                  >
                    <Link href="/marches-publics" className="inline-flex items-center gap-2">
                      <span>Accéder à l&apos;Espace Marchés Publics</span>
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
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Grille des documents disponibles avec animations d'entrée */}
              <div className="bg-blue-800/50 p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl border border-blue-700 shadow-2xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                  {documentsMarchesPublics.map((doc, index) => (
                    <Card
                      key={doc.titre}
                      className="group relative bg-gradient-to-br from-brand-blue via-blue-700 to-brand-blue border-2 border-blue-600/60 flex flex-col items-center text-center overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 focus-within:ring-offset-blue-800"
                      style={{
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: "both"
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Document: ${doc.titre} - ${doc.disponibilite}`}
                    >
                      {/* Bordure lumineuse au focus pour l'accessibilité */}
                      <div className="absolute inset-0 border-2 border-transparent rounded-lg pointer-events-none group-focus-within:border-brand-orange/50" />
                      
                      <CardContent className="p-4 md:p-5 lg:p-6 relative z-10 w-full">
                        {/* Icône document */}
                        <div className="mb-3 md:mb-4 text-blue-200 flex justify-center group-focus-within:scale-110 group-focus-within:text-brand-orange">
                          <div className="relative">
                            <div className="group-focus-within:rotate-6">
                              {getDocumentIcon(doc.titre, "w-10 h-10 md:w-12 md:h-12")}
                            </div>
                            {/* Cercle de pulsation autour de l'icône au focus pour l'accessibilité */}
                            <div className="absolute inset-0 rounded-full bg-brand-orange/20 scale-0 opacity-0 group-focus-within:opacity-100 group-focus-within:scale-150 transition-all duration-500 -z-10" />
                          </div>
                        </div>
                        
                        {/* Titre avec meilleure hiérarchie */}
                        <CardTitle className="text-sm md:text-base lg:text-lg text-white mb-2 md:mb-3 font-bold leading-tight group-focus-within:text-brand-orange">
                          {doc.titre}
                        </CardTitle>
                        
                        {/* Badge de disponibilité avec design amélioré et animations */}
                        <div className="flex justify-center">
                          <Badge
                            variant="outline"
                            className={`text-xs md:text-sm px-2 md:px-3 py-1 md:py-1.5 rounded-full font-semibold border-2 ${
                              doc.disponibilite === "Disponible"
                                ? "bg-green-500/20 text-green-200 border-green-400/50"
                                : "bg-brand-orange/20 text-brand-orange/80 border-brand-orange/50"
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
                      
                      {/* Effet de profondeur avec ombre portée au focus pour l'accessibilité */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/0 via-brand-orange/0 to-brand-orange/0 rounded-lg blur-xl opacity-0 group-focus-within:opacity-100 group-focus-within:from-brand-orange/10 group-focus-within:via-brand-orange/5 group-focus-within:to-brand-orange/10 transition-opacity duration-500 -z-10" />
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            FAQ ISOLATION
            Répond aux questions courantes sur l'isolation
            ============================================ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue text-center mb-8 md:mb-12">
              Questions fréquentes sur l&apos;isolation
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm leading-relaxed">
                    {item.reponse}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

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
          className="flex-1 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold shadow-md"
        >
          <a href="#devis">Devis Isolation</a>
        </Button>
      </div>
    </>
  );
}


