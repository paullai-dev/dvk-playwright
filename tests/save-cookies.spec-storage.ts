import { test, expect, chromium } from '@playwright/test';
import * as fs from 'fs';

test.describe('Login and Save Cookies', () => {
  test('should log in and save cookies to a file', async () => {
    // Launch browser manually (we could also use test context)
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to the login page
    await page.goto('https://www.acceptance.volkskrant.nl/', { waitUntil: 'networkidle' });

    // Click login and wait for navigation to the dashboard
    await page
        .locator('//*[@id="data-gtm"]')
        .click();

    // Fill in login form
    await page.fill('#username', 'yourUsername');
    await page.fill('#password', 'yourPassword');

    // Click login and wait for navigation to the dashboard
    await Promise.all([
      page.waitForURL('https://your-app.com/dashboard'),
      page.click('#loginButton'),
    ]);

    // Verify successful login
    await expect(page).toHaveURL('https://your-app.com/dashboard');
    await expect(page.locator('h1')).toContainText('Dashboard'); // adjust as needed

    // Get cookies
    const cookies = await context.cookies();

    // Save cookies to file
    fs.writeFileSync('cookies.json', JSON.stringify(cookies, null, 2));
    console.log('✅ Cookies saved to cookies.json');

    // Close the browser
    await browser.close();
  });
});
