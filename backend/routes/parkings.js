const express = require("express");
const { required } = require("joi");
const pool = require("../db/db")
const checkAuthorization = require('../utils/checkHeaders')
const { get, insert, dlt, update } = require('../utils/crud')
const router = express.Router()


router
    .get('/', async (req, res) => {
        let resp = []
        let status;
        let loginStatus = await checkAuthorization(req.headers.authorization)
        try {
            if (!loginStatus) {
                status = 401
                resp = {
                    message: "Unauthorized",
                    status: status,
                    success: false
                }
            } else {
                const parkingLots = await pool.query("SELECT * FROM parking_lot JOIN cities ON parking_lot.city_id=cities.city_id JOIN states ON parking_lot.state_id=states.state_id");
                status = 200
                resp = {
                    message: "Request executed",
                    status: status,
                    success: true,
                    data: parkingLots.rows
                }
            }


        } catch (error) {
            resp = { "message": error.message, "status": 400, "success": false, "data": [error.message] }
        }
        res.status(status).send(resp)
    })
    .get('/search', async (req, res) => {
        let status, resp = []
        const loginStatus = await checkAuthorization(req.headers.authorization);
        if (!loginStatus) {
            status = 401
            resp = {
                status,
                message: "Unauthoried",
                success: loginStatus
            }

        } else {
            let sql = `
        SELECT * FROM parking_lot JOIN states ON parking_lot.state_id=states.state_id 
        JOIN cities ON parking_lot.city_id=cities.city_id WHERE parking_lot.lot_name 
        LIKE $1 OR parking_lot.lot_address LIKE $1 OR cities.city_name LIKE $1
        OR states.state_name LIKE $1
        `
            const query = "%" + req.body.query + "%"
            let data = await get(sql, [query]);
            status = 200
            resp = {
                status,
                message: "Success",
                data
            }
        }

        res.status(status).send(resp)

    })
    .get('/:pid', async (req, res) => {
        let status, resp = []
        const loginStatus = await checkAuthorization(req.headers.authorization);
        if (!loginStatus) {
            status = 401
            resp = {
                status,
                message: "Unauthoried",
                success: loginStatus
            }

        } else {

            const sql = `
        SELECT 
        lot_id, lot_name, lot_address, lot_phone, lot_capacity, lot_emptylots, lot_fulllots, states.state_id, state_name,cities.city_id,city_name
        FROM parking_lot 
        JOIN states ON parking_lot.state_id=states.state_id
        JOIN cities ON parking_lot.city_id=cities.city_id
        WHERE lot_id=$1
        `
            const data = await get(sql, [req.params.pid], true)
            status = 200
            resp = {
                status,
                success: true,
                message: "success",
                data
            }
        }
        res.status(status).send(resp)
    })
    .post('/', async (req, res) => {
        let resp = []
        let status;
        const loginStatus = await checkAuthorization(req.headers.authorization)
        if (!loginStatus) {
            status = 401
            resp = {
                status,
                message: "Unauthoried",
                success: loginStatus
            }

        } else {
            const { lot_name, lot_address, lot_phone, lot_capacity, lot_emptylots, lot_fulllots, city_id, state_id } = req.body;
            const sql = `
        INSERT INTO parking_lot(lot_name, lot_address, lot_phone, lot_capacity, lot_emptylots, lot_fulllots, city_id, state_id)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
        `
            let dins = await insert(sql, [lot_name, lot_address, lot_phone, lot_capacity, lot_emptylots, lot_fulllots, city_id, state_id])
            if (dins) {
                status = 401
                resp = {
                    status,
                    message: "Inserted",
                    success: dins,
                    data: {
                        lot_name,
                        lot_address,
                        lot_phone,
                        lot_capacity,
                        lot_emptylots,
                        lot_fulllots,
                        city_id,
                        state_id
                    }
                }
            } else {
                status = 403
                resp = {
                    status,
                    message: "Unable to insert",
                    success: dins
                }
            }
            res.status(status).send(resp)
        }



    })
    .put('/:pid', async (req, res) => {
        let resp = []
        let status;
        const loginStatus = await checkAuthorization(req.headers.authorization)
        if (!loginStatus) {
            status = 401
            resp = {
                status,
                message: "Unauthoried",
                success: loginStatus
            }

        } else {
            const { lot_name, lot_address, lot_phone, lot_capacity, lot_emptylots, lot_fulllots, city_id, state_id } = req.body;
            const p = await get("SELECT * FROM parking_lot WHERE lot_id=$1", [req.params.pid]);
            const plot = p[0]
            if (Object.keys(plot).length > 0) {
                let obj = [
                    (lot_name == undefined) ? plot.lot_name : lot_name,
                    (lot_address == undefined) ? plot.lot_address : lot_address,
                    (lot_phone == undefined) ? plot.lot_phone : lot_phone,
                    (lot_capacity == undefined) ? plot.lot_capacity : lot_capacity,
                    (lot_emptylots == undefined) ? plot.lot_emptylots : lot_emptylots,
                    (lot_fulllots == undefined) ? plot.lot_fulllots : lot_fulllots,
                    (city_id == undefined) ? plot.city_id : city_id,
                    (state_id == undefined) ? plot.state_id : state_id
                ]
                console.log(obj);
                let sql = `UPDATE parking_lot SET lot_name=$1, lot_address=$2, lot_phone=$3, lot_capacity=$4, lot_emptylots=$5,
                    lot_fulllots=$6, city_id=$7, state_id=$8`;
                const data = await update(sql, obj)
                if (data) {
                    status = 202,
                        resp = {
                            status,
                            message: "Updated",
                            success: data,
                            data: req.body
                        }
                } else {
                    status = 403,
                        resp = {
                            status,
                            message: "failed to update",
                            success: data
                        }
                }
            } else {
                status = 404,
                    resp = {
                        status,
                        message: "No parking lot found with the id",
                        success: data
                    }
            }
        }

        res.status(status).send(resp)
    })

    .delete('/:pid', async (req, res) => {
        let resp = []
        let status;
        const loginStatus = await checkAuthorization(req.headers.authorization)
        if (!loginStatus) {
            status = 401
            resp = {
                status,
                message: "Unauthoried",
                success: loginStatus
            }

        } else {
            const p = await get("SELECT * FROM parking_lot WHERE lot_id=$1", [req.params.pid]);
            const plot = p[0]
            if (Object.keys(plot).length > 0) {
                const delt = await dlt("DELETE FROM parking_lot WHERE lot_id=$1",[req.params.pid])
                if(delt){
                    status = 202
                    resp = {
                        status,
                        message : "Deleted",
                        success:delt
                    }
                }else{
                    status = 400
                    resp = {
                        status,
                        message : "Something went wrong",
                        success:delt
                    }
                }
                
            }else{
                status = 404
                resp = {
                    status,
                    message : "Parking lot not found",
                    success:false
                }
            }
        }
        res.status(status).send(resp)
    })


module.exports = router