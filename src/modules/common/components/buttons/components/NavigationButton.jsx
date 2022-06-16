import React from "react"

import * as Styled from "./NavigationButton.styles"

export default function NavigationButton({ SVG, text, link }) {
  return (
    <Styled.StyledLink to={link}>
      <div>{<SVG />}</div>
      <p>{text}</p>
    </Styled.StyledLink>
  )
}
