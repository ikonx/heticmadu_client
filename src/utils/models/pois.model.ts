import { TagModel } from "./tag.model";

export interface PoiModel {
    id?: number | string;
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
    status?: string;
    tags?: TagModel[];
    images: string[];
}

