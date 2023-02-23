import "@unocss/reset/eric-meyer.css";
import "../styles/globals.css";
import { AppProps } from "next/app";

/** @param {import('next/app').AppProps} props */
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
