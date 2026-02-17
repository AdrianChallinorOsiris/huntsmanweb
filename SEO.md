# SEO Keyword Guide

This guide shows where to add keywords for search engine optimisation. Google uses **page titles**, **meta descriptions**, and **visible page content** (especially headings and first paragraphs) to understand and rank pages.

---

## 1. Global defaults (all pages)

**File:** `nuxt.config.ts`  
**Lines:** 12–22

These apply to every page unless a specific page overrides them.

```ts
title: 'The Huntsman Sports Ground & Moorehead Way Development | Community Information',
meta: [
  {
    name: 'description',
    content: 'Community information and resources about The Huntsman Sports Ground and Moorehead Way development. Objections, documents, and updates.',
  },
  {
    name: 'keywords',
    content: 'YOUR, KEYWORDS, HERE, comma-separated',
  },
],
```

**What to change:** Replace the `keywords` content with your comma-separated list.  
**Tip:** Include: development names, location (e.g. borough, area), “planning objection”, “housing development”, “community”.

---

## 2. Landing page (home)

**File:** `pages/index.vue`  
**Lines:** 3–11 (useHead) and 18–35 (visible content)

- **Title:** Appears in browser tab and search results.
- **Description:** Shown in search snippets; keep under ~155 characters.
- **Visible content:** The `<h1>`, `<h2>`, and first paragraphs are especially important. Add keywords naturally into these.

```ts
useHead({
  title: 'The Huntsman Sports Ground & Moorehead Way Development | Community',
  meta: [
    {
      name: 'description',
      content: 'Community information about The Huntsman Sports Ground and Moorehead Way housing development. Find documents, submit objections, and stay informed.',
    },
    {
      name: 'keywords',
      content: 'YOUR, KEYWORDS, HERE',
    },
  ],
})
```

---

## 3. About page

**File:** `pages/about.vue`  
**Lines:** 3–11 (useHead) and 17–31 (visible content)

Add a `keywords` meta tag and weave keywords into the body text.

---

## 4. Contact page

**File:** `pages/contact.vue`

Add a `useHead` block with `title`, `description`, and `keywords` if it does not already have one.

---

## 5. Documents page

**File:** `pages/documents.vue`  
**Lines:** 5–13 (useHead)

Add `keywords` to the meta array.

---

## 6. Letters page

**File:** `pages/letters.vue`  
**Lines:** 3–11 (useHead)

Add `keywords` to the meta array.

---

## 7. News pages

**Files:** `pages/news/index.vue` and `pages/news/[...slug].vue`

Add `keywords` to each page’s `useHead` meta.

---

## Quick reference: meta tag format

To add or update keywords on any page:

```ts
useHead({
  title: 'Page title with keywords',
  meta: [
    {
      name: 'description',
      content: 'A sentence or two including your main keywords.',
    },
    {
      name: 'keywords',
      content: 'Keyword 1, Keyword 2, Keyword 3, Keyword 4',
    },
  ],
})
```

---

## Suggested keywords (edit as needed)

Use these as a starting point and adjust for your area:

| Category | Example keywords |
|----------|------------------|
| Development names | Huntsman Sports Ground, Moorehead Way, Moorehead Way development |
| Location | [Your borough], [Your area], Brooklands Park, Manor Way, Cator Estate |
| Action terms | planning objection, object to planning, housing development objection |
| Community | community group, local residents, neighbourhood |
| Planning | planning application, planning authority, Bromley Council |

---

## Best practices

1. **Titles:** 50–60 characters; include main keywords near the start.
2. **Descriptions:** 150–155 characters; include a call to action and main keywords.
3. **Keywords meta:** Comma-separated; Google largely ignores this, but other engines may use it.
4. **Content:** Use keywords in headings (H1, H2) and the first paragraph.
5. **Avoid stuffing:** Write for people; keywords should read naturally.
