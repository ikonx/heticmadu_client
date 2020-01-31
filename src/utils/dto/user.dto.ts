import { IStatusEnum } from "utils/interfaces/statusEnum";

export interface CreateUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  pot: number;
  status: IStatusEnum;
}
