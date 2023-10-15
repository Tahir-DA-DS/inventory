const mongoose = require("mongoose")
const shortid = require('shortid');
const schema = mongoose.Schema
const itemSchema = new schema({
    _id:{type:String, default:shortid.generate},
    Name: {type:String, required:true},
    Quantity:{type:Number},
    Size:{type:Number},
    Price:{type:Number, min:0},
    Category:{type:String, lowercase:true},
    CreatedAt:{type:Date},
    UpdatedAt:{type:Date}
})

module.exports= mongoose.model('item', itemSchema)