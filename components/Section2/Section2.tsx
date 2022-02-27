import React from "react";
import TitleIndicator from "../Title_Indicator/TitleIndicator";

import * as Styled from "./Section2_Styled";
import ClickIcon from "../../assets/icons/icon1.png";
import FormIcon from "../../assets/icons/icon2.png";
import AllInOnekIcon from "../../assets/icons/icon3.png";
import Image from "next/image";

export default function Section2() {
  return (
    <Styled.Container>
      <div></div>
      <div>
        <Styled.TopSection>
          <TitleIndicator />
          <h2>Solution: Cherry</h2>
        </Styled.TopSection>
        <Styled.MidSection>
          A <span>mobile app</span> which empowers a user to
          <span> check out easily</span> with
        </Styled.MidSection>
        <Styled.BottomSection>
          <div>
            <div>
              <span>
                <Image alt="click" src={ClickIcon} />
              </span>
              <span>ONE CLICK</span>
              <span>
                Makes checkout simple and uniform wherever a user shop
              </span>
            </div>
            <div>
              <span>
                <Image alt="click" src={FormIcon} />
              </span>
              <span>NO MORE FORMS</span>
              <span>
                Requires personal information only once at Cherry sign up
              </span>
            </div>
            <div>
              <span>
                <Image alt="click" src={AllInOnekIcon} />
              </span>
              <span>ALL-IN-ONE CART</span>
              <span>Checks out products from multiple stores in one go</span>
            </div>
          </div>
        </Styled.BottomSection>
      </div>
    </Styled.Container>
  );
}
