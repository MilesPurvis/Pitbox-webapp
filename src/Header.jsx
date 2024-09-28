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
        <a
          href='https://github.com/MilesPurvis/Pitbox-webapp'
          target='_blank'
          className='text-primary '
        >
          <svg
            viewBox='0 0 32 32'
            fill='currentColor'
            height='2.5em'
            width='2.5em'
          >
            <path
              fill='currentColor'
              d='M6.368 15.671H3.715a.124.124 0 00-.124.124v1.296c0 .069.055.124.124.124H4.75v1.612s-.232.078-.874.078c-.758 0-1.817-.278-1.817-2.604 0-2.328 1.102-2.634 2.137-2.634.896 0 1.282.157 1.527.234.077.024.147-.053.147-.122l.296-1.253a.117.117 0 00-.047-.097c-.1-.07-.708-.411-2.245-.411-1.771 0-3.588.753-3.588 4.375s2.079 4.16 3.832 4.16c1.451 0 2.332-.62 2.332-.62.036-.02.04-.07.04-.093v-4.045a.125.125 0 00-.124-.124zm13.415-3.344H18.29a.124.124 0 00-.124.124v2.886h-2.328v-2.886a.124.124 0 00-.123-.124h-1.494a.124.124 0 00-.122.124v7.814c0 .069.055.125.122.125h1.494a.124.124 0 00.123-.125v-3.342h2.328l-.005 3.342c0 .069.055.124.122.124h1.494a.122.122 0 00.122-.124l.005-7.815a.122.122 0 00-.122-.124zm-11.631.177c-.532 0-.963.435-.963.972s.431.973.963.973.963-.435.963-.973a.967.967 0 00-.963-.972zm.857 2.507a.124.124 0 00-.122-.125H7.398c-.07 0-.129.07-.129.139v5.168c0 .151.094.197.217.197h1.342c.146 0 .185-.072.185-.2l-.001-1.572-.001-3.607zm16.555-.113h-1.482a.123.123 0 00-.122.125v3.831s-.376.277-.912.277c-.534 0-.677-.242-.677-.767v-3.342a.125.125 0 00-.123-.125h-1.503a.123.123 0 00-.123.125v3.595c0 1.555.866 1.935 2.057 1.935.977 0 1.767-.54 1.767-.54s.037.284.055.317c.016.034.06.068.108.068h.952a.124.124 0 00.123-.125l.004-5.25a.13.13 0 00-.126-.124zm4.058-.176c-.842 0-1.414.376-1.414.376v-2.646a.124.124 0 00-.122-.124h-1.499a.124.124 0 00-.122.124l-.004 7.815c0 .069.056.124.123.124h1.044c.046 0 .081-.024.108-.066s.063-.361.063-.361.611.581 1.771.581c1.362 0 2.142-.691 2.142-3.101 0-2.407-1.247-2.722-2.089-2.722zm-.584 4.404c-.514-.016-.862-.249-.862-.249v-2.476s.344-.211.767-.249c.534-.047 1.05.114 1.05 1.387-.003 1.342-.235 1.607-.954 1.586zm-15.714-.029c-.066 0-.233.026-.405.026-.549 0-.737-.256-.737-.587v-2.198h1.121a.123.123 0 00.123-.125v-1.204a.123.123 0 00-.123-.125h-1.121l-.002-1.48c0-.056-.03-.084-.094-.084H10.56c-.059 0-.092.026-.092.083v1.529s-.765.185-.817.2-.088.063-.088.119v.962c0 .069.056.125.123.125h.782v2.312c0 1.717 1.205 1.886 2.018 1.886.371 0 .815-.121.889-.147.045-.016.07-.062.07-.111l.001-1.057a.126.126 0 00-.122-.125z'
            />
          </svg>
        </a>
        <div className='border-l border-gray-300'></div>
        <button className='bg-primary text-white px-1  rounded-full'>
          <a href='http://70.29.19.63:8080/places' target='_blank'>
            Check JSON
          </a>
        </button>

        <div className='border-l border-gray-300'></div>
        <a
          href='https://www.linkedin.com/in/miles-purvis/'
          target='_blank'
          className='text-primary '
        >
          <svg
            fill='currentColor'
            viewBox='0 0 16 16'
            height='1.5em'
            width='1.5em'
            className='mt-2'
          >
            <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
          </svg>
        </a>
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
