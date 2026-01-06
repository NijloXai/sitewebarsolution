/*
  Page Template Fiche Projet (Réalisation individuelle) du site AR+SOLUTION.
  
  Cette page présente en détail un projet réalisé par l'entreprise.
  Elle sert à :
  - Montrer le travail accompli avec photos avant/après
  - Raconter le contexte et les défis surmontés (storytelling)
  - Détailler les étapes d'intervention et les matériaux utilisés
  - Rassurer avec un témoignage client
  - Proposer des projets similaires (maillage interne)
  
  L'utilisateur peut :
  - Voir la transformation visuelle (slider avant/après)
  - Comprendre la méthodologie de l'entreprise
  - Demander un devis pour un projet similaire
  - Naviguer vers d'autres réalisations
*/

import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Button } from "@/components/ui/button";
import GridScan from "@/components/common/GridScan";

/* ============================================
   DONNÉES STATIQUES DU PROJET (EXEMPLE)
   Dans une version dynamique, ces données viendraient d'un CMS ou d'une API
   ============================================ */

/* Informations générales du projet */
const projet = {
  slug: "renovation-ecole-schiltigheim",
  titre: "Rénovation Thermique et Acoustique d'une École Primaire à Schiltigheim",
  sousTitre:
    "Réhabilitation complète de 4 salles de classe en site occupé. Amélioration du confort thermique et réduction de la résonance pour 120 élèves.",
  categorie: "Marché Public",
  metiers: ["Isolation", "Plâtrerie"],
  localisation: "Schiltigheim (67)",
  imageAvant: "https://placehold.co/800x600/94a3b8/1e293b?text=AVANT:+Vieux+Plafonds+Sombres",
  imageApres: "https://placehold.co/800x600/e2e8f0/64748b?text=APRÈS:+Classe+Rénovée+Lumineuse",
};

/* Fiche technique du chantier */
const ficheChantier = {
  typeBien: "École Primaire (Années 80)",
  surface: "450 m² (Plafonds & Murs)",
  duree: "4 semaines (Juillet)",
  interventions: ["Isolation ITI", "Faux-plafonds", "Mise en peinture"],
  contraintePrincipale: "Délais Stricts (Vacances)",
};

/* Contexte et problématique du projet */
const contexte = {
  titre: 'Le Défi Initial : Une "passoire thermique" bruyante',
  paragraphe1:
    "Construite dans les années 1980, l'école Jules Verne de Schiltigheim souffrait de deux maux majeurs : une déperdition thermique importante en hiver (factures de chauffage élevées pour la commune) et une résonance acoustique rendant l'enseignement difficile dans les classes.",
  paragraphe2:
    "La Mairie a mandaté notre entreprise avec un impératif catégorique : réaliser l'intégralité des travaux durant les vacances d'été pour garantir une rentrée scolaire sans poussière ni retard.",
  citation: {
    texte:
      "\"L'acoustique était devenue un vrai problème pédagogique. Il fallait une solution technique performante, posée rapidement.\"",
    auteur: "Services Techniques",
    fonction: "Ville de Schiltigheim",
    initiales: "ST",
  },
};

/* Étapes d'intervention (timeline) */
const etapesIntervention = [
  {
    numero: 1,
    titre: "Semaine 1 : Protection & Démolition",
    description:
      "Bâchage intégral des sols existants. Dépose des anciens faux-plafonds et évacuation des gravats en filière de recyclage certifiée.",
    estFinal: false,
  },
  {
    numero: 2,
    titre: "Semaine 2-3 : Isolation & Plâtrerie",
    description:
      "Pose de l'ossature métallique, insertion de laine minérale (GR32) et pose des plaques phoniques (Placo® Phonique) pour réduire le bruit de 50%.",
    estFinal: false,
  },
  {
    numero: 3,
    titre: "Semaine 4 : Finitions & Nettoyage",
    description:
      'Ratissage, ponçage sans poussière (système aspirateur Festool), peinture Ecolabel A+. Nettoyage complet pour livraison "prêt à enseigner".',
    estFinal: true,
  },
];

/* Spécifications techniques et matériaux */
const specificationsTechniques = [
  {
    categorie: "Isolation Thermique",
    detail: "Laine de verre ISOVER GR32 (Haute performance thermique) - R=3.15",
  },
  {
    categorie: "Plâtrerie Acoustique",
    detail:
      "Plaques Placo® Phonique sur ossature métallique Stil® avec suspentes anti-vibratiles.",
  },
  {
    categorie: "Peintures",
    detail:
      "Peinture Velours Lessivable - Label Environnemental A+ (Qualité de l'air intérieur).",
  },
];

/* Photos de la galerie finale */
const galeriePhotos = [
  {
    src: "https://placehold.co/600x450/e2e8f0/64748b?text=Finitions+Plafond+Acoustique",
    alt: "Détail plafond acoustique",
    legende: "Intégration luminaires LED",
  },
  {
    src: "https://placehold.co/600x450/e2e8f0/64748b?text=Salle+de+Classe+Terminée",
    alt: "Vue d'ensemble classe",
    legende: "Vue d'ensemble après nettoyage",
  },
  {
    src: "https://placehold.co/600x450/e2e8f0/64748b?text=Joints+et+Peinture",
    alt: "Détail jointoiement",
    legende: "Finitions soignées (Lumière rasante)",
  },
];

/* Témoignage client */
const temoignage = {
  texte:
    "\"Chantier livré dans les temps, propreté impeccable à la rentrée des professeurs. Une entreprise fiable pour les marchés publics.\"",
  auteur: "Mme La Directrice",
  note: 5,
};

/* Projets similaires pour le maillage interne */
const projetsSimilaires = [
  {
    id: "bureaux-openspace-strasbourg",
    titre: "Aménagement de bureaux Open-Space",
    lieu: "Strasbourg",
    image: "https://placehold.co/200x200/e2e8f0/64748b?text=Bureaux",
  },
  {
    id: "gymnase-illkirch",
    titre: "Correction acoustique Gymnase Municipal",
    lieu: "Illkirch",
    image: "https://placehold.co/200x200/e2e8f0/64748b?text=Gymnase",
  },
];

/* ============================================
   MÉTADONNÉES DYNAMIQUES (SEO)
   Génère le titre et la description basés sur le projet affiché.
   Dans une version avec CMS, les données seraient récupérées via le slug.
   ============================================ */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  /*
    Note : Actuellement les données du projet sont statiques.
    Dans une vraie implémentation, on récupérerait les données du projet
    depuis un CMS ou une API en utilisant le slug.
    Exemple : const projet = await getProjetBySlug(slug);
  */

  return {
    title: `${projet.titre} | Réalisations AR+SOLUTION`,
    description: projet.sousTitre,
    keywords: [
      ...projet.metiers,
      projet.categorie,
      projet.localisation,
      "rénovation",
      "chantier",
      "Alsace",
    ],
    openGraph: {
      title: projet.titre,
      description: projet.sousTitre,
      type: "article",
      images: [
        {
          url: projet.imageApres,
          width: 800,
          height: 600,
          alt: `${projet.titre} - Résultat après travaux`,
        },
      ],
      locale: "fr_FR",
      siteName: "AR+SOLUTION",
    },
    twitter: {
      card: "summary_large_image",
      title: projet.titre,
      description: projet.sousTitre,
      images: [projet.imageApres],
    },
    alternates: {
      canonical: `https://ar-solution.fr/realisations/${slug}`,
    },
  };
}

/* ============================================
   PAGE TEMPLATE FICHE PROJET
   ============================================ */

export default function PageFicheProjet() {
  /* Données structurées JSON-LD pour le SEO (schema.org Article)
     Permet aux moteurs de recherche de mieux comprendre le contenu de la page */
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: projet.titre,
    description: projet.sousTitre,
    image: [projet.imageApres, projet.imageAvant],
    datePublished: "2024-01-15",
    dateModified: "2024-01-15",
    author: {
      "@type": "Organization",
      name: "AR+SOLUTION",
      url: "https://ar-solution.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "AR+SOLUTION",
      logo: {
        "@type": "ImageObject",
        url: "https://ar-solution.fr/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ar-solution.fr/realisations/${projet.slug}`,
    },
    articleSection: projet.categorie,
    keywords: [...projet.metiers, projet.localisation, "rénovation"].join(", "),
    about: {
      "@type": "Service",
      name: projet.metiers.join(", "),
      areaServed: {
        "@type": "Place",
        name: projet.localisation,
      },
    },
  };

  return (
    <>
      {/* Données structurées JSON-LD pour les moteurs de recherche */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      {/* Header - Navigation principale sticky */}
      <Header pageActive="realisations" />

      {/* ============================================
          CONTENU PRINCIPAL
          ============================================ */}
      <main className="mt-20">
        {/* ============================================
            SECTION 1 : HERO HEADER
            Présente le projet avec titre, badges, et slider avant/après
            ============================================ */}
        <section className="relative bg-white pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Fil d'Ariane (Breadcrumb) pour le SEO et la navigation */}
            <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
              <Link href="/realisations" className="hover:text-brand-blue">
                Réalisations
              </Link>
              <span className="text-gray-300">/</span>
              <span>{projet.categorie}</span>
              <span className="text-gray-300">/</span>
              <span className="text-brand-blue font-medium">
                {projet.titre.split(" ").slice(0, 3).join(" ")}...
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Colonne Texte */}
              <div>
                {/* Tags / Badges du projet */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {/* Badge catégorie (Marché Public / Particulier) */}
                  <span className="bg-brand-blue/10 text-brand-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {projet.categorie}
                  </span>

                  {/* Badges métiers */}
                  {projet.metiers.map((metier) => (
                    <span
                      key={metier}
                      className="bg-brand-blue/10 text-brand-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide"
                    >
                      {metier}
                    </span>
                  ))}

                  {/* Badge localisation */}
                  <span className="bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {projet.localisation}
                  </span>
                </div>

                {/* Titre principal H1 (SEO Local) */}
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                  {projet.titre}
                </h1>

                {/* Sous-titre descriptif du résultat */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {projet.sousTitre}
                </p>

                {/* CTA Desktop pour demander un devis similaire */}
                <div className="hidden lg:flex gap-4">
                  <Link
                    href="/contact"
                    className="bg-brand-blue hover:bg-brand-blue text-white font-bold py-3 px-8 rounded shadow-lg transition duration-300 transform hover:-translate-y-1"
                  >
                    Demander un devis similaire
                  </Link>
                </div>
              </div>

              {/* Colonne Visuel : Slider Avant/Après */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                {/* 
                  Note : Le slider interactif nécessiterait du JavaScript.
                  Ici on simule visuellement l'effet avant/après statique.
                */}
                <div className="relative h-[400px] w-full bg-gray-200 group cursor-ew-resize">
                  {/* Image APRÈS (fond) */}
                  <img
                    src={projet.imageApres}
                    alt={`${projet.titre} - Après travaux`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Image AVANT (superposée à 50%) */}
                  <div className="absolute inset-0 w-1/2 overflow-hidden border-r-4 border-white bg-gray-300">
                    <img
                      src={projet.imageAvant}
                      alt={`${projet.titre} - Avant travaux`}
                      className="absolute inset-0 w-[200%] max-w-none h-full object-cover"
                    />
                  </div>

                  {/* Curseur central du slider */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10">
                    <svg
                      className="w-6 h-6 text-brand-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>

                  {/* Labels Avant / Après */}
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    Avant
                  </div>
                  <div className="absolute bottom-4 right-4 bg-brand-blue text-white text-xs px-2 py-1 rounded">
                    Après
                  </div>
                </div>

                <p className="text-center text-xs text-gray-500 mt-2 italic">
                  Glissez le curseur pour voir la transformation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 2 : CARTE D'IDENTITÉ DU CHANTIER
            Résumé rapide "30 secondes" des informations clés
            ============================================ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6 border-l-4 border-brand-blue pl-4">
                Le Chantier en bref
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {/* Type de bien */}
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm font-medium uppercase mb-1">
                    Type de bien
                  </span>
                  <span className="text-slate-900 font-bold">
                    {ficheChantier.typeBien}
                  </span>
                </div>

                {/* Surface traitée */}
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm font-medium uppercase mb-1">
                    Surface traitée
                  </span>
                  <span className="text-slate-900 font-bold">
                    {ficheChantier.surface}
                  </span>
                </div>

                {/* Durée du chantier */}
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm font-medium uppercase mb-1">
                    Durée
                  </span>
                  <span className="text-slate-900 font-bold">
                    {ficheChantier.duree}
                  </span>
                </div>

                {/* Types d'intervention */}
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm font-medium uppercase mb-1">
                    Intervention
                  </span>
                  <ul className="text-slate-900 font-bold text-sm list-disc list-inside">
                    {ficheChantier.interventions.map((intervention) => (
                      <li key={intervention}>{intervention}</li>
                    ))}
                  </ul>
                </div>

                {/* Contrainte principale (tag spécial) */}
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm font-medium uppercase mb-1">
                    Contrainte Principale
                  </span>
                  <span className="inline-flex items-center text-red-600 font-bold bg-red-50 px-2 py-1 rounded w-fit">
                    <svg
                      className="w-4 h-4 mr-1"
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
                    {ficheChantier.contraintePrincipale}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 3 : CONTEXTE & PROBLÈME
            Storytelling pour raconter le défi initial
            ============================================ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Colonne principale : texte du contexte */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {contexte.titre}
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">{contexte.paragraphe1}</p>
                <p>
                  <span className="bg-yellow-100 px-1 font-semibold text-slate-800">
                    {contexte.paragraphe2}
                  </span>
                </p>
              </div>
            </div>

            {/* Colonne latérale : citation / témoignage client */}
            <div className="lg:col-span-4 bg-brand-blue/5 p-6 rounded-xl border-l-4 border-brand-blue h-fit">
              <p className="italic text-brand-blue font-medium mb-4">
                {contexte.citation.texte}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-blue/20 rounded-full flex items-center justify-center text-brand-blue font-bold">
                  {contexte.citation.initiales}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {contexte.citation.auteur}
                  </p>
                  <p className="text-xs text-gray-500">
                    {contexte.citation.fonction}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 4 : SOLUTION & DÉROULÉ (TIMELINE)
            Montre les étapes d'intervention de façon claire
            ============================================ */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Notre intervention étape par étape
              </h2>
              <p className="text-gray-600 mt-2">
                Organisation militaire pour tenir les délais.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Ligne verticale de la timeline */}
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2" />

              {/* Étapes de la timeline */}
              {etapesIntervention.map((etape, index) => (
                <div
                  key={etape.numero}
                  className="relative flex flex-col md:flex-row items-center mb-12"
                >
                  {/* Contenu à gauche (alternance paire/impaire) */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                        <h3 className="font-semibold text-2xl md:text-3xl text-slate-900">
                          {etape.titre}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {etape.description}
                        </p>
                      </div>
                      {/* Pastille numéro */}
                      <div
                        className={`w-8 h-8 ${
                          etape.estFinal ? "bg-green-500" : "bg-brand-blue"
                        } rounded-full border-4 border-white z-10 flex items-center justify-center shadow`}
                      >
                        {etape.estFinal ? (
                          <svg
                            className="w-4 h-4 text-white"
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
                        ) : (
                          <span className="text-white font-bold text-xs">
                            {etape.numero}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 md:pl-12" />
                    </>
                  ) : (
                    <>
                      <div className="flex-1 md:pr-12" />
                      {/* Pastille numéro */}
                      <div
                        className={`w-8 h-8 ${
                          etape.estFinal ? "bg-green-500" : "bg-brand-blue"
                        } rounded-full border-4 border-white z-10 flex items-center justify-center shadow`}
                      >
                        {etape.estFinal ? (
                          <svg
                            className="w-4 h-4 text-white"
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
                        ) : (
                          <span className="text-white font-bold text-xs">
                            {etape.numero}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 md:pl-12 mb-4 md:mb-0">
                        <h3 className="font-semibold text-2xl md:text-3xl text-slate-900">
                          {etape.titre}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {etape.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 5 : DÉTAILS TECHNIQUES
            Spécifications des matériaux utilisés
            ============================================ */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-brand-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Spécifications Techniques & Matériaux
            </h3>

            <div className="space-y-4">
              {specificationsTechniques.map((spec) => (
                <div
                  key={spec.categorie}
                  className="border border-gray-200 rounded-lg p-4 bg-white"
                >
                  <div className="font-bold text-slate-800">{spec.categorie}</div>
                  <p className="text-sm text-gray-600 mt-1">{spec.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 6 : RÉSULTAT & GALERIE
            Photos finales et témoignage client
            ============================================ */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Le Résultat en images
            </h2>

            {/* Grille de photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {galeriePhotos.map((photo) => (
                <div
                  key={photo.alt}
                  className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  {/* Légende au survol */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <p className="text-white text-sm font-medium">
                      {photo.legende}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Témoignage client avec étoiles */}
            <div className="mt-12 text-center max-w-2xl mx-auto">
              {/* Étoiles de notation */}
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(temoignage.note)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-slate-900 font-medium text-lg">
                {temoignage.texte}
              </blockquote>
              <p className="text-gray-500 mt-2 font-bold">
                - {temoignage.auteur}
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 7 : MAILLAGE INTERNE
            Projets similaires pour garder l'utilisateur sur le site
            ============================================ */}
        <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
              Projets similaires en Alsace
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projetsSimilaires.map((projetSimilaire) => (
                <Link
                  key={projetSimilaire.id}
                  href={`/realisations/${projetSimilaire.id}`}
                  className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition"
                >
                  <div className="flex">
                    <img
                      src={projetSimilaire.image}
                      alt={projetSimilaire.titre}
                      className="w-1/3 object-cover"
                    />
                    <div className="p-4 flex flex-col justify-center">
                      <span className="text-xs font-bold text-brand-blue uppercase mb-1">
                        {projetSimilaire.lieu}
                      </span>
                      <h4 className="font-bold text-slate-800 group-hover:text-brand-blue">
                        {projetSimilaire.titre}
                      </h4>
                      <span className="text-sm text-gray-500 mt-2">
                        Voir le projet &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Lien vers toutes les réalisations ou services */}
            <div className="text-center mt-8">
              <Link
                href="/services/isolation"
                className="inline-block text-brand-blue font-bold border-b-2 border-brand-blue/20 hover:border-brand-blue transition"
              >
                Tout savoir sur nos prestations Plâtrerie & Isolation
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================
            ZONE DE RÉASSURANCE AVANT FOOTER
            CTA final avec certifications
            ============================================ */}
        <section className="relative bg-slate-900 py-16 md:py-24 text-white overflow-hidden">
          {/* Animation 3D GridScan en arrière-plan */}
          <div className="absolute inset-0">
            <GridScan
              sensitivity={0.55}
              lineThickness={1}
              linesColor="#1e3a5f"
              gridScale={0.1}
              scanColor="#a855f7"
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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Un projet de rénovation en Alsace ?
            </h2>

            {/* Logos réassurance (RGE + Décennale) */}
            <div className="flex flex-wrap justify-center gap-8 mb-8 opacity-80">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 font-bold text-xs">
                  RGE
                </div>
                <span className="font-semibold text-sm">
                  Certifié RGE Qualibat
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 font-bold text-xs">
                  10
                </div>
                <span className="font-semibold text-sm">Garantie Décennale</span>
              </div>
            </div>

            {/* Bouton CTA principal */}
            <Link
              href="/contact"
              className="inline-block bg-brand-orange-dark hover:bg-brand-orange text-white font-bold py-4 px-10 rounded shadow-lg text-lg transition transform hover:scale-105"
            >
              Demander une estimation gratuite
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Réponse sous 48h ouvrées. Intervention dans tout le Bas-Rhin.
            </p>
          </div>
        </section>
      </main>

      {/* Footer réutilisable */}
      <Footer />

      {/* ============================================
          BARRE STICKY MOBILE
          Visible uniquement sur mobile pour un accès rapide au contact
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
        >
          <Link href="/contact">Devis Gratuit</Link>
        </Button>
      </div>
    </>
  );
}

