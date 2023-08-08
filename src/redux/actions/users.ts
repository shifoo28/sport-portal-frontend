import * as type from "../types";

export function getUsers(users: any) {
  return {
    type: type.GET_USERS_REQUESTED,
    payload: users,
  };
}
