import en from '@/i18n/locales/en.json';
import { PROJECTS } from '@/data/projects';
import { TESTIMONIALS } from '@/data/testimonials';
import { SITE_URL, absoluteUrl } from '@/utils/siteConfig';

// llms.txt: a plain-text summary for AI assistants and LLM crawlers (GEO),
// generated from the same English copy the site renders. See llmstxt.org.
export const dynamic = 'force-static';

export function GET() {
  const s = en.services;
  const lines = [
    '# Julio Macias Gonzalez',
    '',
    `> ${en.home.meta.description}`,
    '',
    en.home.about.body1,
    '',
    'Languages: English and Spanish. Based in Dublin, Ireland; works remotely with clients worldwide.',
    'Contact: julio@juliomacias.dev, or book a free 30-minute call at ' + absoluteUrl('/contact-me', 'en'),
    '',
    '## Services',
    '',
    `${s.meta.description} Details: ${absoluteUrl('/services', 'en')}`,
    '',
  ];
  for (const category of s.categories) {
    lines.push(`### ${category.title}`, '', category.pitch, '');
    for (const offer of category.offers) {
      lines.push(`- **${offer.title}**: ${offer.description} ${offer.points.join('; ')}.`);
    }
    lines.push('');
  }
  lines.push('## Case studies', '');
  for (const project of PROJECTS) {
    const item = en.projects.items[project.id];
    const live = project.liveUrl ? ` Live site: ${project.liveUrl}` : '';
    lines.push(`- [${item.title}](${SITE_URL}${project.link}): ${item.description}${live}`);
  }
  if (TESTIMONIALS.length) {
    lines.push('', '## Client testimonials', '');
    for (const item of TESTIMONIALS) {
      lines.push(`> "${item.quote}"`, `> ${item.name}, ${item.role.en} (${item.date})`, '');
    }
  }
  lines.push('', '## Frequently asked questions', '');
  for (const { q, a } of s.faq.items) {
    lines.push(`### ${q}`, '', a, '');
  }
  lines.push(
    '## Optional',
    '',
    `- [Spanish version](${absoluteUrl('/', 'es')})`,
    '- [GitHub](https://github.com/JulioMaciasS)',
    '- [LinkedIn](https://www.linkedin.com/in/julio-macias-gonzalez)',
    ''
  );
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
