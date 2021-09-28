import React from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router";

import { HomePage } from "./HomePage";
import { Authentication } from "./authentication";

function Home() {
    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${path}/`}>
                <HomePage />
            </Route>
            <Route path={path}>
                <Authentication />
            </Route>
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export { Home };
