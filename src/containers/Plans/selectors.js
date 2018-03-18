import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
/**
 * Direct selector to the plans state domain
 */
const selectPlansDomain = () => state => state.get('plans');

const makeSelectPlansData = () =>
  createSelector(selectPlansDomain(), substate => {
    return substate ? substate.get('floors') : fromJS([]);
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

const makeSelectTablesWithProjects = () =>
  createSelector(
    makeSelectTables(),
    makeSelectProjects(),
    (tables, projects) => {
      return tables.map(table => {
        if (typeof table.projects === 'object') {
          table.projects = table.projects.map(
            prid => projects.filter(pr => pr.id === prid)[0]
          );
        } else {
          table.projects = [projects.filter(pr => pr.id === table.projects)[0]];
        }
        return table;
      });
    }
  );

export {
  selectPlansDomain,
  makeSelectPlansData,
  makeSelectTables,
  makeSelectProjects,
  makeSelectActiveScrolledToFloor,
  makeSelectTablesWithProjects
};
