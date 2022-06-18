import React from "react"

import * as Styled from "./HealthbeatDesc.styles"

export default function HealthbeatDesc({ header, text }) {
  return (
    <Styled.StyledLink>
      <h2>{header}</h2>
      <div>{text}</div>
    </Styled.StyledLink>
  )
}
