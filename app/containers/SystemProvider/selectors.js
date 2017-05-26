import { createSelector } from 'reselect';

/**
 * Direct selector to the systemProvider state domain
 */
const selectSystemProviderDomain = () => (state) => state.get('system');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SystemProvider
 */

const makeSelectSystemProvider = () => createSelector(
  selectSystemProviderDomain(),
  (substate) => substate.get('system')
);

export default makeSelectSystemProvider;
export {
  selectSystemProviderDomain,
};
