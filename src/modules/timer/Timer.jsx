import { ReactComponent as Hantel } from "assets/exercisetimer/hantel.svg"

import * as Styled from "./Timer.styles"

export default function ExerciseTimer({ timeLeft = 1, currentTime = 0, time }) {
  return (
    <Styled.TimerContainer d={(currentTime / timeLeft) * 283}>
      <svg
        className="base-timer__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="base-timer__circle">
          <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
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
  )
}
