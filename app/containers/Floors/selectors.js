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

const makeSelectProjects = () => createSelector(
  selectFloorsDomain(),
  (substate) => substate.get('projects')
);

export default makeSelectFloors;
export {
  selectFloorsDomain,
  makeSelectFloorsData,
  makeSelectTables,
  makeSelectProjects
};
