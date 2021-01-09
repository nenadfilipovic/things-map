import leaflet from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import Marker from '../Marker';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

// const createClusterCustomIcon = function (cluster) {
//   return leaflet.divIcon({
//     html: `<span>${cluster.getChildCount()}</span>`,
//     className: 'marker-cluster-icon',
//     iconSize: leaflet.point(40, 40, true),
//   });
// };

interface Marker {
  position: {
    lng: number;
    lat: number;
  };
  text: string;
}

const mcg = leaflet.markerClusterGroup();

const MarkerCluster = ({ markers }: { markers: Marker[] }) => {
  const map = useMap();

  useEffect(() => {
    mcg.clearLayers();
    markers.forEach(({ position, text }) =>
      leaflet
        .marker(new leaflet.LatLng(position.lat, position.lng), {
          icon: Marker,
        })
        .addTo(mcg)
        .bindPopup(text),
    );

    map.fitBounds(mcg.getBounds());
    map.addLayer(mcg);
  }, [markers, map]);

  return null;
};

export default MarkerCluster;
