import React from 'react';
import "./LinkCard.css";

export default function LinkCard({ imageURL, title, hrefLink, padding, description }) {
  return (
    <a className='custom-link' href={hrefLink} target='_blank' rel="noopener noreferrer">
    <div className='LinkCard-container shadow-md'>
        <img className={`LinkCard-image ${padding ? "p-4 bg-gray-50" : ""}`} src={imageURL} alt='Link Card'></img>
        <div className='text-container p-4'>
          <h3 className='text-xl font-bold'>{title}</h3>
          <p className='text-sm'>{description}</p>
        </div>
    </div>
    </a>
  )
}
