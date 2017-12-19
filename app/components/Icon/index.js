import React, { PropTypes } from 'react';
import { rem } from '../../utils/helper';
import Iconset from '../../utils/images';
// import fullGear from './gear_full.svg';

export default class Icon extends React.Component { //eslint-disable-line

  render() {
    const MyIcon = Iconset[this.props.name ? this.props.name : 0];
    return (
      <MyIcon className={this.props.className} width={rem(this.props.width)} height={rem(this.props.height)} />
    );
  }
}
Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};
