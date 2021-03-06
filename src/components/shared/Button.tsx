import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

interface props {
  pink?: boolean;
  blue?: boolean;
  outline?: boolean;
  filled?: boolean;
  ml?: boolean;
  active?: boolean;
}

const Button = styled.button<props>`
  padding: 15px 20px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  transition: all 150ms ease;
  color: ${(x): any => x.theme.grey};
  background: transparent;
  cursor: pointer;
  margin-left: ${(x): any => (x.ml ? "15px" : "0px")};
  white-space: nowrap;

  ${media.md`
      padding: 17px 30px;
    `}

  svg {
    height: 18px;
    width: auto;
    margin-right: 10px;
    transform: translateY(2px);
    path {
      fill: ${(x): any => x.theme.grey};
    }
  }

  &:hover {
    background-color: ${(x): any => x.theme.dirtywhite};
  }
  &:active {
    color: ${(x: any) => x.theme.white};
    background-color: ${(x): any => x.theme.lightgrey};
    svg path {
      fill: ${(x: any) => x.theme.white};
    }
  }

  ${(x): any =>
    x.pink &&
    `
    color: ${x.theme.darkpink};
    background-color: ${x.outline ? "transparent" : x.theme.lightpink};
    border: 2px solid ${x.outline ? x.theme.darkpink : "transparent"};
    &:hover {
      color: ${x.theme.white};
      background-color: ${x.theme.darkpink};
      border-color: transparent;
    }
    &:active {
      color: ${x.theme.white};
      background-color: ${x.theme.pink};
      border-color: transparent;
    }

    ${x.active &&
      `
      color: ${x.theme.white};
      background-color: ${x.theme.darkpink};
      border-color: transparent;
    `}
  `};
  ${(x): any =>
    x.blue &&
    `
    color: ${x.theme.ultramarine};
    background-color: ${x.outline ? "transparent" : x.theme.dirtywhite};
    border: 2px solid ${x.outline ? x.theme.ultramarine : "transparent"};
    &:hover {
      color: ${x.theme.white};
      background-color: ${x.theme.ultramarine};
      border-color: transparent;
    }
    &:active {
      color: ${x.theme.white};
      background-color: #2a2644;
      border-color: transparent;
    }

    ${x.active &&
      `
      color: ${x.theme.white};
      background-color: ${x.theme.ultramarine};
      border-color: transparent;
    `}
  `};
`;

export default Button;
