"use client";

import { useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  imageAvant: string;
  imageApres: string;
  altAvant?: string;
  altApres?: string;
  hauteur?: string; // ex: "500px" ou "h-[500px]" ou responsive "h-[300px] md:h-[500px] lg:h-[600px]"
  modeInitial?: "avant" | "apres"; // Mode initial affiché
}

export function BeforeAfterSlider({
  imageAvant,
  imageApres,
  altAvant = "Image avant travaux",
  altApres = "Image après travaux",
  hauteur = "h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]",
  modeInitial = "apres",
}: BeforeAfterSliderProps) {
  const [modeActuel, setModeActuel] = useState<"avant" | "apres">(modeInitial);

  // Calcul de la hauteur - support des classes Tailwind responsive
  const isTailwindClass = hauteur.includes("h-");
  const heightValue = isTailwindClass ? undefined : hauteur.replace("px", "");
  const heightClass = isTailwindClass ? hauteur : "";

  return (
    <div
      className={`relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 transition-shadow duration-300 hover:shadow-2xl ${heightClass}`}
      style={heightValue ? { height: `${heightValue}px` } : undefined}
      role="img"
      aria-label={`Comparaison avant/après: ${altAvant} et ${altApres}`}
    >
      {/* Image "Avant" */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
          modeActuel === "avant" ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <Image
          src={imageAvant}
          alt={altAvant}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          className="object-cover select-none"
          draggable={false}
        />
      </div>

      {/* Image "Après" */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
          modeActuel === "apres" ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        <Image
          src={imageApres}
          alt={altApres}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          className="object-cover select-none"
          draggable={false}
        />
      </div>

      {/* Boutons de contrôle */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 sm:gap-3 w-full max-w-[calc(100%-1rem)] sm:max-w-[calc(100%-2rem)] md:max-w-none px-2 sm:px-4 md:px-0 justify-center">
        {/* Bouton AVANT */}
        <button
          onClick={() => setModeActuel("avant")}
          onTouchStart={(e) => {
            // Amélioration du feedback tactile sur mobile
            e.currentTarget.style.transform = "scale(0.95)";
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.transform = "";
          }}
          className={`px-3 py-2 sm:px-5 md:px-6 sm:py-2.5 md:py-3 rounded-lg font-bold text-[11px] sm:text-xs md:text-sm uppercase tracking-wider shadow-xl transition-all duration-300 flex items-center gap-1 sm:gap-2 flex-1 sm:flex-initial justify-center min-h-[44px] sm:min-h-[48px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 ${
            modeActuel === "avant"
              ? "bg-brand-blue text-white ring-2 ring-brand-orange-dark ring-offset-1 sm:ring-offset-2 scale-105"
              : "bg-white/90 backdrop-blur-md text-brand-blue hover:bg-white hover:scale-105 active:scale-95"
          }`}
          aria-label="Afficher l'image avant travaux"
          aria-pressed={modeActuel === "avant"}
        >
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <span className="whitespace-nowrap">AVANT</span>
        </button>

        {/* Bouton APRÈS */}
        <button
          onClick={() => setModeActuel("apres")}
          onTouchStart={(e) => {
            // Amélioration du feedback tactile sur mobile
            e.currentTarget.style.transform = "scale(0.95)";
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.transform = "";
          }}
          className={`px-3 py-2 sm:px-5 md:px-6 sm:py-2.5 md:py-3 rounded-lg font-bold text-[11px] sm:text-xs md:text-sm uppercase tracking-wider shadow-xl transition-all duration-300 flex items-center gap-1 sm:gap-2 flex-1 sm:flex-initial justify-center min-h-[44px] sm:min-h-[48px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-dark focus-visible:ring-offset-2 ${
            modeActuel === "apres"
              ? "bg-brand-orange-dark text-white ring-2 ring-brand-blue ring-offset-1 sm:ring-offset-2 scale-105"
              : "bg-white/90 backdrop-blur-md text-brand-orange-dark hover:bg-white hover:scale-105 active:scale-95"
          }`}
          aria-label="Afficher l'image après travaux"
          aria-pressed={modeActuel === "apres"}
        >
          <span className="whitespace-nowrap">APRÈS</span>
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicateur visuel en haut */}
      <div className="absolute top-2 sm:top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        <div className="bg-black/60 backdrop-blur-md text-white px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-md sm:rounded-lg uppercase font-bold text-[10px] sm:text-[11px] md:text-xs tracking-wider shadow-xl">
          {modeActuel === "avant" ? "AVANT" : "APRÈS"}
        </div>
      </div>
    </div>
  );
}