import styled from "styled-components";

interface props {
  active?: boolean;
}

const ListItem = styled.button<props>`
  text-align: left;
  padding: 17px 15px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  transition: all 150ms ease;
  color: ${(x: any) => (x.active ? x.theme.darkpink : x.theme.ultramarine)};
  background: ${(x: any) => (x.active ? x.theme.lightpink : "transparent")};
  cursor: pointer;
  margin-left: -15px;
  margin-right: -15px;
  width: calc(100% + 30px);

  &:hover {
    background-color: ${(x): any => x.theme.dirtywhite};
  }
  &:active {
    color: white;
    background-color: ${(x): any => x.theme.ultramarine};
  }

  ${x => x.active && `pointer-events: none`}
`;

export default ListItem;
