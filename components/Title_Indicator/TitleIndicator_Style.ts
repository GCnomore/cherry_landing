import styled from "styled-components";
import { SCREEN_XS } from "../../utils/contants";

export const Container = styled.div`
  display: flex;
  width: 4rem;
  height: 0.5rem;
  background: rgb(237, 27, 87);
  background: linear-gradient(
    90deg,
    rgba(237, 27, 87, 1) 0%,
    rgba(161, 11, 54, 1) 100%
  );
  border-radius: 99px;

  @media (max-width: ${SCREEN_XS}) {
    width: 15vw;
    max-width: 5rem;
  }
`;
