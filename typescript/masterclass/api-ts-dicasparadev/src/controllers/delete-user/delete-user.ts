import { IUser } from "../../models/user";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IDeleteUserRepository } from "./protocols";
export class DeleteUserController implements IController {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}
  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<IUser>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return {
          statusCode: 400,
          body: "Missing user id",
        };
      }

      const user = await this.deleteUserRepository.deleteUser(id);

      return {
        // for no content return 204
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
