import styled from "styled-components";

import BgImg from "../../assets/images/image4.png";
import { MAIN_COLOR, PADDING_Y } from "../../utils/contants";

export const Container = styled.div`
  margin-top: 10vh;
  height: 90vh;
  width: 100%;
  display: flex;
`;

export const ContentContainer = styled.div`
  width: calc(65% - ${PADDING_Y});
  height: 100%;
  padding-left: ${PADDING_Y};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProblemImgContainer = styled.div`
  height: 100%;
  width: 35%;
  background-image: url(${BgImg.src});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position-x: 65%;
`;

export const TopSection = styled.section`
  padding-top: 1rem;

  > h2 {
    margin: 0;
    font-size: 3rem;

    &:last-child {
      color: ${MAIN_COLOR};
    }
  }
`;

export const MidSection = styled.section`
  margin-top: 5rem;

  > h3 {
    font-size: 2rem;
    margin: 0;
    font-style: italic;
  }

  li {
    font-size: 1.5rem;
    margin: 1.5rem 0;
  }
`;

export const BottomSection = styled.section`
  margin-top: 5rem;

  > h3 {
    font-size: 2rem;
    margin: 0 0 2rem 0;
    font-style: italic;
  }

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #ddd;
      padding: 2rem;
      border-radius: 30px;
      width: 12vw;
      height: 12vw;
      max-width: 220px;
      max-height: 220px;
      margin-right: 2vw;
      position: relative;

      > span:first-child {
        position: absolute;
        top: 15%;
        color: ${MAIN_COLOR};
        font-size: 2.2rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }

      > span:last-child {
        position: absolute;
        top: 35%;
        font-size: 1.5rem;
        text-align: center;
        padding: 0 1rem;
      }
    }
  }
`;
