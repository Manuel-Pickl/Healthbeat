import { Link } from "react-router-dom"
import styled from "styled-components"

import { StyledLink } from "modules/common/components/buttons/components/NavigationButton.styles"

export const SVGContainer = styled(Link)`
  width: 50px;
  height: 50px;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 5px;
  box-shadow: 0px 20px 20px -13px rgba(0, 0, 0, 0.06);

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin-left: auto;

    li {
      margin-right: 8px;

      a {
        ${StyledLink.componentStyle.rules[0]}
        background: transparent;
        width: unset;
      }

      &:last-child {
        margin-right: 0;
      }

      &:hover,
      &:focus {
        cursor: pointer;
      }
    }
  }
`
