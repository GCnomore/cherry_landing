import React from "react";

import * as Styled from "./Section2_Styled";
import ClickIcon from "../../assets/images/one_click.png";
import FormIcon from "../../assets/images/forms2.png";
import AllInOnekIcon from "../../assets/images/all_in_one.png";
import Image from "next/image";
import FadeInDown from "../FadeInDown/FadeInDown";
import Wrapper from "../Wrapper/Wrapper";

export default function Section2() {
  return (
    <Wrapper>
      <Styled.Container>
        <Styled.TitleSection>
          <FadeInDown>
            <h2>We Solve Your Problems</h2>
          </FadeInDown>
          <FadeInDown>
            <Styled.SubTitleSection>
              A <span>mobile app</span> which empowers a user to
              <span> check out easily</span> with
            </Styled.SubTitleSection>
          </FadeInDown>
        </Styled.TitleSection>
        <Styled.SolutionSection>
          <div>
            <Styled.SolutionItem>
              <div>
                <Image alt="click" src={ClickIcon} />
              </div>
              <div>
                <span>ONE CLICK</span>
                <span>
                  Makes checkout simple and uniform wherever a user shop
                </span>
              </div>
            </Styled.SolutionItem>
            <Styled.SolutionItem>
              <div>
                <Image alt="click" src={FormIcon} />
              </div>
              <div>
                <span>NO MORE FORMS</span>
                <span>
                  Requires personal information only once at Cherry sign up
                </span>
              </div>
            </Styled.SolutionItem>
            <Styled.SolutionItem>
              <div>
                <Image alt="click" src={AllInOnekIcon} />
              </div>
              <div>
                <span>ALL-IN-ONE CART</span>
                <span>Checks out products from multiple stores in one go</span>
              </div>
            </Styled.SolutionItem>
          </div>
        </Styled.SolutionSection>
      </Styled.Container>
    </Wrapper>
  );
}
