/*
 *
 * SearchField
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Icon from 'components/Icon';
import Input from 'components/Input';
import { focus, blur, input } from './actions';
import makeSelectSearchField, { selectValue } from './selectors';
import { rem } from '../../utils/helper';

const Button = styled.button`
  height: ${rem(35)};
  width: ${rem(35)};
  cursor: pointer;
  &:active,
  &:focus,
  &:hover {
    outline: none;
    background-color: ${(props) => props.theme.colors.primary};
    svg {
      fill: ${(props) => props.theme.colors.secondary}
    }
  }
`;

const Form = styled.form`
  flex-grow: 2;
`;

export class SearchField extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onInput = this.onInput.bind(this);
    this.empty = this.empty.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onFocus() {
    this.props.dispatch(focus());
  }
  onBlur() {
    this.props.dispatch(blur());
  }
  onInput() {
    return (e) => this.props.dispatch(input({
      value: e.target.value,
    }));
  }
  onSubmit() {
    return (e) => {
      e.preventDefault();
    };
  }
  empty() {
    this.props.dispatch(input({
      value: '',
    }));
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit()}>
        <Input
          autoFocus
          ref={(ref) => { this.inputRef = ref; }}
          value={this.props.value}
          placeholder="Suche..."
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onInput={this.onInput()}
        >
          <Button>
            <Icon name={'magnifyGlass'} width={20} height={20} />
          </Button>
          {this.props.value && this.props.value.length > 0 ? <Button onClick={this.empty}>
            <Icon name={'deleteIcon'} width={20} height={20} />
          </Button> : ''}
        </Input>
      </Form>
    );
  }
}

SearchField.propTypes = {
  dispatch: PropTypes.func.isRequired,
  value: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  SearchField: makeSelectSearchField(),
  value: selectValue(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
