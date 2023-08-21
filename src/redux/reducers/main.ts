import { IMain, IMainState } from "../interfaces/main";
import {
  GET_MAIN_FAILED,
  GET_MAIN_SUCCESS,
  SET_LANG,
} from "../types";

const initialState: IMainState = {
  lang: [
    {
      id: "",
      name: "",
    },
  ],
  base_categories: [
    {
      id: "",
      nameTm: "",
      nameRu: "",
    },
  ],
  sport_categories: [
    {
      id: "",
      nameTm: "",
      nameRu: "",
    },
  ],
  message: "",
};

export default function main(state: IMainState = initialState, action: IMain) {
  const payload = action.payload;

  switch (action.type) {
    case GET_MAIN_SUCCESS:
      return {
        ...state,
        lang: payload.lang,
        base_categories: payload.base_categories,
        sport_categories: payload.sport_categories,
      };

    case GET_MAIN_FAILED:
      return { ...state, message: payload.message };

    case SET_LANG:
      return { ...state, prefLang: payload };

    default:
      return state;
  }
}
