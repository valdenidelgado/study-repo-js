import {
  ICreateUserParams,
  ICreateUserRepository,
} from "../../controllers/create-user/protocols";
import { MongoClient } from "../../database/mongo";
import { IUser } from "../../models/user";

export class MongoCreateUserRepository implements ICreateUserRepository {
  async createUser(params: ICreateUserParams): Promise<IUser> {
    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(params);

    const user = await MongoClient.db
      .collection<Omit<IUser, "id">>("users")
      .findOne({ _id: insertedId });

    if (!user) {
      throw new Error("User not created");
    }

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
