import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface Realisation {
  titre: string;
  lieu: string;
  type: string;
  description?: string;
  image: string;
  /** Lien vers la page détaillée (optionnel) */
  slug?: string;
}

interface ServiceRealisationsSectionProps {
  /** Titre principal de la section */
  title?: string;
  /** Sous-titre descriptif */
  subtitle?: string;
  /** Liste des réalisations à afficher */
  realisations: Realisation[];
  /** Lien vers la page complète des réalisations */
  voirToutLink?: string;
  /** Texte du lien "Voir tout" */
  voirToutText?: string;
  /** Style de fond de la section */
  variant?: "white" | "gray" | "dark";
  /** Classe CSS personnalisée */
  className?: string;
}

/**
 * Composant réutilisable pour afficher une section de réalisations sur les pages de services.
 * Affiche une grille de projets avec images, badges et descriptions.
 * 
 * @example
 * ```tsx
 * <ServiceRealisationsSection
 *   title="Projets réalisés"
 *   realisations={[
 *     {
 *       titre: "Projet 1",
 *       lieu: "Strasbourg",
 *       type: "Résidentiel",
 *       image: "/img.jpg"
 *     }
 *   ]}
 * />
 * ```
 */
export default function ServiceRealisationsSection({
  title = "Nos réalisations",
  subtitle,
  realisations,
  voirToutLink = "/realisations",
  voirToutText = "Voir toutes nos réalisations",
  variant = "gray",
  className = "",
}: ServiceRealisationsSectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    dark: "bg-slate-900 text-white",
  };

  const titleColorClasses = {
    white: "text-brand-blue",
    gray: "text-brand-blue",
    dark: "text-white",
  };

  const subtitleColorClasses = {
    white: "text-gray-600",
    gray: "text-gray-600",
    dark: "text-slate-400",
  };

  return (
    <section className={`py-16 md:py-24 ${backgroundClasses[variant]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de la section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${titleColorClasses[variant]}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`mt-2 ${subtitleColorClasses[variant]}`}>{subtitle}</p>
            )}
          </div>
          {voirToutLink && (
            <Link
              href={voirToutLink}
              className={`hidden md:inline-flex items-center font-semibold hover:underline mt-4 md:mt-0 ${
                variant === "dark" ? "text-brand-orange hover:text-orange-400" : "text-brand-orange"
              }`}
              aria-label={voirToutText}
            >
              {voirToutText}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          )}
        </div>

        {/* Grille des projets */}
        <div
          className={`grid ${
            realisations.length === 2
              ? "md:grid-cols-2"
              : realisations.length === 3
              ? "md:grid-cols-2 lg:grid-cols-3"
              : "md:grid-cols-2 lg:grid-cols-3"
          } gap-6 ${variant === "dark" ? "" : ""}`}
        >
          {realisations.map((projet) => {
            const cardContent = (
              <div
                key={projet.titre}
                className={`group relative overflow-hidden rounded-xl ${
                  variant === "dark" ? "bg-slate-800 h-64" : "bg-white shadow-md"
                } ${variant === "dark" ? "" : "h-full"}`}
              >
                {/* Image */}
                <div
                  className={`relative ${
                    variant === "dark" ? "h-full" : "h-48"
                  } overflow-hidden`}
                >
                  <Image
                    src={projet.image}
                    alt={projet.titre}
                    fill
                    loading="lazy"
                    className={`object-cover transition duration-500 ${
                      variant === "dark"
                        ? "opacity-80 group-hover:opacity-100 group-hover:scale-105"
                        : "group-hover:scale-105"
                    }`}
                  />
                  {/* Badge type de projet */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="outline"
                      className={`uppercase ${
                        variant === "dark"
                          ? "bg-brand-orange-dark text-white border-brand-orange-dark"
                          : projet.type === "Résidentiel" || projet.type === "Particulier"
                          ? "bg-brand-blue/10 text-brand-blue border-brand-blue/30"
                          : "bg-brand-orange/10 text-brand-orange-dark border-brand-orange/30"
                      } text-xs font-bold`}
                    >
                      {projet.type}
                    </Badge>
                  </div>
                  {/* Label lieu */}
                  {variant === "dark" ? (
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
                      <h3 className="text-lg font-bold">{projet.titre}</h3>
                      <p className="text-sm text-slate-300">{projet.lieu}</p>
                    </div>
                  ) : (
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-sm font-bold shadow-sm">
                      {projet.lieu}
                    </div>
                  )}
                </div>

                {/* Contenu texte (uniquement pour variant white/gray) */}
                {variant !== "dark" && (
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-slate-800 mb-1">
                      {projet.titre}
                    </h3>
                    {projet.description && (
                      <p className="text-sm text-gray-500">{projet.description}</p>
                    )}
                  </div>
                )}
              </div>
            );

            return projet.slug ? (
              <Link key={projet.titre} href={`/realisations/${projet.slug}`}>
                {cardContent}
              </Link>
            ) : (
              cardContent
            );
          })}
        </div>

        {/* Lien mobile */}
        {voirToutLink && (
          <div className="mt-8 text-center md:hidden">
            <Link
              href={voirToutLink}
              className={`font-semibold hover:underline ${
                variant === "dark" ? "text-brand-orange hover:text-orange-400" : "text-brand-orange"
              }`}
            >
              {voirToutText} →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

