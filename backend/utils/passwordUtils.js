const bycript = require("bcryptjs")
let salt, hash, password

bycript.genSalt(10,(err,s)=>{
 salt = s
})

function hashPassword(normalPass){
    bycript.hash(normalPass, salt,(err, h)=>{
        if(!err){
            hash = h
        }
        hash = err
    })
    return hash
}

function comparePassword(normalPass, hash){
    bycript.compare(normalPass, hash,(err,success)=>{
        return success
    })
}

module.exports = {hashPassword,comparePassword}