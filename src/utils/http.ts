import axios from 'axios';
import { PoiModel } from './models/pois.model';
import { TagModel } from './models/tag.model';
import { CreatePointsOfInterestDTO } from './dto/pointsOfInterest.dto';
import { CreateTagsDTO } from './dto/tags.dto';

const API_URL = process.env.REACT_APP_API_URL;
export const getPois = async (): Promise<PoiModel[]> => 
  await axios.get(`http://localhost:4000/pois`);

export const postPoi = async (_data: CreatePointsOfInterestDTO): Promise<PoiModel> =>
  await axios.post(`http://localhost:4000/pois`, _data);

export const getTags = async (): Promise<TagModel[]> => 
  await axios.get(`http://localhost:4000/tags`);

export const postTags = async (_data: CreateTagsDTO): Promise<TagModel> =>
  await axios.post(`http://localhost:4000/tags`, _data);

export const deleteTag = async (_id: string | number): Promise<any> =>
  await axios.delete(`${API_URL}tags/${_id}`,);