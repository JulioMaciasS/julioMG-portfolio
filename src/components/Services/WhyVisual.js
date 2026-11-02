import React from 'react';

// Screenshots from live client sites, stacked like prints on a desk.
const COLLAGE = [
  '/images/tuDivorcioInteligente/hero.jpg',
  '/images/losLagosHotel/booking-rooms.jpg',
  '/images/losLagosHotel/web-home-en.jpg',
  '/images/guiasDeMalaga/home.jpg',
];

const PHOTOS = {
  citi: '/images/about/citi-office.jpg',
  together: '/images/about/working-together.jpg',
};

/**
 * Picture at the top of each "Why work with me" card: real client work, then
 * real photos of Julio. `alt` describes the photo; the collage is decorative
 * because the card text names the clients.
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

  return (
    <div className="why-visual why-visual--photo">
      <img src={PHOTOS[type]} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}

export default WhyVisual;
