/*
 *
 * Floors actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_FLOORS,
  REQUEST_FLOORS_SUCCESS,
  REQUEST_FLOORS_ERROR,
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

export function requestFloors() {
  return {
    type: REQUEST_FLOORS,
  };
}

export function requestFloorsSuccess(data) {
  return {
    type: REQUEST_FLOORS_SUCCESS,
    data,
  };
}

export function requestFloorsError(error) {
  return {
    type: REQUEST_FLOORS_ERROR,
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
    type: REQUEST_PROJECTS_DATA
  }
}

export function requestProjectDataSuccess(data) {
  return {
    type: REQUEST_PROJECTS_DATA_SUCCESS,
    data
  }
}

export function requestProjectDataError(error) {
  return {
    type: REQUEST_PROJECTS_DATA_ERROR,
    error
  }
}
