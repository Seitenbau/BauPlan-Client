/*
 *
 * SystemProvider
 *
 */

import React, { PropTypes, Children } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectSystemProvider from './selectors';

export class SystemProvider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {Children.only(this.props.children)}
      </div>
    );
  }
}

SystemProvider.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const mapStateToProps = createStructuredSelector({
  SystemProvider: makeSelectSystemProvider(),
});

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

export default connect(mapStateToProps)(SystemProvider); // , mapDispatchToProps
