import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import {
  Layers,
  Building2,
  Server,
  GitBranch,
  MoveRight,
  Search,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import './ServicesSection.css';

const LOGO_BASE = '/images/logos/';

const SPECIALTY = [
  { name: 'Supabase', icon: `${LOGO_BASE}supabase.svg` },
  { name: 'Next.js', icon: `${LOGO_BASE}nextjs.svg` },
  { name: 'React', icon: `${LOGO_BASE}react.png` }
];

const SERVICES = [
  {
    icon: Layers,
    title: 'Product & Web App Development',
    description:
      'End-to-end web applications built on my core stack: Next.js, React and Supabase. From the first line of schema to a fast, SEO-ready product in production.',
    tags: ['Next.js', 'React', 'Supabase', 'TypeScript']
  },
  {
    icon: Building2,
    title: 'Enterprise Frontend Engineering',
    description:
      'Large-scale, maintainable frontends for teams and internal tooling — not just consumer products. Comfortable inside established enterprise codebases and design systems.',
    tags: ['Angular', 'React', 'JavaScript', 'TypeScript']
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description:
      'Robust APIs and services to power your product. From Supabase/Postgres data models to Java and Spring Boot services for heavier enterprise workloads.',
    tags: ['Java', 'Spring Boot', 'Node', 'Postgres']
  },
  {
    icon: GitBranch,
    title: 'CI/CD & DevOps',
    description:
      'Automated pipelines so shipping is boring and safe. Build, test and deploy on every push with GitHub Actions and Docker, plus environment and release hygiene.',
    tags: ['GitHub Actions', 'Docker', 'CI/CD']
  },
  {
    icon: MoveRight,
    title: 'Migrations & Modernisation',
    description:
      'Moving legacy or hard-to-maintain sites onto a modern stack without losing SEO or content — exactly what I did migrating a live client site to Next.js + Supabase.',
    tags: ['Next.js', 'Supabase', 'SEO', 'Migrations']
  },
  {
    icon: Search,
    title: 'Technical Consulting',
    description:
      'A second pair of eyes on architecture, stack choices, performance or SEO. Short engagements to unblock your team and de-risk the next decision.',
    tags: ['Architecture', 'SEO', 'Performance', 'Review']
  }
];

const PROCESS = [
  {
    step: '01',
    title: 'Discovery call',
    text: 'A free 30-minute call to understand your goals, constraints and timeline.'
  },
  {
    step: '02',
    title: 'Proposal & scope',
    text: 'A clear, fixed proposal: what gets built, how long it takes and what it costs.'
  },
  {
    step: '03',
    title: 'Build & ship',
    text: 'Iterative delivery with regular check-ins, so you always see progress.'
  },
  {
    step: '04',
    title: 'Handover & support',
    text: 'Clean handover, documentation and optional ongoing support.'
  }
];

function ServicesSection() {
  return (
    <main className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero-overlay" />
        <div className="services-hero-content">
          <span className="services-eyebrow">Consulting &amp; Freelance</span>
          <h1 className="services-title">
            Engineering that moves your business forward
          </h1>
          <p className="services-subtitle">
            I'm Julio, a software engineer specialised in{' '}
            <strong>Supabase, Next.js and React</strong>. I help startups and
            enterprise teams design, build and ship reliable web products — from
            greenfield apps to migrations and CI/CD.
          </p>
          <div className="services-hero-cta">
            <Link to="/contact-me">
              <Button buttonStyle="btn--primary" buttonSize="btn--large" buttonShape="btn--round">
                Book a free call
              </Button>
            </Link>
            <Link to="/projects">
              <Button buttonStyle="btn--outline" buttonSize="btn--large" buttonShape="btn--round">
                See my work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialty band */}
      <section className="services-specialty">
        <p className="services-specialty-label">Specialised in</p>
        <div className="services-specialty-logos">
          {SPECIALTY.map((tech) => (
            <div key={tech.name} className="services-specialty-item">
              <img src={tech.icon} alt={`${tech.name} logo`} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="services-grid-section">
        <div className="services-section-head">
          <h2>How I can help</h2>
          <p>
            Flexible engagements — project-based, ongoing, or a one-off
            consultation. Pick what fits.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="service-card-wrapper">
                <div className="service-card-shadow" />
                <div className="service-card">
                  <div className="service-card-icon">
                    <Icon size={28} strokeWidth={1.75} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-card-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Why work with me */}
      <section className="services-why">
        <div className="services-why-card">
          <h2>Why work with me</h2>
          <ul>
            <li>
              <CheckCircle2 size={22} strokeWidth={2} />
              <span>
                <strong>Real, shipped client work.</strong> I rebuilt and migrated
                a live client website to Next.js + Supabase — improving SEO,
                admin workflows and day-to-day operations.
              </span>
            </li>
            <li>
              <CheckCircle2 size={22} strokeWidth={2} />
              <span>
                <strong>Enterprise experience, not just demos.</strong> I've worked
                across large codebases and internal tooling with Angular, Java and
                Spring — so I'm comfortable in serious, long-lived systems.
              </span>
            </li>
            <li>
              <CheckCircle2 size={22} strokeWidth={2} />
              <span>
                <strong>You talk to the person doing the work.</strong> No account
                managers, no hand-offs — direct communication from first call to
                delivery.
              </span>
            </li>
          </ul>
          <Link to="/projects/eugeniabravo-rebuild" className="services-why-link">
            Read the migration case study <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="services-process">
        <div className="services-section-head">
          <h2>How we'll work together</h2>
          <p>A simple, transparent process from first hello to handover.</p>
        </div>
        <div className="services-process-grid">
          {PROCESS.map((item) => (
            <div key={item.step} className="services-process-step">
              <span className="services-process-number">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="services-cta">
        <h2>Have a project in mind?</h2>
        <p>
          Tell me what you're building. I'll get back to you within a couple of
          days with honest thoughts on how I can help.
        </p>
        <Link to="/contact-me">
          <Button buttonStyle="btn--primary" buttonSize="btn--large" buttonShape="btn--round">
            Start a conversation
          </Button>
        </Link>
      </section>
    </main>
  );
}

export default ServicesSection;
