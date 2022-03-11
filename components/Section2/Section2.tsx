import React from "react";
import Image from "next/image";

import OneClick from "../../public/images/one_click.svg";
import NoForms from "../../public/images/no_forms.svg";
import AllInOne from "../../public/images/all_in_one.svg";
import FadeInDown from "../FadeInDown/FadeInDown";

export default function Section2() {
  return (
    <section
      id="features"
      className="cr-section-gap container flex flex-col w-full h-full "
    >
      <div className="flex flex-col w-full">
        <FadeInDown>
          <h2 className="cr-section-title text-center mb-2">
            We Solve Your Problems
          </h2>
        </FadeInDown>
        <FadeInDown>
          <h2 className="cr-text text-center">
            A <strong className="cr-main-color">mobile app</strong> which
            empowers a user to
            <strong className="cr-main-color"> check out easily</strong> with
          </h2>
        </FadeInDown>
      </div>
      <div className="cr-content-mt flex flex-col w-full md:px-16">
        <FadeInDown>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-1/2">
              <Image alt="click" src={OneClick} />
            </div>
            <div className="flex flex-col sm:w-1/2 w-3/4 h-full md:items-start items-center">
              <h3 className="cr-section-subTitle cr-main-color w-full text-center md:text-left">
                ONE CLICK
              </h3>
              <span className="cr-text text-center md:text-left mt-2 md:mt-0">
                Makes checkout simple and uniform wherever a user shop
              </span>
            </div>
          </div>
        </FadeInDown>
        <FadeInDown>
          <div className="flex flex-col md:flex-row-reverse justify-between items-center sm:mt-32 mt-16">
            <div className="w-1/2">
              <Image alt="click" src={NoForms} />
            </div>
            <div className="flex flex-col sm:w-1/2 w-3/4 h-full md:items-end items-center">
              <h3 className="cr-section-subTitle cr-main-color w-full text-center md:text-right">
                NO MORE FORMS
              </h3>
              <span className="cr-text text-center md:text-left mt-2 md:mt-0">
                Requires personal information only once at Cherry sign up
              </span>
            </div>
          </div>
        </FadeInDown>
        <FadeInDown>
          <div className="flex flex-col md:flex-row justify-between items-center sm:mt-32 mt-16">
            <div className="w-1/2">
              <Image alt="click" src={AllInOne} />
            </div>
            <div className="flex flex-col sm:w-1/2 w-3/4 h-full md:items-start items-center">
              <h3 className="cr-section-subTitle cr-main-color w-full text-center md:text-left">
                ALL-IN-ONE CART
              </h3>
              <span className="cr-text text-center md:text-left mt-2 md:mt-0">
                Checks out products from multiple stores in one go
              </span>
            </div>
          </div>
        </FadeInDown>
      </div>
    </section>
  );
}
