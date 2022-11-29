const mongoose = require("mongoose")


const schema = new mongoose.Schema(
    {
        fullname: String,
        password: String,
        email: String,
        profilePic: String
    }, 
    {
        versionKey: false,
        timestamps: true
    }
)


const userModel = mongoose.model("user", schema)


module.exports = userModel