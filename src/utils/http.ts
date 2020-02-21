import axios from 'axios';
import { PoiModel } from './models/pois.model';
import { CreatePointsOfInterestDTO } from './dto/pointsOfInterest.dto';
import { CompaniesModel } from "./models/companies.model";
import { CreateCompanyDTO } from "./dto/company.dto";

const API_URL = process.env.REACT_APP_API_URL;
export const getPois = async (): Promise<PoiModel[]> =>
  await axios.get(`${API_URL}pois`);

export const postPoi = async (_data: CreatePointsOfInterestDTO): Promise<PoiModel> =>
  await axios.post(`${API_URL}pois`, _data);

export const getCompanies = async (): Promise<CompaniesModel[]> =>
  await axios.get(`${API_URL}clients`);

export const postCompanies = async (_data: CreateCompanyDTO): Promise<CompaniesModel> => {
    return await axios.post(`${API_URL}clients`, {clients:  [{..._data}]});
}
