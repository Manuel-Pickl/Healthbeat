import React from "react"

import DetailsButton from "modules/common/components/buttons/components/DetailsButton"

import * as Styled from "./AboBox.styles"

export default function AboBox({ SVG, text }) {
  return (
    <Styled.StyledLink>
      <div>{<SVG />}</div>
      <div>{text}</div>
      <div>{text}</div>
      <div>{text}</div>
      <div>{text}</div>
      <DetailsButton text={"Mehr Details"} link={"/"} />
    </Styled.StyledLink>
  )
}
