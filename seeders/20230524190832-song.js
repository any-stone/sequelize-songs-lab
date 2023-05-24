'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const date = new Date()

    await queryInterface.bulkInsert('Songs', [{
      name: 'Blank Space',
      album: '1989',
      release: 2014,
      createdAt: date,
      updatedAt: date,
    }])

  },

  async down(queryInterface, Sequelize) {
    // Commands to revert seed

    await queryInterface.bulkDelete('Songs', null, {})

  }
};
