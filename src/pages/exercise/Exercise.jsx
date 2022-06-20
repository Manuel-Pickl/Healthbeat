import React, { useEffect, useState } from "react"

import ExerciseInfo from "modules/exerciseInfo"


const exercises = {
  1: [
    "Kniebeuge",
    120,
    "schwer",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur eius est dolores quo officia eaque non suscipit ipsam totam distinctio!"
  ],
  2: [
    "Dehnung des Rückens",
    210,
    "mittel",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, delectus."
  ],
  3: [
    "Unterarmstütz",
    60,
    "schwer",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus id magnam odio in delectus error."
  ],
  4: [
    "Arme strecken",
    150,
    "leicht",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, est."
  ],
  5: [
    "Fersen und Beine anheben",
    240,
    "leicht",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione blanditiis corrupti laborum dicta, consequatur facilis quisquam delectus sint quae voluptas, velit quos odio consectetur sequi."
  ]
}

const skipOptions = [
"Die Übung wirkt zu anspruchsvoll",
"Die Übung wirkt zu leicht",
"Ich habe keine Lust auf diese Übung",
"Übungsutensilien sind nicht verfügbar"
]

var exercise = getExercise();



export default function Exercise() {
  const [exerciseStarted, toggleExercise] = useState(false)
  const [skipButtonEnabled, toggleSkipButton] = useState(true)
  const [timerRunning, toggleTimerRunning] = useState(false)
  const [skipOptionsVisible, toggleSkipOptions] = useState(false)
  const [skipReason, setSkipReason] = useState("")

  // timer
  const [ remainingTime, setRemainingTime ] = useState(15 * 60);
  useEffect(() => {
    if (!timerRunning) {
      return;
    }

    let timerInterval = setInterval(() => {
        if (remainingTime > 0) {
            setRemainingTime(remainingTime - 1);
        }
        else {
          clearInterval(timerInterval)
          showExerciseFinishedPage();
        }
      }, 1000)
    
      return () => {
        clearInterval(timerInterval);
      };
  });

  
  
  return (
    <>
      <div>
        {/* ToDo Berkay: data flow to child component not working */}
        <ExerciseInfo exercise = {exercise}></ExerciseInfo>
        {/* skip / play logic */}
        {!exerciseStarted ? (
          <div>
            <button onClick={() => {
              toggleExercise(true)
              toggleTimerRunning(true)
            }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1ZhFJeQdr9R_ALT-PgHyudfzcoVI5ByjBtCR2aVWxNTrzVejwou2WPyZM9FhuC1w3ik&usqp=CAU"
                alt="play_button_image" />
            </button>
            <button 
              onClick={() => {
                if (skipReason === "") {
                  toggleSkipButton(false);
                  toggleSkipOptions(true);
                }
                else {
                  showNextExercise();
                }
              }}
              disabled={!skipButtonEnabled}>
              Überspringen
            </button>
            {skipOptionsVisible &&
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
            }
          </div>
        ) : (
          <div>
            <div>
              <div>{parseDuration(remainingTime)}</div> 
            </div>
            <button
              onClick={() => toggleTimerRunning(!timerRunning)}>
              {timerRunning ? "pause" : "play"}
            </button>
          </div>
        )}
      </div>
    </>
  )
}

// ToDo: move to utility class
function parseDuration(duration) { // duration in seconds
  let minutes = Math.floor(duration / 60)
  let seconds = duration % 60

  return `${minutes}:${seconds < 10 ?  `0${seconds}` : seconds}`
}

// ToDo: move to utility class
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// ToDo
// hook for video end to call "showNextExercise()"
// not possible now, as we have no videos

function showNextExercise() {
  exercise = getExercise();
  // ToDo Berkay: refresh ui with new set exercise
}

function getExercise() {
  return exercises[randomIntFromInterval(1, Object.keys(exercises).length)];
}

function showExerciseFinishedPage() {
  // ToDo Berkay: redirect correctly
  alert("showExerciseFinishedPage()");
}