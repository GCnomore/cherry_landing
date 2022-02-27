import Link from "next/link";
import Header from "../components/Header/Header";
import Layout from "../components/Layout";
import Section1 from "../components/Section1/Section1";
import Section2 from "../components/Section2/Section2";

const IndexPage = () => (
  <Layout title="Cherry | One-click checkout, wherever you shop">
    <Header />
    <Section1 />
    <Section2 />
  </Layout>
);

export default IndexPage;
