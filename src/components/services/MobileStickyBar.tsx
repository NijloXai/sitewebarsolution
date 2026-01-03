/*
  Composant MobileStickyBar - Barre sticky mobile pour les pages services
  
  Ce composant affiche une barre d'action fixée en bas de l'écran sur mobile uniquement,
  permettant d'appeler rapidement ou de demander un devis.
  
  Utilisé sur toutes les pages de services pour améliorer la conversion mobile.
*/

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface MobileStickyBarProps {
  /** Numéro de téléphone au format href tel: (ex: "tel:0388000000") */
  phoneNumber?: string;
  /** Lien vers la page de devis (ex: "/contact" ou "#devis") */
  devisLink?: string;
  /** Texte du bouton devis (par défaut: "Devis Gratuit") */
  devisText?: string;
}

export default function MobileStickyBar({
  phoneNumber = "tel:0388000000",
  devisLink = "/contact",
  devisText = "Devis Gratuit",
}: MobileStickyBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 flex gap-3">
      <Button
        asChild
        variant="secondary"
        className="flex-1 text-brand-blue font-bold"
        aria-label="Appeler par téléphone"
      >
        <a href={phoneNumber}>
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Appeler
        </a>
      </Button>
      <Button
        asChild
        size="lg"
        className="flex-1 bg-brand-orange-dark hover:bg-brand-orange text-white font-bold shadow-md"
        aria-label={devisText}
      >
        {devisLink.startsWith("#") ? (
          <a href={devisLink}>{devisText}</a>
        ) : (
          <Link href={devisLink}>{devisText}</Link>
        )}
      </Button>
    </div>
  );
}

