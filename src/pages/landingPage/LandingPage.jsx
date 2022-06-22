import React from "react"
import { ReactComponent as Bronze } from "assets/abos/bronze_abo.svg"
import { ReactComponent as Gold } from "assets/abos/gold_abo.svg"
import { ReactComponent as Silber } from "assets/abos/silber_abo.svg"
import { ReactComponent as LandingPic1 } from "assets/landingpage/landingPic1.svg"
import { ReactComponent as LandingPic2 } from "assets/landingpage/landingPic2.svg"
import { ReactComponent as LandingPic3 } from "assets/landingpage/landingPic3.svg"

import AboBox from "modules/abobox/components/AboBox"
import Contact from "modules/contact/components/Contact"
import HealthbeatDesc from "modules/healthbeat-desc/HealthbeatDesc"

import * as Styled from "./LandingPage.styles"

function LandingPage() {
  return (
    <>
      <Styled.Main>
        <article>
          <h1>Was ist Healthbeat?</h1>
          <Styled.Content>
            <HealthbeatDesc
              text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint  commodi repudiandae consequuntur voluptatum laborum.`}
              header={"Geschichte des Unternehmens"}
              SVG={LandingPic1}
            />
            <div>
              <HealthbeatDesc
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint  commodi repudiandae consequuntur voluptatum laborum.`}
                header={"Gemeinsam als Firma Sport machen"}
                SVG={LandingPic2}
              />
              <HealthbeatDesc
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint  commodi repudiandae consequuntur voluptatum laborum.`}
                header={
                  "Große Problem der Büroarbeit - unsere App regt zum Sport an"
                }
                SVG={LandingPic3}
                right
              />
            </div>
          </Styled.Content>
          <section>
            <h2>Abos</h2>
            <Styled.Abos>
              <AboBox SVG={Bronze} header={"Bronze"} text={"Feature"} />
              <AboBox SVG={Silber} header={"Silber"} text={"Feature"} />
              <AboBox SVG={Gold} header={"Gold"} text={"Feature"} />
            </Styled.Abos>
          </section>
        </article>
        <div id="contact">
          <Contact />
        </div>
      </Styled.Main>
    </>
  )
}

export default LandingPage
