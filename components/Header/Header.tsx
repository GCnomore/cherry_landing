import Image from "next/image";
import React from "react";

import Logo from "../../assets/images/logo.png";
import * as Styled from "./Header_Styled";

export default function Header() {
  return (
    <Styled.Container>
      <div>
        <div>
          <Styled.LogoContainer>
            <Image alt="logo" src={Logo} />
          </Styled.LogoContainer>
        </div>
        <div>
          <Styled.IntroContainer>
            <div>
              <h1>One-click checkout, wherever you shop</h1>
              <p>
                Labore occaecat sit eiusmod Lorem excepteur eu et reprehenderit
                esse veniam consectetur qui. Ea nulla do aliqua id culpa ut.
                Veniam dolor fugiat magna fugiat mollit ad laborum. Aute
                deserunt elit deserunt eiusmod. Et amet cupidatat nulla do enim
                nisi proident velit ut ad ipsum est excepteur.
              </p>
            </div>
          </Styled.IntroContainer>
          <Styled.VideoContainer>
            <div>Videoooooooooooooo</div>
          </Styled.VideoContainer>
        </div>
      </div>
    </Styled.Container>
  );
}
