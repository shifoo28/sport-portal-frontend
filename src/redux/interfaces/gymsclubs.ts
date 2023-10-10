export interface IGymsClubs {
  type: string;
  payload: any;
}
export interface ISportType {
  id: string;
  nameTm: string;
  nameRu: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IGymsClubsState {
  filters: { name: string; filters: ISportType[] | string[] }[];
}
