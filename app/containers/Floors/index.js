/*
 *
 * Floors
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Floor from 'components/Floor';

import {
  requestFloorsSuccess,
  requestTableData
} from './actions';
import content from '../../utils/floors.json';
import {
  makeSelectFloorsData,
  makeSelectTables,
  makeSelectProjects
} from './selectors';

import Wrapper from './FloorsWrapper';
import TableParent from '../TableParent';


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
            tables= {this.props.tables
              .filter((table) => table.floor == i || (typeof table.floor === 'undefined' && i == 0))
              .map((tab, i) => <TableParent
                key={i}
                className={`table table-${i}`}
                name={tab.name}
                number={tab.number}
                projects={tab.projects}
                x={tab.x}
                y={tab.y}
                width={this.props.system.objects.table.size[0]}
                height={this.props.system.objects.table.size[1]}
              />)}
          />)}

      </Wrapper>
    );
  }
}

Floors.propTypes = {
  dispatch: PropTypes.func.isRequired,
  floors: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  system: PropTypes.object,
  projects: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  floors: makeSelectFloorsData(),
  tables: makeSelectTables(),
  projects: makeSelectProjects(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Floors);
