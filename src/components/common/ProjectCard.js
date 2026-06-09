import React from 'react';
import Link from '../LocalizedLink';
import { ArrowUpRight } from 'lucide-react';
import './ProjectCard.css';

/**
 * Shared vertical project/blog card: a 16:9 image on top, then the title,
 * description and a footer with the date (bottom-left) and the tech stack
 * (bottom-right). Used on /projects and the home "Latest work" grid.
 *
 * Internal routes use the localized client-side Link; only genuinely external
 * links open in a new tab.
 */
export default function ProjectCard({
  imageURL,
  title,
  description,
  hrefLink,
  isExternal,
  padding,
  isNew,
  tag,
  date,
  technologies,
}) {
  const hasTech = Array.isArray(technologies) && technologies.length > 0;

  const inner = (
    <article className="pcard group">
      <div className="pcard-image-wrap">
        <img
          className={`pcard-image ${padding ? 'object-contain p-5' : 'object-cover object-center'}`}
          src={imageURL}
          alt={title}
          loading="lazy"
        />
        {isNew && <span className="pcard-badge">{tag}</span>}
      </div>

      <div className="pcard-body">
        <div className="pcard-head">
          <h3 className="pcard-title">{title}</h3>
          <ArrowUpRight className="pcard-arrow" size={18} />
        </div>
        <p className="pcard-desc">{description}</p>

        {(date || hasTech) && (
          <div className="pcard-footer">
            {date && <span className="pcard-date">{date}</span>}
            {hasTech && (
              <div className="pcard-tech">
                {technologies.map((tech, i) => (
                  <span className="pcard-tech-item" key={i} title={tech.name}>
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="pcard-tech-icon"
                      loading="lazy"
                    />
                    <span className="pcard-tech-tip" aria-hidden="true">{tech.name}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );

  if (isExternal) {
    return (
      <a className="pcard-link" href={hrefLink} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link className="pcard-link" to={hrefLink}>
      {inner}
    </Link>
  );
}
