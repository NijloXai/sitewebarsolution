---
name: Corrections Accessibilite WCAG
overview: Ce plan corrige les 19 problemes d'accessibilite identifies dans l'audit (7 critiques, 8 importants, 4 mineurs) pour atteindre la conformite WCAG 2.1 AA sur le site AR+SOLUTION.
todos:
  - id: header-aria
    content: Ajouter aria-expanded et aria-controls sur le menu mobile dans Header.tsx
    status: completed
  - id: footer-titres
    content: Remplacer les h4 par des p styles dans Footer.tsx
    status: completed
  - id: contact-hierarchie
    content: Corriger la hierarchie des titres et ajouter aria-required dans contact/page.tsx
    status: completed
  - id: politique-titres
    content: Corriger la hierarchie des titres dans politique-confidentialite/page.tsx
    status: completed
  - id: contactform-aria
    content: Ajouter aria-required sur les champs de ContactFormHome.tsx
    status: completed
  - id: realisations-filtres
    content: Ajouter aria-label sur les boutons filtre et role sur la nav dans realisations/page.tsx
    status: completed
  - id: realisations-slug-alt
    content: Ameliorer les alt des images dans realisations/[slug]/page.tsx
    status: completed
  - id: marches-nav
    content: Ajouter role et aria-label sur la navigation sticky dans marches-publics/page.tsx
    status: completed
  - id: layout-skiplink
    content: Ajouter un skip link dans layout.tsx
    status: completed
  - id: ressources-select
    content: Ajouter aria-label sur le select dans ressources/page.tsx
    status: completed
---

# Corrections d'Accessibilite - Audit WCAG AR+SOLUTION

Ce plan corrige les problemes d'accessibilite identifies dans l'audit pour atteindre la conformite WCAG 2.1 AA.

## Corrections critiques (bloquants)

### 1. Menu mobile - aria-expanded et aria-controls

**Fichier:** [`src/components/common/Header.tsx`](src/components/common/Header.tsx)

- Ligne 311-317 : Ajouter `aria-expanded={menuOpen}` et `aria-controls="mobile-menu"` au bouton hamburger
- Ligne 351 : Ajouter `id="mobile-menu"` au conteneur du menu mobile deroulant

### 2. Hierarchie des titres - Footer

**Fichier:** [`src/components/common/Footer.tsx`](src/components/common/Footer.tsx)

- Lignes 60, 86 : Remplacer les balises `<h4>` par `<p className="text-white font-semibold text-base mb-4">` pour eviter une hierarchie incorrecte

### 3. Hierarchie des titres - Page Contact

**Fichier:** [`src/app/contact/page.tsx`](src/app/contact/page.tsx)

- Ligne 508 : Changer `<h4>` en `<h3>` (section "Principales zones desservies")

### 4. Hierarchie des titres - Politique de confidentialite

**Fichier:** [`src/app/politique-confidentialite/page.tsx`](src/app/politique-confidentialite/page.tsx)

- Ligne 232 : Changer `<h3>` en `<p className="font-semibold text-slate-900 text-2xl md:text-3xl mb-2">` (titre "Ancrage Local" etc.)
- Ligne 503 : Changer `<h4>` en `<p className="font-bold text-green-800 mb-1">` (encart Securite)

### 5. Boutons switcher formulaire - aria-label

**Fichier:** [`src/app/contact/page.tsx`](src/app/contact/page.tsx)

- Lignes 276-293 : Ajouter `aria-label="Selectionner le mode particulier ou professionnel"` et `aria-label="Selectionner le mode marches publics"` sur les boutons switcher
- Ajouter `aria-pressed` pour indiquer l'etat actif

### 6. Champs requis - aria-required

**Fichier:** [`src/app/contact/page.tsx`](src/app/contact/page.tsx)

- Lignes 305-340 : Ajouter `aria-required="true"` sur tous les champs avec `required`

### 7. Champs requis - ContactFormHome

**Fichier:** [`src/components/common/ContactFormHome.tsx`](src/components/common/ContactFormHome.tsx)

- Ajouter `aria-required="true"` sur les champs obligatoires du formulaire

---

## Corrections importantes

### 8. Boutons filtre - aria-label

**Fichier:** [`src/app/realisations/page.tsx`](src/app/realisations/page.tsx)

- Lignes 327, 373 : Ajouter `aria-label={`Filtrer par ${filtre.label}`}` sur les boutons de filtre
- Lignes 383-400 : Ajouter `aria-label="Reinitialiser les filtres"` sur le bouton reset

### 9. Navigation sticky - role et aria-label

**Fichier:** [`src/app/realisations/page.tsx`](src/app/realisations/page.tsx)

- Ligne 313 : Ajouter `role="navigation"` et `aria-label="Filtres des realisations"` sur la section sticky

**Fichier:** [`src/app/marches-publics/page.tsx`](src/app/marches-publics/page.tsx)

- Ligne 398 : Ajouter `role="navigation"` et `aria-label="Navigation rapide de la page"` sur la barre sticky

### 10. Images alt descriptifs - Realisations

**Fichier:** [`src/app/realisations/page.tsx`](src/app/realisations/page.tsx)

- Ligne 428-431 : Ameliorer l'alt : `` alt={`Photo du projet ${projet.titre} - ${projet.metier} a ${projet.lieu}`} ``

**Fichier:** [`src/app/realisations/[slug]/page.tsx`](src/app/realisations/[slug]/page.tsx)

- Lignes 364, 372 : Ameliorer les alt des images avant/apres
- Lignes 706, 766 : Ameliorer les alt des images de la galerie et projets similaires

---

## Corrections mineures

### 11. Skip link

**Fichier:** [`src/app/layout.tsx`](src/app/layout.tsx)

- Ajouter un lien "Aller au contenu principal" au debut du body avec classes `sr-only focus:not-sr-only...`

### 12. Select sans label

**Fichier:** [`src/app/ressources/page.tsx`](src/app/ressources/page.tsx)

- Ligne 372 : Ajouter `aria-label="Filtrer par profil"` sur le select de tri

---

## Resume des fichiers a modifier

| Fichier | Nombre de corrections |

|---------|----------------------|

| `Header.tsx` | 2 |

| `Footer.tsx` | 2 |

| `contact/page.tsx` | 4 |

| `politique-confidentialite/page.tsx` | 2 |

| `ContactFormHome.tsx` | 1 |

| `realisations/page.tsx` | 4 |

| `realisations/[slug]/page.tsx` | 4 |

| `marches-publics/page.tsx` | 1 |

| `layout.tsx` | 1 |