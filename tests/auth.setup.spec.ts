// @ts-ignore
import dotenv from 'dotenv';
dotenv.config();

import { test, expect } from '@playwright/test';
import acceptCookies from './helpers/acceptCookies';

const authFile = '.auth/auth.json';

test('authenticate and save state', async ({ page }) => {

    // @ts-ignore
    await acceptCookies(page);

    await page.goto(process.env.PRODUCTION_URL);

    await page.getByRole('link', { name: 'U bent niet ingelogd. Instellingen' }).click();

    await page.getByRole('link', { name: 'U bent niet ingelogd. Inloggen U bent niet ingelogd' }).click();

    await page.getByRole('textbox', { name: 'E-mailadres' }).fill(process.env.ACCEPTANCE_USERNAME);
    await page.getByRole('button', { name: 'Ga verder' }).click();

    await page.getByRole('textbox', { name: 'Wachtwoord' }).fill(process.env.ACCEPTANCE_PASSWORD);
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page).not.toHaveURL(/^https:\/\/login\.dpgmedia\.nl/);

    await expect(page).toHaveURL(/https:\/\/(www\.)?volkskrant\.nl.*/);

    await page.context().storageState({ path: authFile });

    console.log('auth.json has been created successfully');
});