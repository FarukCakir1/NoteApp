const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    name: String,
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    }
},{
    versionKey: false
})



const categoryModel = mongoose.model("category", schema)


module.exports = categoryModel