import React from "react"
import { ReactComponent as Bronze } from "assets/abos/bronze_abo.svg"
import { ReactComponent as Gold } from "assets/abos/gold_abo.svg"
import { ReactComponent as Silber } from "assets/abos/silber_abo.svg"
import { ReactComponent as LandingPic1 } from "assets/landingpage/landingPic1.svg"
import { ReactComponent as LandingPic2 } from "assets/landingpage/landingPic2.svg"
import { ReactComponent as LandingPic3 } from "assets/landingpage/landingPic3.svg"

import AboBox from "modules/common/components/divs/components/AboBox"
import HealthbeatDesc from "modules/common/components/divs/components/HealthbeatDesc"
import HealthbeatPic from "modules/common/components/divs/components/HealthbeatPic"

import {
  AboHeader,
  GridContainer2,
  GridContainer3,
  GridContainer4,
} from "./LandingPage.styles"

const fliesstext =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint  commodi repudiandae consequuntur voluptatum laborum."

function LandingPage() {
  return (
    <main>
      <AboHeader>
        <h1>Was ist Healthbeat?</h1>
      </AboHeader>
      <GridContainer2>
        <div></div>
        <HealthbeatPic SVG={LandingPic1} />
        <HealthbeatDesc header={"Geschichte Unternehmen"} text={fliesstext} />
        <div></div>
      </GridContainer2>
      <GridContainer4>
        <HealthbeatPic SVG={LandingPic2} />
        <HealthbeatDesc
          header={"Gemeinsam als Team Sport machen"}
          text={fliesstext}
        />
        <HealthbeatDesc
          header={"Problem der Büroarbeit, unsere App zum Sport anregen"}
          text={fliesstext}
        />
        <HealthbeatPic SVG={LandingPic3} />
      </GridContainer4>
      <AboHeader>
        <h2>Abos</h2>
      </AboHeader>
      <GridContainer3>
        <AboBox SVG={Bronze} text={"Feature"} />
        <AboBox SVG={Silber} text={"Feature"} />
        <AboBox SVG={Gold} text={"Feature"} />
      </GridContainer3>
    </main>
  )
}

export default LandingPage
