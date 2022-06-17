import React from "react"

import * as Styled from "./AboBox.styles"

export default function AboBox({ SVG, text, link }) {
  return (
    <Styled.StyledLink to={link}>
      <div>{<SVG />}</div>
      <div>{text}</div>
      <div>{text}</div>
      <div>{text}</div>
    </Styled.StyledLink>
  )
}
