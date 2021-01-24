import { MapContainer, TileLayer } from 'react-leaflet';
import { useDevicesQuery } from '../../types';
import MarkerGroup from '../MapCluster';

const Map = ({
  height,
  width,
  zoom = 13,
  center = [51.505, -0.09],
  fit = true,
  enablePopup = true,
}: {
  height: string;
  width: string;
  zoom?: number;
  center?: number[];
  fit?: boolean;
  enablePopup?: boolean;
}): JSX.Element => {
  const { data, loading } = useDevicesQuery();

  const markers = data?.devices?.edges?.map((marker) => {
    return {
      lat: marker?.node?.latitude,
      lng: marker?.node?.longitude,
      id: marker?.node.id,
      description: marker?.node?.description,
    };
  });

  return (
    <MapContainer
      zoom={zoom}
      scrollWheelZoom={false}
      center={center}
      style={{ height, width }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MarkerGroup enablePopup={enablePopup} fit={fit} markers={markers} />
    </MapContainer>
  );
};
export default Map;
