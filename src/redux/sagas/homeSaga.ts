import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_LOCAL_NEWS_SUCCESS,
  GET_LOCAL_NEWS_FAILED,
  GET_LOCAL_NEWS,
  GET_VIDEO_NEWS,
  GET_VIDEO_NEWS_SUCCESS,
  GET_VIDEO_NEWS_FAILED,
} from "../types";
import { fetchLocalNews, fetchVideoNews } from "../apiCalls";

function* getLocalNews() {
  try {
    // @ts-ignore
    const localNews = yield call(fetchLocalNews);

    yield put({ type: GET_LOCAL_NEWS_SUCCESS, payload: localNews });
  } catch (error: any) {
    yield put({ type: GET_LOCAL_NEWS_FAILED, message: error.message });
  }
}

function* getVideoNews() {
  try {
    // @ts-ignore
    const videoNews = yield call(fetchVideoNews);

    yield put({ type: GET_VIDEO_NEWS_SUCCESS, payload: videoNews });
  } catch (error: any) {
    yield put({ type: GET_VIDEO_NEWS_FAILED, message: error.message });
  }
}

export function* localNewsSaga() {
  yield takeLatest(GET_LOCAL_NEWS, getLocalNews);
}

export function* videoNewsSaga() {
  yield takeLatest(GET_VIDEO_NEWS, getVideoNews);
}
