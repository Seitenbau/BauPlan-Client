/**
*
* Floor
*
*/

import React, { PropTypes } from 'react';
import imageLoader from 'floorplans';
import RoomLabel from 'components/RoomLabel';
import Table from 'containers/Table';

import Img from './Img';
import StyledFloor from './StyledFloor';
import ImgWrapper from './ImgWrapper';
import Label from './label';

class Floor extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const floorPlanImage = imageLoader(this.props.imageName);

    return (
      <StyledFloor>
        <Label>{this.props.name}</Label>
        <ImgWrapper>
          <Img src={floorPlanImage} alt={`Floorplan ${this.props.name}`} />
          {this.props.labels.map((label, i) =>
            <RoomLabel
              key={i}
              name={label.name}
              left={label.x}
              top={label.y}
            />)}

          {this.props.tables.map((table, j) =>
            <Table
              key={j}
              className={`table table-${j}`}
              name={table.name}
              number={table.number}
              projects={table.projects}
              x={table.x}
              y={table.y}
              rotation={table.rotation}
            />)}

        </ImgWrapper>
      </StyledFloor>
    );
  }
}

Floor.propTypes = {
  name: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  labels: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  tables: PropTypes.array,
};


export default Floor;
