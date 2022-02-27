import styled from "styled-components";

import BgImg from "../../assets/images/image4.png";
import {
  FONT_LG,
  FONT_MD,
  FONT_SM,
  FONT_XS,
  HEADING_LG,
  HEADING_MD,
  HEADING_SM,
  HEADING_XS,
  MAIN_COLOR,
  PADDING_Y_LG,
  PADDING_Y_MD,
  SCREEN_LG,
  SCREEN_SM,
  SCREEN_XS,
} from "../../utils/contants";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  /* Mobile layout */
  @media (max-width: ${SCREEN_XS}) {
    height: 100%;
    position: relative;
  }
`;

export const ContentContainer = styled.div`
  width: calc(65% - ${PADDING_Y_MD});
  height: 100%;
  padding-left: ${PADDING_Y_MD};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${SCREEN_LG}) {
    width: calc(55% - ${PADDING_Y_LG});
    padding-left: ${PADDING_Y_LG};
  }

  @media (max-width: ${SCREEN_XS}) {
    padding-top: 3rem;
    width: 100%;
  }
`;

export const ProblemImgContainer = styled.div`
  height: 100%;
  width: 35%;
  background-image: url(${BgImg.src});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position-x: 65%;

  @media (min-width: ${SCREEN_LG}) {
    width: calc(45% - ${PADDING_Y_LG});
  }

  @media (max-width: ${SCREEN_XS}) {
    position: absolute;
    width: 100%;
    z-index: -1;
    background-position: 50%;
  }
`;

export const TopSection = styled.section`
  padding-top: 0.1%;

  > h2 {
    margin: 0;
    font-size: ${HEADING_MD};

    @media (max-width: ${SCREEN_SM}) {
      font-size: ${HEADING_SM};
    }

    &:last-child {
      color: ${MAIN_COLOR};
    }
  }
`;

export const MidSection = styled.section`
  margin-top: 4%;

  > h3 {
    font-size: ${HEADING_SM};
    margin: 0;
    font-style: italic;

    @media (max-width: ${SCREEN_SM}) {
      font-size: ${HEADING_XS};
    }
  }

  li {
    font-size: ${FONT_MD};
    margin: 1.5rem 0;

    @media (max-width: ${SCREEN_SM}) {
      font-size: ${FONT_SM};
    }
  }
`;

export const BottomSection = styled.section`
  margin-top: 4%;

  > h3 {
    font-size: ${HEADING_SM};
    margin: 0 0 2rem 0;
    font-style: italic;

    @media (max-width: ${SCREEN_SM}) {
      font-size: ${HEADING_XS};
    }
  }

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    /* Mobile layout */
    @media (max-width: ${SCREEN_XS}) {
      flex-direction: column;
      align-items: flex-start;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #ddd;
      padding: 3%;
      border-radius: 30px;
      min-width: 190px;
      min-height: 190px;
      margin-right: 2vw;
      position: relative;

      /* Mobile layout */
      @media (max-width: ${SCREEN_XS}) {
        margin-bottom: 1.5rem;
        min-width: 0px;
        min-height: 0px;
        height: 200px;
        width: 200px;
      }

      @media (max-width: ${SCREEN_SM}) and (min-width: ${SCREEN_XS}) {
        min-width: 140px;
        min-height: 140px;
        width: 10vw;
        height: 10vw;
      }

      > span:first-child {
        position: absolute;
        top: 15%;
        color: ${MAIN_COLOR};
        font-size: ${HEADING_MD};
        font-weight: bold;
        margin-bottom: 1rem;

        @media (max-width: ${SCREEN_SM}) {
          font-size: ${HEADING_SM};
        }
      }

      > span:last-child {
        position: absolute;
        top: 45%;
        font-size: ${FONT_SM};
        text-align: center;
        padding: 0 1rem;

        @media (max-width: ${SCREEN_SM}) and (min-width: ${SCREEN_XS}) {
          font-size: ${FONT_XS};
        }
      }
    }
  }
`;
