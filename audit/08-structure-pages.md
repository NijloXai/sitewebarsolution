# Audit Structure des Pages

> **Date de l'audit :** 5 janvier 2026  
> **Objectif :** Vérifier et harmoniser la structure de chaque page selon le standard défini.

---

## Standard de référence

### Structure attendue pour toutes les pages :
1. **Commentaire d'en-tête** (lignes 1-X) - Description du fichier
2. **Imports** - Modules et composants
3. **Metadata** (`export const metadata`) - SEO
4. **JSON-LD / Données structurées** (si applicable)
5. **Composant Page** avec sections dans l'ordre :
   - Header (via layout ou direct)
   - Hero / Bannière
   - Sections de contenu (ordre logique)
   - **CTA final** avant le footer
   - Footer (via layout ou direct)
6. **MobileStickyBar** - Barre d'action mobile

### Pages Services (`/services/[service]`) - Sections attendues :
- `ServiceHero`
- `TrustBar`
- `ServiceFeaturesGrid`
- `ServiceMethodSection`
- `ServiceRealisationsSection`
- `MarchesPublicsSection`
- `ServiceFAQSection`
- `CtaBlock` final

---

## Pages CONFORMES ✅

### `/app/services/isolation/page.tsx`
Structure complète et conforme :
- ✅ Commentaire d'en-tête (L1-22)
- ✅ Imports (L24-61)
- ✅ Metadata (L62)
- ✅ JSON-LD via `ServiceStructuredData` (L547-558)
- ✅ Toutes les sections de service présentes dans l'ordre
- ✅ `CtaBlock` final (L522-527)
- ✅ `MobileStickyBar` (L537-541)

### `/app/services/platrerie/page.tsx`
Structure complète et conforme :
- ✅ Commentaire d'en-tête (L1-22)
- ✅ Imports (L24-62)
- ✅ Metadata (L63)
- ✅ JSON-LD via `ServiceStructuredData` (L499-510)
- ✅ Toutes les sections de service présentes dans l'ordre
- ✅ `CtaBlock` final (L474-479)
- ✅ `MobileStickyBar` (L489-493)

### `/app/marches-publics/page.tsx`
Structure conforme pour une page institutionnelle :
- ✅ Commentaire d'en-tête (L1-20)
- ✅ Imports (L23-33)
- ✅ Metadata (L36-40)
- ✅ `ServiceHero` (L196-210)
- ✅ Sections de contenu structurées
- ✅ `CtaBlock` final (L523-531)
- ✅ `MobileStickyBar` (L538-542)
- ⚠️ JSON-LD manquant (recommandé mais pas bloquant)

---

## Pages à CORRIGER

---

### `/app/page.tsx` (Page d'accueil)

| Élément | Statut | Détail |
|---------|--------|--------|
| Commentaire d'en-tête | ✅ | L1-20 |
| Imports | ✅ | L22-58 |
| **Metadata** | ❌ | **MANQUANT** - Aucun `export const metadata` |
| JSON-LD | ✅ | L61-225 (section StructuredData) |
| Header | ✅ | L329 |
| Hero | ✅ | L341-415 |
| Sections de contenu | ✅ | Présentes et ordonnées |
| **CTA final** | ⚠️ | Le CTA est intégré dans la section FAQ/Formulaire, pas un `CtaBlock` dédié |
| Footer | ✅ | L1534 |
| MobileStickyBar | ✅ | L1539-1571 |

**Actions :**
1. Ajouter `export const metadata` avec title, description, openGraph
2. Remplacer le formulaire inline par un `CtaBlock` dédié en fin de page

---

### `/app/a-propos/page.tsx`

| Élément | Statut | Détail |
|---------|--------|--------|
| Commentaire d'en-tête | ✅ | L1-19 |
| Imports | ✅ | L21-31 |
| Metadata | ✅ | L36-40 |
| **JSON-LD** | ❌ | **MANQUANT** |
| Header | ✅ | L218 |
| Hero | ✅ | L228-287 |
| CTA final | ✅ | L748-752 (`CtaBlock`) |
| Footer | ✅ | L756 |
| MobileStickyBar | ✅ | L759-792 |

**Actions :**
1. Ajouter des données structurées JSON-LD (type `AboutPage` ou `Organization`)

---

### `/app/contact/page.tsx`

| Élément | Statut | Détail |
|---------|--------|--------|
| Commentaire d'en-tête | ✅ | L1-19 |
| Imports | ✅ | L21-32 |
| **Metadata** | ❌ | **MANQUANT** |
| **JSON-LD** | ❌ | **MANQUANT** |
| Header | ✅ | L110 |
| Hero | ✅ | L121-392 |
| **CTA final** | ⚠️ | Le formulaire est le CTA, mais pas de `CtaBlock` dédié avant le footer |
| Footer | ✅ | L544 |
| MobileStickyBar | ✅ | L547-581 |

**Actions :**
1. Ajouter `export const metadata` avec title, description, openGraph
2. Ajouter des données structurées JSON-LD (type `ContactPage`)
3. *(Optionnel)* Ajouter un `CtaBlock` léger avant le footer

---

### `/app/faq/page.tsx`

| Élément | Statut | Détail |
|---------|--------|--------|
| Commentaire d'en-tête | ✅ | L1-14 |
| Imports | ✅ | L16-24 |
| **Metadata** | ❌ | **MANQUANT** |
| **JSON-LD** | ❌ | **MANQUANT** - Essentiel pour une page FAQ (FAQPage schema) |
| Header | ✅ | L201 |
| Hero | ✅ | L211-263 |
| CTA final | ✅ | L504-539 |
| Footer | ✅ | L543 |
| MobileStickyBar | ✅ | L546-580 |

**Actions :**
1. Ajouter `export const metadata` avec title, description, openGraph
2. **PRIORITAIRE** : Ajouter des données structurées `FAQPage` (impact SEO majeur)

---

### `/app/mentions-legales/page.tsx`

| Élément | Statut | Détail |
|---------|--------|--------|
| Commentaire d'en-tête | ✅ | L1-17 |
| Imports | ✅ | L19-27 |
| Metadata | ✅ | L32-36 |
| JSON-LD | ⚠️ | Non requis pour mentions légales |
| Header | ✅ | L147 |
| **Hero** | ⚠️ | En-tête simple (L156-185), pas de Hero visuel |
| CTA final | ✅ | L491-537 (soft CTA) |
| Footer | ✅ | L540 |
| MobileStickyBar | ✅ | L543-576 |

**Actions :**
1. *(Optionnel)* Standardiser le header de page avec un composant Hero léger

---

### `/app/politique-confidentialite/page.tsx`

| Élément | Statut | Détail |
|---------|--------|--------|
| Commentaire d'en-tête | ✅ | L1-14 |
| Imports | ✅ | L18-25 |
| Metadata | ✅ | L30-34 |
| JSON-LD | ⚠️ | Non requis pour politique de confidentialité |
| Header | ✅ | L133 |
| **Hero** | ⚠️ | En-tête simple (L143-156), pas de Hero visuel |
| **CTA final** | ❌ | **MANQUANT** - Pas de section CTA avant le footer |
| Footer | ✅ | L604 |
| MobileStickyBar | ✅ | L607-640 |

**Actions :**
1. Ajouter un `CtaBlock` léger avant le footer (cohérence avec les autres pages)

---

### `/app/realisations/page.tsx`

| Élément | Statut | Détail |
|---------|--------|--------|
| Commentaire d'en-tête | ✅ | L1-16 |
| Imports | ✅ | L18-29 |
| **Metadata** | ❌ | **MANQUANT** |
| **JSON-LD** | ❌ | **MANQUANT** - Recommandé (CollectionPage schema) |
| Header | ✅ | L172 |
| Hero | ✅ | L182-194 (`ServiceHero`) |
| CTA final | ✅ | L566-571 (`CtaBlock`) |
| Footer | ✅ | L575 |
| MobileStickyBar | ✅ | L578 |

**Actions :**
1. Ajouter `export const metadata` avec title, description, openGraph
2. Ajouter des données structurées JSON-LD (type `CollectionPage` ou `ItemList`)

---

### `/app/realisations/[slug]/page.tsx`

| Élément | Statut | Détail |
|---------|--------|--------|
| Commentaire d'en-tête | ✅ | L1-17 |
| Imports | ✅ | L19-24 |
| **Metadata** | ❌ | **MANQUANT** - Devrait utiliser `generateMetadata` pour les pages dynamiques |
| **JSON-LD** | ❌ | **MANQUANT** - Recommandé (Article ou CreativeWork schema) |
| Header | ✅ | L162 |
| Hero | ✅ | L172-308 |
| CTA final | ✅ | L699-753 (Zone de réassurance) |
| Footer | ✅ | L757 |
| MobileStickyBar | ✅ | L760-793 |

**Actions :**
1. Ajouter `export async function generateMetadata()` pour les métadonnées dynamiques
2. Ajouter des données structurées JSON-LD dynamiques

---

### `/app/ressources/page.tsx`

| Élément | Statut | Détail |
|---------|--------|--------|
| Commentaire d'en-tête | ✅ | L1-14 |
| Imports | ✅ | L16-24 |
| **Metadata** | ❌ | **MANQUANT** |
| **JSON-LD** | ❌ | **MANQUANT** - Recommandé (CollectionPage ou Blog schema) |
| Header | ✅ | L148 |
| Hero | ✅ | L158-224 |
| CTA final | ✅ | L426-489 |
| Footer | ✅ | L493 |
| MobileStickyBar | ✅ | L496-530 |

**Actions :**
1. Ajouter `export const metadata` avec title, description, openGraph
2. Ajouter des données structurées JSON-LD

---

### `/app/services/page.tsx` (Hub Services)

| Élément | Statut | Détail |
|---------|--------|--------|
| Commentaire d'en-tête | ✅ | L1-19 |
| Imports | ✅ | L21-54 |
| Metadata | ✅ | L56-87 |
| JSON-LD | ✅ | L548-558 (`ServiceStructuredData`) |
| Header | ✅ | L95 |
| ServiceHero | ✅ | L102-115 |
| TrustBar | ✅ | L121 |
| **ServiceFeaturesGrid** | ⚠️ | Grille personnalisée inline (L148-257), pas le composant standard |
| **ServiceMethodSection** | ⚠️ | Section méthode inline (L272-358), pas le composant standard |
| **ServiceRealisationsSection** | ⚠️ | Section inline (L364-445), pas le composant standard |
| MarchesPublicsSection | ✅ | L263-266 |
| **ServiceFAQSection** | ⚠️ | FAQ inline avec `<details>` (L497-514), pas le composant standard |
| CtaBlock final | ✅ | L524-528 |
| Footer | ✅ | L532 |
| MobileStickyBar | ✅ | L538-542 |

**Actions :**
1. *(Recommandé)* Remplacer les sections inline par les composants standards pour cohérence

---

### `/app/services/amenagement/page.tsx`

| Élément | Statut | Détail |
|---------|--------|--------|
| Commentaire d'en-tête | ✅ | L1-23 |
| Imports | ✅ | L25-56 |
| Metadata | ✅ | L58 |
| JSON-LD | ✅ | L464-475 (`ServiceStructuredData`) |
| Header | ✅ | L259 |
| ServiceHero | ✅ | L269-283 |
| TrustBar | ✅ | L289 |
| ServiceFeaturesGrid | ✅ | L315-319 et L329-333 |
| ServiceMethodSection | ✅ | L375-386 |
| ServiceRealisationsSection | ✅ | L392-399 |
| **MarchesPublicsSection** | ❌ | **MANQUANT** |
| ServiceFAQSection | ✅ | L405-409 |
| CtaBlock final | ✅ | L438-444 |
| Footer | ✅ | L448 |
| MobileStickyBar | ✅ | L454-458 |

**Actions :**
1. Ajouter la section `MarchesPublicsSection` entre `ServiceRealisationsSection` et `ServiceFAQSection`

---

### `/app/services/enduits-finitions/page.tsx`

| Élément | Statut | Détail |
|---------|--------|--------|
| Commentaire d'en-tête | ✅ | L1-22 |
| Imports | ✅ | L24-55 |
| Metadata | ✅ | L57 |
| JSON-LD | ✅ | L551-562 (`ServiceStructuredData`) |
| Header | ✅ | L204 |
| ServiceHero | ✅ | L214-228 |
| TrustBar | ✅ | L234 |
| ServiceFeaturesGrid | ✅ | L321-329 |
| **ServiceMethodSection** | ⚠️ | Section "Méthode & Propreté" inline (L337-433), pas le composant standard |
| ServiceRealisationsSection | ✅ | L439-445 |
| MarchesPublicsSection | ✅ | L506-509 |
| ServiceFAQSection | ✅ | L515-519 |
| CtaBlock final | ✅ | L525-531 |
| Footer | ✅ | L535 |
| MobileStickyBar | ✅ | L541-545 |

**Actions :**
1. *(Recommandé)* Utiliser le composant `ServiceMethodSection` au lieu de la section inline personnalisée

---

## Récapitulatif des Actions à Effectuer

### Priorité HAUTE (Impact SEO) 🔴

| N° | Action | Fichier | Lignes |
|----|--------|---------|--------|
| 1 | Ajouter `export const metadata` | `/app/page.tsx` | Après L58 |
| 2 | Ajouter `export const metadata` | `/app/contact/page.tsx` | Après L32 |
| 3 | Ajouter `export const metadata` | `/app/faq/page.tsx` | Après L24 |
| 4 | Ajouter `export const metadata` | `/app/realisations/page.tsx` | Après L29 |
| 5 | Ajouter `generateMetadata` | `/app/realisations/[slug]/page.tsx` | Après L24 |
| 6 | Ajouter `export const metadata` | `/app/ressources/page.tsx` | Après L24 |
| 7 | Ajouter JSON-LD `FAQPage` | `/app/faq/page.tsx` | Avant `</main>` |
| 8 | Ajouter JSON-LD `ContactPage` | `/app/contact/page.tsx` | Avant `</main>` |

### Priorité MOYENNE (Cohérence Structure) 🟠

| N° | Action | Fichier | Lignes |
|----|--------|---------|--------|
| 9 | Ajouter `MarchesPublicsSection` | `/app/services/amenagement/page.tsx` | Entre L399 et L405 |
| 10 | Ajouter JSON-LD `AboutPage` | `/app/a-propos/page.tsx` | Avant `</main>` |
| 11 | Ajouter JSON-LD `CollectionPage` | `/app/realisations/page.tsx` | Avant `</main>` |
| 12 | Ajouter `CtaBlock` avant footer | `/app/politique-confidentialite/page.tsx` | L603 |

### Priorité BASSE (Harmonisation) 🟢

| N° | Action | Fichier | Description |
|----|--------|---------|-------------|
| 13 | Standardiser ServiceMethodSection | `/app/services/enduits-finitions/page.tsx` | Remplacer section inline par composant |
| 14 | Standardiser sections inline | `/app/services/page.tsx` | Utiliser les composants standards |
| 15 | Ajouter Hero standard | `/app/mentions-legales/page.tsx` | Remplacer header simple |
| 16 | Ajouter Hero standard | `/app/politique-confidentialite/page.tsx` | Remplacer header simple |

---

## Statistiques

| Catégorie | Nombre |
|-----------|--------|
| Pages analysées | 15 |
| Pages 100% conformes | 3 |
| Pages avec corrections mineures | 5 |
| Pages avec corrections majeures | 7 |
| Metadata manquants | 6 |
| JSON-LD manquants | 9 |
| CTA final manquants | 1 |
| MarchesPublicsSection manquants | 1 |

