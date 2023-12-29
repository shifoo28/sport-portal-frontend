import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_MAIN,
  GET_MAIN_FAILED,
  GET_MAIN_SUCCESS,
  GET_WEATHER,
  GET_WEATHER_FAILED,
  GET_WEATHER_SUCCESS,
  POST_SEARCH,
  POST_SEARCH_FAILED,
  POST_SEARCH_SUCCESS,
} from "../types";
import { doSearch, fetchMain, fetchWeather } from "../apiCalls";
import { IMain } from "../interfaces/main";

function* getMain() {
  try {
    // @ts-ignore
    const main = yield call(fetchMain);

    yield put({ type: GET_MAIN_SUCCESS, payload: main });
  } catch (error: any) {
    yield put({ type: GET_MAIN_FAILED, message: error.message });
  }
}
function* getWeather() {
  try {
    // @ts-ignore
    const weather = yield call(fetchWeather);

    yield put({
      type: GET_WEATHER_SUCCESS,
      payload: JSON.parse(weather[0].data).responses[0].weather[0].current,
    });
  } catch (error: any) {
    yield put({ type: GET_WEATHER_FAILED, payload: error.message });
  }
}
function* search(action: IMain) {
  try {
    // @ts-ignore
    const found = yield call(doSearch, action.payload);

    yield put({ type: POST_SEARCH_SUCCESS, payload: found });
  } catch (error: any) {
    yield put({ type: POST_SEARCH_FAILED, message: error.message });
  }
}

export function* mainSaga() {
  yield takeLatest(GET_MAIN, getMain);
}
export function* weatherSaga() {
  yield takeLatest(GET_WEATHER, getWeather);
}
export function* searchSaga() {
  yield takeLatest(POST_SEARCH, search);
}
