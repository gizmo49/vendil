import React from "react";
import { Redirect, Route } from "react-router-dom";

export default ({ component: Component, ...rest }) => {
    let authUser = window.sessionStorage.getItem("authUser");

    return (
        <Route
            {...rest}
            render={props =>
                (authUser !== null) ? (
                    <Redirect to={{
                        pathname: "/",
                        state: { from: props.location }
                    }} />
                ) : (
                        <Component {...props} />
                    )
            }
        />
    )
}
