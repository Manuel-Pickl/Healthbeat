import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ReactComponent as Hantel } from "assets/exercisetimer/hantel.svg"
import { ReactComponent as Start } from "assets/exercisetimer/start.svg"
import { findTimerData, parseMS } from "utils/timer"

import Button from "modules/common/components/buttons/components/Button"

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
    <Styled.Main>
      <div>
        <Styled.TimerContainer d={(ms / findTimerData()) * 283}>
          <svg
            className="base-timer__svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="base-timer__circle">
              <circle
                className="base-timer__path-elapsed"
                cx="50"
                cy="50"
                r="45"
              />
              <path
                id="base-timer-path-remaining"
                strokeDasharray="283"
                className="base-timer__path-remaining"
                d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
              />
            </g>
          </svg>
          <p>
            <span>
              <Hantel /> Nächste Übung
            </span>
            <span>{time}</span>
          </p>
        </Styled.TimerContainer>
      </div>
      <Button onClick={() => navigate("/exercise")}>
        Übungseinheit starten
        <Start />
      </Button>
    </Styled.Main>
  )
}
