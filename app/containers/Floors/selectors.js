import { createSelector } from 'reselect';
import { selectSystemProviderDomain } from '../SystemProvider/selectors';
/**
 * Direct selector to the floors state domain
 */
const selectFloorsDomain = () => (state) => state.get('floors');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Floors
 */

const makeSelectFloors = () => createSelector(
  selectFloorsDomain(),
  (substate) => substate.toJS()
);

const makeSelectFloorsData = () => createSelector(
  selectFloorsDomain(),
  (substate) => substate.get('floors').toJS()
);

const makeSelectTables = () => createSelector(
  selectFloorsDomain(),
  (substate) => substate.get('tables')
);

const makeSelectSystem = () => createSelector(
  selectSystemProviderDomain(),
  (substate) => substate.get('system')
);

export default makeSelectFloors;
export {
  selectFloorsDomain,
  makeSelectFloorsData,
  makeSelectSystem,
  makeSelectTables,
};