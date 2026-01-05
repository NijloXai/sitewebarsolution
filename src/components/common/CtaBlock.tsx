/*
  Composant CtaBlock - Bloc d'appel à l'action réutilisable.
  
  Ce composant affiche un bloc CTA avec :
  - Un titre principal
  - Un sous-titre ou description
  - Un bouton principal (devis)
  - Un bouton secondaire (téléphone)
  
  Utilisé en fin de page pour inciter le visiteur à prendre contact.
  
  Props :
  - titre : Titre principal du bloc (ex: "Prêt à lancer votre projet ?")
  - description : Texte explicatif sous le titre
  - lienDevis : URL du bouton devis (défaut: "/contact")
  - texteDevis : Texte du bouton devis (défaut: "Demander un devis gratuit")
  - telephone : Numéro de téléphone affiché (défaut: "03 88 00 00 00")
  - texteTelephone : Texte du bouton téléphone (optionnel, si non fourni affiche seulement le numéro)
  - variante : Style du bloc ("sombre" | "bleu") - défaut "sombre"
  - id : Attribut id HTML pour les ancres (optionnel)
*/

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

/* Types des props du composant */
interface CtaBlockProps {
  titre: string;
  description: string;
  lienDevis?: string;
  texteDevis?: string;
  telephone?: string;
  texteTelephone?: string;
  variante?: "sombre" | "bleu";
  id?: string;
}

export default function CtaBlock({
  titre,
  description,
  lienDevis = "/contact",
  texteDevis = "Demander un devis gratuit",
  telephone = "03 88 00 00 00",
  texteTelephone,
  variante = "sombre",
  id,
}: CtaBlockProps) {
  /* Numéro de téléphone formaté pour le lien tel: */
  const telephoneHref = `tel:${telephone.replace(/\s/g, "")}`;

  /* Classes CSS selon la variante choisie */
  const bgClass = variante === "bleu" ? "bg-brand-blue" : "bg-slate-900";
  const descriptionClass =
    variante === "bleu" ? "text-blue-100" : "text-slate-300";

  return (
    <section className={`${bgClass} py-16 md:py-20 text-white`} id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Titre principal - Hiérarchie améliorée */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          {titre}
        </h2>

        {/* Description - Espacement amélioré */}
        <p className={`${descriptionClass} text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed`}>
          {description}
        </p>

        {/* Boutons d'action - Hiérarchie visuelle améliorée */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
          {/* Bouton principal : Devis - Utilise Button de shadcn avec style personnalisé */}
          <Button
            asChild
            size="lg"
            className="bg-brand-orange-dark hover:bg-brand-orange text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 min-w-[200px]"
            aria-label={texteDevis}
          >
            <Link href={lienDevis}>
              {texteDevis}
            </Link>
          </Button>

          {/* Bouton secondaire : Téléphone - Utilise Button outline de shadcn */}
          <Button
            asChild
            variant={variante === "bleu" ? "secondary" : "outline"}
            size="lg"
            className={
              variante === "bleu"
                ? "bg-white text-brand-blue hover:bg-blue-50 border-white min-w-[200px]"
                : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 min-w-[200px]"
            }
            aria-label={`Appeler ${texteTelephone || telephone}`}
          >
            <a href={telephoneHref}>
              <Phone className="w-5 h-5" aria-hidden="true" />
              {texteTelephone || telephone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

