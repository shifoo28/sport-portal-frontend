import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_FEDERATIONS,
  GET_FEDERATIONS_FAILED,
  GET_FEDERATIONS_SUCCESS,
  GET_FEDERATION_SPORTS,
  GET_FEDERATION_SPORTS_FAILED,
  GET_FEDERATION_SPORTS_SUCCESS,
} from "../types";
import { fetchFederationSports, fetchFederations } from "../apiCalls";

function* getFederations() {
  try {
    // @ts-ignore
    const federations = yield call(fetchFederations);
    console.log(federations);

    yield put({ type: GET_FEDERATIONS_SUCCESS, payload: federations });
  } catch (error: any) {
    yield put({ type: GET_FEDERATIONS_FAILED, message: error.message });
  }
}

function* getFederationSports() {
  try {
    // @ts-ignore
    const fsports = yield call(fetchFederationSports);
    console.log(fsports);

    yield put({ type: GET_FEDERATION_SPORTS_SUCCESS, payload: fsports });
  } catch (error: any) {
    yield put({ type: GET_FEDERATION_SPORTS_FAILED, message: error.message });
  }
}

export function* federationsSaga() {
  yield takeLatest(GET_FEDERATIONS, getFederations);
}

export function* fsportsSaga() {
  yield takeLatest(GET_FEDERATION_SPORTS, getFederationSports);
}
