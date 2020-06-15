import { newE2EPage } from '@stencil/core/testing';

describe('sl-sidenav-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-sidenav-page></sl-sidenav-page>');

    const element = await page.find('sl-sidenav-page');
    expect(element).toHaveClass('hydrated');
  });
});
