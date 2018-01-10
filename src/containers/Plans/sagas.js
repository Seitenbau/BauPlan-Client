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
        id: 1,
        projects: ['HR', 'FD'],
        planId: '1F'
      },
      {
        name: 'Christina Freud',
        x: 20,
        y: 12,
        floor: 0,
        rotation: 180,
        projects: 'FD',
        id: 2,
        planId: '1F'
      },
      {
        name: 'Martina Huber',
        x: 30,
        y: 25,
        floor: 1,
        rotation: 245,
        projects: 'HR',
        id: 2,
        planId: '2F'
      },
      {
        name: 'Jan Friedmann',
        x: 25,
        y: 11,
        floor: 0,
        rotation: 90,
        projects: 'FD',
        id: 3,
        planId: '1F'
      }
    ])
  );
}

export function* getProjects() {
  yield put(
    requestProjectDataSuccess([
      {
        name: 'Human Resources',
        id: 'HR',
        color: '#FFFF00'
      },
      {
        name: 'Financial Department',
        id: 'FD',
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
