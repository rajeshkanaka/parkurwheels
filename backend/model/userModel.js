const mongoose = require("mongoose");
const joi = require("joi")


mongoose.model("User", new mongoose.Schema(
    {
        name :  {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50
        },
        email :{
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50
        },
        password :{
            type: String,
            required: true,
            minlength: 50,
            maxlength: 256
        },
        mobile : {
            type:Number,
            required:true,
            minlength:10,
            maxlength:13
        }
    }
))
function validateUser(user) {
    const schema = {
      name: Joi.string()
        .min(3)
        .required(),
      email: Joi.string()
        .min(3)
        .required()
    };
    return Joi.validate(user, schema);
  }

exports.User = User;
exports.validate = validateUser;