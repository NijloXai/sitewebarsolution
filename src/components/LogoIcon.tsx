/*
  Composant LogoIcon - Icône SVG moderne pour AR+SOLUTION
  
  Ce composant affiche une icône SVG personnalisée représentant la marque AR+SOLUTION.
  Design moderne inspiré de la construction/rénovation avec :
  - Formes géométriques (carrés/rectangles stylisés)
  - Symbole "+" intégré
  - Couleurs de la marque (bleu et orange)
  - SVG scalable et optimisé
  
  Props :
  - className : classes CSS additionnelles (optionnel)
  - size : taille de l'icône en pixels (par défaut 40)
*/

import React from "react";

interface LogoIconProps {
  /* Classes CSS additionnelles pour personnaliser l'apparence */
  className?: string;
  /* Taille de l'icône en pixels (par défaut 40) */
  size?: number;
}

export default function LogoIcon({ className = "", size = 40 }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo AR+SOLUTION"
      role="img"
    >
      {/* Fond avec forme géométrique moderne (carré stylisé) */}
      <rect
        x="4"
        y="4"
        width="32"
        height="32"
        rx="4"
        fill="url(#gradient-blue)"
        className="transition-all duration-300"
      />
      
      {/* Symbole "+" stylisé au centre avec forme de construction */}
      <g transform="translate(20, 20)">
        {/* Barre horizontale du "+" */}
        <rect
          x="-8"
          y="-2"
          width="16"
          height="4"
          rx="2"
          fill="#f97316"
          className="transition-all duration-300"
        />
        {/* Barre verticale du "+" */}
        <rect
          x="-2"
          y="-8"
          width="4"
          height="16"
          rx="2"
          fill="#f97316"
          className="transition-all duration-300"
        />
      </g>
      
      {/* Formes géométriques supplémentaires pour évoquer la construction/rénovation */}
      {/* Carré stylisé en haut à gauche (représentant "AR") */}
      <rect
        x="8"
        y="8"
        width="6"
        height="6"
        rx="1"
        fill="#ffffff"
        opacity="0.9"
        className="transition-all duration-300"
      />
      <rect
        x="9.5"
        y="9.5"
        width="3"
        height="3"
        rx="0.5"
        fill="#1e3a5f"
        className="transition-all duration-300"
      />
      
      {/* Ligne décorative en bas à droite */}
      <line
        x1="26"
        y1="26"
        x2="32"
        y2="32"
        stroke="#f97316"
        strokeWidth="2"
        strokeLinecap="round"
        className="transition-all duration-300"
      />
      <line
        x1="26"
        y1="32"
        x2="32"
        y2="26"
        stroke="#f97316"
        strokeWidth="2"
        strokeLinecap="round"
        className="transition-all duration-300"
      />
      
      {/* Dégradé pour le fond bleu */}
      <defs>
        <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#2d5a8a" />
        </linearGradient>
      </defs>
    </svg>
  );
}






