import { useEffect } from "react"
import { useAppContext } from "configs/appContext"
import { getUserDayCalendar } from "utils/graph"
import { findIana } from "windows-iana"

import ComplainSurvey from "modules/complain-survey/components/ComplainSurvey"
import Greeting from "modules/greeting/components"

import notificationLogo from "./assets/notify.png"

function App() {
  const app = useAppContext()

  useEffect(() => {
    const loadEvents = async () => {
      if (app.user && app.authProvider) {
        try {
          const ianaTimeZones = findIana(app.user?.timeZone)
          console.log(
            await getUserDayCalendar(
              app.authProvider,
              ianaTimeZones[0].valueOf(),
              app.user?.email
            )
          )
        } catch (err) {
          app.displayError(err.message)
        }
      }
    }

    loadEvents()
  }, [app])

  return (
    <>
      <button onClick={() => app.signIn()}>Sign in</button>
      <button onClick={() => app.signOut()}>Sign out</button>
      <h1>Healthbeat</h1>
      <button onClick={notifyMe}>Notify me!</button>
      <ComplainSurvey />

      <Greeting />
    </>
  )
}

export default App

// request permission on page load
document.addEventListener("DOMContentLoaded", function () {
  if (!Notification) {
    alert("Desktop notifications not available in your browser. Try Chromium.")
    return
  }

  if (Notification.permission !== "granted") Notification.requestPermission()
})

function notifyMe() {
  if (Notification.permission !== "granted") {
    Notification.requestPermission()
  } else {
    var notification = new Notification("Zeit für etwas Sport", {
      icon: notificationLogo,
      body: "Du hast nun für 15 Minuten keine weiteren Termine\n\nWir haben 2 Übungen gegen Hüftbeschwerden für Dich vorbereitet.",
    })
    notification.onclick = function () {
      window.open("http://stackoverflow.com/a/13328397/1269037")
    }
  }
}
