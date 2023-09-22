import { call, put, takeLatest } from "redux-saga/effects";
import {
  PATCH_SPORT_NEWS_VIEWS,
  PATCH_SPORT_NEWS_VIEWS_FAILED,
  PATCH_SPORT_NEWS_VIEWS_SUCCESS,
} from "../types";
import { INewsDetails } from "../interfaces/newsDetails";
import { patchNewsDetailsViews } from "../apiCalls";

function* postNewsViews(action: INewsDetails) {
  const { newsId, categoryId } = action.payload;
  try {
    // @ts-ignore
    const isPosted = yield call(patchNewsDetailsViews, newsId, categoryId);

    yield put({ type: PATCH_SPORT_NEWS_VIEWS_SUCCESS });
  } catch (error: any) {
    yield put({ type: PATCH_SPORT_NEWS_VIEWS_FAILED, message: error.message });
  }
}

export function* newsDetails() {
  yield takeLatest(PATCH_SPORT_NEWS_VIEWS, postNewsViews);
}
