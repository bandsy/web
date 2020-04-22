import React, { useState, useEffect, useReducer, useContext } from "react";
import { useIntl, Link, changeLocale } from "gatsby-plugin-intl";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/Button";
import BackgroundWedge from "../components/BackgroundWedge";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import CirclePattern from "../components/CirclePattern";
import ImageWedge from "../components/ImageWedge";

const Body = styled.div`
  margin-top: 80px;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-top: 40px;

  svg:first-of-type {
    position: absolute;
    top: -40px;
    left: -62px;
    z-index: -1;
    width: 341px;
    height: 134px;
  }

  svg:last-of-type {
    max-width: 821px;
    width: 100%;
    height: 100%;

    ${media.xl`
      width: calc(821px - ((1920px - 100vw) / 2));
  `}
  }
`;

const StartSearching = styled.p`
  font-weight: 700;
  color: ${(x: any) => x.theme.darkpink};
  margin-left: 30px;
  margin-bottom: 0;

  svg {
    height: 20px;
    margin-left: 13px;
    transform: translateY(4px);
    path {
      fill: ${(x: any) => x.theme.darkpink};
    }
  }
`;

const Home = () => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "home.title" })} />
      <BackgroundWedge top={0} />
      <Container>
        <Row>
          <Col lg={7}>
            <Body>
              <h3 className="line">
                {intl.formatMessage({ id: "home.pretitle" })}
              </h3>
              <h1>
                {intl.formatMessage({ id: "home.slogan-pt1" })}
                <br />
                {intl.formatMessage({ id: "home.slogan-pt2" })}
              </h1>
              <h4 className="grey" style={{ maxWidth: "570px" }}>
                {intl.formatMessage({ id: "home.subtitle" })}
              </h4>
              <h4 className="marine">
                {intl.formatMessage({ id: "home.bannerCTA" })}
              </h4>
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                <Button blue active>
                  {intl.formatMessage({ id: "home.signupForFree" })}
                </Button>
                <StartSearching>
                  {intl.formatMessage({ id: "home.orStartSearching" })}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </StartSearching>
              </div>
            </Body>
          </Col>
          <Col lg={5}>
            <ImageContainer>
              <CirclePattern />
              <ImageWedge image={require("../images/homepage-banner.jpg")} />
            </ImageContainer>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
