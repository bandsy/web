import React, { useState } from "react";
import { useIntl, Link } from "gatsby-plugin-intl";
import { Container, Row, Col } from "styled-bootstrap-grid";
import styled from "styled-components";
import Button from "./Button";
import LanguagePicker from "./LanguagePicker";

const NavBar = styled.div`
  padding: 30px 0;
`;

interface props {
  siteTitle: string;
}

const Header = ({ siteTitle = "bandsy" }: props) => {
  const intl = useIntl();
  const [languagePicker, setLanguagePicker] = useState(false);
  return (
    <NavBar>
      <Container>
        <Row alignItems="center" justifyContent="between">
          <Col col="auto">
            <Link to="/">
              <img
                src={require("../images/branding/text.svg")}
                alt={siteTitle}
                style={{ height: "47px" }}
              />
            </Link>
          </Col>
          <Col col="auto">
            <Button onClick={() => setLanguagePicker(true)}>
              {intl.formatMessage({ id: "language" })}
            </Button>
            <Link to="/login">
              <Button ml>{intl.formatMessage({ id: "login" })}</Button>
            </Link>
            <Button pink ml>
              {intl.formatMessage({ id: "signup" })}
            </Button>
          </Col>
        </Row>
      </Container>

      <LanguagePicker
        visible={languagePicker}
        setVisibility={setLanguagePicker}
      />
    </NavBar>
  );
};

export default Header;
