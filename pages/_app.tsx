import React, { useEffect } from "react";
import type { AppProps } from "next/app";

import "../styles/global.css";
import { initFbAnalytics } from "../firebase/clientApp";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      initFbAnalytics();
    }
  }, []);

  return <Component {...pageProps} />;
}
