import React from 'react';
import Link from '../LocalizedLink';
import { responsiveImage } from '../../utils/responsiveImage';

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
          <img
            {...responsiveImage(src, '(max-width: 900px) 100vw, 460px')}
            alt={caption}
            loading={eager ? 'eager' : 'lazy'}
            fetchPriority={eager ? 'high' : undefined}
            decoding="async"
          />
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
