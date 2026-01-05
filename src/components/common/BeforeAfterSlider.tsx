/*
  Composant de comparaison avant/après pour les réalisations.
  
  L'utilisateur voit une image de réalisation avec deux boutons "AVANT" et "APRÈS".
  En cliquant sur l'un des boutons, l'image bascule entre l'état avant les travaux
  et l'état après les travaux, permettant de visualiser la transformation réalisée.
  
  Une carte d'information affiche le titre du projet, le lieu et les métiers concernés.
*/

"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

interface RealisationData {
  titre: string;
  lieu: string;
  metiers: string;
  imageAvant: string;
  imageApres: string;
}

interface BeforeAfterSliderProps {
  realisation: RealisationData;
}

export default function BeforeAfterSlider({ realisation }: BeforeAfterSliderProps) {
  /* État pour basculer entre l'affichage "avant" et "après" */
  const [modeSlider, setModeSlider] = useState<"avant" | "apres">("apres");

  return (
    <div className="relative">
      {/* Composant BeforeAfterSlider intégré */}
      <div
        className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 transition-shadow duration-300 hover:shadow-2xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
        role="img"
        aria-label={`Comparaison avant/après: Avant rénovation - ${realisation.titre} et Après rénovation - ${realisation.titre}`}
      >
        {/* Image "Avant" */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            modeSlider === "avant" ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={realisation.imageAvant}
            alt={`Avant rénovation - ${realisation.titre}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            className="object-cover select-none"
            draggable={false}
          />
        </div>

        {/* Image "Après" */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            modeSlider === "apres" ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={realisation.imageApres}
            alt={`Après rénovation - ${realisation.titre}`}
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
            onClick={() => setModeSlider("avant")}
            onTouchStart={(e) => {
              e.currentTarget.style.transform = "scale(0.95)";
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = "";
            }}
            className={`px-3 py-2 sm:px-5 md:px-6 sm:py-2.5 md:py-3 rounded-lg font-bold text-[11px] sm:text-xs md:text-sm uppercase tracking-wider shadow-xl transition-all duration-300 flex items-center gap-1 sm:gap-2 flex-1 sm:flex-initial justify-center min-h-[44px] sm:min-h-[48px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 ${
              modeSlider === "avant"
                ? "bg-brand-blue text-white ring-2 ring-brand-orange-dark ring-offset-1 sm:ring-offset-2 scale-105"
                : "bg-white/90 backdrop-blur-md text-brand-blue hover:bg-white hover:scale-105 active:scale-95"
            }`}
            aria-label="Afficher l'image avant travaux"
            aria-pressed={modeSlider === "avant"}
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
            onClick={() => setModeSlider("apres")}
            onTouchStart={(e) => {
              e.currentTarget.style.transform = "scale(0.95)";
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = "";
            }}
            className={`px-3 py-2 sm:px-5 md:px-6 sm:py-2.5 md:py-3 rounded-lg font-bold text-[11px] sm:text-xs md:text-sm uppercase tracking-wider shadow-xl transition-all duration-300 flex items-center gap-1 sm:gap-2 flex-1 sm:flex-initial justify-center min-h-[44px] sm:min-h-[48px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-dark focus-visible:ring-offset-2 ${
              modeSlider === "apres"
                ? "bg-brand-orange-dark text-white ring-2 ring-brand-blue ring-offset-1 sm:ring-offset-2 scale-105"
                : "bg-white/90 backdrop-blur-md text-brand-orange-dark hover:bg-white hover:scale-105 active:scale-95"
            }`}
            aria-label="Afficher l'image après travaux"
            aria-pressed={modeSlider === "apres"}
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
            {modeSlider === "avant" ? "AVANT" : "APRÈS"}
          </div>
        </div>
      </div>

      {/* Badge d'information sur le projet */}
      <Card className="absolute top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-auto md:top-6 md:left-6 bg-white/98 backdrop-blur-md z-30 sm:max-w-xs md:max-w-sm border border-gray-200/50 shadow-xl sm:shadow-2xl">
        <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6">
          <CardTitle className="text-brand-blue text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight mb-2 sm:mb-3 md:mb-4">
            {realisation.titre}
          </CardTitle>
          <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
            {/* Lieu avec icône */}
            <div className="flex items-start gap-1.5 sm:gap-2">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-brand-orange mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <CardDescription className="text-[11px] sm:text-xs md:text-sm text-gray-700 leading-relaxed">
                {realisation.lieu}
              </CardDescription>
            </div>
            {/* Métiers avec icône */}
            <div className="flex items-start gap-1.5 sm:gap-2">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-brand-orange mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <CardDescription className="text-[11px] sm:text-xs md:text-sm text-gray-700 leading-relaxed">
                {realisation.metiers}
              </CardDescription>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

