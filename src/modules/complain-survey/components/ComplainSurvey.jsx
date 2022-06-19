import React, { useState } from "react"
import { useNavigate } from "react-router"
import { ReactComponent as Complain } from "assets/complainpage/complain.svg"
import { ReactComponent as Pain } from "assets/complainpage/pain.svg"
import storageTypes from "configs/storageTypes"

import DetailsButton from "modules/common/components/buttons/components/DetailsButton"

import {
  GridContainer,
  NewInput,
  SurveyHeader,
  SVGContainer
} from "./ComplainSurvey.styles"

const regions = ["Rücken", "Nacken", "Schulter", "Hüfte", "Keine Schmerzen"]
const complaintDegree = {
  1: "leichte Schermzen bis keine Schermzen",
  2: "leichter Schmerz",
  3: "Mittlerer Schmerz bis leichter Schmerz",
  4: "Mittlerer Schmerz",
  5: "Starker Schmerz bis mittlerer Schmerz",
  6: "Starker Schmerz",
  7: "Sehr starker Schmerz bis starker Schmerz",
  8: "Sehr starker Schmerz",
  9: "Stärkster vorstellbarer Schmerz bis sehr starker Schmerz",
  10: "Stärkster vorstellbarer Schmerz",
}

export default function ComplainSurvey() {
  const [visbility, toggleVisiblity] = useState(false)
  const [rangeVal, setRangeVal] = useState(1)
  const [disabled, setButton] = useState(true)
  const [currentRegion, setRegion] = useState("")
  const navigate = useNavigate()

  const saveSurvey = () => {
    // next survey in 4 weeks
    const date = new Date()
    date.setDate(date.getDate() + 4 * 7)

    // set items
    localStorage.setItem(
      storageTypes.complainSurvey,
      JSON.stringify({
        region: currentRegion,
        scaleOfPain: rangeVal,
        nextSurveyDate: date,
      })
    )
  }

  return (
    <>
      {!visbility ? (
        <GridContainer>
          <SurveyHeader>
            <h1>Beschwerdeabfrage</h1>
            <SVGContainer><Complain/></SVGContainer>
            <h1>Wo hast du heute Beschwerden?</h1>
          </SurveyHeader>
          <ul>
            {regions.map(region => (
              <li key={region}>
                <NewInput
                  type="radio"
                  value={region}
                  name="pain"
                  defaultChecked={currentRegion.localeCompare(region) === 0}
                  onClick={() => {
                    setButton(false)
                    setRegion(region)
                  }}
                />
                {region}
              </li>
            ))}
          </ul>
          <SurveyHeader>
            <button
              onClick={() => toggleVisiblity(true)}
              disabled={!currentRegion.length > 0 || disabled}
            >
              Weiter
            </button>
          </SurveyHeader>
        </GridContainer>
      ) : (
        <GridContainer>
          <SurveyHeader>
            <h1>Beschwerdeabfrage</h1>
            <SVGContainer><Pain/></SVGContainer>
            <h1>Wie stark sind deine Schmerzen?</h1>
            <input
              type="range"
              className="custom-range"
              min="1"
              max="10"
              step="1"
              defaultValue={1}
              onChange={event => setRangeVal(event.target.value)}
            />
            <p>
              Dein Schmerzgrad liegt bei:{" "}
              <b>{rangeVal + " - " + complaintDegree[rangeVal]}</b>
            </p>

            <DetailsButton text={"Zurück"} link={"/"}
              onClick={() => {
                toggleVisiblity(false)
                if (currentRegion.length === 0) setButton(true)
                else setButton(false)
              }}
            />
            <DetailsButton text={"Speichern"} link={"/"}
              onClick={() => {
                saveSurvey()
                navigate("/")
              }}
            />
          </SurveyHeader>
        </GridContainer>
      )}
    </>
  )
}
