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

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Floor from 'containers/Floor';
import saga from './sagas';
import reducer from './reducer';
import { requestTableData, requestProjectData, requestPlans  } from './actions';

import {
  makeSelectPlansData,
  makeSelectTables,
  makeSelectProjects,
  makeSelectActiveScrolledToFloor,
} from './selectors';

import Wrapper from './PlansWrapper';


const FloorWithScrollTarget = withScrollTarget(Floor);

export class Plans extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.requestTableData();
    this.props.requestProjectData();
    this.props.requestPlans();
    this.distanceToTop = this.wrapper.getBoundingClientRect().top;

  }

  /**
   * Get the tables for a single floor
   * and additionally set the active table
   * @param {object} plan
   */
  getFilteredTables(plan) {
    const { params } = this.props.match;
    return this.props.tables
      .filter((table) => table.planId === plan.id)
      .map((table) => {
        // set active table
        table.active = params.type === 'table'
          && (params.identifier === table.name || params.identifier === table.id);
        return table;
      });
  }


  shouldComponentUpdate(nextProps, nextState) {
    // We need to prevent a rerendering when active scrolled to floor changes
    // as this triggers scrolling to the active floor,
    // which is not desired behavior wenn user is scrolling
    if(nextProps.activeScrolledToFloor !== this.props.activeScrolledToFloor) {
      return false;
    }
    return true;
  }

  render() {
    const { projects, plans } = this.props;
    const { params } = this.props.match;
    return (
      <Wrapper innerRef={(ref) => { this.wrapper = ref; }}>
        {plans ? plans.map((plan, i) =>
          <FloorWithScrollTarget
            key={i}
            wrapperDistanceToTop={this.distanceToTop}
            name={plan.name}
            id={plan.id}
            active={params.type === 'floor' && plan.id === params.identifier}
            imageName={plan.imageName}
            mapScaleFactor={plan.mapScaleFactor ? plan.mapScaleFactor : 1}
            labels={plan.labels}
            tables={this.getFilteredTables(plan)}
            projects={projects}
          />) : ''}

      </Wrapper>
    );
  }
}

Plans.defaultProps = {
  plans: [],
};

Plans.propTypes = {
  tables: PropTypes.array,
  projects: PropTypes.array,
  plans: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return {
    requestTableData: (evt) => dispatch(requestTableData()),
    requestProjectData: (evt) => dispatch(requestProjectData()),
    requestPlans: (evt) => dispatch(requestPlans()),
  };
}

const mapStateToProps = createStructuredSelector({
  plans: makeSelectPlansData(),
  tables: makeSelectTables(),
  projects: makeSelectProjects(),
  activeScrolledToFloor : makeSelectActiveScrolledToFloor(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'plans', reducer });
const withSaga = injectSaga({ key: 'plans', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Plans);
