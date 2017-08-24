/*
 *
 * Plans
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Floor from 'containers/Floor';


import {
  makeSelectPlansData,
  makeSelectTables,
  makeSelectProjects,
} from './selectors';

import Wrapper from './PlansWrapper';


export class Plans extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      plans: props.plans,
    };
  }
  render() {
    console.log(this.props);
    const { tables } = this.props;
    return (
      <Wrapper>
        {this.props.plans.map((plan, i) =>
          <Floor
            key={i}
            name={plan.name}
            id={plan.id}
            imageName={plan.imageName}
            labels={plan.labels}
            tables={tables.filter((table) => table.planId === plan.id)}
            projects={this.props.projects}
            mapScaleFactor={plan.mapScaleFactor}
          />)}

      </Wrapper>
    );
  }
}

Plans.propTypes = {
  tables: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
  plans: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  plans: makeSelectPlansData(),
  tables: makeSelectTables(),
  projects: makeSelectProjects(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Plans);
