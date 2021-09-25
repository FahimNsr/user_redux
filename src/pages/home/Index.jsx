import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { HomePage } from "./HomePage";
import { Authentication } from "./authentication";

function Home() {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route component={Authentication} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export { Home };
