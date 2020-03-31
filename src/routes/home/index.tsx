import { FunctionalComponent, h } from "preact";
import { Container, Row, Col } from "styled-bootstrap-grid";
import styled from "styled-components";

const Test = styled.h1`
  color: ${props => props.theme.darkpink};
`;

const Home: FunctionalComponent = () => {
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
