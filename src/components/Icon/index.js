import React from 'react';
import { PropTypes } from 'prop-types';
import Iconset from 'assets/images';
import StyledIcon from './styledIcon';

export class Icon extends React.Component {
  render() {
    const MyIcon = Iconset[this.props.name ? this.props.name : 0];
    return (
      <StyledIcon
        src={MyIcon}
        className={this.props.className}
        {...this.props}
      />
    );
  }
}
Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string
};

export default Icon;
