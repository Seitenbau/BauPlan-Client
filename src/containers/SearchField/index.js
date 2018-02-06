/*
 *
 * SearchField
 *
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Icon from 'components/Icon';
import Input from 'components/Input';
import ObjectList from 'components/ObjectList';
import { focus, blur, input } from './actions';
import makeSelectSearchField, { selectValue, selectTables } from './selectors';
import { makeSelectTables } from '../Plans/selectors';
import { rem } from '../../utils/helper';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './sagas';
import TableDisplay from 'components/TableDisplay';

import reducer from './reducer';


const Button = styled.button`
  height: ${rem(35)};
  width: ${rem(35)};
  cursor: pointer;
  &:active,
  &:focus,
  &:hover {
    outline: none;
    background-color: ${props => props.theme.colors.primary};
    svg {
      fill: ${props => props.theme.colors.secondary};
    }
  }
`;

const Form = styled.form`
  flex-grow: 2;
  z-index: 3;
`;

export class SearchField extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onInput = this.onInput.bind(this);
    this.empty = this.empty.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onEmptySearch = this.onEmptySearch.bind(this);
  }
  onFocus() {
    this.props.dispatch(focus());
  }
  onBlur() {
    this.props.dispatch(blur());
  }
  onInput() {
    return e =>
      this.props.dispatch(
        input({
          value: e.target.value
        })
      );
  }
  onEmptySearch() {
    return () => this.dispatchInput('*');
  }
  onSubmit() {
    return e => {
      e.preventDefault();
    };
  }
  dispatchInput(value) {
    this.props.dispatch(
      input({
        value,
      })
    );
  }
  empty() {
    this.props.dispatch(
      input({
        value: ''
      })
    );
  }
  filterTables(search) {
    if (search === '*') {
      return this.props.tables;
    }
    return this.props.tables.filter((table) => table.name.toLowerCase().indexOf(search.toLowerCase()) > -1);
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit()}>
        <Input
          autoFocus
          ref={ref => {
            this.inputRef = ref;
          }}
          value={this.props.value}
          placeholder="Suche..."
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onInput={this.onInput()}
        >
          <Button>
            <Icon name={'magnifyGlass'} width={20} height={20} />
          </Button>

          {this.props.value && this.props.value.length > 0 ? (
            <Button onClick={this.empty}>
              <Icon name={'deleteIcon'} width={20} height={20} />
            </Button>
          ) : (
            ''
          )}
        </Input>
        <ObjectList hits={this.filterTables(this.props.value)} search={this.props.value} active={this.props.value && this.props.value.length > 0} />
      </Form>
    );
  }
}

SearchField.propTypes = {
  dispatch: PropTypes.func.isRequired,
  value: PropTypes.string,
  tables: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  SearchField: makeSelectSearchField(),
  value: selectValue(),
  tables: makeSelectTables()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'searchField', reducer });

export default compose(withConnect, withReducer)(SearchField);
