import React, { FC } from 'react';
import 'tailwindcss/base.css';
import '../styles/index.css';
import { AppProps } from 'next/app';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
