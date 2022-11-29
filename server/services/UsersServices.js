const userModel = require("../models/UsersModel")

const insert = (data) => {
    const newUser = new userModel(data)
    

    return newUser.save()
}

const loginUser = (loginData) => {
    return userModel.findOne(loginData);
}

const getData = () => {
    return userModel.find({})
}


module.exports = {
    insert,
    getData,
    loginUser
}