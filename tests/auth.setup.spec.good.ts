// import { expect, test as setup } from '@playwright/test';

// const authFile = 'playwright/.auth/user.json';

// setup('authenticate', async ({ page }) => {
//   await page.goto('https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2F');
//
//   await page.locator('#loginUsername').fill('username');
//   await page.locator('#loginPassword').fill('password');
//   await page.getByRole('button', { name: 'Log In' }).click();

//   await page.context().storageState({ path: authFile });
//    await context.storageState({ path: 'playwright/.auth/user.json' });

import dotenv from 'dotenv';
dotenv.config();

// const authFile = 'playwright/.auth/user.json';

import { test } from '@playwright/test';

test('authenticate and save state', async ({ page }) => {
  await page.goto(process.env.TEST_URL);
  await page.fill('input[id="username"]', process.env.USERNAME)
  await page.fill('input[id="password"]', process.env.PASSWORD)
  await page.getByRole('button', { name: 'Submit' }).click();

//   await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
//   await expect(page.getByText('Congratulations student. You')).toBeVisible();
//   await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

//   await page.context().storageState({ path: 'auth.json' });
//
//   console.log('auth.json has been created successfully');
});

// import acceptCookies from './helpers/acceptCookies';

// test('authenticate and save state', async ({ page }) => {
//     const brandName = 'de Volkskrant'; // or whichever brand applies
//   await page.goto('/');
//   await acceptCookies(page);
//   await page.fill('#username', process.env.TEST_USERNAME);
//   await page.locator('[data-test="position-header-desktop-home"]').getByRole('link', { name: 'Log in' }).click();
//   await page.fill('#username', "selectives+masteraccount@persgroep.net");
//   await page.getByRole('button', { name: 'Ga verder' }).click();
//   await page.getByRole('textbox', { name: 'Wachtwoord' }).fill('no news is good news');
//   await page.getByText('account account Inloggen').click();
//   await page.getByRole('button', { name: 'Log in' }).click();
//   await page.fill('#password', process.env.TEST_PASSWORD);
//   await page.click('#login-button');
//   await page.waitForURL('/protected');
//   await page.context().storageState({ path: 'auth.json' });
// });