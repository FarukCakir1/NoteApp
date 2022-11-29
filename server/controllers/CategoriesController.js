const { insert, getData, deleteData } = require("../services/CategoriesServices")
const httpstatus = require("http-status")

const read = (req, res) => {
    getData()
    .then(resp => {
        res.status(httpstatus.OK).send(resp)
    })
    .catch(err => res.status(httpstatus.INTERNAL_SERVER_ERROR).send(err))
}

const create = (req, res) => {
    req.body.user_id = req.user
    insert(req.body)
    .then(response => {
        res.status(httpstatus.OK).send(response)
    })
    .catch(err => res.status(httpstatus.INTERNAL_SERVER_ERROR).send(err)) 
}





module.exports = {
    read,
    create
}