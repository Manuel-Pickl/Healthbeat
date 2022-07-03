import storageTypes from "configs/storageTypes"
import { isAfter, isEqual } from "date-fns"

export const checkDateForSurvey = () => {
  const complainSurvey = localStorage.getItem(storageTypes.complainSurvey)
  if (!!complainSurvey) {
    const date = JSON.parse(complainSurvey)["nextSurveyDate"]
    if (
      !isEqual(new Date(date).getDate(), new Date(Date.now()).getDate()) ||
      isAfter((new Date(date).getDate(), new Date(Date.now()).getDate()))
    ) {
      return false
    } else {
      return true
    }
  }
  return true
}
