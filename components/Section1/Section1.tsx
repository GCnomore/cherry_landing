import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import LogoWhite from "../../assets/icons/logo_icon_white.png";
import { MAIN_COLOR } from "../../utils/contants";
import FadeInDown from "../FadeInDown/FadeInDown";
import TitleIndicator from "../Title_Indicator/TitleIndicator";
import Wrapper from "../Wrapper/Wrapper";
import * as Styled from "./Section1_Styled";

export default function Section1() {
  return (
    <Wrapper bgColor={MAIN_COLOR}>
      <Styled.Container>
        <Styled.ContentContainer>
          <Styled.BackLogo>
            <Image alt="white logo" src={LogoWhite} />
          </Styled.BackLogo>
          <FadeInDown>
            <Styled.TopSection>
              <TitleIndicator />
              <h2>Problem:</h2>
              <h2>Mobile shopping is great, but</h2>
              <h2>checkout is frustrating</h2>
            </Styled.TopSection>
          </FadeInDown>

          <FadeInDown>
            <Styled.MidSection>
              <h3>Why?</h3>
              <ul>
                <li>Each store’s checkout experience is different</li>
                <li>The checkout process isn’t always customer friendly</li>
                <li>
                  You have to enter personal information over and over again
                </li>
              </ul>
            </Styled.MidSection>
          </FadeInDown>
        </Styled.ContentContainer>
        <Styled.ProblemImgContainer />
      </Styled.Container>
    </Wrapper>
  );
}
