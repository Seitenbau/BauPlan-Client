/**
*
* RoomLabel
*
*/

import React from 'react';
import { PropTypes } from 'prop-types';
import Label from './Label';

function RoomLabel(props) {
  const x = props.left * props.scaleFactor;
  const y = props.top * props.scaleFactor;

  return (
    <Label left={x} top={y} className={props.className}>
      {props.name}
    </Label>
  );
}

RoomLabel.propTypes = {
  name: PropTypes.string,
  left: PropTypes.number,
  top: PropTypes.number,
  className: PropTypes.string,
  scaleFactor: PropTypes.number,
};

export default RoomLabel;
