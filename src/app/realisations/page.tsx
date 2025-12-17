/*
  Page Réalisations (Portfolio) du site AR+SOLUTION.
  
  Cette page présente les projets réalisés par l'entreprise pour prouver
  son savoir-faire auprès des visiteurs. Elle montre :
  - Des photos de chantiers terminés avec possibilité de voir avant/après
  - Des projets pour particuliers ET pour collectivités (marchés publics)
  - Les différents métiers maîtrisés (Isolation, Plâtrerie, Aménagement)
  
  L'utilisateur peut :
  - Filtrer les réalisations par type de client ou par métier
  - Cliquer sur un projet pour voir les détails
  - Accéder à l'espace Marchés Publics
  - Demander un devis via les boutons d'action
  - Appeler directement l'agence
*/

import Link from "next/link";
import Header from "@/components/Header";
import CtaBlock from "@/components/CtaBlock";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* ============================================
   DONNÉES DE LA PAGE
   ============================================ */

/* Types de filtres pour le type de client */
const filtresClient = [
  { id: "tous", label: "Tous", actif: true },
  { id: "particuliers", label: "Particuliers", icone: "users" },
  { id: "public", label: "Secteur Public", icone: "building" },
];

/* Types de filtres pour les métiers */
const filtresMetier = [
  { id: "isolation", label: "Isolation" },
  { id: "platrerie", label: "Plâtrerie" },
  { id: "amenagement", label: "Aménagement" },
];

/* Liste des réalisations à afficher dans le portfolio */
const realisations = [
  {
    id: "combles-krutenau",
    titre: "Rénovation complète de combles",
    metier: "Isolation & Plâtrerie",
    lieu: "Strasbourg Krutenau",
    secteur: "particulier",
    description:
      "Défi : Créer une suite parentale sous toiture. Résultat : Gain thermique R=7 et acoustique optimisée.",
    avantApres: true,
    image: "https://placehold.co/600x400?text=Combles+Krutenau+Apres",
  },
  {
    id: "ecole-maternelle",
    titre: "Réfection acoustique - École Maternelle",
    metier: "Faux-Plafonds",
    lieu: "Eurométropole",
    secteur: "public",
    description:
      "Intervention en site occupé durant les vacances scolaires. Mise aux normes feu et acoustique.",
    avantApres: false,
    image: "https://placehold.co/600x400?text=Ecole+Maternelle+Strasbourg",
  },
  {
    id: "maison-selestat",
    titre: "Rénovation thermique maison ancienne",
    metier: "Isolation Intérieure",
    lieu: "Sélestat",
    secteur: "particulier",
    description:
      "Traitement des ponts thermiques et doublage des murs. Finition enduit lisse prêt à peindre.",
    avantApres: false,
    image: "https://placehold.co/600x400?text=Isolation+Maison+Alsacienne",
  },
  {
    id: "bureaux-illkirch",
    titre: "Aménagement plateau de bureaux",
    metier: "Cloisons & Plâtrerie",
    lieu: "Illkirch-Graffenstaden",
    secteur: "particulier",
    description:
      "Création de 8 bureaux individuels et salle de réunion. Isolation phonique renforcée entre les espaces.",
    avantApres: true,
    image: "https://placehold.co/600x400?text=Bureaux+Illkirch",
  },
  {
    id: "mairie-obernai",
    titre: "Rénovation salle des fêtes",
    metier: "Plâtrerie & Peinture",
    lieu: "Obernai",
    secteur: "public",
    description:
      "Réfection complète des plafonds et murs. Travaux réalisés en 3 semaines pendant fermeture estivale.",
    avantApres: true,
    image: "https://placehold.co/600x400?text=Salle+Fetes+Obernai",
  },
  {
    id: "appartement-neudorf",
    titre: "Rénovation appartement T4",
    metier: "Isolation & Finitions",
    lieu: "Strasbourg Neudorf",
    secteur: "particulier",
    description:
      "Isolation des murs par l'intérieur, création de rangements et mise en peinture complète.",
    avantApres: false,
    image: "https://placehold.co/600x400?text=Appartement+Neudorf",
  },
];

/* Logos des collectivités partenaires (marchés publics) */
const logosCollectivites = [
  { nom: "Ville de Strasbourg", image: "https://placehold.co/200x80?text=Ville+de+Strasbourg" },
  { nom: "Région Grand Est", image: "https://placehold.co/200x80?text=Region+Grand+Est" },
  { nom: "Opus 67", image: "https://placehold.co/200x80?text=Opus+67" },
  { nom: "Eurométropole", image: "https://placehold.co/200x80?text=Eurometropole" },
];

/* Certifications et garanties affichées dans la barre de réassurance */
const certifications = [
  { nom: "RGE Qualibat", abrege: "RGE" },
  { nom: "Garantie Décennale", abrege: "Décennale" },
  { nom: "Responsabilité Civile Pro", abrege: "RC Pro" },
];

/* Questions fréquentes spécifiques aux réalisations */
const faqRealisations = [
  {
    question: "Intervenez-vous dans tout le Bas-Rhin ?",
    reponse:
      "Oui, notre cœur d'activité est situé sur l'Eurométropole de Strasbourg, mais nous intervenons régulièrement jusqu'à Haguenau au nord et Sélestat au sud pour des projets de rénovation complète ou des marchés publics.",
  },
  {
    question: "Comment garantissez-vous la propreté du chantier ?",
    reponse:
      "C'est notre marque de fabrique. Nous installons des protections de sol systématiques avant de commencer. Un nettoyage complet est effectué chaque soir, et un ménage de fin de chantier est inclus pour une livraison \"clés en main\".",
  },
  {
    question: "Gérez-vous les aides de l'État (MaPrimeRénov') ?",
    reponse:
      "Absolument. En tant qu'entreprise certifiée RGE (Reconnu Garant de l'Environnement), nos devis sont éligibles aux aides. Nous pouvons vous accompagner dans le montage de votre dossier administratif.",
  },
];

/* ============================================
   PAGE RÉALISATIONS
   ============================================ */

export default function PageRealisations() {
  return (
    <>
      {/* Header - Navigation principale sticky */}
      <Header pageActive="realisations" />

      {/* ============================================
          CONTENU PRINCIPAL
          ============================================ */}
      <main className="mt-20">
        {/* ============================================
            HERO SECTION - Promesse et accroche visuelle
            L'utilisateur comprend immédiatement qu'il s'agit du portfolio
            ============================================ */}
        <section className="relative bg-slate-900 overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
          {/* Image de fond avec overlay pour la lisibilité */}
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-30"
              src="https://placehold.co/1920x800?text=Chantier+Renovation+Strasbourg+Avant+Apres"
              alt="Rénovation intérieure Alsace"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
          </div>

          {/* Contenu du hero */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge localisation */}
              <span className="inline-block bg-brand-orange/20 text-brand-orange border border-brand-orange/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
                <svg
                  className="w-4 h-4 inline mr-2"
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
                Intervention à Strasbourg & dans toute l&apos;Alsace
              </span>

              {/* Titre principal */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Nos Réalisations :{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  L&apos;exigence du détail.
                </span>
              </h1>

              {/* Sous-titre explicatif */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Rénovation thermique, plâtrerie technique, aménagement :
                découvrez comment nous transformons les espaces de vie et les
                bâtiments publics. Des chantiers livrés propres, conformes et
                dans les délais.
              </p>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white">
                  <Link href="/contact">Demander un devis chiffré</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-brand-blue backdrop-blur-sm">
                  <a href="#public-focus">
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Accès Marchés Publics
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            FILTRES STICKY - Navigation rapide dans le portfolio
            Permet de filtrer par type de client et par métier
            ============================================ */}
        <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Compteur de projets (visible desktop) */}
              <div className="text-sm font-bold text-gray-500 whitespace-nowrap hidden lg:block">
                <span className="text-brand-blue">{realisations.length}</span>{" "}
                Projets réalisés
              </div>

              {/* Groupes de filtres */}
              <div className="flex overflow-x-auto w-full md:w-auto space-x-2 pb-1 md:pb-0 px-1">
                {/* Filtres par type de client */}
                <div className="flex space-x-1 border-r border-gray-200 pr-3 mr-2 shrink-0">
                  {filtresClient.map((filtre) => (
                    <button
                      key={filtre.id}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                        filtre.actif
                          ? "bg-slate-800 text-white shadow-md"
                          : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-brand-blue"
                      }`}
                    >
                      {filtre.icone === "users" && (
                        <svg
                          className="w-4 h-4 inline mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                          />
                        </svg>
                      )}
                      {filtre.icone === "building" && (
                        <svg
                          className="w-4 h-4 inline mr-1"
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
                      {filtre.label}
                    </button>
                  ))}
                </div>

                {/* Filtres par métier */}
                <div className="flex space-x-1 shrink-0">
                  {filtresMetier.map((filtre) => (
                    <button
                      key={filtre.id}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-300 text-gray-600 hover:border-brand-orange hover:text-brand-orange transition-colors whitespace-nowrap"
                    >
                      {filtre.label}
                    </button>
                  ))}
                </div>

                {/* Bouton reset filtres */}
                <button
                  className="ml-auto px-3 py-2 text-gray-400 hover:text-red-500 transition-colors"
                  title="Réinitialiser les filtres"
                >
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            GRILLE DES RÉALISATIONS - Portfolio visuel
            Affiche les cartes projets avec images, métiers et descriptions
            ============================================ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Grille de cartes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {realisations.map((projet) => (
                <Card
                  key={projet.id}
                  className={`group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full ${
                    projet.secteur === "public"
                      ? "ring-2 ring-transparent hover:ring-brand-blue/20"
                      : ""
                  }`}
                >
                  {/* Image du projet */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={projet.image}
                      alt={projet.titre}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Badge Avant/Après si disponible */}
                    {projet.avantApres && (
                      <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-800 shadow-sm">
                        <svg
                          className="w-3 h-3 inline mr-1 text-brand-orange"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        Avant / Après dispo
                      </Badge>
                    )}

                    {/* Badge secteur (Particulier ou Marché Public) */}
                    <Badge
                      className={`absolute bottom-4 right-4 ${
                        projet.secteur === "public"
                          ? "bg-brand-blue text-white shadow-lg"
                          : "bg-brand-orange text-white"
                      }`}
                    >
                      {projet.secteur === "public" && (
                        <svg
                          className="w-3 h-3 inline mr-1"
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
                      {projet.secteur === "public"
                        ? "Marché Public"
                        : "Particulier"}
                    </Badge>
                  </div>

                  {/* Contenu de la carte */}
                  <CardContent className="p-6 flex-1 flex flex-col">
                    {/* Métier et lieu */}
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <span className="uppercase tracking-wider font-semibold text-brand-blue">
                        {projet.metier}
                      </span>
                      <span className="mx-2">•</span>
                      <svg
                        className="w-3 h-3 inline mr-1"
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
                      </svg>
                      {projet.lieu}
                    </div>

                    {/* Titre du projet */}
                    <CardTitle className="text-xl mb-3 text-slate-800 group-hover:text-brand-blue transition-colors">
                      {projet.titre}
                    </CardTitle>

                    {/* Description courte */}
                    <p
                      className={`text-gray-600 text-sm mb-4 border-l-4 pl-3 italic ${
                        projet.secteur === "public"
                          ? "border-brand-blue"
                          : "border-brand-orange"
                      }`}
                    >
                      &ldquo;{projet.description}&rdquo;
                    </p>

                    {/* Lien vers le projet détaillé */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <Link
                        href={`/realisations/${projet.id}`}
                        className="inline-flex items-center font-semibold text-brand-blue hover:text-brand-orange transition-colors"
                      >
                        Voir le projet complet
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
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bouton charger plus */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                <svg
                  className="w-5 h-5 inline mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Charger plus de réalisations
              </Button>
            </div>
          </div>
        </section>

        {/* ============================================
            FOCUS MARCHÉS PUBLICS - Espace dédié aux collectivités
            Rassure les acheteurs publics avec les compétences et les références
            ============================================ */}
        <section
          id="public-focus"
          className="py-16 bg-gradient-to-br from-slate-100 to-white border-y border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Colonne texte */}
              <div className="lg:w-1/2">
                <span className="inline-block bg-brand-blue/10 text-brand-blue font-bold px-3 py-1 rounded-full text-sm mb-4">
                  <svg
                    className="w-4 h-4 inline mr-2"
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
                  Espace Collectivités & Bailleurs
                </span>

                <h2 className="text-3xl font-bold mb-6 text-slate-800">
                  Partenaire de confiance des{" "}
                  <span className="text-brand-blue">
                    Collectivités Alsaciennes
                  </span>
                </h2>

                <p className="text-gray-600 mb-8 text-lg">
                  Nous comprenons les exigences spécifiques des marchés publics.
                  Au-delà de la technique, nous garantissons une gestion
                  administrative rigoureuse et un respect absolu des normes ERP.
                </p>

                {/* Liste des avantages */}
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0"
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
                    <div>
                      <strong className="text-slate-800">
                        Gestion administrative maîtrisée
                      </strong>
                      <p className="text-sm text-gray-500">
                        Dossiers d&apos;appels d&apos;offres, DOE, PPSPS.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0"
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
                    <div>
                      <strong className="text-slate-800">
                        Intervention en site occupé
                      </strong>
                      <p className="text-sm text-gray-500">
                        Sécurité des usagers (écoles, bureaux) et discrétion.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0"
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
                    <div>
                      <strong className="text-slate-800">
                        Respect des délais et budgets
                      </strong>
                      <p className="text-sm text-gray-500">
                        Pas de dépassement, planning tenu.
                      </p>
                    </div>
                  </li>
                </ul>

                {/* CTA vers page Marchés Publics */}
                <Button asChild className="bg-brand-blue hover:bg-blue-800 text-white shadow-md">
                  <Link href="/marches-publics">
                    Contacter notre référent Marchés Publics
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </Button>
              </div>

              {/* Colonne logos collectivités */}
              <div className="lg:w-1/2 w-full">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
                  {/* Élément décoratif */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-orange/10 rounded-full blur-xl" />

                  <h4 className="text-sm font-bold text-gray-400 uppercase mb-6 tracking-wider text-center">
                    Ils nous font confiance
                  </h4>

                  {/* Grille de logos */}
                  <div className="grid grid-cols-2 gap-8 items-center">
                    {logosCollectivites.map((logo) => (
                      <img
                        key={logo.nom}
                        src={logo.image}
                        alt={logo.nom}
                        className="mx-auto grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            BARRE DE RÉASSURANCE - Certifications et garanties
            Rappel rapide des garanties pour rassurer avant le CTA final
            ============================================ */}
        <section className="py-10 bg-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Logos certifications */}
              <div className="flex items-center gap-6">
                {certifications.map((cert) => (
                  <div
                    key={cert.nom}
                    className="bg-white/10 p-2 rounded text-xs font-bold text-center w-16 h-16 flex items-center justify-center border border-white/20"
                  >
                    {cert.abrege === "Décennale" ? (
                      <>
                        Garantie
                        <br />
                        Décennale
                      </>
                    ) : cert.abrege === "RC Pro" ? (
                      <>
                        RC
                        <br />
                        Pro
                      </>
                    ) : (
                      <>
                        RGE
                        <br />
                        Qualibat
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Texte central */}
              <div className="text-center md:text-left">
                <p className="font-medium text-lg">
                  <svg
                    className="w-5 h-5 inline mr-2 text-brand-orange"
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
                  Entreprise certifiée et assurée
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Tous nos chantiers sont couverts. Attestations à jour
                  disponibles sur simple demande.
                </p>
              </div>

              {/* Lien vers certificats */}
              <div>
                <a
                  href="/a-propos"
                  className="text-sm text-white underline hover:text-brand-orange transition-colors"
                >
                  <svg
                    className="w-4 h-4 inline mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Voir nos certificats
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            FAQ MINI - Questions sur les réalisations
            Répond aux questions courantes pour lever les derniers freins
            ============================================ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-10 text-slate-800">
              Questions fréquentes sur nos réalisations
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqRealisations.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-lg px-4 data-[state=open]:ring-2 data-[state=open]:ring-brand-blue/20 data-[state=open]:bg-white transition-all"
                >
                  <AccordionTrigger className="text-slate-800 hover:text-brand-blue font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm">
                    {item.reponse}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ============================================
            CTA FINAL - Appel à l'action pour demander un devis
            Dernière incitation avant de quitter la page
            ============================================ */}
        <CtaBlock
          titre="Un projet à Strasbourg ou en Alsace ? Parlons-en."
          description="Que vous soyez un particulier ou une collectivité, nous avons l'équipe adaptée à votre échelle. Devis gratuit sous 5 jours."
          texteDevis="Demander mon devis gratuit"
          texteTelephone="Appeler l'agence"
        />
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
          <Link href="/contact">Devis Gratuit</Link>
        </Button>
      </div>
    </>
  );
}

