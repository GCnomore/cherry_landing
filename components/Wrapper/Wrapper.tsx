import React from "react";

import * as Styled from "./Wrapper_Styled";

export default function Wrapper({ children, bgColor }) {
  return (
    <Styled.Container bgColor={bgColor}>
      <Styled.Wrapper>{children}</Styled.Wrapper>
    </Styled.Container>
  );
}
