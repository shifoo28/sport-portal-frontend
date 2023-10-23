export interface IShop {
  payload: any;
  type: string;
}
export interface IShopCategories {
  id: string;
  nameTm: string;
  nameRu: string;
  parentId: string;
  createdAt: string;
  updatedAt: string;
  shopCategory: [];
}
export interface IShopState {
  shop_categories: IShopCategories[];
}
