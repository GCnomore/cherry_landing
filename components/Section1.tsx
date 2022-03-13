import React from "react";

import FadeInDown from "./FadeInDown/FadeInDown";

export default function Section1() {
  return (
    <section id="whatwedo" className="section1">
      <div className="cr-section-gap container flex flex-col justify-center items-center">
        <div className="flex flex-col text-black text-center">
          <h2 className="cr-text mb-2">Mobile shopping is great, but</h2>
          <h2 className="cr-section-title">
            Checkout is <strong className="cr-main-color">frustrating</strong>
          </h2>
        </div>

        <ul className="cr-content-mt mt-16 flex flex-col lg:flex-row justify-between items-center list-none w-full">
          <li className="flex flex-col justify-center items-center text-black text-center w-full xl:h-80 lg:h-48 sm:h-80 h-48 ">
            <img
              src={"/icons/not-equal.svg"}
              className="w-1/4 sm:w-44 lg:w-2/5 xl:w-6/12"
            />
            <span className="cr-text w-3/5 sm:w-2/5 lg:w-40 xl:w-72 lg:mt-8 mt-4">
              Each store’s checkout experience is{" "}
              <strong className="cr-main-color">different</strong>
            </span>
          </li>
          <li className="flex flex-col justify-center items-center text-black text-center w-full xl:h-80 lg:h-48 sm:h-80 h-48 ">
            <img
              src={"/icons/block-maze.svg"}
              className="w-1/4 sm:w-44 lg:w-2/5 xl:w-6/12"
            />
            <span className="cr-text w-3/5 sm:w-2/5 lg:w-40 xl:w-72 lg:mt-8 mt-4">
              The checkout process is{" "}
              <strong className="cr-main-color">not</strong> always{" "}
              <strong className="cr-main-color">customer friendly</strong>
            </span>
          </li>
          <li className="flex flex-col justify-center items-center text-black text-center w-full xl:h-80 lg:h-48 sm:h-80 h-48 ">
            <img
              src={"/icons/infinity.svg"}
              className="w-1/4 sm:w-44 lg:w-2/5 xl:w-6/12"
            />
            <span className="cr-text w-3/5 sm:w-2/5 lg:w-40 xl:w-72 lg:mt-8 mt-4">
              You have to <strong className="cr-main-color">enter</strong>{" "}
              personal information{" "}
              <strong className="cr-main-color">over and over again</strong>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
