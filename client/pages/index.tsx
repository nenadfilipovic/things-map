import Header from '../components/Header';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import React from 'react';

const LandingPage = (): JSX.Element => {
  const Map = dynamic(() => import('../components/Map'), { ssr: false });

  return (
    <div>
      <Header />
      <Map height="calc(100vh - 64px)" width="100%" />
    </div>
  );
};

export default LandingPage;
