/*
 * HomePage
 *
 */

import React from 'react';
import Plans from 'containers/Plans';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Plans />
    );
  }
}
