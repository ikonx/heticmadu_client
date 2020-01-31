import { IStatusEnum } from 'utils/interfaces/statusEnum';
import { ICoordinates } from 'utils/interfaces/coordinates';

export interface CreatePointsOfInterestDTO {
  name: string;
  position: ICoordinates;
  adress: string;
  postalCode: string;
  schedule: string;
  category: string;
  type: string;
  averagePrice: string;
  glutenFree: boolean;
  bio: string;
  disabledAccess: boolean;
  greenScore: number;
  phoneNumber: string;
  logo: string;
  description: string;
  status: IStatusEnum;
}
