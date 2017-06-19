import { createSelector } from 'reselect';

/**
 * Direct selector to the systemProvider state domain
 */
const selectProjectIdentifierDomain = () => (state) => state.get('projectIdentifier');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProjectIdentifier
 */

const makeSelectProjectIdentifier = () => createSelector(
  selectProjectIdentifierDomain(),
  (substate) => substate.toJS()
);

export default makeSelectProjectIdentifier;
export {
  selectProjectIdentifierDomain,
};
