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
    <section className="container flex flex-col justify-center items-center bg-black ">
      <div className="flex flex-col text-white text-center">
        <h2>Mobile shopping is great, but</h2>
        <FadeInDown delay={0.5}>
          <h2>Checkout is frustrating</h2>
        </FadeInDown>
      </div>

      <ul className="flex flex-col sm:flex-row justify-between items-center list-none w-full">
        <FadeInDown>
          <li className="flex flex-col justify-center items-center text-white text-center">
            <img
              src={"/icons/not-equal.svg"}
              className="w-12 md:w-20 xl:w-24"
            />
            <span className="w-36 md:w-40 xl:w-44">
              Each store’s checkout experience is different
            </span>
          </li>
        </FadeInDown>
        <FadeInDown>
          <li className="flex flex-col justify-center items-center text-white text-center">
            <img
              src={"/icons/block-maze.svg"}
              className="w-12 md:w-20 xl:w-24"
            />
            <span className="w-36 md:w-40 xl:w-44">
              The checkout process isn’t always customer friendly
            </span>
          </li>
        </FadeInDown>
        <FadeInDown>
          <li className="flex flex-col justify-center items-center text-white text-center">
            <img src={"/icons/infinity.svg"} className="w-12 md:w-20 xl:w-24" />
            <span className="w-36 md:w-40 xl:w-44">
              You have to enter personal information over and over again
            </span>
          </li>
        </FadeInDown>
      </ul>
    </section>
  );
}
