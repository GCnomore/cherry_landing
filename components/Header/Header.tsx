import Image from "next/image";
import React from "react";

import Logo from "../../public/images/logo_text.png";
import LogoWhite from "../../public/images/logo_text_white.png";
import LogoIcon from "../../public/images/logo_icon_color.png";
import LogoIconWhite from "../../public/images/logo_icon_white.png";
import * as Styled from "./Header_Styled";
import Wrapper from "../Wrapper/Wrapper";

export default function Header() {
  return (
    <Styled.Container>
      <Wrapper>
        <Styled.Contents>
          <Styled.MenuContainer>
            <div>
              <Image src={LogoIconWhite} alt="logo" />
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
                <Image alt="logo" src={LogoWhite} />
              </Styled.LogoContainer>
              <div>
                <h1>
                  One-click checkout,
                  <br /> wherever you shop
                </h1>
                <article>
                  Labore occaecat sit eiusmod Lorem excepteur eu et
                  reprehenderit esse veniam consectetur qui. Ea nulla do aliqua
                  id culpa ut. Veniam dolor fugiat magna fugiat mollit ad
                  laborum. Aute deserunt
                </article>
              </div>
            </Styled.IntroContainer>
            <Styled.VideoContainer>
              <div>Videoooooooooooooo</div>
            </Styled.VideoContainer>
          </div>
        </Styled.Contents>
      </Wrapper>
    </Styled.Container>
  );
}
