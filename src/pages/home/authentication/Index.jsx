import React from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router";

import { Register } from "./Register";
import { Login } from "./Login";
import Logout from "./Logout";

function Authentication() {
    let { path } = useRouteMatch();

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2 mt-5">
                    <div className="card m-3">
                        <Switch>
                            <Route path={`${path}register`} component={Register} />
                            <Route path={`${path}login`} component={Login} />
                            <Route path={`${path}logout`} component={Logout} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Authentication };
