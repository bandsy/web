import React, { useRef } from "react";
import { media } from "styled-bootstrap-grid";
import styled from "styled-components";

const Modal = styled.div`
  background-color: ${(x: any) => x.theme.white};
  box-shadow: -3px 0px 10px rgba(0, 0, 0, 0.16);

  opacity: 0;
  transform: translateX(60px);
  transition: opacity 250ms ease, transform 250ms ease;
  max-width: 100%;
  ${media.lg`
  min-width: 414px;
  width: calc(391px + ((100vw - 1480px) / 2));
  `}
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
  transition: opacity 250ms ease;

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
  max-width: 414px;
  padding: 142px 0 0px;
  height: 100%;
`;

const OverflowContent = styled.div`
  overflow-y: auto;
  overflow-x: visible;
  padding: 0 30px;
  height: 100%;
`;

const SideModal = ({
  visible,
  setVisibility,
  side = "right",
  name,
  children,
}) => {
  const container = useRef(null);
  return (
    <ModalContainer
      ref={container}
      onClick={e => e.target === container.current && setVisibility(name)}
      className={visible === name && "visible"}
      side={side}
    >
      <Modal>
        <ModalContents>
          <OverflowContent>{children}</OverflowContent>
        </ModalContents>
      </Modal>
    </ModalContainer>
  );
};

export default SideModal;
