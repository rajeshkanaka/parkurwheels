const pool = require("../db/db")

async function checkAuthorization(token){
        const user = await pool.query("SELECT userid FROM tokens WHERE token=$1",[token])
        if(user.rowCount<=0){
           return false;
        }else{
            return true;
        }
    }

module.exports = checkAuthorization 