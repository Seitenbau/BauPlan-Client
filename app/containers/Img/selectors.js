import { createSelector } from 'reselect';
import { selectUiEventProviderDomain } from '../UiEventProvider/selectors';
/**
 * Direct selector to the plans state domain
 */
const selectImgDomain = () => (state) => state.get('img');

const makeSelectUiSize = () => createSelector(
  selectUiEventProviderDomain(),
  (substate) => substate.get('width-height')
);

export {
  selectImgDomain,
  makeSelectUiSize,
};
