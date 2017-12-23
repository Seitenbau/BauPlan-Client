/*
 *
 * UiEventProvider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectUiEventProvider from './selectors';
import { windowLifeResize } from './actions';

export class UiEventProvider extends React.Component {

  componentWillMount() {
    this.props.resize(this.getSizing());
  }
  componentDidMount() {
    this.props.resize(this.getSizing());
    window.addEventListener('resize', () => this.props.onResizeHandler.apply(this, [this.getSizing()]));
  }
  shouldComponentUpdate(nextProps) {
    return nextProps['width-height'] !== this.props['width-height'];
  }
  componentWillUnmount() {
    window.removeEventListener('resize', () => this.props.onResizeHandler.apply(this, [this.getSizing()]));
  }
  getSizing() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  render() {
    return (
      this.props.children
    );
  }
}

UiEventProvider.propTypes = {
  children: PropTypes.node,
  resize: PropTypes.func,
  onResizeHandler: PropTypes.func,
  'width-height': PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  UiEventProvider: makeSelectUiEventProvider(),
});

function mapDispatchToProps(dispatch) {
  return {
    resize: (sizing) => dispatch(windowLifeResize(sizing)),
    onResizeHandler: _.throttle((sizing) => dispatch(windowLifeResize(sizing)), 100),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UiEventProvider);
