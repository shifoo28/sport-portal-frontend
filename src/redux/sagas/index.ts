import { all } from "redux-saga/effects";
import { mainSaga } from "./mainSaga";
import { localNewsSaga, videoNewsSaga } from "./homeSaga";
import {
  fathletesSaga,
  fsportsSaga,
  ftrainersSaga,
  hcdepartmentsSaga,
} from "./federations";
import { newsDetails } from "./newsDetailsSaga";
import { competitionsSaga } from "./competitions";
import { gymsclubsSaga } from "./gymsclubsSaga";

export default function* rootSaga() {
  yield all([
    mainSaga(),
    localNewsSaga(),
    videoNewsSaga(),
    fsportsSaga(),
    ftrainersSaga(),
    fathletesSaga(),
    gymsclubsSaga(),
    hcdepartmentsSaga(),
    competitionsSaga(),
    newsDetails(),
  ]);
}
