import styled from "styled-components";
import {
  FONT_SIZE_MOBILE,
  FONT_SIZE_SM,
  FONT_SIZE_XS,
  HEADING_MD,
  HEADING_SM,
  MAX_WIDTH_INNER_MD,
  MAX_WIDTH_MD,
  MAX_WIDTH_MOBILE,
  MAX_WIDTH_MOBILE_SM,
  PADDING_INNER_MOBILE,
  TITLE_FONT_SIZE_MOBILE,
  TITLE_FONT_SIZE_MOBILE_SM,
} from "../../utils/contants";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    margin-top: 10rem;
  }

  @media (max-width: ${MAX_WIDTH_MD}) {
    max-width: ${MAX_WIDTH_INNER_MD};
  }

  @media (max-width: ${MAX_WIDTH_MOBILE}) {
    padding: ${PADDING_INNER_MOBILE};
    flex-direction: column;
    align-items: center;
    width: auto;
  }
`;

export const MenuContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: space-between;
    > span {
      margin-left: 2rem;
    }
  }

  > div:first-child {
    width: 5rem;
    margin-bottom: 2rem;
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

  @media (max-width: ${MAX_WIDTH_MOBILE}) {
    align-items: center;
    text-align: center;
    width: 80%;
  }

  > div {
    font-size: ${FONT_SIZE_SM};

    @media (max-width: ${MAX_WIDTH_MD}) {
      font-size: ${FONT_SIZE_XS};
    }

    @media (max-width: ${MAX_WIDTH_MOBILE}) {
      font-size: ${FONT_SIZE_MOBILE};
    }

    > h1 {
      font-size: ${HEADING_MD};
      margin: 0 0 1rem 0;
      padding: 0;

      @media (max-width: ${MAX_WIDTH_MD}) {
        font-size: ${HEADING_SM};
      }

      @media (max-width: ${MAX_WIDTH_MOBILE}) {
        font-size: ${TITLE_FONT_SIZE_MOBILE};
      }

      @media (max-width: ${MAX_WIDTH_MOBILE_SM}) {
        font-size: ${TITLE_FONT_SIZE_MOBILE_SM};
      }
    }
  }
`;

export const LogoContainer = styled.section`
  width: 20rem;
  margin-bottom: 1rem;

  @media (max-width: ${MAX_WIDTH_MD}) {
    width: 15rem;
  }

  @media (max-width: ${MAX_WIDTH_MOBILE}) {
    width: 10rem;
  }
`;

export const VideoContainer = styled.section`
  width: 47%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  animation-name: fadeIn;
  animation-duration: 1.5s;

  > div {
    width: 100%;
    height: 100%;
    background-color: grey;
  }
`;

export const BgImage = styled.div`
  position: absolute;
  width: 35rem;
  right: 0;
  top: 150%;
`;
