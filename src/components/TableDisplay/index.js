/**
*
* TableDisplay
*
*/

import React from 'react';
import { PropTypes } from 'prop-types';
import ProjectIdentifier from 'components/ProjectIdentifier';
import { prefixNumber } from 'utils/helper';
import config from 'settings/config.json';

import StyledTable from './StyledTable';
import TableSpan from './TableSpan';


class TableDisplay extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  render() {
    const x = this.props.x * this.props.scaleFactor;
    const y = this.props.y * this.props.scaleFactor;
    const width = config.objects.tables.width * this.props.scaleFactor;
    const height = config.objects.tables.depth * this.props.scaleFactor;

    return (
      <StyledTable
        rotation={this.props.rotation}
        top={y}
        left={x}
        width={width}
        height={height}
        className={this.props.className}
      >
        <TableSpan fontSize={1.5}>{this.props.name}</TableSpan>
        <ProjectIdentifier projects={this.props.projects} />
        <TableSpan fontSize={1.6} center>{prefixNumber(this.props.number)}</TableSpan>
      </StyledTable>
    );
  }
}

TableDisplay.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    short: PropTypes.string,
    color: PropTypes.string,
  })),
  y: PropTypes.number,
  x: PropTypes.number,
  scaleFactor: PropTypes.number,
  rotation: PropTypes.number,
};

export default TableDisplay;
