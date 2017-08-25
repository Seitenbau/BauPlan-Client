/*
 * HomePage
 *
 */

import React from 'react';
import Plans from 'containers/Plans';
import JumpView from 'containers/JumpView';
import Bar from 'components/Bar';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Bar left />
        <Plans />
        <JumpView />
        <Bar right />
      </div>
    );
  }
}
