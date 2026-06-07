# Consulting Website — Roadmap & Plans

This document tracks the strategy for turning the portfolio into a consulting
/ freelance front door. The `/services` page is already built and live in this
branch. Everything below is **planned work**, broken into independent chunks
you (or Claude in a future session) can pick up one at a time.

---

## 0. What's already done (this branch)

- New **`/services`** page with: hero, specialty band (Supabase · Next.js ·
  React), 6 service cards, "why work with me", a 4-step process, and a final CTA.
- Service offering reflects: Supabase / Next.js / React (core specialty),
  Angular + large-scale JavaScript/React (enterprise frontend), Java / Spring
  Boot (backend), CI/CD with GitHub Actions + Docker, migrations & SEO, and
  technical consulting.
- "Services" link added to the navbar, route wired in `App.js`, and `/services`
  added to `sitemap.xml`.
- Styling reuses the existing design language (dark charcoal palette, the
  offset "3D" card shadow from `AboutMe`, `PT Sans` + `Roboto`, the shared
  `Button` component).

---

## 1. Brand homogeneity & visual refresh

**Goal:** one consistent brand across the whole site, so it reads as a
professional service, not an early-career portfolio.

### 1.1 Establish a design token layer (do this first)

The CSS today hardcodes colours in many files (`#1a1717`, `#242424`,
`#313131`, `whitesmoke`, `#fff`). Centralise them so a rebrand is a one-file
change.

- Add CSS custom properties in `src/index.css` `:root`, e.g.
  ```css
  :root {
    --color-ink: #1a1717;       /* near-black, primary */
    --color-charcoal: #313131;  /* card borders / shadow */
    --color-surface: #242424;   /* dark surfaces */
    --color-bg-soft: whitesmoke; /* light section bg */
    --color-text-muted: #5c5c5c;
    --radius-lg: 22px;
    --font-display: 'PT Sans', sans-serif;
    --font-body: 'Roboto', sans-serif;
  }
  ```
- Optionally mirror them into `tailwind.config.js` `theme.extend.colors` so
  Tailwind utilities (`bg-ink`, `text-muted`) and CSS stay in sync.
- Then migrate component CSS to use the variables incrementally.

### 1.2 Typography & spacing consistency

- Standardise on **PT Sans for headings, Roboto for body** everywhere (already
  loaded in `index.html`). Some components mix sizes ad-hoc.
- Define a type scale (h1 / h2 / h3 / body / small) and reuse it.

### 1.3 Component cleanup

- The hero (`HeroSection.css`) has a very large, unused commented block and a
  heavy animated conic-gradient background. Decide on ONE hero treatment and
  delete dead CSS. A cleaner gradient (like the new `/services` hero) is more
  "consulting-grade".
- Unify card styling: the offset-shadow card is a nice signature — reuse it for
  project cards and the About card so the whole site feels intentional.
- Fix the pre-existing lint warnings (unused imports in `Button.js`,
  `Navbar.js`, `ScrollToTop.js`; missing `<iframe title>` in `ContactMe.js`;
  redundant `alt` in `ProjectCard.js`). These also block `CI=true` builds.

### 1.4 Messaging refresh

- The home hero still says *"aspiring software engineer"*. For consulting this
  undersells you — change to confident positioning (e.g. *"Software engineer
  specialised in Supabase, Next.js & React. Available for freelance & consulting."*).
- Add a short "Available for work" CTA strip on the home page linking to
  `/services`.
- Reframe project case studies with a **Problem → Solution → Result** structure
  so they read as proof for clients, not just tech write-ups.

---

## 2. Logo regeneration (Gemini prompts)

> Note: Claude can't generate images here. Use these prompts in Google
> **Gemini** (Imagen / "Nano Banana" image generation) or any image model,
> then drop the result into `public/images/` and update the favicon set.

Current brand mark: the wordmark **"JulioDev"** + a Font Awesome microchip icon
(`fa-microchip`) in the navbar. Keep the wordmark; regenerate a custom icon/logo
that matches the dark, minimal aesthetic.

**Prompt A — Minimal monogram icon:**
```
A minimalist logo icon for a software engineering consultancy called "JulioDev".
A clean geometric monogram combining the letters "J" and "D", styled as a subtle
microchip / circuit motif. Flat vector, single colour (near-black #1a1717) on a
transparent background, thick rounded strokes, high contrast, no text, no
gradients. Designed to work as a small favicon and a navbar icon. Modern, premium,
tech-forward.
```

**Prompt B — Wordmark + icon lockup:**
```
A horizontal logo lockup for "JulioDev", a freelance software engineer and
consultancy. Bold geometric sans-serif wordmark in near-black (#1a1717) next to a
small abstract microchip/circuit monogram icon. Flat vector, transparent
background, balanced spacing, premium and minimal, suitable for a website header.
No tagline, no drop shadows.
```

**Prompt C — App/favicon tile:**
```
A square app icon for "JulioDev" software consultancy. A single abstract "JD"
microchip monogram, white on a dark charcoal (#1a1717) rounded square, flat
vector, centred, generous padding, crisp at 32x32px. Minimal, modern, tech brand.
```

**Variations to request:** light-on-dark and dark-on-light versions, plus a
1:1 square crop for favicon/PWA icons.

**After generating, update:**
- `public/favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`,
  `apple-touch-icon.png`, `logo192.png`, `logo512.png`
- The navbar mark in `src/components/Layout/Navbar.js` (replace the
  `fa-microchip` `<i>` with the new SVG/img)
- `public/manifest.json` icon references
- The `og-image.png` referenced by Helmet (currently missing — see §4.4)

---

## 3. Analytics, heatmaps & cookies (all free)

**Goal:** understand visitor behaviour + be GDPR/PECR-compliant, at zero cost.

### 3.1 Recommended free stack

| Need | Tool | Why | Cost |
|------|------|-----|------|
| Heatmaps + session recordings | **Microsoft Clarity** | Genuinely free forever, unlimited traffic, heatmaps + recordings + insights | Free |
| Traffic / conversions analytics | **Google Analytics 4 (GA4)** | Free, powerful, well documented | Free |
| Privacy-friendly alternative | **Umami** (self-host) or **Plausible CE** (self-host) | Cookie-less, no consent banner needed, GDPR-friendly | Free if self-hosted |
| Cookie consent banner | **vanilla-cookieconsent** (orestbida) or **react-cookie-consent** | Open source, customisable, free | Free |

**Recommendation:**
- If you want zero cookie-banner friction: use **Microsoft Clarity** (it does
  require consent for recordings) + **Umami/Plausible** (cookie-less) — and you
  can keep the banner minimal.
- If you want the richest data: **GA4 + Clarity** behind a proper consent
  banner (both set cookies → consent is required in the EU/UK).

### 3.2 Implementation plan (GA4 + Clarity + consent)

1. Create accounts: GA4 property (get `G-XXXXXXX`) and Clarity project (get
   project id).
2. Add a **consent gate** so no analytics scripts load until the user accepts:
   - Install `vanilla-cookieconsent`.
   - Categories: *Necessary* (always on), *Analytics* (GA4 + Clarity).
   - Only inject the GA4 + Clarity `<script>` tags after the Analytics category
     is granted (use GA4 **Consent Mode v2**).
3. Wire it in React: a small `useEffect` in `App.js` (or a `<CookieConsent>`
   component) that initialises the library on mount and loads scripts on grant.
4. Add a "Cookie settings" link in the footer to re-open the preferences modal.

### 3.3 Privacy Policy & Cookie Policy pages

- Add routes `/privacy-policy` and `/cookie-policy` (new page components in
  `src/pages/`, same Helmet + layout pattern).
- Generate the text with a reputable free generator (e.g. Termly,
  CookieYes free tier, or iubenda free) tailored to: a personal/freelance
  business, EU/UK visitors, GA4 + Clarity cookies, and the Basin contact form.
- Link both from the footer.
- **Note:** you've moved out of the UK — update the policy's governing
  jurisdiction and the data-controller contact/address to your new country.

### 3.4 Compliance checklist

- [ ] No non-essential cookies/scripts before consent.
- [ ] Granular accept/reject (reject must be as easy as accept).
- [ ] GA4 Consent Mode v2 configured.
- [ ] IP anonymisation / data-retention set in GA4.
- [ ] Privacy + cookie policies linked in footer.
- [ ] Re-open consent preferences from footer.

---

## 4. Domain transition: `.co.uk` → `.com`

**Context:** you've moved out of the UK, so a `.com` (or country code of your new
home) reads better and is more neutral for international clients.

### 4.1 Choose & buy the domain

- Pick `juliodev.com` (or `julio.dev`, `juliomacias.com`, etc. — `.dev` is great
  for engineers). Check availability and buy via your registrar.
- Decide the structure: keep the `portfolio.` subdomain or move to the apex/`www`
  (recommended: serve the site at `https://juliodev.com` and redirect `www`).

### 4.2 Migration steps (preserve SEO)

1. Stand up the site on the new domain (same hosting; this is a static CRA build
   deployed via `gh-pages` today — point the new domain's DNS / `CNAME` at it).
2. **301 redirect** every old URL to the same path on the new domain
   (`portfolio.juliodev.co.uk/projects` → `juliodev.com/projects`). Do NOT
   redirect everything to the homepage — keep paths 1:1.
3. Update **all canonical URLs and OG/Twitter meta** across the app. They're
   currently hardcoded to `https://portfolio.juliodev.co.uk` in:
   - `src/pages/Home.js`, `Projects.js`, `Services.js`, `ContactMePage.js`
   - `src/components/Posts/*` (case-study pages, if they set Helmet)
   - `public/index.html` (the `schema.org` JSON-LD `url` + `sameAs`)
   - `public/sitemap.xml` (all `<loc>` entries)
   - `public/robots.txt` (the `Sitemap:` line)
   > Tip: centralise the base URL in one constant (e.g.
   > `src/utils/siteConfig.js` → `export const SITE_URL = ...`) and import it
   > everywhere, so the next move is one edit.
4. Update `package.json` `homepage` if needed and the `gh-pages` `CNAME`.
5. In **Google Search Console**: add the new domain property, verify it, and use
   the **Change of Address** tool from the old property to the new one. Keep the
   old domain + redirects live for at least 6–12 months.
6. Resubmit the new `sitemap.xml`.
7. Update external links you control: LinkedIn, GitHub profile, email signature,
   business cards, the Basin form's allowed domains.

### 4.3 Don't lose

- Keep renewing `portfolio.juliodev.co.uk` for ~1 year so the 301s keep working
  and link equity transfers.
- Update analytics property settings to the new domain.

### 4.4 Missing asset to fix during the move

- All pages reference `og-image.png` (`https://.../og-image.png`) for social
  sharing, but there's no `public/og-image.png`. Create a 1200×630 social card
  (can be generated with the Gemini prompts in §2) and add it.

---

## Suggested order of execution

1. **Logo regeneration** (§2) — quick, unblocks the brand refresh.
2. **Design token layer + messaging refresh** (§1.1, §1.4) — biggest visual win.
3. **Domain purchase + `SITE_URL` constant refactor** (§4.1, §4.2 step 3) — do
   the refactor now so the actual switch is trivial later.
4. **Analytics + consent + policies** (§3) — needed before serious traffic.
5. **Full visual cleanup** (§1.2, §1.3) — polish.
6. **Execute the domain switch** (rest of §4) when the new site is ready.
