/*
 *
 * JumpView
 *
 */

import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { rem } from '../../utils/helper';
import {
  makeSelectPlans,
} from './selectors';

const Ul = styled.ul`
  list-style: none;
  position: fixed;
  right: 30px;
  padding: ${rem(60)} ${rem(50)} 0 0;
  color: ${(props) => props.theme.colors.primary};
  & li {
    margin-bottom: ${rem(20)};
    padding: ${rem(2)};
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.secondary}

    }
  }
`;

export class JumpView extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Ul className={this.props.className}>
        {this.props.plans.map((plan, i) => <li key={i}><Link to={`/floor/${plan.id}`}>{plan.name}</Link></li>)}
      </Ul>
    );
  }
}
// {/* <ul>
//   {this.props.plans.map((plan, i) => <li key={i}>{plan.name}</li>)}
// </ul> */}
JumpView.defaultProps = {
  plans: [],
};
JumpView.propTypes = {
  plans: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  plans: makeSelectPlans(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JumpView);
