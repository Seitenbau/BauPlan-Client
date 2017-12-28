import getFloorPlans from 'floorplans';

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
  yield put(
    requestTableDataSuccess([
      {
        name: 'Tim Dresner',
        x: 15,
        y: 20,
        floor: 0,
        rotation: 0,
        number: 1,
        projects: [1, 2],
        planId: 'F0'
      },
      {
        name: 'Christina Freud',
        x: 20,
        y: 12,
        floor: 0,
        rotation: 180,
        projects: 1,
        number: 2,
        planId: 'F0'
      },
      {
        name: 'Martina Huber',
        x: 30,
        y: 25,
        floor: 1,
        rotation: 245,
        projects: 2,
        number: 2,
        planId: 'F1'
      },
      {
        name: 'Jan Friedmann',
        x: 25,
        y: 11,
        floor: 0,
        rotation: 90,
        projects: 1,
        number: 3,
        planId: 'F0'
      }
    ])
  );
}

export function* getProjects() {
  yield put(
    requestProjectDataSuccess([
      {
        id: 1,
        name: 'Human Resources',
        short: 'HR',
        color: '#FFFF00'
      },
      {
        id: 2,
        name: 'Financial Department',
        short: 'FD',
        color: '#FF00FF'
      }
    ])
  );
}

export function* getPlans() {
  yield put(requestPlansSuccess(getFloorPlans()));
}

export default function* defaultSaga() {
  yield takeLatest(REQUEST_TABLE_DATA, getTables);
  yield takeLatest(REQUEST_PROJECTS_DATA, getProjects);
  yield takeLatest(REQUEST_PLANS, getPlans);
}
