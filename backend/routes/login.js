const express = require("express");
const bycript = require('bcryptjs')
const { comparePassword, hashPassword } = require('../utils/passwordUtils');
const bcryptjs = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const pool = require("../db/db");
const router = express.Router()

let salt;
bycript.genSalt(10, (err, st) => {
    salt = st
})


router
    .post('/', async (req, res) => {
        let status, resp = []

        const { uuid, email, mobile, password } = req.body
        try {
            let user;
            if (email) {
                user = await pool.query("SELECT * FROM users WHERE email=$1", [email])
            }
            if (uuid) {
                user = await pool.query("SELECT * FROM users WHERE uuid=$1", [uuid])
            }
            if (mobile) {
                user = await pool.query("SELECT * FROM users WHERE mobile=$1", [mobile])
            }

            if (user.rowCount > 0) {
                passHashDb = user.rows[0].password_hash
                let compPass = await bycript.compare(password, passHashDb)
                if (compPass) {
                    let token = uuidv4()
                    await pool.query("INSERT INTO tokens (token,userid) VALUES ($1,$2)", [token, user.rows[0].uuid]);
                    status = 200
                    resp = {
                        status: 200,
                        message: "Logged in succesfully",
                        data: {
                            token: token
                        }
                    }
                } else {
                    status = 401
                    resp = {
                        status: 401,
                        message: "Unauthorised user",
                    }
                }
            } else {
                status = 401
                resp = {
                    status: 401,
                    message: "Invalid user",
                }
            }

        } catch (error) {
            console.log(error)
            status = 500
            resp = {
                status: 500,
                message: error.message
            }
        }

        res.status(status).send(resp)

    })
    .post('/create-account', async (req, res) => {

        const { name, email, mobile, password } = req.body
        const userId = uuidv4()
        const salt = await bycript.genSalt(10);
        const passHash = await bycript.hash(password, salt);
        let resp = []
        let status
        try {
            console.log(email)
            let user = await pool.query("SELECT * FROM users WHERE email=$1 OR mobile=$2",
                [email, mobile])
            if (user.rowCount > 0) {
                status = 409;
                resp = {
                    status: 409,
                    success: false,
                    message: "User already exist with this details"
                }
            } else {
                let uuid = uuidv4()
                let newUser = await pool.query("INSERT INTO users (uuid,email,name,mobile,password_hash) VALUES($1,$2,$3,$4,$5)",
                    [uuid, email, name, mobile, passHash])
                status = 201;
                resp = {
                    status: 201,
                    success: true,
                    message: "Signup successful",
                    data: {
                        uuid,
                        email,
                        name,
                        mobile
                    }
                }
            }

        } catch (error) {
            console.log(error);
            status = 500;
            resp = {
                status: 500,
                success: false,
                message: error.message
            }
        }


        res.status(status).send(resp)

    })

    .get('/logout', async (req, res) => {
        let status, resp = []
        let token = req.headers.authorization

        if (token == undefined) {
            status = 402
            resp = {
                status: status,
                success: false,
                message: "Invalid Request"
            }
        } else {
            try {

                let user = await pool.query("SELECT * FROM tokens WHERE token=$1", [token])
                if (user.rowCount > 0) {
                   let ucDel =  await pool.query("DELETE FROM tokens WHERE token=$1", [token])
                    if (ucDel) {
                        status = 200
                        resp = {
                            status: status,
                            success: true,
                            message: "Logged out succeccfully"
                        }
                    } else {
                        status = 402
                        resp = {
                            status: status,
                            success: false,
                            message: "You must have to login first"
                        }
                    }
                } else {
                    status = 401
                    resp = {
                        status: status,
                        success: false,
                        message: "Invalid Authorization Token"
                    }
                }
            } catch (error) {
                status = 500
                resp = {
                    status: status,
                    success: true,
                    message: error.message
                }
            }
        }


        res.status(status).send(resp)
    })


module.exports = router