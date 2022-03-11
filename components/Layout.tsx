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
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </Head>
    {children}
    <footer></footer>
  </div>
);

export default Layout;

const Container = styled.main`
  background-color: #4158d0;
  overflow: hidden;
  /* background-image: linear-gradient(180deg, #f1008a 0%, #2d23f3ab 100%); */
`;
