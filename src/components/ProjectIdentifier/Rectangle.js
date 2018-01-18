import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { rem } from 'utils/helper';

const Rectangle = styled.span`
  width: ${rem(9)};
  height: ${rem(9)};
  border: 1px solid #000000;
  background-color: ${prop => prop.color};
`;

class RectangleComponent extends React.Component {
  render() {
    return (
      <Rectangle
        scaleFactor={this.props.scaleFactor}
        className={`${this.props.className} projectIdentifier-reactangle`}
        color={this.props.color}
      />
    );
  }
}

RectangleComponent.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  scaleFactor: PropTypes.number
};

export default RectangleComponent;
