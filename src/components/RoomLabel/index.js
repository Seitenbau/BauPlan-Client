/**
*
* RoomLabel
*
*/

import React from 'react';
import { PropTypes } from 'prop-types';
import Label from './Label';

function RoomLabel(props) {
  return (
    <Label left={props.left} top={props.top} className={props.className}>
      {props.name}
    </Label>
  );
}

RoomLabel.propTypes = {
  name: PropTypes.string,
  left: PropTypes.number,
  top: PropTypes.number,
  className: PropTypes.string,
};

export default RoomLabel;
