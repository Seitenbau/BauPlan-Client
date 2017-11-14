/*
 *
 * ScrollListener
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import _ from 'lodash';
import { createStructuredSelector } from 'reselect';
import makeSelectScrollListener, {
  makeSelectScrolls,
} from './selectors';
import {
  hitTopLine,
} from './actions';

export class ScrollListener extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // componentWillMount() {
  //   this.props.dispatchScroll({
  //     name: this.props.name
  //   });
  // }
  componentDidMount() {
    window.addEventListener('scroll', () => this.props.dispatchScroll.apply(this, [{
      name: this.props.name,
      client: this.getClient(),
    }]));
  }
  shouldComponentUpdate(nextProps) {
    const index = nextProps.scrolls
      .map((scroll) => scroll.name)
      .indexOf(this.props.name);
    if (index > -1) {
      const scroll = nextProps.scrolls[index];
      return window.location.pathname !== this.props.name && scroll.client.top < 100 && (scroll.client.top + scroll.client.height) > 100;
    }
    return false;
  }
  componentWillUpdate() {
    this.props.pushHistory(this.props.name);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.props.dispatchScroll.apply(this, [{
      name: this.props.name,
      client: this.getClient(),
    }]));
  }
  getClient() {
    return this.element.getBoundingClientRect();
  }
  render() {
    return (
      <div ref={(div) => { this.element = div; }}>
        {this.props.children}
      </div>
    );
  }
}

ScrollListener.propTypes = {
  dispatchScroll: PropTypes.func.isRequired,
  pushHistory: PropTypes.func.isRequired,
  children: PropTypes.node,
  name: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  ScrollListener: makeSelectScrollListener(),
  scrolls: makeSelectScrolls(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchScroll: _.throttle((data) => dispatch(hitTopLine(data)), 100),
    pushHistory: (name) => dispatch(push(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrollListener);
