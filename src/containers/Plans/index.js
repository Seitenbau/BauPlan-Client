/*
 *
 * Plans
 *
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import withScrollTarget from 'components/ScrollTarget';
import { Iterable } from 'immutable';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Floor from 'containers/Floor';
import saga from './sagas';
import reducer from './reducer';
import { requestTableData, requestProjectData, requestPlans } from './actions';

import {
  makeSelectPlansData,
  makeSelectTables,
  makeSelectProjects,
  makeSelectActiveScrolledToFloor
} from './selectors';

import Wrapper from './PlansWrapper';

const FloorWithScrollTarget = withScrollTarget(Floor);

export class Plans extends React.Component {
  componentDidMount() {
    this.props.requestTableData();
    this.props.requestProjectData();
    this.props.requestPlans();
  }

  /**
   * Get the tables for a single floor
   * and additionally set the active table
   * @param {array} plan
   */
  getFilteredTables(plan) {
    if (!this.props.tables) {
      return [];
    }
    return this.props.tables
      .toJS()
      .filter(table => table.planId === plan.id)
      .map(table => {
        table.active = this.isActiveTable(table);
        return table;
      });
  }

  isActiveTable(table) {
    const { params } = this.props.match;

    if (
      params.type === 'table' &&
      (params.identifier === table.name ||
        params.identifier === table.id.toString())
    ) {
      // table is specifically selected
      return true;
    }

    if (params.type === 'project') {
      if (table.projects.includes(params.identifier)) {
        // project id matches
        return true;
      }
      if (
        this.props.projects.toJS().filter(project => params.identifier).length >
        0
      ) {
        // project name matches
        return true;
      }
    }
    return false;
  }

  shouldComponentUpdate(nextProps, nextState) {
    // We need to prevent a rerendering when activeScrolledToFloor changes,
    // as changing the props triggers rerendering of the component, and therefore
    // scrolling to the active floor.
    // This is undesirable, when the user himself is scrolling
    if (nextProps.activeScrolledToFloor !== this.props.activeScrolledToFloor) {
      return false;
    }
    if (nextProps !== this.props) {
      return true;
    }
    return false;
  }

  render() {
    const { projects, plans } = this.props;
    const { params } = this.props.match;
    return (
      <Wrapper
        innerRef={ref => {
          this.wrapper = ref;
        }}
      >
        {plans && plans.size
          ? plans
              .toJS()
              .map((plan, i) => (
                <FloorWithScrollTarget
                  key={i}
                  name={plan.name}
                  id={plan.id}
                  active={
                    params.type === 'floor' && plan.id === params.identifier
                  }
                  imageUri={plan.imageUri}
                  mapScaleFactor={plan.mapScaleFactor ? plan.mapScaleFactor : 1}
                  labels={plan.labels}
                  tables={this.getFilteredTables(plan)}
                  projects={projects.toJS()}
                />
              ))
          : ''}
      </Wrapper>
    );
  }
}

Plans.propTypes = {
  tables: PropTypes.instanceOf(Iterable),
  projects: PropTypes.instanceOf(Iterable),
  plans: PropTypes.instanceOf(Iterable)
};

const mapDispatchToProps = dispatch => ({
  requestTableData: evt => dispatch(requestTableData()),
  requestProjectData: evt => dispatch(requestProjectData()),
  requestPlans: evt => dispatch(requestPlans())
});

const mapStateToProps = createStructuredSelector({
  plans: makeSelectPlansData(),
  tables: makeSelectTables(),
  projects: makeSelectProjects(),
  activeScrolledToFloor: makeSelectActiveScrolledToFloor()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'plans', reducer });
const withSaga = injectSaga({ key: 'plans', saga });

export default compose(withReducer, withSaga, withConnect)(Plans);
