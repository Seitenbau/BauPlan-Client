/**
*
* RoomLabel
*
*/

import React, { PropTypes } from 'react';
import Label from './Label';

function RoomLabel(props) {
  return (
    <Label left={props.left} top={props.top}>
      {props.name}
    </Label>
  );
}

RoomLabel.propTypes = {
  name: PropTypes.string,
  left: PropTypes.number,
  top: PropTypes.number,
};

export default RoomLabel;
