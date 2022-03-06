import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import FadeInDown from "../FadeInDown/FadeInDown";

import LogoWhite from "../../assets/icons/logo_icon_white.png";
import Experience from "../../assets/images/online-shop.png";
import Friendly from "../../assets/images/customer_friendly.png";
import Information from "../../assets/images/online-payment.png";

import * as Styled from "./Section1_Styled";

export default function Section1() {
  return (
    <Styled.Container>
      <Styled.ContentContainer>
        <Styled.TitleSection>
          <h2>Mobile shopping is great, but</h2>
          <FadeInDown delay={0.5}>
            <h2>checkout is frustrating</h2>
          </FadeInDown>
        </Styled.TitleSection>
        {/* <Styled.BackLogo>
          <Image alt="white logo" src={LogoWhite} />
        </Styled.BackLogo> */}
        <Styled.MidSection>
          <ul>
            <FadeInDown>
              <li>
                <Styled.ImageContainer>
                  <Image src={Experience} />
                </Styled.ImageContainer>
                <span>Each store’s checkout experience is different</span>
              </li>
            </FadeInDown>
            <FadeInDown>
              <li>
                <Styled.ImageContainer>
                  <Image src={Friendly} />
                </Styled.ImageContainer>
                <span>The checkout process isn’t always customer friendly</span>
              </li>
            </FadeInDown>
            <FadeInDown>
              <li>
                <Styled.ImageContainer>
                  <Image src={Information} />
                </Styled.ImageContainer>
                <span>
                  You have to enter personal information over and over again
                </span>
              </li>
            </FadeInDown>
          </ul>
        </Styled.MidSection>
      </Styled.ContentContainer>
    </Styled.Container>
  );
}
