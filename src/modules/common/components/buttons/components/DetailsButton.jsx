import React from "react"

import * as Styled from "./DetailsButton.styles"

export default function DetailsButton({ text, link }) {
  return (
    <Styled.StyledLink to={link}>
      <p>{text}</p>
    </Styled.StyledLink>
  )
}
