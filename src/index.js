import { SuperDom } from "./lib/plume";
import App from "./App";

SuperDom.render({
  el: document.querySelector("#app"),
  component: new App()
});
