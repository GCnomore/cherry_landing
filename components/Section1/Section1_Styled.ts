import styled from "styled-components";

import BgImg from "../../assets/images/image4.png";
import {
  BG_COLOR,
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
  PADDING_Y_LG,
  PADDING_Y_MD,
  SCREEN_LG,
  SCREEN_MOBILE,
  SCREEN_MOBILE_SM,
  SCREEN_SM,
  SCREEN_XS,
} from "../../utils/contants";

export const Container = styled.section`
  width: 100%;
  display: flex;

  /* Mobile layout */
  @media (max-width: ${SCREEN_MOBILE}) {
    height: auto;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  position: relative;
  z-index: 2;
`;

export const BackLogo = styled.div`
  position: absolute;
  top: 0rem;
  left: 50%;
  transform: translateX(-50%);
  width: 20rem;
  filter: drop-shadow(0px 0px 8px black) contrast(0.9) opacity(0.3);
  z-index: -1;

  /* Mobile layout */
  @media (max-width: ${SCREEN_XS}) {
    left: 50%;
    transform: translateX(-50%);
    width: 50vw;
  }
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;

  > h2 {
    margin: 0;
    font-size: ${HEADING_XS};
    font-weight: 300;

    @media (max-width: ${SCREEN_SM}) {
      font-size: ${HEADING_SM};
    }

    @media (max-width: ${SCREEN_MOBILE_SM}) {
      font-size: ${HEADING_XS};
    }
  }

  > div {
    &:last-child {
      > h2:last-child {
        color: white;
        margin: 0;
        font-size: ${HEADING_XL};
        font-weight: 600;
      }
    }
  }
`;

export const MidSection = styled.section`
  display: flex;
  margin-top: 4%;

  > h3 {
    font-size: ${HEADING_SM};
    margin: 0;
    font-style: italic;

    @media (max-width: ${SCREEN_SM}) {
      font-size: ${HEADING_XS};
    }
  }

  ul {
    padding: 0;
    display: flex;

    @media (max-width: ${SCREEN_MOBILE}) {
      flex-direction: column;
      padding: 0 20vw;
    }

    > div {
      width: 100%;
      height: 100%;
      margin: 0 1rem;
      border-radius: 10px;
      box-shadow: 2px 3px 4px 3px rgb(0 0 0 / 10%);
      background-color: #ffffff1f;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: ${SCREEN_MOBILE}) {
        margin: 2rem 0;
      }
    }
  }

  li {
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style: none;
    margin: 1.5rem 2rem;
    font-size: ${FONT_SIZE_SM};
    text-align: center;

    @media (max-width: ${SCREEN_SM}) {
      font-size: ${FONT_SIZE_SM};
    }

    @media (max-width: ${SCREEN_XS}) {
      font-size: ${FONT_SIZE_XS};
    }
  }
`;

export const ImageContainer = styled.span`
  width: 15rem;

  @media (max-width: ${SCREEN_SM}) {
    width: 12rem;
  }

  @media (max-width: ${SCREEN_XS}) {
    width: 9rem;
  }
`;
