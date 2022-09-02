const database = require("../../api/models");

class UserController {

/**
 * @returns A JSON with all users in database if success. If fail, returns message error.
 */
  
  static async getUsers(req, res) {
    try {
      const response = await database.users.findAll();
      return res.status(200).json(response);
    } catch (err) {
      return res.status(404).json(err.message);
    }
  }
}

module.exports = UserController;
