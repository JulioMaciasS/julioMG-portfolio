# JulioDev Portfolio

Personal portfolio website for Julio Macias Gonzalez, built to present software engineering work with more depth than a typical project grid. The site combines a polished landing page, a dedicated projects hub, long-form case studies, a contact flow, and downloadable resume assets in one React application.

Live site: [portfolio.juliodev.co.uk](https://portfolio.juliodev.co.uk/)

## What This Project Showcases

- A portfolio experience designed to feel like a product, not just a static resume
- Featured work with dedicated write-ups for architecture, tooling, and delivery decisions
- A responsive React frontend with custom styling and route-based navigation
- Professional touchpoints including SEO metadata, sitemap support, contact options, and resume download assets

## Key Sections

- `/` - Landing page with hero section, personal introduction, and featured projects
- `/projects` - Project gallery with quick summaries and technology tags
- `/projects/cineshare` - Case study for a full-stack social platform focused on film discovery
- `/projects/eugeniabravo` - Original client project write-up built around React and AWS Amplify
- `/projects/eugeniabravo-rebuild` - Migration case study covering Next.js, TypeScript, Supabase, SEO, and editorial tooling
- `/contact-me` - Contact page with embedded Basin form and LinkedIn CTA

## Featured Work

### EugeniaBravo Rebuild

Migration of a real client website from a plain React SPA to a Next.js and Supabase stack. The case study focuses on SEO, content indexing, admin workflows, media management, and simplifying operations for a smaller project.

### Eugenia Bravo

Original production website for a lawyer, built with React, TypeScript, AWS Amplify, and Brevo. This project shows the earlier architecture before the rebuild.

### CineShare

A learning-focused full-stack app for discovering and sharing movies and TV shows. The write-up covers Angular, Spring Boot, MySQL, AWS, security considerations, and the use of AI tools during development.

### Universal Paperclips for iOS

An external article documenting the development of a reduced iOS version of Universal Paperclips using SwiftUI, with monetization features like ads and microtransactions.

## Tech Stack

- React 18
- React Router
- JavaScript
- Tailwind CSS utilities plus custom CSS modules/stylesheets
- Lucide React, Bootstrap Icons, and Font Awesome for UI icons
- Create React App tooling
- `gh-pages` deployment script support

## Project Strengths

- Clear personal branding and portfolio storytelling
- Case-study style project pages instead of shallow link cards
- Mixed content strategy across web, cloud, and mobile work
- Built-in SEO signals through metadata, canonical tags, `robots.txt`, and `sitemap.xml`
- Contact flow that gives visitors both a form path and direct professional links

## Local Development

```bash
npm install
npm start
```

The app runs locally at [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm start      # start the development server
npm test       # run the CRA test runner
npm run build  # create a production build
npm run deploy # publish the build with gh-pages
```

## Project Structure

```text
public/
  images/              Static images for cards, posts, logos, and profile media
  Downloads/           Resume PDF
  robots.txt           Search crawler rules
  sitemap.xml          Sitemap for indexing

src/
  components/
    Home/              Landing page sections
    Layout/            Navbar and footer
    Projects/          Projects listing UI
    Posts/             Long-form project case studies
    ContactMe/         Contact page content
  data/
    projects.js        Featured project metadata
  pages/               Route-level pages
  utils/               Shared app utilities
```

## Notes

This repository is the portfolio application itself. Some featured projects link to separate production sites or external repositories, while others are documented directly inside this app as case studies.

## Author

Julio Macias Gonzalez

- Portfolio: [portfolio.juliodev.co.uk](https://portfolio.juliodev.co.uk/)
- LinkedIn: [julio-macias-gonzalez](https://www.linkedin.com/in/julio-macias-gonzalez-199266282/)
- GitHub: [@JulioMaciasS](https://github.com/JulioMaciasS)
