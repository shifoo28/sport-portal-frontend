export interface ICAction {
  type: string;
  payload: any;
}

export interface ICompetitionType {
  id: number;
  nameTm: string;
  nameRu: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICompetition {
  id: string;
  views: number;
  typeId: number;
  nameTm: string;
  nameRu: string;
  textTm: string;
  textRu: string;
  dateEnd: Date;
  dateStart: Date;
  imagePath: string;
  locationTm: string;
  locationRu: string;
  competitionType: { id: number; nameTm: string; nameRu: string };
  createdAt: Date;
  updatedAt: Date;
}
export interface ICompetitionFilter {
  name: string;
  filters: string[];
}
export interface ICompetitionState {
  competitions: ICompetition[];
  filters: ICompetitionFilter[];
}
