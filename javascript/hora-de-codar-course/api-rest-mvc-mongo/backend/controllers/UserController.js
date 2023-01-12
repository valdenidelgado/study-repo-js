const createUserToken = require("../helpers/create-user-token");
const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = class UserController {
  static async register(req, res) {
    const { name, email, phone, password, confirmpassword } = req.body;

    if (!name || !email || !phone || !password || !confirmpassword) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = {
      name,
      email,
      phone,
      password: hashedPassword,
    };
    try {
      const newUser = await User.save(user);

      await createUserToken(newUser, req, res);

      return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  }
};
