/**
*
* Floor
*
*/

import React from 'react';
import { PropTypes } from 'prop-types';
import imageLoader from 'utils/ImageLoader';
import RoomLabel from 'components/RoomLabel';
import Table from 'containers/Table';
import { flatten } from 'utils/helper';
import ScaleImg from './ScaleImg';
import StyledFloor from './StyledFloor';
import ImgWrapper from './ImgWrapper';
import Label from './label';


class Floor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageScaleFactor : 1,
    }
  }

  find(id) {
    const ids = flatten([id]);
    if (typeof id !== 'undefined') {
      return this.props.projects.filter((e) => ids.indexOf(e.id) > -1);
    }
    return [];
  }

  handleResize(val) {
    this.setState({'imageScaleFactor': val});
  }

  render() {
    const floorPlanImage = imageLoader(this.props.imageName);
    const scaleFactor = this.state.imageScaleFactor * this.props.mapScaleFactor;
    return (
      <StyledFloor innerRef={(ref) => { this.ref = ref; }}>
        <Label>{this.props.name}</Label>
        <ImgWrapper >
          <ScaleImg
            id={this.props.id}
            name={this.props.name}
            src={floorPlanImage}
            alt={`Floorplan ${this.props.name}`}
            handleResize={this.handleResize.bind(this)}
          />
          {this.props.labels.map((label, i) =>
            <RoomLabel
              key={i}
              scaleFactor={scaleFactor}
              name={label.name}
              left={label.x}
              top={label.y}
            />)}
          {this.props.tables.map((table, j) =>
            <Table
              key={j}
              scaleFactor={scaleFactor}
              className={`table table-${j}`}
              name={table.name}
              number={table.number}
              projects={this.find(table.projects)}
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
  mapScaleFactor: PropTypes.number,
  labels: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  id: PropTypes.string,
  tables: PropTypes.array,
  projects: PropTypes.array,
};

export default Floor;
