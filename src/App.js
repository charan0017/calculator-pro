import React, { Component } from 'react';

import { BaseCalculator } from './containers';
import { standardConfig } from './config/index';

class App extends Component {
  render() {
    return (
      <BaseCalculator config={standardConfig} />
    );
  }
}

export default App;
