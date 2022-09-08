const database = require("../../api/models");

class ClassController {
  static async getClasses(req, res) {
    try {
      const databaseMethod = await database.classes.findAll();
      return res.status(200).json(databaseMethod);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async getClassById(req, res) {
    const { id } = req.params;
    try {
      const databaseMethod = await database.classes.findOne({
        where: { id: id },
      });
      return res.status(200).json(databaseMethod);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async createClass(req, res) {
    const data = req.body;
    try {
      const createNewClass = await database.classes.create(data);
      return res.status(200).json(createNewClass);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updateClass(req, res) {
    const data = req.body;
    const { id } = req.params;
    try {
      await database.classes.update(data, { where: { id: id } });
      const getUpdatedClass = await database.classes.findOne({
        where: { id: id },
      });
      return res.status(200).json(getUpdatedClass);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deleteClass(req, res) {
    const { id } = req.params;
    try {
      await database.classes.destroy({ where: { id: id } });
      return res.status(200).json({ message: `Class with id ${id} deleted` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = ClassController;
