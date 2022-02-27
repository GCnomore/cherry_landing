import styled from "styled-components";

import BgImg from "../../assets/images/image5.png";

export const Container = styled.div`
  margin-top: 10vh;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  > div:first-child {
    width: 100%;
    height: 20%;
    background-image: url(${BgImg.src});
    background-position: 0 40%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  > div:last-child {
    width: 100%;
    height: 80%;
  }
`;

export const TopSection = styled.section``;
export const MidSection = styled.section``;
export const BottomSection = styled.section``;
