import React from 'react';
import { PropTypes } from 'prop-types';
import Iconset from '../../utils/images';
import StyledIcon from './styledIcon';

export default class Icon extends React.Component { //eslint-disable-line

  render() {
    const MyIcon = Iconset[this.props.name ? this.props.name : 0];
    return (
      <StyledIcon src={MyIcon} className={this.props.className} {...this.props} />
    );
  }
}
Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};
