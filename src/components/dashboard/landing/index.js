import React, { Component } from "react";
import { Router, Switch, Route, Redirect} from "react-router-dom";
import { createBrowserHistory } from "history";
import IconBar from "../iconbar";
import DashboardHome from "../dashboard";
import VendHome from "../vend";
import Posts from '../Posts';

const NotFound = () => (<h6 className="text-center">404</h6>);
// const Posts = () => (<h6>Posts</h6>);
const Drafts = () => (<h6>drafts</h6>);
const Published  = () => (<h6>piblished </h6>);
const Deleted = () => (<h6>deleted</h6>);

const hist = createBrowserHistory();


const routes = [
  {
    path: '/posts',
    component: Posts,
    routes: [
      {
        path: '/posts',
        exact: true,
        component: () => <Redirect replace to="/posts/drafts" />
      },
      {
        path: '/posts/drafts',
        component: Drafts,
        tab: 'Drafts'
      },
      {
        path: '/posts/published',
        component: Published,
        tab: 'Published'
      },
      {
        path: '/posts/deleted',
        component: Deleted,
        tab: 'Deleted'
      }
    ]
  }
];


class Landing extends Component {

    render = () => {

        return (
            <>
                <Router history={hist}>
                    <div>
                        <IconBar />
                        <div id="content">
                            <div className="container">
                                <Switch>
                                    <Route exact path="/dashboard" component={(routerprops) => <DashboardHome {...routerprops} />} />
                                    <Route exact path="/vend" component={() => <VendHome />} />
                                    {RoutesWithSubRoutes(routes)}
                                    <Route exact path="*" render={() => <NotFound />} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Router>
            </>
        )

    }

}

const RoutesWithSubRoutes = routes =>
    routes.map((route, i) => (
        <Route
            key={i}
            exact={route.exact || false}
            path={route.path}
            render={props => <route.component {...props} routes={route.routes} />}
        />
    ));


export default Landing;