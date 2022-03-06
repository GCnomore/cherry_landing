import React, { ReactNode } from "react";
import Head from "next/head";

import styled from "styled-components";
import Wrapper from "./Wrapper/Wrapper";

type Props = {
  children?: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </Head>
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
    <footer></footer>
  </div>
);

export default Layout;

const Container = styled.main`
  background-color: #4158d0;
  background-image: linear-gradient(350deg, #d2023d 0%, #fef2e4 100%);
`;
