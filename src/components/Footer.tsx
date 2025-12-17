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

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

