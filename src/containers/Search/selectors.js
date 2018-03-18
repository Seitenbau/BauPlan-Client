import { createSelector } from 'reselect';
import { makeSelectTables, makeSelectProjects } from '../Plans/selectors';
/**
 * Direct selector to the searchField state domain
 */
const selectSearchFieldDomain = () => state => state.get('searchField');
/**
 * Other specific selectors
 */
const selectFocused = () =>
  createSelector(selectSearchFieldDomain(), substate => {
    if (!substate) {
      return null;
    }
    return substate.get('focused');
  });

const selectValue = () =>
  createSelector(selectSearchFieldDomain(), substate => {
    if (!substate) {
      return '';
    }
    return substate.get('value').trim();
  });

const makeSelectTablesWithProjects = () =>
  createSelector(
    makeSelectTables(),
    makeSelectProjects(),
    (tables, projects) => {
      return tables.map(table => {
        if (typeof table.projects === 'object') {
          table.projects = table.projects.map(
            prid => projects.filter(pr => pr.id === prid)[0]
          );
        } else {
          table.projects = [projects.filter(pr => pr.id === table.projects)[0]];
        }
        return table;
      });
    }
  );

/**
 * Default selector used by SearchField
 */

const makeSelectSearchField = () =>
  createSelector(selectSearchFieldDomain(), substate => substate);

export default makeSelectSearchField;
export {
  selectSearchFieldDomain,
  selectFocused,
  selectValue,
  makeSelectTablesWithProjects
};
