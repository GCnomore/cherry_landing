import styled, { keyframes } from "styled-components";
import {
  BG_COLOR,
  FONT_MD,
  FONT_SM,
  FONT_XS,
  HEADING_MD,
  HEADING_SM,
  MAX_WIDTH_INNER_MD,
  MAX_WIDTH_MD,
  PADDING_Y_LG,
  PADDING_Y_MD,
  SCREEN_LG,
  SCREEN_SM,
  SCREEN_XS,
} from "../../utils/contants";

export const Container = styled.main`
  width: 100%;
  height: 50vh;
  display: flex;
  margin-bottom: auto;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${MAX_WIDTH_MD}) {
    max-width: ${MAX_WIDTH_INNER_MD};
  }
`;

export const IntroContainer = styled.section`
  width: 47%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  animation-name: fadeInLeft;
  animation-duration: 1.5s;
  flex-wrap: wrap;

  > div {
    font-size: ${FONT_SM};

    @media (max-width: ${SCREEN_SM}) {
      font-size: ${FONT_XS};
    }

    > h1 {
      font-size: ${HEADING_MD};
      margin: 0 0 1rem 0;
      padding: 0;

      @media (max-width: ${SCREEN_SM}) {
        font-size: ${HEADING_SM};
      }
    }
  }
`;

export const LogoContainer = styled.section`
  width: 20rem;
  margin-bottom: 1rem;
`;

export const VideoContainer = styled.section`
  width: 47%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  animation-name: fadeIn;
  animation-duration: 1.5s;

  > div {
    width: 100%;
    height: 60%;
    background-color: grey;
  }
`;
