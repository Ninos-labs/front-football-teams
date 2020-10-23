import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <div>Hello World</div>} />
    </Switch>
  </Router>
);

export default Routes;
