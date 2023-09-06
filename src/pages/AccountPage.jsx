import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import PlacesPage from './PlacesPage';

export default function AccountPage() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = 'profile';
  }

  async function logout() {
    await axios.post('/logout');
    setUser(null);
    setRedirect('/');
  }

  if (!ready) {
    return 'Loading...';
  }

  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />;
  }

  function linkClasses(type = null) {
    let classes = 'inline-flex gap-2 py-2 px-6 items-center rounded-full  ';

    if (type === subpage) {
      classes += ' bg-primary text-white';
    } else {
      classes += ' bg-zinc-200 text-slate-500';
    }

    return classes;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <nav className='w-full my-8 gap-2 justify-center flex'>
        <Link className={linkClasses('profile')} to={'/account'}>
          <svg
            viewBox='0 0 1024 1024'
            fill='currentColor'
            height='1.5em'
            width='1.5em'
          >
            <path d='M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z' />
          </svg>
          <span className='hidden sm:block'>My Profile</span>
        </Link>
        <Link className={linkClasses('bookings')} to={'/account/bookings'}>
          <svg
            viewBox='0 0 700 1000'
            fill='currentColor'
            height='1.5em'
            width='1.5em'
          >
            <path d='M682 256c12 5.333 18 14.667 18 28v562c0 9.333-4 17.667-12 25-8 7.333-17.333 11-28 11-30.667 0-46-12-46-36V324c0-8-4-14-12-18L198 90c-21.333-6.667-44-3.333-68 10-29.333 13.333-48 28-56 44l408 228c12 5.333 18 14.667 18 28v550c0 14.667-6 24-18 28-4 2.667-9.333 4-16 4-9.333 0-16-1.333-20-4-5.333-4-72.667-46.333-202-127S44 726.667 32 720c-17.333-12-26-23.333-26-34L0 162c0-18.667 4.667-36 14-52 18.667-30.667 52.667-56.333 102-77s88-23.667 116-9l450 232' />
          </svg>
          <span className='hidden sm:block'>My Bookings</span>
        </Link>
        <Link className={linkClasses('places')} to={'/account/places'}>
          <svg
            viewBox='0 0 24 24'
            fill='currentColor'
            width='1.5em'
            height='1.5em'
          >
            <path d='M20.772 10.155l-1.368-4.104A2.995 2.995 0 0016.559 4H7.441a2.995 2.995 0 00-2.845 2.051l-1.368 4.104A2 2 0 002 12v5c0 .738.404 1.376 1 1.723V21a1 1 0 001 1h1a1 1 0 001-1v-2h12v2a1 1 0 001 1h1a1 1 0 001-1v-2.277A1.99 1.99 0 0022 17v-5a2 2 0 00-1.228-1.845zM7.441 6h9.117c.431 0 .813.274.949.684L18.613 10H5.387l1.105-3.316A1 1 0 017.441 6zM5.5 16a1.5 1.5 0 11.001-3.001A1.5 1.5 0 015.5 16zm13 0a1.5 1.5 0 11.001-3.001A1.5 1.5 0 0118.5 16z' />
          </svg>
          <span className='hidden sm:block'>My Cars</span>
        </Link>
      </nav>
      {subpage === 'profile' && (
        <div className='text-center max-w-lg mx-auto'>
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className='primary max-w-sm mt-2'>
            Logout
          </button>
        </div>
      )}
      {subpage === 'places' && <PlacesPage />}
    </div>
  );
}
