import { IMain, IMainState } from "../interfaces/main";
import {
  ACTIVATE_TAB,
  GET_MAIN_FAILED,
  GET_MAIN_SUCCESS,
  GET_WEATHER_FAILED,
  GET_WEATHER_SUCCESS,
  SET_LANG,
} from "../types";

const initialState: IMainState = {
  active_tab: 0,
  weather: {},
  langs: [{ id: "", name: "" }],
  base_categories: [],
  sport_categories: {
    local: [],
    world: [],
    video: [],
  },
  message: "",
  prefLang: "",
};

export default function main(state: IMainState = initialState, action: IMain) {
  const { payload, type } = action;

  switch (type) {
    case GET_MAIN_SUCCESS:
      return {
        ...state,
        langs: payload.lang,
        base_categories: payload.base_categories,
        sport_categories: payload.sport_categories,
      };

    case GET_MAIN_FAILED:
      return { ...state, message: payload.message };

    case GET_WEATHER_SUCCESS:
      return { ...state, weather: payload };

    case GET_WEATHER_FAILED:
      return { ...state, message: payload.message };

    case SET_LANG:
      return { ...state, prefLang: payload };

    case ACTIVATE_TAB:
      return { ...state, active_tab: payload };

    default:
      return state;
  }
}
