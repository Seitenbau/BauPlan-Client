/*
 * HomePage
 *
 */

import React from 'react';
import Plans from 'containers/Plans';
import JumpView from 'containers/JumpView';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Plans />
        <JumpView />
      </div>
    );
  }
}
