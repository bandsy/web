import React from "react";
import styled from "styled-components";
import { media, Container, Row, Col } from "styled-bootstrap-grid";
import BackgroundWedge from "../components/shared/BackgroundWedge";
import CirclePattern from "../components/shared/CirclePattern";
import ListItem from "../components/shared/ListItem";

const Body = styled.div`
  margin-top: 80px;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${(x: any) => x.theme.white};
  box-shadow: -3px 0px 10px rgba(0, 0, 0, 0.16);
  max-width: 100%;
  ${media.lg`
  min-width: 414px;
  width: calc(391px + ((100vw - 1480px) / 2));
  `}
`;

const SidebarContents = styled.div`
  margin-left: auto;
  max-width: 414px;
  padding: 350px 0 0px;
  height: 100%;
`;

const SidebarOverflowContent = styled.div`
  overflow-y: auto;
  overflow-x: visible;
  padding: 0 30px;
  height: 100%;
`;

interface props {}

const SidebarLayout = (props: props) => {
  return (
    <>
      <Sidebar>
        <SidebarContents>
          <SidebarOverflowContent>
            <Row>
              <Col col={12}>
                <ListItem>test</ListItem>
              </Col>
            </Row>
          </SidebarOverflowContent>
        </SidebarContents>
      </Sidebar>
      <Container>
        <Row>
          <Col xlOffset={4} xl={6}>
            <Body>
              <h1>Account Settings</h1>
            </Body>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SidebarLayout;
