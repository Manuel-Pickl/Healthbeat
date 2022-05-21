import { Client, PageIterator } from "@microsoft/microsoft-graph-client"
import { endOfToday, startOfToday } from "date-fns"
import { zonedTimeToUtc } from "date-fns-tz"

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
    .select("displayName,mail,userPrincipalName")
    .get()

  return user
}
// </GetUserSnippet>

// <GetUserWeekCalendarSnippet>
export async function getUserDayCalendar(authProvider, timeZone) {
  ensureClient(authProvider)

  // Generate startDateTime and endDateTime query params
  // to display a day window
  const now = new Date()
  const startDateTime = zonedTimeToUtc(
    startOfToday(now),
    timeZone
  ).toISOString()
  const endDateTime = zonedTimeToUtc(endOfToday(now), timeZone).toISOString()

  // GET /me/calendarview?startDateTime=''&endDateTime=''
  // &$select=subject,organizer,start,end
  // &$orderby=start/dateTime
  // &$top=50
  var response = await graphClient
    .api("/me/calendarview")
    .header("Prefer", `outlook.timezone="${timeZone}"`)
    .query({ startDateTime: startDateTime, endDateTime: endDateTime })
    .select("start,end")
    .orderby("start/dateTime")
    .get()

  if (response["@odata.nextLink"]) {
    // Presence of the nextLink property indicates more results are available
    // Use a page iterator to get all results
    var events = []

    // Must include the time zone header in page
    // requests too
    var options = {
      headers: { Prefer: `outlook.timezone="${timeZone}"` },
    }

    var pageIterator = new PageIterator(
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
