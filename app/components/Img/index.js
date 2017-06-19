/**
*
* Img
*
*/

import React, { PropTypes } from 'react';

function Img(props) {
  return (
    <img src={props.src} alt={props.alt} className={props.className} />
  );
}

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Img;
