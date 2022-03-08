import React from "react";
import Wrapper from "../Wrapper/Wrapper";

import * as Styled from "./Section3_Styled";

export default function Section3() {
  return (
    <Wrapper>
      <Styled.Container>
        <Styled.TitleContainer>
          <h2>What We Provide</h2>
        </Styled.TitleContainer>
        <Styled.Features>
          <li>
            <h3>Loyalty Points</h3>
            <p>
              Gain points for every dollar spent and convert them to gift cards
              and deals
            </p>
          </li>
          <li>
            <h3>Product Recommendation</h3>
            <p>
              Cherry will recommend products based on the user’s browsing and
              purchasing history
            </p>
          </li>
          <li>
            <h3>Coupon & Deal Finder</h3>
            <p>
              Cherry will automatically find and alert the user of deals based
              on saved items, preferred brands and browsing history
            </p>
          </li>
        </Styled.Features>
      </Styled.Container>
    </Wrapper>
  );
}
