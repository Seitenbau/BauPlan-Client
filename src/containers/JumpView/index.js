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
import { Iterable } from 'immutable';

import {
  makeSelectPlansData,
  makeSelectActiveScrolledToFloor
} from 'containers/Plans/selectors';
import ExpandingBox from '../../components/ExpandingBox';

import { rem } from '../../utils/helper';

const Ul = styled.ul`
  width: 100%;
  list-style: none;
  right: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const Li = styled.li`
  margin-bottom: ${rem(20)};
`;
const StyledLink = styled(Link)`
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
  render() {
    const { className, plans, activeScrolledToFloor } = this.props;
    return (
      <Ul className={className}>
        {plans &&
          plans.toJS().map((plan, i) => (
            <Li key={i}>
              <StyledLink
                active={
                  activeScrolledToFloor === plan.id ? 'active' : undefined
                }
                to={`/floor/${plan.id}`}
              >
                <ExpandingBox name={plan.name} short={plan.short} />
              </StyledLink>
            </Li>
          ))}
      </Ul>
    );
  }
}

JumpView.propTypes = {
  plans: PropTypes.instanceOf(Iterable),
  className: PropTypes.string,
  activeScrolledToFloor: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

const mapStateToProps = createStructuredSelector({
  plans: makeSelectPlansData(),
  activeScrolledToFloor: makeSelectActiveScrolledToFloor()
});

export default connect(mapStateToProps)(JumpView);
