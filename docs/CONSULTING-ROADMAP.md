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

## 2. Brand identity — **DONE**

**Brand:** **Julio Macias**, with a **"JM"** monogram for square/icon contexts.
Rather than an AI-generated logo (which produced a different mark on every render
and never stayed consistent across sizes), the identity is **typographic**: the
wordmark and the JM initials are both set in **Space Grotesk** — a modern,
tech-forward geometric sans — so every asset shares a single source of truth and
stays pixel-consistent from a 16px favicon to the 1200×630 social card.

- **Navbar:** the "Julio Macias" wordmark in Space Grotesk 600
  (`src/components/Layout/Navbar.js` / `Navbar.css`). The old `JulioDev` +
  microchip icon is gone.
- **Font:** self-hosted via `@fontsource/space-grotesk` (no third-party
  requests, consistent with the GDPR-safe font setup).
- **Palette:** charcoal `#1a1717` + white, matching the existing dark theme.

**Asset generation (reproducible):** all favicon / PWA / Open Graph images are
generated from one script — no manual image editing.

```
node scripts/gen-brand-assets.js
```

It renders the JM tile and the og-image from Space Grotesk (vendored at
`scripts/fonts/SpaceGrotesk.ttf`) and writes:
- `public/favicon.ico` (16/32/48), `favicon-16x16.png`, `favicon-32x32.png`
- `public/apple-touch-icon.png` (180), `logo192.png`, `logo512.png`
- `public/og-image.png` (1200×630 wordmark + tagline card)

Requires devDependencies `sharp` and `png-to-ico`. `index.html` (favicons,
theme-color, default OG/Twitter tags) and `manifest.json` (icons, name, theme)
are already wired to these files.

**Remaining (not blocking):** the canonical domain is now `https://juliomacias.dev`
(SITE_URL, sitemap, robots, OG, schema.org). Still to do: connect the domain in
Vercel and point DNS, and decide on the contact email — it still reads
`...@juliodev.co.uk` (left as-is until a mailbox exists on the new domain).

---

## 3. Analytics, heatmaps & cookies (all free)

**Status: implemented in this branch (needs your IDs to go live).**

What was built:
- A custom, translatable **cookie consent banner** (`src/components/Consent/`)
  with granular categories (strictly necessary always-on + optional analytics),
  reject-as-easy-as-accept, stored in `localStorage`, and re-openable from the
  footer "Cookie settings" link.
- **Analytics via PostHog** (`src/utils/analytics.js`) — one tool covering
  product analytics, heatmaps and session replay. Nothing loads until the
  visitor consents, and nothing loads unless PostHog is configured — so the
  site is safe to deploy without it. SPA navigations are tracked by
  `PageviewTracker`.
- **Privacy Policy** (`/privacy-policy`) and **Cookie Policy** (`/cookie-policy`)
  pages, fully translated (EN/ES/FR/AR), linked in the footer. They carry a
  visible "template notice" — review the wording and fill in your jurisdiction
  before relying on them.

**To activate analytics**, add these env vars (in Vercel → Settings →
Environment Variables, or a local `.env`) and redeploy:
```
REACT_APP_POSTHOG_KEY=phc_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   # PostHog Project API key
REACT_APP_POSTHOG_HOST=https://eu.i.posthog.com             # optional, EU is the default
# Optional: force the consent banner to show even without a key (previews):
REACT_APP_FORCE_CONSENT=true
```
Get the key at posthog.com → sign up → choose **EU Cloud** → Project Settings →
Project API Key. Enable session replay/heatmaps in the PostHog project settings.
Update the data-controller name/email/jurisdiction in `src/pages/PrivacyPolicy.js`
(`CONTROLLER`) and the policy text once you've confirmed your details.

### EU (GDPR / ePrivacy) compliance — implemented

Because the site now collects usage data, the following were done for EU
compliance:
- **No third-party requests before consent.** Google Fonts and the Font Awesome
  CDN were removed and replaced with **self-hosted fonts** (`@fontsource`) and
  local icons (`lucide-react`), so the visitor's IP is not sent to Google or
  Cloudflare on page load. PostHog only loads **after** consent.
- **Prior, granular, revocable consent**: necessary always-on + optional
  analytics (off by default); reject is as easy as accept; re-openable from the
  footer. Consent is **versioned and expires after 180 days** (re-prompt).
- **PostHog hardened**: `person_profiles: 'identified_only'` (no profiles for
  anonymous visitors), `respect_dnt: true`, and session-replay input masking.
- **Policies** updated with full GDPR rights (access, rectification, erasure,
  restriction, objection, portability, withdraw consent, and the right to lodge
  a complaint with a supervisory authority).

**Still on you to finish the compliance picture:**
- In the **PostHog project settings**: confirm **EU data residency**, enable
  **"Discard client IP data"** (geolocation without storing IPs), and set a
  sensible **data-retention** period.
- Fill in the real **controller name, contact email and country/jurisdiction**
  in `src/pages/PrivacyPolicy.js` (`CONTROLLER`) — you've moved out of the UK, so
  the supervisory authority is now your new country's DPA.
- Hosting note: the site is on **AWS Amplify**. Ensure the Amplify **rewrite
  rule** sends client-side routes to `/index.html` (200) so `/es`, `/fr`, `/ar`
  deep links resolve. `REACT_APP_POSTHOG_KEY` must be set as an Amplify build
  env var (done) and picked up on the next build.

The original research/options for this section are kept below for reference.

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

## 5. Multilanguage (i18n) — DONE + follow-ups

**Status: implemented in this branch.** The site is now multilingual with
**English, Spanish, French and Arabic (RTL)**.

What was built:
- `react-i18next` + `i18next-browser-languagedetector`, configured in
  `src/i18n/index.js`. Language is auto-detected (browser/localStorage) and
  persisted in `localStorage` under `i18nextLng`.
- One JSON file per language in `src/i18n/locales/` (`en/es/fr/ar.json`), all
  sharing an identical 191-key structure. English is the source of truth and
  fallback.
- A **language switcher** in the navbar (`LanguageSwitcher.js`).
- **RTL support** for Arabic: `<html dir/lang>` is updated on language change,
  with targeted overrides in `src/i18n/rtl.css`.
- All UI, marketing pages, SEO meta (Helmet titles/descriptions) and the three
  long case studies are fully translated.

Follow-ups / nice-to-haves:
- **SEO hreflang: DONE.** Language-prefixed routes (`/es`, `/fr`, `/ar`; English
  at the unprefixed root) are live, each page emits per-language canonical +
  `hreflang` alternates (+ x-default) via `SeoHead`, and `sitemap.xml` lists all
  language URLs. Remaining for best results: **pre-rendering/SSR per language**
  (a CRA SPA still serves a JS shell first). After the domain move, submit the
  new sitemap and verify hreflang in Google Search Console.
- **Adding a language** (e.g. German/Portuguese) is now ~10 min: add the code
  to `SUPPORTED_LANGUAGES` in `src/i18n/index.js`, drop in a new `de.json`
  (copy `en.json` and translate), and import it.
- **Deeper RTL polish:** the current `rtl.css` covers the high-visibility cases
  (text alignment, navbar, posts). A full pass could mirror remaining
  physical-direction CSS (paddings/margins) using CSS logical properties.
- **Translate image `alt` text** in the case studies (kept in English for now).
- **Keep translations in sync:** when adding new English keys, update all four
  locale files. A small CI check comparing key parity would prevent drift.

---

## Suggested order of execution

1. **Logo regeneration** (§2) — quick, unblocks the brand refresh.
2. **Design token layer + messaging refresh** (§1.1, §1.4) — biggest visual win.
3. **Domain purchase + `SITE_URL` constant refactor** (§4.1, §4.2 step 3) — do
   the refactor now so the actual switch is trivial later.
4. **Analytics + consent + policies** (§3) — needed before serious traffic.
5. **Full visual cleanup** (§1.2, §1.3) — polish.
6. **Execute the domain switch** (rest of §4) when the new site is ready.
