import React, { useRef } from "react";
import { useIntl, changeLocale } from "gatsby-plugin-intl";
import { Row, Col, media } from "styled-bootstrap-grid";
import styled from "styled-components";
import ListItem from "./ListItem";
import locales from "../../locales";

const Modal = styled.div`
  background-color: white;
  max-width: 603px;
  width: 100%;
  box-shadow: -3px 0px 10px rgba(0, 0, 0, 0.16);

  opacity: 0;
  transform: translateX(60px);
  transition: all 400ms ease;
`;

const ModalContainer = styled.div<{ side: string }>`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${x => (x.side === "right" ? "flex-end" : "flex-start")};
  top: 0;
  left: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: all 250ms ease;

  &.visible {
    opacity: 1;
    pointer-events: all;

    ${Modal} {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const ModalContents = styled.div`
  max-width: 406px;
  padding: 142px 30px 30px;
  height: 100%;
`;

const SideModal = ({ visible, setVisibility, side = "right", children }) => {
  const intl = useIntl();
  const container = useRef(null);
  return (
    <ModalContainer
      ref={container}
      onClick={e => e.target === container.current && setVisibility(false)}
      className={visible && "visible"}
      side={side}
    >
      <Modal>
        <ModalContents>{children}</ModalContents>
      </Modal>
    </ModalContainer>
  );
};

export default SideModal;
