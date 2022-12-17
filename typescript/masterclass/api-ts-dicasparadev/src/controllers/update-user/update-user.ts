import { IUser } from "../../models/user";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IUpdateUserRepository, IUpdateUserParams } from "./protocols";

export class UpdateUserController implements IController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}
  async handle(httpRequest: HttpRequest<IUpdateUserParams>): Promise<HttpResponse<IUser>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!body) {
        return {
          statusCode: 400,
          body: "Missing fields!"
        }
      }

      if (!id) {
        return {
          statusCode: 400,
          body: "Missing user id",
        };
      }

      const allowedFieldsToUpdate: (keyof IUpdateUserParams)[] = [
        "firstName",
        "lastName",
        "password",
      ];
      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key as keyof IUpdateUserParams)
      );

      if (someFieldIsNotAllowedToUpdate) {
        return {
          statusCode: 400,
          body: "Some received field is not allowed",
        };
      }

      const user = await this.updateUserRepository.updateUser(id, body);

      return {
        statusCode: 200,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Internal server error",
      };
    }
  }
}
