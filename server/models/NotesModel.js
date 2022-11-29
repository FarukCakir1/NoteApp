const mongoose = require("mongoose")
const logger = require("../loggers/NotesLogger")

const schema = new mongoose.Schema({
    title: String,
    content: String,
    category_name: String,
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    }
}, {versionKey: false, timestamps: true})



schema.post("save", (obj) => {
    logger.log({
        level: "info",
        message: `${obj.title} Eklendi id: ${obj.id}`
    })
})

const NoteModel = mongoose.model("Note", schema)

module.exports = NoteModel