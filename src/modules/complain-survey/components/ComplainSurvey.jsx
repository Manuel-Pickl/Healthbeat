import React, { useState } from "react"

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

  const saveSurvey = () => {
    localStorage.setItem(
      "complainSurvey",
      JSON.stringify({ region: currentRegion, pain: rangeVal })
    )
  }

  return (
    <>
      {!visbility ? (
        <div>
          <p>Wo hast du heute Beschwerden?</p>
          <ul>
            {regions.map(region => (
              <li key={region}>
                <input
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
          <button
            onClick={() => toggleVisiblity(true)}
            disabled={!currentRegion.length > 0 || disabled}
          >
            Fortfahren
          </button>
        </div>
      ) : (
        <div>
          <p>Wie stark sind deine Schmerzen?</p>
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

          <button
            onClick={() => {
              toggleVisiblity(false)
              if (currentRegion.length === 0) setButton(true)
              else setButton(false)
            }}
          >
            Zurück
          </button>
          <button onClick={saveSurvey}>Speichern</button>
        </div>
      )}
    </>
  )
}
