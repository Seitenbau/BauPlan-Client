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

import { makeSelectPlansData } from 'containers/Plans/selectors';

import { rem } from '../../utils/helper';


const Ul = styled.ul`
  list-style: none;
  position: fixed;
  right: 30px;
  padding: ${rem(60)} ${rem(50)} 0 0;
  color: ${(props) => props.theme.colors.primary};
  & li {
    margin-bottom: ${rem(10)};
  }
`;
const StyledLink = styled(Link)`
  margin-bottom: ${rem(20)};
  padding: ${rem(5)};
  text-decoration: none;
  &:visited {
    color: ${(props) => props.theme.colors.primary};
  }
  &:active,
  &:focus,
  &:hover {
    outline: none;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary}
  }
`;

export class JumpView extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Ul className={this.props.className}>
        {this.props.plans.map((plan, i) => <li key={i}><StyledLink to={`/floor/${plan.id}`}>{plan.name}</StyledLink></li>)}
      </Ul>
    );
  }
}

JumpView.defaultProps = {
  plans: [],
};
JumpView.propTypes = {
  plans: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  plans: makeSelectPlansData(),
});



export default connect(mapStateToProps)(JumpView);
