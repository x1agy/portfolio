import Ubuntu from '../components/ubuntu';
import ReactGA from 'react-ga';
import Meta from '../components/SEO/Meta';
import React from 'react';

const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID || '';
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <>
      <Meta />
      <Ubuntu />
    </>
  );
};

export default App;
