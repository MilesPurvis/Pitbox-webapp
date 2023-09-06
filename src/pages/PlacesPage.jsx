import { Link, useParams } from 'react-router-dom';

export default function PlacesPage() {
  const { action } = useParams();

  return (
    <div>
      {action !== 'new' && (
        <div className='text-center'>
          <Link
            className='inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full'
            to={'/account/places/new'}
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
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
            Add new place
          </Link>
        </div>
      )}
      {action === 'new' && (
        <div className=' mx-0 lg:mx-64 md:mx-20'>
          <form action=''>
            <h2 className='text-xl mt-4'>Title</h2>
            <p className='text-gray-500 text-sm'>Title or name for your ad</p>
            <input type='text' placeholder='title' />
            <h2 className='text-xl mt-4'>Address</h2>
            <p className='text-gray-500 text-sm'>
              Address of the circuit closest to you
            </p>
            <input type='text' placeholder='address' />
            <h2 className='text-xl mt-4'>Photos</h2>
            <p className='text-gray-500 text-sm'>Photos of your car</p>
            <div className='flex gap-2'>
              <input type='text' placeholder={'Copy link to photo here...'} />
              <button className='bg-gray-200 px-4 rounded-2xl hover:'>
                Add&nbsp;Photo
              </button>
            </div>
            <div className='grid mt-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2'>
              <button className='flex justify-center gap-1 border m-auto bg-transparent text-gray-600 rounded-2xl p-8 hover:inner-shadow'>
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
              </button>
            </div>
            <h2 className='text-xl mt-4'>Description</h2>
            <p className='text-gray-500 text-sm'>Description of your car</p>
            <textarea />
            <h2 className='text-xl mt-4'>Perks</h2>
            <p className='text-gray-500 text-sm'>
              select all the perks of your car
            </p>
            <div className='grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
              <label className='border p-4 flex rounded-xl gap-2 items-center cursor-pointer'>
                <input className='w-4 h-4  ' type='checkbox' />
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
                    d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12'
                  />
                </svg>
                <span>Trailering</span>
              </label>
              <label className='border p-4 flex rounded-xl gap-2 items-center cursor-pointer'>
                <input className='w-4 h-4 ' type='checkbox' />
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
                    d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                  />
                </svg>
                <span>Shelter</span>
              </label>
              <label className='border p-4 flex rounded-xl gap-2 items-center cursor-pointer'>
                <input className='w-4 h-4 ' type='checkbox' />
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
                    d='M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4.867 19.125h.008v.008h-.008v-.008z'
                  />
                </svg>
                <span>Trackside Mechanic</span>
              </label>
              <label className='border p-4 flex rounded-xl gap-2 items-center cursor-pointer'>
                <input className='w-4 h-4 ' type='checkbox' />
                <svg
                  viewBox='0 0 512 512'
                  fill='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeMiterlimit={10}
                    strokeWidth={32}
                    d='M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64M336 336c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40'
                  />
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeMiterlimit={10}
                    strokeWidth={32}
                    d='M344 336H179.31a8 8 0 00-5.65 2.34l-26.83 26.83a4 4 0 01-5.66 0l-26.83-26.83a8 8 0 00-5.65-2.34H56a24 24 0 01-24-24h0a24 24 0 0124-24h288a24 24 0 0124 24h0a24 24 0 01-24 24zM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97'
                  />
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeMiterlimit={10}
                    strokeWidth={32}
                    d='M256 480h139.31a32 32 0 0031.91-29.61L463 112'
                  />
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={32}
                    d='M368 112l16-64 47-16'
                  />
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeMiterlimit={10}
                    strokeWidth={32}
                    d='M224 112h256'
                  />
                </svg>
                <span>Lunch</span>
              </label>
              <label className='border p-4 flex rounded-xl gap-2 items-center cursor-pointer '>
                <input className='w-4 h-4 ' type='checkbox' />
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
                    d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605'
                  />
                </svg>
                <span>Data Analysis</span>
              </label>
              <label className='border p-4 flex rounded-xl gap-2 items-center cursor-pointer '>
                <input className='w-4 h-4 ' type='checkbox' />
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
                    d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
                  />
                </svg>

                <span>Driver Coaching</span>
              </label>
            </div>
            <h2 className='text-xl mt-4'>Extra Information</h2>
            <p className='text-gray-500 text-sm'>
              Any extra information about your car
            </p>
            <textarea />
            <h2 className='text-xl mt-4'>Check in & out times</h2>
            <p className='text-gray-500 text-sm'>
              add check in and out times for car booking
            </p>
            <div className='grid sm:grid-cols-2 gap-0 sm:gap-40 '>
              <div>
                <h3 className='mt-2 -mb-1'>Check in time</h3>
                <input type='text' placeholder='16:00' />
              </div>
              <div>
                <h3 className='mt-2 -mb-1'>Check out time</h3>
                <input type='text' placeholder='10:00' />
              </div>
            </div>
            <div>
              <button className='  my-4 primary'>Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
