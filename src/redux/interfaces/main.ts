export interface IMain {
  type: string;
  payload: any;
}
export interface ILanguage {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface IBaseCategory {
  id: string;
  nameTm: string;
  nameRu: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface ISportCategory {
  id: string;
  nameTm: string;
  nameRu: string;
  section: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface ISportCategories {
  local: ISportCategory[];
  world: ISportCategory[];
  video: ISportCategory[];
}
export interface IMainState {
  message: string;
  prefLang: string;
  active_tab: number;
  langs: ILanguage[];
  base_categories: IBaseCategory[];
  sport_categories: ISportCategories;
}
