import { useEffect } from "react"
import { Route, Routes } from "react-router"
import { AuthenticatedTemplate } from "@azure/msal-react"
import { ReactComponent as Contact } from "assets/buttons/contact.svg"
import { ReactComponent as Home } from "assets/buttons/home.svg"
import { ReactComponent as Login } from "assets/buttons/login.svg"
import { ReactComponent as Member } from "assets/buttons/member.svg"
import { useAppContext } from "configs/appContext"
import { getUserDayCalendar } from "utils/graph"
import { notify } from "utils/notification"
import { findIana } from "windows-iana"

import NavigationButton from "modules/common/components/buttons/components/NavigationButton"
import Greeting from "modules/greeting/components"
import Navigation from "modules/navigation/components/Navigation"
import ComplainSurvey from "pages/complainSurvey/ComplainSurvey"
import LandingPage from "pages/landingPage/LandingPage"

function App() {
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
          notify(availabilityView, window.location.href)
        } catch (err) {
          app.displayError(err.message)
        }
      }
    }

    loadEvents()
  }, [app])

  return (
    <>
      <Navigation />
      <NavigationButton SVG={Home} text={"Startseite"} link={"/"} />
      <NavigationButton SVG={Member} text={"Mitglied werden!"} link={"/"} />
      <NavigationButton SVG={Contact} text={"Kontakt"} link={"/"} />
      <NavigationButton SVG={Login} text={"Log in"} link={"/"} />

      <AuthenticatedTemplate>
        <Greeting />
      </AuthenticatedTemplate>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/complain-survey" element={<ComplainSurvey />} />
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
