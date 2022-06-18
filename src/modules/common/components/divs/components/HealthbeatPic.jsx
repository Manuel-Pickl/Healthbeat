import React from "react"

import * as Styled from "./HealthbeatPic.styles"

export default function HealthbeatPic({ SVG }) {
  return (
    <Styled.StyledLink>
      <div>{<SVG />}</div>
    </Styled.StyledLink>
  )
}
