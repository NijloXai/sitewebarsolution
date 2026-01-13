# Audit 10 – Cohérence des Composants UI

## Résumé

| Catégorie | Statut | Problèmes |
|-----------|--------|-----------|
| Boutons | ⚠️ Incohérent | Hovers inversés, couleurs non standardisées |
| Cartes | ⚠️ Incohérent | Ombres et paddings variables |
| Badges | ❌ Non conforme | Couleurs hors standard, variantes personnalisées |
| Arrondis | ⚠️ Incohérent | Mix de rounded-lg/xl/2xl/full |

---

## 1. BOUTONS

### Standards définis

```
Primary   : bg-brand-orange hover:bg-brand-orange-dark text-white
Secondary : bg-brand-blue hover:bg-brand-blue/90 text-white  
Ghost     : bg-transparent hover:bg-gray-100
Outline   : border border-brand-blue text-brand-blue

Tailles :
- Défaut : px-6 py-3
- Small  : px-4 py-2
- Large  : px-8 py-4
```

### Composant Button de base (`button.tsx`)

Le composant shadcn utilise des variantes sémantiques (`default`, `secondary`, `outline`, `ghost`) sans les couleurs brand définies. Les couleurs sont appliquées via `className` à chaque utilisation.

### Problèmes détectés

#### 1.1 Hovers inversés sur les boutons Primary (orange)

| Fichier | Style appliqué | Problème |
|---------|----------------|----------|
| `Header.tsx:301` | `bg-brand-orange-dark hover:bg-brand-orange` | ✅ Dark → Light |
| `page.tsx:415` | `bg-brand-orange-dark hover:bg-brand-orange` | ✅ Dark → Light |
| `ressources/page.tsx:542` | `bg-brand-orange hover:bg-brand-orange-dark` | ❌ Light → Dark |
| `faq/page.tsx:647` | `bg-brand-orange hover:bg-brand-orange-dark` | ❌ Light → Dark |
| `CtaBlock.tsx:76` | `bg-brand-orange-dark hover:bg-brand-orange` | ✅ Dark → Light |

**Verdict** : Incohérence sur la direction du hover (3 dark→light vs 2 light→dark)

#### 1.2 Boutons Secondary (bleu) non standardisés

| Fichier | Style appliqué | Conforme ? |
|---------|----------------|------------|
| `faq/page.tsx:565` | `bg-brand-blue hover:bg-brand-blue` | ❌ Hover identique ! |
| `ressources/page.tsx:404` | `bg-slate-900 hover:bg-slate-800` | ❌ Pas brand-blue |
| `MarchesPublicsSection.tsx:233` | `bg-white text-brand-blue hover:bg-gray-100` | ❌ Inversé (blanc fond) |

#### 1.3 Boutons Outline non conformes

| Fichier | Style appliqué | Problème |
|---------|----------------|----------|
| `faq/page.tsx:650` | `border-white text-white hover:bg-white hover:text-slate-900` | Contexte sombre, non standard |
| `ressources/page.tsx:555` | `border-2 border-slate-600 text-white hover:bg-slate-800` | Pas brand-blue |
| `page.tsx:422` | `border-white border-2 text-white hover:bg-white/10` | Contexte hero, non standard |
| `realisations/page.tsx:525` | `variant="outline"` (défaut shadcn) | ⚠️ Utilise variante par défaut |

#### 1.4 Boutons natifs `<button>` (filtres)

Les boutons de filtres utilisent des `<button>` natifs avec styles inline :

```tsx
// ressources/page.tsx:334
<button className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition">

// realisations/page.tsx:304
<button className="px-4 py-2 rounded-full text-sm font-medium transition-colors">

// contact/page.tsx:257
<button className="px-6 py-2 rounded-md text-sm font-bold shadow">
```

**Problème** : Pas de composant Button réutilisable pour les filtres, styles dupliqués.

---

## 2. CARTES

### Standards définis

```
Fond     : bg-white
Ombre    : shadow-md ou shadow-lg
Bordure  : rounded-lg ou rounded-xl
Padding  : p-6
```

### Composant Card de base (`card.tsx`)

```tsx
// Ligne 10
className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
```

Le composant définit `rounded-xl` et `shadow-sm` par défaut.

### Problèmes détectés

#### 2.1 Ombres incohérentes

| Fichier | Ombre | Standard ? |
|---------|-------|------------|
| `ressources/page.tsx:369` | `shadow-lg` | ✅ |
| `ressources/page.tsx:451` | `hover:shadow-xl` | ⚠️ |
| `ServiceFeaturesGrid.tsx:116` | `shadow-lg hover:shadow-2xl` | ⚠️ Excessif |
| `realisations/page.tsx:394` | `shadow-lg hover:shadow-2xl` | ⚠️ Excessif |
| `page.tsx:460` | `shadow-lg hover:shadow-2xl` | ⚠️ Excessif |
| `faq/page.tsx:536` | (défaut card = shadow-sm) | ❌ Trop faible |

#### 2.2 Paddings incohérents dans CardContent

| Fichier | Padding | Standard ? |
|---------|---------|------------|
| `ressources/page.tsx:384` | `p-8 lg:p-12` | ❌ Trop grand |
| `ressources/page.tsx:475` | `p-6` | ✅ |
| `ServiceFeaturesGrid.tsx:140` | `p-4 sm:p-6` | ⚠️ Responsive |
| `ServiceFeaturesGrid.tsx:160` | `px-4 sm:px-6 pb-3 sm:pb-4` | ⚠️ Non standard |
| `page.tsx:480` | `p-6 md:p-7 lg:p-8` | ⚠️ Responsive croissant |
| `MarchesPublicsSection.tsx:275` | `p-4 md:p-5 lg:p-6` | ⚠️ Responsive croissant |
| `platrerie/page.tsx:317` | `p-6` | ✅ |

#### 2.3 Bordures et arrondis

Le composant Card définit `rounded-xl` mais certaines cartes ajoutent :
- `border-2 border-gray-200 hover:border-brand-orange` (page.tsx, realisations)
- `border-l-4` pour les accents (platrerie, isolation)
- `border-2 border-brand-orange/20` (ServiceFeaturesGrid)

**Problème** : Pas de standard clair pour les bordures colorées et accents.

---

## 3. BADGES

### Standards définis

```
Certification : bg-green-100 text-green-800
Info          : bg-blue-100 text-blue-800
Warning       : bg-orange-100 text-orange-800
```

### Composant Badge de base (`badge.tsx`)

Variantes : `default`, `secondary`, `destructive`, `outline`
Aucune variante pour `certification`, `info`, `warning`.

### Problèmes détectés

#### 3.1 Badges avec couleurs non standardisées

| Fichier | Usage | Style | Conforme ? |
|---------|-------|-------|------------|
| `ressources/page.tsx:279` | Hero badge | `bg-brand-orange/20 text-brand-orange border-brand-orange/30` | ❌ |
| `ressources/page.tsx:378` | Dossier du Mois | `bg-brand-orange text-white shadow` | ❌ |
| `ressources/page.tsx:464` | Catégorie article | `bg-brand-blue/90 text-white` ou `bg-brand-orange text-white` | ❌ |
| `realisations/page.tsx:413` | Avant/Après | `bg-white/90 backdrop-blur text-slate-800` | ❌ |
| `realisations/page.tsx:438` | Secteur | `bg-brand-blue text-white` ou `bg-brand-orange text-white` | ❌ |
| `ServiceFeaturesGrid.tsx:126` | Badge feature | `bg-brand-orange` / `bg-green-600` / `bg-brand-blue` | ❌ |
| `page.tsx:560` | Tag service | `${service.tagColor} text-white rounded-md` | ❌ |

#### 3.2 Badges Certification (RGE, Qualibat)

| Fichier | Style | Standard attendu |
|---------|-------|------------------|
| `ServiceFeaturesGrid.tsx:147` | `bg-green-50 text-green-600` | ❌ Devrait être `bg-green-100 text-green-800` |
| `a-propos/page.tsx:475` | `bg-green-100 text-green-600` | ⚠️ Texte 600 au lieu de 800 |

#### 3.3 Badge Marchés Publics très personnalisé

```tsx
// MarchesPublicsSection.tsx:172-175
className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue/90 to-brand-blue 
  text-white border-brand-blue/50 text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 
  rounded-full uppercase tracking-wider shadow-lg backdrop-blur-sm hover:shadow-xl 
  hover:scale-105 hover:border-brand-blue/70 transition-all duration-300"
```

**Problème** : Style très élaboré, non réutilisable, hors composant Badge standard.

---

## 4. ARRONDIS (rounded)

### Mix observé dans le projet

| Valeur | Usages |
|--------|--------|
| `rounded-md` | Boutons shadcn, certains inputs |
| `rounded-lg` | GridScan, ServiceFeaturesGrid icônes, certains blocs |
| `rounded-xl` | Card (défaut), sections principales |
| `rounded-2xl` | ContactFormHome, headers de section |
| `rounded-full` | Badges, boutons filtres, badges de disponibilité |

**Pas de règle claire** : Les arrondis varient selon les composants sans standard défini.

---

## 5. RECOMMANDATIONS

### 5.1 Boutons - Actions prioritaires

1. **Harmoniser la direction du hover orange** :
   - Standard recommandé : `bg-brand-orange hover:bg-brand-orange-dark` (clair → foncé)
   - OU l'inverse partout, mais pas les deux

2. **Fixer le hover du bouton bleu** :
   - `faq/page.tsx:565` : changer `hover:bg-brand-blue` en `hover:bg-brand-blue/90`

3. **Créer des variantes Button dans `button.tsx`** :
   ```tsx
   variant: {
     // ... existants
     brand: "bg-brand-orange hover:bg-brand-orange-dark text-white",
     brandSecondary: "bg-brand-blue hover:bg-brand-blue/90 text-white",
     brandOutline: "border border-brand-blue text-brand-blue hover:bg-brand-blue/5",
   }
   ```

4. **Créer un composant FilterButton** pour les filtres si besoin réutilisable.

### 5.2 Cartes - Actions prioritaires

1. **Standardiser les ombres** :
   - Défaut : `shadow-md`
   - Hover : `hover:shadow-lg` (pas shadow-2xl)

2. **Standardiser les paddings CardContent** :
   - Standard : `p-6`
   - Responsive autorisé : `p-4 md:p-6`

### 5.3 Badges - Actions prioritaires

1. **Ajouter des variantes sémantiques dans `badge.tsx`** :
   ```tsx
   variant: {
     // ... existants
     certification: "bg-green-100 text-green-800 border-green-200",
     info: "bg-blue-100 text-blue-800 border-blue-200",
     warning: "bg-orange-100 text-orange-800 border-orange-200",
     brand: "bg-brand-orange text-white border-transparent",
     brandBlue: "bg-brand-blue text-white border-transparent",
   }
   ```

2. **Remplacer les styles inline** par les variantes du composant Badge.

### 5.4 Arrondis - Standardisation

| Composant | Arrondi standard |
|-----------|------------------|
| Boutons | `rounded-md` (défaut shadcn) |
| Cartes | `rounded-xl` |
| Badges | `rounded-full` |
| Inputs | `rounded-md` |
| Sections | `rounded-xl` ou `rounded-2xl` |
| Images/Overlays | `rounded-lg` |

---

## 6. FICHIERS À MODIFIER (par priorité)

### Haute priorité (incohérences visuelles évidentes)

1. `src/app/faq/page.tsx` - Hover bleu cassé (ligne 565)
2. `src/app/ressources/page.tsx` - Hovers orange inversés
3. `src/components/ui/badge.tsx` - Ajouter variantes sémantiques
4. `src/components/ui/button.tsx` - Ajouter variantes brand

### Moyenne priorité (harmonisation)

5. `src/components/services/ServiceFeaturesGrid.tsx` - Ombres excessives
6. `src/app/page.tsx` - Styles boutons et badges
7. `src/app/realisations/page.tsx` - Ombres et badges
8. `src/components/services/MarchesPublicsSection.tsx` - Badge très personnalisé

### Basse priorité (optimisation)

9. Standardiser tous les `rounded-*` selon le tableau
10. Harmoniser les paddings responsive des CardContent

---

## 7. CONCLUSION

Le projet utilise les composants shadcn/ui mais les surcharge massivement avec des classes inline, créant des incohérences :

- **Boutons** : Direction hover inversée selon les pages, couleurs non standards
- **Cartes** : Ombres variant de `shadow-sm` à `shadow-2xl`, paddings non uniformes
- **Badges** : Aucune variante sémantique, styles entièrement inline
- **Arrondis** : Mix non documenté de `rounded-md/lg/xl/2xl/full`

**Effort estimé** : ~2-3 heures pour harmoniser les composants UI de base.





