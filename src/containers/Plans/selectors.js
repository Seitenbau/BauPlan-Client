import { createSelector } from 'reselect';
/**
 * Direct selector to the plans state domain
 */
const selectPlansDomain = () => state => state.get('plans');

const makeSelectPlansData = () =>
  createSelector(selectPlansDomain(), substate => {
    return substate ? substate.get('floors') : [];
  });

const makeSelectTables = () =>
  createSelector(selectPlansDomain(), substate => {
    return substate ? substate.get('tables') : [];
  });

const makeSelectProjects = () =>
  createSelector(selectPlansDomain(), substate => {
    return substate ? substate.get('projects') : [];
  });

const makeSelectActiveScrolledToFloor = () =>
  createSelector(selectPlansDomain(), substate => {
    return substate ? substate.get('activeScrolledFloor') : null;
  });

export {
  selectPlansDomain,
  makeSelectPlansData,
  makeSelectTables,
  makeSelectProjects,
  makeSelectActiveScrolledToFloor
};
