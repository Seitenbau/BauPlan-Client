/*
 * View
 *
 */

import React from 'react';
import Plans from 'containers/Plans';
import { Switch, Route } from 'react-router-dom';
import JumpView from 'containers/JumpView';
import Actionbar from 'components/Actionbar';
import Bar from 'components/Bar';
import Header from 'components/Header';

export class View extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Bar color="primary" position="left" />
        <Switch>
          <Route path="/:type?/:identifier?" component={Plans} />
        </Switch>
        <Actionbar />
        <JumpView />
      </div>
    );
  }
}

export default View;
