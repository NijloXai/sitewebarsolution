import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Feature {
  id: string;
  titre: string;
  description: string;
  /** Couleur de l'icône ("blue" ou "orange") */
  iconeColor?: "blue" | "orange" | "green";
  /** Icône personnalisée (ReactNode), sinon utilise une icône par défaut */
  icone?: React.ReactNode;
  /** Lien optionnel vers une page de détail */
  lien?: string;
  /** Texte du lien */
  lienTexte?: string;
  /** Badge optionnel à afficher */
  badge?: string;
  /** Couleur du badge */
  badgeColor?: "blue" | "orange" | "green";
}

interface ServiceFeaturesGridProps {
  /** Titre principal de la section */
  title?: string;
  /** Sous-titre descriptif */
  subtitle?: string;
  /** Liste des features/prestations à afficher */
  features: readonly Feature[];
  /** Nombre de colonnes sur desktop */
  columns?: 2 | 3 | 4;
  /** Classe CSS personnalisée */
  className?: string;
  /** Style de fond de la section */
  variant?: "white" | "gray";
}

/**
 * Composant réutilisable pour afficher une grille de prestations/features sur les pages de services.
 * Affiche des cartes avec icônes, titres, descriptions et liens optionnels.
 * 
 * @example
 * ```tsx
 * <ServiceFeaturesGrid
 *   title="Nos prestations"
 *   features={[
 *     {
 *       id: "1",
 *       titre: "Prestation 1",
 *       description: "...",
 *       iconeColor: "blue"
 *     }
 *   ]}
 *   columns={3}
 * />
 * ```
 */
export default function ServiceFeaturesGrid({
  title,
  subtitle,
  features,
  columns = 3,
  className = "",
  variant = "white",
}: ServiceFeaturesGridProps) {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
  };

  const gridColsClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  // Icône par défaut si non fournie
  const getDefaultIcon = (iconeColor: Feature["iconeColor"] = "blue") => (
    <svg
      className="w-6 h-6 sm:w-7 sm:h-7"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  return (
    <section className={`py-16 md:py-24 ${backgroundClasses[variant]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de la section */}
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}

        {/* Grille des features */}
        <div className={`grid grid-cols-1 ${gridColsClasses[columns]} gap-6`}>
          {features.map((feature) => (
            <Card
              key={feature.id}
              className={`group relative overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col border-2 ${
                feature.badge
                  ? "border-brand-orange/20 bg-brand-orange/5"
                  : "border-gray-200"
              } hover:border-brand-orange bg-white h-full`}
            >
              {/* Badge optionnel en overlay */}
              {feature.badge && (
                <div className="absolute top-3 right-3 z-10">
                  <Badge
                    className={`text-white text-xs font-bold shadow-lg ${
                      feature.badgeColor === "orange"
                        ? "bg-brand-orange"
                        : feature.badgeColor === "green"
                        ? "bg-green-600"
                        : "bg-brand-blue"
                    }`}
                  >
                    {feature.badge}
                  </Badge>
                </div>
              )}

              {/* CardHeader avec icône */}
              <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
                {/* Icône de la feature */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 ${
                    feature.iconeColor === "orange"
                      ? "bg-brand-orange/10 text-brand-orange"
                      : feature.iconeColor === "green"
                      ? "bg-green-50 text-green-600"
                      : "bg-brand-blue/10 text-brand-blue"
                  } rounded-lg flex items-center justify-center mb-4 shadow-sm transition-all duration-300 group-hover:scale-110`}
                >
                  {feature.icone || getDefaultIcon(feature.iconeColor)}
                </div>
                {/* Titre */}
                <CardTitle className="text-lg sm:text-xl md:text-2xl text-brand-blue-dark font-bold mb-2 sm:mb-3 leading-tight group-hover:text-brand-orange transition-colors duration-300">
                  {feature.titre}
                </CardTitle>
              </CardHeader>

              {/* CardContent avec description */}
              <CardContent className="px-4 sm:px-6 pb-3 sm:pb-4 flex-1 flex flex-col">
                <CardDescription className="text-sm md:text-base text-gray-700 mb-3 sm:mb-4 flex-1 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>

              {/* CardFooter avec lien */}
              {feature.lien && feature.lienTexte && (
                <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
                  <Link
                    href={feature.lien}
                    className="inline-flex items-center text-brand-orange font-bold hover:text-brand-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded transition-all duration-300 group/link w-full justify-between text-sm sm:text-base"
                    aria-label={feature.lienTexte}
                  >
                    <span>{feature.lienTexte}</span>
                    <span
                      className="ml-2 motion-safe:group-hover/link:translate-x-1 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

