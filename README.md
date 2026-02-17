# Huntsman / Moorehead Way Community Website

A community information website for residents concerned about The Huntsman Sports Ground and Moorehead Way housing development. Built with Nuxt 3, Tailwind CSS, and Nuxt Content.

**Domains:** [mooreheadway.org.uk](https://mooreheadway.org.uk) · [thehuntsman.org.uk](https://thehuntsman.org.uk)

---

## Quick start

```bash
npm install
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # Build for production
npm run generate # Static site generation
npm run preview  # Preview production build locally
```

---

## Framework: Nuxt 3

**Nuxt 3** was chosen for this project because:

- **SEO**: Built-in server-side rendering (SSR) and static site generation (SSG) ensure search engines index all content.
- **Content-first**: Vue's template syntax is straightforward for content-heavy pages. Easy for non-developers to contribute via Markdown or CMS.
- **File-based routing**: `pages/` folder structure maps directly to URLs—minimal configuration.
- **Domain handling**: Both domains point to the same deployment; no framework changes needed.
- **Extensibility**: The Letters page (forms, PDF generation, email prefilling) benefits from Vue's reactivity and Nuxt's composables.

**Alternatives considered:**

| Framework   | Pros                                                 | Cons                                                                    |
| ----------- | ---------------------------------------------------- | ----------------------------------------------------------------------- |
| **Astro**   | Very fast, minimal JS, great for mostly-static sites | Letters page interactivity would need a heavier island (e.g. React/Vue) |
| **Next.js** | Mature, large ecosystem                              | Overkill for content site; React learning curve if you edit             |
| **11ty**    | Simple, static-only                                  | Letters page would need custom JS or separate SPA                       |

---

## Site structure

| Page      | Path        | Description                                             |
| --------- | ----------- | ------------------------------------------------------- |
| Landing   | `/`         | Introduction, menu to other pages, SEO keywords         |
| About     | `/about`    | Who we are                                              |
| Contact   | `/contact`  | Email, WhatsApp group, QR code                          |
| Documents | `/documents`| List of documents with summaries and links               |
| Letters   | `/letters`  | Editable letter templates for planning authority        |
| News      | `/news`     | News list with summary cards linking to detail pages    |

---

## File structure

```
├── app.vue
├── nuxt.config.ts
├── package.json
├── public/
│   ├── favicon.ico
│   ├── og-image.png              # Social sharing
│   ├── documents/                # PDF/Word files (or external links)
│   └── whatsapp-qr.svg           # QR code for WhatsApp group
├── assets/
│   └── css/
│       └── main.css
├── components/
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── DocumentCard.vue
│   ├── NewsCard.vue
│   └── LetterEditor.vue
├── composables/
│   └── useLetterGenerator.ts
├── content/
│   ├── news/                     # Markdown news items
│   └── letters/                  # Letter templates with placeholders
├── data/
│   └── documents.ts              # Document list (title, summary, url)
├── layouts/
│   └── default.vue
├── pages/
│   ├── index.vue
│   ├── about.vue
│   ├── contact.vue
│   ├── documents.vue
│   ├── letters.vue
│   └── news/
│       ├── index.vue
│       └── [...slug].vue
└── server/
    └── api/                      # Optional backend
```

---

## Page specifications

### Landing (`/`)

- Hero with project names: "The Huntsman Sports Ground" and "Moorehead Way development"
- Brief intro and card grid linking to About, Documents, Letters, News, Contact
- SEO meta: both development names, "objection", "planning", "community"

### About (`/about`)

- Who we are section
- Optional: short bios, photos

### Contact (`/contact`)

- Email with `mailto:` link
- WhatsApp group link
- QR code image at `public/whatsapp-qr.png` or `whatsapp-qr.svg`
- Replace the placeholder with your actual WhatsApp QR code

### Documents (`/documents`)

- Edit `data/documents.ts` to add entries with: `title`, `summary`, `url`
- Summaries can be AI-generated externally and pasted in
- Links open in new tab

### Letters (`/letters`)

1. List letter templates (e.g. "Objection", "Enquiry")
2. User selects template → form for name, address, postcode, email
3. In-page editor: user edits template, then "Generate email" merges details and opens `mailto:`
4. Templates in `content/letters/` use placeholders: `{{name}}`, `{{address}}`, etc.

### News (`/news` and `/news/[slug]`)

- Add Markdown files to `content/news/` with frontmatter: `title`, `description`, `date`
- List page shows date, title, excerpt
- Detail page shows full content

---

## SEO and multi-domain setup

- **Primary domain**: Set `site.url` in `nuxt.config.ts` (e.g. `https://thehuntsman.org.uk`)
- **Two domains**: Configure both in DNS (CNAME or A) to the same host (Vercel, Netlify, Cloudflare Pages)
- Use one domain as canonical to avoid duplicate content issues
- Both URLs serve the same site—no code changes needed

---

## Tech stack

| Layer     | Choice                                                          |
| --------- | --------------------------------------------------------------- |
| Framework | Nuxt 3                                                          |
| Styling   | Tailwind CSS                                                    |
| Content   | Nuxt Content (news); `data/documents.ts` (documents and letters)|
| Hosting   | Vercel, Netlify, or Cloudflare Pages                            |
| Forms     | Native HTML + Vue reactivity; `mailto:` for letters             |

---

## Deployment

1. Connect repository to Vercel, Netlify, or Cloudflare Pages
2. Add both domains in the hosting dashboard
3. Set build command: `npm run generate` (or `npm run build` for SSR)
4. Deploy

---

## Optional enhancements

- **Analytics**: Plausible, Fathom, or Google Analytics
- **Email collection**: Formspree, Netlify Forms, or custom API for mailing list
- **Newsletter**: Link to Mailchimp, Buttondown, etc. from Contact
