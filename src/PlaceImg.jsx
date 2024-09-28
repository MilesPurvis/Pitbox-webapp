export default function PlaceImg({ place, index = 0, className = null }) {
  if (!place.photos?.length) {
    return '';
  }

  if (!className) {
    className = 'object-cover';
  }
  return (
    <img
      className={className}
      src={'http://70.29.19.63:8080/' + place.photos[index]}
      alt='sample'
    />
  );
}
