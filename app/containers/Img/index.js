/**
*
* Img
*
*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectUiSize,
} from './selectors';
import {
  dispatchCalculation,
} from './actions';

class Img extends React.PureComponent {
  constructor(props) {
    super(props);
    this.doCalculation = this.doCalculation.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    return this.props['width-height'] !== nextProps['width-height'];
  }
  componentWillUpdate() {
    this.props.dispatchCalculation({
      scale: this.componentCalculateScaleFactor(),
      id: this.props.id,
    });
  }
  doCalculation() {
    this.props.dispatchCalculation({
      scale: this.componentCalculateScaleFactor(),
      id: this.props.id,
    });
  }
  componentCalculateScaleFactor() {
    return (this.img.offsetWidth / this.img.naturalWidth) * this.props.mapScaleFactor;
  }
  render() {
    return (
      <img ref={(ref) => { this.img = ref; }} onLoad={this.doCalculation} src={this.props.src} alt={this.props.alt} className={this.props.className} />
    );
  }
}

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  dispatchCalculation: PropTypes.func,
  'width-height': PropTypes.string,
  mapScaleFactor: PropTypes.number,
  id: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatchCalculation: (interval) => dispatch(dispatchCalculation(interval)),
  };
}

const mapStateToProps = createStructuredSelector({
  'width-height': makeSelectUiSize(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Img);
