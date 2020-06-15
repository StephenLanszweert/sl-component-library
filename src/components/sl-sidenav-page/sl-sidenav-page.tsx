import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "sl-sidenav-page",
  styleUrl: "sl-sidenav-page.scss",
  shadow: true,
})
export class SlSidenavPage implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
