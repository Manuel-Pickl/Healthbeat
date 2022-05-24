import React, { useState } from "react"
import { useAppContext } from "configs/appContext"

import { Container, Content, Schließen } from "./Greeting.styles"

export default function Greeting() {
  const app = useAppContext()
  const rhetoQuest = " Na, heute schon Sport gemacht?"
  const [show, setShow] = useState(false)

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

  return !show ? (
    <button onClick={() => setShow(!show)}>Pop-Up</button>
  ) : (
    <>
      <Container
        show={show}
        className="unsichtbar"
        onClick={e => {
          e.stopPropagation()
          setShow(false)
        }}
      >
        <Content>
          <p className="text">{greetings()}</p>
          <Schließen className="okay" onClick={() => setShow(false)}>
            schließen
          </Schließen>
        </Content>
      </Container>
      <button onClick={() => setShow(!show)}>Pop-Up</button>
    </>
  )
}
