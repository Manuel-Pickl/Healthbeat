import React from "react"

import * as Styled from "./Button.styles"

export default function Button({
  SVG,
  text,
  onClick,
  type,
  disabled,
  children,
}) {
  return (
    <Styled.Button
      onClick={onClick}
      type={type ? type : ""}
      disabled={disabled}
    >
      {SVG && <SVG />}
      {text && <p>{text}</p>}
      {children && children}
    </Styled.Button>
  )
}
