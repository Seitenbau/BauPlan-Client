import { createSelector } from 'reselect';
import { selectImgDomain } from '../Img/selectors';
/**
 * Direct selector to the uiEventProvider state domain
 */

/**
 * Other specific selectors
 */


/**
 * Default selector used by UiEventProvider
 */

const makeSelectScale = () => createSelector(
   selectImgDomain(),
   (substate) => substate.get('scale')
 );

export {
  makeSelectScale,
};
