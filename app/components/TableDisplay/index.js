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
        rotation={this.props.rotation}
        top={this.props.y}
        left={this.props.x}
        width={config.objects.tables.width}
        height={config.objects.tables.depth}
        className={this.props.className}
      >
        <TableSpan fontSize={15}>{this.props.name}</TableSpan>
        <ProjectIdentifier projects={this.props.projects} />
        <TableSpan fontSize={16} center>{prefixNumber(this.props.number)}</TableSpan>
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
};

export default TableDisplay;
