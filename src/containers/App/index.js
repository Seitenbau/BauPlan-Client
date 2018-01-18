/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import View from 'containers/View';

export function App() {
  return (
    <Switch>
      <Route path="/" component={View} />
    </Switch>
  );
}

export default App;
