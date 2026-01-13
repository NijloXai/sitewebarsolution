---
name: Optimisations responsive mobile
overview: "Renforcer le comportement du Header mobile pour garantir sa fiabilite sur tous les appareils, et ajouter des optimisations typographiques pour les petits ecrans (< 375px) et le breakpoint intermediaire sm: (640px)."
todos:
  - id: header-resize
    content: Ajouter l'effet useEffect pour fermer le menu sur resize dans Header.tsx
    status: completed
  - id: header-classes
    content: Renforcer les classes CSS du Header avec !important si necessaire
    status: completed
  - id: globals-small-screens
    content: Ajouter la media query < 375px dans globals.css
    status: completed
  - id: sm-breakpoints
    content: "Ajouter les breakpoints sm: sur les titres et grilles de la page d'accueil"
    status: completed
  - id: test-mobile
    content: Tester les modifications via le navigateur sur breakpoints mobiles
    status: in_progress
---

# Optimisations responsive mobile AR+SOLUTION

## Contexte

Le rapport de validation indique que le code du Header est correct (classes Tailwind `hidden md:flex`, `md:hidden`), mais des anomalies ont ete observees dans l'environnement de test automatise. Le code fonctionne probablement bien sur un appareil reel, mais nous allons le renforcer pour garantir une fiabilite maximale.---

## 1. Renforcement du Header mobile

### Modifications dans [`src/components/common/Header.tsx`](src/components/common/Header.tsx)

**Ajouts proposes :**

- Ajouter une classe CSS explicite `!hidden` (avec important) sur la navigation desktop en dessous de `md:` pour forcer le masquage
- Ajouter `!flex` avec important sur le bouton hamburger pour garantir sa visibilite sur mobile
- Ajouter un effet de fermeture du menu lors du redimensionnement de la fenetre (pour eviter un menu ouvert sur desktop apres rotation d'ecran)
```tsx
// Ajout d'un effet pour fermer le menu si la fenetre passe en mode desktop
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768 && menuOpen) {
      setMenuOpen(false);
    }
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [menuOpen]);
```


---

## 2. Optimisations typographiques pour petits ecrans

### Modifications dans [`src/app/globals.css`](src/app/globals.css)

**Ajout d'une media query pour les ecrans < 375px :**

```css
/* Optimisation pour tres petits ecrans (< 375px) */
@media (max-width: 374px) {
  html {
    font-size: 14px; /* Reduction de la taille de base */
  }
  
  h1 {
    font-size: 1.75rem !important;
    line-height: 1.2;
  }
  
  h2 {
    font-size: 1.5rem !important;
  }
  
  /* Boutons CTA plus compacts */
  .btn-cta-mobile {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
  }
}
```

---

## 3. Ameliorations du breakpoint intermediaire (sm: 640px)

### Verifications dans plusieurs fichiers

Ajouter des styles `sm:` (640px) la ou necessaire pour une transition plus fluide entre mobile (375px) et tablette (768px) :

- Hero sections : tailles de titre intermediaires
- Grilles de cartes : passage de 1 a 2 colonnes a 640px au lieu de 768px
- Espacement des sections : padding lateral progressif

**Exemple pour le Hero de la page d'accueil :**

```tsx
// Avant
<h1 className="text-3xl md:text-5xl lg:text-6xl">

// Apres (transition plus progressive)
<h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
```

---

## Resume des fichiers a modifier

| Fichier | Modifications ||---------|---------------|| [`src/components/common/Header.tsx`](src/components/common/Header.tsx) | Effet resize, classes renforcees || [`src/app/globals.css`](src/app/globals.css) | Media query < 375px || [`src/app/page.tsx`](src/app/page.tsx) | Breakpoints sm: sur le Hero et sections || Pages services | Ajustements sm: si necessaire |---

## Risques et considerations

- **Faible risque** : Ces modifications sont des ameliorations progressives, pas des changements structurels