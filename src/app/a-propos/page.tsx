/*
  Page À Propos d'AR+SOLUTION.

  Cette page présente l'entreprise en détail :
  - L'histoire et la mission de l'entreprise (depuis 2006)
  - L'argument de l'interlocuteur unique (plâtrerie + isolation + finitions)
  - La segmentation par type de client (Marchés Publics vs Particuliers)
  - La méthode d'intervention en 4 étapes
  - Les réalisations et projets récents
  - Les certifications et garanties (RGE, Décennale, Qualibat)
  - Une FAQ pour rassurer les visiteurs
  - Un CTA final pour demander un devis

  L'utilisateur peut :
  - Comprendre qui est AR+SOLUTION et ses valeurs
  - Voir les certifications et garanties
  - Naviguer vers les pages services, réalisations ou contact
  - Demander un devis via le CTA
*/

import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CtaBlock from "@/components/common/CtaBlock";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GridScan from "@/components/common/GridScan";

/* ============================================
   METADATA SEO
   ============================================ */

export const metadata: Metadata = {
  title: "À Propos - AR+SOLUTION | Rénovation & Aménagement Intérieur Strasbourg",
  description:
    "Entreprise de rénovation intérieure à Strasbourg depuis 2006. Expert en plâtrerie, isolation et aménagement pour marchés publics et particuliers. Certifié RGE.",
  keywords: [
    "entreprise rénovation Strasbourg",
    "plâtrerie depuis 2006",
    "artisan RGE Alsace",
    "équipe rénovation Bas-Rhin",
    "histoire AR+SOLUTION",
  ],
  openGraph: {
    title: "À Propos - AR+SOLUTION | Rénovation Strasbourg",
    description:
      "Depuis 2006, AR+SOLUTION accompagne particuliers et collectivités en Alsace pour leurs travaux de plâtrerie, isolation et aménagement intérieur.",
    url: "https://ar-solution.fr/a-propos",
    siteName: "AR+SOLUTION",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://ar-solution.fr/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Équipe AR+SOLUTION - Rénovation intérieure à Strasbourg depuis 2006",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos - AR+SOLUTION | Rénovation Strasbourg",
    description:
      "Depuis 2006, AR+SOLUTION accompagne particuliers et collectivités en Alsace pour leurs travaux de plâtrerie, isolation et aménagement intérieur.",
    images: ["https://ar-solution.fr/og-about.jpg"],
  },
  alternates: {
    canonical: "https://ar-solution.fr/a-propos",
  },
};

/* ============================================
   DONNÉES DE LA PAGE
   ============================================ */

/* Valeurs/points forts de l'entreprise affichés dans la section Histoire */
const valeursEntreprise = [
  { texte: "Équipe salariée stable (pas d'intérim sauvage)" },
  { texte: "Matériaux certifiés & normes respectées" },
];

/* Les 3 domaines d'expertise présentés en cartes */
const expertises = [
  {
    id: "platrerie",
    numero: 1,
    titre: "Redistribution & Plâtrerie",
    description:
      "Création de pièces, faux-plafonds, cloisons techniques. Nous redéfinissons vos espaces.",
    iconeColor: "blue",
    badge: null,
  },
  {
    id: "isolation",
    numero: 2,
    titre: "Isolation Thermique/Phonique",
    description:
      "Confort d'été et d'hiver. Isolation des murs, combles et planchers pour réduire votre facture.",
    iconeColor: "orange",
    badge: "RGE",
  },
  {
    id: "finitions",
    numero: 3,
    titre: "Peinture & Décoration",
    description:
      "Enduits de lissage, peinture, revêtements. Une finition soignée prête à vivre.",
    iconeColor: "green",
    badge: null,
  },
];

/* Avantages pour les marchés publics */
const avantagesMarchesPublics = [
  {
    titre: "Dossiers administratifs conformes",
    description: "RGE, Décennale, RC Pro, Normes ERP/PMR.",
  },
  {
    titre: "Respect des délais stricts",
    description: "Planning validé en amont, pas de surprises.",
  },
  {
    titre: "Intervention en site occupé",
    description:
      "Gestion des nuisances (bruit, poussière) pour la continuité de service.",
  },
];

/* Avantages pour les particuliers */
const avantagesParticuliers = [
  {
    numero: "01",
    titre: "Devis clair et détaillé",
    description: "Pas de frais cachés. Tout est écrit noir sur blanc.",
  },
  {
    numero: "02",
    titre: "Propreté chantier",
    description: "Protection des sols et nettoyage quotidien.",
  },
  {
    numero: "03",
    titre: "Conseil technique",
    description: "Choix des isolants et matériaux adaptés à votre budget.",
  },
];

/* Étapes de la méthode de travail (timeline) */
const etapesMethode = [
  {
    numero: 1,
    titre: "Visite & Devis",
    description: "Analyse technique sur place et chiffrage précis sous 48-72h.",
    highlight: false,
  },
  {
    numero: 2,
    titre: "Planification",
    description: "Validation des dates et commande des matériaux.",
    highlight: false,
  },
  {
    numero: 3,
    titre: "Travaux",
    description: "Protection, démolition, pose, isolation et finitions.",
    highlight: false,
  },
  {
    numero: 4,
    titre: "Réception",
    description: "Nettoyage complet et validation de fin de chantier.",
    highlight: true,
  },
];

/* Exemples de projets réalisés */
const projetsRealises = [
  {
    id: "bureaux-schiltigheim",
    categorie: "Bureaux / Site occupé",
    titre: "Réaménagement Open-Space à Schiltigheim",
    image: "https://placehold.co/600x400?text=Rénovation+Bureaux+Schiltigheim",
  },
  {
    id: "combles-strasbourg",
    categorie: "Particulier / RGE",
    titre: "Isolation de combles perdus",
    image: "https://placehold.co/600x400?text=Combles+Strasbourg",
  },
  {
    id: "appartement-colmar",
    categorie: "Rénovation Globale",
    titre: "Appartement ancien réhabilité",
    image: "https://placehold.co/600x400?text=Appartement+Colmar",
  },
];

/* Certifications et garanties */
const certifications = [
  {
    id: "rge",
    logo: "https://placehold.co/150x80?text=LOGO+RGE",
    alt: "Certifié RGE",
    label: "Reconnu Garant Environnement",
  },
  {
    id: "qualibat",
    logo: "https://placehold.co/150x80?text=QUALIBAT",
    alt: "Qualibat",
    label: "Qualification Professionnelle",
  },
  {
    id: "decennale",
    logo: null,
    alt: "Assurance Décennale",
    label: "Garantie Décennale & RC Pro",
  },
];

/* Questions fréquentes spécifiques à la page À propos */
const faqItems = [
  {
    question: "Intervenez-vous pour des travaux d'isolation à Strasbourg Centre ?",
    reponse:
      "Oui, nous intervenons dans tout Strasbourg (y compris Hyper-centre avec accès difficiles) et dans toute l'Alsace. Nous sommes habitués aux contraintes logistiques urbaines.",
  },
  {
    question: "Pouvez-vous travailler en site occupé (bureaux, écoles) ?",
    reponse:
      "Absolument. C'est une de nos spécialités pour les marchés publics et les entreprises. Nous adaptons nos horaires et mettons en place des protections spécifiques anti-poussière pour garantir la continuité de votre activité.",
  },
  {
    question: "Gérez-vous l'évacuation des gravats ?",
    reponse:
      "Oui, notre prestation inclut la protection, la démolition si nécessaire, l'évacuation en déchetterie professionnelle agréée et le nettoyage de fin de chantier.",
  },
];

/* ============================================
   PAGE À PROPOS
   ============================================ */

export default function PageAPropos() {
  /* Données structurées JSON-LD pour le SEO
     Schema AboutPage pour indiquer qu'il s'agit d'une page "À propos" */
  const jsonLdAboutPage = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "À Propos d'AR+SOLUTION",
    description: "Entreprise de rénovation intérieure à Strasbourg depuis 2006. Expert en plâtrerie, isolation et aménagement pour marchés publics et particuliers.",
    url: "https://www.arsolution.fr/a-propos",
    mainEntity: {
      "@type": "Organization",
      "@id": "https://www.arsolution.fr/#organization",
      name: "AR+SOLUTION",
      url: "https://www.arsolution.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://www.arsolution.fr/logo.png",
      },
      foundingDate: "2006",
      description: "Expert en second œuvre depuis 2006 : plâtrerie, isolation thermique et phonique, aménagement intérieur pour collectivités et particuliers en Alsace.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Strasbourg",
        addressRegion: "Alsace",
        addressCountry: "FR",
      },
      areaServed: [
        {
          "@type": "Place",
          name: "Strasbourg",
        },
        {
          "@type": "Place",
          name: "Alsace",
        },
        {
          "@type": "Place",
          name: "Bas-Rhin",
        },
      ],
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "48.5734",
          longitude: "7.7521",
        },
        geoRadius: "50000",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Certification",
          name: "RGE - Reconnu Garant de l'Environnement",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Qualification",
          name: "Qualibat",
        },
      ],
      knowsAbout: [
        "Plâtrerie",
        "Isolation thermique",
        "Isolation phonique",
        "Aménagement intérieur",
        "Rénovation énergétique",
        "Marchés publics",
      ],
    },
  };

  return (
    <>
      {/* Données structurées JSON-LD pour les moteurs de recherche */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAboutPage) }}
      />

      {/* Header - Navigation principale sticky */}
      <Header pageActive="a-propos" />

      {/* ============================================
          CONTENU PRINCIPAL
          ============================================ */}
      <main id="main-content" className="mt-20">
        {/* ============================================
            HERO SECTION - Présentation immersive de l'entreprise
            Montre immédiatement les certifications et l'activité principale
            ============================================ */}
        <section className="relative bg-slate-900 overflow-hidden">
          {/* Animation 3D GridScan en arrière-plan */}
          <div className="absolute inset-0">
            <GridScan
              sensitivity={0.55}
              lineThickness={1}
              linesColor="#1e3a5f"
              gridScale={0.1}
              scanColor="#2563eb"
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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-3xl text-center mx-auto">
              {/* Badges de réassurance */}
              <div className="flex justify-center gap-4 mb-6 flex-wrap">
                <Badge variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white">
                  Certifié RGE
                </Badge>
                <Badge variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white">
                  Garantie Décennale
                </Badge>
              </div>

              {/* Titre principal */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Aménagement intérieur & Isolation{" "}
                <br className="hidden md:block" />à{" "}
                <span className="text-brand-orange">Strasbourg et toute l&apos;Alsace</span>
              </h1>

              {/* Sous-titre */}
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Repensez vos volumes du sol au plafond. Un interlocuteur unique
                pour gérer plâtrerie, isolation et peinture. Intervention en site
                occupé possible.
              </p>

              {/* Boutons d'action principaux */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="bg-brand-orange-dark hover:bg-brand-orange text-white shadow-lg">
                  <Link href="/contact">Demander un devis gratuit</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-white hover:bg-white hover:text-brand-blue text-white">
                  <Link href="/marches-publics">Espace Marchés Publics</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION HISTOIRE & MISSION
            Présente l'histoire de l'entreprise et ses valeurs
            ============================================ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Colonne texte */}
              <div className="md:w-1/2">
                <span className="text-sm font-bold text-brand-blue uppercase tracking-wide mb-2 block">
                  Notre Histoire
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                  Expert en second œuvre depuis 2006
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Fondée à Strasbourg,{" "}
                  <strong className="text-gray-900">AR+SOLUTION</strong> s&apos;est
                  construite sur une promesse simple : offrir une maîtrise
                  technique irréprochable sans les aléas de la sous-traitance en
                  cascade.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  De la simple pose de cloisons aux rénovations énergétiques
                  globales, nous avons stabilisé une équipe de compagnons
                  qualifiés. Notre mission ? Transformer vos espaces (bureaux,
                  collectivités, habitats) en alliant{" "}
                  <strong className="text-gray-900">conformité normative</strong>{" "}
                  et{" "}
                  <strong className="text-gray-900">finitions soignées</strong>.
                </p>

                {/* Liste à puces des valeurs */}
                <ul className="space-y-3 mt-4">
                  {valeursEntreprise.map((valeur) => (
                    <li
                      key={valeur.texte}
                      className="flex items-center text-gray-900 font-medium"
                    >
                      <svg
                        className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0"
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
                      {valeur.texte}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Colonne image (humanisation de l'entreprise) */}
              <div className="md:w-1/2 relative">
                <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-blue rounded-lg transform translate-x-4 translate-y-4 -z-10 hidden md:block" />
                <img
                  src="https://placehold.co/600x500?text=Photo+Equipe+ou+Dirigeant+Sur+Chantier"
                  alt="L'équipe AR+SOLUTION sur chantier"
                  className="rounded-lg shadow-xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION INTERLOCUTEUR UNIQUE
            Explique l'avantage d'un expert global vs plusieurs artisans
            ============================================ */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête de la section */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                Pourquoi choisir un expert global plutôt que 3 artisans ?
              </h2>
              <p className="text-gray-600">
                L&apos;optimisation des volumes demande une coordination parfaite.
                En maîtrisant la chaîne complète, nous garantissons les délais.
              </p>
            </div>

            {/* Grille des 3 expertises */}
            <div className="grid md:grid-cols-3 gap-8">
              {expertises.map((expertise) => (
                <Card
                  key={expertise.id}
                  className="hover:shadow-md transition relative overflow-hidden"
                >
                  {/* Badge RGE si applicable */}
                  {expertise.badge && (
                    <Badge className="absolute top-0 right-0 bg-brand-orange text-white rounded-bl">
                      {expertise.badge}
                    </Badge>
                  )}
                  <CardContent className="p-8">

                  {/* Icône */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                      expertise.iconeColor === "orange"
                        ? "bg-brand-orange/10 text-brand-orange"
                        : expertise.iconeColor === "green"
                        ? "bg-green-100 text-green-600"
                        : "bg-brand-blue/10 text-brand-blue"
                    }`}
                  >
                    {expertise.iconeColor === "orange" ? (
                      /* Icône éclair pour isolation */
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    ) : expertise.iconeColor === "green" ? (
                      /* Icône pinceau pour finitions */
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
                    ) : (
                      /* Icône grille pour plâtrerie */
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
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Titre et description */}
                  <CardTitle className="text-xl text-brand-blue mb-3">
                    {expertise.numero}. {expertise.titre}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{expertise.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Lien vers les réalisations */}
            <div className="text-center mt-10">
              <Link
                href="/realisations"
                className="text-brand-blue font-semibold hover:underline flex items-center justify-center"
              >
                Voir nos réalisations avant/après
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
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION SEGMENTATION PAR CIBLE
            Deux blocs : Marchés Publics (priorité business) et Particuliers
            ============================================ */}
        <section className="py-16 md:py-24 bg-white" id="cibles">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* Bloc 1 : Marchés Publics & Pros (mis en avant) */}
              <div className="bg-gray-50 border border-gray-200 p-8 md:p-10 rounded-2xl relative">
                <div className="absolute -top-4 left-8 bg-brand-blue text-white px-4 py-1 text-sm font-bold uppercase tracking-wide rounded shadow">
                  Priorité Business
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-6 mt-2">
                  Collectivités & Marchés Publics
                </h3>
                <p className="text-gray-600 mb-6">
                  Nous comprenons les exigences des appels d&apos;offres publics et
                  des gestionnaires de patrimoine.
                </p>

                {/* Liste des avantages */}
                <ul className="space-y-4 mb-8">
                  {avantagesMarchesPublics.map((avantage) => (
                    <li key={avantage.titre} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-3 text-green-600">
                        ✓
                      </div>
                      <div>
                        <strong className="block text-gray-800">
                          {avantage.titre}
                        </strong>
                        <span className="text-sm text-gray-500">
                          {avantage.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* CTA email */}
                <a
                  href="mailto:contact@ar-solution.fr"
                  className="inline-block w-full text-center bg-brand-blue hover:bg-brand-blue text-white font-bold py-3 px-6 rounded transition"
                >
                  Contacter le service Appels d&apos;Offres
                </a>
              </div>

              {/* Bloc 2 : Particuliers & Copro */}
              <div className="p-4 md:p-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-4">
                  Particuliers & Copropriétés
                </h3>
                <p className="text-gray-600 mb-6">
                  Vous souhaitez réagencer votre appartement ou rénover une cage
                  d&apos;escalier ? Nous apportons la rigueur du professionnel chez
                  vous.
                </p>

                {/* Liste des points forts */}
                <div className="space-y-4 border-l-4 border-brand-orange pl-6 py-2 bg-brand-orange/5 rounded-r-lg">
                  {avantagesParticuliers.map((avantage) => (
                    <p key={avantage.numero} className="text-gray-800">
                      <strong>
                        {avantage.numero}. {avantage.titre}
                      </strong>
                      <br />
                      <span className="text-sm text-gray-500">
                        {avantage.description}
                      </span>
                    </p>
                  ))}
                </div>

                {/* Lien vers contact */}
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="text-brand-orange font-bold hover:text-brand-orange-dark flex items-center"
                  >
                    Demander une visite technique
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
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION MÉTHODE (TIMELINE)
            Présente les 4 étapes du processus d'intervention
            ============================================ */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
                Notre Méthode d&apos;Intervention
              </h2>
              <p className="text-gray-500 mt-2">
                Un processus rodé pour éviter les retards.
              </p>
            </div>

            {/* Timeline des étapes */}
            <div className="relative">
              {/* Ligne connectrice horizontale (hidden sur mobile) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 transform -translate-y-1/2 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {etapesMethode.map((etape) => (
                  <div key={etape.numero} className="bg-white p-6 text-center">
                    {/* Numéro de l'étape */}
                    <div
                      className={`w-12 h-12 ${
                        etape.highlight
                          ? "bg-brand-orange"
                          : "bg-brand-blue"
                      } text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 ring-4 ring-white`}
                    >
                      {etape.numero}
                    </div>
                    <h4 className="font-bold text-lg mb-2">{etape.titre}</h4>
                    <p className="text-sm text-gray-500">{etape.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION RÉALISATIONS
            Affiche des exemples de projets récents
            ============================================ */}
        <section className="py-16 bg-brand-blue text-white" id="realisations">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête avec titre et lien */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Transformations réalisées en Alsace
                </h2>
                <p className="text-white/80">
                  Rénovation de bureaux, combles et habitats.
                </p>
              </div>
              <Link
                href="/realisations"
                className="mt-4 md:mt-0 px-6 py-2 border border-white/40 rounded hover:bg-white hover:text-brand-blue transition text-sm"
              >
                Voir tout le portfolio
              </Link>
            </div>

            {/* Grille des projets */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projetsRealises.map((projet) => (
                <div
                  key={projet.id}
                  className="group relative overflow-hidden rounded-lg cursor-pointer"
                >
                  <img
                    src={projet.image}
                    alt={projet.titre}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <span className="text-xs font-bold text-brand-orange uppercase mb-1">
                      {projet.categorie}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-semibold">{projet.titre}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Note sur le portfolio */}
            <p className="text-center text-white/80 text-sm mt-8 italic">
              * Sur demande, nous fournissons un portfolio détaillé correspondant
              à votre typologie de projet (Public ou Privé).
            </p>
          </div>
        </section>

        {/* ============================================
            SECTION GARANTIES & ASSURANCES
            Affiche les logos des certifications
            ============================================ */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 hover:opacity-100 transition duration-500">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex flex-col items-center">
                  {cert.logo ? (
                    <img
                      src={cert.logo}
                      alt={cert.alt}
                      className="h-16 mb-2 grayscale hover:grayscale-0 transition"
                    />
                  ) : (
                    <div className="h-16 w-32 bg-gray-200 flex items-center justify-center font-bold text-gray-400 rounded text-center text-xs px-2">
                      ASSURANCE
                      <br />
                      DÉCENNALE
                    </div>
                  )}
                  <span className="text-xs font-semibold text-gray-500 mt-2 text-center">
                    {cert.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION FAQ
            Répond aux questions courantes sur l'intervention
            ============================================ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8 text-center">
              Questions Fréquentes
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-lg px-4"
                >
                  <AccordionTrigger className="font-semibold text-brand-blue">
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
            CTA FINAL
            Bloc de conversion avec devis et téléphone
            ============================================ */}
        <CtaBlock
          titre="Prêt à transformer votre espace ?"
          description="Que vous soyez une collectivité, une entreprise ou un particulier, obtenez une étude chiffrée précise et sans engagement."
          variante="bleu"
        />
      </main>

      {/* Footer réutilisable */}
      <Footer />

      {/* ============================================
          BARRE STICKY MOBILE
          Affichée uniquement sur mobile pour appeler ou demander un devis
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

