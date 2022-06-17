import React from "react"
import { ReactComponent as Bronze } from "assets/abos/bronze_abo.svg"
import { ReactComponent as Gold } from "assets/abos/gold_abo.svg"
import { ReactComponent as Silber } from "assets/abos/silber_abo.svg"

import AboBox from "modules/common/components/divs/components/AboBox"

import { AboHeader, GridContainer } from "./LandingPage.styles"

function LandingPage() {
  return (
    <>
      <AboHeader>
        <h1>Was ist Healthbeat?</h1>
      </AboHeader>
      <AboHeader>
        <h2>Abos</h2>
      </AboHeader>
      <GridContainer>
        <AboBox SVG={Bronze} text={"Feature"} link={"/"} />
        <AboBox SVG={Silber} text={"Feature"} link={"/"} />
        <AboBox SVG={Gold} text={"Feature"} link={"/"} />
      </GridContainer>
    </>
  )
}

export default LandingPage
