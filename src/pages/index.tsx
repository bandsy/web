import React, { useState, useEffect } from "react";
import { useIntl, Link, changeLocale } from "gatsby-plugin-intl";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/Button";

const Home = () => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "home.title" })} />

      <h1>{intl.formatMessage({ id: "greeting" }, { name: "Ryan" })}</h1>
      <Link to={"/standard-page"}>
        <Button blue>To Standard Page</Button>
      </Link>
    </Layout>
  );
};

export default Home;
