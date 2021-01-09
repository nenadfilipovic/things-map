import Header from 'client/components/Header';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const LandingPage = () => {
  const Map = dynamic(() => import('../components/Map'), {
    ssr: false,
  });
  return (
    <div>
      <Header />
      <Map />
    </div>
  );
};

export default LandingPage;
