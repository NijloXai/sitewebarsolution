/*
  Composant TrustBar - Barre de confiance réutilisable sur le site AR+SOLUTION.
  
  Ce composant affiche une barre horizontale avec des chiffres clés et certifications
  qui rassurent le visiteur (RGE, Décennale, projets réalisés, zone d'intervention, etc.)
  
  Il est utilisé sur :
  - La page d'accueil
  - Les pages services (plâtrerie, isolation, aménagement, enduits)
  
  Props :
  - items : tableau d'objets { valeur, label } à afficher
*/

/* Type des éléments affichés dans la barre de confiance */
interface TrustBarItem {
  valeur: string;
  label: string;
}

/* Props du composant TrustBar */
interface TrustBarProps {
  items: TrustBarItem[];
}

export default function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {items.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col items-center justify-center p-2 ${
                index > 0 ? "border-l border-gray-200" : ""
              }`}
            >
              {/* Valeur principale (chiffre ou sigle) */}
              <span className="text-3xl font-bold text-brand-blue mb-1">
                {item.valeur}
              </span>
              {/* Label descriptif */}
              <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

