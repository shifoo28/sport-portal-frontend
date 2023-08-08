import * as type from "../types";

interface IAction {
  type: string;
  payload: any;
}

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export default function users(state = initialState, action: IAction) {
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users,
      };
    case type.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
}
