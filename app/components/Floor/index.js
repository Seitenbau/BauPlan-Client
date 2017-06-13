/**
*
* Floor
*
*/

import React, { PropTypes, Children } from 'react';
// import styled from 'styled-components';
import Img from './Img';
import StyledFloor from './StyledFloor';
import ImgWrapper from './ImgWrapper';
import Label from './label';
import RoomLabel from '../RoomLabel';


class Floor extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    // {this.props.short}
    return (
      <StyledFloor>
        <Label>{this.props.name}</Label>
        <ImgWrapper>
          <Img src={this.props.plan} />
          {this.props.labels.map((label, i) =>
            <RoomLabel
              key={i}
              name={label.name}
              left={label.x}
              top={label.y}
            />)
          }
          {
            Children.toArray(this.props.tables)
          }
        </ImgWrapper>
      </StyledFloor>
    );
  }
}

Floor.propTypes = {
  name: PropTypes.string.isRequired,
  plan: PropTypes.string.isRequired,
  labels: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default Floor;
