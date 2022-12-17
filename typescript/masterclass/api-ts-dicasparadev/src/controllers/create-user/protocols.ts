import { IUser } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";

export interface ICreateUserController {
  handle(
    httpRequest: HttpRequest<ICreateUserParams>
  ): Promise<HttpResponse<IUser>>;
}

export interface ICreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ICreateUserRepository {
  createUser(params: ICreateUserParams): Promise<IUser>;
}
