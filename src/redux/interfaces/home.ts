export interface IHome {
  type: string;
  payload: any;
}

export interface IHomeState {
  local: {
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
  }[];
  video: {
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
  }[];
  message: string;
}
