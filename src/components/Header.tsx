/*
  Composant Header - Navigation principale du site AR+SOLUTION
  
  Ce composant est affiché sur toutes les pages du site. Il contient :
  - Le logo AR+SOLUTION cliquable (retour à l'accueil)
  - Le menu de navigation desktop avec les liens principaux
  - Les boutons CTA (téléphone et demande de devis)
  - Le bouton hamburger pour le menu mobile
  
  Props :
  - pageActive : identifiant de la page actuelle pour le style actif (optionnel)
  - ctaHref : URL du bouton CTA principal (par défaut "/contact")
  
  Le header est sticky (fixed) en haut de page avec un z-index élevé.
*/

"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

/* Types des props du composant Header */
interface HeaderProps {
  /* Page actuelle pour marquer le lien comme actif dans la navigation */
  pageActive?: "accueil" | "services" | "realisations" | "marches-publics" | "a-propos" | "faq" | "ressources" | "contact";
  /* URL du bouton CTA "Demander un devis" - par défaut "/contact" */
  ctaHref?: string;
}

/* Numéro de téléphone de l'entreprise (centralisé pour faciliter les mises à jour) */
const TELEPHONE = "03 88 00 00 00";
const TELEPHONE_LIEN = "tel:0388000000";

export default function Header({ pageActive, ctaHref = "/contact" }: HeaderProps) {
  /* État pour gérer l'ouverture/fermeture du menu mobile */
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-blue-50 via-white to-orange-50 shadow-lg backdrop-blur-sm header-gradient-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 gap-4 md:gap-8">
          {/* Logo AR+SOLUTION - lien vers l'accueil */}
          <div className="flex-shrink-0 flex items-center">
            {/* Logo mobile - taille réduite */}
            <div className="sm:hidden">
              <Logo variant="full" size="sm" linkToHome={true} interactive={true} />
            </div>
            {/* Logo desktop - taille normale */}
            <div className="hidden sm:block">
              <Logo variant="full" size="md" linkToHome={true} interactive={true} />
            </div>
          </div>

          {/* Menu de navigation desktop - masqué sur mobile */}
          <nav className="hidden md:flex gap-6 items-center">
            {/* Lien vers les services */}
            <Link
              href="/services"
              className={`group relative text-sm font-medium py-2 px-1 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded ${
                pageActive === "services"
                  ? "font-bold text-brand-orange-dark"
                  : "text-gray-700 hover:text-brand-orange"
              }`}
              aria-current={pageActive === "services" ? "page" : undefined}
            >
              <span className="relative inline-block">
                Nos Services
                {/* Indicateur actif - soulignement permanent */}
                {pageActive === "services" ? (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange-dark rounded-full transition-all duration-300 ease-out" />
                ) : (
                  /* Animation hover - soulignement animé avec transition fluide */
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange rounded-full transform scale-x-0 transition-transform duration-300 ease-out origin-left group-hover:scale-x-100 will-change-transform" />
                )}
              </span>
            </Link>

            {/* Lien vers les réalisations */}
            <Link
              href="/realisations"
              className={`group relative text-sm font-medium py-2 px-1 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded ${
                pageActive === "realisations"
                  ? "font-bold text-brand-orange-dark"
                  : "text-gray-700 hover:text-brand-orange"
              }`}
              aria-current={pageActive === "realisations" ? "page" : undefined}
            >
              <span className="relative inline-block">
                Réalisations
                {/* Indicateur actif - soulignement permanent */}
                {pageActive === "realisations" ? (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange-dark rounded-full transition-all duration-300 ease-out" />
                ) : (
                  /* Animation hover - soulignement animé avec transition fluide */
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange rounded-full transform scale-x-0 transition-transform duration-300 ease-out origin-left group-hover:scale-x-100 will-change-transform" />
                )}
              </span>
            </Link>

            {/* Lien vers les marchés publics */}
            <Link
              href="/marches-publics"
              className={`group relative text-sm font-medium py-2 px-1 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded ${
                pageActive === "marches-publics"
                  ? "font-bold text-brand-orange-dark"
                  : "text-gray-700 hover:text-brand-orange"
              }`}
              aria-current={pageActive === "marches-publics" ? "page" : undefined}
            >
              <span className="relative inline-block">
                Marchés Publics
                {/* Indicateur actif - soulignement permanent */}
                {pageActive === "marches-publics" ? (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange-dark rounded-full transition-all duration-300 ease-out" />
                ) : (
                  /* Animation hover - soulignement animé avec transition fluide */
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange rounded-full transform scale-x-0 transition-transform duration-300 ease-out origin-left group-hover:scale-x-100 will-change-transform" />
                )}
              </span>
            </Link>

            {/* Lien vers la page À propos */}
            <Link
              href="/a-propos"
              className={`group relative text-sm font-medium py-2 px-1 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded ${
                pageActive === "a-propos"
                  ? "font-bold text-brand-orange-dark"
                  : "text-gray-700 hover:text-brand-orange"
              }`}
              aria-current={pageActive === "a-propos" ? "page" : undefined}
            >
              <span className="relative inline-block">
                À propos
                {/* Indicateur actif - soulignement permanent */}
                {pageActive === "a-propos" ? (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange-dark rounded-full transition-all duration-300 ease-out" />
                ) : (
                  /* Animation hover - soulignement animé avec transition fluide */
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange rounded-full transform scale-x-0 transition-transform duration-300 ease-out origin-left group-hover:scale-x-100 will-change-transform" />
                )}
              </span>
            </Link>
          </nav>

          {/* Boutons CTA header (téléphone + devis) - masqués sur mobile */}
          <div className="hidden md:flex items-center gap-3">
            {/* Lien téléphone avec icône */}
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-gray-600 hover:text-brand-blue transition-colors duration-200 ease-out"
            >
              <a href={TELEPHONE_LIEN} aria-label={`Appeler ${TELEPHONE}`}>
                {/* Icône téléphone SVG */}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {TELEPHONE}
              </a>
            </Button>

            {/* Bouton CTA principal - Demander un devis */}
            <Button
              asChild
              className="bg-brand-orange-dark hover:bg-brand-orange text-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:scale-[1.02] active:scale-100 will-change-transform"
            >
              <Link href={ctaHref} aria-label="Demander un devis gratuit">
                Demander un devis
              </Link>
            </Button>
          </div>

          {/* Bouton menu mobile (hamburger) - visible uniquement sur mobile */}
          <div className="flex items-center md:hidden">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-700"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {/* Icône hamburger ou croix selon l'état avec animation */}
              <svg
                className={`h-6 w-6 transition-transform duration-300 ease-out ${
                  menuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Menu mobile déroulant avec animation */}
      <div
        className={`md:hidden bg-gradient-to-r from-blue-50/95 via-white/95 to-orange-50/95 backdrop-blur-md border-t border-gray-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
        role="region"
        aria-label="Menu de navigation mobile"
      >
        <nav className="flex flex-col px-4 py-5 space-y-2">
            {/* Lien vers les services */}
            <Button
              variant="ghost"
              asChild
              className={`justify-start w-full py-3 px-4 transition-all duration-300 ease-out ${
                menuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
              style={{
                transitionDelay: menuOpen ? "0.05s" : "0s",
                willChange: "transform, opacity",
              }}
            >
              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className={`transition-colors duration-200 ease-out ${
                  pageActive === "services"
                    ? "font-bold text-brand-orange-dark bg-orange-50"
                    : "text-gray-700 hover:text-brand-orange hover:bg-gray-50"
                }`}
              >
                Nos Services
              </Link>
            </Button>

            {/* Lien vers les réalisations */}
            <Button
              variant="ghost"
              asChild
              className={`justify-start w-full py-3 px-4 transition-all duration-300 ease-out ${
                menuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
              style={{
                transitionDelay: menuOpen ? "0.1s" : "0s",
                willChange: "transform, opacity",
              }}
            >
              <Link
                href="/realisations"
                onClick={() => setMenuOpen(false)}
                className={`transition-colors duration-200 ease-out ${
                  pageActive === "realisations"
                    ? "font-bold text-brand-orange-dark bg-orange-50"
                    : "text-gray-700 hover:text-brand-orange hover:bg-gray-50"
                }`}
              >
                Réalisations
              </Link>
            </Button>

            {/* Lien vers les marchés publics */}
            <Button
              variant="ghost"
              asChild
              className={`justify-start w-full py-3 px-4 transition-all duration-300 ease-out ${
                menuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
              style={{
                transitionDelay: menuOpen ? "0.15s" : "0s",
                willChange: "transform, opacity",
              }}
            >
              <Link
                href="/marches-publics"
                onClick={() => setMenuOpen(false)}
                className={`transition-colors duration-200 ease-out ${
                  pageActive === "marches-publics"
                    ? "font-bold text-brand-orange-dark bg-orange-50"
                    : "text-gray-700 hover:text-brand-orange hover:bg-gray-50"
                }`}
              >
                Marchés Publics
              </Link>
            </Button>

            {/* Lien vers la page À propos */}
            <Button
              variant="ghost"
              asChild
              className={`justify-start w-full py-3 px-4 transition-all duration-300 ease-out ${
                menuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
              style={{
                transitionDelay: menuOpen ? "0.2s" : "0s",
                willChange: "transform, opacity",
              }}
            >
              <Link
                href="/a-propos"
                onClick={() => setMenuOpen(false)}
                className={`transition-colors duration-200 ease-out ${
                  pageActive === "a-propos"
                    ? "font-bold text-brand-orange-dark bg-orange-50"
                    : "text-gray-700 hover:text-brand-orange hover:bg-gray-50"
                }`}
              >
                À propos
              </Link>
            </Button>

            {/* Séparateur */}
            <hr
              className={`border-gray-200 my-3 transition-all duration-300 ease-out ${
                menuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
              style={{
                transitionDelay: menuOpen ? "0.25s" : "0s",
                willChange: "transform, opacity",
              }}
            />

            {/* Lien téléphone */}
            <Button
              variant="ghost"
              asChild
              className={`justify-start w-full py-3 px-4 text-gray-600 hover:text-brand-blue transition-all duration-300 ease-out ${
                menuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
              style={{
                transitionDelay: menuOpen ? "0.3s" : "0s",
                willChange: "transform, opacity",
              }}
            >
              <a href={TELEPHONE_LIEN} className="flex items-center gap-2 transition-colors duration-200 ease-out">
                <svg
                  className="w-5 h-5"
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
                {TELEPHONE}
              </a>
            </Button>

            {/* Bouton CTA - Demander un devis */}
            <Button
              asChild
              className={`w-full py-3 px-4 bg-brand-orange-dark hover:bg-brand-orange text-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:scale-[1.02] active:scale-100 will-change-transform ${
                menuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
              style={{
                transitionDelay: menuOpen ? "0.35s" : "0s",
              }}
            >
              <Link href={ctaHref} onClick={() => setMenuOpen(false)} aria-label="Demander un devis gratuit">
                Demander un devis
              </Link>
            </Button>
          </nav>
        </div>
    </header>
  );
}

