"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "levels",
      [
        {
          level: "Beginner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: "Intermediary",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level: "Advanced",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("levels", null, {});
  },
};
