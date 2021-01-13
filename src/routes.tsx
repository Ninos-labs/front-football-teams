import React, { FC } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import * as Modules from 'modules';

const Routes: FC = () => (
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/equipos/ven" />} />
      <Route exact path="/equipos/bol" component={Modules.Bol} />
      <Route exact path="/equipos/bra" component={Modules.Bra} />
      <Route exact path="/equipos/col" component={Modules.Col} />
      <Route exact path="/equipos/ecu" component={Modules.Ecu} />
      <Route exact path="/equipos/peru" component={Modules.Peru} />
      <Route exact path="/equipos/ven" component={Modules.Ven} />
      <Route path="*" render={() => <div>404. Not found.</div>} />
    </Switch>
  </HashRouter>
);

export default Routes;
