export interface IMain {
  type: string;
  payload: any;
}

export interface IMainState {
  active_tab: number;
  langs: { id: string; name: string }[];
  base_categories: { id: string; nameTm: string; nameRu: string }[];
  sport_categories: { id: string; nameTm: string; nameRu: string }[];
  message: string;
  prefLang: string;
}
