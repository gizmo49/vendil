import React from "react";
import { Route } from "react-router-dom";

export default (routes) =>
    routes.map((route, i) => (
        <Route
            key={i}
            exact={route.exact || false}
            path={route.path}
            render={props => <route.component {...props} routes={route.routes} />}
        />
    ));
