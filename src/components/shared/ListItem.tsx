import styled from "styled-components";

interface props {
  active?: boolean;
  icon?: boolean;
}

const ListItem = styled.button<props>`
  text-align: left;
  padding: 17px 15px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  transition: all 150ms ease;
  color: ${(x: any) => (x.active ? x.theme.darkpink : x.theme.ultramarine)};
  background: ${(x: any) => (x.active ? x.theme.lightpink : "transparent")};
  cursor: pointer;
  margin-left: -15px;
  margin-right: -15px;
  width: calc(100% + 30px);
  height: 100%;

  &:hover {
    background-color: ${(x): any => x.theme.dirtywhite};
  }
  &:active {
    color: ${(x: any) => x.theme.white};
    background-color: ${(x): any => x.theme.ultramarine};
  }

  ${x => x.active && `pointer-events: none`}

  ${x =>
    x.icon &&
    `
      svg {
        height: 18px;
        width: 27px;
        margin-right: 10px;
        transform: translateY(2px);
        path {
          fill: ${x.active ? x.theme.darkpink : x.theme.ultramarine};
        }
      }

      &:active {
        svg path {
          fill: ${x.theme.white};
        }
      }
  `}
`;

export default ListItem;
