import leaflet, { marker } from 'leaflet';
import markerIcon from '../Marker';
import { useMap, Marker, Popup } from 'react-leaflet';
import Link from 'next/link';

const MarkerGroup = ({
  markers,
  fit,
  enablePopup,
}: {
  markers: { id: string; lat: number; lng: number };
  fit: boolean;
  enablePopup: boolean;
}): JSX.Element => {
  const map = useMap();

  if (markers && fit) {
    const group = leaflet.latLngBounds(markers);
    map.fitBounds(group);
  }

  const renderMarkers = markers?.map((marker) => (
    <Marker
      key={marker.id}
      position={[marker.lat, marker.lng]}
      icon={markerIcon}
    >
      {enablePopup && (
        <Popup>
          <p className="text-lg">Name</p>
          <p className="text-main">{marker.name}</p>
          <p className="text-lg">Description</p>
          <p className="text-main">{marker.description}</p>
          <Link href={`/devices/${marker.id}`}>Go to device</Link>
        </Popup>
      )}
    </Marker>
  ));

  return <div>{renderMarkers}</div>;
};

export default MarkerGroup;
