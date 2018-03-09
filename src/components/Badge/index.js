/**
 *
 * Badge
 *
 */
import styled from 'styled-components';
import React from 'react';
import { PropTypes } from 'prop-types';
import { rem } from '../../utils/helper';
// import styled from 'styled-components';

const StyledBadge = styled.span`
  background-color: ${props => props.color};
  border-radius: 3px; solid ${props => props.color};
  padding: ${rem(2)} ${rem(5)};
  float: right;
`

class Badge extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledBadge {...this.props}>{this.props.name}</StyledBadge>
    );
  }
}

Badge.propTypes = {
  color: PropTypes.string,
  Name: PropTypes.string,
};

export default Badge;
