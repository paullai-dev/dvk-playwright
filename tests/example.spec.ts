import test, { expect } from '@playwright/test';

test('Article bottom is Visible', async ({ page }) => {
    await page.goto('https://www.volkskrant.nl/binnenland/compacte-slaapplek-achter-een-gordijntje-slapen-in-een-podhotel-steeds-populairder~be545f50/');
    await expect(page.locator('[id="PURCHASE_VERTICAL__OVERLAY"]')).toBeHidden();
});

