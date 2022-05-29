import { extractFreeTimeslots } from "../notification"

describe("Testen der extrahier Funktion von timeslots", () => {
  it("Testen der freien Zeiten um 10 und 14", async () => {
    expect(
      extractFreeTimeslots(
        "222222222222000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
      )
    ).toMatchObject([24 * 5 * 60000, 71 * 5 * 60000])
  })

  it("Testen der freien Zeiten um 10:05, 10:15, 11:15 und 14", async () => {
    expect(
      extractFreeTimeslots(
        "2222222222222000000000000020222222222222000000000000000000000000000000000000000000000000000000000000000000000"
      )
    ).toMatchObject([
      24 * 5 * 60000,
      26 * 5 * 60000,
      39 * 5 * 60000,
      71 * 5 * 60000,
    ])
  })
})
