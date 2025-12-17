/*
  Page Ressources / Blog du site AR+SOLUTION.
  
  Cette page présente les articles, conseils et guides experts pour la rénovation.
  Elle sert de hub de contenu pour le SEO et l'autorité métier.
  
  L'utilisateur peut :
  - Rechercher un article via la barre de recherche
  - Filtrer les articles par thématique (Isolation, Plâtrerie, Marchés Publics, etc.)
  - Filtrer par profil (Particulier, Pro, Collectivités)
  - Lire l'article en vedette du mois
  - Parcourir la grille des derniers articles
  - Accéder aux CTA (Devis ou Marchés Publics)
*/

import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

/* ============================================
   DONNÉES DE LA PAGE
   ============================================ */

/* Catégories pour le filtrage des articles */
const categoriesFiltres = [
  { id: "tout", label: "Tout voir", actif: true },
  { id: "isolation", label: "Isolation & Thermique", actif: false },
  { id: "platrerie", label: "Plâtrerie & Finitions", actif: false },
  { id: "marches-publics", label: "🏛️ Marchés Publics", actif: false, special: true },
  { id: "aides", label: "Aides & RGE", actif: false },
];

/* Options de filtrage par profil */
const profilsFiltres = [
  { value: "all", label: "Tous les profils" },
  { value: "particulier", label: "Particulier / Copro" },
  { value: "pro", label: "Mairie / Architecte" },
];

/* Article en vedette (dossier du mois) */
const articleVedette = {
  categorie: "Réglementation & RGE",
  tempsLecture: "7 min",
  titre: "RGE & Marchés Publics : Les nouvelles normes de rénovation en Alsace",
  description:
    "Mairies, collectivités, syndics : les critères d'attribution évoluent. Découvrez ce qui change pour vos bâtiments communaux et comment sécuriser vos appels d'offres énergétiques dans le Bas-Rhin.",
  image: "https://placehold.co/800x600?text=Chantier+RGE+Etablissement+Public",
  lien: "#",
};

/* Liste des articles pour la grille */
const articles = [
  {
    id: 1,
    categorie: "Isolation",
    titre: "Isolation thermique vs phonique : que choisir à Strasbourg ?",
    description:
      "Entre bruits de rue et hivers rigoureux, le choix des matériaux est crucial. Comparatif des solutions laine de verre vs laine de roche adaptées au bâti alsacien.",
    cible: "Particuliers",
    tempsLecture: "5 min",
    image: "https://placehold.co/600x400?text=Laine+de+verre+vs+Roche",
    lien: "#",
    couleurHover: "orange",
  },
  {
    id: 2,
    categorie: "Aides & Financement",
    titre: "MaPrimeRénov' & CEE : Comment s'y retrouver en Alsace ?",
    description:
      "Guide informatif : Cumul des aides, zones éligibles dans l'Eurométropole et erreurs administratives à éviter avant de signer vos devis.",
    cible: "Tous publics",
    tempsLecture: "8 min",
    image: "https://placehold.co/600x400?text=Dossier+MaPrimeRenov",
    lien: "#",
    couleurHover: "orange",
  },
  {
    id: 3,
    categorie: "Plâtrerie",
    titre: "Comment reconnaître un bon plaquiste à Strasbourg ? (Checklist)",
    description:
      "Joints invisibles, propreté du chantier, respect des délais... Les 5 points de contrôle pour éviter les mauvaises surprises sur vos finitions.",
    cible: "Particuliers & Pros",
    tempsLecture: "4 min",
    image: "https://placehold.co/600x400?text=Finitions+Plaquiste+Pro",
    lien: "#",
    couleurHover: "orange",
  },
  {
    id: 4,
    categorie: "Finitions",
    titre: "Avant/Après : ce que révèle un enduit de qualité (Ratissage)",
    description:
      "Pourquoi la préparation des murs change tout au rendu final de votre peinture. Focus technique sur le ratissage complet.",
    cible: "Technique",
    tempsLecture: "3 min",
    image: "https://placehold.co/600x400?text=Mur+Avant+Apres+Enduit",
    lien: "#",
    couleurHover: "orange",
  },
  {
    id: 5,
    categorie: "Marchés Publics",
    titre: "Mairies : Préparer une consultation \"Travaux de Finitions\"",
    description:
      "CCTP, allotissement, critères RGE : comment structurer votre appel d'offre pour attirer des entreprises fiables et réactives.",
    cible: "Collectivités",
    tempsLecture: "6 min",
    image: "https://placehold.co/600x400?text=Consultation+Mairie+Travaux",
    lien: "#",
    couleurHover: "blue",
    special: true,
  },
  {
    id: 6,
    categorie: "Conseils Rénovation",
    titre: "Rénover avant l'hiver en Alsace : priorités et erreurs à éviter",
    description:
      "Faut-il changer ses fenêtres ou isoler les combles en priorité ? Planning idéal pour gagner en confort thermique dès décembre.",
    cible: "Particuliers",
    tempsLecture: "4 min",
    image: "https://placehold.co/600x400?text=Chantier+Hiver+Alsace",
    lien: "#",
    couleurHover: "orange",
  },
];

/* Éléments de réassurance pour le bloc CTA final */
const reassuranceItems = [
  "Certifié RGE Qualibat",
  "Garantie Décennale",
  "Entreprise Alsacienne",
];

/* ============================================
   PAGE RESSOURCES
   ============================================ */

export default function PageRessources() {
  return (
    <>
      {/* Header - Navigation principale sticky */}
      <Header pageActive="ressources" />

      {/* ============================================
          CONTENU PRINCIPAL
          ============================================ */}
      <main className="mt-20">
        {/* ============================================
            SECTION 1 : HERO - Bibliothèque d'Expertise
            Présente le but de la page avec une barre de recherche
            ============================================ */}
        <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
          {/* Image de fond avec overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://placehold.co/1920x800?text=Texture+Enduit+ou+Chantier+Propre+Alsace"
              alt="Fond chantier rénovation"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60" />
          </div>

          {/* Contenu du hero */}
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            {/* Badge d'introduction */}
            <Badge className="bg-orange-600/20 text-orange-400 border-orange-600/30 mb-4">
              Blog & Expertise Technique
            </Badge>

            {/* Titre principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Conseils & Expertises en{" "}
              <span className="text-brand-orange">Rénovation</span> & Isolation
              en Alsace
            </h1>

            {/* Sous-titre explicatif */}
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Décrypter les normes (RGE), optimiser vos travaux et sécuriser vos
              chantiers à Strasbourg. La ressource technique pour propriétaires
              et décideurs publics.
            </p>

            {/* Barre de recherche */}
            <div className="max-w-xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <Input
                type="text"
                className="pl-10 py-4 bg-white text-slate-900 placeholder-slate-500 focus-visible:ring-brand-orange shadow-xl"
                placeholder="Rechercher un sujet (ex: RGE, Plâtrerie, CEE...)"
                aria-label="Rechercher dans les articles"
              />
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 2 : NAVIGATION & FILTRAGE
            Permet de filtrer les articles par thématique et par profil
            ============================================ */}
        <section className="bg-white border-b border-slate-200 sticky top-20 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Filtres Thématiques (boutons) */}
              <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0 scrollbar-hide">
                {categoriesFiltres.map((categorie) => (
                  <button
                    key={categorie.id}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition ${
                      categorie.actif
                        ? "bg-slate-900 text-white shadow-sm ring-2 ring-slate-900"
                        : categorie.special
                        ? "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {categorie.label}
                  </button>
                ))}
              </div>

              {/* Filtre Profil (select) */}
              <div className="flex items-center space-x-2 text-sm text-slate-500 border-l border-slate-200 pl-0 md:pl-6">
                <span className="hidden lg:inline">Filtrer par profil :</span>
                <select className="bg-transparent font-semibold text-slate-700 focus:outline-none cursor-pointer">
                  {profilsFiltres.map((profil) => (
                    <option key={profil.value} value={profil.value}>
                      {profil.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 3 : ARTICLE EN VEDETTE (La Une)
            Met en avant le dossier du mois pour l'autorité SEO
            ============================================ */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-4">
          <Card className="shadow-lg overflow-hidden flex flex-col lg:flex-row">
            {/* Image de l'article en vedette */}
            <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <img
                src={articleVedette.image}
                alt="Rénovation énergétique bâtiment public Alsace"
                className="w-full h-full object-cover"
              />
              {/* Badge "Dossier du Mois" */}
              <Badge className="absolute top-4 left-4 bg-brand-orange text-white shadow">
                Dossier du Mois
              </Badge>
            </div>

            {/* Contenu de l'article en vedette */}
            <CardContent className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              {/* Métadonnées */}
              <div className="flex items-center space-x-2 mb-4 text-sm text-slate-500 font-medium">
                <span className="text-blue-700">{articleVedette.categorie}</span>
                <span>•</span>
                <span>Temps de lecture : {articleVedette.tempsLecture}</span>
              </div>

              {/* Titre */}
              <CardTitle className="text-3xl text-slate-900 mb-4 leading-tight">
                {articleVedette.titre}
              </CardTitle>

              {/* Description */}
              <p className="text-slate-600 mb-8 leading-relaxed">
                {articleVedette.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-4">
                <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white">
                  <a href={articleVedette.lien}>
                    Lire le dossier complet
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ============================================
            SECTION 4 : GRILLE D'ARTICLES
            Affiche les derniers conseils et analyses en grille de cartes
            ============================================ */}
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4">
            {/* En-tête de la section */}
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-2xl font-bold text-slate-900">
                Derniers conseils & analyses
              </h2>
              <a
                href="/ressources"
                className="text-brand-orange font-semibold text-sm hover:underline hidden sm:block"
              >
                Voir toute la bibliothèque →
              </a>
            </div>

            {/* Grille des articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className={`group hover:shadow-xl transition-all duration-300 flex flex-col h-full ${
                    article.special ? "ring-1 ring-blue-100" : ""
                  }`}
                >
                  {/* Image de l'article */}
                  <div className="relative overflow-hidden rounded-t-xl h-48">
                    <img
                      src={article.image}
                      alt={article.titre}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    />
                    {/* Badge catégorie */}
                    <Badge
                      className={`absolute top-3 left-3 ${
                        article.special
                          ? "bg-blue-100 text-blue-800"
                          : "bg-white/90 backdrop-blur text-slate-700"
                      }`}
                    >
                      {article.categorie}
                    </Badge>
                  </div>

                  {/* Contenu de l'article */}
                  <CardContent className="p-6 flex-1 flex flex-col">
                    {/* Titre */}
                    <CardTitle
                      className={`text-xl text-slate-900 mb-3 transition ${
                        article.special
                          ? "group-hover:text-blue-700"
                          : "group-hover:text-brand-orange"
                      }`}
                    >
                      {article.titre}
                    </CardTitle>

                    {/* Description */}
                    <p className="text-slate-500 text-sm mb-4 line-clamp-3">
                      {article.description}
                    </p>

                    {/* Pied de carte */}
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-xs text-slate-400 font-medium">
                        {article.cible} • {article.tempsLecture}
                      </span>
                      <span
                        className={`text-sm font-semibold group-hover:translate-x-1 transition-transform ${
                          article.special
                            ? "text-blue-700"
                            : "text-brand-orange"
                        }`}
                      >
                        Lire →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bouton charger plus */}
            <div className="mt-12 text-center">
              <Button variant="outline">Charger plus d&apos;articles</Button>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 5 : BLOC CTA FINAL
            Segmente les visiteurs entre Devis privé et Marchés Publics
            ============================================ */}
        <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
          {/* Élément décoratif */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-orange opacity-20 blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            {/* Titre */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vous avez un projet de rénovation ou un marché à attribuer ?
            </h2>

            {/* Sous-titre */}
            <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto">
              Nous intervenons dans tout le Bas-Rhin pour des travaux certifiés
              RGE. Réactivité administrative et technique garantie.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              {/* CTA PRINCIPAL : Devis */}
              <Button asChild size="lg" className="w-full md:w-auto bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg shadow-orange-900/50 flex flex-col items-center">
                <Link href="/contact">
                  <span>Demander un devis gratuit</span>
                  <span className="text-xs font-normal opacity-90 mt-1">
                    Réponse sous 48h
                  </span>
                </Link>
              </Button>

              {/* Séparateur mobile */}
              <span className="md:hidden text-slate-500 font-sm">- ou -</span>

              {/* CTA SECONDAIRE : Marchés Publics */}
              <Button asChild variant="outline" size="lg" className="w-full md:w-auto border-2 border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 flex flex-col items-center">
                <Link href="/marches-publics">
                  <span>Espace Marchés Publics / Mairies</span>
                  <span className="text-xs font-normal opacity-90 text-slate-400 mt-1">
                    Contact Bureau d&apos;études dédié
                  </span>
                </Link>
              </Button>
            </div>

            {/* Réassurance rapide */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-400 font-medium">
              {reassuranceItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-500"
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
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer réutilisable */}
      <Footer />

      {/* ============================================
          BARRE STICKY MOBILE
          Affichée uniquement sur mobile pour accès rapide aux CTA
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

