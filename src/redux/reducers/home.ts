import { IHomeState } from "../interfaces/home";
import { IMain } from "../interfaces/main";
import {
  GET_LOCAL_NEWS_FAILED,
  GET_LOCAL_NEWS_SUCCESS,
  GET_VIDEO_NEWS_FAILED,
  GET_VIDEO_NEWS_SUCCESS,
} from "../types";

const initialState: IHomeState = {
  local_news: [],
  video_news: [],
};

export default function home(state: IHomeState = initialState, action: IMain) {
  const { payload, type } = action;

  switch (type) {
    case GET_LOCAL_NEWS_SUCCESS:
      return { ...state, local_news: payload };

    case GET_LOCAL_NEWS_FAILED:
      return { ...state, message: payload.message };

    case GET_VIDEO_NEWS_SUCCESS:
      return { ...state, video_news: payload };

    case GET_VIDEO_NEWS_FAILED:
      return { ...state, message: payload.message };

    default:
      return state;
  }
}
