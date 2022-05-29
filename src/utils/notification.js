import notificationLogo from "assets/notify.png"
/**
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
 */
export function notify(availableTime) {
  if (Notification.permission !== "granted") {
    Notification.requestPermission()
  } else {
    // TODO aufrufen von notifikationsprozessen
    createNotificationTimer([1])
  }
}

// TODO es soll ein timer aufgesetzt werden für die notifications
// TODO jede notification hat eine query-string dynamisch erstellt abhängig vom profil für verschiedene Übungen
/**
 *
 * @param {Number[]} freeTime - Angabe der verfügbaren Zeiten in millisekunden
 *
 */
function createNotificationTimer(freeTime) {
  const notification = new Notification("Zeit für etwas Sport", {
    icon: notificationLogo,
    body: "Du hast nun für 15 Minuten keine weiteren Termine. Wir haben 2 Übungen gegen Hüftbeschwerden für Dich vorbereitet.",
  })

  notification.onclick = function () {
    window.open("http://stackoverflow.com/a/13328397/1269037")
  }
}
