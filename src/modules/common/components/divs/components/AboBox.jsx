import React from "react"

import DetailsButton from "modules/common/components/buttons/components/DetailsButton"

import * as Styled from "./AboBox.styles"

export default function AboBox({ SVG, header, text }) {
  return (
    <Styled.StyledLink>
      <div>{<SVG />}</div>
      <div>{header}</div>
      <div>{text}</div>
      <DetailsButton text={"Kontakt"} link={"/"} />
    </Styled.StyledLink>
  )
}
