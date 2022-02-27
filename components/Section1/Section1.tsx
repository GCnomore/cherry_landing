import React from "react";
import TitleIndicator from "../Title_Indicator/TitleIndicator";

import * as Styled from "./Section1_Styled";

export default function Section1() {
  return (
    <Styled.Container>
      <Styled.ContentContainer>
        <TitleIndicator />
        <Styled.TopSection>
          <h2>Problem:</h2>
          <h2>Mobile shopping is great, but</h2>
          <h2>checkout is frustrating</h2>
        </Styled.TopSection>
        <Styled.MidSection>
          <h3>Why?</h3>
          <ul>
            <li>Each store’s checkout experience is different</li>
            <li>The checkout process isn’t always customer friendly</li>
            <li>You have to enter personal information over and over again</li>
          </ul>
        </Styled.MidSection>
        <Styled.BottomSection>
          <h3>Result</h3>
          <div>
            <div>
              <span>#5</span>
              <span>pain point of mobile shopping experience</span>
            </div>
            <div>
              <span>55%</span>
              <span>of mobile purchases are abandoned</span>
            </div>
            <div>
              <span>31%</span>
              <span>of US consumers avoid mobile shopping</span>
            </div>
          </div>
        </Styled.BottomSection>
      </Styled.ContentContainer>
      <Styled.ProblemImgContainer />
    </Styled.Container>
  );
}
