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
  render() {
    const { tables } = this.props;
    return (
      <Wrapper>
        {this.props.floors.map((plan, i) =>
          <Floor
            key={i}
            name={plan.name}
            id={plan.id}
            imageName={plan.imageName}
            labels={plan.labels}
            tables={tables.filter((table) => table.planId === plan.id)}
            projects={this.props.projects}
            mapScaleFactor={plan.mapScaleFactor}
            scale={plan.scale}
          />)}

      </Wrapper>
    );
  }
}

Plans.propTypes = {
  tables: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
  floors: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  floors: makeSelectPlansData(),
  tables: makeSelectTables(),
  projects: makeSelectProjects(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Plans);
