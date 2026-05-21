import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

// load environment variables from .env file
if (!process.env.CI) {
  dotenv.config();
}

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 5,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    baseURL: process.env.ACCEPTANCE_URL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    launchOptions: {
      slowMo: 1000,
    },
        viewport: null,
        launchOptions: {
          args: ["--start-maximized"]
        },
  // Give failing tests 3 retry attempts
  retries: 3,
  },

  projects: [
    {
      name: 'setup',
      testMatch: 'tests/auth.setup.spec.ts', // Runs once to save auth state
    },
    {
      name: 'chromium',
      use: { storageState: '.auth/auth.json' },  // Correct relative path to auth.json
      dependencies: ['setup'],
      },
  ],
});
