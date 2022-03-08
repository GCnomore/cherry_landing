import React from "react";

import FadeInDown from "../FadeInDown/FadeInDown";

import LogoWhite from "../../public/icons/logo_icon_white.png";

import * as Styled from "./Section1_Styled";
import Wrapper from "../Wrapper/Wrapper";

export default function Section1() {
  return (
    <Styled.Container>
      <Wrapper bgImg="">
        <Styled.ContentContainer>
          <Styled.TitleSection>
            <h2>Mobile shopping is great, but</h2>
            <FadeInDown delay={0.5}>
              <h2>Checkout is frustrating</h2>
            </FadeInDown>
          </Styled.TitleSection>
          {/* <Styled.BackLogo>
          <Image alt="white logo" src={LogoWhite} />
        </Styled.BackLogo> */}
          <Styled.Contents>
            <ul>
              <FadeInDown>
                <li>
                  <Styled.ImageContainer>
                    <img src={"/icons/not-equal.svg"} />
                  </Styled.ImageContainer>
                  <span>Each store’s checkout experience is different</span>
                </li>
              </FadeInDown>
              <FadeInDown>
                <li>
                  <Styled.ImageContainer>
                    <img src={"/icons/block-maze.svg"} />
                  </Styled.ImageContainer>
                  <span>
                    The checkout process isn’t always customer friendly
                  </span>
                </li>
              </FadeInDown>
              <FadeInDown>
                <li>
                  <Styled.ImageContainer>
                    <img src={"/icons/infinity.svg"} />
                  </Styled.ImageContainer>
                  <span>
                    You have to enter personal information over and over again
                  </span>
                </li>
              </FadeInDown>
            </ul>
            <Styled.TitleImage>
              <img src={"/images/checkout.png"} alt="checkout" />
            </Styled.TitleImage>
          </Styled.Contents>
        </Styled.ContentContainer>
      </Wrapper>
      <Styled.BG />
    </Styled.Container>
  );
}
