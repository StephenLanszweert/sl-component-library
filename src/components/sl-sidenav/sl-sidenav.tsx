import {
  Component,
  ComponentInterface,
  h,
  Element,
  Prop,
  Method,
} from "@stencil/core";
import { changeGlobalThemeVariables } from "../../utils/utils";

@Component({
  tag: "sl-sidenav",
  styleUrl: "sl-sidenav.scss",
  scoped: true,
})
export class SlSidenav implements ComponentInterface {
  @Element() el;

  rootElement: any;

  @Prop() width;
  @Prop() theme;

  constructor() {}

  @Method() async changeGlobalCss(incoming) {
    changeGlobalThemeVariables(incoming);
  }
  @Method() async changeComponentCss(incoming) {
    console.log("test" + incoming);
    // console.log(this.el);
    this.rootElement
      .querySelector(".navbar")
      .style.setProperty("--main-color", incoming);
    // this.rootElement.style.setProperty("--main-color", incoming);
    // console.log(this.el.shadowRoot.querySelector("host"));
  }

  componentDidLoad() {
    // this.rootElement = this.el.documentElement .querySelectorAll(".navbar");
    this.rootElement = this.el;
    console.log(this.rootElement.querySelector(".navbar"));
    this.rootElement.querySelector(".navbar").style.width = this.width + "%";
    console.log(this.rootElement);
    // this.rootElement = this.el;
    // this.rootElement.style.width = this.width + "%";
    // console.log(this.rootElement);
  }

  render() {
    return (
      <div class="navbar">
        <slot></slot>
      </div>
    );
  }
}
