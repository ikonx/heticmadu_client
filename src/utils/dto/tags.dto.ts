import { IStatusEnum } from "utils/interfaces/statusEnum";

export interface CreateTagsDTO {
  status: IStatusEnum;
  id?: number;
  tag?: string;
}
