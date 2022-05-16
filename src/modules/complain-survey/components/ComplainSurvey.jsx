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
  const [rangeVal, setRangeVal] = useState(false)

  return (
    <>
      {!visbility ? (
        <div>
          <p>Wo hast du heute Beschwerden?</p>
          <ul>
            {regions.map(region => (
              <li>
                <input type="radio" value={region} key={region} name="pain" />
                {region}
              </li>
            ))}
          </ul>
          <button onClick={() => toggleVisiblity(true)}>
            Aktualisieren und Speichern
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
            onChange={event => setRangeVal(event.target.value)}
          />
          <p>
            Dein Schmerzgrad liegt bei:{" "}
            <b>{rangeVal + " - " + complaintDegree[rangeVal]}</b>
          </p>

          <button onClick={() => toggleVisiblity(false)}>Zurück</button>
        </div>
      )}
    </>
  )
}
