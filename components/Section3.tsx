import React from "react";

export default function Section3() {
  return (
    <section className="section3">
      <div className="cr-section-gap container flex flex-col w-full h-full">
        <div className="flex w-full h-full items-center justify-center">
            <h2 className="cr-section-title">
                <div class="elementor-divider">
                    <div class="elementor-divider-separator">
                    </div>
                </div>
                Product Additional User Benefits
            </h2>
        </div>
        <div className="cr-content-mt flex flex-col w-full h-full">
          <ul className="flex flex-col lg:flex-row w-full h-full justiy-between items-center">
            <li className="relative md:w-2/4 xs:mx-4 h-72 lg:w-full xs:w-80 w-full flex flex-col justify-center items-center my-8 bg-[#00000011] rounded-xl text-center 2xl:px-8 lg:px-4 px-8">
              <div className="absolute w-[6rem] top-[-3rem] ">
                <img
                  alt="automatic coupon"
                  src="/icons/automatic_coupons.png"
                />
              </div>
              <h3 className="cr-section-subTitle cr-main-color">
                AUTOMATIC COUPONS
              </h3>
              <p className="cr-text mt-4">
                Cherry will{" "}
                <strong>automatically</strong> find
                and apply <strong>coupon</strong>
                codes at checkout
              </p>
            </li>

            <li className="relative md:w-2/4 xs:mx-4 h-72 lg:w-full xs:w-80 w-full flex flex-col justify-center items-center my-8 bg-[#00000011] rounded-xl text-center 2xl:px-8 lg:px-4 px-8">
              <div className="absolute w-[6rem] top-[-3rem] ">
                <img alt="automatic coupon" src="/icons/loyalty_points.png" />
              </div>
              <h3 className="cr-section-subTitle cr-main-color">
                LOYALTY POINTS
              </h3>
              <p className="cr-text mt-4">
                Users gain points for every dollar spent and{" "}
                <strong>convert</strong> them to{" "}
                <strong>gift cards and deals</strong>
              </p>
            </li>

            <li className="relative md:w-2/4 xs:mx-4 h-72 lg:w-full xs:w-80 w-full flex flex-col justify-center items-center my-8 bg-[#00000011] rounded-xl text-center 2xl:px-8 lg:px-4 px-8">
              <div className="absolute w-[6rem] top-[-3rem] ">
                <img
                  alt="automatic coupon"
                  src="/icons/product_deal_recommendation.png"
                />
              </div>
              <h3 className="cr-section-subTitle cr-main-color">
                PRODUCT / DEAL RECOMMENDATION
              </h3>
              <p className="cr-text mt-4">
                Cherry will recommend products and deals{" "}
                <strong>based on</strong> the user’s
                browsing and purchasing{" "}
                <strong>history</strong>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
