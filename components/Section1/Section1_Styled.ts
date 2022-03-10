import styled, { StyledComponent } from "styled-components";
import {
  Col,
  Container,
  ContainerProps,
  Image,
  Row,
  RowProps,
} from "react-bootstrap";

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
  SCREEN_MD,
  SCREEN_MOBILE,
  SCREEN_MOBILE_SM,
  SCREEN_SM,
  SCREEN_XS,
  SECTION_PADDING,
} from "../../utils/contants";
import { BsPrefixRefForwardingComponent } from "react-bootstrap/esm/helpers";

export const Wrapper = styled(Container)`
  background-image: linear-gradient(
    90deg,
    ${MAIN_COLOR} 10%,
    #f765b8 45%,
    #f765b8 55%,
    ${MAIN_COLOR} 90%
  );
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  width: 100%;
  padding: ${SECTION_PADDING};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${SCREEN_MOBILE}) {
    height: auto;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TitleContainer = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  filter: ${FILTER_SHADOW};
`;

export const Heading1 = styled.h2`
  margin: 0;
  font-size: ${HEADING_XS};
  font-weight: 300;
  text-align: center;

  @media (max-width: ${SCREEN_SM}) {
    font-size: ${HEADING_XS};
  }

  @media (max-width: ${SCREEN_MOBILE_SM}) {
    font-size: ${HEADING_XS};
  }
`;

export const Heading2 = styled.h2`
  color: white;
  margin: 0;
  font-size: ${HEADING_XL};
  font-weight: 600;
  text-align: center;

  @media (max-width: ${SCREEN_SM}) {
    font-size: ${HEADING_MD};
  }

  @media (max-width: ${SCREEN_XS}) {
    font-size: ${HEADING_SM};
  }
`;

export const ContentContainer = styled(Row)`
  height: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin-top: 10rem;

  @media (max-width: ${SCREEN_MD}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20vw;
  }
`;

export const Contents = styled(Col)`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1.5rem 2rem;
  font-size: ${FONT_SIZE_SM};
  text-align: center;

  > span {
    margin-top: 2rem;
  }

  @media (max-width: ${SCREEN_MD}) {
    /* width: 100%; */
    margin: 0;
    margin-bottom: 5rem;
  }

  @media (max-width: ${SCREEN_SM}) {
    font-size: ${FONT_SIZE_SM};
  }

  @media (max-width: ${SCREEN_XS}) {
    font-size: ${FONT_SIZE_XS};
  }
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

export const TitleImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  transform: translateX(-10%);
  > img {
    width: 90%;
  }
`;
