import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { ReactComponent as StartVideo } from "assets/buttons/startvideo.svg"

//import NavigationButton from "modules/common/components/buttons/components/NavigationButton"
//import { Timer } from "modules/common/countdowntimer/components/CountdownTimer.styles"
import ExerciseInfo from "modules/exerciseInfo"

//import * as Timer from "./CountdownTimer.styles"
import * as Styled from "./Exercise.styles"

const exercises = {
  1: [
    "Kniebeuge",
    120,
    "schwer",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur eius est dolores quo officia eaque non suscipit ipsam totam distinctio!",
  ],
  2: [
    "Dehnung des Rückens",
    210,
    "mittel",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, delectus.",
  ],
  3: [
    "Unterarmstütz",
    60,
    "schwer",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus id magnam odio in delectus error.",
  ],
  4: [
    "Arme strecken",
    150,
    "leicht",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, est.",
  ],
  5: [
    "Fersen und Beine anheben",
    240,
    "leicht",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione blanditiis corrupti laborum dicta, consequatur facilis quisquam delectus sint quae voluptas, velit quos odio consectetur sequi.",
  ],
}

const skipOptions = [
  "Die Übung wirkt zu anspruchsvoll",
  "Die Übung wirkt zu leicht",
  "Ich habe keine Lust auf diese Übung",
  "Übungsutensilien sind nicht verfügbar",
]

export default function Exercise() {
  const navigate = useNavigate()

  const [exerciseStarted, toggleExercise] = useState(false)
  const [skipButtonEnabled, toggleSkipButton] = useState(true)
  const [timerRunning, toggleTimerRunning] = useState(false)
  const [skipOptionsVisible, toggleSkipOptions] = useState(false)
  const [skipReason, setSkipReason] = useState("")
  const [exercise, setExercise] = useState(showNextExercise())

  // timer
  const [remainingTime, setRemainingTime] = useState(15 * 60)
  useEffect(() => {
    if (!timerRunning) {
      return
    }

    let timerInterval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1)
      } else {
        clearInterval(timerInterval)
        navigate("/exercise-finished")
      }
    }, 1000)

    return () => {
      clearInterval(timerInterval)
    }
  })

  return (
    <>
      {/* ToDo - it does work */}
      <Styled.Main>
        <ExerciseInfo exercise={exercise} />
        {/* skip / play logic */}
        {!exerciseStarted ? (
          <div>
            <button
              id="startvideo"
              onClick={() => {
                toggleExercise(true)
                toggleTimerRunning(true)
              }}
            >
              <StartVideo />
            </button>

            <div>
              <button
                id="skipbutton"
                link={"/"}
                onClick={() => {
                  if (skipReason === "") {
                    toggleSkipButton(false)
                    toggleSkipOptions(true)
                  } else {
                    setExercise(showNextExercise())
                  }
                }}
                disabled={!skipButtonEnabled}
              >
                Überspringen
              </button>
            </div>

            {skipOptionsVisible && (
              <ul>
                {skipOptions.map(skipOption => (
                  <li key={skipOption}>
                    <input
                      type="radio"
                      value={skipOption}
                      name="skipOption"
                      onClick={() => {
                        toggleSkipButton(true)
                        setSkipReason(skipOption)
                      }}
                    />
                    {skipOption}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div>
            <div>
              <div>{parseDuration(remainingTime)}</div>
            </div>
            <button onClick={() => toggleTimerRunning(!timerRunning)}>
              {timerRunning ? "pause" : "play"}
            </button>
          </div>
        )}
      </Styled.Main>
    </>
  )
}

// ToDo: move to utility class
function parseDuration(duration) {
  // duration in seconds
  let minutes = Math.floor(duration / 60)
  let seconds = duration % 60

  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

// ToDo: move to utility class
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// ToDo
// hook for video end to call "showNextExercise()"
// not possible now, as we have no videos

function showNextExercise() {
  return exercises[randomIntFromInterval(1, Object.keys(exercises).length)]
}
