/*
  Page Mentions Légales d'AR+SOLUTION.

  Cette page présente les informations juridiques et administratives de l'entreprise :
  - Identification de l'éditeur du site (raison sociale, siège, immatriculation)
  - Assurances et garanties professionnelles (RC Pro, Décennale)
  - Informations sur l'hébergement et la réalisation du site
  - Propriété intellectuelle et droits sur les photos de chantiers
  - Gestion des données personnelles (résumé RGPD)
  - Un CTA final pour contacter le service administratif

  L'utilisateur peut :
  - Consulter les informations légales de l'entreprise
  - Vérifier les garanties et assurances (important pour les marchés publics)
  - Accéder aux informations sur la gestion des données personnelles
  - Contacter le service administratif pour obtenir des documents
*/

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

/* ============================================
   METADATA SEO
   ============================================ */

export const metadata: Metadata = {
  title: "Mentions Légales - AR+SOLUTION | Entreprise de Rénovation Strasbourg",
  description:
    "Mentions légales, assurances et garanties professionnelles d'AR+SOLUTION, entreprise de rénovation et plâtrerie à Strasbourg. Certifié RGE, Garantie Décennale.",
};

/* ============================================
   DONNÉES DE LA PAGE
   ============================================ */

/* Informations de l'éditeur du site */
const infoEditeur = {
  raisonSociale: "AR+SOLUTION",
  formeJuridique: "SASU",
  siege: {
    adresse: "91 Route des Romains",
    codePostal: "67200",
    ville: "Strasbourg",
    pays: "France",
  },
  immatriculation: {
    rcs: "[Numéro RCS Strasbourg]",
    siren: "[Numéro SIREN]",
    siret: "[Numéro SIRET]",
    capitalSocial: "[Montant]",
  },
  tvaIntracommunautaire: "[Numéro de TVA]",
  contact: {
    email: "contact@ar-solution.fr",
    telephone: "03 88 00 00 00",
  },
  directeurPublication: "[Nom du Dirigeant]",
};

/* Informations sur les assurances */
const assurances = [
  {
    id: "rcpro",
    titre: "Responsabilité Civile Pro (RC Pro)",
    description:
      "Couvre les dommages causés aux tiers durant l'exploitation.",
    compagnie: "[Nom Assureur]",
    numContrat: "[Numéro Police RC]",
  },
  {
    id: "decennale",
    titre: "Garantie Décennale",
    description:
      "Garantit la réparation des dommages après réception des travaux.",
    compagnie: "[Nom Assureur]",
    numContrat: "[Numéro Police Décennale]",
    zone: "France Métropolitaine / Alsace",
  },
];

/* Informations hébergement et réalisation */
const infoHebergement = {
  hebergeur: {
    nom: "[Nom de l'Hébergeur]",
    adresse: "[Adresse de l'Hébergeur]",
    telephone: "[Tel Hébergeur]",
  },
  concepteur: {
    nom: "[Nom ou Agence]",
    specialite: "Expertise Web & Bâtiment",
    lien: "#",
  },
};

/* Points concernant la gestion des données personnelles */
const pointsDonneesPersonnelles = [
  {
    titre: "Finalité",
    description:
      "Ces données servent uniquement au traitement de votre demande de devis, à la relation commerciale et à la facturation.",
  },
  {
    titre: "Confidentialité",
    description:
      "Aucune donnée n'est vendue, échangée ou transférée à des tiers non autorisés.",
  },
  {
    titre: "Droits",
    description:
      "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en nous contactant.",
  },
];

/* Logos de réassurance (footer) */
const logosReassurance = [
  {
    id: "rge",
    src: "https://placehold.co/120x60/334155/FFFFFF?text=RGE+Qualibat",
    alt: "Label RGE Qualibat",
  },
  {
    id: "decennale",
    src: "https://placehold.co/120x60/334155/FFFFFF?text=Garantie+Decennale",
    alt: "Logo Garantie Décennale",
  },
  {
    id: "artisan",
    src: "https://placehold.co/120x60/334155/FFFFFF?text=Artisan+Alsace",
    alt: "Label Artisan Alsace",
  },
];

/* ============================================
   PAGE MENTIONS LÉGALES
   ============================================ */

export default function PageMentionsLegales() {
  return (
    <>
      {/* Header - Navigation principale sticky */}
      <Header />

      {/* ============================================
          CONTENU PRINCIPAL
          ============================================ */}
      <main className="mt-20">
        {/* ============================================
            HEADER DE PAGE - Fil d'ariane et titre
            ============================================ */}
        <header className="bg-slate-50 border-b border-slate-200 py-12">
          <div className="max-w-4xl mx-auto px-4">
            {/* Breadcrumb - Navigation fil d'ariane */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center space-x-2 text-sm text-slate-500">
                <li>
                  <Link
                    href="/"
                    className="hover:text-brand-blue transition-colors"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <span className="text-slate-300">/</span>
                </li>
                <li className="font-medium text-slate-800">Mentions Légales</li>
              </ol>
            </nav>

            {/* Titre et introduction */}
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Mentions Légales
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Informations juridiques, administratives et garanties relatives à
              l&apos;entreprise{" "}
              <span className="font-semibold text-slate-900">AR+SOLUTION</span>.
            </p>
          </div>
        </header>

        {/* ============================================
            SECTIONS DU CONTENU LÉGAL
            ============================================ */}
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
          {/* ============================================
              SECTION 1 : ÉDITEUR DU SITE
              Identification de l'entreprise et coordonnées
              ============================================ */}
          <section id="editeur" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              1. Édition du site &amp; Identification
            </h2>
            <p className="text-slate-600 mb-4">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin
              2004 pour la confiance en l&apos;économie numérique, il est
              précisé aux utilisateurs du site l&apos;identité des différents
              intervenants dans le cadre de sa réalisation et de son suivi.
            </p>

            {/* Grille d'informations de l'éditeur */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* Raison Sociale */}
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Raison Sociale
                </h3>
                <p className="font-medium text-slate-900">
                  {infoEditeur.raisonSociale} ({infoEditeur.formeJuridique})
                </p>
              </div>

              {/* Siège Social */}
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Siège Social
                </h3>
                <p className="font-medium text-slate-900">
                  {infoEditeur.siege.adresse}
                  <br />
                  {infoEditeur.siege.codePostal} {infoEditeur.siege.ville},{" "}
                  {infoEditeur.siege.pays}
                </p>
              </div>

              {/* Immatriculation */}
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Immatriculation
                </h3>
                <p className="font-medium text-slate-900">
                  RCS Strasbourg : {infoEditeur.immatriculation.rcs}
                  <br />
                  SIRET : {infoEditeur.immatriculation.siret}
                  <br />
                  Capital Social : {infoEditeur.immatriculation.capitalSocial} €
                </p>
              </div>

              {/* TVA Intracommunautaire */}
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  TVA Intracommunautaire
                </h3>
                <p className="font-medium text-slate-900">
                  {infoEditeur.tvaIntracommunautaire}
                </p>
              </div>

              {/* Contact Administratif */}
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Contact Administratif
                </h3>
                <p className="font-medium text-slate-900">
                  <a
                    href={`mailto:${infoEditeur.contact.email}`}
                    className="text-brand-blue hover:underline"
                  >
                    {infoEditeur.contact.email}
                  </a>
                  <br />
                  {infoEditeur.contact.telephone}
                </p>
              </div>

              {/* Directeur de la publication */}
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Directeur de la publication
                </h3>
                <p className="font-medium text-slate-900">
                  {infoEditeur.directeurPublication}
                </p>
              </div>
            </div>
          </section>

          {/* ============================================
              SECTION 2 : ASSURANCES ET GARANTIES
              Section mise en avant pour rassurer les clients (marchés publics)
              ============================================ */}
          <section
            id="assurances"
            className="bg-slate-50 rounded-lg border border-slate-200 p-6 md:p-8 border-l-4 border-l-brand-blue"
          >
            <div className="flex items-start space-x-4">
              {/* Icône bouclier - symbolise la sécurité et les garanties */}
              <div className="hidden md:block text-brand-blue mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  2. Assurances &amp; Garanties Professionnelles
                </h2>
                <p className="text-slate-700 mb-4 font-medium">
                  Conformément à la législation française (Loi Spinetta),
                  l&apos;entreprise est couverte pour l&apos;ensemble de ses
                  activités de plâtrerie, isolation et rénovation.
                </p>

                {/* Grille des assurances */}
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  {assurances.map((assurance) => (
                    <div
                      key={assurance.id}
                      className="bg-white p-4 rounded shadow-sm border border-slate-100"
                    >
                      <h3 className="font-bold text-slate-900 mb-1">
                        {assurance.titre}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {assurance.description}
                        <br />
                        <strong>Compagnie :</strong> {assurance.compagnie}
                        <br />
                        <strong>N° Contrat :</strong> {assurance.numContrat}
                        {assurance.zone && (
                          <>
                            <br />
                            <strong>Zone :</strong> {assurance.zone}
                          </>
                        )}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Note sur les attestations */}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500 italic">
                    Les attestations d&apos;assurance à jour sont jointes
                    systématiquement à nos devis et disponibles sur simple
                    demande pour les dossiers d&apos;appels d&apos;offres
                    publics.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================
              SECTION 3 : HÉBERGEMENT ET RÉALISATION
              Informations sur l'hébergeur et le concepteur du site
              ============================================ */}
          <section id="hebergement" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              3. Hébergement &amp; Réalisation
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Hébergement du site */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Hébergement du site
                </h3>
                <p className="text-slate-600 text-sm">
                  Le site est hébergé par :
                  <br />
                  <span className="font-medium text-slate-800">
                    {infoHebergement.hebergeur.nom}
                  </span>
                  <br />
                  {infoHebergement.hebergeur.adresse}
                  <br />
                  Téléphone : {infoHebergement.hebergeur.telephone}
                </p>
              </div>

              {/* Conception et développement */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Conception &amp; Développement
                </h3>
                <p className="text-slate-600 text-sm">
                  <span className="font-medium text-slate-800">
                    {infoHebergement.concepteur.nom}
                  </span>
                  <br />
                  {infoHebergement.concepteur.specialite}
                  <br />
                  <a
                    href={infoHebergement.concepteur.lien}
                    className="text-brand-blue hover:underline"
                  >
                    Visiter le site du créateur
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* ============================================
              SECTION 4 : PROPRIÉTÉ INTELLECTUELLE
              Droits sur le contenu et les photos de chantiers
              ============================================ */}
          <section id="propriete" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              4. Propriété Intellectuelle &amp; Photos de Chantier
            </h2>

            <div className="text-slate-600 space-y-4">
              <p>
                L&apos;ensemble de ce site relève de la législation française et
                internationale sur le droit d&apos;auteur et la propriété
                intellectuelle. Tous les droits de reproduction sont réservés.
              </p>

              <p className="font-medium text-slate-800">
                Photographies de réalisations :
              </p>

              <p>
                Les photographies &quot;Avant/Après&quot; et les visuels de
                chantiers présents sur ce site sont la propriété exclusive de{" "}
                <strong>AR+SOLUTION</strong>. Elles témoignent de notre
                savoir-faire réel à Strasbourg et en Alsace. Toute reproduction
                ou utilisation frauduleuse de ces images à des fins commerciales
                par des tiers est strictement interdite et fera l&apos;objet de
                poursuites.
              </p>
            </div>
          </section>

          {/* ============================================
              SECTION 5 : DONNÉES PERSONNELLES (RGPD)
              Résumé des pratiques de gestion des données
              ============================================ */}
          <section id="donnees" className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              5. Gestion des données personnelles
            </h2>

            <div className="text-slate-600 space-y-4">
              <p>
                Dans le cadre de notre activité de rénovation, nous pouvons être
                amenés à collecter des données personnelles via notre formulaire
                de contact (Nom, Email, Téléphone, Adresse du chantier).
              </p>

              {/* Liste des points RGPD */}
              <ul className="list-disc pl-5 space-y-2">
                {pointsDonneesPersonnelles.map((point) => (
                  <li key={point.titre}>
                    <strong>{point.titre} :</strong> {point.description}
                  </li>
                ))}
              </ul>

              {/* Lien vers la politique de confidentialité complète */}
              <p className="mt-4">
                Pour plus de détails, consultez notre{" "}
                <Link
                  href="/politique-confidentialite"
                  className="text-brand-blue hover:underline font-medium"
                >
                  Politique de Confidentialité complète
                </Link>
                .
              </p>
            </div>
          </section>
        </div>

        {/* ============================================
            FOOTER DE CONVERSION (SOFT CTA)
            Bloc pour contacter le service administratif
            ============================================ */}
        <section className="bg-slate-900 text-white py-12 mt-12">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Besoin d&apos;un document spécifique ?
            </h3>
            <p className="text-slate-300 mb-8">
              Une question sur nos garanties décennales ou une demande
              administrative pour un marché public ? Notre service administratif
              est à votre écoute.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              Contactez-nous
            </Link>

            {/* Logos de réassurance */}
            <div className="mt-12 flex justify-center items-center space-x-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {logosReassurance.map((logo) => (
                <img
                  key={logo.id}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto"
                />
              ))}
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

