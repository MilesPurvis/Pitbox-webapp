import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookingWidget from '../BookingWidget';
import PlaceGallary from '../PlaceGallery';
import AddressLink from '../AddressLink';

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return '';

  return (
    <div className='mt-4 p-8 lg:p-16 bg-gray-100 -mx-8'>
      <h1 className='text-3xl'>{place.title}</h1>

      <AddressLink>{place.address}</AddressLink>
      <PlaceGallary place={place} />

      <div className='grid my-8 lg:gap-8 md:gap-8 lg:grid-cols-[2fr_1fr] md:grid-cols-[1fr_1fr] grid-cols-1'>
        <div>
          <div className='my-4'>
            <h2 className='font-semibold text-xl'>Description</h2>
            {place.description}
          </div>
          Check-in: {place.checkIn}
          <br />
          Check-out: {place.checkOut}
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className='bg-white p-8 -mx-8'>
        <div>
          <h2 className='font-semibold text-2xl '>Extra info</h2>
        </div>
        <div className='text-sm text-gray-700 leading-4 my-4'>
          {place.extraInfo}
        </div>
      </div>
    </div>
  );
}
