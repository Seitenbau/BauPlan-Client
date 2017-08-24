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
const getName = (state, props) => props.name;

const makeSelectScale = () => createSelector(
   selectImgDomain(),
   (substate) => substate.get('scale').toJS()
 );
const makeSelectScaleFactor = () => createSelector(
  [makeSelectScale(), getName],
   (substate, name) => substate.get(name)
 );

export default makeSelectScaleFactor;
export {
  makeSelectScale,
};
