import { useEffect } from "react"
import { useAppContext } from "configs/appContext"
import { getUserDayCalendar } from "utils/graph"
import { notify } from "utils/notification"
import { findIana } from "windows-iana"

import ComplainSurvey from "modules/complain-survey/components/ComplainSurvey"
import Greeting from "modules/greeting/components"

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
              app.user?.workingHours,
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
      <button onClick={notify}>Notify me!</button>
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
