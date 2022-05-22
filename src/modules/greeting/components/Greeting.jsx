import React from "react"
import { useAppContext } from "configs/appContext"

import PopUp from "./PopUp"

export default function Greeting() {
  const app = useAppContext()
  const rhetoQuest = " Na, heute schon Sport gemacht?"

  const greetings = (hour = new Date().getHours()) => {
    if (hour > 5 && hour < 11) {
      return (
        <div>
          Guten Morgen {app.user?.displayName}!<p>{rhetoQuest}</p>
        </div>
      )
    } else if (hour > 11 && hour < 20) {
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

  return <PopUp content={greetings()} />
}
