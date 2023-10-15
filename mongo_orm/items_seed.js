const mongoose = require('mongoose')
const { mongoDatabase } = require("./db");
require("dotenv").config();

const items = require("./model/items");

mongoDatabase();

const seedItems = [
  {
    Name: "Jik",
    Quantity: 41,
    Size: 12,
    Price: 60,
    Category: "detergent",
    CreatedAt:Date.now(),
    UpdatedAt:Date.now()
  },
  {
    Name: "Peak",
    Quantity: 26,
    Size: 9,
    Price: 189,
    Category: "beavrage",
    CreatedAt:Date.now(),
    UpdatedAt:Date.now()
  },
  {
    Name: "Bee",
    Quantity: 11,
    Size: 5,
    Price: 90,
    Category: "flower",
    CreatedAt:Date.now(),
    UpdatedAt:Date.now()
  },
  {
    Name: "cake",
    Quantity: 12,
    Size: 9,
    Price: 700,
    Category: "snack",
    CreatedAt:Date.now(),
    UpdatedAt:Date.now()
  },
  {
    Name: "top-tea",
    Quantity: 100,
    Size: 3,
    Price: 50,
    Category: "beavrage",
    CreatedAt:Date.now(),
    UpdatedAt:Date.now()
  },
  {
    Name: "joy soap",
    Quantity: 410,
    Size: 2,
    Price: 150,
    Category: "cosmetic",
    CreatedAt:Date.now(),
    UpdatedAt:Date.now()
  },
  {
    Name: "coffee",
    Quantity: 126,
    Size: 20,
    Price: 189,
    Category: "beavrage",
    CreatedAt:Date.now(),
    UpdatedAt:Date.now()
  },
  {
    Name: "Sun",
    Quantity: 35,
    Size: 2,
    Price: 100,
    Category: "flower",
    CreatedAt:Date.now(),
    UpdatedAt:Date.now()
  },
  {
    Name: "sweet",
    Quantity: 120,
    Size: 11,
    Price: 20,
    Category: "snack",
    CreatedAt:Date.now(),
    UpdatedAt:Date.now()
  },
  {
    Name: "Lipton",
    Quantity: 50,
    Size: 3,
    Price: 40,
    Category: "beavrage",
    CreatedAt:Date.now(),
    UpdatedAt:Date.now()
  }
];

const seedDb = async()=>{
    await items.deleteMany({})
    await items.insertMany(seedItems)
}

seedDb().then(()=>{
    console.log(`items added`);
    mongoose.connection.close()
}) 
.catch((error)=>{
    console.log(error);
})