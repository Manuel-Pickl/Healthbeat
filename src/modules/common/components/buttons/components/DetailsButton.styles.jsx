import { HashLink as Link } from "react-router-hash-link"
import styled from "styled-components"

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: var(--clr-white);
  background-color: var(--clr-primary);
  font-weight: bold;
  min-width: 120px;
  width: 127px;
  height: 35px;
  padding: 0 8px;
  cursor: pointer;
  text-decoration: none;

  & div {
    margin-right: 8px;
  }

  &:hover {
    background: var(--clr-hover);
  }
  &:focus {
    background: var(--clr-click);
  }
`


