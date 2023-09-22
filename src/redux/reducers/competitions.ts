import { ICAction, ICompetitionState } from "../interfaces/competitions";
import { GET_COMPETITIONS_FAILED, GET_COMPETITIONS_SUCCESS } from "../types";

const initialState: ICompetitionState = {
  competitions: [],
  competitionTypes: [],
};

export default function competitions(
  state: ICompetitionState = initialState,
  action: ICAction
) {
  const { type, payload } = action;
  switch (type) {
    case GET_COMPETITIONS_SUCCESS:
      return { ...state, ...payload };

    case GET_COMPETITIONS_FAILED:
      return { ...state, message: payload.message };

    default:
      return state;
  }
}
