import { BrowserContext } from '@playwright/test';

export async function setCookies(context: BrowserContext) {
  await context.addCookies([
    {
      name: 'pgConsentCache',
      value: '"isValid":true',
      domain: '.volkskrant.nl',
      path: '/',
    },
  ]);
}