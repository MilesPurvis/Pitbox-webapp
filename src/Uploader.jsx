import { useState } from 'react';
import axios from 'axios';

export default function Uploader({ addedPhotos, onChange }) {
  const [photoLink, setPhotoLink] = useState('');

  async function addPhotoByLink(ev) {
    ev.preventDefault();
    const { data: filename } = await axios.post('/upload-by-link', {
      link: photoLink,
    });

    onChange((prev) => {
      return [...prev, filename];
    });
    setPhotoLink('');
  }

  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append('photos', files[i]);
    }
    axios
      .post('/upload', data, {
        headers: { 'Content-type': 'multipart/form-data' },
      })
      .then((response) => {
        const { data: filenames } = response;
        onChange((prev) => {
          return [...prev, ...filenames];
        });
      });
  }

  function handleRemovePhoto(ev, filename) {
    ev.preventDefault();

    onChange([...addedPhotos.filter((photo) => photo !== filename)]);
  }

  function handleMainPhoto(ev, filename) {
    ev.preventDefault();
    onChange([filename, ...addedPhotos.filter((photo) => photo !== filename)]);
  }

  return (
    <>
      <div className='flex gap-2'>
        <input
          type='text'
          value={photoLink}
          onChange={(ev) => setPhotoLink(ev.target.value)}
          placeholder={'Copy link to photo here...'}
        />
        <button
          onClick={addPhotoByLink}
          className='bg-gray-200 px-4 rounded-2xl hover:'
        >
          Add&nbsp;Photo
        </button>
      </div>
      <div className='grid mt-2 gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2'>
        {addedPhotos.length > 0 &&
          addedPhotos.map((link) => (
            <div className='h-32 flex relative'>
              <img
                className='rounded-2xl w-full object-cover'
                src={'http://localhost:4000/' + link}
                key={link}
              />
              <button
                onClick={(ev) => handleRemovePhoto(ev, link)}
                className=' cursor-pointer absolute bottom-2 right-2 text-red-500 bg-zinc-300 bg-opacity-80  p-1 rounded-full hover:bg-opacity-100 hover:bg-red-300 '
              >
                <svg
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-5 h-5'
                >
                  <path d='M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12z' />
                </svg>
              </button>
              <button
                onClick={(ev) => handleMainPhoto(ev, link)}
                className=' cursor-pointer absolute bottom-2 left-2 text-yellow-300 bg-zinc-300 bg-opacity-80  p-1 rounded-full hover:bg-opacity-100 hover:bg-orange-300'
              >
                {link === addedPhotos[0] && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
                {link !== addedPhotos[0] && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                    />
                  </svg>
                )}
              </button>
            </div>
          ))}
        <label className='h-32 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 hover:inner-shadow'>
          <input
            type='file'
            multiple
            className='hidden'
            onChange={uploadPhoto}
          />
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
              d='M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z'
            />
          </svg>
          Upload
        </label>
      </div>
    </>
  );
}
