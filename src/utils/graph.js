import {
  AuthenticationProvider,
  Client,
} from "@microsoft/microsoft-graph-client"
import { zonedTimeToUtc } from "date-fns-tz"

// zum testen der API:
// https://developer.microsoft.com/en-us/graph/graph-explorer

let graphClient = undefined

function ensureClient(authProvider) {
  if (!graphClient) {
    graphClient = Client.initWithMiddleware({
      authProvider: authProvider,
    })
  }

  return graphClient
}

export async function getUser(authProvider) {
  ensureClient(authProvider)

  // Return the /me API endpoint result as a User object
  const user = await graphClient
    .api("/me")
    // Only retrieve the specific fields needed
    .select("displayName,mail,mailboxSettings,userPrincipalName")
    .get()

  return user
}
// </GetUserSnippet>

/**
 * *  URS-005 - Kalender abhängige Erinnerung
 *
 * @param {AuthenticationProvider} authProvider
 * @param {Object} workingHours
 * @param {String} timeZone
 * @param {String} mail
 * @returns
 */
export async function getUserDayCalendar(
  authProvider,
  workingHours,
  timeZone,
  mail
) {
  ensureClient(authProvider)

  const { startTime, endTime } = workingHours

  const startingTime = new Date()
  const endingTime = new Date()

  // adjust to working hours
  let temp = startTime.split(".")[0].split(":")
  startingTime.setHours(+temp[0])
  startingTime.setMinutes(+temp[1])
  startingTime.setMilliseconds(+temp[2])

  temp = endTime.split(".")[0].split(":")
  endingTime.setHours(+temp[0])
  endingTime.setMinutes(+temp[1])
  endingTime.setMilliseconds(+temp[2])

  // config
  const scheduleInformation = {
    schedules: [mail],
    startTime: {
      dateTime: zonedTimeToUtc(startingTime, timeZone).toISOString(),
      timeZone,
    },
    endTime: {
      dateTime: zonedTimeToUtc(endingTime, timeZone).toISOString(),
      timeZone,
    },
    availabilityViewInterval: 5,
  }

  // request
  const response = await graphClient
    .api("/me/calendar/getSchedule")
    .post(scheduleInformation)

  return response.value
}
