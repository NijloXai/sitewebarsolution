/*
  Page Marchés Publics - AR+SOLUTION
  
  Cette page est destinée aux acheteurs publics (mairies, écoles, collectivités).
  
  L'utilisateur voit :
  - Une section d'accroche avec les certifications (RGE, Décennale, RC Pro)
  - Les types de lots proposés (plâtrerie, isolation, peinture, maintenance)
  - Des exemples de réalisations dans le secteur public
  - La méthode de travail et les engagements (site occupé, délais)
  - Les garanties administratives
  - Une zone d'intervention + FAQ
  - Un bloc d'appel à l'action pour contacter l'entreprise

  L'utilisateur peut :
  - Naviguer rapidement entre les sections via la navigation sticky
  - Voir les références de chantiers publics
  - Comprendre la méthode et les engagements
  - Contacter l'entreprise via le formulaire de contact ou par téléphone
  - Demander les pièces administratives
*/

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import MobileStickyBar from "@/components/services/MobileStickyBar";
import CtaBlock from "@/components/common/CtaBlock";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* Métadonnées spécifiques à la page Marchés Publics pour le référencement */
export const metadata: Metadata = {
  title: "Marchés Publics - Plâtrerie, Isolation & Finitions | AR+SOLUTION Strasbourg",
  description:
    "Expertise en plâtrerie, isolation et finitions pour marchés publics à Strasbourg et en Alsace. Intervention en site occupé, respect des délais, certifié RGE.",
  keywords: [
    "marchés publics plâtrerie Strasbourg",
    "marchés publics isolation Alsace",
    "travaux publics site occupé",
    "entreprise RGE marchés publics",
    "appel d'offres BTP Strasbourg",
    "collectivités travaux intérieurs",
    "maintenance bâtiments publics",
    "lots plâtrerie isolation peinture",
  ],
  openGraph: {
    title: "Marchés Publics - Plâtrerie, Isolation & Finitions | AR+SOLUTION",
    description:
      "Expertise en plâtrerie, isolation et finitions pour marchés publics. Intervention en site occupé, respect des délais. Certifié RGE Qualibat.",
    url: "https://ar-solution.fr/marches-publics",
    siteName: "AR+SOLUTION",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-marches-publics.jpg",
        width: 1200,
        height: 630,
        alt: "AR+SOLUTION - Marchés publics plâtrerie et isolation à Strasbourg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marchés Publics - Plâtrerie, Isolation & Finitions | AR+SOLUTION",
    description:
      "Expertise en plâtrerie, isolation et finitions pour marchés publics à Strasbourg. Certifié RGE.",
    images: ["/og-marches-publics.jpg"],
  },
  alternates: {
    canonical: "https://ar-solution.fr/marches-publics",
  },
};

/* ============================================
   DONNÉES STRUCTURÉES JSON-LD (Schema.org)
   Aide les moteurs de recherche à comprendre le contenu de la page
   ============================================ */
function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ar-solution.fr";

  // Schema WebPage - décrit la page en tant que page web
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Marchés Publics - AR+SOLUTION",
    description:
      "Expertise en plâtrerie, isolation et finitions pour marchés publics à Strasbourg et en Alsace. Intervention en site occupé, respect des délais, certifié RGE.",
    url: `${baseUrl}/marches-publics`,
    isPartOf: {
      "@type": "WebSite",
      name: "AR+SOLUTION",
      url: baseUrl,
    },
    about: {
      "@type": "Service",
      name: "Travaux pour marchés publics",
      provider: {
        "@type": "LocalBusiness",
        name: "AR+SOLUTION",
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Marchés Publics",
          item: `${baseUrl}/marches-publics`,
        },
      ],
    },
  };

  // Schema Service - décrit les services proposés aux collectivités
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Travaux de plâtrerie, isolation et finitions pour marchés publics",
    description:
      "Intervention en site occupé pour collectivités : plâtrerie, faux plafonds, isolation thermique RGE, peinture et finitions, maintenance et entretien.",
    provider: {
      "@type": "LocalBusiness",
      name: "AR+SOLUTION",
      image: `${baseUrl}/logo.png`,
      telephone: "+33-3-88-00-00-00",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Strasbourg",
        addressRegion: "Alsace",
        postalCode: "67000",
        addressCountry: "FR",
      },
    },
    areaServed: [
      {
        "@type": "City",
        name: "Strasbourg",
      },
      {
        "@type": "AdministrativeArea",
        name: "Alsace",
      },
    ],
    serviceType: [
      "Plâtrerie et faux plafonds",
      "Isolation thermique RGE",
      "Peinture et finitions",
      "Maintenance et entretien",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lots marchés publics",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plâtrerie & Faux Plafonds",
            description:
              "Cloisons distributives, plafonds démontables, correction acoustique, coupe-feu",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Isolation Thermique",
            description:
              "Isolation intérieure ITI, combles perdus, doublage collé ou sur ossature, normes RE2020",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Peinture & Finitions",
            description:
              "Préparation des supports, peintures lessivables, revêtements muraux, sols souples",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Maintenance & Entretien",
            description:
              "Marchés à bons de commande, interventions rapides, remise en état après sinistre",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

/* Navigation intra-page - permet aux acheteurs de naviguer rapidement vers les sections clés */
const navigationSections = [
  { id: "lots", label: "Nos Lots & Expertises" },
  { id: "references", label: "Références Publiques" },
  { id: "methode", label: "Méthode & Délais" },
  { id: "administratif", label: "Conformité RGE" },
];

/* Liste des prestations/lots proposés aux collectivités - 4 cartes principales */
const prestationsLots = [
  {
    titre: "Plâtrerie & Faux Plafonds",
    icon: "▦",
    services: [
      "Cloisons distributives",
      "Plafonds démontables (dalles)",
      "Correction acoustique",
      "Coupe-feu",
    ],
  },
  {
    titre: "Isolation Thermique",
    icon: "◐",
    services: [
      "Isolation intérieure (ITI)",
      "Combles perdus",
      "Doublage collé ou sur ossature",
      "Respect normes RE2020",
    ],
  },
  {
    titre: "Peinture & Finitions",
    icon: "◧",
    services: [
      "Préparation des supports",
      "Peintures lessivables (Hôpitaux/Écoles)",
      "Revêtements muraux",
      "Sols souples (optionnel)",
    ],
  },
  {
    titre: "Maintenance & Entretien",
    icon: "◉",
    services: [
      "Marchés à bons de commande",
      "Interventions rapides",
      "Remise en état après sinistre",
      "Petits travaux de reprise",
    ],
  },
];

/* Références publiques - exemples de chantiers réalisés pour des collectivités */
const referencesPubliques = [
  {
    titre: "École Maternelle - Strasbourg",
    type: "Éducation",
    description: "Isolation phonique & Faux plafonds • 4 semaines",
    couleurBadge: "bg-brand-orange",
  },
  {
    titre: "Hôtel de Ville - Sélestat",
    type: "Administration",
    description: "Cloisons modulaires & Peinture • Site occupé",
    couleurBadge: "bg-brand-blue-dark",
  },
  {
    titre: "Complexe Sportif - Illkirch",
    type: "Sport & Loisirs",
    description: "Isolation thermique par l'intérieur • RGE",
    couleurBadge: "bg-brand-orange",
  },
];

/* Étapes de la timeline - processus de travail pour rassurer l'acheteur */
const etapesTimeline = [
  {
    numero: 1,
    titre: "Prise de contact & Visite",
    description: "Déplacement sur site sous 48h pour analyse technique.",
    actif: true,
  },
  {
    numero: 2,
    titre: "Chiffrage & DPGF",
    description: "Remise d'une offre détaillée ou réponse AO conforme au CCTP.",
    actif: false,
  },
  {
    numero: 3,
    titre: "Planification & Préparation",
    description: "Validation calendrier, commandes matériaux et plan de sécurité.",
    actif: false,
  },
  {
    numero: 4,
    titre: "Travaux & Réception",
    description: "Exécution soignée et levée des réserves immédiate.",
    actif: false,
  },
];

/* Engagements clés - points forts pour les marchés publics */
const engagements = [
  {
    titre: "Interlocuteur unique",
    description: "Un conducteur de travaux dédié suit votre dossier du chiffrage à la réception.",
  },
  {
    titre: "Respect du planning",
    description: "Engagement ferme sur les délais validés lors de la commande.",
  },
  {
    titre: "Propreté irréprochable",
    description: "Nettoyage quotidien du chantier.",
  },
];

/* Certifications et garanties administratives */
const garantiesAdministratives = [
  { label: "Qualibat RGE", icon: "🏆" },
  { label: "Décennale & RC Pro", icon: "🛡️" },
  { label: "Attestations URSSAF", icon: "📄" },
];

/* Questions fréquentes des acheteurs publics */
const faqAcheteurs = [
  {
    question: "Quels sont vos délais de réponse pour un devis ?",
    reponse:
      "Pour une demande standard, nous nous engageons à fournir un chiffrage sous 48h à 72h après la visite technique.",
  },
  {
    question: "Acceptez-vous les chantiers en site occupé ?",
    reponse:
      "Oui, c'est une de nos spécialités. Nous adaptons nos horaires et mettons en place des protections spécifiques (sas poussière) pour garantir la sécurité des usagers.",
  },
  {
    question: "Réalisez-vous aussi des petits travaux d'entretien ?",
    reponse:
      "Absolument. Nous répondons aux marchés à bons de commande pour la maintenance courante (reprises plâtre, peinture, dalles de plafond) de votre parc immobilier.",
  },
];

export default function MarchesPublicsPage() {
  return (
    <>
      {/* Données structurées JSON-LD pour le SEO */}
      <StructuredData />

      {/* Header - Navigation principale sticky */}
      <Header pageActive="marches-publics" />

      {/* ============================================
          HERO - Section d'accroche pour les acheteurs publics
          Affiche les badges de confiance et le message principal
          ============================================ */}
      <div className="mt-20">
        <ServiceHero
          title="Travaux de plâtrerie, isolation & finitions"
          titleHighlight="Marchés publics Strasbourg / Alsace"
          subtitle="Intervention en site occupé, respect strict des délais et conformité administrative. Nous répondons aux appels d'offres et marchés à bons de commande sur toute l'Alsace."
          badges={[
            { label: "Strasbourg & Alsace", variant: "location" },
            { label: "RGE", variant: "certification" },
            { label: "Décennale", variant: "certification" },
          ]}
          ctaLinks={[
            { label: "Contacter pour un marché public", href: "#contact", variant: "primary" },
            { label: "Dossier Administratif", href: "#administratif", variant: "secondary" },
          ]}
        />
      </div>

      {/* ============================================
          NAVIGATION STICKY - Navigation rapide intra-page
          Permet aux acheteurs pressés d'accéder directement aux sections
          ============================================ */}
      <nav
        role="navigation"
        aria-label="Navigation rapide de la page"
        className="sticky top-0 z-40 hidden border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur md:block"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex gap-8 py-4 text-sm font-medium text-gray-600">
            {navigationSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="border-b-2 border-transparent pb-1 transition hover:border-brand-orange hover:text-brand-blue"
                >
                  {section.label}
                </a>
              </li>
            ))}
            <li className="ml-auto">
              <a href="#contact" className="font-bold text-brand-orange">
                Demander un chiffrage →
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main id="main-content">
        {/* ============================================
            SECTION PRESTATIONS - Les 4 lots proposés
            Présente les domaines d'expertise pour les marchés publics
            ============================================ */}
        <section id="lots" className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Titre et introduction de la section */}
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-brand-blue md:text-4xl">
                Vos lots Plâtrerie, Isolation et Finitions en Alsace
              </h2>
              <p className="text-gray-500">
                Nous intervenons sur des lots séparés ou groupés pour la rénovation thermique et
                l&apos;aménagement intérieur de bâtiments publics (Écoles, Bureaux, Gymnases, Mairies).
              </p>
            </div>

            {/* Grille des 4 cartes de prestations */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {prestationsLots.map((lot) => (
                <Card
                  key={lot.titre}
                  className="group relative overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 border-2 border-gray-200 hover:border-brand-orange bg-white h-full motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.02] motion-reduce:transition-none"
                  style={{
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <CardContent className="p-8">
                  {/* Icône du lot */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-2xl text-brand-orange shadow-sm transition group-hover:bg-brand-orange group-hover:text-white">
                    {lot.icon}
                  </div>

                  {/* Titre du lot */}
                  <CardTitle className="mb-3 text-xl text-brand-blue">{lot.titre}</CardTitle>

                  {/* Liste des services inclus */}
                  <ul className="space-y-2 text-sm text-gray-500">
                    {lot.services.map((service) => (
                      <li key={service}>• {service}</li>
                    ))}
                  </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Lien vers le formulaire de contact */}
            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="inline-flex items-center font-bold text-brand-blue transition hover:text-brand-orange"
              >
                Demander un chiffrage pour un lot →
              </a>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION RÉFÉRENCES - Portfolio des réalisations publiques
            Montre des exemples concrets de chantiers réalisés
            ============================================ */}
        <section id="references" className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête avec titre et lien vers le portfolio complet */}
            <div className="mb-12 flex flex-col items-end justify-between md:flex-row">
              <div>
                <h2 className="mb-2 text-3xl font-bold text-brand-blue md:text-4xl">
                  Réalisations en secteur public
                </h2>
                <p className="text-gray-500">Exemples de chantiers livrés en Alsace.</p>
              </div>
              <Link
                href="/realisations"
                className="mt-4 hidden font-semibold text-brand-orange hover:underline md:mt-0 md:inline-block"
              >
                Voir tout le portfolio
              </Link>
            </div>

            {/* Grille des 3 références principales */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {referencesPubliques.map((ref) => (
                <Card
                  key={ref.titre}
                  className="group relative overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 border-2 border-gray-200 hover:border-brand-orange bg-white pt-0 h-full motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.02] motion-reduce:transition-none"
                  style={{
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {/* Image placeholder - à remplacer par de vraies photos */}
                  <div className="h-64 w-full bg-gray-300 transition duration-500 group-hover:scale-105">
                    <div className="flex h-full items-center justify-center text-gray-500">
                      [Photo: {ref.titre}]
                    </div>
                  </div>

                  {/* Overlay avec informations du projet */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6">
                    <Badge className={`mb-2 w-fit ${ref.couleurBadge} text-white`}>
                      {ref.type}
                    </Badge>
                    <CardTitle className="text-lg text-white">{ref.titre}</CardTitle>
                    <p className="text-sm text-gray-300">{ref.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Lien mobile vers le portfolio */}
            <div className="mt-8 text-center md:hidden">
              <Link
                href="/realisations"
                className="font-semibold text-brand-orange hover:underline"
              >
                Voir toutes les références
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION MÉTHODE - Processus de travail et engagements
            Rassure l'acheteur sur la gestion des chantiers en site occupé
            ============================================ */}
        <section id="methode" className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Colonne gauche : argumentaire site occupé et engagements */}
              <div>
                <h2 className="mb-6 text-3xl font-bold text-brand-blue md:text-4xl">
                  Une gestion de chantier adaptée aux contraintes du service public
                </h2>
                <p className="mb-8 text-lg text-gray-500">
                  Nous comprenons que vos bâtiments doivent souvent rester fonctionnels pendant les
                  travaux. Notre organisation est rodée pour minimiser l&apos;impact sur les usagers.
                </p>

                {/* Encadré spécial "Site Occupé" */}
                <div className="mb-8 rounded-r-lg border-l-4 border-brand-blue bg-brand-blue/5 p-6">
                  <h3 className="mb-2 text-2xl md:text-3xl font-semibold text-brand-blue">
                    👥 Expertise en milieu occupé
                  </h3>
                  <p className="text-sm text-gray-700">
                    Gestion stricte des nuisances sonores, barrières anti-poussière et adaptation
                    des horaires d&apos;intervention pour assurer la{" "}
                    <strong>continuité de vos services publics</strong>.
                  </p>
                </div>

                {/* Liste des engagements clés */}
                <ul className="space-y-4">
                  {engagements.map((engagement) => (
                    <li key={engagement.titre} className="flex items-start">
                      <span className="mr-3 mt-1 text-green-500">✓</span>
                      <span>
                        <strong>{engagement.titre} :</strong> {engagement.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Colonne droite : Timeline verticale du processus */}
              <div className="relative space-y-12 border-l-2 border-gray-200 pl-8">
                {etapesTimeline.map((etape) => (
                  <div key={etape.numero} className="relative">
                    {/* Point de la timeline */}
                    <span
                      className={`absolute -left-[41px] h-6 w-6 rounded-full border-4 bg-white ${
                        etape.actif ? "border-brand-blue" : "border-gray-300"
                      }`}
                    />
                    <h4 className="text-lg font-bold text-brand-blue">
                      {etape.numero}. {etape.titre}
                    </h4>
                    <p className="text-sm text-gray-500">{etape.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION ADMINISTRATIF - Garanties et conformité
            Montre que le dossier administratif est complet et à jour
            ============================================ */}
        <section id="administratif" className="border-y border-gray-200 bg-gray-100 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 rounded-xl bg-white p-8 shadow-sm md:flex-row md:p-12">
              {/* Texte explicatif et badges */}
              <div className="md:w-2/3">
                <h2 className="mb-4 text-3xl md:text-4xl font-bold text-brand-blue">
                  Dossier administratif & Garanties
                </h2>
                <p className="mb-6 text-gray-500">
                  Nous savons que la conformité administrative est un pré-requis bloquant. Tous nos
                  documents sont à jour et disponibles immédiatement pour valider votre dossier.
                </p>

                {/* Badges des certifications */}
                <div className="mb-6 flex flex-wrap gap-4">
                  {garantiesAdministratives.map((garantie) => (
                    <Badge
                      key={garantie.label}
                      variant="outline"
                      className="border-gray-200 bg-gray-50 text-gray-700"
                    >
                      <span className="text-brand-orange">{garantie.icon}</span> {garantie.label}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Bouton de téléchargement des pièces administratives */}
              <div className="text-center md:w-1/3">
                <Button size="lg" className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white shadow-lg">
                  ⬇ Demander les pièces administratives
                </Button>
                <p className="mt-3 text-xs text-gray-500">🕐 Envoi par email sous 24h</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION ZONE & FAQ - Intervention et questions fréquentes
            Deux colonnes : carte de la zone + FAQ pour les acheteurs
            ============================================ */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 gap-16 px-4 sm:px-6 lg:px-8 lg:grid-cols-2">
            {/* Colonne gauche : Zone d'intervention */}
            <div>
              <h2 className="mb-6 text-3xl md:text-4xl font-bold text-brand-blue">
                Intervention sur Strasbourg et toute l&apos;Alsace
              </h2>
              <p className="mb-6 text-gray-500">
                Basés au cœur de l&apos;Alsace, nous intervenons avec réactivité pour les collectivités
                de l&apos;Eurométropole et du Bas-Rhin.
              </p>

              {/* Placeholder pour la carte */}
              <div className="mb-6 flex h-64 items-center justify-center rounded-lg bg-gray-100 p-1">
                <span className="text-gray-400">[Carte Zone Intervention Alsace]</span>
              </div>

              <p className="text-sm font-semibold text-gray-700">
                📍 Strasbourg, Schiltigheim, Illkirch, Haguenau, Sélestat...
              </p>
            </div>

            {/* Colonne droite : FAQ pour les acheteurs */}
            <div>
              <h2 className="mb-6 text-3xl md:text-4xl font-bold text-brand-blue">
                Questions fréquentes des acheteurs
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {faqAcheteurs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-lg border border-gray-200 bg-gray-50 px-4"
                  >
                    <AccordionTrigger className="font-medium text-brand-blue">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-600">
                      {faq.reponse}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION CONTACT - CTA final
            Appel à l'action pour convertir les acheteurs intéressés
            ============================================ */}
        <CtaBlock
          titre="Prêt à lancer votre projet de marché public ?"
          description="Vous avez un projet ou un appel d'offres à nous soumettre ? Contactez directement notre pôle Marchés Publics pour obtenir un chiffrage personnalisé."
          lienDevis="/contact"
          texteDevis="Demander un chiffrage pour un marché public"
          telephone="03 88 00 00 00"
          variante="sombre"
          id="contact"
        />
      </main>

      {/* Footer réutilisable */}
      <Footer />

      {/* Barre sticky mobile - permet d'appeler ou demander un devis rapidement sur mobile */}
      <MobileStickyBar
        phoneNumber="tel:0388000000"
        devisLink="/contact"
        devisText="Devis Gratuit"
      />
    </>
  );
}

