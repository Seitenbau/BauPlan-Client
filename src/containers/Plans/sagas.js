import getFloorPlanData from 'dataProviders/floorplans';
import getTableData from 'dataProviders/tables';
import getProjectData from 'dataProviders/projects';

import {
  REQUEST_TABLE_DATA,
  REQUEST_PROJECTS_DATA,
  REQUEST_PLANS
} from './constants';
import {
  requestTableDataSuccess,
  requestProjectDataSuccess,
  requestPlansSuccess
} from './actions';
import { put, takeLatest } from 'redux-saga/effects';

export function* getTables() {
  yield put(requestTableDataSuccess(getTableData()));
}

export function* getProjects() {
  yield put(requestProjectDataSuccess(getProjectData()));
}

export function* getPlans() {
  yield put(requestPlansSuccess(getFloorPlanData()));
}

export default function* defaultSaga() {
  yield takeLatest(REQUEST_TABLE_DATA, getTables);
  yield takeLatest(REQUEST_PROJECTS_DATA, getProjects);
  yield takeLatest(REQUEST_PLANS, getPlans);
}
