# Cloudflare Pages Deployment Guide

Your site is integrated with Supabase, which requires API keys to function. These keys are safe to expose in the browser (they are "public" keys), but they must be provided to the build environment.

Since `.env` files are not uploaded to GitHub (for security), you must manually add these keys to Cloudflare Pages.

## Step-by-Step Instructions

1.  **Open your `.env` file** (you have this open in your editor).
2.  **Log in to Cloudflare Dashboard**.
3.  Navigate to **Workers & Pages**.
4.  Click on your project **`joeventure-tours`**.
5.  Go to the **Settings** tab.
6.  Select **Environment variables** from the sidebar.
7.  Click **Add variable** (Production).
8.  Add the first variable:
    *   **Variable name:** `PUBLIC_SUPABASE_URL`
    *   **Value:** *(Copy the value starting with `https://...` from your `.env` file)*
9.  Click **Add variable** again.
10. Add the second variable:
    *   **Variable name:** `PUBLIC_SUPABASE_ANON_KEY`
    *   **Value:** *(Copy the long string starting with `ey...` from your `.env` file)*
11. Click **Save**.

## Trigger a New Deployment

After saving the variables, the current deployment won't update automatically. You must rebuild it:

1.  Go to the **Deployments** tab.
2.  Click the **three dots** (...) next to the latest deployment (or the "Manage" button).
3.  Select **Retry deployment** (or simply push a small change to your git repository to trigger a new build).

Once the new build finishes, your site will have access to Supabase!
