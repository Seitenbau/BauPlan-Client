/*
 *
 * UiEventProvider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';

import makeSelectUiEventProvider from './selectors';
import { windowLifeResize } from './actions';
import reducer from './reducer';

export class UiEventProvider extends React.Component {
  componentWillMount() {
    this.props.resize(this.getSizing());
  }
  componentDidMount() {
    this.props.resize(this.getSizing());
    window.addEventListener('resize', () =>
      this.props.onResizeHandler.apply(this, [this.getSizing()])
    );
  }
  shouldComponentUpdate(nextProps) {
    return nextProps['width-height'] !== this.props['width-height'];
  }
  componentWillUnmount() {
    window.removeEventListener('resize', () =>
      this.props.onResizeHandler.apply(this, [this.getSizing()])
    );
  }
  getSizing() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
  render() {
    return this.props.children;
  }
}

UiEventProvider.propTypes = {
  children: PropTypes.node,
  resize: PropTypes.func,
  onResizeHandler: PropTypes.func,
  'width-height': PropTypes.string
};

const mapStateToProps = createStructuredSelector({
  UiEventProvider: makeSelectUiEventProvider()
});

function mapDispatchToProps(dispatch) {
  return {
    resize: sizing => dispatch(windowLifeResize(sizing)),
    onResizeHandler: debounce(sizing => dispatch(windowLifeResize(sizing)), 10)
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'uiEvents', reducer });

export default compose(withReducer, withConnect)(UiEventProvider);
