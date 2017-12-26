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

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Floor from 'components/Floor';
import saga from './sagas';
import reducer from './reducer';
import { requestTableData, requestProjectData, requestPlans  } from './actions';

import {
  makeSelectPlansData,
  makeSelectTables,
  makeSelectProjects,
} from './selectors';

import Wrapper from './PlansWrapper';


export class Plans extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.requestTableData();
    this.props.requestProjectData();
    this.props.requestPlans();
  }

  render() {
    const { tables, projects, floors } = this.props;
    return (
      <Wrapper>
        {floors ? floors.map((plan, i) =>
          <Floor
            key={i}
            name={plan.name}
            id={plan.id}
            imageName={plan.imageName}
            mapScaleFactor={plan.mapScaleFactor ? plan.mapScaleFactor : 1}
            labels={plan.labels}
            tables={tables.filter((table) => table.planId === plan.id)}
            projects={projects}
          />) : ''}

      </Wrapper>
    );
  }
}

Plans.propTypes = {
  tables: PropTypes.array,
  projects: PropTypes.array,
  floors: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return {
    requestTableData: (evt) => dispatch(requestTableData()),
    requestProjectData: (evt) => dispatch(requestProjectData()),
    requestPlans: (evt) => dispatch(requestPlans()),
  };
}

const mapStateToProps = createStructuredSelector({
  floors: makeSelectPlansData(),
  tables: makeSelectTables(),
  projects: makeSelectProjects(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'plans', reducer });
const withSaga = injectSaga({ key: 'plans', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Plans);
