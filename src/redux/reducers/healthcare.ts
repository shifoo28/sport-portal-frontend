import { IHealthCare, IHealthCareState } from "../interfaces/hcdepartment";
import {
  GET_HEALTH_CARE_DEPARTMENTS_FAILED,
  GET_HEALTH_CARE_DEPARTMENTS_SUCCESS,
} from "../types";

const initialState: IHealthCareState = {
  health_care_departments: [],
};

export function healthcare(
  state: IHealthCareState = initialState,
  action: IHealthCare
) {
  const { type, payload } = action;

  switch (type) {
    case GET_HEALTH_CARE_DEPARTMENTS_SUCCESS:
      return { ...state, health_care_departments: payload };

    case GET_HEALTH_CARE_DEPARTMENTS_FAILED:
      return { ...state, message: payload.message };

    default:
      return state;
  }
}
