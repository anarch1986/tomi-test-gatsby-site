import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <h3>Welcome to Tomi's Test Gatsby site!</h3>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="New annihilation stage after March 7."
        src="../images/annihilation.jpeg"
      />
    </Layout>
  );
}

export default IndexPage;
