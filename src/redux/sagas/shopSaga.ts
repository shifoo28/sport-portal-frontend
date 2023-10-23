import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_SHOP_FILTERS,
  GET_SHOP_FILTERS_FAILED,
  GET_SHOP_FILTERS_SUCCESS,
} from "../types";
import { fetchShopFilters } from "../apiCalls";

function* getShopFilters() {
  try {
    // @ts-ignore
    const shop_filters = yield call(fetchShopFilters);

    yield put({ type: GET_SHOP_FILTERS_SUCCESS, payload: shop_filters });
  } catch (error: any) {
    yield put({ type: GET_SHOP_FILTERS_FAILED, message: error.message });
  }
}

export function* shopFiltersSaga() {
  yield takeLatest(GET_SHOP_FILTERS, getShopFilters);
}
