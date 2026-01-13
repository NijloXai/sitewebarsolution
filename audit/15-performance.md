# Audit Performance – Site AR+SOLUTION

Date : 6 janvier 2026

---

## Résumé exécutif

| Critère | État | Priorité |
|---------|------|----------|
| Images (`next/image`) | 🟡 À améliorer | Haute |
| Code splitting | ✅ Bon | - |
| Fonts (`next/font`) | ✅ Optimal | - |
| Scripts tiers | ✅ Aucun (à surveiller) | - |
| Animations | ✅ Optimal | - |

---

## 1. Images (`next/image`)

### ✅ Points conformes

| Fichier | Observations |
|---------|--------------|
| `src/app/services/page.tsx` | `priority={index < 4}` et `loading` conditionnels pour les 4 premières images |
| `src/app/services/enduits-finitions/page.tsx` | `loading="lazy"` correctement utilisé |
| `src/app/services/amenagement/page.tsx` | `loading="lazy"` + `fetchPriority="low"` pour images secondaires |
| `src/components/services/ServiceRealisationsSection.tsx` | `loading="lazy"` pour galerie below-the-fold |
| `src/components/services/ServiceMethodSection.tsx` | `loading="lazy"` pour images de méthode |
| `src/components/common/BeforeAfterSlider.tsx` | `sizes` responsive défini |

### ⚠️ Problèmes identifiés

#### 1.1 Page d'accueil – Images above-the-fold sans `priority`

**Fichier** : `src/app/page.tsx`

Les images dans les sections visibles au chargement n'ont pas `priority={true}` :

```tsx
// Ligne 502-508 – Cartes profils clients
<Image
  src={profil.image}
  alt={profil.titre}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover..."
/>
// ❌ Manque : priority={true}

// Ligne 583-589 – Cartes services
<Image
  src={service.image}
  alt={service.imageAlt}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  className="object-cover..."
/>
// ❌ Manque : priority pour les 2-4 premières images

// Ligne 1236-1241 – Carte zone intervention
<Image
  src="https://placehold.co/600x200?text=Carte+Alsace+Strasbourg"
  alt="Carte Zone Intervention"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover opacity-60"
/>
// ⚠️ Image placeholder externe (à remplacer en production)
```

**Impact** : Les images LCP (Largest Contentful Paint) ne sont pas préchargées, augmentant le temps de chargement perçu.

#### 1.2 Images avec `fill` mais sans `sizes` explicite

Certaines images utilisent `fill` sans attribut `sizes`, ce qui peut générer des images trop grandes :

```tsx
// src/components/common/BeforeAfterSlider.tsx – CORRECT (a sizes)
// src/app/services/enduits-finitions/page.tsx – À vérifier
```

#### 1.3 Images externes non optimisées

Images provenant de domaines externes non configurés :
- `placehold.co` (placeholder temporaire)
- `images.unsplash.com` (doit être dans `next.config.ts`)

**Vérification** : S'assurer que `next.config.ts` contient les domaines autorisés.

### 🔧 Recommandations images

1. **Ajouter `priority` aux images above-the-fold** :
```tsx
// Page d'accueil - Première carte profil
<Image
  src={profil.image}
  alt={profil.titre}
  fill
  priority={index === 0}  // ← Ajouter
  sizes="..."
/>

// Services - 2 à 4 premières images
<Image
  priority={index < 2}  // ← Ajouter
  loading={index < 2 ? undefined : "lazy"}
/>
```

2. **Remplacer les images placeholder** avant production

3. **Vérifier `next.config.ts`** pour les domaines externes :
```ts
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' },
    // Retirer placehold.co en production
  ],
},
```

---

## 2. Code Splitting (dynamic imports)

### ✅ Points conformes

Les imports dynamiques sont correctement implémentés dans les pages de services :

| Fichier | Composants dynamiques |
|---------|----------------------|
| `src/app/services/enduits-finitions/page.tsx` | ServiceFAQSection, ServiceRealisationsSection, ServiceStructuredData, MarchesPublicsSection, ServiceMethodSection |
| `src/app/services/isolation/page.tsx` | Idem |
| `src/app/services/platrerie/page.tsx` | Idem |
| `src/app/services/amenagement/page.tsx` | Idem |
| `src/app/services/page.tsx` | MarchesPublicsSection, ServiceStructuredData |
| `src/app/realisations/page.tsx` | MarchesPublicsSection, ServiceFAQSection |
| `src/components/services/ServiceHero.tsx` | GridScan (avec skeleton loader) |

**Exemple de bonne pratique** :
```tsx
// src/components/services/ServiceHero.tsx – Ligne 20-25
const GridScan = dynamic(() => import("@/components/common/GridScan"), {
  ssr: true,
  loading: () => (
    <div className="absolute inset-0 bg-slate-900 animate-pulse" />
  ),
});
```

### ⚠️ Améliorations possibles

#### 2.1 Skeleton loaders manquants

Certains composants dynamiques n'ont pas de `loading` state :

```tsx
// src/app/services/enduits-finitions/page.tsx – Ligne 37-40
const ServiceFAQSection = dynamic(
  () => import("@/components/services/ServiceFAQSection"),
  { ssr: true }
);
// ❌ Pas de loading state
```

#### 2.2 Page d'accueil – Composants non splitté

La page d'accueil (`src/app/page.tsx`) n'utilise pas d'imports dynamiques alors qu'elle contient :
- `BeforeAfterSlider` (interactif)
- `ContactFormHome` (formulaire)
- `GridScan` (3D lourd)
- `Accordion` (FAQ longue)

### 🔧 Recommandations code splitting

1. **Ajouter des skeleton loaders** aux imports dynamiques :
```tsx
const ServiceFAQSection = dynamic(
  () => import("@/components/services/ServiceFAQSection"),
  {
    ssr: true,
    loading: () => (
      <div className="py-16 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8" />
        <div className="space-y-4 max-w-3xl mx-auto">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    ),
  }
);
```

2. **Splitter les composants lourds de la page d'accueil** :
```tsx
// src/app/page.tsx – À ajouter en haut du fichier
import dynamic from "next/dynamic";

const BeforeAfterSlider = dynamic(
  () => import("@/components/common/BeforeAfterSlider"),
  { ssr: true, loading: () => <div className="h-[600px] bg-gray-200 animate-pulse rounded-2xl" /> }
);

const ContactFormHome = dynamic(
  () => import("@/components/common/ContactFormHome"),
  { ssr: false } // Formulaire peut être côté client uniquement
);

const GridScan = dynamic(
  () => import("@/components/common/GridScan"),
  { ssr: true, loading: () => <div className="absolute inset-0 bg-slate-900" /> }
);
```

---

## 3. Fonts (`next/font`)

### ✅ Configuration optimale

**Fichier** : `src/app/layout.tsx` – Lignes 14-27

```tsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "latin-ext"],  // ✅ Support français complet
  display: "swap",                   // ✅ Évite FOIT
  variable: "--font-inter",          // ✅ Variable CSS disponible
});

// Application
<html lang="fr" className={inter.variable}>
  <body className={`${inter.className} antialiased`}>
```

**Points conformes** :
- ✅ Utilisation de `next/font/google` (préchargement automatique)
- ✅ `display: "swap"` configuré (texte visible immédiatement)
- ✅ Subsets optimisés pour le français (`latin`, `latin-ext`)
- ✅ Variable CSS pour usage dans Tailwind
- ✅ Pas de chargement externe via CDN

**Impact** : Les polices sont auto-hébergées et préchargées par Next.js, évitant les requêtes externes et le CLS (Cumulative Layout Shift).

---

## 4. Scripts tiers (`next/script`)

### ✅ État actuel

**Aucun script tiers détecté** dans le projet.

C'est positif pour les performances actuelles. Le site n'a pas de :
- Google Analytics / Tag Manager
- Hotjar / Mixpanel
- Chatbots externes
- Widgets sociaux

### ⚠️ Recommandations pour le futur

Quand des scripts seront ajoutés, utiliser `next/script` avec la bonne stratégie :

```tsx
// Pour analytics (non critique)
import Script from "next/script";

<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="lazyOnload"  // Charge après tout le reste
/>

// Pour scripts critiques (paiement, etc.)
<Script
  src="https://js.stripe.com/v3/"
  strategy="afterInteractive"  // Charge après hydratation
/>

// Pour scripts bloquants (rare)
<Script
  src="/critical-script.js"
  strategy="beforeInteractive"  // À éviter sauf nécessité absolue
/>
```

---

## 5. Animations

### ✅ Configuration optimale

**Fichier** : `src/app/globals.css`

#### 5.1 Animations CSS (non JS)

Toutes les animations utilisent des keyframes CSS :

```css
/* Lignes 265-294 */
@keyframes fade-in { ... }
@keyframes slide-up { ... }
@keyframes fade-in-slide-up { ... }
```

#### 5.2 `will-change` utilisé avec parcimonie

Classes dédiées pour éviter l'abus de `will-change` :

```css
/* Lignes 231-241 */
.will-change-transform { will-change: transform; }
.will-change-opacity { will-change: opacity; }
.will-change-transform-opacity { will-change: transform, opacity; }
```

Réinitialisation après animation :
```css
/* Lignes 254-258 */
.transition-transform:not(:hover),
.transition-all:not(:hover) {
  will-change: auto;
}
```

#### 5.3 `prefers-reduced-motion` respecté

**7 occurrences** dans `globals.css` :

```css
/* Lignes 163-167 – Scroll smooth */
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}

/* Lignes 170-179 – Désactivation globale */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Lignes 310-318 – Classes motion-safe */
@media (prefers-reduced-motion: reduce) {
  .motion-safe\:fade-in,
  .motion-safe\:slide-up,
  .motion-safe\:fade-in-slide-up {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

#### 5.4 Utilisation dans les composants

Classes `motion-safe:` utilisées dans le code TSX :

```tsx
// src/app/page.tsx – Exemple ligne 576
className="motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.02] motion-reduce:transition-none"

// src/app/page.tsx – Exemple ligne 588
className="motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-700"
```

**Points conformes** :
- ✅ Animations CSS pures (pas de JS)
- ✅ `will-change` utilisé avec modération
- ✅ Réinitialisation de `will-change` après animation
- ✅ `prefers-reduced-motion` implémenté globalement
- ✅ Classes `motion-safe:` pour opt-in individuel
- ✅ Durées de transition standardisées via variables CSS

---

## Tableau récapitulatif des actions

| # | Action | Fichier | Priorité | Effort |
|---|--------|---------|----------|--------|
| 1 | Ajouter `priority` aux images LCP de la page d'accueil | `src/app/page.tsx` | 🔴 Haute | Faible |
| 2 | Implémenter code splitting sur page d'accueil | `src/app/page.tsx` | 🟡 Moyenne | Moyen |
| 3 | Ajouter skeleton loaders aux imports dynamiques | Pages services | 🟡 Moyenne | Faible |
| 4 | Remplacer images placeholder par assets définitifs | Tout le projet | 🔴 Haute | Variable |
| 5 | Documenter guidelines `next/script` pour futurs scripts | Documentation | 🟢 Basse | Faible |

---

## Métriques cibles (Core Web Vitals)

| Métrique | Cible | Impact des recommandations |
|----------|-------|---------------------------|
| LCP (Largest Contentful Paint) | < 2.5s | +++ (priority images) |
| FID (First Input Delay) | < 100ms | ++ (code splitting) |
| CLS (Cumulative Layout Shift) | < 0.1 | ✅ (fonts optimisées) |
| INP (Interaction to Next Paint) | < 200ms | ++ (code splitting) |

---

## Conclusion

Le site AR+SOLUTION dispose d'une **bonne base de performance** avec :
- Fonts optimisées via `next/font`
- Code splitting implémenté sur les pages services
- Animations CSS respectant les préférences utilisateur
- Aucun script tiers bloquant

Les **optimisations prioritaires** concernent :
1. L'attribut `priority` sur les images critiques de la page d'accueil
2. L'extension du code splitting à la page d'accueil
3. L'ajout de skeleton loaders pour une meilleure UX pendant le chargement

Ces améliorations permettront d'atteindre d'excellents scores Core Web Vitals.


