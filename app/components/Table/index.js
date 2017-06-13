/**
*
* Table
*
*/

import React, { PropTypes } from 'react';
import StyledTable from './StyledTable';
import TableSpan from './TableSpan';
import { prefixNumber } from 'utils/helper';
import ProjectIdentifier from 'components/ProjectIdentifier';
// import styled from 'styled-components';


class Table extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  render() {
    return (
      <StyledTable top={this.props.y} left={this.props.x} width={this.props.width} height={this.props.height} className={this.props.className}>
        <TableSpan>{this.props.name}</TableSpan>
        <TableSpan center>{prefixNumber(this.props.number)}</TableSpan>
        <ProjectIdentifier projects={this.props.project} />
      </StyledTable>
    );
  }
}

Table.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  project: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    short: PropTypes.string,
    color: PropTypes.string,
  })),
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Table;
