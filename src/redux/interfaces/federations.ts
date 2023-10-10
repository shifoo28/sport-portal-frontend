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
  tel: string;
  fax: string;
  web: string;
  email: string;
  leader: string;
  founded: string;
  location: string;
  president: string;
  federationId: string;
  federation: { id: string; nameTm: string; nameRu: string };
  createdAt: Date;
  updatedAt: Date;
}
export interface IFTrainers {
  id: string;
  age: number;
  job: string;
  name: string;
  made: string;
  rating: number;
  imagePath: string;
  experience: number;
  views: number;
  birthPlace: string;
  sportLevel: string;
  workedAt: string[];
  badges: string[];
  links: object;
  federationId: string;
  federation: { id: string; nameTm: string; nameRu: string };
  createdAt: string;
  updatedAt: string;
}
export interface IFAthletes {
  id: string;
  age: number;
  birthPlace: string;
  experience: number;
  sportLevel: string;
  workedAt: string[];
  badges: string[];
  links: {};
  name: string;
  club: string;
  made: string;
  rating: number;
  position: string;
  imagePath: string;
  federationId: string;
  federation: { id: string; nameTm: string; nameRu: string };
}
export interface IHCEmployee {
  id: string;
  name: string;
  job: string;
  age: number;
  workAt: string;
  departmentId: string;
  experience: number;
  views: number;
  rating: number;
  imagePath: string;
  links: {};
  createdAt: string;
  updatedAt: string;
}
export interface IHCDepartment {
  id: string;
  nameTm: string;
  nameRu: string;
  createdAt: Date;
  updatedAt: Date;
  employees: IHCEmployee[];
}
export interface IFederationsState {
  federation_sports?: IFederations[];
  federation_trainers?: IFederations[];
  federation_athletes?: IFederations[];
  health_care_departments?: IHCDepartment[];
}
