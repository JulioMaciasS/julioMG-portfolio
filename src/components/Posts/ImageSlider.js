'use client';

import React, { useState } from 'react';

/**
 * Every slide is rendered at once, stacked, and CSS picks which is visible.
 *
 * The previous version swapped `src` on a single <img>, which meant the caption
 * (plain text) repainted immediately while the browser was still fetching and
 * decoding the new image, so the two visibly disagreed mid-transition. Here the
 * image and its caption share one opacity class, so they can never fall out of
 * step, and switching costs no network round trip because every frame is
 * already decoded.
 */
function ImageSlider({ images, containerClassName }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const { length } = images;
  const goToSlide = (index) => setCurrentSlide(((index % length) + length) % length);
  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  const fade = (isActive) =>
    `transition-opacity duration-300 ease-out ${
      isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`;

  const arrowClass =
    'absolute top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all';

  return (
    <div className={`w-full mx-auto ${containerClassName || 'max-w-5xl'}`}>
      <div className="relative">
        <div className="relative overflow-hidden rounded-xl">
          {/* Fixed height: portrait and landscape slides would otherwise resize the page. */}
          <div className="relative h-[320px] sm:h-[420px] lg:h-[500px]">
            {images.map((image, index) => (
              <div
                key={image.src}
                className={`absolute inset-0 flex items-center justify-center p-4 ${fade(index === currentSlide)}`}
                aria-hidden={index !== currentSlide}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 ? undefined : 'lazy'}
                  className="max-h-full max-w-full object-contain rounded-lg cursor-pointer"
                  onClick={() => setShowModal(true)}
                />
              </div>
            ))}
          </div>

          <button onClick={prevSlide} className={`${arrowClass} left-2`} aria-label="Previous image">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={nextSlide} className={`${arrowClass} right-2`} aria-label="Next image">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Captions are stacked the same way, so they fade in step with their image. */}
        <div className="relative mt-4 min-h-[3.5rem]">
          {images.map((image, index) => (
            <p
              key={image.src}
              className={`absolute inset-x-0 top-0 text-center text-gray-700 font-medium ${fade(index === currentSlide)}`}
              aria-hidden={index !== currentSlide}
            >
              {image.caption}
            </p>
          ))}
        </div>

        <div className="flex justify-center mt-2 space-x-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 shrink-0 rounded-full transition-colors ${
                index === currentSlide ? 'bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide}
            />
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="relative max-w-6xl max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              onClick={() => setShowModal(false)}
              aria-label="Close image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={images[currentSlide].src}
              alt={images[currentSlide].alt}
              className="max-h-[90vh] max-w-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageSlider;
