import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router"
import { AuthenticatedTemplate } from "@azure/msal-react"
import { useAppContext } from "configs/appContext"
import storageTypes from "configs/storageTypes"
import { checkDateForSurvey } from "utils/complainSurvey"
import { getUserDayCalendar } from "utils/graph"
import { notify } from "utils/notification"
import { findIana } from "windows-iana"

import ComplainSurvey from "modules/complain-survey/components"
import Greeting from "modules/greeting/components"
import Navigation from "modules/navigation/components/Navigation"
import Contact from "pages/contact/Contact"
import Exercise from "pages/exercise/Exercise"
import ExerciseFinished from "pages/exerciseFinished/ExerciseFinished"
import ExerciseTimer from "pages/exerciseTimer/ExerciseTimer"
import LandingPage from "pages/landingPage/LandingPage"

function App() {
  const [survey, setSurvey] = useState(checkDateForSurvey())
  const [greeting, setGreeting] = useState(
    sessionStorage.getItem(storageTypes.greeted) &&
      !JSON.parse(sessionStorage.getItem(storageTypes.greeted))
  )
  const app = useAppContext()

  useEffect(() => {
    const loadEvents = async () => {
      if (!!window && app.user && app.authProvider) {
        try {
          // convert time for calendar
          const ianaTimeZones = findIana(app.user?.timeZone)

          // request calendar data
          const calendar = await getUserDayCalendar(
            app.authProvider,
            app.user?.workingHours,
            ianaTimeZones[0].valueOf(),
            app.user?.email
          )

          // destruct data
          const { availabilityView } = calendar[0]

          // create notifications
          !!!localStorage.getItem(storageTypes.timer) &&
            notify(availabilityView, window.location.href)
        } catch (err) {
          app.displayError(err.message)
        }
      }
    }

    loadEvents()

    return () => {
      localStorage.removeItem(storageTypes.timer)
    }
  })

  return (
    <>
      <AuthenticatedTemplate>
        <Greeting greetingShow={greeting} close={setGreeting} />
        {survey && greeting && <ComplainSurvey close={setSurvey} />}
      </AuthenticatedTemplate>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={app.user ? <ExerciseTimer /> : <LandingPage />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/exercise-finished" element={<ExerciseFinished />} />
      </Routes>
    </>
  )
}

export default App

// request permission on page load
!!document &&
  document.addEventListener("DOMContentLoaded", function () {
    if (!Notification) {
      alert(
        "Desktop notifications not available in your browser. Try Chromium."
      )
      return
    }

    if (Notification.permission !== "granted") Notification.requestPermission()
  })
