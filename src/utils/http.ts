import axios from 'axios';
import { PoiModel } from './models/pois.model';
import { TagModel } from './models/tag.model';
import { CreatePointsOfInterestDTO } from './dto/pointsOfInterest.dto';
import { CreateTagsDTO } from './dto/tags.dto';

const API_URL = process.env.REACT_APP_API_URL;

// POIS

export const getPois = async (): Promise<PoiModel[]> =>
  await axios.get(`http://localhost:4000/pois`);

export const getPoi = async (_id: string | number): Promise<PoiModel> =>
  await axios.get(`http://localhost:4000/pois/${_id}`);

export const postPoi = async (
  _data: CreatePointsOfInterestDTO,
): Promise<PoiModel> => await axios.post(`${API_URL}pois`, _data);

export const deletePoi = async (_id: string | number): Promise<any> =>
  await axios.delete(`${API_URL}pois/${_id}`);

// TAGS

export const getTags = async (): Promise<TagModel[]> =>
  await axios.get(`http://localhost:4000/tags`);

export const postTags = async (_data: CreateTagsDTO): Promise<TagModel> =>
  await axios.post(`http://localhost:4000/tags`, _data);

export const deleteTag = async (_id: string | number): Promise<any> =>
  await axios.delete(`${API_URL}tags/${_id}`);

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<any> =>
  await axios.post(`${API_URL}auth/login`, { email, password });
