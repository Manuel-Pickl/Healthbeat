import { useNavigate } from "react-router-dom"
import storageTypes from "configs/storageTypes"

export default function ExerciseTimer() {
  // can be used to navigate
  const navigate = useNavigate()

  // TODO calculate elapsed time starting from 8 a.m. to select correct value
  const data = JSON.parse(localStorage.getItem(storageTypes.freeTime))

  let remainingTime = "24:04"

  return (
    <>
      <div>
        <div>Nächste Übung</div>
        <div>{remainingTime}</div>
      </div>
      <button onClick={() => navigate("/exercise")}>
        Übungseinheit starten
      </button>
    </>
  )
}
