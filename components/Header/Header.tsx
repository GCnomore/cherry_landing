import Image from "next/image";
import React from "react";

import Logo from "../../assets/images/logo_text.png";
import LogoIcon from "../../assets/images/logo_icon_color.png";
import BgImage from "../../assets/images/checkout.png";
import * as Styled from "./Header_Styled";

export default function Header() {
  return (
    <Styled.Container>
      <Styled.MenuContainer>
        <div>
          <Image src={LogoIcon} alt="logo" />
        </div>
        <div>
          <span>Home</span>
          <span>What we do</span>
          <span>Features</span>
          <span>Contact us?</span>
        </div>
      </Styled.MenuContainer>
      <div>
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
      </div>
      <Styled.BgImage>
        <Image src={BgImage} alt="background" />
      </Styled.BgImage>
    </Styled.Container>
  );
}
