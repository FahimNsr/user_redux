import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Home } from "./pages/home";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <div className={"app-container bg-light"}>
                    <Route path="">
                        <Home />
                    </Route>
                </div>
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export { App };
