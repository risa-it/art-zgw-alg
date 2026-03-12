import { Page, Locator } from '@playwright/test';

export class LoginPage {

  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.username = page.getByRole('textbox', { name: 'Username or email' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: 'Sign In' });
  }

  async goto() {
    await this.page.goto('http://localhost:8082/auth/realms/valtimo/protocol/openid-connect/auth?client_id=valtimo-console&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fkeycloak%2Fcallback&state=418ea7d0-8ffb-4544-a35a-afb9abfc031d&response_mode=fragment&response_type=code&scope=openid&nonce=7d27ca8a-8b35-419e-9c3a-7189f9a68c6e&code_challenge=4CFNPecu_C0yP5vb4cKVKAY924cU0u3R0jgmSRu-qKI&code_challenge_method=S256');
  }

  async login(username: string, password: string) {
    await this.username.click();
    await this.username.fill(username);
    await this.username.click();
    await this.password.fill(password);
    await this.signInButton.click();
  }
}
    