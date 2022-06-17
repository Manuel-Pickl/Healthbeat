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
        <h1>Abos</h1>
      </AboHeader>
      <GridContainer>
        <AboBox SVG={Bronze} text={"Bronze"} link={"/"} />
        <AboBox SVG={Silber} text={"Silber"} link={"/"} />
        <AboBox SVG={Gold} text={"Gold"} link={"/"} />
      </GridContainer>
    </>
  )
}

export default LandingPage
