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

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBlock from "@/components/CtaBlock";
import TrustBar from "@/components/TrustBar";
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
  
  if (titre.includes("RGE") || titre.includes("URSSAF")) {
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
  } else if (titre.includes("RC Pro") || titre.includes("PV")) {
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

/* Éléments de la barre de confiance spécifique plâtrerie */
const barreConfianceItems = [
  { valeur: "RGE", label: "Certifié Qualibat" },
  { valeur: "10 Ans", label: "Garantie Décennale" },
  { valeur: "150+", label: "Chantiers Réalisés" },
  { valeur: "Alsace", label: "Intervention Rapide" },
];

/* Les 4 prestations de plâtrerie proposées */
const prestationsPlatrerie = [
  {
    id: "cloisons",
    titre: "Cloisons & Distribution",
    description:
      "Création d'espaces, cloisons séparatives, doublage BA13, cloisons courbes ou grande hauteur. Redistribution complète de l'espace intérieur.",
    iconeColor: "blue",
    lien: null,
  },
  {
    id: "faux-plafonds",
    titre: "Faux Plafonds Techniques",
    description:
      "Dalles 600x600, plafonds suspendus acoustiques, coupe-feu et intégration luminaires. Solutions pour bureaux, commerces et ERP.",
    iconeColor: "orange",
    lien: null,
  },
  {
    id: "finitions",
    titre: "Préparation & Finitions",
    description:
      "Ratissage complet, bandes à joint, enduits de lissage prêts à peindre (Q4). Surfaces parfaites pour vos finitions de peinture.",
    iconeColor: "blue",
    lienTexte: "Voir aussi : Notre lot Peinture",
    lien: "/services/enduits-finitions",
  },
  {
    id: "isolation",
    titre: "Isolation Intérieure",
    description:
      "Doublage thermique des murs, laine de verre, bio-sourcés. Conformité RE2020 et éligibilité aux aides MaPrimeRénov'.",
    iconeColor: "orange",
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
    image: "https://placehold.co/600x400?text=Ecole+Faux+Plafond+Acoustique",
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
    image: "https://placehold.co/600x400?text=Plateau+Bureaux+Open+Space",
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
    image: "https://placehold.co/600x400?text=Salon+Renove+Placo+Design",
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
  },
  {
    titre: "Aménagement de Combles",
    lieu: "Colmar",
    type: "Particulier",
    description:
      "Création d'une suite parentale avec isolation RGE (R=7) et dressing intégré.",
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
  { titre: "Attestation URSSAF", disponibilite: "Disponible" },
  { titre: "Décennale", disponibilite: "Disponible" },
  { titre: "RC Pro", disponibilite: "Disponible" },
  { titre: "PV réaction au feu", disponibilite: "Sur demande" },
];

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
        <section className="relative bg-slate-900 overflow-hidden min-h-[85vh] flex items-center">
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
                Plâtrerie technique, cloisons & faux plafonds{" "}
                <span className="text-brand-orange">
                  à Strasbourg et en Alsace
                </span>
                .
              </h1>

              {/* Sous-titre explicatif */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 font-light max-w-2xl">
                De la rénovation de l&apos;habitat aux marchés publics :
                expertise acoustique, coupe-feu et agencement d&apos;espaces.
                Intervention en site occupé.
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {prestationsPlatrerie.map((prestation) => (
                <Card
                  key={prestation.id}
                  className="group relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col border-2 border-gray-200 hover:border-brand-orange bg-white h-full"
                >
                  {/* CardHeader avec icône */}
                  <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
                    {/* Icône de la prestation - style harmonisé */}
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 ${
                        prestation.iconeColor === "orange"
                          ? "bg-brand-orange/10 text-brand-orange"
                          : "bg-brand-blue/10 text-brand-blue"
                      } rounded-lg flex items-center justify-center mb-4 shadow-sm transition-all duration-300 group-hover:scale-110`}
                    >
                      {prestation.id === "cloisons" && (
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
                            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                          />
                        </svg>
                      )}
                      {prestation.id === "faux-plafonds" && (
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
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      )}
                      {prestation.id === "finitions" && (
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
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                      )}
                      {prestation.id === "isolation" && (
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      )}
                    </div>
                    {/* Titre */}
                    <CardTitle className="text-lg sm:text-xl md:text-2xl text-brand-blue-dark font-bold mb-2 sm:mb-3 leading-tight group-hover:text-brand-orange transition-colors duration-300">
                      {prestation.titre}
                    </CardTitle>
                  </CardHeader>

                  {/* CardContent avec description */}
                  <CardContent className="px-4 sm:px-6 pb-3 sm:pb-4 flex-1 flex flex-col">
                    <CardDescription className="text-sm md:text-base text-gray-700 mb-3 sm:mb-4 flex-1">
                      {prestation.description}
                    </CardDescription>
                  </CardContent>

                  {/* CardFooter avec lien */}
                  <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
                    {prestation.lien ? (
                      <Link
                        href={prestation.lien}
                        className="inline-flex items-center text-brand-orange font-bold hover:text-brand-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded transition-all duration-300 group/link w-full justify-between text-sm sm:text-base"
                      >
                        <span>{prestation.lienTexte}</span>
                        <span className="ml-2 motion-safe:group-hover/link:translate-x-1 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out" aria-hidden="true">
                          →
                        </span>
                      </Link>
                    ) : (
                      <span className="text-brand-orange font-semibold text-sm sm:text-base flex items-center gap-1">
                        Plus de détails
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
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
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Image de gauche */}
              <div className="lg:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src="https://placehold.co/600x500?text=Protection+Sols+Proprete"
                    alt="Protection de chantier plâtrerie"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Contenu texte à droite */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                  Un chantier propre et des délais tenus : notre engagement.
                </h2>

                <p className="text-gray-600 mb-8 italic border-l-4 border-brand-orange pl-4">
                  &quot;Le frein n°1 aux travaux est la peur de la poussière.
                  Chez nous, la protection est la première étape du chantier,
                  pas une option.&quot;
                </p>

                {/* Timeline des étapes */}
                <div className="space-y-6">
                  {etapesMethode.map((etape) => (
                    <div key={etape.numero} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center font-bold">
                        {etape.numero}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{etape.titre}</h4>
                        <p className="text-sm text-gray-600">
                          {etape.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            RÉALISATIONS - Projets Avant/Après
            Montre des exemples concrets de chantiers de plâtrerie réalisés
            ============================================ */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2 md:mb-4">
              La précision se voit dans les détails
            </h2>
            <p className="text-gray-600 mb-10">
              Quelques exemples de transformations réalisées en Alsace.
            </p>

            {/* Grille des projets */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projetsRealises.map((projet) => (
                <div
                  key={projet.titre}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  {/* Simulation Avant/Après avec 2 images côte à côte */}
                  <div className="mb-4">
                    <div className="flex gap-1">
                      <div className="w-1/2 relative">
                        <img
                          src={`https://placehold.co/300x250?text=AVANT+${encodeURIComponent(
                            projet.titre
                          )}`}
                          alt={`Avant - ${projet.titre}`}
                          className="w-full h-48 object-cover rounded-l"
                        />
                        <span className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                          AVANT
                        </span>
                      </div>
                      <div className="w-1/2 relative">
                        <img
                          src={`https://placehold.co/300x250?text=APRES+${encodeURIComponent(
                            projet.titre
                          )}`}
                          alt={`Après - ${projet.titre}`}
                          className="w-full h-48 object-cover rounded-r"
                        />
                        <span className="absolute top-2 right-2 bg-brand-orange text-white text-xs px-2 py-1 rounded">
                          APRÈS
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Infos du projet */}
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg">{projet.titre}</h3>
                      <Badge variant="outline" className="text-xs bg-brand-blue/10 text-brand-blue border-brand-blue/30">
                        {projet.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">
                      📍 {projet.lieu}
                    </p>
                    <p className="text-sm text-gray-600">{projet.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bouton vers toutes les réalisations */}
            <div className="mt-10">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
              >
                <Link href="/realisations">Voir tous nos projets plâtrerie</Link>
              </Button>
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
            FAQ PLÂTRERIE
            Répond aux questions courantes sur la plâtrerie
            ============================================ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue text-center mb-8 md:mb-12">
              Questions fréquentes
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-bold text-lg text-brand-blue">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
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
          <a href="#devis">Devis Plâtrerie</a>
        </Button>
      </div>
    </>
  );
}

