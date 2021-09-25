import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Home } from "./pages/home";

function App() {
    return (
        <div className={"app-container bg-ligh"}>
            <BrowserRouter>
                <Switch>
                    <Route component={Home} />
                    <Redirect from="*" to="/" />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export { App };
