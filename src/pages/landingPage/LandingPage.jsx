import React from "react"
import { ReactComponent as Bronze } from "assets/abos/bronze_abo.svg"
import { ReactComponent as Gold } from "assets/abos/gold_abo.svg"
import { ReactComponent as Silber } from "assets/abos/silber_abo.svg"
import { ReactComponent as LandingPic1 } from "assets/landingpage/landingPic1.svg"
import { ReactComponent as LandingPic2 } from "assets/landingpage/landingPic2.svg"
import { ReactComponent as LandingPic3 } from "assets/landingpage/landingPic3.svg"

import AboBox from "modules/common/components/divs/components/AboBox"
import ExerciseTimer from "modules/exerciseTimer"
import HealthbeatDesc from "modules/healthbeat-desc/HealthbeatDesc"
import Exercise from "pages/exercise/Exercise"
import ExerciseFinished from "pages/exerciseFinished/ExerciseFinished"

import * as Styled from "./LandingPage.styles"



// ToDo Berkay: use actual logged in value
const loggedIn = true;


function LandingPage() {
  return (
    <>
    {loggedIn ? (
      // redirect not working for now -> just comment in the component you want to style ;)
      <ExerciseTimer/>
      // <Exercise/>
      // <ExerciseFinished/>
      ) : (
      <Styled.Main>
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
        <h2>Abos</h2>
        <Styled.Abos>
          <AboBox SVG={Bronze} text={"Feature"} />
          <AboBox SVG={Silber} text={"Feature"} />
          <AboBox SVG={Gold} text={"Feature"} />
        </Styled.Abos>
      </Styled.Main>
    )}
    </>
  )
}

export default LandingPage
