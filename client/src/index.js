import React from "react";
import ReactDOM from "react-dom";
import "./css/Master.css";
import "semantic-ui-css/semantic.min.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const render = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

render();

if (module.hot) {
  module.hot.accept("./components/App", () => render());
}

registerServiceWorker();
