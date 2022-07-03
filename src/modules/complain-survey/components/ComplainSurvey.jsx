import React, { useState } from "react"
import { ReactComponent as Complain } from "assets/complainpage/complain.svg"
import Pain from "assets/complainpage/pain.png"
import storageTypes from "configs/storageTypes"

import Button from "modules/common/components/buttons/components/Button"

import * as Styled from "./ComplainSurvey.styles"

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

export default function ComplainSurvey({ close }) {
  const [visbility, toggleVisiblity] = useState(false)
  const [painValue, setPainValue] = useState(null)
  const [disabled, setButton] = useState(true)
  const [currentRegion, setRegion] = useState("")

  const saveSurvey = () => {
    // next survey in 4 weeks
    const date = new Date()
    date.setDate(date.getDate() + 4 * 7)

    // set items
    localStorage.setItem(
      storageTypes.complainSurvey,
      JSON.stringify({
        region: currentRegion,
        scaleOfPain: painValue,
        nextSurveyDate: date,
      })
    )
  }

  return (
    <Styled.Wrapper>
      {!visbility ? (
        <Styled.Container>
          <Styled.Content>
            <h1>Beschwerdeabfrage</h1>
            <Styled.SVGContainer>
              <Complain />
            </Styled.SVGContainer>
            <h1>Wo hast du heute Beschwerden?</h1>
          </Styled.Content>
          <ul>
            {regions.map(region => (
              <li key={region}>
                <label>
                  <Styled.Input
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
                </label>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => toggleVisiblity(true)}
            disabled={!currentRegion.length > 0 || disabled}
            text={"weiter"}
          />
        </Styled.Container>
      ) : (
        <Styled.Container>
          <Styled.Content>
            <h1>Beschwerdeabfrage</h1>
            <Styled.SVGContainer>
              <img src={Pain} alt="" />
            </Styled.SVGContainer>
            <h1>Wie stark sind deine Schmerzen?</h1>
            <ul>
              {Object.keys(complaintDegree).map((key, i) =>
                i % 2 !== 0 ? (
                  <li key={complaintDegree[key]}>
                    <label>
                      <Styled.Input
                        type="radio"
                        value={painValue}
                        name="pain-range"
                        onClick={() => setPainValue(key)}
                      />
                      {complaintDegree[key]}
                    </label>
                  </li>
                ) : null
              )}
            </ul>
            <Styled.ButtonContainer>
              <Button
                link={"/"}
                onClick={() => {
                  toggleVisiblity(false)
                  if (currentRegion.length === 0) setButton(true)
                  else setButton(false)
                  setPainValue(null)
                }}
              >
                <i />
              </Button>
              <Button
                text={"Speichern"}
                link={"/"}
                onClick={() => {
                  saveSurvey()
                  close(false)
                }}
                disabled={!!!painValue}
              />
            </Styled.ButtonContainer>
          </Styled.Content>
        </Styled.Container>
      )}
    </Styled.Wrapper>
  )
}
