import { test, expect } from "@playwright/test";

test.describe("Medic Bot chat", () => {
  test("user can send message and receive response", async ({ page }) => {
    await page.goto("/");
    const welcome = page.getByText("I use the Los Angeles County Prehospital Care Manual", { exact: false });
    await expect(welcome).toBeVisible();

    const input = page.getByRole("textbox", { name: "Message Medic Bot" });
    await input.fill("Chest pain");
    await input.press("Enter");

    await expect(page.getByText("Protocol", { exact: false })).toBeVisible({ timeout: 20_000 });
  });

  test("mobile viewport shows sticky input", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".inputRow")).toBeVisible();
  });
});

