import React, { useState, useEffect } from "react";
import { useIntl, Link, changeLocale } from "gatsby-plugin-intl";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import BackgroundWedge from "../components/BackgroundWedge";
import CirclePattern from "../components/CirclePattern";

const Body = styled.div`
  margin-top: 80px;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-top: 20px;

  svg {
    position: absolute;
    top: -15px;
    left: -65px;
    z-index: -1;
    width: 341px;
    height: 134px;
  }

  img {
    border-radius: 5px;
    max-width: 821px;
    width: 100%;
    height: 100%;
    min-height: 600px;
    object-fit: cover;

    ${media.xl`
    width: calc(821px - ((1920px - 100vw) / 2));
    `}
  }
`;

const Home = () => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "home.title" })} />
      <BackgroundWedge top={-350} />
      <Container>
        <Row>
          <Col lg={7} xl={6}>
            <Body>
              <h3 className="line">Pretitle</h3>
              <h1>This is a standard page title</h1>
              <h4 className="pink">12 July 2020</h4>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
                nisi in justo pharetra elementum. Proin semper vitae elit vitae
                suscipit. Nulla sed vulputate purus.
              </h4>
              <p>
                Maecenas vehicula bibendum nunc, ac mattis purus condimentum
                eget. Morbi faucibus sollicitudin rutrum. Suspendisse cursus
                velit non sapien feugiat, eget finibus lacus convallis. Sed
                posuere, felis quis euismod cursus, dolor purus sagittis sapien,
                ut hendrerit diam ipsum et mi. Sed commodo auctor massa, sed
                malesuada nisi commodo nec.{" "}
                <b>Etiam pharetra ante id venenatis pulvinar</b>. Integer ut
                posuere sem. Ut vestibulum, metus vel mattis vulputate, dolor
                urna rhoncus turpis, ac faucibus arcu leo non mi.
              </p>
              <p>
                Aliquam sed imperdiet mauris. Cras dapibus orci nec orci
                pellentesque, gravida feugiat neque commodo.{" "}
                <a href="#">Nullam in enim sagittis</a>, finibus purus ac,
                aliquam sem. Vestibulum tempus, nibh eu cursus consectetur,
                ipsum metus pharetra purus, vel malesuada magna dolor ac arcu.
                Curabitur non libero id tellus eleifend elementum id non libero.
                Pellentesque ullamcorper egestas sapien eu semper. Phasellus et
                vulputate elit, vel pharetra neque.
              </p>
              <p>
                Vivamus ultricies, tortor sit amet ornare luctus, ante est
                ullamcorper eros, quis lacinia est magna at sem. Suspendisse
                quis pretium sapien. Proin tempus a magna sit amet imperdiet.
                Phasellus blandit imperdiet lacus, vel pharetra ligula euismod
                ac. Fusce convallis mi ac pharetra tincidunt. Nam volutpat
                lacinia sodales. In non mi odio. Donec nec arcu et turpis
                imperdiet luctus vel id nisi. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas.
              </p>
              <p>
                Vivamus fringilla pulvinar justo. Mauris malesuada facilisis
                mauris quis pharetra. Suspendisse congue ipsum varius risus
                eleifend elementum. Aliquam odio metus, volutpat vel sem ut,
                consequat tempus turpis. Suspendisse consequat nunc sed
                sollicitudin imperdiet. Cras sit amet tortor est. Aenean sed
                malesuada nulla. Pellentesque nec ligula at sem vestibulum
                eleifend. Phasellus nibh purus, porttitor quis venenatis eu,
                feugiat eu sem. Ut vitae massa diam. Pellentesque feugiat a mi
                nec vestibulum. In porta, dui a fringilla tempus, purus odio
                consectetur neque, sit amet placerat metus sem at quam. Sed a
                finibus ex, et feugiat risus. Sed neque ex, ullamcorper eget
                ultrices id, sodales sed lacus. Duis a sem ac nisi hendrerit
                varius. Nullam non quam felis.
              </p>
            </Body>
          </Col>
          <Col xlOffset={1} lg={5}>
            <ImageContainer>
              <CirclePattern />
              <img src="https://images.pexels.com/photos/633881/mouse-trap-cheese-device-trap-633881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </ImageContainer>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
