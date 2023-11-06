export interface IFederations {
  type: string;
  payload: any;
}
export interface IFederations {
  id: string;
  nameTm: string;
  nameRu: string;
  imagePath: string;
  fsports: IFSports;
  ftrainers: IFTrainers[];
  fathlete: IFAthletes[];
  createdAt: Date;
  updatedAt: Date;
}
export interface IFSports {
  id: string;
  fax: string;
  web: string;
  tel: string;
  email: string;
  founded: number;
  leaderRu: string;
  leaderTm: string;
  locationRu: string;
  locationTm: string;
  presidentRu: string;
  presidentTm: string;
  federationId: string;
  federation: { id: string; nameTm: string; nameRu: string };
  createdAt: Date;
  updatedAt: Date;
}
export interface IFTrainers {
  id: string;
  rating: number;
  experience: number;
  views: number;
  age: number;
  jobTm: string;
  jobRu: string;
  nameTm: string;
  nameRu: string;
  madeTm: string;
  madeRu: string;
  birthPlaceTm: string;
  birthPlaceRu: string;
  sportLevelTm: string;
  sportLevelRu: string;
  workedAtTm: string[];
  workedAtRu: string[];
  badgesTm: string[];
  badgesRu: string[];
  imagePath: string;
  links: object;
  federationId: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IFAthletes {
  id: string;
  jobTm: null;
  jobRu: null;
  age: number;
  club: string;
  views: number;
  links: string;
  nameTm: null;
  nameRu: null;
  madeTm: null;
  madeRu: null;
  rating: number;
  imagePath: string;
  positionTm: null;
  positionRu: null;
  experience: number;
  birthPlaceTm: null;
  birthPlaceRu: null;
  sportLevelTm: null;
  sportLevelRu: null;
  workedAtTm: string[];
  workedAtRu: string[];
  badgesTm: string[];
  badgesRu: string[];
  createdAt: string;
  updatedAt: string;
  federationId: string;
}
export interface IFederationsState {
  federation_sports?: IFederations[];
  federation_trainers?: IFederations[];
  federation_athletes?: IFederations[];
}
