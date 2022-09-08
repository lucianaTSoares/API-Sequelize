const database = require("../../api/models");

class LevelController {
  static async getLevels(req, res) {
    try {
      const databaseMethod = await database.levels.findAll();
      return res.status(200).json(databaseMethod);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async getLevelById(req, res) {
    const { id } = req.params;
    try {
      const databaseMethod = await database.levels.findOne({
        where: { id: id },
      });
      return res.status(200).json(databaseMethod);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async createLevel(req, res) {
    const data = req.body;
    try {
      const createNewLevel = await database.levels.create(data);
      return res.status(200).json(createNewLevel);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updateLevel(req, res) {
    const data = req.body;
    const { id } = req.params;
    try {
      await database.levels.update(data, { where: { id: id } });
      const getUpdatedLevel = await database.levels.findOne({
        where: { id: id },
      });
      return res.status(200).json(getUpdatedLevel);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deleteLevel(req, res) {
    const { id } = req.params;
    try {
      await database.levels.destroy({ where: { id: id } });
      return res.status(200).json({ message: `Level with id ${id} deleted` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = LevelController;
