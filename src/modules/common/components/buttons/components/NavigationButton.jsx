import React from "react"

import * as Styled from "./NavigationButton.styles"

export default function NavigationButton({ SVG, text, link }) {
  return (
    <Styled.StyledLink to={link}>
      {SVG ? <SVG /> : null}
      <p>{text}</p>
    </Styled.StyledLink>
  )
}
