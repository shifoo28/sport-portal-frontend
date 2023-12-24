import { IGymsClubs, IGymsClubsState } from "../interfaces/gymsclubs";
import {
  GET_GYMS_AND_CLUBS_FAILED,
  GET_GYMS_AND_CLUBS_FILTER_FAILED,
  GET_GYMS_AND_CLUBS_FILTER_SUCCESS,
  GET_GYMS_AND_CLUBS_SUCCESS,
  POST_GYMS_AND_CLUBS_FILTER_FAILED,
  POST_GYMS_AND_CLUBS_FILTER_SUCCESS,
} from "../types";

const initialState: IGymsClubsState = {
  filters: [],
  gymsclubs: [],
  all_gymsclubs: [],
};

export default function gymsclubs(
  state: IGymsClubsState = initialState,
  action: IGymsClubs
) {
  const { type, payload } = action;

  switch (type) {
    case GET_GYMS_AND_CLUBS_SUCCESS:
      return { ...state, all_gymsclubs: payload };

    case GET_GYMS_AND_CLUBS_FAILED:
      return { ...state, message: payload.message };

    case GET_GYMS_AND_CLUBS_FILTER_SUCCESS:
      return { ...state, filters: payload };

    case GET_GYMS_AND_CLUBS_FILTER_FAILED:
      return { ...state, message: payload.message };

    case POST_GYMS_AND_CLUBS_FILTER_SUCCESS:
      return { ...state, gymsclubs: payload };

    case POST_GYMS_AND_CLUBS_FILTER_FAILED:
      return { ...state, message: payload.message };

    default:
      return state;
  }
}
