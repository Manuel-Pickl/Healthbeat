import notificationLogo from "assets/notify.png"
import storageTypes from "configs/storageTypes"

/**
 * @param {String} url - current root url
 * @param {String} availableTime - in 5 minutes interval
 * - 0= free
 * - 1= tentative
 * - 2= busy
 * - 3= out of office
 * - 4= working elsewhere.
 *
 * e.g. for a normal work day starting at 8 am till 5 pm
 * "222222222222000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
 */
export function notify(availableTime, url) {
  if (Notification.permission !== "granted") {
    Notification.requestPermission()
  } else {
    const slots = extractFreeTimeslots(availableTime)
    createNotificationTimer(slots, url)
  }
}

/**
 *  URS-005 - Kalender abhängige Erinnerung
 *
 * @param {String} availableTime - in 5 minutes interval
 * - 0= free
 * - 1= tentative
 * - 2= busy
 * - 3= out of office
 * - 4= working elsewhere.
 *
 * e.g. for a normal work day starting at 8 am till 5 pm
 * "222222222222000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
 *
 * @returns {number[]} timeslots in ms
 */
export function extractFreeTimeslots(timeslots) {
  if (timeslots.length === 0 || timeslots.length < 6) return []

  const foundSlots = []
  let counter = 0

  // start at 10 a.m. till 12 a.m.
  // search again 2 p.m till 5 p.m.
  // end when counter is on 6 - (6*5 = max. 30min per day)
  for (let i = 25, j = 25; i < timeslots.length && counter < 6; i++, j = i) {
    if (timeslots[i] === "0") {
      // find slots
      if ((i < 48 && counter === 0) || (counter < 4 && i > 48)) {
        while (timeslots[j] === "0" && j - i < 3) j++
      } else if ((i < 48 && counter < 2) || (counter < 5 && i > 48)) {
        while (timeslots[j] === "0" && j - i < 2) j++
      } else if ((i < 48 && counter < 3) || (counter < 6 && i > 48)) {
        while (timeslots[j] === "0" && j - i < 1) j++
      }

      // save slots in milliseconds
      foundSlots.push((i - 1) * 5 * 60000)
      // count found slots
      counter += j - i

      // adjust pointers
      i = j
      if (counter === 3 || i === 48) {
        i = 71
        j = 71
      }
    }
  }
  return foundSlots
}

/**
 * URS-002 - Erinnerung an Übung
 * @param {Number[]} freeTime - Angabe der verfügbaren Zeiten in millisekunden
 * @param {String} url - root url - e.g. localhost:3000
 *
 */
function createNotificationTimer(freeTime, url) {
  // ToDo:
  // - url ist noch falsch -> an anderer Stelle auch kommentiert - verstehe ich nicht
  // - was soll mit dem zweiten value in freeTime gemacht werden? - map und mit setTimeout kombinieren

  // get complain region
  const complainSurvey = localStorage.getItem(storageTypes.complainSurvey)
  let complainRegion = !!complainSurvey
    ? JSON.parse(complainSurvey)["region"]
    : null

  let regionExerciseMessage =
    complainRegion === null || complainRegion === "Keine Schmerzen"
      ? "Wir haben Übungen für Dich vorbereitet."
      : `Wir haben Übungen gegen ${complainRegion}-Beschwerden für Dich vorbereitet.`

  setTimeout(function () {
    var notification = new Notification("Zeit für etwas Sport", {
      icon: notificationLogo,
      body: `Du hast nun für 15 Minuten keine weiteren Termine\n\n${regionExerciseMessage}`,
    })
    notification.onclick = function () {
      window.open(url)
    }
  }, freeTime[0])

  // set free times
  localStorage.setItem(storageTypes.freeTime, JSON.stringify(freeTime))
}
