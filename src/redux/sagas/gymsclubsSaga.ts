import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_GYMS_AND_CLUBS,
  GET_GYMS_AND_CLUBS_FAILED,
  GET_GYMS_AND_CLUBS_FILTER,
  GET_GYMS_AND_CLUBS_FILTER_FAILED,
  GET_GYMS_AND_CLUBS_FILTER_SUCCESS,
  GET_GYMS_AND_CLUBS_SUCCESS,
  POST_GYMS_AND_CLUBS_FILTER,
  POST_GYMS_AND_CLUBS_FILTER_FAILED,
  POST_GYMS_AND_CLUBS_FILTER_SUCCESS,
} from "../types";
import {
  fetchAllGymsClubs,
  fetchGymsClubsFilters,
  filterGymsClubs,
} from "../apiCalls";
import { IGymsClubs } from "../interfaces/gymsclubs";

function* getAllGymsClubs(action: IGymsClubs) {
  try {
    // @ts-ignore
    const all_gymsclubs = yield call(fetchAllGymsClubs, action.payload);

    yield put({ type: GET_GYMS_AND_CLUBS_SUCCESS, payload: all_gymsclubs });
  } catch (error: any) {
    yield put({ type: GET_GYMS_AND_CLUBS_FAILED, message: error.message });
  }
}
function* getGymsClubsFilter(action: IGymsClubs) {
  try {
    // @ts-ignore
    const filters = yield call(fetchGymsClubsFilters, action.payload);

    yield put({ type: GET_GYMS_AND_CLUBS_FILTER_SUCCESS, payload: filters });
  } catch (error: any) {
    yield put({
      type: GET_GYMS_AND_CLUBS_FILTER_FAILED,
      message: error.message,
    });
  }
}
function* postGymsClubsFilter(action: IGymsClubs) {
  try {
    // @ts-ignore
    const gymsclubs = yield call(filterGymsClubs, action.payload);

    yield put({ type: POST_GYMS_AND_CLUBS_FILTER_SUCCESS, payload: gymsclubs });
  } catch (error: any) {
    yield put({
      type: POST_GYMS_AND_CLUBS_FILTER_FAILED,
      payload: error.message,
    });
  }
}

export function* gymsclubsAllSaga() {
  yield takeLatest(GET_GYMS_AND_CLUBS, getAllGymsClubs);
}
export function* gymsclubsSaga() {
  yield takeLatest(GET_GYMS_AND_CLUBS_FILTER, getGymsClubsFilter);
}
export function* gymsclubspostfilterSaga() {
  yield takeLatest(POST_GYMS_AND_CLUBS_FILTER, postGymsClubsFilter);
}
