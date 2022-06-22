import React from "react"

import * as Styled from "./Button.styles"

export default function Button({
  SVG,
  text,
  onClick,
  id,
  type,
  disabled,
  children,
}) {
  return (
    <Styled.Button
      onClick={onClick}
      id={id}
      type={type ? type : ""}
      disabled={disabled}
    >
      {SVG && <SVG />}
      {text && <p>{text}</p>}
      {children && children}
    </Styled.Button>
  )
}
