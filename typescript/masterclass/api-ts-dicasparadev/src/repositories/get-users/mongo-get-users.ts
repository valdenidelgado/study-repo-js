import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { IUser } from "../../models/user";
import { MongoClient } from "../../database/mongo";
export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<IUser[]> {
    const users = await MongoClient.db
      .collection<Omit<IUser, "id">>("users")
      .find()
      .toArray();

    console.log(users);

    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
