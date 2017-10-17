/*
 *
 * ScrollAnchor
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectScrollAnchor, {
  makeSelectUrlPath,
} from './selectors';
import smoothScroll from './SmoothScroll';

export class ScrollAnchor extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate(nextProps) {
    // figure out url is the same as the registered name
    return nextProps.urlPath !== this.props.urlPath && nextProps.urlPath === this.props.name;
  }
  componentWillUpdate() {
    smoothScroll.scrollTo(this.anchor);
  }
  render() {
    return (
      <div ref={(anchor) => { this.anchor = anchor; }}>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

ScrollAnchor.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  urlPath: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  ScrollAnchor: makeSelectScrollAnchor(),
  urlPath: makeSelectUrlPath(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrollAnchor);
