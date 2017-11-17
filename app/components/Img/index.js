/**
*
* Img
*
*/

import React, { PropTypes } from 'react';

class Img extends React.PureComponent {

  render() {
    return (
      <img ref={(ref) => { this.img = ref; }} src={this.props.src} alt={this.props.alt} className={this.props.className} />
    );
  }
}

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Img;
