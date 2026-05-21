import { expect, test as setup } from "@playwright/test"
import path from 'path'

const authFile = path.join(__dirname, '../playwright/.auth/user.json')

setup("authenticate", async ({ page }) => {
  // login
  await page.goto("https://practicetestautomation.com/practice-test-login/")
  await page.locator('input[id="username"]').fill(process.env.USER)
  await page.locator('input[id="password"]').fill(process.env.PASSWORD)
  await page.getByLabel("Submit").click()
  await expect(page.getByLabel("Logged In Successfully")).toBeVisible()
  await page.context().storageState({ path: authFile })
})