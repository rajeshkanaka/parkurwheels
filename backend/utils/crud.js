const pool = require("../db/db")

async function get(query,options, single=false){
try {
    let obj = await pool.query(query,options);
    if(obj.rowCount>0){
        return single?[obj.rows[0]]:obj.rows
    }else{
        return [{}]
    }
    
} catch (error) {
    return error
}

}

async function insert(query,options){
    try {
        let cities = await pool.query(query,options);
        if(cities.rowCount>0){
            return true
        }else{
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function dlt(query,options){
    try {
        let obj = await pool.query(query,options);
    if(obj.rowCount==0){
        return false;
    }else{
        return true;
    }
    } catch (error) {
        return false;
    }
         
 }

 async function update(query,options){
     try {
        const up = await pool.query(query,options)
        console.log(up);
        if(up.rowCount<=0){
            return false;
        }else{
            return true;
        }
     } catch (error) {
         console.log(error);
         return false;
     }

   
 }


 module.exports = {get, insert, dlt, update}