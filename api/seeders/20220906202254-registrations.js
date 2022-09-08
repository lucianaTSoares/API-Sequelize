"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "registrations",
      [
        {
          status: "registered",
          student_id: 1,
          class_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "registered",
          student_id: 2,
          class_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "registered",
          student_id: 3,
          class_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "registered",
          student_id: 4,
          class_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "canceled",
          student_id: 1,
          class_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "canceled",
          student_id: 2,
          class_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("registrations", null, {});
  },
};
