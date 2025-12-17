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
            {/* Overlay gradient pour améliorer la lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-900/40" />
          </div>

          {/* Contenu du hero */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl">
              {/* Badges de localisation et certifications */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <Badge 
                  variant="outline" 
                  className="bg-brand-orange/20 text-brand-orange border-brand-orange/30 uppercase tracking-wide"
                >
                  Strasbourg & Alsace
                </Badge>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-white bg-white/10 border-white/20">
                    RGE Qualibat
                  </Badge>
                  <Badge variant="outline" className="text-white bg-white/10 border-white/20">
                    Décennale
                  </Badge>
                </div>
              </div>

              {/* Titre principal - promesse de valeur */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Travaux de Plâtrerie, Isolation & Finitions.
              </h1>

              {/* Sous-titre explicatif */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 font-light">
                Votre interlocuteur unique pour la rénovation intérieure.
                Fiabilité technique, certifications RGE et respect strict des
                délais.
              </p>

              {/* Boutons d'action principaux */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg"
                >
                  <a href="#contact">Demander un devis gratuit</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-brand-blue backdrop-blur-sm"
                >
                  <Link href="/marches-publics">Accès Acheteurs Publics</Link>
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
        <section className="py-16 md:py-24 bg-white" id="profils">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Titre de la section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">
                À qui s&apos;adresse notre expertise ?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Des solutions adaptées aux contraintes techniques et
                administratives de chaque acteur.
              </p>
            </div>

            {/* Grille des 3 cartes profils */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {profilsClients.map((profil) => (
                <Card
                  key={profil.id}
                  className="group relative overflow-hidden hover:shadow-xl transition-all duration-200 flex flex-col focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2"
                >
                  {/* Image de la carte */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={profil.image}
                      alt={profil.titre}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Contenu de la carte */}
                  <CardContent className="p-6 flex-1 flex flex-col">
                    {profil.badge && (
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 uppercase">
                          {profil.badge}
                        </Badge>
                      </div>
                    )}
                    <CardTitle className="text-xl text-brand-blue mb-2">
                      {profil.titre}
                    </CardTitle>
                    <CardDescription className="text-sm mb-6 flex-1">
                      {profil.description}
                    </CardDescription>
                    <Link
                      href={profil.lien}
                      className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded transition-colors"
                      aria-label={`${profil.lienTexte} - ${profil.titre}`}
                    >
                      {profil.lienTexte} <span className="ml-2" aria-hidden="true">→</span>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            APERÇU SERVICES - Les 4 domaines d'intervention
            Présente les services principaux avec liens vers les pages détaillées
            ============================================ */}
        <section className="py-16 bg-gray-100" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Titre de la section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">
                Nos domaines d&apos;intervention en Alsace
              </h2>
              <p className="text-gray-600">
                Une maîtrise technique complète pour le second œuvre.
              </p>
            </div>

            {/* Grille des 4 cartes services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="hover:border-brand-orange transition-colors duration-200 focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2"
                >
                  <CardContent className="p-6">
                    {/* Icône du service */}
                    <div
                      className={`w-12 h-12 ${
                        service.iconeColor === "orange"
                          ? "bg-orange-100 text-brand-orange"
                          : "bg-blue-100 text-brand-blue"
                      } rounded-lg flex items-center justify-center mb-4`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </div>
                    {/* Titre et prestations */}
                    <CardTitle className="text-lg text-brand-blue mb-2">
                      {service.titre}
                    </CardTitle>
                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                      {service.prestations.map((prestation) => (
                        <li key={prestation}>• {prestation}</li>
                      ))}
                    </ul>
                    <Link
                      href={service.lien}
                      className="text-sm font-semibold text-brand-orange hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded transition-colors inline-flex items-center"
                      aria-label={`En savoir plus sur ${service.titre}`}
                    >
                      En savoir plus <span className="ml-1" aria-hidden="true">→</span>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            PORTFOLIO AVANT/APRÈS - Preuve visuelle
            Montre un exemple de réalisation avec comparaison avant/après
            ============================================ */}
        <section className="py-16 bg-white" id="realisations">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête avec titre et lien vers portfolio */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-brand-blue mb-2">
                  Nos réalisations parlent pour nous
                </h2>
                <p className="text-gray-600">
                  Découvrez la qualité de nos finitions sur des chantiers
                  récents.
                </p>
              </div>
              <Link
                href="/realisations"
                className="hidden md:inline-flex items-center mt-4 md:mt-0 text-brand-orange font-semibold hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded transition-colors"
                aria-label="Explorer le portfolio de réalisations"
              >
                Explorer le portfolio <span className="ml-1" aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Zone de comparaison avant/après (placeholder pour futur slider) */}
            <div className="relative w-full h-[500px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg group">
              {/* Image de fond (résultat après travaux) */}
              <img
                src="https://placehold.co/1200x800?text=Resultat+Final+Impeccable"
                alt="Après rénovation"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Badge d'information sur le projet */}
              <Card className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm z-20 max-w-sm border-0 shadow-lg">
                <CardContent className="p-4">
                  <CardTitle className="text-brand-blue">
                    Rénovation complète Appartement
                  </CardTitle>
                  <CardDescription>
                    Strasbourg Neudorf • Plâtrerie, Isolation & Peinture
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Indicateur visuel du slider (curseur de comparaison) */}
              <div className="absolute inset-y-0 left-1/2 w-1 bg-white cursor-ew-resize z-10 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-brand-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Lien mobile vers le portfolio */}
            <div className="mt-8 text-center md:hidden">
              <Link
                href="/realisations"
                className="inline-flex items-center text-brand-orange font-bold hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded transition-colors"
                aria-label="Voir toutes les réalisations"
              >
                Voir toutes les réalisations
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================
            POURQUOI NOUS + MÉTHODE
            Section en 2 colonnes : arguments de différenciation à gauche, méthode de travail à droite
            ============================================ */}
        <section className="py-16 bg-gray-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Colonne gauche : Pourquoi nous choisir */}
              <div>
                <h2 className="text-3xl font-bold text-brand-blue mb-8">
                  Pourquoi choisir AR+SOLUTION ?
                </h2>
                <div className="space-y-6">
                  {argumentsChoix.map((argument) => (
                    <div key={argument.titre} className="flex items-start">
                      {/* Icône check vert */}
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-600">
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* Texte de l'argument */}
                      <div className="ml-4">
                        <h4 className="text-lg font-bold text-brand-blue">
                          {argument.titre}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {argument.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Colonne droite : Méthode de travail (stepper) */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-brand-blue border-b border-gray-100 pb-4">
                    Notre méthode de travail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Timeline verticale */}
                  <div className="relative border-l-2 border-brand-orange/30 ml-3 space-y-8">
                    {etapesMethode.map((etape) => (
                      <div key={etape.numero} className="relative pl-8">
                        {/* Point orange sur la timeline */}
                        <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-brand-orange border-2 border-white" />
                        <h5 className="font-bold text-gray-900">
                          {etape.numero}. {etape.titre}
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          {etape.description}
                        </p>
                      </div>
                    ))}
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
          className="py-20 bg-brand-blue text-white"
          id="marches-publics"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Contenu texte */}
              <div className="lg:w-1/2">
                <span className="inline-block bg-blue-800 text-blue-200 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                  Espace Collectivités
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Acheteurs Publics : un partenaire conforme et réactif.
                </h2>
                <p className="text-blue-100 mb-8 text-lg">
                  Nous connaissons vos contraintes. AR+SOLUTION structure ses
                  offres pour répondre aux exigences des marchés publics
                  (Écoles, Mairies, Bâtiments administratifs).
                </p>

                {/* Liste des avantages */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-brand-orange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Dossiers administratifs RGE & Assurances à jour</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-brand-orange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Expérience en site occupé et bâtiments ERP</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-brand-orange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Interlocuteur unique dédié aux marchés</span>
                  </div>
                </div>

                {/* CTA email */}
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-blue hover:bg-gray-100"
                >
                  <a href="mailto:marches@ar-solution.fr">
                    Contacter le service Marchés Publics
                  </a>
                </Button>
              </div>

              {/* Grille des documents disponibles */}
              <div className="lg:w-1/2 bg-blue-800/50 p-8 rounded-xl border border-blue-700">
                <div className="grid grid-cols-2 gap-4">
                  {documentsMarchesPublics.map((doc) => (
                    <Card
                      key={doc.titre}
                      className="bg-brand-blue border-blue-600 flex flex-col items-center text-center"
                    >
                      <CardContent className="p-4">
                        {/* Icône document */}
                        <svg
                          className="w-8 h-8 text-gray-400 mb-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <CardTitle className="text-sm text-white">{doc.titre}</CardTitle>
                        <CardDescription className="text-xs text-blue-300 mt-1">
                          {doc.disponibilite}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            AVIS CLIENTS + ZONE D'INTERVENTION
            Section en 2 colonnes : avis Google à gauche, carte zone à droite (SEO local)
            ============================================ */}
        <section className="py-16 bg-white" id="avis">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Colonne gauche : Avis Google */}
              <div>
                <h2 className="text-2xl font-bold text-brand-blue mb-6">
                  Ce que disent nos clients
                </h2>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  {/* Note globale */}
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-400 text-xl">★★★★★</span>
                    <span className="ml-2 font-bold text-gray-900">4.8/5</span>
                    <span className="ml-2 text-sm text-gray-500">
                      sur Google Avis
                    </span>
                  </div>

                  {/* Liste des avis */}
                  <div className="space-y-4">
                    {avisClients.map((avis, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <p className="text-muted-foreground italic text-sm">
                            &ldquo;{avis.texte}&rdquo;
                          </p>
                          <p className="text-xs text-muted-foreground mt-2 font-bold">
                            - {avis.auteur} ({avis.ville})
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <a
                    href="#avis"
                    className="block text-center mt-4 text-sm text-brand-blue font-semibold underline hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded transition-colors inline-block"
                    aria-label="Voir tous les avis clients"
                  >
                    Voir tous les avis
                  </a>
                </div>
              </div>

              {/* Colonne droite : Zone d'intervention */}
              <div>
                <h2 className="text-2xl font-bold text-brand-blue mb-6">
                  Zone d&apos;intervention
                </h2>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 h-full">
                  <p className="text-gray-700 mb-4">
                    Basée à <strong>Strasbourg</strong>, notre équipe intervient
                    dans tout le <strong>Bas-Rhin (67)</strong> pour vos projets
                    de rénovation.
                  </p>
                  {/* Liste des villes */}
                  <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-6">
                    {villesIntervention.map((ville) => (
                      <li key={ville} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2" />
                        {ville}
                      </li>
                    ))}
                  </ul>
                  {/* Placeholder carte */}
                  <div className="w-full h-32 bg-gray-200 rounded overflow-hidden">
                    <img
                      src="https://placehold.co/600x200?text=Carte+Alsace+Strasbourg"
                      alt="Carte Zone Intervention"
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            FAQ + FORMULAIRE DE CONTACT
            FAQ accordéon puis formulaire de demande de devis
            ============================================ */}
        <section className="py-16 bg-gray-100" id="contact">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* FAQ Accordéon - Répond aux questions courantes avant le formulaire */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-brand-blue mb-6 text-center">
                Questions Fréquentes
              </h2>

              <FAQ />
            </div>

            {/* Formulaire de demande de devis - Le visiteur peut envoyer sa demande */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-t-4 border-brand-orange">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-brand-blue mb-2">
                  Parlez-nous de votre projet
                </h2>
                <p className="text-gray-500">
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
          <a href="#contact">Devis Gratuit</a>
        </Button>
      </div>
    </>
  );
}
