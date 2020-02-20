import axios, { AxiosResponse, AxiosStatic } from 'axios';
import { PoiModel } from './models/pois.model';

const API_URL = process.env.REACT_APP_API_URL;
export const getPois = async (): Promise<PoiModel[]> =>
  await axios.get(`${API_URL}pois`);
