import styled from "styled-components";

import BgImg from "../../assets/images/image5.png";
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
  flex-direction: column;

  /* Mobile layout */
  @media (max-width: ${SCREEN_XS}) {
    height: 100%;
  }

  > div:first-child {
    width: 100%;
    height: 20rem;
    background-image: url(${BgImg.src});
    background-position: 0 40%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  > div:last-child {
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 ${PADDING_Y_MD};

    @media (min-width: ${SCREEN_LG}) {
      padding: 0 ${PADDING_Y_LG};
    }
  }
`;

export const TopSection = styled.section`
  padding-top: 3rem;

  > h2 {
    margin: 0;
    font-size: ${HEADING_MD};

    @media (max-width: ${SCREEN_SM}) {
      font-size: ${HEADING_SM};
    }
  }
`;

export const MidSection = styled.section`
  margin-top: 5rem;
  font-size: ${FONT_MD};

  @media (max-width: ${SCREEN_SM}) {
    font-size: ${FONT_SM};
  }

  > span {
    font-weight: bold;
  }
`;

export const BottomSection = styled.section`
  display: flex;
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  padding: 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    /* Mobile layout */
    @media (max-width: ${SCREEN_XS}) {
      flex-direction: column;
      justify-content: space-between;
      margin-top: 50px;
    }

    > div {
      width: 25%;
      height: 35%;
      min-width: 200px;
      min-height: 210px;
      max-height: 210px;
      border-radius: 20px;
      background-color: #ddd;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding: 0 2rem;

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

      > span:first-child {
        position: absolute;
        top: -50px;
        width: 100px;
        height: 100px;

        @media (max-width: ${SCREEN_SM}) {
          width: 80px;
          height: 80px;
          top: -40px;
        }
      }

      > span:nth-child(2) {
        width: 100%;
        height: 100%;
        color: ${MAIN_COLOR};
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10%;
        font-size: ${HEADING_SM};
        font-weight: bold;

        @media (max-width: ${SCREEN_SM}) {
          font-size: ${HEADING_XS};
        }
      }

      > span:nth-child(3) {
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: ${FONT_SM};

        @media (max-width: ${SCREEN_SM}) {
          font-size: ${FONT_XS};
        }
      }
    }
  }
`;
