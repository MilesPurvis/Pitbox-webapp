import Uploader from '../Uploader.jsx';
import Perks from '../Perks.jsx';
import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AccountNav from '../AccountNavigation.jsx';

export default function PlacesFormPage() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/places/' + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
    });
  }, [id]);

  function inputHeader(text) {
    return <h2 className='text-xl mt-4'>{text}</h2>;
  }

  function inputDescription(text) {
    return <p className='text-gray-500 text-sm'>{text}</p>;
  }

  function preInput(header, desc) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(desc)}
      </>
    );
  }

  async function savePlace(ev) {
    ev.preventDefault();
    const placeData = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
    };

    if (id) {
      // update
      await axios.put('/places/:id', { id, ...placeData });
      setRedirect(true);
    } else {
      // new place
      await axios.post('/places', {
        ...placeData,
      });
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/account/places'} />;
  }

  return (
    <div className=' mx-0 lg:mx-64 md:mx-20'>
      <AccountNav />

      <form onSubmit={savePlace}>
        {preInput('Title', 'Title or name for your ad')}
        <input
          type='text'
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          placeholder='title'
        />

        {preInput('Address', 'Address of the circuit closest to you')}
        <input
          type='text'
          value={address}
          onChange={(ev) => setAddress(ev.target.value)}
          placeholder='address'
        />

        {preInput('Photos', 'Photos of your car')}
        <Uploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        {preInput('Description', 'Description of your car')}
        <textarea
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        {preInput('Perks', 'select all the perks of your car')}
        <Perks selected={perks} onChange={setPerks} />
        {preInput('Extra Information', 'Any extra information about your car')}
        <textarea
          value={extraInfo}
          onChange={(ev) => setExtraInfo(ev.target.value)}
        />
        {preInput(
          'Check in & out times',
          'add check in and out times for car booking'
        )}
        <div className='grid sm:grid-cols-2 gap-0 sm:gap-40 '>
          <div>
            <h3 className='mt-2 -mb-1'>Check in time</h3>
            <input
              type='text'
              value={checkIn}
              onChange={(ev) => setCheckIn(ev.target.value)}
              placeholder='16'
            />
          </div>
          <div>
            <h3 className='mt-2 -mb-1'>Check out time</h3>
            <input
              type='text'
              value={checkOut}
              onChange={(ev) => setCheckOut(ev.target.value)}
              placeholder='10'
            />
          </div>
        </div>
        <div>
          <button className='  my-4 primary'>Save</button>
        </div>
      </form>
    </div>
  );
}
