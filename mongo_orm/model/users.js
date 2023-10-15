const mongoose = require('mongoose')
const shortid = require('shortid');
const bcrypt = require('bcrypt')

const schema = mongoose.Schema

const userSchema = new schema({
    _id:{type:String, default:shortid.generate},
    Name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true, max:6},
    role:{type:String, required:true}
})

userSchema.pre('save', async function (next) {
    const encryptedPass = await bcrypt.hash(this.password, 10);
  
    this.password = encryptedPass;
    next();
  })


  userSchema.methods.isValidPassword  = async function(password) {
    const compare = await bcrypt.compare(password, this.password);
  
    return compare;
  }


module.exports = mongoose.model('user', userSchema)