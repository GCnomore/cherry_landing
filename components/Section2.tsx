import React from "react";

export default function Section2() {
  return (
    <section id="features" className="section2">
      <div className="cr-section-gap container flex flex-col w-full h-full">
        <div className="text-center">
          <h2 className="cr-section-title text-center mb-5">
            <div className="elementor-divider">
              <div className="elementor-divider-separator"></div>
            </div>
            Solution: <strong>Cherry</strong>
          </h2>
          <h2 className="cr-text text-center">
            A <strong>mobile app</strong> which enables a{" "}
            <strong>hassle-free checkout</strong> with
          </h2>
        </div>
        <div className="cr-content-mt flex flex-col w-full md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-1/2 bg-white">
              <img alt="click" src={"/images/all_in_one.svg"} />
            </div>
            <div className="flex flex-col sm:w-1/2 w-3/4 h-full md:items-start items-center lg:px-0 px-4">
              <h3 className="cr-section-title w-full text-center mb-5 md:mt-0 mt-4">
                ALL-IN-ONE CART
              </h3>
              <span className="cr-section2-text cr-text text-center mt-2 md:mt-0 mx-auto">
                Cherry holds products from any store in one{" "}
                <strong>universal cart</strong>
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse justify-between items-center sm:mt-32 mt-24">
            <div className="w-1/2">
              <img alt="click" src={"/images/no_forms.svg"} />
            </div>
            <div className="flex flex-col sm:w-1/2 w-3/4 h-full md:items-end items-center">
              <h3 className="cr-section-title w-full text-center mb-5 md:mt-0 mt-4">
                NO MORE FORMS
              </h3>
              <span className="cr-section2-text cr-text text-center mt-2 md:mt-0 mx-auto">
                Cherry requires personal information <strong>only once</strong>{" "}
                at Cherry sign up
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center sm:mt-32 mt-24">
            <div className="w-1/2">
              <img alt="click" src={"/images/one_click.svg"} />
            </div>
            <div className="flex flex-col sm:w-1/2 w-3/4 h-full md:items-start items-center lg:px-0 px-4">
              <h3 className="cr-section-title w-full text-center mb-5 md:mt-0 mt-4">
                ONE CLICK
              </h3>
              <span className="cr-section2-text cr-text text-center mt-2 md:mt-0 mx-auto">
                Cherry makes checkout <strong>simple and uniform</strong>{" "}
                wherever a user shops
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
