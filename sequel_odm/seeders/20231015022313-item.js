"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("items", [
      {
        name: "peak",
        Quantity: 9,
        size: "small",
        Price: 250,
        category: "MILK",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "pill",
        Quantity: 19,
        size: "small",
        Price: 50,
        category: "Med",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: "singlet",
        Quantity: 8,
        size: "medium",
        Price: 2000,
        category: "fashion",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "book",
        Quantity: 8,
        size: "small",
        Price: 260,
        category: "stationary",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "pen",
        Quantity: 29,
        size: "large",
        Price: 150,
        category: "stationary",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "dano",
        Quantity: 9,
        size: "large",
        Price: 200,
        category: "MILK",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "tie",
        Quantity: 9,
        size: "small",
        Price: 550,
        category: "fashion",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "peak",
        Quantity: 9,
        size: "small",
        Price: 250,
        category: "MILK",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "cyanol",
        Quantity: 9,
        size: "small",
        Price: 20,
        category: "med",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "digestive",
        Quantity: 79,
        size: "medium",
        Price: 100,
        category: "snack",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "parle",
        Quantity:88,
        size: "small",
        Price: 120,
        category: "snack",
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('items', null, {})
  }
};
