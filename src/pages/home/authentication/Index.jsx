import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Register } from "./Register";

function Authentication() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2 mt-5">
                    <div className="card m-3">
                        <Switch>
                            <Route path="/register" component={Register} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Authentication };
