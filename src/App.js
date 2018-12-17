import React, { Component } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import { standardCalculatorConfig, scientificCalculatorConfig } from './config/index';
import { asyncComponent } from './hoc';

const asyncBaseCalculator = asyncComponent(() => import('./containers/BaseCalculator/BaseCalculator'), { config: standardCalculatorConfig });
const asyncScientificCalculator = asyncComponent(() => import('./containers/BaseCalculator/BaseCalculator'), { config: scientificCalculatorConfig });

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route path="/scientific" component={asyncScientificCalculator} />
            <Route path="/" exact component={asyncBaseCalculator} />
            <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
