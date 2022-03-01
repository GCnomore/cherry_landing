import styled from "styled-components";
import {
  MAX_WIDTH_LG,
  MAX_WIDTH_MD,
  MAX_WIDTH_MOBILE,
  PADDING_MD,
  PADDING_SM,
  SCREEN_MOBILE,
  SCREEN_XS,
} from "../../utils/contants";

export const Container = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
`;

export const Wrapper = styled.div`
  max-width: ${MAX_WIDTH_LG};
  padding: ${PADDING_MD};
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${SCREEN_XS}) {
    max-width: ${MAX_WIDTH_MD};
  }

  @media (max-width: ${SCREEN_MOBILE}) {
    max-width: ${MAX_WIDTH_MOBILE};
    padding: ${PADDING_SM};
  }
`;
