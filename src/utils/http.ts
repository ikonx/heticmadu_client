import axios from 'axios';
import { PoiModel } from './models/pois.model';
import { CreatePointsOfInterestDTO } from './dto/pointsOfInterest.dto';

const API_URL = process.env.REACT_APP_API_URL;
export const getPois = async (): Promise<PoiModel[]> =>
  await axios.get(`${API_URL}pois`);

export const postPoi = async (_data: CreatePointsOfInterestDTO): Promise<PoiModel> =>
  await axios.post(`${API_URL}pois`, _data);

export const deletePoi = async (_id: string | number): Promise<any> =>
  await axios.delete(`${API_URL}pois/${_id}`);
