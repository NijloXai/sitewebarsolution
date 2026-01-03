import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services as servicesData } from "@/lib/home-data";
import { iconesServices } from "@/components/icons/HomeIcons";

/* Les 4 services principaux affichés en cartes (enrichis avec les icônes) */
const services = servicesData.map((service) => {
  const IconeComponent = iconesServices[service.iconeId];
  return {
    ...service,
    icone: IconeComponent ? <IconeComponent /> : null,
  };
});

export function ServicesPreview() {
  return (
    <section 
      className="py-16 sm:py-20 md:py-24 bg-gray-100" 
      id="services"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de la section amélioré */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 
            id="services-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4 sm:mb-5 md:mb-6"
          >
            Nos domaines d&apos;intervention en Alsace
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Une maîtrise technique complète pour le second œuvre.
          </p>
        </div>

        {/* Grille des 4 cartes services avec design moderne */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          role="list"
          aria-label="Liste des services proposés"
        >
          {services.map((service) => (
            <Card
              key={service.id}
              role="listitem"
              className="group relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2 border-2 border-gray-200 hover:border-brand-orange bg-white pt-0 h-full motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.02] motion-reduce:transition-none"
              style={{
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Image en en-tête avec effet zoom au survol */}
              <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden bg-gray-200">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out"
                />
                {/* Overlay gradient pour améliorer la lisibilité */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-70 motion-safe:group-hover:opacity-50 motion-safe:transition-opacity motion-safe:duration-500 motion-safe:ease-out" />
                {/* Tag/Badge coloré en overlay sur l'image */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <Badge
                    className={`${service.tagColor} text-white border-0 rounded-md shadow-lg uppercase font-bold tracking-wide text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1`}
                    aria-label={`Catégorie: ${service.tag}`}
                  >
                    {service.tag}
                  </Badge>
                </div>
                {/* Icône du service en overlay sur l'image */}
                <div
                  className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 ${
                    service.iconeColor === "orange"
                      ? "bg-brand-orange-dark/90 text-white"
                      : "bg-brand-blue/90 text-white"
                  } rounded-lg flex items-center justify-center shadow-xl backdrop-blur-sm motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out`}
                  aria-hidden="true"
                >
                  {service.icone}
                </div>
              </div>

              {/* Contenu de la carte avec structure CardHeader/CardContent/CardFooter */}
              <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4 flex-1 flex flex-col">
                <h3 
                  className="text-lg sm:text-xl md:text-2xl text-brand-blue-dark font-bold mb-2 sm:mb-3 leading-tight motion-safe:group-hover:text-brand-orange motion-safe:transition-colors motion-safe:duration-300"
                >
                  {service.titre}
                </h3>
                <CardDescription 
                  className="text-brand-orange-dark font-semibold text-xs sm:text-sm md:text-base mb-3 sm:mb-4"
                  id={`${service.id}-description`}
                >
                  {service.accroche}
                </CardDescription>
              </CardHeader>

              <CardContent className="px-4 sm:px-6 pb-3 sm:pb-4 flex-1 flex flex-col">
                {/* Liste des prestations */}
                <ul 
                  className="text-xs sm:text-sm md:text-base text-gray-700 space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 flex-1"
                  role="list"
                  aria-label={`Prestations incluses dans ${service.titre}`}
                >
                  {service.prestations.map((prestation) => (
                    <li 
                      key={prestation} 
                      className="flex items-start"
                      role="listitem"
                    >
                      <span 
                        className="text-brand-orange mt-1 sm:mt-1.5 mr-2 font-bold flex-shrink-0" 
                        aria-hidden="true"
                      >
                        •
                      </span>
                      <span>{prestation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Footer avec bouton "En savoir plus" amélioré */}
              <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
                <Link
                  href={service.lien}
                  className="inline-flex items-center text-brand-orange font-bold hover:text-brand-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded transition-all duration-300 group/link w-full justify-between text-sm sm:text-base"
                  aria-label={`En savoir plus sur ${service.titre} - ${service.accroche}`}
                  aria-describedby={`${service.id}-description`}
                >
                  <span>En savoir plus</span>
                  <span 
                    className="ml-2 motion-safe:group-hover/link:translate-x-1 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out" 
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

