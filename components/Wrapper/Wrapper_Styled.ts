import styled, { css } from "styled-components";
import {
  MAX_WIDTH_LG,
  MAX_WIDTH_MD,
  MAX_WIDTH_MOBILE,
  MAX_WIDTH_MOBILE_SM,
  PADDING_MD,
  PADDING_SM,
  SCREEN_MOBILE,
  SCREEN_MOBILE_SM,
  SCREEN_XS,
} from "../../utils/contants";

export const Container = styled.div<{ bgColor?: string; bgImg?: string }>`
  display: flex;
  position: relative;
  /* overflow-x: hidden; */
  /* overflow-y: auto; */
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
  background-image: ${({ bgImg }) => bgImg};
`;

export const Wrapper = styled.div`
  max-width: ${MAX_WIDTH_LG};
  padding: ${PADDING_MD};
  margin-left: auto;
  margin-right: auto;
  height: 100%;

  @media (max-width: ${SCREEN_XS}) {
    max-width: ${MAX_WIDTH_MD};
  }

  @media (max-width: ${SCREEN_MOBILE}) {
    max-width: ${MAX_WIDTH_MOBILE};
    padding: ${PADDING_SM};
  }

  @media (max-width: ${SCREEN_MOBILE_SM}) {
    width: 100%;
    padding: 0;
  }
`;
