import Image from "next/image";
import React from "react";

import Logo from "../../public/images/logo.png";
import LogoWhite from "../../public/images/logo_text_white.png";
import LogoIcon from "../../public/images/logo_icon_color.png";
import LogoIconWhite from "../../public/images/logo_icon_white.png";
import * as Styled from "./Header_Styled";

<Styled.LogoContainer>
  <Image alt="logo" src={LogoWhite} />
</Styled.LogoContainer>;

export default function Header() {
  return (
    <main id="home" className="cr-hero-bg">
      <div className="cr-section-gap container flex flex-col justify-start items-center mb-32 h-screen">
        <div className="flex flex-col justify-center items-center">
          <div className="flex md:w-40 w-32 md:mt-0 mt-12">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="flex justify-between text-black mt-4 md:mb-0 mb-16 sm:text-base xs:text-sm text-xs">
            <a href="#home" className="md:mr-16 mr-5">
              Home
            </a>
            <a href="#whatwedo" className="md:mr-16 mr-5">
              What we do
            </a>
            <a href="#features" className="md:mr-16 mr-5">
              Features
            </a>
            <a>Contact us?</a>
          </div>
        </div>
        <div className="flex h-full lg:flex-row flex-col lg:justify-between justify-center items-center">
          <div className="flex flex-col lg:w-2/4 lg:mr-6 lg:mb-0 mb-16">
            <h1 className="cr-section-title w-full mb:text-start text-center m-0">
              One-click checkout,
              <br /> <strong className="cr-main-color">wherever</strong> you
              shop
            </h1>
            <article className="cr-text w-full lg:text-start text-center lg:m-0 mt-4">
              Labore occaecat sit eiusmod Lorem excepteur eu et reprehenderit
              esse veniam consectetur qui. Ea nulla do aliqua id culpa ut.
              Veniam dolor fugiat magna fugiat mollit ad laborum. Aute deserunt
            </article>
          </div>
          <div className="flex xl:w-3/5 lg:w-2/4 w-4/5 h-fit aspect-video lg:ml-6">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ZKE8v8IgpfY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
