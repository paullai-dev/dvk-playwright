import { test, expect, chromium } from '@playwright/test';
import { URLS } from './const/urls';
// import { setCookies } from './helpers/cookies2';
import acceptCookies from './helpers/acceptCookies';

const baseUrl = URLS.volkskrant;

test.describe('Article - de Volkskrant', () => {
    test.beforeEach(async ({ page }) => {
        const brandName = 'de Volkskrant'; // or whichever brand applies
        await page.goto(
            `${baseUrl}/nieuws-achtergrond/toch-nederlanders-bezweken-aan-hitte-in-kwakkelzomer-van-2024-blijkt-uit-nieuwe-analyse~bb29d890/`
  );
        await acceptCookies(page, brandName, baseUrl);
        //   const acceptBtn = await page.waitForSelector("[id='pg-accept-btn']");
        //   await acceptBtn.click();
});

  test('Article - de Volkskrant has a logo', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'Website logo' })
    ).toBeVisible();
  });

  test('Article - de Volkskrant has bookmark button', async ({ page }) => {
    await expect(page.locator('.selectives-bookmark-button')).toBeVisible();
  });

  test('Article - de Volkskrant has share button', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: 'Delen', exact: true })
    ).toBeVisible();
  });

  test('Article - de Volkskrant has a title', async ({ page }) => {
    await expect(page.locator('[data-test-id="article-title"]')).toBeVisible();
    await expect(page.locator('h1')).toHaveText(
      'Toch Nederlanders bezweken aan hitte in ‘kwakkelzomer’ van 2024, blijkt uit nieuwe analyse'
    );
  });

  test('Article - de Volkskrant has a label', async ({ page }) => {
    await expect(page.locator('[data-test-id="article-label"]')).toBeVisible();
    await expect(page.locator('[data-test-id="article-label"]')).toContainText(
      'Nieuws'
    );
  });

  test('Article - de Volkskrant has a header', async ({ page }) => {
    await expect(page.locator('[data-test-id="header-intro"]')).toBeVisible();
    await expect(page.locator('[data-test-id="header-intro"]')).toContainText(
      'Hoewel Nederland vorig jaar een regenachtige, niet extreem warme zomer kende, zijn er toch een paar honderd mensen vroegtijdig overleden aan de hitte. Dat blijkt uit een nieuwe, nauwkeurige analyse van de sterfte tijdens de zomerhitte, in vakblad Nature Medicine.'
    );
  });

  test('Article - de Volkskrant has an author', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Jonathan Ramos' })).toBeVisible();
    await expect(
      page.locator('[data-test-id="article-author"]').getByRole('link')
    ).toBeVisible;
  });

  test('Article - de Volkskrant has a timestamp', async ({ page }) => {
    await expect(page.getByText('22 september 2025, 19:01')).toBeVisible();
    await expect(page.getByRole('time')).toContainText(
      '22 september 2025, 19:01'
    );
  });

  test('Article - de Volkskrant has a image', async ({ page }) => {
    await expect(
      page.getByRole('img', { name: 'Dit zijn de mooiste zwart-witte hondenrassen.' })
    ).toBeVisible();
  });

  test('Article - de Volkskrant has an image caption', async ({ page }) => {
    await expect(page.getByText('Dit zijn de mooiste zwart-witte hondenrassen.')).toBeVisible();
    await expect(page.locator('img[alt="Dit zijn de mooiste zwart-witte hondenrassen."]')).toBeVisible();
  });
});