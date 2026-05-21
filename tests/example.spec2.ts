import test, { expect } from '@playwright/test';

test('test1', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/logged-in-successfully/');
    await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
    await expect(page.getByText('Congratulations student. You')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
});