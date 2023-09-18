import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_COMPETITIONS,
  GET_COMPETITIONS_FAILED,
  GET_COMPETITIONS_SUCCESS,
} from "../types";
import { fetchCompetitions } from "../apiCalls";

function* getCompetitions() {
  try {
    // @ts-ignore
    const competitions = yield call(fetchCompetitions);

    yield put({ type: GET_COMPETITIONS_SUCCESS, payload: competitions });
  } catch (error: any) {
    yield put({ type: GET_COMPETITIONS_FAILED, message: error.message });
  }
}

export function* competitionsSaga() {
  yield takeLatest(GET_COMPETITIONS, getCompetitions);
}
