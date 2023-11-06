import { ISportCategory } from "./main";

export enum ESection {
  Local = "Local",
  World = "World",
  Video = "Video",
}
export interface IHome {
  type: string;
  payload: any;
}
export interface ILocalNews {
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
  category: ISportCategory;
  createdAt: Date;
  updatedAt: Date;
}
export interface IWorldNews {
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
  category: ISportCategory;
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
  local_news: ILocalNews[];
  world_news: IWorldNews[];
  video_news: IVideoNews[];
}
export interface IGetNewsQuery {
  lang: string;
  skip: number;
  take: number;
  section: ESection;
}
