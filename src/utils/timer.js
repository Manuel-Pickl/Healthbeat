import storageTypes from "configs/storageTypes"

export const findTimerData = () => {
  const data = JSON.parse(localStorage.getItem(storageTypes.freeTime))

  // starting time
  const time = new Date()
  time.setHours(8)
  time.setMinutes(0)
  time.setSeconds(0)

  // test data
  const testTime = new Date()
  testTime.setHours(16)
  testTime.setMinutes(0)
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

export const parseMS = ms => {
  // calculate passed time
  const time = new Date()
  time.setHours(8)
  time.setMinutes(0)
  time.setSeconds(0)
  const now = new Date()

  const newMS = new Date(time.getTime() + ms) - now.getTime()

  return newMS
}