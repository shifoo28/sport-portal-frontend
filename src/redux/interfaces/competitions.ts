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
  nameTm: string;
  nameRu: string;
  textTm: string;
  textRu: string;
  location: string;
  views: number;
  imagePath: string;
  typeId: number;
  competitionType: { id: number; nameTm: string; nameRu: string };
  createdAt: Date;
  updatedAt: Date;
}

export interface ICompetitionState {
  competitions: ICompetition[];
  competitionTypes: ICompetitionType[];
}
