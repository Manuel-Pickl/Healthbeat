import React from "react"
import { useNavigate } from "react-router"
import storageTypes from "configs/storageTypes"

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
      <div>
        <h2>Sehr gut!</h2>
        <p>
          Du hast heute {totalExerciseDuration} Minuten gegen deine{" "}
          {complainRegion} gearbeitet.
        </p>
        <p>{tip}</p>
        <button onClick={() => navigate("/")}>Abschließen</button>
        <button onClick={() => navigate("/kontakt")}>Kontakt</button>
      </div>
    </>
  )
}
