const NoteModel = require("../models/NotesModel")


const insert = (data) => {
    const newNote = new NoteModel(data)

    return newNote.save()
}

const getData = (filter) => {
    return NoteModel.find(filter || {}).populate({
        path: "user_id",
        select: "fullname email"
    })
}

const deleteData = (_id) => {
    return NoteModel.findByIdAndDelete(_id)
}


module.exports = {
    insert,
    getData,
    deleteData
}