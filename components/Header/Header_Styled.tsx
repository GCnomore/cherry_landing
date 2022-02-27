import styled from "styled-components";
import { PADDING_Y } from "../../utils/contants";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  background-color: #343434;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem ${PADDING_Y} 0 ${PADDING_Y};

    > div:first-child {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > div:nth-child(2) {
      width: 100%;
      display: flex;
      margin-top: 10rem;
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

  > div {
    > h1 {
      font-size: 2rem;
      margin: 0;
      padding: 0;
    }
  }
`;

export const VideoContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 35rem;
    height: 25rem;
    background-color: grey;
  }
`;
