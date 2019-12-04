import React from 'react';
import { renderRoutes } from 'react-router-config';
import ActionCenter from '../ActionCenter';

export default ({ routes }) => (
  <>

    <div className="container">
      <div className="row">
        <div className="col-xl-8">
          {renderRoutes(routes)}
        </div>
        <div className="col-xl-4">
          <ActionCenter />
        </div>
      </div>
    </div>
  </>
);