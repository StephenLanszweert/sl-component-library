import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "sl-sidenav-maincontent",
  styleUrl: "sl-sidenav-maincontent.scss",
  shadow: true,
})
export class SlSidenavMaincontent implements ComponentInterface {
  render() {
    return (
      <div class="navbar">
        <h1>test</h1>
      </div>
    );
  }
}
