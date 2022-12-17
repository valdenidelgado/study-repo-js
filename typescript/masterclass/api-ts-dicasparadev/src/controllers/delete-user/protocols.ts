import { IUser } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";

export interface IDeleteUserController {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<IUser>>;
}

export interface IDeleteUserRepository {
  deleteUser(id: string): Promise<IUser>;
}
