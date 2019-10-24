/*
 *
 * Table
 *
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { prefixNumber } from 'utils/helper';

import injectReducer from 'utils/injectReducer';
import TableDisplay from 'components/TableDisplay';

import reducer from './reducer';
import makeSelectTable from './selectors';

export class Table extends React.PureComponent {
  render() {
    const tableNumber = prefixNumber(parseInt(this.props.id, 10));
    return (
      <TableDisplay
        scaleFactor={this.props.scaleFactor}
        className={this.props.className}
        name={this.props.name}
        number={tableNumber}
        projects={this.props.projects}
        x={this.props.x}
        y={this.props.y}
        rotation={this.props.rotation}
      />
    );
  }
}

Table.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.required,
      name: PropTypes.string,
      color: PropTypes.string
    })
  ),
  x: PropTypes.number,
  y: PropTypes.number,
  rotation: PropTypes.number,
  className: PropTypes.string,
  scaleFactor: PropTypes.number
};

const mapStateToProps = createStructuredSelector({
  Table: makeSelectTable()
});

const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'table', reducer });

export default compose(
  withReducer,
  withConnect
)(Table);
