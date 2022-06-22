import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { findTimerData, parseMS } from "utils/timer"

import * as Styled from "./ExerciseTimer.styles"

export default function ExerciseTimer() {
  const [time, setTime] = useState(null)
  const [ms, setMS] = useState(null)

  useEffect(() => {
    const id = setInterval(() => setMS(parseMS(findTimerData())), 1000)

    const minutes = Math.floor(ms / 1000 / 60)
    const seconds = Math.floor((ms / 1000) % 60)
    const sec = seconds < 10 ? "0" + seconds : seconds
    const min = minutes < 10 ? "0" + minutes : minutes

    setTime(min + ":" + sec)

    return () => {
      clearInterval(id)
    }
  }, [ms])
  // can be used to navigate
  const navigate = useNavigate()

  return (
    <>
      <div>
        <div>Nächste Übung</div>
        <Styled.TimerContainer d={(ms / findTimerData()) * 283}>
          <svg
            class="base-timer__svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g class="base-timer__circle">
              <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
              <path
                id="base-timer-path-remaining"
                stroke-dasharray="283"
                class="base-timer__path-remaining"
                d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
              />
            </g>
          </svg>
          <span id="base-timer-label" class="base-timer__label">
            {time}
          </span>
        </Styled.TimerContainer>
      </div>
      <button onClick={() => navigate("/exercise")}>
        Übungseinheit starten
      </button>
    </>
  )
}
