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
  calculationDone,
} from './actions';

class Img extends React.PureComponent {
  componentDidMount() {
    this.props.calculationDone({
      scale: this.componentCalculateScaleFactor(),
      key: this.props.name,
    });
  }
  shouldComponentUpdate(nextProps) {
    return this.props['width-height'] !== nextProps['width-height'];
  }
  componentWillUpdate() {
    this.props.calculationDone({
      scale: this.componentCalculateScaleFactor(),
      key: this.props.name,
    });
  }
  componentCalculateScaleFactor() {
    return (this.img.offsetWidth / this.img.naturalWidth) * this.props.mapScaleFactor;
  }
  render() {
    return (
      <img ref={(ref) => { this.img = ref; }} src={this.props.src} alt={this.props.alt} className={this.props.className} />
    );
  }
}

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  calculationDone: PropTypes.func,
  'width-height': PropTypes.string,
  mapScaleFactor: PropTypes.number,
};

function mapDispatchToProps(dispatch) {
  return {
    calculationDone: (interval) => dispatch(calculationDone(interval)),
  };
}

const mapStateToProps = createStructuredSelector({
  'width-height': makeSelectUiSize(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Img);
