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

/* Éléments de la barre de confiance spécifique enduits/finitions */
const barreConfianceItems = [
  { valeur: "RGE", label: "Qualibat Reconnu" },
  { valeur: "10 Ans", label: "Garantie Décennale" },
  { valeur: "Q4", label: "Finition Premium" },
  { valeur: "48h", label: "Devis Rapide" },
];

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
    badgeColor: "purple",
    iconeColor: "purple",
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
    image: "https://placehold.co/800x600/f8fafc/475569?text=Appartement+Haussmannien+Ratissage",
  },
  {
    titre: "Salle du Conseil - Mairie",
    lieu: "Bas-Rhin",
    type: "Marché Public",
    description: "Enduit Airless mécanisé pour uniformité parfaite.",
    image: "https://placehold.co/800x600/f8fafc/475569?text=Salle+Conseil+Mairie+Airless",
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
  image: "https://placehold.co/600x600/f97316/ffffff?text=École+Schiltigheim+400m²",
};

/* Documents disponibles pour les marchés publics */
const documentsMarchesPublics = [
  { titre: "Attestation RGE", disponibilite: "Disponible" },
  { titre: "Décennale", disponibilite: "Disponible" },
  { titre: "Fiches techniques enduits", disponibilite: "Sur demande" },
  { titre: "Références chantiers publics", disponibilite: "Sur demande" },
];

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
        <section className="relative bg-slate-900 overflow-hidden min-h-[650px] flex items-center">
          {/* Image de fond avec overlay pour la lisibilité du texte */}
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-30"
              src="https://placehold.co/1920x1080/cbd5e1/1e293b?text=Macro+Mur+Blanc+Lisse+Lumiere+Rasante"
              alt="Finition enduit Q4 lumière rasante Strasbourg Alsace"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          </div>

          {/* Contenu du hero */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
            <div className="max-w-3xl">
              {/* Badges RGE et intervention site occupé */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30 uppercase tracking-wide">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Certifié RGE
                </Badge>
                <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                  Intervention Site Occupé & Milieu Scolaire
                </Badge>
              </div>

              {/* Titre principal - promesse de valeur */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Plâtrerie fine et{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                  Enduits de finition
                </span>{" "}
                en Alsace.
              </h1>

              {/* Sous-titre explicatif avec mention DTU */}
              <p className="text-lg md:text-xl text-slate-300 mb-8 font-light max-w-2xl">
                Du ratissage complet (Q4) à l&apos;enduit mécanisé Airless. La
                préparation indispensable selon le{" "}
                <strong className="text-white">DTU 59.1</strong> pour des
                peintures sublimées.
              </p>

              {/* Boutons d'action principaux */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-orange hover:bg-orange-600 text-white shadow-lg"
                >
                  <a href="#devis">Demander un chiffrage (48h)</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-400 text-slate-200 hover:bg-white hover:text-slate-900"
                >
                  <a href="#realisations">Voir nos réalisations</a>
                </Button>
              </div>

              {/* Micro-réassurance */}
              <p className="mt-6 text-xs text-slate-400 uppercase tracking-wide">
                Pour Particuliers & Marchés Publics (Strasbourg - Bas-Rhin)
              </p>
            </div>
          </div>
        </section>

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
                <img
                  src="https://placehold.co/800x1000/e2e8f0/64748b?text=GAUCHE:+Mur+Brut+|+DROITE:+Finition+Miroir"
                  alt="Comparaison mur brut vs enduit lissé"
                  className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutionsEnduits.map((solution) => (
                <Card
                  key={solution.id}
                  className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    {/* Icône du type de solution */}
                    <div
                      className={`w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 transition-colors ${
                        solution.iconeColor === "blue"
                          ? "group-hover:bg-brand-blue"
                          : solution.iconeColor === "orange"
                          ? "group-hover:bg-brand-orange"
                          : solution.iconeColor === "purple"
                          ? "group-hover:bg-purple-600"
                          : "group-hover:bg-green-600"
                      }`}
                    >
                      <svg
                        className={`w-6 h-6 transition-colors ${
                          solution.iconeColor === "blue"
                            ? "text-brand-blue group-hover:text-white"
                            : solution.iconeColor === "orange"
                            ? "text-brand-orange group-hover:text-white"
                            : solution.iconeColor === "purple"
                            ? "text-purple-600 group-hover:text-white"
                            : "text-green-600 group-hover:text-white"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {solution.id === "ratissage" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        )}
                        {solution.id === "airless" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        )}
                        {solution.id === "decoratif" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        )}
                        {solution.id === "reparation" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        )}
                      </svg>
                    </div>

                    {/* Titre et description */}
                    <CardTitle className="text-xl mb-2">
                      {solution.titre}
                    </CardTitle>
                    <CardDescription className="text-sm mb-4">
                      {solution.description}
                    </CardDescription>

                    {/* Badge cible client */}
                    <div className="border-t border-slate-200 pt-3">
                      <Badge
                        variant="secondary"
                        className={`text-xs font-semibold ${
                          solution.badgeColor === "blue"
                            ? "text-brand-blue bg-blue-50"
                            : solution.badgeColor === "orange"
                            ? "text-brand-orange bg-orange-50"
                            : solution.badgeColor === "purple"
                            ? "text-purple-600 bg-purple-50"
                            : "text-green-600 bg-green-50"
                        }`}
                      >
                        {solution.badge}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
              <div className="relative">
                <img
                  src="https://placehold.co/800x600/1e40af/93c5fd?text=Chantier+Protege+Baches+Sol+Machine+Aspirante"
                  alt="Chantier enduit propre Strasbourg avec protection et aspiration"
                  className="rounded-xl shadow-2xl border-4 border-white/20"
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
        <section className="py-16 md:py-24 bg-slate-50" id="realisations">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Le pouvoir de l&apos;enduit :{" "}
              <span className="text-brand-blue">Avant / Après</span>
            </h2>

            {/* Grille des projets */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {projetsRealises.map((projet) => (
                <div
                  key={projet.titre}
                  className="bg-white p-4 rounded-xl shadow-sm border border-slate-200"
                >
                  <div className="relative h-64 w-full overflow-hidden rounded mb-4 group">
                    <img
                      src={projet.image}
                      alt={projet.titre}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Badge type de projet */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-brand-orange text-white uppercase">
                        {projet.type}
                      </Badge>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-slate-800">
                    {projet.titre}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {projet.lieu} • {projet.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Cas client mis en avant */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={casClient.image}
                  alt={casClient.titre}
                  className="h-full w-full object-cover"
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
                  Nous connaissons vos impératifs pour les travaux de finition
                  en milieu scolaire ou bâtiments administratifs. Tous nos
                  documents sont à jour.
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
                <Button
                  asChild
                  className="bg-slate-800 text-white hover:bg-slate-900"
                >
                  <a href="mailto:marches@ar-solution.fr">
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
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            FAQ ENDUITS
            Répond aux questions courantes sur les enduits et la propreté
            ============================================ */}
        <section className="py-16 md:py-24 bg-white border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Vos questions fréquentes
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-bold text-slate-800">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">
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
        <section
          className="py-20 md:py-24 bg-slate-900 text-center px-4"
          id="devis"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Vos murs méritent la perfection.
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              Ne confiez pas vos finitions au hasard. Devis gratuit sous 48h.
              <br />
              Intervention sur Strasbourg, CUS et tout le Bas-Rhin.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-brand-orange hover:bg-orange-600 text-white text-xl font-bold shadow-lg"
            >
              <Link href="/contact">Obtenir mon devis maintenant</Link>
            </Button>

            {/* Logos garanties */}
            <div className="mt-12 flex justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
              <img
                src="https://placehold.co/100x50/334155/fff?text=RGE"
                alt="RGE"
                className="h-12"
              />
              <img
                src="https://placehold.co/100x50/334155/fff?text=Decennale"
                alt="Garantie Décennale"
                className="h-12"
              />
              <img
                src="https://placehold.co/100x50/334155/fff?text=Qualibat"
                alt="Qualibat"
                className="h-12"
              />
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
          <a href="#devis">Devis Enduits</a>
        </Button>
      </div>
    </>
  );
}

