import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_GYMS_AND_CLUBS_FILTER,
  GET_GYMS_AND_CLUBS_FILTER_FAILED,
  GET_GYMS_AND_CLUBS_FILTER_SUCCESS,
} from "../types";
import { fetchGymsClubsFilters } from "../apiCalls";

function* getGymsClubsFilter() {
  try {
    // @ts-ignore
    const filters = yield call(fetchGymsClubsFilters);

    yield put({ type: GET_GYMS_AND_CLUBS_FILTER_SUCCESS, payload: filters });
  } catch (error: any) {
    yield put({
      type: GET_GYMS_AND_CLUBS_FILTER_FAILED,
      message: error.message,
    });
  }
}

export function* gymsclubsSaga() {
  yield takeLatest(GET_GYMS_AND_CLUBS_FILTER, getGymsClubsFilter);
}
