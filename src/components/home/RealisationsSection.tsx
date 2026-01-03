"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { realisationFeatured } from "@/lib/home-data";

// Lazy loading du slider avant/après (visible uniquement après scroll)
const BeforeAfterSlider = dynamic(() => import("@/components/BeforeAfterSlider").then(mod => ({ default: mod.BeforeAfterSlider })), {
  ssr: false, // Composant interactif non critique pour le SEO
});

export function RealisationsSection() {
  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-white" id="realisations">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        {/* En-tête amélioré avec badge contextuel, meilleure hiérarchie visuelle et bouton CTA - Optimisé mobile */}
        <div className="text-center md:text-left mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {/* Badge contextuel */}
          <div className="flex justify-center md:justify-start mb-3 sm:mb-4">
            <Badge 
              variant="outline" 
              className="bg-brand-orange/10 text-brand-orange border-brand-orange/30 uppercase tracking-wide font-semibold px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm"
            >
              Portfolio
            </Badge>
          </div>
          
          {/* Titre principal avec meilleure hiérarchie */}
          <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-2 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-2 sm:mb-3 md:mb-4 leading-tight">
              Nos réalisations parlent pour nous
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto md:mx-0 leading-relaxed">
              Découvrez la qualité de nos finitions sur des chantiers
              récents.
            </p>
          </div>

          {/* Bouton CTA visible sur toutes les tailles d'écran - Optimisé mobile */}
          <div className="flex justify-center md:justify-start px-2 sm:px-0">
            <Button
              asChild
              size="lg"
              className="bg-brand-orange-dark hover:bg-brand-orange text-white shadow-lg hover:shadow-xl transition-all duration-300 font-bold w-full sm:w-auto min-h-[48px] sm:min-h-auto px-5 sm:px-6 text-sm sm:text-base"
            >
              <Link href="/realisations" aria-label="Explorer le portfolio de réalisations">
                Explorer le portfolio
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </Button>
          </div>
        </div>

        {/* Slider avant/après avec comparaison interactive */}
        <div className="relative">
          <BeforeAfterSlider
            imageAvant={realisationFeatured.imageAvant}
            imageApres={realisationFeatured.imageApres}
            altAvant={`Avant rénovation - ${realisationFeatured.titre}`}
            altApres={`Après rénovation - ${realisationFeatured.titre}`}
            hauteur="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
            modeInitial="apres"
          />

          {/* Badge d'information sur le projet - Optimisé mobile */}
          <Card className="absolute top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-auto md:top-6 md:left-6 bg-white/98 backdrop-blur-md z-30 sm:max-w-xs md:max-w-sm border border-gray-200/50 shadow-xl sm:shadow-2xl">
            <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6">
              <CardTitle className="text-brand-blue text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight mb-2 sm:mb-3 md:mb-4">
                {realisationFeatured.titre}
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
                    {realisationFeatured.lieu}
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
                    {realisationFeatured.metiers}
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}

