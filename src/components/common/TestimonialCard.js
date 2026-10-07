import React from 'react';
import { useLocale } from 'next-intl';
import { Quote } from 'lucide-react';
import './TestimonialCard.css';

const pick = (value, locale) =>
  typeof value === 'string' ? value : value?.[locale] || value?.en || Object.values(value || {})[0];

// "Santiago G." -> "SG"
const initials = (name = '') =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');

/** A client quote with an avatar (photo, or initials when there is none), name, role and month. Quotes stay in the client's own words. */
export default function TestimonialCard({ testimonial, className = '' }) {
  const locale = useLocale();
  const [year, month] = (testimonial.date || '').split('-').map(Number);
  const when = year
    ? new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(new Date(year, (month || 1) - 1))
    : null;

  return (
    <figure className={`testimonial-card ${className}`.trim()}>
      <Quote size={28} strokeWidth={1.75} aria-hidden="true" className="testimonial-card-icon" />
      <blockquote lang="en">{testimonial.quote}</blockquote>
      <figcaption>
        <span className="testimonial-card-avatar" aria-hidden="true">
          {testimonial.photo ? <img src={testimonial.photo} alt="" /> : initials(testimonial.name)}
        </span>
        <span className="testimonial-card-person">
          <strong>{testimonial.name}</strong>
          <span>
            {pick(testimonial.role, locale)}
            {when && <> · {when}</>}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
