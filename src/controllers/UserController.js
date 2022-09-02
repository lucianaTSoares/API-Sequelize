const database = require("../../api/models");

class UserController {
  /**
   * @returns A JSON with all users in database if success. If fail, returns message error.
   */

  static async getUsers(req, res) {
    try {
      const databaseMethod = await database.users.findAll();
      return res.status(200).json(databaseMethod);
    } catch (err) {
      return res.status(404).json(err.message);
    }
  }

  /**
   * @returns A JSON with a specific user in database if success. If fail, returns message error.
   */

  static async getUserById(req, res) {
    const { id } = req.params;
    try {
      const databaseMethod = await database.users.findOne({
        where: {
          id: id,
        },
      });
      return res.status(200).json(databaseMethod);
    } catch (err) {
      return res.status(404).json(err.message);
    }
  }

  static async createUser(req, res) {
    const data = req.body;
    try {
      const databaseMethod = await database.users.create(data);
      return res.status(200).json(databaseMethod);
    } catch (err) {
      return res.status(404).json(err.message);
    }
  }

  /**
   * @returns A message informing that the the user was updated and a JSON with informations about the updated user if success. If fail, returns message error.
   */

  static async updateUser(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await database.users.update(data, {
        where: {
          id: id,
        },
      });
      const getUpdatedUser = await database.users.findOne({
        where: {
          id: id,
        },
      });
      return res
        .status(200)
        .json({ message: "User updated.", user: getUpdatedUser });
    } catch (err) {
      return res.status(404).json(err.message);
    }
  }

  /**
   * @returns A success deletion message if success. If fail, returns message error.
   */

  static async deleteUser(req, res) {
    const { id } = req.params;
    try {
      await database.users.destroy({
        where: {
          id: id,
        },
      });
      return res.status(200).json({ message: `User with id ${id} deleted` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = UserController;
