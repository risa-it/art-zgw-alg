import { Page } from '@playwright/test';

export async function loginAsAdmin(page: Page) {
  await page.goto('http://localhost:8082/auth/realms/valtimo/protocol/openid-connect/auth?client_id=valtimo-console&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fkeycloak%2Fcallback&state=418ea7d0-8ffb-4544-a35a-afb9abfc031d&response_mode=fragment&response_type=code&scope=openid&nonce=7d27ca8a-8b35-419e-9c3a-7189f9a68c6e&code_challenge=4CFNPecu_C0yP5vb4cKVKAY924cU0u3R0jgmSRu-qKI&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
}
