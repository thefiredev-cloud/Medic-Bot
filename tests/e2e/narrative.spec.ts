import { test, expect } from "@playwright/test";

test("user can build narrative", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("textbox", { name: "Message the medic bot" }).fill("Shortness of breath");
  await page.getByRole("button", { name: "Send" }).click();
  await expect(page.getByText("Protocol", { exact: false })).toBeVisible({ timeout: 20_000 });

  await page.getByRole("button", { name: "Narrative" }).click();
  await expect(page.getByText("Built narrative", { exact: false })).toBeVisible({ timeout: 20_000 });
});

