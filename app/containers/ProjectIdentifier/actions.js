/*
 *
 * SystemProvider actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_PROJECTS_DATA,
  REQUEST_PROJECTS_DATA_SUCCESS,
  REQUEST_PROJECTS_DATA_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function requestProjectsData() {
  return {
    type: REQUEST_PROJECTS_DATA,
  };
}

export function requestProjectsDataSuccess(data) {
  return {
    type: REQUEST_PROJECTS_DATA_SUCCESS,
    data,
  };
}
export function requestProjectsDataError(error) {
  return {
    type: REQUEST_PROJECTS_DATA_ERROR,
    error,
  };
}
