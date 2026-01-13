---
name: Optimisations Performance
overview: "Implémentation des recommandations de l'audit de performance : ajout de `priority` sur les images LCP, code splitting de la page d'accueil, et skeleton loaders pour les imports dynamiques."
todos:
  - id: priority-images
    content: Ajouter priority aux images LCP (profils et services) dans page.tsx
    status: completed
  - id: code-splitting-home
    content: Convertir GridScan, BeforeAfterSlider, ContactFormHome en imports dynamiques
    status: completed
  - id: skeleton-enduits
    content: Ajouter skeleton loaders dans enduits-finitions/page.tsx
    status: completed
  - id: skeleton-isolation
    content: Ajouter skeleton loaders dans isolation/page.tsx
    status: completed
  - id: skeleton-platrerie
    content: Ajouter skeleton loaders dans platrerie/page.tsx
    status: completed
  - id: skeleton-amenagement
    content: Ajouter skeleton loaders dans amenagement/page.tsx
    status: completed
---

# Optimisations Performance - Audit AR+SOLUTION

## Contexte

L'audit identifie 3 actions prioritaires :

1. **Images LCP sans `priority`** sur la page d'accueil (priorite haute)
2. **Pas de code splitting** sur la page d'accueil pour les composants lourds
3. **Skeleton loaders manquants** sur les imports dynamiques des pages services

---

## Action 1 : Ajouter `priority` aux images critiques

**Fichier** : [`src/app/page.tsx`](src/app/page.tsx)Les images au-dessus du pli (above-the-fold) doivent avoir `priority={true}` pour etre prechargees :**Cartes profils (ligne 502-508)** - Ajouter `priority` a la premiere image :

```tsx
<Image
  src={profil.image}
  alt={profil.titre}
  fill
  priority={index === 0}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover..."
/>
```

**Cartes services (ligne 583-589)** - Ajouter `priority` aux 2 premieres images :

```tsx
<Image
  src={service.image}
  alt={service.imageAlt}
  fill
  priority={index < 2}
  loading={index < 2 ? undefined : "lazy"}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  className="object-cover..."
/>
```

---

## Action 2 : Code splitting de la page d'accueil

**Fichier** : [`src/app/page.tsx`](src/app/page.tsx)Remplacer les imports statiques par des imports dynamiques avec skeleton loaders :

```tsx
import dynamic from "next/dynamic";

// Composants lourds charges dynamiquement
const GridScan = dynamic(
  () => import("@/components/common/GridScan"),
  { ssr: true, loading: () => <div className="absolute inset-0 bg-slate-900 animate-pulse" /> }
);

const BeforeAfterSlider = dynamic(
  () => import("@/components/common/BeforeAfterSlider"),
  { ssr: true, loading: () => <div className="h-[500px] bg-gray-200 animate-pulse rounded-2xl" /> }
);

const ContactFormHome = dynamic(
  () => import("@/components/common/ContactFormHome"),
  { ssr: false, loading: () => <div className="h-[400px] bg-gray-200 animate-pulse rounded-xl" /> }
);

const Accordion = dynamic(
  () => import("@/components/ui/accordion").then(mod => ({ default: mod.Accordion })),
  { ssr: true }
);
```

---

## Action 3 : Skeleton loaders pour les pages services

**Fichiers concernes** :

- [`src/app/services/enduits-finitions/page.tsx`](src/app/services/enduits-finitions/page.tsx)
- [`src/app/services/isolation/page.tsx`](src/app/services/isolation/page.tsx)
- [`src/app/services/platrerie/page.tsx`](src/app/services/platrerie/page.tsx)
- [`src/app/services/amenagement/page.tsx`](src/app/services/amenagement/page.tsx)

Ajouter des `loading` states aux imports dynamiques existants :

```tsx
const ServiceFAQSection = dynamic(
  () => import("@/components/services/ServiceFAQSection"),
  {
    ssr: true,
    loading: () => (
      <div className="py-16 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8" />
        <div className="space-y-4 max-w-3xl mx-auto px-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    ),
  }
);

const ServiceRealisationsSection = dynamic(
  () => import("@/components/services/ServiceRealisationsSection"),
  {
    ssr: true,
    loading: () => (
      <div className="py-16 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-200 rounded-xl" />
          ))}
        </div>
      </div>
    ),
  }
);
```

---

## Resume des modifications