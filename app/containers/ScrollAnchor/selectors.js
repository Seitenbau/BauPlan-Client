import { createSelector } from 'reselect';

/**
 * Direct selector to the scrollAnchor state domain
 */
const selectScrollAnchorDomain = () => (state) => state.get('scrollAnchor');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ScrollAnchor
 */

const makeSelectScrollAnchor = () => createSelector(
  selectScrollAnchorDomain(),
  (substate) => substate.toJS()
);
const makeSelectUrlPath = () => createSelector(
  selectScrollAnchorDomain(),
  (substate) => substate.get('urlPath')
);

export default makeSelectScrollAnchor;
export {
  selectScrollAnchorDomain,
  makeSelectUrlPath,
};
