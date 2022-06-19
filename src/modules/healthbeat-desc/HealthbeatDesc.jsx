import React from "react"

import * as Styled from "./HealthbeatDesc.styles"

export default function HealthbeatDesc({ header, text, SVG, right }) {
  return (
    <Styled.Container right={right}>
      {<SVG />}
      <Styled.Content>
        <h2>{header}</h2>
        <div>{text}</div>
      </Styled.Content>
    </Styled.Container>
  )
}
