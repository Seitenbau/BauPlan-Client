import { createSelector } from 'reselect';

/**
 * Direct selector to the searchField state domain
 */
const selectSearchFieldDomain = () => (state) => state.get('searchField');

/**
 * Other specific selectors
 */
const selectFocused = () => createSelector(
  selectSearchFieldDomain(),
  (substate) => substate.get('focused')
);

const selectValue = () => createSelector(
  selectSearchFieldDomain(),
  (substate) => substate.get('value').trim()
);

/**
 * Default selector used by SearchField
 */

const makeSelectSearchField = () => createSelector(
  selectSearchFieldDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSearchField;
export {
  selectSearchFieldDomain,
  selectFocused,
  selectValue,
};
