import React from "react"

import * as Styled from "./NavigationButton.styles"

export default function NavigationButton({ SVG, text, onClick, link }) {
  return (
    <Styled.StyledLink onClick={onClick} to={link}>
      {SVG ? <SVG /> : null}
      <p>{text}</p>
    </Styled.StyledLink>
  )
}
