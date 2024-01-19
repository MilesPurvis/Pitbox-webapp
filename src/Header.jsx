import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <header className='flex justify-between font-semibold'>
      <Link to={'/'} className='flex items-center'>
        <svg
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          viewBox='0 0 24 24'
          height='2.5em'
          width='2.5em'
        >
          <path d='M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' />
          <path d='M3.29 7L12 12l8.71-5M12 22V12' />
        </svg>
        <span className=' text-2xl flex items-center mr-2'>Pit&nbsp;Box</span>
      </Link>
      {/* Search Section */}
      <div className='flex gap-2 border border-gray-300 rounded-full py-3 px-4 shadow-md hidden md:flex '>
        <div>Track</div>
        <div className='border-l border-gray-300'></div>
        <div>Date</div>
        <div className='border-l border-gray-300'></div>
        <div>Add&nbsp;Guests</div>

        <button className='bg-primary text-white p-1 rounded-full'>
          <svg
            viewBox='0 0 1024 1024'
            fill='currentColor'
            height='1em'
            width='1em'
          >
            <path d='M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z' />
          </svg>
        </button>
      </div>
      <Link
        to={user ? '/account/profile' : '/login'}
        className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-2 sm:px-4 shadow-md overflow-hidden '
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='w-6 h-6 '
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
        <div className='bg-primary text-white rounded-full p-1'>
          <svg
            viewBox='0 0 1024 1024'
            fill='currentColor'
            height='1.5em'
            width='1.5em'
          >
            <path d='M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z' />
          </svg>
        </div>
        {!!user && <div className='hidden sm:block'>{user.name}</div>}
      </Link>
    </header>
  );
}
