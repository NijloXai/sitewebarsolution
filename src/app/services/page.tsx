/*
  Page Services Hub - Vue d'ensemble de tous les services AR+SOLUTION
  
  L'utilisateur voit :
  - Un en-tête avec la promesse principale et les badges de confiance (RGE, Décennale)
  - Une grille de 4 cartes présentant chaque service (Plâtrerie, Isolation, Peinture, Aménagement)
  - Une section dédiée aux marchés publics pour les collectivités
  - La méthode de travail en 4 étapes claires
  - Un aperçu des dernières réalisations
  - Les raisons de choisir AR+SOLUTION avec une FAQ rapide
  - Un bloc final pour demander un devis

  L'utilisateur peut :
  - Cliquer sur une carte service pour accéder à la page détaillée
  - Accéder à l'espace marchés publics
  - Consulter les réalisations
  - Lire les réponses aux questions fréquentes
  - Demander un devis gratuit via le CTA
*/

import Link from "next/link";
import CtaBlock from "@/components/CtaBlock";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import GridScan from "@/components/GridScan";

/* ========================================
   DONNÉES DES 4 SERVICES PRINCIPAUX
   Chaque carte affiche un aperçu du service avec lien vers la page détaillée
======================================== */
const servicesData = [
  {
    id: "platrerie",
    title: "Plâtrerie & Faux-plafonds",
    accroche: "Redistribuez vos volumes sans gros œuvre.",
    tag: "TECHNIQUE",
    tagColor: "bg-blue-600",
    image: "https://placehold.co/600x400?text=Platrerie+Plafond",
    imageAlt: "Travaux de plâtrerie et faux-plafonds",
    points: [
      "Cloisons sèches & distribution",
      "Faux-plafonds design/acoustiques",
      "Doublage des murs",
    ],
    lien: "/services/platrerie",
  },
  {
    id: "isolation",
    title: "Isolation Thermique & Phonique",
    accroche: "Réduisez votre facture énergétique de 30%.",
    tag: "ÉCONOMIES",
    tagColor: "bg-green-600",
    image: "https://placehold.co/600x400?text=Isolation+RGE",
    imageAlt: "Travaux d'isolation thermique certifiés RGE",
    points: [
      "Laine de bois, verre ou roche",
      "Soufflage de combles",
      "Correction acoustique",
    ],
    lien: "/services/isolation",
  },
  {
    id: "peinture",
    title: "Peinture & Décoration",
    accroche: "Des murs lisses et des finitions durables.",
    tag: "FINITIONS",
    tagColor: "bg-purple-600",
    image: "https://placehold.co/600x400?text=Peinture+Finition",
    imageAlt: "Travaux de peinture et finitions",
    points: [
      "Ratissage & Lissage complet",
      "Peintures écologiques (A+)",
      "Pose de revêtements muraux",
    ],
    lien: "/services/enduits-finitions",
  },
  {
    id: "amenagement",
    title: "Aménagement Intérieur",
    accroche: "Optimisez chaque m² de votre bien.",
    tag: "ESPACE",
    tagColor: "bg-amber-500",
    image: "https://placehold.co/600x400?text=Amenagement+Combles",
    imageAlt: "Aménagement intérieur et combles",
    points: [
      "Aménagement de combles",
      "Création de placards/dressings",
      "Agencement global",
    ],
    lien: "/services/amenagement",
  },
];

/* ========================================
   DONNÉES DES AVANTAGES MARCHÉS PUBLICS
   Liste des points forts pour les collectivités et gestionnaires
======================================== */
const marchesPublicsAvantages = [
  {
    icone: "📄",
    titre: "Dossiers Administratifs Carrés",
    description: "Mémoires techniques précis, CCAP respecté à la lettre.",
  },
  {
    icone: "🏫",
    titre: "Intervention en Site Occupé / Scolaire",
    description: "Sécurisation des zones, discrétion des équipes, nettoyage quotidien.",
  },
  {
    icone: "⏱️",
    titre: "Respect strict des délais",
    description: "Planning tenu pour les ouvertures de classes ou bureaux.",
  },
];

/* ========================================
   DONNÉES DES 4 ÉTAPES DE LA MÉTHODE
   Le processus de travail expliqué simplement au client
======================================== */
const methodeEtapes = [
  {
    numero: 1,
    titre: "Contact & Visite",
    description: "Réponse sous 24h. Visite technique pour métré précis.",
    actif: true,
  },
  {
    numero: 2,
    titre: "Devis & Planning",
    description: "Devis détaillé par lot. Validation d'un planning réaliste.",
    actif: false,
  },
  {
    numero: 3,
    titre: "Travaux Soignés",
    description: "Protections installées. Chantier nettoyé chaque soir.",
    badge: "Site Occupé OK",
    actif: false,
  },
  {
    numero: 4,
    titre: "Réception",
    description: "Validation des finitions. Activation de la garantie décennale.",
    actif: false,
  },
];

/* ========================================
   DONNÉES DES RÉALISATIONS À AFFICHER
   Aperçu de 3 projets récents pour donner confiance
======================================== */
const realisationsApercu = [
  {
    id: 1,
    titre: "Rénovation complète Haussmannien",
    lieu: "Strasbourg Centre",
    description: "Plâtrerie, Corniches, Peinture",
    image: "https://placehold.co/600x500?text=Appartement+Haussmann",
  },
  {
    id: 2,
    titre: "Isolation combles perdus",
    lieu: "Obernai",
    description: "Laine soufflée, RGE, Gain 35%",
    image: "https://placehold.co/600x500?text=Isolation+Combles",
  },
  {
    id: 3,
    titre: "Réaménagement Bureaux Mairie",
    lieu: "Marché Public",
    description: "Cloisons modulaires, Faux-plafonds, Site occupé",
    image: "https://placehold.co/600x500?text=Bureaux+Mairie",
  },
];

/* ========================================
   DONNÉES DES RAISONS DE NOUS CHOISIR
   Les arguments différenciants pour convaincre le visiteur
======================================== */
const raisonsChoisir = [
  {
    icone: "🏅",
    titre: "Certifications RGE & Garanties",
    description: "Qualification Qualibat RGE pour vos aides (MaPrimeRénov'). Garantie décennale et RC Pro incluses.",
  },
  {
    icone: "🧹",
    titre: "Propreté Irréprochable",
    description: "C'est notre marque de fabrique. Protection des sols, sas anti-poussière et nettoyage quotidien.",
  },
  {
    icone: "🤝",
    titre: "Interlocuteur Unique",
    description: "Un seul chef de chantier gère la plâtrerie, l'isolation et la peinture. Pas de rejet de faute entre artisans.",
  },
];

/* ========================================
   DONNÉES DE LA FAQ RAPIDE
   Questions fréquentes avec réponses courtes pour rassurer
======================================== */
const faqRapide = [
  {
    question: "Quels sont vos délais d'intervention ?",
    reponse: "Nous intervenons généralement sous 2 à 4 semaines après signature du devis. Pour les urgences ou petits chantiers, contactez-nous.",
  },
  {
    question: "Intervenez-vous en site occupé ?",
    reponse: "Oui, c'est notre spécialité. Nous adaptons nos horaires et créons des zones de confinement pour minimiser la gêne.",
  },
  {
    question: "Gérez-vous les dossiers MaPrimeRénov' ?",
    reponse: "En tant qu'entreprise RGE, nous vous fournissons tous les justificatifs techniques nécessaires pour monter votre dossier d'aides.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header - Navigation principale sticky */}
      <Header pageActive="services" />

      <main className="mt-20">
      {/* ========================================
          SECTION 1 : HERO HEADER
          En-tête avec promesse principale, badges de confiance et boutons d'action
      ======================================== */}
      <section className="relative bg-slate-900 text-white pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Animation 3D GridScan en arrière-plan */}
        <div className="absolute inset-0">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#1e3a5f"
            gridScale={0.1}
            scanColor="#f59e0b"
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Badges de confiance : RGE, Décennale, Site Occupé */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/30 hover:bg-amber-500/20 uppercase tracking-wider">
                ✓ Certifié RGE
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 uppercase tracking-wider">
                Garantie Décennale
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 uppercase tracking-wider">
                Intervention Site Occupé
              </Badge>
            </div>

            {/* Titre principal SEO */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Nos services de rénovation intérieure & isolation{" "}
              <span className="text-amber-500">Strasbourg / Alsace</span>
            </h1>

            {/* Sous-titre accroche */}
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
              Plâtrerie, Isolation, Peinture. Nous transformons vos espaces avec une
              exigence absolue sur les finitions et la propreté. Pour les particuliers
              et les marchés publics.
            </p>

            {/* Boutons d'action : Devis et Marchés Publics */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-orange-500/30 text-lg">
                <Link href="/contact">
                  Demander mon devis gratuit →
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-slate-500 hover:border-white text-slate-300 hover:text-white">
                <Link href="/marches-publics">
                  🏛️ Accès Marchés Publics
                </Link>
              </Button>
            </div>

            {/* Mention temps de réponse */}
            <p className="mt-4 text-sm text-slate-400 flex items-center gap-2">
              ⏰ Réponse sous 24h ouvrées
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 2 : GRILLE DES SERVICES
          4 cartes présentant chaque service avec lien vers la page détaillée
      ======================================== */}
      <section className="py-20 bg-slate-50" id="services">
        <div className="container mx-auto px-4">
          {/* En-tête de section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Une expertise complète pour vos travaux de second œuvre
            </h2>
            <p className="text-slate-600">
              Nous coordonnons l'ensemble de ces lots pour vous offrir un interlocuteur
              unique et un chantier fluide.
            </p>
          </div>

          {/* Grille des 4 cartes services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service) => (
              <Card
                key={service.id}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden"
              >
                {/* Image avec tag de catégorie */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0">
                    <Badge
                      className={`${service.tagColor} text-white border-0 rounded-tr-lg rounded-bl-none`}
                    >
                      {service.tag}
                    </Badge>
                  </div>
                </div>

                {/* Contenu de la carte */}
                <CardHeader className="flex-1 flex flex-col">
                  <CardTitle className="text-xl mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-amber-500 font-medium text-sm mb-4">
                    {service.accroche}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  {/* Liste des points clés du service */}
                  <ul className="text-sm text-slate-600 space-y-2 mb-6 flex-1">
                    {service.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mt-1 mr-2">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Lien vers la page détaillée */}
                <CardFooter className="mt-auto pt-4 border-t">
                  <Button asChild variant="link" className="text-blue-600 font-semibold p-0 h-auto">
                    <Link href={service.lien} className="flex justify-between items-center w-full">
                      En savoir plus <span>→</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 3 : FOCUS MARCHÉS PUBLICS
          Section dédiée aux collectivités et gestionnaires publics
      ======================================== */}
      <section
        id="marches-publics"
        className="py-20 bg-slate-800 text-white relative overflow-hidden"
      >
        {/* Élément décoratif en arrière-plan */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-700/30 -skew-x-12 transform origin-top translate-x-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Colonne texte */}
            <div className="lg:w-1/2">
              <Badge className="bg-blue-600 text-white border-0 mb-4 uppercase">
                Espace Professionnel
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mairies, Collectivités, Gestionnaires : un partenaire fiable en Alsace
              </h2>
              <p className="text-slate-300 mb-6 text-lg">
                Nous connaissons vos contraintes. Au-delà de la technique, nous vous
                apportons la rigueur administrative et opérationnelle nécessaire aux
                marchés publics.
              </p>

              {/* Liste des avantages pour les marchés publics */}
              <ul className="space-y-4 mb-8">
                {marchesPublicsAvantages.map((avantage, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-500/20 p-2 rounded-full mr-4 text-blue-400 text-xl">
                      {avantage.icone}
                    </div>
                    <div>
                      <strong className="block text-white">{avantage.titre}</strong>
                      <span className="text-sm text-slate-400">
                        {avantage.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Bouton vers la page Marchés Publics */}
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href="/marches-publics">
                  Accéder à l'Espace Marchés Publics
                  <span className="ml-2 text-blue-600">→</span>
                </Link>
              </Button>
            </div>

            {/* Colonne image */}
            <div className="lg:w-1/2">
              <img
                src="https://placehold.co/800x600?text=Ecole+Strasbourg+Renovation"
                alt="Rénovation école Strasbourg"
                className="rounded-xl shadow-2xl border-4 border-slate-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 4 : LA MÉTHODE
          Les 4 étapes du processus de travail pour rassurer le client
      ======================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* En-tête de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Votre projet en 4 étapes claires
            </h2>
            <p className="text-slate-600">
              Fini le stress des travaux. Nous balisons chaque étape pour votre sérénité.
            </p>
          </div>

          {/* Grille des 4 étapes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Ligne de connexion horizontale (visible sur desktop) */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-slate-100 -z-10"></div>

            {methodeEtapes.map((etape) => (
              <Card key={etape.numero} className="text-center">
                <CardContent className="pt-6">
                  {/* Numéro de l'étape dans un cercle */}
                  <div
                    className={`w-16 h-16 mx-auto ${
                      etape.actif
                        ? "bg-blue-600 text-white"
                        : "bg-slate-200 text-slate-600"
                    } rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg border-4 border-white`}
                  >
                    {etape.numero}
                  </div>
                  <CardTitle className="text-lg mb-2">{etape.titre}</CardTitle>
                  <CardDescription className="text-sm">{etape.description}</CardDescription>
                  {/* Badge spécial si présent */}
                  {etape.badge && (
                    <Badge className="mt-2 bg-green-100 text-green-700 border-0">
                      {etape.badge}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 5 : RÉALISATIONS
          Aperçu de 3 projets récents pour montrer le savoir-faire
      ======================================== */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* En-tête avec lien vers toutes les réalisations */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Nos dernières réalisations en images
              </h2>
              <p className="text-slate-600">
                Interventions récentes à Strasbourg, Illkirch, Schiltigheim...
              </p>
            </div>
            <Button asChild variant="link" className="hidden md:inline-flex text-blue-600 font-bold">
              <Link href="/realisations">
                Voir toutes les réalisations →
              </Link>
            </Button>
          </div>

          {/* Grille des 3 projets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realisationsApercu.map((projet) => (
              <div
                key={projet.id}
                className="group relative overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={projet.image}
                  alt={projet.titre}
                  className="w-full h-80 object-cover transition-transform duration-500"
                />
                {/* Overlay avec informations du projet */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <span className="text-amber-500 text-xs font-bold uppercase mb-1">
                    {projet.lieu}
                  </span>
                  <h3 className="text-white font-bold text-lg">{projet.titre}</h3>
                  <p className="text-slate-300 text-sm mt-1 opacity-0 transition-opacity">
                    {projet.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Lien mobile vers toutes les réalisations */}
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="link" className="text-blue-600 font-bold">
              <Link href="/realisations">
                Voir toutes les réalisations →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 6 : POURQUOI NOUS + FAQ RAPIDE
          Arguments de différenciation et réponses aux questions fréquentes
      ======================================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Colonne gauche : Raisons de nous choisir */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Pourquoi choisir notre entreprise pour vos travaux ?
              </h2>
              <div className="space-y-6">
                {raisonsChoisir.map((raison, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 text-xl mr-4">
                      {raison.icone}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{raison.titre}</h4>
                      <p className="text-sm text-slate-600">{raison.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne droite : FAQ rapide */}
            <div className="lg:w-1/2 bg-slate-100 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold mb-6">FAQ Rapide</h3>
              <div className="space-y-4">
                {faqRapide.map((item, index) => (
                  <details
                    key={index}
                    className="group bg-white rounded-lg p-4 shadow-sm cursor-pointer"
                  >
                    <summary className="flex justify-between items-center font-medium list-none">
                      <span>{item.question}</span>
                      <span className="transition group-open:rotate-180 text-blue-600">
                        ▼
                      </span>
                    </summary>
                    <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                      {item.reponse}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 7 : CTA FINAL
          Bloc de conversion pour inciter à demander un devis
      ======================================== */}
      <CtaBlock
        titre="Prêt à lancer votre projet ?"
        description="Obtenez un chiffrage précis et gratuit pour vos travaux de rénovation ou d'isolation en Alsace. Sans engagement."
        texteTelephone="Une question ? 03 88 00 00 00"
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
          className="flex-1 bg-gray-100 text-brand-blue font-bold"
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
          className="flex-1 bg-brand-orange text-white font-bold shadow-md hover:bg-brand-orange/90"
        >
          <Link href="/contact">
            Devis Gratuit
          </Link>
        </Button>
      </div>
    </>
  );
}

