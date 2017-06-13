import { createSelector } from 'reselect';

/**
 * Direct selector to the tableParent state domain
 */
const selectTableParentDomain = () => (state) => state.get('tableParent');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TableParent
 */

const makeSelectTableParent = () => createSelector(
  selectTableParentDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTableParent;
export {
  selectTableParentDomain,
};
