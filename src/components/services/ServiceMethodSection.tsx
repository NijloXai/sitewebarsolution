import Image from "next/image";

export interface EtapeMethode {
  numero: number;
  titre: string;
  description: string;
  /** Icône personnalisée (optionnel, sinon utilise le numéro) */
  icone?: React.ReactNode;
}

interface ServiceMethodSectionProps {
  /** Titre principal de la section */
  title?: string;
  /** Sous-titre descriptif */
  subtitle?: string;
  /** Liste des étapes de la méthode */
  etapes: EtapeMethode[];
  /** Image d'illustration (optionnel) */
  image?: {
    src: string;
    alt: string;
  };
  /** Position de l'image par rapport au contenu */
  imagePosition?: "left" | "right";
  /** Style de présentation */
  variant?: "timeline" | "cards" | "list";
  /** Style de fond de la section */
  backgroundVariant?: "white" | "gray" | "blue";
  /** Classe CSS personnalisée */
  className?: string;
}

/**
 * Composant réutilisable pour afficher une section méthode en 4 étapes.
 * Supporte plusieurs variantes d'affichage : timeline horizontale, cartes ou liste.
 * 
 * @example
 * ```tsx
 * <ServiceMethodSection
 *   title="Notre méthode"
 *   etapes={[
 *     { numero: 1, titre: "Étape 1", description: "..." }
 *   ]}
 *   variant="timeline"
 * />
 * ```
 */
export default function ServiceMethodSection({
  title = "Notre méthode de travail",
  subtitle,
  etapes,
  image,
  imagePosition = "right",
  variant = "timeline",
  backgroundVariant = "white",
  className = "",
}: ServiceMethodSectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    blue: "bg-brand-blue text-white",
  };

  const titleColorClasses = {
    white: "text-brand-blue",
    gray: "text-brand-blue",
    blue: "text-white",
  };

  const renderTimeline = () => (
    <div className="relative">
      {/* Ligne de temps (desktop) */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {etapes.map((etape, index) => (
          <div key={etape.numero} className="bg-white p-4 text-center md:pt-8">
            <div
              className={`w-12 h-12 mx-auto ${
                index === 0
                  ? backgroundVariant === "blue"
                    ? "bg-white text-brand-blue"
                    : "bg-brand-blue text-white"
                  : backgroundVariant === "blue"
                  ? "bg-white/20 text-white"
                  : "bg-gray-200 text-gray-600"
              } rounded-full flex items-center justify-center font-bold text-xl mb-4 border-4 border-white shadow-sm`}
            >
              {etape.icone || etape.numero}
            </div>
            <h3 className={`font-bold text-lg mb-2 ${titleColorClasses[backgroundVariant]}`}>
              {etape.titre}
            </h3>
            <p
              className={`text-sm ${
                backgroundVariant === "blue" ? "text-blue-100" : "text-gray-500"
              }`}
            >
              {etape.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {etapes.map((etape, index) => (
        <div
          key={etape.numero}
          className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
            index === 0 ? "border-brand-orange" : "border-gray-200"
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center font-bold">
              {etape.icone || etape.numero}
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">{etape.titre}</h3>
              <p className="text-sm text-gray-600">{etape.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderList = () => (
    <div className="space-y-6">
      {etapes.map((etape) => (
        <div key={etape.numero} className="flex gap-4">
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-full ${
              backgroundVariant === "blue"
                ? "bg-white/10 text-white border border-white/20"
                : "bg-blue-100 text-brand-blue"
            } flex items-center justify-center font-bold`}
          >
            {etape.icone || etape.numero}
          </div>
          <div>
            <h4
              className={`font-bold text-lg mb-1 ${
                backgroundVariant === "blue" ? "text-white" : "text-slate-900"
              }`}
            >
              {etape.titre}
            </h4>
            <p
              className={`text-sm ${
                backgroundVariant === "blue" ? "text-blue-200" : "text-gray-600"
              }`}
            >
              {etape.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case "timeline":
        return renderTimeline();
      case "cards":
        return renderCards();
      case "list":
        return renderList();
      default:
        return renderTimeline();
    }
  };

  return (
    <section className={`py-16 md:py-24 ${backgroundClasses[backgroundVariant]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {image && variant !== "timeline" ? (
          // Layout avec image à côté du contenu (pour variant cards/list)
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image */}
            <div className={`w-full lg:w-1/2 ${imagePosition === "left" ? "order-2" : "order-1"}`}>
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Contenu */}
            <div className={`w-full lg:w-1/2 ${imagePosition === "left" ? "order-1" : "order-2"}`}>
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 md:mb-6 ${titleColorClasses[backgroundVariant]}`}
              >
                {title}
              </h2>
              {subtitle && (
                <p
                  className={`text-lg mb-8 ${
                    backgroundVariant === "blue" ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {subtitle}
                </p>
              )}
              {renderContent()}
            </div>
          </div>
        ) : (
          // Layout sans image ou timeline (layout centré)
          <>
            <h2
              className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 ${titleColorClasses[backgroundVariant]}`}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className={`text-center mb-8 ${
                  backgroundVariant === "blue" ? "text-blue-100" : "text-gray-600"
                }`}
              >
                {subtitle}
              </p>
            )}
            {renderContent()}
          </>
        )}
      </div>
    </section>
  );
}

