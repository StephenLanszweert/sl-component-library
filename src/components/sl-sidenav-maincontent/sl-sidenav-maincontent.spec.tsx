import { newSpecPage } from '@stencil/core/testing';
import { SlSidenavMaincontent } from './sl-sidenav-maincontent';

describe('sl-sidenav-maincontent', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SlSidenavMaincontent],
      html: `<sl-sidenav-maincontent></sl-sidenav-maincontent>`,
    });
    expect(page.root).toEqualHtml(`
      <sl-sidenav-maincontent>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sl-sidenav-maincontent>
    `);
  });
});
