import { fromJS } from 'immutable';
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
import { put, takeLatest, call } from 'redux-saga/effects';

export function* getTables() {
  const module = yield import(process.env.REACT_APP_DATAPROVIDER_TABLES);
  // const immutableResult = fromJS(module.default());
  const data = yield call(module.default);
  yield put(requestTableDataSuccess(fromJS(data)));
}

export function* getProjects() {
  const module = yield import(process.env.REACT_APP_DATAPROVIDER_PROJECTS);
  // const immutableResult = fromJS(module.default());
  const data = yield call(module.default);
  yield put(requestProjectDataSuccess(fromJS(data)));
}

export function* getPlans() {
  const module = yield import(process.env.REACT_APP_DATAPROVIDER_FLOORPLANS);
  const immutableResult = fromJS(module.default());

  yield put(requestPlansSuccess(immutableResult));
}

export default function* defaultSaga() {
  yield takeLatest(REQUEST_PLANS, getPlans);
  yield takeLatest(REQUEST_TABLE_DATA, getTables);
  yield takeLatest(REQUEST_PROJECTS_DATA, getProjects);
}
