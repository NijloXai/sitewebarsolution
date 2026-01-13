# Audit de cohérence des styles

Ce document recense les incohérences de styles détectées dans le projet et propose des corrections pour harmoniser le design.

---

## 1. Couleurs non conformes

### 1.1 Couleurs `blue-XXX` non-brand (59 occurrences)

| Classe Tailwind | Fichiers concernés | Remplacement recommandé |
|-----------------|-------------------|-------------------------|
| `text-blue-50` | page.tsx | `text-white/50` |
| `text-blue-100` | page.tsx, politique-confidentialite | `text-white/80` ou `text-gray-200` |
| `text-blue-200` | page.tsx | `text-white/80` ou `text-gray-300` |
| `text-blue-600` | contact, faq, composants services | `text-brand-blue` |
| `text-blue-700` | page.tsx, contact | `text-brand-blue` |
| `text-blue-800` | politique-confidentialite | `text-brand-blue` |
| `bg-blue-50` | contact, faq, ressources | `bg-brand-blue/5` ou `bg-gray-50` |
| `bg-blue-100` | page.tsx, politique-confidentialite | `bg-brand-blue/10` ou `bg-gray-100` |
| `bg-blue-200` | page.tsx | `bg-brand-blue/15` |
| `bg-blue-600` | page.tsx, contact | `bg-brand-blue` |
| `bg-blue-700` | page.tsx, Header | `bg-brand-blue` ou `bg-brand-blue-dark` |
| `bg-blue-800` | page.tsx | `bg-brand-blue-dark` |
| `border-blue-100` | politique-confidentialite | `border-brand-blue/10` |
| `border-blue-200` | page.tsx, contact | `border-brand-blue/20` |
| `border-blue-500` | contact | `border-brand-blue` |
| `border-blue-700` | page.tsx | `border-brand-blue` |

### 1.2 Couleurs `orange-XXX` non-brand (17 occurrences)

| Classe Tailwind | Fichiers concernés | Remplacement recommandé |
|-----------------|-------------------|-------------------------|
| `bg-orange-50` | contact | `bg-brand-orange/5` |
| `bg-orange-100` | page.tsx | `bg-brand-orange/10` |
| `text-orange-400` | page.tsx, Header | `text-brand-orange` |
| `text-orange-500` | realisations/[slug] | `text-brand-orange` |
| `hover:bg-orange-500` | Header, contact | `hover:bg-brand-orange` |
| `hover:bg-orange-700` | page.tsx | `hover:bg-brand-orange-dark` |

### 1.3 Couleurs hex en dur (problématiques)

| Valeur hex | Fichiers concernés | Action recommandée |
|------------|-------------------|-------------------|
| `#1e3a5f` | GridScan.tsx, Header.tsx, Footer.tsx | Remplacer par variable CSS `--brand-blue` |
| `#f97316` | GridScan.tsx, Header.tsx, Footer.tsx | Remplacer par variable CSS `--brand-orange` |
| `#3b82f6` | Props `scanColor` | Utiliser `--brand-blue` ou garder si sémantique |
| `#22c55e` | Props `scanColor` | OK si usage sémantique (succès) |
| `#a855f7` | Props `scanColor` | OK si usage sémantique (catégorie) |
| `#64748b` | Props `scanColor` | OK si usage sémantique (neutre) |

---

## 2. Typographie incohérente

### 2.1 Titres H1

| Standard attendu | Problèmes trouvés | Fichiers concernés |
|------------------|-------------------|-------------------|
| `text-4xl md:text-5xl font-bold` | `text-3xl md:text-4xl` | realisations/[slug]/page.tsx |
| `text-4xl md:text-5xl font-bold` | `text-3xl md:text-5xl` | faq/page.tsx |

### 2.2 Titres H2

| Standard attendu | Problèmes trouvés | Fichiers concernés |
|------------------|-------------------|-------------------|
| `text-3xl md:text-4xl font-bold` | `text-2xl font-bold` (sans responsive) | 15+ occurrences dans page.tsx, contact, faq, ressources, mentions-legales |
| `text-3xl md:text-4xl font-bold` | `text-2xl md:text-3xl` | politique-confidentialite |

### 2.3 Titres H3

| Standard attendu | Problèmes trouvés | Fichiers concernés |
|------------------|-------------------|-------------------|
| `text-2xl md:text-3xl font-semibold` | `text-xl font-semibold` | page.tsx, contact |
| `text-2xl md:text-3xl font-semibold` | `text-lg font-semibold` | realisations/[slug], faq |
| `text-2xl md:text-3xl font-semibold` | `text-xl font-bold` | ressources |

---

## 3. Espacements non-standard

### 3.1 Espacements de sections (22 occurrences)

| Pattern trouvé | Standard suggéré | Fichiers concernés |
|----------------|------------------|-------------------|
| `py-12` | `py-16` ou `py-24` | Footer.tsx, mentions-legales, ressources, realisations, contact, faq |
| `py-20` | `py-16` ou `py-24` | page.tsx (profils, ressources hero), CtaBlock.tsx, faq |
| `py-28` | `py-24` ou `py-32` | page.tsx |
| `py-40` | `py-32` | page.tsx |

### 3.2 Recommandation d'échelle d'espacement

Pour une cohérence optimale, utiliser l'échelle suivante :

| Usage | Classe recommandée |
|-------|-------------------|
| Section compacte | `py-12` ou `py-16` |
| Section standard | `py-16` ou `py-24` |
| Section hero/feature | `py-24` ou `py-32` |
| Grand espacement | `py-32` |

---

## 4. Notes sur les couleurs acceptables

### Couleurs `slate-*` (171 occurrences)
- **Statut** : Acceptables
- **Raison** : Utilisées comme nuances de gris neutres, équivalentes aux `gray-*`

### Couleurs sémantiques
- **Vert** (`green-*`, `emerald-*`) : OK pour états de succès
- **Rouge** (`red-*`) : OK pour erreurs et alertes
- **Violet** (`purple-*`, `violet-*`) : OK si cohérent pour catégories
- **Ambre** (`amber-*`, `yellow-*`) : OK pour avertissements

---

## 5. Fichiers les plus impactés (priorité de correction)

| Fichier | Nb corrections estimées | Types de problèmes |
|---------|------------------------|-------------------|
| `src/app/page.tsx` | ~25 | Couleurs blue/orange, typo h2/h3, espacements |
| `src/app/politique-confidentialite/page.tsx` | ~15 | Couleurs blue, typo h2 |
| `src/app/contact/page.tsx` | ~12 | Couleurs blue/orange, typo h3 |
| `src/app/faq/page.tsx` | ~10 | Couleurs blue, typo h1/h2, espacements |
| `src/app/ressources/page.tsx` | ~8 | Couleurs blue, typo h3, espacements |
| `src/app/mentions-legales/page.tsx` | ~6 | Espacements, typo |
| `src/components/common/Header.tsx` | ~5 | Couleurs orange, hex en dur |
| `src/components/common/Footer.tsx` | ~4 | Hex en dur, espacements |
| `src/components/common/GridScan.tsx` | ~4 | Hex en dur |
| `src/app/realisations/[slug]/page.tsx` | ~5 | Couleurs orange, typo h1/h3 |

---

## 6. Prochaines étapes

1. **Définir les variables CSS** dans `globals.css` si absentes :
   - `--brand-blue` / `--brand-blue-dark`
   - `--brand-orange` / `--brand-orange-dark`

2. **Corriger par ordre de priorité** :
   - Page d'accueil (`page.tsx`)
   - Pages de contenu (politique, contact, faq)
   - Composants communs (Header, Footer)
   - Pages secondaires

3. **Valider visuellement** après chaque lot de corrections





