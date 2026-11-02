import React from 'react';
import { Mic, Video, PhoneOff } from 'lucide-react';

// Screenshots from live client sites, stacked like prints on a desk.
const COLLAGE = [
  '/images/tuDivorcioInteligente/hero.jpg',
  '/images/losLagosHotel/booking-rooms.jpg',
  '/images/losLagosHotel/web-home-en.jpg',
];

/**
 * Picture at the top of each "Why work with me" card: real work, a real
 * photo, and a video call with the person who builds it. `alt` describes the
 * picture; the collage is decorative because the card text names the clients.
 */
function WhyVisual({ type, alt }) {
  if (type === 'collage') {
    return (
      <div className="why-visual why-visual--collage" aria-hidden="true">
        {COLLAGE.map((src, index) => (
          <div key={src} className={`why-collage-shot why-collage-shot--${index + 1}`}>
            <img src={src} alt="" loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    );
  }

  if (type === 'citi') {
    return (
      <div className="why-visual why-visual--photo">
        <img src="/images/about/citi-office.jpg" alt={alt} loading="lazy" decoding="async" />
      </div>
    );
  }

  return (
    <div className="why-visual why-visual--call">
      <div className="why-call-frame">
        <img src="/images/profile-pic.jpeg" alt={alt} loading="lazy" decoding="async" />
        <span className="why-call-langs" aria-hidden="true">EN · ES</span>
        <span className="why-call-name" aria-hidden="true">Julio</span>
        <div className="why-call-controls" aria-hidden="true">
          <span><Mic size={14} /></span>
          <span><Video size={14} /></span>
          <span className="why-call-end"><PhoneOff size={14} /></span>
        </div>
      </div>
    </div>
  );
}

export default WhyVisual;
