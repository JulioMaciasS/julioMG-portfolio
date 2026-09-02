# Julio Macias Portfolio

Personal portfolio for **Julio Macias Gonzalez**, built to present software
engineering work with more depth than a typical project grid: a polished
landing page, a services page, a projects hub, long-form case studies, a
contact flow, and a downloadable resume — in one statically-generated,
multilingual site.

Live site: [juliomacias.dev](https://juliomacias.dev)

## Tech Stack

- **Next.js 14** (App Router) with **static generation (SSG)** — every route
  is prerendered to HTML at build time for fast loads and reliable SEO indexing
- **next-intl** for internationalisation (English, Spanish, French, Arabic),
  English at the root and other locales URL-prefixed (`as-needed`)
- **React 18**, JavaScript
- **Tailwind CSS** plus per-component stylesheets
- **@fontsource** self-hosted fonts (Inter, Space Grotesk) — no third-party
  font requests before consent
- **PostHog** product analytics, loaded only after cookie consent
- **Cal.com** embed for call booking and **Web3Forms** for the contact form
- Lucide React + Bootstrap Icons for UI icons

## SEO

The site was migrated from Create React App to Next.js specifically to fix
search indexing: a client-rendered SPA served an empty HTML shell for every
URL, so most pages were never indexed. Now each route ships:

- A unique server-rendered `<title>`, meta description, and visible content
- A localised canonical URL and `hreflang` alternates (en/es/fr/ar + x-default)
  via the Next Metadata API
- A `Person` JSON-LD block (`name` "Julio Macias Gonzalez",
  `alternateName` "Julio Macias", `sameAs` LinkedIn + GitHub)
- A dynamically generated `sitemap.xml` and `robots.txt`

## Key Routes

- `/` — landing page: hero, about, latest work, services CTA
- `/services` — freelance & consulting services
- `/projects` — project gallery with summaries and tech tags
- `/projects/chatgptlearn` — Discentik final-year AI learning platform case study
- `/projects/cineshare` — full-stack film discovery platform case study
- `/projects/eugeniabravo` — original client project (React + AWS Amplify)
- `/projects/eugeniabravo-rebuild` — migration to Next.js + Supabase
- `/contact-me` — contact form (Web3Forms) and Cal.com booking
- `/privacy-policy`, `/cookie-policy` — legal pages

Localised variants live under `/es`, `/fr`, and `/ar`.

## Local Development

```bash
npm install
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

Create a `.env.local` for the client-side integrations (all optional — the site
runs without them):

```bash
NEXT_PUBLIC_CAL_LINK=<cal-username>/<event-slug>   # Cal.com booking link
NEXT_PUBLIC_WEB3FORMS_KEY=<key>                     # contact form
NEXT_PUBLIC_POSTHOG_KEY=<key>                       # analytics (optional)
NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com  # optional, EU default
```

## Scripts

```bash
npm run dev    # start the dev server
npm run build  # production build (static generation)
npm run start  # serve the production build
npm run lint   # run next lint
```

## Project Structure

```text
public/
  images/              Static images for cards, posts, logos, and profile media
  Downloads/           Resume PDF

src/
  app/
    [locale]/          Localised routes (layout, pages, per-route metadata)
    sitemap.js         Generated sitemap.xml
    robots.js          Generated robots.txt
    globals.css        Global styles + Tailwind layers
  components/
    Home/              Landing page sections
    Layout/            Navbar, footer, language switcher
    Projects/          Projects listing UI
    Posts/             Long-form project case studies
    Legal/             Privacy and cookie policy pages
    ContactMe/         Contact form + Cal.com embed
  data/
    projects.js        Featured project metadata
  i18n/
    routing.js         Locales + as-needed prefix config
    request.js         Message loading
    locales/           Translation catalogs (en, es, fr, ar)
  utils/
    seo.js             Metadata/canonical/hreflang helper
    analytics.js       Consent-gated PostHog
middleware.js          next-intl locale routing
```

## Deployment

The site is hosted on **Vercel** and **auto-deploys on every push to `main`**.
Vercel auto-detects the Next.js framework. The client env vars above must be
set in the Vercel dashboard (Settings → Environment Variables).

## Author

Julio Macias Gonzalez

- Portfolio: [juliomacias.dev](https://juliomacias.dev)
- LinkedIn: [julio-macias-gonzalez](https://www.linkedin.com/in/julio-macias-gonzalez-199266282/)
- GitHub: [@JulioMaciasS](https://github.com/JulioMaciasS)
