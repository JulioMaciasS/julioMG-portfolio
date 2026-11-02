import React from 'react';
import Link from '../LocalizedLink';

/**
 * A real screenshot in a light browser frame, captioned and linked to the
 * case study it comes from. `eager` is for the above-the-fold hero image.
 */
function ServiceShot({ src, caption, projectTitle, href, eager = false, className = '' }) {
  return (
    <Link to={href} className={`service-shot ${className}`}>
      <figure>
        <div className="service-shot-frame">
          <div className="service-shot-bar" aria-hidden="true">
            <span /><span /><span />
          </div>
          <img src={src} alt={caption} loading={eager ? 'eager' : 'lazy'} decoding="async" />
        </div>
        <figcaption>
          <strong>{projectTitle}</strong>
          <span>{caption}</span>
        </figcaption>
      </figure>
    </Link>
  );
}

export default ServiceShot;
