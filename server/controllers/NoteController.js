const httpStatus = require("http-status")
const {insert, getData, deleteData} = require("../services/NotesServices")

const create = (req,res) => {
    req.body.user_id = req.user
    insert(req.body)
     .then(response => {
        res.status(200).send(response)
     })
     .catch(err => console.log(err))
}

const read = (req, res) => {
    if(req.query._id){
        getData({"_id": req.query._id})
        .then(response => res.status(httpStatus.OK).send(response))
        .catch(err => console.log(err))
        return
    }
    getData()
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => console.log(err))
}

const remove = (req, res) => {
    const {id} = req.params
    deleteData(id)
        .then(response => res.status(200).send(response))
        .catch(err => console.log(err))
}




module.exports = {
    create,
    read,
    remove
}