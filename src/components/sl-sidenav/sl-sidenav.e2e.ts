import { newE2EPage } from '@stencil/core/testing';

describe('sl-sidenav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-sidenav></sl-sidenav>');

    const element = await page.find('sl-sidenav');
    expect(element).toHaveClass('hydrated');
  });
});
