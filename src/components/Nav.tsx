import { h } from "preact";
import { Container, Row, Col } from "styled-bootstrap-grid";
import styled from "styled-components";
import Button from "./Button";

const NavBar = styled.div`
  padding: 30px 0;
`;

const Nav = (): h.JSX.Element => {
  return (
    <NavBar>
      <Container>
        <Row alignItems="center" justifyContent="between">
          <Col col="auto">
            <img
              src={require("../assets/img/branding/logo-text.svg")}
              alt="Bandsy"
              style={{ height: "47px" }}
            />
          </Col>
          <Col col="auto">
            <Button>English (United Kingdom)</Button>
            <Button>Login</Button>
            <Button pink ml>
              Sign up
            </Button>
          </Col>
        </Row>
      </Container>
    </NavBar>
  );
};

export default Nav;
