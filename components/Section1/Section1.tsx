import React from "react";

import FadeInDown from "../FadeInDown/FadeInDown";

import LogoWhite from "../../public/icons/logo_icon_white.png";

import * as Styled from "./Section1_Styled";
import Wrapper from "../Wrapper/Wrapper";

{
  /* <Styled.BackLogo>
          <Image alt="white logo" src={LogoWhite} />
        </Styled.BackLogo> */
}

{
  /* <Styled.TitleImage>
          <img src={"/images/checkout.png"} alt="checkout" />
        </Styled.TitleImage> */
}

export default function Section1() {
  return (
    <section
      id="whatwedo"
      className="cr-section-gap container flex flex-col justify-center items-center bg-black "
    >
      <div className="flex flex-col text-white text-center">
        <h2>Mobile shopping is great, but</h2>
        <FadeInDown>
          <h2 className="cr-section-title">Checkout is frustrating</h2>
        </FadeInDown>
      </div>

      <ul className="cr-content-mt flex flex-col sm:flex-row justify-between items-center list-none w-full">
        <li className="flex flex-col justify-center items-center text-white text-center w-full h-80">
          <FadeInDown twClass="flex flex-col w-full h-full justify-start items-center">
            <img
              src={"/icons/not-equal.svg"}
              className="w-1/4 sm:w-20 md:w-2/5 xl:w-6/12"
            />
            <span className="w-3/5 sm:w-36 md:w-40 xl:w-72 mt-8">
              Each store’s{" "}
              <strong className="cr-main-color">checkout experience</strong> is
              different
            </span>
          </FadeInDown>
        </li>
        <li className="flex flex-col justify-center items-center text-white text-center w-full h-80">
          <FadeInDown
            delay={0.4}
            twClass="flex flex-col w-full h-full justify-start items-center"
          >
            <img
              src={"/icons/block-maze.svg"}
              className="w-1/4 sm:w-20 md:w-2/5 xl:w-6/12"
            />
            <span className="w-3/5 sm:w-36 md:w-40 xl:w-72 mt-8">
              The checkout process isn’t always{" "}
              <strong className="cr-main-color">customer friendly</strong>
            </span>
          </FadeInDown>
        </li>
        <li className="flex flex-col justify-center items-center text-white text-center w-full h-80">
          <FadeInDown
            delay={0.6}
            twClass="flex flex-col w-full h-full justify-start items-center"
          >
            <img
              src={"/icons/infinity.svg"}
              className="w-1/4 sm:w-20 md:w-2/5 xl:w-6/12"
            />
            <span className="w-3/5 sm:w-36 md:w-40 xl:w-72 mt-8">
              You have to enter personal information{" "}
              <strong className="cr-main-color">over and over again</strong>
            </span>
          </FadeInDown>
        </li>
      </ul>
    </section>
  );
}
