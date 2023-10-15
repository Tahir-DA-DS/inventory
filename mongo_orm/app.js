const express = require("express")
const app = express()
const PORT = process.env.PORT||3001
const  {mongoDatabase} = require('./db')
const itemrout = require('./routes/item.route')
const useroute = require('./routes/users.route')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/', (req, res)=>{
    res.send('welcome to my app homepage')
})

app.use('/users', useroute)
app.use('/items', itemrout)

try {
mongoDatabase()
app.listen(PORT, ()=>{console.log(`app started on port ${PORT}`)}) 
} catch (error) {
    console.log(error);
}