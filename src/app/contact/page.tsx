/*
  Page Contact & Devis du site AR+SOLUTION.
  
  Cette page permet aux visiteurs de :
  - Demander un devis gratuit via un formulaire intelligent
  - Contacter directement l'entreprise par téléphone ou email
  - Voir le processus de demande de devis (4 étapes)
  - Consulter la zone d'intervention (Strasbourg et Alsace)
  - Lire les réponses aux questions fréquentes avant de contacter

  Le formulaire propose un "smart switcher" entre :
  - Mode "Particulier / Pro" (par défaut)
  - Mode "Marchés Publics" (champs spécifiques pour les collectivités)

  L'utilisateur est rassuré par :
  - Les badges de certification (RGE, Qualibat, Décennale)
  - Le délai de réponse annoncé (48h)
  - Les coordonnées directes pour un contact immédiat
*/

import type { Metadata } from "next";
import Link from "next/link";

/* ============================================
   METADATA SEO
   Informations pour le référencement et le partage social
   ============================================ */

export const metadata: Metadata = {
  title: "Contact & Devis Gratuit | AR+SOLUTION Plâtrerie Isolation Strasbourg",
  description:
    "Demander un devis gratuit pour vos travaux de plâtrerie, isolation et aménagement à Strasbourg et en Alsace. Réponse sous 48h. Certifié RGE Qualibat.",
  keywords: [
    "devis plâtrerie Strasbourg",
    "contact artisan isolation Alsace",
    "devis gratuit rénovation",
    "plaquiste Strasbourg",
    "isolation RGE Bas-Rhin",
  ],
  openGraph: {
    title: "Contact & Devis Gratuit | AR+SOLUTION",
    description:
      "Obtenez un devis gratuit pour vos travaux de plâtrerie et isolation à Strasbourg. Entreprise certifiée RGE, réponse sous 48h.",
    url: "https://ar-solution.fr/contact",
    siteName: "AR+SOLUTION",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "https://ar-solution.fr/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact AR+SOLUTION - Devis gratuit plâtrerie isolation Strasbourg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Devis Gratuit | AR+SOLUTION",
    description:
      "Obtenez un devis gratuit pour vos travaux de plâtrerie et isolation à Strasbourg. Entreprise certifiée RGE, réponse sous 48h.",
    images: ["https://ar-solution.fr/og-contact.jpg"],
  },
  alternates: {
    canonical: "https://ar-solution.fr/contact",
  },
};
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* ============================================
   DONNÉES DE LA PAGE
   ============================================ */

/* Étapes du processus de demande de devis */
const etapesProcessus = [
  {
    numero: 1,
    titre: "Prise de contact",
    description: "Analyse de votre demande immédiate. Qualification du besoin sous 48h.",
    icone: "paper-plane",
  },
  {
    numero: 2,
    titre: "Visite technique",
    description: "Déplacement sur site (si nécessaire) pour un métré précis et étude des contraintes.",
    icone: "ruler",
  },
  {
    numero: 3,
    titre: "Devis détaillé",
    description: "Envoi d'un chiffrage transparent. Pièces administratives jointes pour les MP.",
    icone: "file-invoice",
  },
  {
    numero: 4,
    titre: "Planification",
    description: "Validation du devis et calage des dates d'intervention chantier.",
    icone: "calendar-check",
  },
];

/* Villes de la zone d'intervention pour le SEO local */
const villesIntervention = [
  "Strasbourg Centre",
  "Haguenau",
  "Illkirch-Graffenstaden",
  "Schiltigheim",
  "Molsheim",
  "Sélestat",
];

/* Types de projet pour le formulaire "Particulier / Pro" */
const typesProjet = [
  { value: "platrerie", label: "Plâtrerie / Cloisons" },
  { value: "isolation", label: "Isolation thermique (Intérieur/Combles)" },
  { value: "plafond", label: "Faux-plafonds" },
  { value: "renovation", label: "Rénovation globale" },
];

/* Questions fréquentes de la FAQ */
const faqItems = [
  {
    question: "Le devis est-il vraiment gratuit ?",
    reponse:
      "Oui, totalement. Nous réalisons une estimation gratuite sur plan ou après visite technique. Aucun frais de dossier n'est facturé pour l'établissement du chiffrage.",
  },
  {
    question: "Intervenez-vous en site occupé (bureaux, ERP) ?",
    reponse:
      "Absolument. Nous avons l'habitude d'intervenir dans des locaux en activité (écoles, bureaux, commerces). Nous adaptons nos horaires et mettons en place des protections pour minimiser les nuisances (bruit, poussière).",
  },
  {
    question: "Fournissez-vous les attestations RGE / Assurances ?",
    reponse:
      "Oui. Pour les Marchés Publics comme pour les particuliers (aides de l'État), nous joignons systématiquement nos attestations d'assurance Décennale et nos certificats RGE Qualibat à jour au devis ou sur simple demande.",
  },
];

/* ============================================
   PAGE CONTACT & DEVIS
   ============================================ */

export default function PageContact() {
  return (
    <>
      {/* Header - Navigation principale sticky */}
      <Header pageActive="contact" />

      {/* ============================================
          CONTENU PRINCIPAL
          ============================================ */}
      <main className="mt-20">
        {/* ============================================
            SECTION 1: HERO & HUB DE CONTACT (Split Layout)
            Colonne gauche : Promesse + Accès contact direct
            Colonne droite : Formulaire intelligent avec switcher
            ============================================ */}
        <section className="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
          {/* Fond décoratif subtil (placeholder) */}
          <div
            className="absolute inset-0 z-0 opacity-5"
            style={{
              backgroundImage: "url('https://placehold.co/1920x1080?text=Plan+Architecte+BTP')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* ============================================
                  COLONNE GAUCHE : Promesse & Contact Direct
                  ============================================ */}
              <div className="lg:col-span-5 flex flex-col justify-center h-full pt-4">
                {/* Badge certification */}
                <Badge className="bg-brand-blue/10 text-brand-blue mb-4 w-fit">
                  <svg className="w-4 h-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Certifié RGE Qualibat
                </Badge>

                {/* Titre principal */}
                <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-blue leading-tight mb-6">
                  Vos projets de plâtrerie et isolation,{" "}
                  <span className="text-brand-orange">chiffrés avec précision</span>.
                </h1>

                {/* Sous-titre */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Mairies, architectes ou particuliers : obtenez une réponse sous 48h.
                  Basés à Strasbourg, nous intervenons dans tout le Bas-Rhin pour vos
                  travaux de rénovation énergétique et aménagement.
                </p>

                {/* Bloc "Accès Immédiat" - Contact direct */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
                  <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue mb-4 flex items-center">
                    <svg className="w-5 h-5 text-brand-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Besoin d&apos;une réponse immédiate ?
                  </h2>
                  <div className="space-y-4">
                    {/* Lien téléphone */}
                    <a href="tel:0388000000" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-brand-blue/5 rounded-full flex items-center justify-center text-brand-blue group-hover:bg-brand-orange group-hover:text-white transition">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Appel direct (Lun-Ven 8h-18h)</p>
                        <p className="text-xl font-bold text-brand-blue group-hover:text-brand-orange transition">
                          03 88 00 00 00
                        </p>
                      </div>
                    </a>
                    {/* Lien email */}
                    <a href="mailto:contact@ar-solution.fr" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-brand-blue/5 rounded-full flex items-center justify-center text-brand-blue group-hover:bg-brand-orange group-hover:text-white transition">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Service Chiffrage</p>
                        <p className="text-base font-bold text-brand-blue underline decoration-gray-300 underline-offset-4 group-hover:text-brand-orange transition">
                          contact@ar-solution.fr
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Logos de réassurance (certifications) */}
                <div className="flex gap-4 opacity-80 grayscale hover:grayscale-0 transition duration-300">
                  <img
                    src="https://placehold.co/100x50?text=RGE"
                    alt="Label RGE"
                    className="h-12 object-contain"
                  />
                  <img
                    src="https://placehold.co/100x50?text=Qualibat"
                    alt="Label Qualibat"
                    className="h-12 object-contain"
                  />
                  <img
                    src="https://placehold.co/100x50?text=Decennale"
                    alt="Garantie Décennale"
                    className="h-12 object-contain"
                  />
                </div>
              </div>

              {/* ============================================
                  COLONNE DROITE : Formulaire "Hub" intelligent
                  Avec switcher Particulier/Pro vs Marchés Publics
                  ============================================ */}
              <div id="formulaire" className="lg:col-span-7 scroll-mt-24">
                <Card className="shadow-xl border-t-4 border-brand-orange">
                  <CardContent className="p-6 md:p-8">
                  {/* Switcher de mode (Particulier/Pro vs Marchés Publics) */}
                  {/* Note: La logique JS pour basculer les champs sera ajoutée ultérieurement */}
                  <div className="flex justify-center mb-8">
                    <div className="bg-gray-100 p-1 rounded-lg inline-flex relative">
                      <button
                        className="px-6 py-2 rounded-md text-sm font-bold shadow bg-white text-brand-blue transition-all duration-200"
                        id="btn-priv"
                      >
                        <svg className="w-4 h-4 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Particulier / Pro
                      </button>
                      <button
                        className="px-6 py-2 rounded-md text-sm font-bold text-gray-500 hover:text-brand-blue transition-all duration-200"
                        id="btn-public"
                      >
                        <svg className="w-4 h-4 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Marchés Publics
                      </button>
                    </div>
                  </div>

                  {/* Formulaire de demande de devis */}
                  <form action="#" method="POST" className="space-y-5">
                    {/* Champs communs : Nom & Téléphone */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="lastname">
                          Nom & Prénom <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          type="text"
                          id="lastname"
                          name="lastname"
                          placeholder="Votre nom complet"
                          required
                          className="focus-visible:ring-brand-orange/50 focus-visible:border-brand-orange"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Téléphone <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="06 00 00 00 00"
                          required
                          className="focus-visible:ring-brand-orange/50 focus-visible:border-brand-orange"
                        />
                      </div>
                    </div>

                    {/* Champ Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email professionnel ou personnel <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="exemple@email.com"
                        required
                        className="focus-visible:ring-brand-orange/50 focus-visible:border-brand-orange"
                      />
                    </div>

                    {/* Champs Spécifiques "Marchés Publics" (masqués par défaut) */}
                    {/* Note: Ces champs seront affichés via JS quand le mode Marchés Publics est actif */}
                    <div id="public-fields" className="hidden bg-brand-blue/5 p-4 rounded-lg border border-brand-blue/10 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="organisme" className="text-brand-blue">
                          Organisme / Mairie
                        </Label>
                        <Input
                          type="text"
                          id="organisme"
                          name="organisme"
                          placeholder="Ex: Mairie de Strasbourg, Collectivité..."
                          className="focus-visible:ring-brand-orange/50 focus-visible:border-brand-orange"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ref-consult" className="text-brand-blue">
                          Référence Consultation / Marché
                        </Label>
                        <Input
                          type="text"
                          id="ref-consult"
                          name="ref-consult"
                          placeholder="Ex: MAPA-2024-05..."
                          className="focus-visible:ring-brand-orange/50 focus-visible:border-brand-orange"
                        />
                      </div>
                      <p className="text-xs text-brand-blue mt-2 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Les pièces administratives (RGE, Décennale, Kbis) seront jointes automatiquement.
                      </p>
                    </div>

                    {/* Champs Spécifiques "Particulier / Pro" (visibles par défaut) */}
                    <div id="private-fields" className="space-y-2">
                      <Label htmlFor="project-type">
                        Type de projet <span className="text-red-500">*</span>
                      </Label>
                      <Select name="project-type" defaultValue="">
                        <SelectTrigger
                          id="project-type"
                          className="focus-visible:ring-brand-orange/50 focus-visible:border-brand-orange"
                        >
                          <SelectValue placeholder="Sélectionnez votre besoin..." />
                        </SelectTrigger>
                        <SelectContent>
                          {typesProjet.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Champ détails du projet */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Détails du projet</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Indiquez la surface approximative, le lieu et vos délais souhaités..."
                        className="focus-visible:ring-brand-orange/50 focus-visible:border-brand-orange"
                      />
                    </div>

                    {/* Bouton d'envoi CTA */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-brand-orange-dark hover:bg-brand-orange text-white text-lg font-bold shadow-lg"
                    >
                      <span>Demander un devis gratuit</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Button>

                    {/* Mention RGPD */}
                    <p className="text-xs text-gray-400 text-center mt-3">
                      <svg className="w-3 h-3 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Vos données restent confidentielles. Réponse sous 48h.
                    </p>
                  </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 2: PROCESSUS - "Et après ?"
            Explique les 4 étapes après l'envoi du formulaire
            ============================================ */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-12">
              Comment se déroule votre demande ?
            </h2>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Ligne connectrice horizontale (desktop uniquement) */}
              <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gray-100 z-0" />

              {/* Les 4 étapes du processus */}
              {etapesProcessus.map((etape) => (
                <div key={etape.numero} className="relative z-10 group">
                  {/* Cercle avec icône */}
                  <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-brand-orange transition duration-300">
                    {etape.icone === "paper-plane" && (
                      <svg className="w-8 h-8 text-brand-blue group-hover:text-brand-orange transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    )}
                    {etape.icone === "ruler" && (
                      <svg className="w-8 h-8 text-brand-blue group-hover:text-brand-orange transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    )}
                    {etape.icone === "file-invoice" && (
                      <svg className="w-8 h-8 text-brand-blue group-hover:text-brand-orange transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    {etape.icone === "calendar-check" && (
                      <svg className="w-8 h-8 text-brand-blue group-hover:text-brand-orange transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>
                  {/* Titre et description de l'étape */}
                  <h3 className="font-semibold text-2xl md:text-3xl mb-2">
                    {etape.numero}. {etape.titre}
                  </h3>
                  <p className="text-sm text-gray-500 px-4">{etape.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 3: ZONE D'INTERVENTION (SEO Local)
            Carte + liste des villes desservies en Alsace
            ============================================ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row">
              {/* Colonne texte */}
              <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                  Intervention rapide à Strasbourg et en Alsace
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Basée au cœur de l&apos;Eurométropole, notre équipe se déplace quotidiennement
                  dans tout le Bas-Rhin. Nous garantissons la ponctualité de nos équipes
                  et la propreté des chantiers.
                </p>
                <h4 className="font-bold text-brand-blue mb-4">
                  Principales zones desservies :
                </h4>
                <ul className="grid grid-cols-2 gap-2 mb-8">
                  {villesIntervention.map((ville) => (
                    <li key={ville} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-brand-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {ville}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:0388000000"
                  className="inline-flex items-center font-bold text-brand-orange hover:text-brand-blue transition"
                >
                  Vérifier mon éligibilité géographique
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Colonne carte (placeholder) */}
              <div className="md:w-1/2 relative min-h-[400px]">
                <img
                  src="https://placehold.co/800x600?text=Carte+Zone+Intervention+Alsace"
                  alt="Carte zone intervention Alsace"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Badge flottant siège social */}
                <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                  <p className="text-sm font-bold text-brand-blue">📍 Siège Social</p>
                  <p className="text-xs text-gray-500">Strasbourg, 67000</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 4: FAQ - Questions fréquentes
            Lève les freins avant l'envoi du formulaire
            ============================================ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue text-center mb-10">
              Questions fréquentes
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-lg px-5 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="font-bold text-lg text-brand-blue">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.reponse}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Lien vers la FAQ complète */}
            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="text-brand-blue font-semibold hover:text-brand-orange transition"
              >
                Voir toutes les questions fréquentes →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer réutilisable */}
      <Footer />

      {/* ============================================
          DONNÉES STRUCTURÉES JSON-LD
          Schema ContactPage + LocalBusiness pour améliorer le référencement local
          ============================================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact & Devis Gratuit | AR+SOLUTION",
            "description": "Demandez un devis gratuit pour vos travaux de plâtrerie, isolation et aménagement à Strasbourg et en Alsace. Réponse sous 48h.",
            "url": "https://ar-solution.fr/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "AR+SOLUTION",
              "description": "Entreprise de plâtrerie, isolation et aménagement intérieur certifiée RGE Qualibat à Strasbourg",
              "url": "https://ar-solution.fr",
              "logo": "https://ar-solution.fr/logo.png",
              "telephone": "+33388000000",
              "email": "contact@ar-solution.fr",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Strasbourg",
                "postalCode": "67000",
                "addressCountry": "FR",
                "addressRegion": "Alsace"
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "48.5734",
                  "longitude": "7.7521"
                },
                "geoRadius": "50000",
                "name": "Bas-Rhin, Alsace"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": []
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AR+SOLUTION",
            "image": "https://ar-solution.fr/logo.png",
            "description": "Entreprise de plâtrerie, isolation et aménagement intérieur certifiée RGE Qualibat à Strasbourg",
            "url": "https://ar-solution.fr",
            "telephone": "+33-3-88-00-00-00",
            "email": "contact@ar-solution.fr",
            "priceRange": "€€",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Strasbourg",
              "addressLocality": "Strasbourg",
              "addressRegion": "Alsace",
              "postalCode": "67000",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 48.5734,
              "longitude": 7.7521
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            ],
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 48.5734,
                "longitude": 7.7521
              },
              "geoRadius": "50000"
            }
          })
        }}
      />

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
          className="flex-1 bg-brand-orange-dark hover:bg-brand-orange text-white font-bold shadow-md"
        >
          <a href="#formulaire">Devis Gratuit</a>
        </Button>
      </div>
    </>
  );
}

