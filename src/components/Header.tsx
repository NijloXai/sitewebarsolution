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
import LogoIcon from "@/components/LogoIcon";

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
  /* État pour détecter le scroll et appliquer les effets visuels */
  const [scrolled, setScrolled] = useState(false);

  /* Détection du scroll pour appliquer les effets visuels */
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    /* Vérifier l'état initial au montage */
    handleScroll();

    /* Ajouter l'écouteur d'événement avec throttling pour performance */
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "backdrop-blur-md bg-white/95 shadow-lg border-b border-gray-200/50"
          : "bg-white border-b border-gray-100 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ease-in-out ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo AR+SOLUTION - lien vers l'accueil avec icône et effets visuels */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className={`group flex items-center gap-3 font-bold tracking-tighter transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 ${
                scrolled ? "text-xl" : "text-2xl"
              }`}
              aria-label="Retour à l'accueil - AR+SOLUTION"
            >
              {/* Icône SVG personnalisée */}
              <div className={`transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3 ${
                scrolled ? "scale-90" : "scale-100"
              }`}>
                <LogoIcon 
                  size={scrolled ? 32 : 40}
                  className="drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
              
              {/* Texte avec dégradé et ombres */}
              <span className="relative">
                {/* AR+ avec dégradé bleu */}
                <span 
                  className="bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-blue bg-clip-text text-transparent drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
                  style={{
                    textShadow: "0 1px 2px rgba(30, 58, 95, 0.1)"
                  }}
                >
                  AR+
                </span>
                {/* SOLUTION avec dégradé orange */}
                <span 
                  className="bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
                  style={{
                    textShadow: "0 1px 2px rgba(249, 115, 22, 0.1)"
                  }}
                >
                  SOLUTION
                </span>
                
                {/* Ombre portée subtile pour la profondeur */}
                <span 
                  className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-orange opacity-0 group-hover:opacity-5 blur-sm transition-opacity duration-300 -z-10"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>

          {/* Menu de navigation desktop - masqué sur mobile */}
          <nav className="hidden md:flex space-x-8 items-center">
            {/* Lien vers les services */}
            <Link
              href="/services"
              className={`text-sm font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded relative group ${
                pageActive === "services"
                  ? "font-bold text-brand-orange"
                  : "text-gray-700 hover:text-brand-orange"
              }`}
              aria-current={pageActive === "services" ? "page" : undefined}
            >
              <span className="relative">
                Nos Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </span>
            </Link>

            {/* Lien vers les réalisations */}
            <Link
              href="/realisations"
              className={`text-sm font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded relative group ${
                pageActive === "realisations"
                  ? "font-bold text-brand-orange"
                  : "text-gray-700 hover:text-brand-orange"
              }`}
              aria-current={pageActive === "realisations" ? "page" : undefined}
            >
              <span className="relative">
                Réalisations
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </span>
            </Link>

            {/* Lien vers les marchés publics */}
            <Link
              href="/marches-publics"
              className={`text-sm font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded relative group ${
                pageActive === "marches-publics"
                  ? "font-bold text-brand-orange"
                  : "text-gray-700 hover:text-brand-orange"
              }`}
              aria-current={pageActive === "marches-publics" ? "page" : undefined}
            >
              <span className="relative">
                Marchés Publics
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </span>
            </Link>

            {/* Lien vers la page À propos */}
            <Link
              href="/a-propos"
              className={`text-sm font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded relative group ${
                pageActive === "a-propos"
                  ? "font-bold text-brand-orange"
                  : "text-gray-700 hover:text-brand-orange"
              }`}
              aria-current={pageActive === "a-propos" ? "page" : undefined}
            >
              <span className="relative">
                À propos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </span>
            </Link>
          </nav>

          {/* Boutons CTA header (téléphone + devis) - masqués sur mobile */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Lien téléphone avec icône */}
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-gray-600 hover:text-brand-blue hover:bg-blue-50 transition-all duration-300 ease-in-out active:scale-95 group"
            >
              <a href={TELEPHONE_LIEN} className="flex items-center gap-2">
                {/* Icône téléphone SVG */}
                <svg
                  className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
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

            {/* Bouton CTA principal - Demander un devis */}
            <Button
              asChild
              className="bg-brand-orange hover:bg-brand-orange-dark text-white shadow-md hover:shadow-xl hover:scale-105 active:scale-100 transition-all duration-300 ease-in-out font-semibold"
              aria-label="Demander un devis gratuit"
            >
              <Link href={ctaHref} className="transition-transform duration-300 ease-in-out">Demander un devis</Link>
            </Button>
          </div>

          {/* Bouton menu mobile (hamburger) - visible uniquement sur mobile */}
          <div className="flex items-center md:hidden">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 active:scale-95 transition-all duration-300 ease-in-out"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {/* Icône hamburger ou croix selon l'état avec animation */}
              <svg
                className={`h-6 w-6 transition-transform duration-300 ease-in-out ${
                  menuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
        className={`md:hidden border-t overflow-hidden transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-gray-200/50"
            : "bg-white border-gray-100"
        } ${
          menuOpen
            ? "max-h-[600px] opacity-100 shadow-lg"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
        role="region"
        aria-label="Menu de navigation mobile"
      >
        <nav className="flex flex-col px-4 py-4 space-y-3">
            {/* Lien vers les services */}
            <Button
              variant="ghost"
              asChild
              className={`justify-start w-full transition-all duration-300 ease-in-out active:scale-95 ${
                pageActive === "services"
                  ? "font-bold text-brand-orange bg-orange-50"
                  : "text-gray-700 hover:text-brand-orange hover:bg-gray-50"
              }`}
            >
              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
              >
                Nos Services
              </Link>
            </Button>

            {/* Lien vers les réalisations */}
            <Button
              variant="ghost"
              asChild
              className={`justify-start w-full transition-all duration-300 ease-in-out active:scale-95 ${
                pageActive === "realisations"
                  ? "font-bold text-brand-orange bg-orange-50"
                  : "text-gray-700 hover:text-brand-orange hover:bg-gray-50"
              }`}
            >
              <Link
                href="/realisations"
                onClick={() => setMenuOpen(false)}
              >
                Réalisations
              </Link>
            </Button>

            {/* Lien vers les marchés publics */}
            <Button
              variant="ghost"
              asChild
              className={`justify-start w-full transition-all duration-300 ease-in-out active:scale-95 ${
                pageActive === "marches-publics"
                  ? "font-bold text-brand-orange bg-orange-50"
                  : "text-gray-700 hover:text-brand-orange hover:bg-gray-50"
              }`}
            >
              <Link
                href="/marches-publics"
                onClick={() => setMenuOpen(false)}
              >
                Marchés Publics
              </Link>
            </Button>

            {/* Lien vers la page À propos */}
            <Button
              variant="ghost"
              asChild
              className={`justify-start w-full transition-all duration-300 ease-in-out active:scale-95 ${
                pageActive === "a-propos"
                  ? "font-bold text-brand-orange bg-orange-50"
                  : "text-gray-700 hover:text-brand-orange hover:bg-gray-50"
              }`}
            >
              <Link
                href="/a-propos"
                onClick={() => setMenuOpen(false)}
              >
                À propos
              </Link>
            </Button>

            {/* Séparateur */}
            <hr className="border-gray-200 my-2" />

            {/* Lien téléphone */}
            <Button
              variant="ghost"
              asChild
              className="justify-start w-full text-gray-600 hover:text-brand-blue hover:bg-blue-50 transition-all duration-300 ease-in-out active:scale-95 group"
            >
              <a href={TELEPHONE_LIEN} className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:scale-110"
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
              className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-100 transition-all duration-300 ease-in-out font-semibold"
            >
              <Link href={ctaHref} onClick={() => setMenuOpen(false)}>
                Demander un devis
              </Link>
            </Button>
          </nav>
        </div>
    </header>
  );
}

