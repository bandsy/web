import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: -10;
`;

const StyledOverflow = styled.div<{ height: number }>`
  position: relative;
  top: 0;
  left: 0;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  height: ${x => x.height}px;
`;

const StyledImage = styled.img<{ top: number }>`
  position: absolute;
  left: 0;
  top: ${x => x.top}px;
`;

const BackgroundWedge = ({ top = 0 }) => (
  <StyledContainer>
    <StyledOverflow height={1053 + top}>
      <StyledImage
        top={top}
        src={require("../../images/background-wedge.svg")}
        alt=""
      />
    </StyledOverflow>
  </StyledContainer>
);

export default BackgroundWedge;
