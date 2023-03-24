import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking the Draw button displays the div with id = “choices”', async () => {
    await driver.findElement(By.id("draw")).click()
    await driver.sleep(1000)
    const robots = await driver.findElement(By.id('choices'))
    const robotsDisplayed = await robots.isDisplayed()
    expect(robotsDisplayed).toBe(true)
})

test('clicking an “Add to Duo” button displays the div with id = “player-duo”', async () => {
    await driver.findElement(By.id("draw")).click()
    await driver.sleep(1000)
    await driver.findElement(By.className("bot-btn")).click()
    await driver.sleep(1000)
    const chosenRobotDiv = await driver.findElement(By.id('player-duo'))
    const chosenRobotDisplayed = await chosenRobotDiv.isDisplayed()
    expect(chosenRobotDisplayed).toBe(true)
})