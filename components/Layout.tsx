import React, { ReactNode } from "react";
import Head from "next/head";

import styled from "styled-components";

type Props = {
  children?: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => (
  <div className="flex flex-col">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="One-click checkout, wherever you shop"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Cherry" />
      <meta
        property="og:description"
        content="One-click checkout, wherever you shop"
      />
      <meta name="robots" content="index, follow"></meta>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap"
        rel="stylesheet"
      />
    </Head>
    {children}
    <footer className="w-full flex bg-[#e4e4e4]">
      <span className="w-full md:py-14 py-8 text-center font-[300] xl:text-lg md:text-base text-sm">
        <strong>&copy; 2022 Cherry, Inc.</strong> All rights reserved.
      </span>
    </footer>
  </div>
);

export default Layout;
