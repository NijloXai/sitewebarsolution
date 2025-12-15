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
  - Un formulaire de contact dédié marchés publics

  L'utilisateur peut :
  - Naviguer rapidement entre les sections via la navigation sticky
  - Voir les références de chantiers publics
  - Comprendre la méthode et les engagements
  - Contacter l'entreprise via le formulaire ou par téléphone
  - Demander les pièces administratives
*/

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* Métadonnées spécifiques à la page Marchés Publics pour le référencement */
export const metadata: Metadata = {
  title: "Marchés Publics - Plâtrerie, Isolation & Finitions | AR+SOLUTION Strasbourg",
  description:
    "Expertise en plâtrerie, isolation et finitions pour marchés publics à Strasbourg et en Alsace. Intervention en site occupé, respect des délais, certifié RGE.",
};

/* Badges de réassurance affichés dans le hero - certifications clés pour les acheteurs publics */
const badgesReassurance = [
  { label: "Qualibat RGE", icon: "✓" },
  { label: "Garantie Décennale", icon: "✓" },
  { label: "RC Pro à jour", icon: "✓" },
];

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
    couleurBadge: "bg-orange-500",
  },
  {
    titre: "Hôtel de Ville - Sélestat",
    type: "Administration",
    description: "Cloisons modulaires & Peinture • Site occupé",
    couleurBadge: "bg-slate-800",
  },
  {
    titre: "Complexe Sportif - Illkirch",
    type: "Sport & Loisirs",
    description: "Isolation thermique par l'intérieur • RGE",
    couleurBadge: "bg-orange-500",
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

/* Options du formulaire de contact - types de demandes possibles */
const typesDemande = [
  "Demande de chiffrage / Devis",
  "Invitation Appel d'Offres",
  "Demande documents administratifs",
  "Autre renseignement",
];

export default function MarchesPublicsPage() {
  return (
    <>
      {/* Header - Navigation principale sticky */}
      <Header pageActive="marches-publics" />

      {/* ============================================
          HERO - Section d'accroche pour les acheteurs publics
          Affiche les badges de confiance et le message principal
          ============================================ */}
      <section className="relative flex min-h-[600px] items-center bg-slate-900 mt-20">
        {/* Fond décoratif - motif géométrique évoquant un chantier */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Motif de grille évoquant un plan de construction */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
          {/* Accent orange subtil */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange-500/10 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 pt-10">
          <div className="max-w-3xl text-white">
            {/* Badges de réassurance - certifications clés visibles immédiatement */}
            <div className="mb-6 flex flex-wrap gap-3">
              {badgesReassurance.map((badge) => (
                <span
                  key={badge.label}
                  className="flex items-center gap-2 rounded border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur"
                >
                  <span className="text-green-400">{badge.icon}</span> {badge.label}
                </span>
              ))}
            </div>

            {/* Titre principal optimisé pour le référencement */}
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Travaux de plâtrerie, isolation & finitions
              <br />
              <span className="text-orange-500">Marchés publics Strasbourg / Alsace</span>
            </h1>

            {/* Proposition de valeur - ce qui différencie l'entreprise */}
            <p className="mb-8 text-xl font-light text-slate-200">
              Intervention en <strong>site occupé</strong>, respect strict des délais et conformité
              administrative. Nous répondons aux appels d'offres et marchés à bons de commande sur
              toute l'Alsace.
            </p>

            {/* Boutons d'action principaux */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="transform rounded bg-orange-500 px-8 py-4 text-center font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-600"
              >
                Contacter pour un marché public
              </a>
              <a
                href="#administratif"
                className="rounded border border-white/30 bg-white/10 px-8 py-4 text-center font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                📄 Dossier Administratif
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          NAVIGATION STICKY - Navigation rapide intra-page
          Permet aux acheteurs pressés d'accéder directement aux sections
          ============================================ */}
      <div className="sticky top-0 z-40 hidden border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur md:block">
        <div className="container mx-auto px-4">
          <ul className="flex gap-8 py-4 text-sm font-medium text-slate-600">
            {navigationSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="border-b-2 border-transparent pb-1 transition hover:border-orange-500 hover:text-slate-900"
                >
                  {section.label}
                </a>
              </li>
            ))}
            <li className="ml-auto">
              <a href="#contact" className="font-bold text-orange-500">
                Demander un chiffrage →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <main>
        {/* ============================================
            SECTION PRESTATIONS - Les 4 lots proposés
            Présente les domaines d'expertise pour les marchés publics
            ============================================ */}
        <section id="lots" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/* Titre et introduction de la section */}
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Vos lots Plâtrerie, Isolation et Finitions en Alsace
              </h2>
              <p className="text-slate-500">
                Nous intervenons sur des lots séparés ou groupés pour la rénovation thermique et
                l'aménagement intérieur de bâtiments publics (Écoles, Bureaux, Gymnases, Mairies).
              </p>
            </div>

            {/* Grille des 4 cartes de prestations */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {prestationsLots.map((lot) => (
                <div
                  key={lot.titre}
                  className="group rounded-xl border border-slate-100 bg-slate-50 p-8 transition hover:shadow-lg"
                >
                  {/* Icône du lot */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-2xl text-orange-500 shadow-sm transition group-hover:bg-orange-500 group-hover:text-white">
                    {lot.icon}
                  </div>

                  {/* Titre du lot */}
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{lot.titre}</h3>

                  {/* Liste des services inclus */}
                  <ul className="space-y-2 text-sm text-slate-500">
                    {lot.services.map((service) => (
                      <li key={service}>• {service}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Lien vers le formulaire de contact */}
            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="inline-flex items-center font-bold text-slate-900 transition hover:text-orange-500"
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
        <section id="references" className="bg-slate-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/* En-tête avec titre et lien vers le portfolio complet */}
            <div className="mb-12 flex flex-col items-end justify-between md:flex-row">
              <div>
                <h2 className="mb-2 text-3xl font-bold text-slate-900 md:text-4xl">
                  Réalisations en secteur public
                </h2>
                <p className="text-slate-500">Exemples de chantiers livrés en Alsace.</p>
              </div>
              <Link
                href="/realisations"
                className="mt-4 hidden font-semibold text-orange-500 hover:underline md:mt-0 md:inline-block"
              >
                Voir tout le portfolio
              </Link>
            </div>

            {/* Grille des 3 références principales */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {referencesPubliques.map((ref) => (
                <div
                  key={ref.titre}
                  className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md"
                >
                  {/* Image placeholder - à remplacer par de vraies photos */}
                  <div className="h-64 w-full bg-slate-300 transition duration-500 group-hover:scale-105">
                    <div className="flex h-full items-center justify-center text-slate-500">
                      [Photo: {ref.titre}]
                    </div>
                  </div>

                  {/* Overlay avec informations du projet */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6">
                    <span
                      className={`mb-2 w-fit rounded px-2 py-1 text-xs font-bold text-white ${ref.couleurBadge}`}
                    >
                      {ref.type}
                    </span>
                    <h3 className="text-lg font-bold text-white">{ref.titre}</h3>
                    <p className="text-sm text-slate-300">{ref.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Lien mobile vers le portfolio */}
            <div className="mt-8 text-center md:hidden">
              <Link
                href="/realisations"
                className="font-semibold text-orange-500 hover:underline"
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
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              {/* Colonne gauche : argumentaire site occupé et engagements */}
              <div>
                <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
                  Une gestion de chantier adaptée aux contraintes du service public
                </h2>
                <p className="mb-8 text-lg text-slate-500">
                  Nous comprenons que vos bâtiments doivent souvent rester fonctionnels pendant les
                  travaux. Notre organisation est rodée pour minimiser l'impact sur les usagers.
                </p>

                {/* Encadré spécial "Site Occupé" */}
                <div className="mb-8 rounded-r-lg border-l-4 border-slate-900 bg-blue-50 p-6">
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    👥 Expertise en milieu occupé
                  </h3>
                  <p className="text-sm text-slate-700">
                    Gestion stricte des nuisances sonores, barrières anti-poussière et adaptation
                    des horaires d'intervention pour assurer la{" "}
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
              <div className="relative space-y-12 border-l-2 border-slate-200 pl-8">
                {etapesTimeline.map((etape) => (
                  <div key={etape.numero} className="relative">
                    {/* Point de la timeline */}
                    <span
                      className={`absolute -left-[41px] h-6 w-6 rounded-full border-4 bg-white ${
                        etape.actif ? "border-slate-900" : "border-slate-300"
                      }`}
                    />
                    <h4 className="text-lg font-bold text-slate-900">
                      {etape.numero}. {etape.titre}
                    </h4>
                    <p className="text-sm text-slate-500">{etape.description}</p>
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
        <section id="administratif" className="border-y border-slate-200 bg-slate-100 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between gap-8 rounded-xl bg-white p-8 shadow-sm md:flex-row md:p-12">
              {/* Texte explicatif et badges */}
              <div className="md:w-2/3">
                <h2 className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl">
                  Dossier administratif & Garanties
                </h2>
                <p className="mb-6 text-slate-500">
                  Nous savons que la conformité administrative est un pré-requis bloquant. Tous nos
                  documents sont à jour et disponibles immédiatement pour valider votre dossier.
                </p>

                {/* Badges des certifications */}
                <div className="mb-6 flex flex-wrap gap-4">
                  {garantiesAdministratives.map((garantie) => (
                    <div
                      key={garantie.label}
                      className="flex items-center gap-2 rounded border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700"
                    >
                      <span className="text-orange-500">{garantie.icon}</span> {garantie.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bouton de téléchargement des pièces administratives */}
              <div className="text-center md:w-1/3">
                <button className="flex w-full items-center justify-center gap-3 rounded bg-slate-900 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-slate-800">
                  ⬇ Demander les pièces administratives
                </button>
                <p className="mt-3 text-xs text-slate-500">🕐 Envoi par email sous 24h</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION ZONE & FAQ - Intervention et questions fréquentes
            Deux colonnes : carte de la zone + FAQ pour les acheteurs
            ============================================ */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto grid grid-cols-1 gap-16 px-4 lg:grid-cols-2">
            {/* Colonne gauche : Zone d'intervention */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Intervention sur Strasbourg et toute l'Alsace
              </h2>
              <p className="mb-6 text-slate-500">
                Basés au cœur de l'Alsace, nous intervenons avec réactivité pour les collectivités
                de l'Eurométropole et du Bas-Rhin.
              </p>

              {/* Placeholder pour la carte */}
              <div className="mb-6 flex h-64 items-center justify-center rounded-lg bg-slate-100 p-1">
                <span className="text-slate-400">[Carte Zone Intervention Alsace]</span>
              </div>

              <p className="text-sm font-semibold text-slate-700">
                📍 Strasbourg, Schiltigheim, Illkirch, Haguenau, Sélestat...
              </p>
            </div>

            {/* Colonne droite : FAQ pour les acheteurs */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Questions fréquentes des acheteurs
              </h2>

              <div className="space-y-4">
                {faqAcheteurs.map((faq, index) => (
                  <details
                    key={index}
                    className="group rounded-lg border border-slate-200 bg-slate-50"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-medium text-slate-900">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180">▼</span>
                    </summary>
                    <div className="mt-2 px-4 pb-4 text-sm text-slate-600">{faq.reponse}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION CONTACT - Formulaire et coordonnées
            CTA final pour convertir les acheteurs intéressés
            ============================================ */}
        <section id="contact" className="bg-slate-900 py-16 text-white md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:grid-cols-2">
              {/* Colonne gauche : Informations de contact */}
              <div className="flex flex-col justify-center">
                <h2 className="mb-6 text-3xl font-bold">
                  Vos travaux de plâtrerie et rénovation en toute confiance
                </h2>
                <p className="mb-8 text-lg text-slate-300">
                  Vous avez un projet ou un appel d'offres à nous soumettre ? Contactez directement
                  notre pôle Marchés Publics.
                </p>

                {/* Carte du chargé d'affaires */}
                <div className="mb-8 flex items-center gap-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-orange-500 bg-slate-700 text-sm text-slate-400">
                    [Photo]
                  </div>
                  <div>
                    <p className="text-lg font-bold">M. Stéphane [Nom]</p>
                    <p className="text-sm text-slate-400">Responsable Marchés Publics</p>
                    <a
                      href="tel:0388000000"
                      className="mt-2 block text-xl font-bold text-orange-500 transition hover:text-white"
                    >
                      03 88 00 00 00
                    </a>
                    <a
                      href="mailto:appels-offres@arsolution.fr"
                      className="block text-slate-300 transition hover:text-white"
                    >
                      appels-offres@arsolution.fr
                    </a>
                  </div>
                </div>
              </div>

              {/* Colonne droite : Formulaire de contact */}
              <div className="rounded-xl bg-white p-6 text-slate-800 shadow-2xl md:p-8">
                <form className="space-y-4">
                  {/* Ligne 1 : Organisme et Nom */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1 block text-xs font-bold uppercase text-slate-500">
                        Organisme
                      </label>
                      <input
                        type="text"
                        placeholder="Mairie, École..."
                        className="w-full rounded border border-slate-300 bg-slate-50 p-3 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-bold uppercase text-slate-500">
                        Nom du contact
                      </label>
                      <input
                        type="text"
                        placeholder="Votre nom"
                        className="w-full rounded border border-slate-300 bg-slate-50 p-3 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Ligne 2 : Email et Téléphone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1 block text-xs font-bold uppercase text-slate-500">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="email@organisme.fr"
                        className="w-full rounded border border-slate-300 bg-slate-50 p-3 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-bold uppercase text-slate-500">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        placeholder="03 88..."
                        className="w-full rounded border border-slate-300 bg-slate-50 p-3 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Type de demande */}
                  <div>
                    <label className="mb-1 block text-xs font-bold uppercase text-slate-500">
                      Type de demande
                    </label>
                    <select className="w-full rounded border border-slate-300 bg-slate-50 p-3 focus:border-orange-500 focus:outline-none">
                      {typesDemande.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Bouton d'envoi */}
                  <button
                    type="submit"
                    className="mt-2 w-full rounded bg-orange-500 py-4 font-bold text-white transition hover:bg-orange-600"
                  >
                    Envoyer ma demande
                  </button>
                  <p className="mt-2 text-center text-xs text-slate-400">
                    Réponse garantie sous 24h/48h.
                  </p>
                </form>
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
        <a
          href="tel:0388000000"
          className="flex-1 flex items-center justify-center bg-gray-100 text-brand-blue font-bold py-3 rounded-lg"
        >
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
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center bg-brand-orange text-white font-bold py-3 rounded-lg shadow-md"
        >
          Devis Gratuit
        </Link>
      </div>
    </>
  );
}

