import React from "react";

import * as Styled from "./Section2_Styled";
import ClickIcon from "../../public/images/one_click.png";
import FormIcon from "../../public/images/forms2.png";
import AllInOnekIcon from "../../public/images/all_in_one.png";
import Image from "next/image";
import FadeInDown from "../FadeInDown/FadeInDown";
import Wrapper from "../Wrapper/Wrapper";

export default function Section2() {
  return (
    <section className="container flex flex-col w-full h-full ">
      <div className="flex flex-col w-full">
        <FadeInDown>
          <h2>We Solve Your Problems</h2>
        </FadeInDown>
        <FadeInDown>
          <h2>
            A <span>mobile app</span> which empowers a user to
            <span> check out easily</span> with
          </h2>
        </FadeInDown>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div>{/* <Image alt="click" src={ClickIcon} /> */}</div>
          <div>
            <span>ONE CLICK</span>
            <span>Makes checkout simple and uniform wherever a user shop</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-center items-center">
          <div>{/* <Image alt="click" src={FormIcon} /> */}</div>
          <div>
            <span>NO MORE FORMS</span>
            <span>
              Requires personal information only once at Cherry sign up
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div>{/* <Image alt="click" src={AllInOnekIcon} /> */}</div>
          <div>
            <span>ALL-IN-ONE CART</span>
            <span>Checks out products from multiple stores in one go</span>
          </div>
        </div>
      </div>
    </section>
  );
}
