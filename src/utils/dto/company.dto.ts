import { IStatusEnum } from 'utils/interfaces/statusEnum';
import { ICoordinates } from 'utils/interfaces/coordinates';

export enum ICompanyTypeEnum {
  SHOP = 'shop',
  RESTO = 'resto',
  SCHOOL = 'school',
}

export interface CreateCompanyDTO {
  name: string;
  position: ICoordinates;
  rse: string;
  numberOfEmployees: number;
  logo: string;
  perimeter: number;
  status: IStatusEnum;
  type: ICompanyTypeEnum;
}
