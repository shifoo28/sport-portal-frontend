import { call, put, takeLatest } from "redux-saga/effects";
import { GET_MAIN, GET_MAIN_FAILED, GET_MAIN_SUCCESS } from "../types";
import { fetchMain } from "../apiCalls";

function* getMain() {
  try {
    // @ts-ignore
    const main = yield call(fetchMain);

    yield put({ type: GET_MAIN_SUCCESS, payload: main });
  } catch (error: any) {
    yield put({ type: GET_MAIN_FAILED, message: error.message });
  }
}

export function* mainSaga() {
  yield takeLatest(GET_MAIN, getMain);
}
