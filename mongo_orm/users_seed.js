const mongoose = require('mongoose')
const { mongoDatabase } = require("./db");
require("dotenv").config();

const user = require('./model/users')

mongoDatabase();

const seedUsers = [
    {
        Name:'Williams',
        email:'willi@gmail.com',
        password:'12will',
        role:'admin'
    },

    {
        Name:'Bill',
        email:'bill@sky.com',
        password:'12bill',
        role:'user'
    },

    {
        Name:'Osimehen',
        email:'vicosi@nap.com',
        password:'vic123',
        role:'user'
    }
]

const seedDb = async()=>{
    await user.deleteMany({})
    await user.insertMany(seedUsers)
}

seedDb().then(()=>{
    console.log(`dummy users added`);
    mongoose.connection.close()
}) 
.catch((error)=>{
    console.log(error);
})