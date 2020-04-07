import { h } from "preact";
import { Container, Row, Col } from "styled-bootstrap-grid";
import styled from "styled-components";

const Test = styled.h1`
  color: ${(props): any => props.theme.darkpink};
`;

const Home = (): h.JSX.Element => {
  return (
    <Container>
      <Row>
        <Col xxl={12}>
          <Test>Test</Test>
          <p>This is the Home component.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
