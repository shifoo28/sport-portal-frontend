import { IFederations, IFederationsState } from "../interfaces/federations";
import {
  GET_FEDERATIONS_FAILED,
  GET_FEDERATIONS_SUCCESS,
  GET_FEDERATION_SPORTS_FAILED,
  GET_FEDERATION_SPORTS_SUCCESS,
} from "../types";

const initialState: IFederationsState = {
  federations: [
    {
      id: "",
      nameTm: "",
      nameRu: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  fsports: [
    {
      id: "",
      tel: "",
      fax: "",
      web: "",
      email: "",
      leader: "",
      founded: "",
      location: "",
      president: "",
      federationId: "",
      federation: { id: "", nameTm: "", nameRu: "" },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
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

    default:
      return state;
  }
}
