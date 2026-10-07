import React from 'react';

/** Compact technology logo tiles used in case studies. techs: [[name, logo file in /images/logos/], ...] */
export default function TechTiles({ techs }) {
  return (
    <div className='flex flex-row flex-wrap gap-5 justify-center items-start w-full text-center mt-8 mb-4'>
      {techs.map(([name, file]) => (
        <div key={name} className='flex flex-col items-center'>
          <div className="bg-white p-2.5 rounded-xl shadow-md mb-2 w-16 h-16 flex items-center justify-center">
            <img src={`/images/logos/${file}`} className='object-contain max-h-full max-w-full rounded-lg' alt={`${name} icon`} />
          </div>
          <label className='text-sm text-gray-700 font-medium'>{name}</label>
        </div>
      ))}
    </div>
  );
}
