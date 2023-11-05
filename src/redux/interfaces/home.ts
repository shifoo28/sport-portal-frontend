import { ISportCategory } from "./main";
import { IShopCategories } from "./shop";

export interface IHome {
  type: string;
  payload: any;
}

export interface INews {
  id: string;
  textTm: string;
  textRu: string;
  views: number;
  nameTm: string;
  nameRu: string;
  locationTm: string;
  locationRu: string;
  imagePath: string;
  categoryId: string;
  category: IShopCategories;
  createdAt: Date;
  updatedAt: Date;
}
export interface IVideoNews {
  id: string;
  views: number;
  nameTm: string;
  nameRu: string;
  textTm: string;
  textRu: string;
  imagePath: string;
  videoPath: string;
  categoryId: string;
  category: ISportCategory;
  createdAt: Date;
  updatedAt: Date;
}

export interface IHomeState {
  local_news: INews[];
  video_news: IVideoNews[];
}
