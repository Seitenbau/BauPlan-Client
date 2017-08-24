/**
*
* Floor
*
*/

import React, { PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import imageLoader from 'floorplans';
import RoomLabel from 'components/RoomLabel';
import Table from 'containers/Table';
import { flatten } from 'utils/helper';
// import { makeSelectScale } from './selectors';
import Img from './Img';
import StyledFloor from './StyledFloor';
import ImgWrapper from './ImgWrapper';
import Label from './label';

class Floor extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  find(id) {
    const ids = flatten([id]);
    if (typeof id !== 'undefined') {
      return this.props.projects.filter((e) => ids.indexOf(e.id) > -1);
    }
    return [];
  }
  render() {
    const floorPlanImage = imageLoader(this.props.imageName);
    return (
      <StyledFloor innerRef={(ref) => { this.ref = ref; }}>
        <Label>{this.props.name}</Label>
        <ImgWrapper >
          <Img id={this.props.id} mapScaleFactor={this.props.mapScaleFactor} name={this.props.name} src={floorPlanImage} alt={`Floorplan ${this.props.name}`} />
          {this.props.labels.map((label, i) =>
            <RoomLabel
              key={i}
              name={label.name}
              left={label.x}
              top={label.y}
              scaleFactor={this.props.scale}
            />)}

          {this.props.tables.map((table, j) =>
            <Table
              key={j}
              scaleFactor={this.props.scale}
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
  labels: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  id: PropTypes.string,
  tables: PropTypes.array,
  projects: PropTypes.array,
  mapScaleFactor: PropTypes.number,
  scale: PropTypes.number,
};


// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }
//
//
// const mapStateToProps = createStructuredSelector({
//   scaleFactor: makeSelectScale(),
// });


export default Floor;
