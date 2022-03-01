import Image from "next/image";
import React from "react";

import Logo from "../../assets/images/logo.png";
import { BG_COLOR } from "../../utils/contants";
import Wrapper from "../Wrapper/Wrapper";
import * as Styled from "./Header_Styled";

export default function Header() {
  return (
    <Wrapper bgColor={BG_COLOR}>
      <Styled.Container>
        <Styled.IntroContainer>
          <Styled.LogoContainer>
            <Image alt="logo" src={Logo} />
          </Styled.LogoContainer>
          <div>
            <h1>
              One-click checkout,
              <br /> wherever you shop
            </h1>
            <article>
              Labore occaecat sit eiusmod Lorem excepteur eu et reprehenderit
              esse veniam consectetur qui. Ea nulla do aliqua id culpa ut.
              Veniam dolor fugiat magna fugiat mollit ad laborum. Aute deserunt
            </article>
          </div>
        </Styled.IntroContainer>
        <Styled.VideoContainer>
          <div>Videoooooooooooooo</div>
        </Styled.VideoContainer>
      </Styled.Container>
    </Wrapper>
  );
}
