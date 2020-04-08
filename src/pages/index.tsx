import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import styled from "styled-components";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const Test = styled.h1`
  color: pink;
`;

const IndexPage = () => {
  const intl = useIntl();

  const [state, setState] = useState(null);

  useEffect(() => {
    fetch("https://sppd.feinwaru.com/api/v1/cards")
      .then(e => e.json())
      .then(j => setState(j.data));
  }, []);

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "title" })} />
      <h1>{intl.formatMessage({ id: "title" })}</h1>
      <Test>{intl.formatMessage({ id: "build" })}</Test>
      <p>SPPD API Total: {state?.total}</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
