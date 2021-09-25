import React from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { Router } from "react-router";
import { history } from "./helpers";

import { App } from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
