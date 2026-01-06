/*
  Composant ServiceHero - Section hero réutilisable pour les pages de services.
  
  Ce composant affiche une section hero complète avec :
  - Animation GridScan en arrière-plan
  - Badges de localisation et certifications
  - Titre avec mise en évidence optionnelle
  - Sous-titre descriptif
  - Boutons d'action (CTA)
  
  Utilisé dans toutes les pages de services individuelles pour éviter la duplication de code.
*/

import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Code splitting dynamique pour GridScan (composant lourd avec 3D)
const GridScan = dynamic(() => import("@/components/common/GridScan"), {
  ssr: true,
  loading: () => (
    <div className="absolute inset-0 bg-slate-900 animate-pulse" />
  ),
});

export interface BadgeConfig {
  label: string;
  variant?: "location" | "certification";
}

export interface CtaLink {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface ServiceHeroProps {
  title: string;
  titleHighlight?: string;
  subtitle: string;
  badges?: readonly BadgeConfig[];
  ctaLinks?: readonly CtaLink[];
  scanColor?: string;
}

const defaultBadges: BadgeConfig[] = [
  { label: "Strasbourg & Alsace", variant: "location" },
  { label: "RGE Qualibat", variant: "certification" },
  { label: "Décennale", variant: "certification" },
];

const defaultCtaLinks: CtaLink[] = [
  { label: "Demander un devis gratuit", href: "#devis", variant: "primary" },
  { label: "Accès Acheteurs Publics", href: "/marches-publics", variant: "secondary" },
];

export default function ServiceHero({
  title,
  titleHighlight,
  subtitle,
  badges = defaultBadges,
  ctaLinks = defaultCtaLinks,
  scanColor = "#f97316",
}: ServiceHeroProps) {
  const locationBadge = badges.find((b) => b.variant === "location");
  const certificationBadges = badges.filter((b) => b.variant === "certification");

  return (
    <section className="relative bg-slate-900 overflow-hidden min-h-[85vh] flex items-center">
      {/* Animation 3D GridScan en arrière-plan */}
      <div className="absolute inset-0">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#1e3a5f"
          gridScale={0.1}
          scanColor={scanColor}
          scanOpacity={0.5}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          scanDuration={3.0}
          scanDelay={1.5}
        />
        {/* Overlay gradient pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-900/40" />
      </div>

      {/* Contenu du hero */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="max-w-2xl">
          {/* Badges certifications et localisation */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {locationBadge && (
              <Badge
                variant="outline"
                className="bg-brand-orange/20 text-brand-orange border-brand-orange/30 uppercase tracking-wide"
              >
                {locationBadge.label}
              </Badge>
            )}
            {certificationBadges.length > 0 && (
              <div className="flex gap-2">
                {certificationBadges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-white bg-white/10 border-white/20"
                  >
                    {badge.label}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Titre principal - promesse de valeur */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {titleHighlight ? (
              <>
                {title}{" "}
                <span className="text-brand-orange">{titleHighlight}</span>
              </>
            ) : (
              title
            )}
          </h1>

          {/* Sous-titre explicatif */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-light max-w-2xl">
            {subtitle}
          </p>

          {/* Boutons d'action principaux */}
          <div className="flex flex-col sm:flex-row gap-4">
            {ctaLinks.map((cta, index) => {
              if (cta.variant === "primary") {
                return (
                  <Button
                    key={index}
                    asChild
                    size="lg"
                    className="bg-brand-orange-dark hover:bg-brand-orange text-white shadow-lg"
                    aria-label={cta.label}
                  >
                    <a href={cta.href}>{cta.label}</a>
                  </Button>
                );
              } else {
                return (
                  <Button
                    key={index}
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white hover:text-brand-blue backdrop-blur-sm"
                  >
                    <Link href={cta.href}>{cta.label}</Link>
                  </Button>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

