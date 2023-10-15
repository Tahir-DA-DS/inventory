const joi = require('joi')

const checkSignup = async(req, res, next)=>{
    try{
        const schema = joi.object({
            Name:joi.string(),
            email:joi.string(),
            password:joi.string(),
            role:joi.string().valid('reader', 'admin')
    
        })

        await schema.validateAsync(req.body, { abortEarly: true })
    
        next()
    } catch(error){
        return res.status(422).json({
            message: error.message,
            success: false
        })

    }
   
}


const validateLogin = async (req, res, next) => {
    try {
        const schema = joi.object({
            email: joi.string().email().required(),
            password:joi.string().required.max(6),
            
        })

        await schema.validateAsync(req.body, { abortEarly: true })
    
        next()
    } catch (error) {
        return res.status(422).json({
            message: error.message,
            success: false
        })
    }
}

module.exports = {checkSignup, validateLogin}