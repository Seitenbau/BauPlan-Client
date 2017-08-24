/*
 * HomePage
 *
 */

import React from 'react';
import Plans from 'containers/Plans';
import plans from 'settings/plans.json';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Plans plans={plans} />
    );
  }
}
