import { test, expect, chromium } from '@playwright/test';
import { setCookies } from './helpers/cookies';

test('opens Volkskrant with cookies set', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();

  await setCookies(context);

  const page = await context.newPage();
  await page.goto('https://www.volkskrant.nl/');

  await expect(page.getByRole('banner').filter({ hasText: 'Zoeken Krant U bent ingelogd.' }).getByRole('link').first()).toBeVisible();

  await browser.close();
});