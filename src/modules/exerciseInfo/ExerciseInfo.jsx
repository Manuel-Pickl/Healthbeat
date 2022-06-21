import React, { useState } from "react"
import { ReactComponent as ArrowDown } from "assets/buttons/arrowdown.svg"
import { ReactComponent as ArrowTop } from "assets/buttons/arrowtop.svg"
import { ReactComponent as Sport } from "assets/buttons/sport.svg"
import { ReactComponent as Watch } from "assets/buttons/watch.svg"

import * as Styled from "./ExerciseInfo.styles"

export default function ExerciseInfo({ exercise }) {
  const exerciseName = exercise[0]
  const difficulty = exercise[2]
  const duration = exercise[1] // in seconds
  const description = exercise[3]

  const [descriptionVisible, toggleDescriptionVisiblity] = useState(false)

  return (
    <>
      {/* exercise details */}
      <Styled.Main>
        <h2>
          Übung: <span id="exName">{exerciseName}</span>
        </h2>
        <div id="VideoBackground">
          <video width="auto" height="360" controls autoPlay>
            <source
              src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4"
              type="video/mp4"
            />
            <track
              kind="captions"
              src="https://gist.githubusercontent.com/samdutton/ca37f3adaf4e23679957b8083e061177/raw/e19399fbccbc069a2af4266e5120ae6bad62699a/sample.vtt"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="grid-container">
          <div>
            <button
              id="uebungsbesch"
              onClick={() => toggleDescriptionVisiblity(!descriptionVisible)}
            >
              Übungsbeschreibung
              {descriptionVisible ? (
                <div>
                  <ArrowTop className="arrow" />
                </div>
              ) : (
                <div>
                  <ArrowDown />
                </div>
              )}
            </button>
          </div>
          <div>
            <Sport />
          </div>
          <div>
            Schwierigkeit: <span id="difficult">{difficulty}</span>
          </div>
          <div>
            <Watch />
          </div>
          <div>Dauer: {parseDuration(duration)}</div>
        </div>
        <div>{descriptionVisible && <div id="desc">{description}</div>}</div>
      </Styled.Main>
    </>
  )
}

// duration in seconds
function parseDuration(duration) {
  let minutes = Math.floor(duration / 60)
  let seconds = duration % 60

  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}
