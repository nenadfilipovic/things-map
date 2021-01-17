import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import MarkerCluster from '../MapCluster';

const markers = [
  {
    position: { lng: -122.673447, lat: 45.5225581 },
    text: 'Voodoo Doughnut',
  },
  {
    position: { lng: -122.6781446, lat: 45.5225512 },
    text: "Bailey's Taproom",
  },
  {
    position: { lng: -122.67535700000002, lat: 45.5192743 },
    text: 'Barista',
  },
  {
    position: { lng: -122.65596570000001, lat: 45.5199148000001 },
    text: 'Base Camp Brewing',
  },
];

interface Marker {
  position: {
    lng: number;
    lat: number;
  };
  text: string;
}

const Map = ({
  height,
  width,
  longitude = 51.505,
  latitude = -0.09,
}: {
  height: string;
  width: string;
  longitude?: number;
  latitude?: number;
}): JSX.Element => (
  <MapContainer
    zoom={13}
    scrollWheelZoom={false}
    center={[longitude, latitude]}
    style={{ height, width }}
  >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {/* <MarkerCluster markers={markers} /> */}
  </MapContainer>
);
export default Map;
