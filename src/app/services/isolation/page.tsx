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
        <section className="relative bg-slate-900 overflow-hidden">
          {/* Image de fond avec overlay pour la lisibilité du texte */}
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-40"
              src="https://placehold.co/1920x1080?text=Pose+Isolation+Thermique"
              alt="Isolation thermique Strasbourg Alsace"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          </div>

          {/* Contenu du hero */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl">
              {/* Badges RGE et localisation */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="bg-green-500/20 text-green-400 border border-green-500/30 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  Certifié RGE
                </span>
                <span className="bg-brand-orange/20 text-brand-orange border border-brand-orange/30 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  Strasbourg & Alsace
                </span>
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
                <a
                  href="#devis"
                  className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-white bg-brand-orange hover:bg-brand-orange-dark shadow-lg transition duration-300"
                >
                  Demander mon devis isolation
                </a>
                <Link
                  href="/marches-publics"
                  className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/30 text-base font-semibold rounded-md text-white hover:bg-white hover:text-brand-blue transition duration-300 backdrop-blur-sm"
                >
                  Espace Marchés Publics
                </Link>
              </div>

              {/* Micro-réassurance */}
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-300 flex-wrap">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Réponse sous 48h
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Intervention en site occupé
                </span>
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
                <div
                  key={type.id}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-orange transition duration-300 group"
                >
                  {/* Icône du type d'isolation */}
                  <div
                    className={`w-12 h-12 ${
                      type.iconeColor === "orange"
                        ? "bg-orange-100 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
                        : "bg-blue-100 text-brand-blue group-hover:bg-brand-blue group-hover:text-white"
                    } rounded-lg flex items-center justify-center mb-4 transition`}
                  >
                    <svg
                      className="w-6 h-6"
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
                  </div>
                  {/* Titre et description */}
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {type.titre}
                  </h3>
                  <p className="text-sm text-gray-500">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            CIBLES CLIENTS - Adaptation à chaque profil
            3 colonnes présentant les avantages spécifiques pour chaque type de client
            ============================================ */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Texte intro à gauche */}
              <div className="lg:col-span-4">
                <h2 className="text-3xl font-bold text-brand-blue mb-4">
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
                  <div
                    key={profil.id}
                    className={`p-6 rounded-lg ${
                      profil.id === "public"
                        ? "bg-slate-50 border-l-4 border-brand-blue"
                        : "bg-white border border-gray-100 shadow-sm"
                    }`}
                  >
                    {profil.badge && (
                      <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                        {profil.badge}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-brand-blue mt-1 mb-3">
                      {profil.titre}
                    </h3>
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
                  </div>
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-brand-blue">
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
                    <div className="absolute top-4 right-4 bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                      {projet.type}
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
            <h2 className="text-3xl font-bold text-brand-blue text-center mb-12">
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
            BLOC MARCHÉS PUBLICS - Focus admin
            Section dédiée aux acheteurs publics avec documents disponibles
            ============================================ */}
        <section className="py-12 bg-slate-100 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Contenu texte */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-brand-blue text-white text-xs font-bold px-2 py-1 rounded uppercase">
                    Espace Pro / Public
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-2">
                  Acheteurs publics : Dossiers conformes et complets
                </h3>
                <p className="text-gray-600 mb-4">
                  Nous connaissons vos impératifs en matière d&apos;isolation des
                  bâtiments publics. Tous nos documents administratifs et
                  techniques sont à jour.
                </p>
                <div className="flex flex-wrap gap-2">
                  {documentsMarchesPublics.map((doc) => (
                    <span
                      key={doc.titre}
                      className="text-xs bg-white px-2 py-1 rounded border border-slate-200 text-slate-500"
                    >
                      {doc.titre}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div>
                <a
                  href="mailto:marches@ar-solution.fr"
                  className="inline-flex items-center justify-center bg-slate-800 text-white px-6 py-3 rounded hover:bg-slate-900 transition font-semibold"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contacter le service Marchés
                </a>
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
            <h2 className="text-3xl font-bold text-brand-blue text-center mb-8">
              Questions fréquentes sur l&apos;isolation
            </h2>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 rounded-lg open:bg-white open:shadow-md transition-all duration-300"
                >
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                    <span>{item.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-0 px-4 pb-4 text-sm leading-relaxed">
                    {item.reponse}
                  </div>
                </details>
              ))}
            </div>
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
        <a
          href="tel:0388000000"
          className="flex-1 flex items-center justify-center bg-gray-100 text-brand-blue font-bold py-3 rounded-lg"
        >
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
        <a
          href="#devis"
          className="flex-1 flex items-center justify-center bg-brand-orange text-white font-bold py-3 rounded-lg shadow-md"
        >
          Devis Isolation
        </a>
      </div>
    </>
  );
}

