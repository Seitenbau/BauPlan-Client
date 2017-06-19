/*
 *
 * Plans
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Floor from 'containers/Floor';
import plans from 'settings/plans.json';

import {
  makeSelectPlansData,
  makeSelectTables,
} from './selectors';

import Wrapper from './PlansWrapper';


export class Plans extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { tables } = this.props;
    return (
      <Wrapper>
        {plans.map((plan, i) =>
          <Floor
            key={i}
            name={plan.name}
            id={plan.id}
            imageName={plan.imageName}
            labels={plan.labels}
            tables={tables.filter((table) => table.planId === plan.id)}
          />)}

      </Wrapper>
    );
  }
}

Plans.propTypes = {
  tables: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  plans: makeSelectPlansData(),
  tables: makeSelectTables(),
});


export default connect(mapStateToProps)(Plans);
