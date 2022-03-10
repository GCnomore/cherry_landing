import React from "react";
import Wrapper from "../Wrapper/Wrapper";

import * as Styled from "./Section3_Styled";

export default function Section3() {
  return (
    <section className="cr-section-gap container flex flex-col w-full h-full bg-black">
      <div className="flex w-full h-full items-center justify-center">
        <h2 className="cr-section-title text-white">What We Provide</h2>
      </div>
      <div className="flex flex-col w-full h-full">
        {/* <Styled.ContentImg>
          <img src="/images/phone_cover.png" alt="phone cover" />
          <img src="/images/phone_inner.png" alt="phone inner" />
          <span>Check Out</span>
        </Styled.ContentImg> */}
        <ul className="flex flex-col lg:flex-row w-full h-full justiy-between items-center">
          <li className="h-72 lg:w-full w-3/4 flex flex-col justify-center items-center text-white my-8 mx-4 bg-[#ffffff2b] rounded-sm text-center 2xl:px-8 lg:px-4 px-8">
            <h3 className="cr-section-subTitle cr-main-color">
              Loyalty Points
            </h3>
            <p className="mt-4">
              Gain points for every dollar spent and convert them to gift cards
              and deals
            </p>
          </li>
          <li className="h-72 lg:w-full w-3/4 flex flex-col justify-center items-center text-white my-8 mx-4 bg-[#ffffff2b] rounded-sm text-center 2xl:px-8 lg:px-4 px-8">
            <h3 className="cr-section-subTitle cr-main-color">
              Product Recommendation
            </h3>
            <p className="mt-4">
              Cherry will recommend products based on the user’s browsing and
              purchasing history
            </p>
          </li>
          <li className="h-72 lg:w-full w-3/4 flex flex-col justify-center items-center text-white my-8 mx-4 bg-[#ffffff2b] rounded-sm text-center 2xl:px-8 lg:px-4 px-8">
            <h3 className="cr-section-subTitle cr-main-color">
              Coupon & Deal Finder
            </h3>
            <p className="mt-4">
              Cherry will automatically find and alert the user of deals based
              on saved items, preferred brands and browsing history
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
