/*
 *
 * TableParent
 *
 */

import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectTableParent from './selectors';
import Table from '../../components/Table';

export class TableParent extends Table { // eslint-disable-line react/prefer-stateless-function
}

TableParent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  TableParent: makeSelectTableParent(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableParent);
