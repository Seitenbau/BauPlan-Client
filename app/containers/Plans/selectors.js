import { createSelector } from 'reselect';
/**
 * Direct selector to the plans state domain
 */
const selectPlansDomain = () => (state) => state.get('plans');

const makeSelectPlansData = () => createSelector(
  selectPlansDomain(),
  (substate) => substate.get('plans')
);

const makeSelectTables = () => createSelector(
  selectPlansDomain(),
  (substate) => substate.get('tables')
);

const makeSelectProjects = () => createSelector(
  selectPlansDomain(),
  (substate) => substate.get('projects')
);

export {
  selectPlansDomain,
  makeSelectPlansData,
  makeSelectTables,
  makeSelectProjects,
};
