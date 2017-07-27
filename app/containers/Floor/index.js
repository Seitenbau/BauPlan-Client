/**
*
* Floor
*
*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import imageLoader from 'floorplans';
import RoomLabel from 'components/RoomLabel';
import Table from 'containers/Table';
import { flatten } from 'utils/helper';
import makeSelectScaleFactor from './selectors';
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
          <Img mapScaleFactor={this.props.mapScaleFactor} name={this.props.name} scale={this.props['width-height']} src={floorPlanImage} alt={`Floorplan ${this.props.name}`} />
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
              scaleFactor={this.props.scaleFactor}
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
  tables: PropTypes.array,
  projects: PropTypes.array,
  'width-height': PropTypes.string,
  mapScaleFactor: PropTypes.number,
  scaleFactor: PropTypes.number,
};

Floor.defaultProps = {
  scaleFactor: 1,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const makeMapStateToProps = () => {
  const selectScaleFactor = makeSelectScaleFactor();
  /* eslint-disable */
  const mapStateToProps = (state, props) => {
    return {
      scaleFactor: selectScaleFactor(state, props),
    }
  };
  /* eslint-enable */
  return mapStateToProps;
};


export default connect(makeMapStateToProps, mapDispatchToProps)(Floor);
