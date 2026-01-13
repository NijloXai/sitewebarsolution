# Audit 11 - Cohérence du Contenu Textuel

## Résumé

| Catégorie | État |
|-----------|------|
| Vouvoiement/Tutoiement | ✅ OK |
| Textes des CTA | ⚠️ Incohérences |
| Certifications | ⚠️ Incohérences mineures |
| Zone d'intervention | ⚠️ Incohérences |
| Promesses/Garanties | ⚠️ Incohérences |

---

## 1. VOUVOIEMENT / TUTOIEMENT ✅

**Statut : OK**

Aucune forme de tutoiement trouvée dans le code source. Le site utilise correctement le vouvoiement partout.

---

## 2. TEXTES DES CTA ⚠️

### Standards à appliquer
- Principal : `"Demander un devis gratuit"`
- Secondaire : `"Nous contacter"`
- Navigation : `"Voir nos réalisations"`, `"Découvrir nos services"`, `"En savoir plus"`

### Incohérences trouvées

#### 2.1 Forme impérative au lieu de l'infinitif

| Fichier | Ligne | Actuel | Correction |
|---------|-------|--------|------------|
| `contact/page.tsx` | 32 | "Demandez un devis gratuit" | "Demander un devis gratuit" |
| `services/page.tsx` | 332 | "Obtenez un chiffrage précis" | "Obtenir un chiffrage précis" |
| `services/amenagement/page.tsx` | 453 | "Obtenez un devis gratuit" | "Demander un devis gratuit" |
| `mentions-legales/page.tsx` | 498 | "Contactez-nous" | "Nous contacter" |
| `politique-confidentialite/page.tsx` | 553 | "Contactez-nous simplement" | "N'hésitez pas à nous contacter" |

#### 2.2 Variations du CTA principal

| Fichier | Ligne | Actuel | Correction |
|---------|-------|--------|------------|
| `Header.tsx` | 304, 529 | "Demander un devis" | "Demander un devis gratuit" |
| `a-propos/page.tsx` | 356 | "Demander mon devis" | "Demander un devis gratuit" |
| `realisations/page.tsx` | 659 | "Demander mon devis gratuit" | "Demander un devis gratuit" |
| `realisations/page.tsx` | 280 | "Demander un devis chiffré" | "Demander un devis gratuit" |
| `faq/page.tsx` | 648 | "Demander un devis détaillé" | "Demander un devis gratuit" |
| `services/platrerie/page.tsx` | 160 | "Demander un devis rénovation" | "Demander un devis gratuit" |
| `contact/page.tsx` | 399 | "Recevoir mon devis gratuit" | "Demander un devis gratuit" |

#### 2.3 CTA spécifiques (OK à garder)

Ces variantes sont justifiées par leur contexte spécifique :
- `"Demander un chiffrage pour un marché public"` - Page marchés publics
- `"Demander un devis similaire"` - Page réalisation individuelle
- `"Contacter pour un marché public"` - CTA marchés publics

---

## 3. CERTIFICATIONS ⚠️

### Standards à appliquer
- `"Certifié RGE Qualibat"` (entreprise)
- `"Certification RGE Qualibat"` (label)
- `"Garantie Décennale"` (avec majuscules)
- `"Artisan qualifié"`

### Incohérences trouvées

#### 3.1 Casse incohérente

| Fichier | Ligne | Actuel | Correction |
|---------|-------|--------|------------|
| `politique-confidentialite/page.tsx` | 115 | "garantie décennale" | "Garantie Décennale" |
| `faq/page.tsx` | 33 | "garantie décennale plaquiste" | "Garantie Décennale" (dans keywords) |
| `faq/page.tsx` | 107 | "assurance décennale" | "Garantie Décennale" |

#### 3.2 Ordre inversé RGE/Qualibat

| Fichier | Ligne | Actuel | Recommandation |
|---------|-------|--------|----------------|
| `contact/page.tsx` | 124 | "Qualibat RGE" | "RGE Qualibat" |
| `app/faq/page.tsx` | 99 | "Qualibat RGE" | "RGE Qualibat" |

→ Harmoniser sur `"RGE Qualibat"` partout.

---

## 4. ZONE D'INTERVENTION ⚠️

### Standard à appliquer
- Format principal : `"Strasbourg et toute l'Alsace"`
- Format court : `"Strasbourg & Alsace"`
- Département : `"Bas-Rhin (67)"`
- Code postal siège : `67000`

### Incohérences trouvées

#### 4.1 Formulations variées

| Fichier | Actuel | Recommandation |
|---------|--------|----------------|
| `page.tsx:62` | "à Strasbourg et en Alsace" | OK |
| `services/page.tsx:109` | "Strasbourg & Alsace" | OK (format court) |
| `a-propos/page.tsx:343` | "Strasbourg & en Alsace" | "Strasbourg et toute l'Alsace" |

#### 4.2 Code postal incohérent

| Fichier | Ligne | Actuel | Correction |
|---------|-------|--------|------------|
| `mentions-legales/page.tsx` | 49 | `codePostal: "67200"` | `codePostal: "67000"` |

**Note :** 67200 = Strasbourg-Ouest, 67000 = Strasbourg Centre. À vérifier l'adresse réelle du siège.

---

## 5. PROMESSES / GARANTIES (DÉLAIS) ⚠️

### Standards à appliquer
- Délai de réponse : `"sous 48h"` ou `"sous 48h ouvrées"`
- Délai devis : `"sous 48h"`
- Délai marchés publics : `"sous 48h à 72h après visite technique"`

### Incohérences trouvées

#### 5.1 Délais de réponse incohérents

| Fichier | Ligne | Actuel | Problème |
|---------|-------|--------|----------|
| `faq/page.tsx` | 659 | "Réponse sous 24h ouvrées" | ≠ 48h partout ailleurs |
| `contact/page.tsx` | 68 | "sous 24h" | Qualification ≠ réponse devis |
| `marches-publics/page.tsx` | 461 | "sous 24h" | Incohérent avec "48h à 72h" |

#### 5.2 Formulations variées du délai 48h

| Fichier | Actuel |
|---------|--------|
| `page.tsx` | "Devis gratuit sous 48h" |
| `ContactFormHome.tsx` | "Réponse garantie sous 48h ouvrées" |
| `contact/page.tsx` | "Réponse sous 48h" |
| `marches-publics/page.tsx` | "48h à 72h après visite technique" |
| `a-propos/page.tsx` | "48-72h" |

**Recommandation :**
- Particuliers : `"Réponse sous 48h ouvrées"`
- Marchés publics : `"Chiffrage sous 48h à 72h après visite technique"`

---

## Actions correctives prioritaires

### Priorité 1 - CTA (Impact UX)

```tsx
// Header.tsx - Ajouter "gratuit"
"Demander un devis" → "Demander un devis gratuit"

// contact/page.tsx:32 - Infinitif
"Demandez un devis gratuit" → "Demander un devis gratuit"

// mentions-legales/page.tsx:498 - Infinitif  
"Contactez-nous" → "Nous contacter"
```

### Priorité 2 - Délais (Cohérence promesse)

```tsx
// faq/page.tsx:659 - Harmoniser
"sous 24h ouvrées" → "sous 48h ouvrées"
```

### Priorité 3 - Code postal

```tsx
// mentions-legales/page.tsx:49 - Vérifier l'adresse réelle
codePostal: "67200" → codePostal: "67000" (si siège à Strasbourg Centre)
```

---

## Fichiers à modifier

| Fichier | Modifications |
|---------|---------------|
| `components/common/Header.tsx` | 2 CTA |
| `app/contact/page.tsx` | 2 textes |
| `app/mentions-legales/page.tsx` | 2 textes + code postal |
| `app/politique-confidentialite/page.tsx` | 1 texte |
| `app/a-propos/page.tsx` | 1 CTA |
| `app/realisations/page.tsx` | 2 CTA |
| `app/faq/page.tsx` | 2 textes + 1 délai |
| `app/services/page.tsx` | 1 CTA |
| `app/services/platrerie/page.tsx` | 1 CTA |
| `app/services/amenagement/page.tsx` | 1 CTA |





