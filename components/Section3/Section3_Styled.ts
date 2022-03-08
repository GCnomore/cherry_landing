import styled from "styled-components";
import {
  FILTER_SHADOW,
  FONT_SIZE_XS,
  HEADING_XL,
  HEADING_XS,
  MAIN_COLOR,
  PADDING_INNER_MOBILE,
  SECTION_PADDING,
} from "../../utils/contants";

export const Container = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${SECTION_PADDING};
  background-image: linear-gradient(180deg, ${MAIN_COLOR} 0%, #4158d0 80%);
`;

export const ContentContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-top: -10vh;

  > h2 {
    font-size: ${HEADING_XL};
    filter: ${FILTER_SHADOW};
    margin: 0;
  }
`;

export const ContentImg = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  > img:nth-child(1) {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  > img:nth-child(2) {
    position: absolute;
    top: 10.4rem;
    left: 50%;
    transform: translateX(-47%);
    width: 26.5rem;
  }

  > span {
    position: absolute;
    width: 15rem;
    top: 14.5rem;
    left: 50%;
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    transform: translateX(-46%);
    z-index: 10;
    background-color: #f3f3f3;
  }
`;

export const Features = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: ${PADDING_INNER_MOBILE};

  > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 20rem;
    margin: 2rem 1rem;
    background-color: #ffffff2b;
    text-align: center;
    border-radius: 10px;

    > h3 {
      font-size: ${HEADING_XS};
    }

    > p {
      font-size: ${FONT_SIZE_XS};
      padding: 0 2rem;
    }
  }
`;
