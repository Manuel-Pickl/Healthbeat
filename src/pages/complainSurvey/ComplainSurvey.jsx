import React, { useEffect } from "react"
import { useNavigate } from "react-router"
import storageTypes from "configs/storageTypes"
import { isAfter, isEqual } from "date-fns"

import CS from "modules/complain-survey/components"

function ComplainSurvey() {
  const navigate = useNavigate()

  useEffect(() => {
    // TODO code wieder hinzufuegen
    // redirect if survey date is not due
    //const complainSurvey = localStorage.getItem(storageTypes.complainSurvey)
    // if (!!complainSurvey) {
    //   const date = JSON.parse(complainSurvey)["nextSurveyDate"]
    //   if (
    //     !isEqual(new Date(date).getDate(), new Date(Date.now()).getDate()) ||
    //     isAfter((new Date(date).getDate(), new Date(Date.now()).getDate()))
    //   ) {
    //     navigate("/")
    //   }
    // }
  })

  return <CS />
}

export default ComplainSurvey
