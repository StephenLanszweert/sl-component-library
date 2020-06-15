import { newSpecPage } from '@stencil/core/testing';
import { SlSidenav } from './sl-sidenav';

describe('sl-sidenav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SlSidenav],
      html: `<sl-sidenav></sl-sidenav>`,
    });
    expect(page.root).toEqualHtml(`
      <sl-sidenav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sl-sidenav>
    `);
  });
});
