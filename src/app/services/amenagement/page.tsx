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

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* ============================================
   DONNÉES DE LA PAGE
   ============================================ */

/* Éléments de la barre de confiance spécifique aménagement/peinture */
const barreConfianceItems = [
  { valeur: "A+", label: "Peintures Écolabel" },
  { valeur: "10 Ans", label: "Garantie Décennale" },
  { valeur: "0%", label: "Tache Garantie" },
  { valeur: "Alsace", label: "Strasbourg & Environs" },
];

/* Prestations pour le profil Résidentiel (B2C) */
const prestationsResidentiel = [
  {
    id: "deco",
    titre: "Peinture Décorative",
    description:
      "Murs, plafonds et boiseries. Conseils colorimétriques pour harmoniser votre intérieur. Finitions mates, velours ou satinées selon la luminosité et l'usage de la pièce.",
    iconeColor: "blue",
  },
  {
    id: "preparation",
    titre: "Préparation & Lissage",
    description:
      "Pour un résultat \"miroir\" comme sur nos photos, une préparation des murs (ratissage) est souvent nécessaire avant la peinture de finition.",
    iconeColor: "orange",
    lienTexte: "Voir notre expertise Enduit",
    lien: "/services/enduits-finitions",
    badge: "Indispensable",
  },
  {
    id: "finitions",
    titre: "Finitions Techniques",
    description:
      "Peintures lessivables pour cuisines, solutions anti-humidité pour salles de bains, ou peintures dépolluantes (capteurs de formaldéhyde) pour chambres d'enfants.",
    iconeColor: "blue",
  },
];

/* Prestations pour le profil Tertiaire (B2B) */
const prestationsTertiaire = [
  {
    id: "airless",
    titre: "Grands Volumes & Airless",
    description:
      "Application mécanisée (pistolet Airless) pour bureaux, cages d'escalier et locaux blancs. Rapidité d'exécution et homogénéité parfaite du film de peinture.",
    iconeColor: "blue",
  },
  {
    id: "bureaux",
    titre: "Rénovation de Bureaux",
    description:
      "Remise en état locative ou modernisation. Intervention possible en horaires décalés pour minimiser l'impact sur votre activité commerciale.",
    iconeColor: "blue",
  },
  {
    id: "erp",
    titre: "Normes ERP & Sécurité",
    description:
      "Utilisation de peintures spécifiques pour ERP (Écoles, Crèches) : Classement au feu, labels environnementaux stricts, facilité d'entretien.",
    iconeColor: "blue",
  },
];

/* Points de qualité des finitions (différence artisan pro) */
const detailsFinitions = [
  {
    titre: 'Le "Rechampi" net',
    description:
      "Des lignes de séparation murs/plafonds tranchées au rasoir, sans aucune bavure, même sur supports texturés.",
    image: "https://placehold.co/400x400?text=Zoom+Rechampi+Net",
  },
  {
    titre: 'Le "Tendu" parfait',
    description:
      'Pas de trace de reprise ni de texture "peau d\'orange". Une application uniforme grâce à un lissage fin préalable.',
    image: "https://placehold.co/400x400?text=Surface+Tendue+Sans+Trace",
  },
  {
    titre: "Plinthes & Boiseries",
    description:
      "Pas de gouttes au sol. Réalisation de joints acryliques propres avant peinture pour une finition hermétique.",
    image: "https://placehold.co/400x400?text=Plinthes+Protect+Joints",
  },
];

/* Étapes de la méthode de protection */
const etapesProtection = [
  {
    titre: "Protection intégrale",
    description:
      "Sols, parquets et mobilier restant sont couverts par du polyane et scotch de masquage pro.",
  },
  {
    titre: "Démontage soigné",
    description:
      "Nous démontons caches de prises et radiateurs pour peindre derrière, pas autour.",
  },
  {
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
    image: "https://placehold.co/600x400?text=Bureaux+Strasbourg+Centre",
  },
  {
    titre: "Mise en teinte & Déco",
    lieu: "Neudorf",
    type: "Résidentiel",
    image: "https://placehold.co/600x400?text=Appart+Neudorf+Couleur",
  },
  {
    titre: "Rénovation Cage d'Escalier (Airless)",
    lieu: "Schiltigheim",
    type: "Copropriété",
    image: "https://placehold.co/600x400?text=Cage+Escalier+Airless",
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
        <section className="relative bg-slate-900 min-h-[85vh] flex items-center overflow-hidden">
          {/* Image de fond avec overlay pour la lisibilité du texte */}
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-50"
              src="https://placehold.co/1920x1080/1e293b/FFF?text=Interieur+Qualitatif+Mur+Terracotta"
              alt="Peinture intérieure salon Strasbourg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          </div>

          {/* Contenu du hero */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-3xl">
              {/* Badge Argument Santé */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30 uppercase tracking-wide">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Peintures Écolabel / A+
                </Badge>
              </div>

              {/* Titre principal - promesse de valeur */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Peinture Intérieure & Haute Décoration à{" "}
                <span className="text-brand-orange">Strasbourg</span>.
              </h1>

              {/* Sous-titre explicatif */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 font-light">
                De la remise en blanc soignée aux mises en teintes complexes.
                Pour vos bureaux, locaux commerciaux et habitations.
              </p>

              {/* Boutons d'action principaux */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg"
                >
                  <a href="#devis">
                    Demander mon devis peinture
                    <svg
                      className="w-5 h-5 ml-2"
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
                </Button>
                <span className="text-sm text-slate-300 mt-2 sm:mt-4 flex items-center bg-slate-800/50 px-3 py-2 rounded">
                  <svg
                    className="w-4 h-4 mr-1 text-brand-orange"
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
                  Intervention possible en site occupé & meublé
                </span>
              </div>
            </div>
          </div>
        </section>

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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {prestationsResidentiel.map((prestation) => (
                  <Card
                    key={prestation.id}
                    className={`${
                      prestation.badge
                        ? "bg-orange-50 border-orange-100"
                        : ""
                    } hover:shadow-lg transition duration-300 relative overflow-hidden`}
                  >
                    <CardContent className="p-8">
                      {/* Badge optionnel */}
                      {prestation.badge && (
                        <div className="absolute top-0 right-0">
                          <Badge className="bg-orange-200 text-orange-800 text-xs font-bold rounded-bl">
                            {prestation.badge}
                          </Badge>
                        </div>
                      )}

                    {/* Icône de la prestation */}
                    <div
                      className={`h-14 w-14 ${
                        prestation.iconeColor === "orange"
                          ? "bg-orange-100 text-brand-orange"
                          : "bg-blue-100 text-brand-blue"
                      } rounded-lg flex items-center justify-center mb-6`}
                    >
                      {prestation.id === "deco" && (
                        <svg
                          className="w-8 h-8"
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
                      {prestation.id === "preparation" && (
                        <svg
                          className="w-8 h-8"
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
                          className="w-8 h-8"
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
                      )}
                    </div>

                    {/* Titre et description */}
                    <CardTitle className="text-xl mb-3 text-slate-900">
                      {prestation.titre}
                    </CardTitle>
                    <CardDescription className="leading-relaxed mb-4">
                      {prestation.description}
                    </CardDescription>

                    {/* Lien optionnel */}
                    {prestation.lien && (
                      <Link
                        href={prestation.lien}
                        className="inline-flex items-center text-orange-700 font-bold hover:text-orange-800 transition"
                      >
                        {prestation.lienTexte}
                        <svg
                          className="w-4 h-4 ml-1"
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
                    )}
                  </CardContent>
                </Card>
                ))}
              </div>
            </div>

            {/* Sous-section Tertiaire */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
                <span className="bg-slate-200 text-slate-700 px-4 py-2 rounded-full">
                  Tertiaire & Collectivités
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {prestationsTertiaire.map((prestation) => (
                  <Card
                    key={prestation.id}
                    className="hover:shadow-lg transition duration-300"
                  >
                    <CardContent className="p-8">
                    {/* Icône de la prestation */}
                    <div className="h-14 w-14 bg-blue-100 text-brand-blue rounded-lg flex items-center justify-center mb-6">
                      {prestation.id === "airless" && (
                        <svg
                          className="w-8 h-8"
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
                      )}
                      {prestation.id === "bureaux" && (
                        <svg
                          className="w-8 h-8"
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
                      {prestation.id === "erp" && (
                        <svg
                          className="w-8 h-8"
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
                    <CardTitle className="text-xl mb-3 text-slate-900">
                      {prestation.titre}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {prestation.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                ))}
              </div>
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
                    <img
                      src={detail.image}
                      alt={detail.titre}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
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
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Image de gauche */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://placehold.co/800x600?text=Protection+Totale+Chantier"
                    alt="Protection chantier peinture Strasbourg"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-semibold text-slate-800 shadow">
                    0% Tache garantie
                  </div>
                </div>
              </div>

              {/* Contenu texte à droite */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                  Nous protégeons votre intérieur comme le nôtre
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  La rénovation fait peur car elle est synonyme de poussière.
                  Nous changeons la donne avec un protocole strict.
                </p>

                <ul className="space-y-4">
                  {etapesProtection.map((etape) => (
                    <li key={etape.titre} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1 mr-4">
                        <svg
                          className="w-4 h-4"
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
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">
                          {etape.titre}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {etape.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            RÉALISATIONS - Avant/Après
            Inspiration & Preuve sociale
            ============================================ */}
        <section className="py-16 md:py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête de la section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Ils ont redonné vie à leurs murs
                </h2>
                <p className="text-slate-400">
                  Exemples de transformations récentes en Alsace.
                </p>
              </div>
              <Link
                href="/realisations"
                className="hidden md:inline-flex items-center text-brand-orange font-semibold hover:text-orange-400 mt-4 md:mt-0"
              >
                Voir tous les chantiers
                <svg
                  className="w-4 h-4 ml-1"
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

            {/* Grille des projets */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projetsRealises.map((projet) => (
                <div
                  key={projet.titre}
                  className="group relative overflow-hidden rounded-xl bg-slate-800"
                >
                  <img
                    src={projet.image}
                    alt={projet.titre}
                    className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
                    <Badge
                      variant="secondary"
                      className={`${
                        projet.type === "Résidentiel"
                          ? "text-blue-400"
                          : "text-brand-orange"
                      } text-xs font-bold uppercase tracking-wider mb-1`}
                    >
                      {projet.type}
                    </Badge>
                    <h3 className="text-lg font-bold">
                      {projet.titre} - {projet.lieu}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Lien mobile */}
            <div className="mt-8 text-center md:hidden">
              <Link
                href="/realisations"
                className="text-brand-orange font-semibold hover:text-orange-400"
              >
                Voir tous les chantiers →
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================
            FAQ PEINTURE/AMÉNAGEMENT
            Levée de doutes techniques
            ============================================ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-blue">
              Questions fréquentes
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-slate-800">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm leading-relaxed">
                    {item.reponse}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Logos Marques partenaires (Réassurance subtile) */}
            <div className="mt-16 text-center">
              <p className="text-sm text-slate-500 mb-6 uppercase tracking-widest font-semibold">
                Nos partenaires confiance
              </p>
              <div className="flex justify-center items-center gap-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition duration-500">
                {marquesPartenaires.map((marque) => (
                  <img
                    key={marque.nom}
                    src={marque.logo}
                    alt={`Peinture ${marque.nom}`}
                    className="h-10 w-auto"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            CTA FINAL - Demande de devis
            Appel à l'action final pour convertir le visiteur
            ============================================ */}
        <section className="py-20 bg-gray-50 border-t border-gray-200" id="devis">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
              {/* Portrait dirigeant */}
              <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://placehold.co/150x150?text=Portrait+Dirigeant"
                  alt="Artisan peintre Strasbourg"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                Prêt à changer d&apos;ambiance ?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Obtenez un devis gratuit, détaillé et sans surprise pour vos
                travaux de peinture à Strasbourg et environs.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-lg shadow-lg"
                >
                  <Link href="/contact">Obtenir un chiffrage</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white hover:bg-slate-50 text-slate-900 border-slate-300 font-bold text-lg shadow"
                >
                  <a href="tel:0388000000">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    03 88 00 00 00
                  </a>
                </Button>
              </div>
            </div>
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
          className="flex-1 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold shadow-md"
        >
          <a href="#devis">Devis Peinture</a>
        </Button>
      </div>
    </>
  );
}

