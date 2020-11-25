import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import * as Modules from 'modules';

const Routes: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/equipos/ven" />} />
      <Route exact path="/equipos/ven" component={Modules.Ven} />
      <Route path="*" render={() => <div>404. Not found.</div>} />
    </Switch>
  </Router>
);

export default Routes;
