/*
 * HomePage
 *
 */

import React from 'react';
import Plans from 'containers/Plans';
import JumpView from 'containers/JumpView';
import Actionbar from 'components/Actionbar';
import Bar from 'components/Bar';
import Header from 'components/Header';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <Bar color="primary" position="left" />
        <Plans />
        <Actionbar />
        <JumpView />
      </div>
    );
  }
}
