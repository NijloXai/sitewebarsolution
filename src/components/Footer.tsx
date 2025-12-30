'use client';

/*
  Composant Footer - Pied de page réutilisable sur tout le site AR+SOLUTION.
  
  Ce composant affiche :
  - Le logo AR+SOLUTION avec description de l'entreprise
  - Les coordonnées de contact (adresse, téléphone, email)
  - Les liens légaux (Mentions Légales, Politique de Confidentialité)
  - Le copyright
  
  Il est utilisé sur toutes les pages du site pour garantir une cohérence visuelle.
*/

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import GridScan from "@/components/GridScan";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-300 py-12 pb-24 md:pb-12 overflow-hidden">
      {/* Animation 3D GridScan en arrière-plan avec les mêmes paramètres que le hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-0 w-full h-full">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#1e3a5f"
            gridScale={0.1}
            scanColor="#f97316"
            scanOpacity={0.5}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
            scanDuration={3.0}
            scanDelay={1.5}
          />
        </div>
        {/* Overlay gradient pour améliorer la lisibilité du contenu du footer - opacité réduite pour voir GridScan */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-900 via-slate-900/70 to-slate-900/40" />
      </div>

      {/* Contenu du footer avec z-index pour rester au-dessus de l'animation */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Colonne 1 : Logo et description de l'entreprise */}
          <div className="space-y-4">
            <span className="text-2xl font-bold text-white tracking-tighter block">
              AR+<span className="text-brand-orange">SOLUTION</span>
            </span>
            <p className="text-sm text-slate-400 leading-relaxed">
              Expert en rénovation, plâtrerie et isolation à Strasbourg.
              Partenaire de confiance des particuliers et des marchés publics.
            </p>
          </div>

          {/* Colonne 2 : Coordonnées de contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-slate-400">Strasbourg, Alsace (67)</li>
              <li>
                <a 
                  href="tel:0388000000" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                  aria-label="Appeler AR+SOLUTION"
                >
                  03 88 00 00 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@ar-solution.fr"
                  className="text-slate-400 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                  aria-label="Envoyer un email à AR+SOLUTION"
                >
                  contact@ar-solution.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Liens vers les pages légales */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base mb-4">Légal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/mentions-legales" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                >
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="text-slate-400 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                >
                  Politique de Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur avec composant shadcn */}
        <Separator className="bg-slate-800 my-8" />

        {/* Copyright - Année courante et mention légale */}
        <div className="pt-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} AR+SOLUTION. Tous droits réservés. Site réalisé avec soin.
        </div>
      </div>
    </footer>
  );
}

