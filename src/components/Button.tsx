import styled from "styled-components";

interface ButtonProps {
  pink?: boolean;
  blue?: boolean;
  outline?: boolean;
  ml?: boolean;
}

export default styled.button<ButtonProps>`
  padding: 17px 30px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  transition: all 150ms ease;
  color: ${(props): any => props.theme.grey};
  background: transparent;
  cursor: pointer;
  margin-left: ${(props): any => (props.ml ? "15px" : "0px")};

  ${(props): any =>
    props.pink &&
    `
    color: ${props.theme.darkpink};
    background-color: ${props.outline ? "transparent" : props.theme.lightpink};
    border: 2px solid ${props.outline ? props.theme.darkpink : "transparent"};

    &:hover {
      color: white;
      background-color: ${props.theme.darkpink};
      border-color: transparent;
    }
    &:active {
      color: white;
      background-color: #be767b;
      border-color: transparent;
    }
  `};
  ${(props): any =>
    props.blue &&
    `
    color: ${props.theme.ultramarine};
    background-color: ${props.outline ? "transparent" : props.theme.dirtywhite};
    border: 2px solid ${
      props.outline ? props.theme.ultramarine : "transparent"
    };

    &:hover {
      color: white;
      background-color: ${props.theme.ultramarine};
      border-color: transparent;
    }
    &:active {
      color: white;
      background-color: #2a2644;
      border-color: transparent;
    }
  `};
`;
