/**
*
* Input
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { rem, shadeColor } from '../../utils/helper';

const Container = styled.span`
  background-color: ${(props) => shadeColor(props.theme.colors.primary, 0.9)};
  height: ${rem(35)};
  display: inline-flex;
  justify-content: space-between;
  width: 300px;
`;

const InputField = styled.input`
  width: 100%;
  border: none;
  border-radius: 0;
  margin-left: 5px;
  border: ${rem(1)} solid ${(props) => shadeColor(props.theme.colors.primary, 0.9)};
  font-style: italic;

  &:focus {
    font-style: normal;
    outline: none;
  }
`;

class Input extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Container>
        <InputField
          autofocus={this.props.autoFocus}
          value={this.props.value}
          type="text"
          onInput={this.props.onInput}
          placeholder={this.props.placeholder}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
        />
        {this.props.children ? React.Children.toArray(this.props.children) : ''}
      </Container>
    );
  }
}

Input.propTypes = {
  children: PropTypes.node,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
  onInput: PropTypes.func,
};

export default Input;
