import React from "react";
import TitleIndicator from "../Title_Indicator/TitleIndicator";

import * as Styled from "./Section2_Styled";

export default function Section2() {
  return (
    <Styled.Container>
      <div></div>
      <div>
        <Styled.TopSection>
          <TitleIndicator />
          <h3>Solution: Cherry</h3>
        </Styled.TopSection>
        <Styled.MidSection>
          A <span>mobile app</span> which empowers a user to
          <span>check out easily</span> with
        </Styled.MidSection>
        <Styled.BottomSection>
          <div>
            <div>
              <span></span>
              <span>ONE CLICK</span>
              <span>
                Makes checkout simple and uniform wherever a user shop
              </span>
            </div>
          </div>
        </Styled.BottomSection>
      </div>
    </Styled.Container>
  );
}
