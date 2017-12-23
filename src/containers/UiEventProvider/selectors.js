import { createSelector } from 'reselect';

/**
 * Direct selector to the uiEventProvider state domain
 */
const selectUiEventProviderDomain = () => (state) => state.get('uiEvents');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UiEventProvider
 */

const makeSelectUiEventProvider = () => createSelector(
  selectUiEventProviderDomain(),
  (substate) => substate
);

export default makeSelectUiEventProvider;
export {
  selectUiEventProviderDomain,
};
