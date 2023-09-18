export interface ICAction {
  type: string;
  payload: any;
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
  createdAt: string;
  updatedAt: string;
}

export interface ICompetitionState {
  competitions: ICompetition[];
}
