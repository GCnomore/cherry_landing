import React from "react";

import * as Styled from "./Wrapper_Styled";

interface WrapperProps {
  children: React.ReactNode;
  bgColor?: string;
  bgImg?: string;
}

export default function Wrapper({ children, bgColor, bgImg }: WrapperProps) {
  return (
    <Styled.Container bgColor={bgColor} bgImg={bgImg}>
      <Styled.Wrapper>{children}</Styled.Wrapper>
    </Styled.Container>
  );
}
