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

import { Card, CardContent } from "@/components/ui/card";

/* Type des éléments affichés dans la barre de confiance */
interface TrustBarItem {
  valeur: string;
  label: string;
}

/* Props du composant TrustBar */
interface TrustBarProps {
  items: readonly TrustBarItem[];
}

export default function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="bg-muted/10 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item) => (
            <Card
              key={item.label}
              className="border-0 shadow-none bg-transparent text-center"
            >
              <CardContent className="flex flex-col items-center justify-center p-3 md:p-4">
                {/* Valeur principale (chiffre ou sigle) */}
                <span className="text-2xl md:text-3xl font-bold text-brand-blue/80 mb-2">
                  {item.valeur}
                </span>
                {/* Label descriptif */}
                <span className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wide">
                  {item.label}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

