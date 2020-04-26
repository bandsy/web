import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SidebarLayout from "../layouts/Sidebar";

const Home = () => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "home.title" })}
        path="settings-page"
      />
      <SidebarLayout></SidebarLayout>
    </Layout>
  );
};

export default Home;
