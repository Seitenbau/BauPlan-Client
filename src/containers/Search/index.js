/*
 *
 * SearchField
 *
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Iterable } from 'immutable';
import Icon from 'components/Icon';
import Input from 'components/Input';
import ObjectList from 'components/ObjectList';
import injectReducer from 'utils/injectReducer';
import SearchItem from 'components/SearchItem';
import Badge from 'components/Badge';
import { makeSelectProjects } from '../Plans/selectors';
import { focus, blur, input } from './actions';
import { Link } from 'react-router-dom';

import { fromUrl } from '../../assets/utils/Urlify';

import { Button, Form, Container } from './styles';

import makeSelectSearchField, {
  selectValue,
  makeSelectTablesWithProjects
} from './selectors';

import reducer from './reducer';

export class Search extends React.PureComponent {
  state = { active: false };

  onFocus = () => {
    this.props.dispatch(focus());
  };

  onBlur = () => {
    this.props.dispatch(blur());
  };

  onInput = e => {
    this.setState({ active: true });
    return this.props.dispatch(
      input({
        value: e.target.value
      })
    );
  };

  onEmptySearch = () => {
    this.dispatchInput('*');
  };

  onSubmit = e => {
    e.preventDefault();
  };

  onToggleShowAll = () => {
    this.setState({ active: !this.state.active });
  };

  escape = e => {
    if (e.keyCode === 27) {
      this.setState({ active: false });
    }
  };

  dispatchInput(value) {
    this.setState({ active: true });
    this.props.dispatch(
      input({
        value
      })
    );
  }

  empty = () => {
    //this.setState({ active: false });
    this.props.dispatch(
      input({
        value: ''
      })
    );
  };

  filterTables(search) {
    const tables = this.props.tables.toJS();
    if (!tables.length || search === '*') {
      return tables;
    }
    return tables.filter(
      table => table.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    );
  }

  filterProjects = search => {
    const projects = this.props.projects.toJS();
    if (!projects.length || search === '*') {
      return projects;
    }

    return projects.filter(
      project =>
        project.name.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        project.id.toLowerCase().indexOf(search.toLowerCase()) > -1
    );
  };

  resolveProjects = (pids = []) => {
    const projects = this.props.projects.toJS();
    return pids.map(id => projects.find(p => p.sys_id == id) || null);
  };

  onGetActiveState = () => {
    if (this.state.active) {
      if (this.props.value && this.props.value.length > 0) {
        return true;
      }
      return true;
    }
    return false;
  };

  componentDidMount() {
    window.document.addEventListener('keydown', this.escape);
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Input
          autoFocus
          ref={ref => {
            this.inputRef = ref;
          }}
          value={fromUrl(this.props.value)}
          placeholder="Suche..."
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onInput={this.onInput}
        >
          {this.props.value === '' ? (
            <Button onClick={this.onEmptySearch}>
              <Icon name={'magnifyGlass'} width={20} height={20} />
            </Button>
          ) : (
            ''
          )}

          {this.props.value && this.props.value.length > 0 ? (
            <Button onClick={this.empty}>
              <Icon name={'deleteIcon'} width={20} height={20} />
            </Button>
          ) : (
            ''
          )}
          <Button onClick={this.onToggleShowAll}>
            <Icon
              name="arrow"
              width={20}
              height={20}
              rotate={this.state.active ? 0 : 180}
            />
          </Button>
        </Input>
        <Container active={this.onGetActiveState}>
          <ObjectList
            className="table-list"
            key={0}
            label={'Personen'}
            search={this.props.value}
          >
            {this.filterTables(this.props.value).map((hit, i) => (
              <SearchItem key={i} prefix={'table'} name={hit.name}>
                {hit.projects
                  ? this.resolveProjects(hit.projects).map((p, i) => (
                      <Badge key={i} color={p.color} name={p.id} />
                    ))
                  : ''}
              </SearchItem>
            ))}
            <Link to="/table/Lukas_Ochmann">Lukas</Link>
          </ObjectList>
          <ObjectList
            key={1}
            label={'Projekte / Abteilungen'}
            search={this.props.value}
          >
            {this.filterProjects(this.props.value).map((hit, i) => (
              <SearchItem key={i} prefix={'project'} name={hit.name}>
                <Badge key={i} color={hit.color} name={hit.id} />
              </SearchItem>
            ))}
          </ObjectList>
        </Container>
      </Form>
    );
  }
}

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
  value: PropTypes.string,
  tables: PropTypes.instanceOf(Iterable),
  projects: PropTypes.instanceOf(Iterable),
  active: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  SearchField: makeSelectSearchField(),
  value: selectValue(),
  tables: makeSelectTablesWithProjects(),
  projects: makeSelectProjects()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'searchField', reducer });

export default compose(withConnect, withReducer)(Search);
