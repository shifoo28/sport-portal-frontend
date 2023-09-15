export interface IFederation {
  id: string;
  nameTm: string;
  nameRu: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFSports {
  id: string;
  president: string;
  leader: string;
  founded: string;
  location: string;
  tel: string;
  fax: string;
  email: string;
  web: string;
  federation: IFederation;
  federationId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFTrainers {
  id: string;
  name: string;
  yygyndy: string;
  rating: number;
  imgLink: string;
  info: {
    age: number;
    job: "Milli erkek futbol toparynyň baş tälimçisi";
    home: "Bekrewe, Aşgabat";
    sportLevel: "Halkara derejeli tälimçi";
    experience: 16;
  };
}
