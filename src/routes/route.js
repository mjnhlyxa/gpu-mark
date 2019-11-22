import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from '../containers/main/main';
import TestPage from '../containers/test/testpage';

function Routes() {
    return (
        <Switch>
            <Route
                exact
                path="/test"
                component={TestPage}
            />
            <Route exact path="/" component={MainPage} />
            )}
        </Switch>
    );
}

export default Routes;
