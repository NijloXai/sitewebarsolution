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
import GridScan from "@/components/GridScan";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
            <div className="max-w-3xl">
              {/* Badges certifications et localisation */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <Badge variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white uppercase tracking-wide">
                  <svg
                    className="w-3 h-3 text-brand-orange mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Intervention Alsace
                </Badge>
                <Badge variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white uppercase tracking-wide">
                  <svg
                    className="w-3 h-3 text-brand-orange mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Certifié RGE & Qualibat
                </Badge>
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
                  <a href="#devis">Demander un devis (Réponse 48h)</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-brand-blue backdrop-blur-sm"
                >
                  <Link href="/marches-publics">Accès Marchés Publics & Pros</Link>
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
                  className="hover:shadow-lg hover:border-brand-orange transition duration-300 group"
                >
                  <CardContent className="p-6">
                    {/* Icône de la prestation */}
                    <div
                      className={`w-12 h-12 ${
                        prestation.iconeColor === "orange"
                          ? "bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
                          : "bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white"
                      } rounded-full flex items-center justify-center mb-4 shadow-sm transition`}
                    >
                      {prestation.id === "cloisons" && (
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
                            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                          />
                        </svg>
                      )}
                      {prestation.id === "faux-plafonds" && (
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
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      )}
                      {prestation.id === "finitions" && (
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
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                      )}
                      {prestation.id === "isolation" && (
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      )}
                    </div>
                    {/* Titre et description */}
                    <CardTitle className="text-xl mb-2">
                      {prestation.titre}
                    </CardTitle>
                    <CardDescription className="text-sm mb-4">
                      {prestation.description}
                    </CardDescription>
                    {/* Lien optionnel vers un service lié */}
                    {prestation.lien ? (
                      <Link
                        href={prestation.lien}
                        className="text-brand-blue font-semibold text-sm underline hover:text-brand-orange transition"
                      >
                        {prestation.lienTexte}
                      </Link>
                    ) : (
                      <span className="text-brand-orange font-semibold text-sm flex items-center gap-1">
                        Plus de détails
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SOLUTIONS PAR PROFIL - Tabs Public/Pro/Particulier
            L'utilisateur peut voir les avantages spécifiques à son profil
            ============================================ */}
        <section className="py-16 bg-gray-50 border-y border-gray-200">
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
                          ? "bg-brand-blue/10 text-brand-blue"
                          : profil.id === "pro"
                          ? "bg-brand-orange/10 text-brand-orange"
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
                            className="w-4 h-4 text-status-success flex-shrink-0"
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
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold">
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-brand-blue mb-2">
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
                      <Badge variant="secondary" className="badge-primary-light text-xs">
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
            BLOC MARCHÉS PUBLICS - Focus administratif
            Section dédiée aux acheteurs publics avec garanties
            ============================================ */}
        <section className="py-16 bg-brand-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              {/* Contenu texte */}
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">
                  Acheteurs publics & Architectes : vos garanties
                </h2>
                <p className="text-slate-300 mb-8">
                  Nous savons que la conformité administrative est aussi
                  importante que la qualité technique pour vos appels
                  d&apos;offres.
                </p>

                {/* Grille des garanties */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-bold">Dossier administratif à jour</h4>
                      <p className="text-sm text-slate-400">
                        Attestations URSSAF, Décennale, RC Pro disponibles sous
                        24h.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-bold">Maîtrise des normes ERP</h4>
                      <p className="text-sm text-slate-400">
                        PV de réaction au feu, degrés coupe-feu, accessibilité
                        PMR.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-bold">Certifié RGE</h4>
                      <p className="text-sm text-slate-400">
                        Indispensable pour les subventions et la rénovation
                        énergétique.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-bold">Réactivité chiffrage</h4>
                      <p className="text-sm text-slate-400">
                        Réponse aux appels d&apos;offres et DPGF précises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Encart contact service Pro */}
              <div className="md:w-1/3 bg-white/10 p-6 rounded-lg border border-white/20 text-center backdrop-blur-sm">
                <p className="mb-4 font-semibold">
                  Besoin d&apos;un dossier technique ?
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {documentsMarchesPublics.map((doc) => (
                    <Badge
                      key={doc.titre}
                      variant="outline"
                      className="text-xs bg-white/10 border-white/20 text-white/80"
                    >
                      {doc.titre}
                    </Badge>
                  ))}
                </div>
                <Button
                  asChild
                  className="w-full bg-white text-brand-blue hover:bg-gray-100 mb-3"
                >
                  <a href="mailto:pro@ar-solution.fr">Contacter le service Pro</a>
                </Button>
                <p className="text-xs text-slate-400">
                  Ligne directe réservée aux maîtres d&apos;œuvre et
                  collectivités.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            FAQ PLÂTRERIE
            Répond aux questions courantes sur la plâtrerie
            ============================================ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-blue text-center mb-10">
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
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 shadow-floating z-50 flex gap-3">
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

