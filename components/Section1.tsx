import React from "react";

import FadeInDown from "./FadeInDown/FadeInDown";

export default function Section1() {
  return (
    <section id="whatwedo" className="section1">
      <div className="cr-section-gap container flex flex-col justify-center items-center">
        <div className="flex flex-col text-black text-center">
          <h2 className="cr-text mb-5">Mobile shopping is great, but</h2>
          <h2 className="cr-section-title">
            <div className="elementor-divider">
              <div className="elementor-divider-separator"></div>
            </div>
            Checkout is <strong className="cr-main-color">frustrating</strong>
          </h2>
        </div>

        <ul className="cr-content-mt mt-16 flex flex-col lg:flex-row justify-between items-center list-none w-full">
          <li className="flex flex-col justify-start items-center text-black text-center w-full xl:h-60 lg:h-48 sm:h-60 h-48 ">
            <span className="cr-problem-number">1.</span>
            <span className="cr-text w-3/5 sm:w-2/5 lg:w-40 xl:w-72 lg:mt-4 mt-4">
              Each store’s checkout experience is <strong>different</strong>
            </span>
          </li>
          <li className="flex flex-col justify-start items-center text-black text-center w-full xl:h-60 lg:h-48 sm:h-60 h-48 ">
            <span className="cr-problem-number">2.</span>
            <span className="cr-text w-3/5 sm:w-2/5 lg:w-40 xl:w-72 lg:mt-4 mt-4">
              The checkout process is <strong>not</strong> always{" "}
              <strong>customer friendly</strong>
            </span>
          </li>
          <li className="flex flex-col justify-start items-center text-black text-center w-full xl:h-60 lg:h-48 sm:h-60 h-48 ">
            <span className="cr-problem-number">3.</span>
            <span className="cr-text w-3/5 sm:w-2/5 lg:w-40 xl:w-72 lg:mt-4 mt-4">
              You have to <strong>enter</strong> personal information{" "}
              <strong>over and over again</strong>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
