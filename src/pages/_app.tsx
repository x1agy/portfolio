import React from 'react';
import 'tailwindcss/base.css';
import '../styles/index.css';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
