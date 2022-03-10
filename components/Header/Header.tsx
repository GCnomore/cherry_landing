import Image from "next/image";
import React from "react";

import Logo from "../../public/images/logo_text.png";
import LogoWhite from "../../public/images/logo_text_white.png";
import LogoIcon from "../../public/images/logo_icon_color.png";
import LogoIconWhite from "../../public/images/logo_icon_white.png";
import * as Styled from "./Header_Styled";
import Wrapper from "../Wrapper/Wrapper";

<Styled.LogoContainer>
  <Image alt="logo" src={LogoWhite} />
</Styled.LogoContainer>;

export default function Header() {
  return (
    <section className="container flex flex-col justify-start items-center">
      <div className="flex flex-col justify-center items-center">
        {/* <div>
          <Image src={LogoIconWhite} alt="logo" />
        </div> */}
        <div className="flex justify-between text-white">
          <span>Home</span>
          <span>What we do</span>
          <span>Features</span>
          <span>Contact us?</span>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col w-full">
          <h1 className="w-full text-center m-0">
            One-click checkout,
            <br /> wherever you shop
          </h1>
          <article className="w-full text-start m-0">
            Labore occaecat sit eiusmod Lorem excepteur eu et reprehenderit esse
            veniam consectetur qui. Ea nulla do aliqua id culpa ut. Veniam dolor
            fugiat magna fugiat mollit ad laborum. Aute deserunt
          </article>
        </div>
        <Styled.VideoContainer>
          <div>Videoooooooooooooo</div>
        </Styled.VideoContainer>
      </div>
    </section>
  );
}
