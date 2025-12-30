/*
  Composant Logo - Logo AR+SOLUTION avec symbole SVG personnalisé
  
  Ce composant génère un logo hybride combinant :
  - Un symbole SVG personnalisé représentant la construction/aménagement
  - Le texte "AR+SOLUTION" avec les couleurs de marque
  
  Props :
  - variant : "full" (symbole + texte), "icon" (symbole seul), "text" (texte seul)
  - className : classes CSS supplémentaires pour la personnalisation
  - size : "sm", "md", "lg" pour contrôler la taille globale
*/

"use client";

import Link from "next/link";

/* Types des props du composant Logo */
interface LogoProps {
  /* Variant d'affichage : "full" (par défaut), "icon", ou "text" */
  variant?: "full" | "icon" | "text";
  /* Classes CSS supplémentaires */
  className?: string;
  /* Taille du logo : "sm", "md" (par défaut), ou "lg" */
  size?: "sm" | "md" | "lg";
  /* Si true, le logo est un lien vers l'accueil */
  linkToHome?: boolean;
  /* Si true, utilise les styles de hover */
  interactive?: boolean;
}

/* Tailles du logo selon la prop size */
const sizeConfig = {
  sm: {
    icon: "w-6 h-6",
    text: "text-lg",
    gap: "gap-2",
  },
  md: {
    icon: "w-8 h-8",
    text: "text-2xl",
    gap: "gap-3",
  },
  lg: {
    icon: "w-10 h-10",
    text: "text-3xl",
    gap: "gap-4",
  },
};

export default function Logo({
  variant = "full",
  className = "",
  size = "md",
  linkToHome = true,
  interactive = true,
}: LogoProps) {
  const config = sizeConfig[size];
  
  /* Rendu du symbole SVG */
  const renderIcon = () => (
    <svg
      className={`${config.icon} flex-shrink-0 transition-transform duration-200 group-hover:rotate-3`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Forme géométrique représentant un bâtiment/structure moderne */}
      {/* Carré principal (bleu) */}
      <rect x="4" y="12" width="16" height="16" rx="2" fill="#1e3a5f" />
      
      {/* Rectangle supérieur (orange) */}
      <rect x="20" y="8" width="16" height="12" rx="2" fill="#f97316" />
      
      {/* Rectangle inférieur droit (bleu) */}
      <rect x="20" y="24" width="12" height="8" rx="2" fill="#1e3a5f" />
      
      {/* Rectangle inférieur gauche (orange) */}
      <rect x="8" y="28" width="8" height="8" rx="2" fill="#f97316" />
      
      {/* Ligne horizontale (sépare les blocs) */}
      <line x1="4" y1="20" x2="36" y2="20" stroke="#1e3a5f" strokeWidth="1.5" />
    </svg>
  );

  /* Rendu du texte */
  const renderText = () => (
    <span
      className={`${config.text} font-bold tracking-tighter text-brand-blue transition-colors duration-200 group-hover:text-brand-blue-dark`}
    >
      AR+<span className="text-brand-orange group-hover:text-brand-orange-dark">SOLUTION</span>
    </span>
  );

  /* Classes de base pour le conteneur */
  const containerClasses = `
    flex items-center ${config.gap} ${className}
    group transition-all duration-200 transform-gpu will-change-transform
    ${interactive && linkToHome ? "hover:scale-105 cursor-pointer" : ""}
  `.trim().replace(/\s+/g, " ");

  /* Contenu du logo selon le variant */
  const logoContent = (
    <div className={containerClasses} aria-label="AR+SOLUTION - Logo">
      {variant !== "text" && renderIcon()}
      {variant !== "icon" && renderText()}
    </div>
  );

  /* Si linkToHome est true, envelopper dans un Link */
  if (linkToHome) {
    return (
      <Link
        href="/"
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded"
        aria-label="AR+SOLUTION - Retour à l'accueil"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

