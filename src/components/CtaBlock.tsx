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
  const boutonSecondaireClass =
    variante === "bleu"
      ? "bg-white text-brand-blue hover:bg-blue-50"
      : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900";

  return (
    <section className={`${bgClass} py-16 md:py-20 text-white`} id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Titre principal */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{titre}</h2>

        {/* Description */}
        <p className={`${descriptionClass} text-lg mb-8 max-w-2xl mx-auto`}>
          {description}
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Bouton principal : Devis */}
          <Link
            href={lienDevis}
            className="inline-flex justify-center items-center bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            {texteDevis}
          </Link>

          {/* Bouton secondaire : Téléphone */}
          <a
            href={telephoneHref}
            className={`inline-flex justify-center items-center font-semibold py-4 px-8 rounded-lg transition-all ${boutonSecondaireClass}`}
          >
            {/* Icône téléphone */}
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {texteTelephone || telephone}
          </a>
        </div>
      </div>
    </section>
  );
}

