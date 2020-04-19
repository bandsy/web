import React, { useState } from "react";
import styled from "styled-components";

interface props {
  error?: boolean;
  disabled?: boolean;
  type: string;
  label: string;
  name: string;
}

const StyledDiv = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  padding: 40px 15px 15px;
  width: 100%;
  border-radius: 5px;
  font-size: 18px;
  color: ${(x: any) => x.theme.grey};
  border: 2px solid ${(x: any) => x.theme.dirtywhite};
`;

const StyledLabel = styled.label<{ filled: boolean }>`
  position: absolute;
  font-weight: 700;
  color: ${(x: any) => x.theme.ultramarine};
  top: 50%;
  left: 15px;
  pointer-events: none;
  transform: translateY(-50%);
  transition: all 150ms ease-out;

  ${StyledInput}:focus + & {
    top: 15px;
    transform: translateY(0);
  }

  ${x =>
    x.filled &&
    `
    top: 15px;
    transform: translateY(0);
  `}
`;

const Input = (props: props) => {
  const [filled, setFilled] = useState(false);
  return (
    <StyledDiv>
      <StyledInput
        name={props.name}
        type={props.type}
        onBlur={(e: any) =>
          e.target.value ? setFilled(true) : setFilled(false)
        }
      />
      <StyledLabel filled={filled} htmlFor={props.name}>
        {props.label}
      </StyledLabel>
    </StyledDiv>
  );
};

export default Input;
