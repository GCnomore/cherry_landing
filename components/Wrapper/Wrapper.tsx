import React from "react";

import * as Styled from "./Wrapper_Styled";

interface WrapperProps {
  children: React.ReactNode;
  bgColor?: string;
}

export default function Wrapper({ children, bgColor }: WrapperProps) {
  return (
    <Styled.Container bgColor={bgColor}>
      <Styled.Wrapper>{children}</Styled.Wrapper>
    </Styled.Container>
  );
}
