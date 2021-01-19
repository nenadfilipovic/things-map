import Header from '../components/Header';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const LandingPage = ({ isAuth }: { isAuth: boolean }): JSX.Element => {
  const router = useRouter();
  const Map = dynamic(() => import('../components/Map'), { ssr: false });

  useEffect(() => {
    if (!isAuth) {
      router.push('/auth/sign-in');
    }
  }, [isAuth]);

  return (
    <div>
      <Header />
      <Map height="calc(100vh - 64px)" width="100%" />
    </div>
  );
};

export async function getServerSideProps(context) {
  let isAuth = false;
  if (context.req.cookies.payload) {
    isAuth = true;
  }

  return {
    props: { isAuth },
  };
}

export default LandingPage;
