import { IUser } from "../../models/user";
import { HttpResponse, HttpRequest } from "../protocols";

export interface IUpdateUserParams {
  firstName?: string;
  lastName?: string;
  password?: string;
}

export interface IUpdateUserController {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<IUser>>;
}

export interface IUpdateUserRepository {
  updateUser(id: string, params: IUpdateUserParams): Promise<IUser>;
}
