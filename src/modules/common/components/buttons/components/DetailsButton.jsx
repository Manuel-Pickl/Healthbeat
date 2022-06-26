import React from "react"

import * as Styled from "./DetailsButton.styles"

export default function DetailsButton({ text, link, SVG }) {
  return (
    <Styled.StyledLink to={link}>
      {SVG && <SVG />}
      <p>{text}</p>
    </Styled.StyledLink>
  )
}
