import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  padding: 2rem 10%;
`;

export const SiteLogoContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100%;
  justify-content: space-between;
`;

export const LogoItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 10rem;
  text-decoration: none;
  color: black;

  > div:first-child {
    display: flex;
    height: 70%;
    justify-content: center;
    align-items: center;
    > img {
      width: 100%;
    }
  }
`;
