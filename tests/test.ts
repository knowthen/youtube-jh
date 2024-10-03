import { expect, test } from '@playwright/test';

test('home page has expected h1 with correct text', async ({ page }) => {
	await page.goto('/');
	const h1 = page.locator('h1');
	await expect(h1).toBeVisible();
	await expect(h1).toHaveText('YouTube Video Search');
});

test('search form elements are present and functional', async ({ page }) => {
	await page.goto('/');

	const searchInput = page.locator('input[name="q"]');
	await expect(searchInput).toBeVisible();

	const orderSelect = page.locator('select[name="order"]');
	await expect(orderSelect).toBeVisible();

	const searchButton = page.locator('button[type="submit"]');
	await expect(searchButton).toBeVisible();
	await expect(searchButton).toHaveText('Search');
});

test('search query updates URL and title', async ({ page }) => {
	await page.goto('/');

	await page.fill('input[name="q"]', 'test query');
	await page.selectOption('select[name="order"]', 'date');
	await page.click('button[type="submit"]');

	await expect(page).toHaveURL(/\?q=test\+query&order=date/);

	await expect(page).toHaveTitle('YouTube Video Search : test query');
});

test('displays video results when search is successful', async ({ page }) => {
	await page.goto('/?q=sqlite+json');

	const videoItems = page.locator('.grid > div');
	await expect(videoItems).toHaveCount(10);
});
