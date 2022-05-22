import { Client, PageIterator } from "@microsoft/microsoft-graph-client"
import { endOfDay, startOfDay } from "date-fns"
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

// <GetUserWeekCalendarSnippet>
export async function getUserDayCalendar(authProvider, timeZone, mail) {
  ensureClient(authProvider)

  const now = new Date()

  const scheduleInformation = {
    schedules: [mail],
    startTime: {
      dateTime: zonedTimeToUtc(startOfDay(now), timeZone).toISOString(),
      timeZone,
    },
    endTime: {
      dateTime: zonedTimeToUtc(endOfDay(now), timeZone).toISOString(),
      timeZone,
    },
    availabilityViewInterval: 15,
  }

  const response = await graphClient
    .api("/me/calendar/getSchedule")
    .post(scheduleInformation)

  if (response["@odata.nextLink"]) {
    // Presence of the nextLink property indicates more results are available
    // Use a page iterator to get all results
    const events = []

    // Must include the time zone header in page
    // requests too
    const options = {
      headers: { Prefer: `outlook.timezone="${timeZone}"` },
    }

    const pageIterator = new PageIterator(
      graphClient,
      response,
      event => {
        events.push(event)
        return true
      },
      options
    )

    await pageIterator.iterate()

    return events
  } else {
    return response.value
  }
}
// </GetUserWeekCalendarSnippet>
