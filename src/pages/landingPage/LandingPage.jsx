import React from "react"
import { ReactComponent as Bronze } from "assets/abos/bronze_abo.svg"
import { ReactComponent as Gold } from "assets/abos/gold_abo.svg"
import { ReactComponent as Silber } from "assets/abos/silber_abo.svg"
import { ReactComponent as LandingPic1 } from "assets/landingpage/landingPic1.svg"
import { ReactComponent as LandingPic2 } from "assets/landingpage/landingPic2.svg"
import { ReactComponent as LandingPic3 } from "assets/landingpage/landingPic3.svg"

import Button from "modules/common/components/buttons/components/Button"
import AboBox from "modules/common/components/divs/components/AboBox"
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
              header={"test"}
              SVG={LandingPic1}
            />
            <div>
              <HealthbeatDesc
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint  commodi repudiandae consequuntur voluptatum laborum.`}
                header={"test"}
                SVG={LandingPic2}
              />
              <HealthbeatDesc
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint  commodi repudiandae consequuntur voluptatum laborum.`}
                header={"test"}
                SVG={LandingPic3}
                right
              />
            </div>
          </Styled.Content>
        </article>
        <section id="#kontakt">
          <h2>Abos</h2>
          <Styled.Abos>
            <AboBox SVG={Bronze} text={"Feature"} />
            <AboBox SVG={Silber} text={"Feature"} />
            <AboBox SVG={Gold} text={"Feature"} />
          </Styled.Abos>
        </section>
        <Styled.Kontakt>
          <h2>Kontakt</h2>
          <p>
            Sie wollen einen Beratungstermin vereinbaren oder haben Fragen? Dann
            nutzen Sie das folgende Kontaktformular. Wir antworten Ihnen
            schnellstmöglich.
          </p>
          <form>
            <label htmlFor="betreff">Betreff</label>
            <input type="text" name="betreff" required />
            <textarea
              name="text"
              type="text"
              required
              placeholder="Schreiben Sie Ihre Nachricht."
            />
            <Button type="submit" text={"Senden"} />
          </form>
        </Styled.Kontakt>
      </Styled.Main>
    </>
  )
}

export default LandingPage
