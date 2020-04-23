import React from "react";
import styled from "styled-components";
import { media, Container, Row, Col } from "styled-bootstrap-grid";
import BackgroundWedge from "../components/shared/BackgroundWedge";
import CirclePattern from "../components/shared/CirclePattern";

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

interface props {
  pretitle?: string;
  title: string;
  subtitle?: string;
  introduction?: string;
  image?: string;
  imageAlt?: string;
  children: React.ReactElement | React.ReactElement[];
}

const StandardLayout = (props: props) => {
  return (
    <>
      <BackgroundWedge top={-410} />
      <Container>
        <Row>
          <Col lg={7} xl={6}>
            <Body>
              {props.pretitle && <h3 className="line">{props.pretitle}</h3>}
              <h1>{props.title}</h1>
              {props.subtitle && <h4 className="pink">{props.subtitle}</h4>}
              {props.introduction && <h4>{props.introduction}</h4>}
              {props.children}
            </Body>
          </Col>
          <Col xlOffset={1} lg={5}>
            {props.image && (
              <ImageContainer>
                <CirclePattern />
                <img
                  src={props.image}
                  alt={props.imageAlt ? props.imageAlt : ""}
                />
              </ImageContainer>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StandardLayout;
