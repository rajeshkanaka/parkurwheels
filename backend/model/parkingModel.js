const { Decimal128 } = require("mongodb")
const { default: mongoose } = require("mongoose")
const db = require("../db/conn")

let Parking = mongoose.model("Parking", new mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    name : {
        type:String,
        minlength:15,
        maxlength:100,
        required:true,
    },
    city:{
        type:String,
        required:true,
        minlength:5,
        maxlength:15
    },
    location:{
        type: String,
        required: true
    },
    lat:{
        type:Decimal128,
        required:true
    },
    lon:{
        type:Decimal128,
        required:true
    }

}))

const Car = mongoose.model("Car", new mongoose.Schema({
    regno:{
        type:String,
        required:true,
        
    }
}))

module.exports = {Parking}