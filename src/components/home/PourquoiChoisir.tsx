import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { argumentsChoix as argumentsChoixData, etapesMethode as etapesMethodeData } from "@/lib/home-data";
import { iconesArguments, iconesEtapes } from "@/components/icons/HomeIcons";

/* Helper pour obtenir les classes CSS selon le type de couleur */
const getCouleurClasses = (type: string) => {
  const classes = {
    green: "bg-green-50 text-green-600 border-green-200",
    blue: "bg-blue-50 text-blue-600 border-blue-200",
    amber: "bg-amber-50 text-amber-600 border-amber-200",
    purple: "bg-purple-50 text-purple-600 border-purple-200",
  };
  return classes[type as keyof typeof classes] || classes.blue;
};

/* Helper pour obtenir la classe de délai d'animation (remplace les styles inline) */
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

/* Arguments "Pourquoi nous choisir" avec icônes spécifiques (enrichis avec les icônes) */
const argumentsChoix = argumentsChoixData.map((argument) => {
  const IconeComponent = iconesArguments[argument.iconeId];
  return {
    ...argument,
    icone: IconeComponent ? <IconeComponent /> : null,
  };
});

/* Étapes de la méthode de travail (stepper) (enrichies avec les icônes) */
const etapesMethode = etapesMethodeData.map((etape) => {
  const IconeComponent = iconesEtapes[etape.iconeId];
  return {
    ...etape,
    icone: IconeComponent ? <IconeComponent /> : null,
  };
});

export function PourquoiChoisir() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50 overflow-hidden" id="pourquoi-choisir" aria-labelledby="pourquoi-choisir-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Colonne gauche : Pourquoi nous choisir */}
          <div>
            <div className="mb-8 md:mb-10">
              <h2 id="pourquoi-choisir-title" className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                Pourquoi choisir AR+SOLUTION ?
              </h2>
              <p className="text-gray-600 text-lg">
                Des engagements concrets qui font la différence
              </p>
            </div>
            <div className="space-y-4 md:space-y-5">
              {argumentsChoix.map((argument, index) => (
                <div
                  key={argument.titre}
                  className={`group relative bg-white rounded-xl border-2 p-4 md:p-5 transition-all duration-300 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left will-change-transform-opacity ${getAnimationDelayClass(index)}`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icône avec couleur spécifique */}
                    <div className="flex-shrink-0">
                      <div className={`flex items-center justify-center h-12 w-12 rounded-xl border-2 ${getCouleurClasses(argument.couleurType)} transition-all duration-300 will-change-transform`}>
                        {argument.icone}
                      </div>
                    </div>
                    {/* Texte de l'argument */}
                    <div className="flex-1 pt-1">
                      <h4 className="text-lg md:text-xl font-bold text-brand-blue mb-2 transition-colors duration-300">
                        {argument.titre}
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {argument.description}
                      </p>
                    </div>
                  </div>
                  {/* Ligne décorative au survol */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-blue to-transparent opacity-0 transition-opacity duration-300 rounded-b-xl will-change-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite : Méthode de travail (stepper) */}
          <Card className="shadow-sm border border-gray-200 transition-shadow duration-500 ease-in-out">
            <CardHeader className="bg-white border-b border-brand-orange/20 rounded-t-lg p-5 md:p-6 lg:p-7">
              <CardTitle className="text-xl md:text-2xl font-bold text-brand-blue">
                Notre méthode de travail
              </CardTitle>
              <CardDescription className="text-gray-600 text-sm md:text-base mt-3 md:mt-4">
                4 étapes simples pour votre projet
              </CardDescription>
            </CardHeader>
            <CardContent className="p-5 md:p-6 lg:p-7">
              {/* Timeline modernisée : cartes empilées avec numéros discrets */}
              <div className="space-y-5 md:space-y-6">
                {etapesMethode.map((etape, index) => (
                  <div 
                    key={etape.numero} 
                    className={`group relative motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom will-change-transform-opacity ${getAnimationDelayClass(index)}`}
                  >
                    <div className="bg-white rounded-lg p-4 md:p-5 border border-gray-100 group-hover:border-brand-orange group-hover:shadow-xl group-hover:shadow-brand-orange/20 motion-safe:group-hover:scale-[1.02] transition-all duration-300 ease-in-out">
                      <div className="flex items-start gap-4">
                        {/* Conteneur avec icône SVG et numéro en overlay */}
                        <div className="flex-shrink-0 relative">
                          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 border-2 border-brand-orange/20 flex items-center justify-center transition-all duration-300 ease-in-out will-change-transform">
                            {/* Icône SVG avec rotation au hover */}
                            <div className="absolute inset-0 flex items-center justify-center text-brand-orange transition-transform duration-300 ease-in-out">
                              <div className="w-6 h-6 md:w-7 md:h-7">
                                {etape.icone}
                              </div>
                            </div>
                            {/* Numéro en overlay (coin supérieur droit) */}
                            <div className="absolute -top-1.5 -right-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full bg-brand-orange-dark text-white flex items-center justify-center text-xs md:text-sm font-bold shadow-md transition-all duration-300 ease-in-out z-10">
                              {etape.numero}
                            </div>
                          </div>
                        </div>
                        {/* Contenu de l'étape */}
                        <div className="flex-1 pt-0.5">
                          <h5 className="font-bold text-brand-blue text-base md:text-lg mb-1.5 md:mb-2 transition-colors duration-300 ease-in-out">
                            {etape.titre}
                          </h5>
                          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            {etape.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Badge de confiance intégré de manière discrète */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <svg
                    className="w-3.5 h-3.5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>Processus éprouvé</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

