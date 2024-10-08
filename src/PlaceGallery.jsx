import { useState } from 'react';

export default function PlaceGallary({ place }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  //Image pop up
  if (showAllPhotos) {
    return (
      <div className='absolute inset-0 min-h-screen bg-black text-white '>
        <div className='bg-black p-8 grid gap-4'>
          <div>
            <h2 className='text-3xl mr-36'>{place.title} Photos</h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className=' bg-transparent text-white hover:text-zinc-500 right-12 top-8 fixed flex gap-1 p-1 rounded-2xl'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 '
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
                />
              </svg>
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div>
                <img src={'http://70.29.19.63:8080/' + photo} />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className='relative'>
      <div className='grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden'>
        <div>
          {place.photos?.[0] && (
            <div>
              <img
                onClick={() => setShowAllPhotos(true)}
                className='aspect-square object-cover cursor-pointer'
                src={'http://70.29.19.63:8080/' + place.photos[0]}
              />
            </div>
          )}
        </div>
        <div className='grid '>
          {place.photos?.[0] && (
            <div>
              <img
                onClick={() => setShowAllPhotos(true)}
                className='aspect-square object-cover cursor-pointer'
                src={'http://70.29.19.63:8080/' + place.photos[1]}
              />
            </div>
          )}

          <div className='overflow-hidden'>
            {place.photos?.[0] && (
              <div>
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className='aspect-square object-cover relative top-2 cursor-pointer'
                  src={'http://70.29.19.63:8080/' + place.photos[2]}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowAllPhotos(true)}
        className='flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow-sm'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
          />
        </svg>
        Show more photos
      </button>
    </div>
  );
}
