import { all } from "redux-saga/effects";
import { mainSaga } from "./mainSaga";
import { globalNewsSaga, localNewsSaga, videoNewsSaga } from "./homeSaga";
import { fathletesSaga, fsportsSaga, ftrainersSaga } from "./federations";
import { newsDetailsSaga } from "./newsDetailsSaga";
import {
  competitionsSaga,
  getCompetitionFiltersSaga,
  postCompetitionFilterSaga,
} from "./competitions";
import {
  gymsclubsAllSaga,
  gymsclubsSaga,
  gymsclubspostfilterSaga,
} from "./gymsclubsSaga";
import { hcdepartmentsSaga } from "./healthcare";

export default function* rootSaga() {
  yield all([
    mainSaga(),
    localNewsSaga(),
    globalNewsSaga(),
    videoNewsSaga(),
    fsportsSaga(),
    ftrainersSaga(),
    fathletesSaga(),
    gymsclubsAllSaga(),
    gymsclubsSaga(),
    gymsclubspostfilterSaga(),
    hcdepartmentsSaga(),
    competitionsSaga(),
    getCompetitionFiltersSaga(),
    postCompetitionFilterSaga(),
    newsDetailsSaga(),
  ]);
}
