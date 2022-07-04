import storageTypes from "configs/storageTypes"

export const findTimerData = () => {
  const data = JSON.parse(localStorage.getItem(storageTypes.freeTime))

  if (data) {
    // starting time
    const time = new Date()
    time.setHours(8)
    time.setMinutes(0)
    time.setSeconds(0)

    // test data
    const testTime = new Date()
    testTime.setHours(20)
    testTime.setMinutes(30)
    testTime.setSeconds(0)
    data.push(testTime.getTime() - time.getTime())

    // current time
    const now = new Date()

    for (let i of data) {
      const current = time.getTime() + i

      if (now.getTime() <= current) {
        return i
      }
    }
  }
  return -1
}

export const parseMS = ms => {
  if (ms) {
    // calculate passed time
    const time = new Date()
    time.setHours(8)
    time.setMinutes(0)
    time.setSeconds(0)
    const now = new Date()

    const newMS = new Date(time.getTime() + ms) - now.getTime()

    return newMS
  } else return 0
}

// returns formated string time MM:SS
export const parseTime = ms => {
  const minutes = Math.floor(ms / 1000 / 60)
  const seconds = Math.floor((ms / 1000) % 60)
  const sec = seconds < 10 ? "0" + seconds : seconds
  const min = minutes < 10 ? "0" + minutes : minutes

  return min + ":" + sec
}
