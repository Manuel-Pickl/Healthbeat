import React, { useState } from "react"

import { Button } from "modules/common/components/buttons/components/Button.styles"

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
        <video width="525" height="auto" controls autoPlay>
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
        <div>
          Schwierigkeit: <span id="difficult">{difficulty}</span>
        </div>
        <div>Dauer: {parseDuration(duration)}</div>

        {/* exercise description */}

        <button onClick={() => toggleDescriptionVisiblity(!descriptionVisible)}>
          Übungsbeschreibung
          {descriptionVisible ? <div>close icon</div> : <div>open icon</div>}
        </button>
        {descriptionVisible && <div>{description}</div>}
      </Styled.Main>
      <Button
        onClick={() => toggleDescriptionVisiblity(!descriptionVisible)}
        text={"Test"}
      />
    </>
  )
}

// duration in seconds
function parseDuration(duration) {
  let minutes = Math.floor(duration / 60)
  let seconds = duration % 60

  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}
