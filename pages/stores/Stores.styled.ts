import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2rem 10%;
`;

export const Title = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 1.2rem;
  }
`;

export const SiteLogoContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
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

  > div {
    font-weight: 600;
  }
`;
