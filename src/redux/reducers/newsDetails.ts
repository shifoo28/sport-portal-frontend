import { INewsDetails, INewsDetailsState } from "../interfaces/newsDetails";
import { PATCH_SPORT_NEWS_VIEWS_FAILED } from "../types";

const initialState = {
  message: "",
};

export function newsDetails(
  state: INewsDetailsState = initialState,
  action: INewsDetails
) {
  const { payload, type } = action;

  switch (type) {
    case PATCH_SPORT_NEWS_VIEWS_FAILED:
      return { ...state, message: payload.message };

    default:
      return state;
  }
}
