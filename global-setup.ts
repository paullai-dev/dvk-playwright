import fs from 'fs';
import path from 'path';
import { chromium } from '@playwright/test';
import { fileURLToPath } from 'url';

// For ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const authFile = path.join(__dirname, '.auth/user.json');

export default async function globalSetup() {
  if (!fs.existsSync(authFile)) {
    fs.mkdirSync(path.dirname(authFile), { recursive: true });

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.fill('#username', 'student');
    await page.fill('#password', 'Password123');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForSelector('text=Logged In', { timeout: 10000 });

    await context.storageState({ path: authFile });
    console.log('✅ Auth state created at', authFile);

    await browser.close();
  }
}
