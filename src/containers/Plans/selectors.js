import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
/**
 * Direct selector to the plans state domain
 */
const selectPlansDomain = () => state => state.get('plans');

const makeSelectPlansData = () =>
  createSelector(selectPlansDomain(), substate => {
    return substate ? substate.get('plans') : fromJS([]);
  });

const makeSelectTables = () =>
  createSelector(selectPlansDomain(), substate => {
    return substate ? substate.get('tables') : fromJS([]);
  });

const makeSelectProjects = () =>
  createSelector(selectPlansDomain(), substate => {
    return substate ? substate.get('projects') : fromJS([]);
  });

const makeSelectActiveScrolledToFloor = () =>
  createSelector(selectPlansDomain(), substate => {
    return substate ? substate.get('activeScrolledToFloor') : null;
  });

export {
  selectPlansDomain,
  makeSelectPlansData,
  makeSelectTables,
  makeSelectProjects,
  makeSelectActiveScrolledToFloor
};
