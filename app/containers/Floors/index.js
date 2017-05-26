/*
 *
 * Floors
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Floor from 'components/Floor';

import { requestFloorsSuccess } from './actions';
import content from '../../utils/floors.json';
import { makeSelectFloorsData, makeSelectSystem, makeSelectTables } from './selectors';

import Wrapper from './FloorsWrapper';

// import { requestFloors } from './actions';
// {Children.map(this.props.floors, (floor, i) => <Floor name={floor.name} />)}
export class Floors extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.dispatch(requestFloorsSuccess(content));
  }

  render() {
    return (
      <Wrapper>
        {this.props.floors.map((floor, i) =>
          <Floor
            key={i}
            name={floor.name}
            short={floor.short}
            plan={floor.plan}
            labels={floor.labels}
          />)}
      </Wrapper>
      // tables= {this.props.tables.filter((table) => table.floor == i)}
    );
  }
}

Floors.propTypes = {
  dispatch: PropTypes.func.isRequired,
  floors: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

const mapStateToProps = createStructuredSelector({
  floors: makeSelectFloorsData(),
  system: makeSelectSystem(),
  tables: makeSelectTables(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Floors);
