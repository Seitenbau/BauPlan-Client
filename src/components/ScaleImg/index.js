/**
 *
 * ScaleImg
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { makeSelectUiSize } from '../../containers/UiEventProvider/selectors';

class ScaleImg extends React.Component {
  constructor(props) {
    super(props);
    this.doCalculation = this.doCalculation.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    return this.props['width-height'] !== nextProps['width-height'];
  }
  componentWillUpdate() {
    this.doCalculation();
  }
  doCalculation() {
    const scale = this.componentCalculateScaleFactor();
    this.props.handleResize(scale);
  }
  componentCalculateScaleFactor() {
    return this.img.offsetWidth / this.img.naturalWidth;
  }
  render() {
    return (
      <img
        ref={ref => {
          this.img = ref;
        }}
        onLoad={this.doCalculation}
        src={this.props.src}
        alt={this.props.alt}
        className={this.props.className}
      />
    );
  }
}

ScaleImg.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  calculationDone: PropTypes.func,
  'width-height': PropTypes.string,
  id: PropTypes.string,
  handleResize: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  'width-height': makeSelectUiSize()
});

export default connect(mapStateToProps)(ScaleImg);
