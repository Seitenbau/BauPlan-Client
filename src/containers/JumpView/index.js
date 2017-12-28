/*
 *
 * JumpView
 *
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectPlansData,
  makeSelectActiveScrolledToFloor
} from 'containers/Plans/selectors';

import { rem } from '../../utils/helper';

const Ul = styled.ul`
  list-style: none;
  position: fixed;
  right: 0;
  padding: ${rem(60)} ${rem(50)} 0 0;
  & li {
    margin-bottom: ${rem(10)};
  }
`;
const StyledLink = styled(Link)`
  margin-bottom: ${rem(20)};
  padding: ${rem(5)};
  text-decoration: none;
  &:active,
  &:focus,
  &:hover {
    outline: none;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
  }
  background-color: ${props =>
    props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props =>
    props.active ? props.theme.colors.secondary : props.theme.colors.primary};
`;

export class JumpView extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    const { className, plans, activeScrolledToFloor } = this.props;
    return (
      <Ul className={className}>
        {plans.map((plan, i) => (
          <li key={i}>
            <StyledLink
              active={activeScrolledToFloor === plan.id ? 'active' : undefined}
              to={`/floor/${plan.id}`}
            >
              {plan.name}
            </StyledLink>
          </li>
        ))}
      </Ul>
    );
  }
}

JumpView.defaultProps = {
  plans: []
};
JumpView.propTypes = {
  plans: PropTypes.array,
  className: PropTypes.string,
  activeScrolledToFloor: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

const mapStateToProps = createStructuredSelector({
  plans: makeSelectPlansData(),
  activeScrolledToFloor: makeSelectActiveScrolledToFloor()
});

export default connect(mapStateToProps)(JumpView);
