import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ReactComponent as Start } from "assets/exercisetimer/start.svg"
import storageTypes from "configs/storageTypes"
import { findTimerData, parseMS, parseTime } from "utils/timer"

import Button from "modules/common/components/buttons/components/Button"
import Timer from "modules/timer"

import * as Styled from "./ExerciseTimer.styles"

export default function ExerciseTimer() {
  const navigate = useNavigate()
  const [time, setTime] = useState("00:00")
  const [ms, setMS] = useState(0)
  const [timeLeft, setTimeLeft] = useState(1)
  const data = JSON.parse(localStorage.getItem(storageTypes.freeTime))

  useEffect(() => {
    const timerData = findTimerData()

    // calculate current time
    const id = setInterval(() => setMS(parseMS(timerData)), 1000)

    // set current time in format MM:SS
    setTime(parseTime(ms))

    if (data) {
      // calculate timeleft
      const idx = data.indexOf(timerData)

      // TODO remove test data and check for -1
      // -1 only for test data
      if (idx === -1) {
        setTimeLeft(timerData - data[data.length - 1])
      } else if (idx > 0) {
        setTimeLeft(timerData - data[idx - 1])
      } else {
        setTimeLeft(timerData)
      }
    }

    // clean up interval
    return () => {
      clearInterval(id)
    }
  }, [ms, data])

  return (
    <Styled.Main>
      <Timer
        time={time}
        timeLeft={timeLeft}
        currentTime={ms}
        end={
          (ms === -1 && data && data.indexOf(ms) === -1) ||
          data === null ||
          (data && data.length === 0)
        }
      />
      <Button onClick={() => navigate("/exercise")}>
        Übungseinheit starten
        <Start />
      </Button>
    </Styled.Main>
  )
}
