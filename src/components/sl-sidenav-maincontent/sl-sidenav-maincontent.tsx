import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "sl-sidenav-maincontent",
  styleUrl: "sl-sidenav-maincontent.scss",
  scoped: true,
})
export class SlSidenavMaincontent implements ComponentInterface {
  render() {
    return (
      <div class="main">
        <h1>test</h1>
      </div>
    );
  }
}
