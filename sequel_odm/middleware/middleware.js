const userdb = require("../models");
const userModel = userdb.user;
const bcrypt = require("bcrypt")



const roleCheck = async (req, res, next) => {
    const _id =req.params.id 
    try {
        const user = userModel.findOne({where:{id:_id}})
        if(user.role='admin'){
            next()
        }else{
            res.status(403).json({ message: "Permission denied." })
        }
    } catch (error) {
        
    }
  }

  module.exports={
    roleCheck
  }