import { createSelector } from 'reselect';

/**
 * Direct selector to the scrollListener state domain
 */
const selectScrollListenerDomain = () => (state) => state.get('scrollListener');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ScrollListener
 */

const makeSelectScrollListener = () => createSelector(
  selectScrollListenerDomain(),
  (substate) => substate.toJS()
);
const makeSelectScrolls = () => createSelector(
  selectScrollListenerDomain(),
  (substate) => substate.get('scrolls').toJS()
);

export default makeSelectScrollListener;
export {
  selectScrollListenerDomain,
  makeSelectScrolls,
};
