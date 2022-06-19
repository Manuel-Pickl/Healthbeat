import React from "react"

import * as Styled from "./Button.styles"

export default function Button({ SVG, text, onClick }) {
  return (
    <Styled.Button onClick={onClick}>
      {SVG ? <SVG /> : null}
      <p>{text}</p>
    </Styled.Button>
  )
}
