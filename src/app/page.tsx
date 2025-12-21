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
import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import GridScan from "@/components/GridScan";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

/* ============================================
   DONNÉES DE LA PAGE
   ============================================ */

/* Éléments de la barre de confiance affichés sous le hero */
const barreConfianceItems = [
  { valeur: "RGE", label: "Entreprise Certifiée" },
  { valeur: "10 Ans", label: "Garantie Décennale" },
  { valeur: "67", label: "Intervention Bas-Rhin" },
  { valeur: "+150", label: "Projets Réalisés" },
];

/* Cartes présentant les 3 profils clients cibles */
const profilsClients = [
  {
    id: "public",
    badge: "Collectivités",
    titre: "Marchés Publics",
    description:
      "Réactivité administrative, dossiers conformes (DC4), respect des délais en site occupé.",
    lien: "/marches-publics",
    lienTexte: "Accéder à l'espace dédié",
    image: "https://placehold.co/600x400?text=Ecole+Mairie+Hopital",
  },
  {
    id: "pro",
    badge: null,
    titre: "Copro & Gestionnaires",
    description:
      "Rénovation de plateaux de bureaux, parties communes et remise en état locative rapide.",
    lien: "/contact",
    lienTexte: "Nos solutions Pro",
    image: "https://placehold.co/600x400?text=Bureaux+Plateaux",
  },
  {
    id: "particulier",
    badge: null,
    titre: "Particuliers",
    description:
      "Isolation, plâtrerie et mise en peinture pour valoriser votre habitat sans stress.",
    lien: "/services",
    lienTexte: "Voir les services",
    image: "https://placehold.co/600x400?text=Salon+Maison",
  },
];

/* Les 4 services principaux affichés en cartes */
const services = [
  {
    id: "platrerie",
    titre: "Plâtrerie",
    prestations: ["Cloisons sèches", "Faux-plafonds", "Doublage murs"],
    lien: "/services/platrerie",
    iconeColor: "orange",
  },
  {
    id: "isolation",
    titre: "Isolation",
    prestations: [
      "Isolation Thermique (ITI)",
      "Isolation Phonique",
      "Combles perdus",
    ],
    lien: "/services/isolation",
    iconeColor: "blue",
  },
  {
    id: "peinture",
    titre: "Peinture & Déco",
    prestations: [
      "Peinture intérieure",
      "Revêtements muraux",
      "Finitions soignées",
    ],
    lien: "/services/amenagement",
    iconeColor: "orange",
  },
  {
    id: "enduits",
    titre: "Enduits",
    prestations: ["Ratissage complet", "Préparation support", "Lissage murs"],
    lien: "/services/enduits-finitions",
    iconeColor: "blue",
  },
];

/* Arguments "Pourquoi nous choisir" avec icônes */
const argumentsChoix = [
  {
    titre: "Chantier Propre & Protégé",
    description:
      "Nous respectons les lieux (bâchage complet, nettoyage quotidien). Zéro poussière laissée.",
  },
  {
    titre: "Respect strict du planning",
    description:
      "Une date annoncée est une date tenue. Crucial pour les appels d'offres et vos emménagements.",
  },
  {
    titre: "Finitions Soignées",
    description:
      "Murs lisses, angles parfaits. L'exigence de la qualité pour un rendu durable.",
  },
  {
    titre: "Devis Clair & Détaillé",
    description:
      "Pas de mauvaise surprise. Tout est chiffré avant démarrage.",
  },
];

/* Étapes de la méthode de travail (stepper) */
const etapesMethode = [
  { numero: 1, titre: "Prise de contact", description: "Rapide par téléphone ou email." },
  { numero: 2, titre: "Visite Technique", description: "Analyse sur site pour métrés précis." },
  { numero: 3, titre: "Devis & Planification", description: "Validation du chiffrage et date d'intervention." },
  { numero: 4, titre: "Réalisation & Réception", description: "Travaux et validation de fin de chantier." },
];

/* Documents disponibles pour les marchés publics */
const documentsMarchesPublics = [
  { titre: "Attestation RGE", disponibilite: "Disponible" },
  { titre: "Décennale", disponibilite: "Disponible" },
  { titre: "Kbis & RC Pro", disponibilite: "Disponible" },
  { titre: "Références", disponibilite: "Sur demande" },
];

/* Avis clients affichés sur la page */
const avisClients = [
  {
    texte:
      "Intervention rapide pour l'isolation de nos combles. Équipe très propre et polie. Je recommande.",
    auteur: "Jean M.",
    ville: "Strasbourg",
  },
  {
    texte:
      "Nous avons fait appel à AR pour la rénovation de nos bureaux. Respect du planning, parfait.",
    auteur: "Sophie L.",
    ville: "Illkirch",
  },
];

/* Villes de la zone d'intervention pour le SEO local */
const villesIntervention = [
  "Strasbourg Centre",
  "Schiltigheim",
  "Illkirch-Graffenstaden",
  "Haguenau",
  "Sélestat",
  "Obernai",
];

/* Tableau de 3 réalisations représentatives pour la section "Nos réalisations" */
const realisationsRepresentatives = [
  {
    id: "combles-krutenau",
    titre: "Rénovation complète de combles",
    metier: "Isolation & Plâtrerie",
    lieu: "Strasbourg Krutenau",
    secteur: "particulier",
    description:
      "Défi : Créer une suite parentale sous toiture. Résultat : Gain thermique R=7 et acoustique optimisée.",
    image: "https://placehold.co/600x400?text=Combles+Krutenau+Apres",
  },
  {
    id: "ecole-maternelle",
    titre: "Réfection acoustique - École Maternelle",
    metier: "Faux-Plafonds",
    lieu: "Eurométropole",
    secteur: "public",
    description:
      "Intervention en site occupé durant les vacances scolaires. Mise aux normes feu et acoustique.",
    image: "https://placehold.co/600x400?text=Ecole+Maternelle+Strasbourg",
  },
  {
    id: "maison-selestat",
    titre: "Rénovation thermique maison ancienne",
    metier: "Isolation Intérieure",
    lieu: "Sélestat",
    secteur: "particulier",
    description:
      "Traitement des ponts thermiques et doublage des murs. Finition enduit lisse prêt à peindre.",
    image: "https://placehold.co/600x400?text=Isolation+Maison+Alsacienne",
  },
];

/* ============================================
   PAGE D'ACCUEIL
   ============================================ */

export default function PageAccueil() {
  return (
    <>
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
            {/* Overlay gradient premium pour améliorer la lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/85 to-slate-900/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
          </div>

          {/* Contenu du hero */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl">
              {/* Badges de localisation et certifications - Harmonisés */}
              <div className="flex items-center gap-3 mb-8 flex-wrap">
                <Badge 
                  variant="outline" 
                  className="bg-brand-orange/20 text-brand-orange border-brand-orange/40 uppercase tracking-wider text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-brand-orange/30 hover:border-brand-orange/60 hover:scale-105 focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Strasbourg & Alsace
                </Badge>
                <div className="flex gap-2">
                  <Badge 
                    variant="outline" 
                    className="text-white bg-white/10 border-white/30 backdrop-blur-sm rounded-full text-xs font-semibold px-3 py-1.5 transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  >
                    RGE Qualibat
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="text-white bg-white/10 border-white/30 backdrop-blur-sm rounded-full text-xs font-semibold px-3 py-1.5 transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  >
                    Décennale
                  </Badge>
                </div>
              </div>

              {/* Titre principal - promesse de valeur avec hiérarchie renforcée */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
                Travaux de Plâtrerie, Isolation & Finitions.
              </h1>

              {/* Sous-titre explicatif avec meilleure lisibilité */}
              <p className="text-lg md:text-xl text-gray-200 mb-10 font-light leading-relaxed max-w-xl">
                Votre interlocuteur unique pour la rénovation intérieure.
                Fiabilité technique, certifications RGE et respect strict des
                délais.
              </p>

              {/* Boutons d'action principaux - CTA contact mis en avant */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold shadow-button-primary hover:shadow-button-primary-hover transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-md"
                >
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    <span>Demander un devis gratuit</span>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm rounded-md transition-all duration-300 ease-in-out hover:scale-105 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  <Link href="/marches-publics" className="flex items-center justify-center gap-2">
                    <span>Accès Acheteurs Publics</span>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
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
        <section className="py-12 sm:py-16 md:py-24 bg-white" id="profils">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête de section premium */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              {/* Badge indicateur visuel */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <Badge 
                  variant="outline" 
                  className="bg-brand-orange/10 text-brand-orange border-brand-orange/30 uppercase tracking-wider text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1 sm:py-1.5"
                >
                  Nos Clients
                </Badge>
              </div>
              
              {/* Titre principal avec meilleure hiérarchie */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue mb-4 sm:mb-6 leading-tight px-2">
                À qui s&apos;adresse notre expertise ?
              </h2>
              
              {/* Élément décoratif - ligne avec accent */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-brand-orange/50" />
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-brand-orange" />
                <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-brand-orange/50" />
              </div>
              
              {/* Description avec meilleure lisibilité */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Des solutions adaptées aux contraintes techniques et
                administratives de chaque acteur.
              </p>
            </div>

            {/* Grille des 3 cartes profils - Optimisée pour mobile (1), tablette (2), desktop (3) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {profilsClients.map((profil) => {
                // Icônes SVG personnalisées pour chaque profil
                const getIcon = () => {
                  switch (profil.id) {
                    case "public":
                      // Icône bâtiment administratif avec drapeau pour Marchés Publics
                      return (
                        <svg
                          className="w-full h-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          {/* Bâtiment principal */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 21h18M3 8h18M3 4h18M3 12h18M3 16h18"
                            className="opacity-30"
                          />
                          {/* Structure du bâtiment */}
                          <rect
                            x="4"
                            y="8"
                            width="16"
                            height="13"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* Colonnes */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 8v13M11 8v13M15 8v13M17 8v13"
                            className="opacity-40"
                          />
                          {/* Drapeau français stylisé */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 4v4M20 4h-3M20 6h-3"
                            strokeWidth={2}
                          />
                          {/* Porte principale */}
                          <rect
                            x="9"
                            y="15"
                            width="6"
                            height="6"
                            rx="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* Fenêtres */}
                          <rect
                            x="5.5"
                            y="10"
                            width="2.5"
                            height="2.5"
                            rx="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <rect
                            x="16"
                            y="10"
                            width="2.5"
                            height="2.5"
                            rx="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      );
                    case "pro":
                      // Icône immeuble de bureaux moderne pour Copro & Gestionnaires
                      return (
                        <svg
                          className="w-full h-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          {/* Base du bâtiment */}
                          <rect
                            x="3"
                            y="18"
                            width="18"
                            height="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* Structure principale */}
                          <rect
                            x="4"
                            y="6"
                            width="16"
                            height="12"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* Étages avec fenêtres alignées */}
                          <g className="opacity-80">
                            {/* Premier étage */}
                            <rect
                              x="6"
                              y="9"
                              width="2"
                              height="2"
                              rx="0.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <rect
                              x="9.5"
                              y="9"
                              width="2"
                              height="2"
                              rx="0.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <rect
                              x="13"
                              y="9"
                              width="2"
                              height="2"
                              rx="0.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <rect
                              x="16.5"
                              y="9"
                              width="2"
                              height="2"
                              rx="0.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            {/* Deuxième étage */}
                            <rect
                              x="6"
                              y="13"
                              width="2"
                              height="2"
                              rx="0.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <rect
                              x="9.5"
                              y="13"
                              width="2"
                              height="2"
                              rx="0.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <rect
                              x="13"
                              y="13"
                              width="2"
                              height="2"
                              rx="0.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <rect
                              x="16.5"
                              y="13"
                              width="2"
                              height="2"
                              rx="0.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          {/* Toit moderne avec antenne */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6l8-3 8 3"
                          />
                          <line
                            x1="12"
                            y1="3"
                            x2="12"
                            y2="1"
                            strokeLinecap="round"
                            strokeWidth={2}
                          />
                        </svg>
                      );
                    case "particulier":
                      // Icône maison moderne et accueillante pour Particuliers
                      return (
                        <svg
                          className="w-full h-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          {/* Toit */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 12l9-9 9 9M3 12v8a2 2 0 002 2h14a2 2 0 002-2v-8"
                          />
                          {/* Cheminée */}
                          <rect
                            x="16"
                            y="4"
                            width="2"
                            height="4"
                            rx="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* Porte principale */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6"
                          />
                          {/* Poignée de porte */}
                          <circle
                            cx="13.5"
                            cy="17.5"
                            r="0.5"
                            fill="currentColor"
                          />
                          {/* Fenêtres */}
                          <rect
                            x="5"
                            y="14"
                            width="2.5"
                            height="2.5"
                            rx="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <rect
                            x="16.5"
                            y="14"
                            width="2.5"
                            height="2.5"
                            rx="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* Croix sur les fenêtres */}
                          <line
                            x1="6.25"
                            y1="14"
                            x2="6.25"
                            y2="16.5"
                            strokeLinecap="round"
                            className="opacity-60"
                          />
                          <line
                            x1="5"
                            y1="15.25"
                            x2="7.5"
                            y2="15.25"
                            strokeLinecap="round"
                            className="opacity-60"
                          />
                          <line
                            x1="17.75"
                            y1="14"
                            x2="17.75"
                            y2="16.5"
                            strokeLinecap="round"
                            className="opacity-60"
                          />
                          <line
                            x1="16.5"
                            y1="15.25"
                            x2="19"
                            y2="15.25"
                            strokeLinecap="round"
                            className="opacity-60"
                          />
                        </svg>
                      );
                    default:
                      return null;
                  }
                };

                return (
                  <Card
                    key={profil.id}
                    className="profil-card group relative overflow-hidden flex flex-col
                      border border-gray-200/60 rounded-xl
                      shadow-md
                      hover:shadow-xl hover:shadow-brand-orange/10
                      hover:border-brand-orange/50
                      focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 sm:focus-within:ring-offset-4 focus-within:ring-opacity-50
                      focus-within:outline-none
                      transition-all duration-300 ease-in-out"
                  >
                    {/* Image de la carte avec overlay gradient */}
                    <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-100">
                      <img
                        src={profil.image}
                        alt={profil.titre}
                        className="w-full h-full object-cover 
                          transition-[transform,filter] duration-300 ease-in-out
                          group-hover:scale-110 group-hover:brightness-110
                          will-change-transform"
                      />
                      {/* Overlay gradient pour améliorer la lisibilité */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                          opacity-60 
                          transition-opacity duration-300 ease-in-out
                          group-hover:opacity-80"
                      />
                      
                      {/* Icône visuelle positionnée sur l'image */}
                      <div 
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 
                          bg-white/95 backdrop-blur-sm 
                          rounded-lg p-2 sm:p-2.5 
                          text-brand-blue
                          shadow-lg
                          transition-[transform,background-color,color,box-shadow] duration-300 ease-in-out
                          group-hover:bg-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl
                          group-hover:text-brand-orange
                          will-change-transform"
                      >
                        <div className="w-6 h-6 sm:w-8 sm:h-8">
                          {getIcon()}
                        </div>
                      </div>
                    </div>

                    {/* Contenu de la carte */}
                    <CardContent className="p-4 sm:p-6 flex-1 flex flex-col bg-white">
                      {profil.badge && (
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                          <Badge 
                            variant="secondary" 
                            className="bg-gradient-to-r from-brand-blue/10 to-brand-blue/5 
                              text-brand-blue border border-brand-blue/20 
                              uppercase tracking-wider text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1
                              shadow-sm
                              transition-[transform,box-shadow,border-color,background-color,color] duration-300 ease-in-out
                              group-hover:shadow-md group-hover:border-brand-orange/40 group-hover:bg-gradient-to-r group-hover:from-brand-orange/10 group-hover:to-brand-orange/5
                              group-hover:text-brand-orange group-hover:scale-105"
                          >
                            {profil.badge}
                          </Badge>
                        </div>
                      )}
                      <CardTitle 
                        className="text-lg sm:text-xl font-bold text-brand-blue mb-2 sm:mb-3 leading-tight
                          transition-colors duration-300 ease-in-out
                          group-hover:text-brand-orange"
                      >
                        {profil.titre}
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 flex-1 leading-relaxed">
                        {profil.description}
                      </CardDescription>
                      <Link
                        href={profil.lien}
                        className="inline-flex items-center 
                          text-brand-blue font-semibold text-sm sm:text-base
                          relative
                          transition-[color,transform] duration-300 ease-in-out
                          hover:text-brand-orange 
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:rounded-md
                          group-hover:translate-x-1
                          after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                          after:bg-brand-orange after:transition-[width] after:duration-300 after:ease-in-out
                          hover:after:w-full group-hover:after:w-full"
                        aria-label={`${profil.lienTexte} - ${profil.titre}`}
                      >
                        {profil.lienTexte}
                        <span 
                          className="ml-1.5 sm:ml-2 inline-block 
                            transition-transform duration-300 ease-in-out
                            group-hover:translate-x-1.5" 
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================
            APERÇU SERVICES - Les 4 domaines d'intervention
            Présente les services principaux avec liens vers les pages détaillées
            ============================================ */}
        <section className="py-12 sm:py-16 md:py-24 bg-gray-100" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête de section premium */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              {/* Badge indicateur visuel */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <Badge 
                  variant="outline" 
                  className="bg-brand-orange/10 text-brand-orange border-brand-orange/30 uppercase tracking-wider text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1 sm:py-1.5"
                >
                  Nos Services
                </Badge>
              </div>
              
              {/* Titre principal avec meilleure hiérarchie */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue mb-4 sm:mb-6 leading-tight px-2">
                Nos domaines d&apos;intervention en Alsace
              </h2>
              
              {/* Élément décoratif - ligne avec accent */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-brand-orange/50" />
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-brand-orange" />
                <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-brand-orange/50" />
              </div>
              
              {/* Description avec meilleure lisibilité */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Une maîtrise technique complète pour le second œuvre.
              </p>
            </div>

            {/* Grille des 4 cartes services - Harmonisé avec Profils */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {services.map((service) => {
                // Fonction pour obtenir l'icône SVG personnalisée selon le service
                const getServiceIcon = () => {
                  switch (service.id) {
                    case "platrerie":
                      // Icône représentant des murs/cloisons pour la Plâtrerie
                      return (
                        <svg
                          className="w-full h-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          {/* Mur principal */}
                          <rect
                            x="3"
                            y="4"
                            width="18"
                            height="16"
                            rx="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* Cloison verticale */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16"
                            strokeWidth={2}
                          />
                          {/* Lignes de jointure horizontales */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 10h18M3 14h18"
                            className="opacity-40"
                          />
                          {/* Détails de texture (points de vis) */}
                          <circle
                            cx="6"
                            cy="7"
                            r="0.8"
                            fill="currentColor"
                            className="opacity-60"
                          />
                          <circle
                            cx="18"
                            cy="7"
                            r="0.8"
                            fill="currentColor"
                            className="opacity-60"
                          />
                          <circle
                            cx="6"
                            cy="17"
                            r="0.8"
                            fill="currentColor"
                            className="opacity-60"
                          />
                          <circle
                            cx="18"
                            cy="17"
                            r="0.8"
                            fill="currentColor"
                            className="opacity-60"
                          />
                        </svg>
                      );
                    case "isolation":
                      // Icône représentant une maison isolée avec couches d'isolation
                      return (
                        <svg
                          className="w-full h-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          {/* Maison de base */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 12l9-9 9 9M3 12v8a2 2 0 002 2h14a2 2 0 002-2v-8"
                          />
                          {/* Couches d'isolation (lignes ondulées autour de la maison) */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2 11l10-8 10 8M2 15l10-8 10 8M2 19l10-8 10 8"
                            className="opacity-30"
                            strokeWidth={1}
                          />
                          {/* Porte */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6"
                          />
                          {/* Fenêtres */}
                          <rect
                            x="5"
                            y="14"
                            width="2.5"
                            height="2.5"
                            rx="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <rect
                            x="16.5"
                            y="14"
                            width="2.5"
                            height="2.5"
                            rx="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* Symbole de chaleur (ondes) */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8c1.5 0 3 1.5 3 3s-1.5 3-3 3"
                            className="opacity-50"
                            strokeWidth={1.2}
                          />
                        </svg>
                      );
                    case "peinture":
                      // Icône représentant un rouleau de peinture pour la Peinture
                      return (
                        <svg
                          className="w-full h-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          {/* Manche du rouleau */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v18"
                            strokeWidth={2}
                          />
                          {/* Poignée */}
                          <rect
                            x="10"
                            y="2"
                            width="4"
                            height="3"
                            rx="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* Rouleau principal */}
                          <rect
                            x="8"
                            y="16"
                            width="8"
                            height="6"
                            rx="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* Texture du rouleau (lignes horizontales) */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 18h8M8 20h8M8 22h8"
                            className="opacity-40"
                            strokeWidth={0.8}
                          />
                          {/* Gouttes de peinture */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 10c0-1 1-2 2-2s2 1 2 2"
                            fill="currentColor"
                            className="opacity-60"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11 12v2"
                            strokeWidth={1.5}
                            className="opacity-60"
                          />
                          {/* Traces de peinture */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 14c2-1 4-1 6 0"
                            className="opacity-30"
                            strokeWidth={1.2}
                          />
                        </svg>
                      );
                    case "enduits":
                      // Icône représentant une spatule et un mur lisse pour les Enduits
                      return (
                        <svg
                          className="w-full h-full"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          {/* Mur de fond */}
                          <rect
                            x="2"
                            y="6"
                            width="14"
                            height="14"
                            rx="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-20"
                          />
                          {/* Surface lisse du mur (lignes horizontales) */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2 10h14M2 14h14M2 18h14"
                            className="opacity-30"
                            strokeWidth={0.8}
                          />
                          {/* Spatule */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 4l4 4-8 8"
                            strokeWidth={2}
                          />
                          {/* Manche de la spatule */}
                          <rect
                            x="20"
                            y="2"
                            width="2"
                            height="6"
                            rx="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* Lame de la spatule (forme arrondie) */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 8c-1 0-2 1-2 2s1 2 2 2"
                            strokeWidth={1.5}
                          />
                          {/* Traces d'enduit (courbes lisses) */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 12c2-1 4-1 6 0"
                            className="opacity-40"
                            strokeWidth={1}
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16c2-1 4-1 6 0"
                            className="opacity-40"
                            strokeWidth={1}
                          />
                        </svg>
                      );
                    default:
                      return null;
                  }
                };

                return (
                  <Card
                    key={service.id}
                    className="service-card group relative overflow-hidden flex flex-col
                      border border-gray-200/60 rounded-xl
                      shadow-md
                      hover:shadow-xl hover:shadow-brand-orange/10
                      hover:border-brand-orange/50
                      focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 sm:focus-within:ring-offset-4 focus-within:ring-opacity-50
                      focus-within:outline-none
                      transition-all duration-300 ease-in-out
                      will-change-transform"
                  >
                    <CardContent className="p-4 sm:p-6 flex-1 flex flex-col bg-white">
                      {/* Icône du service avec gradient - Harmonisé */}
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6
                          transition-all duration-300 ease-in-out
                          ${
                            service.iconeColor === "orange"
                              ? "bg-gradient-to-br from-brand-orange/20 via-brand-orange/10 to-brand-orange/20 text-brand-orange"
                              : "bg-gradient-to-br from-brand-blue/20 via-brand-blue/10 to-brand-blue/20 text-brand-blue"
                          }
                          group-hover:scale-110 group-hover:rotate-3
                          group-hover:shadow-lg
                          ${
                            service.iconeColor === "orange"
                              ? "group-hover:from-brand-orange/30 group-hover:via-brand-orange/20 group-hover:to-brand-orange/30 group-hover:shadow-brand-orange/20"
                              : "group-hover:from-brand-blue/30 group-hover:via-brand-blue/20 group-hover:to-brand-blue/30 group-hover:shadow-brand-blue/20"
                          }
                          will-change-transform`}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 relative">
                          {/* Gradient overlay sur l'icône */}
                          <div 
                            className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300
                              ${
                                service.iconeColor === "orange"
                                  ? "bg-gradient-to-br from-brand-orange to-brand-orange-light"
                                  : "bg-gradient-to-br from-brand-blue to-brand-blue-light"
                              }`}
                          />
                          <div className="relative z-10">
                            {getServiceIcon()}
                          </div>
                        </div>
                      </div>
                      
                      {/* Titre avec transition de couleur */}
                      <CardTitle 
                        className="text-lg sm:text-xl font-bold text-brand-blue mb-3 sm:mb-4 leading-tight
                          transition-colors duration-300 ease-in-out
                          group-hover:text-brand-orange"
                      >
                        {service.titre}
                      </CardTitle>
                      
                      {/* Liste des prestations avec meilleure hiérarchie visuelle */}
                      <ul className="text-sm sm:text-base text-gray-600 space-y-2 sm:space-y-2.5 mb-6 flex-1">
                        {service.prestations.map((prestation, index) => (
                          <li 
                            key={prestation}
                            className="flex items-start gap-2
                              transition-all duration-300 ease-in-out
                              group-hover:translate-x-1"
                            style={{
                              transitionDelay: `${index * 50}ms`
                            }}
                          >
                            <span 
                              className={`flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full
                                transition-colors duration-300 ease-in-out
                                ${
                                  service.iconeColor === "orange"
                                    ? "bg-brand-orange group-hover:bg-brand-orange-dark"
                                    : "bg-brand-blue group-hover:bg-brand-blue-dark"
                                }`}
                            />
                            <span className="leading-relaxed">{prestation}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Lien "En savoir plus" avec animation */}
                      <Link
                        href={service.lien}
                        className="inline-flex items-center 
                          text-brand-orange font-semibold text-sm sm:text-base
                          relative
                          transition-[color,transform] duration-300 ease-in-out
                          hover:text-brand-orange-dark
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:rounded-md
                          group-hover:translate-x-1
                          after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                          after:bg-brand-orange after:transition-[width] after:duration-300 after:ease-in-out
                          hover:after:w-full group-hover:after:w-full"
                        aria-label={`En savoir plus sur ${service.titre}`}
                      >
                        En savoir plus
                        <span 
                            className="ml-1.5 sm:ml-2 inline-block 
                            transition-transform duration-300 ease-in-out
                            group-hover:translate-x-1.5"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================
            PORTFOLIO AVANT/APRÈS - Preuve visuelle
            Montre un exemple de réalisation avec comparaison avant/après
            ============================================ */}
        <section className="py-16 bg-white" id="realisations">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête de section premium */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              {/* Badge indicateur visuel */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <Badge 
                  variant="outline" 
                  className="bg-brand-orange/10 text-brand-orange border-brand-orange/30 uppercase tracking-wider text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1 sm:py-1.5"
                >
                  Portfolio
                </Badge>
              </div>
              
              {/* Titre principal avec meilleure hiérarchie */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue mb-4 sm:mb-6 leading-tight px-2">
                Nos réalisations parlent pour nous
              </h2>
              
              {/* Élément décoratif - ligne avec accent */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-brand-orange/50" />
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-brand-orange" />
                <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-brand-orange/50" />
              </div>
              
              {/* Description avec meilleure lisibilité */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 mb-6 sm:mb-8">
                Découvrez la qualité de nos finitions sur des chantiers récents.
              </p>

              {/* Bouton CTA centré - Style premium */}
              <div className="flex justify-center">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="inline-flex items-center gap-2 
                    border-2 border-brand-orange text-brand-orange 
                    bg-white
                    hover:border-brand-orange-dark hover:text-white hover:bg-brand-orange
                    hover:shadow-button-hover
                    hover:scale-105 hover:-translate-y-0.5
                    focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2
                    transition-all duration-300 ease-in-out
                    group
                    shadow-button"
                  aria-label="Explorer le portfolio de réalisations"
                >
                  <Link href="/realisations">
                    Explorer le portfolio
                    <svg
                      className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Zone de comparaison avant/après (placeholder pour futur slider) - Design premium */}
            <div className="relative w-full h-[500px] sm:h-[600px] bg-gray-100 rounded-xl overflow-hidden 
              shadow-card-hover
              group
              transition-all duration-300 ease-in-out
              hover:shadow-card-hover-lg
              will-change-transform">
              {/* Overlay gradient pour améliorer la lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 
                transition-opacity duration-300 ease-in-out
                group-hover:opacity-80" />
              
              {/* Image de fond (résultat après travaux) */}
              <img
                src="https://placehold.co/1200x800?text=Resultat+Final+Impeccable"
                alt="Après rénovation"
                className="absolute inset-0 w-full h-full object-cover
                  transition-[transform,filter] duration-500 ease-in-out
                  group-hover:scale-105 group-hover:brightness-110
                  will-change-transform"
              />

              {/* Badge d'information sur le projet - Style premium harmonisé */}
              <Card className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 
                bg-white/95 backdrop-blur-md z-20 max-w-sm
                border border-gray-200/60
                shadow-card-hover
                transition-all duration-300 ease-in-out
                group-hover:shadow-card-hover-lg
                group-hover:bg-white group-hover:scale-105
                will-change-transform">
                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    {/* Icône décorative */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 
                      flex items-center justify-center
                      transition-all duration-300 ease-in-out
                      group-hover:from-brand-orange/20 group-hover:to-brand-orange/10">
                      <svg
                        className="w-5 h-5 text-brand-orange"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg sm:text-xl font-bold text-brand-blue mb-1.5
                        transition-colors duration-300 ease-in-out
                        group-hover:text-brand-orange">
                        Rénovation complète Appartement
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600 leading-relaxed">
                        Strasbourg Neudorf • Plâtrerie, Isolation & Peinture
                      </CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Indicateur visuel du slider (curseur de comparaison) - Design premium */}
              <div className="absolute inset-y-0 left-1/2 w-0.5 sm:w-1 bg-white/80 backdrop-blur-sm 
                cursor-ew-resize z-10 flex items-center justify-center
                transition-all duration-300 ease-in-out
                group-hover:bg-white group-hover:w-1 sm:group-hover:w-1.5
                shadow-white-glow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full 
                  shadow-card-hover
                  flex items-center justify-center
                  transition-all duration-300 ease-in-out
                  group-hover:scale-110 group-hover:shadow-card-hover-lg
                  group-hover:bg-brand-orange group-hover:text-white
                  will-change-transform">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue
                      transition-colors duration-300 ease-in-out
                      group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
              </div>

              {/* Labels Avant/Après pour clarifier le slider */}
              <div className="absolute top-4 left-4 z-20">
                <Badge 
                  variant="secondary"
                  className="bg-black/60 text-white border-0 backdrop-blur-sm
                    uppercase tracking-wider text-xs font-semibold px-3 py-1.5
                    transition-all duration-300 ease-in-out
                    group-hover:bg-black/80">
                  Avant
                </Badge>
              </div>
              <div className="absolute top-4 right-4 z-20">
                <Badge 
                  variant="secondary"
                  className="bg-brand-orange/90 text-white border-0 backdrop-blur-sm
                    uppercase tracking-wider text-xs font-semibold px-3 py-1.5
                    transition-all duration-300 ease-in-out
                    group-hover:bg-brand-orange">
                  Après
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            POURQUOI NOUS + MÉTHODE
            Section en 2 colonnes : arguments de différenciation à gauche, méthode de travail à droite
            ============================================ */}
        <section className="py-16 md:py-24 bg-gray-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Colonne gauche : Pourquoi nous choisir */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue mb-8 sm:mb-10 md:mb-12 leading-tight">
                  Pourquoi choisir AR+SOLUTION ?
                </h2>
                <div className="space-y-6 sm:space-y-8">
                  {argumentsChoix.map((argument, index) => (
                    <div 
                      key={argument.titre} 
                      className="flex items-start gap-4 sm:gap-5
                        transition-all duration-300 ease-in-out
                        hover:translate-x-1
                        group"
                    >
                      {/* Icône check harmonisée avec le design system */}
                      <div className="flex-shrink-0">
                        <div 
                          className="flex items-center justify-center 
                            h-12 w-12 sm:h-14 sm:w-14 
                            rounded-xl
                            bg-gradient-to-br from-green-50 via-green-100 to-green-50
                            text-green-600
                            border border-green-200/60
                            shadow-sm
                            transition-all duration-300 ease-in-out
                            group-hover:scale-110 group-hover:rotate-3
                            group-hover:shadow-md group-hover:shadow-green-200/50
                            group-hover:bg-gradient-to-br group-hover:from-green-100 group-hover:via-green-50 group-hover:to-green-100
                            group-hover:border-green-300/80
                            will-change-transform"
                        >
                          <svg
                            className="h-6 w-6 sm:h-7 sm:w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* Texte de l'argument */}
                      <div className="flex-1 pt-1">
                        <h4 
                          className="text-lg sm:text-xl font-bold text-brand-blue mb-2 sm:mb-3
                            transition-colors duration-300 ease-in-out
                            group-hover:text-brand-orange"
                        >
                          {argument.titre}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {argument.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Colonne droite : Méthode de travail (stepper) */}
              <Card 
                className="border border-gray-200/60 
                  shadow-md
                  hover:shadow-lg hover:shadow-brand-orange/10
                  transition-all duration-300 ease-in-out
                  hover:-translate-y-1"
              >
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-brand-blue border-b border-gray-200 pb-4">
                    Notre méthode de travail
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  {/* Timeline verticale améliorée */}
                  <div className="relative">
                    {/* Ligne verticale avec gradient */}
                    <div 
                      className="absolute left-4 top-0 bottom-0 w-0.5
                        bg-gradient-to-b from-brand-orange/40 via-brand-orange/60 to-brand-orange/40
                        shadow-sm"
                    />
                    
                    {/* Conteneur des étapes */}
                    <div className="space-y-8 sm:space-y-10">
                      {etapesMethode.map((etape, index) => (
                        <div 
                          key={etape.numero} 
                          className="relative pl-12 sm:pl-14
                            transition-all duration-300 ease-in-out
                            hover:translate-x-1
                            group"
                        >
                          {/* Point orange amélioré sur la timeline */}
                          <div 
                            className="absolute left-[13px] sm:left-[15px] top-1.5
                              h-6 w-6 sm:h-7 sm:w-7
                              rounded-full 
                              bg-gradient-to-br from-brand-orange to-brand-orange-dark
                              border-[3px] border-white
                              shadow-md shadow-brand-orange/30
                              transition-all duration-300 ease-in-out
                              group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-brand-orange/50
                              will-change-transform
                              flex items-center justify-center"
                          >
                            {/* Numéro de l'étape */}
                            <span 
                              className="text-xs sm:text-sm font-bold text-white
                                transition-transform duration-300 ease-in-out
                                group-hover:scale-110"
                            >
                              {etape.numero}
                            </span>
                            {/* Cercle extérieur animé au hover */}
                            <span 
                              className="absolute inset-0 rounded-full
                                bg-brand-orange/20
                                scale-0
                                transition-transform duration-300 ease-in-out
                                group-hover:scale-150
                                -z-10"
                            />
                          </div>
                          
                          {/* Contenu de l'étape */}
                          <div>
                            <h5 
                              className="text-base sm:text-lg font-bold text-gray-900 mb-2
                                transition-colors duration-300 ease-in-out
                                group-hover:text-brand-orange"
                            >
                              {etape.titre}
                            </h5>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                              {etape.description}
                            </p>
                          </div>
                        </div>
                      ))}
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
          {/* Overlay gradient subtil pour profondeur */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-blue opacity-90" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
              {/* Contenu texte */}
              <div className="lg:w-1/2">
                {/* Badge premium avec meilleur contraste */}
                <Badge 
                  variant="outline" 
                  className="bg-white/10 text-white border-white/20 backdrop-blur-sm mb-6 uppercase tracking-wider text-xs font-semibold px-4 py-1.5"
                >
                  Espace Collectivités
                </Badge>
                
                {/* Titre avec meilleur contraste */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                  Acheteurs Publics : un partenaire conforme et réactif.
                </h2>
                
                {/* Description avec meilleur contraste (remplacement de text-blue-100 par text-white/90) */}
                <p className="text-white/90 mb-8 text-base sm:text-lg leading-relaxed">
                  Nous connaissons vos contraintes. AR+SOLUTION structure ses
                  offres pour répondre aux exigences des marchés publics
                  (Écoles, Mairies, Bâtiments administratifs).
                </p>

                {/* Liste des avantages avec meilleure hiérarchie visuelle */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center
                        transition-all duration-300 ease-in-out
                        group-hover:bg-brand-orange/30 group-hover:scale-110">
                        <svg
                          className="w-4 h-4 text-brand-orange"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-white/95 text-sm sm:text-base leading-relaxed pt-0.5">
                      Dossiers administratifs RGE & Assurances à jour
                    </span>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center
                        transition-all duration-300 ease-in-out
                        group-hover:bg-brand-orange/30 group-hover:scale-110">
                        <svg
                          className="w-4 h-4 text-brand-orange"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-white/95 text-sm sm:text-base leading-relaxed pt-0.5">
                      Expérience en site occupé et bâtiments ERP
                    </span>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center
                        transition-all duration-300 ease-in-out
                        group-hover:bg-brand-orange/30 group-hover:scale-110">
                        <svg
                          className="w-4 h-4 text-brand-orange"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-white/95 text-sm sm:text-base leading-relaxed pt-0.5">
                      Interlocuteur unique dédié aux marchés
                    </span>
                  </div>
                </div>

                {/* CTA email optimisé avec ombres et transitions premium */}
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-blue 
                    hover:bg-gray-50 hover:text-brand-blue-dark
                    shadow-lg hover:shadow-xl hover:shadow-white/20
                    hover:scale-105 hover:-translate-y-0.5
                    transition-all duration-300 ease-in-out
                    focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue
                    font-semibold"
                >
                  <a href="mailto:marches@ar-solution.fr" className="inline-flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
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
                    Contacter le service Marchés Publics
                  </a>
                </Button>
              </div>

              {/* Grille des documents disponibles - Harmonisée avec design system */}
              <div className="lg:w-1/2 w-full">
                <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/10 
                  shadow-lg
                  transition-all duration-300 ease-in-out
                  hover:bg-white/10 hover:border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-6 text-center sm:text-left">
                    Documents disponibles
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {documentsMarchesPublics.map((doc) => (
                      <Card
                        key={doc.titre}
                        className="document-card group
                          bg-white/10 backdrop-blur-sm
                          border border-white/20
                          flex flex-col items-center text-center
                          shadow-md
                          hover:shadow-xl hover:shadow-brand-orange/20
                          hover:border-brand-orange/50 hover:bg-white/15
                          hover:-translate-y-1 hover:scale-[1.02]
                          focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 focus-within:ring-offset-brand-blue focus-within:ring-opacity-50
                          focus-within:outline-none
                          transition-all duration-300 ease-in-out
                          will-change-transform"
                      >
                        <CardContent className="p-4 sm:p-5 w-full">
                          {/* Icône document avec animation */}
                          <div className="mb-3 flex justify-center
                            transition-transform duration-300 ease-in-out
                            group-hover:scale-110 group-hover:rotate-3">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-brand-orange/20 flex items-center justify-center
                              transition-all duration-300 ease-in-out
                              group-hover:bg-brand-orange/30">
                              <svg
                                className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Titre avec meilleur contraste */}
                          <CardTitle className="text-sm sm:text-base text-white font-semibold mb-2
                            transition-colors duration-300 ease-in-out
                            group-hover:text-brand-orange">
                            {doc.titre}
                          </CardTitle>
                          
                          {/* Disponibilité avec meilleur contraste */}
                          <CardDescription className="text-xs sm:text-sm text-white/80 mt-1
                            transition-colors duration-300 ease-in-out
                            group-hover:text-white/95">
                            {doc.disponibilite}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            AVIS CLIENTS + ZONE D'INTERVENTION
            Section en 2 colonnes : avis Google à gauche, carte zone à droite (SEO local)
            ============================================ */}
        <section className="py-16 md:py-24 bg-white" id="avis">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête de section premium */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              {/* Badge indicateur visuel */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <Badge 
                  variant="outline" 
                  className="bg-brand-orange/10 text-brand-orange border-brand-orange/30 uppercase tracking-wider text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1 sm:py-1.5"
                >
                  Témoignages & Zone
                </Badge>
              </div>
              
              {/* Titre principal avec meilleure hiérarchie */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue mb-4 sm:mb-6 leading-tight px-2">
                La confiance de nos clients
              </h2>
              
              {/* Élément décoratif - ligne avec accent */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-brand-orange/50" />
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-brand-orange" />
                <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-brand-orange/50" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Colonne gauche : Avis Google - Design premium harmonisé */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-blue mb-6 leading-tight">
                  Ce que disent nos clients
                </h3>
                <Card className="border border-gray-200/60 rounded-xl shadow-md hover:shadow-lg hover:shadow-brand-orange/10 transition-all duration-300 ease-in-out">
                  <CardContent className="p-6 sm:p-8">
                    {/* Note globale - Style premium */}
                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200/60">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-bold text-gray-900">4.8</span>
                        <span className="text-sm sm:text-base text-gray-500">/5</span>
                      </div>
                      <span className="ml-auto text-xs sm:text-sm text-gray-500 font-medium">
                        sur Google Avis
                      </span>
                    </div>

                    {/* Liste des avis - Cartes harmonisées */}
                    <div className="space-y-4 sm:space-y-5">
                      {avisClients.map((avis, index) => (
                        <Card 
                          key={index}
                          className="avis-card group
                            border border-gray-200/60 rounded-xl
                            shadow-sm
                            hover:shadow-md hover:shadow-brand-orange/10
                            hover:border-brand-orange/30
                            hover:-translate-y-1
                            focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 focus-within:ring-opacity-50
                            focus-within:outline-none
                            transition-all duration-300 ease-in-out
                            will-change-transform"
                        >
                          <CardContent className="p-4 sm:p-5">
                            {/* Icône guillemets décorative */}
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 
                                  flex items-center justify-center
                                  transition-all duration-300 ease-in-out
                                  group-hover:from-brand-orange/20 group-hover:to-brand-orange/10 group-hover:scale-110">
                                  <svg
                                    className="w-4 h-4 text-brand-orange"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                  >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                  </svg>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed mb-3
                                  transition-colors duration-300 ease-in-out
                                  group-hover:text-gray-900">
                                  &ldquo;{avis.texte}&rdquo;
                                </p>
                                <div className="flex items-center gap-2">
                                  <div className="w-1 h-1 rounded-full bg-brand-orange
                                    transition-all duration-300 ease-in-out
                                    group-hover:scale-125" />
                                  <p className="text-xs sm:text-sm text-gray-600 font-semibold
                                    transition-colors duration-300 ease-in-out
                                    group-hover:text-brand-blue">
                                    {avis.auteur}
                                  </p>
                                  <span className="text-gray-400">•</span>
                                  <p className="text-xs sm:text-sm text-gray-500">
                                    {avis.ville}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    {/* Lien "Voir tous les avis" - Style premium */}
                    <div className="mt-6 pt-6 border-t border-gray-200/60">
                      <a
                        href="#avis"
                        className="inline-flex items-center justify-center w-full gap-2
                          text-sm sm:text-base text-brand-blue font-semibold
                          hover:text-brand-orange
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:rounded-md
                          transition-all duration-300 ease-in-out
                          group"
                        aria-label="Voir tous les avis clients"
                      >
                        <span>Voir tous les avis</span>
                        <svg
                          className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Colonne droite : Zone d'intervention - Design premium harmonisé */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-blue mb-6 leading-tight">
                  Zone d&apos;intervention
                </h3>
                <Card className="zone-intervention-card
                  border border-gray-200/60 rounded-xl
                  shadow-md
                  hover:shadow-lg hover:shadow-brand-orange/10
                  hover:border-brand-orange/30
                  transition-all duration-300 ease-in-out
                  h-full
                  flex flex-col">
                  <CardContent className="p-6 sm:p-8 flex-1 flex flex-col">
                    {/* Description avec meilleure hiérarchie */}
                    <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                      Basée à <strong className="text-brand-blue font-bold">Strasbourg</strong>, notre équipe intervient
                      dans tout le <strong className="text-brand-blue font-bold">Bas-Rhin (67)</strong> pour vos projets
                      de rénovation.
                    </p>
                    
                    {/* Liste des villes - Style premium */}
                    <div className="mb-6 flex-1">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {villesIntervention.map((ville, index) => (
                          <li 
                            key={ville} 
                            className="flex items-center gap-3
                              group/item
                              transition-all duration-300 ease-in-out
                              hover:translate-x-1"
                            style={{
                              transitionDelay: `${index * 30}ms`
                            }}
                          >
                            <div className="flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-brand-orange
                                transition-all duration-300 ease-in-out
                                group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-brand-orange/50" />
                            </div>
                            <span className="text-sm sm:text-base text-gray-700 font-medium
                              transition-colors duration-300 ease-in-out
                              group-hover/item:text-brand-blue">
                              {ville}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Placeholder carte - Design premium harmonisé */}
                    <div className="w-full h-40 sm:h-48 rounded-xl overflow-hidden
                      border border-gray-200/60
                      shadow-sm
                      group/map
                      transition-all duration-300 ease-in-out
                      hover:shadow-md hover:shadow-brand-orange/10
                      hover:border-brand-orange/30
                      relative
                      bg-gradient-to-br from-gray-100 to-gray-200">
                      {/* Overlay gradient subtil */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/5 via-transparent to-transparent z-10
                        transition-opacity duration-300 ease-in-out
                        group-hover/map:opacity-80" />
                      
                      {/* Image placeholder */}
                      <img
                        src="https://placehold.co/600x200?text=Carte+Alsace+Strasbourg"
                        alt="Carte Zone Intervention - Bas-Rhin (67)"
                        className="w-full h-full object-cover
                          transition-[transform,filter] duration-500 ease-in-out
                          group-hover/map:scale-105 group-hover/map:brightness-110
                          will-change-transform"
                      />
                      
                      {/* Badge informatif - Style premium */}
                      <div className="absolute bottom-3 left-3 z-20">
                        <Badge 
                          variant="secondary"
                          className="bg-white/95 backdrop-blur-sm text-brand-blue border-0
                            shadow-md
                            transition-all duration-300 ease-in-out
                            group-hover/map:bg-white group-hover/map:shadow-lg">
                          <svg
                            className="w-3 h-3 mr-1.5 text-brand-orange"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          Bas-Rhin (67)
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
            <div className="mb-12 sm:mb-16 md:mb-20">
              {/* En-tête de section premium */}
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                {/* Badge indicateur visuel */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <Badge 
                    variant="outline" 
                    className="bg-brand-orange/10 text-brand-orange border-brand-orange/30 uppercase tracking-wider text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1 sm:py-1.5"
                  >
                    FAQ
                  </Badge>
                </div>
                
                {/* Titre principal avec meilleure hiérarchie */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue mb-4 sm:mb-6 leading-tight px-2">
                  Questions Fréquentes
                </h2>
                
                {/* Élément décoratif - ligne avec accent */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-brand-orange/50" />
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-brand-orange" />
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-brand-orange/50" />
                </div>
              </div>

              <FAQ />
            </div>

            {/* Formulaire de demande de devis - Le visiteur peut envoyer sa demande */}
            <div className="bg-white rounded-xl shadow-card-hover hover:shadow-card-hover-lg border border-gray-200/60 border-t-4 border-t-brand-orange p-6 sm:p-8 md:p-10 transition-all duration-300 ease-in-out">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-blue mb-2 sm:mb-3 leading-tight">
                  Parlez-nous de votre projet
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
          Harmonisée avec le design system premium
          ============================================ */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200/60 p-3 shadow-floating z-50 flex gap-3 safe-area-inset-bottom">
        <Button
          asChild
          variant="secondary"
          size="lg"
          className="flex-1 text-brand-blue font-semibold
            bg-gray-100 hover:bg-gray-200 hover:text-brand-blue-dark
            border border-gray-200/60
            rounded-md
            shadow-button
            hover:shadow-card-hover
            hover:scale-[1.02] hover:-translate-y-0.5
            active:scale-[0.98]
            focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2
            transition-all duration-300 ease-in-out
            group"
        >
          <a href="tel:0388000000" className="flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Appeler</span>
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          className="flex-1 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold
            rounded-md
            shadow-button-primary
            hover:shadow-button-primary-hover
            hover:scale-[1.02] hover:-translate-y-0.5
            active:scale-[0.98]
            focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2
            transition-all duration-300 ease-in-out
            group"
        >
          <a href="#contact" className="flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Devis Gratuit</span>
          </a>
        </Button>
      </div>
    </>
  );
}
