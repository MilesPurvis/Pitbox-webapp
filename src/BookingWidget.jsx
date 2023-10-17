import { useContext, useEffect, useState } from 'react';
import { differenceInCalendarDays } from 'date-fns';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';

export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [redirect, setRedirect] = useState('');
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  });

  let numberOfDays = 0;
  if (checkIn && checkOut) {
    numberOfDays = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  async function bookPlace() {
    const response = await axios.post('/bookings', {
      checkIn,
      checkOut,
      name,
      phone,
      place: place._id,
      price: numberOfDays * place.price,
    });
    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className='bg-white p-4 shadow rounded-2xl'>
      <div className='text-center text-2xl'>Price: ${place.price} / day</div>
      <div className='rounded-2xl border px-4 mt-4'>
        <div className=' p-4 '>
          <label>Chcek in: </label>
          <input
            type='date'
            value={checkIn}
            onChange={(ev) => setCheckIn(ev.target.value)}
          />
        </div>
        <div className=' p-4 border-t '>
          <label>Chcek Out: </label>
          <input
            type='date'
            value={checkOut}
            onChange={(ev) => setCheckOut(ev.target.value)}
          />
        </div>
        {numberOfDays > 0 && (
          <div className='py-3 px-4 border-t'>
            <label>Full Name</label>
            <input
              type='text'
              value={name}
              placeholder='First & Last Name'
              onChange={(ev) => setName(ev.target.value)}
            />
            <label>Phone number</label>
            <input
              type='tel'
              placeholder='519-222-3333'
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
            />
          </div>
        )}
      </div>

      <button className='mt-4 primary' onClick={bookPlace}>
        Book
        {numberOfDays > 0 && <span> ${numberOfDays * place.price}</span>}
      </button>
    </div>
  );
}
