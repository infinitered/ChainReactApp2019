describe("Viewing the Schedule", () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it("should have welcome screen", async () => {
    await expect(element(by.id("WelcomeScreen"))).toBeVisible()
  })
})
