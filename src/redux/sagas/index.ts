import { all } from "redux-saga/effects";
import { mainSaga } from "./mainSaga";
import { localNewsSaga, videoNewsSaga } from "./homeSaga";
import { federationsSaga, fsportsSaga } from "./federations";

export default function* rootSaga() {
  yield all([
    mainSaga(),
    localNewsSaga(),
    videoNewsSaga(),
    federationsSaga(),
    fsportsSaga(),
  ]);
}
