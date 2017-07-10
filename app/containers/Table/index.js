/*
 *
 * Table
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TableDisplay from 'components/TableDisplay';

import makeSelectTable from './selectors';

export class Table extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <TableDisplay />
    );
  }
}

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Table: makeSelectTable(),
});


export default connect(mapStateToProps)(Table);
