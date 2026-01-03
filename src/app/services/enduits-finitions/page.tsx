/*
  Page Service Enduits & Finitions du site AR+SOLUTION.
  
  Cette page présente en détail les prestations de plâtrerie fine et d'enduits de finition :
  - Ratissage et lissage (qualité Q3/Q4)
  - Enduit projeté Airless (grands volumes)
  - Enduits décoratifs (stuc, chaux, béton ciré)
  - Remise à neuf et réparation des dégâts
  
  L'utilisateur voit :
  - L'importance de la préparation avant peinture (80% du résultat)
  - Les différentes techniques d'enduit avec leurs usages
  - Les garanties de propreté sur chantier (Festool, aspiration à la source)
  - Des exemples de réalisations avant/après
  - Une FAQ sur les prix et méthodes
  
  L'utilisateur peut :
  - Comprendre pourquoi une bonne finition est essentielle
  - Identifier la technique adaptée à son projet
  - Demander un devis via le formulaire ou le bouton CTA
  - Être rassuré sur la propreté d'intervention
*/

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CtaBlock from "@/components/CtaBlock";
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
const ServiceStructuredData = dynamic(
  () => import("@/components/services/ServiceStructuredData"),
  { ssr: true }
);
const MarchesPublicsSection = dynamic(
  () => import("@/components/services/MarchesPublicsSection"),
  { ssr: true }
);
import { enduitsFinitionsPageMetadata } from "@/lib/services-metadata";
import { barreConfianceEnduits, marchesPublicsAvantages, documentsMarchesPublicsEnduits } from "@/lib/services-data";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = enduitsFinitionsPageMetadata;

/* ============================================
   DONNÉES DE LA PAGE
   ============================================ */

// Utilisation des données centralisées
const barreConfianceItems = barreConfianceEnduits;

/* Les étapes de préparation du mur (section pédagogie) */
const etapesPreparation = [
  {
    numero: 1,
    titre: "Rattrapage de planéité",
    description: "Correction des murs bombés, creux ou mal alignés.",
  },
  {
    numero: 2,
    titre: "Traitement des fissures",
    description: "Ouverture et pontage armé pour éviter la réapparition.",
  },
  {
    numero: 3,
    titre: "Finition Q4 (Lumière Rasante)",
    description: "Lissage intégral pour un effet miroir absolu.",
  },
];

/* Les 4 solutions techniques d'enduisage */
const solutionsEnduits = [
  {
    id: "ratissage",
    titre: "Ratissage & Lissage (Q3/Q4)",
    description:
      "Application manuelle multi-passes. La référence pour les intérieurs résidentiels exigeants.",
    badge: "Idéal Particuliers",
    badgeColor: "blue",
    iconeColor: "blue",
  },
  {
    id: "airless",
    titre: "Enduit Projeté Airless",
    description:
      "Mécanisation pour grands volumes. Rendu uniforme, délais divisés par 2.",
    badge: "Marchés Publics / Bureaux",
    badgeColor: "orange",
    iconeColor: "orange",
  },
  {
    id: "decoratif",
    titre: "Enduits Décoratifs",
    description:
      "Effets matière, stuc, chaux, béton ciré mural. Donnez du caractère à vos murs.",
    badge: "Architecture Intérieure",
    badgeColor: "blue",
    iconeColor: "blue",
  },
  {
    id: "reparation",
    titre: "Remise à neuf & Dégâts",
    description:
      "Rebouchage trous, traitement humidité et remise en état avant relocation.",
    badge: "Syndics & Agences",
    badgeColor: "green",
    iconeColor: "green",
  },
];

/* Les 3 points clés de la méthode propreté */
const pointsProprete = [
  {
    titre: "Protection Absolue",
    description:
      "Bâchage intégral des sols, calfeutrage des menuiseries et protection hermétique du mobilier.",
  },
  {
    titre: "Aspiration à la source (98%)",
    description:
      "Utilisation systématique de ponceuses girafes reliées à des aspirateurs industriels classe M. Idéal pour les écoles ou bureaux actifs.",
  },
  {
    titre: "Contrôle Qualité Lumière",
    description:
      "Vérification de chaque m² à la lampe rasante avant la livraison du support.",
  },
];

/* Projets réalisés à mettre en avant */
const projetsRealises = [
  {
    titre: "Rénovation Appartement Haussmannien",
    lieu: "Strasbourg Centre",
    type: "Particulier",
    description: "Ratissage intégral des murs avant laque satinée.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&q=80",
  },
  {
    titre: "Salle du Conseil - Mairie",
    lieu: "Bas-Rhin",
    type: "Marché Public",
    description: "Enduit Airless mécanisé pour uniformité parfaite.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80",
  },
];

/* Cas client mis en avant */
const casClient = {
  titre: "Rattrapage complet d'une école à Schiltigheim",
  lieu: "Schiltigheim",
  defi: "Rénover 400m² de murs très abîmés pendant les vacances de la Toussaint (10 jours).",
  solution:
    "Déploiement de 2 équipes en 2x8 et utilisation de l'enduit projeté Airless.",
  resultat: "Livraison avec 1 jour d'avance, zéro poussière à la rentrée.",
  image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop&q=80",
};

// Utilisation des données centralisées
const marchesPublicsAvantagesData = marchesPublicsAvantages;
const documentsMarchesPublicsData = documentsMarchesPublicsEnduits;

/* Questions fréquentes sur les enduits */
const faqItems = [
  {
    question: "Allez-vous faire beaucoup de poussière ?",
    reponse:
      "C'est notre priorité absolue. Nous utilisons des ponceuses girafes couplées à des aspirateurs industriels qui capturent 98% des particules à la source. De plus, nous confinons la zone de travail. Vous retrouverez vos locaux propres.",
  },
  {
    question: "Quelle différence entre ratissage et enduit de lissage ?",
    reponse:
      "L'enduit de lissage est souvent local (trous, rayures). Le ratissage consiste à recouvrir la totalité du mur d'une fine couche d'enduit pour uniformiser le support et supprimer le grain de l'ancien fond. C'est le pré-requis pour une finition 'Miroir' (Q4).",
  },
  {
    question: "Quel budget au m² pour un ratissage complet ?",
    reponse:
      "Chaque chantier est unique (état du support initial, hauteur sous plafond). En moyenne en Alsace, comptez à partir de 15€/m² pour une préparation soignée (Q3) et jusqu'à 25€/m² pour une finition haute couture (Q4). Demandez un chiffrage précis gratuit.",
  },
];

/* ============================================
   PAGE SERVICE ENDUITS & FINITIONS
   ============================================ */

export default function PageServiceEnduitsFinitions() {
  return (
    <>
      {/* Header - Navigation principale sticky */}
      <Header pageActive="services" ctaHref="#devis" />

      {/* ============================================
          CONTENU PRINCIPAL
          ============================================ */}
      <main className="mt-20">
        {/* ============================================
            HERO SECTION - La promesse enduits/finitions
            L'utilisateur comprend immédiatement le service et peut demander un devis
            ============================================ */}
        <ServiceHero
          title="Plâtrerie fine et"
          titleHighlight="Enduits de finition en Alsace."
          subtitle="Du ratissage complet (Q4) à l'enduit mécanisé Airless. La préparation indispensable selon le DTU 59.1 pour des peintures sublimées."
          badges={[
            { label: "Strasbourg & Alsace", variant: "location" },
            { label: "RGE Qualibat", variant: "certification" },
            { label: "Décennale", variant: "certification" },
          ]}
          ctaLinks={[
            { label: "Demander un devis gratuit", href: "#devis", variant: "primary" },
            { label: "Accès Acheteurs Publics", href: "/marches-publics", variant: "secondary" },
          ]}
          scanColor="#3b82f6"
        />

        {/* ============================================
            BARRE DE CONFIANCE - Preuves sociales enduits
            Affiche les certifications et avantages clés
            ============================================ */}
        <TrustBar items={barreConfianceItems} />

        {/* ============================================
            SECTION PÉDAGOGIE - Importance de la préparation
            Explique pourquoi 80% du résultat se joue avant la peinture
            ============================================ */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Texte pédagogique */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Pourquoi 80% du résultat final se joue{" "}
                  <span className="text-brand-blue">avant la peinture</span>.
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Beaucoup pensent qu&apos;une peinture de qualité (type laque
                  ou satinée) peut masquer les imperfections du support.{" "}
                  <strong>C&apos;est l&apos;inverse qui se produit.</strong>
                </p>
                <p className="text-slate-600 mb-8">
                  Une peinture haut de gamme agit comme une loupe : elle révèle
                  le moindre défaut de planéité ou de grain. Notre travail de
                  préparation est la garantie de votre investissement.
                </p>

                {/* Liste des étapes de préparation */}
                <ul className="space-y-4">
                  {etapesPreparation.map((etape) => (
                    <li key={etape.numero} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-brand-blue mt-1 font-bold">
                        {etape.numero}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-slate-900">
                          {etape.titre}
                        </h4>
                        <p className="text-sm text-slate-500">
                          {etape.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visuel comparatif */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=1000&fit=crop&q=80"
                  alt="Comparaison mur brut vs enduit lissé"
                  fill
                  loading="lazy"
                  className="object-cover transform transition duration-700 group-hover:scale-105"
                />

                {/* Label flottant */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur px-6 py-3 rounded-full text-sm font-bold shadow-lg border border-slate-200">
                  La différence à l&apos;œil nu
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            NOS SOLUTIONS - Catalogue des techniques d'enduit
            Présente les 4 solutions techniques adaptées à chaque besoin
            ============================================ */}
        <section className="py-16 md:py-24 bg-white" id="solutions">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Titre de la section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">
                Nos Expertises
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Solutions techniques d&apos;enduisage
              </h2>
              <p className="text-slate-600 mt-4">
                Nous adaptons la technique (manuelle ou mécanisée) à la
                contrainte de votre chantier : esthétique pure ou rendement
                rapide.
              </p>
            </div>

            {/* Grille des 4 cartes solutions */}
            <ServiceFeaturesGrid
              features={solutionsEnduits.map((s) => ({
                ...s,
                iconeColor: s.iconeColor as "blue" | "orange" | "green",
                badgeColor: s.badgeColor as "blue" | "orange" | "green",
              }))}
              columns={4}
              variant="white"
            />
          </div>
        </section>

        {/* ============================================
            MÉTHODE & PROPRETÉ - Le game changer
            Rassure sur la gestion de la poussière et la propreté du chantier
            ============================================ */}
        <section className="py-16 md:py-24 bg-brand-blue text-white relative overflow-hidden">
          {/* Motif de fond subtil */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Contenu texte */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Un chantier propre.
                  <br />
                  En site occupé ou vide.
                </h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  L&apos;enduit effraie souvent pour une raison : la poussière.
                  Nous avons investi dans un parc machine Festool® dernière
                  génération pour garantir une intervention quasi-chirurgicale.
                </p>

                {/* Liste des 3 points clés */}
                <div className="space-y-6">
                  {pointsProprete.map((point, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {index === 0 && (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            )}
                            {index === 1 && (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                              />
                            )}
                            {index === 2 && (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            )}
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold">{point.titre}</h3>
                        <p className="text-blue-200">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visuel chantier protégé + témoignage */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80"
                  alt="Chantier enduit propre Strasbourg avec protection et aspiration"
                  fill
                  loading="lazy"
                  className="object-cover"
                />

                {/* Témoignage flottant */}
                <div className="absolute -bottom-6 -right-6 bg-white text-slate-900 p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
                  <p className="font-serif italic text-lg">
                    &quot;Intervention invisible. Nous avons pu continuer les
                    cours dans les classes voisines.&quot;
                  </p>
                  <p className="text-sm text-slate-500 mt-2 font-bold">
                    — Directeur École Primaire, Strasbourg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            GALERIE & PREUVE - Avant/Après
            Montre des exemples visuels de transformations
            ============================================ */}
        <ServiceRealisationsSection
          title="Le pouvoir de l'enduit : Avant / Après"
          realisations={projetsRealises}
          voirToutLink="/realisations"
          voirToutText="Voir toutes nos réalisations"
          variant="gray"
        />

        {/* Cas client mis en avant */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
              <div className="md:w-1/3 relative aspect-square md:aspect-auto">
                <Image
                  src={casClient.image}
                  alt={casClient.titre}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <div className="uppercase tracking-wide text-sm text-brand-orange font-bold mb-2">
                  Cas Client : Délais courts
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {casClient.titre}
                </h3>
                <div className="text-slate-600 mb-6 space-y-2">
                  <p>
                    <strong>Le défi :</strong> {casClient.defi}
                  </p>
                  <p>
                    <strong>La solution :</strong> {casClient.solution}
                  </p>
                  <p>
                    <strong>Résultat :</strong> {casClient.resultat}
                  </p>
                </div>
                <Link
                  href="/realisations"
                  className="text-brand-blue font-bold hover:underline inline-flex items-center"
                >
                  Voir le dossier complet
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
          </div>
        </section>

        {/* ============================================
            BLOC MARCHÉS PUBLICS - Focus admin
            Section dédiée aux acheteurs publics avec documents disponibles
            ============================================ */}
        <MarchesPublicsSection
          avantages={marchesPublicsAvantagesData}
          documents={documentsMarchesPublicsData}
        />

        {/* ============================================
            FAQ ENDUITS
            Répond aux questions courantes sur les enduits et la propreté
            ============================================ */}
        <ServiceFAQSection
          title="Vos questions fréquentes"
          items={faqItems}
          variant="white"
        />

        {/* ============================================
            CTA FINAL - Demande de devis
            Section d'appel à l'action final pour convertir le visiteur
            ============================================ */}
        <CtaBlock
          titre="Vos murs méritent la perfection."
          description="Ne confiez pas vos finitions au hasard. Devis gratuit sous 48h. Intervention sur Strasbourg, CUS et tout le Bas-Rhin."
          texteDevis="Obtenir mon devis maintenant"
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
        devisText="Devis Enduits"
      />

      {/* ============================================
          DONNÉES STRUCTURÉES SEO
          Schema.org pour améliorer le référencement
          ============================================ */}
      <ServiceStructuredData
        serviceName="Enduits & Finitions"
        serviceDescription="Plâtrerie fine et enduits de finition à Strasbourg : ratissage Q4, enduit projeté Airless, finitions décoratives. Chantier propre garanti, site occupé."
        serviceUrl="/services/enduits-finitions"
        serviceType="Plâtrerie fine"
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Enduits & Finitions", url: "/services/enduits-finitions" },
        ]}
      />
    </>
  );
}

