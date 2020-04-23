import React, { useState, useEffect } from "react";
import { useIntl, Link } from "gatsby-plugin-intl";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Button from "../components/shared/Button";
import Input from "../components/shared/forms/Input";
import { useAuth } from "../auth/useAuth";

const Signup = () => {
  const intl = useIntl();

  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "login" })} />

      <Container>
        <Row>
          <Col md={4} mdOffset={1}>
            <h3 className="line">
              {intl.formatMessage({ id: "login/signup" })}
            </h3>
            <Link to="/login">
              <Button blue>{intl.formatMessage({ id: "login" })}</Button>
            </Link>
            <Button ml active blue>
              {intl.formatMessage({ id: "signup" })}
            </Button>
            <form
              onSubmit={e => {
                e.preventDefault();
                auth.register(email, password);
              }}
            >
              <Input
                type="email"
                label={intl.formatMessage({ id: "email" })}
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              ></Input>
              <Input
                type="password"
                label={intl.formatMessage({ id: "password" })}
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              ></Input>
              <Button blue role="submit">
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
