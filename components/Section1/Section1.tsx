import React from "react";

import FadeInDown from "../FadeInDown/FadeInDown";

{
  /* <Styled.TitleImage>
          <img src={"/images/checkout.png"} alt="checkout" />
        </Styled.TitleImage> */
}

export default function Section1() {
  return (
    <section id="whatwedo" className="">
      <div className="cr-section-gap container flex flex-col justify-center items-center">
        <div className="flex flex-col text-black text-center">
          <h2 className="cr-text mb-2">Mobile shopping is great, but</h2>
          <FadeInDown>
            <h2 className="cr-section-title">
              Checkout is <strong className="cr-main-color">frustrating</strong>
            </h2>
          </FadeInDown>
        </div>

        <ul className="cr-content-mt flex flex-col lg:flex-row justify-between items-center list-none w-full">
          <li className="flex flex-col justify-center items-center text-black text-center w-full xl:h-80 lg:h-48 sm:h-80 h-48 ">
            <FadeInDown twClass="flex flex-col w-full h-full justify-start items-center">
              <img
                src={"/icons/not-equal.svg"}
                className="w-1/4 sm:w-44 lg:w-2/5 xl:w-6/12"
              />
              <span className="cr-text w-3/5 sm:w-2/5 lg:w-40 xl:w-72 lg:mt-8 mt-4">
                Each store’s{" "}
                <strong className="cr-main-color">checkout experience</strong>{" "}
                is different
              </span>
            </FadeInDown>
          </li>
          <li className="flex flex-col justify-center items-center text-black text-center w-full xl:h-80 lg:h-48 sm:h-80 h-48 ">
            <FadeInDown
              delay={0.4}
              twClass="flex flex-col w-full h-full justify-start items-center"
            >
              <img
                src={"/icons/block-maze.svg"}
                className="w-1/4 sm:w-44 lg:w-2/5 xl:w-6/12"
              />
              <span className="cr-text w-3/5 sm:w-2/5 lg:w-40 xl:w-72 lg:mt-8 mt-4">
                The checkout process isn’t always{" "}
                <strong className="cr-main-color">customer friendly</strong>
              </span>
            </FadeInDown>
          </li>
          <li className="flex flex-col justify-center items-center text-black text-center w-full xl:h-80 lg:h-48 sm:h-80 h-48 ">
            <FadeInDown
              delay={0.6}
              twClass="flex flex-col w-full h-full justify-start items-center"
            >
              <img
                src={"/icons/infinity.svg"}
                className="w-1/4 sm:w-44 lg:w-2/5 xl:w-6/12"
              />
              <span className="cr-text w-3/5 sm:w-2/5 lg:w-40 xl:w-72 lg:mt-8 mt-4">
                You have to enter personal information{" "}
                <strong className="cr-main-color">over and over again</strong>
              </span>
            </FadeInDown>
          </li>
        </ul>
      </div>
    </section>
  );
}
