import { IHomeState } from "../interfaces/home";
import { IMain } from "../interfaces/main";
import {
  GET_LOCAL_NEWS_FAILED,
  GET_LOCAL_NEWS_SUCCESS,
  GET_VIDEO_NEWS_FAILED,
  GET_VIDEO_NEWS_SUCCESS,
} from "../types";

const initialState: IHomeState = {
  local: [
    {
      id: "",
      textTm: "",
      textRu: "",
      views: 0,
      nameTm: "",
      nameRu: "",
      location: "",
      imagePath: "",
      categoryId: "",
      category: { nameTm: "", nameRu: "" },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "",
      textTm: "",
      textRu: "",
      views: 0,
      nameTm: "",
      nameRu: "",
      location: "",
      imagePath: "",
      categoryId: "",
      category: { nameTm: "", nameRu: "" },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "",
      textTm: "",
      textRu: "",
      views: 0,
      nameTm: "",
      nameRu: "",
      location: "",
      imagePath: "",
      categoryId: "",
      category: { nameTm: "", nameRu: "" },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "",
      textTm: "",
      textRu: "",
      views: 0,
      nameTm: "",
      nameRu: "",
      location: "",
      imagePath: "",
      categoryId: "",
      category: { nameTm: "", nameRu: "" },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  video: [
    {
      id: "",
      views: 0,
      nameTm: "",
      nameRu: "",
      imagePath: "",
      videoPath: "",
      categoryId: "",
      category: { nameTm: "", nameRu: "" },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  message: "",
};

export default function home(state: IHomeState = initialState, action: IMain) {
  const payload = action.payload;

  switch (action.type) {
    case GET_LOCAL_NEWS_SUCCESS:
      return { ...state, ...payload };

    case GET_LOCAL_NEWS_FAILED:
      return { ...state, message: payload.message };

    case GET_VIDEO_NEWS_SUCCESS:
      return { ...state, ...payload };

    case GET_VIDEO_NEWS_FAILED:
      return { ...state, message: payload.message };

    default:
      return state;
  }
}
