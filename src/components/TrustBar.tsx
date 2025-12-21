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
  items: TrustBarItem[];
}

/* Composants d'icônes SVG */
const IconBadge = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
);

const IconShield = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const IconMap = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
    />
  </svg>
);

const IconChart = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

/* Fonction pour déterminer l'icône à afficher selon le label ou la valeur */
const getIcon = (item: TrustBarItem) => {
  const labelLower = item.label.toLowerCase();
  const valeurLower = item.valeur.toLowerCase();

  // RGE / Certificat / Qualibat
  if (
    valeurLower.includes("rge") ||
    labelLower.includes("certifié") ||
    labelLower.includes("certifiée") ||
    labelLower.includes("qualibat") ||
    labelLower.includes("reconnu") ||
    labelLower.includes("écolabel")
  ) {
    return <IconBadge className="w-6 h-6 md:w-7 md:h-7" />;
  }

  // Garantie Décennale / Bouclier
  if (
    labelLower.includes("garantie") ||
    labelLower.includes("décennale") ||
    valeurLower.includes("ans")
  ) {
    return <IconShield className="w-6 h-6 md:w-7 md:h-7" />;
  }

  // Intervention / Bas-Rhin / Carte géographique
  if (
    labelLower.includes("intervention") ||
    labelLower.includes("bas-rhin") ||
    labelLower.includes("strasbourg") ||
    labelLower.includes("alsace") ||
    labelLower.includes("environs")
  ) {
    return <IconMap className="w-6 h-6 md:w-7 md:h-7" />;
  }

  // Projets Réalisés / Chantiers / Statistiques
  if (
    labelLower.includes("projets") ||
    labelLower.includes("réalisés") ||
    labelLower.includes("chantiers") ||
    labelLower.includes("économies") ||
    labelLower.includes("aides") ||
    labelLower.includes("finition") ||
    labelLower.includes("devis") ||
    labelLower.includes("tache")
  ) {
    return <IconChart className="w-6 h-6 md:w-7 md:h-7" />;
  }

  // Par défaut, icône badge
  return <IconBadge className="w-6 h-6 md:w-7 md:h-7" />;
};

export default function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="relative bg-gradient-to-b from-brand-blue/5 via-brand-blue/8 to-brand-blue/5 border-b border-brand-blue/10 overflow-hidden">
      {/* Dégradé subtil en arrière-plan pour plus de profondeur */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/3 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div 
              key={item.label} 
              className="relative opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards',
              }}
            >
              {/* Séparateur vertical sur desktop (sauf pour le dernier élément) */}
              {index < items.length - 1 && (
                <div 
                  className="hidden md:block absolute top-1/2 -right-4 w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent transform -translate-y-1/2 z-10 opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${(index * 100) + 300}ms`,
                    animationFillMode: 'forwards',
                  }}
                />
              )}
              <Card
                className="border border-border/50 shadow-sm bg-gradient-to-br from-background via-background to-brand-blue/5 hover:shadow-lg hover:shadow-brand-blue/20 hover:border-brand-blue/40 hover:-translate-y-2 transition-all duration-500 ease-out text-center group cursor-pointer"
              >
                <CardContent className="flex flex-col items-center justify-center p-5 md:p-7">
                  {/* Icône contextuelle avec effet hover amélioré */}
                  <div className="text-brand-blue mb-4 md:mb-5 opacity-80 group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 ease-out">
                    {getIcon(item)}
                  </div>
                  {/* Valeur principale (chiffre ou sigle) avec gradient et animation */}
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-blue bg-clip-text text-transparent leading-tight group-hover:from-brand-orange group-hover:via-brand-orange-light group-hover:to-brand-orange group-hover:scale-105 transition-all duration-500 ease-out inline-block">
                    {item.valeur}
                  </span>
                  {/* Label descriptif avec meilleure typographie et animation */}
                  <span className="text-sm md:text-base text-muted-foreground font-semibold uppercase tracking-wider leading-relaxed px-2 group-hover:text-foreground/90 group-hover:translate-y-[-2px] transition-all duration-500 ease-out inline-block">
                    {item.label}
                  </span>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

