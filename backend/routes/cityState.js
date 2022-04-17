const express = require("express");
const { required } = require("joi");
const pool = require("../db/db")
const checkAuthorization = require('../utils/checkHeaders')
const { get, insert, dlt, update } = require('../utils/crud')
const router = express.Router()

router
    .get('/state', async (req, res) => {
        let status, resp = []
        let loginStatus = await checkAuthorization(req.headers.authorization)
        if (!loginStatus) {
            status = 401
            resp = {
                message: "Unauthorized",
                status: status,
                success: false
            }
        } else {
            const states = await get("SELECT * FROM states")
            status = 200,
                resp = {
                    message: "Successfull",
                    status,
                    success: true,
                    data: states

                }
        }
        res.status(status).send(resp)
    })
    .get('/state/:state_id', async (req, res) => {
        let status, resp = []
        let loginStatus = await checkAuthorization(req.headers.authorization)
        if (!loginStatus) {
            status = 401
            resp = {
                message: "Unauthorized",
                status: status,
                success: false
            }
        } else {
            const cities = await get("SELECT * FROM states WHERE state_id=$1", [req.params.state_id], true)
            status = 200,
                resp = {
                    message: "Successfull",
                    status,
                    success: true,
                    data: cities

                }
        }
        res.status(status).send(resp)
    })

    .get('/state/name/:state_name', async (req, res) => {
        let status, resp = []
        let loginStatus = await checkAuthorization(req.headers.authorization)
        if (!loginStatus) {
            status = 401
            resp = {
                message: "Unauthorized",
                status: status,
                success: false
            }
        } else {
            console.log(req.params.state_name);
            const cities = await get("SELECT * FROM states WHERE state_name=$1", [req.params.state_name], true)
            status = 200,
                resp = {
                    message: "Successfull",
                    status,
                    success: true,
                    data: cities

                }
        }
        res.status(status).send(resp)
    })

    .put('/state/:state_id', async (req, res) => {
        let status, resp = []
        let loginStatus = await checkAuthorization(req.headers.authorization)
        if (!loginStatus) {
            status = 401
            resp = {
                message: "Unauthorized",
                status: status,
                success: false
            }
        } else {
            const { state_name } = req.body
            const citiesUp = await update("UPDATE states SET state_name=$1 WHERE state_id=$2", [state_name, req.params.state_id])
            if (citiesUp) {
                status = 202,
                    resp = {
                        message: "Successfull",
                        status,
                        success: true,
                        data: [
                            {
                                state_id: req.params.state_id,
                                state_name
                            }
                        ]

                    }
            } else {
                status = 406,
                resp = {
                    message: "Update failed",
                    status,
                    success: false

                }
            }
        }
        res.status(status).send(resp)
    })

    .delete('/state/:state_id', async (req, res) => {
        let status, resp = []
        let loginStatus = await checkAuthorization(req.headers.authorization)
        if (!loginStatus) {
            status = 401
            resp = {
                message: "Unauthorized",
                status: status,
                success: false
            }
        } else {
            const citiesDl = await dlt("DELETE FROM states WHERE state_id=$1", [req.params.state_id])
            console.log(citiesDl);
            if(citiesDl){
                status = 200,
                resp = {
                    message: "Deleted!",
                    status,
                    success: citiesDl

                }
            }else{
                status = 400,
                resp = {
                    message: "Failed to delete",
                    status,
                    success: citiesDl

                }
            }
            
        }
        res.status(status).send(resp)
    })

    .post('/state', async (req, res) => {
        let status, resp = []
        let loginStatus = await checkAuthorization(req.headers.authorization)
        if (!loginStatus) {
            status = 401
            resp = {
                message: "Unauthorized",
                status: status,
                success: false
            }
        } else {
            const { state_name } = req.body
            const state = await get("INSERT INTO states (state_name) VALUES($1)", [state_name])
            if (state) {
                status = 201,
                    resp = {
                        message: "State added",
                        status,
                        success: true,
                        data: [
                            state_name
                        ]
                    }
            } else {
                status = 203,
                    resp = {
                        message: "Could not add state",
                        status,
                        success: false

                    }
            }
        }
        res.status(status).send(resp)
    })

    .get('/city', async (req, res) => {
        let status, resp = []
        let loginStatus = await checkAuthorization(req.headers.authorization)
        if (!loginStatus) {
            status = 401
            resp = {
                message: "Unauthorized",
                status: status,
                success: false
            }
        } else {
            const cities = await get("SELECT * FROM cities")
            status = 200,
                resp = {
                    message: "Successfull",
                    status,
                    success: true,
                    data: cities

                }
        }
        res.status(status).send(resp)
    })

    .post('/city', async (req, res) => {
        let status, resp = []
        let loginStatus = await checkAuthorization(req.headers.authorization)
        if (!loginStatus) {
            status = 401
            resp = {
                message: "Unauthorized",
                status: status,
                success: false
            }
        } else {
            const { city_name, state_id } = req.body
            const cities =await insert("INSERT INTO cities (city_name, state_id) VALUES($1,$2)", [city_name, state_id])
            console.log(cities);
            if (!cities) {
                status = 203
                resp = {
                    message: "Could not add city",
                    status,
                    success: false

                }
            } else {
                status = 201
                resp = {
                    message: "City added",
                    status,
                    success: true,
                    data: [
                        city_name
                    ]
                }
                
            }
        }
        res.status(status).send(resp)
    })

    .get('/city/:city_id', async (req, res) => {
        let status, resp = []
        let loginStatus = await checkAuthorization(req.headers.authorization)
        if (!loginStatus) {
            status = 401
            resp = {
                message: "Unauthorized",
                status: status,
                success: false
            }
        } else {
            const cities =await get("SELECT * FROM cities WHERE city_id=$1", [req.params.city_id])
            status = 200,
                resp = {
                    message: "Successfull",
                    status,
                    success: true,
                    data: cities

                }
        }
        res.status(status).send(resp)
    })

    .get('/city/name/:city_name', async (req, res) => {
        let status, resp = []
        let loginStatus = await checkAuthorization(req.headers.authorization)
        if (!loginStatus) {
            status = 401
            resp = {
                message: "Unauthorized",
                status: status,
                success: false
            }
        } else {
            const cities =await get("SELECT * FROM cities WHERE city_name=$1", [req.params.city_name])
            status = 200,
                resp = {
                    message: "Successfull",
                    status,
                    success: true,
                    data: cities

                }
        }
        res.status(status).send(resp)
    })

    .put('/city/:city_id', async (req, res) => {
        let status, resp = []
        let loginStatus = await checkAuthorization(req.headers.authorization)
        if (!loginStatus) {
            status = 401
            resp = {
                message: "Unauthorized",
                status: status,
                success: false
            }
        } else {
            const cities = await update("UPDATE cities SET city_name=$1 WHERE city_id=$2", [req.body.city_name, req.params.city_id])
            if(cities){
                status = 200,
                resp = {
                    message: "Successfull",
                    status,
                    success: cities

                }
            }else{
                status = 403,
                resp = {
                    message: "Update failed",
                    status,
                    success: cities

                }
            }

        }
        res.status(status).send(resp)
    })

    .delete('/city/:city_id', async (req, res) => {
        let status, resp = []
        let loginStatus = await checkAuthorization(req.headers.authorization)
        if (!loginStatus) {
            status = 401
            resp = {
                message: "Unauthorized",
                status: status,
                success: false
            }
        } else {
            const cities = await dlt("DELETE FROM cities WHERE city_id=$1", [req.params.city_id])
            if(cities){
                status = 200,
                resp = {
                    message: "Deleted",
                    status,
                    success: cities

                }
            }else{
                status = 402,
                resp = {
                    message: "Delete Failed",
                    status,
                    success:cities

                }
            }
            
        }
        res.status(status).send(resp)
    })



module.exports = router