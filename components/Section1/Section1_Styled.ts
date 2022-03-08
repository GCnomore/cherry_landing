import styled from "styled-components";

import BgImg from "../../assets/images/image4.png";
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
  PADDING_Y_LG,
  PADDING_Y_MD,
  SCREEN_LG,
  SCREEN_MOBILE,
  SCREEN_MOBILE_SM,
  SCREEN_SM,
  SCREEN_XS,
  SECTION_PADDING,
} from "../../utils/contants";

export const BG = styled.div`
  height: 124vh;
  width: 200vw;
  position: absolute;
  margin-left: 10vw;
  margin-top: -12vw;
  transform: rotateZ(-5deg);
  background-image: radial-gradient(
    circle farthest-corner at 10.2% 55.8%,
    rgba(252, 37, 103, 1) 0%,
    rgba(250, 38, 151, 1) 46.2%,
    rgba(186, 8, 181, 1) 90.1%
  );
  /* background-image: linear-gradient(
    90deg,
    ${MAIN_COLOR} 20%,
    #ffe2ea 50%,
    ${MAIN_COLOR} 100%
  ); */
  border: 5px white solid;
  /* background-image: radial-gradient(
    circle farthest-corner at 50.4% 50.5%,
    #ffe2ea 0%,
    ${MAIN_COLOR} 80%
  ); */
  background-color: white;
`;

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${SECTION_PADDING};
  display: flex;
  justify-content: center;
  /* background-image: linear-gradient(180deg, #f1008a 0%, ${MAIN_COLOR} 100%); */

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
  /* flex-direction: row-reverse; */
  justify-content: space-between;
  flex-direction: column;
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
  filter: ${FILTER_SHADOW};

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
    &:nth-child(2) {
      > h2:last-child {
        color: white;
        margin: 0;
        font-size: ${HEADING_XL};
        font-weight: 600;
      }
    }
  }
`;

export const TitleImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  transform: translateX(-20%);
  > img {
    width: 100%;
  }
`;

export const Contents = styled.div`
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
    justify-content: center;
    flex-direction: column;
    flex: 1;

    @media (max-width: ${SCREEN_MOBILE}) {
      flex-direction: column;
      padding: 0 20vw;
    }

    > div {
      width: 100%;
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
    padding: 0 7rem;
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
  width: 5rem;
  @media (max-width: ${SCREEN_SM}) {
    width: 12rem;
  }

  @media (max-width: ${SCREEN_XS}) {
    width: 9rem;
  }

  > img {
    width: 100%;
    filter: ${FILTER_SHADOW};
  }
`;
