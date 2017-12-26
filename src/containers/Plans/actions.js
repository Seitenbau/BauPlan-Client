/*
 *
 * Plans actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_PLANS,
  REQUEST_PLANS_SUCCESS,
  REQUEST_PLANS_ERROR,
  REQUEST_TABLE_DATA,
  REQUEST_TABLE_DATA_SUCCESS,
  REQUEST_TABLE_DATA_ERROR,
  REQUEST_PROJECTS_DATA,
  REQUEST_PROJECTS_DATA_SUCCESS,
  REQUEST_PROJECTS_DATA_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function requestPlans() {
  return {
    type: REQUEST_PLANS,
  };
}

export function requestPlansSuccess(data) {
  return {
    type: REQUEST_PLANS_SUCCESS,
    data,
  };
}

export function requestPlansError(error) {
  return {
    type: REQUEST_PLANS_ERROR,
    error,
  };
}

export function requestTableData() {
  return {
    type: REQUEST_TABLE_DATA,
  };
}

export function requestTableDataSuccess(data) {
  return {
    type: REQUEST_TABLE_DATA_SUCCESS,
    data,
  };
}

export function requestTableDataError(error) {
  return {
    type: REQUEST_TABLE_DATA_ERROR,
    error,
  };
}

export function requestProjectData() {
  return {
    type: REQUEST_PROJECTS_DATA,
  };
}

export function requestProjectDataSuccess(data) {
  return {
    type: REQUEST_PROJECTS_DATA_SUCCESS,
    data,
  };
}

export function requestProjectDataError(error) {
  return {
    type: REQUEST_PROJECTS_DATA_ERROR,
    error,
  };
}


