import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './playwright/tests',
  testMatch: ['**/*.spec.ts'],
  outputDir: './test-results',
  reporter: [['html'],['github']],
});
