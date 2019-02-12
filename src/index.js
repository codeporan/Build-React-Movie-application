
import React from 'react';
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from "./registerServiceWorker";
import reducers from "./reducers";
import App from "./containers/App";
import "./style/style.css";

const createStoreWithMiddleware = applyMiddleware()(createStore);

const rootEl = document.getElementById("root");
let render = () => {
  ReactDOM.render(
    <Provider
      store={createStoreWithMiddleware(reducers, composeWithDevTools())}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./containers/App", () => {
    setTimeout(render);
  });
}

render();
registerServiceWorker();
