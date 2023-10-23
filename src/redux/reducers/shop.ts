import { IShop, IShopState } from "../interfaces/shop";
import { GET_SHOP_FILTERS_FAILED, GET_SHOP_FILTERS_SUCCESS } from "../types";

const initialState: IShopState = {
  shop_categories: [],
};

export default function shop(state: IShopState = initialState, action: IShop) {
  const { type, payload } = action;

  switch (type) {
    case GET_SHOP_FILTERS_SUCCESS:
      return { ...state, shop_categories: payload };

    case GET_SHOP_FILTERS_FAILED:
      return { ...state, message: payload.message };

    default:
      return state;
  }
}
