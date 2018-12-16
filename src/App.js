import React, { Component } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import { standardConfig } from './config/index';
import { asyncComponent } from './hoc';

const asyncBaseCalculator = asyncComponent(() => import('./containers/BaseCalculator/BaseCalculator'), { config: standardConfig });

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route path="/" exact component={asyncBaseCalculator} />
            <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
