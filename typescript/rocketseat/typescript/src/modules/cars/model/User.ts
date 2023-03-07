import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  username: string;
  password: string;
  email: string;
  driverLicense: string;
  admin: boolean;
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };