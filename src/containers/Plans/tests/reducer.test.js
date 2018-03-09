import { fromJS } from 'immutable';
import plansReducer from '../reducer';

import {
  REQUEST_PLANS_SUCCESS,
  REQUEST_PLANS_ERROR,
  REQUEST_TABLE_DATA_SUCCESS,
  REQUEST_TABLE_DATA_ERROR,
  REQUEST_PROJECTS_DATA_SUCCESS,
  REQUEST_PROJECTS_DATA_ERROR
} from '../constants';

describe('plansReducer', () => {
  it('returns the initial state', () => {
    const initialState = fromJS({
      nextActiveFloor: false,
      plans: [],
      tables: [],
      projects: [],
    });
    expect(plansReducer(undefined, {})).toEqual(fromJS(initialState));
  });

  it('returns the state with tables', () => {
    const tables = [{name: 'test' }];
    expect(plansReducer(undefined, {
      type: REQUEST_TABLE_DATA_SUCCESS,
      data: tables
    }).get('tables')).toEqual(tables);
  });

  it('returns the initial state on tables error', () => {
    const initialState = fromJS({
      nextActiveFloor: false,
      plans: [],
      tables: [],
      projects: [],
    });
    expect(plansReducer(undefined, {
      type: REQUEST_TABLE_DATA_ERROR,
    })).toEqual(initialState);
  });

  it('returns the state with Projects', () => {
    const projects = [{name: 'Project 1' }];
    expect(plansReducer(undefined, {
      type: REQUEST_PROJECTS_DATA_SUCCESS,
      data: projects
    }).get('projects')).toEqual(projects);
  });

  it('returns the initial state on Projects error', () => {
    const initialState = fromJS({
      nextActiveFloor: false,
      plans: [],
      tables: [],
      projects: [],
    });
    expect(plansReducer(undefined, {
      type: REQUEST_PROJECTS_DATA_ERROR,
    })).toEqual(initialState);
  });

  it('returns the state with plans with a default scale of 1', () => {
    const plans = [{name: 'Project 1'}];
    expect(plansReducer(undefined, {
      type: REQUEST_PLANS_SUCCESS,
      data: plans
    }).get('floors')[0].scale).toEqual(1);
  });
  it('returns the state with plans with the given scale', () => {
    const plans = [{name: 'Project 1', scale: 3}];
    expect(plansReducer(undefined, {
      type: REQUEST_PLANS_SUCCESS,
      data: plans
    }).get('floors')[0].scale).toEqual(3);
  });

  it('returns the initial state on error', () => {
      const initialState = fromJS({
      nextActiveFloor: false,
      plans: [],
      tables: [],
      projects: [],
    });
    expect(plansReducer(undefined, {
      type: REQUEST_PLANS_ERROR,
    })).toEqual(initialState);
  });

});
