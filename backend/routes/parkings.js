const express = require("express");
const { required } = require("joi");
const pool = require("../db/db")
const checkAuthorization = require('../utils/checkHeaders')
const {get,insert,dlt,update} = require('../utils/crud')
const router = express.Router()


router
.get('/', async (req,res)=>{
    let resp = []
    let status;
    let loginStatus = await checkAuthorization(req.headers.authorization)
    try {
        if(!loginStatus){
            status = 401
            resp = {
                message : "Unauthorized",
                status : status,
                success:false
            }
        }else{
            const parkingLots = await pool.query("SELECT * FROM parking_lot JOIN cities ON parking_lot.city_id=cities.city_id JOIN states ON parking_lot.state_id=states.state_id");
            status = 200
            resp = {
                message : "Request executed",
                status : status,
                success:true,
                data : parkingLots.rows
            }
        }

        
    } catch (error) {
        resp = {"message":error.message,"status":400, "success":false, "data":[error.message]}
    }
    res.status(status).send(resp)
})
.get('/:pid', (req,res)=>{
    res.status(200).send({"message":"Request Executed","status":200, "success":true, "data":[{"id":1,"name":"Inzamul"}]})
})
.post('/', async(req,res)=>{
    let resp = []
    let status;
    const loginStatus = await checkAuthorization(req.headers.authorization)
    const {lot_name, lot_address, lot_phone, lot_capacity, lot_emptylots,lot_fulllots, city_id,sate_id} = req.body;
    let parkingObj = get("SELECT * FROM parking_lot WHERE lot_phone=$1 OR lot_name=$2",[lot_phone,lot_name],true)
    console.log(parkingObj);



})
.post('/checkout',(req,res)=>{

})


module.exports = router