import { useEffect, useState } from 'react';
import axios from 'axios';

export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get('/places').then((response) => {
      setPlaces(response.data);
    });
  }, []);

  return (
    <div className='mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
      {places.length > 0 &&
        places.map((place) => (
          <div>
            <div className='bg-zinc-200 mb-2 rounded-2xl flex'>
              {place.photos?.[0] && (
                <img
                  className='rounded-2xl object-cover aspect-square '
                  src={'http://localhost:4000/' + place.photos?.[0]}
                />
              )}
            </div>

            <h3 className='font-bold leading-4'>
              <svg
                viewBox='0 0 384 512'
                fill='currentColor'
                className='w-4 h-4 inline align-top text-orange-500 '
              >
                <path d='M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z' />
              </svg>
              {place.address}
            </h3>
            <h2 className='text-sm truncate '>
              {place.title} - {place.description}
            </h2>
            <div>${place.price} per day</div>
          </div>
        ))}
    </div>
  );
}
