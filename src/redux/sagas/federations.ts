import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_FEDERATIONS,
  GET_FEDERATIONS_FAILED,
  GET_FEDERATIONS_SUCCESS,
  GET_FEDERATION_ATHLETES,
  GET_FEDERATION_ATHLETES_SUCCESS,
  GET_FEDERATION_SPORTS,
  GET_FEDERATION_SPORTS_FAILED,
  GET_FEDERATION_SPORTS_SUCCESS,
  GET_FEDERATION_TRAINERS,
  GET_FEDERATION_TRAINERS_FAILED,
  GET_FEDERATION_TRAINERS_SUCCESS,
} from "../types";
import {
  fetchFederationAthletes,
  fetchFederationSports,
  fetchFederationTrainers,
  fetchFederations,
} from "../apiCalls";

function* getFederations() {
  try {
    // @ts-ignore
    const federations = yield call(fetchFederations);

    yield put({ type: GET_FEDERATIONS_SUCCESS, payload: federations });
  } catch (error: any) {
    yield put({ type: GET_FEDERATIONS_FAILED, message: error.message });
  }
}

function* getFederationSports() {
  try {
    // @ts-ignore
    const fsports = yield call(fetchFederationSports);

    yield put({ type: GET_FEDERATION_SPORTS_SUCCESS, payload: fsports });
  } catch (error: any) {
    yield put({ type: GET_FEDERATION_SPORTS_FAILED, message: error.message });
  }
}

function* getFederationTrainers() {
  try {
    // @ts-ignore
    const ftrainers = yield call(fetchFederationTrainers);

    yield put({ type: GET_FEDERATION_TRAINERS_SUCCESS, payload: ftrainers });
  } catch (error: any) {
    yield put({ type: GET_FEDERATION_TRAINERS_FAILED, message: error.message });
  }
}

function* getFederationAthletes() {
  try {
    // @ts-ignore
    const fathletes = yield call(fetchFederationAthletes);

    yield put({ type: GET_FEDERATION_ATHLETES_SUCCESS, payload: fathletes });
  } catch (error: any) {
    yield put({ type: GET_FEDERATION_TRAINERS_FAILED, message: error.message });
  }
}

export function* federationsSaga() {
  yield takeLatest(GET_FEDERATIONS, getFederations);
}

export function* fsportsSaga() {
  yield takeLatest(GET_FEDERATION_SPORTS, getFederationSports);
}

export function* ftrainersSaga() {
  yield takeLatest(GET_FEDERATION_TRAINERS, getFederationTrainers);
}

export function* fathletesSaga() {
  yield takeLatest(GET_FEDERATION_ATHLETES, getFederationAthletes);
}
