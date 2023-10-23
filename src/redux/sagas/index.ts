import { all } from "redux-saga/effects";
import { mainSaga } from "./mainSaga";
import { localNewsSaga, videoNewsSaga } from "./homeSaga";
import { fathletesSaga, fsportsSaga, ftrainersSaga } from "./federations";
import { newsDetails } from "./newsDetailsSaga";
import {
  competitionsSaga,
  getCompetitionFiltersSaga,
  postCompetitionFilterSaga,
} from "./competitions";
import { gymsclubsSaga, gymsclubspostfilterSaga } from "./gymsclubsSaga";
import { shopFiltersSaga } from "./shopSaga";
import { hcdepartmentsSaga } from "./healthcare";

export default function* rootSaga() {
  yield all([
    mainSaga(),
    localNewsSaga(),
    videoNewsSaga(),
    fsportsSaga(),
    ftrainersSaga(),
    fathletesSaga(),
    gymsclubsSaga(),
    gymsclubspostfilterSaga(),
    hcdepartmentsSaga(),
    shopFiltersSaga(),
    competitionsSaga(),
    getCompetitionFiltersSaga(),
    postCompetitionFilterSaga(),
    newsDetails(),
  ]);
}
