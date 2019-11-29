import React from "react";
import { Redirect, Route } from "react-router-dom";

export default ({ component: Component, SaveContinue, ...rest }) => {
    let authUser = window.sessionStorage.getItem("authUser");

    return (
        <Route
            {...rest}
            render={props =>
                (authUser === null) ? (
                    <Redirect to={{
                        pathname: "/sign-in",
                        state: { from: props.location }
                    }} />
                ) : (
                        <Component {...props} />
                    )
            }
        />
    )
}