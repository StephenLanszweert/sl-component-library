import { newSpecPage } from '@stencil/core/testing';
import { SlSidenavPage } from './sl-sidenav-page';

describe('sl-sidenav-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SlSidenavPage],
      html: `<sl-sidenav-page></sl-sidenav-page>`,
    });
    expect(page.root).toEqualHtml(`
      <sl-sidenav-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sl-sidenav-page>
    `);
  });
});
