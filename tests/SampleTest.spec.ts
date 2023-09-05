import { test, expect } from "@playwright/test";

test("sample test page", async ({ page }) => {
  await page.goto("http://localhost:4000/sample-test");
  await expect(page.locator("h1")).toHaveText(/Sample Test Page/);

  // フォームの入力
  await page.getByPlaceholder("入力").fill("入力したテキスト");

  // 送信
  await page.getByText("送信").click();

  // 成功メッセージが表示されること
  const successMessage = page.getByRole("status");
  await expect(successMessage).toHaveText(/送信しました/);
  await expect(successMessage).toBeVisible();
});
