import { test, expect } from "@playwright/test";

test.describe("Medic Bot chat", () => {
  test("user can send message and receive response", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("I'm EmergiBot")).toBeVisible();

    const input = page.getByRole("textbox", { name: "Message the medic bot" });
    await input.fill("Chest pain");
    await input.press("Enter");

    await expect(page.getByText("Protocol", { exact: false })).toBeVisible({ timeout: 20_000 });
  });

  test("mobile viewport shows sticky input", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".inputRow")).toBeVisible();
  });
});

