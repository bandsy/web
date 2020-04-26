import React, { useState, useEffect } from "react";
import { useIntl, Link } from "gatsby-plugin-intl";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import Button from "../components/shared/Button";
import Input from "../components/shared/forms/Input";
import BackgroundWedge from "../components/shared/BackgroundWedge";
import { useAuth, userStatus } from "../auth/useAuth";
import CirclePattern from "../components/shared/CirclePattern";

const Image = styled.img`
  width: 100%;
  height: 455px;
  border-radius: 5px;
  object-fit: cover;
`;

const LoginPattern = styled.div`
  position: absolute;
  top: -56px;
  left: 56px;

  svg {
    width: 341px;
    height: 112px;
  }
`;

const NewRow = styled(Row)`
  margin-top: 100px;

  ${Button} {
    margin-bottom: 30px;
  }

  form {
    ${media.md`
      margin-left: -15px;
      margin-right: -15px;
    `}
    div {
      margin-bottom: 15px;
    }
  }
`;

const Signup = () => {
  const intl = useIntl();

  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const renderBody = () => {
    if (auth.user?.status === userStatus.VERIFICATION_NEEDED) {
      return (
        <>
          <h3 className="line">
            {intl.formatMessage({ id: "verification.verifyYourAccount" })}
          </h3>
          <p>{intl.formatMessage({ id: "verification.checkEmail" })}</p>
          <p>{intl.formatMessage({ id: "verification.recieveSoon" })}</p>
          <Button blue>
            {intl.formatMessage({ id: "verification.resendEmail" })}
          </Button>
        </>
      );
    }
    return (
      <>
        <h3 className="line">{intl.formatMessage({ id: "login/signup" })}</h3>
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
        </form>
      </>
    );
  };

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "login" })} />
      <BackgroundWedge top={0} left="calc(50% + 120px)" />
      <Container>
        <NewRow alignItems="center">
          <Col md={6} lg={5} xl={4} xlOffset={1}>
            {renderBody()}
          </Col>
          <Col hiddenMdDown md={6} lgOffset={1}>
            <LoginPattern>
              <CirclePattern />
            </LoginPattern>
            <Image src={require("../images/login.jpg")} />
          </Col>
        </NewRow>
      </Container>
    </Layout>
  );
};

export default Signup;
