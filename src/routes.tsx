import React, { FC } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import * as Modules from 'modules';

const Routes: FC = () => (
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/equipos/ven" />} />
      <Route exact path="/equipos/arg" component={Modules.Arg} />
      <Route exact path="/equipos/belice" component={Modules.Belice} />
      <Route exact path="/equipos/bol" component={Modules.Bol} />
      <Route exact path="/equipos/bra" component={Modules.Bra} />
      <Route exact path="/equipos/col" component={Modules.Col} />
      <Route exact path="/equipos/costarica" component={Modules.Costarica} />
      <Route exact path="/equipos/chile" component={Modules.Chile} />
      <Route exact path="/equipos/ecu" component={Modules.Ecu} />
      <Route exact path="/equipos/elsalvador" component={Modules.ElSalvador} />
      <Route exact path="/equipos/guatemala" component={Modules.Guatemala} />
      <Route exact path="/equipos/honduras" component={Modules.Honduras} />
      <Route exact path="/equipos/nicaragua" component={Modules.Nicaragua} />
      <Route exact path="/equipos/panama" component={Modules.Pan} />
      <Route exact path="/equipos/par" component={Modules.Par} />
      <Route exact path="/equipos/peru" component={Modules.Peru} />
      <Route exact path="/equipos/uruguay" component={Modules.Uru} />
      <Route exact path="/equipos/ven" component={Modules.Ven} />
      <Route path="*" render={() => <div>404. Not found.</div>} />
    </Switch>
  </HashRouter>
);

export default Routes;
