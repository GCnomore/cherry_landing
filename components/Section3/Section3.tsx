import React from "react";
import Wrapper from "../Wrapper/Wrapper";

import * as Styled from "./Section3_Styled";

export default function Section3() {
  return (
    <Styled.Container>
      <Wrapper>
        <Styled.TitleContainer>
          <h2>What We Provide</h2>
        </Styled.TitleContainer>
        <Styled.ContentContainer>
          <Styled.ContentImg>
            <img src="/images/phone_cover.png" alt="phone cover" />
            <img src="/images/phone_inner.png" alt="phone inner" />
            <span>Check Out</span>
          </Styled.ContentImg>
          <Styled.Features>
            <li>
              <h3>Loyalty Points</h3>
              <p>
                Gain points for every dollar spent and convert them to gift
                cards and deals
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
        </Styled.ContentContainer>
      </Wrapper>
    </Styled.Container>
  );
}
