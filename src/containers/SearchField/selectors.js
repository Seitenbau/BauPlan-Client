import { createSelector } from 'reselect';

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

/**
 * Default selector used by SearchField
 */

const makeSelectSearchField = () =>
  createSelector(selectSearchFieldDomain(), substate => substate);

export default makeSelectSearchField;
export { selectSearchFieldDomain, selectFocused, selectValue };
