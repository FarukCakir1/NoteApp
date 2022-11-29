const {insert, getData, loginUser} = require("../services/UsersServices")
const notesService = require("../services/NotesServices")
const categoryService = require("../services/CategoriesServices")
const { cryptedToPassword, createToken, refreshToken } = require("../utils/Helpers")
const httpStatus = require("http-status")


const create = (req, res) => {

    req.body.password = cryptedToPassword(req.body.password) 

    insert(req.body)
        .then(response => {
        res.status(200).send(response)
    })
        .catch(err => {
        console.log(err)
    })
}

const login = (req, res) => {
    req.body.password = cryptedToPassword(req.body.password)
    loginUser(req.body)
     .then(response => {
        if(!response) {
           return res.status(httpStatus.NOT_FOUND).send({message: "Bulunamadı"})
        }
        response = {
            ...response.toObject(),
            tokens: {
                access_token: createToken(response),
                refresh_token: refreshToken(response)
            }
        }
        delete response.password
        res.status(httpStatus.OK).send(response)
     })
     .catch(err => { 
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
     })
}

const read = (req, res) => {
    getData()
     .then(response => {
        res.status(200).send(response)
     })
     .catch(err => {
        console.log(err)
     })
}

const usersNotes = (req, res) => {
    if(req.query.category_name){
        notesService.getData({"category_name": req.query.category_name, "user_id": req.user._id}).then(response => {
            res.status(httpStatus.OK).send(response)
        })
        return
    }
    
    notesService.getData({"user_id" : req.user._id})
    .then(response => {
        res.status(httpStatus.OK).send(response)
    }).catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err))
}

const userCategories = (req, res) => {
    
    categoryService.getData({"user_id" : req.user._id})
    .then(response => {
        res.status(httpStatus.OK).send(response)
    })
    .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err))
}

module.exports = {
    create,
    read,
    login,
    usersNotes,
    userCategories
}