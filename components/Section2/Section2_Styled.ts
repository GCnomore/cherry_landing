import styled from "styled-components";

import BgImg from "../../assets/images/image5.png";
import {
  BG_COLOR,
  FILTER_SHADOW,
  FONT_SIZE_LG,
  FONT_SIZE_MD,
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  HEADING_LG,
  HEADING_MD,
  HEADING_SM,
  HEADING_XL,
  HEADING_XS,
  MAIN_COLOR,
  PADDING_INNER_MOBILE,
  PADDING_Y_LG,
  PADDING_Y_MD,
  SCREEN_LG,
  SCREEN_SM,
  SCREEN_XS,
  SECTION_PADDING,
} from "../../utils/contants";

export const Container = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${SECTION_PADDING};
  margin-top: -26vh;
  /* background-image: linear-gradient(
    232deg,
    ${MAIN_COLOR} 10%,
    #f765b8 45%,
    #f765b8 55%,
    ${MAIN_COLOR} 90%
  ); */
  background-image: linear-gradient(180deg, #f765b8 0%, ${MAIN_COLOR} 80%);

  /* Mobile layout */
  @media (max-width: ${SCREEN_XS}) {
    height: 100%;
  }
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: white;
  filter: ${FILTER_SHADOW};

  h2 {
    margin: 0;
    font-size: ${HEADING_XL};

    @media (max-width: ${SCREEN_SM}) {
      font-size: ${HEADING_SM};
    }
  }
`;

export const SubTitleSection = styled.section`
  font-size: ${FONT_SIZE_MD};

  @media (max-width: ${SCREEN_SM}) {
    font-size: ${FONT_SIZE_SM};
  }

  > span {
    font-weight: bold;
  }
`;

export const SolutionSection = styled.section`
  display: flex;
  margin-top: 5%;
  width: 100%;
  height: 100%;
  padding: 0;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    /* Mobile layout */
    @media (max-width: ${SCREEN_XS}) {
      flex-direction: column;
      justify-content: space-between;
      margin-top: 50px;
    }

    > div:nth-child(odd) {
      align-self: flex-start;
    }
    > div:nth-child(even) {
      align-self: flex-end;
      flex-direction: row-reverse;
      text-align: end;
    }
  }
`;

export const SolutionItem = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  color: white;

  @media (max-width: ${SCREEN_XS}) {
    flex-direction: column;
    justify-content: space-evenly;
    padding: 2%;
    height: 150px;
    width: 250px;
    min-height: 0px;
    min-width: 0px;
    margin-bottom: 60px;
  }

  > div:first-child {
    width: 100%;

    @media (max-width: ${SCREEN_SM}) {
      width: 80px;
      height: 80px;
      top: -40px;
      border-radius: 40px;
    }
  }

  > div:nth-child(2) {
    margin-top: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: ${SCREEN_SM}) {
      font-size: ${HEADING_XS};
    }

    > span:nth-child(1) {
      font-size: ${HEADING_SM};
      font-weight: bold;
      filter: ${FILTER_SHADOW};
    }

    > span:nth-child(2) {
      font-size: ${FONT_SIZE_SM};

      @media (max-width: ${SCREEN_SM}) {
        font-size: ${FONT_SIZE_XS};
      }
    }
  }
`;
