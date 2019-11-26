import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavTab } from 'react-router-tabs';
import "./index.css";
import { Icon } from '../icons';
import ActionCenter from '../ActionCenter';

export default ({ routes }) => (
  <>
    <div className="row">
      <div className="col-lg-2">
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
      <div className="col-lg-10">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8">
              {renderRoutes(routes)}
            </div>
            <div className="col-xl-4">
              <ActionCenter />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);