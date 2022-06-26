import React, { useEffect } from "react"
import { Route, Routes } from "react-router"
import { AuthenticatedTemplate } from "@azure/msal-react"
import { useAppContext } from "configs/appContext"
import { getUserDayCalendar } from "utils/graph"
import { notify } from "utils/notification"
import { findIana } from "windows-iana"

import Greeting from "modules/greeting/components"
import Navigation from "modules/navigation/components/Navigation"
import ComplainSurvey from "pages/complainSurvey/ComplainSurvey"
import Contact from "pages/contact/Contact"
import Exercise from "pages/exercise/Exercise"
import ExerciseFinished from "pages/exerciseFinished/ExerciseFinished"
import ExerciseTimer from "pages/exerciseTimer/ExerciseTimer"
import LandingPage from "pages/landingPage/LandingPage"

const withApp = Component => props => {
  const app = useAppContext()
  return <Component {...props} app={app} />
}
class App extends React.Component {
  async componentDidMount() {
    if (!!window && this.props.app.user && this.props.app.authProvider) {
      try {
        // convert time for calendar
        const ianaTimeZones = findIana(this.props.app.user?.timeZone)

        // request calendar data
        const calendar = await getUserDayCalendar(
          this.props.app.authProvider,
          this.props.app.user?.workingHours,
          ianaTimeZones[0].valueOf(),
          this.props.app.user?.email
        )

        // destruct data
        const { availabilityView } = calendar[0]

        // create notifications
        notify(availabilityView, window.location.href)
      } catch (err) {
        this.props.app.displayError(err.message)
      }
    }
  }

  render() {
    return (
      <>
        <Navigation />
        <AuthenticatedTemplate>
          <Greeting />
        </AuthenticatedTemplate>
        <Routes>
          <Route
            path="/"
            element={this.props.app.user ? <ExerciseTimer /> : <LandingPage />}
          />
          <Route path="/complain-survey" element={<ComplainSurvey />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/exercise-finished" element={<ExerciseFinished />} />
        </Routes>
      </>
    )
  }
}

export default withApp(App)

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
