/*
  Page FAQ générale du site AR+SOLUTION.
  
  Cette page répond aux questions fréquentes des visiteurs concernant :
  - Le processus de devis et l'organisation des chantiers
  - Les certifications RGE, les aides financières et les garanties
  - Les procédures pour les marchés publics et collectivités
  - La zone d'intervention géographique
  
  L'utilisateur peut :
  - Naviguer rapidement vers une catégorie via les filtres
  - Ouvrir/fermer les accordéons pour lire les réponses
  - Contacter l'entreprise s'il n'a pas trouvé sa réponse
*/

import type { Metadata } from "next";
import Link from "next/link";

/* ============================================
   METADATA SEO
   Informations pour le référencement et le partage social
   ============================================ */

export const metadata: Metadata = {
  title: "FAQ | Questions Fréquentes Plâtrerie & Isolation | AR+SOLUTION",
  description:
    "Retrouvez les réponses à vos questions sur nos travaux de plâtrerie, isolation RGE, devis, délais et interventions à Strasbourg et en Alsace.",
  keywords: [
    "FAQ plâtrerie Strasbourg",
    "questions isolation thermique",
    "RGE Qualibat Alsace",
    "MaPrimeRénov Bas-Rhin",
    "Garantie Décennale plaquiste",
  ],
  openGraph: {
    title: "FAQ | AR+SOLUTION Plâtrerie & Isolation Strasbourg",
    description:
      "Toutes les réponses à vos questions sur nos services de plâtrerie, isolation et rénovation en Alsace.",
    type: "website",
    locale: "fr_FR",
    url: "https://ar-solution.fr/faq",
    siteName: "AR+SOLUTION",
    images: [
      {
        url: "https://ar-solution.fr/og-faq.jpg",
        width: 1200,
        height: 630,
        alt: "FAQ AR+SOLUTION - Questions fréquentes sur nos services de rénovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | AR+SOLUTION Plâtrerie & Isolation Strasbourg",
    description:
      "Toutes les réponses à vos questions sur nos services de plâtrerie, isolation et rénovation en Alsace.",
    images: ["https://ar-solution.fr/og-faq.jpg"],
  },
  alternates: {
    canonical: "https://ar-solution.fr/faq",
  },
};
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GridScan from "@/components/common/GridScan";

/* ============================================
   DONNÉES DE LA PAGE FAQ
   ============================================ */

/* Catégories de filtrage pour la navigation rapide */
const filtresCategories = [
  { id: "devis-process", label: "Budget & Devis", icone: "euro" },
  { id: "devis-process", label: "Déroulement Chantier", icone: "chantier" },
  { id: "technique-rge", label: "Certifications RGE", icone: "certificat" },
  { id: "marches-publics", label: "Espace Mairies / Collectivités", icone: "batiment", special: true },
];

/* Questions sur le processus de devis et l'organisation du chantier */
const questionsProcessus = [
  {
    question: "Le devis est-il payant ?",
    reponse: {
      intro: "Non, nos devis sont 100% gratuits et détaillés.",
      details: "Nous nous déplaçons chez vous (Strasbourg et CUS) pour prendre les mesures exactes. Vous recevez ensuite une proposition chiffrée transparente : main d'œuvre, matériaux, et protection des sols, sans frais cachés."
    }
  },
  {
    question: "Quels sont vos délais d'intervention actuels ?",
    reponse: {
      intro: "En moyenne, nous pouvons intervenir sous 2 à 4 semaines après la signature du devis, selon la saison.",
      details: "Pour les petites interventions urgentes (dégâts des eaux, retouches plâtre), nous essayons de bloquer des créneaux rapides sous 7 jours.",
      note: "Nous nous engageons contractuellement sur les dates annoncées."
    }
  },
  {
    question: "Intervenez-vous en site occupé (logement habité) ?",
    reponse: {
      intro: "Oui, absolument. C'est une de nos spécialités.",
      details: "Nous mettons en place un protocole strict :",
      liste: [
        "Protection intégrale des sols et du mobilier (bâches polyane et feutrine).",
        "Installation de sas de confinement pour limiter la poussière (ponçage avec aspiration).",
        "Nettoyage de fin de chantier inclus."
      ]
    }
  },
];

/* Questions sur les certifications RGE, les aides et les garanties */
const questionsTechniques = [
  {
    question: "Vos travaux sont-ils éligibles aux aides de l'État (MaPrimeRénov') ?",
    reponse: {
      intro: "Oui, nous sommes certifiés RGE (Reconnu Garant de l'Environnement).",
      details: "Cela concerne spécifiquement nos travaux d'isolation intérieure (murs, combles, plafonds). Nous vous fournissons tous les justificatifs techniques nécessaires pour monter votre dossier d'aide financière.",
      lien: { texte: "Voir notre page Isolation Intérieure", url: "/services/isolation" }
    }
  },
  {
    question: "Êtes-vous couverts en Garantie Décennale ?",
    reponse: {
      intro: "Oui, notre Garantie Décennale est à jour.",
      details: "Elle couvre l'ensemble de nos interventions (plâtrerie, faux-plafonds, isolation) pendant 10 ans. Une attestation nominative est systématiquement jointe à nos devis pour votre tranquillité d'esprit."
    }
  },
];

/* Cartes d'information pour la section Marchés Publics */
const cartesMarchesPublics = [
  {
    titre: "Appels d'offres",
    icone: "signature",
    question: "Répondez-vous aux appels d'offres publics ?",
    reponse: "Oui. Nous avons l'habitude des procédures formalisées (MAPA, appels ouverts) pour les lots plâtrerie, peinture et isolation des bâtiments communaux (écoles, gymnases, bureaux)."
  },
  {
    titre: "Chorus Pro",
    icone: "ordinateur",
    question: "Acceptez-vous la facturation électronique ?",
    reponse: "Oui. Notre service administratif maîtrise le portail Chorus Pro pour le dépôt des factures et le suivi des mandats administratifs."
  },
  {
    titre: "Dossier Administratif",
    icone: "dossier",
    question: null,
    reponse: "Nous fournissons sous 24h toutes les pièces justificatives (DC1, DC2, attestations fiscales et sociales, liste de références chantiers publics) pour compléter vos dossiers de consultation.",
    large: true
  },
];

/* Villes de la zone d'intervention pour le SEO local */
const villesIntervention = [
  "Strasbourg Centre",
  "Schiltigheim",
  "Illkirch-Graffenstaden",
  "Haguenau",
  "Sélestat",
  "Eurométropole",
];

/* ============================================
   COMPOSANT ICÔNE SVG
   Permet d'afficher différentes icônes selon le type
   ============================================ */

function Icone({ type, className = "w-5 h-5" }: { type: string; className?: string }) {
  switch (type) {
    case "euro":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "chantier":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    case "certificat":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      );
    case "batiment":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "signature":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      );
    case "ordinateur":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "dossier":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
        </svg>
      );
    case "localisation":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "chevron":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      );
    case "email":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
}

/* ============================================
   DONNÉES STRUCTURÉES JSON-LD (SEO)
   Schéma FAQPage pour Google et les moteurs de recherche
   Combine toutes les questions de la page pour un meilleur référencement
   ============================================ */

function genererSchemaFAQ() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ar-solution.fr";
  
  /* Fonction utilitaire pour formater une réponse structurée en texte brut */
  const formaterReponse = (reponse: {
    intro: string;
    details?: string;
    liste?: string[];
    note?: string;
    lien?: { texte: string; url: string };
  }): string => {
    let texte = reponse.intro;
    if (reponse.details) texte += ` ${reponse.details}`;
    if (reponse.liste) texte += ` ${reponse.liste.join(" ")}`;
    if (reponse.note) texte += ` ${reponse.note}`;
    if (reponse.lien) texte += ` En savoir plus : ${reponse.lien.texte}.`;
    return texte;
  };

  /* Collecte toutes les questions-réponses de la page */
  const toutesLesQuestions = [
    ...questionsProcessus.map((q) => ({
      question: q.question,
      reponse: formaterReponse(q.reponse),
    })),
    ...questionsTechniques.map((q) => ({
      question: q.question,
      reponse: formaterReponse(q.reponse),
    })),
    ...cartesMarchesPublics
      .filter((c) => c.question !== null)
      .map((c) => ({
        question: c.question!,
        reponse: c.reponse,
      })),
  ];

  /* Schema FAQPage principal */
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: toutesLesQuestions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.reponse,
      },
    })),
  };

  /* Schema BreadcrumbList pour le fil d'Ariane */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "FAQ",
        item: `${baseUrl}/faq`,
      },
    ],
  };

  return { faqPageSchema, breadcrumbSchema };
}

/* ============================================
   PAGE FAQ GÉNÉRALE
   ============================================ */

export default function PageFAQ() {
  const { faqPageSchema, breadcrumbSchema } = genererSchemaFAQ();

  return (
    <>
      {/* Données structurées JSON-LD pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema, null, 0),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema, null, 0),
        }}
      />

      {/* Header - Navigation principale sticky */}
      <Header pageActive="faq" />

      {/* ============================================
          CONTENU PRINCIPAL
          ============================================ */}
      <main className="mt-20">
        {/* ============================================
            SECTION 1 : HERO & FILTRES DE NAVIGATION
            Permet au visiteur de s'orienter rapidement vers la catégorie qui l'intéresse
            ============================================ */}
        <section className="relative bg-slate-900 text-white py-16 md:py-24 overflow-hidden">
          {/* Animation 3D GridScan en arrière-plan */}
          <div className="absolute inset-0">
            <GridScan
              sensitivity={0.55}
              lineThickness={1}
              linesColor="#1e3a5f"
              gridScale={0.1}
              scanColor="#3b82f6"
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

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Titre principal */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vos questions fréquentes sur nos travaux
            </h1>

            {/* Sous-titre explicatif */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Transparence, délais, garanties : tout ce que vous devez savoir avant de
              démarrer votre chantier de plâtrerie ou d&apos;isolation à Strasbourg et en Alsace.
            </p>

            {/* Filtres par catégorie - Navigation rapide vers les sections */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {filtresCategories.map((filtre) => (
                  <a
                    key={filtre.label}
                    href={`#${filtre.id}`}
                    className={`${
                      filtre.special
                        ? "bg-brand-blue hover:bg-brand-blue-dark border-transparent shadow-lg"
                        : "bg-white/10 hover:bg-white/20 border-white/30 backdrop-blur-sm"
                    } border px-5 py-3 rounded-full text-sm md:text-base font-medium transition flex items-center gap-2`}
                  >
                  <span className={filtre.special ? "text-white" : filtre.icone === "certificat" ? "text-green-400" : "text-brand-orange"}>
                    <Icone type={filtre.icone} className="w-4 h-4" />
                  </span>
                  {filtre.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 2 : PROCESSUS (Devis, Prix, Délais)
            Questions sur l'organisation logistique des chantiers
            ============================================ */}
        <section id="devis-process" className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête de section */}
            <div className="text-center mb-12">
              <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">
                Organisation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mt-2">
                Votre devis et l&apos;organisation du chantier
              </h2>
              <p className="text-gray-600 mt-4">
                Nous levons vos doutes sur la logistique pour une intervention sans stress.
              </p>
            </div>

            {/* Liste des questions en accordéon */}
            <Accordion type="single" collapsible className="space-y-4">
              {questionsProcessus.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-lg px-4 hover:border-brand-orange transition duration-300"
                >
                  <AccordionTrigger className="font-semibold text-brand-blue">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pl-4 border-l-2 border-brand-orange/10">
                    <p><strong>{item.reponse.intro}</strong></p>
                    {item.reponse.details && (
                      <p className="mt-2">{item.reponse.details}</p>
                    )}
                    {item.reponse.liste && (
                      <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                        {item.reponse.liste.map((element, i) => (
                          <li key={i}>{element}</li>
                        ))}
                      </ul>
                    )}
                    {item.reponse.note && (
                      <p className="text-sm text-gray-500 italic mt-2">
                        {item.reponse.note}
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ============================================
            SECTION 3 : RÉASSURANCE TECHNIQUE (RGE & Garanties)
            Questions sur les certifications, les aides et les garanties
            ============================================ */}
        <section id="technique-rge" className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête avec logos de certification */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
              <div>
                <span className="text-green-600 font-bold uppercase tracking-wider text-sm">
                  Qualité & Aides
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mt-2">
                  Certifications, Aides et Garanties
                </h2>
              </div>

              {/* Logos de réassurance */}
              <div className="flex gap-4 opacity-80">
                <img
                  src="https://placehold.co/80x80?text=RGE"
                  alt="Logo RGE"
                  className="h-16 w-auto"
                />
                <img
                  src="https://placehold.co/80x80?text=Qualibat"
                  alt="Logo Qualibat"
                  className="h-16 w-auto"
                />
                <img
                  src="https://placehold.co/80x80?text=Decennale"
                  alt="Logo Assurance Décennale"
                  className="h-16 w-auto"
                />
              </div>
            </div>

            {/* Liste des questions en accordéon */}
            <Accordion type="single" collapsible className="space-y-4">
              {questionsTechniques.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-lg px-4 hover:border-green-300 transition duration-300"
                >
                  <AccordionTrigger className="font-semibold text-brand-blue">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pl-4 border-l-2 border-green-100">
                    <p><strong>{item.reponse.intro}</strong></p>
                    {item.reponse.details && (
                      <p className="mt-2">{item.reponse.details}</p>
                    )}
                    {item.reponse.lien && (
                      <Link
                        href={item.reponse.lien.url}
                        className="text-brand-orange hover:underline text-sm mt-2 inline-block"
                      >
                        → {item.reponse.lien.texte}
                      </Link>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ============================================
            SECTION 4 : ESPACE ACHETEURS PUBLICS (B2G)
            Informations dédiées aux collectivités et marchés publics
            ============================================ */}
        <section id="marches-publics" className="py-16 bg-gray-50 border-y border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête de section avec icône */}
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-brand-blue text-white p-3 rounded-lg shadow-md">
                <Icone type="batiment" className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
                  Collectivités, Mairies et Marchés Publics
                </h2>
                <p className="text-gray-600">
                  Un espace dédié aux procédures administratives B2G.
                </p>
              </div>
            </div>

            {/* Grille des cartes d'information */}
            <div className="grid md:grid-cols-2 gap-6">
              {cartesMarchesPublics.map((carte) => (
                <Card
                  key={carte.titre}
                  className={`${carte.large ? "md:col-span-2" : ""}`}
                >
                  <CardContent className="p-6">
                  <CardTitle className="font-bold text-brand-blue mb-2 flex items-center gap-2">
                    <span className="text-brand-blue">
                      <Icone type={carte.icone} className="w-5 h-5" />
                    </span>
                    {carte.titre}
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    {carte.question && (
                      <>
                        {carte.question}
                        <br />
                      </>
                    )}
                    <strong>{carte.reponse.startsWith("Oui") ? "Oui. " : ""}</strong>
                    {carte.reponse.startsWith("Oui") 
                      ? carte.reponse.substring(carte.reponse.indexOf(".") + 2)
                      : carte.reponse
                    }
                  </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA vers la page Marchés Publics */}
            <div className="mt-8 text-center">
              <Button asChild className="bg-brand-blue hover:bg-brand-blue/90 text-white">
                <Link href="/marches-publics">Accéder à l&apos;espace Marchés Publics →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 5 : ZONE D'INTERVENTION (SEO LOCAL)
            Présente les zones géographiques couvertes pour le référencement local
            ============================================ */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Colonne texte */}
              <div>
                <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">
                  Géographie
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mt-2 mb-4">
                  Où intervenons-nous ?
                </h2>
                <p className="text-gray-600 mb-6">
                  Basés au cœur de Strasbourg, nous intervenons dans tout le Bas-Rhin pour
                  garantir réactivité et proximité.
                </p>

                <h3 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-3">
                  Principales zones d&apos;intervention :
                </h3>
                <ul className="grid grid-cols-2 gap-y-2 text-gray-600 text-sm">
                  {villesIntervention.map((ville) => (
                    <li key={ville} className="flex items-center">
                      <span className="text-brand-orange mr-2">
                        <Icone type="localisation" className="w-4 h-4" />
                      </span>
                      {ville}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Colonne carte (placeholder) */}
              <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg h-64 md:h-80">
                <img
                  src="https://placehold.co/600x400?text=Carte+Zone+Intervention+Alsace"
                  alt="Carte zone intervention Strasbourg Alsace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded shadow text-xs font-bold text-brand-blue">
                  📍 Rayon d&apos;action : Bas-Rhin (67)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 6 : CTA FINAL "FILET DE SÉCURITÉ"
            Pour les visiteurs qui n'ont pas trouvé leur réponse
            ============================================ */}
        <section className="py-16 md:py-24 bg-slate-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Avatar / Photo de l'équipe */}
            <div className="mb-6 flex justify-center">
              <img
                src="https://placehold.co/100x100?text=Photo+Equipe"
                alt="Service Client AR+SOLUTION"
                className="w-20 h-20 rounded-full border-4 border-slate-700 shadow-lg"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vous n&apos;avez pas trouvé votre réponse ?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Chaque chantier est unique et mérite une étude personnalisée.
              Discutons de votre projet directement de vive voix ou par email.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-brand-orange-dark hover:bg-brand-orange text-white shadow-lg">
                <Link href="/contact">Demander un devis gratuit</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white hover:bg-white hover:text-slate-900 text-white">
                <a href="mailto:contact@ar-solution.fr">
                  <Icone type="email" className="w-5 h-5" />
                  Contacter l&apos;administratif
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Réponse sous 48h ouvrées. Service Marchés Publics disponible du Lundi au Vendredi.
            </p>
          </div>
        </section>
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
          className="flex-1 bg-brand-orange-dark hover:bg-brand-orange text-white font-bold shadow-md"
        >
          <Link href="/contact">Devis Gratuit</Link>
        </Button>
      </div>
    </>
  );
}

