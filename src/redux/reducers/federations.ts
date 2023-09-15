import { IFederations, IFederationsState } from "../interfaces/federations";
import {
  GET_FEDERATIONS_FAILED,
  GET_FEDERATIONS_SUCCESS,
  GET_FEDERATION_ATHLETES_FAILED,
  GET_FEDERATION_ATHLETES_SUCCESS,
  GET_FEDERATION_SPORTS_FAILED,
  GET_FEDERATION_SPORTS_SUCCESS,
  GET_FEDERATION_TRAINERS_FAILED,
  GET_FEDERATION_TRAINERS_SUCCESS,
} from "../types";

const initialState: IFederationsState = {
  federations: [],
  fsports: [],
  ftrainers: [],
  fathletes: [],
  message: "",
};

export default function federations(
  state: IFederationsState = initialState,
  action: IFederations
) {
  const { payload, type } = action;

  switch (type) {
    case GET_FEDERATION_SPORTS_SUCCESS:
      return { ...state, ...payload };

    case GET_FEDERATION_SPORTS_FAILED:
      return { ...state, message: payload.message };

    case GET_FEDERATIONS_SUCCESS:
      return { ...state, ...payload };

    case GET_FEDERATIONS_FAILED:
      return { ...state, message: payload.message };

    case GET_FEDERATION_TRAINERS_SUCCESS:
      return { ...state, ...payload };

    case GET_FEDERATION_TRAINERS_FAILED:
      return { ...state, message: payload.message };

    case GET_FEDERATION_ATHLETES_SUCCESS:
      return { ...state, ...payload };

    case GET_FEDERATION_ATHLETES_FAILED:
      return { ...state, message: payload.message };

    default:
      return state;
  }
}
