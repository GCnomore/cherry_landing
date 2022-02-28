import styled, { keyframes } from "styled-components";
import {
  BG_COLOR,
  FONT_MD,
  FONT_SM,
  FONT_XS,
  HEADING_MD,
  HEADING_SM,
  PADDING_Y_LG,
  PADDING_Y_MD,
  SCREEN_LG,
  SCREEN_SM,
  SCREEN_XS,
} from "../../utils/contants";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${BG_COLOR};

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem ${PADDING_Y_MD} 0 ${PADDING_Y_MD};

    @media (min-width: ${SCREEN_LG}) {
      padding: 2rem ${PADDING_Y_LG} 0 ${PADDING_Y_LG};
    }

    > div:first-child {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > div:nth-child(2) {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      padding-bottom: 10rem;

      @media (max-width: ${SCREEN_XS}) {
        flex-direction: column;
      }
    }
  }
`;

export const LogoContainer = styled.section`
  width: 8rem;
`;

export const IntroContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: fadeInLeft;
  animation-duration: 1.5s;

  > div {
    font-size: ${FONT_SM};

    @media (max-width: ${SCREEN_SM}) {
      font-size: ${FONT_XS};
    }

    > h1 {
      font-size: ${HEADING_MD};
      margin: 0;
      padding: 0;

      @media (max-width: ${SCREEN_SM}) {
        font-size: ${HEADING_SM};
      }
    }
  }
`;

export const VideoContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: fadeIn;
  animation-duration: 1.5s;

  > div {
    width: 70%;
    height: 15rem;
    background-color: grey;
  }
`;
