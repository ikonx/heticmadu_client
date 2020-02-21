import { IStatusEnum } from 'utils/interfaces/statusEnum';
import { TagModel } from 'utils/models/tag.model';

export interface CreatePointsOfInterestDTO {
  name: string;
  longitude: number;
  latitude: number;
  address: string;
  postalCode?: number;
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
  schedule?: string;
  category: string;
  averagePrice: string;
  glutenFree?: boolean;
  bio?: string;
  disabledAccess?: boolean;
  greenScore: number;
  phoneNumber?: string;
  picture?: string;
  description?: string;
  status?: IStatusEnum;
  tags?: TagModel[];
  images: string[];
}
