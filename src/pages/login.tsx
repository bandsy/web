import React, { useState, useEffect } from "react";
import { useIntl, Link } from "gatsby-plugin-intl";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Button from "../components/Button";
import Input from "../components/Forms/Input";

const Home = () => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "login" })} />

      <Container>
        <Row>
          <Col md={4} mdOffset={1}>
            <h3 className="line">
              {intl.formatMessage({ id: "greeting" }, { name: "Ryan" })}
            </h3>
            <Button active blue>
              {intl.formatMessage({ id: "login" })}
            </Button>
            <Button ml blue>
              {intl.formatMessage({ id: "signup" })}
            </Button>
            <Input
              type="email"
              label={intl.formatMessage({ id: "email" })}
              name="email"
            ></Input>
            <Input
              type="password"
              label={intl.formatMessage({ id: "password" })}
              name="password"
            ></Input>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
