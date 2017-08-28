import { createSelector } from 'reselect';

/**
 * Direct selector to the jumpView state domain
 */
const selectJumpViewDomain = () => (state) => state.get('jumpView');

/**
 * Other specific selectors
 */
const makeSelectPlans = () => createSelector(
  selectJumpViewDomain(),
  (substate) => substate.get('plans')
);

/**
 * Default selector used by JumpView
 */

const makeSelectJumpView = () => createSelector(
  selectJumpViewDomain(),
  (substate) => substate.toJS()
);

export default makeSelectJumpView;
export {
  selectJumpViewDomain,
  makeSelectPlans,
};
