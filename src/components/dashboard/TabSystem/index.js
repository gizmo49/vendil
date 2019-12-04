import React from 'react';
import { renderRoutes } from 'react-router-config';
import "./index.css";
import ActionCenter from '../ActionCenter';

export default ({ routes }) => (
  <>
    <div className="row">
      <div className="col-lg-2">
        {/* NavTabs that is actual tabs */}
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