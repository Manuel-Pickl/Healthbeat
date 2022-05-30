import React, { useState } from "react"
import { useAppContext } from "configs/appContext"
import storageTypes from "configs/storageTypes"

import { Container, Content, Schließen } from "./Greeting.styles"

export default function Greeting() {
  const app = useAppContext()
  const rhetoQuest = " Na, heute schon Sport gemacht?"
  const [show, setShow] = useState(true)

  // Zeitabfrage, um die drei unterschiedlichen Begrüßungsformen zu erhalten
  const greetings = (hour = new Date().getHours()) => {
    if (hour > 5 && hour < 11) {
      return (
        <div>
          Guten Morgen {app.user?.displayName}!<p>{rhetoQuest}</p>
        </div>
      )
    } else if (hour > 11 && hour < 18) {
      return (
        <div>
          Guten Tag {app.user?.displayName}!<p>{rhetoQuest}</p>
        </div>
      )
    } else {
      return (
        <div>
          Guten Abend {app.user?.displayName}!<p>{rhetoQuest}</p>
        </div>
      )
    }
  }

  return (
    <Container
      show={
        // show popup only once per sign in
        (show &&
          sessionStorage.getItem(storageTypes.greeted) &&
          !JSON.parse(sessionStorage.getItem(storageTypes.greeted))) ||
        (show && !!!sessionStorage.getItem(storageTypes.greeted))
      }
      onClick={e => {
        e.stopPropagation()
        setShow(false)
        sessionStorage.setItem(storageTypes.greeted, "true")
      }}
    >
      <Content>
        <div className="text">{greetings()}</div>
        <Schließen
          className="okay"
          onClick={() => {
            setShow(false)
            sessionStorage.setItem(storageTypes.greeted, "true")
          }}
        >
          schließen
        </Schließen>
      </Content>
    </Container>
  )
}
