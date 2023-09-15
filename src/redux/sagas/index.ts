import { all } from "redux-saga/effects";
import { mainSaga } from "./mainSaga";
import { localNewsSaga, videoNewsSaga } from "./homeSaga";
import { fathletesSaga, federationsSaga, fsportsSaga, ftrainersSaga } from "./federations";
import { newsDetails } from "./newsDetailsSaga";

export default function* rootSaga() {
  yield all([
    mainSaga(),
    localNewsSaga(),
    videoNewsSaga(),
    federationsSaga(),
    fsportsSaga(),
    ftrainersSaga(),
    fathletesSaga(),
    newsDetails(),
  ]);
}
