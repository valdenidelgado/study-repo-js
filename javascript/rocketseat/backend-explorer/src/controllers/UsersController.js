const AppError = require("../utils/AppError");

class UsersController {
  createUser(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new AppError("Missing name, email or password", 400);
    }

    res.status(201).json({ name, email, password });
  }
}

module.exports = UsersController;
