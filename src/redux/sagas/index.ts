import { all } from "redux-saga/effects";
import { mainSaga } from "./mainSaga";
import { localNewsSaga, videoNewsSaga } from "./homeSaga";
import {
  fathletesSaga,
  federationsSaga,
  fsportsSaga,
  ftrainersSaga,
  hcdepartmentsSaga,
} from "./federations";
import { newsDetails } from "./newsDetailsSaga";
import { competitionsSaga } from "./competitions";

export default function* rootSaga() {
  yield all([
    mainSaga(),
    localNewsSaga(),
    videoNewsSaga(),
    federationsSaga(),
    fsportsSaga(),
    ftrainersSaga(),
    fathletesSaga(),
    hcdepartmentsSaga(),
    competitionsSaga(),
    newsDetails(),
  ]);
}
