import React from 'react';
import "./LinkCard.css";

export default function LinkCard({ imageURL, title, hrefLink }) {
  return (
    <a className='custom-link' href={hrefLink} target='_blank' rel="noopener noreferrer">
    <div className='LinkCard-container'>
        <img className='LinkCard-image' src={imageURL} alt='Link Card'></img>
        <div className='text-container'>
          <h1>{title}</h1>
        </div>
    </div>
    </a>
  )
}
