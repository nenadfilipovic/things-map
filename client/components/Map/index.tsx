import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIcon from '../Marker';
import leaflet from 'leaflet';
import MapCluster from '../MapCluster';

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

const Map = () => (
  <MapContainer
    zoom={13}
    scrollWheelZoom={false}
    style={{ height: 'calc(100vh - 64px)', width: '100%' }}
  >
    <TileLayer url="http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg" />
    <MapCluster markers={markers} />
  </MapContainer>
);

export default Map;
