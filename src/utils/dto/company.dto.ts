import { ICoordinates } from 'utils/interfaces/coordinates';

export enum ICompanyTypeEnum {
  STARTUP = 'startup',
  GRANDGROUPE = 'grandGroupe',
  PME = 'pme',
}

export interface CreateCompanyDTO {
  name: string;
  position?: ICoordinates;
  address: string;
  rse: string;
  numberOfEmployees: string;
  picture: string;
  status: string;
  type: ICompanyTypeEnum;
  creationDate: string;
  clientsPositions: {
    latitude: string;
    longitude: string;
    perimeter: number
  }[];
}
