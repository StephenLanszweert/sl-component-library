import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "sl-sidenav",
  styleUrl: "sl-sidenav.scss",
  shadow: true,
})
export class SlSidenav implements ComponentInterface {
  render() {
    return (
      <div class="navbar">
        <h1>test</h1>
      </div>
    );
  }
}
