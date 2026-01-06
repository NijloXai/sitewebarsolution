# Audit Accessibilité - AR+SOLUTION

**Date :** Janvier 2026  
**Scope :** Ensemble du site (pages + composants)

---

## 🔴 Critiques (bloquants)

| Problème | Fichier | Ligne | Correction |
|----------|---------|-------|------------|
| Menu mobile sans `aria-expanded` | `components/common/Header.tsx` | 311-317 | Ajouter `aria-expanded={menuOpen}` sur le bouton hamburger |
| Saut de niveau h2 → h4 | `app/contact/page.tsx` | 508 | Changer `<h4>` en `<h3>` (après le h2 ligne 500) |
| h3 sans h2 parent | `app/politique-confidentialite/page.tsx` | 232 | Ajouter un h2 de section ou transformer en `<p className="font-semibold">` |
| Footer avec h4 sans contexte | `components/common/Footer.tsx` | 60, 86 | Changer `<h4>` en `<p className="font-semibold">` ou `<strong>` |
| Boutons de formulaire sans aria-label | `app/contact/page.tsx` | 276, 285 | Ajouter `aria-label` sur les boutons switcher (ex: `aria-label="Mode particulier/professionnel"`) |
| Champs requis sans aria-required | `app/contact/page.tsx` | 305-340 | Ajouter `aria-required="true"` sur les Input requis |
| Champs requis sans aria-required | `components/common/ContactFormHome.tsx` | 50-90 | Ajouter `aria-required="true"` sur les champs nécessaires |

---

## 🟠 Importants

| Problème | Fichier | Ligne | Correction |
|----------|---------|-------|------------|
| Boutons filtre sans aria-label | `app/realisations/page.tsx` | 327, 373, 383 | Ajouter `aria-label` décrivant l'action du filtre |
| Bouton reset sans aria-label | `app/realisations/page.tsx` | 383-400 | Ajouter `aria-label="Réinitialiser les filtres"` |
| Image alt peu descriptif | `app/realisations/page.tsx` | 428-431 | Améliorer alt : `alt={`Photo du projet ${projet.titre} - ${projet.metier} à ${projet.lieu}`}` |
| Image alt peu descriptif | `app/realisations/[slug]/page.tsx` | 364, 372, 706, 766 | Ajouter des alt descriptifs pour les images de réalisation |
| Icônes SVG inline sans aria-hidden | `app/contact/page.tsx` | 186-188, 280-291 | Vérifier que toutes les icônes décoratives ont `aria-hidden="true"` |
| Accordion sans aria-controls | `app/faq/page.tsx` | - | Vérifier que le composant Accordion de shadcn gère bien aria-controls (normalement oui) |
| Navigation sticky sans rôle | `app/marches-publics/page.tsx` | 398-418 | Ajouter `role="navigation"` et `aria-label="Navigation rapide"` |
| Navigation sticky sans rôle | `app/realisations/page.tsx` | 313-404 | Ajouter `role="navigation"` et `aria-label="Filtres des réalisations"` |

---

## 🟡 Mineurs

| Problème | Fichier | Ligne | Correction |
|----------|---------|-------|------------|
| Image placeholder sans alt descriptif | `app/contact/page.tsx` | 247-259 | Remplacer par de vraies images ou préciser "Logo certification RGE Qualibat" etc. |
| Image placeholder peu informative | `app/marches-publics/page.tsx` | 513-516 | L'image placeholder `[Photo: {ref.titre}]` devrait avoir un alt réel |
| Carte zone sans alt significatif | `app/marches-publics/page.tsx` | 665-666 | L'image carte a un placeholder, prévoir un alt descriptif |
| Skip link manquant | `app/layout.tsx` | - | Ajouter un lien "Aller au contenu principal" avant le Header |
| Focus non visible sur certains boutons | `components/services/MobileStickyBar.tsx` | - | Vérifier que `focus-visible:ring` est présent sur tous les boutons |
| Texte alternatif identique au contenu visible | `components/services/ServiceHero.tsx` | 146 | L'aria-label du bouton CTA est redondant avec le label visible - peut être supprimé |
| Lang attribute | `app/layout.tsx` | - | Vérifier que `<html lang="fr">` est bien présent |
| Select sans label visible | `app/ressources/page.tsx` | 372 | Ajouter un `<label>` ou `aria-label` au select de tri |

---

## ✅ Points positifs

| Bonne pratique | Fichier | Commentaire |
|----------------|---------|-------------|
| `aria-current="page"` sur nav | `components/common/Header.tsx` | ✓ Correctement implémenté sur les liens actifs |
| `aria-hidden="true"` sur icônes | Multiple | ✓ Bien appliqué sur la majorité des icônes décoratives |
| `aria-label` sur liens téléphone/email | `components/common/Header.tsx`, `Footer.tsx` | ✓ Liens accessibles avec labels explicites |
| Labels formulaire | `app/contact/page.tsx` | ✓ `htmlFor` et `id` correctement associés |
| Focus visible | `components/common/Header.tsx` | ✓ `focus-visible:ring` sur les éléments interactifs |
| `aria-labelledby` sur sections | `app/page.tsx` | ✓ Sections avec ID référencé pour lecteurs d'écran |
| Role list sur grilles | `app/services/page.tsx` | ✓ `role="list"` et `role="listitem"` sur les cartes |
| Bouton hamburger avec aria-label | `components/common/Header.tsx` | ✓ Label dynamique selon l'état du menu |
| BeforeAfterSlider accessible | `components/common/BeforeAfterSlider.tsx` | ✓ `aria-label`, `aria-pressed` bien utilisés |

---

## 📋 Récapitulatif par catégorie

### 1. Hiérarchie des titres
- **Problèmes :** 4
- **À corriger :** Footer h4, contact h4, politique h3 isolé

### 2. Images  
- **Problèmes :** 3
- **À corriger :** Alt descriptifs sur images de réalisations

### 3. Liens et boutons
- **Problèmes :** 4
- **À corriger :** aria-label sur boutons filtres et switcher

### 4. Formulaires
- **Problèmes :** 2
- **À corriger :** aria-required sur champs obligatoires

### 5. Navigation clavier
- **Problèmes :** 1
- **À corriger :** Skip link manquant

### 6. ARIA
- **Problèmes :** 2
- **À corriger :** aria-expanded sur menu mobile, roles sur nav sticky

---

## 🔧 Corrections prioritaires

### 1. Header.tsx - Menu mobile (CRITIQUE)

```tsx
// Ligne 311-317 : Ajouter aria-expanded
<Button
  type="button"
  variant="ghost"
  size="icon"
  className="text-gray-600 hover:text-gray-700"
  aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
  aria-expanded={menuOpen}  // ← AJOUTER
  aria-controls="mobile-menu"  // ← AJOUTER
  onClick={() => setMenuOpen(!menuOpen)}
>

// Et sur le menu déroulant (ligne 351), ajouter id="mobile-menu"
```

### 2. Footer.tsx - Remplacer h4 par des éléments sémantiques

```tsx
// Remplacer <h4> par <p> avec style
<p className="text-white font-semibold text-base mb-4">Contact</p>
<p className="text-white font-semibold text-base mb-4">Légal</p>
```

### 3. contact/page.tsx - aria-required sur les champs

```tsx
<Input
  type="text"
  id="lastname"
  name="lastname"
  placeholder="Votre nom complet"
  required
  aria-required="true"  // ← AJOUTER
  className="..."
/>
```

### 4. layout.tsx - Skip link

```tsx
// Ajouter au début du body, avant le Header
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg focus:text-brand-blue"
>
  Aller au contenu principal
</a>

// Et sur le <main> de chaque page, ajouter id="main-content"
```

---

## 📊 Score estimé

| Critère WCAG | Niveau | Score |
|--------------|--------|-------|
| Perceivable (1.x) | A/AA | 🟡 75% |
| Operable (2.x) | A/AA | 🟠 70% |
| Understandable (3.x) | A/AA | 🟢 85% |
| Robust (4.x) | A/AA | 🟢 80% |

**Score global estimé : 77/100** - Bon niveau mais corrections nécessaires pour conformité WCAG 2.1 AA.

