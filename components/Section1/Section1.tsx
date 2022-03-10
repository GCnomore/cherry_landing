import React from "react";

import FadeInDown from "../FadeInDown/FadeInDown";

import LogoWhite from "../../public/icons/logo_icon_white.png";

import * as Styled from "./Section1_Styled";
import Wrapper from "../Wrapper/Wrapper";
import { Col, Container, Image, Row } from "react-bootstrap";

export default function Section1() {
  return (
    <Styled.Wrapper fluid as="section">
      <Wrapper>
        <Styled.TitleContainer>
          <FadeInDown delay={0.5}>
            <Col>
              <Styled.Heading1>Mobile shopping is great, but</Styled.Heading1>
            </Col>
          </FadeInDown>
          <FadeInDown delay={0.5}>
            <Col>
              <Styled.Heading2>Checkout is frustrating</Styled.Heading2>
            </Col>
          </FadeInDown>
        </Styled.TitleContainer>
        <Styled.ContentContainer>
          <Styled.Contents lg="3" md="2" xs="8">
            <Image src="/icons/not-equal.svg" width={"100%"} />
            <span>Each store’s checkout experience is different</span>
          </Styled.Contents>
          <Styled.Contents lg="3" md="2" xs="8">
            <Image src="/icons/block-maze.svg" width={"100%"} />
            <span>The checkout process isn’t always customer friendly</span>
          </Styled.Contents>
          <Styled.Contents lg="3" md="2" xs="8">
            <Image src="/icons/infinity.svg" width={"100%"} />
            <span>
              You have to enter personal information over and over again
            </span>
          </Styled.Contents>
        </Styled.ContentContainer>
      </Wrapper>
    </Styled.Wrapper>
  );
}
