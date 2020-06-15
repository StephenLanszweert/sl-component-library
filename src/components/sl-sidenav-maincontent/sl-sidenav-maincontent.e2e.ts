import { newE2EPage } from '@stencil/core/testing';

describe('sl-sidenav-maincontent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-sidenav-maincontent></sl-sidenav-maincontent>');

    const element = await page.find('sl-sidenav-maincontent');
    expect(element).toHaveClass('hydrated');
  });
});
