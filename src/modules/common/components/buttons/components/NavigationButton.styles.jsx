import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border: 2px solid var(--clr-primary);
  border-radius: 5px;
  color: var(--clr-primary);
  font-weight: bold;
  min-width: 120px;
  height: 48px;
  padding: 0 8px;
  cursor: pointer;
  text-decoration: none;

  & div {
    margin-right: 8px;
  }

  &:hover,
  &:focus {
    background: var(--clr-hover);
    color: white;
    border-color: var(--clr-hover);

    svg > * {
      fill: white;
    }
  }
`
