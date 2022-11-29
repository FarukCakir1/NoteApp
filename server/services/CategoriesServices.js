const categoryModel = require("../models/CategoriesModel");


const insert = (data) => {

    const newCategory = new categoryModel(data)

    return newCategory.save()
}

const getData = (filter) => {
   return categoryModel.find(filter || {})
}

const deleteData = (id) => {
    return categoryModel.findByIdAndDelete(id)
}


module.exports = {
    insert,
    getData,
    deleteData
}