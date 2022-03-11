import React from "react";

import FadeInDown from "../FadeInDown/FadeInDown";

export default function Section3() {
  return (
    <section className="cr-section-gap container flex flex-col w-full h-full">
      <FadeInDown>
        <div className="flex w-full h-full items-center justify-center">
          <h2 className="cr-section-title">What We Provide</h2>
        </div>
      </FadeInDown>
      <div className="flex flex-col w-full h-full">
        {/* <Styled.ContentImg>
          <img src="/images/phone_cover.png" alt="phone cover" />
          <img src="/images/phone_inner.png" alt="phone inner" />
          <span>Check Out</span>
        </Styled.ContentImg> */}
        <ul className="flex flex-col lg:flex-row w-full h-full justiy-between items-center">
          <FadeInDown twClass="flex flex-col md:w-3/4 xs:mx-4 h-full justify-start items-center">
            <li className="h-72 lg:w-full xs:w-3/4 w-full flex flex-col justify-center items-center my-8 bg-[#f2f2f2] rounded-xl text-center 2xl:px-8 lg:px-4 px-8">
              <h3 className="cr-section-subTitle cr-main-color">
                Loyalty Points
              </h3>
              <p className="cr-text mt-4">
                Gain points for every dollar spent and convert them to gift
                cards and deals
              </p>
            </li>
          </FadeInDown>
          <FadeInDown
            delay={0.4}
            twClass="flex flex-col md:w-3/4 xs:mx-4 h-full justify-start items-center"
          >
            <li className="h-72 lg:w-full xs:w-3/4 w-full flex flex-col justify-center items-center my-8 bg-[#f2f2f2] rounded-xl text-center 2xl:px-8 lg:px-4 px-8">
              <h3 className="cr-section-subTitle cr-main-color">
                Product Recommendation
              </h3>
              <p className="cr-text mt-4">
                Cherry will recommend products based on the user’s browsing and
                purchasing history
              </p>
            </li>
          </FadeInDown>
          <FadeInDown
            delay={0.6}
            twClass="flex flex-col md:w-3/4 xs:mx-4 h-full justify-start items-center"
          >
            <li className="h-72 lg:w-full xs:w-3/4 w-full flex flex-col justify-center items-center my-8 bg-[#f2f2f2] rounded-xl text-center 2xl:px-8 lg:px-4 px-8">
              <h3 className="cr-section-subTitle cr-main-color">
                Coupon & Deal Finder
              </h3>
              <p className="cr-text mt-4">
                Cherry will automatically find and alert the user of deals based
                on saved items, preferred brands and browsing history
              </p>
            </li>
          </FadeInDown>
        </ul>
      </div>
    </section>
  );
}
