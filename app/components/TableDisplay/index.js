/**
*
* TableDisplay
*
*/

import React, { PropTypes } from 'react';
import ProjectIdentifier from 'components/ProjectIdentifier';
import { prefixNumber } from 'utils/helper';
import config from 'settings/config.json';

import StyledTable from './StyledTable';
import TableSpan from './TableSpan';


class TableDisplay extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  render() {
    return (
      <StyledTable
        scaleFactor={this.props.scaleFactor}
        rotation={this.props.rotation}
        top={this.props.y}
        left={this.props.x}
        width={config.objects.tables.width}
        height={config.objects.tables.depth}
        className={this.props.className}
      >
        <TableSpan fontSize={0.8} scaleFactor={this.props.scaleFactor}>{this.props.name}</TableSpan>
        <ProjectIdentifier scaleFactor={this.props.scaleFactor} projects={this.props.projects} />
        <TableSpan scaleFactor={this.props.scaleFactor} fontSize={0.9} center>{prefixNumber(this.props.number)}</TableSpan>
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
  rotation: PropTypes.number,
  scaleFactor: PropTypes.number,
};

export default TableDisplay;
