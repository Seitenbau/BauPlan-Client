/**
*
* Img
*
*/

import React, { PropTypes } from 'react';
import { importAll } from '../../utils/helper';
const images = importAll(require.context('../../utils/floorplans', false, /\.(png|jpe?g|svg)$/));
// import styled from 'styled-components';


function Img(props) {
  return (
    <img src={images[props.src]} alt={props.src.split('.')[0]} className={props.className} />
  );
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Img;
