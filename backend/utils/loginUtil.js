const db = require('../db/conn')
const {User, validate} = require('../model/userModel')

function login(email, password){
    let user = await User.findOne({email:email,password:password})
    if(user){
        body.password = undefined
        res['success'] = true
        res['message'] = "Login Successfull"
        res['status'] = 200
    }else{
        body.password = undefined
        res['success'] = false
        res['message'] = "Invalid Email and Password"
        res['status'] = 401
    }
}

function  createAccount(body){
    res = []
    let userObj = await User.findOne({
        email : body.email
    })
    if(userObj){
        res['succes'] = false;
        res['message'] = "User already exist"
        res['status'] = 400
    }else{
        let userObj = new User(body)
        await userObj.save();
        body.password = undefined
        res['success'] = true
        res['message'] = "Account Created"
        res['status'] = 201
    }
    return res;
}

function forgotPasswordSendEmail(email){

}

function resetPassword(pass){

}


module.exports = {
    createAccount,
    login,
    forgotPasswordSendEmail,
    resetPassword
}