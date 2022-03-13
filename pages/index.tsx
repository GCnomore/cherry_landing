import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

const IndexPage = () => (
  <Layout title="Cherry | One-click checkout, wherever you shop">
    <HeroSection />
    <Section1 />
    <Section2 />
    <Section3 />
  </Layout>
);

export default IndexPage;
