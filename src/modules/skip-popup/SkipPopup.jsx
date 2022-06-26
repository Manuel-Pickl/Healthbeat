import React, { useRef, useState } from "react"
import { useEffect } from "react"

import * as Styled from "./SkipPopup.styles"

const reasons = [
  "Die Übung wirkt zu anspruchsvoll",
  "Die Übung wirkt zu leicht",
  "Ich habe keine Lust auf diese Übung",
  "Übungsutensilien sind nicht verfügbar",
]

const difficulties = ["Leicht", "Mittel", "Schwer"]

export default function SkipPopup({
  toggleSkipButton,
  setReason,
  setDifficulty,
  forwardedRef,
}) {
  const [r, setR] = useState("")
  const [d, setD] = useState("")
  const [offsetTop, setOffsetTop] = useState(0)
  const containerRef = useRef()

  useEffect(() => {
    function getTopOffset() {
      if (forwardedRef.current && containerRef.current) {
        setOffsetTop(
          forwardedRef.current.offsetTop - containerRef.current.offsetHeight
        )
      } else {
        setOffsetTop(forwardedRef.current.offsetTop)
      }
    }

    getTopOffset()
  })

  return (
    <Styled.Container top={offsetTop} ref={containerRef}>
      <section>
        <h2>Bitte verrate uns den Grund</h2>
        <ul>
          {reasons.map(reason => (
            <li key={reason}>
              <label>
                <input
                  type="radio"
                  value={reason}
                  name="reason"
                  onClick={() => {
                    toggleSkipButton(reason.length && d.length)
                    setReason(reason)
                    setR(reason)
                  }}
                />
                <span>{reason}</span>
              </label>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Bewerte die Schwierigkeit der Übung</h2>
        <ul>
          {difficulties.map(difficulty => (
            <li key={difficulty}>
              <label>
                <input
                  type="radio"
                  value={difficulty}
                  name="difficulty"
                  onClick={() => {
                    toggleSkipButton(r.length && difficulty.length)
                    setDifficulty(difficulty)
                    setD(difficulty)
                  }}
                />
                <span>{difficulty}</span>
              </label>
            </li>
          ))}
        </ul>
      </section>
    </Styled.Container>
  )
}
