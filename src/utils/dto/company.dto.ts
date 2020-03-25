import { ICoordinates } from 'utils/interfaces/coordinates';

export enum ICompanyTypeEnum {
  STARTUP = 'Startup',
  GRANDGROUPE = 'Grand Groupe',
  PME = 'PME',
}

export interface CreateCompanyDTO {
  name: string;
  position?: ICoordinates;
  address: string;
  rse: string;
  numberOfEmployees: string;
  picture: string;
  perimeter: string;
  status: string;
  type: ICompanyTypeEnum;
  creationDate: string;
  clientsPositions: {
    latitude: string;
    longitude: string;
    perimeter: number
  }[];
}
