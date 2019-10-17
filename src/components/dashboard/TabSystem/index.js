import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavTab } from 'react-router-tabs';
import "./index.css";

export default ({ routes }) => (
  <>
    <div className="row">
      <div className="col-lg-4">
        {/* NavTabs that is actual tabs */}
        <ul className="list-unstyled tabs-ul ">
          {routes.filter(route => route.tab).map(({ path, tab }, i) => (
            <li key={`tab_${i}`} >
              <NavTab to={path}>
                {tab}
              </NavTab>
            </li>
          ))}
        </ul>

      </div>
      <div className="col-lg-8">
        <div>
          {renderRoutes(routes)}
        </div>
      </div>
    </div>
  </>
);