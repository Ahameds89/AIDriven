import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { config } from '../utils/env';

test.describe('SauceDemo Login', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(config.username, config.password);
    await expect(page).toHaveURL(config.baseURL);
  });

  test('should show error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invalid_user', 'invalid_pass');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Username and password do not match');
  });
}); 