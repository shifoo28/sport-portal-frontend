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
  location: string;
  imagePath: string;
  categoryId: string;
  category: { nameTm: string; nameRu: string };
  createdAt: Date;
  updatedAt: Date;
}

export interface IVideoNews {
  id: string;
  views: number;
  nameTm: string;
  nameRu: string;
  imagePath: string;
  videoPath: string;
  categoryId: string;
  category: { nameTm: string; nameRu: string };
  createdAt: Date;
  updatedAt: Date;
}

export interface IHomeState {
  local_news: INews[];
  video_news: IVideoNews[];
}
