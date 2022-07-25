import React from "react";

import { SITE_LIST } from "../../contants";
import * as Styled from "./Stores.styled";

const Home: React.FC = () => {
  const renderSites = () => {
    const sites = [];
    for (let i in SITE_LIST) {
      sites.push(
        <Styled.LogoItem
          key={`site-${SITE_LIST[i].title}`}
          href={SITE_LIST[i].url}
        >
          <div>
            <img src={SITE_LIST[i].logo} />
          </div>
          <div>{SITE_LIST[i].title}</div>
        </Styled.LogoItem>
      );
    }
    return sites;
  };

  return (
    <Styled.Container>
      <Styled.Title>
        <h1>Recommended Stores</h1>
      </Styled.Title>
      <Styled.SiteLogoContainer>{renderSites()}</Styled.SiteLogoContainer>
    </Styled.Container>
  );
};

export default Home;
