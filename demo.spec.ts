//demo.spec.ts

import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {

  await page.goto('https://www.browserstack.com/');

});

