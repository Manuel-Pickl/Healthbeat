import React from "react"

import DetailsButton from "modules/common/components/buttons/components/DetailsButton"

import * as Styled from "./AboBox.styles"

export default function AboBox({ SVG, header, text }) {
  return (
    <Styled.Container>
      <div>{<SVG />}</div>
      <div>{header}</div>
      <ul>
        <li>{text}</li>
        <li>{text}</li>
        <li>{text}</li>
      </ul>
      <DetailsButton text={"Kontakt"} link={"#contact"} />
    </Styled.Container>
  )
}
