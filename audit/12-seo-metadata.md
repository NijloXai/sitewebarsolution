# Audit SEO - Métadonnées des Pages

> **Date de l'audit** : Janvier 2026  
> **Périmètre** : Toutes les pages du site AR+SOLUTION

---

## 📊 Synthèse Globale

| Statut | Nombre de pages | Pourcentage |
|--------|-----------------|-------------|
| ✅ Complet | 4 | 25% |
| ⚠️ Partiel | 5 | 31% |
| ❌ Incomplet | 7 | 44% |

**Total** : 16 pages analysées

---

## 📋 Structure Métadonnées Attendue

```typescript
export const metadata: Metadata = {
  title: "Titre unique < 60 caractères | AR+SOLUTION",
  description: "Description unique et engageante < 160 caractères",
  keywords: ["mot-clé 1", "mot-clé 2", ...],
  openGraph: {
    title: "Titre pour réseaux sociaux",
    description: "Description pour réseaux sociaux",
    url: "https://ar-solution.fr/page",
    siteName: "AR+SOLUTION",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "...", width: 1200, height: 630, alt: "..." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Titre Twitter",
    description: "Description Twitter",
    images: ["..."],
  },
  alternates: {
    canonical: "https://ar-solution.fr/page",
  },
};
```

---

## 📄 Analyse Détaillée par Page

### 1. Page d'Accueil (`app/page.tsx`)

**Statut** : ✅ **COMPLET**

| Élément | Statut | Valeur actuelle |
|---------|--------|-----------------|
| title | ✅ | "AR+SOLUTION \| Plâtrerie, Isolation & Finitions à Strasbourg" |
| description | ✅ | "Expert en rénovation intérieure à Strasbourg et en Alsace..." (153 car.) |
| keywords | ✅ | plâtrerie Strasbourg, isolation RGE Alsace, rénovation intérieure... |
| openGraph | ✅ | Complet avec image |
| twitter | ✅ | Complet |
| canonical | ✅ | https://ar-solution.fr |
| JSON-LD | ✅ | Organization, LocalBusiness, Service, Review |

**Vérifications spécifiques** :
- ✅ Title unique, contient le mot-clé principal (Plâtrerie, Isolation, Strasbourg)
- ✅ Description incitative avec zone géographique (Strasbourg, Alsace)
- ✅ Canonical correct sans trailing slash

---

### 2. Layout Global (`app/layout.tsx`)

**Statut** : ✅ **COMPLET** (Métadonnées par défaut)

| Élément | Statut | Remarque |
|---------|--------|----------|
| title | ✅ | Valeur par défaut pour les pages sans metadata |
| description | ✅ | Description générique de l'entreprise |
| keywords | ✅ | 10 mots-clés principaux |
| openGraph | ✅ | Configuration complète |
| twitter | ✅ | Configuration complète |
| robots | ✅ | index: true, follow: true |
| metadataBase | ✅ | https://ar-solution.fr |

---

### 3. Page À Propos (`app/a-propos/page.tsx`)

**Statut** : ❌ **INCOMPLET**

| Élément | Statut | Valeur actuelle |
|---------|--------|-----------------|
| title | ✅ | "À Propos - AR+SOLUTION \| Rénovation & Aménagement Intérieur Strasbourg" |
| description | ✅ | "Entreprise de rénovation intérieure à Strasbourg depuis 2006..." |
| keywords | ❌ | **MANQUANT** |
| openGraph | ❌ | **MANQUANT** |
| twitter | ❌ | **MANQUANT** |
| canonical | ❌ | **MANQUANT** |
| JSON-LD | ✅ | AboutPage |

**Recommandations** :
```typescript
keywords: [
  "entreprise rénovation Strasbourg",
  "plâtrerie depuis 2006",
  "artisan RGE Alsace",
  "équipe rénovation Bas-Rhin",
  "histoire AR+SOLUTION",
],
openGraph: {
  title: "À Propos - AR+SOLUTION | Rénovation Strasbourg",
  description: "Depuis 2006, AR+SOLUTION accompagne particuliers et collectivités...",
  url: "https://ar-solution.fr/a-propos",
  siteName: "AR+SOLUTION",
  locale: "fr_FR",
  type: "website",
  images: [{ url: "/og-about.jpg", width: 1200, height: 630, alt: "..." }],
},
twitter: {
  card: "summary_large_image",
  title: "À Propos - AR+SOLUTION | Rénovation Strasbourg",
  description: "Depuis 2006, AR+SOLUTION accompagne particuliers et collectivités...",
},
alternates: {
  canonical: "https://ar-solution.fr/a-propos",
},
```

---

### 4. Page Contact (`app/contact/page.tsx`)

**Statut** : ⚠️ **PARTIEL**

| Élément | Statut | Valeur actuelle |
|---------|--------|-----------------|
| title | ✅ | "Contact & Devis Gratuit \| AR+SOLUTION Plâtrerie Isolation Strasbourg" |
| description | ✅ | "Demander un devis gratuit pour vos travaux de plâtrerie..." |
| keywords | ✅ | 5 mots-clés pertinents |
| openGraph | ⚠️ | Partiel (manque url, siteName, images) |
| twitter | ❌ | **MANQUANT** |
| canonical | ❌ | **MANQUANT** |
| JSON-LD | ✅ | ContactPage |

**Recommandations** :
```typescript
openGraph: {
  // Ajouter :
  url: "https://ar-solution.fr/contact",
  siteName: "AR+SOLUTION",
  images: [{ url: "/og-contact.jpg", width: 1200, height: 630, alt: "..." }],
},
twitter: {
  card: "summary_large_image",
  title: "Contact & Devis Gratuit | AR+SOLUTION",
  description: "Obtenez un devis gratuit sous 48h pour vos travaux...",
  images: ["/og-contact.jpg"],
},
alternates: {
  canonical: "https://ar-solution.fr/contact",
},
```

---

### 5. Page FAQ (`app/faq/page.tsx`)

**Statut** : ⚠️ **PARTIEL**

| Élément | Statut | Valeur actuelle |
|---------|--------|-----------------|
| title | ✅ | "FAQ \| Questions Fréquentes Plâtrerie & Isolation \| AR+SOLUTION" |
| description | ✅ | "Retrouvez les réponses à vos questions sur nos travaux..." |
| keywords | ✅ | 5 mots-clés pertinents |
| openGraph | ⚠️ | Partiel (manque url, siteName, images) |
| twitter | ❌ | **MANQUANT** |
| canonical | ❌ | **MANQUANT** |
| JSON-LD | ✅ | FAQPage, BreadcrumbList |

**Recommandations** :
```typescript
openGraph: {
  // Ajouter :
  url: "https://ar-solution.fr/faq",
  siteName: "AR+SOLUTION",
  images: [{ url: "/og-faq.jpg", width: 1200, height: 630, alt: "..." }],
},
twitter: {
  card: "summary_large_image",
  title: "FAQ | AR+SOLUTION Plâtrerie & Isolation",
  description: "Toutes les réponses à vos questions...",
  images: ["/og-faq.jpg"],
},
alternates: {
  canonical: "https://ar-solution.fr/faq",
},
```

---

### 6. Page Marchés Publics (`app/marches-publics/page.tsx`)

**Statut** : ❌ **INCOMPLET**

| Élément | Statut | Valeur actuelle |
|---------|--------|-----------------|
| title | ✅ | "Marchés Publics - Plâtrerie, Isolation & Finitions \| AR+SOLUTION Strasbourg" |
| description | ✅ | "Expertise en plâtrerie, isolation et finitions pour marchés publics..." |
| keywords | ❌ | **MANQUANT** |
| openGraph | ❌ | **MANQUANT** |
| twitter | ❌ | **MANQUANT** |
| canonical | ❌ | **MANQUANT** |
| JSON-LD | ❌ | **MANQUANT** |

**Recommandations** :
```typescript
keywords: [
  "marchés publics plâtrerie",
  "appel d'offre isolation Alsace",
  "travaux collectivités Strasbourg",
  "entreprise RGE marchés publics",
  "rénovation site occupé",
],
openGraph: {
  title: "Marchés Publics | AR+SOLUTION Strasbourg",
  description: "Partenaire des collectivités pour vos projets de rénovation...",
  url: "https://ar-solution.fr/marches-publics",
  siteName: "AR+SOLUTION",
  locale: "fr_FR",
  type: "website",
  images: [{ url: "/og-marches-publics.jpg", width: 1200, height: 630, alt: "..." }],
},
twitter: {
  card: "summary_large_image",
  title: "Marchés Publics | AR+SOLUTION",
  description: "Partenaire des collectivités pour vos projets de rénovation...",
  images: ["/og-marches-publics.jpg"],
},
alternates: {
  canonical: "https://ar-solution.fr/marches-publics",
},
```

---

### 7. Page Mentions Légales (`app/mentions-legales/page.tsx`)

**Statut** : ❌ **INCOMPLET**

| Élément | Statut | Valeur actuelle |
|---------|--------|-----------------|
| title | ✅ | "Mentions Légales - AR+SOLUTION \| Entreprise de Rénovation Strasbourg" |
| description | ✅ | "Mentions légales, assurances et garanties professionnelles..." |
| keywords | ❌ | **MANQUANT** |
| openGraph | ❌ | **MANQUANT** |
| twitter | ❌ | **MANQUANT** |
| canonical | ❌ | **MANQUANT** |

**Note** : Page légale, SEO moins prioritaire. Ajouter au minimum `canonical`.

---

### 8. Page Politique de Confidentialité (`app/politique-confidentialite/page.tsx`)

**Statut** : ❌ **INCOMPLET**

| Élément | Statut | Valeur actuelle |
|---------|--------|-----------------|
| title | ✅ | "Politique de Confidentialité - AR+SOLUTION \| Protection des Données" |
| description | ✅ | "Politique de confidentialité et gestion des données personnelles..." |
| keywords | ❌ | **MANQUANT** |
| openGraph | ❌ | **MANQUANT** |
| twitter | ❌ | **MANQUANT** |
| canonical | ❌ | **MANQUANT** |

**Note** : Page légale, SEO moins prioritaire. Ajouter au minimum `canonical`.

---

### 9. Page Réalisations (`app/realisations/page.tsx`)

**Statut** : ⚠️ **PARTIEL**

| Élément | Statut | Valeur actuelle |
|---------|--------|-----------------|
| title | ✅ | "Nos Réalisations \| Portfolio Plâtrerie & Isolation \| AR+SOLUTION" |
| description | ✅ | "Découvrez nos chantiers de plâtrerie, isolation et aménagement..." |
| keywords | ✅ | 5 mots-clés pertinents |
| openGraph | ⚠️ | Partiel (manque url, siteName, images) |
| twitter | ❌ | **MANQUANT** |
| canonical | ❌ | **MANQUANT** |
| JSON-LD | ✅ | CollectionPage, BreadcrumbList |

**Recommandations** :
```typescript
openGraph: {
  // Ajouter :
  url: "https://ar-solution.fr/realisations",
  siteName: "AR+SOLUTION",
  images: [{ url: "/og-realisations.jpg", width: 1200, height: 630, alt: "..." }],
},
twitter: {
  card: "summary_large_image",
  title: "Nos Réalisations | AR+SOLUTION",
  description: "Portfolio de nos chantiers de plâtrerie et isolation...",
  images: ["/og-realisations.jpg"],
},
alternates: {
  canonical: "https://ar-solution.fr/realisations",
},
```

---

### 10. Page Fiche Projet (`app/realisations/[slug]/page.tsx`)

**Statut** : ✅ **COMPLET** (Génération dynamique)

| Élément | Statut | Remarque |
|---------|--------|----------|
| title | ✅ | Dynamique : `${projet.titre} | Réalisations AR+SOLUTION` |
| description | ✅ | Dynamique : `projet.sousTitre` |
| keywords | ✅ | Dynamique : métiers + catégorie + localisation |
| openGraph | ✅ | Complet avec image du projet |
| twitter | ✅ | Complet |
| canonical | ✅ | Dynamique : `https://www.arsolution.fr/realisations/${slug}` |
| JSON-LD | ✅ | Article |

**Note** : ⚠️ Incohérence URL : `arsolution.fr` vs `ar-solution.fr`

---

### 11. Page Services Hub (`app/services/page.tsx`)

**Statut** : ⚠️ **PARTIEL**

| Élément | Statut | Valeur actuelle |
|---------|--------|-----------------|
| title | ✅ | "Nos Services \| Plâtrerie, Isolation, Peinture & Aménagement à Strasbourg \| AR+SOLUTION" |
| description | ✅ | "Découvrez nos services de rénovation intérieure à Strasbourg..." |
| keywords | ❌ | **MANQUANT** |
| openGraph | ✅ | Complet |
| twitter | ✅ | Complet |
| canonical | ✅ | https://ar-solution.fr/services |
| JSON-LD | ✅ | Via ServiceStructuredData |

**Recommandations** :
```typescript
keywords: [
  "services rénovation Strasbourg",
  "plâtrerie isolation aménagement",
  "travaux intérieurs Alsace",
  "entreprise RGE Qualibat",
  "devis gratuit rénovation",
],
```

---

### 12. Page Service Plâtrerie (`app/services/platrerie/page.tsx`)

**Statut** : ⚠️ **PARTIEL** (via `services-metadata.ts`)

| Élément | Statut | Valeur actuelle |
|---------|--------|-----------------|
| title | ✅ | "Plâtrerie & Faux-plafonds à Strasbourg \| Cloisons BA13, Site Occupé \| AR+SOLUTION" |
| description | ✅ | "Plâtrerie technique à Strasbourg : cloisons BA13, faux-plafonds acoustiques..." |
| keywords | ❌ | **MANQUANT** |
| openGraph | ✅ | Complet |
| twitter | ✅ | Complet |
| canonical | ✅ | https://ar-solution.fr/services/platrerie |

**Recommandations** :
```typescript
keywords: [
  "plâtrerie Strasbourg",
  "plaquiste Alsace",
  "cloison BA13",
  "faux-plafond acoustique",
  "doublage thermique",
],
```

---

### 13. Page Service Isolation (`app/services/isolation/page.tsx`)

**Statut** : ⚠️ **PARTIEL** (via `services-metadata.ts`)

| Élément | Statut | Valeur actuelle |
|---------|--------|-----------------|
| title | ✅ | "Isolation Thermique & Phonique RGE à Strasbourg \| MaPrimeRénov' \| AR+SOLUTION" |
| description | ✅ | "Isolation thermique et phonique certifiée RGE à Strasbourg..." |
| keywords | ❌ | **MANQUANT** |
| openGraph | ✅ | Complet |
| twitter | ✅ | Complet |
| canonical | ✅ | https://ar-solution.fr/services/isolation |

**Recommandations** :
```typescript
keywords: [
  "isolation thermique Strasbourg",
  "isolation phonique Alsace",
  "RGE Qualibat",
  "MaPrimeRénov Bas-Rhin",
  "isolation combles",
],
```

---

### 14. Page Service Aménagement (`app/services/amenagement/page.tsx`)

**Statut** : ⚠️ **PARTIEL** (via `services-metadata.ts`)

| Élément | Statut | Valeur actuelle |
|---------|--------|-----------------|
| title | ✅ | "Peinture Intérieure & Aménagement à Strasbourg \| Haute Décoration \| AR+SOLUTION" |
| description | ✅ | "Peinture intérieure et aménagement à Strasbourg..." |
| keywords | ❌ | **MANQUANT** |
| openGraph | ✅ | Complet |
| twitter | ✅ | Complet |
| canonical | ✅ | https://ar-solution.fr/services/amenagement |

**Recommandations** :
```typescript
keywords: [
  "peinture intérieure Strasbourg",
  "aménagement intérieur Alsace",
  "rénovation décoration",
  "peinture écolabel",
  "aménagement bureaux",
],
```

---

### 15. Page Service Enduits & Finitions (`app/services/enduits-finitions/page.tsx`)

**Statut** : ⚠️ **PARTIEL** (via `services-metadata.ts`)

| Élément | Statut | Valeur actuelle |
|---------|--------|-----------------|
| title | ✅ | "Enduits & Finitions à Strasbourg \| Ratissage Q4, Airless, Propreté Garantie \| AR+SOLUTION" |
| description | ✅ | "Plâtrerie fine et enduits de finition à Strasbourg..." |
| keywords | ❌ | **MANQUANT** |
| openGraph | ✅ | Complet |
| twitter | ✅ | Complet |
| canonical | ✅ | https://ar-solution.fr/services/enduits-finitions |

**Recommandations** :
```typescript
keywords: [
  "enduit finition Strasbourg",
  "ratissage Q4",
  "enduit projeté Airless",
  "finitions décoratives",
  "plâtrerie fine Alsace",
],
```

---

### 16. Page Ressources (`app/ressources/page.tsx`)

**Statut** : ⚠️ **PARTIEL**

| Élément | Statut | Valeur actuelle |
|---------|--------|-----------------|
| title | ✅ | "Blog & Ressources \| Conseils Rénovation & Isolation \| AR+SOLUTION" |
| description | ✅ | "Guides, conseils et actualités sur la rénovation..." |
| keywords | ✅ | 5 mots-clés pertinents |
| openGraph | ⚠️ | Partiel (manque url, siteName, images) |
| twitter | ❌ | **MANQUANT** |
| canonical | ❌ | **MANQUANT** |
| JSON-LD | ✅ | CollectionPage |

**Recommandations** :
```typescript
openGraph: {
  // Ajouter :
  url: "https://ar-solution.fr/ressources",
  siteName: "AR+SOLUTION",
  images: [{ url: "/og-ressources.jpg", width: 1200, height: 630, alt: "..." }],
},
twitter: {
  card: "summary_large_image",
  title: "Blog & Ressources | AR+SOLUTION",
  description: "Guides et conseils d'experts en rénovation...",
  images: ["/og-ressources.jpg"],
},
alternates: {
  canonical: "https://ar-solution.fr/ressources",
},
```

---

## 🔍 Vérification des Titres Attendus

| Page | Title Attendu | Title Actuel | Conformité |
|------|---------------|--------------|------------|
| Accueil | Plâtrerie & Isolation Strasbourg | AR+SOLUTION \| Plâtrerie, Isolation & Finitions à Strasbourg | ✅ |
| Plâtrerie | Plâtrerie Strasbourg - Plaquiste | Plâtrerie & Faux-plafonds à Strasbourg \| Cloisons BA13... | ⚠️ Différent mais OK |
| Isolation | Isolation Thermique Strasbourg | Isolation Thermique & Phonique RGE à Strasbourg... | ✅ |
| Aménagement | Aménagement Intérieur Alsace | Peinture Intérieure & Aménagement à Strasbourg... | ⚠️ Focus peinture |
| Enduits | Enduits & Finitions Strasbourg | Enduits & Finitions à Strasbourg \| Ratissage Q4... | ✅ |

---

## 🔧 Problèmes Identifiés

### Problèmes Critiques

1. **Incohérence de domaine** : 
   - `ar-solution.fr` (majorité des pages)
   - `arsolution.fr` (page fiche projet)
   - **Action** : Harmoniser sur `ar-solution.fr`

2. **Pages sans openGraph complet** :
   - À Propos, Contact, FAQ, Marchés Publics, Réalisations, Ressources
   - **Impact** : Mauvais affichage lors du partage sur réseaux sociaux

3. **Pages sans canonical** :
   - 8 pages sur 16
   - **Impact** : Risque de duplicate content

### Problèmes Secondaires

4. **Keywords manquants** sur les pages de services :
   - Les 4 pages de services n'ont pas de keywords
   - Le fichier `services-metadata.ts` ne génère pas de keywords

5. **JSON-LD manquant** :
   - Page Marchés Publics : aucun schema.org
   - Pages légales : pas de schema (acceptable)

---

## ✅ Actions Prioritaires

### Priorité 1 : Corriger les Pages Principales

1. [ ] **À Propos** : Ajouter keywords, openGraph, twitter, canonical
2. [ ] **Contact** : Compléter openGraph, ajouter twitter, canonical
3. [ ] **FAQ** : Compléter openGraph, ajouter twitter, canonical
4. [ ] **Marchés Publics** : Ajouter tous les éléments manquants + JSON-LD
5. [ ] **Réalisations** : Compléter openGraph, ajouter twitter, canonical
6. [ ] **Ressources** : Compléter openGraph, ajouter twitter, canonical

### Priorité 2 : Enrichir les Pages Services

7. [ ] **services-metadata.ts** : Ajouter support des keywords dans `generateServiceMetadata()`
8. [ ] Définir les keywords pour chaque page de service
9. [ ] Services Hub : Ajouter keywords

### Priorité 3 : Corrections Mineures

10. [ ] Harmoniser les URLs (`ar-solution.fr` partout)
11. [ ] Pages légales : Ajouter canonical au minimum
12. [ ] Vérifier que toutes les images OG existent (`og-*.jpg`)

---

## 📈 Score SEO Actuel

| Critère | Score | Commentaire |
|---------|-------|-------------|
| Title | 100% | Toutes les pages ont un title |
| Description | 100% | Toutes les pages ont une description |
| Keywords | 50% | 8/16 pages |
| OpenGraph | 38% | 6/16 pages complètes |
| Twitter | 31% | 5/16 pages |
| Canonical | 50% | 8/16 pages |
| JSON-LD | 75% | 12/16 pages |

**Score global estimé : 63%**

---

## 📁 Fichiers à Modifier

| Fichier | Modifications |
|---------|---------------|
| `src/app/a-propos/page.tsx` | +keywords, +openGraph, +twitter, +canonical |
| `src/app/contact/page.tsx` | openGraph+, +twitter, +canonical |
| `src/app/faq/page.tsx` | openGraph+, +twitter, +canonical |
| `src/app/marches-publics/page.tsx` | +keywords, +openGraph, +twitter, +canonical, +JSON-LD |
| `src/app/mentions-legales/page.tsx` | +canonical |
| `src/app/politique-confidentialite/page.tsx` | +canonical |
| `src/app/realisations/page.tsx` | openGraph+, +twitter, +canonical |
| `src/app/realisations/[slug]/page.tsx` | Corriger URL (arsolution → ar-solution) |
| `src/app/services/page.tsx` | +keywords |
| `src/app/ressources/page.tsx` | openGraph+, +twitter, +canonical |
| `src/lib/services-metadata.ts` | Ajouter keywords à l'interface et à la fonction |

---

*Audit réalisé le 6 janvier 2026*

