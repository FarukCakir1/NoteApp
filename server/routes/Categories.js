const express = require("express")
const router = express.Router()
const auth = require("../middlewares/authenticate")



const { read, create } = require("../controllers/CategoriesController")

// get
router
.route("/")
.get(auth, read)
// post
router
.route("/")
.post(auth ,create)

//delete.....


module.exports = router