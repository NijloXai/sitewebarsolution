/*
  Page Politique de Confidentialité d'AR+SOLUTION.

  Cette page présente les informations RGPD et la gestion des données personnelles :
  - Responsable du traitement des données
  - Données collectées et finalités
  - Partage et durées de conservation
  - Cookies et sécurité informatique
  - Droits des utilisateurs (accès, rectification, suppression)

  L'utilisateur peut :
  - Comprendre comment ses données sont utilisées
  - Connaître ses droits RGPD
  - Contacter le DPO pour exercer ses droits
  - Naviguer vers les autres pages légales
*/

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/* ============================================
   METADATA SEO
   ============================================ */

export const metadata: Metadata = {
  title: "Politique de Confidentialité - AR+SOLUTION | Protection des Données",
  description:
    "Politique de confidentialité et gestion des données personnelles. Transparence totale sur l'usage de vos données pour vos projets de rénovation en Alsace. RGPD.",
};

/* ============================================
   DONNÉES DE LA PAGE
   ============================================ */

/* Les 3 points essentiels affichés en haut de page */
const pointsEssentiels = [
  {
    id: "local",
    icone: "location",
    couleur: "blue",
    titre: "Ancrage Local",
    description:
      "Vos données sont traitées par une entreprise basée à Strasbourg (Alsace) et ne sont jamais vendues à des tiers.",
  },
  {
    id: "usage",
    icone: "clipboard",
    couleur: "orange",
    titre: "Usage Strict",
    description:
      "Nous collectons uniquement les infos nécessaires pour établir vos devis, organiser les visites techniques et assurer le suivi de chantier.",
  },
  {
    id: "controle",
    icone: "check",
    couleur: "green",
    titre: "Contrôle Total",
    description:
      "Vous restez maître de vos données. Une simple demande par email suffit pour exercer votre droit à l'oubli.",
  },
];

/* Éléments du sommaire avec ancres */
const sommaireItems = [
  { id: "responsable", numero: 1, titre: "Responsable du traitement" },
  { id: "collecte", numero: 2, titre: "Collecte & Finalités" },
  { id: "partage", numero: 3, titre: "Partage & Conservation" },
  { id: "cookies", numero: 4, titre: "Cookies & Sécurité" },
  { id: "droits", numero: 5, titre: "Vos Droits" },
];

/* Informations sur l'entreprise (responsable du traitement) */
const infoEntreprise = {
  raisonSociale: "AR+SOLUTION SARL",
  siege: "Strasbourg, 67000, France",
  siret: "[NUMÉRO SIRET]",
  emailDpo: "contact@ar-solution.fr",
};

/* Tableau des données collectées */
const donneesCollectees = [
  {
    source: "Formulaire Devis",
    donnees: "Nom, Téléphone, Email, Adresse chantier",
    finalite:
      "Établissement du chiffrage, contact commercial, visite technique sur site (occupé ou vide).",
  },
  {
    source: "Navigation Site",
    donnees: "Adresse IP, Cookies, Type de navigateur",
    finalite:
      "Amélioration de l'expérience utilisateur, statistiques de visite anonymisées, sécurité du site.",
  },
];

/* Durées de conservation des données */
const dureesConservation = [
  {
    duree: "3 ans",
    couleur: "slate",
    description:
      "Pour les données de prospects (devis n'ayant pas abouti), à compter du dernier contact.",
  },
  {
    duree: "10 ans",
    couleur: "blue",
    description:
      "Pour les clients facturés, conformément à nos obligations légales et à la garantie décennale en vigueur dans le BTP.",
  },
];

/* Liste des droits RGPD */
const droitsRgpd = [
  "Droit d'accès et de copie",
  "Droit de rectification (correction)",
  "Droit à l'effacement (\"Droit à l'oubli\")",
  "Droit à la limitation du traitement",
];

/* ============================================
   PAGE POLITIQUE DE CONFIDENTIALITÉ
   ============================================ */

export default function PagePolitiqueConfidentialite() {
  return (
    <>
      {/* Header - Navigation principale sticky */}
      <Header />

      {/* ============================================
          CONTENU PRINCIPAL
          ============================================ */}
      <main className="mt-20 bg-slate-50">
        {/* ============================================
            EN-TÊTE DE PAGE
            Titre principal et introduction
            ============================================ */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Politique de Confidentialité &{" "}
              <br className="hidden md:block" />
              <span className="text-brand-blue">Protection des Données</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              La confiance est la base de tout chantier réussi. Nous appliquons
              une transparence totale sur la collecte et l&apos;usage de vos
              données, conformément au RGPD.
            </p>
          </div>
        </section>

        {/* ============================================
            ENCART "L'ESSENTIEL EN 3 POINTS"
            Résumé visuel des engagements RGPD
            ============================================ */}
        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-lg relative overflow-hidden border-l-4 border-l-brand-blue">
              <CardContent className="p-8">
                {/* Grille des 3 points */}
                <div className="grid md:grid-cols-3 gap-8">
                {pointsEssentiels.map((point) => (
                  <div key={point.id} className="flex flex-col items-start">
                    {/* Icône selon le type */}
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                        point.couleur === "blue"
                          ? "bg-blue-100 text-brand-blue"
                          : point.couleur === "orange"
                          ? "bg-orange-100 text-brand-orange"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {point.icone === "location" && (
                        <svg
                          className="w-6 h-6"
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
                      )}
                      {point.icone === "clipboard" && (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                          />
                        </svg>
                      )}
                      {point.icone === "check" && (
                        <svg
                          className="w-6 h-6"
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
                    <h3 className="font-bold text-slate-900 text-lg mb-2">
                      {point.titre}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ============================================
            CONTENU PRINCIPAL AVEC SIDEBAR
            Layout 2 colonnes : Sommaire + Sections
            ============================================ */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* ============================================
                  SIDEBAR: SOMMAIRE ANCRÉ (Desktop uniquement)
                  Navigation rapide entre les sections
                  ============================================ */}
              <aside className="hidden lg:block lg:col-span-3">
                <nav className="sticky top-28 space-y-1">
                  <p className="uppercase text-xs font-bold text-slate-400 tracking-wider mb-4 px-3">
                    Sommaire
                  </p>
                  {sommaireItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block px-3 py-2 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-brand-blue rounded-md transition"
                    >
                      {item.numero}. {item.titre}
                    </a>
                  ))}
                </nav>
              </aside>

              {/* ============================================
                  CONTENU PRINCIPAL : SECTIONS RGPD
                  ============================================ */}
              <div className="lg:col-span-9 space-y-16">
                {/* ============================================
                    SECTION 1: RESPONSABLE DU TRAITEMENT
                    Informations sur l'entité responsable des données
                    ============================================ */}
                <Card
                  id="responsable"
                  className="scroll-mt-28"
                >
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <span className="bg-blue-100 text-brand-blue text-sm font-bold px-2.5 py-0.5 rounded mr-3">
                      01
                    </span>
                    Qui est responsable de vos données ?
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Dans le cadre de nos activités de rénovation et de travaux
                    de second œuvre, l&apos;entité responsable du traitement de
                    vos données personnelles est :
                  </p>

                  {/* Bloc d'informations entreprise */}
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <ul className="space-y-3 text-sm text-slate-700">
                      <li className="flex items-start">
                        <span className="font-bold w-32 shrink-0">
                          Raison Sociale :
                        </span>
                        <span>{infoEntreprise.raisonSociale}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold w-32 shrink-0">
                          Siège Social :
                        </span>
                        <span>{infoEntreprise.siege}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold w-32 shrink-0">SIRET :</span>
                        <span>{infoEntreprise.siret}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold w-32 shrink-0">
                          Contact DPO :
                        </span>
                        <a
                          href={`mailto:${infoEntreprise.emailDpo}`}
                          className="text-brand-blue hover:underline"
                        >
                          {infoEntreprise.emailDpo}
                        </a>
                      </li>
                    </ul>
                  </div>
                  </CardContent>
                </Card>

                {/* ============================================
                    SECTION 2: COLLECTE & FINALITÉS
                    Tableau des données collectées et leur usage
                    ============================================ */}
                <section id="collecte" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <span className="bg-blue-100 text-brand-blue text-sm font-bold px-2.5 py-0.5 rounded mr-3">
                      02
                    </span>
                    Quelles données collectons-nous et pourquoi ?
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Nous collectons uniquement les données strictement
                    nécessaires à l&apos;exercice de notre métier de rénovateur
                    et aménageur intérieur.
                  </p>

                  {/* Tableau des données */}
                  <div className="overflow-hidden border border-slate-200 rounded-lg shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                          >
                            Source
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                          >
                            Données collectées
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider"
                          >
                            Pourquoi (Finalité)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200">
                        {donneesCollectees.map((donnee) => (
                          <tr key={donnee.source}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">
                              {donnee.source}
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600">
                              {donnee.donnees}
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600">
                              {donnee.finalite}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Note sur la base légale */}
                  <div className="mt-4 flex items-start gap-3 p-4 bg-blue-50 text-brand-blue rounded-md text-sm">
                    <svg
                      className="w-5 h-5 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p>
                      <strong>Base Légale :</strong> Ces traitements sont fondés
                      sur votre consentement (case à cocher sur le formulaire)
                      ou notre intérêt légitime (sécurisation du site web).
                    </p>
                  </div>
                </section>

                {/* ============================================
                    SECTION 3: PARTAGE & CONSERVATION
                    Destinataires et durées de conservation
                    ============================================ */}
                <section id="partage" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <span className="bg-blue-100 text-brand-blue text-sm font-bold px-2.5 py-0.5 rounded mr-3">
                      03
                    </span>
                    Qui a accès à vos données et combien de temps ?
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Destinataires des données */}
                    <div>
                      <h3 className="font-bold text-slate-800 mb-3">
                        Destinataires des données
                      </h3>
                      <p className="text-slate-600 text-sm mb-4">
                        Vos données sont destinées exclusivement au personnel
                        d&apos;AR+SOLUTION.
                      </p>
                      <p className="text-slate-600 text-sm mb-4">
                        Elles peuvent être transmises à nos sous-traitants
                        techniques de confiance (Hébergeur web sécurisé, outil
                        de comptabilité) pour la stricte exécution de leurs
                        missions.
                      </p>
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">
                        Nous ne vendons aucune donnée.
                      </span>
                    </div>

                    {/* Durées de conservation */}
                    <div>
                      <h3 className="font-bold text-slate-800 mb-3">
                        Durées de conservation
                      </h3>
                      <ul className="space-y-4">
                        {dureesConservation.map((duree) => (
                          <li key={duree.duree} className="flex items-start">
                            <div
                              className={`w-16 font-bold shrink-0 ${
                                duree.couleur === "blue"
                                  ? "text-brand-blue"
                                  : "text-slate-900"
                              }`}
                            >
                              {duree.duree}
                            </div>
                            <div className="text-slate-600 text-sm">
                              {duree.description}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ============================================
                    SECTION 4: COOKIES & SÉCURITÉ
                    Gestion des cookies et mesures de sécurité
                    ============================================ */}
                <section id="cookies" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <span className="bg-blue-100 text-brand-blue text-sm font-bold px-2.5 py-0.5 rounded mr-3">
                      04
                    </span>
                    Cookies et Sécurité
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Notre site utilise des &quot;cookies&quot; (petits fichiers
                    texte) pour fonctionner correctement et analyser notre
                    audience. Vous pouvez modifier vos choix à tout moment.
                  </p>

                  {/* Bouton gestion cookies */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button className="bg-slate-200 text-slate-800 px-6 py-2 rounded font-medium hover:bg-slate-300 transition">
                      Gérer mes préférences cookies
                    </button>
                  </div>

                  {/* Encart sécurité */}
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <h4 className="font-bold text-green-800 mb-1">
                      Sécurité Informatique
                    </h4>
                    <p className="text-sm text-green-700">
                      Notre site utilise le protocole de chiffrement{" "}
                      <strong>HTTPS</strong> pour protéger les échanges de
                      données. Nos serveurs sont situés dans l&apos;Union
                      Européenne et sécurisés contre les intrusions.
                    </p>
                  </div>
                </section>

                {/* ============================================
                    SECTION 5: VOS DROITS
                    Droits RGPD et comment les exercer
                    ============================================ */}
                <Card
                  id="droits"
                  className="bg-blue-50 border-blue-100 scroll-mt-28"
                >
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <span className="bg-blue-200 text-brand-blue text-sm font-bold px-2.5 py-0.5 rounded mr-3">
                      05
                    </span>
                    Vos droits sur vos données
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Conformément au RGPD, vous disposez des droits suivants sur
                    vos informations personnelles :
                  </p>

                  {/* Liste des droits */}
                  <ul className="grid md:grid-cols-2 gap-4 mb-8">
                    {droitsRgpd.map((droit) => (
                      <li
                        key={droit}
                        className="flex items-center text-sm text-slate-700"
                      >
                        <span className="w-2 h-2 bg-brand-blue rounded-full mr-2" />
                        {droit}
                      </li>
                    ))}
                  </ul>

                  {/* Bloc comment exercer ses droits */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-4">
                      Comment exercer ces droits ?
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      Contactez-nous simplement, nous nous engageons à vous
                      répondre sous <strong>1 mois maximum</strong>.
                    </p>

                    {/* Boutons de contact */}
                    <div className="flex flex-col md:flex-row gap-4">
                      <a
                        href="mailto:contact@ar-solution.fr"
                        className="flex items-center justify-center px-4 py-2 border border-brand-blue text-brand-blue rounded font-bold hover:bg-blue-50 transition"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
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
                        contact@ar-solution.fr
                      </a>
                      <Link
                        href="/contact"
                        className="flex items-center justify-center px-4 py-2 border border-slate-300 text-slate-600 rounded font-medium hover:bg-slate-50 transition"
                      >
                        Formulaire de contact
                      </Link>
                    </div>

                    {/* Note CNIL */}
                    <p className="text-xs text-slate-400 mt-4 pt-4 border-t border-slate-100">
                      En cas de difficulté, vous avez également le droit
                      d&apos;introduire une réclamation auprès de la CNIL
                      (www.cnil.fr).
                    </p>
                  </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer réutilisable */}
      <Footer />

      {/* ============================================
          BARRE STICKY MOBILE
          Affichée uniquement sur mobile pour appeler ou demander un devis
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

