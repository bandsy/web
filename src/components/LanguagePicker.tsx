import React, { useRef } from "react";
import { useIntl, changeLocale } from "gatsby-plugin-intl";
import { Row, Col, media } from "styled-bootstrap-grid";
import styled from "styled-components";
import ListItem from "./shared/ListItem";
import locales from "../locales";

const Modal = styled.div`
  ${media.lg`
    padding: 60px 120px;
  `}
  padding: 30px;
  border-radius: 5px;
  background-color: ${(x: any) => x.theme.white};
  max-width: 962px;
  width: 100%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
  margin-left: 15px;
  margin-right: 15px;

  opacity: 0;
  transform: translateY(30px);
  transition: all 400ms ease;
`;

const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: all 250ms ease;

  &.visible {
    opacity: 1;
    pointer-events: all;

    ${Modal} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const LanguagePicker = ({ visible, setVisibility }) => {
  const intl = useIntl();
  const container = useRef(null);
  return (
    <ModalContainer
      ref={container}
      onClick={e => e.target === container.current && setVisibility(false)}
      className={visible && "visible"}
    >
      <Modal>
        <h3 className="line">
          {intl.formatMessage({ id: "languagePicker.title" })}
        </h3>
        <Row>
          {locales.map(e => (
            <Col key={e.lang} col={12} md={6}>
              <ListItem
                active={intl.locale === e.lang}
                onClick={() => changeLocale(e.lang)}
              >
                {e.displayName}
              </ListItem>
            </Col>
          ))}
        </Row>
      </Modal>
    </ModalContainer>
  );
};

export default LanguagePicker;
