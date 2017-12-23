import { createSelector } from 'reselect';

/**
 * Direct selector to the table state domain
 */
const selectTableParentDomain = () => (state) => state.get('table');

const makeSelectTableParent = () => createSelector(
  selectTableParentDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTableParent;
export {
  selectTableParentDomain,
};
