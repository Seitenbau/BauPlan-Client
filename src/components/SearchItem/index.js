/**
*
* SearchItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rem } from '../../utils/helper';

const StyledLink = styled(Link)`
  display: block;
  padding: ${rem(5)};
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};

  &:active,
  &:focus,
  &:hover {
    outline: none;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
  }
`;

class SearchItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledLink to={`/${this.props.prefix}/${this.props.name}`}>
        {this.props.name}
        {this.props.children}
      </StyledLink>
    );
  }
}

SearchItem.propTypes = {
  name: PropTypes.string,
  prefix: PropTypes.string,
};

export default SearchItem;
