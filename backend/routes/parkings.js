const express = require("express");
const { required } = require("joi");
const pool = require("../db/db")
const router = express.Router()


router
.get('/', async (req,res)=>{
    let resp = []
    let status;
    try {
        const token = req.headers.authorization
        const user = await pool.query("SELECT userid FROM tokens WHERE token=$1",[token])
        if(user.rowCount<=0){
            status = 401
            resp = {
                message : "Unauthorized",
                status : status,
                success:false
            }
        }else{
            status = 200
            resp = {
                message : "Request executed",
                status : status,
                success:true,
                data : []
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
.post('/park',(req,res)=>{

})
.post('/checkout',(req,res)=>{

})


module.exports = router