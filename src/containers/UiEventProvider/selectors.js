import { createSelector } from 'reselect';

/**
 * Direct selector to the uiEventProvider state domain
 */
const selectUiEventProviderDomain = () => state => state.get('uiEvents');

/**
 * Default selector used by UiEventProvider
 */
const makeSelectUiEventProvider = () =>
  createSelector(selectUiEventProviderDomain(), substate => substate);

const makeSelectUiSize = () =>
  createSelector(selectUiEventProviderDomain(), substate =>
    substate.get('width-height')
  );

export default makeSelectUiEventProvider;
export { selectUiEventProviderDomain, makeSelectUiSize };
