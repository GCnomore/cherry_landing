import React from "react";
import Wrapper from "../Wrapper/Wrapper";

import * as Styled from "./Section3_Styled";

export default function Section3() {
  return (
    <section className="container flex flex-col w-full h-full bg-black">
      <Styled.TitleContainer>
        <h2>What We Provide</h2>
      </Styled.TitleContainer>
      <div className="flex flex-col w-full h-full">
        {/* <Styled.ContentImg>
          <img src="/images/phone_cover.png" alt="phone cover" />
          <img src="/images/phone_inner.png" alt="phone inner" />
          <span>Check Out</span>
        </Styled.ContentImg> */}
        <ul className="flex flex-col md:flex-row w-full h-full justiy-between items-center">
          <li className="h-72 w-full flex flex-col justify-center items-center text-white my-8 mx-4 bg-[#ffffff2b] rounded-sm text-center px-8">
            <h3>Loyalty Points</h3>
            <p>
              Gain points for every dollar spent and convert them to gift cards
              and deals
            </p>
          </li>
          <li className="h-72 w-full flex flex-col justify-center items-center text-white my-8 mx-4 bg-[#ffffff2b] rounded-sm text-center px-8">
            <h3>Product Recommendation</h3>
            <p>
              Cherry will recommend products based on the user’s browsing and
              purchasing history
            </p>
          </li>
          <li className="h-72 w-full flex flex-col justify-center items-center text-white my-8 mx-4 bg-[#ffffff2b] rounded-sm text-center px-8">
            <h3>Coupon & Deal Finder</h3>
            <p>
              Cherry will automatically find and alert the user of deals based
              on saved items, preferred brands and browsing history
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
