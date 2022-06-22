import React from "react"
import { useNavigate } from "react-router"
import { ReactComponent as ThumbsUp } from "assets/buttons/thumbs-up.svg"
import storageTypes from "configs/storageTypes"

import Button from "modules/common/components/buttons/components/Button"
import NavigationButton from "modules/common/components/buttons/components/NavigationButton"

import * as Styled from "./ExerciseFinished.styles"

export default function Exercise() {
  const navigate = useNavigate()
  // TODO
  const data = JSON.parse(localStorage.getItem(storageTypes.complainSurvey)) // hier sind die daten

  const complainRegion = "Hüftbeschwerden"

  // for now use fix value
  const totalExerciseDuration = "15 Minuten"

  // randomize, when we get more infos
  const tip = "P.S. Denke an Deine Sitzposition bei der Arbeit."

  return (
    <>
      <Styled.Main>
        <div className="grid-container">
          <div>
            <ThumbsUp />
          </div>

          <div>
            <h2>Sehr gut!</h2>
            <p>
              Du hast heute {totalExerciseDuration} Minuten gegen deine{" "}
              {complainRegion} gearbeitet.
            </p>
            <p>{tip}</p>
            <div id="finish">
              <Button onClick={() => navigate("/")} text={"Abschließen"} />
              {/*<NavigationButton text={"Kontakt"} link={"/kontakt"} />*/}
            </div>
          </div>
        </div>
      </Styled.Main>
    </>
  )
}
