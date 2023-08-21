export interface IFederations {
  type: string;
  payload: any;
}

export interface IFederationsState {
  federations: {
    id: string;
    nameTm: string;
    nameRu: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
  fsports: {
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
  }[];
  message: string;
}
