import styled from "styled-components";
import {
  FILTER_SHADOW,
  FONT_SIZE_XS,
  HEADING_XL,
  HEADING_XS,
  PADDING_INNER_MOBILE,
  SECTION_PADDING,
} from "../../utils/contants";

export const Container = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${SECTION_PADDING};
`;

export const TitleContainer = styled.div`
  > h2 {
    font-size: ${HEADING_XL};
    filter: ${FILTER_SHADOW};
    margin: 0;
  }
`;

export const Features = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: ${PADDING_INNER_MOBILE};

  > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20rem;
    padding: 0 2rem;
    margin: 0 1rem;
    background-color: #ffffff2b;
    text-align: center;
    border-radius: 10px;

    > h3 {
      font-size: ${HEADING_XS};
    }

    > p {
      font-size: ${FONT_SIZE_XS};
    }
  }
`;
