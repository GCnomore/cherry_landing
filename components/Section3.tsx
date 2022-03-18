import React from "react";

export default function Section3() {
  return (
    <section className="section3">
      <div className="cr-section-gap container flex flex-col w-full h-full">
        <div className="flex w-full h-full items-center justify-center">
          <h2 className="cr-section-title">
            <div className="elementor-divider">
              <div className="elementor-divider-separator divider-section3-inner"></div>
            </div>
            Product Additional User Benefits
          </h2>
        </div>
        <div className="cr-content-mt flex flex-col w-full h-full">
          <ul className="flex flex-col lg:flex-row w-full h-full justiy-between items-center">
            <li className="relative md:w-2/4 xs:mx-4 lg:h-[20rem] xs:h-[18rem] h-[16rem] lg:w-full xs:w-80 w-full flex flex-col justify-start items-center my-8 bg-[#00000011] rounded-xl text-center 2xl:pt-20 pt-16 lg:px-4 px-8">
              <div className="absolute 2xl:w-[6rem] w-[5rem] md:top-[-3rem] top-[-2rem] ">
                <img
                  alt="automatic coupon"
                  src="/icons/automatic_coupons.png"
                />
              </div>
              <h3 className="cr-section-subTitle cr-main-color 2xl:h-[40%] h-[35%]">
                AUTOMATIC COUPONS
              </h3>
              <p className="cr-text h-2/4">
                Cherry will <strong>automatically</strong> find and apply{" "}
                <strong>coupon</strong>
                codes at checkout
              </p>
            </li>

            <li className="relative md:w-2/4 xs:mx-4 lg:h-[20rem] xs:h-[18rem] h-[16rem] lg:w-full xs:w-80 w-full flex flex-col justify-start items-center my-8 bg-[#00000011] rounded-xl text-center 2xl:pt-20 pt-16 lg:px-4 px-8">
              <div className="absolute 2xl:w-[6rem] w-[5rem] md:top-[-3rem] top-[-2rem] ">
                <img alt="automatic coupon" src="/icons/loyalty_points.png" />
              </div>
              <h3 className="cr-section-subTitle cr-main-color 2xl:h-[40%] h-[35%]">
                LOYALTY POINTS
              </h3>
              <p className="cr-text h-2/4">
                Users gain points for every dollar spent and{" "}
                <strong>convert</strong> them to{" "}
                <strong>gift cards and deals</strong>
              </p>
            </li>

            <li className="relative md:w-2/4 xs:mx-4 lg:h-[20rem] xs:h-[18rem] h-[16rem] lg:w-full xs:w-80 w-full flex flex-col justify-start items-center my-8 bg-[#00000011] rounded-xl text-center 2xl:pt-20 pt-16 lg:px-4 px-8">
              <div className="absolute 2xl:w-[6rem] w-[5rem] md:top-[-3rem] top-[-2rem] ">
                <img
                  alt="automatic coupon"
                  src="/icons/product_deal_recommendation.png"
                />
              </div>
              <h3 className="cr-section-subTitle cr-main-color 2xl:h-[40%] h-[35%]">
                PRODUCT / DEAL RECOMMENDATION
              </h3>
              <p className="cr-text h-2/4">
                Cherry will recommend products and deals{" "}
                <strong>based on</strong> the user’s browsing and purchasing{" "}
                <strong>history</strong>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
