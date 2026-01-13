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

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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


/* ============================================
   COMPOSANT LOGO (intégré car usage unique dans Header)
   ============================================ */

/* Types des props du Logo */
interface LogoProps {
  /* Variant d'affichage : "full" (par défaut), "icon", ou "text" */
  variant?: "full" | "icon" | "text";
  /* Classes CSS supplémentaires */
  className?: string;
  /* Taille du logo : "sm", "md" (par défaut), ou "lg" */
  size?: "sm" | "md" | "lg";
  /* Si true, le logo est un lien vers l'accueil */
  linkToHome?: boolean;
  /* Si true, utilise les styles de hover */
  interactive?: boolean;
}

/* Tailles du logo selon la prop size */
const sizeConfig = {
  sm: {
    icon: "w-6 h-6",
    text: "text-lg",
    gap: "gap-2",
  },
  md: {
    icon: "w-8 h-8",
    text: "text-2xl",
    gap: "gap-3",
  },
  lg: {
    icon: "w-10 h-10",
    text: "text-3xl",
    gap: "gap-4",
  },
};

/* Composant Logo - Logo AR+SOLUTION avec symbole SVG personnalisé */
function Logo({
  variant = "full",
  className = "",
  size = "md",
  linkToHome = true,
  interactive = true,
}: LogoProps) {
  const config = sizeConfig[size];
  
  /* Rendu du symbole SVG
     Note : Les couleurs hex (#1e3a5f = brand-blue, #f97316 = brand-orange) sont
     en dur car les SVG inline ne peuvent pas utiliser de variables CSS.
     Ces valeurs doivent rester synchronisées avec globals.css. */
  const renderIcon = () => (
    <svg
      className={`${config.icon} flex-shrink-0 transition-transform duration-200 group-hover:rotate-3`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Forme géométrique représentant un bâtiment/structure moderne */}
      {/* Carré principal (bleu = #1e3a5f = brand-blue) */}
      <rect x="4" y="12" width="16" height="16" rx="2" fill="#1e3a5f" />
      
      {/* Rectangle supérieur (orange = #f97316 = brand-orange) */}
      <rect x="20" y="8" width="16" height="12" rx="2" fill="#f97316" />
      
      {/* Rectangle inférieur droit (bleu = brand-blue) */}
      <rect x="20" y="24" width="12" height="8" rx="2" fill="#1e3a5f" />
      
      {/* Rectangle inférieur gauche (orange = brand-orange) */}
      <rect x="8" y="28" width="8" height="8" rx="2" fill="#f97316" />
      
      {/* Ligne horizontale (sépare les blocs, bleu = brand-blue) */}
      <line x1="4" y1="20" x2="36" y2="20" stroke="#1e3a5f" strokeWidth="1.5" />
    </svg>
  );

  /* Rendu du texte */
  const renderText = () => (
    <span
      className={`${config.text} font-bold tracking-tighter text-brand-blue transition-colors duration-200 group-hover:text-brand-blue-dark`}
    >
      AR+<span className="text-brand-orange group-hover:text-brand-orange-dark">SOLUTION</span>
    </span>
  );

  /* Classes de base pour le conteneur */
  const containerClasses = `
    flex items-center ${config.gap} ${className}
    group transition-all duration-200 transform-gpu will-change-transform
    ${interactive && linkToHome ? "hover:scale-105 cursor-pointer" : ""}
  `.trim().replace(/\s+/g, " ");

  /* Contenu du logo selon le variant */
  const logoContent = (
    <div className={containerClasses} aria-label="AR+SOLUTION - Logo">
      {variant !== "text" && renderIcon()}
      {variant !== "icon" && renderText()}
    </div>
  );

  /* Si linkToHome est true, envelopper dans un Link */
  if (linkToHome) {
    return (
      <Link
        href="/"
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded"
        aria-label="AR+SOLUTION - Retour à l'accueil"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}


/* ============================================
   COMPOSANT HEADER
   ============================================ */

export default function Header({ pageActive, ctaHref = "/contact" }: HeaderProps) {
  /* État pour gérer l'ouverture/fermeture du menu mobile */
  const [menuOpen, setMenuOpen] = useState(false);

  /* Ferme automatiquement le menu mobile si la fenêtre passe en mode desktop
     (par exemple après une rotation d'écran ou un redimensionnement) */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-gray-50 via-white to-brand-orange/5 shadow-lg backdrop-blur-sm header-gradient-border overflow-hidden">
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
          <nav className="!hidden md:!flex gap-6 items-center" aria-label="Navigation principale">
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
          <div className="!hidden md:!flex items-center gap-3">
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

            {/* Bouton CTA principal - Demander un devis gratuit */}
            <Button
              asChild
              className="bg-brand-orange-dark hover:bg-brand-orange text-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:scale-[1.02] active:scale-100 will-change-transform"
            >
              <Link href={ctaHref} aria-label="Demander un devis gratuit">
                Demander un devis gratuit
              </Link>
            </Button>
          </div>

          {/* Bouton menu mobile (hamburger) - visible uniquement sur mobile */}
          <div className="!flex items-center md:!hidden">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-700"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
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
        id="mobile-menu"
        className={`md:!hidden bg-gradient-to-r from-gray-50/95 via-white/95 to-brand-orange/5 backdrop-blur-md border-t border-gray-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
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
                    ? "font-bold text-brand-orange-dark bg-brand-orange/5"
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
                    ? "font-bold text-brand-orange-dark bg-brand-orange/5"
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
                    ? "font-bold text-brand-orange-dark bg-brand-orange/5"
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
                    ? "font-bold text-brand-orange-dark bg-brand-orange/5"
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
              <a href={TELEPHONE_LIEN} aria-label={`Appeler ${TELEPHONE}`} className="flex items-center gap-2 transition-colors duration-200 ease-out">
                <svg
                  className="w-5 h-5"
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

            {/* Bouton CTA - Demander un devis gratuit */}
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
                Demander un devis gratuit
              </Link>
            </Button>
          </nav>
        </div>
    </header>
  );
}

