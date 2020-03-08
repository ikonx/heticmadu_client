import axios from 'axios';
import { PoiModel } from './models/pois.model';
import { TagModel } from './models/tag.model';
import { CreatePointsOfInterestDTO } from './dto/pointsOfInterest.dto';
import { CompaniesModel } from "./models/companies.model";
import { CreateCompanyDTO } from "./dto/company.dto";
import { CreateTagsDTO } from './dto/tags.dto';

const API_URL = process.env.REACT_APP_API_URL;
export const getPois = async (): Promise<PoiModel[]> => 
  await axios.get(`http://localhost:4000/pois`);

export const getPoi = async (_id: string | number): Promise<PoiModel> => 
  await axios.get(`http://localhost:4000/pois/${_id}`);

export const postPoi = async (_data: CreatePointsOfInterestDTO): Promise<PoiModel> =>
  await axios.post(`${API_URL}pois`, _data);

export const getCompanies = async (): Promise<CompaniesModel[]> =>
  await axios.get(`${API_URL}clients`);

export const deletePoi = async (_id: string | number): Promise<any> =>
  await axios.delete(`${API_URL}pois/${_id}`);

export const getTags = async (): Promise<TagModel[]> => 
  await axios.get(`http://localhost:4000/tags`);

export const postTags = async (_data: CreateTagsDTO): Promise<TagModel> =>
  await axios.post(`http://localhost:4000/tags`, _data);

export const deleteTag = async (_id: string | number): Promise<any> =>
  await axios.delete(`${API_URL}tags/${_id}`,);

export const postCompanies = async (_data: CreateCompanyDTO): Promise<CompaniesModel> =>
  await axios.post(`${API_URL}clients`, {clients:  [{..._data}]});

export const getSingleCompanies = async (): Promise<any> =>
  await axios.get('${API_URL}');
