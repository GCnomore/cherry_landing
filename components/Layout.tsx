import React, { ReactNode } from "react";
import Head from "next/head";

import { FONT_FAMILY, MAX_WIDTH_LG, PADDING_MD } from "../utils/contants";
import styled from "styled-components";

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
    {children}
    <footer></footer>
  </div>
);

export default Layout;
