import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import PlacesPage from './PlacesPage';
import AccountNav from '../AccountNavigation';

export default function ProfilePage() {
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
    return (
      <div className='flex justify-center align-bottom mt-32'>
        <div>
          <img className='w-24' src='loading.gif' />
          <p className='text-center font-semibold'>Loading...</p>
        </div>
      </div>
    );
  }

  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <AccountNav />
      {subpage === 'profile' && (
        <div className='text-center max-w-lg mx-auto font-semibold'>
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
