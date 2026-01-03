import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { documentsMarchesPublics } from "@/lib/home-data";
import { IconeDossiersAdmin, IconeSiteOccupe, IconeInterlocuteurUnique, getDocumentIcon } from "@/components/icons/HomeIcons";

/* Helper pour obtenir la classe de délai d'animation */
const getAnimationDelayClass = (index: number) => {
  const delayClasses = [
    "animate-delay-0",
    "animate-delay-100",
    "animate-delay-200",
    "animate-delay-300",
    "animate-delay-400",
    "animate-delay-500",
  ];
  return delayClasses[index] || delayClasses[0];
};

export function MarchesPublicsBlock() {
  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-brand-blue text-white relative overflow-hidden"
      id="marches-publics"
    >
      {/* Gradient animé en arrière-plan pour effet de profondeur */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-800/20 opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center">
          {/* Contenu texte */}
          <div className="space-y-6 md:space-y-8">
            {/* Badge "Espace Collectivités" amélioré avec effet de profondeur et animations */}
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700/90 to-blue-800/90 text-blue-50 border-blue-500/50 text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full uppercase tracking-wider shadow-lg shadow-blue-900/30 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-900/40 hover:scale-105 hover:border-blue-400/70 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 group/badge"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/badge:rotate-12 group-hover/badge:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Espace Collectivités
            </Badge>
            
            {/* Titre principal avec hiérarchie typographique améliorée */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-white">
                Acheteurs Publics : un partenaire conforme et réactif.
              </h2>
              
              {/* Description avec typographie optimisée */}
              <p className="text-blue-50 sm:text-blue-100 text-base sm:text-lg md:text-xl leading-relaxed tracking-normal max-w-2xl">
                Nous connaissons vos contraintes. AR+SOLUTION structure ses
                offres pour répondre aux exigences des marchés publics
                (Écoles, Mairies, Bâtiments administratifs).
              </p>
            </div>

            {/* Liste des avantages avec icônes améliorées et animations */}
            <div className="space-y-4 md:space-y-5 pt-2">
              {[
                {
                  icone: <IconeDossiersAdmin className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />,
                  texte: "Dossiers administratifs RGE & Assurances à jour"
                },
                {
                  icone: <IconeSiteOccupe className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />,
                  texte: "Expérience en site occupé et bâtiments ERP"
                },
                {
                  icone: <IconeInterlocuteurUnique className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />,
                  texte: "Interlocuteur unique dédié aux marchés"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-3 sm:gap-4 group/advantage transition-all duration-300 will-change-transform ${getAnimationDelayClass(index)}`}
                >
                  <div className="flex-shrink-0 mt-0.5 relative">
                    <div className="transition-all duration-300 will-change-transform">
                      {item.icone}
                    </div>
                    {/* Cercle de pulsation autour de l'icône au survol */}
                    <div className="absolute inset-0 rounded-full bg-brand-orange/20 scale-0 opacity-0 transition-all duration-500 -z-10 -m-2 will-change-transform-opacity" />
                  </div>
                  <span className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                    {item.texte}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA email avec animations améliorées */}
            <div className="pt-2 md:pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-blue hover:bg-gray-100 shadow-lg hover:shadow-xl hover:shadow-white/20 transition-all duration-300 ease-out font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 group/button"
              >
                <a href="mailto:marches@ar-solution.fr" className="inline-flex items-center gap-2">
                  <span>Contacter le service Marchés Publics</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover/button:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </Button>
            </div>
          </div>

          {/* Grille des documents disponibles avec animations d'entrée */}
          <div className="bg-blue-800/50 p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl border border-blue-700 shadow-2xl backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4 md:gap-5 lg:gap-6">
              {documentsMarchesPublics.map((doc, index) => (
                <Card
                  key={doc.titre}
                  className="group relative bg-gradient-to-br from-brand-blue via-blue-700 to-brand-blue border-2 border-blue-600/60 flex flex-col items-center text-center overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 focus-within:ring-offset-blue-800"
                  style={{
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "both"
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Document: ${doc.titre} - ${doc.disponibilite}`}
                >
                  {/* Bordure lumineuse au focus pour l'accessibilité */}
                  <div className="absolute inset-0 border-2 border-transparent rounded-lg pointer-events-none group-focus-within:border-brand-orange/50" />
                  
                  <CardContent className="p-4 md:p-5 lg:p-6 relative z-10 w-full">
                    {/* Icône document */}
                    <div className="mb-3 md:mb-4 text-blue-200 flex justify-center group-focus-within:scale-110 group-focus-within:text-brand-orange">
                      <div className="relative">
                        <div className="group-focus-within:rotate-6">
                          {getDocumentIcon(doc.titre, "w-10 h-10 md:w-12 md:h-12")}
                        </div>
                        {/* Cercle de pulsation autour de l'icône au focus pour l'accessibilité */}
                        <div className="absolute inset-0 rounded-full bg-brand-orange/20 scale-0 opacity-0 group-focus-within:opacity-100 group-focus-within:scale-150 transition-all duration-500 -z-10" />
                      </div>
                    </div>
                    
                    {/* Titre avec meilleure hiérarchie */}
                    <CardTitle className="text-sm md:text-base lg:text-lg text-white mb-2 md:mb-3 font-bold leading-tight group-focus-within:text-brand-orange">
                      {doc.titre}
                    </CardTitle>
                    
                    {/* Badge de disponibilité avec design amélioré et animations */}
                    <div className="flex justify-center">
                      <Badge
                        variant="outline"
                        className={`text-xs md:text-sm px-2 md:px-3 py-1 md:py-1.5 rounded-full font-semibold border-2 ${
                          doc.disponibilite === "Disponible"
                            ? "bg-green-500/20 text-green-200 border-green-400/50"
                            : "bg-amber-500/20 text-amber-200 border-amber-400/50"
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          {doc.disponibilite === "Disponible" ? (
                            <>
                              <svg
                                className="w-3 h-3 md:w-3.5 md:h-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              {doc.disponibilite}
                            </>
                          ) : (
                            <>
                              <svg
                                className="w-3 h-3 md:w-3.5 md:h-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              {doc.disponibilite}
                            </>
                          )}
                        </span>
                      </Badge>
                    </div>
                  </CardContent>
                  
                  {/* Effet de profondeur avec ombre portée au focus pour l'accessibilité */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/0 via-brand-orange/0 to-brand-orange/0 rounded-lg blur-xl opacity-0 group-focus-within:opacity-100 group-focus-within:from-brand-orange/10 group-focus-within:via-brand-orange/5 group-focus-within:to-brand-orange/10 transition-opacity duration-500 -z-10" />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

