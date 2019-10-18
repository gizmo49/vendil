import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavTab } from 'react-router-tabs';
import "./index.css";
import { Icon } from '../icons';

export default ({ routes }) => (
  <>
    <div className="row">
      <div className="col-lg-3">
        {/* NavTabs that is actual tabs */}
        <ul className="list-unstyled tabs-ul ">
          {routes.filter(route => route.tab).map(({ path, tab, tabIcon }, i) => (
            <li key={`tab_${i}`} >
              <NavTab to={path}>
                <Icon name={tabIcon} />
                <span>{tab}</span>
              </NavTab>
            </li>
          ))}
        </ul>

      </div>
      <div className="col-lg-9">
        <div>
          {renderRoutes(routes)}
        </div>
      </div>
    </div>
  </>
);