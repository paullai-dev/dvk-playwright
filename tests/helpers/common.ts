import { Page } from '@playwright/test';

export interface HelperArgs {
  page: Page;
  baseURL: string;
}