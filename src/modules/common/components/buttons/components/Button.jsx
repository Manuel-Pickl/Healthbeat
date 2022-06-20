import React from "react"

import * as Styled from "./Button.styles"

export default function Button({ SVG, text, onClick, type }) {
  return (
    <Styled.Button onClick={onClick} type={type ? type : ""}>
      {SVG ? <SVG /> : null}
      <p>{text}</p>
    </Styled.Button>
  )
}
