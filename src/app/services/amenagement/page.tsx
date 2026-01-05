/*
  Page Service Aménagement du site AR+SOLUTION.
  
  Cette page présente en détail les prestations d'aménagement et peinture intérieure :
  - Peinture Décorative (murs, plafonds, boiseries)
  - Préparation & Lissage (ratissage, enduits)
  - Finitions Techniques (lessivables, anti-humidité, dépolluantes)
  - Aménagements sur mesure (niches, rangements, cloisons décoratives)
  
  L'utilisateur voit :
  - Les différents types de prestations avec leurs avantages
  - Le switch entre profils Résidentiel (déco) et Tertiaire (bureaux)
  - La qualité des finitions (rechampi, tendu, plinthes)
  - La méthode de protection et propreté
  - Des exemples de projets réalisés en Alsace
  - Une FAQ répondant aux questions courantes sur la peinture
  
  L'utilisateur peut :
  - Découvrir quelle prestation correspond à son besoin
  - Comprendre la différence entre finitions (mat, velours, satin)
  - Demander un devis via le formulaire ou le bouton CTA
  - Contacter le service Marchés Publics s'il est acheteur public
*/

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TrustBar from "@/components/common/TrustBar";
import CtaBlock from "@/components/common/CtaBlock";
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
const MarchesPublicsSection = dynamic(
  () => import("@/components/services/MarchesPublicsSection"),
  { ssr: true }
);
const ServiceStructuredData = dynamic(
  () => import("@/components/services/ServiceStructuredData"),
  { ssr: true }
);
import { amenagementPageMetadata } from "@/lib/services-metadata";
import { barreConfianceAmenagement, marchesPublicsAvantages, documentsMarchesPublicsGenerique } from "@/lib/services-data";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = amenagementPageMetadata;

/* ============================================
   DONNÉES DE LA PAGE
   ============================================ */

// Utilisation des données centralisées
const barreConfianceItems = barreConfianceAmenagement;

/* Prestations pour le profil Résidentiel (B2C) */
const prestationsResidentiel = [
  {
    id: "deco",
    titre: "Peinture Décorative",
    description:
      "Murs, plafonds et boiseries. Conseils colorimétriques pour harmoniser votre intérieur. Finitions mates, velours ou satinées selon la luminosité et l'usage de la pièce.",
    iconeColor: "blue" as const,
    icone: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: "preparation",
    titre: "Préparation & Lissage",
    description:
      "Pour un résultat \"miroir\" comme sur nos photos, une préparation des murs (ratissage) est souvent nécessaire avant la peinture de finition.",
    iconeColor: "orange" as const,
    lienTexte: "Voir notre expertise Enduit",
    lien: "/services/enduits-finitions",
    badge: "Indispensable",
    badgeColor: "orange" as const,
    icone: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: "finitions",
    titre: "Finitions Techniques",
    description:
      "Peintures lessivables pour cuisines, solutions anti-humidité pour salles de bains, ou peintures dépolluantes (capteurs de formaldéhyde) pour chambres d'enfants.",
    iconeColor: "blue" as const,
    icone: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

/* Prestations pour le profil Tertiaire (B2B) */
const prestationsTertiaire = [
  {
    id: "airless",
    titre: "Grands Volumes & Airless",
    description:
      "Application mécanisée (pistolet Airless) pour bureaux, cages d'escalier et locaux blancs. Rapidité d'exécution et homogénéité parfaite du film de peinture.",
    iconeColor: "blue" as const,
    icone: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "bureaux",
    titre: "Rénovation de Bureaux",
    description:
      "Remise en état locative ou modernisation. Intervention possible en horaires décalés pour minimiser l'impact sur votre activité commerciale.",
    iconeColor: "blue" as const,
    icone: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "erp",
    titre: "Normes ERP & Sécurité",
    description:
      "Utilisation de peintures spécifiques pour ERP (Écoles, Crèches) : Classement au feu, labels environnementaux stricts, facilité d'entretien.",
    iconeColor: "blue" as const,
    icone: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

/* Points de qualité des finitions (différence artisan pro) */
const detailsFinitions = [
  {
    titre: 'Le "Rechampi" net',
    description:
      "Des lignes de séparation murs/plafonds tranchées au rasoir, sans aucune bavure, même sur supports texturés.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&q=80",
  },
  {
    titre: 'Le "Tendu" parfait',
    description:
      'Pas de trace de reprise ni de texture "peau d\'orange". Une application uniforme grâce à un lissage fin préalable.',
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop&q=80",
  },
  {
    titre: "Plinthes & Boiseries",
    description:
      "Pas de gouttes au sol. Réalisation de joints acryliques propres avant peinture pour une finition hermétique.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop&q=80",
  },
];

/* Étapes de la méthode de protection */
const etapesProtection = [
  {
    numero: 1,
    titre: "Protection intégrale",
    description:
      "Sols, parquets et mobilier restant sont couverts par du polyane et scotch de masquage pro.",
  },
  {
    numero: 2,
    titre: "Démontage soigné",
    description:
      "Nous démontons caches de prises et radiateurs pour peindre derrière, pas autour.",
  },
  {
    numero: 3,
    titre: "Nettoyage fin de chantier",
    description:
      "Aspiration et remise en place. Vous retrouvez votre pièce prête à vivre.",
  },
];

/* Projets de peinture/aménagement réalisés */
const projetsRealises = [
  {
    titre: "Mise en blanc intégrale",
    lieu: "Strasbourg Centre",
    type: "Bureaux / Tertiaire",
    description: "Rénovation complète de bureaux avec peinture Airless",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80",
  },
  {
    titre: "Mise en teinte & Déco",
    lieu: "Neudorf",
    type: "Résidentiel",
    description: "Décoration intérieure avec finitions soignées",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&q=80",
  },
  {
    titre: "Rénovation Cage d'Escalier (Airless)",
    lieu: "Schiltigheim",
    type: "Copropriété",
    description: "Application mécanisée pour grands volumes",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop&q=80",
  },
];

/* Marques partenaires (réassurance) */
const marquesPartenaires = [
  { nom: "Seigneurie", logo: "https://placehold.co/120x60?text=Seigneurie" },
  { nom: "Zolpan", logo: "https://placehold.co/120x60?text=Zolpan" },
  { nom: "Unikalo", logo: "https://placehold.co/120x60?text=Unikalo" },
];

/* Questions fréquentes sur la peinture/aménagement */
const faqItems = [
  {
    question: "Quel type de peinture utilisez-vous ?",
    reponse:
      "Nous travaillons exclusivement avec des marques professionnelles reconnues comme Seigneurie Gauthier, Zolpan ou Unikalo. Nous privilégions les gammes A+ (très faibles émissions de COV) et Écolabel pour garantir la qualité de l'air intérieur de votre logement ou de vos locaux.",
  },
  {
    question: "Mat, Velours ou Satin : que choisir ?",
    reponse:
      "C'est une question d'esthétique et d'usage. Le Mat est très tendance, masque les défauts et offre une ambiance feutrée (idéal plafonds/salons). Le Velours est le compromis parfait : soyeux et lessivable. Le Satin reflète plus la lumière et est ultra-résistant, recommandé pour les pièces d'eau ou les zones à fort passage.",
  },
  {
    question: "Combien de temps pour peindre un appartement de 80m² ?",
    reponse:
      "Tout dépend de l'état des murs et si le logement est vide ou meublé. Pour un appartement vide de 80m² avec préparation standard (2 couches), comptez environ 5 à 7 jours ouvrés. En site occupé, le délai est légèrement plus long dû à la logistique de protection.",
  },
  {
    question: "Intervenez-vous en site occupé ?",
    reponse:
      "Oui, absolument. Nous travaillons régulièrement en site occupé (appartements, bureaux). Nous installons des protections anti-poussière et organisons le chantier pièce par pièce pour limiter les nuisances.",
  },
];

/* ============================================
   PAGE SERVICE AMÉNAGEMENT
   ============================================ */

export default function PageServiceAmenagement() {
  return (
    <>
      {/* Header - Navigation principale sticky */}
      <Header pageActive="services" ctaHref="#devis" />

      {/* ============================================
          CONTENU PRINCIPAL
          ============================================ */}
      <main className="mt-20">
        {/* ============================================
            HERO SECTION - La promesse peinture/aménagement
            L'utilisateur comprend immédiatement le service et peut demander un devis
            ============================================ */}
        <ServiceHero
          title="Peinture Intérieure & Haute Décoration"
          titleHighlight="à Strasbourg"
          subtitle="De la remise en blanc soignée aux mises en teintes complexes. Pour vos bureaux, locaux commerciaux et habitations."
          badges={[
            { label: "Strasbourg & Alsace", variant: "location" },
            { label: "RGE Qualibat", variant: "certification" },
            { label: "Décennale", variant: "certification" },
          ]}
          ctaLinks={[
            { label: "Demander un devis gratuit", href: "#devis", variant: "primary" },
            { label: "Accès Acheteurs Publics", href: "/marches-publics", variant: "secondary" },
          ]}
          scanColor="#f97316"
        />

        {/* ============================================
            BARRE DE CONFIANCE - Preuves sociales aménagement
            Affiche les certifications et avantages clés
            ============================================ */}
        <TrustBar items={barreConfianceItems} />

        {/* ============================================
            LE SAVOIR-FAIRE - Switch B2B/B2C
            Clarifier l'offre et segmenter les cibles avec onglets
            ============================================ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Titre de la section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                Plus qu&apos;un coup de rouleau, une finition durable
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Nous adaptons nos techniques et nos produits selon la nature de
                votre projet.
              </p>
            </div>

            {/* Sous-section Résidentiel */}
            <div className="mb-16">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
                <span className="bg-blue-100 text-brand-blue px-4 py-2 rounded-full">
                  Résidentiel (Déco)
                </span>
              </h3>
              <ServiceFeaturesGrid
                features={prestationsResidentiel}
                columns={3}
                variant="white"
              />
            </div>

            {/* Sous-section Tertiaire */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
                <span className="bg-slate-200 text-slate-700 px-4 py-2 rounded-full">
                  Tertiaire & Collectivités
                </span>
              </h3>
              <ServiceFeaturesGrid
                features={prestationsTertiaire}
                columns={3}
                variant="white"
              />
            </div>
          </div>
        </section>

        {/* ============================================
            LA QUALITÉ DE FINITION - Preuves visuelles
            Montrer la différence avec un "peintre du dimanche"
            ============================================ */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-blue">
              La différence se voit dans les détails
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              {detailsFinitions.map((detail) => (
                <div key={detail.titre} className="text-center group">
                  {/* Image ronde avec effet zoom */}
                  <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl mb-8 relative">
                    <Image
                      src={detail.image}
                      alt={detail.titre}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    {detail.titre}
                  </h3>
                  <p className="text-slate-600 px-4">{detail.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            MÉTHODE & PROTECTION
            Rassurer sur la propreté (Frein n°1)
            ============================================ */}
        <ServiceMethodSection
          title="Nous protégeons votre intérieur comme le nôtre"
          subtitle="La rénovation fait peur car elle est synonyme de poussière. Nous changeons la donne avec un protocole strict."
          etapes={etapesProtection}
          image={{
            src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80",
            alt: "Protection chantier peinture Strasbourg",
          }}
          imagePosition="left"
          variant="list"
          backgroundVariant="white"
        />

        {/* ============================================
            RÉALISATIONS - Avant/Après
            Inspiration & Preuve sociale
            ============================================ */}
        <ServiceRealisationsSection
          title="Ils ont redonné vie à leurs murs"
          subtitle="Exemples de transformations récentes en Alsace."
          realisations={projetsRealises}
          voirToutLink="/realisations"
          voirToutText="Voir tous les chantiers"
          variant="dark"
        />

        {/* ============================================
            MARCHÉS PUBLICS
            Section dédiée aux acheteurs publics avec avantages et documents
            ============================================ */}
        <MarchesPublicsSection
          avantages={marchesPublicsAvantages}
          documents={documentsMarchesPublicsGenerique}
        />

        {/* ============================================
            FAQ PEINTURE/AMÉNAGEMENT
            Levée de doutes techniques
            ============================================ */}
        <ServiceFAQSection
          title="Questions fréquentes"
          items={faqItems}
          variant="white"
        />

        {/* Logos Marques partenaires (Réassurance subtile) */}
        <section className="py-8 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-slate-500 mb-6 uppercase tracking-widest font-semibold">
              Nos partenaires confiance
            </p>
            <div className="flex justify-center items-center gap-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition duration-500">
              {marquesPartenaires.map((marque) => (
                <Image
                  key={marque.nom}
                  src={marque.logo}
                  alt={`Peinture ${marque.nom}`}
                  width={120}
                  height={60}
                  className="h-10 w-auto"
                  loading="lazy"
                  fetchPriority="low"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            CTA FINAL - Demande de devis
            Appel à l'action final pour convertir le visiteur
            ============================================ */}
        <CtaBlock
          titre="Prêt à changer d'ambiance ?"
          description="Obtenez un devis gratuit, détaillé et sans surprise pour vos travaux de peinture à Strasbourg et environs."
          texteDevis="Obtenir un chiffrage"
          variante="sombre"
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
        devisText="Devis Peinture"
      />

      {/* ============================================
          DONNÉES STRUCTURÉES SEO
          Schema.org pour améliorer le référencement
          ============================================ */}
      <ServiceStructuredData
        serviceName="Peinture Intérieure & Aménagement"
        serviceDescription="Peinture intérieure et aménagement à Strasbourg : décoration résidentielle, bureaux, ERP. Peintures A+ écolabel, finitions soignées, 0% tache garanti."
        serviceUrl="/services/amenagement"
        serviceType="Peinture intérieure"
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Peinture & Aménagement", url: "/services/amenagement" },
        ]}
      />
    </>
  );
}

