import { test, expect, chromium } from '@playwright/test';
import { URLS } from './const/urls';
import { setCookies } from './helpers/cookies2';

const baseUrl = URLS.volkskrant;

test.describe('Article - de Volkskrant', () => {

  test.beforeEach(async ({ page, context }) => {
    // Set cookies before navigating to the page
    await setCookies(context);

    // Now navigate to the article
    await page.goto(
      `${baseUrl}/nieuws-achtergrond/toch-nederlanders-bezweken-aan-hitte-in-kwakkelzomer-van-2024-blijkt-uit-nieuwe-analyse~bb29d890/`
    );
  });

  test('Article - de Volkskrant has a logo', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'Website logo' })
    ).toBeVisible();
  });

});
