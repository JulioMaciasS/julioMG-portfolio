import React from 'react';
import Link from '../LocalizedLink';
import { ArrowUpRight } from 'lucide-react';
import "./LinkCard.css";

/**
 * Project / blog card. Internal routes use the localized client-side Link
 * (no new tab, no full reload); only genuinely external links open a new tab.
 */
export default function LinkCard({ imageURL, title, hrefLink, padding, description, isExternal, isNew, tag, date }) {
  const inner = (
    <div className='LinkCard-container group'>
      <div className="LinkCard-image-wrap">
        <img
          className={`LinkCard-image ${padding ? "object-contain p-6 bg-[#f4f4f5]" : "object-cover"}`}
          src={imageURL}
          alt={title}
          loading="lazy"
        />
        {isNew && <span className="LinkCard-badge">{tag}</span>}
      </div>
      <div className='LinkCard-body'>
        {date && <span className="LinkCard-date">{date}</span>}
        <div className="flex items-center justify-between gap-2">
          <h3 className='text-lg font-bold font-display text-[#1a1717]'>{title}</h3>
          <ArrowUpRight className="LinkCard-arrow text-gray-400" size={18} />
        </div>
        <p className='text-sm text-gray-500 mt-1 leading-relaxed'>{description}</p>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a className='LinkCard-link' href={hrefLink} target='_blank' rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link className='LinkCard-link' to={hrefLink}>
      {inner}
    </Link>
  );
}
