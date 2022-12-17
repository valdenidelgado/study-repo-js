import validator from "validator";
import { IUser } from "../../models/user";
import { HttpRequest, HttpResponse, IController } from '../protocols';
import {
  ICreateUserParams,
  ICreateUserRepository,
} from "./protocols";

export class CreateUserController implements IController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(
    httpRequest: HttpRequest<ICreateUserParams>
  ): Promise<HttpResponse<IUser>> {
    try {
      const requiredFields = ["firstName", "lastName", "email", "password"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof ICreateUserParams]?.length) {
          return {
            statusCode: 400,
            body: `Fields ${field} is required`,
          };
        }
      }

      const emailIsValid = validator.isEmail(httpRequest.body!.email);

      if (!emailIsValid) {
        return {
          statusCode: 400,
          body: "Invalid email",
        };
      }

      const user = await this.createUserRepository.createUser(
        httpRequest.body!
      );

      return {
        statusCode: 201,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Internal Server Error",
      };
    }
  }
}
